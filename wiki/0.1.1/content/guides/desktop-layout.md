---
label: "The desktop layout"
description: "On a window wider than 1023 px (the desktop app, and the web app on a large screen; a tablet shares most of it), Arkenda shows four panes side by side: the sidebar on the left, the note list, the note with its tabs…"
order: 2
tags: ["desktop","layout","windows"]
publishedAt: "2026-11-06"
updatedAt: "2026-11-06"
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
  default these are **All notes**, **Today** (while the todos or the calendar experiment is on) and
  **Media**, the media library.
- **More** opens a grid with every other view: Dashboard, Pinned, Unfiled, Trash, and the
  experiments' views (Todos, Calendar, Whiteboards, Kanban). A view added later starts there too.
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

Settings has two columns on a computer: the section menu on the left (pinned, with its own scroll, the six groups
and About at its foot) and the page on the right.

- **The page's header** (its title and one line) is its only introduction. Where a page has defaults, the header has
  one **Reset this page**, which asks first and says what goes back and what stays.
- **Cards** hold the settings: a heading and an optional line, then rows with the label and hint on the left and
  the control on the right. Help sits under **How it works** at the end of a card, after the controls.
- **Badges** (On/Off, Desktop only, Experimental) look the same on every page.
- The search above the menu finds a setting by its name or its keywords and opens its page scrolled to it; a setting
  that this device does not have is shown greyed with where it is available.
- `/settings` opens General. Old links (`/settings#theme`, `/settings/devices#lan`, …) open the page the setting
  moved to.
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

In the desktop app, **Settings ▸ Appearance ▸ Window effect** (an experiment, turned on under
**Settings ▸ Experimental**) lets the desktop show through the chrome: the rail, the tab and toolbar
rows, the status bar and the inspector. The note's text stays opaque, and the opacity rises on its own
where text would get hard to read.

While the effect is on, floating surfaces (menus, peeks, the selection bar and the palette) are
glass: they blur what is under them. With the effect off, when the system asks for reduced
transparency, and always on the web, they are opaque.

On Linux, see [Window effect on Linux](window-effect-linux.md) for what works on each desktop and
how to get a real blur.
