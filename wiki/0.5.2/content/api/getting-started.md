---
label: "Getting started"
description: "Build a \"Reading time\" plugin: a sidebar panel that shows how long the open note takes to read."
order: 2
tags: ["plugins","api"]
---

# Getting started

Build a "Reading time" plugin: a sidebar panel that shows how long the open note takes to read.

## Quick path

1. Download `arkenda-plugin-starter.zip` and `arkenda-plugin-check.mjs` from the [release](https://github.com/fsegurai/arkenda-release/releases) of the app version
   you target, and unzip the template: the project below, ready to build.
2. Build the bundle into `package/` at the manifest's `entry`, and put its hash in `integrity`.
3. Check the package with `plugin-check` (step 3); installing it in developer mode lists the same problems.
4. Install it in developer mode, turn it on, and grant its permissions.
5. After each change: build, update `integrity`, install again.

## 1. The starter template

`arkenda-plugin-starter.zip` holds this project, with `scripts/integrity.mjs` for step 2 and a `package.json` whose
`build` and `check` scripts run steps 2 and 3. Or create it by hand:

```text
reading-time/              ← your project: any layout and tooling
  src/main.ts
  package.json             ← your build tooling (never shipped)
  package/                 ← the plugin package: what you check, zip and install
    arkenda-plugin.json
    dist/main.js           ← built; the only code in the package
```

The package holds only the manifest, `release.json` (when signed), the entry bundle and allowed
assets ([files](package.md#files)); anything else, such as sources or `package.json`, is refused as
`file-not-allowed`. Keep them outside `package/`.

`package/arkenda-plugin.json` ([every field](manifest.md#fields)):

```json
{
  "schemaVersion": 2,
  "id": "reading-time",
  "name": "Reading time",
  "version": "0.1.0",
  "apiVersion": 1,
  "minAppVersion": "0.1.0",
  "description": "Shows how long the open note takes to read.",
  "author": { "name": "Ada", "url": "https://example.dev" },
  "publisher": "ada-tools",
  "license": "MIT",
  "repository": "https://github.com/ada/reading-time",
  "categories": ["writing", "sidebar"],
  "keywords": ["reading", "time"],
  "platforms": ["web", "desktop", "mobile"],
  "permissions": ["notes:read", "commands", "ui:panels"],
  "contributes": {
    "sidebarPanels": [{ "id": "reading-time", "title": "Reading time", "places": ["right", "status"] }],
    "commands": [{ "id": "refresh", "title": "Reading time: refresh" }]
  },
  "entry": "dist/main.js",
  "integrity": "sha256-…"
}
```

`src/main.ts`: the default export has `activate(ctx)` and, optionally, `deactivate()`:

```ts
import type { SandboxedPluginModule } from '@arkenda/kit/plugin-api';

const plugin: SandboxedPluginModule = {
  async activate(ctx) {
    const panel = await ctx.views.registerSidebarPanel({
      id: 'reading-time',
      view: { blocks: [{ kind: 'text', text: 'Counting…' }] },
      onAction: async (action) => {
        if (action === 'refresh') await refresh();
      },
    });
    async function refresh() {
      const note = await ctx.workspace.activeNote();
      const minutes = Math.ceil((note?.text.split(/\s+/).length ?? 0) / 200);
      await panel.update({
        blocks: [
          { kind: 'text', text: `${minutes} min`, tone: 'strong' },
          { kind: 'button', label: 'Refresh', action: 'refresh' },
        ],
      });
    }
    await ctx.commands.register({ id: 'refresh', run: refresh });
    await refresh();
  },
};

export default plugin;
```

The types live in this repository (`projects/kit/plugin-api`); they are not published to npm yet.
Copy them or point a path alias at them. Types are optional: plain JavaScript works too.

## 2. Build and hash

Any bundler works, as long as the result is **one ES module with no imports**:

```sh
bun build src/main.ts --outfile package/dist/main.js --format esm --minify
```

Then write the bundle's hash into `integrity`, as `sha256-` and the base64 of its SHA-256:

```sh
echo "sha256-$(openssl dgst -sha256 -binary package/dist/main.js | base64)"
```

`computeIntegrity(bytes)` from `@arkenda/kit/plugin-api` gives the same value.

## 3. Check

`arkenda-plugin-check.mjs` (from the release) checks a package the way that version of the app does. It needs
Node.js 22 or later (or Bun) and nothing else:

```sh
node arkenda-plugin-check.mjs package                        # the package folder, as the app reads it
node arkenda-plugin-check.mjs reading-time.zip               # or the zip of package/ you will ship
node arkenda-plugin-check.mjs package/arkenda-plugin.json    # or the manifest alone
```

Each problem prints a `rule:` link into these docs. An unsigned package is a warning: it installs
only in developer mode.

## 4. Install and run

1. Settings ▸ Extensions ▸ Plugins ▸ **Marketplace**: turn on **Developer mode** (this device only).
2. **Install development package…** and pick the `package/` folder (or **Install from file…** with
   the zip: unsigned, it installs only while developer mode is on).
3. Review what it asks for, then **Install**.
4. Turn it on in the **Installed** tab and grant its permissions.

A development package shows as **Development** everywhere and is never offered to your other
devices.

## 5. Reload after a change

Build, update `integrity`, and install the same version again: it replaces the installed one. An
older version is refused (`downgrade`); raise `version` when you ship.

## Next

- [Worked examples](examples.md): how the built-in plugins are put together.
- [Surfaces](surfaces.md): every place your plugin can show.
- [Testing a plugin](testing.md) before you ship.
