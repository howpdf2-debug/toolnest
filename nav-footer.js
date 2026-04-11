/**
 * ToolNest — nav-footer.js  v2.0
 * ─────────────────────────────────────────────────────────────
 * Works for BOTH pages automatically:
 *
 *  Landing page  →  #tn-nav    full-width nav injected here
 *                   #tn-footer full-width footer at body level
 *
 *  Tool pages    →  Nav is hardcoded in HTML (no #tn-nav needed)
 *                   #tn-footer lives inside .main-content
 *                   → footer renders only in middle column ✓
 *
 * Detection:  if #tn-footer is a child of .main-content → tool mode
 *             otherwise                                 → landing mode
 * ─────────────────────────────────────────────────────────────
 */
(function () {
  'use strict';

  /* ══════════════════════════════════════════════
     1.  DETECT PAGE TYPE
  ══════════════════════════════════════════════ */
  const footerSlot = document.getElementById('tn-footer');
  const navSlot    = document.getElementById('tn-nav');

  const isToolPage = footerSlot
    ? !!footerSlot.closest('.main-content')
    : false;

  const mode = isToolPage ? 'tool' : 'landing';

  /* ══════════════════════════════════════════════
     2.  SHARED STYLES
  ══════════════════════════════════════════════ */
  const CSS = `
/* ── ToolNest nav-footer injected styles ── */

/* NAV (landing page only) */
#tn-nav .tn-nav {
  position: sticky; top: 0; z-index: 999; height: 64px;
  background: rgba(255,255,255,.90);
  backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border, #E2E4EF);
  padding: 0 1.5rem;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  box-shadow: 0 1px 2px rgba(13,13,20,.06);
}
.tn-nav-logo {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--f-display, 'Outfit', sans-serif);
  font-weight: 800; font-size: 20px; color: var(--ink, #0D0D14);
  white-space: nowrap; flex-shrink: 0;
}
.tn-nav-logo img {
  width: 40px; height: 40px; border-radius: 10px; object-fit: cover;
  box-shadow: 0 2px 8px rgba(245,166,35,.4);
}
.tn-nav-logo-fb {
  width: 40px; height: 40px; border-radius: 10px;
  background: linear-gradient(135deg,#F5A623,#FF9500);
  display: none; align-items: center; justify-content: center;
  font-size: 20px; box-shadow: 0 2px 8px rgba(245,166,35,.4); flex-shrink: 0;
}
.tn-nav-logo em { color: var(--gold, #F5A623); font-style: normal; }
.tn-nav-links { display: flex; align-items: center; gap: 4px; flex: 1; justify-content: center; }
.tn-nav-links a {
  padding: 7px 14px; border-radius: 8px;
  font-size: 14px; font-weight: 500; color: var(--ink2, #44455A);
  font-family: var(--f-body, 'Plus Jakarta Sans', sans-serif);
  transition: all .15s; white-space: nowrap;
}
.tn-nav-links a:hover { background: var(--surface, #EDEEF7); color: var(--ink, #0D0D14); }
.tn-nav-links a.active { color: var(--gold, #F5A623); font-weight: 600; }
.tn-nav-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.tn-btn-dark {
  width: 38px; height: 38px; border-radius: 8px;
  background: var(--surface, #EDEEF7); border: 1px solid var(--border, #E2E4EF);
  display: flex; align-items: center; justify-content: center;
  font-size: 17px; cursor: pointer; transition: all .15s; flex-shrink: 0;
}
.tn-btn-dark:hover { background: var(--gold-l, #FEF3DC); }
@media(max-width: 900px) { .tn-nav-links { display: none; } }

/* ── FOOTER: base (shared between both modes) ── */
.tn-footer {
  background: var(--navy, #0F1B3D);
  position: relative; overflow: hidden;
}
.tn-footer::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 0% 100%, rgba(30,79,203,.22) 0%, transparent 55%),
    radial-gradient(ellipse 40% 45% at 100% 0%, rgba(245,166,35,.10) 0%, transparent 50%);
  pointer-events: none;
}
.tn-footer-inner { position: relative; z-index: 1; }
.tn-footer-top {
  display: grid; gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255,255,255,.07);
}
.tn-footer-logo {
  display: flex; align-items: center; gap: 9px;
  font-family: var(--f-display, 'Outfit', sans-serif);
  font-weight: 900; font-size: 18px; color: #fff; margin-bottom: .8rem;
}
.tn-footer-logo img {
  width: 34px; height: 34px; border-radius: 9px; object-fit: cover;
  box-shadow: 0 2px 8px rgba(245,166,35,.4); flex-shrink: 0;
}
.tn-footer-logo-fb {
  display: none; width: 34px; height: 34px; border-radius: 9px;
  background: linear-gradient(135deg, #F5A623, #FF9500);
  align-items: center; justify-content: center;
  font-size: 16px; flex-shrink: 0; box-shadow: 0 2px 8px rgba(245,166,35,.4);
}
.tn-footer-logo em { color: var(--gold, #F5A623); font-style: normal; }
.tn-footer-desc {
  font-size: 12.5px; color: rgba(255,255,255,.42); line-height: 1.75;
  margin-bottom: 1rem; font-family: var(--f-body, 'Plus Jakarta Sans', sans-serif);
}
.tn-footer-badge {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(245,166,35,.1); border: 1px solid rgba(245,166,35,.22);
  border-radius: 999px; padding: 5px 13px;
  font-size: 11.5px; font-weight: 600; color: var(--gold, #F5A623);
  font-family: var(--f-body, 'Plus Jakarta Sans', sans-serif);
}
.tn-footer-badge-dot {
  width: 6px; height: 6px; background: var(--gold, #F5A623);
  border-radius: 50%; animation: tnBlink 2s infinite;
}
@keyframes tnBlink {
  0%,100% { opacity:1; transform:scale(1); }
  50%      { opacity:.4; transform:scale(.75); }
}
.tn-footer-col h4 {
  font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .8px;
  color: rgba(255,255,255,.28); margin-bottom: .9rem;
  font-family: var(--f-display, 'Outfit', sans-serif);
}
.tn-footer-col a {
  display: block; font-size: 12.5px; color: rgba(255,255,255,.48);
  margin-bottom: .45rem; transition: color .15s;
  font-family: var(--f-body, 'Plus Jakarta Sans', sans-serif); font-weight: 500;
}
.tn-footer-col a:hover { color: var(--gold, #F5A623); }
.tn-footer-bottom {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: .6rem; padding: 1.1rem 0 1.25rem;
  font-size: 11.5px;
}
.tn-footer-bottom-left {
  color: rgba(255,255,255,.35);
  font-family: var(--f-body, 'Plus Jakarta Sans', sans-serif);
}
.tn-footer-bottom-left a {
  color: rgba(255,255,255,.45); margin-left: .75rem; transition: color .15s;
  font-family: var(--f-body, 'Plus Jakarta Sans', sans-serif);
}
.tn-footer-bottom-left a:hover { color: var(--gold, #F5A623); }
.tn-footer-bottom-right {
  display: flex; align-items: center; gap: .55rem;
  color: rgba(255,255,255,.3); font-size: 11px;
  font-family: var(--f-body, 'Plus Jakarta Sans', sans-serif);
}

/* ── LANDING MODE: max-width container, 5-column grid ── */
.tn-footer.tn-landing .tn-footer-inner {
  max-width: 1180px; margin: 0 auto; padding: 3.5rem 1.5rem 0;
}
.tn-footer.tn-landing .tn-footer-top {
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
}

/* ── TOOL MODE: full-width of middle column, 4-column grid ── */
.tn-footer.tn-tool .tn-footer-inner {
  padding: 2.5rem 2rem 0;
}
.tn-footer.tn-tool .tn-footer-top {
  grid-template-columns: 2fr 1fr 1fr 1fr;
}

/* ── Responsive ── */
@media(max-width: 1024px) {
  .tn-footer.tn-landing .tn-footer-top { grid-template-columns: 1fr 1fr 1fr; }
  .tn-footer.tn-landing .tn-footer-brand { grid-column: 1 / -1; }
}
@media(max-width: 900px) {
  .tn-footer.tn-tool .tn-footer-top { grid-template-columns: 1fr 1fr 1fr; }
  .tn-footer.tn-tool .tn-footer-brand { grid-column: 1 / -1; }
}
@media(max-width: 640px) {
  .tn-footer.tn-landing .tn-footer-top,
  .tn-footer.tn-tool    .tn-footer-top  { grid-template-columns: 1fr 1fr; }
  .tn-footer.tn-landing .tn-footer-inner { padding: 2rem 1.25rem 0; }
  .tn-footer.tn-tool    .tn-footer-inner { padding: 2rem 1.25rem 0; }
  .tn-footer-bottom { flex-direction: column; align-items: flex-start; gap: .4rem; }
}
@media(max-width: 380px) {
  .tn-footer.tn-landing .tn-footer-top,
  .tn-footer.tn-tool    .tn-footer-top  { grid-template-columns: 1fr; }
}
`;

  /* ══════════════════════════════════════════════
     3.  NAV HTML  (injected only when #tn-nav exists)
  ══════════════════════════════════════════════ */
  const NAV_LINKS = [
    { href: '/tools/compress-pdf.html',      label: 'Compress PDF'     },
    { href: '/tools/merge-pdf.html',          label: 'Merge PDF'        },
    { href: '/tools/jpg-to-pdf.html',         label: 'JPG to PDF'       },
    { href: '/tools/qr-code-generator.html',  label: 'QR Code'          },
    { href: '/tools/invoice-generator.html',  label: 'GST Invoice'      },
  ];

  function buildNav() {
    const cur = location.pathname;
    const links = NAV_LINKS
      .map(l => `<a href="${l.href}"${cur === l.href ? ' class="active"' : ''}>${l.label}</a>`)
      .join('');
    return `
<nav class="tn-nav">
  <a href="/" class="tn-nav-logo">
    <img src="/favicon.png" alt="ToolNest" width="40" height="40"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="tn-nav-logo-fb">🔧</div>
    Tool<em>Nest</em>
  </a>
  <div class="tn-nav-links">${links}</div>
  <div class="tn-nav-right">
    <button class="tn-btn-dark" onclick="tnToggleDark()" title="Toggle dark mode" id="tnDarkBtn">🌙</button>
  </div>
</nav>`;
  }

  /* ══════════════════════════════════════════════
     4.  FOOTER HTML
  ══════════════════════════════════════════════ */
  function buildFooter(m) {
    // 5th column (Company) shown on landing, hidden on tool page to save space
    const companyCol = m === 'landing' ? `
      <div class="tn-footer-col">
        <h4>Company</h4>
        <a href="/about.html">About Us</a>
        <a href="/contact.html">Contact</a>
        <a href="/blog.html">Blog</a>
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms of Use</a>
        <a href="/sitemap.xml">Sitemap</a>
      </div>` : '';

    return `
<footer class="tn-footer tn-${m}">
  <div class="tn-footer-inner">
    <div class="tn-footer-top">

      <div class="tn-footer-brand tn-footer-col">
        <div class="tn-footer-logo">
          <img src="/favicon.png" alt="ToolNest" width="34" height="34"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="tn-footer-logo-fb">🔧</div>
          Tool<em>Nest</em>
        </div>
        <p class="tn-footer-desc">
          20+ free browser-based tools for PDF, images, QR codes &amp; more.
          No signup. No server upload. Made for India.
        </p>
        <div class="tn-footer-badge">
          <span class="tn-footer-badge-dot"></span>
          Free · No Signup · 100% Browser-based
        </div>
      </div>

      <div class="tn-footer-col">
        <h4>PDF Tools</h4>
        <a href="/tools/compress-pdf.html">Compress PDF</a>
        <a href="/tools/merge-pdf.html">Merge PDF</a>
        <a href="/tools/split-pdf.html">Split PDF</a>
        <a href="/tools/rotate-pdf.html">Rotate PDF</a>
        <a href="/tools/protect-pdf.html">Protect PDF</a>
        <a href="/tools/unlock-pdf.html">Unlock PDF</a>
        <a href="/tools/watermark-pdf.html">Watermark PDF</a>
      </div>

      <div class="tn-footer-col">
        <h4>Convert &amp; Image</h4>
        <a href="/tools/jpg-to-pdf.html">JPG to PDF</a>
        <a href="/tools/pdf-to-jpg.html">PDF to JPG</a>
        <a href="/tools/word-to-pdf.html">Word to PDF</a>
        <a href="/tools/pdf-to-word.html">PDF to Word</a>
        <a href="/tools/image-compress.html">Image Compressor</a>
        <a href="/tools/image-resizer.html">Image Resizer</a>
        <a href="/tools/image-to-png.html">Image to PNG</a>
      </div>

      <div class="tn-footer-col">
        <h4>More Tools</h4>
        <a href="/tools/qr-code-generator.html">QR Code Generator</a>
        <a href="/tools/password-generator.html">Password Generator</a>
        <a href="/tools/word-counter.html">Word Counter</a>
        <a href="/tools/json-formatter.html">JSON Formatter</a>
        <a href="/tools/invoice-generator.html">GST Invoice</a>
        <a href="/tools/seo-generator.html">SEO Meta Generator</a>
      </div>

      ${companyCol}

    </div>

    <div class="tn-footer-bottom">
      <div class="tn-footer-bottom-left">
        &copy; <span class="tn-yr"></span> ToolNest &middot; All rights reserved &middot;
        <a href="/privacy.html">Privacy</a>
        <a href="/terms.html">Terms</a>
      </div>
      <div class="tn-footer-bottom-right">
        <span>🇮🇳 Made for India</span>
        <span>&middot;</span>
        <span>No signup needed</span>
        <span>&middot;</span>
        <span>Files never uploaded</span>
      </div>
    </div>
  </div>
</footer>`;
  }

  /* ══════════════════════════════════════════════
     5.  INJECT STYLES (once)
  ══════════════════════════════════════════════ */
  if (!document.getElementById('tn-injected-css')) {
    const s = document.createElement('style');
    s.id = 'tn-injected-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ══════════════════════════════════════════════
     6.  INJECT NAV  (only if #tn-nav exists)
  ══════════════════════════════════════════════ */
  if (navSlot) {
    navSlot.innerHTML = buildNav();
  }

  /* ══════════════════════════════════════════════
     7.  INJECT FOOTER  (only if #tn-footer exists)
  ══════════════════════════════════════════════ */
  if (footerSlot) {
    footerSlot.innerHTML = buildFooter(mode);
    document.querySelectorAll('.tn-yr').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ══════════════════════════════════════════════
     8.  DARK MODE  (persisted via localStorage)
  ══════════════════════════════════════════════ */
  window.tnToggleDark = function () {
    const isDark = document.documentElement.classList.toggle('dark');
    const btn = document.getElementById('tnDarkBtn');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
    try { localStorage.setItem('tn-dark', isDark ? '1' : '0'); } catch(e) {}
  };

  // Restore on load
  try {
    if (localStorage.getItem('tn-dark') === '1') {
      document.documentElement.classList.add('dark');
      // update button if it exists
      const btn = document.getElementById('tnDarkBtn');
      if (btn) btn.textContent = '☀️';
    }
  } catch(e) {}

})();
