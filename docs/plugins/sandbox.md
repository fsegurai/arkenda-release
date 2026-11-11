# The sandbox

Each enabled third-party plugin runs isolated from the app, talks to it only through checked messages,
and is stopped when it breaks a limit. Built-in plugins run in-process and are not sandboxed.

## How it is isolated

- **A sandboxed frame:** a hidden `<iframe sandbox="allow-scripts">` (no `allow-same-origin`) loads
  `plugin-sandbox.html`, so the plugin has an opaque origin: no access to the app's page, cookies,
  `localStorage` or IndexedDB.
- **A worker inside it:** your code runs in a worker. The page's content security policy allows only
  its own script (by hash) and `blob:` code, with `connect-src 'none'`; `fetch`, `XMLHttpRequest`,
  `WebSocket` and the other network, storage and worker APIs are deleted before your code runs.
- **One channel:** the app and the sandbox talk only through a `MessagePort`, with versioned,
  schema-checked JSON messages.
- **Checked code:** before loading, the app re-checks the bundle's bytes against the installed
  `integrity`, and that the plugin is still installed and not revoked.

## Limits

<!-- generated:sandbox-limits -->

`SANDBOX_LIMITS`

| Limit | Value | Meaning |
|-------|-------|---------|
| `maxMessageBytes` | 256 KB | Largest message from the sandbox, in UTF-16 code units of its JSON. |
| `callTimeoutMs` | 5 s | How long the sandbox has to answer a call (command, button, Markdown block). |
| `activationTimeoutMs` | 10 s | How long loading the sandbox, the plugin code and `activate` may take. |
| `requestsPerSecond` | 50 | Requests the plugin may send per second on average… |
| `requestBurst` | 100 | …and in a burst. |
| `maxRegistrations` | 100 | Registrations (commands, views, Markdown blocks, listeners) one plugin may hold at once. |

`SANDBOX_VIEW_LIMITS`

| Limit | Value | Meaning |
|-------|-------|---------|
| `maxNodes` | 200 | Nodes in one view, nested ones included. |
| `maxDepth` | 3 | Lists inside lists. |
| `maxText` | 1,000 | — |
| `maxLabel` | 120 | — |

`SANDBOX_SEARCH_LIMITS`: `notes.search`: the longest query, and the most hits one call returns (20 by default).

| Limit | Value | Meaning |
|-------|-------|---------|
| `query` | 500 | — |
| `hits` | 50 | — |
| `defaultHits` | 20 | — |

`SANDBOX_NOTE_LIMITS`: The note fields a plugin (or an MCP client) may send: id, title and body lengths.

| Limit | Value | Meaning |
|-------|-------|---------|
| `id` | 128 | — |
| `title` | 200 | — |
| `body` | 204,800 | — |

<!-- /generated:sandbox-limits -->

Clipboard and notification calls work only within 3 s after the user runs one of your commands or
presses one of your buttons (`gesture-required` otherwise).

## When a plugin is stopped

A plugin that throws in `activate`, hangs, floods requests, holds too many registrations or sends a
malformed or oversized message is stopped:

1. its sandbox is removed and everything it registered disappears;
2. Settings ▸ Extensions ▸ Plugins shows it as stopped, with the reason;
3. turning it on again retries it.

Turning a plugin off, or uninstalling it, calls `deactivate`, then removes its sandbox and everything
it registered. A panel or widget that throws while it is drawn shows "could not be shown" with Retry;
the rest of the window keeps working.

A running development package shows a warning in the status bar and in Settings.

## What is refused, and why

A refused call rejects with an error whose `code` says why:

| Code | Why |
|------|-----|
| `permission-denied` | The manifest does not declare the permission, or the user has not granted it (or revoked it). |
| `not-declared` | The contribution id is not in the manifest's `contributes`. |
| `invalid-params` | The arguments break a rule: a view over its limits, an unknown field, an icon outside the list… |
| `out-of-scope` | The note is outside the notebooks and tags the user chose for your plugin. |
| `network-not-available` | No host is approved, or this is not the desktop app. |
| `host-not-allowed` | The link, or a redirect, is not on an approved host. |
| `network-failed` | The request failed; the message starts with `timeout`, `too-large`, `blocked`, `unreachable`, `too-many-redirects` or `failed`. |
| `gesture-required` | Clipboard and notifications need a user action first (3 s). |
| `already-registered` | The id is already registered by your plugin. |
| `unknown-handle` | The view or registration was disposed. |
| `too-many-registrations` | Over `maxRegistrations`. |
| `unknown-method` | No such call in this API version. |
| `unavailable` | The app cannot serve it here (the plugin is stopping, or the feature is missing on this platform). |
| `failed` | The app could not answer, or the answer was too large. |

## Why these rules

- **No markup, no network, no storage of its own:** a plugin can only reach what the user granted,
  and the app can show and revoke exactly that.
- **Timeouts and rate limits:** a slow or looping plugin must never freeze the editor.
- **Data views:** text is always text, so a plugin cannot inject HTML into the app, and its UI looks
  like the app's.
