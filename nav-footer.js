
/* ToolNest Shared Nav + Footer v4 */
(function () {
  const LOGO_IMG = '/favicon.png';
  const G_VERIFY = 'dbfc89456a05e36c';

  const TOOLS = [
    { sec: 'PDF Tools', items: [
      { icon:'📦', name:'Compress PDF',   url:'/tools/compress-pdf.html' },
      { icon:'📎', name:'Merge PDF',      url:'/tools/merge-pdf.html' },
      { icon:'✂️', name:'Split PDF',      url:'/tools/split-pdf.html' },
      { icon:'🔁', name:'Rotate PDF',     url:'/tools/rotate-pdf.html' },
      { icon:'🔐', name:'Protect PDF',    url:'/tools/protect-pdf.html' },
      { icon:'🔓', name:'Unlock PDF',     url:'/tools/unlock-pdf.html' },
      { icon:'🏷', name:'Watermark PDF',  url:'/tools/watermark-pdf.html' },
    ]},
    { sec: 'Convert', items: [
      { icon:'📸', name:'JPG to PDF',     url:'/tools/jpg-to-pdf.html' },
      { icon:'🖼', name:'PDF to JPG',     url:'/tools/pdf-to-jpg.html' },
      { icon:'📝', name:'Word to PDF',    url:'/tools/word-to-pdf.html' },
      { icon:'📄', name:'PDF to Word',    url:'/tools/pdf-to-word.html' },
    ]},
    { sec: 'Image Tools', items: [
      { icon:'🗜', name:'Image Compressor', url:'/tools/image-compress.html' },
      { icon:'📐', name:'Image Resizer',    url:'/tools/image-resizer.html' },
      { icon:'🎨', name:'Image to PNG',     url:'/tools/image-to-png.html' },
    ]},
    { sec: 'Productivity', items: [
      { icon:'📱', name:'QR Code Generator',   url:'/tools/qr-code-generator.html' },
      { icon:'🔑', name:'Password Generator',  url:'/tools/password-generator.html' },
      { icon:'📊', name:'Word Counter',         url:'/tools/word-counter.html' },
      { icon:'{ }', name:'JSON Formatter',      url:'/tools/json-formatter.html' },
    ]},
    { sec: 'Business', items: [
      { icon:'🧾', name:'GST Invoice Generator', url:'/tools/invoice-generator.html' },
      { icon:'🔍', name:'SEO Meta Generator',    url:'/tools/seo-generator.html' },
    ]},
  ];

  /* ── Google Verification Meta ── */
  function injectMeta() {
    if (!document.querySelector('meta[name="google-site-verification"]')) {
      const m = document.createElement('meta');
      m.name = 'google-site-verification';
      m.content = G_VERIFY;
      document.head.appendChild(m);
    }
  }

  /* ── Dropdown HTML ── */
  function buildDropdown() {
    const cols = TOOLS.map(s => `
      <div class="ndm-section">
        <h4>${s.sec}</h4>
        ${s.items.map(t => `<a class="ndm-link" href="${t.url}"><span>${t.icon}</span><span>${t.name}</span></a>`).join('')}
      </div>`).join('');
    return `<div class="ndm-grid">${cols}</div>`;
  }

  /* ── Mobile all tools list ── */
  function buildMobileTools() {
    return TOOLS.map(s => `
      <div class="nmp-cat">${s.sec}</div>
      ${s.items.map(t => `<a class="nmp-link" href="${t.url}"><span class="ico">${t.icon}</span>${t.name}</a>`).join('')}`).join('');
  }

  /* ── NAV HTML ── */
  function buildNav() {
    return `
<nav class="nav">
  <a href="/" class="nav-logo" aria-label="ToolNest Home">
    <img src="${LOGO_IMG}" alt="ToolNest Logo" width="40" height="40">
    <span class="nav-logo-text">Tool<span>Nest</span></span>
  </a>

  <div class="nav-links" id="navDesktopLinks">
    <div class="nav-dropdown" id="navToolsDropdown">
      <button class="nav-dropdown-btn" id="navToolsBtn" aria-expanded="false" aria-haspopup="true">
        All Tools
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg>
      </button>
      <div class="nav-dropdown-menu" id="navToolsMenu" role="menu">
        ${buildDropdown()}
      </div>
    </div>
    <a href="/blog.html">Blog</a>
    <a href="/about.html">About</a>
    <a href="/contact.html">Contact</a>
  </div>

  <div class="nav-right">
    <button class="btn-dark-toggle" aria-label="Toggle dark mode">🌙</button>
    <button class="nav-hamburger" id="navHam" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="nav-mobile-panel" id="navMobilePanel" role="navigation" aria-label="Mobile menu">
  <div class="nmp-inner">
    <div class="nmp-search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" placeholder="Search tools…" id="nmpSearch" oninput="tnMobileSearch(this.value)">
    </div>
    <a class="nmp-link" href="/"><span class="ico">🏠</span>Home</a>
    <div id="nmpToolsList">${buildMobileTools()}</div>
    <div class="nmp-divider"></div>
    <a class="nmp-link" href="/blog.html"><span class="ico">📚</span>Blog</a>
    <a class="nmp-link" href="/about.html"><span class="ico">ℹ️</span>About</a>
    <a class="nmp-link" href="/contact.html"><span class="ico">📧</span>Contact</a>
  </div>
</div>`;
  }

  /* ── FOOTER HTML ── */
  function buildFooter() {
    const year = new Date().getFullYear();
    return `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <div class="footer-logo">
          <img src="${LOGO_IMG}" alt="ToolNest" width="38" height="38">
          Tool<span>Nest</span>
        </div>
        <p class="footer-desc">Professional free online tools for PDF, images &amp; business. No signup, no fees, no watermarks. Made with ❤️ in India.</p>
        <div class="footer-badge">🇮🇳 Made for India · Free Forever</div>
      </div>
      <div class="footer-col">
        <h4>PDF Tools</h4>
        <a href="/tools/compress-pdf.html">Compress PDF</a>
        <a href="/tools/merge-pdf.html">Merge PDF</a>
        <a href="/tools/split-pdf.html">Split PDF</a>
        <a href="/tools/rotate-pdf.html">Rotate PDF</a>
        <a href="/tools/protect-pdf.html">Protect PDF</a>
        <a href="/tools/watermark-pdf.html">Watermark PDF</a>
      </div>
      <div class="footer-col">
        <h4>Convert &amp; Image</h4>
        <a href="/tools/jpg-to-pdf.html">JPG to PDF</a>
        <a href="/tools/pdf-to-jpg.html">PDF to JPG</a>
        <a href="/tools/word-to-pdf.html">Word to PDF</a>
        <a href="/tools/image-compress.html">Image Compressor</a>
        <a href="/tools/image-resizer.html">Image Resizer</a>
        <a href="/tools/image-to-png.html">Image to PNG</a>
      </div>
      <div class="footer-col">
        <h4>More Tools</h4>
        <a href="/tools/qr-code-generator.html">QR Code Generator</a>
        <a href="/tools/password-generator.html">Password Generator</a>
        <a href="/tools/word-counter.html">Word Counter</a>
        <a href="/tools/invoice-generator.html">GST Invoice</a>
        <a href="/tools/json-formatter.html">JSON Formatter</a>
        <a href="/tools/seo-generator.html">SEO Meta Tags</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-left">
        © ${year} ToolNest by <a href="https://bhaihelp.in">BhaiHelp.in</a>
        <a href="/privacy-policy.html">Privacy</a>
        <a href="/terms.html">Terms</a>
        <a href="/disclaimer.html">Disclaimer</a>
      </div>
      <div class="footer-bottom-right">
        <a href="/sitemap.xml">Sitemap</a>
        <a href="/contact.html">Contact</a>
        <a href="/blog.html">Blog</a>
      </div>
    </div>
  </div>
</footer>`;
  }

  /* ── INJECT ── */
  function inject() {
    injectMeta();

    const navEl = document.getElementById('tn-nav');
    if (navEl) navEl.outerHTML = buildNav();

    const footEl = document.getElementById('tn-footer');
    if (footEl) footEl.outerHTML = buildFooter();

    // Active nav link
    const path = window.location.pathname;
    document.querySelectorAll('.nav-links a, .nmp-link').forEach(a => {
      if (a.getAttribute('href') === path) {
        a.style.color = 'var(--gold)';
        a.style.fontWeight = '700';
      }
    });

    // Bind events after injection
    bindEvents();
  }

  /* ── EVENTS ── */
  function bindEvents() {
    // Desktop dropdown
    const toolsBtn = document.getElementById('navToolsBtn');
    const toolsMenu = document.getElementById('navToolsMenu');
    const toolsDD = document.getElementById('navToolsDropdown');

    if (toolsBtn && toolsMenu) {
      toolsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const open = toolsDD.classList.toggle('open');
        toolsBtn.setAttribute('aria-expanded', open);
      });
    }

    // Close dropdown on outside click
    document.addEventListener('click', function(e) {
      if (toolsDD && !toolsDD.contains(e.target)) {
        toolsDD.classList.remove('open');
        if (toolsBtn) toolsBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Hamburger
    const ham = document.getElementById('navHam');
    const panel = document.getElementById('navMobilePanel');
    if (ham && panel) {
      ham.addEventListener('click', function() {
        const open = ham.classList.toggle('open');
        panel.classList.toggle('open', open);
        ham.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
    }

    // Close mobile menu on link click
    if (panel) {
      panel.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          ham.classList.remove('open');
          panel.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    // Close on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (toolsDD) toolsDD.classList.remove('open');
        if (ham) { ham.classList.remove('open'); panel.classList.remove('open'); document.body.style.overflow = ''; }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})(); /* end IIFE */

/* Mobile tool search */
function tnMobileSearch(q) {
  const sq = q.toLowerCase();
  const list = document.getElementById('nmpToolsList');
  if (!list) return;
  if (!sq) {
    // Rebuild full list
    list.innerHTML = [
      {sec:'PDF Tools',items:[{icon:'📦',name:'Compress PDF',url:'/tools/compress-pdf.html'},{icon:'📎',name:'Merge PDF',url:'/tools/merge-pdf.html'},{icon:'✂️',name:'Split PDF',url:'/tools/split-pdf.html'},{icon:'🔁',name:'Rotate PDF',url:'/tools/rotate-pdf.html'},{icon:'🔐',name:'Protect PDF',url:'/tools/protect-pdf.html'},{icon:'🔓',name:'Unlock PDF',url:'/tools/unlock-pdf.html'},{icon:'🏷',name:'Watermark PDF',url:'/tools/watermark-pdf.html'}]},
      {sec:'Convert',items:[{icon:'📸',name:'JPG to PDF',url:'/tools/jpg-to-pdf.html'},{icon:'🖼',name:'PDF to JPG',url:'/tools/pdf-to-jpg.html'},{icon:'📝',name:'Word to PDF',url:'/tools/word-to-pdf.html'},{icon:'📄',name:'PDF to Word',url:'/tools/pdf-to-word.html'}]},
      {sec:'Image Tools',items:[{icon:'🗜',name:'Image Compressor',url:'/tools/image-compress.html'},{icon:'📐',name:'Image Resizer',url:'/tools/image-resizer.html'},{icon:'🎨',name:'Image to PNG',url:'/tools/image-to-png.html'}]},
      {sec:'Productivity',items:[{icon:'📱',name:'QR Code Generator',url:'/tools/qr-code-generator.html'},{icon:'🔑',name:'Password Generator',url:'/tools/password-generator.html'},{icon:'📊',name:'Word Counter',url:'/tools/word-counter.html'},{icon:'{ }',name:'JSON Formatter',url:'/tools/json-formatter.html'}]},
      {sec:'Business',items:[{icon:'🧾',name:'GST Invoice Generator',url:'/tools/invoice-generator.html'},{icon:'🔍',name:'SEO Meta Generator',url:'/tools/seo-generator.html'}]},
    ].map(s=>`<div class="nmp-cat">${s.sec}</div>${s.items.map(t=>`<a class="nmp-link" href="${t.url}"><span class="ico">${t.icon}</span>${t.name}</a>`).join('')}`).join('');
    return;
  }
  const allTools = [
    {icon:'📦',name:'Compress PDF',url:'/tools/compress-pdf.html'},{icon:'📎',name:'Merge PDF',url:'/tools/merge-pdf.html'},{icon:'✂️',name:'Split PDF',url:'/tools/split-pdf.html'},{icon:'🔁',name:'Rotate PDF',url:'/tools/rotate-pdf.html'},{icon:'🔐',name:'Protect PDF',url:'/tools/protect-pdf.html'},{icon:'🔓',name:'Unlock PDF',url:'/tools/unlock-pdf.html'},{icon:'🏷',name:'Watermark PDF',url:'/tools/watermark-pdf.html'},{icon:'📸',name:'JPG to PDF',url:'/tools/jpg-to-pdf.html'},{icon:'🖼',name:'PDF to JPG',url:'/tools/pdf-to-jpg.html'},{icon:'📝',name:'Word to PDF',url:'/tools/word-to-pdf.html'},{icon:'📄',name:'PDF to Word',url:'/tools/pdf-to-word.html'},{icon:'🗜',name:'Image Compressor',url:'/tools/image-compress.html'},{icon:'📐',name:'Image Resizer',url:'/tools/image-resizer.html'},{icon:'🎨',name:'Image to PNG',url:'/tools/image-to-png.html'},{icon:'📱',name:'QR Code Generator',url:'/tools/qr-code-generator.html'},{icon:'🔑',name:'Password Generator',url:'/tools/password-generator.html'},{icon:'📊',name:'Word Counter',url:'/tools/word-counter.html'},{icon:'{ }',name:'JSON Formatter',url:'/tools/json-formatter.html'},{icon:'🧾',name:'GST Invoice Generator',url:'/tools/invoice-generator.html'},{icon:'🔍',name:'SEO Meta Generator',url:'/tools/seo-generator.html'},
  ];
  const filtered = allTools.filter(t => t.name.toLowerCase().includes(sq));
  list.innerHTML = filtered.length
    ? filtered.map(t=>`<a class="nmp-link" href="${t.url}"><span class="ico">${t.icon}</span>${t.name}</a>`).join('')
    : '<div style="padding:1rem;font-size:13px;color:var(--ink3);text-align:center">No tools found</div>';
}
