---
label: "What's new in 0.1.1"
description: "The release notes of Arkenda 0.1.1 (2026-11-06)."
order: 4
tags: ["changelog","release-notes"]
publishedAt: "2026-11-06"
updatedAt: "2026-11-06"
---

# What's new in 0.1.1

Released on 2026-11-06.

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
