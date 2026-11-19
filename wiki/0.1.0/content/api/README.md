---
label: "Plugin API"
description: "Build an extension with any tooling, language or layout you like. To be supported it must meet one contract: the manifest, the package, the entry point, the permission and sandbox rules, and the API version. bun…"
order: 3
breadcrumbTitle: "Plugin API"
tags: ["plugins","api"]
publishedAt: "2026-11-04"
updatedAt: "2026-11-04"
---

# Arkenda extensions

Build an extension with any tooling, language or layout you like. To be supported it must meet one
contract: the manifest, the package, the entry point, the permission and sandbox rules, and the API
version. `bun scripts/plugin-check.ts <package>` checks all of it the same way the app does, and links
each problem to its rule in these pages.

> **Status (API version 1.1).** Building, checking and installing a development package from a file
> work today. The marketplace, publishing, signed releases and a published `@arkenda/plugin-api`
> package are not available yet (see [The package and release](package.md#publishing)).

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

## Keeping these docs current

Parts of these pages are generated from the code, between `<!-- generated:<name> -->` markers: the
manifest fields and the taxonomy, the API reference, the limits, the permissions, the setting scopes
and the capability matrix. Edit the prose outside the markers by hand; never edit inside them.

```sh
bun scripts/plugin-docs.ts           # regenerate manifest.schema.json and every generated section
bun scripts/plugin-docs.ts --check   # ci:lint: fails when one is stale or a link/anchor is missing
```

**Managing categories** (add, remove, rename, move, change id) is described at the top of
`projects/kit/plugins/src/taxonomy.ts`: edit the governed list and the two i18n names, then run
`bun scripts/plugin-docs.ts`. `ci:lint` fails until all three agree.
