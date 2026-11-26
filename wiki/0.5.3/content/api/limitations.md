---
label: "Limitations"
description: "What a plugin cannot do, what each permission opens, the performance budget it runs under, and what is not exposed to plugins yet. The rules themselves are in The sandbox and Permissions and privacy; this page puts…"
order: 16
tags: ["plugins","api"]
---

# Limitations

What a plugin cannot do, what each permission opens, the performance budget it runs under, and what is
not exposed to plugins yet. The rules themselves are in [The sandbox](sandbox.md) and
[Permissions and privacy](permissions.md); this page puts them in one place.

## The sandbox

Your code runs in a worker inside a sandboxed frame on an opaque origin
([How it is isolated](sandbox.md#how-it-is-isolated)). So it has:

- **No DOM of the app.** You describe views as data and the app draws them; Markdown blocks return
  HTML the app sanitizes.
- **No Node.js and no file system.** You reach notes only through `ctx.notes`, and keep your own data
  only in `ctx.storage`.
- **No network or storage of its own.** `fetch`, `XMLHttpRequest`, `WebSocket`, `localStorage` and
  IndexedDB are gone before your code runs; `ctx.network.fetch` is the only way out.
- **No code loaded at run time.** The entry is one bundle; ship your dependencies inside it.
- **No secrets.** The user enters a `secret` setting and the app keeps it; a sandboxed plugin never
  reads it ([Secrets](settings.md#secrets)).
- **No other plugin's data**, and nothing of the app's own settings.

## What each permission opens

| Permission | Opens | Limited by |
|------------|-------|------------|
| `notes:read` | `ctx.notes`, `ctx.knowledge`, `ctx.workspace` reads | the notebooks and tags the user chose ([Notes scope](permissions.md#notes-scope)) |
| `notes:write` | creating, editing, moving and trashing notes | the same scope; changes outside it fail with `out-of-scope` |
| `storage` | `ctx.storage` and `ctx.settings` | settings limits ([Settings ▸ Limits](settings.md#limits)) |
| `commands` | palette commands and their hotkeys | users can rebind; the app's keys win |
| `editor` | insert menu items and toolbar buttons | declared ids only |
| `ui:panels` | sidebar panels, status chips, settings tabs | view limits ([Sandbox limits](sandbox.md#limits)) |
| `ui:widgets` | dashboard widgets | view limits |
| `markdown` | fenced code blocks you render | the HTML is sanitized; 5 s per block |
| `ui:themes` | themes | token values only, 4.5:1 text contrast |
| `network` | `GET` to approved hosts | desktop app only, `https`, 5 s, 256 KB, 3 redirects, 4 at once ([Network hosts](permissions.md#network-hosts)) |
| `clipboard`, `notifications` | the clipboard, notifications | within 3 s after the user runs one of your commands or buttons |
| `sync` | sync sources in Settings ▸ Sync & devices | plugins of the `syncing` category; notes and hosts only through their own grants |

The full list of calls is the [API reference](api.md#the-plugin-context-ctx).

## Performance budget

- **No startup cost.** Your code is never part of the app's startup: the sandbox loads only when a
  third-party plugin is first turned on.
- **Off the main thread.** Your code runs in a worker, so heavy work never freezes the editor; the
  app still waits for your answers, so keep them quick.
- **Time limits:** 10 s to load and run `activate`, 5 s to answer each call.
- **Rate limits:** 50 requests per second on average, bursts of 100; at most 100 registrations held
  at once; messages of at most 256 KB.
- **View limits:** 200 nodes per view, lists nested 3 deep, 1,000 characters of text and 120 of a
  label.
- **Search:** queries of 500 characters, up to 50 hits per call (20 by default).

A plugin that breaks a limit is stopped and shown with the reason
([When a plugin is stopped](sandbox.md#when-a-plugin-is-stopped)).

## Platforms

`network` works only in the desktop app; on the web and on phones it answers
`network-not-available`. Secret settings work in the desktop and mobile apps, not on the web. The full
matrix is in [Overview ▸ Platforms](overview.md#platforms).

## Not exposed yet

- **Built-in plugins only:** CodeMirror and Marked extensions, note actions, status bar items of
  their own, history providers, app events and components
  ([Not available to plugins yet](surfaces.md#not-available-to-plugins-yet)).
- **No plugin API yet:** sidebar views and map node kinds.
- **Data-only extensions** (themes, fonts, icon packs, snippet packs, language packs as packages of
  their own): only plugins can be installed in this version ([Extension kinds](manifest.md#extension-kinds)).
- **Translations** of a plugin's own text ([Words and languages](ux.md#words-and-languages)).
- **Tooling:** a published `@arkenda/plugin-api` package and a test harness with fake hosts
  ([Testing a plugin](testing.md)). The checker and the starter template are release downloads
  ([Getting started](getting-started.md)).
- **Publishing:** the marketplace, its registry and signed releases
  ([Publishing](package.md#publishing)).
