/* ═══════════════════════════════════════════════════════════════
   TOOLNEST — nav-footer.js v6.1
   Single source of truth. Ek baar edit karo, sab pages update.

   NAYA TOOL ADD KARNA: Sirf TN.tools array mein ek line add karo.

   v6.1 FIXES:
   - Calculator tools (EMI, Age, %, SIP) ab mobile dropdown mein
   - Base64 Encoder add kiya
   - Mega dropdown sabhi 6 categories dikhata hai (5 tha pehle)
   - Mobile hamburger conflict fix — tool pages vs home/blog alag
   - Duplicate cat-calc CSS remove kiya
   ═══════════════════════════════════════════════════════════════ */

const TN = {

  tools: [
    // IMAGE TOOLS
    { cat:'Image Tools',  catClass:'cat-image',    icon:'🗜',  name:'Image Compressor',      url:'/tools/image-compress.html',       badge:'HOT' },
    { cat:'Image Tools',  catClass:'cat-image',    icon:'📐',  name:'Image Resizer',          url:'/tools/image-resizer.html',        badge:'NEW' },
    { cat:'Image Tools',  catClass:'cat-image',    icon:'🎨',  name:'Image to PNG',           url:'/tools/image-to-png.html',         badge:null  },
    { cat:'Image Tools',  catClass:'cat-image',    icon:'✂️',  name:'Background Remover',     url:'/tools/bg-remover.html',           badge:'NEW' },
    // COMPRESS
    { cat:'Compress',     catClass:'cat-compress', icon:'📦',  name:'Compress PDF',           url:'/tools/compress-pdf.html',         badge:'HOT' },
    // ORGANIZE PDF
    { cat:'Organize PDF', catClass:'cat-organize', icon:'📎',  name:'Merge PDF',              url:'/tools/merge-pdf.html',            badge:'HOT' },
    { cat:'Organize PDF', catClass:'cat-organize', icon:'✂️',  name:'Split PDF',               url:'/tools/split-pdf.html',            badge:null  },
    { cat:'Organize PDF', catClass:'cat-organize', icon:'🔁',  name:'Rotate PDF',              url:'/tools/rotate-pdf.html',           badge:null  },
    // EDIT & SECURE
    { cat:'Edit & Secure',catClass:'cat-edit',     icon:'🔐',  name:'Protect PDF',             url:'/tools/protect-pdf.html',          badge:null  },
    { cat:'Edit & Secure',catClass:'cat-edit',     icon:'🔓',  name:'Unlock PDF',               url:'/tools/unlock-pdf.html',           badge:null  },
    { cat:'Edit & Secure',catClass:'cat-edit',     icon:'🏷',  name:'Watermark PDF',            url:'/tools/watermark-pdf.html',        badge:'NEW' },
    // CONVERT
    { cat:'Convert',      catClass:'cat-convert',  icon:'📸',  name:'JPG to PDF',               url:'/tools/jpg-to-pdf.html',           badge:'HOT' },
    { cat:'Convert',      catClass:'cat-convert',  icon:'🖼',  name:'PDF to JPG',                url:'/tools/pdf-to-jpg.html',           badge:null  },
    { cat:'Convert',      catClass:'cat-convert',  icon:'📝',  name:'Word to PDF',               url:'/tools/word-to-pdf.html',          badge:'NEW' },
    { cat:'Convert',      catClass:'cat-convert',  icon:'📄',  name:'PDF to Word',               url:'/tools/pdf-to-word.html',          badge:'NEW' },
    // PRODUCTIVITY
    { cat:'Productivity', catClass:'cat-prod',     icon:'📱',  name:'QR Code Generator',         url:'/tools/qr-code-generator.html',    badge:'HOT' },
    { cat:'Productivity', catClass:'cat-prod',     icon:'🔑',  name:'Password Generator',        url:'/tools/password-generator.html',   badge:null  },
    { cat:'Productivity', catClass:'cat-prod',     icon:'📊',  name:'Word Counter',               url:'/tools/word-counter.html',         badge:null  },
    { cat:'Productivity', catClass:'cat-prod',     icon:'{ }', name:'JSON Formatter',             url:'/tools/json-formatter.html',       badge:null  },
    { cat:'Productivity', catClass:'cat-prod',     icon:'🔢',  name:'Base64 Encoder',             url:'/tools/base64-encoder.html',       badge:'NEW' },
    // BUSINESS
    { cat:'Business',     catClass:'cat-biz',      icon:'🧾',  name:'GST Invoice Generator',     url:'/tools/invoice-generator.html',    badge:'HOT' },
    { cat:'Business',     catClass:'cat-biz',      icon:'🔍',  name:'SEO Meta Generator',        url:'/tools/seo-generator.html',        badge:null  },
    // CALCULATORS
    { cat:'Calculators',  catClass:'cat-calc',     icon:'💳',  name:'EMI Calculator',             url:'/tools/emi-calculator.html',       badge:'HOT' },
    { cat:'Calculators',  catClass:'cat-calc',     icon:'🎂',  name:'Age Calculator',             url:'/tools/age-calculator.html',       badge:null  },
    { cat:'Calculators',  catClass:'cat-calc',     icon:'%',   name:'Percentage Calculator',      url:'/tools/percentage-calculator.html',badge:null  },
    { cat:'Calculators',  catClass:'cat-calc',     icon:'📈',  name:'SIP Calculator',             url:'/tools/sip-calculator.html',       badge:'NEW' },
  ],

  popular: [
    { name:'Compress PDF',          url:'/tools/compress-pdf.html',         dot:'var(--c-compress,#F5620A)' },
    { name:'Merge PDF',             url:'/tools/merge-pdf.html',            dot:'var(--c-organize,#00B37E)' },
    { name:'Image Compressor',      url:'/tools/image-compress.html',       dot:'var(--c-image,#E91E8C)'    },
    { name:'QR Code Generator',     url:'/tools/qr-code-generator.html',    dot:'var(--c-prod,#E88B00)'     },
    { name:'GST Invoice Generator', url:'/tools/invoice-generator.html',    dot:'var(--c-biz,#0891B2)'      },
    { name:'JPG to PDF',            url:'/tools/jpg-to-pdf.html',           dot:'var(--c-convert,#1E4FCB)'  },
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

    /* Build mega menu — ALL categories, no slice */
    const cats = {};
    TN.tools.forEach(t => { if (!cats[t.cat]) cats[t.cat] = []; cats[t.cat].push(t); });
    const megaCols = Object.entries(cats).map(([cat, items]) => `
      <div class="ndm-section">
        <div class="ndm-cat-label">${cat}</div>
        ${items.map(t => `<a class="ndm-link" href="${t.url}">
          <span class="ndm-ico">${t.icon}</span><span>${t.name}</span>
          ${t.badge?`<span class="ndm-badge badge-${t.badge.toLowerCase()}">${t.badge}</span>`:''}
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
    <a href="/" class="nav-link${isHome?' active':''}">Home</a>
    <div class="nav-dd-wrap" id="navDDWrap">
      <button class="nav-dd-btn${isTools?' active':''}" id="navDDBtn" onclick="TN.toggleToolsDD()" aria-expanded="false">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        All Tools
        <svg class="nav-dd-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-dd-menu" id="navDDMenu" role="menu">
        <div class="ndm-grid">${megaCols}</div>
        <div class="ndm-footer"><a href="/">⚡ View All ${TN.tools.length}+ Tools →</a></div>
      </div>
    </div>
    <a href="/blog.html" class="nav-link${isBlog?' active':''}">Blog</a>
    <a href="/about.html" class="nav-link${isAbout?' active':''}">About</a>
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
    <a class="nmp-link" href="/blog.html"><span class="nmp-ico">📚</span> Blog</a>
    <a class="nmp-link" href="/about.html"><span class="nmp-ico">ℹ️</span> About</a>
    <div class="nmp-divider"></div>
    <div id="nmpTools"></div>
  </div>
</div>`;

    /* Tool pages: sidebar hamburger (#hamburger or navHamburger) → toggleMobileSidebar
       Non-tool pages: navHamburger → mobilePanel */
    if (isTools) {
      document.getElementById('navHamburger')?.addEventListener('click', () => TN.toggleMobileSidebar());
      /* Inject sidebar-toggle button */
      if (!document.getElementById('sidebarToggle')) {
        const st = document.createElement('button');
        st.id = 'sidebarToggle'; st.className = 'sidebar-toggle'; st.title = 'Toggle sidebar';
        st.setAttribute('onclick','TN.toggleDesktopSidebar()');
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
  },

  /* ════════════
     SIDEBAR
     ════════════ */
  injectSidebar() {
    const el = document.getElementById('tn-sidebar-list');
    if (!el) return;
    const cur = location.pathname;
    let lastCat = '', html = '';
    TN.tools.forEach(t => {
      if (t.cat !== lastCat) { html += `<div class="cat-lbl">${t.cat}</div>`; lastCat = t.cat; }
      const active = (cur.endsWith(t.url) || cur.includes(t.url.replace('/tools/',''))) ? ' active' : '';
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
     ══════════ */
  injectFooter() {
    let el = document.getElementById('tn-footer');
    if (!el) {
      el = document.createElement('div'); el.id = 'tn-footer';
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
.tn-fb{display:inline-flex;align-items:center;gap:6px;background:rgba(245,166,35,.1);border:1px solid rgba(245,166,35,.22);border-radius:999px;padding:4px 12px;font-size:11.5px;font-weight:600;color:#F5A623}
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
    </div>
    <div class="tn-fc2">
      <div><div class="tn-fct">PDF Tools</div>
        <a href="/tools/merge-pdf.html">Merge PDF</a>
        <a href="/tools/compress-pdf.html">Compress PDF</a>
        <a href="/tools/split-pdf.html">Split PDF</a>
        <a href="/tools/protect-pdf.html">Protect PDF</a>
        <a href="/tools/watermark-pdf.html">Watermark PDF</a>
      </div>
      <div><div class="tn-fct">Convert</div>
        <a href="/tools/jpg-to-pdf.html">JPG to PDF</a>
        <a href="/tools/pdf-to-jpg.html">PDF to JPG</a>
        <a href="/tools/word-to-pdf.html">Word to PDF</a>
        <a href="/tools/pdf-to-word.html">PDF to Word</a>
      </div>
      <div><div class="tn-fct">Calculators &amp; More</div>
        <a href="/tools/emi-calculator.html">EMI Calculator</a>
        <a href="/tools/sip-calculator.html">SIP Calculator</a>
        <a href="/tools/age-calculator.html">Age Calculator</a>
        <a href="/tools/percentage-calculator.html">Percentage Calc</a>
        <a href="/tools/invoice-generator.html">GST Invoice</a>
      </div>
      <div><div class="tn-fct">Company</div>
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
/* cat-calc — Calculators (single block, no duplicate) */
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
    const s = (q||'').toLowerCase().trim();
    document.querySelectorAll('#tn-sidebar-list .tool-item').forEach(item => {
      item.style.display = (!s || (item.querySelector('.ti-name')?.textContent.toLowerCase()||'').includes(s)) ? '' : 'none';
    });
    document.querySelectorAll('#tn-sidebar-list .cat-lbl').forEach(lbl => {
      let el = lbl.nextElementSibling, any = false;
      while (el && el.classList.contains('tool-item')) { if (el.style.display!=='none') any=true; el=el.nextElementSibling; }
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
    /* Works with both old id="hamburger" and new id="navHamburger" */
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
    if (hm) hm.setAttribute('aria-expanded','false');
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
    if (b) b.setAttribute('aria-expanded','false');
  },
  share(type) {
    const url  = encodeURIComponent(location.href);
    const text = encodeURIComponent('Ye free tool try karo — no signup, browser-based! 👇');
    const links = { wa:`https://wa.me/?text=${text}%20${url}`, x:`https://x.com/intent/tweet?text=${text}&url=${url}`, fb:`https://www.facebook.com/sharer/sharer.php?u=${url}` };
    if (links[type]) window.open(links[type], '_blank');
  },

  /* ═══════════════════════════════════════════
     MOBILE PANEL (home/blog only — NOT tool pages)
     ═══════════════════════════════════════════ */
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
      const badge = t.badge ? ` <span style="font-size:8px;font-weight:800;padding:1px 4px;border-radius:4px;background:${t.badge==='HOT'?'#FFE8D6':'#D3F9D8'};color:${t.badge==='HOT'?'#B85000':'#00612A'}">${t.badge}</span>` : '';
      html += `<a class="nmp-link" href="${t.url}"><span class="nmp-ico">${t.icon}</span><span>${t.name}${badge}</span></a>`;
    });
    wrap.innerHTML = html;

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
  _nmpSearch(q) {
    const s = (q||'').toLowerCase().trim();
    const wrap = document.getElementById('nmpTools');
    if (!wrap) return;
    if (!s) { TN._initMobilePanel(); return; }
    const res = TN.tools.filter(t => t.name.toLowerCase().includes(s) || t.cat.toLowerCase().includes(s));
    wrap.innerHTML = res.length
      ? res.map(t => `<a class="nmp-link" href="${t.url}"><span class="nmp-ico">${t.icon}</span><span>${t.name}</span></a>`).join('')
      : '<div style="text-align:center;padding:1rem;color:#8A8BA5;font-size:13px">Koi tool nahi mila</div>';
  },

  /* ═══════
     INIT
     ═══════ */
  init() {
    TN._injectNavCSS();
    TN.injectNav();
    TN.injectSidebar();
    TN.injectFooter();
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
