---
label: "What's new in 0.3.0"
description: "The release notes of Arkenda 0.3.0 (2026-11-09)."
order: 4
tags: ["changelog","release-notes"]
publishedAt: "2026-11-09"
updatedAt: "2026-11-09"
---

# What's new in 0.3.0

Released on 2026-11-09.

Note properties you can see and edit, a note list that fits any width, a richer History, Linux
that matches Windows (native blur, the system accent, the desktop's window buttons), more ways to make the app
yours, X and YouTube cards, a much fuller MCP for AI agents, and in-app updates on Android.

### ✨ New

- **Note properties** — the **Properties** panel shows a note's properties and lets you add, edit, rename and
  remove them (text, number, date, checkbox, list, tags). A folder vault keeps them in the note's frontmatter, changed
  without touching anything else in the file; a browser vault keeps each property apart, so edits made on two
  devices at once both survive.
- **A note list that fits** — no more sideways scrolling: long titles, tags and notebooks fit any width, the time
  sits on the title line, a coloured edge shows the status, two tags show with "+N", the notebook path shows in
  mixed views, pinned notes get their own **Pinned** section, and the desktop shows quick actions on hover.
- **Status bar note strip** — the status bar shows the open note's save and sync state, status, notebook,
  backlinks, the caret position and word count, each one clickable.
- **History** — versions are grouped by day with how much each one changed; compare in the panel, at full width
  or in a tab of its own (**Open in a tab**); restore only the lines you pick; **Undo** after any restore; name a
  version ("Before the rewrite") and filter by source or by name. The text a restore replaces is always kept as a
  version first.
- 🖥️ **Native blur on Linux** — with **Window effect ▸ Blur**, KDE Plasma (Wayland and X11) blurs what is behind
  the window; desktops that blur by their own rules, or offer apps no blur (GNOME), say so instead.
- **System accent colour** — **Appearance ▸ Accent ▸ System** follows the accent colour of Windows, of your Linux
  desktop, or of the browser where it offers one, and changes with it. On Linux the system's light or dark choice
  is also read from the desktop.
- 🖥️ **Window buttons where your desktop puts them** — with Arkenda's own title bar on Linux, the minimize,
  maximize and close buttons follow your desktop's layout (left or right, and which ones).
- **Notebook colours and icons** — give a notebook a colour and an emoji from its menu (**Colour and icon…**);
  they show in the sidebar, the note list, the status bar and the tabs. A folder vault keeps them in
  `.arkenda/notebooks.json`, so they travel with the vault.
- 🖥️ **Interface zoom** — make the whole window larger or smaller (80–150 %) in **Settings ▸ Appearance** or with
  Ctrl/Cmd + and −, Ctrl/Cmd 0 to reset; kept per device. Also the fix for Linux scaling that draws the app too
  small or too large.
- **Focus writing** — in zen mode, keep the line you type in the middle of the editor and dim the other
  paragraphs (two switches in **Settings ▸ Editor**).
- **CSS snippets** — your own small style sheets in **Settings ▸ Appearance ▸ CSS snippets**, kept on this device,
  each turned on or off. If the app fails to start with snippets on, the next start runs without them and tells
  you which; Ctrl/Cmd+Alt+Shift+S turns them all off for the rest of a run. Stable hooks:
  [docs/css-snippets.md](guides/css-snippets.md).
- **Glass theme** — a built-in theme pack, light and dark: see-through side panels and bars over an aurora in
  your accent colour (or your desktop, with the window effect's blur), text kept readable.
- **Reduce transparency** — a switch in **Settings ▸ Appearance** makes Glass, the window effect and frosted menus
  solid on this device; on Android, battery saver does the same for Glass.
- 🧪 **X and YouTube cards** — a YouTube video or a post on X linked alone on its line shows as a card in the
  preview; nothing from YouTube or X loads until you click it, then it plays in a sandboxed frame from
  `youtube-nocookie.com` or X's embed page. The desktop and Android apps show the thumbnail, title and author; on
  the web, YouTube cards do so only after you turn on **Show previews on the web**. The note keeps the plain link.
- 📱 **Update from About on Android** — **Settings ▸ About** downloads a new version, checks its signature and that
  it is signed like the installed app, and opens Android's installer (allow **Install unknown apps** for Arkenda
  once). Versions before 0.3.0 still link to the release page: the first in-app update is the one after 0.3.0.
- **MCP for AI agents** — the local MCP server can now append to a note, insert under a heading and replace text;
  set properties, tags, the pin and the status; add, check and date tasks; list notebooks, tags and the trash;
  move and restore notes; list notes and images as resources (with change notices); and offers prompts
  (summarize a note, a daily review, related notes). Every write still asks you first. Agents set up for 0.2.x
  keep working.

### 🔧 Changes

- **Linux downloads** — the `.deb` and `.rpm` are now the recommended Linux downloads: about as small as the
  Windows installer (the `.AppImage` carries its own WebKitGTK and is several times larger). All three update
  themselves.

### 🐛 Fixes

- **Note properties showed nothing** — properties are now read and shown for every note, and what you add is
  kept.
- **MCP server** — the launcher's arguments, the token file's permissions, idle HTTP sessions (closed after 90 s)
  and an empty search are handled; a regenerated token reaches the running server.

---
