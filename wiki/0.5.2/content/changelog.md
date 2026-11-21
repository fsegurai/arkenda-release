---
label: "What's new in 0.5.2"
description: "The release notes of Arkenda 0.5.2 (2026-11-21)."
order: 4
tags: ["changelog","release-notes"]
publishedAt: "2026-11-21"
updatedAt: "2026-11-21"
---

# What's new in 0.5.2

Released on 2026-11-21.

Arkenda reaches beyond its window: reminders on notes and tasks with Snooze and Done, a system tray and start with
the system, read aloud, share notes and files out and receive them in, LocalSend to and from any device on your
network, and pictures through the clipboard on Android. Experiments you used every day became features, and every
Markdown extension now lives in one place, synced with your vault.

### ✨ New

- **Reminders** — a task reminds you at its due time: write the time after its due date (`📅 2026-11-20 ⏰ 09:30`),
  or pick it with the new **⏰** button in Todos. Any note can remind you too: **Remind me…** in its **…** menu
  saves a day and a time in its `remind` property. The notification and a card in the app offer **Open**,
  **Snooze 10 min** and **Done** (ticks the task, or removes the note's reminder). Each device fires a reminder
  once, and one missed while the app was closed fires at start when it is less than a day old. 🖥️ On Linux and
  Windows the notification itself has **Snooze** and **Done** buttons (a click on it opens the note). 📱 On
  Android the reminders fire with Arkenda closed and after a restart, Snooze works from the notification, and on
  Android 14 and later setting a reminder offers to open **Alarms & reminders** so they ring on the minute. 🌐 On
  the web, setting the first reminder asks for the browser's notification permission, once.
- **Experiments that became features** — Todos, Calendar, the app context menu, Merged table cells, Smart
  typography, Spoilers and Save diagrams are now part of Arkenda and on by default; 🖥️ Window blur too, off until
  you turn it on. Their switches left Settings ▸ Experimental for their own sections: Todos and Calendar in Layout,
  the context menu in General, Window blur in Appearance ▸ Transparency, the Markdown extensions in Editor. A
  device that turned one of them on keeps it on.
- **Markdown extensions in one place** — Settings ▸ Editor ▸ Markdown extensions lists every Markdown extension,
  graduated or experimental, by group, each with its switch, a sample of its syntax and its insert-menu entry, plus
  a search, Turn all on and Back to defaults. Your choices now follow the vault, so your other devices get them;
  check **Only on this device** to keep this device's own choice. Settings ▸ Experimental no longer lists them.

- 📱 **Pictures through the clipboard on Android** — paste a picture copied in another app (a screenshot, a photo)
  into a note, and copy a picture out of Arkenda to paste it elsewhere.
- **Copy image in the viewer** — the picture viewer has a Copy image button, so a picture can be copied on a phone
  or tablet too.
- **Read aloud** — the palette and a note's menu read the selection, or the whole note, with your system's own
  voice, in a small player bar with Pause, Play and Stop. Only voices on your device are used: Android's installed
  text-to-speech voices, speech-dispatcher on Linux where it is installed, Windows' voices, and the browser's
  on-device voices on the web.
- **Share as file** — a note's menu and the palette hand the note, as `<title>.md`, to another app through the
  system's share sheet, and a file attached to a note has a Share button on its card. On Android, on Windows, and
  in browsers that can share files; Linux has no share sheet.
- 📱 **Share into Arkenda** — share text, a link or pictures from another app to Arkenda on Android, and choose where
  they go: your Inbox, a new note, or the end of a note you pick. A link becomes a link named after the page (it is never opened); pictures are checked and stored like
  any attachment, up to 10 at a time.
- 🖥️ **Arkenda in the system tray** — on Linux and Windows, a tray icon with New note, Quick capture, Show Arkenda
  and Quit. It is on by default; Settings ▸ General turns it off, and **Close to the tray** (off by default) makes
  closing the main window save and hide it in the tray instead of quitting.
- 🖥️ **Start with the system** — Settings ▸ General ▸ Start Arkenda with the system opens Arkenda when you sign in, on
  Linux and Windows. Off until you turn it on.
- 📱 **Launcher shortcuts on Android** — touch and hold Arkenda's icon for New note and Quick capture.
- 🧪 🖥️ 📱 **LocalSend** — send notes and attached files to the LocalSend apps on the same network, and receive
  texts, pictures and files from them where you choose (as a share does), on the desktop and Android. Every transfer
  asks first, a PIN is optional (on its card in Settings ▸ Experimental), and a port is open on your local network only while the experiment is on. Implemented from the
  protocol's public description (it publishes no license).
- **Long notes render off the main thread again** — with the default Markdown extensions on, the preview's render
  worker now parses merged table cells, spoilers, tabs, kanban boards, accordions, extended code blocks, inline marks
  and slides itself; lists, timelines, comments, maps and embeds still render in the page while on.

### 🔧 Changes

- **Clearer editor themes** — the 15 editor themes take their makers' new colours, tuned for contrast: comments,
  keywords and links read better on every theme, and Basic Dark's links now use its own colour.
- **Markdown on the released libraries** — the Markdown extensions run on their released versions; notes render as
  before.

### 🐛 Fixed

- 🖥️ **Window blur no longer blinks on Linux** — the blur is set once and kept, instead of being removed and added
  again on every theme or opacity change.
- 🖥️ **A start that freezes is undone** — on Linux, a start that never stays responsive goes back to Auto rendering
  and turns the window effect off at the next start; the window opens opaque while compositing is off; and
  `ARKENDA_SAFE_MODE=1` starts once with Auto rendering, an opaque window and the system title bar.
- **Front matter stays out of the preview** — a note's front matter is no longer shown as a line and a heading in
  the preview or in an exported web page; task checkboxes still toggle their own line.
- 🖥️ **Staying awake for work already running** — on Linux, a sync or an export already under way when Arkenda
  finished starting now keeps the machine awake too, not only work started afterwards.

---
