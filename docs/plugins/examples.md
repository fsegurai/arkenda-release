# Worked examples

Two built-in plugins, read as examples: word count (the smallest useful plugin) and git (settings,
commands, a tool and a desktop-only feature). Built-in plugins run in-process with more API than a
sandboxed plugin; each section ends with what a third-party version would declare instead.

## Word count

**What it does:** shows the number of words of the open note in the status bar.

```ts
// manifest.ts: in the startup bundle; the code loads only when the plugin is on.
export const wordCountManifest: PluginManifest = {
  id: 'word-count',
  name: 'Word count',
  version: '1.0.0',
  minAppVersion: '0.0.0',
  description: 'Shows the number of words of the open note in the status bar.',
  author: 'Arkenda',
  isBuiltIn: true,
};
```

Categories: `writing`, `status-bar`.

```ts
// word-count.ts
activate(ctx) {
  let item: StatusBarItemHandle | null = null;
  const show = (text: string) => {
    const descriptor = { id: ITEM, component: WordCountStatus, inputs: { count: countWords(text) } };
    if (item) item.update(descriptor);
    else item = ctx.views.registerStatusBarItem(descriptor);
  };
  const active = ctx.workspace.activeNote();
  if (active) show(active.text);
  ctx.events.on('note:opened', ({ text }) => show(text));
  ctx.events.on('note:edited', ({ text }) => show(text));
  ctx.events.on('note:closed', () => {
    item?.dispose();
    item = null;
  });
},
```

**Why it is built this way:**

- **Tiny manifest, lazy code.** Only the manifest is in the startup bundle; the count runs in a lazy
  chunk loaded the first time the plugin is on.
- **Events, not polling.** It updates on `note:opened` and `note:edited`, and removes its item on
  `note:closed`, so nothing shows without a note.
- **One handle, updated.** It registers the status item once and calls `update`, instead of adding a
  new item per change.
- **No settings, no permissions to explain:** just the switch.

**As a third-party plugin:** status bar items of its own and app events are built-in only. Declare a
tool that lives in the status bar, and refresh it from `notes.onChange` or a command:

```json
"permissions": ["notes:read", "ui:panels"],
"contributes": { "sidebarPanels": [{ "id": "count", "title": "Word count", "places": ["status"] }] }
```

## Git

**What it does:** versions a folder vault with the user's installed git: source control, history,
diffs, commit, pull, push and sync. **Desktop only.**

Categories: `syncing`, `integrations`. Off by default.

**Activation, in order:**

1. **Platform first.** `platformGitPort()` is null outside the desktop composition, and then the
   plugin registers nothing: no dead buttons on the web.
2. **Settings as a schema** (`definePluginSettings`), registered before anything reads them:

   | Key | Type | Group |
   |-----|------|-------|
   | `auto-sync` | `duration` in minutes, 0–1440, 0 turns it off | Sync |
   | `pull-on-open` | `toggle` | Sync |
   | `message-template` | `text`, required | Commits |
   | `diff-layout` | `select`: `unified` or `split` | Diffs |

   `onChange` applies new values to the running controller; the controller writes back through
   `ctx.settings.set`.
3. **One tool in three places.** The `source-control` panel allows `left`, `right` and `status`, and
   starts on the `right`. A status item with `tool: 'source-control'` is its chip when the person
   moves it to the status bar; a second, `background` status item hosts its dialogs.
4. **Commands for every action** ("Git: commit all changes", "Git: pull", "Git: push", "Git: commit
   and sync", "Git: fetch", "Git: open source control", "Git: open vault history", "Git: history of
   this note"), so all of it works from the palette.
5. **A history provider** for the note history panel, offered only while the vault is a git
   repository.
6. **`deactivate`** disposes the controller; the registrations are disposed by the host.

**Why it is built this way:**

- **Nothing waits at start:** the status loads when its item mounts, and the network is used only on
  the user's action or their explicit auto-sync settings.
- **Settings are declarative**, so search, reset, export, profiles and scopes work without plugin
  code.
- **Commands and the tool share one controller**, so the panel, the chip and the palette always agree.

**As a third-party plugin:** a sandboxed plugin cannot run git (no process or file access, and network
only to approved hosts, on the desktop). The parts that carry over are the settings schema, the tool
with `places`, and one command per action:

```json
"permissions": ["storage", "commands", "ui:panels"],
"contributes": {
  "sidebarPanels": [{ "id": "source-control", "title": "Source control", "places": ["left", "right", "status"], "defaultPlace": "right" }],
  "commands": [{ "id": "pull", "title": "Git: pull" }, { "id": "push", "title": "Git: push" }]
}
```
