# Sync between your devices

Arkenda syncs a vault between the devices you paired, with no account and no server of ours in the middle. Turn
it on in **Settings ▸ Sync & devices ▸ Overview** (its guided setup names this device, turns sync on and leads to
pairing), pair the other device with a code, and from then on the devices find each other
on their own. This page says how they reach each other and what each path can see.

## Settings ▸ Sync & devices

- **Overview:** the status card (**Sync off · no devices paired**, or **Syncing with 2 devices · last synced 2 min
  ago**), the devices connected now with the path each one uses, and the Sync switch. While nothing is paired, a
  guided setup: name this device, turn on sync, pair a device. Then every sync source (devices, an external folder,
  the cloud mirror) with its state and actions, and **What syncs where** (the vault, with statuses and snippets;
  appearance and shortcuts when **Same look on every device** is on; what stays on this device: experiments,
  profiles, layout and the window).
- **Devices:** this device (name, ID, where its keys are kept), the paired devices with their paths and a
  **Health** panel each, and pairing (a code, a QR code with its steps, devices nearby on the network, incoming
  requests).
- **Connection:** what this device keeps (partial sync), what is shared with you, the local network, connections
  over the internet, media on mobile data, live presence, and Advanced (relays, STUN).
- **Cloud mirror** (the apps): the S3 bucket, its encryption and recovery code, and media offload and removal.
- Before sync is on, each page still shows its sections, says why they are inactive and offers **Turn on sync**.
- Old links still land on the right page: `/settings/devices#lan` opens Connection, `/settings/storage#bucket` opens
  Cloud mirror.

## What a sync brings, and what came of it

When a device connects, the Overview's status card shows what it brings to this device, and the device's row on
Devices shows the same in one line:

- **Before and during:** **Notes: 12 / 40** and **Attachments: 3 / 9**, with **Attachment data: 1.2 MB of 4 MB**,
  a progress bar, and what is arriving now (notes first, then attachments). The activity island shows the same
  numbers while the sync runs. Attachment sizes are known before their transfer starts (this device asks the other
  for them as it asks for the attachments; an older version of the app states each size only as its transfer
  starts). Notes are counted, never sized: a note has no size before it travels.
- **Notes changed: 3** shows next to the notes when the sync also changed notes this device already had: an edit
  made on the other device, or a note created there while both were connected.
- **After:** what was received, and every item that was not, with its reason: a note the other device no longer
  had, an attachment it does not have (it arrives once a device that has it connects), an attachment refused
  because it was damaged, too large or could not be stored, a change refused (outside what this device keeps, or
  from a read-only member), a connection that was lost, or a sync that stopped with an error.

The numbers count **what is missing on this device**, not the size of the other device's vault: the notes the other
device's copy of the vault adds here, and the attachments the notes reference that this device lacks. They come
from the messages a sync already exchanges (plus one short question about the attachments' sizes; no note is read to
count it), and they belong to one connection: a new connection with the device replaces them. The last summary of
each paired device is kept on this device only (never in the vault, never synced), so it shows again after a restart
until the next connection; turning sync off clears them, and removing a device clears its own. A device with nothing
to bring and nothing failed shows no line.

## The sync status

The status bar, the sync dot (phone and tablet), the title bar and the Overview say the same thing, in one of four
states:

| State | What it means | What you can do |
| --- | --- | --- |
| **Up to date** (or **2 devices connected**) | Nothing is waiting to be exchanged. | — |
| **Syncing · 12 left** | A sync runs; the number is what is still to arrive or leave, notes and attachments. | — |
| **Offline · will sync when connected** | Devices are paired but none is connected now. Your changes are kept and sent at the next connection. | **Retry now** dials every path at once. |
| **Needs your attention** | Sync stopped with an error; the panel says which, in plain words. | **Retry now** when a new try can help, else **Check devices**. |

The panel of the status bar's indicator also names the path the sync runs on (**Sync path: on this network**,
**direct over the internet**, **through an internet relay**, **through the signaling relay**, **with a sync code**
or **through your mirror**), and keeps naming the last one between two syncs.

**A device that goes away leaves the count within seconds.** Connected devices send each other a tiny message when
they have had nothing else to send for 5 s, and a device that hears nothing from the other for 20 s takes it for
gone and closes the connection (it reconnects on its own when the other comes back). On battery or on mobile data
the wait is 60 s and the message goes every 15 s, so a phone's radio can sleep; each device tells the other which
wait it uses. The message is a few bytes and is never sent while a sync is exchanging anything else. A browser tab
in the background tells the other devices at once that it now waits 5 minutes (a hidden tab's timers may run only
once a minute), so it stays connected; when it is shown again it tells them its normal wait at once.

## Pairing a device, step by step

While a pairing code is shown, the Devices page lists the steps, the one to do now in bold:

1. On the other device, open **Settings ▸ Sync & devices ▸ Devices** and choose **Enter or scan a code**.
2. Scan this QR code with it, or paste the code there.
3. Over the internet only: paste the answer code the other device shows, then choose **Connect**. (On the same
   Wi-Fi there is no answer code.)
4. Check that both screens show the same six digits, then confirm.

The device that enters the code shows the same steps from its side: **Show pairing code** on a paired device, scan
or paste it and **Continue**, hand back the answer code if one appears, then compare the six digits.

## A device's health

**Health**, next to each paired device on the Devices page, opens what this device knows about it:

- **Last sync:** connected now, or when it was last seen.
- **Path:** the one the connection uses now, or **Not connected**.
- **Every way to reach it** (the same network, direct, an internet relay, your signaling relay, your mirror), each
  **Working**, **Not working**, **Not tried yet** or **Not available**, with the reason in plain words — no relay is
  set up, the device has not shared its address yet, the connection was lost, the two devices run versions that
  cannot sync — and when the next try is. A reason with no words of its own still shows its code: a failure is
  never hidden.
- **Test connection:** with the device connected, it measures a round trip (**Answered in 42 ms · on this
  network**); otherwise it tries every path now and says whether the device could be reached, the reasons staying
  in the list below it.

## The paths, in order

Each device tries the paths below for each paired device, from the top, and keeps the first one that works.
A session that is running is never dropped for a better path: a better one is taken when the current one fails,
or at the next session.

| Path | When it works | Where |
| --- | --- | --- |
| **Same network (LAN)** | Both devices on the same Wi-Fi or wired network. | The apps (desktop, Android). A browser can't use it. |
| **iroh, direct** | Over the internet, when the two networks let a direct connection through (hole punching). | The apps. |
| **iroh, through a relay** | Over the internet, when no direct connection gets through; see [Relays](#relays). | The apps. |
| **WebRTC through your signaling relay** | Only when you added a relay of your own (Settings ▸ Sync & devices ▸ Connection ▸ Advanced). | The apps and the browser. |
| **Your S3 mirror, store-and-forward** | When you set up a mirror and the other device is offline; see [The mirror](#the-s3-mirror). | The apps. |

- The apps try the same network first, iroh 3 s later, and your signaling relay 10 s after that, only for a
  device iroh may not reach. A browser has only the signaling relay (or a code), so it starts there.
- When a path fails, the device tries again after a random wait that grows up to 30 s, and starts over at once
  after a success, when the network comes back, when the device wakes or when the app comes to the front.
  On a phone with a low battery it waits longer.
- Settings ▸ Sync & devices ▸ Devices shows the path each device is on, such as **Connected · on this network** or
  **through an internet relay**; the Overview lists the devices connected now with theirs.
- A change that was half sent when the network dropped carries on from where it stopped: a note's text is merged,
  never sent twice, and a large file resumes from its last piece.

## Relays

- **iroh's relays are public, and on by default.** They are run by n0, the makers of iroh, and the apps use them
  only when two devices can't connect directly. A relay passes on encrypted traffic; it can't read it.
- **Router port mapping** (Settings ▸ Sync & devices ▸ Connection ▸ Connections over the internet) lets this device ask your router to
  open one port while sync runs, so more connections are direct. Off: no port is opened, and devices still
  connect, sometimes through a relay. It applies to this device only.
- **Your own signaling relay** is optional. It only helps two devices find each other; the notes then travel over
  the direct WebRTC connection. The apps reach only the relays built into them.

## Pairing carries the route

Pairing proves the two devices trust each other, and it also hands over each device's iroh address. So two
devices paired once on the same Wi-Fi find each other later on different networks, with no relay of your own and
no new code. The address is only a hint: trust still comes from the pairing and from each session's handshake.

## The S3 mirror

When you set up an S3 mirror (your own bucket), it does two jobs:

- **A backup of your files** for a folder vault.
- **Store-and-forward:** each device also leaves its changes in the bucket, sealed and signed, in a hidden folder
  (`.arkenda-sync/`). A device that was offline reads them when it comes back and merges them, even when the
  device that wrote them is off by then. The log is compacted, so it doesn't grow without bound.

**Notes travel by one channel.** While sync runs, notes reach your other devices only through sync (live, or the
store-and-forward log); the file mirror then only backs them up and never pulls a note from the bucket over the
one you have. That keeps a note from arriving twice, with doubled text or a conflict copy.

## Media on mobile data

**Sync media on Wi-Fi only** (Settings ▸ Sync & devices ▸ Connection ▸ Media on mobile data) is a switch per device:

- **On:** audio and video travel only on Wi-Fi. On mobile data, or on a network the device can't name, they wait,
  and they leave as soon as the device is on Wi-Fi again.
- **Off:** they also use mobile data.
- Images and note text always travel. The switch applies to sync and to the S3 mirror.

## Sync in the background (phones)

**Save battery** (Settings ▸ Sync & devices ▸ Connection ▸ Battery) is a switch on the Android app only, for this
device only, and it is on until you turn it off. Desktop and browsers have no such switch: their sync runs as before.

- **On:** when Arkenda goes to the background, sync pauses: connections to your devices close, nothing is dialed,
  the internet endpoint (its relay connection and router port mapping) and the search for devices on this network
  (and the Wi-Fi lock it needs) stop, and the S3 mirror is no longer checked. Your edits are still saved on the
  phone and wait to be sent; changes not yet uploaded to your mirror are sent once on the way out. When you open
  Arkenda again, everything starts again and a sync runs at once. A pause in the middle of a transfer loses
  nothing and brings nothing twice: what was cut is sent at the next sync, a half-received file is never shown, and
  a large file goes on from where it stopped when you come back within 10 minutes. A pairing code still on screen keeps sync running until the code ends.
- **Off:** sync keeps running in the background for as long as Android lets the app run, which uses more battery.

## What stays end-to-end

- **Everything sync sends** (note changes, files, media, live or through the store-and-forward log) is encrypted on
  the device that sends it and decrypted only on your paired devices. No relay (iroh's or yours) and no bucket can
  read it.
- **The store-and-forward log** is sealed with the vault key and signed by the device that wrote it; a device
  opens frames only from devices it paired and hasn't removed, and skips a frame that was changed.
- **What others see:** a relay sees that two addresses talk, when and how much; your bucket sees file names under
  `.arkenda-sync/` (a vault id, a device id, a sequence number), sizes and times. The backed-up files are
  encrypted only when the mirror is (its **Encrypted** switch, with a recovery code); otherwise the bucket keeps
  normal files and names. The Overview's sync sources (Settings ▸ Sync & devices) list what this device contacts.
