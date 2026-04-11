/* ═══════════════════════════════════════════════════
   TOOLNEST nav-footer.js v5.0
   Updated: Added Blog tab + Tools mega-dropdown
   ═══════════════════════════════════════════════════ */

(function () {
  /* ── TOOLS DATA for mega menu ── */
  const NAV_TOOLS = {
    pdf: {
      label: 'PDF Tools',
      icon: '📄',
      color: '#E53E3E',
      items: [
        { name: 'Merge PDF',      icon: '📎', url: '/tools/merge-pdf.html' },
        { name: 'Compress PDF',   icon: '📦', url: '/tools/compress-pdf.html' },
        { name: 'Split PDF',      icon: '✂️', url: '/tools/split-pdf.html' },
        { name: 'Rotate PDF',     icon: '🔁', url: '/tools/rotate-pdf.html' },
        { name: 'Protect PDF',    icon: '🔐', url: '/tools/protect-pdf.html' },
        { name: 'Unlock PDF',     icon: '🔓', url: '/tools/unlock-pdf.html' },
        { name: 'Watermark PDF',  icon: '🏷',  url: '/tools/watermark-pdf.html' },
      ]
    },
    convert: {
      label: 'Convert',
      icon: '🔄',
      color: '#1E4FCB',
      items: [
        { name: 'JPG to PDF',    icon: '📸', url: '/tools/jpg-to-pdf.html' },
        { name: 'PDF to JPG',    icon: '🖼', url: '/tools/pdf-to-jpg.html' },
        { name: 'Word to PDF',   icon: '📝', url: '/tools/word-to-pdf.html' },
        { name: 'PDF to Word',   icon: '📄', url: '/tools/pdf-to-word.html' },
      ]
    },
    image: {
      label: 'Image',
      icon: '🖼',
      color: '#0891B2',
      items: [
        { name: 'Image Compressor', icon: '🗜', url: '/tools/image-compress.html' },
        { name: 'Image Resizer',    icon: '📐', url: '/tools/image-resizer.html' },
        { name: 'Image to PNG',     icon: '🎨', url: '/tools/image-to-png.html' },
      ]
    },
    productivity: {
      label: 'Productivity',
      icon: '⚡',
      color: '#E88B00',
      items: [
        { name: 'QR Code Generator', icon: '📱', url: '/tools/qr-code-generator.html' },
        { name: 'Password Generator',icon: '🔑', url: '/tools/password-generator.html' },
        { name: 'Word Counter',      icon: '📊', url: '/tools/word-counter.html' },
        { name: 'JSON Formatter',    icon: '{ }',url: '/tools/json-formatter.html' },
      ]
    },
    business: {
      label: 'Business',
      icon: '💼',
      color: '#00B37E',
      items: [
        { name: 'GST Invoice Generator', icon: '🧾', url: '/tools/invoice-generator.html' },
        { name: 'SEO Meta Generator',    icon: '🔍', url: '/tools/seo-generator.html' },
      ]
    }
  };

  /* ── Detect active page ── */
  const path = window.location.pathname;
  const isHome   = path === '/' || path === '/index.html';
  const isBlog   = path.startsWith('/blog');
  const isTools  = path.startsWith('/tools');
  const isAbout  = path.startsWith('/about');

  /* ── Build mega menu columns ── */
  function buildMegaMenu() {
    return Object.entries(NAV_TOOLS).map(([key, cat]) => `
      <div class="ndm-section">
        <h4>
          <span style="margin-right:5px">${cat.icon}</span>${cat.label}
        </h4>
        ${cat.items.map(t => `
          <a class="ndm-link" href="${t.url}">
            <span>${t.icon}</span>
            <span>${t.name}</span>
          </a>
        `).join('')}
      </div>
    `).join('');
  }

  /* ── Build mobile panel ── */
  function buildMobilePanel() {
    return Object.entries(NAV_TOOLS).map(([key, cat]) => `
      <div class="nmp-cat">${cat.icon} ${cat.label}</div>
      ${cat.items.map(t => `
        <a class="nmp-link" href="${t.url}">
          <span class="ico">${t.icon}</span>
          <span>${t.name}</span>
        </a>
      `).join('')}
    `).join('<div class="nmp-divider"></div>');
  }

  /* ── NAV HTML ── */
  const navHTML = `
  <nav class="nav" id="mainNav">
    <!-- Logo -->
    <a class="nav-logo" href="/">
      <img src="/favicon.png" alt="ToolNest Logo" width="40" height="40">
      <span class="nav-logo-text">Tool<span>Nest</span></span>
    </a>

    <!-- Center links -->
    <div class="nav-links" id="navLinks">
      <a href="/" class="${isHome ? 'active' : ''}">Home</a>

      <!-- Tools Dropdown -->
      <div class="nav-dropdown" id="toolsDropdown">
        <button class="nav-dropdown-btn ${isTools ? 'active' : ''}" id="toolsBtn" aria-expanded="false" aria-haspopup="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
          All Tools
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown-menu" id="toolsMenu" role="menu">
          <div class="ndm-grid" style="grid-template-columns:repeat(5,1fr);min-width:780px">
            ${buildMegaMenu()}
          </div>
          <div style="border-top:1px solid var(--border);margin-top:.75rem;padding-top:.75rem;text-align:center">
            <a href="/" style="font-size:13px;font-weight:600;color:var(--gold-d);display:inline-flex;align-items:center;gap:5px">
              ⚡ View All 20+ Tools →
            </a>
          </div>
        </div>
      </div>

      <a href="/blog.html" class="${isBlog ? 'active' : ''}">Blog</a>
      <a href="/about.html" class="${isAbout ? 'active' : ''}">About</a>
    </div>

    <!-- Right side -->
    <div class="nav-right">
      <button class="btn-dark-toggle" id="darkBtn" title="Toggle dark mode" aria-label="Toggle dark mode">🌙</button>
      <button class="nav-hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile panel -->
  <div class="nav-mobile-panel" id="mobilePanel" aria-hidden="true">
    <div class="nmp-inner">
      <div class="nmp-search">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" placeholder="Search tools…" oninput="mobileSearch(this.value)" id="mobileInput" autocomplete="off">
      </div>

      <a class="nmp-link" href="/">
        <span class="ico">🏠</span><span>Home</span>
      </a>
      <a class="nmp-link" href="/blog.html">
        <span class="ico">📚</span><span>Blog</span>
      </a>
      <a class="nmp-link" href="/about.html">
        <span class="ico">ℹ️</span><span>About</span>
      </a>

      <div class="nmp-divider"></div>
      <div id="mobilePanelTools">
        ${buildMobilePanel()}
      </div>
    </div>
  </div>`;

  /* ── FOOTER HTML — fully self-contained inline styles (works on ALL pages) ── */
  const footerHTML = `
  <style id="tn-footer-css">
    .tn-footer{
      background:#0F1B3D;
      padding:3.5rem 1.5rem 0;
      margin-top:4rem;
      font-family:'Plus Jakarta Sans','Outfit',sans-serif;
    }
    .tn-footer-inner{
      max-width:1180px;margin:0 auto;
      display:grid;grid-template-columns:260px 1fr;gap:3.5rem;
      padding-bottom:3rem;
    }
    .tn-footer-brand{}
    .tn-footer-logo{
      display:flex;align-items:center;gap:10px;
      font-family:'Outfit',sans-serif;font-weight:800;font-size:19px;
      color:#fff;text-decoration:none;margin-bottom:.6rem;
    }
    .tn-footer-logo img{
      width:36px;height:36px;border-radius:9px;object-fit:cover;
      box-shadow:0 2px 8px rgba(245,166,35,.4);flex-shrink:0;
    }
    .tn-footer-logo span{color:#F5A623}
    .tn-footer-tagline{
      font-size:13px;color:rgba(255,255,255,.42);
      line-height:1.75;margin:.2rem 0 1rem;
    }
    .tn-footer-badge{
      display:inline-flex;align-items:center;gap:6px;
      background:rgba(245,166,35,.1);border:1px solid rgba(245,166,35,.22);
      border-radius:999px;padding:5px 14px;
      font-size:12px;font-weight:600;color:#F5A623;
    }
    .tn-footer-cols{
      display:grid;grid-template-columns:repeat(4,1fr);gap:1.75rem;
    }
    .tn-footer-col-title{
      font-size:10px;font-weight:800;text-transform:uppercase;
      letter-spacing:.9px;color:rgba(255,255,255,.28);
      margin-bottom:.9rem;
    }
    .tn-footer-col a{
      display:block;font-size:13px;color:rgba(255,255,255,.48);
      margin-bottom:.5rem;text-decoration:none;
      transition:color .15s;
    }
    .tn-footer-col a:hover{color:#F5A623}
    .tn-footer-bottom{
      max-width:1180px;margin:0 auto;
      border-top:1px solid rgba(255,255,255,.07);
      padding:1.25rem 0 1.5rem;
      display:flex;justify-content:space-between;align-items:center;
      font-size:12px;color:rgba(255,255,255,.3);
      flex-wrap:wrap;gap:.5rem;
    }
    @media(max-width:900px){
      .tn-footer-inner{grid-template-columns:1fr;gap:2rem}
      .tn-footer-cols{grid-template-columns:1fr 1fr;gap:1.25rem}
    }
    @media(max-width:500px){
      .tn-footer-cols{grid-template-columns:1fr}
    }
  </style>
  <footer class="tn-footer">
    <div class="tn-footer-inner">
      <div class="tn-footer-brand">
        <a class="tn-footer-logo" href="/">
          <img src="/favicon.png" alt="ToolNest" width="36" height="36"
            onerror="this.style.display='none'">
          Tool<span>Nest</span>
        </a>
        <p class="tn-footer-tagline">Free PDF &amp; online tools for everyone.<br>Fast, private &amp; browser-based.</p>
        <div class="tn-footer-badge">🔒 Files never leave your device</div>
      </div>

      <div class="tn-footer-cols">
        <div class="tn-footer-col">
          <div class="tn-footer-col-title">PDF Tools</div>
          <a href="/tools/merge-pdf.html">Merge PDF</a>
          <a href="/tools/compress-pdf.html">Compress PDF</a>
          <a href="/tools/split-pdf.html">Split PDF</a>
          <a href="/tools/protect-pdf.html">Protect PDF</a>
          <a href="/tools/watermark-pdf.html">Watermark PDF</a>
        </div>
        <div class="tn-footer-col">
          <div class="tn-footer-col-title">Convert</div>
          <a href="/tools/jpg-to-pdf.html">JPG to PDF</a>
          <a href="/tools/pdf-to-jpg.html">PDF to JPG</a>
          <a href="/tools/word-to-pdf.html">Word to PDF</a>
          <a href="/tools/pdf-to-word.html">PDF to Word</a>
        </div>
        <div class="tn-footer-col">
          <div class="tn-footer-col-title">More Tools</div>
          <a href="/tools/image-compress.html">Image Compressor</a>
          <a href="/tools/qr-code-generator.html">QR Code Generator</a>
          <a href="/tools/invoice-generator.html">GST Invoice</a>
          <a href="/tools/password-generator.html">Password Generator</a>
          <a href="/tools/seo-generator.html">SEO Meta Generator</a>
        </div>
        <div class="tn-footer-col">
          <div class="tn-footer-col-title">Company</div>
          <a href="/blog.html">Blog</a>
          <a href="/about.html">About</a>
          <a href="/contact.html">Contact</a>
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/terms.html">Terms of Use</a>
        </div>
      </div>
    </div>
    <div class="tn-footer-bottom">
      <span>© ${new Date().getFullYear()} ToolNest. Made with ❤️ for India.</span>
      <span>All tools are free, forever.</span>
    </div>
  </footer>`;

  /* ══════════════════════════════════════════════════
     SMART INJECT
     - Tools pages: have their own <nav>, so skip nav
       injection. Only inject footer after .app-shell.
     - Other pages (home, blog): use tn-nav / tn-footer
       placeholder divs as normal.
     ══════════════════════════════════════════════════ */

  /* ── NAV: only inject if tn-nav placeholder exists
     (home, blog pages). Tools pages have their own nav. ── */
  const navEl = document.getElementById('tn-nav');
  if (navEl) {
    navEl.innerHTML = navHTML;
  }

  /* ── FOOTER: inject into placeholder if it exists,
     otherwise auto-create after .app-shell (tools pages) ── */
  let footerEl = document.getElementById('tn-footer');
  if (!footerEl) {
    footerEl = document.createElement('div');
    footerEl.id = 'tn-footer';
    /* Insert after .app-shell so footer is outside the flex container */
    const appShell = document.querySelector('.app-shell');
    if (appShell && appShell.parentNode) {
      appShell.parentNode.insertBefore(footerEl, appShell.nextSibling);
    } else {
      document.body.appendChild(footerEl);
    }
  }
  footerEl.innerHTML = footerHTML;
  /* Full-width on tools pages (3-col sidebar layout) */
  if (isTools) {
    footerEl.style.cssText = 'display:block;width:100%;clear:both;position:relative;z-index:10';
  }

  /* ── Tools pages: patch existing nav to add Blog link ──
     Runs only on /tools/ pages. Finds the existing hardcoded
     <nav> and inserts a Blog link if not already present.     ── */
  if (isTools) {
    var existingNav = document.querySelector('nav.nav');
    if (existingNav && !existingNav.querySelector('a[href="/blog.html"]')) {
      var navRight = existingNav.querySelector('.nav-right');
      if (navRight) {
        /* Insert Blog link before the first child of nav-right */
        var blogLink = document.createElement('a');
        blogLink.href = '/blog.html';
        blogLink.className = 'nav-link';
        blogLink.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> Blog';
        navRight.insertBefore(blogLink, navRight.firstChild);
      }
    }
  }

  /* ── Tools dropdown toggle ── */
  const toolsDropdown = document.getElementById('toolsDropdown');
  const toolsBtn      = document.getElementById('toolsBtn');

  if (toolsBtn) {
    toolsBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = toolsDropdown.classList.toggle('open');
      toolsBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  document.addEventListener('click', function (e) {
    if (toolsDropdown && !toolsDropdown.contains(e.target)) {
      toolsDropdown.classList.remove('open');
      if (toolsBtn) toolsBtn.setAttribute('aria-expanded', 'false');
    }
  });

  /* ── Mobile hamburger ── */
  const hamburger   = document.getElementById('hamburger');
  const mobilePanel = document.getElementById('mobilePanel');

  if (hamburger && mobilePanel) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('open');
      mobilePanel.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      mobilePanel.setAttribute('aria-hidden', !isOpen);
      if (isOpen) document.getElementById('mobileInput') && document.getElementById('mobileInput').focus();
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobilePanel.contains(e.target)) {
        hamburger.classList.remove('open');
        mobilePanel.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobilePanel.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ── Mobile search ── */
  window.mobileSearch = function (q) {
    const s = q.toLowerCase().trim();
    const container = document.getElementById('mobilePanelTools');
    if (!container) return;

    if (!s) {
      container.innerHTML = buildMobilePanel();
      return;
    }

    const allTools = Object.values(NAV_TOOLS).flatMap(c => c.items);
    const results  = allTools.filter(t => t.name.toLowerCase().includes(s));

    if (!results.length) {
      container.innerHTML = '<div style="text-align:center;padding:1rem;color:var(--ink3);font-size:13px">No tools found</div>';
      return;
    }

    container.innerHTML = results.map(t => `
      <a class="nmp-link" href="${t.url}">
        <span class="ico">${t.icon}</span>
        <span>${t.name}</span>
      </a>`).join('');
  };

  /* ── Dark mode toggle ── */
  const darkBtn = document.getElementById('darkBtn');
  if (darkBtn) {
    function applyDark(on) {
      document.documentElement.classList.toggle('dark', on);
      darkBtn.textContent = on ? '☀️' : '🌙';
      try { localStorage.setItem('tn-dark', on ? '1' : '0'); } catch (e) {}
    }

    /* Apply saved preference */
    try {
      const saved = localStorage.getItem('tn-dark');
      if (saved !== null) applyDark(saved === '1');
      else applyDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch (e) {}

    darkBtn.addEventListener('click', function () {
      applyDark(!document.documentElement.classList.contains('dark'));
    });
  }

})();
