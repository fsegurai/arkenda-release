// The site's 404 page (0.5.0 G3). GitHub Pages serves only the root `404.html` for every unknown path, so a deep
// link into the playground (`<site>/playground/notes/<id>`, a reload or a shared address) lands here: this sends
// the visitor to the playground's own page with the path in `?p=`, and the playground restores it before its
// router starts (`deepLinkTarget`, src/app/platform/playground-ports.ts), accepting only paths inside its folder.
// Any other unknown path keeps the plain "Page not found". A file, not an inline script, so the page's CSP stays
// `script-src 'self'`; it runs before the page is drawn (no `defer`), so the redirect shows nothing first.
(() => {
  const script = document.currentScript;
  if (!(script instanceof HTMLScriptElement)) return;
  // This file is `<site>/assets/not-found.js`: the site's root is its folder's parent.
  const site = new URL('..', script.src).pathname;
  const folder = `${site}playground/`;
  const path = location.pathname;
  if (!path.startsWith(folder) || path === folder) return;
  const rest = path.slice(folder.length) + location.search + location.hash;
  location.replace(`${folder}?p=${encodeURIComponent(rest)}`);
})();
