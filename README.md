<!--
  The README of the PUBLIC release repo (https://github.com/fsegurai/arkenda-release).
  Edit it here: `.github/workflows/release-docs.yml` publishes it as that repo's README.md
  (`scripts/release-repo-sync.ts`). Links are relative to the public repo's root.
-->

<p align="center">
  <img src="docs/changelog/arkenda-logo.svg" alt="Arkenda" width="112">
</p>

<h1 align="center">Arkenda</h1>

<p align="center">
  <strong>Your notes, on your device, in plain Markdown.</strong><br>
  A local-first, private notes app for the desktop, the browser, phones and tablets.
</p>

<p align="center">
  <a href="https://github.com/fsegurai/arkenda-release/releases/latest"><img alt="Latest release" src="https://img.shields.io/github/v/release/fsegurai/arkenda-release?label=latest&color=7c5cff"></a>
  <a href="https://github.com/fsegurai/arkenda-release/releases"><img alt="Downloads" src="https://img.shields.io/github/downloads/fsegurai/arkenda-release/total?color=7c5cff"></a>
</p>

<p align="center">
  <a href="https://github.com/fsegurai/arkenda-release/releases/latest"><strong>⬇️ Download</strong></a> ·
  <a href="CHANGELOG.md"><strong>📦 What's new</strong></a> ·
  <a href="https://github.com/fsegurai/arkenda-release/issues"><strong>🐞 Report a problem</strong></a>
</p>

<p align="center">
  <img src="docs/changelog/0.4.0/editor.png" alt="Arkenda: the sidebar, the note list, tabs and the editor" width="900">
</p>

## 🚀 Get started in three steps

1. **Download** the file for your system from the [latest release](https://github.com/fsegurai/arkenda-release/releases/latest)
   (which file: *Download and install*, below).
2. **Install and open it.** On the desktop, to keep notes in a folder of your own, choose **Open folder…** in the
   vault switcher at the top of the sidebar.
3. **Write.** Press `Ctrl+P` to find any note, `Ctrl+Shift+P` for a command, and right-click for the menu of what
   you clicked.

## ✨ Why Arkenda

- 📝 **Plain Markdown** — every note is a Markdown file with frontmatter. Open it in any editor, today or in ten years.
- 📂 **Your folder** — on desktop a vault is just a folder of `.md` files (folder = notebook, file name = title), and
  edits you make outside the app show up live.
- 🔒 **Private by default** — no account and no telemetry. Nothing reaches the network unless you turn on something
  that needs it.
- 🔄 **Sync without a cloud** — pair your devices with a code; sync is end-to-end encrypted, and relays only pass on
  traffic they cannot read. Add your own S3 bucket as a mirror if you want one.
- 📥 **An Inbox for quick notes** — capture first, then file each line into a note, turn it into its own note, or mark
  it done.
- 🗂️ **More than notes** — todos, a calendar, Today, a media library with previews, tabs and split panes.
- 🧩 **Make it yours** — light, dark and Glass themes, accents, fonts, keyboard shortcuts, CSS snippets and sandboxed
  plugins.

## 📸 A quick look

<table>
  <tr>
    <td width="50%"><img src="docs/changelog/0.4.0/command-palette-dark.png" alt="The command palette in the dark theme"></td>
    <td width="50%"><img src="docs/changelog/0.4.0/context-menu.png" alt="The editor's right-click menu"></td>
  </tr>
  <tr>
    <td align="center"><sub>Find anything: notes, commands and tags</sub></td>
    <td align="center"><sub>Right-click for what you can do here</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/changelog/0.4.0/settings.png" alt="Settings, grouped into categories with one search"></td>
    <td width="50%"><img src="docs/changelog/0.1.0/split-panes.png" alt="Notes side by side in split panes"></td>
  </tr>
  <tr>
    <td align="center"><sub>Every setting in a few categories, with one search</sub></td>
    <td align="center"><sub>Several notes side by side</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/changelog/0.1.0/media-library.png" alt="The media library"></td>
    <td width="50%"><img src="docs/changelog/0.1.0/sync-overview.png" alt="Sync and devices"></td>
  </tr>
  <tr>
    <td align="center"><sub>Pictures, audio, video and PDFs in one library</sub></td>
    <td align="center"><sub>Your devices, in sync and encrypted</sub></td>
  </tr>
</table>

Everything in each version, with more screenshots, is in the **[changelog](CHANGELOG.md)**.

## ⬇️ Download and install

Get the files from the **[latest release](https://github.com/fsegurai/arkenda-release/releases/latest)**.

| Platform   | File | Needs |
|------------|------|-------|
| 🐧 Linux   | `.deb` (Debian, Ubuntu) or `.rpm` (Fedora, openSUSE), recommended; `.AppImage` for any other distribution | 64-bit (x86_64); a distribution from 2022 or newer (built on Ubuntu 22.04) |
| 🪟 Windows | The Microsoft Store, or the `.msi` or setup `.exe` | Windows 10 or 11, 64-bit. Windows 11 has Microsoft WebView2; on Windows 10 the installer downloads it if missing |
| 🤖 Android | `.apk` | Android 7 or later, arm64 (practically every phone and tablet in use) |
| 🍎 macOS   | Not available yet | — |

<details>
<summary><strong>🐧 Linux</strong></summary>

Prefer the `.deb` or the `.rpm`: they use your system's WebKitGTK, so they are about as small as the Windows
installer. The `.AppImage` carries its own copy of WebKitGTK and GTK, which makes it several times larger; use it
on distributions without `.deb` or `.rpm` packages. All three update themselves from Settings ▸ About (the
`.deb` and `.rpm` ask for your password to install the update).

```sh
# Debian, Ubuntu and derivatives
sudo apt install ./Arkenda_*_amd64.deb

# Fedora, openSUSE
sudo dnf install ./Arkenda-*.x86_64.rpm

# Any distribution
chmod +x Arkenda_*_amd64.AppImage && ./Arkenda_*_amd64.AppImage
```

**Lines left behind while dragging the window (KDE Plasma on Wayland):** with Settings ▸ Appearance ▸ Transparency ▸
Window effect set to Blur, KDE's Translucency and Wobbly Windows desktop effects can leave static lines
behind the window while you move it. Turn those effects off in System Settings ▸ Desktop Effects, or set the
window effect to None.

</details>

<details>
<summary><strong>🪟 Windows</strong></summary>

Two ways, pick one:

- **The Microsoft Store** (once Arkenda is listed there: search for *Arkenda*). Microsoft signs the Store
  package, so there is no SmartScreen warning, and the Store installs updates for you; Settings ▸ About says so
  instead of offering *Check for updates*.
- **The `.msi` or the setup `.exe`** from the release. These installers are not code-signed, so Windows
  SmartScreen may show *"Windows protected your PC"* the first time: choose **More info ▸ Run anyway**. They
  update themselves from Settings ▸ About.

The release's `.msix` file is the unsigned Store package, kept for the Store submission: Windows does not install
it as it is, so use the Store instead.

**Store and direct installs keep separate app data.** Windows gives a Store app its own copy of the app data
folder, so each install has its own browser vault, settings and device pairings. To move between them, export
your vault (Settings ▸ Data & storage ▸ Export & import) and import it in the other install, or open the same folder vault in both. Use one
install at a time.

</details>

<details>
<summary><strong>🤖 Android</strong></summary>

Download `Arkenda_<version>_android-arm64.apk` on your phone and open it. Android asks you to allow installs
from that app (your browser or file manager) the first time, and Play Protect may warn about an app from outside
the Play Store: choose **Install anyway**. A newer `.apk` installs over the previous one and keeps your notes.

</details>

<details>
<summary><strong>🔐 Check a download</strong></summary>

Every release has a `SHA256SUMS.txt`. In the folder with your download:

```sh
sha256sum --ignore-missing -c SHA256SUMS.txt
```

On Windows (PowerShell): `Get-FileHash .\<file>` and compare it with the line in `SHA256SUMS.txt`.

</details>

## 🗒️ First steps

| You want to… | Do this |
|--------------|---------|
| Keep notes in a folder you own | On the desktop, **Open folder…** in the vault switcher (or **Manage vaults**). Each sub-folder is a notebook, each `.md` file a note; edits you make with other tools show up live. |
| Find anything | `Ctrl+P` opens the palette: notes, `>` for commands, `#` for tags. |
| Link notes | Type `[[` and pick a note; `[[Note#Heading]]` jumps to a heading. |
| Jot something down fast | Put it in the **Inbox** (sidebar), then file it into a note later. Choose the Inbox note in **Settings ▸ Notes & capture ▸ Capture**. |
| Switch between notes | Open notes as tabs; `Ctrl+Tab` walks through them (strip order or most recent: **Settings ▸ Editor ▸ Tabs**). |
| Use it on your phone too | **Settings ▸ Sync & devices**, choose **Pair a device**, then enter the code on the other device. On phones, **Save battery** pauses sync while Arkenda is in the background. |
| Change the look | **Settings ▸ Appearance**: light or dark, the Glass theme, accent colour, fonts and density. |
| Try more | **Settings ▸ Experimental** (whiteboards, calendar, kanban and more) and **Settings ▸ Plugins**. They stay off until you turn them on, except the right-click menu, which is on and can be turned off there. |
| Keep a copy | **Settings ▸ Data & storage ▸ Export & import ▸ Export vault** saves it as Markdown files; a folder vault already is plain files. |

### 📚 Guides

| Guide | What it covers |
|-------|----------------|
| [Folder vaults](docs/file-vault.md) | Keeping notes in a folder of `.md` files on the desktop |
| [Sync between your devices](docs/sync.md) | Pairing, how devices connect, the S3 mirror, Save battery |
| [Media](docs/media.md) | Pictures, audio, video, PDFs and other files; the library and the trash |
| [Keyboard shortcuts](docs/keyboard-shortcuts.md) | Every default key and how to change them |
| [The desktop layout](docs/desktop-layout.md) | The sidebar, note list, note tabs and the inspector |
| [Phones and tablets](docs/phone-and-tablet.md) | The phone and tablet layouts and gestures |
| [The activity island](docs/notch.md) | Quick capture, voice memos, screenshots and recordings |
| [CSS snippets](docs/css-snippets.md) | Small style sheets that change how Arkenda looks |
| [Window effect on Linux](docs/window-effect-linux.md) | Blur behind the window: what works on Linux and what to change if it does not |
| [Building plugins](docs/plugins/README.md) | The plugin guide: manifest, API, sandbox and permissions (the marketplace is not open yet) |

### 🔔 Updates

**Settings ▸ About ▸ Check for updates** tells you when a new version is out, and **Download and install** updates
Arkenda in place: on Linux and Windows, **Restart now** finishes it (your edits are saved first), and on Android it
opens Android's installer
(the first time, Android asks you to allow installs from Arkenda). The app asks only when you click; it never checks
in the background. A Microsoft Store install is updated by the Store instead.

## 🔒 Privacy

No account, no telemetry, no ads. Arkenda contacts the network only for features you turn on, and only then
(the full [privacy policy](PRIVACY.md)):

| Feature | Contacts |
|---------|----------|
| Sync between your devices | Your other devices directly (local network or across networks), or public relays when they cannot connect; everything is end-to-end encrypted |
| Cloud mirror | The S3 bucket you configure (encrypted when you turn on its **Encrypted** switch) |
| Link titles (when you paste a link) | The page you pasted, for its title |
| Video and post previews (experimental) | YouTube or X, for the link you added |
| Weather widget, map blocks | The weather service and OpenStreetMap map tiles |
| Plugin catalog and plugins | Arkenda's plugin registry, when you browse it; hosts you approved for a plugin |
| Check for updates (direct installs) | This repository's latest release, only when you click |

## 💬 Feedback

Found a bug, have an idea or a question? [Open an issue](https://github.com/fsegurai/arkenda-release/issues/new/choose)
and pick the form that fits (bug, feature, question or other). For bugs, please include the
**system information** from **Settings ▸ About** (versions and platform only — never your notes, file paths or keys).

## 📄 License

Arkenda is proprietary software, **free to use**. All rights reserved © fsegurai. This repository holds the
releases and their notes; the source code is not public.
