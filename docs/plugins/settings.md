# Settings

A plugin declares its settings as data; Arkenda renders them on the plugin's page (the **Options**
gear on its card, shown while the plugin is on). A plugin never renders its own settings HTML.

**No settings, just a switch:** a plugin without settings shows only its on/off switch. Add settings
only for choices people really need to make.

## Quick path

```ts
import { definePluginSettings } from '@arkenda/kit/plugin-api';

const schema = definePluginSettings({
  version: 1,
  fields: [
    { key: 'interval', type: 'duration', unit: 'minutes', min: 0, max: 120, step: 5, default: 15, label: 'Check every' },
    { key: 'mode', type: 'select', options: [{ value: 'fast', label: 'Fast' }, { value: 'safe', label: 'Safe' }], default: 'safe', label: 'Mode' },
  ],
});
await ctx.settings.registerFields(schema, (values) => apply(values)); // needs `storage`
const values = await ctx.settings.values(); // every field; defaults where unset; never secrets
```

`definePluginSettings` only types the schema. `ctx.settings.set(key, value)` changes a value, checked
as if the user entered it (never a secret).

## Field types

| Type | Value | Extra keys |
|------|-------|------------|
| `toggle` | a boolean | `default` |
| `privacy` | a boolean, shown first in a framed "Privacy" section | `default` |
| `select` | one option's value | `options`, `default` |
| `multi-select` | a list of option values | `options`, `default` |
| `number` | a number | `min`, `max`, `step`, `default` |
| `duration` | a number in `seconds`, `minutes` or `hours` | `unit`, `min`, `max`, `step`, `default` |
| `text` | text, up to 500 characters | `default`, `maxLength`, `minLength`, `allowed`, `placeholder` |
| `string-list` | a list of texts | `default`, `maxItems`, `maxLength`, `minLength`, `allowed` |
| `key-value` | an object of text keys and text values | `default`, `maxItems`, `maxLength` |
| `color` | `#rrggbb` | `default` |
| `hotkey` | Ctrl/Cmd or Alt with a letter or digit, or F1–F12; the app's own keys are refused | `default` |
| `folder` | a path inside the vault (`''` for the vault itself) | `default` |
| `secret` | kept in the OS keychain; see [Secrets](#secrets) | `maxLength` |

**On every field:** `key` (lowercase letters, digits, `-`, `_`), `label`, `description`, `group`,
`required`, `scope`, `visibleWhen: { key, equals }` (an earlier field's value, or a list of values)
and `capability` (an [app capability id](overview.md#capability-ids) such as `platform:desktop` or
`git`: elsewhere the field is greyed, with the reason).

**Groups:** `groups: [{ id, label, advanced? }]`; an `advanced` group stays folded until opened.

**Text rules** (`text`, and each item of `string-list`): `maxLength`, `minLength` and `allowed`, a
literal set of characters every character must come from (`'0123456789abcdef'`). Settings take no
regular expressions: one would run on the app's main thread, and some take minutes on a short text.
A schema with `pattern` is refused (`invalid-params` in the sandbox).

**Privacy switches** let users limit what your plugin does ("Never send telemetry", "Work offline
only"). They are stored like any other setting: honour them in your code. They never replace a
permission.

## Scopes

Each field has a `scope`:

<!-- generated:setting-scopes -->

- `vault` (the default): in the vault (the plugin's storage), so it travels with the vault to other devices.
- `device`: on this device only, for every vault.
- `vault-device`: on this device only, for this vault.

<!-- /generated:setting-scopes -->

## Secrets

A `secret` field (scope `device` or `vault-device`, never required) is kept only in the OS keychain
of the desktop and mobile apps (Android's Keystore, iOS's keychain): never in plain storage, never
synced, never exported. On the web it reads "not available here". A sandboxed plugin never reads a secret: the user enters it and the
app keeps it. Built-in plugins read theirs with `ctx.settings.secret(key)`.

## Migrations

`version` is a whole number you raise when a key or its values change. Each `migrations` step runs in
order (`to` a version) and can rename keys, drop keys and map old values to new ones:

```ts
migrations: [{ to: 2, rename: { checkEvery: 'interval' }, map: { mode: { quick: 'fast' } } }],
```

Stored values are upgraded once; nothing the schema does not name is thrown away. A value a newer
version of your plugin wrote is kept as it is.

## What users can do

- **Reset, export and import:** each changed field shows "Changed" with Reset; the page offers Reset
  all, Export (the changed values and the schema version as JSON, never secrets) and Import (only
  valid values of known fields; an export of a newer version is refused).
- **Search:** Settings search finds each setting by its label and description, and opens the
  plugin's page at that field (`/settings/plugins/<id>#setting-<key>`).
- **Profiles:** named sets of enabled plugins and their options on this device. A switch applies the
  `device` and `vault-device` values it keeps (never `vault` values, secrets or grants); your
  `onChange` receives them like any other change.
- **Turning off** keeps the settings; uninstalling asks whether to remove them too.

## Limits

<!-- generated:settings-limits -->

`PLUGIN_SETTINGS_LIMITS`

| Limit | Value | Meaning |
|-------|-------|---------|
| `fields` | 64 | — |
| `groups` | 16 | — |
| `options` | 32 | — |
| `label` | 80 | — |
| `description` | 300 | — |
| `migrations` | 32 | — |
| `renames` | 64 | — |
| `items` | 100 | Most items of a string list or key-value field. |
| `secret` | 1,024 | Longest secret (it goes to the OS keychain). |
| `allowed` | 256 | Most characters of an `allowed` set. |
| `version` | 10,000 | — |

<!-- /generated:settings-limits -->
