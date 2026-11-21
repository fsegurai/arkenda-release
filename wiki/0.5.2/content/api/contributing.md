---
label: "Contributing a plugin"
description: "How a plugin will reach other Arkenda users, what the review checks, and what is expected of you after it is published."
order: 18
tags: ["plugins","api"]
---

# Contributing a plugin

How a plugin will reach other Arkenda users, what the review checks, and what is expected of you after
it is published.

## Today: publishing is not open yet

The marketplace is not live. Today:

- **You can build and use a plugin.** Install it as a development package on your own devices
  ([Getting started](getting-started.md#4-install-and-run)).
- **Other users can install it the same way:** from your `.zip` or folder, with developer mode on. It
  shows as **Development** and is never offered to their other devices.
- **No plugin can be signed yet.** The app ships no registry key, so every signed package is refused
  ([Signing](package.md#signing)).

You can still **submit your plugin** with the
[Plugin submission](https://github.com/fsegurai/arkenda-release/issues/new?template=5-plugin-submission.yml)
form. A submission registers your plugin and asks for an early look against the
[review checklist](#review-checklist). It does not publish, sign or list anything, and an early look is
best effort.

## Planned: the process

None of this is live yet; it is how publishing is designed to work, and it may still change.

1. **You prepare a release:** a package that passes the app's checks, its source at `repository`, a
   README with screenshots and a license ([Requirements](requirements.md)).
2. **You submit it** with the submission form: id, version, repository, release and the reason for
   each permission.
3. **A reviewer goes through the [review checklist](#review-checklist)** and rebuilds your bundle from
   its source to check `integrity`.
4. **You sign a release statement** with your publisher key: `id`, `publisher`, `version`,
   `apiVersion`, `integrity` and the sorted `permissions` ([Signing](package.md#signing)).
5. **The registry adds the release to its signed catalog.** The app then installs it as **Verified**.

## Review checklist

The review uses the reviewer half of the [security checklist](security.md#for-reviewers), grouped here
with the rest of the bar. Go through it yourself before you submit.

### Security

- [ ] The package passes the app's install checks with no error.
- [ ] `publisher`, `version`, `apiVersion`, `permissions` and `integrity` match the release.
- [ ] The source at `repository` builds to the same bundle bytes (`integrity`).
- [ ] No `eval`, remote code or obfuscated parts.
- [ ] Each host in `network.hosts` is your own service or a well-known API the plugin names.

### Privacy

- [ ] Each permission is explained by what the plugin does; `notes:write` and `network` are justified
      in its description or README.
- [ ] It reads only the notes it needs, and sends none anywhere without a user action.
- [ ] Secrets are `secret` settings; the plugin honours its own privacy switches.
- [ ] It keeps working when an optional permission or a host is revoked.

### Performance

- [ ] `activate` is short, and nothing in the plugin runs close to the time or rate limits
      ([Performance budget](limitations.md#performance-budget)).
- [ ] Views show a state at once and update when the work is done.

### UX

- [ ] Titles and labels are plain English, in sentence case ([UX guidelines](ux.md)).
- [ ] Buttons have labels that say what they do; nothing is said by colour alone.
- [ ] It reads well in light and dark themes, and at a phone width if it lists `mobile`.
- [ ] Its categories describe what it does (1 to 3), and its keywords are not spam.
- [ ] It is quiet by default: no notification for routine work.
- [ ] The README has screenshots and says where to report problems.

## Signing

Signing is designed but not live: the app checks the registry's signature of the catalog and your
signature of each release, with Ed25519 keys that rotate by `kid`. How you get a publisher key is not
decided yet. The format is in [Signing](package.md#signing).

## Updates

- Raise `version` for each release; an older one is refused (`downgrade`).
- An update that asks for more (a new permission, host or wider access) keeps the user's current grant
  until they review the new request ([Updates](permissions.md#updates)).
- Keep contribution ids and settings keys stable, and change keys through
  [migrations](settings.md#migrations).

## Revocation

A published plugin version can be revoked through a signed revocation list: every device turns it off,
shows a banner, and refuses to install it again ([Revocation](package.md#revocation)). It is meant for
versions that are harmful or broken; it will run through the registry, which is not live yet.

## Licensing

- Choose any license and write it as an SPDX expression in `license` (`MIT`,
  `Apache-2.0 OR MIT`) ([`license`](manifest.md#license)).
- The review rebuilds your bundle from the source at `repository`, so that source must be readable by
  the reviewer.
- Ship only what you have the right to ship: your dependencies' licenses apply to the bundle you
  build.

## Support

- Say in your README where users report problems with your plugin (your repository's issues, for
  example). Problems with the plugin belong there, not in Arkenda's issues.
- Report a problem with the plugin API, or a rule in these pages that looks wrong, in
  [Arkenda's issues](https://github.com/fsegurai/arkenda-release/issues/new/choose).

## Deprecation

- **Arkenda's API:** from the first public release, a renamed or removed API keeps working for at least
  one API version after it is deprecated, and each change is in the
  [API changelog](versioning.md#api-changelog).
- **Your plugin:** when you stop maintaining it, say so at the top of your README and in the
  description of a last release. How the marketplace will mark a plugin as unmaintained is not decided
  yet.
