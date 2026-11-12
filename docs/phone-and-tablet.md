# Phones and tablets

Arkenda picks one of three layouts from the window's width and the kind of pointer:

| Window | Layout |
| --- | --- |
| Up to 720 px wide (a phone, or a narrow window) | **Phone:** one screen at a time, with a bar of destinations at the bottom. |
| 721 to 1023 px wide, on a touch screen (a tablet held upright) | **Tablet:** the list and the note side by side, the sidebar and Details as drawers; see [Tablets](#tablets). |
| 721 to 1023 px wide, with a mouse or a trackpad | **Computer:** a window that wide with a mouse keeps the desktop layout, see [The desktop layout](desktop-layout.md). |
| 1024 px wide and more | **Computer**, also on a tablet on its side; see [On its side](#on-its-side-1024-px-wide-and-more). |

The desktop app on a computer always counts as a mouse, even on a touch screen. Keys are in
[Keyboard shortcuts](keyboard-shortcuts.md); on a phone or a tablet, the gestures below do the same jobs.

## The bottom bar

| Destination | What it shows |
| --- | --- |
| **Notes** | Your views, notebooks and tags, then a list, then a note. |
| **Today** | The day: a week strip, the day's events and your tasks; see [Today](#today). Shown only while the Todos or the Calendar experiment is on (Settings ▸ Experimental); otherwise the bar has three destinations. |
| **Search** | The palette, full screen: notes by default, `>` for commands, `#` for tags. |
| **More** | Kanban, Whiteboards and Calendar (while their experiments are on), the dashboard, Devices and sync, the trash and Settings; see [Settings](#settings). |

- **Notes** returns to where you were in it. Tap it again while you are in Notes to go back to its top level.
- **Scrolling** a list down hides the bar to give the list more room; scrolling up, or reaching the top, brings it
  back. The bar also hides while the on-screen keyboard is up, in zen mode and inside a note (back and the note's
  band take you out of it; see [A note](#a-note)).
- When an experiment such as Todos becomes a regular feature, Today and its entries in More stay where they are.

## The + button

A floating **+** sits above the bar:

- on **Notes** (its top level and the lists, not an open note), it makes a new note in the list you are in;
- on **Today**, it makes a new task (the quick add of your tasks) while Todos is on, and a new note otherwise.

It is not shown on More or with the keyboard up, and while the bar is hidden by a scroll it folds to its icon.
Press and hold **+** to make the other one: a note from Today, or a task from Notes (while Todos is on).

## Today

Today is one scroll for the day, each part shown while its experiment is on:

- **The week strip** at the top, starting on your language's first day of the week; a dot marks a day with an event
  or an open task. **Swipe it sideways** to move a week; **pull it down** to open the month and pick any day.
  A picked day shows that day, with **Today** to come back.
- **The day's events** (Calendar), all-day ones first. Tap one to open its note. Moving and resizing events stay in
  More ▸ Calendar, with the month and the week.
- **Your tasks** (Todos): overdue, due today and the next seven days (on another day, that day's tasks). Tick one to
  finish it; tap its text to open its note at the task's line, in Notes.
- **+** adds a task due on the day shown to your inbox note.

## A note

A note on a phone keeps one band at the top and gives the rest of the screen to the text: there is no bottom bar,
no status bar and no row of tabs inside a note.

- **The band** holds, from left to right: **←** (back to the note's list), the **title** (tap it to rename the
  note; Enter or tapping elsewhere keeps the new name, Escape keeps the old one), who else is in the note, the
  **sync dot**, the view button (the text or its preview) and **…**.
- **The sync dot** shows sync's state as in the list header (green: up to date; the accent colour with a halo:
  syncing; grey: off; red: needs you); tap it for the **status sheet** (see [The status sheet](#the-status-sheet)).
- **…** opens the note's menu as a sheet: **Details**, **Open tabs**, Rename, Pin, the status, Move, the tags,
  Export, Share and the trash, plus what your plugins add. On Android, **Export ▸ PDF** opens Android's print
  dialog: choose **Save as PDF** there, or a printer. On an iPhone or iPad, PDF is not available yet.
- **Details** opens as a sheet from the bottom of the screen, with a handle at its top. Under its title come the
  tabs of the right sidebar's panels, then the note's details (status, notebook, tags, when it was made and last
  changed, the word count), then the chosen panel (outline, backlinks and the others), and it ends with what a computer shows in its status bar: where the
  notes are stored, the **Update available — Reload** notice, the folder's problems, sync's state with its
  details, and your status bar items. **Edit tags…** in the menu opens Details at the tag field.
- Close Details by swiping it down, tapping above it, with **Escape** or with **back**. While it is open the
  keyboard stays inside it; when it closes, the focus goes back to **…**.
- **Open tabs** lists the notes you have open as tabs: tap one to switch to it, or **Close tab** to close the one
  you are in (a pinned tab stays). The tab keys work as on a computer with a keyboard attached.

### Reading and editing

- **A note you open shows its preview**, so the keyboard never jumps over what you came to read. **A new note**
  opens ready to type, with the cursor in the text and the keyboard up, the first time you open it, however it was
  made: the **+**, **New note** in the palette or with its key, a notebook's menu, a `[[` link or a plugin.
- **The view button** in the band, or **Ctrl+Alt+P** with a keyboard attached, switches between the text and its
  preview. On a phone this is only for the note you are in: the next note opens in preview again, and the mode
  you chose on your computer or tablet is left as it was. A phone has no side-by-side view.
- **The formatting bar** sits right above the keyboard while you type, and is gone when the keyboard goes down or
  in preview. It has the same tools as a computer's toolbar, in your order (Settings ▸ Editor ▸ Toolbar
  buttons, chosen on a computer or a tablet: a phone does not list that page), with your hidden tools left out
  and your plugins' buttons at the end; swipe it sideways for the rest. At its end,
  **…** lists every tool in a sheet, and **✓** ends editing: the keyboard goes down and the note shows its preview.
  In a narrow window used with a mouse (the phone layout on a computer) there is no on-screen keyboard, so the
  bar stays in its place above the text.
- **Links** to web pages and mail addresses open in your browser or mail app on Android, never inside Arkenda.
  The picture and media viewer, the annotation editor and the PDF reader keep clear of the system's status bar,
  navigation bar and notch.
- **Menus** of the bar (Text style, Lists, Callout, more formatting) open as sheets from the bottom of the screen.
- **Selecting text** (press and hold a word, then drag the handles) shows the phone's own Cut, Copy and Paste
  menu above the selection and a small formatting pill below it (above it when the selection is near the
  bottom); both work, and neither covers the text. Turn the pill off in Settings ▸ Editor
  (**Show formatting on selection**), as on a computer.
- Find, the outline, zen mode, the **/** menu and the **[[** note suggestions work as on a computer.
- **The text** is a little larger on a phone than on a computer: 16.5 px with a line height of 1.6, 20 px from
  each edge, in the text and in its preview. A size or line height you choose in Settings ▸ Editor is used
  instead, on the phone too (choosing the default again, 15 px at 1.5, gives the phone's 16.5 px at 1.6).

## The status sheet

A phone has no status bar. What it would show is one tap away, on every screen with a list header: the
**sync dot** at the end of the note list's header, of the Notes top level (Browse) and of a note's band.

- **Tap the dot** to open the status sheet from the bottom of the screen: where the notes are stored, the
  **Update available — Reload** notice, the folder's problems (tap them for the list and **Reconnect**), sync's
  state (tap it for what went wrong when it is red), and your status bar items and tools in your order. It is the
  same status bar Details shows, moved into the sheet while it is open, so a timer or another item keeps running.
- **A small badge** on the dot means something needs you: a new version is ready to load, or the folder has
  problems. The dot's name says which, for screen readers too.
- Without sync, the dot is grey and still opens the sheet.
- Close the sheet by swiping it down, tapping above it, with **Escape** or with **back**. While it is open the
  keyboard stays inside it; when it closes, the focus goes back to the dot.

## Lists

- **Row heights follow the layout:** Settings ▸ Appearance ▸ Density ▸ Note list rows (compact, comfortable,
  spacious) gives a phone 56 / 66 / 76 px rows and a tablet 52 / 60 / 68 px, so a row is never under 44 px; a
  computer with a mouse keeps 48 / 56 / 64 px. Turning the device or resizing keeps the note at the top of the list
  where it was.
- **Swipe a note right** to pin it (or unpin a pinned note).
- **Swipe a note left** to show **Move** and **Delete**; a long swipe left deletes at once. Delete moves the note
  to the trash, and **Undo** in the message at the bottom brings it back for a few seconds. The note stays in the
  trash until you empty it either way.
- **Press and hold** a note (or a notebook, a tag, a tab) for its menu, as a sheet from the bottom of the screen:
  the same items as a right-click on a computer.
- **Pull the list down** from its top, on the Notes list or the Notes top level, to sync now. The line at the top
  says what happens: syncing and when it is done, or that sync is off on this device or no other device is paired
  yet. On a folder vault it also reads the changes made outside Arkenda, as Refresh does.
- To turn the swipes off (if you swipe by accident), use **Settings ▸ Note list ▸ Gestures ▸ Swipe actions on note
  rows**. The setting is per device.
- **Tasks, the calendar, the board, the whiteboards and the dashboard** use the same touch sizes: rows, cards, day
  cells and their buttons are at least 44 px. On the board, press and hold a card for **Move to…** (a sheet on a
  phone, a popover on a tablet); the board shows one lane at a time on a phone.

## Settings

On a phone and a tablet, Settings is a list you go into and back out of:

- **Settings** (in More) is the list: the search at the top, then the groups (Basics, Workspace, Shortcuts,
  Extensions, Sync & devices, Data & storage), each section with one line saying what it holds, and About at the
  foot. Tap a section to open it as its own page; the back arrow at its top goes back to the list.
- A search result opens its section scrolled to the setting.
- Every page fits the screen: rows stack, and every button, switch, field and colour swatch is a 44 px target.
- On a phone, each card's title sits above the card, a page's tabs are one row you swipe sideways, and
  **Reset this page** is at the end of the page.
- What a phone has no use for is not listed there; the search still finds it, greyed ("Not available on this
  device"):
  - **Keyboard** (a tablet can have a keyboard, so it is listed there);
  - in **Editor**: the toolbar buttons (the phone's formatting bar is docked above the keyboard), the tabs, the
    reading width, scroll sync and the Markdown map;
  - in **Workspace**: Layout presets, Panels & status bar and Widgets placement;
  - in **General**: the activity island's titles (a phone shows no island).
- A tablet lists everything but the status bar items (it has no status bar).
- Sections that need the desktop app (the window, the window effect, the S3 mirror on the web) are not listed where
  they cannot work.
- An old link to a setting (from a note, a message or the palette) still opens the right page and setting.

## Going back

- **Android:** the back button or gesture first closes what is open (a menu, a sheet, the search, a drawer,
  Details), then goes back through the screens you visited (a note, its list, the Notes top level; in Settings, a
  subpage, its section, the list, then More).
  From the Notes top level it leaves the app.
- **Swipe from the left edge** to go back the same way, without ever leaving the app. On Android with gesture
  navigation, the system's own edge gesture is the back gesture above.
- **In a browser:** the browser's back button goes back through the same screens. In Search, the ← at the start
  of the field closes it.

## Sync in the background

On the Android app, **Save battery** (Settings ▸ Sync & devices ▸ Connection ▸ Battery, on by default) pauses sync
while Arkenda is in the background, so the phone does not warn about battery use; your edits are still saved, and
sync catches up as soon as you open Arkenda again. Turn it off to keep syncing in the background. See
[Sync in the background](sync.md#sync-in-the-background-phones).

## Media

Pictures, audio, video and other files work as on a computer. **Take photo**, **Record video** and **Record audio**
in the insert menu (the formatting bar's **…**, or **/**) open the camera or recorder. Galleries become a swipeable
strip, PDFs open full screen in the reader, and the media library and the trash are under **More**; press and hold
an item for its menu. In the trash, **Empty trash** is in the **⋯** menu at the top. See [Media](media.md) for
everything else.

Every page on a phone (Settings, the media library, the trash, More, Today, Inbox, Todos, Calendar and the others)
has the same margins, its title with at most one button beside it, and its tabs or filters in one row you swipe
sideways.

## The activity island

On a tablet, while something runs (a sync, the focus timer, an export), a small pill at the top edge of the
screen shows it; tap it for its buttons. A phone shows nothing there. On Android, turn on **Settings ▸
Experimental ▸ Activity in a notification** to see the same activity as an ongoing notification, outside
Arkenda too: a timer or a recording with its time, a job with its progress, and up to two buttons (Pause,
Stop, Discard…); on Android 16 it can show as a chip in the status bar. See
[On Android: a notification](notch.md#on-android-a-notification-an-experiment).

## Tablets

### Upright (721 to 1023 px wide, touch)

- **The list and the note** sit side by side. Drag the line between them to resize the list; drag it all the
  way to the left to fold the list away (or use the key for it), and ☰ **All notes** above the note shows it
  again.
- **The sidebar** (views, notebooks, tags, statuses, Settings) opens as a drawer over the list: tap **☰** at the
  start of the list header, or swipe in from the left edge. Choosing something in it closes it.
- **Details** (the right sidebar: outline, backlinks and the other panels) opens as a drawer from the right:
  tap its button at the end of the note's tab row.
- Close a drawer by tapping outside it, with **Escape**, or with **back** (Android's back button or gesture).
  While a drawer is open, the keyboard stays inside it; when it closes, the focus goes back to where it was.
- **There is no status bar.** The **sync dot** in the list header shows sync's state (green: up to date;
  the accent colour with a halo: syncing; grey: off; red: needs you); tap it for **Devices and sync**, or, when it
  is red, for Details, where the sync line opens what went wrong (and **Dismiss**).
- **The bottom of Details** holds everything the status bar shows on a computer: where the notes are stored, the
  **Update available — Reload** notice, the folder's problems (with **Reconnect folder**), sync's state with its
  details, the **word count** and the other items, and the tools you placed in the status bar (tap one to open it).
  It is the same bar, moved into Details while Details is open, so nothing in it starts twice.
- **Press and hold** a note, a notebook, a tag or a tab for its menu, as a popover next to it (on a phone it is
  a sheet). A note's text keeps the system's own press and hold, for selecting text.
- Buttons are at least 44 px, for fingers: in the list header and the drawers, and in the note's tab row (the
  tabs and their close buttons, the view buttons, ☰, **…** and the Details button, the row being 44 px high) and
  in its formatting toolbar (every tool and menu, **⋯** and **Details**). The toolbar then fits fewer tools in a
  row; the rest are under **⋯**, as on a narrow window. The same holds on the settings pages and in Tasks, the
  calendar, the board, the whiteboards and the dashboard.
- **Settings** is the same list and pages as on a phone (see [Settings](#settings)), with everything listed but the
  status bar items.
- On Android with gesture navigation the left edge belongs to the system's back gesture, so there **☰** opens
  the sidebar.

### On its side (1024 px wide and more)

A tablet in landscape gets the computer's layout: the sidebar, the list and the note. On a touch screen
(a phone or a tablet, not the desktop app) three things change:

- the sidebar **starts as its icon rail**, to leave room for the note; tap ☰ on the rail to show the whole
  sidebar over the note, or the expand button under it (or the sidebar key) to keep it open until the app
  starts again;
- the note area splits into **two panes at most**. A layout with more panes, saved on a computer, is
  kept: the tablet shows the main pane and the one you were in;
- the note's tab row and formatting toolbar have the upright tablet's 44 px buttons.

A computer window of the same width, used with a mouse, is unchanged. On a device with both (a 2-in-1 in a
browser), the sidebar follows the pointer you use: switching to touch puts it on its rail, unless you expanded it
yourself since the app started; switching back to the mouse shows it again, unless you collapsed it.
