---
label: "The desktop layout"
description: "On a window wider than 1023 px (the desktop app, and the web app on a large screen; a tablet shares most of it), Arkenda shows four panes side by side: the sidebar on the left, the note list, the note with its tabs…"
order: 2
tags: ["desktop","layout","windows"]
---

# The desktop layout

On a window wider than 1023 px (the desktop app, and the web app on a large screen; a tablet
shares most of it), Arkenda shows four panes side by side: the **sidebar** on the left, the **note
list**, the **note** with its tabs and toolbar, and the **inspector** on the right (Outline,
Backlinks and plugin panels). A window 721 to 1023 px wide used with a mouse or a trackpad keeps
this layout too. Phones, and tablets held upright, have their own: see
[Phones and tablets](phone-and-tablet.md).

Keys below are written for Windows and Linux; on macOS read ⌘ for Ctrl. The full list is in
[Keyboard shortcuts](keyboard-shortcuts.md), and every key can be changed in **Settings ▸
Keyboard**.

## Panes, and collapsing them

Each pane can be resized by dragging its edge. Widths are remembered on this device.

| Pane | Starts at | Narrowest |
| --- | --- | --- |
| Sidebar | 220 px | 180 px |
| Note list | 280 px | 220 px |
| Inspector | 260 px | 240 px |

### The sidebar and its rail

- **Collapse** with the « button on its edge (shown on hover and focus), `Ctrl+\`, the status bar's
  sidebar toggle, the desktop app's title-bar sidebar button, or by dragging it narrower than 180 px.
- **Collapsed**, it becomes a 48 px **rail** of icons: the sidebar peek (☰), expand (»), the vault,
  Search, then your pinned views, **More** and your notebooks. Names show in tooltips, and a click
  still navigates.
- **Peek:** rest the pointer on the rail for 300 ms, or press ☰, and the whole sidebar slides over
  the content without moving it. It closes when the pointer leaves, on Esc, on a click outside, or
  after you choose something. Its pin keeps it open.
- **Restore** with » on the rail, the pin in the peek, `Ctrl+\` again, or the status bar's toggle.
- **On its own:** a window narrower than 1100 px starts with the rail. Widening the window never
  reopens a sidebar you collapsed yourself.
- **Focus:** collapsing moves the focus to the rail; a peek gives it back to where it was.

### Views and More

- **Pinned views:** the sidebar's Views list (and the rail) shows only the views you pinned. By
  default these are **All notes**, **Today** (while Todos or Calendar is on, as they are by default) and
  **Media**, the media library.
- **More** opens a grid with every other view: Dashboard, Pinned, Unfiled, Trash, and the
  views of Todos, Calendar and the experiments (Whiteboards, Kanban). A view added later starts there too.
  Its second group, **In the sidebar**, lists the pinned ones.
- **Pin or unpin:** the pin on a tile in More keeps that view in the sidebar or sends it back to More.
  A pinned view's menu in the sidebar (right-click, `Shift+F10` or the Menu key) has **Move to More**,
  and **Settings ▸ Workspace ▸ Panels and status bar ▸ Sidebar views** has an **In the sidebar**
  checkbox per view. Pins belong to this device and are never synced; the order (**Move up**,
  **Move down**) applies to the pinned views.
- **Keyboard:** in More, the arrow keys move between the tiles, Home and End go to the first and the
  last, Tab reaches the tile's pin, and Esc closes it and puts the focus back on More.
- **Where you are:** a view you opened from More marks **More** as the current place ("More, Calendar
  is open").
- The phone and the tablet keep their own navigation: Browse lists every view, and Today and More are
  in the bottom bar.

### The note list

- **Collapse** with the « button in the list's header, `Ctrl+Shift+\`, the status bar's list toggle,
  or by dragging it narrower than 220 px.
- **Collapsed**, it is gone, and a **☰ All notes · N** button at the start of the tab row (or at the
  top of a list page) names the list you are in.
- **Peek:** click that button, or rest the pointer on it for 300 ms: the list slides in over the
  content. Choosing a note opens it and closes the list, with the focus in the editor.
- **Restore** with the pin in the peek, `Ctrl+Shift+\` again, or the status bar's toggle.
- The list never collapses on its own.

### The inspector

`Ctrl+Alt+B` or the status bar shows and hides it. On the desktop it hides on its own while the window
is narrower than 1200 px; on a tablet it stays as you left it.

## The tab row

The open note is the active tab of its pane's tab row, and that row is the note's only header:

- **Left:** ☰ All notes (while the list is collapsed), then the tabs. Tabs shrink before the row
  scrolls.
- **Right:** who else is here, **Find**, the edit/preview switch, pin, delete, **…** (the note's
  menu) and zen. In a narrow pane, Find and zen fold away first, then pin and delete (both are also
  in **…**).

**Rename** a note in its tab: double-click it, press F2 on it, or choose **Rename…** in the tab's
menu or in **…**. Enter saves, Esc cancels.

Choosing a tab moves the focus into its note. Closing one gives the focus to the next tab.

Ctrl+Tab goes to the next tab, or to the one you used before it when **Ctrl+Tab order** is
**Recent** (Settings ▸ Editor ▸ Tabs; see [Keyboard shortcuts](keyboard-shortcuts.md)).

The note's **Details** (dates, tags, words) are closed by default; open them from the toolbar's
**Details** button. Your choice is remembered.

## The toolbar row

One row under the tabs, left to right:

- undo and redo;
- **Normal text ▾**: the paragraph or heading at the cursor, and the menu to change it;
- **B**, **I**, and **•••** (strikethrough, inline code, highlight, subscript, superscript, clear
  formatting);
- **Lists ▾**: bullets, numbers, tasks, indent, outdent;
- link, `[[` note link, image or file, table, emoji;
- **Callout ▾**: the eleven kinds; with text selected, it wraps the selection;
- **+ Insert ▾**: everything the "/" menu offers;
- your plugins' buttons, then **⋯** and **Details**.

When the pane gets narrow, buttons fold from the right into **⋯** (plugin buttons first). The
buttons you hid, the order you chose and renamed buttons in **Settings ▸ Editor** still apply.
Tooltips show each button's key, or its Markdown when it has none.

Highlight writes `==text==`; subscript and superscript write `<sub>…</sub>` and `<sup>…</sup>`.

The text's size and line height in **Settings ▸ Editor** apply to the note's text and to its preview.

## The selection bar

Select text and, after a moment, a small bar appears above it with the most used formatting: the
block style, bold, italic, strikethrough, code, link and `[[`, Callout and **•••**. It hides while you
type, on Esc, and when the selection goes. `Alt+F10` moves the focus into it (without a selection,
the same key reaches a table's bar); the arrow keys move between its buttons.

The bar is drawn on its own rounded surface, with no square box around it. Turn it off in
**Settings ▸ Editor ▸ Options ▸ Show formatting on selection**. On a phone it is a pill below the
selection (see [Phones and tablets](phone-and-tablet.md)).

## Split panes

A window can hold up to **four** note panes on the desktop and **two** side by side on a tablet.

- **Split right** (`Ctrl+Alt+\`) and **Split down** (`Ctrl+Alt+Shift+\`) copy the current tab into a
  new pane. Both are in the tab's menu, in the note's **…** and in the palette.
- **Drag a tab** onto another pane: near an edge it splits that side; in the middle it moves the tab
  into that pane. **Move to the next pane** in the tab's menu moves it without dragging.
- **Resize** by dragging the line between panes, or focus it and use the arrow keys.
  Double-click it to make both sides equal.
- **Maximize pane** shows one pane alone; **Restore panes** brings the others back.
- Closing a pane's last tab closes the pane, and the focus moves to its neighbour.

The layout and its sizes are remembered on this device. A window too small for the whole layout
shows part of it without changing what is saved.

## The palette

One palette finds notes, runs commands and opens tags. The prefix you type picks what it searches,
and the chips under the field do the same:

| Type | Searches | Opened by |
| --- | --- | --- |
| text | notes: titles first, then the text, then **Create note** | `Ctrl+P`, `Ctrl+O`, the sidebar's and the rail's **Search** |
| `>` | commands | `Ctrl+Shift+P` |
| `#` | tags; choosing one opens its notes | — |

`Ctrl+Shift+F` opens it on the full text of every note only. Backspace on an empty field goes back to
the notes.

On the desktop app, `Ctrl+1` … `Ctrl+8` go to that tab of the focused pane, and `Ctrl+9` to its last.
On the web, browsers keep those keys, so use the palette's **Go to tab** commands.

## Density

**Settings ▸ Appearance ▸ Density** sets one scale for rows, bands and bars: 24/32/40 px at
comfortable, 20/28/36 compact and 28/36/44 spacious. The note list keeps its own row height setting.
The note's tab row and toolbar row are bars of the same scale, and a toolbar button is a band less 4 px
(28 px comfortable, 24 compact, 32 spacious). On a touch screen (a tablet, upright or on its side) they
are 44 px at any density, for fingers.

## Settings

Settings opens as a large window over the app: what you were doing stays where it is, dimmed behind it. Close it
with **×**, **Esc** or the same key that opens it (`Ctrl+,`); the note you had open is just as you left it. The
browser's back button closes it too. Menus, questions and messages that a page opens show above it.

Inside it, Settings has two columns on a computer: the section menu on the left (pinned, with its own scroll, the six
groups and About at its foot) and the page on the right, which scrolls on its own. Moving between sections changes
only the page.

- **The page's header** (its title and one line) is its only introduction. Where a page has defaults, the header has
  one **Reset this page**, which asks first and says what goes back and what stays.
- **Cards** hold the settings: a heading and an optional line, then rows with the label and hint on the left and
  the control on the right. Help sits under **How it works** at the end of a card, after the controls.
- **Badges** (On/Off, Desktop only, Experimental) look the same on every page.
- The search above the menu finds a setting by its name or its keywords and opens its page scrolled to it; a setting
  that this device does not have is shown greyed with where it is available.
- `/settings` opens General over the view you are on (over the start page when Arkenda starts there). Links to a
  page (`/settings/appearance`) keep working, and old links (`/settings#theme`, `/settings/devices#lan`, …) open the
  page the setting moved to.
- **Settings ▸ Editor ▸ Markdown extensions** is the one place for every Markdown extension (spoilers, tabs,
  merged table cells, maps, slides…), the graduated ones and the experiments (badged **Experimental**), grouped as
  blocks, inline text, tables, and diagrams and maps. Each row has its switch, a sample of the syntax it adds and what
  it shows, the entry it adds to **+ Insert**, and **Only on this device**. Your choices follow the vault, so your
  other devices get them; with **Only on this device** checked, this device keeps its own choice for this vault
  (the box works once the vault is open). The page searches names, descriptions and syntax, and has **Turn all on**
  and **Back to defaults** (which asks first and resets the vault's choices for all your devices). Each extension
  loads only while it is on. Settings ▸ Experimental no longer lists them; a card there leads to the page.
- The typed comment syntax (the **Comments** extension: a ```` ```comments ```` block or `:::comment{…}…:::`
  in the text) was retired in 0.5.3. Notes that use it show it as plain text: the block as a code block, the
  inline comment as written. Nothing in the note changes. Comments on a selection of the note come later in 0.5.3.
- A narrow window keeps a menu button above the page instead of the left column.

## Media

Pictures, audio, video and other files go into a note by picking, dropping (from your file manager too) or
pasting them. A PDF card's
**Open beside** shows the reader next to the note. The palette opens the media library (**Open the media
library**) and the trash. See [Media](media.md) for upload, cards, galleries, annotation, the PDF reader,
`[toc]`, the trash and storage.

## The activity island

While something runs (a sync, the focus timer, an export or an import), the centre of Arkenda's title bar
shows it instead of the search field, with its buttons when you point at it; with the system's title bar it
sits at the top edge of the window. See [The activity island](notch.md). An experiment shows it outside the window
too, at the top centre of the screen (Windows, Linux with X11, and KDE or wlroots with Wayland): see
[The notch outside the app](notch.md#the-notch-outside-the-app-desktop-app-an-experiment). Files dragged onto it go
into the open note or a new note: see [The drop shelf](notch.md#the-drop-shelf).

## The window effect

In the desktop app, **Settings ▸ Appearance ▸ Window effect** (shown once **Window blur** above it is on;
off by default) has two choices, **None** and **Blur**: Blur lets the desktop show, blurred
by the system where it can, through the chrome: the rail, the tab and toolbar rows, the status bar and
the inspector. The note's text stays opaque. The **Translucent** choice (see-through without blur) was
removed in 0.4.0; a device that had it shows None, the app turns the effect off as it starts, and later
launches open an ordinary opaque window. Blur is kept.

While the effect is on, floating surfaces (menus, peeks, the selection bar and the palette) are
glass: they blur what is under them. With the effect off, when the system asks for reduced
transparency, and always on the web, they are opaque.

On Linux, see [Window effect on Linux](window-effect-linux.md) for what works on each desktop and
how to get a real blur.

## The browser window

In the desktop app, **Settings ▸ Experimental ▸ Browser window** (an experiment, off by default) adds
**Open web links in** to its card: **System browser** (as before) or **Browser window**. With
**Browser window** chosen, a plain click on a web link (in a note's preview, in Settings ▸ About…)
opens it in one Arkenda window instead of your browser. The next link replaces its page and brings it
to the front. Ctrl+click (Cmd+click on macOS), a middle click and mail links always use your system
browser.

The window's **Page** menu: **Back** (Alt+←), **Forward** (Alt+→), **Reload** (Ctrl+R), **Open in
system browser** (Ctrl+Shift+O) and **Close** (Ctrl+W). Its title follows the page, it follows the
app's light or dark theme (and its background while a page loads), and it remembers its size and place.

The pages there are kept apart from your notes: they cannot call the app, they keep their cookies and
storage in a folder of their own, they load only `http` and `https` addresses, a link that asks for a
new window (a sign-in, a payment) opens in a pop-up window with the same rules, and downloads are
refused (use **Open in system browser**). Each open page is a full browser engine (roughly 100–300 MB
of memory, plus what the site runs); closing the window frees it. Turning the experiment off closes
the window, and links go back to your system browser. The window and its pop-ups close with the last
Arkenda window. Changing **Open web links in** in one Arkenda window applies to every open one.

It is a window rather than a tab: on Linux, the app cannot place a browser view inside a pane yet.

## Opening Arkenda from elsewhere

One Arkenda runs at a time: starting it again brings the open window forward instead of opening a
second copy.

- **Note links:** an `arkenda://note/<id>` link (the address MCP clients get for a note) opens that note in Arkenda from
  another app or the browser. The installed packages register the link: `.deb`, `.rpm`, the Windows
  installers and the Microsoft Store package; the `.AppImage` registers it the first time it starts.
- **Markdown files:** open a `.md` file with Arkenda (double-click, or Open with) to edit it. A file inside
  the open folder vault opens as its note. Any other file is edited in place: it stays where it is and is not
  part of the vault (no sync, search or backlinks). Edits save to the file after a short pause, and if another
  app changed it meanwhile, Arkenda asks whether to reload that version or keep yours. Files up to 8 MB.
- **New note and Quick capture:** on Linux, right-click Arkenda in the launcher or the taskbar. From a
  terminal, `arkenda --new-note` and `arkenda --quick-capture` do the same, with Arkenda open or not. The tray
  icon's menu has them too (below).
- **Show in folder:** a note's menu opens your file manager with the note's file selected (folder vaults).
- **Share as file** (Windows, and browsers that can share files): a note's menu and the palette hand the note to
  another app through the system's share sheet (on Windows, Windows' own share window), as `<title>.md`; a file attached to a note has a **Share** button on
  its card. Where the window cannot share files (Linux has no share sheet), the action is not offered.
- **Notes in KRunner** (an experiment, KDE Plasma): with Settings ▸ Experimental ▸ Notes in KRunner on, the search
  (Alt+Space) finds your notes by title; Enter opens one in Arkenda, and a New note entry starts one with the words you
  typed. While it is on, other programs on your computer can also read your notes' titles through it.

## Reading aloud

**Read aloud** (in the palette, and in a note's **…** menu) reads the text you selected, or the whole note when
nothing is selected, with your system's own voice in the app's language. The front matter, code blocks and the
Markdown marks are left out; a link reads as its text and a picture as its description.

- A small bar at the bottom of the window shows how far it is (**Reading aloud · 3 of 40**), with **Pause** (it
  stops at the sentence it was reading and starts that sentence again when you press **Play**) and **Stop**.
  **Escape** stops too.
- Only voices on your device are used: nothing you read is sent to a speech service. Without a voice for the app's
  language, Arkenda says so; add one in your system's speech settings.
- **Linux:** Arkenda reads with speech-dispatcher (`spd-say`) where it is installed, else with the voices the
  window's engine has; with neither, Read aloud is not offered. **Windows:** the voices of Windows' own speech
  settings. **The web:** the voices of your browser that run on your device.

## Working with the system

- **The system tray** (Linux and Windows): Arkenda's icon in the tray (Windows' notification area; on Linux KDE
  Plasma's tray, or GNOME's with the AppIndicator extension) has **New note**, **Quick capture**, **Show Arkenda** and
  **Quit**. New note and Quick capture bring the window forward and do what the palette's commands do; Quit closes
  every window, each saving first. On Windows a click on the icon shows the window; on Linux a click opens the menu.
  It is on by default; turn it off in Settings ▸ General ▸ **Show Arkenda in the system tray** (this device only,
  at once).
- **Close to the tray:** shown while the tray is on, off by default. When it is on, closing the main window does
  not quit Arkenda: your edits are saved and the window hides in the tray. **Show Arkenda** (or opening Arkenda
  again) brings it back; **Quit** ends the app. On Linux it needs a desktop with a tray (KDE Plasma, or GNOME with
  the AppIndicator extension); without one, closing quits as usual. Other windows always close.
- **Start with the system** (Linux and Windows): Settings ▸ General ▸ **Start Arkenda with the system** opens Arkenda
  when you sign in (an entry in your autostart folder on Linux, the Run key on Windows). It is off until you turn it
  on, and the switch shows what the system has; if the system refuses the change, Arkenda says so.
- **Notifications** (Linux): the Pomodoro plugin's notifications show as your desktop's own; **Open** brings Arkenda
  forward. Elsewhere they show as before.
- **Taskbar** (Linux launchers that read it, such as KDE Plasma's, and Windows): an import, export or sync shows its
  progress on Arkenda's icon, and the icon counts the tasks that are due.
- **Staying awake** (Linux): while Arkenda records, imports, exports or syncs a lot, the computer does not suspend or
  go idle; it may again as soon as the work ends or the window closes.
- **Network and battery** (Linux): sync and the media policy see a metered connection, a low battery and power saver,
  as they do on Android, and wait for a better moment for large media.
- **Trash:** a note deleted forever from a folder vault moves its file to the system's trash (Linux and Windows), so
  you can still restore it there.
