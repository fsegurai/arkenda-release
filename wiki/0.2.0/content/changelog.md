---
label: "What's new in 0.2.0"
description: "The release notes of Arkenda 0.2.0 (2026-11-07)."
order: 4
tags: ["changelog","release-notes"]
publishedAt: "2026-11-07"
updatedAt: "2026-11-07"
---

# What's new in 0.2.0

Released on 2026-11-07.

In-app updates on the desktop, PDF export on Android, `.mkv` videos, a faster start for large vaults, internal
links that open, menus that look alike everywhere, and an experimental browser window. It includes the betas
`0.2.0-beta.0` (2026-11-06) and `0.2.0-beta.1`.

### ✨ New

- 🖥️ **Update from About** — **Settings ▸ About** downloads a new version, checks its signature and installs it
  with **Restart now**, once every window has saved its edits, on Windows and Linux. Versions from 0.1.x still show the new version with a link to the release page: the first
  in-app update is the one after 0.2.0 is installed.
- 📱 **Export a note to PDF on Android** — **Export ▸ PDF** opens Android's print dialog, where you can save the
  note as a PDF or send it to a printer.
- **`.mkv` videos** — Matroska videos are stored and play as videos instead of becoming a `.bin` file. A video
  the app cannot play says it can't be streamed here and, in a desktop folder vault, offers **Open in system
  player**. Devices still on 0.1.x show an `.mkv` as a plain file until they update.
- **Split view on smaller windows** — side-by-side editing and preview is offered from 720 px of editor width
  (was 960 px), so it fits half a laptop screen.
- **Note list right away** — in a browser vault (the web app and Android), the note list from your last visit is
  shown, read-only, while the vault opens, then switches to the live list.
- 🧪 🖥️ **Browser window** — turn it on in **Settings ▸ Experimental** and choose **Open web links
  in ▸ Browser window**: web links open in one Arkenda window with a **Page** menu (Back, Forward, Reload, Open
  in system browser, Close) instead of your browser. It follows the app's light or dark theme, and a link that
  opens a pop-up (a sign-in, a payment) gets a window of its own. Its pages can't reach your notes and keep their
  cookies apart. Ctrl+click or a middle click still uses your system browser. Desktop only, off by default.
- **Toolbar settings that match the toolbar** — **Settings ▸ Editor ▸ Toolbar** previews the toolbar as the editor
  draws it (Normal text ▾, More, Lists ▾, Callout ▾, + Insert) and has one card per part of it: choose what each
  dropdown lists, show or hide each button, and reorder the buttons that can move. Any tool can be turned off,
  including those hidden by default (headings 4–6, highlight, note link, Callout ▾).

### 🐛 Fixes

- 🖥️ **Links that did nothing on the desktop** — web and mail links (Settings ▸ About, a note's links, a plugin's
  page) now open in the system's browser or mail app.
- **Internal links** — Ctrl+click (Cmd+click on macOS) on a `[[link]]` in the editor opens its note, and a heading's
  copied link (`/notes/…#heading`) opens that note and heading from the preview instead of doing nothing.
- **Menus that looked different** — the toolbar's callout menu shows each kind's colour and its `[!NOTE]` syntax as
  the `[!` menu does, the table row and column menus in the preview are the app's own menu, the editor's table bar
  looks like the selection bar in every editor theme, and every menu marks the highlighted item the same way.
- **Tables in the preview** — a column's alignment (`:---:`, `---:`) shows again, a caption lines up with the
  cells inside the table's frame, and the add-column **+** has room of its own beside the table instead of sitting
  under the scrollbar or over the last column (a narrow split pane above all).
- **Toolbar settings that did nothing** — the toolbar page still listed tools the toolbar no longer shows (divider,
  table of contents, camera and recorders) and offered to reorder headings and lists, which the toolbar ignored.
  Those tools are in **+ Insert**; the page now lists only what the toolbar shows.
- **Uploads that never finished** — adding a video or a large file to a browser vault could hang until the app was
  restarted, blocking every other upload (seen on Windows). Each step now has a time limit: the upload either lands
  or says it could not be stored, and the next upload works.
- **The note list failing to load** now says so, with **Try again**, instead of staying empty.
- 📱 **Check for updates** on Android points to the release page instead of saying nothing is configured.
- A **New notebook** click while the sidebar was still drawing could be ignored; it now opens the name field.
- **Sync** — a vault key sent by a device right as the connection closed is still applied, and logged when it
  cannot be.

### ⚡ Performance

- **Large vaults open faster** — big saved snapshots of a browser vault are split into smaller pieces, read without
  freezing the page, and the app starts reading the vault while the cached note list is shown.
- **Less work for random ids** — ids for sync and the editor come from a pooled random buffer.
- The todo page reads note details without sorting them first.

### 🔧 Maintenance

- 🖥️ Desktop installers are signed for the in-app updater, and each release's `latest.json` lists them; it keeps the
  fields 0.1.x versions read.
- Betas: a version like `0.2.0-beta.0` is published as a GitHub pre-release with its own update feed.
- Biome 2.6 now formats and lints the stylesheets and the Markdown files.
- New automated tests for the cached note list, split snapshots, uploads that stop answering and the update feed.

---
