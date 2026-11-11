# Keyboard shortcuts

Arkenda's default keys follow the conventions shared by Google Docs, Word, Confluence, Notion,
Obsidian and VS Code. Almost every key below can be changed or removed in **Settings ▸ Keyboard**,
which also prints a cheat sheet; a key you set always wins over the default, and that page always shows
the key that applies on the device you are using. A few are fixed: undo and redo, the task date, and F2
on a tab.

Keys are written for Windows and Linux. On macOS read ⌘ for Ctrl and ⌥ for Alt. On a phone or a tablet,
the bottom bar, swipes, press and hold, and the back button do these jobs: see
[Phones and tablets](phone-and-tablet.md).

## Desktop app and web

Browsers keep some keys for their own windows and tabs (`Ctrl+N`, `Ctrl+W`, `Ctrl+Shift+T`,
`Ctrl+1` … `Ctrl+9`), and a web page cannot take them. So the web uses an `Alt` form of those keys,
and "Go to tab" has no default key there (use the palette). Rows marked "same" are identical.

## App

| Action | Desktop app | Web |
| --- | --- | --- |
| Find a note (the palette) | `Ctrl+P` | same |
| Find a note, second key | `Ctrl+O` | same |
| Command palette (opens on `>`) | `Ctrl+Shift+P` | same |
| Search the text of every note | `Ctrl+Shift+F` | same |
| Collapse or expand the sidebar | `Ctrl+\` | same |
| Collapse or expand the note list | `Ctrl+Shift+\` | same |
| Show or hide the inspector (right sidebar) | `Ctrl+Alt+B` | same |
| Settings | `Ctrl+,` | same |
| New note | `Ctrl+N` | `Ctrl+Alt+N` |
| Quick capture (one line into the inbox note, see [the activity island](notch.md#quick-capture)) | none until you set one (`Ctrl+Shift+Space` suggested); from any app with an experiment | same, inside Arkenda only |
| Zen mode | `Ctrl+Alt+Z` | same |
| Switch edit and preview | `Ctrl+Alt+P` | same |
| Cycle the note's status | `Ctrl+Alt+S` | same |
| Context menu (an experiment, on by default: turn it off in Settings ▸ Experimental ▸ App context menu) | `Shift+F10` | same |
| Terminal (an experiment) | `` Ctrl+` `` | — (desktop app only) |

## Tabs and panes

| Action | Desktop app | Web |
| --- | --- | --- |
| Close tab | `Ctrl+W` | `Ctrl+Alt+W` |
| Reopen closed tab | `Ctrl+Shift+T` | `Ctrl+Alt+Shift+T` |
| Next tab / previous tab | `Ctrl+Tab` / `Ctrl+Shift+Tab` | same |
| Move tab left / right | `Ctrl+Shift+PageUp` / `Ctrl+Shift+PageDown` | same |
| Go to tab 1 … 8 of the focused pane | `Ctrl+1` … `Ctrl+8` | none (the palette's "Go to tab") |
| Go to the last tab | `Ctrl+9` | none (the palette's "Go to the last tab") |
| Split right | `Ctrl+Alt+\` | same |
| Split down | `Ctrl+Alt+Shift+\` | same |
| Rename the tab's note | `F2` on the tab | same |

**Ctrl+Tab order** (Settings ▸ Editor ▸ Tabs, per device): **Linear**, the default, steps through the
focused pane's tabs in strip order. **Recent** steps through them most recently used first: hold Ctrl
and press Tab to go one tab further back (Shift+Tab one forward), and release Ctrl to stay on the tab
shown, which becomes the most recent. A quick Ctrl+Tab switches between the last two tabs; Esc while
Ctrl is still held goes back to the tab you started on. Each pane keeps its own order. The palette's
Next tab and Previous tab follow the same setting.

Maximize pane and Restore panes have no default key; they are in the tab's menu, the note's **…**
and the palette.

## Editor

| Action | Key |
| --- | --- |
| Undo / redo | `Ctrl+Z` / `Ctrl+Y` (`⌘⇧Z` on macOS) |
| Bold / italic | `Ctrl+B` / `Ctrl+I` |
| Strikethrough | `Ctrl+Shift+S` |
| Inline code | `Ctrl+E` |
| Insert link | `Ctrl+K` |
| Normal text | `Ctrl+Alt+0` |
| Heading 1 … 6 | `Ctrl+Alt+1` … `Ctrl+Alt+6` |
| Code block | `Ctrl+Alt+C` |
| Bulleted / numbered / task list | `Ctrl+Shift+8` / `Ctrl+Shift+7` / `Ctrl+Shift+9` |
| Indent / outdent | `Ctrl+]` / `Ctrl+[` (Tab and Shift+Tab in lists) |
| Insert a block (the "/" menu) | `Ctrl+/` |
| Block actions | `Ctrl+Alt+/` |
| Task date | `Ctrl+Alt+D` |
| Find / replace | `Ctrl+F` / `Ctrl+H` (also `Ctrl+Alt+F`) |
| Focus the selection bar, or a table's bar | `Alt+F10` |

The editor keys are the same on the desktop app and the web.

Highlight, subscript, superscript, clear formatting, callouts and `[[` note links have no default
key: they are in the toolbar row, the selection bar and the palette, and you can give them one in
**Settings ▸ Keyboard**. Clear formatting has none on purpose: its usual keys are taken (`Ctrl+\` is
the sidebar's, `Ctrl+Space` the editor's completion).

## Keys the Markdown editor gave up

`Ctrl+Shift+\` (jump to the matching bracket) and `Ctrl+Alt+\` (re-indent the selection) do nothing in
the editor: the panes use them.

## Plugins

A plugin cannot take a key that a built-in action uses, nor `Ctrl+K`, `Ctrl+P`, `Ctrl+O`,
`Ctrl+Shift+P`, `Ctrl+Shift+F`, `Ctrl+\` and `Ctrl+Shift+\`.

## Layouts and AltGr

Shortcuts match the physical key when Alt, Shift or your keyboard layout changes the character typed,
so `Ctrl+\` works on layouts where `\` needs another key. A key pressed with AltGr is never a
shortcut: AltGr types characters.

See also [The desktop layout](desktop-layout.md) and [Phones and tablets](phone-and-tablet.md).
