/* ═══════════════════════════════════════════════════════════════
   TOOLNEST — nav-footer.js v7.2
   Single source of truth. Ek baar edit karo, sab pages update.

   NAYA TOOL ADD KARNA: Sirf TN.tools array mein ek entry add karo.

   v7.1 FIXES:
   ✅ FIX 1 — GA4: window.dataLayer scope bug fix (was breaking strict mode pages)
   ✅ FIX 2 — GA4: Duplicate page_view events removed (send_page_view conflict)
   ✅ FIX 3 — GA4: Earlier loading — script inject ASAP (not wait for DOMContentLoaded)
   ✅ FIX 4 — New tools added: Website Analytics, SEO Analyzer
   ✅ FIX 5 — metaTitle/metaDesc added to all tool entries (_injectMeta now works)
   ✅ FIX 6 — Footer: /tools/ "All Tools" link added
   ✅ FIX 7 — Footer: Pricing link removed (not live yet)
   ✅ FIX 8 — Footer: Contact email added
   ✅ FIX 9 — GA4: Debug instructions added in comments
   ✅ FIX 10 — _nmpSearch() flicker fixed (no full reinit on each keypress)
   ✅ v7.2 — WhatsApp Channel + Twitter @ToolNestIn footer mein add
   ═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════
   ★ GA4 CONFIG — Measurement ID (analytics.google.com)
   ═══════════════════════════════════════════════════════ */
const TN_GA_ID = 'G-Y6W96XKXDR'; // ✅ Verified correct ID

/* ══════════════════════════════════════════════════════════
   FIX 3: GA4 inject IMMEDIATELY (before DOMContentLoaded)
   Isse page view pehle capture hoga — earlier the better
   ══════════════════════════════════════════════════════════ */
(function _ga4EarlyLoad() {
  if (!TN_GA_ID || TN_GA_ID === 'G-XXXXXXXXXX') return;
  /* FIX 1: window.dataLayer — strict mode safe */
  window.dataLayer = window.dataLayer || [];
  /* FIX 1: window.dataLayer.push instead of dataLayer.push */
  window.gtag = function() { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  /* FIX 2: send_page_view:false — manual tracking se duplicate avoid */
  gtag('config', TN_GA_ID, { send_page_view: false });
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + TN_GA_ID;
  /* Insert as first script for fastest load */
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript) firstScript.parentNode.insertBefore(s, firstScript);
  else document.head.appendChild(s);
})();

const TN = {

  /* ═══════════════════════════════════════════════════════════
     TOOLS DATA
     FIX 4: Website Analytics + SEO Analyzer added
     FIX 5: metaTitle + metaDesc added to all entries
     ═══════════════════════════════════════════════════════════ */
  tools: [
    // ── IMAGE TOOLS ──
    {
      cat:'Image Tools', catClass:'cat-image', icon:'🗜', badge:'HOT',
      name:'Image Compressor', url:'/tools/image-compress.html',
      metaTitle:'Image Compressor Free Online — Compress JPG PNG | ToolNest',
      metaDesc:'JPG aur PNG images compress karein quality maintain karte hue. 100% free, browser-based. No upload needed.',
    },
    {
      cat:'Image Tools', catClass:'cat-image', icon:'📐', badge:'NEW',
      name:'Image Resizer', url:'/tools/image-resizer.html',
      metaTitle:'Image Resizer Free Online — Pixels ya Percentage | ToolNest',
      metaDesc:'Images resize karein pixels ya percentage mein. Instant, free, browser-based. No signup needed.',
    },
    {
      cat:'Image Tools', catClass:'cat-image', icon:'🎨', badge:null,
      name:'Image to PNG', url:'/tools/image-to-png.html',
      metaTitle:'Image to PNG Converter Free | ToolNest',
      metaDesc:'JPG, WebP ya koi bhi image ko PNG mein convert karein. Free, instant, browser-based.',
    },
    {
      cat:'Image Tools', catClass:'cat-image', icon:'✂️', badge:'NEW',
      name:'Background Remover', url:'/tools/bg-remover.html',
      metaTitle:'Background Remover Free Online | ToolNest India',
      metaDesc:'Image ka background remove karein instantly. Free, AI-powered, browser-based. No signup.',
    },

    // ── COMPRESS ──
    {
      cat:'Compress', catClass:'cat-compress', icon:'📦', badge:'HOT',
      name:'Compress PDF', url:'/tools/compress-pdf.html',
      metaTitle:'Compress PDF Free Online — File Size Reduce Karein | ToolNest',
      metaDesc:'PDF compress karein bina quality khoe. Free, browser-based, no server upload. Made for India.',
    },

    // ── ORGANIZE PDF ──
    {
      cat:'Organize PDF', catClass:'cat-organize', icon:'📎', badge:'HOT',
      name:'Merge PDF', url:'/tools/merge-pdf.html',
      metaTitle:'Merge PDF Free Online — Multiple PDFs Combine Karein | ToolNest',
      metaDesc:'Multiple PDF files ek mein merge karein. Drag & drop order. Free, instant, no signup.',
    },
    {
      cat:'Organize PDF', catClass:'cat-organize', icon:'✂️', badge:null,
      name:'Split PDF', url:'/tools/split-pdf.html',
      metaTitle:'Split PDF Free Online — Pages Alag Karein | ToolNest',
      metaDesc:'PDF split karein — specific pages ya range select karein. Free, browser-based.',
    },
    {
      cat:'Organize PDF', catClass:'cat-organize', icon:'🔁', badge:null,
      name:'Rotate PDF', url:'/tools/rotate-pdf.html',
      metaTitle:'Rotate PDF Free Online — 90° 180° 270° Rotate | ToolNest',
      metaDesc:'PDF pages rotate karein — 90, 180 ya 270 degree. Free, instant, no signup needed.',
    },

    // ── EDIT & SECURE ──
    {
      cat:'Edit & Secure', catClass:'cat-edit', icon:'🔐', badge:null,
      name:'Protect PDF', url:'/tools/protect-pdf.html',
      metaTitle:'Protect PDF with Password Free | ToolNest',
      metaDesc:'PDF password se protect karein. Secure, browser-based, no server upload. Free forever.',
    },
    {
      cat:'Edit & Secure', catClass:'cat-edit', icon:'🔓', badge:null,
      name:'Unlock PDF', url:'/tools/unlock-pdf.html',
      metaTitle:'Unlock PDF Free Online — Password Remove Karein | ToolNest',
      metaDesc:'Password-protected PDF unlock karein. Free, browser-based, instant.',
    },
    {
      cat:'Edit & Secure', catClass:'cat-edit', icon:'🏷', badge:'NEW',
      name:'Watermark PDF', url:'/tools/watermark-pdf.html',
      metaTitle:'Watermark PDF Free Online — Text & Image Watermark | ToolNest',
      metaDesc:'PDF par text ya image watermark add karein. Custom position, opacity. Free & browser-based.',
    },

    // ── CONVERT ──
    {
      cat:'Convert', catClass:'cat-convert', icon:'📸', badge:'HOT',
      name:'JPG to PDF', url:'/tools/jpg-to-pdf.html',
      metaTitle:'JPG to PDF Free Online — Images to PDF Converter | ToolNest',
      metaDesc:'JPG images ko PDF mein convert karein. Multiple images ek PDF mein. Free, instant.',
    },
    {
      cat:'Convert', catClass:'cat-convert', icon:'🖼', badge:null,
      name:'PDF to JPG', url:'/tools/pdf-to-jpg.html',
      metaTitle:'PDF to JPG Free Online — PDF Pages to Images | ToolNest',
      metaDesc:'PDF ke pages ko JPG images mein convert karein. High quality, free, browser-based.',
    },
    {
      cat:'Convert', catClass:'cat-convert', icon:'📝', badge:'NEW',
      name:'Word to PDF', url:'/tools/word-to-pdf.html',
      metaTitle:'Word to PDF Free Online — DOCX to PDF Converter | ToolNest',
      metaDesc:'.docx Word file ko PDF mein convert karein. Browser-based, no server upload. Free.',
    },
    {
      cat:'Convert', catClass:'cat-convert', icon:'📄', badge:'NEW',
      name:'PDF to Word', url:'/tools/pdf-to-word.html',
      metaTitle:'PDF to Word Free Online — PDF to DOCX Converter | ToolNest',
      metaDesc:'PDF ko Word document mein convert karein. Editable DOCX. Free, browser-based.',
    },

    // ── PRODUCTIVITY ──
    {
      cat:'Productivity', catClass:'cat-prod', icon:'📱', badge:'HOT',
      name:'QR Code Generator', url:'/tools/qr-code-generator.html',
      metaTitle:'QR Code Generator Free Online — UPI, URL, Text | ToolNest',
      metaDesc:'QR code banao URL, UPI, text ke liye. Custom design, download PNG. Free, instant.',
    },
    {
      cat:'Productivity', catClass:'cat-prod', icon:'🔑', badge:null,
      name:'Password Generator', url:'/tools/password-generator.html',
      metaTitle:'Password Generator Free Online — Strong Passwords | ToolNest',
      metaDesc:'Strong random passwords generate karein. Length aur complexity choose karo. Free.',
    },
    {
      cat:'Productivity', catClass:'cat-prod', icon:'📊', badge:null,
      name:'Word Counter', url:'/tools/word-counter.html',
      metaTitle:'Word Counter Free Online — Words, Characters, Reading Time | ToolNest',
      metaDesc:'Words, characters, sentences aur reading time count karein. Instant, free.',
    },
    {
      cat:'Productivity', catClass:'cat-prod', icon:'{ }', badge:null,
      name:'JSON Formatter', url:'/tools/json-formatter.html',
      metaTitle:'JSON Formatter & Validator Free Online | ToolNest',
      metaDesc:'JSON beautify, minify aur validate karein. Error highlighting. Free, browser-based.',
    },
    {
      cat:'Productivity', catClass:'cat-prod', icon:'🔢', badge:'NEW',
      name:'Base64 Encoder', url:'/tools/base64-encoder.html',
      metaTitle:'Base64 Encoder Decoder Free Online | ToolNest',
      metaDesc:'Text ya files ko Base64 encode/decode karein. Instant, free, browser-based.',
    },

    // ── BUSINESS ──
    {
      cat:'Business', catClass:'cat-biz', icon:'🧾', badge:'HOT',
      name:'GST Invoice Generator', url:'/tools/invoice-generator.html',
      metaTitle:'GST Invoice Generator Free Online — PDF Invoice Banao | ToolNest',
      metaDesc:'Professional GST invoice banao minutes mein. PDF download karo. Free, no signup. Made for India.',
    },
    {
      cat:'Business', catClass:'cat-biz', icon:'🔍', badge:null,
      name:'SEO Meta Generator', url:'/tools/seo-generator.html',
      metaTitle:'SEO Meta Generator Free — Title & Description | ToolNest',
      metaDesc:'Page ka SEO meta title aur description generate karein. Character count, preview. Free.',
    },
    /* FIX 4: NEW TOOLS ADDED */
    {
      cat:'Business', catClass:'cat-biz', icon:'📊', badge:'NEW',
      name:'Website Analytics', url:'/tools/website-analytics.html',
      metaTitle:'Website Analytics Dashboard Free — Charts & AI Insights | ToolNest',
      metaDesc:'Apni website ka analytics data enter karo — beautiful charts, KPIs aur AI insights instantly. Free.',
    },
    {
      cat:'Business', catClass:'cat-biz', icon:'📈', badge:'NEW',
      name:'SEO Analyzer', url:'/tools/seo-analyzer.html',
      metaTitle:'SEO Analyzer Free — Page SEO Score Check Karein | ToolNest',
      metaDesc:'Page ka SEO score analyze karein — Flesch-Kincaid, keyword density, meta checks. 0-100 score. Free.',
    },

    // ── CALCULATORS ──
    {
      cat:'Calculators', catClass:'cat-calc', icon:'💳', badge:'HOT',
      name:'EMI Calculator', url:'/tools/emi-calculator.html',
      metaTitle:'EMI Calculator Free Online — Monthly EMI Calculate Karein | ToolNest',
      metaDesc:'Loan ki monthly EMI, total interest aur payment schedule calculate karein. Free, made for India.',
    },
    {
      cat:'Calculators', catClass:'cat-calc', icon:'🎂', badge:null,
      name:'Age Calculator', url:'/tools/age-calculator.html',
      metaTitle:'Age Calculator Free Online — Exact Age Years Months Days | ToolNest',
      metaDesc:'Date of birth se exact age calculate karein — years, months, days, hours mein. Free.',
    },
    {
      cat:'Calculators', catClass:'cat-calc', icon:'%', badge:null,
      name:'Percentage Calculator', url:'/tools/percentage-calculator.html',
      metaTitle:'Percentage Calculator Free Online | ToolNest India',
      metaDesc:'Percentage, increase/decrease, X of Y calculate karein. Instant, free, browser-based.',
    },
    {
      cat:'Calculators', catClass:'cat-calc', icon:'📈', badge:'NEW',
      name:'SIP Calculator', url:'/tools/sip-calculator.html',
      metaTitle:'SIP Calculator Free Online — Mutual Fund Returns | ToolNest',
      metaDesc:'SIP returns aur wealth projection calculate karein. Charts, inflation-adjusted returns. Free.',
    },
  ],

  popular: [
    { name:'Compress PDF',          url:'/tools/compress-pdf.html',         dot:'var(--c-compress,#F5620A)' },
    { name:'Merge PDF',             url:'/tools/merge-pdf.html',            dot:'var(--c-organize,#00B37E)' },
    { name:'Image Compressor',      url:'/tools/image-compress.html',       dot:'var(--c-image,#E91E8C)'    },
    { name:'QR Code Generator',     url:'/tools/qr-code-generator.html',    dot:'var(--c-prod,#E88B00)'     },
    { name:'GST Invoice Generator', url:'/tools/invoice-generator.html',    dot:'var(--c-biz,#0891B2)'      },
    { name:'JPG to PDF',            url:'/tools/jpg-to-pdf.html',           dot:'var(--c-convert,#1E4FCB)'  },
    { name:'SEO Analyzer',          url:'/tools/seo-analyzer.html',         dot:'var(--c-biz,#0891B2)'      },
  ],

  /* ══════════════════
     NAV INJECT
     ══════════════════ */
  injectNav() {
    const el  = document.getElementById('tn-nav');
    const cur = location.pathname;
    const isTools = cur.startsWith('/tools');
    const isBlog  = cur.startsWith('/blog');
    const isAbout = cur.startsWith('/about');
    const isHome  = cur === '/' || cur === '/index.html';

    const cats = {};
    TN.tools.forEach(t => { if (!cats[t.cat]) cats[t.cat] = []; cats[t.cat].push(t); });
    const megaCols = Object.entries(cats).map(([cat, items]) => `
      <div class="ndm-section">
        <div class="ndm-cat-label">${cat}</div>
        ${items.map(t => `<a class="ndm-link" href="${t.url}">
          <span class="ndm-ico">${t.icon}</span><span>${t.name}</span>
          ${t.badge ? `<span class="ndm-badge badge-${t.badge.toLowerCase()}">${t.badge}</span>` : ''}
        </a>`).join('')}
      </div>`).join('');

    if (!el) return;
    el.innerHTML = `
<nav class="nav" id="mainNav">
  <a class="nav-logo" href="/">
    <img src="/favicon.png" alt="ToolNest" width="40" height="40"
      style="border-radius:10px;object-fit:cover;box-shadow:0 2px 8px rgba(245,166,35,.4)"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div style="display:none;width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#F5A623,#FF9500);align-items:center;justify-content:center;font-size:18px;font-weight:900;color:#0F1B3D;flex-shrink:0">TN</div>
    <span class="nav-logo-text">Tool<span>Nest</span></span>
  </a>
  <div class="nav-search">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input type="text" id="navSearch" placeholder="Search ${TN.tools.length}+ free tools…" oninput="TN.syncSearch(this.value)" autocomplete="off">
  </div>
  <div class="nav-right">
    <a href="/" class="nav-link${isHome ? ' active' : ''}">Home</a>
    <div class="nav-dd-wrap" id="navDDWrap">
      <button class="nav-dd-btn${isTools ? ' active' : ''}" id="navDDBtn" onclick="TN.toggleToolsDD()" aria-expanded="false">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        All Tools
        <svg class="nav-dd-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-dd-menu" id="navDDMenu" role="menu">
        <div class="ndm-grid">${megaCols}</div>
        <div class="ndm-footer"><a href="/tools/">⚡ View All ${TN.tools.length}+ Tools →</a></div>
      </div>
    </div>
    <a href="/blog.html" class="nav-link${isBlog ? ' active' : ''}">Blog</a>
    <a href="/about.html" class="nav-link${isAbout ? ' active' : ''}">About</a>
    <button class="nav-hamburger" id="navHamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile-panel" id="mobilePanel" aria-hidden="true">
  <div class="nmp-inner">
    <div class="nmp-search">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" id="nmpInput" placeholder="Search ${TN.tools.length}+ tools…" oninput="TN._nmpSearch(this.value)" autocomplete="off">
    </div>
    <a class="nmp-link" href="/"><span class="nmp-ico">🏠</span> Home</a>
    <a class="nmp-link" href="/tools/"><span class="nmp-ico">🔧</span> All Tools</a>
    <a class="nmp-link" href="/blog.html"><span class="nmp-ico">📚</span> Blog</a>
    <a class="nmp-link" href="/about.html"><span class="nmp-ico">ℹ️</span> About</a>
    <div class="nmp-divider"></div>
    <div id="nmpTools"></div>
  </div>
</div>`;

    if (isTools) {
      document.getElementById('navHamburger')?.addEventListener('click', () => TN.toggleMobileSidebar());
      if (!document.getElementById('sidebarToggle')) {
        const st = document.createElement('button');
        st.id = 'sidebarToggle';
        st.className = 'sidebar-toggle';
        st.title = 'Toggle sidebar';
        st.setAttribute('onclick', 'TN.toggleDesktopSidebar()');
        st.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>';
        el.parentNode.insertBefore(st, el.nextSibling);
      }
    } else {
      TN._initMobilePanel();
    }

    document.addEventListener('click', e => {
      const w = document.getElementById('navDDWrap');
      if (w && !w.contains(e.target)) TN.closeToolsDD();
    });

    /* FIX 2: Send page_view manually (send_page_view:false set above) */
    TN.track('page_view', {
      page_title:    document.title,
      page_location: location.href,
      page_path:     location.pathname
    });
  },

  /* ════════════
     SIDEBAR
     ════════════ */
  injectSidebar() {
    const el = document.getElementById('tn-sidebar-list') || document.getElementById('sbList');
    if (!el) return;
    const cur = location.pathname;
    let lastCat = '', html = '';
    TN.tools.forEach(t => {
      if (t.cat !== lastCat) { html += `<div class="cat-lbl">${t.cat}</div>`; lastCat = t.cat; }
      const active = (cur.endsWith(t.url) || cur.includes(t.url.replace('/tools/', ''))) ? ' active' : '';
      const badge  = t.badge ? `<span class="ti-badge badge-${t.badge.toLowerCase()}">${t.badge}</span>` : '';
      html += `<div class="tool-item ${t.catClass}${active}" onclick="location.href='${t.url}'" tabindex="0">
        <div class="ti-icon">${t.icon}</div><span class="ti-name">${t.name}</span>${badge}</div>`;
    });
    el.innerHTML = html;
    TN._buildPopular();
  },

  _buildPopular() {
    const el = document.getElementById('tn-popular');
    if (!el) return;
    el.innerHTML = TN.popular.map(p => `<div class="rsb-quick-item" onclick="location.href='${p.url}'">
      <span class="rsb-quick-dot" style="background:${p.dot}"></span>${p.name}</div>`).join('');
  },

  /* ══════════
     FOOTER
     FIX 6: /tools/ link added
     FIX 7: Pricing link removed
     FIX 8: Email contact added
     ══════════ */
  injectFooter() {
    let el = document.getElementById('tn-footer');
    if (!el) {
      el = document.createElement('div');
      el.id = 'tn-footer';
      const shell = document.querySelector('.app-shell');
      if (shell?.parentNode) shell.parentNode.insertBefore(el, shell.nextSibling);
      else document.body.appendChild(el);
    }
    el.innerHTML = `
<style id="tn-fc">
.tn-foot{background:#0F1B3D;padding:3rem 1.5rem 0;font-family:'Plus Jakarta Sans',sans-serif}
.tn-fi{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:240px 1fr;gap:3rem;padding-bottom:2.5rem}
.tn-fl{display:flex;align-items:center;gap:10px;font-family:'Outfit',sans-serif;font-weight:800;font-size:19px;color:#fff;text-decoration:none;margin-bottom:.5rem}
.tn-fl img{width:34px;height:34px;border-radius:9px;object-fit:cover;flex-shrink:0}
.tn-fl span{color:#F5A623}
.tn-ft{font-size:12.5px;color:rgba(255,255,255,.4);line-height:1.7;margin:.3rem 0 .9rem}
.tn-fb{display:inline-flex;align-items:center;gap:6px;background:rgba(245,166,35,.1);border:1px solid rgba(245,166,35,.22);border-radius:999px;padding:4px 12px;font-size:11.5px;font-weight:600;color:#F5A623;margin-bottom:.5rem}
.tn-femail{display:block;font-size:12px;color:rgba(255,255,255,.35);margin-top:.4rem;text-decoration:none;transition:color .15s}
.tn-femail:hover{color:#F5A623}
.tn-social{display:flex;gap:8px;margin-top:.85rem;flex-wrap:wrap}
.tn-social-btn{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:999px;font-size:11.5px;font-weight:700;text-decoration:none;transition:all .15s;border:1px solid rgba(255,255,255,.15)}
.tn-social-btn:hover{transform:translateY(-1px);opacity:.9}
.tn-social-wa{background:#25D366;color:#fff}
.tn-social-x{background:rgba(255,255,255,.1);color:rgba(255,255,255,.8)}
.tn-fc2{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
.tn-fct{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.9px;color:rgba(255,255,255,.28);margin-bottom:.85rem}
.tn-fc2 a{display:block;font-size:12.5px;color:rgba(255,255,255,.45);margin-bottom:.4rem;text-decoration:none;transition:color .15s}
.tn-fc2 a:hover{color:#F5A623}
.tn-fbot{max-width:1180px;margin:0 auto;border-top:1px solid rgba(255,255,255,.07);padding:1.1rem 0 1.4rem;display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:rgba(255,255,255,.28);flex-wrap:wrap;gap:.5rem}
@media(max-width:1024px){.tn-foot{padding-right:1.5rem!important}}
@media(max-width:900px){.tn-fi{grid-template-columns:1fr;gap:1.75rem}.tn-fc2{grid-template-columns:1fr 1fr}}
@media(max-width:500px){.tn-fc2{grid-template-columns:1fr}}
</style>
<footer class="tn-foot">
  <div class="tn-fi">
    <div>
      <a class="tn-fl" href="/"><img src="/favicon.png" onerror="this.style.display='none'">Tool<span>Nest</span></a>
      <p class="tn-ft">Free PDF &amp; online tools for India.<br>Fast, private &amp; 100% browser-based.</p>
      <div class="tn-fb">🔒 Files never leave your device</div>
      <a class="tn-femail" href="mailto:toolnest.bhaihelp.in@gmail.com">✉️ toolnest.bhaihelp.in@gmail.com</a>
      <!-- WhatsApp Channel + Social -->
      <div class="tn-social">
        <a class="tn-social-btn tn-social-wa" href="https://whatsapp.com/channel/0029Vb7nko7L7UVVfGjQWo0j" target="_blank" rel="noopener">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        <a class="tn-social-btn tn-social-x" href="https://twitter.com/ToolNestIn" target="_blank" rel="noopener">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          @ToolNestIn
        </a>
      </div>
    </div>
    <div class="tn-fc2">
      <div>
        <div class="tn-fct">PDF Tools</div>
        <a href="/tools/merge-pdf.html">Merge PDF</a>
        <a href="/tools/compress-pdf.html">Compress PDF</a>
        <a href="/tools/split-pdf.html">Split PDF</a>
        <a href="/tools/protect-pdf.html">Protect PDF</a>
        <a href="/tools/watermark-pdf.html">Watermark PDF</a>
      </div>
      <div>
        <div class="tn-fct">Convert</div>
        <a href="/tools/jpg-to-pdf.html">JPG to PDF</a>
        <a href="/tools/pdf-to-jpg.html">PDF to JPG</a>
        <a href="/tools/word-to-pdf.html">Word to PDF</a>
        <a href="/tools/pdf-to-word.html">PDF to Word</a>
        <!-- FIX 6: All Tools link added -->
        <a href="/tools/" style="color:rgba(245,166,35,.7);font-weight:600">⚡ All ${TN.tools.length}+ Tools →</a>
      </div>
      <div>
        <div class="tn-fct">Calculators &amp; More</div>
        <a href="/tools/emi-calculator.html">EMI Calculator</a>
        <a href="/tools/sip-calculator.html">SIP Calculator</a>
        <a href="/tools/age-calculator.html">Age Calculator</a>
        <a href="/tools/percentage-calculator.html">Percentage Calc</a>
        <a href="/tools/invoice-generator.html">GST Invoice</a>
      </div>
      <div>
        <!-- FIX 7: Pricing removed, Company links updated -->
        <div class="tn-fct">Company</div>
        <a href="/blog.html">Blog</a>
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms of Use</a>
      </div>
    </div>
  </div>
  <div class="tn-fbot">
    <span>© ${new Date().getFullYear()} ToolNest · Made with ❤️ for India 🇮🇳</span>
    <span>All ${TN.tools.length}+ tools are free, forever.</span>
  </div>
</footer>`;
  },

  /* ═══════════
     NAV CSS
     ═══════════ */
  _injectNavCSS() {
    if (document.getElementById('tn-nav-css')) return;
    const s = document.createElement('style');
    s.id = 'tn-nav-css';
    s.textContent = `
.nav-logo-text{font-family:'Outfit',sans-serif;font-weight:800;font-size:20px;color:var(--ink,#0D0D14)}
.nav-logo-text span{color:var(--gold,#F5A623)}
.nav-link{padding:7px 12px;border-radius:8px;font-size:13.5px;font-weight:500;color:var(--ink2,#44455A);transition:all .15s;white-space:nowrap;text-decoration:none;display:inline-flex;align-items:center;gap:5px}
.nav-link:hover,.nav-link.active{background:var(--surface,#EDEEF7);color:var(--ink,#0D0D14)}
.nav-link.active{color:var(--gold-d,#D4891A);font-weight:700}
.nav-dd-wrap{position:relative}
.nav-dd-btn{display:flex;align-items:center;gap:6px;padding:7px 12px;border-radius:8px;font-size:13.5px;font-weight:500;color:var(--ink2,#44455A);background:transparent;border:none;cursor:pointer;font-family:inherit;transition:all .15s;white-space:nowrap}
.nav-dd-btn:hover,.nav-dd-btn.active{background:var(--surface,#EDEEF7);color:var(--ink,#0D0D14)}
.nav-dd-btn.active{color:var(--gold-d,#D4891A);font-weight:700}
.nav-dd-caret{transition:transform .2s;flex-shrink:0}
.nav-dd-wrap.open .nav-dd-caret{transform:rotate(180deg)}
.nav-dd-menu{position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%);background:var(--white,#fff);border:1.5px solid var(--border,#E2E4EF);border-radius:18px;box-shadow:0 8px 32px rgba(13,13,20,.13);padding:.75rem;display:none;z-index:3000;min-width:860px;max-width:96vw}
.nav-dd-wrap.open .nav-dd-menu{display:block}
.ndm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.25rem}
.ndm-cat-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:var(--ink3,#8A8BA5);padding:.5rem .5rem .3rem;border-bottom:1px solid var(--border,#E2E4EF);margin-bottom:.25rem}
.ndm-link{display:flex;align-items:center;gap:6px;padding:5px 7px;border-radius:8px;font-size:12px;font-weight:600;color:var(--ink2,#44455A);text-decoration:none;transition:all .15s;white-space:nowrap}
.ndm-link:hover{background:var(--gold-l,#FEF3DC);color:var(--gold-d,#D4891A)}
.ndm-ico{font-size:13px;flex-shrink:0}
.ndm-badge{font-size:7.5px;font-weight:800;padding:1px 5px;border-radius:999px;text-transform:uppercase;flex-shrink:0}
.ndm-badge.badge-hot{background:#FFE8D6;color:#B85000}
.ndm-badge.badge-new{background:#D3F9D8;color:#00612A}
.ndm-footer{border-top:1px solid var(--border,#E2E4EF);margin-top:.6rem;padding-top:.6rem;text-align:center}
.ndm-footer a{font-size:13px;font-weight:600;color:var(--gold-d,#D4891A);text-decoration:none}
.ndm-footer a:hover{color:var(--gold,#F5A623)}
.btn-nav-back{display:flex;align-items:center;gap:6px;padding:8px 16px;border-radius:999px;font-size:13.5px;font-weight:700;color:var(--ink2,#44455A);background:var(--surface,#EDEEF7);border:1.5px solid var(--border,#E2E4EF);cursor:pointer;transition:all .15s;white-space:nowrap;font-family:inherit}
.btn-nav-back:hover{background:var(--navy-l,#E8ECF5);color:var(--navy,#0F1B3D);border-color:var(--navy,#0F1B3D)}
.nav-hamburger{display:none;width:36px;height:36px;border-radius:8px;background:var(--surface,#EDEEF7);border:1.5px solid var(--border,#E2E4EF);flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;flex-shrink:0}
.nav-hamburger span{display:block;width:17px;height:1.5px;background:var(--ink,#0D0D14);border-radius:2px;transition:all .25s}
.nav-hamburger.open span:nth-child(1){transform:rotate(45deg) translate(4px,4px)}
.nav-hamburger.open span:nth-child(2){opacity:0}
.nav-hamburger.open span:nth-child(3){transform:rotate(-45deg) translate(4px,-4px)}
.nav-mobile-panel{position:fixed;top:var(--nav-h,64px);left:0;right:0;background:var(--white,#fff);border-bottom:1px solid var(--border,#E2E4EF);box-shadow:0 8px 32px rgba(13,13,20,.13);z-index:900;padding:1rem 1.25rem 1.5rem;display:none;flex-direction:column;gap:4px;max-height:calc(100vh - 64px);overflow-y:auto}
.nav-mobile-panel.open{display:flex}
.nmp-search{display:flex;align-items:center;gap:8px;background:var(--surface,#EDEEF7);border:1.5px solid var(--border,#E2E4EF);border-radius:999px;padding:0 14px;height:38px;margin-bottom:.75rem}
.nmp-search svg{color:#8A8BA5;flex-shrink:0}
.nmp-search input{flex:1;border:none;background:transparent;outline:none;font-size:13px;color:var(--ink,#0D0D14)}
.nmp-link{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;font-size:13.5px;font-weight:500;color:var(--ink2,#44455A);text-decoration:none;transition:all .15s}
.nmp-link:hover{background:var(--gold-l,#FEF3DC);color:var(--gold-d,#D4891A)}
.nmp-ico{width:24px;text-align:center;flex-shrink:0}
.nmp-divider{height:1px;background:var(--border,#E2E4EF);margin:.5rem 0}
.nmp-cat-lbl{font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--ink3,#8A8BA5);padding:.4rem .5rem;margin-top:.25rem}
.cat-calc .ti-icon{background:#D1FAE5;color:#059669}
.cat-calc:hover{background:#D1FAE5!important}
.cat-calc.active{background:#D1FAE5!important;color:#059669!important;font-weight:700}
.cat-calc.active .ti-icon{background:#059669;color:#fff}
@media(max-width:1200px){.nav-dd-menu{min-width:680px}}
@media(max-width:820px){
  .nav-hamburger{display:flex}
  .nav-search,.nav-link,.nav-dd-wrap{display:none}
  .nav-dd-menu{display:none!important}
}`;
    document.head.appendChild(s);
  },

  /* ════════════════
     SEARCH + FILTER
     ════════════════ */
  syncSearch(v) {
    const sb = document.getElementById('sbSearch');
    if (sb) sb.value = v;
    TN.filterSidebar(v);
  },
  filterSidebar(q) {
    const s = (q || '').toLowerCase().trim();
    document.querySelectorAll('#tn-sidebar-list .tool-item, #sbList .tool-item').forEach(item => {
      item.style.display = (!s || (item.querySelector('.ti-name')?.textContent.toLowerCase() || '').includes(s)) ? '' : 'none';
    });
    document.querySelectorAll('#tn-sidebar-list .cat-lbl, #sbList .cat-lbl').forEach(lbl => {
      let el = lbl.nextElementSibling, any = false;
      while (el && el.classList.contains('tool-item')) { if (el.style.display !== 'none') any = true; el = el.nextElementSibling; }
      lbl.style.display = any ? '' : 'none';
    });
  },

  /* ═══════════════════════════
     SIDEBAR TOGGLE
     ═══════════════════════════ */
  _sbCollapsed: false,
  toggleDesktopSidebar() {
    TN._sbCollapsed = !TN._sbCollapsed;
    document.getElementById('leftSidebar')?.classList.toggle('collapsed', TN._sbCollapsed);
    document.getElementById('mainContent')?.classList.toggle('sb-collapsed', TN._sbCollapsed);
    const st = document.getElementById('sidebarToggle');
    if (st) {
      st.classList.toggle('collapsed', TN._sbCollapsed);
      st.style.left = TN._sbCollapsed ? '0px'
        : getComputedStyle(document.documentElement).getPropertyValue('--sidebar-w').trim();
    }
  },
  toggleMobileSidebar() {
    const sb   = document.getElementById('leftSidebar');
    const ov   = document.getElementById('mobileOverlay');
    const hm   = document.getElementById('hamburger') || document.getElementById('navHamburger');
    const open = sb?.classList.toggle('mobile-open');
    ov?.classList.toggle('active', !!open);
    hm?.classList.toggle('open', !!open);
    if (hm) hm.setAttribute('aria-expanded', String(!!open));
  },
  closeMobileSidebar() {
    document.getElementById('leftSidebar')?.classList.remove('mobile-open');
    document.getElementById('mobileOverlay')?.classList.remove('active');
    const hm = document.getElementById('hamburger') || document.getElementById('navHamburger');
    hm?.classList.remove('open');
    if (hm) hm.setAttribute('aria-expanded', 'false');
  },

  /* ══════════════════
     MEGA DD + SHARE
     ══════════════════ */
  toggleToolsDD() {
    const w = document.getElementById('navDDWrap');
    const b = document.getElementById('navDDBtn');
    if (!w) return;
    const o = w.classList.toggle('open');
    if (b) b.setAttribute('aria-expanded', o);
  },
  closeToolsDD() {
    document.getElementById('navDDWrap')?.classList.remove('open');
    const b = document.getElementById('navDDBtn');
    if (b) b.setAttribute('aria-expanded', 'false');
  },
  share(type) {
    const url  = encodeURIComponent(location.href);
    const text = encodeURIComponent('Ye free tool try karo — no signup, browser-based! 👇');
    const links = {
      wa:  `https://wa.me/?text=${text}%20${url}`,
      x:   `https://x.com/intent/tweet?text=${text}&url=${url}`,
      fb:  `https://www.facebook.com/sharer/sharer.php?u=${url}`
    };
    if (links[type]) window.open(links[type], '_blank');
  },

  /* ═══════════════════════════════════════════
     MOBILE PANEL (home/blog/about — NOT tools)
     FIX 10: All tools pre-rendered, search filters in-DOM only
     ═══════════════════════════════════════════ */
  _nmpAllHtml: '',
  _initMobilePanel() {
    const wrap = document.getElementById('nmpTools');
    if (!wrap) return;
    let lastCat = '', html = '';
    TN.tools.forEach(t => {
      if (t.cat !== lastCat) {
        if (lastCat) html += '<div class="nmp-divider"></div>';
        html += `<div class="nmp-cat-lbl">${t.cat}</div>`;
        lastCat = t.cat;
      }
      const badge = t.badge
        ? ` <span style="font-size:8px;font-weight:800;padding:1px 4px;border-radius:4px;background:${t.badge === 'HOT' ? '#FFE8D6' : '#D3F9D8'};color:${t.badge === 'HOT' ? '#B85000' : '#00612A'}">${t.badge}</span>` : '';
      html += `<a class="nmp-link nmp-tool-link" href="${t.url}" data-name="${t.name.toLowerCase()}" data-cat="${t.cat.toLowerCase()}"><span class="nmp-ico">${t.icon}</span><span>${t.name}${badge}</span></a>`;
    });
    wrap.innerHTML = html;
    TN._nmpAllHtml = html;

    const navHm = document.getElementById('navHamburger');
    const panel = document.getElementById('mobilePanel');
    if (navHm && panel) {
      navHm.addEventListener('click', () => {
        const open = navHm.classList.toggle('open');
        panel.classList.toggle('open', open);
        navHm.setAttribute('aria-expanded', open);
      });
      document.addEventListener('click', e => {
        if (!navHm.contains(e.target) && !panel.contains(e.target)) {
          navHm.classList.remove('open');
          panel.classList.remove('open');
        }
      });
    }
  },
  /* FIX 10: Filter in-DOM instead of rebuilding HTML */
  _nmpSearch(q) {
    const s = (q || '').toLowerCase().trim();
    const wrap = document.getElementById('nmpTools');
    if (!wrap) return;
    /* Show/hide existing links + category labels */
    wrap.querySelectorAll('.nmp-tool-link').forEach(a => {
      a.style.display = (!s || a.dataset.name.includes(s) || a.dataset.cat.includes(s)) ? '' : 'none';
    });
    /* Show "not found" */
    let notFound = wrap.querySelector('.nmp-noresult');
    const anyVisible = [...wrap.querySelectorAll('.nmp-tool-link')].some(a => a.style.display !== 'none');
    if (!anyVisible && s) {
      if (!notFound) {
        notFound = document.createElement('div');
        notFound.className = 'nmp-noresult';
        notFound.style.cssText = 'text-align:center;padding:1rem;color:#8A8BA5;font-size:13px';
        notFound.textContent = 'Koi tool nahi mila';
        wrap.appendChild(notFound);
      }
      notFound.style.display = '';
    } else if (notFound) {
      notFound.style.display = 'none';
    }
  },

  /* ═══════════════════════════════════════════════════════
     GA4 ANALYTICS
     FIX 1 + FIX 2: window.dataLayer, no duplicate page_view
     ═══════════════════════════════════════════════════════ */
  _ga4Loaded: true, // Already loaded above in IIFE
  _loadGA4() {
    /* GA4 already loaded at top of file via IIFE — this is a no-op now */
  },
  track(eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params || {});
    }
    /* Local storage backup for analytics dashboard */
    try {
      const key = 'tn_events';
      const events = JSON.parse(localStorage.getItem(key) || '[]');
      events.push({ e: eventName, p: params, t: Date.now() });
      if (events.length > 500) events.splice(0, events.length - 500);
      localStorage.setItem(key, JSON.stringify(events));
    } catch (e) {}
  },

  /* ═══════════════════════════════════════════════════════
     FIX 5: META INJECTION — now actually works (metaTitle/metaDesc added to all tools)
     ═══════════════════════════════════════════════════════ */
  _injectMeta() {
    const cur = location.pathname;
    const tool = TN.tools.find(t => cur.endsWith(t.url.split('/').pop()));
    if (!tool) return;
    if (tool.metaTitle && document.title === 'ToolNest') document.title = tool.metaTitle;
    const md = document.querySelector('meta[name="description"]');
    if (md && tool.metaDesc && !md.getAttribute('content')) md.setAttribute('content', tool.metaDesc);
    const ogT = document.querySelector('meta[property="og:title"]');
    if (ogT && tool.metaTitle && !ogT.getAttribute('content')) ogT.setAttribute('content', tool.metaTitle);
    const ogD = document.querySelector('meta[property="og:description"]');
    if (ogD && tool.metaDesc && !ogD.getAttribute('content')) ogD.setAttribute('content', tool.metaDesc);
  },

  /* ═══════════════════════════════════════════════════════
     GLOBAL ERROR / SUCCESS UI
     ═══════════════════════════════════════════════════════ */
  showError(message, containerIdOrEl, autoDismissMs) {
    const el = typeof containerIdOrEl === 'string'
      ? document.getElementById(containerIdOrEl) : containerIdOrEl;
    if (!el) return;
    el.innerHTML = `<span>⚠️ ${message}</span>`;
    el.style.cssText = 'display:block;background:var(--red-l,#FFF0F0);border:1.5px solid rgba(229,62,62,.2);border-radius:12px;padding:.85rem 1.1rem;font-size:13px;color:#C03030;margin-top:.65rem';
    if (autoDismissMs) setTimeout(() => { el.style.display = 'none'; }, autoDismissMs);
  },
  showSuccess(message, containerIdOrEl, autoDismissMs) {
    const el = typeof containerIdOrEl === 'string'
      ? document.getElementById(containerIdOrEl) : containerIdOrEl;
    if (!el) return;
    el.innerHTML = `<span>✅ ${message}</span>`;
    el.style.cssText = 'display:block;background:var(--green-l,#E6FAF4);border:1.5px solid rgba(0,179,126,.2);border-radius:12px;padding:.85rem 1.1rem;font-size:13px;color:#087F5B;margin-top:.65rem';
    if (autoDismissMs) setTimeout(() => { el.style.display = 'none'; }, autoDismissMs);
  },
  hideMessage(containerIdOrEl) {
    const el = typeof containerIdOrEl === 'string'
      ? document.getElementById(containerIdOrEl) : containerIdOrEl;
    if (el) el.style.display = 'none';
  },

  /* ═══════════════════════════════════════════════════════
     TOAST NOTIFICATIONS
     ═══════════════════════════════════════════════════════ */
  notify(message, type, durationMs) {
    type = type || 'info';
    durationMs = durationMs || 3500;
    let wrap = document.getElementById('tn-toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'tn-toast-wrap';
      wrap.style.cssText = 'position:fixed;top:80px;right:16px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none';
      document.body.appendChild(wrap);
    }
    const colors = {
      success: 'background:#E6FAF4;border-color:rgba(0,179,126,.3);color:#087F5B',
      error:   'background:#FFF0F0;border-color:rgba(229,62,62,.2);color:#C03030',
      info:    'background:#EEF3FF;border-color:rgba(30,79,203,.2);color:#1E4FCB',
      warn:    'background:#FFF8E6;border-color:rgba(232,139,0,.3);color:#92600A',
    };
    const icons = { success: '✅', error: '⚠️', info: 'ℹ️', warn: '⚡' };
    const toast = document.createElement('div');
    toast.style.cssText = `${colors[type] || colors.info};border:1.5px solid;border-radius:12px;padding:10px 14px;font-size:13px;font-weight:600;font-family:var(--f-body,'Plus Jakarta Sans',sans-serif);box-shadow:0 4px 16px rgba(13,13,20,.12);pointer-events:auto;max-width:280px;transition:all .3s`;
    toast.textContent = (icons[type] || 'ℹ️') + ' ' + message;
    wrap.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      setTimeout(() => wrap.contains(toast) && wrap.removeChild(toast), 300);
    }, durationMs);
  },

  /* ═══════════════════════════════════════════════════════
     LOCAL STORAGE STATE
     ═══════════════════════════════════════════════════════ */
  saveState(toolKey, data) {
    try {
      localStorage.setItem('tn_state_' + toolKey, JSON.stringify({ d: data, ts: Date.now() }));
    } catch (e) {}
  },
  loadState(toolKey, maxAgeMs) {
    try {
      const raw = localStorage.getItem('tn_state_' + toolKey);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      if (maxAgeMs && (Date.now() - obj.ts) > maxAgeMs) return null;
      return obj.d;
    } catch (e) { return null; }
  },
  clearState(toolKey) {
    try { localStorage.removeItem('tn_state_' + toolKey); } catch (e) {}
  },

  /* ═══════════════════════════════════
     INIT
     ═══════════════════════════════════ */
  init() {
    TN._injectNavCSS();
    TN.injectNav();      // page_view tracked inside injectNav after DOM ready
    TN.injectSidebar();
    TN.injectFooter();
    TN._injectMeta();
    if (typeof window.go !== 'function') {
      window.go = function(url) { location.href = url; };
    }
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => TN.init());
} else {
  TN.init();
}
