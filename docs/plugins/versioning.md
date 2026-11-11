# Versioning and compatibility

Three numbers decide whether a plugin runs: its own `version`, the `apiVersion` it was built for and
the `minAppVersion` it needs.

## Compatibility

`checkCompatibility` runs at install and before a plugin starts. A plugin cannot run when:

| Check | Fails when | Shown as |
|-------|------------|----------|
| App version | the app is older than `minAppVersion` | "Requires Arkenda X or later." |
| API version | `apiVersion` is higher than the app's plugin API | refused (`api-version`) |
| Platform | this platform is not in `platforms` | "Not available on …" |

A package that fails any of them is refused with `incompatible`. The plugin API only grows, so an app
runs every plugin built for its API version or a lower one.

## Your plugin's version

`version` and `minAppVersion` are `major.minor.patch`, optionally with a `-pre-release` or `+build`
suffix. Comparisons use `major.minor.patch` only (`compareVersions`).

- Raise `version` for every release: the same or a newer version replaces the installed one, an
  older one is refused (`downgrade`).
- Use semver: a new major when settings or behaviour change in a way users must notice. Settings keys
  change through [migrations](settings.md#migrations), never silently.
- Keep contribution ids stable: users rename, hide and reorder your items by id.

## The plugin API version

| Value | Today | Raised when |
|-------|-------|-------------|
| `PLUGIN_API_VERSION` (`ctx.apiVersion`, manifest `apiVersion`) | `1` | something changes in a way that breaks plugins built before. |
| `PLUGIN_API_MINOR` (`ctx.apiMinor`) | `2` | something is added that changes nothing for older plugins (optional fields only). |

Check `ctx.apiMinor` before you use an addition, so your plugin keeps working on an older app.

## Deprecation policy

- **From the first public release:** a renamed or removed API, manifest value or category keeps
  working as an alias for at least one API version after it is deprecated, and each deprecation is
  listed in the changelog below with its replacement.
- **Until then (now):** nothing has been released, so the contract may change freely; old names and
  aliases are removed, not kept.
- **Unknown values from a newer app** never break an older one: an unknown category or kind shows as
  "Other" instead of refusing the plugin.

## API changelog

| API | Change |
|-----|--------|
| 1.0 | First version of the contract: manifest schema version 2, extension kinds, the governed category taxonomy and the sandbox API. Not yet released publicly. |
| 1.1 | Sync sources: `ctx.sync.registerSource`, the `sync` permission, `contributes.syncSources` (plugins of the `syncing` category) and the `sync` surface. See [Sync sources](surfaces.md#sync-sources). |
