# 📦 Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Downloads for every version are on the [release page](https://github.com/fsegurai/arkenda-release/releases).

> **Legend** — 🧪 an experiment: off by default, turn it on per device in **Settings ▸ Experimental** ·
> 🧩 a built-in plugin: off by default, turn it on in **Settings ▸ Plugins** · 🖥️ desktop app only ·
> 📱 phone and tablet

---

## [Unreleased]

No changes have been made yet.

---

## [0.2.0] - 2026-11-07

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

## [0.1.1] - 2026-11-06

A maintenance release: a much faster app on phones, security hardening, fixes for the editor, phones and the
desktop builds, and a steadier release pipeline.

### 🐛 Fixes

- **Editor suggestions** — clicking an option in a suggestions menu (`/`, `[[`, `[!`, emoji) always applies it;
  a click right after the list opened or changed was sometimes ignored.
- 📱 **The + button** is on screen as soon as the app starts, before the vault finishes opening. A tap while it
  opens makes exactly one note once it is ready, however many times you tap.
- 🖥️ **Windows builds** — code that only applies to Linux (the Wayland activity island, the screen-capture
  picker, the terminal's tty) is limited to it, so the desktop app builds cleanly for Windows.
- **Sync after a device is removed** — a device that was offline when another device was removed now always receives
  the new vault key on its first connection back; before, it could miss it on a slow device and had to connect again.
- 🖥️ **Voice memos** — when the microphone is refused or missing, quick capture always says why; starting a
  voice memo from the command palette could lose that message.
- **Release downloads** — installers are published as plain files next to their `SHA256SUMS.txt`, never inside
  folders, and two files with the same name stop the release instead of overwriting each other.

### ⚡ Performance

- 📱 **No more waiting on every tap** — Android redrew the app's large logo icon each time you changed view, went
  back or opened a note, freezing the app for up to a few seconds each time. The app no longer declares that icon:
  switching views, going back and opening notes are now near-instant.
- **Sidebar and editor ready sooner** — notebooks, tags, statuses, plugin panels, icons and the editor's
  snippets, table editing and selection bar appear right after the first screen is drawn instead of waiting for the
  device to go idle (up to 2 seconds on a busy phone).
- **Board and todos open faster** — board lanes show their first 20 cards and todo groups their first 30 tasks, and
  more appear as you scroll; counts still show every item, and keyboard navigation, drag and drop and **Show more**
  work as before.
- **Large vaults stay responsive** — note lists, the notebook tree and status counts reuse what is already read
  instead of re-reading every note after each change, and the task list is sorted once instead of on every query.
- 📱 **Smoother scrolling** — touch gestures no longer make the page wait before it scrolls.
- 📱 **Big photos use far less memory** — photos are decoded only as large as the copies the app makes (at most
  2560 px), so a 50-megapixel photo no longer risks running a phone out of memory.
- 📱 **Less work in the background** — the media library shows thumbnails lazily and in batches, a folder vault is
  re-checked at most every 30 seconds when you come back to the app, the sync status stops updating while the app is
  hidden, and the network type is read only while sync or the cloud mirror runs.

### 🔐 Security

- 📱 **Android backups** — Google cloud backups of your notes now happen only when Android encrypts them with your
  screen lock (Android 9 and later); your sync keys were already excluded.
- 🖥️ **Folder vaults** — nothing in the app can write into a vault's `.git` folder, so a git hook cannot be planted
  there.
- 🧪 **Local MCP server** — its HTTP endpoint refuses every request that comes from a web page, sandboxed ones
  included; desktop MCP clients are unaffected.
- **Printing a note** runs in a sandboxed frame that cannot run scripts.

### 🔧 Maintenance

- The app version is set in one place: `bun run version:set <x.y.z>` (`package.json` is the source).
- Angular 22.2.4 (its build tools 22.2.6), Tauri CLI 2.12.4 and other patch updates.
- Build and test tools updated (Biome 2.6, Playwright 1.65, Vitest 5.1), clearing every known advisory
  (`bun audit` reports none).
- New automated tests for the board, the todo list, the note cache, photo processing and the Android network
  readings.
- A failed Android build no longer blocks the desktop release; the APK is skipped with a warning.
- CI moved to the latest GitHub Actions, fixed the Android NDK install, and runs tests in fewer places to keep
  pipelines fast.
- Clearer READMEs.

---

## [0.1.0] - 2026-11-04

<p align="center">
  <img src="docs/changelog/arkenda-logo.svg" alt="Arkenda" width="96">
</p>

<p align="center">
  <strong>The first release of Arkenda</strong> — a local-first, private Markdown notes app.<br>
  No account, no telemetry: your notes stay on your device as plain Markdown, and nothing reaches the network
  unless you turn on something that needs it.
</p>

<p align="center">
  <img src="docs/changelog/0.1.0/editor.png" alt="The editor: notebooks and statuses in the sidebar, the note list, and a note with links" width="900">
</p>

### ✨ Highlights

|                          |                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------|
| 📝 **Markdown-first**    | Notes are portable Markdown with frontmatter, never locked in a database.            |
| 📂 **Your folder**       | On desktop a vault is a plain folder of `.md` files; edits made outside are picked up live. |
| 🔒 **Private sync**      | Device-to-device sync, end-to-end encrypted. Relays only ever see encrypted traffic. |
| 🧩 **Plugins**           | Sandboxed plugins with declared permissions: commands, panels, widgets, themes.      |
| 💻📱 **Everywhere**      | One app for the browser, the desktop (Linux, Windows) and phones and tablets.        |

---

### 🚀 Features

#### ✍️ Notes and editor

- **A Markdown editor with a toolbar** — headings, lists, links, tables, images and emoji; switch between edit and
  preview, with a minimap, find in note and "Turn into".
- **One insert menu** everywhere: type `/`, use the block `+` handle or the toolbar's **Insert**.
- **Linked notes** — `[[` suggests notes to link, `[[Note#Heading]]` jumps straight to a heading, and backlinks
  show who links here. `[!` suggests callouts, shown as coloured alerts.
- **Properties** — tags, status, pinned and the rest live in the note's frontmatter, explained in the
  **Details** panel.
- **Export a note** to share it outside Arkenda.
- **Live presence** — see who else is in a note, with their cursors, when a vault is shared between devices.
- 🧪 Richer Markdown blocks: tabs, timelines, spoilers, typographic quotes, Mermaid export, maps (`md-map`), and link
  titles fetched when a link is pasted.
- 🧪 Editor themes: a gallery of light and dark pairs.

#### 🗂️ Organise and find

- **Nested notebooks, tags and statuses** — set a status from any note, with counts in the sidebar.
- **Views** — Dashboard, All notes, Pinned, Unfiled and Trash, with a choice of note-list density.
- **Command palette** — one search for notes, `>` commands and `#` tags.
- **Outline** of the open note.
- 🧩 **Vault map** — your notes and their links as a 2D or 3D graph.

<table>
  <tr>
    <td width="50%"><img src="docs/changelog/0.1.0/command-palette-dark.png" alt="The command palette in the dark theme"></td>
    <td width="50%"><img src="docs/changelog/0.1.0/kanban.png" alt="Notes grouped by status on the kanban board"></td>
  </tr>
  <tr>
    <td align="center"><sub>The command palette (dark theme)</sub></td>
    <td align="center"><sub>Kanban: notes in their status lanes</sub></td>
  </tr>
</table>

#### 📅 Plan your day

- 🧪 **Today** — overdue and upcoming tasks in one place, with quick add.
- 🧪 **Todos and calendar** — every task across your notes, by date.
- 🧪 **Kanban** — notes grouped by status, with an *Unassigned* lane; move cards by dragging, with `Alt+arrow` or from
  a menu.
- 🧪 **Whiteboards** — shapes, text, sticky notes, connectors, images and live note cards; drop files from your file
  manager onto the board. Each board is saved as a note.
- 🧩 **Dashboard widgets** — pomodoro, insights, weather and clock.

#### 🖼️ Media and attachments

- **Audio and video** play right in the note; any other file shows as a card with **Open** and **Save**.
- **Pictures** — annotate and redact, compression levels, and location data (EXIF) removed on import.
- **PDF reader** — read PDFs in the app and link to a highlighted passage.
- **Media library** — filter by type, sort into folders with labels, and delete safely (a trash per device, by kind).
- **Attachment folders** — give a notebook a media folder: new uploads go there, and moving a note offers to move its
  media too.
- 📱 Capture photos, audio and video from the phone or tablet.

<p align="center">
  <img src="docs/changelog/0.1.0/media-library.png" alt="The media library with filters, folders and file tiles" width="820">
</p>

#### 💾 Vaults and storage

- **Browser vault** — stored in the browser (IndexedDB) and exported to a portable archive whenever you want.
- 🖥️ **Folder vaults** — a vault is a folder: folder = notebook, file name = title. See
  the folder vault guide.
- **Several vaults** — a vault picker and **Manage vaults**; a vault that is not reachable is shown as such, never
  lost.
- **Backups** — import and export run in the background, and imports are checked before anything is written.
- **Cloud mirror (S3)** — a copy in your own bucket, encrypted with a recovery code when you choose, and the option to
  keep large media only there.

#### 🔄 Sync and devices

- **End-to-end encrypted sync** between your paired devices — see the sync guide.
- **Pair with a code**, step by step; paired devices find each other again on the local network.
- **Every way to connect, in order** — the local network, across networks (desktop and Android), public relays, and
  store-and-forward through your own S3 mirror.
- **Sync & devices** — the status at a glance, each device's health, a connection test and *what syncs where*.
- **Large media waits for Wi-Fi**, with a switch per device.

<table>
  <tr>
    <td width="50%"><img src="docs/changelog/0.1.0/sync-overview.png" alt="Sync and devices overview with paired devices"></td>
    <td width="50%"><img src="docs/changelog/0.1.0/sync-pairing.png" alt="The pairing code dialog"></td>
  </tr>
  <tr>
    <td align="center"><sub>Sync &amp; devices at a glance</sub></td>
    <td align="center"><sub>Pairing a new device with a code</sub></td>
  </tr>
</table>

#### 🧩 Plugins

- **Sandboxed plugins** with declared permissions: they add commands, insert items, panels, widgets, settings, themes
  and Markdown blocks — and never reach the app's pages, cookies, storage or secrets.
- **Built-in plugins** (🧩 all off by default): pomodoro, insights, vault map, git history, weather and clock.
- **Write your own** — plugin documentation, from getting started to permissions and
  testing.

#### 🖥️ Desktop app

- **A flexible layout** — collapsible panes with an icon rail, a toolbar row, a selection bar, and notes side by
  side in horizontal and vertical splits. See the desktop layout guide.
- **The activity island** — quick capture with a global key, screenshots, voice memos and a drop shelf. See
  the island guide.
- 🧩 **Version history with git** — the vault's history through your system's git.
- **Secrets in the OS keychain.**
- **Check for updates** in **Settings ▸ About**, which asks the release page only when you click.
- 🧪 Glass window effect (Linux notes), a system-wide notch, screen recording, an
  integrated terminal and a local MCP server.

<p align="center">
  <img src="docs/changelog/0.1.0/split-panes.png" alt="Four notes open side by side in split panes" width="900">
</p>

#### 📱 Phone and tablet

- **Made for touch** — a bottom bar (Notes, Today, Search, More), a **+** button, long-press sheets, row swipes,
  pull to sync and the system back gesture.
- **Writing on a phone** — a single compact header, the formatting bar above the keyboard, and details as sheets;
  new notes open ready to type.
- **Tablets** — drawers in portrait, two panes with a rail in landscape. See
  the phone and tablet guide.

<table>
  <tr>
    <td width="50%" align="center"><img src="docs/changelog/0.1.0/phone-today.png" alt="Today on a phone with the bottom bar" width="300"></td>
    <td width="50%" align="center"><img src="docs/changelog/0.1.0/phone-note.png" alt="Reading a note on a phone" width="300"></td>
  </tr>
  <tr>
    <td align="center"><sub>Today, with the bottom bar</sub></td>
    <td align="center"><sub>Reading a note</sub></td>
  </tr>
</table>

#### 🎨 Settings, themes and languages

- **A new Settings** — two columns on desktop, stacked pages on touch, with dedicated *Sync & devices* and
  *Data & storage* pages and a tidy *Experimental* page.
- **Themes and accents** — presets such as Nord, Sepia and High contrast, and accent colours.
- **Your shortcuts** — customise keyboard shortcuts and snippets. See keyboard shortcuts.
- **English and Spanish** (en-US, es-CR).

<table>
  <tr>
    <td width="50%"><img src="docs/changelog/0.1.0/appearance.png" alt="Appearance settings with themes and accents"></td>
    <td width="50%"><img src="docs/changelog/0.1.0/plugins.png" alt="Plugins settings"></td>
  </tr>
  <tr>
    <td align="center"><sub>Appearance</sub></td>
    <td align="center"><sub>Plugins</sub></td>
  </tr>
</table>

### 🔐 Security

- **Private by default** — no account and no telemetry; a strict Content Security Policy names every host the app may
  contact, and it is checked on every build.
- **Encrypted sync** — relays only pass on encrypted traffic they cannot read; a cloud mirror is encrypted too when you
  turn on its **Encrypted** switch (with a recovery code).
- **Every input is checked** — imports, sync messages and plugin calls are validated before they touch your data.
- **Plugins in a sandbox**, limited to the permissions you grant.

### ⚡ Performance

- **Fast start** — the startup bundle is kept under a hard budget on every build (web, desktop and mobile); features
  you have not opened load only when you need them.
- **Large vaults** — measured with 10,000-note vaults; the todo list opens about twice as fast as in earlier builds.

### 📝 Documentation

- Guides for folder vaults, sync, media,
  keyboard shortcuts, the desktop layout,
  phones and tablets, the activity island and
  plugins.

---

### ✅ Compatibility

| Platform                | Status in 0.1.0                                                                    |
|-------------------------|------------------------------------------------------------------------------------|
| 🌐 Web                  | ✅ Modern browsers; the vault lives in the browser's storage                        |
| 🐧 Linux                | ✅ `.deb`, `.rpm` and `.AppImage`                                                  |
| 🪟 Windows              | 🟡 `.msi` and setup `.exe`, built automatically; not yet tried on a Windows machine |
| 🤖 Android              | ✅ `.apk` for arm64 (Android 7 or later), installed from the release page            |
| 🍎 macOS and iOS        | ⏸️ On hold                                                                         |

<details>
<summary><strong>Known limitations</strong></summary>

- The installers are **not code-signed** yet: Windows SmartScreen may warn the first time you open the app.
- **No automatic updates** yet — **Check for updates** tells you when a new version is out and links to it.
- Printing a note on macOS and on Android is not available yet.
- Features marked 🧪 are experiments: they may change, and they stay off until you turn them on.

</details>

[unreleased]: https://github.com/fsegurai/arkenda-release/releases

[0.1.1]: https://github.com/fsegurai/arkenda-release/releases/tag/v0.1.1

[0.1.0]: https://github.com/fsegurai/arkenda-release/releases/tag/v0.1.0
