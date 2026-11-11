# Testing a plugin

Check the contract with the app's own tools, test your logic against a fake `ctx`, then try the real
thing in developer mode.

> **Not available yet:** a published test harness with fake hosts. The app's own fakes
> (`@arkenda/kit/plugins/testing`: a fake sandbox and registry) are internal and not shipped. Until
> the harness exists, use the pattern below.

## 1. Check the contract

```sh
bun scripts/plugin-check.ts path/to/my-plugin --platform web   # the app's install gate, in memory
```

It runs the package layout and limits, the manifest schema with its permission rules, the bundle
integrity, signatures, revocations and compatibility, for the platform you name (the manifest's
first platform by default). Exit code 1 means an error; warnings never fail.

## 2. Check what you register

The same checks the app runs are exported from `@arkenda/kit/plugin-api`; each throws or returns the
problems, so call them in your own tests:

| Check | For |
|-------|-----|
| `parsePluginManifestV2(json)` | the manifest; `{ ok: true }` or every problem with its code and path |
| `validatePluginSettingsSchema(schema)` | the settings you pass to `registerFields` |
| `checkSettingInput(field, value)` | a value against one settings field |
| `validatePluginTheme(id, theme)` | a theme's tokens and contrast |
| `validatePluginInsertItem(id, item)`, `validatePluginToolbarItem(id, item)` | editor items |
| `checkCompatibility(requirements, target)` | app version, API version and platform |

## 3. Test your logic against a fake `ctx`

Type a small fake as `SandboxPluginContext`: the compiler then tells you when the API changes. Keep
it asynchronous, as the real one is, and make it refuse what the real one refuses.

```ts
import type { SandboxPluginContext } from '@arkenda/kit/plugin-api';
import plugin from '../src/main';

const views: unknown[] = [];
const ctx = {
  apiVersion: 1,
  apiMinor: 1,
  workspace: { activeNote: async () => ({ noteId: 'n1', text: 'one two three' }) },
  views: {
    registerSidebarPanel: async (panel: { view: unknown }) => {
      views.push(panel.view);
      return { update: async (view: unknown) => void views.push(view), dispose() {} };
    },
  },
  commands: { register: async () => ({ dispose() {} }) },
} as unknown as SandboxPluginContext;

await plugin.activate(ctx);
// Assert on `views`: the last one shows "1 min".
```

Test the refusals too: make a fake call reject with `{ code: 'permission-denied' }` and check that
your plugin keeps working without an optional permission.

## 4. Run it for real

Install it as a [development package](getting-started.md#4-install-and-run) and try:

- turning it off and on, and revoking each optional permission;
- a narrow notes scope (one notebook), and a note outside it;
- the web build and a phone width, if you list those platforms;
- every view at its limits (long titles, many items).

## Before you ship

Go through the [security checklist](security.md).
