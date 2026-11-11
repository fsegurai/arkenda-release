# The activity island

The activity island is a small dark pill at the top centre of Arkenda's window. It shows what Arkenda is
doing right now — a sync, a focus timer, an export — what asks for you — a device that wants to pair —
and what is next today — an event about to start. You act on it without looking for the right pane. When
nothing runs, it is not there. The tasks due today or overdue never open the island: they are a small count
badge beside the search field (see [Next up](#next-up)). Under it opens [quick capture](#quick-capture), a
one-line field that files what you type in your inbox note.

## Where it is

| Where | The island |
| --- | --- |
| The desktop app with Arkenda's title bar | In the bar's centre, in place of the search field. Search stays one click away, as the magnifier beside it, and with its key. |
| The desktop app with the system's title bar, the web, a tablet | At the top edge of the window, centred. |
| A phone | Nothing in the window. On Android, the same activities can show as an ongoing notification: see [On Android: a notification](#on-android-a-notification-an-experiment). |
| Outside Arkenda (the desktop app on Windows and Linux with X11, an experiment) | At the top centre of the screen, over other apps: see [The notch outside the app](#the-notch-outside-the-app-desktop-app-an-experiment). |

If you hide the search field from the title bar (**Settings ▸ Workspace ▸ Window**), or the bar is too
narrow and folds it, the island moves to the top edge of the window.

## What it shows

When several things run, the most urgent one shows, and **+N** says how many others there are:

1. a **failure** (a sync or a job that went wrong), with its reason;
2. a **recording** (a [voice memo](#voice-memo)), with the time elapsed;
3. a **request** that waits for you (a device asking to pair), and an event that starts within 5 minutes;
4. a **timer** (the focus timer of the Pomodoro plugin), counting down;
5. a **sync** (and the first sync of a vault, with how many notes are done);
6. a **job**: an export, an import, an S3 mirror pass, a git commit, pull, push or backup;
7. **Next up**: today's next event, once it is less than an hour away.

A sync, a mirror pass or a git run that takes less than a second does not show at all. Something that finishes well
shows a check for two seconds, then the island shrinks.

## Opening it

Point at the pill, click or tap it, or reach it with **Tab**: the island opens and lists everything that
runs, each with its buttons:

| Activity | Buttons |
| --- | --- |
| Sync, first sync | **Devices and sync** opens the settings page, where sync is paused or resumed. |
| Focus timer | **Pause** or **Resume**, **+5 min** (the phase ends five minutes later; also "Add 5 minutes" in the timer's own menu), and **Stop** (the timer's reset). |
| Export, import | **Cancel** while it runs; **Dismiss** after a failure (the page in **Settings ▸ Data** says what went wrong). |
| Git (the Git plugin) | Nothing while it runs (git cannot be stopped from Arkenda); after a failure, git's reason, **Details** (the source control panel) and **Dismiss**. |
| S3 mirror | **Details** opens **Settings ▸ Storage**. |
| Pairing request | **Accept** (the codes match), **Decline**, **Codes differ** (the same as in **Settings ▸ Devices**), and **Review** (**Settings ▸ Devices**). |
| Next up | Each event and task of its list opens its note (a task at its line); **Today** opens Today. |
| Voice memo | **Stop** (files it) and **Discard**; after a failed save, **Retry** and **Discard**. |

**Escape**, or moving the pointer away, closes it.

An export or an import started in **Settings ▸ Data** keeps going when you leave the page: it stays in the island
with its progress and **Cancel**, and the page shows it again when you come back. An import asks you to review what it
adds once it has read the file, wherever you are; moving to another page closes that question without importing.

## Next up

With the **Todos** or the **Calendar** experiment on (**Settings ▸ Experimental**), the island tells you
what is next today, from the same events and tasks as **Today**:

- **Next event in 12 min** in the island once today's next event (one with a time; all-day events stay on
  Today) is less than an hour away. Within 5 minutes it moves ahead of a running focus timer. It is the only
  thing of Next up that opens the island.
- The open tasks due today or overdue are a small **count badge** (☐ 3), never the island: in the desktop
  app's title bar right after the search field (the search field stays a search field); where the island sits
  at the top edge of the window (the web, a tablet, a hidden or folded search field), beside where the island
  shows. It has no badge on a phone. Its name for a screen reader is "Tasks due: 3"; it shows a count only.

The island's event shows only when nothing else runs, and the island counts it among the others when something
does. Open it, or click the badge (or reach it with **Tab** and press **Enter**), for the same list: today's
next events with their times, then the overdue tasks and today's, each opening its note. With both experiments
off, neither is there, and none of their code loads.

## Incoming requests

When a device asks to pair with this one over the network (the desktop app, **Visible on this network**), the
island shows **Pairing request** with a dot, ahead of a timer, wherever you are. Open it to see the device's name,
on a line of its own, and the 6-digit code, large and apart from any text, so a device's name cannot pass for
it: accept only if the other device shows the same code, or choose **Codes differ**. The request is the same one
**Settings ▸ Devices** shows; answering it in either place answers both. A button answers only the request it
is shown with: if that request was withdrawn or another one came in the meantime, the click does nothing.

There is nothing to accept for shared notes (you join a share by entering its code on your device), and sync
never stops on a conflict that needs you (devices merge their changes; a note changed on disk asks in its own
editor), so neither shows here.

## Quick capture

Jot a line without opening a note. Quick capture opens a one-line field at the top centre, under the island:

- **Its key**, once you set one: **Settings ▸ Keyboard ▸ App ▸ Quick capture** has none until you choose it, and
  offers **Use Ctrl+Shift+Space** (**⇧⌘Space** on a Mac); any other key works too, checked against the other
  shortcuts like every key there. Some systems keep `Ctrl+Space`-like keys for switching the input method: pick
  another one if nothing opens.
- **The command palette**: **Quick capture** (it shows your key, when it has one). On a phone, which has no keys and
  no island, this is the way in, and the field opens at the top of the screen.

Type the line and press **Enter**: it is added at the end of your **inbox note**, the same note Today's quick add
writes to (named "Inbox" unless you chose another on Todos, this device only; it is created with your line when it
does not exist yet). A line is added as a list item (`- your line`); a line you write as a list item or a task
(`- [ ] call the venue`) is kept as you wrote it, so a task shows in Todos and Today. Nothing else in the note
changes. The island then shows **✓ Captured** for two seconds (a phone shows a short message at the bottom), and
the keyboard goes back to where it was.

**Escape**, the **×** button or **Enter** on an empty line close the field and write nothing. Clicking elsewhere
closes an empty field; a line you typed stays until you press Enter or Escape. If saving fails, the field stays open
with your line and says so.

### Voice memo

Say it instead of typing it. Quick capture's **microphone** button, or **Voice memo** in the command palette, records
from your microphone inside Arkenda (the browser or the system asks you to allow the microphone the first time):

- While it records, quick capture shows a red dot, the time elapsed, **Stop and save** and **Discard**, and so does the
  island (**Voice memo 0:12**), wherever you go in the app. **Escape** or **×** close the field; the recording goes on
  in the island. On a phone-sized window, which has no island, the field stays open until you stop or discard.
- **Stop and save** stores the recording with your other media (the media library lists it, the same recording is
  never stored twice) and adds one line at the end of your inbox note, `- ![Voice memo 14:32](attachments/…)`, which
  plays in the preview. The island shows **✓ Captured**.
- **Discard** writes nothing. If saving fails, the recording stays in memory with **Retry** and **Discard** in the
  field and in the island; it is never dropped without telling you.
- A memo stops by itself after **30 minutes**, or at 499 MB (just under the largest audio file that syncs to your
  other devices), and is saved. If the microphone is unplugged, what was recorded so far is saved.
- The microphone is released as soon as the recording stops, is discarded or fails, and when you leave or close the
  page (a recording that has not been saved then is lost).
- If the microphone is refused, missing or used by another app, the field says so.

Where it works: the web (a browser with `MediaRecorder`) and the desktop app on Linux and Windows. In the desktop app,
Arkenda allows its own microphone request only right after you click to record, from its own pages; it never grants
the camera, and screen capture only to the screen recording below. When a recording ends, the desktop webview forgets the grant (Linux), and Windows never
saves it, so a later request from the page is asked again and refused. While a recording runs, the page already holds
the microphone. Not yet on the phone app. Recordings are WebM (Opus) where the browser can
make them (Chromium, the Linux desktop app), else MP4.

### Screenshot (desktop app)

Capture the screen into a note. Quick capture's **camera** button, or **Screenshot** in the command palette, takes a
screenshot of the whole screen (every monitor):

- **Linux with Wayland**: the system's own screenshot window opens and asks you every time (the desktop portal); it
  may also let you pick a window or an area there. Closing it takes nothing and says nothing.
- **Linux with X11** and **Windows**: Arkenda's window steps aside for a moment while the screen is read, then comes
  back.

The screenshot then opens over the whole window, where you choose what to keep:

- **Drag** to select a region, or use the keyboard: the first **arrow key** selects the middle of the screen, the
  arrow keys move the region, **Shift**+arrows resize it, and with **Alt** they move one pixel at a time. **Tab**
  stays inside the overlay.
- **Enter** or **Save region** keeps the region (Enter keeps the whole screen when nothing is selected), **Whole
  screen** keeps all of it, and **Escape** or **Cancel** keep nothing: nothing is stored.

What you keep is stored with your other media as a PNG (the media library lists it, the same picture is never stored
twice) and one line is added at the end of your inbox note, `- ![Screenshot 14:32](attachments/…)`; the island shows
**✓ Captured**. With a note open and its editor focused, **Screenshot into this note** in the command palette puts the
picture at the cursor instead, as an inserted file does (if that note was closed meanwhile, the inbox note gets it).
If saving fails, the picture stays in memory with **Retry** and **Discard** in the island; it is never dropped without
telling you, and a new screenshot waits until you choose.

If the system offers no way to capture the screen (no portal, no X server), refuses it, or the screen is larger than
64 megapixels, a message says so. Screenshots are offered in the desktop app on Linux and Windows only: not on the
web, the phone or (on hold) macOS. Arkenda reads only the file the portal answered for this screenshot, and deletes it
afterwards only when the portal saved it in the temporary folder; a copy your system keeps in your pictures stays.

### Screen recording (desktop app, an experiment)

Turn on **Settings ▸ Experimental ▸ Screen recording** (this device only, off by default). Quick capture then has a
**screen** button, and the command palette **Record screen**:

- The system asks which screen or window to share, every time (on Linux the desktop portal's window; on Windows the
  webview's own). Closing it records nothing and says so.
- While it records, the island shows a red dot, the time elapsed and the size so far (**Screen · 12.4 MB**), with
  **Stop** and **Discard**, wherever you go in the app. Stopping the share from the system (its own **Stop sharing**)
  stops the recording too, and saves it.
- **Stop** stores the recording with your other media (the media library lists it) and adds one line at the end of
  your inbox note, `- ![Screen recording 14:32](attachments/…)`, which plays in the preview. The island shows
  **✓ Captured**. **Discard** writes nothing. If saving fails, the recording stays in memory with **Retry** and
  **Discard** in the island.
- A recording stops by itself after **30 minutes**, or at 492 MB (8 MB under the largest video that syncs to your other
  devices), and is saved. It is a WebM (VP8) of at most 1920 pixels on its longer side and 30 frames a second, at about
  15 MB a minute.
- The screen is released as soon as the recording stops, is discarded or fails, and when you leave or close the page
  (a recording that has not been saved then is lost).
- If the screen is refused, the share is cancelled, or the system cannot capture the screen, a message says which.

How it records: the page draws each frame of the shared screen onto a hidden canvas and records the canvas (the Linux
webview writes an empty file when it records the screen directly). Drawing costs some CPU while it records. While
Arkenda's window is hidden or minimized the frame rate may drop.

Arkenda allows its own screen request only within 2 minutes of your click (the time you may spend in the system's
window), once, from its own pages: on Linux through the webview's permission request, on Windows through WebView2's
`ScreenCaptureStarting` event (written against its sources, not yet run on Windows). Any other screen request is
refused. Offered in the desktop app on Linux and Windows only: not on the web, the phone (Android would need a native
screen capture plugin) or (on hold) macOS.

### From any app (desktop app, an experiment)

Turn on **Settings ▸ Experimental ▸ Quick capture from any app** (this device only, off by default) and give quick
capture a key: the key then also works while another app has the focus. It brings Arkenda's main window forward and
opens quick capture there. The key is registered with the system only while both are on, and released as soon as
either goes off, the main window reloads or closes, or Arkenda quits.

**Settings ▸ Keyboard** says under quick capture's row whether the key works from other apps, and why not when it
does not: another app or the system already holds that key (try another one), or the key has no `Ctrl`, `⌘` or
`Alt`. On **Linux with Wayland** the system may pass the key to Arkenda only while an X11 app has the focus, and
without X11 support it cannot be registered at all; the row says so. Arkenda does not use the desktop portal for
global keys yet.

## The notch outside the app (desktop app, an experiment)

Turn on **Settings ▸ Experimental ▸ Activity notch outside the app** (this device only, off by default) to see the
island while another app has the focus: a small dark pill at the top centre of the screen Arkenda's main window is
on, a few pixels below its top edge (below a top panel on Linux).

- It shows the same thing as the island in the app (the most urgent activity and **+N** for the others) and is not
  there while nothing runs.
- **Point at it** and rest a moment (about a third of a second): it opens with the same list and buttons as the
  island in the app, and **Quick capture**, which brings Arkenda's main window forward and opens
  [quick capture](#quick-capture) there. Move the pointer away and it closes. A line of a list (an event, a task)
  opens its note in the main window, which comes forward; the other buttons (Pause, Stop, Cancel…) act without
  bringing it forward.
- **Clicks go through it** while it is closed: the app under it gets them. It never takes the keyboard.
- **While you drag a window** it gets out of the way (Windows 11 opens its Snap layouts bar at the same place) and
  comes back when you let go. On Windows this works for every app's windows; on Linux with X11 for Arkenda's own
  only; on Linux with Wayland it stays where it is.
- It follows the main window to another monitor, and moves when monitors are added, removed or rearranged (on
  Wayland it opens on the main window's monitor and stays there until the experiment is turned off and on again).
- **Privacy:** closed, it shows no note text, as in the app. A note's title reaches it only while it is open and
  **Hide note titles in the activity island** is off; it then shows, as in the app, only while you point at its line.
  Where the system allows it (Windows) it is left out of screenshots and screen recordings.
- It closes when you turn the experiment off, and with Arkenda's main window.

**Where it works:** the desktop app on **Windows**, on **Linux with X11**, and on **Linux with Wayland** on **KDE
Plasma** and **wlroots desktops** (Sway, Hyprland, labwc, river…) when the **gtk-layer-shell** package is installed.
A Wayland app cannot place its own window or keep it above the others; those desktops offer a layer for panels and
overlays (`wlr-layer-shell`), which the notch uses. **GNOME** does not offer it, so on GNOME with Wayland nothing is
shown and the island inside Arkenda stays. Some X11 window managers put full-screen windows above it. Not on the
web, a phone or (on hold) macOS.

**On Linux with Wayland, install gtk-layer-shell** (the GTK 3 library, version 0.6 or later; Arkenda loads it only
when the notch is turned on, and starts without it):

| Distribution | Command |
| --- | --- |
| Arch, Manjaro, CachyOS | `sudo pacman -S gtk-layer-shell` |
| Debian, Ubuntu | `sudo apt install libgtk-layer-shell0` |
| Fedora | `sudo dnf install gtk-layer-shell` |

Then turn the experiment off and on again. If it cannot be shown, turning it on says why: **needs gtk-layer-shell**
(the library is missing), **this desktop doesn't support it** (GNOME, or another compositor without the layer
protocol), or that it could not be shown. On Wayland the notch opens when the pointer rests on it, from the pointer
events the compositor sends it (no app can read the pointer's position there), and only the pill takes clicks while
it is closed.

### The drop shelf

**Drag files onto the notch** (from a file manager or the desktop) to file them without switching to Arkenda. While
the drag is over it, the notch turns into two drop targets:

- **Open note:** the files are added to the note open in Arkenda's main window when you drop them (switching tabs
  while they are saved does not move them): at the cursor when its editor is open (as a drop in the editor would),
  otherwise as the note's last lines. Shown only while a note is open. A note you can only read (a shared note you
  were given to read, or a file Arkenda can no longer write) is never changed: the files go into a new note, and the
  island says so.
- **New note:** a new note holds the files, titled after the first file's name (or **Dropped files**), created
  where quick capture creates the inbox note. Control and text-direction characters are left out of the title, and
  a long name is cut to the 200 characters a title takes.

Images show as images, audio and video as players and any other file as a card, as for any upload, with the same
size limits; a file already in the vault gets another reference to the one stored copy. The island shows
**Dropped files · Saving…**, then **Captured**; if they could not be saved, it keeps them with **Retry** and
**Discard**. The main window is not brought forward. Folders, links and anything that is not a file are ignored.

**When it takes a drop:**

- Only while the notch is shown, that is while something runs (a sync, a timer, a recording…). With nothing
  running the notch is hidden and cannot receive a drop.
- **Windows and Linux with X11:** closed, the notch lets the pointer through, so hold the dragged files on the pill
  for about a third of a second: it opens, and the next move of the pointer reaches it (the drop targets then show).
- **Linux with Wayland** (KDE, wlroots): the pill takes the drag at once.
- Drop on one of the two targets: a drop beside them does nothing. The files are read within a minute of the drop
  (they must still be the same files); after that, drop them again.
- On Wayland, holding the dragged files still over the notch for more than a second and a half hides the targets
  until the pointer moves again (Arkenda cannot see the pointer there, so it ends a drag it no longer hears from).

**What it can do:** it is a second, small window that loads only the island (no editor, no vault, no sync). It gets
its own permissions, which let it receive the activities, report its size, send a click on one of them back to the
main window, and ask for quick capture; nothing else: no files, no vault, no keys, no network. Files dropped on it
never reach its page: Arkenda keeps them for the main window, which reads and stores them as it does its own drops. A click runs only if
the activity it was shown with is still the same one (as in the app).

## On Android: a notification (an experiment)

Turn on **Settings ▸ Experimental ▸ Activity in a notification** (the Android app, this device only, off by
default) to see what Arkenda is doing while you use other apps, as one ongoing notification.

- The first time you turn it on, Android 13 and later ask whether Arkenda may post notifications. Arkenda asks
  once: if you refuse, a note says so, and you can allow notifications for Arkenda later in the system's
  settings (the notification then shows without turning the experiment off and on).
- It shows the most urgent activity, ranked as the island ranks them, and **+N** for the others: a focus timer
  counting down, a recording counting up, an export or another job with its progress bar, a sync, a request.
  Nothing is there while nothing runs; it goes away when the last activity ends and when you turn the experiment
  off.
- On **Android 12 and later**, up to **two buttons** act on it without opening Arkenda: **Pause** or **Resume**,
  **Stop**, **Discard**, **Cancel**. On the lock screen, a button asks you to unlock first. A button runs only if
  it belongs to the activity the notification shows (a newer one under the same name is left alone). Buttons that
  need Arkenda on screen (Accept a pairing, Review, Details) are not there: **tap the notification** to open
  Arkenda. **Below Android 12** there are no buttons at all, because Android cannot make them ask to unlock
  first there: tap the notification to open Arkenda instead.
- **On Android 16** it asks to be shown as a **Live Update**: a chip in the status bar with the time or the
  percent. Android decides whether it shows (it can be turned off per app in the system settings).
- It is updated at most once a second (Android limits how often an app updates a notification); the timer's
  and the recording's time are drawn by Android itself.
- **Privacy:** it never shows a note's title (not even the note a focus timer is for), whatever **Hide note
  titles in the activity island** says, because a lock screen that shows all notification content would show it
  too. It never shows a pairing's device name or code either: only the activity's name ("Focus", "Export"), its
  time or progress, and its value. On a locked phone that hides sensitive content, it shows only the activity's
  name.

The notification is drawn by Arkenda's own Android plugin; the look is the system's. Not on iOS (on hold).

## Privacy

The closed island never shows the text of a note: only names, counts, times and percentages ("Next event
in 12 min", "Pairing request"); the tasks-due badge shows a count only. The open island shows a note's title (the note a focus timer is for,
an event's) or a task's text only while you point at its line. To never
show titles, turn on **Settings ▸ General ▸ Privacy ▸ Hide note titles in the activity island** (this
device only). The [Android notification](#on-android-a-notification-an-experiment) never shows titles,
whatever this switch says.

## For plugins

An in-process plugin shows its own activity with `ctx.activities.publish` (plugin API 1.2): a `timer` or a
`job`, with up to three buttons that call the plugin's own flows. Sandboxed plugins do not get it. See
`PluginLiveActivity` in [the plugin API](plugins/api.md).
