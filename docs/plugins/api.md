# API reference

Generated from `@arkenda/kit/plugin-api` (to be published as `@arkenda/plugin-api`) and its JSDoc.
API version 1.0: `ctx.apiVersion` is `1`, `ctx.apiMinor` is `0`.

- **Every `ctx` call is asynchronous** and answered only when the manifest declares its permission,
  the user granted it, and any contribution id is declared. A refused call rejects with an error
  whose `code` says why ([error codes](sandbox.md#what-is-refused-and-why)).
- **Registrations return a handle** (`Disposable`, or `SandboxViewHandle` for views); everything is
  disposed anyway when the plugin is turned off.

## The plugin context (`ctx`)

What `activate(ctx)` receives in the sandbox (`SandboxPluginContext`), one section per area. The
text of each area names the permission it needs.

<!-- generated:api-context -->

### `ctx.apiVersion`

```ts
apiVersion: 1;
```

### `ctx.apiMinor`

The additions this host supports (`PLUGIN_API_MINOR`).

```ts
apiMinor: number;
```

### `ctx.manifest`

```ts
readonly id: string;
readonly name: string;
readonly version: string;
readonly permissions: readonly string[];
```

### `ctx.commands`

`commands` — a command's title and default hotkey come from `contributes.commands` (the hotkey
is bound only when free and not reserved; the app's and the user's keys win).

```ts
register(command: { readonly id: string; run(): void | Promise<void> }): Promise<Disposable>;
```

### `ctx.editor`

`registerInsertItem` and `registerToolbarItem` need `editor` and take their titles from `contributes.insertItems` / `contributes.toolbarItems`.
Data only: text up to 4 KB, an icon of `PLUGIN_EDITOR_ICONS`, or one of this plugin's commands;
an insert item may also name its group (`PLUGIN_INSERT_GROUPS`), search keywords and a `detail`
shown next to its title in the `/` menu.

```ts
registerInsertItem(item: {
  readonly id: string;
  /** At most 120 characters. */
  readonly detail?: string;
  readonly text: string;
  readonly cursor?: number;
  readonly icon?: PluginEditorIcon;
  /** The insert menus' group; `plugins` when not given. */
  readonly group?: PluginInsertGroup;
  /** Up to 8 extra filter words of at most 32 characters. */
  readonly keywords?: readonly string[];
}): Promise<Disposable>;
registerToolbarItem(
  item: { readonly id: string; readonly icon: PluginEditorIcon } & (
    | { readonly text: string; readonly cursor?: number }
    | { readonly command: string }
  ),
): Promise<Disposable>;
```

### `ctx.appearance`

`ui:themes` — a theme of token values only (`THEME_TOKENS`: colours, quoted font stacks, radii,
line heights), its label from `contributes.themes`. No CSS: anything outside the token grammar,
or text below 4.5:1 on the background, is refused with `invalid-params`.

```ts
registerTheme(theme: {
  readonly id: string;
  readonly mode: PluginThemeMode;
  readonly tokens: ThemeTokens;
  readonly darkTokens?: ThemeTokens;
}): Promise<Disposable>;
```

### `ctx.markdown`

`markdown` — renders fenced code blocks of the language `id` (```` ```<id> ````). The returned
HTML is sanitized and hardened by the app (no scripts, styles, frames, forms or remote images).

```ts
registerCodeBlock(block: {
  readonly id: string;
  render(source: string): string | Promise<string>;
}): Promise<Disposable>;
```

### `ctx.views`

`ui:panels`. `icon` sets its tab icon, `places` (distinct `left`, `right`, `status`) where people
may move it and `defaultPlace` (one of them) where it shows by default; the manifest's
`contributes.sidebarPanels` values win when it declares them. Anything else (an icon outside
`PLUGIN_PANEL_ICONS`, say) is refused with `invalid-params`.

```ts
registerSidebarPanel(
  panel: SandboxViewRegistration & {
    readonly icon?: PluginPanelIcon;
    readonly places?: readonly PluginToolPlace[];
    readonly defaultPlace?: PluginToolPlace;
  },
): Promise<SandboxViewHandle>;
```

### `ctx.settings`

`registerTab` needs `ui:panels`; `registerFields` and `values` need `storage` (the values are
kept there). Fields are rendered by the app; `onChange` gets the values after every change.
A settings schema too (groups, more types, scopes, migrations). A sandboxed plugin reads
only its own values, never secrets (a secret field is entered and kept by the app alone).

```ts
registerTab(tab: SandboxViewRegistration): Promise<SandboxViewHandle>;
registerFields(
  schema: PluginSettingsSchemaInput,
  onChange?: (values: PluginSettingValues) => void,
): Promise<Disposable>;
values(): Promise<PluginSettingValues>;
/**
 * Changes one of its own settings, checked as if the user entered it (an unknown key, a
 * secret or a refused value is refused with `invalid-params`); `onChange` follows.
 */
set(key: string, value: PluginSettingValue): Promise<void>;
```

### `ctx.permissions`

No permission needed: what the user granted it on this device right now (it can change
at any time): the granted permissions, the approved hosts, and whether it sees every note, only
chosen notebooks and tags, or none. A plugin keeps working without its optional permissions.

```ts
granted(): Promise<{
  readonly permissions: readonly string[];
  readonly hosts: readonly string[];
  readonly notes: 'all' | 'chosen' | 'none';
}>;
```

### `ctx.dashboard`

`ui:widgets`

```ts
registerWidget(
  widget: SandboxViewRegistration & {
    readonly defaultSize?: { readonly w: number; readonly h: number };
    readonly minSize?: { readonly w: number; readonly h: number };
    /** What it is about (`notes`, `tasks`, `time`, `focus`, `insights`, `other`). */
    readonly category?: PluginWidgetCategory;
    /** Distinct `dashboard` and `aside` (the Widgets panel) values; the dashboard without it. */
    readonly places?: readonly PluginWidgetPlace[];
    /** One of `places`. */
    readonly defaultPlace?: PluginWidgetPlace;
  },
): Promise<SandboxViewHandle>;
```

### `ctx.storage`

`storage` — this plugin's own keys, synced with the vault.

```ts
get(key: string): Promise<JsonValue | null>;
set(key: string, value: JsonValue): Promise<void>;
delete(key: string): Promise<void>;
```

### `ctx.notes`

`notes:read` (queries, `onChange`) and `notes:write` (`create`, `update`, `trash`). Limited to
chosen notebooks or tags, a new note goes to the first chosen notebook (else gets the first tag).

```ts
recent(limit: number): Promise<readonly Omit<SandboxNote, 'body'>[]>;
pinned(): Promise<readonly Omit<SandboxNote, 'body'>[]>;
get(noteId: string): Promise<SandboxNote | null>;
/**
 * Full-text search, best first: `query` of at most 500 characters, `limit` 1–50 hits (20 by
 * default). No hits until the app's search index is loaded.
 */
search(
  query: string,
  options?: { readonly limit?: number },
): Promise<
  readonly { readonly id: string; readonly score: number; readonly title: string; readonly snippet?: string }[]
>;
onChange(listener: () => void): Promise<Disposable>;
create(input: { readonly title?: string; readonly body?: string }): Promise<SandboxNote>;
update(noteId: string, changes: { readonly title?: string; readonly body?: string }): Promise<SandboxNote>;
trash(noteId: string): Promise<void>;
```

### `ctx.knowledge`

`notes:read`

```ts
backlinks(noteId: string): Promise<readonly JsonValue[]>;
resolveLink(target: string): Promise<JsonValue>;
tagCounts(): Promise<readonly { readonly tag: string; readonly count: number }[]>;
outgoing(noteId: string): Promise<readonly JsonValue[]>;
allLinks(): Promise<readonly JsonValue[]>;
tasks(query?: {
  readonly checked?: boolean;
  /** A date (`YYYY-MM-DD`, optionally with a time) or ms since the epoch; inclusive. */
  readonly dueFrom?: string | number;
  readonly dueTo?: string | number;
  readonly tag?: string;
  readonly noteId?: string;
}): Promise<readonly JsonValue[]>;
byType(type: string): Promise<readonly JsonValue[]>;
inRange(
  from: string | number,
  to: string | number,
): Promise<{ readonly notes: readonly JsonValue[]; readonly tasks: readonly JsonValue[] }>;
resolveBlock(target: string, block: string, noteId?: string): Promise<JsonValue>;
```

### `ctx.workspace`

`notes:read`

```ts
activeNote(): Promise<{ readonly noteId: string; readonly text: string } | null>;
openNote(noteId: string): Promise<boolean>;
openTag(tag: string): Promise<boolean>;
```

### `ctx.clipboard`

`clipboard` — only right after the user runs one of the plugin's commands or presses its button.

```ts
readText(): Promise<string>;
writeText(text: string): Promise<void>;
```

### `ctx.sync`

`sync` (API 1.1; check `ctx.apiMinor >= 1`), for plugins of the `syncing` category: offers a sync
source declared in `contributes.syncSources` (its title comes from there). The user adds it per
vault in Settings ▸ Sync & devices, and pauses or removes it there; the app then calls `onControl`
with `start`, `stop`, `sync` (one pass: "Sync now", the app opened or came back) or `remove`
(forget what you kept for this vault). On phones, sync only on `start` and `sync`: nothing runs in
the background. The source contacts only the manifest's `network.hosts` the user approved, and
reads or changes notes only through `notes` and its scope: registering it grants nothing. Control
calls stop at once when the user revokes `sync`. Present only when the manifest declares `sync`.

```ts
registerSource(source: {
  readonly id: string;
  /** What it needs from the user, shown before it is added: `account`, `keys`, `folder`. */
  readonly needs?: readonly PluginSyncSourceNeed[];
  onControl(action: PluginSyncSourceAction): void | Promise<void>;
}): Promise<{
  /** Shown under the source: `idle`, `syncing` or `error`, a line of at most 160 characters, the last pass. */
  setStatus(status: {
    readonly state: PluginSyncSourceState;
    readonly detail?: string;
    readonly lastSyncAt?: number;
  }): Promise<void>;
  dispose(): void;
}>;
```

### `ctx.notifications`

`notifications` — shown in the status bar; same user-action rule as the clipboard.

```ts
show(notification: { readonly title: string; readonly body?: string }): Promise<void>;
```

### `ctx.network`

`network` — a GET the app makes for the plugin, only to a host of `network.hosts` the user
approved (`host-not-allowed` otherwise; `network-not-available` while none is). Desktop app only:
on the web and phones it always answers `network-not-available`. https only, no cookies or
credentials, redirects re-checked, no private or local address, 5 s and 256 KB at most. Fails
with `network-failed`.

```ts
fetch(url: string): Promise<{
  readonly status: number;
  readonly contentType: string | null;
  /** The body as UTF-8 text. */
  readonly body: string;
  /** The link that answered, after redirects. */
  readonly url: string;
}>;
```

<!-- /generated:api-context -->

## Exports

Types, constants and checks you can use while building, grouped by area.

<!-- generated:api-exports -->

### The sandbox context

| Export | Kind | Summary |
|--------|------|---------|
| `SandboxPluginContext` | interface | What a third-party plugin's `activate` receives inside its sandbox: the `PluginContext` shape, over RPC. |
| `SandboxViewHandle` | interface | — |
| `SandboxViewRegistration` | interface | — |
| `SandboxedPluginModule` | interface | The default export of a third-party plugin's ES module (its manifest `entry`). |

### Views

| Export | Kind | Summary |
|--------|------|---------|
| `SANDBOX_VIEW_LIMITS` | constant | — |
| `SandboxViewNode` | type | — |
| `SandboxView` | interface | What a sandboxed plugin shows in a sidebar panel, dashboard widget or settings tab: data, never markup. |

### Sandbox limits and errors

| Export | Kind | Summary |
|--------|------|---------|
| `SANDBOX_LIMITS` | constant | — |
| `SANDBOX_SEARCH_LIMITS` | constant | `notes.search`: the longest query, and the most hits one call returns (20 by default). |
| `SandboxErrorCode` | type | Why a request of the plugin was refused, or why a call failed. |
| `SandboxLimits` | interface | Resource limits of one sandboxed plugin; exceeding one stops the plugin (`errored`). |
| `SandboxNote` | interface | A note as a sandboxed plugin with `notes:read` sees it. |

### The manifest

| Export | Kind | Summary |
|--------|------|---------|
| `DataExtensionManifest` | interface | Manifest of a data extension: any kind other than `plugin` (`theme`, `font`, `icon-pack`, `snippet-pack`, `language-pack`, or a kind this app does not know). |
| `ExtensionManifestBase` | interface | The fields of every extension manifest (`arkenda-plugin.json`), schema version 2, whatever its kind. |
| `ExtensionManifestV2` | type | Any valid v2 manifest. |
| `PLUGIN_CONTRIBUTION_KINDS` (9 entries) | constant | Kinds of declarative contributions, listed in the manifest so the host knows them before loading code. |
| `PLUGIN_MANIFEST_FIELDS` | constant | The fields of a v2 manifest, read by the validator and by the JSON Schema generator (`scripts/plugin-manifest-schema.ts`), so both list the same ones: - `required`: every kind; - `optional`: every kind; - `code`: required for the `plugin` kind, an error (`kind-code`) for every other kind; - `codeOptional`: optional for the `plugin` kind, an error for every other kind. |
| `PLUGIN_MANIFEST_FILE = "arkenda-plugin.json"` | constant | File name of a third-party plugin manifest, at the root of the plugin folder or archive. |
| `PLUGIN_MANIFEST_LIMITS` | constant | Text limits of a v2 manifest (characters), shared by the validator and the JSON Schema. |
| `PLUGIN_PANEL_ICONS` (12 entries) | constant | The icons a sandboxed plugin's sidebar panel may use on the right sidebar's tab strip: names of the app's own icon set that are registered before any plugin panel shows (the shell icons and the deferred icons). |
| `PLUGIN_PERMISSIONS_V2` (13 entries) | constant | What a sandboxed third-party plugin may ask for. |
| `PLUGIN_PLATFORMS = ["web", "desktop", "mobile"]` | constant | — |
| `PluginContributes` | type | — |
| `PluginContributionDeclaration` | interface | One declared contribution: an id unique within its kind and a title shown to the user. |
| `PluginContributionKind` | type | — |
| `PluginManifestV2` | interface | Manifest of a third-party plugin: the `plugin` kind (the default), the only kind that runs code. |
| `PluginPanelIcon` | type | — |
| `PluginPermissionV2` | type | — |
| `PluginPlatform` | type | — |
| `SCHEMA_ERROR_CODES` (27 entries) | constant | Stable codes of schema errors (manifest v2, catalog v1, revocation list v1). |
| `SchemaErrorCode` | type | — |
| `SchemaIssue` | interface | One problem of a document: a stable code, a JSON path (`$.versions[0].bundleUrl`) and a readable message. |
| `SchemaResult` | type | The checked document, or every problem found in it. |
| `isPluginKindManifest(manifest: ExtensionManifestV2): manifest is PluginManifestV2` | function | Whether a manifest is of the `plugin` kind, the only one that runs code. |
| `isPluginPanelIcon(value: unknown): value is PluginPanelIcon` | function | Whether `value` is one of `PLUGIN_PANEL_ICONS` (own names only, no prototype keys). |
| `isPluginToolPlaces(value: unknown): value is readonly PluginToolPlace[]` | function | Whether `value` is a non-empty list of distinct `PluginToolPlace` values. |
| `isPluginWidgetPlaces(value: unknown): value is readonly PluginWidgetPlace[]` | function | Whether `value` is a non-empty list of distinct `PluginWidgetPlace` values. |
| `parsePluginManifestV2(value: unknown): SchemaResult<ExtensionManifestV2>` | function | Strictly checks a v2 manifest (`arkenda-plugin.json`): every field required by the schema must be present and valid, and unknown fields are errors at any depth. |

### Permissions

| Export | Kind | Summary |
|--------|------|---------|
| `PLUGIN_NETWORK_HOSTS_MAX = 20` | constant | Most hosts one manifest may declare. |
| `isPluginNetworkHost(value: unknown): value is string` | function | Whether `value` is a host a plugin may declare (see the module's rules). |

### Kinds, categories and surfaces

| Export | Kind | Summary |
|--------|------|---------|
| `EXTENSION_KINDS = ["plugin", "theme", "font", "icon-pack", "snippet-pack", "language-pack"]` | constant | Extension kinds. |
| `ExtensionKind` | type | — |
| `PLUGIN_CATEGORIES_MAX = 3` | constant | — |
| `PLUGIN_CATEGORIES_MIN = 1` | constant | How many categories a manifest declares, at least and at most. |
| `PLUGIN_CATEGORIES` (36 entries) | constant | The governed categories, each in one family. |
| `PLUGIN_CATEGORY_IDS` (36 entries) | constant | The ids of `PLUGIN_CATEGORIES`, in order. |
| `PLUGIN_FAMILIES = ["writing", "organizing", "media", "seeing", "connecting", "automating", "appearance", "utilities"]` | constant | The families of the taxonomy, in browsing order. |
| `PLUGIN_KEYWORDS_MAX = 10` | constant | Free keywords of a manifest, for search: at most this many… |
| `PLUGIN_KEYWORD_MAX = 32` | constant | …of at most this many characters each. |
| `PLUGIN_OTHER = "other"` | constant | What an unknown category, family or kind is shown and treated as. |
| `PLUGIN_SURFACES = ["sidebar", "status-bar", "toolbar", "widgets", "sync"]` | constant | Where an extension shows, derived from what its manifest really contributes (never declared). |
| `PluginCategory` | type | — |
| `PluginFamily` | type | — |
| `PluginOther` | type | — |
| `PluginSurface` | type | — |
| `derivedSurfaces(contributes: PluginContributes \| undefined): readonly PluginSurface[]` | function | The surfaces a manifest's contributions reach, in `PLUGIN_SURFACES` order: a sidebar panel's places (both sidebars when it declares none), toolbar items, dashboard widgets and sync sources (Settings ▸ Sync & devices). |
| `extensionKindOf(manifest: { readonly kind?: unknown }): ExtensionKind \| PluginOther` | function | The kind of a manifest as shown: `plugin` when left out, `other` when unknown. |
| `isPluginCategory(value: unknown): value is PluginCategory` | function | Whether `value` is one of the governed categories. |
| `pluginCategoryOf(value: unknown): PluginCategory \| PluginOther` | function | A declared category as shown: itself when governed, `other` when unknown (e.g. |
| `pluginFamilyOf(category: unknown): PluginFamily \| PluginOther` | function | The family of a category; `other` for an unknown one. |
| `pluginFamilyOfCategories(categories: readonly unknown[] \| undefined): PluginFamily \| PluginOther` | function | The family an extension is browsed under: that of its first governed category, else `other`. |

### Settings

| Export | Kind | Summary |
|--------|------|---------|
| `PLUGIN_DURATION_UNITS = ["seconds", "minutes", "hours"]` | constant | The unit a duration is entered and stored in. |
| `PLUGIN_SCHEMA_FIELD_TYPES` (13 entries) | constant | — |
| `PLUGIN_SETTING_SCOPES = ["vault", "device", "vault-device"]` | constant | Where a value is kept: - `vault`: in the vault (the plugin's storage), so it travels with the vault to other devices; - `device`: on this device only, for every vault; - `vault-device`: on this device only, for this vault. |
| `PluginSchemaFieldInput` | type | A field as a plugin writes it: `scope` defaults to `vault` (`device` for a secret), limits have defaults. |
| `PluginSchemaField` | type | A checked field of a schema. |
| `PluginSettingCondition` | interface | A field shows only while another field's value is one of `equals`. |
| `PluginSettingErrorCode` | type | Why a value was refused, for a translated message (`pluginApi.settings.errors.<code>`). |
| `PluginSettingError` | interface | — |
| `PluginSettingScope` | type | — |
| `PluginSettingValue` | type | A setting's value: secrets never appear among the values (see `PluginSettingsForm.secretState`). |
| `PluginSettingsExport` | interface | A plugin's settings as exported (secrets never included). |
| `PluginSettingsGroup` | interface | — |
| `PluginSettingsMigration` | interface | One upgrade step of stored values, to version `to`. |
| `PluginSettingsSchemaInput` | type | What a plugin passes: `version`, `fields`, and optionally `groups` and `migrations`. |
| `PluginSettingsSchema` | interface | A checked schema. |
| `checkSettingInput(field: PluginSchemaField, raw: unknown): PluginSettingCheck` | function | Checks a value entered for `field` and normalizes it (a colour lower-cased, a folder without a trailing slash, list items trimmed). |
| `definePluginSettings<const T extends PluginSettingsSchemaInput>(schema: T): T` | function | Types a schema for authors (no runtime change): `const schema = definePluginSettings({ … })`, then `ctx.settings.registerFields(schema)`. |
| `validatePluginSettingsSchema(input: unknown): PluginSettingsSchema` | function | Checks what a plugin registers: a schema object `{ version, fields, groups?, migrations? }`. |

### Themes, editor items and hotkeys

| Export | Kind | Summary |
|--------|------|---------|
| `PLUGIN_EDITOR_ICONS` (25 entries) | constant | The icons a plugin's editor item may use: names of the app's icon set (registered with the editor toolbar). |
| `PLUGIN_INSERT_GROUPS = ["basic", "lists", "media", "embeds", "plugins", "snippets"]` | constant | The groups of the editor's insert menus a plugin's insert item may join (`plugins` by default). |
| `PLUGIN_INSERT_KEYWORDS_MAX = 8` | constant | At most this many search keywords per insert item, each 1 to `PLUGIN_INSERT_KEYWORD_MAX` characters. |
| `PLUGIN_INSERT_KEYWORD_MAX = 32` | constant | — |
| `PLUGIN_ITEM_TEXT_MAX_BYTES = 4096` | constant | Largest text an insert or toolbar item inserts, in UTF-8 bytes. |
| `PLUGIN_ITEM_TITLE_MAX = 64` | constant | Longest title of a theme, insert item or toolbar item. |
| `PLUGIN_THEME_MODES = ["light", "dark", "both"]` | constant | Which colour scheme a theme is for; `both` themes may give a separate set for dark (`darkTokens`). |
| `PluginEditorIcon` | type | — |
| `PluginInsertGroup` | type | — |
| `PluginInsertItem` | interface | An entry of the editor's insert catalog (`/` menu, "+" menu, toolbar insert menu). |
| `PluginSettingOption` | interface | — |
| `PluginSettingValues` | type | The current value of every field, by key: booleans, numbers, texts, lists of texts (multi-select, string list) and key-value pairs. |
| `PluginThemeInput` | interface | What a plugin gives `appearance.registerTheme`. |
| `PluginThemeMode` | type | — |
| `PluginToolbarItem` | type | A button a plugin offers for the editor toolbar (hidden until the user shows it in Settings ▸ Editor): it inserts `text`, or runs one of the plugin's own commands. |
| `THEME_COLOR_TOKENS` (22 entries) | constant | The colour tokens of `_tokens.scss` a theme may set. |
| `THEME_FONT_TOKENS = ["--ark-font-sans", "--ark-font-mono", "--ark-font-editor"]` | constant | Font family tokens: a stack of quoted installed fonts and generic families. |
| `THEME_LENGTH_TOKENS = ["--ark-radius-sm", "--ark-radius-md", "--ark-radius-lg"]` | constant | Corner radii, as a length. |
| `THEME_MIN_TEXT_CONTRAST = 4.5` | constant | WCAG 2 AA for text: what a theme's text must reach on its background. |
| `THEME_NUMBER_TOKENS = ["--ark-line-height", "--ark-line-height-editor"]` | constant | Unitless line heights (the UI's and the editor's writing style). |
| `THEME_TOKENS` (30 entries) | constant | Every token name a theme may set; anything else is refused. |
| `ThemeTokens` | type | A theme's token values, by token name. |
| `canonicalHotkey(key: string): string` | function | The key in a canonical form (`mod-shift-k`): Ctrl/Meta read as Mod, modifiers sorted. |
| `isPluginHotkey(key: unknown): key is string` | function | Whether `key` is a hotkey a sandboxed plugin may declare (no plain typing keys, no repeats). |
| `isReservedHotkey(key: string): boolean` | function | Whether a plugin may never bind `key` (reserved by the app). |
| `parseThemeColor(value: string): Rgba \| null` | function | Parses a colour of the theme grammar: `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa`, `rgb()`/`rgba()` and `hsl()`/`hsla()` (comma or space separated, optional `/ alpha`). |
| `parseThemeTokens(value: unknown, scheme: 'light' \| 'dark'): ThemeTokens` | function | Checks one set of tokens: allowlisted names, the grammar of each value, then the contrast. |
| `validatePluginInsertItem(pluginId: string, input: unknown): PluginInsertItem` | function | Checks an insert item; the returned item's id is namespaced with `pluginId`. |
| `validatePluginTheme(pluginId: string, input: unknown): PluginTheme` | function | Checks a theme; the returned theme's id is namespaced with `pluginId`. |
| `validatePluginToolbarItem(pluginId: string, input: unknown): PluginToolbarItem` | function | Checks a toolbar item; the returned item's id is namespaced with `pluginId`, and so is its `command` (a plugin can only run its own commands). |

### Versions and compatibility

| Export | Kind | Summary |
|--------|------|---------|
| `CompatibilityRequirements` | interface | What a plugin needs: a v1 or v2 manifest, or a catalog release. |
| `CompatibilityTarget` | interface | The app checking the plugin. |
| `PluginCompatibilityIssue` | type | Why a plugin cannot run here: the reasons of `PluginIncompatibility`, plus a newer plugin API. |
| `checkCompatibility(plugin: CompatibilityRequirements, target: CompatibilityTarget): readonly PluginCompatibilityIssue[]` | function | Every reason the plugin cannot run on `target`, in a stable order; empty when it can. |

### In-process plugins and places

| Export | Kind | Summary |
|--------|------|---------|
| `ActiveNote` | interface | — |
| `ArkendaPlugin` | interface | The code of a plugin, loaded lazily the first time it is enabled. |
| `Disposable` | interface | Something that can be undone: a registration, a subscription, a resource. |
| `MarkdownFeatureName` | type | — |
| `PLUGIN_API_MINOR = 2` | constant | Additions to `PLUGIN_API_VERSION` that change nothing for the plugins written before them (optional fields only) raise this number; a plugin can check `ctx.apiMinor` before using one. |
| `PLUGIN_API_VERSION = 1` | constant | Version of the `PluginContext` API; bumped on breaking changes. |
| `PLUGIN_TOOL_PLACES = ["left", "right", "status"]` | constant | Every `PluginToolPlace`, in the order the host lists them. |
| `PLUGIN_WIDGET_CATEGORIES = ["notes", "tasks", "time", "focus", "insights", "other"]` | constant | What a widget is about; the widget pickers group widgets by it (`other` when left out). |
| `PLUGIN_WIDGET_PLACES = ["dashboard", "aside"]` | constant | Every `PluginWidgetPlace`, in the order the host lists them. |
| `PluginCommand` | interface | — |
| `PluginContext` | interface | What a plugin can do. |
| `PluginDashboardWidget` | interface | A dashboard widget. |
| `PluginKnowledge` | interface | Read-only queries on the knowledge index of the vault: wikilinks and backlinks, block references, tags, tasks, resource types and dates (plan 3.4 F3/F4). |
| `PluginNotes` | interface | Read-only queries on the notes of the vault (metadata only, never the bodies). |
| `PluginPanelPlacement` | type | The sidebar a panel shows in: the left one (views, notebooks, tags) or the right one. |
| `PluginSettingsTab` | interface | — |
| `PluginSidebarPanel` | interface | — |
| `PluginStatusBarItem` | interface | Framework-agnostic view descriptors. |
| `PluginStorage` | interface | Key-value storage of one plugin, persisted in the vault (it syncs between devices). |
| `PluginToolAction` | interface | A quick action shown above a tool's view in its status bar popover. |
| `PluginToolPlace` | type | Where a tool (a sidebar panel) can live: the left sidebar, the right sidebar, or the status bar (a chip whose click opens the same view in a popover). |
| `PluginWidgetCategory` | type | — |
| `PluginWidgetPlace` | type | Where a widget can live: the dashboard, or the Widgets panel of the sidebars (`aside`). |
| `isPluginToolPlace(value: unknown): value is PluginToolPlace` | function | Whether `value` is one of `PLUGIN_TOOL_PLACES`. |
| `isPluginWidgetCategory(value: unknown): value is PluginWidgetCategory` | function | Whether `value` is one of `PLUGIN_WIDGET_CATEGORIES`. |
| `isPluginWidgetPlace(value: unknown): value is PluginWidgetPlace` | function | Whether `value` is one of `PLUGIN_WIDGET_PLACES`. |

### Sync sources

| Export | Kind | Summary |
|--------|------|---------|
| `PLUGIN_SYNC_SOURCE_ACTIONS = ["start", "stop", "sync", "remove"]` | constant | What the app asks of a source: - `start`: the user added it to the open vault (or it was added and the plugin started): sync now, and keep in sync while the app is open; - `stop`: the user paused it, or took it out of the vault: stop syncing, keep what you know; - `sync`: one pass now (the user pressed "Sync now", or the app opened or came back to the foreground). |
| `PLUGIN_SYNC_SOURCE_NEEDS = ["account", "keys", "folder"]` | constant | What a source needs from the user (shown before it is added). |
| `PLUGIN_SYNC_SOURCE_STATES = ["idle", "syncing", "error"]` | constant | How the source is doing, as the plugin reports it (`paused` and `unavailable` are the app's). |
| `PluginSyncSourceAction` | type | — |
| `PluginSyncSourceHandle` | interface | — |
| `PluginSyncSourceNeed` | type | — |
| `PluginSyncSourceState` | type | — |
| `PluginSyncSourceStatus` | interface | — |
| `PluginSyncSource` | interface | A sync source of an in-process plugin (`PluginContext.sync.registerSource`). |

### Signing and integrity

| Export | Kind | Summary |
|--------|------|---------|
| `ReleaseStatement` | interface | What a publisher signs for each release: binds the bundle bytes and the permissions to the version. |
| `canonicalJson(value: unknown): string` | function | Serializes a JSON value deterministically, so that signing and verifying hash the same bytes. |
| `computeIntegrity(bytes: Uint8Array<ArrayBuffer> \| ArrayBuffer): Promise<string>` | function | The `sha256-<base64>` integrity of a bundle, as written in the manifest and the catalog. |
| `releaseStatementOf(manifest: PluginManifestV2): ReleaseStatement`<br>`releaseStatementOf(plugin: CatalogPlugin, release: CatalogRelease): ReleaseStatement` | function | The release statement of a manifest, or of a catalog plugin release; both give the same statement. |

### Other (live-activity.ts)

| Export | Kind | Summary |
|--------|------|---------|
| `PluginLiveActivityAction` | interface | A button of a plugin's activity; `run` calls the plugin's own flow. |
| `PluginLiveActivityHandle` | interface | How the plugin keeps its activity up to date; disposing it (or disabling the plugin) drops it. |
| `PluginLiveActivityKind` | type | A countdown (`timer`) or a piece of work (`job`): a plugin cannot claim a recording's or a sync's rank. |
| `PluginLiveActivityPatch` | type | A change to a plugin's activity: anything but its id and kind. |
| `PluginLiveActivity` | interface | One live activity of a plugin (`ctx.activities.publish`, API 1.2), checked before it shows. |

<!-- /generated:api-exports -->

The "In-process plugins and places" exports describe built-in plugins (`PluginContext`), which run
inside the app; third-party plugins get `SandboxPluginContext` above. Changes to this API are listed
in [Versioning and compatibility](versioning.md#api-changelog).
