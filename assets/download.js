// Highlights the download for the visitor's system (0.5.0 G1). Served as a file so the page's CSP needs no
// 'unsafe-inline'. Reads only the platform hint (User-Agent Client Hints' platform, else navigator.platform);
// sends nothing anywhere. Every option stays listed; without a match, nothing changes.
(() => {
  const hint = String(navigator.userAgentData?.platform || navigator.platform || '').toLowerCase();
  let os = '';
  if (hint.includes('android')) os = 'android';
  else if (/mac|iphone|ipad|ipod|ios|cros|chrome os/.test(hint)) os = 'web';
  else if (hint.includes('win')) os = 'windows';
  // Android browsers without Client Hints report "Linux armv8l" or "Linux aarch64" with a touch screen.
  else if (hint.includes('linux')) os = /arm|aarch/.test(hint) && navigator.maxTouchPoints > 0 ? 'android' : 'linux';
  if (!os) return;

  // The hero's button names the system ("Download for Linux").
  for (const button of document.querySelectorAll('[data-detect-label]')) {
    const label = button.getAttribute(`data-for-${os}`);
    if (label) button.textContent = label;
  }

  // The download cards: mark the visitor's, show its badge and move it first.
  const card = document.querySelector(`.dl [data-os="${os}"]`);
  if (!card) return;
  card.classList.add('rec');
  card.querySelector('.badge')?.removeAttribute('hidden');
  card.parentElement?.prepend(card);
})();
