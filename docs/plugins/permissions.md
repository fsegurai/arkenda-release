# Permissions and privacy

Ask only for what you use: users see every permission before they install, and grant each one when
they turn the plugin on. Every call is checked against the grant at the moment it is made.

## Permissions

<!-- generated:permissions -->

| Permission | Lets the plugin |
|------------|-----------------|
| `notes:read` | Read notes, their metadata, tags and links. |
| `notes:write` | Create, edit, move and delete notes. |
| `storage` | Keep the plugin's own settings and data. |
| `commands` | Add commands to the palette and items to the `/` menu. |
| `ui:panels` | Show sidebar panels and settings tabs. |
| `ui:widgets` | Show dashboard widgets. |
| `markdown` | Add Markdown syntax, rendered by the host and sanitized. |
| `network` | Fetch the hosts of `network.hosts`, each approved by the user, through the app (https only, redirects re-checked, size and time limits, no cookies). |
| `clipboard` | Read and write the clipboard. |
| `notifications` | Show notifications. |
| `ui:themes` | Offer themes (token values only) in Settings ▸ Appearance. |
| `editor` | Add blocks to the insert menus and buttons to the editor toolbar. |
| `sync` | Offer the sync sources of `contributes.syncSources` in Settings ▸ Sync & devices (plugins of the `syncing` category only); a source reaches notes and servers only through the other grants. |

<!-- /generated:permissions -->

Settings fields (`settings.registerFields`) keep their values in the plugin's storage, so they need
`storage`. The call each permission opens is in the [API reference](api.md#the-plugin-context-ctx).

## Grants

Declaring a permission is a request, not a grant.

1. On install, the review lists every permission with what it means (optional ones marked) and the
   hosts it may ask for.
2. When the user turns the plugin on, they grant each permission or leave it off. Required ones left
   off keep the plugin off.
3. Grants are kept on that device only: never synced, never readable by any plugin. A plugin without
   a grant on a device (installed elsewhere, or grants lost) shows "Review its permissions when you turn it on." and does
   not start until the user reviews it there.
4. The user can revoke a permission, a host, or everything at any time; your next call fails with
   `permission-denied`.

## Optional permissions

`optionalPermissions` lists the permissions of `permissions` your plugin works without; the others
are required.

```json
"permissions": ["notes:read", "notes:write", "network"],
"optionalPermissions": ["notes:write", "network"],
"network": { "hosts": ["api.example.com"] }
```

`ctx.permissions.granted()` (no permission needed) answers `{ permissions, hosts, notes }`, where
`notes` is `all`, `chosen` or `none`. It can change at any time, so handle `permission-denied` too.

## Notes scope

The user may limit a plugin to chosen notebooks or tags (a tag also covers the tags below it), and
grant reading without writing.

- Every answer keeps only those notes; links to other notes resolve to nothing.
- Changes outside the scope are refused with `out-of-scope`.
- A new note goes to the first chosen notebook (else gets the first chosen tag).

## Network hosts

`network` needs `network.hosts`: 1 to 20 exact public host names (`api.example.com`). No wildcard,
IP address, port or local name (`localhost`, `*.local`, `*.internal`, `*.lan`, `*.arpa`):
`invalid-host` otherwise. `network` without hosts counts as optional, since it could never be used.

The user approves each host. `ctx.network.fetch(url)` is a `GET` the app makes for the plugin:

- **Desktop app only.** On the web and on phones it always answers `network-not-available`, without a
  request: a browser cannot block private addresses or re-check redirects.
- `https` on the default port only; any other link fails as `invalid`. An `https` link to a host the
  user has not approved fails as `host-not-allowed`.
- Public addresses only, checked when the name is resolved, so no private or local address even
  through DNS.
- At most 3 redirects, each re-checked against the approved hosts.
- No cookies, credentials, referer or proxy; 5 s and 256 KB at most; 4 requests at once.
- It answers `{ status, contentType, body, url }`, the body as text. A failure is `network-failed`,
  its message starting with `timeout`, `too-large`, `blocked`, `unreachable`,
  `too-many-redirects` or `failed`.

Hosts approved on one device never apply on another.

## Privacy label

Settings ▸ Extensions ▸ Plugins shows, for each plugin, what it reads, what it may change, which
hosts it may contact and what it keeps. It is generated from your manifest and the user's grant,
never from your own text. Plugin cards also show "No network" or "Read-only" (no `notes:write`).

The user can turn on an activity log of your recent network calls and note changes: time, host,
bytes and outcome, never a body.

## Updates

A version that asks for more (a new permission, host or wider access) keeps the grant the user gave
until they review the new request. What a plugin gets is always the grant intersected with its
current manifest.
