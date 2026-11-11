# Manifest reference

`arkenda-plugin.json` describes an extension before any of its code runs: who made it, what it is,
what it asks for and what it adds. The app's validator (`parsePluginManifestV2`) is the authority;
[`manifest.schema.json`](manifest.schema.json) is generated from it, for your editor.

## Example

```json
{
  "schemaVersion": 2,
  "id": "reading-time",
  "name": "Reading time",
  "version": "1.2.0",
  "apiVersion": 1,
  "minAppVersion": "0.1.0",
  "description": "Shows how long the open note takes to read.",
  "author": { "name": "Ada", "url": "https://example.dev" },
  "publisher": "ada-tools",
  "license": "MIT",
  "repository": "https://github.com/ada/reading-time",
  "categories": ["writing", "sidebar"],
  "keywords": ["reading", "time"],
  "platforms": ["web", "desktop"],
  "permissions": ["notes:read", "ui:widgets"],
  "contributes": {
    "dashboardWidgets": [{ "id": "reading-time", "title": "Reading time" }]
  },
  "entry": "dist/main.js",
  "integrity": "sha256-…"
}
```

Point your editor at the schema with `"$schema"` only in your source copy: the validator refuses
unknown fields, `$schema` included.

## Rules for every field

- **Unknown fields are errors**, at any depth (`unknown-field`).
- **Lists are distinct:** a repeated value is an error (`duplicate`).
- Each error has a stable `code` (`SCHEMA_ERROR_CODES`, such as `entry-traversal` or
  `unknown-permission`) and a JSON `path` (`$.contributes.commands[0].id`).
- A few rules the schema only describes: a hotkey's shape, a public host name, an SPDX license
  expression, `optionalPermissions` being declared in `permissions`, a default place among the
  places.

## Fields

Generated from the schema; the prose sections below explain the fields that need it.

<!-- generated:manifest-fields -->

| Field | Required | Value |
|-------|----------|-------|
| [`schemaVersion`](#schemaversion) | Required | always `2` |
| [`kind`](#kind) | Optional | one of `plugin`, `theme`, `font`, `icon-pack`, `snippet-pack`, `language-pack`; or text, matching `^[a-z0-9][a-z0-9-]{1,63}$` |
| [`id`](#id) | Required | text, matching `^[a-z0-9][a-z0-9-]{1,63}$` |
| [`name`](#name) | Required | text, not blank, up to 80 characters |
| [`version`](#version) | Required | text, matching `^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$` |
| [`apiVersion`](#apiversion) | Required | a whole number, at least 1 |
| [`minAppVersion`](#minappversion) | Required | text, matching `^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$` |
| [`description`](#description) | Required | text, up to 500 characters |
| [`author`](#author) | Required | an object |
| [`publisher`](#publisher) | Required | text, matching `^[a-z0-9][a-z0-9-]{1,63}$` |
| [`license`](#license) | Required | text, up to 128 characters |
| [`repository`](#repository) | Required | a URL, starting with `https://`, up to 2048 characters |
| [`categories`](#categories) | Required | a list of 1 to 3 distinct items, each a category of the governed taxonomy; or any other id is accepted and shown as "other" |
| [`keywords`](#keywords) | Optional | a list of up to 10 distinct items, each text, not blank, up to 32 characters |
| [`platforms`](#platforms) | Required | a list of at least 1 distinct items, each one of `web`, `desktop`, `mobile` |
| [`permissions`](#permissions) | Plugins | a list of any number of distinct items, each one of `notes:read`, `notes:write`, `storage`, `commands`, `ui:panels`, `ui:widgets`, `markdown`, `network`, `clipboard`, `notifications`, `ui:themes`, `editor`, `sync` |
| [`optionalPermissions`](#optionalpermissions) | Optional (plugins) | a list of any number of distinct items, each one of `notes:read`, `notes:write`, `storage`, `commands`, `ui:panels`, `ui:widgets`, `markdown`, `network`, `clipboard`, `notifications`, `ui:themes`, `editor`, `sync` |
| [`network`](#network) | Optional (plugins) | an object |
| [`contributes`](#contributes) | Plugins | an object |
| [`entry`](#entry) | Plugins | text, matching `^[A-Za-z0-9_-][A-Za-z0-9._-]*(?:/[A-Za-z0-9_-][A-Za-z0-9._-]*)*\.m?js$`, up to 200 characters |
| [`integrity`](#integrity) | Plugins | text, matching `^sha256-[A-Za-z0-9+/]{43}=$` |

### `schemaVersion`

- Required.
- **Value:** always `2`.

### `kind`

- Optional.
- **Value:** one of `plugin`, `theme`, `font`, `icon-pack`, `snippet-pack`, `language-pack`; or text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
- What the extension is; "plugin" when left out. Only "plugin" runs code. An unknown kind is shown as "other" and never run.
- **Default:** `"plugin"`.
- **More:** [Extension kinds](#extension-kinds).

### `id`

- Required.
- **Value:** text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.

### `name`

- Required.
- **Value:** text, not blank, up to 80 characters.

### `version`

- Required.
- **Value:** text, matching `^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$`.

### `apiVersion`

- Required.
- **Value:** a whole number, at least 1.
- The plugin API version (this app: 1).
- **More:** [Versioning and compatibility](versioning.md#compatibility).

### `minAppVersion`

- Required.
- **Value:** text, matching `^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$`.
- **More:** [Versioning and compatibility](versioning.md#compatibility).

### `description`

- Required.
- **Value:** text, up to 500 characters.

### `author`

- Required.
- **Value:** an object with these fields:
  - `name` (required): text, not blank, up to 120 characters.
  - `url`: a URL, starting with `https://`, up to 2048 characters.

### `publisher`

- Required.
- **Value:** text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
- **More:** [Signing](package.md#signing).

### `license`

- Required.
- **Value:** text, up to 128 characters.
- An SPDX license expression (MIT, Apache-2.0 OR MIT).

### `repository`

- Required.
- **Value:** a URL, starting with `https://`, up to 2048 characters.

### `categories`

- Required.
- **Value:** a list of 1 to 3 distinct items, each a category of the governed taxonomy; or any other id is accepted and shown as "other".
- **More:** [Taxonomy](#taxonomy).

### `keywords`

- Optional.
- **Value:** a list of up to 10 distinct items, each text, not blank, up to 32 characters.
- **More:** [Taxonomy](#taxonomy).

### `platforms`

- Required.
- **Value:** a list of at least 1 distinct items, each one of `web`, `desktop`, `mobile`.
- **More:** [Overview](overview.md#platforms).

### `permissions`

- Required for the `plugin` kind; refused on every other kind (`kind-code`).
- **Value:** a list of any number of distinct items, each one of `notes:read`, `notes:write`, `storage`, `commands`, `ui:panels`, `ui:widgets`, `markdown`, `network`, `clipboard`, `notifications`, `ui:themes`, `editor`, `sync`.
- **More:** [Permissions and privacy](permissions.md#permissions).

### `optionalPermissions`

- Optional, `plugin` kind only; refused on every other kind (`kind-code`).
- **Value:** a list of any number of distinct items, each one of `notes:read`, `notes:write`, `storage`, `commands`, `ui:panels`, `ui:widgets`, `markdown`, `network`, `clipboard`, `notifications`, `ui:themes`, `editor`, `sync`.
- Permissions of `permissions` the plugin works without.
- **More:** [Permissions and privacy](permissions.md#optional-permissions).

### `network`

- Optional, `plugin` kind only; refused on every other kind (`kind-code`).
- **Value:** an object with these fields:
  - `hosts` (required): a list of 1 to 20 distinct items, each text.
- Only with the "network" permission.
- **More:** [Permissions and privacy](permissions.md#network-hosts).

### `contributes`

- Required for the `plugin` kind; refused on every other kind (`kind-code`).
- **Value:** an object with these fields:
  - `commands`: a list of any number of distinct items, each an object with these fields:
    - `id` (required): text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
    - `title` (required): text, not blank, up to 80 characters.
    - `hotkey`: text. The default key, e.g. Mod-Shift-k; bound only when free.
  - `markdownFeatures`: a list of any number of distinct items, each an object with these fields:
    - `id` (required): text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
    - `title` (required): text, not blank, up to 80 characters.
  - `sidebarPanels`: a list of any number of distinct items, each an object with these fields:
    - `id` (required): text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
    - `title` (required): text, not blank, up to 80 characters.
    - `icon`: one of `note`, `pin`, `search`, `dashboard`, `notebook`, `tag`, `command`, `panel-outline`, `panel-backlinks`, `panel-properties`, `panel-hotkeys`, `panel-widgets`.
    - `places`: a list of at least 1 distinct items, each one of `left`, `right`, `status`.
    - `defaultPlace`: one of `left`, `right`, `status`. One of the declared places (by default: dashboard for widgets, left for panels).
  - `dashboardWidgets`: a list of any number of distinct items, each an object with these fields:
    - `id` (required): text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
    - `title` (required): text, not blank, up to 80 characters.
    - `category`: one of `notes`, `tasks`, `time`, `focus`, `insights`, `other`.
    - `places`: a list of at least 1 distinct items, each one of `dashboard`, `aside`.
    - `defaultPlace`: one of `dashboard`, `aside`. One of the declared places (by default: dashboard for widgets, left for panels).
  - `settingsTabs`: a list of any number of distinct items, each an object with these fields:
    - `id` (required): text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
    - `title` (required): text, not blank, up to 80 characters.
  - `themes`: a list of any number of distinct items, each an object with these fields:
    - `id` (required): text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
    - `title` (required): text, not blank, up to 64 characters.
  - `insertItems`: a list of any number of distinct items, each an object with these fields:
    - `id` (required): text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
    - `title` (required): text, not blank, up to 64 characters.
  - `toolbarItems`: a list of any number of distinct items, each an object with these fields:
    - `id` (required): text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
    - `title` (required): text, not blank, up to 64 characters.
  - `syncSources`: a list of any number of distinct items, each an object with these fields:
    - `id` (required): text, matching `^[a-z0-9][a-z0-9-]{1,63}$`.
    - `title` (required): text, not blank, up to 80 characters.
- **More:** [Surfaces](surfaces.md).

### `entry`

- Required for the `plugin` kind; refused on every other kind (`kind-code`).
- **Value:** text, matching `^[A-Za-z0-9_-][A-Za-z0-9._-]*(?:/[A-Za-z0-9_-][A-Za-z0-9._-]*)*\.m?js$`, up to 200 characters.
- The bundle, relative to the package root.
- **More:** [Package layout](package.md#layout).

### `integrity`

- Required for the `plugin` kind; refused on every other kind (`kind-code`).
- **Value:** text, matching `^sha256-[A-Za-z0-9+/]{43}=$`.
- SHA-256 of the bundle bytes.
- **More:** [Integrity](package.md#integrity).

<!-- /generated:manifest-fields -->

## Extension kinds

`kind` says what the extension is. Only a plugin runs code; every other kind is data checked by the
schema, so it needs no sandbox and no permissions, and must not declare `permissions`,
`optionalPermissions`, `network`, `contributes`, `entry` or `integrity` (`kind-code`).

<!-- generated:extension-kinds -->

- `plugin`: code, run in the sandbox (the default).
- `theme`: data only.
- `font`: data only.
- `icon-pack`: data only.
- `snippet-pack`: data only.
- `language-pack`: data only.

<!-- /generated:extension-kinds -->

- **Unknown kind:** shown as "Other" and never run, so an app keeps accepting extensions of a kind
  added later.
- **Installing:** only plugins can be installed in this version; any other kind is refused with
  `not-a-plugin` (data kinds are not available yet).

## Taxonomy

A manifest declares 1 to 3 categories from the governed list. The first one decides the family it is
browsed under. Surfaces (sidebar, status bar, toolbar, widgets) are never declared: the app derives
them from `contributes` (`derivedSurfaces`), so they cannot mislead.

<!-- generated:taxonomy -->

| Family | Categories |
|--------|------------|
| Writing and editing (`writing`) | `editing` Editing · `writing` Writing · `markdown` Markdown · `tables` Tables · `footnotes` Footnotes · `code` Code · `emoji` Emoji · `annotation` Annotation · `properties` Properties |
| Organizing (`organizing`) | `files` Files · `folders` Folders · `tags` Tags · `links` Links · `navigation` Navigation · `search` Search · `tasks` Tasks · `dates` Dates |
| Media (`media`) | `images` Images · `attachments` Attachments · `pdf` PDF · `music` Music |
| Seeing your notes (`seeing`) | `visualization` Visualization · `graph` Graph |
| Working with others and the outside (`connecting`) | `integrations` Integrations · `syncing` Syncing · `import` Import · `publishing` Publishing · `research` Research |
| Automation and AI (`automating`) | `automation` Automation · `ai` AI |
| Look and interface (`appearance`) | `interface` Interface · `sidebar` Sidebar · `status-bar` Status bar · `commands` Commands · `fonts` Fonts |
| Utilities (`utilities`) | `utilities` Utilities |
| Other (`other`) | Any category, family or kind this app does not know. |

36 categories in 8 families, in browsing order. A manifest declares 1 to 3 categories and up to 10 free keywords of up to 32 characters.

<!-- /generated:taxonomy -->

- **Unknown category:** a well-formed id that this app does not know shows as "Other" (a warning in
  `plugin-check`), so apps keep accepting plugins that use a category added later. A malformed
  value, or more than 3, is an error.
- **Keywords** are free words for search; they never change where a plugin is listed.
- **Themes** are their own kind, not a category.

<a id="built-in"></a>

## Built-in plugins

Plugins shipped with Arkenda run in-process and use the app's own, shorter manifest shape (`id`, `name`,
`version`, `minAppVersion`, `description`, `author`, `isBuiltIn`). Each has 1 to 3 categories from the same
taxonomy as yours, and every category and family has an English and a Spanish name. Your plugin uses the full
manifest described above.

See [Worked examples](examples.md) for two of them.
