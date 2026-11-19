---
label: "What's new in 0.5.1"
description: "The release notes of Arkenda 0.5.1 (2026-11-18)."
order: 4
tags: ["changelog","release-notes"]
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
---

# What's new in 0.5.1

Released on 2026-11-18.

Arkenda now works with the rest of your desktop: links and Markdown files open in it, notes are a search away in
KRunner, the taskbar and sleep follow what the app is doing, deleted notes go to the system's trash, and video posters
come from the system first. Plus one Attach entry for any file, versioned documentation, and tools for plugin authors.

### ✨ New

- 🖥️ **One Arkenda at a time** — starting Arkenda again brings the open window forward instead of opening a second
  copy.
- **Note links** — an `arkenda://note/<id>` link (the address MCP clients get for a note) opens that note from another
  app or the browser. The `.deb`, `.rpm`, Windows installers and Microsoft Store package register the link; the
  `.AppImage` registers it the first time it starts; 📱 on Android the link opens the note too.
- 🖥️ **Open Markdown files with Arkenda** — double-click a `.md` file or use Open with: a file inside the open folder
  vault opens as its note, any other is edited in place (it stays where it is, outside the vault; edits save after a
  short pause, and if another app changed it meanwhile, Arkenda asks whether to reload theirs or keep yours).
- 🖥️ **New note and Quick capture from the launcher** — right-click Arkenda in the Linux launcher or taskbar, or run
  `arkenda --new-note` / `arkenda --quick-capture`.
- 🖥️ **Show in folder** — a note's menu opens your file manager at the note's file (folder vaults).
- 🖥️ **Deleted notes go to the system's trash** — a note deleted forever from a folder vault moves its file to the
  trash of Linux or Windows, so it can still be restored there.
- 🖥️ **System notifications on Linux** — the 🧩 Pomodoro timer's notifications show as your desktop's own, with an
  Open action that brings Arkenda forward.
- 🖥️ **Taskbar progress and due count** — an import, export or sync shows its progress on Arkenda's taskbar icon (KDE
  Plasma and other launchers that read it, and Windows), and the icon shows how many tasks are due.
- 🖥️ **The computer stays awake for long work** — while Arkenda records, imports, exports or syncs a lot, Linux does
  not suspend; it may sleep again as soon as the work ends.
- 🖥️ **Sync knows your network and battery on Linux** — a metered connection, a low battery or power saver lets the
  media policy wait for a better moment, as on Android.
- 🖥️🧪 **Notes in KRunner** — on KDE Plasma, find your notes by title from the search (Alt+Space) and open them, or
  start a new note there (Settings ▸ Experimental ▸ Notes in KRunner).
- **Video posters and lengths from the system** — a video's poster, duration and size come from what Linux, Windows
  and 📱 Android already know (the thumbnail cache, the shell, the media retriever) before Arkenda decodes the file
  itself, so long videos show their poster sooner.
- **Attach a file…** — one entry in the editor and on the whiteboard takes any file: a picture, audio, video or any
  other file, recognised from its contents.
- **Versioned documentation** — the user guides and the plugin guide now have one folder per version in the public
  repo (`wiki/`), readable in Arkodex; the [guides of this version](guides/README.md).
- **Plugin author tools** — every release now carries `arkenda-plugin-check.mjs` (checks a plugin package with
  Node.js 22) and `arkenda-plugin-starter.zip` (a template to start from).

### 🐛 Fixed

- 🖥️ On Linux, sync frames and plugin signatures of 65,473 to 65,535 bytes could fail to verify or close the window
  (a WebKitGTK limit); they are now checked another way.

---
