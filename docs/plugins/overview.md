# Overview

A plugin is an ES module that runs in a sandbox and talks to Arkenda only through `ctx`. It can read
and change notes, add commands, panels, widgets, editor items, Markdown blocks, themes and settings,
and fetch approved hosts on the desktop: always within the permissions the user granted.

## What a plugin can do

| Area | What it adds | Permission |
|------|--------------|------------|
| Notes | Read, search, create, edit and trash notes; listen to changes. | `notes:read`, `notes:write` |
| Knowledge | Backlinks, links, tags, tasks, notes by type or date. | `notes:read` |
| Commands | Palette commands with a default hotkey. | `commands` |
| Editor | Items in the insert menus, buttons on the editor toolbar. | `editor` |
| Views | Sidebar panels (or status bar chips), dashboard widgets, settings tabs. | `ui:panels`, `ui:widgets` |
| Markdown | Fenced code blocks rendered to sanitized HTML. | `markdown` |
| Themes | Themes made of design-token values. | `ui:themes` |
| Settings | Options rendered by the app, with scopes and migrations. | `storage` |
| Storage | Its own JSON values, synced with the vault. | `storage` |
| Network | `GET` to the hosts the user approved (desktop app only). | `network` |
| Clipboard, notifications | Right after the user runs one of its commands or buttons. | `clipboard`, `notifications` |

The full list of calls is the [API reference](api.md); the places each one shows are in
[Surfaces](surfaces.md).

## What a plugin cannot do

- **Touch the app's page.** It has no DOM of the app, no cookies, `localStorage` or IndexedDB, and
  no network of its own ([The sandbox](sandbox.md)).
- **Render markup.** Panels, widgets and settings tabs are data (`SandboxView`) the app renders with
  its own components. Markdown blocks return HTML that the app sanitizes.
- **Do anything undeclared.** Every call needs a declared permission the user granted, and every
  contribution id must be in the manifest's `contributes`.
- **Read secrets** or another plugin's data.
- **Import code at run time.** The entry is one bundle; ship your dependencies inside it.
- **Use what only built-in plugins get:** CodeMirror and Marked extensions, status bar items of
  their own, note actions, history providers, app events and components.

## Platforms

A manifest lists the platforms it runs on in `platforms` (`web`, `desktop`, `mobile`); elsewhere it
shows as incompatible. Sandboxed plugins run on all three. Two things are narrower:

| Feature | Web | Desktop | Mobile |
|---------|-----|---------|--------|
| Sandboxed plugins, settings, storage, views | yes | yes | yes |
| `network.fetch` | answers `network-not-available` | yes | answers `network-not-available` |
| Secret settings (`secret` fields, kept in the OS keychain: Android's Keystore, iOS's keychain) | "not available here" | yes | yes |

A plugin that cannot work without `network` is listed as desktop only.

### Capability ids

A setting field can name an app capability (`capability`), and is greyed with the reason where the
capability is missing. These are the ids, and where each one can be available:

<!-- generated:capabilities -->

| Capability | Web | Desktop | Mobile |
|------------|-----|---------|--------|
| `platform:web` | yes | — | — |
| `platform:desktop` | — | yes | — |
| `platform:mobile` | — | — | yes |
| `native-window` | — | yes | — |
| `custom-titlebar` | — | yes | — |
| `window-effect` | — | yes | — |
| `terminal` | — | yes | — |
| `mcp` | — | yes | — |
| `link-titles-fetch` | — | yes | — |
| `browser` | — | yes | — |
| `s3-mirror` | — | yes | yes |
| `media-offload` | — | yes | — |
| `git` | — | yes | — |
| `file-vault` | — | yes | yes |
| `folder-picker` | — | yes | yes |
| `export-file-saver` | — | yes | — |
| `plugin-secrets` | — | yes | yes |
| `device-sync` | yes | yes | yes |
| `lan-sync` | — | yes | — |
| `updates` | yes (when configured) | yes (when configured) | — |

<!-- /generated:capabilities -->

"When configured" means the build must set it up (an update feed, for `updates`).

## Next

[Getting started](getting-started.md): build and install your first plugin.
