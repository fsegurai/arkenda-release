---
label: "What's new in 0.5.3"
description: "The release notes of Arkenda 0.5.3 (2026-11-26)."
order: 4
tags: ["changelog","release-notes"]
publishedAt: "2026-11-26"
updatedAt: "2026-11-26"
---

# What's new in 0.5.3

Released on 2026-11-26.

Notes get comments: on a selection, a section, a whole note, a whiteboard element or a media file, with replies,
resolving and search, synced with the vault and shared with the people you choose. Editor themes and Markdown maps
leave Experimental: 33 editor themes in a searchable gallery, and maps with several places, routes and areas, a place
picker, and nothing sent to OpenStreetMap until you load a map. Settings opens as a popup over your notes and no
longer jumps as you change it.

### ✨ New

- **Comments** — comment on selected text (the **Comment** button of the selection toolbar, in the editor and the
  preview, or `Ctrl+Shift+M`), on a section (the **+** beside a heading), on the whole note, on a whiteboard element
  or on an image, recording or file. Threads live in the note's **Comments** panel (Open, Resolved, Orphaned) with
  replies, edits, resolving and reopening; they sit beside the note, never inside its Markdown, and sync with the
  vault. Search finds comments and opens the note at the thread, replies to your comments show in the activity island,
  a share can give the **Commenter** role (read and comment, no edits), and a web export can add a Comments section.
  See the [Comments guide](guides/comments.md).
- **Editor themes are a feature** — 33 themes for the Markdown editor (18 new: Catppuccin, Dracula, Nord, One Dark,
  Rosé Pine Dawn, Solarized, Tokyo Night and more), each passing Arkenda's contrast rules as its maker defines it, in
  a gallery in **Settings ▸ Appearance ▸ Editor theme**: search, **High contrast**, **Warm** and **Cool** filters,
  favourites, recently used, a large live preview and keyboard navigation; on a phone, a list with a preview sheet.
  GitHub stays the default pair, and the switch at the top turns the themes off.
- **Maps are a feature** — a `map` block holds several places (`lat, lon, label` lines, each label its marker's
  popup) with the view fitted to them, `route: true` for a line through them, `circle:` and `polygon:` areas and a
  `height:`. A map can be expanded over the window, opened in OpenStreetMap, read by a screen reader, and dims in
  dark mode. **Insert ▸ Map** opens a place picker: click or tap to drop places, label or remove them, type
  coordinates, then insert the block. Each map waits for a click (**Load map**) before contacting OpenStreetMap,
  unless **Load maps automatically** is on in Settings ▸ Editor ▸ Markdown extensions ▸ Maps; exports write a map's
  places as text. See the [Maps guide](guides/maps.md).
- **Settings as a popup** — Settings opens over the note you were on (a full-screen sheet on a phone), and closing
  it brings you back where you were; `/settings/<section>` links still open the right page.
- 🖥️ **Share on Windows** — a note's **Share as file…** and a card's **Share** open Windows' own share window.
- 🖥️ **Windows Firewall** — on Windows, Settings tells when the firewall blocks device sync and offers **Allow in
  firewall** (with the system's permission prompt) or the firewall's own page.

### 🔧 Changes

- **Settings without jumps** — changing an option no longer makes the page flicker or jump: section moves skip the
  transition, the page fades in alone, and every surface keeps its place (checked by a new layout test).
- **Long notes with lists, timelines and maps render off the main thread** — numbered lists, timelines and maps
  now render in the background worker like the other Markdown extensions.

### 🗑️ Removed

- **Markdown comments extension** — the experimental `<aside>` comments extension is retired in favour of the new
  comments; a device that had it on is told once. Raw `<aside>` HTML still shows as before.

### 🐛 Fixed

- **Table handles on short tables** — in the preview, a table's column and row handles follow the table's own height
  instead of the whole view, and long handle menus stay inside the window.
- 🖥️ **Device pairing from the Microsoft Store** — the Store build of Arkenda now has the firewall rules device sync
  needs, so pairing and sync reach other devices.

---
