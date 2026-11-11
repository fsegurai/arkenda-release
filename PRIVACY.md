# Arkenda privacy policy

_Last updated: 2026-11-10_

Arkenda is a local-first notes app. Your notes stay on your devices, and Arkenda's developer has no server
that receives them. This policy covers the Arkenda apps published here and in the Microsoft Store: the
Windows, Linux and Android apps and the web app.

## What we collect

**Nothing.** Arkenda has no account, no telemetry, no analytics, no advertising and no crash reporting. The
developer receives no notes, files, usage data or device identifiers.

## Where your data lives

- **Your notes, media and settings** are stored on your device: in a folder you pick (a folder vault) or in
  the app's own storage (a browser vault).
- **Device sync** sends your notes between **your own devices**, end-to-end encrypted. When two devices
  cannot reach each other directly, the encrypted data passes through public relays, which cannot read it.
- **Encryption keys** stay on your devices, in the operating system's keychain or credential store.

## When Arkenda contacts the network

Only for features you turn on, and only then:

| Feature | What it contacts | What it sends |
|---------|------------------|---------------|
| Sync between your devices | Your other devices (local network or the internet), or public relays | End-to-end encrypted data only |
| Cloud mirror | The S3-compatible bucket **you** configure | Your vault, encrypted when you turn on **Encrypted** |
| Link titles (when you paste a link) | The page you pasted | A request for that page's title |
| Video and post previews (experimental) | YouTube or X, for the link you added | A request for that video's or post's preview |
| Weather widget, map blocks | The weather service and OpenStreetMap tiles | The place or map area shown |
| Plugin catalog and plugins | Arkenda's plugin registry; hosts **you** approved for a plugin | Catalog requests; the plugin's own requests to those hosts |
| Check for updates (direct installs) | This repository's latest release | A request for the latest version, when you click |

Each of these services has its own privacy policy. Arkenda sends them only what the feature needs.

## Microsoft Store

If you install Arkenda from the Microsoft Store, Microsoft handles the download, installation and updates,
and may collect data under [Microsoft's privacy statement](https://privacy.microsoft.com/privacystatement).
Arkenda itself collects nothing more in the Store version.

## Permissions

Arkenda asks for a permission only when you use the feature that needs it: the microphone for voice memos,
screen capture for screenshots and screen recordings, the local network for sync, and folder access for the
folders you pick. You can revoke them at any time in your system settings.

## Children

Arkenda collects no personal data from anyone, including children.

## Changes

Changes to this policy are published in this file, with a new date above, and noted in the release notes.

## Contact

Questions about privacy: [open an issue](https://github.com/fsegurai/arkenda-release/issues/new/choose).
Please don't include personal data, notes or keys.
