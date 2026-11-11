# The package and release

A package is a `.zip` (or, in developer mode, a folder) holding the manifest, one bundle and a few
assets. Arkenda reads it without running it, checks every file, and installs it only when it passes.

## Layout

```text
reading-time/
  arkenda-plugin.json   ← the manifest, at the root or inside one top folder
  dist/main.js          ← the manifest's `entry`, the only code allowed
  release.json          ← signed packages only
  README.md, styles.css, icon.png …   ← optional assets
```

- A package whose files all sit in one top folder is read from inside that folder.
- `arkenda-plugin.json` must be there and be JSON (`missing-manifest`, `manifest-not-json`).
- The file named by `entry` must be there (`missing-entry`).
- `release.json`, when present, must be JSON and exactly `{ "catalog": …, "revocations"?: … }`
  (`release-not-json`, `release-file-invalid`).
- A manifest of another kind than `plugin` (a theme, a font…) is refused with `not-a-plugin`: only
  plugins can be installed in this version.

## Files

Allowed: the manifest, `release.json`, the entry and assets with one of these extensions:
`.css`, `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.woff2`, `.md`, `.txt` (`PLUGIN_ASSET_EXTENSIONS`).
Anything else is refused (`file-not-allowed`), including any other `.js`, `.mjs` or `.json` file.

Also refused:

- paths that are absolute or contain `..`, `\`, a drive letter or a control character (`unsafe-path`);
- symbolic links (`symlink`);
- two names that differ only by case (`duplicate`).

`__MACOSX/` and `.DS_Store` are skipped.

## Zip

Plain zip with deflate (or stored) files. Refused: no zip directory (`not-a-zip`); zip64, split or
encrypted archives, or another compression method (`unsupported-zip`); a file whose bytes do not
match its size or checksum (`corrupt`).

## Limits

<!-- generated:package-limits -->

`PLUGIN_PACKAGE_LIMITS`: Size limits of a plugin package, checked before and while it is unpacked.

| Limit | Value | Meaning |
|-------|-------|---------|
| `maxPackageBytes` | 5 MB | The `.zip` file, or the sum of the files of a folder. |
| `maxUnpackedBytes` | 5 MB | Every file once unpacked; a zip declaring more is refused before anything is inflated. |
| `maxFiles` | 64 | Files in the package, folders not counted. |
| `maxAssetBytes` | 1 MB | One asset (any file other than the manifest, `release.json` and the entry). |
| `maxPathLength` | 200 | Characters of a path inside the package. |

<!-- /generated:package-limits -->

A zip that declares more than the unpacked limit is refused before anything is inflated.

## Integrity

The manifest's `integrity` is `sha256-` plus the base64 SHA-256 of the entry's bytes. The install
refuses a bundle that does not match (`bundle-mismatch`), and the app checks the bytes again each
time it loads the plugin into the sandbox.

## Signing

Signed packages carry `release.json` and show as **Verified**. Three documents are signed:

| Document | Signed by | Covers |
|----------|-----------|--------|
| Catalog (allowlist) | Registry key | Every reviewed plugin and release, plus publisher keys. |
| Revocation list (denylist) | Registry key | Plugin versions every device must disable. |
| Release statement | Publisher key | `id`, `publisher`, `version`, `apiVersion`, `integrity`, sorted `permissions`. |

- **Algorithm:** Ed25519 through WebCrypto. A signature is `{ "kid", "sig" }` (`sig`: base64 of 64
  bytes).
- **Bytes signed:** the canonical JSON (RFC 8785, `canonicalJson`) of the document without its
  `signature` field.
- **Key rotation:** each trusted key has a `kid` and an optional `notAfter` date, after which it is
  refused.
- **Document types:** each document carries a `type` (`arkenda-plugin-catalog`,
  `arkenda-plugin-revocations`, `arkenda-plugin-release`); a signature never verifies a document of
  another type.
- **The install gate** (`verifyRelease`): the catalog signature, the publisher signature of the
  release (with that publisher's keys from the catalog only), the bundle against `integrity`, the
  revocation list, then compatibility. The installed manifest must match its catalog release
  exactly (`publisher`, `version`, `apiVersion`, `permissions`, `integrity`); the fields the publisher
  does not sign (`entry`, `contributes`, `platforms`…) are covered by the registry's signature of the
  catalog.

**Development packages** have no `release.json`. They install only with developer mode on (per
device, off by default), show as **Development**, and are never offered to your other devices.

> **Not available yet:** the app ships no registry key, so every signed package is refused today.
> Use development packages until the registry exists.

## Revocation

A revocation list names plugin versions with a small semver subset: `*`, `1.2.3`, `^1.2.3`,
`~1.2.3`, `>=1.2.3`, `<1.2.3`, space-separated comparators that must all match, and ` || `
alternatives. Build suffixes (`+build`) are ignored. A pre-release (`2.0.0-beta.1`) is revoked when
either reading of it matches (as its release or as just below it): the kill switch errs on the safe
side.

At startup, and each time the Installed tab opens, installed plugins are checked against the device's
last verified revocation list: a revoked plugin is turned off, shown with a banner, and cannot be
installed again (`revoked`).

## Installing

Settings ▸ Extensions ▸ Plugins ▸ Marketplace ▸ **Install from file…** (a `.zip`), or **Install
development package…** (a folder, in developer mode). Arkenda verifies the package, then shows a
review: every permission and what it means, the hosts it may ask for, and what it adds. Permissions
are granted later, when the user turns it on.

- The bundle is stored on this device only, keyed by `id@version`.
- The installed list and the on/off flag sync with the vault; other devices must fetch and verify
  the bundle themselves, and show "Not downloaded on this device" until then.
- The same or a newer version replaces the installed one; an older one is refused (`downgrade`).
- A built-in plugin's id cannot be installed (`built-in`).
- **Uninstall** turns the plugin off, removes it from the installed list and its storage on every
  device, and deletes its bundle from this device. Built-in plugins can only be turned off.

## Publishing

> **Not available yet.** The marketplace, its registry (`registry.arkenda.dev`, a placeholder), the
> review process and release statements signed by publishers are planned, not live. Today a plugin
> reaches users only as a development package they install themselves.

## Error codes

Every code `bun scripts/plugin-check.ts` reports for a package, and the section that explains it:

<!-- generated:package-errors -->

| Section | Codes |
|---------|-------|
| [Limits](#limits) | `too-large`, `too-many-files`, `unpacked-too-large`, `file-too-large` |
| [Zip](#zip) | `not-a-zip`, `unsupported-zip`, `corrupt` |
| [Files](#files) | `unsafe-path`, `symlink`, `duplicate`, `file-not-allowed` |
| [Layout](#layout) | `missing-manifest`, `manifest-not-json`, `missing-entry`, `release-not-json`, `release-file-invalid` |
| [Signing](#signing) | `unsigned`, `catalog-invalid`, `catalog-signature`, `not-in-catalog`, `version-not-in-catalog`, `publisher-mismatch`, `api-version-mismatch`, `permissions-mismatch`, `integrity-mismatch`, `publisher-signature` |
| [Integrity](#integrity) | `bundle-mismatch` |
| [Revocation](#revocation) | `revocations-invalid`, `revoked` |
| [Compatibility](versioning.md#compatibility) (versioning.md) | `incompatible` |
| [Kind](manifest.md#kind) (manifest.md) | `not-a-plugin` |
| [Installing](#installing) | `built-in`, `downgrade`, `unexpected` |

<!-- /generated:package-errors -->

Manifest errors link to the [manifest reference](manifest.md#fields).
