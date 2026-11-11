# Security checklist

Use it before you ship a plugin, and when you review someone else's. The sandbox limits the damage a
plugin can do; this list keeps it from asking for more than it needs.

## For authors

- [ ] `bun scripts/plugin-check.ts` reports no error for the zip you ship.
- [ ] Every permission is used; the ones you can work without are in `optionalPermissions`.
- [ ] `network.hosts` lists only the hosts you call, exactly (no wildcard exists, and none is needed).
- [ ] Nothing you send to a host contains note text the user did not ask you to send.
- [ ] Your plugin handles `permission-denied`, `out-of-scope` and `network-not-available` without
      breaking, and keeps working without its optional permissions.
- [ ] Secrets are `secret` settings, never `storage` values or text fields.
- [ ] You honour your own privacy switches (`privacy` settings) everywhere you send or keep data.
- [ ] The HTML your Markdown blocks return is built from escaped text; the app sanitizes it, but do
      not rely on that for correctness.
- [ ] The bundle has no `eval`, remote code or obfuscated parts; its source is at `repository`.
- [ ] `integrity` matches the bundle you ship, and `version` is higher than the last release.
- [ ] Contribution ids are stable, so users' renames and hidden items keep working.

## For reviewers

- [ ] The manifest passes `plugin-check`, and its `publisher`, `version`, `apiVersion`,
      `permissions` and `integrity` match the release you review.
- [ ] Each permission is explained by what the plugin does; `notes:write` and `network` are
      justified in its description or README.
- [ ] Each host is the plugin's own service or a well-known API it names.
- [ ] The source at `repository` builds to the same bundle bytes (`integrity`).
- [ ] The plugin does not read notes it does not need, or send them anywhere without a user action.
- [ ] It degrades gracefully when a permission is revoked or a host is not approved.
- [ ] Its categories describe what it does (1 to 3), and its keywords are not spam.

> **Not available yet:** the marketplace review itself (who reviews, how a release is signed into the
> catalog). This list is the bar it will use.

## What the app already enforces

You do not need to check these by hand; they are covered by [the sandbox](sandbox.md) and
[the package rules](package.md):

- no access to the app's page, storage or network from plugin code;
- every call checked against the declared and granted permissions, at the moment it is made;
- views as data, Markdown HTML sanitized, themes as token values only;
- package files, sizes and paths checked; the bundle re-checked against `integrity` before each load;
- signatures, revocations and compatibility checked at install.
