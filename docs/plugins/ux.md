# UX guidelines

A plugin should feel like part of Arkenda. For sandboxed plugins most of this is automatic, because
the app renders their views, settings and menus with its own components; what is left is the words,
the structure and the choices you make.

## Quick rules

- **Short, plain titles.** Name commands as "Plugin: action" ("Git: pull"); the palette groups them.
- **One tool, one job.** A panel or widget answers one question; split it rather than adding tabs.
- **Quiet by default.** No notification for routine work; reserve them for what the user asked for.
- **Settings only when needed.** A plugin with no settings shows just its switch; that is good.
- **Never block.** Show a "Counting…" state at once and update the view when work is done.

## Design tokens and themes

The app's look comes from design tokens (`--ark-*`: colours, fonts, radii, line heights). A
sandboxed plugin's views use them automatically, in light and dark. A theme sets token values only
(`THEME_TOKENS`), with text at 4.5:1 contrast at least on the background; see
[Surfaces ▸ Themes](surfaces.md#themes).

## Components

- **Sandboxed plugins** describe views as data (`SandboxView`): headings, text with a `muted` or
  `strong` tone, lists, note and tag links, buttons. The app draws them with its own components, so
  they match the app and follow its accessibility rules.
- **Built-in plugins** use the shared components of `@arkenda/kit/ui` (buttons, toggles, menus,
  dialogs, icons, trees) and the app's tokens, never one-off styles.

## Words and languages

Write titles, labels and descriptions in plain English, in sentence case, without jargon.

> **Not available yet:** translations of a third-party plugin's own text. Manifest titles and view
> text are shown as written; the app's own words around them follow the user's language.

## Accessibility

- Give every button a label that says what it does ("Refresh", not "Go").
- Don't rely on colour alone: say it in the text too.
- Keep text short enough for the view limits ([The sandbox](sandbox.md#limits)); long text wraps.
- Hotkeys are suggestions: users can rebind them, and the app's keys always win.

## Mobile

On phones, menus become bottom sheets, a status bar tool opens as a sheet, and touch targets are at
least 44 px (`--ark-touch-target`). List `mobile` in `platforms` only after trying your plugin at a
phone width; keep views short enough to read without scrolling sideways.
