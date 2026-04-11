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

  /* ── FOOTER HTML ── */
  const footerHTML = `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="nav-logo" href="/" style="margin-bottom:.5rem">
          <img src="/favicon.png" alt="ToolNest" width="36" height="36">
          <span class="nav-logo-text" style="font-size:18px">Tool<span>Nest</span></span>
        </a>
        <p class="footer-tagline">Free PDF & online tools for everyone.<br>Fast, private & browser-based.</p>
        <div class="footer-badge">🔒 Files never leave your device</div>
      </div>

      <div class="footer-cols">
        <div class="footer-col">
          <div class="footer-col-title">PDF Tools</div>
          <a href="/tools/merge-pdf.html">Merge PDF</a>
          <a href="/tools/compress-pdf.html">Compress PDF</a>
          <a href="/tools/split-pdf.html">Split PDF</a>
          <a href="/tools/protect-pdf.html">Protect PDF</a>
          <a href="/tools/watermark-pdf.html">Watermark PDF</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Convert</div>
          <a href="/tools/jpg-to-pdf.html">JPG to PDF</a>
          <a href="/tools/pdf-to-jpg.html">PDF to JPG</a>
          <a href="/tools/word-to-pdf.html">Word to PDF</a>
          <a href="/tools/pdf-to-word.html">PDF to Word</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">More Tools</div>
          <a href="/tools/image-compress.html">Image Compressor</a>
          <a href="/tools/qr-code-generator.html">QR Code Generator</a>
          <a href="/tools/invoice-generator.html">GST Invoice</a>
          <a href="/tools/password-generator.html">Password Generator</a>
          <a href="/tools/seo-generator.html">SEO Meta Generator</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Company</div>
          <a href="/blog.html">Blog</a>
          <a href="/about.html">About</a>
          <a href="/contact.html">Contact</a>
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/terms.html">Terms of Use</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ToolNest. Made with ❤️ for India.</span>
      <span>All tools are free, forever.</span>
    </div>
  </footer>`;

  /* ── Inject into DOM ── */
  const navEl = document.getElementById('tn-nav');
  const footerEl = document.getElementById('tn-footer');
  if (navEl) navEl.innerHTML = navHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

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
