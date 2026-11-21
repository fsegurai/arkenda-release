---
label: "Frequently asked questions"
description: "Short answers about accounts, where notes live, sync, platforms, updates, problems and plugins."
order: 0
tags: ["general","faq"]
---

# Frequently asked questions

## Do I need an account?

No. Arkenda has no account, no telemetry and no analytics: notes stay on your devices, and nothing reaches the
network unless you turn on something that needs it, such as sync. See the [privacy policy](privacy.md).

## Where are my notes stored?

In the browser and on a phone, in a vault of Arkenda's own on the device. On the desktop you can also open a folder
as a vault: each note is a plain Markdown file in that folder, readable by any other app. See
[Folder vaults](../guides/file-vault.md).

## How do I get my notes on another device?

Pair the devices: **Settings ▸ Sync & devices ▸ Overview** leads you through it with a code. They then sync with each
other directly, encrypted end to end, with no server of ours in the middle. See
[Sync between your devices](../guides/sync.md).

## Which systems does Arkenda run on?

Linux (`.deb`, `.rpm`, `.AppImage`, and the AUR package `arkenda-bin` on Arch), Windows (the Microsoft Store, or the
setup `.exe` and `.msi`), Android (the `.apk`) and the web. macOS and iOS are not available.
See [Getting started](../getting-started/README.md).

## How do I update?

The direct desktop downloads and the Android app update from **Settings ▸ About**. The Microsoft Store, the AUR and
Linux package managers update Arkenda themselves, and Settings ▸ About says so.

## The window is blank or flickers on Linux. What can I do?

Turn on **Settings ▸ Experimental ▸ Linux rendering fallback**, which starts Arkenda without DMA-BUF or without
compositing after a restart. If a start never reaches the window, the next one goes back to Auto by itself; starting
Arkenda with `ARKENDA_RENDERING=auto` forces Auto for one launch.

If Arkenda freezes or shows a blank window at start, launch it once with `ARKENDA_SAFE_MODE=1 arkenda`. That launch
uses Auto rendering, an opaque window and the system title bar, and changes none of your saved settings, so you can
open Settings and turn off what caused it. A start that never confirms it stayed responsive (no key or click, and no
frame drawn after about 8 seconds, and no normal quit) is undone at the next start: rendering goes back to Auto and
the window effect is turned off. A translucent window needs compositing, so while compositing is off the window opens
opaque.

## Something went wrong. How do I report it?

Open an issue on the [release repository](https://github.com/fsegurai/arkenda-release/issues). **Settings ▸ About ▸
Logs** can copy or save the app's recent warnings and errors to attach; the logs never contain your notes' text,
titles or paths.

## What are experiments?

Features still being shaped, turned on or off per device in **Settings ▸ Experimental**. Most start off; the
right-click menu experiment starts on.

## Can I write a plugin?

Yes: the [plugin guide](../api/README.md) covers the manifest, the API, the sandbox and the permissions. Plugins run
sandboxed, with the permissions they declare. The plugin marketplace is not open yet.
