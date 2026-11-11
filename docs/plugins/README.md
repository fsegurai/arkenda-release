# Arkenda extensions

Build an extension with any tooling, language or layout you like. To be supported it must meet one
contract: the manifest, the package, the entry point, the permission and sandbox rules, and the API
version. The app checks all of it when it installs a package, and each problem it reports links to its rule in
these pages.

> **Status (API version 1.1).** Building a plugin and installing it as a development package from a file work
> today. Not available yet: the marketplace (publishing a plugin for other users), signed releases, a published
> `@arkenda/plugin-api` package, and the command-line checker these pages call `plugin-check` (until it is
> published, install your package in the app to see the same checks). See
> [The package and release](package.md#publishing). Questions and ideas are welcome in the
> [issues](https://github.com/fsegurai/arkenda-release/issues/new/choose).

## Start here

1. [Overview](overview.md): what a plugin can and cannot do, on which platform.
2. [Getting started](getting-started.md): a starter template, build, install and reload.
3. [Worked examples](examples.md): the built-in word count and git plugins.

## Reference

| Page | Read it when you… |
|------|-------------------|
| [Manifest reference](manifest.md) | write `arkenda-plugin.json`: every field, kinds and the category taxonomy. |
| [The package and release](package.md) | zip, sign or install a package, or hit a package error. |
| [API reference](api.md) | call `ctx` or use an export of `@arkenda/kit/plugin-api`. |
| [Surfaces](surfaces.md) | choose where your plugin shows: commands, panels, widgets, editor items. |
| [Settings](settings.md) | give your plugin options. |
| [Permissions and privacy](permissions.md) | decide what to ask for and what users see. |
| [The sandbox](sandbox.md) | need the limits, timeouts and error codes. |
| [UX guidelines](ux.md) | want your plugin to look and behave like the app. |
| [Versioning and compatibility](versioning.md) | release a new version or target an app version. |
| [Testing a plugin](testing.md) | check your plugin before you ship it. |
| [Security checklist](security.md) | review a plugin, yours or someone else's. |

The JSON Schema of the manifest is [`manifest.schema.json`](manifest.schema.json).
