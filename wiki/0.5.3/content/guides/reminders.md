---
label: "Reminders"
description: "Get a notification at a task's due time, or at any time you pick for a note, with Open, Snooze and Done."
order: 10
tags: ["tasks","notes","notifications"]
---

# Reminders

Arkenda can remind you of a task on its due day at the time you give it, and of any note at a day and time
you pick. A reminder is part of the note's text, so it syncs with the note to your other devices, and each
device shows it once.

## A task's reminder

A task reminds you when its due date has a time. Write the time after the due date, as `⏰` and the time on a
24-hour clock:

```markdown
- [ ] Call the bank 📅 2026-11-20 ⏰ 09:30
```

- A due date without a time, like every task written before, reminds you of nothing.
- A time without a due date does nothing.
- In **Todos**, a task with a due date has a **⏰** button beside its date: pick a time, change it, or
  **Clear** it.

## A note's reminder

Open a note's **…** menu and choose **Remind me…**. Pick a day and a time, then **Save**. Arkenda keeps it in
the note's `remind` property, in the note's front matter:

```yaml
remind: 2026-11-20T09:30
```

The time is your device's time. To remove the reminder, open **Remind me…** again and choose **Clear**: the
`remind` key leaves the front matter, and nothing else in the note changes.

## When a reminder fires

You get a notification with the note's title and the task. Where the notification has buttons of its own (the
Linux and Windows desktops, Android), they are the reminder's buttons; elsewhere a card at the top of the
window shows the reminder with them:

- **Open** opens the note, at the task's line for a task.
- **Snooze 10 min** reminds you again in 10 minutes, on this device only.
- **Done** ticks the task, or removes a note's reminder. In a vault someone shared with you to read or comment only,
  **Done** opens the note instead.

A reminder fires once on each device. If the app was closed when a reminder was due, it fires when you open
the app, as long as it was due less than a day before.

### On the desktop

The app's own clock fires reminders while Arkenda is open, also after the computer wakes from sleep or after
the clock changes. On Linux the notification comes from the desktop's own notifications, and on Windows it is a
toast. It has **Snooze 10 min** and **Done** buttons, which work like the card's; a click on the notification
itself opens the note and brings Arkenda forward. In a vault shared with you to read or comment only, it has no **Done**.
Where the desktop's notifications show no buttons, the card waits in the app instead.

### On the web

The app's own clock fires reminders while the page is open. The first time you set a reminder, the browser
asks whether Arkenda may show notifications, and it asks only that once:

- **Allow**: each reminder also shows a browser notification; a click on it opens the note.
- **Block**, or a browser that does not ask: reminders show only the card in the app, and Arkenda never asks
  again. To change your mind later, allow notifications for the site in your browser's settings.

### On Android

Android keeps your next reminders, so they fire with Arkenda closed and after the phone restarts. The
notification has **Open**, **Snooze** and **Done**. **Snooze** works without opening the app. **Open** and
**Done** open Arkenda. The first reminder asks for the notification permission.

Android 14 and later deliver a reminder at its minute only when you allow **Alarms & reminders** for Arkenda
in **Settings ▸ Apps ▸ Arkenda**. Without it, Android may deliver a reminder a few minutes late while the
phone is idle. When you set a reminder and it is not allowed, Arkenda explains this with a button that opens
that page. Once you allow it, or choose **Dismiss**, the notice does not come back.
