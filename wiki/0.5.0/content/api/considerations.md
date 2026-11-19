---
label: "Considerations"
description: "Things to think about while you design a plugin. None of them is a single rule the app can check, but the review will look at each."
order: 15
tags: ["plugins","api"]
publishedAt: "2026-11-17"
updatedAt: "2026-11-17"
---

# Considerations

Things to think about while you design a plugin. None of them is a single rule the app can check, but
the review will look at each.

## Privacy

- **Note content never leaves without the user's consent.** Send note text to a host only when the
  user asked for it (a command, a button), and say so in your description.
- **Ask for the least.** Users see every permission before they install and grant each one; put what
  you can work without in `optionalPermissions` ([Grants](permissions.md#grants)).
- **The privacy label is written for you.** Settings shows what your plugin reads, changes, contacts
  and keeps, from your manifest and the user's grant, never from your own text
  ([Privacy label](permissions.md#privacy-label)).
- **Secrets are `secret` settings,** never `storage` values or text fields
  ([Secrets](settings.md#secrets)).

## Performance

- Keep `activate` short: register what you show, and do the rest later.
- Show a "Counting…" state at once and update the view when the work is done.
- Batch your calls; the sandbox allows 50 requests per second on average
  ([Limitations ▸ Performance budget](limitations.md#performance-budget)).
- Keep views small: a panel or widget answers one question.

## Accessibility

The app draws your views with its own components, so focus, keyboard use and screen readers work as
in the rest of the app. What is left is yours: labels that say what each button does, no meaning in
colour alone, and text short enough for the view limits ([Accessibility](ux.md#accessibility)).

## Phones

- List `mobile` in `platforms` only after trying your plugin at a phone width
  ([Mobile](ux.md#mobile)).
- On phones, `network.fetch` answers `network-not-available`: a plugin that needs the network is
  desktop only.
- Don't rely on running in the background on phones; a sync source, for one, syncs only when the app
  asks it to and keeps no timers of its own ([Sync sources](surfaces.md#sync-sources)).

## Sync

- **What syncs with the vault:** your `ctx.storage` values, `vault` settings, the installed list and
  the on/off flag ([Scopes](settings.md#scopes), [Installing](package.md#installing)).
- **What stays on the device:** `device` and `vault-device` settings, secrets, permission grants,
  approved hosts and the bundle itself. Another device must fetch and verify the bundle, and the user
  reviews permissions there.
- Your storage may change on another device while yours runs; read it again instead of caching it for
  long.

## Offline

Arkenda is local first: notes are on the device, and a plugin that reads and writes notes works
offline. If you use `network`, handle `network-failed` and `network-not-available` and keep the rest of
your plugin working.

## Versioning and the compatibility promise

- Raise `version` for every release; an older version is refused (`downgrade`).
- Keep contribution ids and settings keys stable; change keys only through
  [migrations](settings.md#migrations).
- Check `ctx.apiMinor` before you use an addition, so your plugin still works on an older app.
- **Our promise:** the plugin API only grows within an API version, and from the first public release a
  renamed or removed API keeps working for at least one API version after it is deprecated. Until that
  release the contract may still change
  ([Deprecation policy](versioning.md#deprecation-policy)).
