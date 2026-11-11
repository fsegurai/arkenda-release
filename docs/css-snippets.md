# CSS snippets

CSS snippets are small style sheets that change how Arkenda looks on one device. You manage them in
**Settings ▸ Appearance ▸ CSS snippets**: write a new one, import a `.css` file, edit it, turn it on or off,
or delete it.

## Where they live

- **On this device only.** Snippets are stored in the app's local storage, not in the vault. They are
  never synced and never exported with your notes.
- **Off by default.** A new or imported snippet starts off; nothing applies until you turn it on.
- **Limits:** a name of up to 80 characters, up to 64 kB of CSS per snippet, 256 kB for all snippets
  together, and 50 snippets.
- An older version of the app never overwrites the list a newer version saved.

## How they apply

- Each snippet that is on becomes its own `<style data-ark-snippet="…">` element at the end of the page's
  `<head>`, after the app's own styles (styles that load later are moved before them). At equal
  specificity a snippet wins.
- The CSS is set as plain text, so no HTML is ever parsed. A snippet that contains `</style` is refused.
- One snippet's syntax error stays inside that snippet; the others still apply.
- Changes apply at once: turning a snippet on, off or editing it updates the open window.
- **Plugins never get them.** Plugin panels run in sandboxed frames, which are separate documents.

## Safety

- **No remote loads.** The app's Content Security Policy decides what CSS may fetch, and snippets cannot
  change it:
  - `@import` of another site's style sheet is refused (`style-src 'self' 'unsafe-inline'`).
  - Fonts load only from the app itself or `data:` URLs (`font-src 'self' data:`).
  - Images in `url()` load only from the app, `data:` and `blob:` URLs, and the OpenStreetMap tiles the
    map uses (`img-src … https://tile.openstreetmap.org`). That is the only outside address CSS can reach,
    on the desktop, Android and the web build alike.
  - CSS cannot run script.
- **Start-up safety net.** When the app starts with snippets on, it notes which ones. Once the app has been
  running normally for 10 seconds, or is closed normally, the note is cleared. If the app crashes or fails to
  start before that, the next start applies none, turns off every snippet that is on (they are kept) and the activity island names
  them, with a button to open the snippets settings.
- **Start without snippets on purpose.** In the browser, open the app with `?safe-css` in the address (for
  example `https://…/?safe-css`). No snippet applies in that run; your snippets stay as they are and changes
  you make are saved for the next normal start. Everywhere, including the desktop and Android, press
  **Ctrl+Alt+Shift+S** (**⌘⌥⇧S** on macOS) at any time: every snippet is removed for the rest of that run,
  even when a snippet hides the whole window; your snippets stay saved, so turn the culprit off in
  Settings ▸ Appearance ▸ CSS snippets.

## Stable hooks

Build snippets on what is listed here. These hooks are meant to stay between versions; **anything else
(other class names, element structure, component internals) may change without notice.**

### Design tokens

Set or read these custom properties on `:root` (or on one of the elements below). The accent colour,
fonts and density you choose in Settings ▸ Appearance are set on `html` directly and win over a `:root`
rule; add `!important` to override them.

| Group | Tokens |
|-------|--------|
| Colour | `--ark-color-bg`, `--ark-color-bg-subtle`, `--ark-color-bg-muted`, `--ark-color-bg-hover`, `--ark-color-bg-active`, `--ark-color-text`, `--ark-color-text-muted`, `--ark-color-text-subtle`, `--ark-color-border`, `--ark-color-border-strong`, `--ark-color-accent`, `--ark-color-accent-hover`, `--ark-color-accent-subtle`, `--ark-color-accent-contrast`, `--ark-color-elevated`, `--ark-color-chrome`, `--ark-color-chrome-subtle`, `--ark-color-selection`, `--ark-color-danger`, `--ark-color-warning`, `--ark-color-success` |
| Spacing | `--ark-space-1`, `--ark-space-2`, `--ark-space-3`, `--ark-space-4`, `--ark-space-5`, `--ark-space-6`, `--ark-space-8` |
| Radius | `--ark-radius-sm`, `--ark-radius-md`, `--ark-radius-lg` |
| Font | `--ark-font-sans`, `--ark-font-mono`, `--ark-font-editor`, `--ark-font-size-xs`, `--ark-font-size-sm`, `--ark-font-size-md`, `--ark-font-size-lg`, `--ark-font-size-xl`, `--ark-font-size-2xl`, `--ark-font-size-editor` |

### Page attributes

| Selector | Meaning |
|----------|---------|
| `html[data-theme='light']`, `html[data-theme='dark']` | An explicit light or dark choice (absent when the app follows the system; use `@media (prefers-color-scheme: dark)` then). |
| `html[data-layout='phone']`, `'tablet'`, `'desktop'` | The layout in use. |

### Elements

| Selector | What it is |
|----------|------------|
| `ark-title-bar` | The bar at the top of the window. |
| `ark-sidebar` | The left sidebar (notebooks, views, tags). |
| `ark-note-list` | The list of notes. |
| `ark-note-editor` | The note editor; the text area inside it is CodeMirror's `.cm-editor` (`.cm-content`, `.cm-line`). |
| `ark-note-preview` | The rendered preview of a note. |
| `ark-status-bar` | The status bar at the bottom of the window. |

### Example

```css
/* A wider line height and a warmer accent in the editor. */
ark-note-editor .cm-editor {
  line-height: 1.8;
}

:root {
  --ark-color-accent: #c2410c;
}
```

If a snippet makes the app hard to use, turn it off in Settings ▸ Appearance ▸ CSS snippets, or use the
safety net described above.
