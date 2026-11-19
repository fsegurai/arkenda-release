---
label: "What's new in 0.3.1"
description: "The release notes of Arkenda 0.3.1 (2026-11-09)."
order: 4
tags: ["changelog","release-notes"]
publishedAt: "2026-11-09"
updatedAt: "2026-11-09"
---

# What's new in 0.3.1

Released on 2026-11-09.

Syncing media to the Linux desktop app works again, and large notes and files sync reliably on every device.

### 🐛 Fixes

- 🖥️ **Linux app froze and went blank while syncing media** — the Linux desktop app no longer stops responding,
  goes blank and needs a force quit when photos, videos or other large files sync from a phone or another device.
  Sync now sends them in pieces small enough for the Linux app to sign safely.
- **Large notes in the S3 mirror** — very large notes and big changes are now split into smaller pieces when they
  go to the S3 mirror, so they upload from every device, the Linux app included.
- **Plugin signatures** — the plugin catalog and plugin releases with large signed files are verified correctly on
  the Linux app.
- 🖥️ **Slow sync after a connection hiccup** — if the desktop app's connection between its window and the system
  drops to its slow fallback, the app now notices and offers to restart, which brings full speed back.

### ⚡ Performance

- **Receiving media** — each piece of a received photo, video or file is checked once instead of twice, so large
  files arrive faster and use less memory.

---
