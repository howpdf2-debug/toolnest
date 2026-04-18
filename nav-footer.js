// ═══════════════════════════════════════════════════════════════
// TOOLNEST — nav-footer.js
// Central Nav + Sidebar + Footer + Share injector
//
// NAYA TOOL ADD KARNA HO TO: Sirf TN.tools array mein 1 line add karo
// Kisi aur file ko edit karne ki zaroorat nahi
// ═══════════════════════════════════════════════════════════════

const TN = {

  // ╔══════════════════════════════════════════════════════════╗
  // ║  TOOL LIST — Naya tool yahan add karo                   ║
  // ║  { cat, catClass, icon, name, url, badge }              ║
  // ║  badge: 'HOT' | 'NEW' | null                            ║
  // ╚══════════════════════════════════════════════════════════╝
  tools: [
    // ── Image Tools ──
    { cat:'Image Tools',  catClass:'cat-image',    icon:'📐',  name:'Image Resizer',       url:'/tools/image-resizer.html',     badge:'NEW' },
    { cat:'Image Tools',  catClass:'cat-image',    icon:'🗜',  name:'Image Compressor',    url:'/tools/image-compress.html',    badge:'HOT' },
    { cat:'Image Tools',  catClass:'cat-image',    icon:'🎨',  name:'Image to PNG',         url:'/tools/image-to-png.html',      badge:null  },

    // ── Compress ──
    { cat:'Compress',     catClass:'cat-compress', icon:'📦',  name:'Compress PDF',         url:'/tools/compress-pdf.html',      badge:'HOT' },

    // ── Organize PDF ──
    { cat:'Organize PDF', catClass:'cat-organize', icon:'📎',  name:'Merge PDF',            url:'/tools/merge-pdf.html',         badge:'HOT' },
    { cat:'Organize PDF', catClass:'cat-organize', icon:'✂️',  name:'Split PDF',             url:'/tools/split-pdf.html',         badge:null  },
    { cat:'Organize PDF', catClass:'cat-organize', icon:'🔁',  name:'Rotate PDF',            url:'/tools/rotate-pdf.html',        badge:null  },

    // ── Edit & Secure ──
    { cat:'Edit & Secure',catClass:'cat-edit',     icon:'🔐',  name:'Protect PDF',          url:'/tools/protect-pdf.html',       badge:null  },
    { cat:'Edit & Secure',catClass:'cat-edit',     icon:'🔓',  name:'Unlock PDF',            url:'/tools/unlock-pdf.html',        badge:null  },
    { cat:'Edit & Secure',catClass:'cat-edit',     icon:'🏷',  name:'Watermark PDF',         url:'/tools/watermark-pdf.html',     badge:'NEW' },

    // ── Convert ──
    { cat:'Convert',      catClass:'cat-convert',  icon:'📸',  name:'JPG to PDF',            url:'/tools/jpg-to-pdf.html',        badge:'HOT' },
    { cat:'Convert',      catClass:'cat-convert',  icon:'🖼',  name:'PDF to JPG',            url:'/tools/pdf-to-jpg.html',        badge:null  },
    { cat:'Convert',      catClass:'cat-convert',  icon:'📝',  name:'Word to PDF',           url:'/tools/word-to-pdf.html',       badge:'NEW' },
    { cat:'Convert',      catClass:'cat-convert',  icon:'📄',  name:'PDF to Word',           url:'/tools/pdf-to-word.html',       badge:'NEW' },

    // ── Productivity ──
    { cat:'Productivity', catClass:'cat-prod',     icon:'📱',  name:'QR Code Generator',    url:'/tools/qr-code-generator.html', badge:'HOT' },
    { cat:'Productivity', catClass:'cat-prod',     icon:'🔑',  name:'Password Generator',   url:'/tools/password-generator.html',badge:null  },
    { cat:'Productivity', catClass:'cat-prod',     icon:'📊',  name:'Word Counter',          url:'/tools/word-counter.html',      badge:null  },
    { cat:'Productivity', catClass:'cat-prod',     icon:'{}',  name:'JSON Formatter',        url:'/tools/json-formatter.html',    badge:null  },
    { cat:'Productivity', catClass:'cat-prod',     icon:'🔢',  name:'Base64 Encoder',        url:'/tools/base64-encoder.html',    badge:'NEW' },

    // ── Business ──
    { cat:'Business',     catClass:'cat-biz',      icon:'🧾',  name:'GST Invoice',           url:'/tools/invoice-generator.html', badge:'HOT' },
    { cat:'Business',     catClass:'cat-biz',      icon:'🔍',  name:'SEO Meta Generator',    url:'/tools/seo-generator.html',     badge:null  },
  ],

  // ── Popular tools (right sidebar) ──
  popular: [
    { name:'Compress PDF',         url:'/tools/compress-pdf.html',        dot:'var(--c-compress)' },
    { name:'Merge PDF',            url:'/tools/merge-pdf.html',           dot:'var(--c-organize)' },
    { name:'Image Compressor',     url:'/tools/image-compress.html',      dot:'var(--c-image)'    },
    { name:'QR Code Generator',    url:'/tools/qr-code-generator.html',   dot:'var(--c-prod)'     },
    { name:'GST Invoice Generator',url:'/tools/invoice-generator.html',   dot:'var(--c-biz)'      },
  ],

  // ════════════════════════════════════════════
  // NAV INJECT
  // ════════════════════════════════════════════
  injectNav() {
    const el = document.getElementById('tn-nav');
    if (!el) return;
    // Inject btn-nav-back CSS once
    if (!document.getElementById('tn-nav-style')) {
      const s = document.createElement('style');
      s.id = 'tn-nav-style';
      s.textContent = '.btn-nav-back{display:flex;align-items:center;gap:6px;padding:8px 16px;border-radius:999px;font-size:13.5px;font-weight:700;color:var(--ink2,#44455A);background:var(--surface,#EDEEF7);border:1.5px solid var(--border,#E2E4EF);cursor:pointer;transition:all .15s;white-space:nowrap;font-family:var(--f-body)}.btn-nav-back:hover{background:var(--navy-l,#E8ECF5);color:var(--navy,#0F1B3D);border-color:var(--navy,#0F1B3D)}';
      document.head.appendChild(s);
    }
    el.innerHTML = `
<nav class="nav">
  <a href="/" class="nav-logo">
    <img src="/favicon.png" alt="ToolNest" width="40" height="40"
      style="border-radius:10px;object-fit:cover;box-shadow:0 2px 8px rgba(245,166,35,.4)"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="nav-logo-fallback" style="display:none">🔧</div>
    Tool<span style="color:var(--gold,#F5A623)">Nest</span>
  </a>
  <div class="nav-search">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input type="text" id="navSearch" placeholder="Search ${TN.tools.length}+ free tools…"
      oninput="TN.syncSearch(this.value)" autocomplete="off">
  </div>
  <div class="nav-right">
    <a href="/" class="nav-link">Home</a>
    <a href="/blog.html" class="nav-link">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
      Blog
    </a>
    <button class="btn-nav-back" onclick="history.length>1?history.back():location.href='/'" title="Go back">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      Back
    </button>
    <button class="hamburger" id="hamburger" onclick="TN.toggleMobileSidebar()">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<button class="sidebar-toggle" id="sidebarToggle" onclick="TN.toggleDesktopSidebar()" title="Toggle sidebar">
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
</button>`;
  },

  // ════════════════════════════════════════════
  // SIDEBAR INJECT
  // ════════════════════════════════════════════
  injectSidebar() {
    const el = document.getElementById('tn-sidebar-list');
    if (!el) return;

    const cur = location.pathname;
    let lastCat = '';
    let html = '';

    TN.tools.forEach(t => {
      if (t.cat !== lastCat) {
        html += `<div class="cat-lbl">${t.cat}</div>`;
        lastCat = t.cat;
      }
      const isActive = cur.endsWith(t.url) || cur.includes(t.url.replace('/tools/','').replace('.html',''));
      const activeClass = isActive ? ' active' : '';
      const badge = t.badge
        ? `<span class="ti-badge badge-${t.badge.toLowerCase()}">${t.badge}</span>`
        : '';
      html += `<div class="tool-item ${t.catClass}${activeClass}" onclick="location.href='${t.url}'">
  <div class="ti-icon">${t.icon}</div>
  <span class="ti-name">${t.name}</span>${badge}
</div>`;
    });

    el.innerHTML = html;
  },

  // ════════════════════════════════════════════
  // RIGHT SIDEBAR POPULAR TOOLS INJECT
  // ════════════════════════════════════════════
  injectPopular() {
    const el = document.getElementById('tn-popular');
    if (!el) return;
    el.innerHTML = TN.popular.map(p => `
<div class="rsb-quick-item" onclick="location.href='${p.url}'" style="cursor:pointer">
  <span class="rsb-quick-dot" style="background:${p.dot}"></span>${p.name}
</div>`).join('');
  },

  // ════════════════════════════════════════════
  // FOOTER INJECT
  // ════════════════════════════════════════════
  injectFooter() {
    const el = document.getElementById('tn-footer');
    if (!el) return;
    const y = new Date().getFullYear();
    el.innerHTML = `
<footer style="background:var(--navy,#0F1B3D);color:rgba(255,255,255,.5);font-size:12px;padding:2.5rem 1.75rem;font-family:var(--f-body,'Plus Jakarta Sans',sans-serif)">
  <div style="max-width:960px;margin:0 auto">
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:2rem;margin-bottom:1.75rem">

      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:.6rem">
          <img src="/favicon.png" width="28" height="28"
            style="border-radius:8px;box-shadow:0 2px 8px rgba(245,166,35,.3)"
            onerror="this.style.display='none'">
          <span style="font-family:var(--f-display,'Outfit',sans-serif);font-weight:800;font-size:17px;color:#fff">
            Tool<span style="color:var(--gold,#F5A623)">Nest</span>
          </span>
        </div>
        <p style="font-size:12px;color:rgba(255,255,255,.4);max-width:220px;line-height:1.6">
          Free browser-based tools for India.<br>No signup. No uploads. Always free. 🇮🇳
        </p>
      </div>

      <div>
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:rgba(255,255,255,.3);margin-bottom:.6rem">Quick Links</div>
        <div style="display:flex;flex-direction:column;gap:.4rem">
          <a href="/" style="color:rgba(255,255,255,.5);text-decoration:none;font-size:12.5px;transition:color .15s" onmouseover="this.style.color='var(--gold,#F5A623)'" onmouseout="this.style.color='rgba(255,255,255,.5)'">🏠 Home</a>
          <a href="/blog.html" style="color:rgba(255,255,255,.5);text-decoration:none;font-size:12.5px;transition:color .15s" onmouseover="this.style.color='var(--gold,#F5A623)'" onmouseout="this.style.color='rgba(255,255,255,.5)'">📝 Blog</a>
          <a href="/privacy.html" style="color:rgba(255,255,255,.5);text-decoration:none;font-size:12.5px;transition:color .15s" onmouseover="this.style.color='var(--gold,#F5A623)'" onmouseout="this.style.color='rgba(255,255,255,.5)'">🔒 Privacy Policy</a>
          <a href="/contact.html" style="color:rgba(255,255,255,.5);text-decoration:none;font-size:12.5px;transition:color .15s" onmouseover="this.style.color='var(--gold,#F5A623)'" onmouseout="this.style.color='rgba(255,255,255,.5)'">📧 Contact</a>
        </div>
      </div>

      <div>
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:rgba(255,255,255,.3);margin-bottom:.6rem">Popular Tools</div>
        <div style="display:flex;flex-direction:column;gap:.4rem">
          ${TN.popular.slice(0,4).map(p=>`<a href="${p.url}" style="color:rgba(255,255,255,.5);text-decoration:none;font-size:12.5px;transition:color .15s" onmouseover="this.style.color='var(--gold,#F5A623)'" onmouseout="this.style.color='rgba(255,255,255,.5)'">${p.name}</a>`).join('')}
        </div>
      </div>

      <div style="background:rgba(245,166,35,.1);border:1px solid rgba(245,166,35,.2);border-radius:12px;padding:.9rem 1.1rem;text-align:center">
        <div style="font-size:1.4rem;margin-bottom:.3rem">💚</div>
        <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.7);margin-bottom:.4rem">Support ToolNest</div>
        <button onclick="window.open('upi://pay?pa=toolnest@upi&pn=ToolNest&cu=INR','_blank')"
          style="background:var(--gold,#F5A623);color:#0F1B3D;border:none;padding:6px 16px;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit">
          UPI Donate
        </button>
      </div>
    </div>

    <div style="border-top:1px solid rgba(255,255,255,.08);padding-top:1.1rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:.75rem">
      <span>© ${y} ToolNest · Made with ❤️ for India</span>
      <div style="display:flex;align-items:center;gap:12px">
        <span style="display:flex;align-items:center;gap:5px;font-size:11px">
          <span style="width:7px;height:7px;border-radius:50%;background:#00B37E;display:inline-block"></span>
          Files kabhi upload nahi hote
        </span>
        <span style="display:flex;align-items:center;gap:5px;font-size:11px">
          <span style="width:7px;height:7px;border-radius:50%;background:var(--gold,#F5A623);display:inline-block"></span>
          Zero server-side processing
        </span>
      </div>
    </div>
  </div>
</footer>`;
  },

  // ════════════════════════════════════════════
  // SEARCH SYNC
  // ════════════════════════════════════════════
  syncSearch(v) {
    const sb = document.getElementById('sbSearch');
    if (sb) sb.value = v;
    TN.filterSidebar(v);
  },

  filterSidebar(q) {
    const s = q.toLowerCase().trim();
    document.querySelectorAll('#tn-sidebar-list .tool-item').forEach(item => {
      const nm = item.querySelector('.ti-name');
      if (!nm) return;
      item.style.display = (!s || nm.textContent.toLowerCase().includes(s)) ? '' : 'none';
    });
    document.querySelectorAll('#tn-sidebar-list .cat-lbl').forEach(lbl => {
      let el = lbl.nextElementSibling, any = false;
      while (el && el.classList.contains('tool-item')) {
        if (el.style.display !== 'none') any = true;
        el = el.nextElementSibling;
      }
      lbl.style.display = any ? '' : 'none';
    });
  },

  // ════════════════════════════════════════════
  // SIDEBAR TOGGLE
  // ════════════════════════════════════════════
  _sbCollapsed: false,

  toggleDesktopSidebar() {
    TN._sbCollapsed = !TN._sbCollapsed;
    const sb = document.getElementById('leftSidebar');
    const mc = document.getElementById('mainContent');
    const st = document.getElementById('sidebarToggle');
    sb?.classList.toggle('collapsed', TN._sbCollapsed);
    mc?.classList.toggle('sb-collapsed', TN._sbCollapsed);
    if (st) {
      st.classList.toggle('collapsed', TN._sbCollapsed);
      st.style.left = TN._sbCollapsed
        ? '0px'
        : getComputedStyle(document.documentElement).getPropertyValue('--sidebar-w').trim();
    }
  },

  toggleMobileSidebar() {
    const sb = document.getElementById('leftSidebar');
    if (!sb) return;
    const open = sb.classList.toggle('mobile-open');
    document.getElementById('mobileOverlay')?.classList.toggle('active', open);
    const hm = document.getElementById('hamburger');
    if (hm) hm.classList.toggle('open', open);
  },

  closeMobileSidebar() {
    document.getElementById('leftSidebar')?.classList.remove('mobile-open');
    document.getElementById('mobileOverlay')?.classList.remove('active');
    document.getElementById('hamburger')?.classList.remove('open');
  },

  // ════════════════════════════════════════════
  // SHARE
  // ════════════════════════════════════════════
  share(type) {
    const url  = encodeURIComponent(location.href);
    const text = encodeURIComponent('Ye free tool try karo — no signup, browser mein hi kaam karta hai! 👇');
    const map  = {
      wa: `https://wa.me/?text=${text}%20${url}`,
      x:  `https://x.com/intent/tweet?text=${text}&url=${url}`,
      fb: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };
    if (map[type]) window.open(map[type], '_blank');
  },

  // ════════════════════════════════════════════
  // INIT — Auto-runs on every page
  // ════════════════════════════════════════════
  init() {
    TN.injectNav();
    TN.injectSidebar();
    TN.injectPopular();
    TN.injectFooter();
  }
};

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => TN.init());
} else {
  TN.init();
}
