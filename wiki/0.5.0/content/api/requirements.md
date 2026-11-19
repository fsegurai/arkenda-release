---
label: "Requirements"
description: "What a plugin must have before it can be reviewed, and what is up to you. Most of the \"must have\" list is checked by the app when it installs your package; the rest is checked by a person during review."
order: 3
tags: ["plugins","api"]
publishedAt: "2026-11-17"
updatedAt: "2026-11-17"
---

# Requirements

What a plugin must have before it can be reviewed, and what is up to you. Most of the "must have" list
is checked by the app when it installs your package; the rest is checked by a person during review.

> **Publishing to other users is not open yet.** Today these requirements are the bar your plugin
> will be reviewed against once the marketplace opens; until then, meeting them is the best way to be
> ready. See [Contributing a plugin](contributing.md).

## Must have

| Requirement | Checked by | Where it is specified |
|-------------|------------|-----------------------|
| A valid manifest (`arkenda-plugin.json`, schema version 2), with no unknown field | the app, at install | [Manifest reference](manifest.md#fields), [`manifest.schema.json`](manifest.schema.json) |
| A package that keeps the layout, file and size rules: one bundle, allowed assets only, 5 MB at most | the app, at install | [The package](package.md#layout), [Limits](package.md#limits) |
| `integrity` that matches the bundle you ship | the app, at install and at each load | [Integrity](package.md#integrity) |
| Every permission declared, and each one explained by what the plugin does | the app (declared), review (explained) | [Permissions and privacy](permissions.md) |
| No network without `network` and its `network.hosts`; no data kept outside `storage` | the sandbox, at every call | [Network hosts](permissions.md#network-hosts), [`ctx.storage`](api.md#ctxstorage) |
| The sandbox rules kept: a plugin that hangs, floods or oversteps a limit is stopped | the sandbox, while it runs | [The sandbox](sandbox.md#limits) |
| `activate` done within 10 s, each command, button or Markdown block answered within 5 s | the sandbox, while it runs | [Sandbox limits](sandbox.md#limits) |
| No remote code: no `eval`, no code fetched at run time, nothing obfuscated; the source at `repository` builds to the same bundle | review | [Security checklist](security.md#for-authors) |
| A license: an SPDX expression in `license` | the app (present), review (matches the repository) | [`license`](manifest.md#license) |
| A README with screenshots, in the package or at `repository` | review | [Package layout](package.md#layout) (README and images are allowed assets) |
| Keyboard and screen-reader access: labels that say what each button does, nothing said by colour alone | review | [UX guidelines ▸ Accessibility](ux.md#accessibility) |
| Light and dark themes: views use the app's tokens; a theme keeps 4.5:1 text contrast | the app (themes), review | [Design tokens and themes](ux.md#design-tokens-and-themes) |
| English text for titles, labels and descriptions | review | [Words and languages](ux.md#words-and-languages) |

Translations of a plugin's own text are not available yet: titles and view text show as written. When
they are, Spanish (Costa Rica) and other languages will be welcome.

## Optional

None of these is needed to pass review. Add them when your plugin needs them.

| Feature | Where it is specified |
|---------|-----------------------|
| Settings, with scopes and migrations | [Settings](settings.md) |
| Commands and default hotkeys | [Surfaces ▸ Commands](surfaces.md#commands) |
| Sidebar panels, status bar chips and dashboard widgets | [Surfaces](surfaces.md) |
| Editor insert items and toolbar buttons | [Insert items and toolbar items](surfaces.md#insert-items-and-toolbar-items) |
| Markdown code blocks | [Markdown code blocks](surfaces.md#markdown-code-blocks) |
| Themes | [Themes](surfaces.md#themes) |
| Optional permissions, so the plugin works with less | [Optional permissions](permissions.md#optional-permissions) |
| A phone layout (`mobile` in `platforms`) | [UX guidelines ▸ Mobile](ux.md#mobile) |
| Tests (recommended) | [Testing a plugin](testing.md) |

## Next

- [Limitations](limitations.md): what a plugin cannot do, and what is not exposed yet.
- [Considerations](considerations.md): privacy, performance, phones, sync and offline.
