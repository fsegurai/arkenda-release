# Media

Pictures, audio, video and other files live in your vault next to your notes. Everything here works on the
device: nothing is sent to a service to be read, converted or recognised.

## Adding files

- **Pick, drop or paste** a file into a note: a picture shows in place, audio and video get a player, and any
  other file (a PDF, a zip, a spreadsheet…) becomes a **card**. An upload shows its progress and can be cancelled;
  a file that cannot be added says why.
- **Dropping files from your file manager** works in the desktop app too, onto a note or a whiteboard. On Linux
  the app reads the dropped files itself first, so a large video takes a moment before its upload appears; a file
  larger than 2 GB is not added.
- **On a phone or tablet**, the insert menu also has **Take photo**, **Record video** and **Record audio**, which
  open the device's camera or recorder.
- **A voice memo** is recorded inside Arkenda, from quick capture's microphone button or **Voice memo** in the command
  palette (the web and the desktop app; see [the activity island](notch.md#voice-memo)). It is stored like an upload
  (the library, the trash, sync and playback work the same) and added to your inbox note as a line that plays it. A
  WebM memo shows a video player for now.
- **A screenshot** is taken from quick capture's camera button or **Screenshot** in the command palette (the desktop
  app on Linux and Windows; see [the activity island](notch.md#screenshot-desktop-app)), cropped to a region in Arkenda
  or kept whole, stored as a PNG like an upload, and added to your inbox note as a line that shows it; **Screenshot
  into this note** puts it at the cursor of the open note instead.
- **A screen recording** (an experiment, off by default: Settings ▸ Experimental ▸ Screen recording) is recorded inside
  Arkenda from quick capture's screen button or **Record screen** in the command palette (the desktop app on Linux and
  Windows; see [the activity island](notch.md#screen-recording-desktop-app-an-experiment)): VP8 WebM, at most 1920 px
  and 30 frames a second, stopped at 30 minutes or 492 MB so it still syncs. It is stored like an upload and added to
  your inbox note as a line that plays it.
- **Video formats:** MP4, MOV, WebM and MKV (Matroska), found from the file's bytes, never its name. An MKV plays
  in the note where the app's web view can decode it (the Linux desktop app plays most; on Windows and Android it
  depends on the codecs inside); where it can't, the player says it can't be streamed here and offers **Open in
  system player**. Arkenda 0.1.0 and 0.1.1 don't know MKV: they show such an embed as a broken picture and don't
  fetch its file from your other devices (an S3 mirror copies it as a plain file) until they are updated. An MKV added before this version stays a `.bin` file card.
- **Adding the same file again** inserts a new reference to the copy already stored; it is never stored twice.
- **Image compression on upload** (Settings ▸ Editor): **Balanced** (the default: at most 2560 px on the long
  edge), **High** (1600 px, smaller files) or **Off** (the photo as it is).
- **Location is removed from photos** on upload unless you turn off **Remove location from photos on upload**
  (Settings ▸ Editor, on each device). A compressed photo keeps no metadata at all.

## Cards: Open and Save

A file card shows the name, type and size. **Open** hands the file to an app of your device (a PDF viewer, for
example), and **Save** lets you choose where to put a copy. On the web, Save downloads it.

- A **PDF** card also has **Read** (see below), and on a computer or tablet **Open beside**.
- A **.csv** or **.json** card has **Preview**: a table or a tree, 100 rows at a time.
- A **.zip**, **.tar.gz**, **.tgz** or **.tar** card has **Contents**: the files inside, each with Preview and
  Save. Nothing inside an archive is ever run.

## Galleries, players and photos

- **Two or more pictures** in one paragraph (or on adjacent lines) become a gallery: a grid on a computer or
  tablet, a swipeable strip on a phone. A picture opens the viewer, which steps through its gallery; pinch or
  use the zoom buttons to look closer.
- **Timestamps:** write `[1:23]` (or `[1:02:03]`) in the text and it becomes a link that jumps the nearest player
  above it to that time. Each player has **Copy timestamp**.
- **Capture frame** on a video player saves the current frame as a picture just below the video.
- **Photo details** (in the viewer and the media library) show the date taken, the camera and, when the photo
  still has it, the location.

## Annotating and redacting a picture

**Annotate** (a picture's menu, or ✎ in the viewer) draws arrows, highlights, pen strokes, text and redaction
boxes over a picture. The drawing is kept in the note, the picture itself is not changed, and undo works as for
any edit.

**Redaction boxes hide, they do not erase.** The stored picture still holds the pixels under a box. Exports and
Print use a new picture with the drawing burnt in, and never the original. To get rid of the hidden part, use
**Save a redacted copy**: it stores a copy with the boxes burnt in and points the note at it. Then delete the
original in the media library.

## Reading PDFs

**Read** opens a PDF in Arkenda's reader: zoom, a page field and **Bookmarks** (the PDF's own outline). On a
computer or tablet, **Open beside** shows it next to the note. Pages are drawn only as you reach them, so a large
PDF opens quickly. Password-protected PDFs are not supported yet.

Select text, then **Copy link to highlight** (or **Insert link in the note**, when beside a note): the link opens
the reader at that page with the passage marked. **Copy link to page** links to the page. The reader lists the
notes that link to the PDF and their highlights.

## A table of contents

A line with only `[toc]` shows the note's headings as links, and follows every edit. `[toc:2]` lists only the
first two levels. It is in the **/** menu as **Table of contents**. Exports to the web and Print keep it as a
list; the Markdown export keeps `[toc]` as written.

## The media library

**The media library** (**Media** in the desktop sidebar, under **More** on the phone, **Open the media library** in the palette, or Settings ▸ Data & storage ▸ Storage) lists every
stored file with where it is used ("Used in 2 places"). A file's **Used in N places** menu in a note opens the
library at that file, in its folder.

- **Folders.** On the desktop the folder tree is on the left (**Attachments** is the top level, with every file);
  on a tablet or phone, **Folders** opens it as a sheet. Breadcrumbs show where you are, and a folder shows its own
  files with its folders as tiles above them; **Subfolders too** adds the files of the folders inside. **New
  folder**, and a folder's menu (**⋯** next to the breadcrumbs, or right-click a folder): Open, New folder inside,
  Rename…, Move to…, Download as .zip and Remove folder…. See [Media folders](#media-folders).
- **Grid or list.** The list shows each file's folder, size, date and uses. The phone starts with the list.
- **Search** looks in every folder. **Filters:** type, notebook (the files that notes of one notebook use),
  **Unused** (with its total and Select all), **In the trash** and size. **Sort** by newest, name, largest or
  **Most used**.
- **Select files** with their checkboxes (on a phone, **Select** first) for the bulk bar: **Move to…**, **Download**
  (one file as itself, two or more as one `.zip` named after the folder) and **Delete**. On the desktop you can also
  drag files (or the ticked ones) onto a folder in the tree, a folder tile or a breadcrumb (on touch, Move to… only).
  Every move shows a notice with **Undo**.
- **A file's details** (click it; a sheet on touch): where it is used (each note or whiteboard opens at the
  reference), its type, size and date, its folder (**Change…**), the notebook rule of its folder, whether it syncs
  (images up to 10 MB, other files up to 500 MB travel to your other devices; larger ones stay on this device), and
  the notebooks of the notes that use it. A file used by notes of several notebooks stays in one folder.
- **Delete** is safe: an unused file goes to this device's trash, and a file still in use first lists the notes that
  use it, then lets you choose; its embeds become "removed media" placeholders, which **Restore** turns back.

## Media folders

Folders sort your files in the media library. **A folder is a label, not a place on disk:** every file stays
where it is (`attachments/<hash>.<ext>`), so moving a file to a folder changes no link and no note.

- **Folders nest.** A folder can hold files and other folders.
- **Removing a folder never deletes a file.** Its files and folders go up to the folder above it (or to the top).
- **A notebook can name a folder.** Media added to a note in that notebook goes to that folder. A notebook inside
  another follows its parent's folder unless it names its own.

**The notebook's media folder.** Right-click a notebook (on a phone, open it from Notes and long-press it) and choose
**Media folder…**; the menu shows the folder it uses now, or "(inherited)" when it follows a parent's. Pick a folder,
make one with **New folder**, or choose **No folder (Attachments)** to clear it, then **Save**. The dialog says when
the notebook follows a parent's folder. From then on, every file you add to a note there (pasted, dropped, picked,
inserted from the editor's media menu, added from the notch's shelf, put on a board, or a screenshot or voice memo
saved to your Inbox note) goes to that folder, **unless the file is already in a folder**:
a file belongs to one folder, so adding the same file to another notebook's note leaves it where it is. The library
shows the rule on the folder and in a file's details.

- **Files already there.** When the notebook's notes already use files, the dialog offers once, unticked, to put the
  files only this notebook's notes use in the new folder (files that other notebooks' notes use never move). Leave
  it unticked and only new files follow the rule.
- **Moving a note.** When you move a note to a notebook whose folder is a different one, Arkenda asks **Move its
  media too?** for the files only that note uses that are still in the old notebook's folder, and lists them.
  **Move its media too** puts them in the new folder; **Leave it** changes nothing. Either way the note's text is
  not touched. Moving a note to a notebook with no folder, or with the same one, asks nothing.

**How folders sync.** Folders, labels and notebook folders travel with the vault, like your statuses and snippets.
In a browser vault they sync with the vault itself. In a folder vault they live in `.arkenda/media-folders.json`
and, with sync on, reach your other devices too; a cloud mirror carries the file as well. Edits made on two devices
at once merge: a rename on one and a move on the other both survive. When both change the same thing (two names
for one folder, two folders for one file), one of them wins, the same on every device; no file is ever lost. If
`media-folders.json` is damaged, Arkenda keeps a `*.corrupt-<time>` copy and, with sync on, rewrites it from
your other devices' copy; if it goes missing (deleted, or not delivered yet by a sync tool), Arkenda writes it again
from that copy instead of treating your folders as deleted.

## The trash

**More ▸ Trash** groups what you deleted by kind: notes, whiteboards and media. Press and hold an item (or use
its menu) for Restore, Open, Select and Delete forever. On a phone, **Empty trash** is in the **⋯** menu at the top,
and with items selected **Restore** and **Delete forever** stay at the bottom of the screen.

- **The trash is per device.** Each device shows only what was moved to the trash on it.
- **Files in a browser vault** (phones, the web) are stored in one place that every browser vault on the device
  shares, so deleting a file forever cannot free its space while another vault might use it. It leaves the trash and
  no longer shows in the media library; if a note uses it again, it shows again.
- **Moving to the trash and restoring sync; deleting forever does not.** Delete forever cleans up this device
  only: a note leaves this device's trash and stays deleted (and hidden) on every device, and a file's space is
  freed on this device once no note uses it.

## Storage

- **Keep offline** (the default) keeps every file on the device. With an S3 mirror on the desktop app, **Load on
  demand** (Settings ▸ Sync & devices ▸ Cloud mirror ▸ Media) leaves large audio and video in the mirror and streams them when you open
  them; pictures always stay.

## Linux

On Linux, the desktop app's web view can't play the app's own media links, so a folder vault's audio and video
play from a small private web server inside the app instead. Any size plays and seeks, as on other systems.

- It starts the first time a window plays media, never at startup, and stops when the app closes.
- It listens on this computer only (`127.0.0.1`, a port the system picks), never on the network.
- Each window gets its own secret address, which stops working when that window reloads or closes. Without it
  the server answers nothing, and it only serves the media of the vault open in that window, checked against
  the vault's records like every other read.
- At most 32 connections at once; a player paused for more than two minutes reconnects when it resumes.

A browser vault's media, media sealed with **Encrypt media on this device**, and any file when that server can't
start still play inside the page: up to 64 MiB of any type, larger files only as fragmented MP4 or WebM.
Convert others, for example with `ffmpeg -i in.mp4 -c copy -movflags frag_keyframe+empty_moov out.mp4`.

When a file can't be streamed or decoded here, the message offers **Open in system player** for a folder vault's file on this
device: the app hands the vault's own file to your system's default player, without copying it.
