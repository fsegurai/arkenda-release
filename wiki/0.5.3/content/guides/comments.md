---
label: "Comments"
description: "Comment on a selection, a section, a whole note, a whiteboard element or a media file; reply, resolve and reopen threads in the Comments panel; find comments in search, see replies in the activity island, share with commenters and export notes with their comments."
order: 11
tags: ["notes","comments","collaboration","whiteboard","media","search","sharing","export"]
---

# Comments

Comments sit beside a note, never inside its text: the note's Markdown, its versions, its tasks and its tags stay as
they are. They sync with the vault to your other devices, like the note.

## Commenting

- **On text:** select words in the editor or in the preview. In the editor, **Comment** is a button of the selection
  toolbar that shows above the selection, after the formatting tools. In the preview, the same toolbar shows with
  **Comment** and **Copy** (on a touch screen, below the selection, clear of the system's own selection menu). Choose
  **Comment**, or press `Ctrl+Shift+M` (`Cmd+Shift+M` on a Mac); you can change the key in Settings ▸ Keyboard.
  `Alt+F10` moves into the toolbar and `Escape` leaves it. With the selection toolbar turned off in Settings ▸ Editor,
  a small **Comment** button shows above the selection in the editor instead.
- **On a section:** hover a heading in the preview and choose the **+** in its margin, or press `Ctrl+Shift+M` with
  the cursor in the section and nothing selected in the editor.
- **On the whole note:** **Comment on note** in the Comments panel, or in the note's menu (⋯).

The composer opens in the Comments panel. It is a small Markdown editor: bold, italics and links with the editor's
keys, `[[` to link a note, `:` for emoji. Pick a type (Note, Question, Suggestion, Issue, Review or To-do: the last
one you used is chosen next time), check it with **Preview**, then **Post** (`Ctrl+Enter`). **Cancel** (`Escape`)
keeps your draft on this device until you post it. Comments show Markdown, tables, code, emoji and note links;
`- [ ]` is a plain list in a comment, never a task, and images, diagrams and math are not shown in 0.5.3.

The first time you post in a vault, Arkenda asks for **your name in this vault**, filled in with this device's name.
It is shown on every comment you write in the vault; comments keep the name they were written with.

## The Comments panel

Comments live in a panel of the note's inspector (the right sidebar, beside Outline and Backlinks; `Ctrl+Alt+B` shows
or hides it). Its tabs are **Open**, **Resolved** and **Orphaned**, each with its count. Open threads are listed in
note order, the whole-note ones first. Each thread shows the text it is about, its comments in order with their
author and time, and what you can do: **Reply**, **Edit** and **Delete** on your own comments (those written on any
of this vault's devices), **Resolve**, and **⋯** for **Re-attach to selection** and **Copy link**. Deleting the first
comment deletes the whole thread; a deleted reply shows "Comment deleted".

The text of an open thread is tinted and underlined in the preview, with a marker in the margin that counts the threads
of that paragraph; where threads overlap the tint is deeper. The editor shows a quiet underline and a mark in the
gutter. Click a highlight, a marker or a gutter mark to select its thread in the panel.

## Moving between threads

- `Alt+↓` and `Alt+↑` go to the next and the previous thread of the selected tab, in note order (after the last comes
  the first again), from the preview or the Comments panel: the thread's card takes the focus and its text scrolls into
  view. Screen readers hear "Thread 2 of 5".
- In the editor `Alt+↑/↓` move lines, so there `F8` and `Shift+F8` do the same; they work everywhere else too. From
  the editor the cursor goes to the thread's line and the focus stays in the text.
- On a focused card, `Enter` selects the thread at its text and `R` replies; `←` and `→` switch the tabs. `Escape`
  closes a composer (the draft stays) and gives the focus back to where it was, or to the thread's card.

All of these keys can be changed in Settings ▸ Keyboard.

## Links to a thread

**⋯ ▸ Copy link** on a thread copies a link such as `/notes/<note>#comment-<thread>`. Opening it (pasted into another
note, or in the address bar of the web app) opens the note, shows the Comments panel on that thread with its card
focused, and scrolls its text into view. When the thread was deleted, the note still opens and a short notice says the
thread is no longer there.

## On a phone or a tablet

On a phone the Comments panel is a bottom sheet (the note's **Details**): it opens at half the screen and grows with
its threads; swipe it down, tap outside it or press back to close it. The composer is as wide as the sheet, with large
targets; `Escape` on a keyboard closes the composer first and the sheet next. Select text and choose the **Comment**
button below the selection, or **Comment on note** in the note's menu. On a tablet the panel opens as the inspector's
drawer over the note.

## Resolving

**Resolve** a thread once it is settled: its highlight goes and it moves to the **Resolved** tab, which shows who
resolved it and when (the text gets a faint underline while that tab is open). **Reopen** brings it back, and so does a
reply. **Delete resolved threads…** in the Resolved tab removes them from the note for good.

## On a whiteboard

On a board (the **Whiteboard** experiment), right-click an element and choose **Comment**, or select one element and
press `Ctrl+Shift+M` (`Cmd+Shift+M` on a Mac); with nothing selected the comment is on the whole board. The thread
remembers the element's text, shown on its card as **Board element**.

An element with open threads carries a small pin at its top-right corner with their count; the pin turns grey when all
of them are resolved. Click the pin to see that element's threads alone in the Comments panel (**On this board
element**); **×** shows every thread of the board again.

Comments never enter the board's text. When you delete an element, its threads move to the **Orphaned** tab with the
element's text, so nothing is lost: undo the delete and they come back, or select another element and choose
**Re-attach to selection**.

## On images, recordings and files

In the media library, open a file's details and choose **Comments**: a drawer shows its threads, and **Comment** starts
one about the whole file. They work the same for images, audio and video (and any other file). A file's comments
belong to the file itself, so they show wherever it is embedded, in every note and board; the drawer says how many
places that is. The library's grid shows how many open threads each file has.

The same drawer opens from the media viewer of a note's preview: click an image you added to the note (or open a
recording or video in the viewer) and choose the **Comments** button in the viewer's top bar, which shows how many open
threads the item has. The drawer follows the item as you step through the note's media; keys typed in it stay there.
Images linked from the web have no comments.

A file's comments stay with the vault for as long as the vault has them: deleting the file from the media library's
trash removes it from this device only, and another device may still hold it, so its comments are kept.

## When the text changes

A thread follows its text as you edit. When the text changed a little, the thread stays with a dashed underline and a
**Text changed** flag. When the text is gone, the thread moves to the **Orphaned** tab with its original quote: select
new text in the note and choose **Re-attach to selection**, or **Resolve** it.

Comments written by a newer Arkenda are shown but cannot be changed on this device.

## Finding comments in search

The full-text search (`Ctrl+Shift+F`, or the notes in the command palette) also looks in comments. A note found only
through one of its comments is marked **Comment**, shows the comment's words, and opens with the Comments panel on that
thread. Comments on a whiteboard's elements count as the board note's. Open threads come before resolved ones, and
deleted comments are never found. Comments never become tags, tasks or note links, even when they hold `#words`,
`- [ ]` or `[[links]]`. Comments on media files are not searched.

## Replies to your comments

When someone on another device replies in a thread where you (on any of this vault's devices) wrote a comment, the
activity island in the title bar shows **Reply to your comment**, with the replier's name and, when there are several,
how many. Hover it to see the note's title (unless note titles are hidden in the island). **Open** goes to the thread,
**Dismiss** takes the notice away, and it also goes once you open the note. The notice never shows what the comment
says. It comes for notes whose comments are open in Arkenda at that moment (a note open in a tab or a pane), and not
for your own replies from your other devices.

## In a shared vault

When you share a note or a notebook (the note's or the notebook's **Share…**), **They can** sets what the other
person does with it:

- **Read only:** they read the notes and their comments, with no composer.
- **Comment:** they read the notes and comment on them: start threads, reply, edit and delete their own comments,
  resolve, reopen and re-attach threads. They cannot change the note's text, title or details.
- **Edit:** they change the notes and comment on them, as a commenter does.

You, as the owner, can edit and delete any comment in what you shared. Your devices check every comment a member
sends, so a member's device can only write what its role allows. A member still on Arkenda 0.5.2 who was given
**Comment** sees the share as read only. Comments on media files stay in your vault: they do not travel in a share.

## Exporting a note with its comments

In the note's **Export…** dialog, check **Include comments** (it is off by default) to add a **Comments** section after
the note, as a web page, a PDF or plain text. It lists each open thread with the text or the target it is about, then
its comments with their author, date and replies. **Include resolved threads** (available once comments are included)
adds the resolved ones after them, with who resolved them. A deleted comment reads "Comment deleted", deleted threads
are left out, and a thread whose text changed or is gone shows its original quote with a note saying so. The section
is for reading in any browser or viewer; Arkenda does not import comments back from it.
