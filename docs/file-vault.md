# Folder vaults (desktop)

On the desktop app, a vault can be a folder on your disk. The folder is the source of truth:
your notes are plain `.md` files you can open, edit, move, sync or version with any other tool,
and Arkenda follows those changes.

Open one with **Open folder…** in the vault switcher (sidebar) or in **Manage vaults**. Folders
you opened before are listed there too.

## Choosing a vault

The vault switcher (the vault's name at the top of the sidebar) is the vault picker, the same on
every platform: the vaults known on this device, most recently opened first, and three ways to
another vault. One that this device can't offer stays in the list with the reason.

- **New vault…** creates an empty vault by name and opens it. On the desktop and the web it is
  stored in the app (the browser's storage on the web); in the Android and iOS apps it is a folder
  of Markdown files in Arkenda's own folder (on iPhone and iPad it shows in the Files app).
- **Open a folder…** opens a folder of Markdown files: the folder picker on the desktop, the
  system's folder picker on Android. iOS offers only Arkenda's own folder; the web has no folders.
- **Join from a paired device…** opens Settings ▸ Sync & devices with the code entry: show a
  pairing code on the device that has your notes and enter it here. Its notes arrive by sync in a
  new vault on this device; the vault that is open is not changed.

On phones the picker fills the screen. Press and hold a vault (or use its **⋯** button) to rename
it or remove it from the list; removing it never deletes its notes. A vault stored in the app also
keeps a copy of its note list (titles, tags, notebooks, dates; never the notes' text) in the
browser's storage of this device, so a large vault shows its list while it is still loading. That
list is read-only until the vault is open; the copy is never synced or exported, and removing the
vault from the list deletes it. Folder vaults don't keep one. The first time the Android or
iOS app starts, the picker opens by itself; close it to keep writing in the vault that is already
open. When a vault can't be opened, the picker is on that page too.

## How the folder maps to notes

| On disk | In Arkenda |
| --- | --- |
| A folder (nested folders too) | A notebook (nested notebooks) |
| A `.md` file | A note; the file name (without `.md`) is the title |
| `.trash/` at the root | The trash; a trashed note keeps its folder path inside it |
| `attachments/` at the root | Images and files you add to notes (`<sha-256>.<ext>`) |
| `.arkenda/` | Arkenda's own data (see below); never shown as notes |

Hidden entries (`.git`, `.obsidian`, `.DS_Store`…) and `node_modules` are ignored.

Renaming a note renames its file, and moving it to another notebook moves the file. When a name
is taken, Arkenda adds a number (`Note (2).md`). Names stay valid on Windows, macOS and Linux: it
removes characters such as `/ \ : * ? " < > |`, a leading dot and reserved names such as `CON`.

### Frontmatter

Notes keep their metadata in YAML frontmatter, only when they need it:

```markdown
---
tags: [work, ideas]
pinned: true
created: 2025-03-01T09:30:00.000Z
id: 4f1c…
---
# The note body
```

The keys Arkenda reads (the Properties panel in the right sidebar lists them under "Used by
Arkenda", with what each one does, and its "Keys Arkenda understands" reference repeats this table):

| Key | What it does | Example |
|---|---|---|
| `tags` (or `tag`) | The note's tags, as a list or one per line. | `tags: [work, ideas]` |
| `pinned` | `true` keeps the note at the top of lists. | `pinned: true` |
| `status` | The note's status: the id of one from Settings ▸ Statuses. | `status: in-progress` |
| `created` | When the note was created. | `created: 2026-03-01T09:30:00Z` |
| `id` | A stable identity across renames and moves outside Arkenda (letters, digits, `-`, `_`). | `id: project-plan` |
| `type` | What the note is: `note`, `event`, `whiteboard` or `pomodoro-log`. | `type: event` |
| `start`, `end` | When an event starts and ends: a day or a date and time; the note shows on the calendar. | `start: 2026-11-02T14:00` |
| `due` | A deadline: a day or a date and time; the note shows on the calendar. | `due: 2026-11-05` |
| `allDay` | `true` for an event that takes whole days. | `allDay: true` |

`title`, `notebook`, `updated` and `trashed` are used only by Arkenda's export and import
(archives); in a vault the file name and its folder decide a note's title and notebook. Any other key
is yours: Arkenda never changes it, and the Properties panel lists it under "Your properties".

- `tags` (or `tag`), `pinned` and `created` are written only when they have a value to keep:
  an unpinned, untagged note has no frontmatter.
- `id` keeps a note's identity across renames, moves and copies made outside the app. Arkenda
  does not add it on its own; you can add your own (any unique value). Without it, Arkenda still
  recognizes moved and renamed notes from what it remembers on this device and from their content.
- Arkenda changes only these keys. Your other keys, their order, comments, quoting, line endings
  (CRLF) and a byte-order mark are kept byte for byte.
- When the frontmatter cannot be changed safely (malformed YAML, flow-style mappings), Arkenda
  leaves the file alone, keeps the change on this device and shows a warning.
- When the frontmatter is not valid YAML at all, Arkenda ignores every key in it (the note opens
  without its tags, status or id), never changes the file, and says so: a vault warning names the
  file, and the Properties panel explains it.

## What Arkenda writes, and when

- **Your edits**: about 0.75 s after you stop typing, when you leave the note or the editor loses
  focus, and when you close the window. The editor shows whether the note is saved.
- **Every write is atomic**: Arkenda writes a temporary file, flushes it to disk, then renames it
  over the note, so no other program ever sees half a file.
- **Every save checks the file first**: a save only goes over the version of the file it was
  based on. If the file changed meanwhile, nothing is overwritten (see Conflicts).
- **Before overwriting**, the previous text is kept as a version on this device.
- **Unsaved edits survive a crash**: they are kept in a journal on this device and restored the
  next time you open the note ("Restored unsaved changes").
- **Deleting a notebook** never deletes files: its notes move to the trash.

### `.arkenda/`

| File | Contents |
| --- | --- |
| `vault.json` | The vault id (the same on every computer that opens the folder) and format version |
| `plugins.json`, `plugin-data/<plugin id>.json` | Which plugins are enabled, and their settings |
| `installed-plugins.json` | Plugins installed in this vault |
| `attachments.json` | Original names of the files in `attachments/` |
| `media-folders.json` | Media folders, which folder each file is in, and each notebook's folder (see [Media](media.md#media-folders)); written only once you use them |

These files travel with the folder, so plugin settings follow the vault to another computer.
A damaged file is never overwritten: Arkenda keeps a `*.corrupt-<time>` copy and starts from
defaults.

Arkenda also keeps a few things **on this device only** (not in the folder): an index to list a
large vault instantly, the unsaved-edits journal and the note versions.

## Changes made outside Arkenda

Arkenda watches the folder. Changes from other editors, sync tools or `git checkout` appear
within a second or so; a burst of thousands of changes is applied in one pass.

- A note open in the editor and not edited in Arkenda updates in place.
- A note edited on both sides is merged when the edits touch different lines.

### Conflicts

When your unsaved edits and the change on disk touch the same lines, the editor shows a conflict
banner. Nothing is lost while it is shown. Choose:

- **Keep mine**: write your text over the file.
- **Take disk version**: load the file and drop your edits.
- **Save mine as copy**: keep your text as a new note "*Title* (conflict *date time*)" and load the file.
- **Compare**: see both texts side by side first.

A trashed or deleted note becomes read-only in the editor; your buffer stays visible so you can
copy it.

## When the folder is unavailable

If the folder is unplugged, moved, renamed or its permissions change, Arkenda keeps working from
what it already knows and shows the problem in the vault problems indicator. Edits that
cannot be written stay in the unsaved-edits journal and are retried; the editor says so. If the folder watcher stops, Arkenda rescans
every minute and whenever the window gets focus.

Use **Reconnect folder** there once the folder is back; no restart is needed.

## Limitations

- **Desktop only.** Folder vaults need the desktop app. In the browser, Arkenda keeps the vault
  in the browser's storage (IndexedDB) and can be exported as a portable archive; turning an
  export into a folder vault is not in the app yet. Read-only browser snapshots and sharing of folder vaults come later.
- **One folder vault per app process.** Opening a folder in a second window replaces the folder
  of the first window; use one window per folder vault for now.
- **Only `.md` files are notes.** Other files in the folder are left untouched and not shown.
