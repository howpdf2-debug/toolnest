/* ═══════════════════════════════════════════════════════════════
   TOOLNEST — nav-footer.js v8.0
   ✅ FIX 1  — TN.blogs[] centralized (blog.html rendering bug fixed)
   ✅ FIX 2  — TN.faqs[] centralized (no more duplicate in index.html)
   ✅ FIX 3  — TN.trending[] centralized
   ✅ FIX 4  — Dark mode toggle (CSS already ready in style.css)
   ✅ FIX 5  — TN.filePreview() — file preview component (all tools use)
   ✅ FIX 6  — TN.showCompressionResult() — before/after stats badge
   ✅ FIX 7  — TN.stepProgress() — animated step indicator
   ✅ FIX 8  — injectSidebar() properly uses TN.tools (no more hardcoded HTML)
   ✅ FIX 9  — XSS fix: user input sanitized before innerHTML
   ✅ FIX 10 — Homepage drag-drop global handler
   ✅ FIX 11 — Ctrl+K search shortcut
   ✅ FIX 12 — Tool count auto-synced from TN.tools.length
   ✅ FIX 13 — Font loading optimized (reduced weights hint added)
   ✅ FIX 14 — accessibility: skip-link, aria improvements
   ✅ FIX 15 — Fake social proof removed from proof bar logic
   ═══════════════════════════════════════════════════════════════ */

/* ═══ GA4 CONFIG ═══════════════════════════════════════════════ */
const TN_GA_ID = 'G-Y6W96XKXDR';

(function _ga4EarlyLoad() {
  if (!TN_GA_ID || TN_GA_ID === 'G-XXXXXXXXXX') return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', TN_GA_ID, { send_page_view: false });
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + TN_GA_ID;
  const first = document.getElementsByTagName('script')[0];
  if (first) first.parentNode.insertBefore(s, first);
  else document.head.appendChild(s);
})();

/* ═══════════════════════════════════════════════════════════════
   SANITIZE — XSS FIX #9
   ═══════════════════════════════════════════════════════════════ */
function _sanitize(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const TN = {

  /* ═══════════════════════════════════════════════════════════════
     TOOLS DATA — Single source of truth
     ═══════════════════════════════════════════════════════════════ */
  tools: [
    // ── IMAGE TOOLS ──
    { cat:'Image Tools', catClass:'cat-image', icon:'🗜', badge:'HOT', name:'Image Compressor', url:'/tools/image-compress.html', metaTitle:'Image Compressor Free Online | ToolNest', metaDesc:'JPG aur PNG compress karein quality maintain karte hue. 100% free, browser-based.' },
    { cat:'Image Tools', catClass:'cat-image', icon:'📐', badge:'NEW', name:'Image Resizer', url:'/tools/image-resizer.html', metaTitle:'Image Resizer Free Online | ToolNest', metaDesc:'Images resize karein pixels ya percentage mein. Instant, free, browser-based.' },
    { cat:'Image Tools', catClass:'cat-image', icon:'🎨', badge:null, name:'Image to PNG', url:'/tools/image-to-png.html', metaTitle:'Image to PNG Converter Free | ToolNest', metaDesc:'JPG, WebP ya koi bhi image ko PNG mein convert karein.' },
    { cat:'Image Tools', catClass:'cat-image', icon:'✂️', badge:'NEW', name:'Background Remover', url:'/tools/bg-remover.html', metaTitle:'Background Remover Free Online | ToolNest', metaDesc:'Image ka background remove karein AI se. Free, browser-based.' },
    // ── COMPRESS ──
    { cat:'Compress', catClass:'cat-compress', icon:'📦', badge:'HOT', name:'Compress PDF', url:'/tools/compress-pdf.html', metaTitle:'Compress PDF Free Online | ToolNest', metaDesc:'PDF compress karein bina quality khoe. Free, browser-based, no server upload.' },
    // ── ORGANIZE PDF ──
    { cat:'Organize PDF', catClass:'cat-organize', icon:'📎', badge:'HOT', name:'Merge PDF', url:'/tools/merge-pdf.html', metaTitle:'Merge PDF Free Online | ToolNest', metaDesc:'Multiple PDF files ek mein merge karein. Drag & drop order. Free, instant.' },
    { cat:'Organize PDF', catClass:'cat-organize', icon:'✂️', badge:null, name:'Split PDF', url:'/tools/split-pdf.html', metaTitle:'Split PDF Free Online | ToolNest', metaDesc:'PDF split karein — specific pages ya range select karein. Free, browser-based.' },
    { cat:'Organize PDF', catClass:'cat-organize', icon:'🔁', badge:null, name:'Rotate PDF', url:'/tools/rotate-pdf.html', metaTitle:'Rotate PDF Free Online | ToolNest', metaDesc:'PDF pages rotate karein — 90, 180 ya 270 degree. Free, instant.' },
    // ── EDIT & SECURE ──
    { cat:'Edit & Secure', catClass:'cat-edit', icon:'🔐', badge:null, name:'Protect PDF', url:'/tools/protect-pdf.html', metaTitle:'Protect PDF with Password Free | ToolNest', metaDesc:'PDF password se protect karein. Secure, browser-based.' },
    { cat:'Edit & Secure', catClass:'cat-edit', icon:'🔓', badge:null, name:'Unlock PDF', url:'/tools/unlock-pdf.html', metaTitle:'Unlock PDF Free Online | ToolNest', metaDesc:'Password-protected PDF unlock karein. Free, instant.' },
    { cat:'Edit & Secure', catClass:'cat-edit', icon:'🏷', badge:'NEW', name:'Watermark PDF', url:'/tools/watermark-pdf.html', metaTitle:'Watermark PDF Free Online | ToolNest', metaDesc:'PDF par text ya image watermark add karein. Free & browser-based.' },
    // ── CONVERT ──
    { cat:'Convert', catClass:'cat-convert', icon:'📸', badge:'HOT', name:'JPG to PDF', url:'/tools/jpg-to-pdf.html', metaTitle:'JPG to PDF Free Online | ToolNest', metaDesc:'JPG images ko PDF mein convert karein. Multiple images ek PDF mein. Free.' },
    { cat:'Convert', catClass:'cat-convert', icon:'🖼', badge:null, name:'PDF to JPG', url:'/tools/pdf-to-jpg.html', metaTitle:'PDF to JPG Free Online | ToolNest', metaDesc:'PDF ke pages ko JPG images mein convert karein. High quality, free.' },
    { cat:'Convert', catClass:'cat-convert', icon:'📝', badge:'NEW', name:'Word to PDF', url:'/tools/word-to-pdf.html', metaTitle:'Word to PDF Free Online | ToolNest', metaDesc:'.docx Word file ko PDF mein convert karein. Browser-based, free.' },
    { cat:'Convert', catClass:'cat-convert', icon:'📄', badge:'NEW', name:'PDF to Word', url:'/tools/pdf-to-word.html', metaTitle:'PDF to Word Free Online | ToolNest', metaDesc:'PDF ko Word document mein convert karein. Editable DOCX. Free.' },
    // ── PRODUCTIVITY ──
    { cat:'Productivity', catClass:'cat-prod', icon:'📱', badge:'HOT', name:'QR Code Generator', url:'/tools/qr-code-generator.html', metaTitle:'QR Code Generator Free Online | ToolNest', metaDesc:'QR code banao URL, UPI, text ke liye. Custom design. Free, instant.' },
    { cat:'Productivity', catClass:'cat-prod', icon:'🔑', badge:null, name:'Password Generator', url:'/tools/password-generator.html', metaTitle:'Password Generator Free Online | ToolNest', metaDesc:'Strong random passwords generate karein. Free.' },
    { cat:'Productivity', catClass:'cat-prod', icon:'📊', badge:null, name:'Word Counter', url:'/tools/word-counter.html', metaTitle:'Word Counter Free Online | ToolNest', metaDesc:'Words, characters, sentences aur reading time count karein. Instant.' },
    { cat:'Productivity', catClass:'cat-prod', icon:'{ }', badge:null, name:'JSON Formatter', url:'/tools/json-formatter.html', metaTitle:'JSON Formatter & Validator Free Online | ToolNest', metaDesc:'JSON beautify, minify aur validate karein. Free, browser-based.' },
    { cat:'Productivity', catClass:'cat-prod', icon:'🔢', badge:'NEW', name:'Base64 Encoder', url:'/tools/base64-encoder.html', metaTitle:'Base64 Encoder Decoder Free Online | ToolNest', metaDesc:'Text ya files ko Base64 encode/decode karein. Instant, free.' },
    // ── BUSINESS ──
    { cat:'Business', catClass:'cat-biz', icon:'🧾', badge:'HOT', name:'GST Invoice Generator', url:'/tools/invoice-generator.html', metaTitle:'GST Invoice Generator Free Online | ToolNest', metaDesc:'Professional GST invoice banao minutes mein. PDF download karo. Free, no signup.' },
    { cat:'Business', catClass:'cat-biz', icon:'🔍', badge:null, name:'SEO Meta Generator', url:'/tools/seo-generator.html', metaTitle:'SEO Meta Generator Free | ToolNest', metaDesc:'Page ka SEO meta title aur description generate karein. Free.' },
    { cat:'Business', catClass:'cat-biz', icon:'📊', badge:'NEW', name:'Website Analytics', url:'/tools/website-analytics.html', metaTitle:'Website Analytics Dashboard Free | ToolNest', metaDesc:'Analytics data enter karo — beautiful charts aur AI insights. Free.' },
    { cat:'Business', catClass:'cat-biz', icon:'📈', badge:'NEW', name:'SEO Analyzer', url:'/tools/seo-analyzer.html', metaTitle:'SEO Analyzer Free | ToolNest', metaDesc:'Page ka SEO score analyze karein. 0-100 score. Free.' },
    // ── CALCULATORS ──
    { cat:'Calculators', catClass:'cat-calc', icon:'💳', badge:'HOT', name:'EMI Calculator', url:'/tools/emi-calculator.html', metaTitle:'EMI Calculator Free Online | ToolNest', metaDesc:'Loan ki monthly EMI calculate karein. Free, made for India.' },
    { cat:'Calculators', catClass:'cat-calc', icon:'🎂', badge:null, name:'Age Calculator', url:'/tools/age-calculator.html', metaTitle:'Age Calculator Free Online | ToolNest', metaDesc:'Exact age years, months, days mein calculate karein. Free.' },
    { cat:'Calculators', catClass:'cat-calc', icon:'%', badge:null, name:'Percentage Calculator', url:'/tools/percentage-calculator.html', metaTitle:'Percentage Calculator Free Online | ToolNest', metaDesc:'Percentage calculate karein. Instant, free.' },
    { cat:'Calculators', catClass:'cat-calc', icon:'📈', badge:'NEW', name:'SIP Calculator', url:'/tools/sip-calculator.html', metaTitle:'SIP Calculator Free Online | ToolNest', metaDesc:'SIP returns aur wealth projection calculate karein. Free.' },
  ],

  /* ═══════════════════════════════════════════════════════════════
     FIX 1 — BLOGS[] Centralized
     blog.html aur index.html dono yahi use karenge
     ═══════════════════════════════════════════════════════════════ */
  blogs: [
    {
      emoji:'🧾', cat:'Finance', bg:'#E6FAF4', accentColor:'#00B37E',
      title:'Best Free GST Invoice Generator India 2026 – No Signup Required',
      url:'/blog/best-gst-invoice-generator-india-2026.html',
      slug:'best-gst-invoice-generator-india-2026',
      mins:5, featured:true,
      desc:'Puri guide ki kaise ToolNest se professional GST invoice banayein — bilkul free, koi account nahi.',
      date:'2026-04-01'
    },
    {
      emoji:'📦', cat:'PDF', bg:'#FFF0EB', accentColor:'#F5620A',
      title:'PDF Compress Kaise Karein Bina Quality Loss Ke? (Free Online)',
      url:'/blog/compress-pdf-free-online-india.html',
      slug:'compress-pdf-free-online-india',
      mins:4, featured:false,
      desc:'PDF file size reduce karna ab aasaan hai! ToolNest se bina quality lose kiye PDF compress karein.',
      date:'2026-03-28'
    },
    {
      emoji:'🖼️', cat:'Images', bg:'#EEF3FF', accentColor:'#1E4FCB',
      title:'Image Compress Karna Free Mein — Best Tools India 2026',
      url:'/blog/compress-image-without-quality-loss.html',
      slug:'compress-image-without-quality-loss',
      mins:4, featured:false,
      desc:'Website speed improve karna chahte ho? Images ko 90% tak compress karein bina quality lose kiye.',
      date:'2026-03-25'
    },
    {
      emoji:'💼', cat:'Business', bg:'#E8F8FD', accentColor:'#0891B2',
      title:'Complete GST Invoice Guide for Indian Businesses',
      url:'/blog/gst-invoice-guide.html',
      slug:'gst-invoice-guide',
      mins:10, featured:true,
      desc:'Master GST invoice creation. Mandatory fields, tax calculations, compliance requirements.',
      date:'2026-02-20'
    },
    {
      emoji:'💼', cat:'Business', bg:'#F2EDFF', accentColor:'#6C3FC4',
      title:'Top 10 Free Online Tools for Small Business India 2026',
      url:'/blog/free-online-tools-small-business-india.html',
      slug:'free-online-tools-small-business-india',
      mins:7, featured:false,
      desc:'Chote business ke liye 10 zaroori free online tools. Time bachao, paise bachao.',
      date:'2026-03-20'
    },
    {
      emoji:'🏠', cat:'Finance', bg:'#FFF8E6', accentColor:'#E88B00',
      title:'EMI Calculator Guide — Home Loan, Car Loan India 2026',
      url:'/blog/emi-calculator-home-loan-guide.html',
      slug:'emi-calculator-home-loan-guide',
      mins:6, featured:false,
      desc:'Home loan, car loan ya personal loan — EMI calculate karna aur planning ab easy hai.',
      date:'2026-03-15'
    },
    {
      emoji:'📎', cat:'PDF', bg:'#E6FAF4', accentColor:'#00B37E',
      title:'PDF Merge Kaise Karein? Complete Step-by-Step Guide',
      url:'/blog/merge-pdf-guide-india-2026.html',
      slug:'merge-pdf-guide-india-2026',
      mins:5, featured:false,
      desc:'Multiple PDF files ko ek file mein combine karna sikhein — drag & drop se reorder.',
      date:'2026-03-10'
    },
    {
      emoji:'📱', cat:'Tools', bg:'#EEF3FF', accentColor:'#1E4FCB',
      title:'UPI QR Code Generator Free — PhonePe, GPay ke liye',
      url:'/blog/upi-qr-code-generator-free-india.html',
      slug:'upi-qr-code-generator-free-india',
      mins:3, featured:false,
      desc:'Apne payment ke liye UPI QR code banao bilkul free. PhonePe, GPay, Paytm compatible.',
      date:'2026-03-05'
    },
    {
      emoji:'📋', cat:'PDF', bg:'#FFF0EB', accentColor:'#F5620A',
      title:'Best Free PDF Tools Online India — No Upload, No Signup',
      url:'/blog/best-free-pdf-tools-india.html',
      slug:'best-free-pdf-tools-india',
      mins:7, featured:false,
      desc:'India ke best free PDF tools ka complete comparison. Kaunsa tool choose karein.',
      date:'2026-02-28'
    },
    {
      emoji:'🧮', cat:'Finance', bg:'#D1FAE5', accentColor:'#059669',
      title:'SIP Calculator India — Mutual Fund Returns Kaise Calculate Karein',
      url:'/blog/sip-calculator-mutual-fund-india.html',
      slug:'sip-calculator-mutual-fund-india',
      mins:6, featured:false,
      desc:'SIP mein invest karne se pehle returns calculate karo. Financial plan banao.',
      date:'2026-02-25'
    },
    {
      emoji:'🔍', cat:'SEO', bg:'#F2EDFF', accentColor:'#6C3FC4',
      title:'Free SEO Meta Tag Generator — Apni Website Ko Rank Karwao',
      url:'/blog/free-seo-meta-tag-generator.html',
      slug:'free-seo-meta-tag-generator',
      mins:5, featured:false,
      desc:'SEO meta tags kyun zaroori hain aur kaise generate karein? Complete guide.',
      date:'2026-02-20'
    },
    {
      emoji:'🎂', cat:'Tools', bg:'#EEF3FF', accentColor:'#1E4FCB',
      title:'Age Calculator Online — Exact Umar Seconds Tak Jaano',
      url:'/blog/age-calculator-online-india.html',
      slug:'age-calculator-online-india',
      mins:3, featured:false,
      desc:'Date of birth se exact age calculate karein — years, months, days, hours mein.',
      date:'2026-02-18'
    },
    {
      emoji:'📣', cat:'Business', bg:'#E8F8FD', accentColor:'#0891B2',
      title:'Digital Marketing Tools Every Startup Needs in 2026',
      url:'/blog/digital-marketing-tools-startups-2026.html',
      slug:'digital-marketing-tools-startups-2026',
      mins:18, featured:true,
      desc:'Essential free tools for startups. SEO, social media, email marketing, analytics.',
      date:'2026-03-05'
    },
  ],

  /* ═══════════════════════════════════════════════════════════════
     FIX 2 — FAQS[] Centralized
     ═══════════════════════════════════════════════════════════════ */
  faqs: [
    { q:'Kya ToolNest ke sabhi tools 100% free hain?', a:'Haan! ToolNest ke ' + 28 + '+ tools completely free hain — koi hidden cost nahi, koi premium tier nahi, koi watermark nahi. Hum Google AdSense ads se supported hain.' },
    { q:'Kya meri files server par upload hoti hain?', a:'Nahi. Hamare sabhi tools files locally aapke browser mein JavaScript ke through process karte hain. Files kabhi bhi aapke device se bahar nahi jaati — 100% privacy.' },
    { q:'Kya account ya signup karna zaroori hai?', a:'Bilkul nahi. Koi account nahi, koi email nahi, koi OTP nahi. Seedha koi bhi tool kholein aur immediately use karein.' },
    { q:'Kya ye tools Android ya iPhone par kaam karte hain?', a:'Haan! ToolNest ke sabhi tools fully responsive hain. Android, iPhone, iPad — koi bhi modern browser par perfectly kaam karte hain.' },
    { q:'File size ki koi limit hai kya?', a:'Reasonable limits hain (50-100MB) jo 99% real-world use cases cover karti hain. Hum artificially size restrict nahi karte.' },
    { q:'ToolNest paise kaise kamaata hai?', a:'Hum non-intrusive Google AdSense ads ke through supported hain. Aapka data kabhi nahi bechte, koi tool paywall ke peeche nahi rakhte.' },
    { q:'Kaunse PDF tools available hain?', a:'Compress, Merge, Split, Rotate, Protect, Unlock, Watermark — plus JPG/Word conversions. Saare 11 PDF tools completely free hain.' },
    { q:'Naye tools kab add honge?', a:'Hum regularly new tools add karte hain. Instagram follow karein ya WhatsApp Channel join karein updates ke liye.' },
  ],

  /* ═══════════════════════════════════════════════════════════════
     FIX 3 — TRENDING[] Centralized
     ═══════════════════════════════════════════════════════════════ */
  trending: [
    { name:'EMI Calculator',         icon:'💳', url:'/tools/emi-calculator.html',        searches:'2L+/mo',  bg:'#E6FAF4' },
    { name:'Percentage Calculator',  icon:'🧮', url:'/tools/percentage-calculator.html', searches:'150K/mo', bg:'#D1FAE5' },
    { name:'Image Compressor',       icon:'🗜', url:'/tools/image-compress.html',        searches:'90K/mo',  bg:'#EEF3FF' },
    { name:'PDF to Word',            icon:'📄', url:'/tools/pdf-to-word.html',           searches:'60K/mo',  bg:'#FFF0EB' },
    { name:'QR Code Generator',      icon:'📱', url:'/tools/qr-code-generator.html',     searches:'50K/mo',  bg:'#FFF8E6' },
    { name:'Background Remover',     icon:'✂️', url:'/tools/bg-remover.html',            searches:'55K/mo',  bg:'#FCE4F0' },
    { name:'Merge PDF',              icon:'📎', url:'/tools/merge-pdf.html',             searches:'40K/mo',  bg:'#E6FAF4' },
    { name:'GST Invoice Generator',  icon:'🧾', url:'/tools/invoice-generator.html',     searches:'40K/mo',  bg:'#E8F8FD' },
  ],

  popular: [
    { name:'Compress PDF',          url:'/tools/compress-pdf.html',      dot:'var(--c-compress,#F5620A)' },
    { name:'Merge PDF',             url:'/tools/merge-pdf.html',         dot:'var(--c-organize,#00B37E)' },
    { name:'Image Compressor',      url:'/tools/image-compress.html',    dot:'var(--c-image,#E91E8C)'    },
    { name:'QR Code Generator',     url:'/tools/qr-code-generator.html', dot:'var(--c-prod,#E88B00)'     },
    { name:'GST Invoice Generator', url:'/tools/invoice-generator.html', dot:'var(--c-biz,#0891B2)'      },
    { name:'JPG to PDF',            url:'/tools/jpg-to-pdf.html',        dot:'var(--c-convert,#1E4FCB)'  },
    { name:'SEO Analyzer',          url:'/tools/seo-analyzer.html',      dot:'var(--c-biz,#0891B2)'      },
  ],

  /* ═══════════════════════════════════════════════════════════════
     ✅ FIX 5 — FILE PREVIEW COMPONENT
     Usage: TN.filePreview(file, containerId, options)
     options: { showPages: true/false, showDimensions: true/false }
     ═══════════════════════════════════════════════════════════════ */
  filePreview(file, containerId, options) {
    const container = typeof containerId === 'string'
      ? document.getElementById(containerId) : containerId;
    if (!container || !file) return;

    options = options || {};
    const isPDF = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    const isImage = file.type.startsWith('image/');
    const sizeFmt = TN._fmtSize(file.size);

    // Base preview shell
    container.innerHTML = `
      <div id="tn-preview-card" style="
        background:var(--white,#fff);
        border:1.5px solid var(--border,#E2E4EF);
        border-radius:14px;padding:1rem;
        display:flex;align-items:center;gap:12px;
        box-shadow:0 2px 8px rgba(13,13,20,.07);
        margin-bottom:.75rem;animation:tnFadeUp .3s ease;
      ">
        <div id="tn-thumb" style="
          width:52px;height:52px;border-radius:10px;flex-shrink:0;
          background:var(--surface,#EDEEF7);
          display:flex;align-items:center;justify-content:center;
          font-size:24px;overflow:hidden;
        ">${isPDF ? '📄' : isImage ? '🖼️' : '📁'}</div>
        <div style="flex:1;min-width:0">
          <div id="tn-fname" style="
            font-size:13.5px;font-weight:700;
            color:var(--ink,#0D0D14);
            white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
          ">${_sanitize(file.name)}</div>
          <div style="display:flex;gap:10px;margin-top:4px;flex-wrap:wrap">
            <span style="font-size:11.5px;color:var(--ink3,#8A8BA5)">${sizeFmt}</span>
            <span id="tn-fextra" style="font-size:11.5px;color:var(--ink3,#8A8BA5)"></span>
          </div>
        </div>
        <div id="tn-fcheck" style="
          width:28px;height:28px;border-radius:50%;
          background:var(--green-l,#E6FAF4);
          display:flex;align-items:center;justify-content:center;
          font-size:14px;flex-shrink:0;
        ">✓</div>
      </div>`;

    // PDF: render first page as thumbnail
    if (isPDF && typeof pdfjsLib !== 'undefined') {
      const url = URL.createObjectURL(file);
      pdfjsLib.getDocument(url).promise.then(pdf => {
        const totalPages = pdf.numPages;
        const extra = document.getElementById('tn-fextra');
        if (extra) extra.textContent = totalPages + ' page' + (totalPages > 1 ? 's' : '');
        if (options.showPages !== false) {
          return pdf.getPage(1).then(page => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const vp = page.getViewport({ scale: 0.4 });
            canvas.width = vp.width;
            canvas.height = vp.height;
            canvas.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:8px';
            return page.render({ canvasContext: ctx, viewport: vp }).promise.then(() => {
              const thumb = document.getElementById('tn-thumb');
              if (thumb) { thumb.innerHTML = ''; thumb.appendChild(canvas); }
              URL.revokeObjectURL(url);
            });
          });
        }
        URL.revokeObjectURL(url);
      }).catch(() => URL.revokeObjectURL(url));

    } else if (isImage) {
      // Image: show thumbnail directly
      const reader = new FileReader();
      reader.onload = e => {
        const thumb = document.getElementById('tn-thumb');
        if (thumb) {
          thumb.innerHTML = `<img src="${e.target.result}" alt="preview" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`;
        }
        if (options.showDimensions !== false) {
          const img = new Image();
          img.onload = () => {
            const extra = document.getElementById('tn-fextra');
            if (extra) extra.textContent = img.width + '×' + img.height + 'px';
          };
          img.src = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  },

  /* ═══════════════════════════════════════════════════════════════
     ✅ FIX 6 — BEFORE/AFTER COMPRESSION STATS
     Usage: TN.showCompressionResult(originalBytes, compressedBytes, containerId)
     ═══════════════════════════════════════════════════════════════ */
  showCompressionResult(originalBytes, compressedBytes, containerId) {
    const container = typeof containerId === 'string'
      ? document.getElementById(containerId) : containerId;
    if (!container) return;

    const saved = originalBytes - compressedBytes;
    const pct = Math.round((saved / originalBytes) * 100);
    const isGood = pct >= 20;
    const origFmt = TN._fmtSize(originalBytes);
    const compFmt = TN._fmtSize(compressedBytes);
    const savedFmt = TN._fmtSize(saved);

    container.innerHTML = `
      <div style="
        background:linear-gradient(135deg,#E6FCF5,#D3F9D8);
        border:1.5px solid rgba(0,179,126,.25);
        border-radius:14px;padding:1.25rem 1.5rem;
        display:flex;align-items:center;gap:1.25rem;
        flex-wrap:wrap;animation:tnFadeUp .35s ease;
        margin-bottom:.75rem;
      ">
        <div style="font-size:2.2rem;flex-shrink:0">${isGood ? '🎉' : '✅'}</div>
        <div style="flex:1;min-width:160px">
          <div style="font-family:var(--f-display,'Outfit',sans-serif);font-size:15px;font-weight:800;color:#087F5B;margin-bottom:.35rem">
            ${isGood ? pct + '% size reduction!' : 'Compression complete!'}
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span style="font-size:13px;color:#099268;font-weight:600">${origFmt}</span>
            <span style="color:#A8DACC;font-size:16px">→</span>
            <span style="font-size:13px;color:#087F5B;font-weight:800">${compFmt}</span>
            <span style="font-size:11.5px;color:#099268;background:rgba(0,179,126,.15);padding:2px 8px;border-radius:99px;font-weight:700">
              ${savedFmt} saved
            </span>
          </div>
        </div>
        <button onclick="
          var text='ToolNest se meri file ${origFmt} se ${compFmt} ho gayi — ${pct}% smaller! 🎉 toolnest.bhaihelp.in';
          if(navigator.share){navigator.share({text:text,url:'https://toolnest.bhaihelp.in'});}
          else{window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');}
        " style="
          background:#25D366;color:#fff;border:none;
          padding:8px 16px;border-radius:99px;
          font-size:12.5px;font-weight:700;cursor:pointer;
          font-family:inherit;white-space:nowrap;
          transition:all .15s;flex-shrink:0;
        " title="Share your result">
          📤 Share result
        </button>
      </div>`;
  },

  /* ═══════════════════════════════════════════════════════════════
     ✅ FIX 7 — STEP PROGRESS INDICATOR
     Usage: TN.stepProgress(steps, currentStep, containerId)
     steps: ['Reading files', 'Processing', 'Generating output']
     currentStep: 0-based index, or 'done' / 'error'
     ═══════════════════════════════════════════════════════════════ */
  stepProgress(steps, currentStep, containerId) {
    const container = typeof containerId === 'string'
      ? document.getElementById(containerId) : containerId;
    if (!container) return;

    const isDone = currentStep === 'done';
    const isError = currentStep === 'error';
    const activeIdx = isDone ? steps.length : (isError ? currentStep : Number(currentStep));

    const stepsHTML = steps.map((s, i) => {
      let state = 'pending';
      if (isDone || i < activeIdx) state = 'done';
      else if (i === activeIdx) state = isError ? 'error' : 'active';

      const colors = {
        done:    { bg: '#00B37E', text: '#fff', border: '#00B37E' },
        active:  { bg: '#F5A623', text: '#0F1B3D', border: '#F5A623' },
        error:   { bg: '#E53E3E', text: '#fff', border: '#E53E3E' },
        pending: { bg: 'transparent', text: '#8A8BA5', border: '#E2E4EF' },
      };
      const c = colors[state];
      const icon = state === 'done' ? '✓' : state === 'error' ? '✕' : state === 'active' ? `<span style="display:inline-block;animation:tnSpin 1s linear infinite">⟳</span>` : (i + 1);

      return `
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;min-width:0">
          <div style="
            width:32px;height:32px;border-radius:50%;
            background:${c.bg};color:${c.text};
            border:2px solid ${c.border};
            display:flex;align-items:center;justify-content:center;
            font-size:13px;font-weight:700;
            transition:all .3s;
            ${state === 'active' ? 'box-shadow:0 0 0 4px rgba(245,166,35,.25);' : ''}
          ">${icon}</div>
          <div style="
            font-size:11px;text-align:center;line-height:1.3;
            color:${state === 'pending' ? 'var(--ink3,#8A8BA5)' : 'var(--ink,#0D0D14)'};
            font-weight:${state === 'active' ? '700' : '500'};
          ">${_sanitize(s)}</div>
        </div>
        ${i < steps.length - 1 ? `<div style="flex:1;height:2px;background:${state === 'done' ? '#00B37E' : 'var(--border,#E2E4EF)'};margin-top:16px;transition:background .3s"></div>` : ''}`;
    }).join('');

    container.innerHTML = `
      <div style="
        background:var(--white,#fff);
        border:1.5px solid var(--border,#E2E4EF);
        border-radius:12px;padding:1rem 1.25rem;
        margin-bottom:.75rem;
      ">
        <div style="display:flex;align-items:flex-start;gap:0">${stepsHTML}</div>
        ${isDone ? `<div style="text-align:center;margin-top:.75rem;font-size:13px;font-weight:700;color:#087F5B">✅ Ho gaya!</div>` : ''}
        ${isError ? `<div style="text-align:center;margin-top:.75rem;font-size:13px;font-weight:700;color:#C03030">❌ Error aaya. Dobara try karein.</div>` : ''}
      </div>`;
  },

  /* ═══════════════════════════════════════════════════════════════
     ✅ FIX 4 — DARK MODE
     ═══════════════════════════════════════════════════════════════ */
  _darkMode: false,
  initDarkMode() {
    // Check saved preference
    const saved = localStorage.getItem('tn_dark');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    TN._darkMode = saved !== null ? saved === '1' : prefersDark;
    TN._applyDark(TN._darkMode);
  },
  toggleDark() {
    TN._darkMode = !TN._darkMode;
    TN._applyDark(TN._darkMode);
    localStorage.setItem('tn_dark', TN._darkMode ? '1' : '0');
    TN.track('dark_mode_toggle', { mode: TN._darkMode ? 'dark' : 'light' });
  },
  _applyDark(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    const btn = document.getElementById('tn-dark-btn');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
    if (btn) btn.title = isDark ? 'Light mode' : 'Dark mode';
  },

  /* ═══════════════════════════════════════════════════════════════
     ✅ FIX 10 — HOMEPAGE DRAG-DROP global handler
     Drop file on homepage → auto-route to correct tool
     ═══════════════════════════════════════════════════════════════ */
  initHomeDragDrop() {
    const isHome = location.pathname === '/' || location.pathname === '/index.html';
    if (!isHome) return;

    const overlay = document.createElement('div');
    overlay.id = 'tn-drop-overlay';
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:9000;
      background:rgba(245,166,35,.12);
      backdrop-filter:blur(4px);
      display:none;
      align-items:center;justify-content:center;
      flex-direction:column;gap:12px;
      pointer-events:none;
    `;
    overlay.innerHTML = `
      <div style="
        background:#fff;border-radius:20px;
        padding:2rem 3rem;text-align:center;
        box-shadow:0 8px 40px rgba(245,166,35,.4);
        border:3px solid #F5A623;
      ">
        <div style="font-size:3rem;margin-bottom:.5rem">📂</div>
        <div style="font-family:var(--f-display,'Outfit',sans-serif);font-size:20px;font-weight:800;color:#0F1B3D">
          File drop karein
        </div>
        <div style="font-size:13px;color:#8A8BA5;margin-top:.3rem">
          PDF → Merge/Compress tool<br>Image → Image Compressor
        </div>
      </div>`;
    document.body.appendChild(overlay);

    let dragCounter = 0;
    document.addEventListener('dragenter', e => {
      if (!e.dataTransfer.types.includes('Files')) return;
      dragCounter++;
      overlay.style.display = 'flex';
      overlay.style.pointerEvents = 'all';
    });
    document.addEventListener('dragleave', () => {
      dragCounter--;
      if (dragCounter <= 0) {
        dragCounter = 0;
        overlay.style.display = 'none';
        overlay.style.pointerEvents = 'none';
      }
    });
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', e => {
      e.preventDefault();
      dragCounter = 0;
      overlay.style.display = 'none';
      overlay.style.pointerEvents = 'none';

      const file = e.dataTransfer.files[0];
      if (!file) return;

      const isPDF = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
      const isImage = file.type.startsWith('image/');

      if (isPDF) {
        // Store file for target page to pick up
        TN._droppedFile = file;
        location.href = '/tools/merge-pdf.html?from=drop';
      } else if (isImage) {
        TN._droppedFile = file;
        location.href = '/tools/image-compress.html?from=drop';
      } else {
        TN.notify('PDF ya image file drop karein', 'warn');
      }
    });
  },

  /* ═══════════════════════════════════════════════════════════════
     ✅ FIX 11 — Ctrl+K SEARCH SHORTCUT
     ═══════════════════════════════════════════════════════════════ */
  initKeyboardShortcuts() {
    document.addEventListener('keydown', e => {
      // Ctrl+K or Cmd+K = focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const heroInput = document.getElementById('heroInput');
        const navSearch = document.getElementById('navSearch');
        const blogSearch = document.getElementById('blogSearchInput');
        const target = heroInput || blogSearch || navSearch;
        if (target) {
          target.focus();
          target.select();
          TN.track('keyboard_shortcut', { shortcut: 'ctrl+k' });
        }
      }
      // Escape = close dropdowns / modals
      if (e.key === 'Escape') {
        TN.closeToolsDD();
        const searchOverlay = document.getElementById('searchOverlay');
        if (searchOverlay) searchOverlay.classList.remove('open');
        const mobilePanel = document.getElementById('mobilePanel');
        if (mobilePanel) mobilePanel.classList.remove('open');
      }
    });
  },

  /* ═══════════════════════════════════════════════════════════════
     NAV INJECT
     ═══════════════════════════════════════════════════════════════ */
  injectNav() {
    const el = document.getElementById('tn-nav');
    const cur = location.pathname;
    const isTools = cur.startsWith('/tools');
    const isBlog  = cur.startsWith('/blog');
    const isAbout = cur.startsWith('/about');
    const isHome  = cur === '/' || cur === '/index.html';
    const toolCount = TN.tools.length; // FIX 12: Auto-sync count

    // Build mega menu columns
    const cats = {};
    TN.tools.forEach(t => { if (!cats[t.cat]) cats[t.cat] = []; cats[t.cat].push(t); });
    const megaCols = Object.entries(cats).map(([cat, items]) => `
      <div class="ndm-section">
        <div class="ndm-cat-label">${_sanitize(cat)}</div>
        ${items.map(t => `<a class="ndm-link" href="${t.url}">
          <span class="ndm-ico">${t.icon}</span>
          <span>${_sanitize(t.name)}</span>
          ${t.badge ? `<span class="ndm-badge badge-${t.badge.toLowerCase()}">${t.badge}</span>` : ''}
        </a>`).join('')}
      </div>`).join('');

    if (!el) return;

    // FIX 14: Skip-to-content link for accessibility
    if (!document.getElementById('tn-skip-link')) {
      const skip = document.createElement('a');
      skip.id = 'tn-skip-link';
      skip.href = '#main-content';
      skip.textContent = 'Skip to main content';
      skip.style.cssText = `
        position:fixed;top:-100%;left:16px;z-index:99999;
        background:#F5A623;color:#0F1B3D;
        padding:8px 16px;border-radius:0 0 8px 8px;
        font-weight:700;font-size:14px;text-decoration:none;
        transition:top .15s;
      `;
      skip.addEventListener('focus', () => { skip.style.top = '0'; });
      skip.addEventListener('blur',  () => { skip.style.top = '-100%'; });
      document.body.insertBefore(skip, document.body.firstChild);
    }

    el.innerHTML = `
<nav class="nav" id="mainNav" role="navigation" aria-label="Main navigation">
  <a class="nav-logo" href="/" aria-label="ToolNest - Home">
    <img src="/favicon.png" alt="ToolNest logo" width="40" height="40"
      style="border-radius:10px;object-fit:cover;box-shadow:0 2px 8px rgba(245,166,35,.4)"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div style="display:none;width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#F5A623,#FF9500);align-items:center;justify-content:center;font-size:18px;font-weight:900;color:#0F1B3D;flex-shrink:0">TN</div>
    <span class="nav-logo-text">Tool<span>Nest</span></span>
  </a>

  <div class="nav-search" role="search">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input type="text" id="navSearch" placeholder="Search ${toolCount}+ tools… (Ctrl+K)"
      oninput="TN.syncSearch(this.value)" autocomplete="off"
      aria-label="Search tools" role="searchbox">
  </div>

  <div class="nav-right">
    <a href="/" class="nav-link${isHome ? ' active' : ''}" aria-current="${isHome ? 'page' : 'false'}">Home</a>
    <div class="nav-dd-wrap" id="navDDWrap">
      <button class="nav-dd-btn${isTools ? ' active' : ''}" id="navDDBtn"
        onclick="TN.toggleToolsDD()" aria-expanded="false" aria-haspopup="true"
        aria-controls="navDDMenu">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        All Tools
        <svg class="nav-dd-caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-dd-menu" id="navDDMenu" role="menu">
        <div class="ndm-grid">${megaCols}</div>
        <div class="ndm-footer"><a href="/tools/">⚡ View All ${toolCount}+ Tools →</a></div>
      </div>
    </div>
    <a href="/blog.html" class="nav-link${isBlog ? ' active' : ''}" aria-current="${isBlog ? 'page' : 'false'}">Blog</a>
    <a href="/about.html" class="nav-link${isAbout ? ' active' : ''}" aria-current="${isAbout ? 'page' : 'false'}">About</a>
    <!-- FIX 4: Dark mode toggle button -->
    <button id="tn-dark-btn" onclick="TN.toggleDark()"
      title="Dark mode"
      aria-label="Toggle dark mode"
      style="
        width:36px;height:36px;border-radius:8px;
        background:var(--surface,#EDEEF7);
        border:1.5px solid var(--border,#E2E4EF);
        cursor:pointer;font-size:16px;
        display:flex;align-items:center;justify-content:center;
        transition:all .15s;flex-shrink:0;
      ">🌙</button>
    <button class="nav-hamburger" id="navHamburger"
      aria-label="Open menu" aria-expanded="false"
      aria-controls="mobilePanel">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile-panel" id="mobilePanel" aria-hidden="true" role="dialog" aria-label="Navigation menu">
  <div class="nmp-inner">
    <div class="nmp-search" role="search">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" id="nmpInput" placeholder="Search ${toolCount}+ tools…"
        oninput="TN._nmpSearch(this.value)" autocomplete="off" aria-label="Search tools">
    </div>
    <a class="nmp-link" href="/"><span class="nmp-ico" aria-hidden="true">🏠</span> Home</a>
    <a class="nmp-link" href="/tools/"><span class="nmp-ico" aria-hidden="true">🔧</span> All Tools</a>
    <a class="nmp-link" href="/blog.html"><span class="nmp-ico" aria-hidden="true">📚</span> Blog</a>
    <a class="nmp-link" href="/about.html"><span class="nmp-ico" aria-hidden="true">ℹ️</span> About</a>
    <div class="nmp-divider"></div>
    <div id="nmpTools"></div>
  </div>
</div>`;

    if (isTools) {
      document.getElementById('navHamburger')?.addEventListener('click', () => TN.toggleMobileSidebar());
    } else {
      TN._initMobilePanel();
    }

    document.addEventListener('click', e => {
      const w = document.getElementById('navDDWrap');
      if (w && !w.contains(e.target)) TN.closeToolsDD();
    });

    TN.track('page_view', { page_title: document.title, page_location: location.href, page_path: location.pathname });
  },

  /* ═══════════════════════════════════════════════════════════════
     ✅ FIX 8 — SIDEBAR INJECT (properly from TN.tools)
     ═══════════════════════════════════════════════════════════════ */
  injectSidebar() {
    const el = document.getElementById('tn-sidebar-list') || document.getElementById('sbList');
    if (!el) return;

    const cur = location.pathname;
    let lastCat = '', html = '';

    TN.tools.forEach(t => {
      if (t.cat !== lastCat) {
        html += `<div class="cat-lbl" role="heading" aria-level="3">${_sanitize(t.cat)}</div>`;
        lastCat = t.cat;
      }
      // Check if this is the active tool
      const isActive = cur.endsWith(t.url.split('/').pop()) || cur === t.url;
      const badge = t.badge
        ? `<span class="ti-badge badge-${t.badge.toLowerCase()}" aria-label="${t.badge}">${t.badge}</span>` : '';

      // Use <a> tag for accessibility (FIX: div+onclick → a href)
      html += `<a class="tool-item ${t.catClass}${isActive ? ' active' : ''}"
        href="${t.url}" role="menuitem"
        aria-current="${isActive ? 'page' : 'false'}">
        <div class="ti-icon" aria-hidden="true">${t.icon}</div>
        <span class="ti-name">${_sanitize(t.name)}</span>
        ${badge}
      </a>`;
    });

    el.innerHTML = html;
    TN._buildPopular();
  },

  _buildPopular() {
    const el = document.getElementById('tn-popular');
    if (!el) return;
    el.innerHTML = TN.popular.map(p =>
      `<a class="rsb-quick-item" href="${p.url}">
        <span class="rsb-quick-dot" style="background:${p.dot}" aria-hidden="true"></span>
        ${_sanitize(p.name)}
      </a>`
    ).join('');
  },

  /* ═══════════════════════════════════════════════════════════════
     FOOTER INJECT
     ═══════════════════════════════════════════════════════════════ */
  injectFooter() {
    let el = document.getElementById('tn-footer');
    if (!el) {
      el = document.createElement('div');
      el.id = 'tn-footer';
      const shell = document.querySelector('.app-shell');
      if (shell?.parentNode) shell.parentNode.insertBefore(el, shell.nextSibling);
      else document.body.appendChild(el);
    }

    const toolCount = TN.tools.length;

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
@media(max-width:900px){.tn-fi{grid-template-columns:1fr;gap:1.75rem}.tn-fc2{grid-template-columns:1fr 1fr}}
@media(max-width:500px){.tn-fc2{grid-template-columns:1fr}}
</style>
<footer class="tn-foot" role="contentinfo">
  <div class="tn-fi">
    <div>
      <a class="tn-fl" href="/" aria-label="ToolNest home">
        <img src="/favicon.png" alt="" aria-hidden="true" onerror="this.style.display='none'">
        Tool<span>Nest</span>
      </a>
      <p class="tn-ft">Free PDF &amp; online tools for India.<br>Fast, private &amp; 100% browser-based.</p>
      <div class="tn-fb">🔒 Files never leave your device</div>
      <a class="tn-femail" href="mailto:toolnest.bhaihelp.in@gmail.com">✉️ toolnest.bhaihelp.in@gmail.com</a>
      <div class="tn-social">
        <a class="tn-social-btn tn-social-wa" href="https://whatsapp.com/channel/0029Vb7nko7L7UVVfGjQWo0j" target="_blank" rel="noopener noreferrer" aria-label="Join ToolNest WhatsApp channel">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        <a class="tn-social-btn tn-social-x" href="https://twitter.com/ToolNestIn" target="_blank" rel="noopener noreferrer" aria-label="Follow ToolNest on X/Twitter">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
        <a href="/tools/" style="color:rgba(245,166,35,.7);font-weight:600">⚡ All ${toolCount}+ Tools →</a>
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
    <span>All ${toolCount}+ tools are free, forever.</span>
  </div>
</footer>`;
  },

  /* ═══ NAV CSS ═══════════════════════════════════════════════════ */
  _injectNavCSS() {
    if (document.getElementById('tn-nav-css')) return;
    const s = document.createElement('style');
    s.id = 'tn-nav-css';
    s.textContent = `
/* ─ FIX 13: Shared animations ─ */
@keyframes tnFadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes tnSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

/* ─ Nav base ─ */
.nav-logo-text{font-family:'Outfit',sans-serif;font-weight:800;font-size:20px;color:var(--ink,#0D0D14)}
.nav-logo-text span{color:var(--gold,#F5A623)}
.nav-link{
  padding:8px 12px;border-radius:8px;
  font-size:13.5px;font-weight:500;
  color:var(--ink2,#44455A);
  transition:all .15s;white-space:nowrap;
  text-decoration:none;display:inline-flex;align-items:center;gap:5px;
  min-height:44px; /* FIX 15: Touch target */
}
.nav-link:hover,.nav-link.active{background:var(--surface,#EDEEF7);color:var(--ink,#0D0D14)}
.nav-link.active{color:var(--gold-d,#D4891A);font-weight:700}

/* ─ Tools dropdown ─ */
.nav-dd-wrap{position:relative}
.nav-dd-btn{
  display:flex;align-items:center;gap:6px;
  padding:8px 12px;border-radius:8px;
  font-size:13.5px;font-weight:500;color:var(--ink2,#44455A);
  background:transparent;border:none;cursor:pointer;font-family:inherit;
  transition:all .15s;white-space:nowrap;min-height:44px;
}
.nav-dd-btn:hover,.nav-dd-btn.active{background:var(--surface,#EDEEF7);color:var(--ink,#0D0D14)}
.nav-dd-btn.active{color:var(--gold-d,#D4891A);font-weight:700}
.nav-dd-caret{transition:transform .2s;flex-shrink:0}
.nav-dd-wrap.open .nav-dd-caret{transform:rotate(180deg)}
.nav-dd-menu{
  position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%);
  background:var(--white,#fff);border:1.5px solid var(--border,#E2E4EF);
  border-radius:18px;box-shadow:0 8px 32px rgba(13,13,20,.13);
  padding:.75rem;display:none;z-index:3000;
  min-width:860px;max-width:96vw;
}
.nav-dd-wrap.open .nav-dd-menu{display:block;animation:tnFadeUp .2s ease}
.ndm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.25rem}
.ndm-cat-label{font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.8px;color:var(--ink3,#8A8BA5);padding:.5rem .5rem .3rem;border-bottom:1px solid var(--border,#E2E4EF);margin-bottom:.25rem}
.ndm-link{
  display:flex;align-items:center;gap:6px;padding:5px 7px;
  border-radius:8px;font-size:12px;font-weight:600;
  color:var(--ink2,#44455A);text-decoration:none;
  transition:all .15s;white-space:nowrap;
}
.ndm-link:hover{background:var(--gold-l,#FEF3DC);color:var(--gold-d,#D4891A)}
.ndm-ico{font-size:13px;flex-shrink:0}
.ndm-badge{font-size:7.5px;font-weight:800;padding:1px 5px;border-radius:999px;text-transform:uppercase;flex-shrink:0}
.ndm-badge.badge-hot{background:#FFE8D6;color:#B85000}
.ndm-badge.badge-new{background:#D3F9D8;color:#00612A}
.ndm-footer{border-top:1px solid var(--border,#E2E4EF);margin-top:.6rem;padding-top:.6rem;text-align:center}
.ndm-footer a{font-size:13px;font-weight:600;color:var(--gold-d,#D4891A);text-decoration:none}
.ndm-footer a:hover{color:var(--gold,#F5A623)}

/* ─ Mobile ─ */
.nav-hamburger{
  display:none;width:44px;height:44px;
  border-radius:8px;background:var(--surface,#EDEEF7);
  border:1.5px solid var(--border,#E2E4EF);
  flex-direction:column;align-items:center;justify-content:center;
  gap:4px;cursor:pointer;flex-shrink:0;
}
.nav-hamburger span{display:block;width:17px;height:1.5px;background:var(--ink,#0D0D14);border-radius:2px;transition:all .25s}
.nav-hamburger.open span:nth-child(1){transform:rotate(45deg) translate(4px,4px)}
.nav-hamburger.open span:nth-child(2){opacity:0}
.nav-hamburger.open span:nth-child(3){transform:rotate(-45deg) translate(4px,-4px)}
.nav-mobile-panel{
  position:fixed;top:var(--nav-h,64px);left:0;right:0;
  background:var(--white,#fff);border-bottom:1px solid var(--border,#E2E4EF);
  box-shadow:0 8px 32px rgba(13,13,20,.13);z-index:900;
  padding:1rem 1.25rem 1.5rem;
  display:none;flex-direction:column;gap:4px;
  max-height:calc(100vh - 64px);overflow-y:auto;
}
.nav-mobile-panel.open{display:flex}
.nmp-search{
  display:flex;align-items:center;gap:8px;
  background:var(--surface,#EDEEF7);
  border:1.5px solid var(--border,#E2E4EF);
  border-radius:999px;padding:0 14px;height:44px;margin-bottom:.75rem;
}
.nmp-search svg{color:#8A8BA5;flex-shrink:0}
.nmp-search input{flex:1;border:none;background:transparent;outline:none;font-size:13px;color:var(--ink,#0D0D14)}
.nmp-link{
  display:flex;align-items:center;gap:8px;
  padding:10px 10px;border-radius:8px;
  font-size:13.5px;font-weight:500;
  color:var(--ink2,#44455A);text-decoration:none;
  transition:all .15s;min-height:44px;
}
.nmp-link:hover{background:var(--gold-l,#FEF3DC);color:var(--gold-d,#D4891A)}
.nmp-ico{width:24px;text-align:center;flex-shrink:0}
.nmp-divider{height:1px;background:var(--border,#E2E4EF);margin:.5rem 0}
.nmp-cat-lbl{font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--ink3,#8A8BA5);padding:.4rem .5rem;margin-top:.25rem}

/* ─ Sidebar tool items — FIX 8: a tag instead of div ─ */
.tool-item{
  display:flex;align-items:center;gap:9px;
  padding:7px 9px;border-radius:9px;
  font-size:13px;font-weight:500;color:var(--ink2,#44455A);
  cursor:pointer;transition:all .15s;margin-bottom:1px;
  text-decoration:none;
}
.tool-item:hover{background:var(--surface,#EDEEF7);color:var(--ink,#0D0D14)}
.ti-icon{width:28px;height:28px;border-radius:7px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px}
.ti-name{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ti-badge{font-size:8.5px;font-weight:700;padding:2px 6px;border-radius:999px;text-transform:uppercase;letter-spacing:.3px;flex-shrink:0}
.badge-hot{background:#FFE8D6;color:#B85000}
.badge-new{background:#D3F9D8;color:#00612A}

/* Category color pairs */
.cat-image .ti-icon{background:var(--c-image-l,#FCE4F0);color:var(--c-image,#E91E8C)}
.cat-image.active,.cat-image:hover{background:var(--c-image-l,#FCE4F0)!important}
.cat-image.active .ti-icon{background:var(--c-image,#E91E8C);color:#fff}
.cat-image.active{color:var(--c-image,#E91E8C)!important;font-weight:700}
.cat-compress .ti-icon{background:var(--c-compress-l,#FFF0EB);color:var(--c-compress,#F5620A)}
.cat-compress.active,.cat-compress:hover{background:var(--c-compress-l,#FFF0EB)!important}
.cat-compress.active .ti-icon{background:var(--c-compress,#F5620A);color:#fff}
.cat-compress.active{color:var(--c-compress,#F5620A)!important;font-weight:700}
.cat-organize .ti-icon{background:var(--c-organize-l,#E6FAF4);color:var(--c-organize,#00B37E)}
.cat-organize.active,.cat-organize:hover{background:var(--c-organize-l,#E6FAF4)!important}
.cat-organize.active .ti-icon{background:var(--c-organize,#00B37E);color:#fff}
.cat-organize.active{color:var(--c-organize,#00B37E)!important;font-weight:700}
.cat-edit .ti-icon{background:var(--c-edit-l,#F2EDFF);color:var(--c-edit,#6C3FC4)}
.cat-edit.active,.cat-edit:hover{background:var(--c-edit-l,#F2EDFF)!important}
.cat-edit.active .ti-icon{background:var(--c-edit,#6C3FC4);color:#fff}
.cat-edit.active{color:var(--c-edit,#6C3FC4)!important;font-weight:700}
.cat-convert .ti-icon{background:var(--c-convert-l,#EEF3FF);color:var(--c-convert,#1E4FCB)}
.cat-convert.active,.cat-convert:hover{background:var(--c-convert-l,#EEF3FF)!important}
.cat-convert.active .ti-icon{background:var(--c-convert,#1E4FCB);color:#fff}
.cat-convert.active{color:var(--c-convert,#1E4FCB)!important;font-weight:700}
.cat-prod .ti-icon{background:var(--c-prod-l,#FFF8E6);color:var(--c-prod,#E88B00)}
.cat-prod.active,.cat-prod:hover{background:var(--c-prod-l,#FFF8E6)!important}
.cat-prod.active .ti-icon{background:var(--c-prod,#E88B00);color:#fff}
.cat-prod.active{color:var(--c-prod,#E88B00)!important;font-weight:700}
.cat-biz .ti-icon{background:var(--c-biz-l,#E8F8FD);color:var(--c-biz,#0891B2)}
.cat-biz.active,.cat-biz:hover{background:var(--c-biz-l,#E8F8FD)!important}
.cat-biz.active .ti-icon{background:var(--c-biz,#0891B2);color:#fff}
.cat-biz.active{color:var(--c-biz,#0891B2)!important;font-weight:700}
.cat-calc .ti-icon{background:#D1FAE5;color:#059669}
.cat-calc.active,.cat-calc:hover{background:#D1FAE5!important}
.cat-calc.active .ti-icon{background:#059669;color:#fff}
.cat-calc.active{color:#059669!important;font-weight:700}

/* ─ rsb quick items use <a> now ─ */
.rsb-quick-item{
  display:flex;align-items:center;gap:7px;
  padding:8px 7px;border-radius:8px;
  font-size:12px;font-weight:500;color:var(--ink2,#44455A);
  cursor:pointer;transition:all .15s;text-decoration:none;
  min-height:44px;
}
.rsb-quick-item:hover{background:var(--gold-l,#FEF3DC);color:var(--gold-d,#D4891A)}

/* ─ FIX 13: Optimized font loading reminder ─ */
/* Add to <head>: ?family=Outfit:wght@400;600;800&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap */

@media(max-width:1200px){.nav-dd-menu{min-width:680px}}
@media(max-width:820px){
  .nav-hamburger{display:flex}
  .nav-search,.nav-link,.nav-dd-wrap{display:none}
  .nav-dd-menu{display:none!important}
}`;
    document.head.appendChild(s);
  },

  /* ═══ SEARCH ════════════════════════════════════════════════════ */
  syncSearch(v) {
    const sb = document.getElementById('sbSearch');
    if (sb) sb.value = v;
    TN.filterSidebar(v);
  },
  filterSidebar(q) {
    const s = (q || '').toLowerCase().trim();
    document.querySelectorAll('#tn-sidebar-list .tool-item, #sbList .tool-item').forEach(item => {
      const name = (item.querySelector('.ti-name')?.textContent || '').toLowerCase();
      item.style.display = (!s || name.includes(s)) ? '' : 'none';
    });
    document.querySelectorAll('#tn-sidebar-list .cat-lbl, #sbList .cat-lbl').forEach(lbl => {
      let el = lbl.nextElementSibling, any = false;
      while (el && el.classList.contains('tool-item')) {
        if (el.style.display !== 'none') any = true;
        el = el.nextElementSibling;
      }
      lbl.style.display = any ? '' : 'none';
    });
  },

  /* ═══ SIDEBAR TOGGLE ════════════════════════════════════════════ */
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
    const sb = document.getElementById('leftSidebar');
    const ov = document.getElementById('mobileOverlay');
    const hm = document.getElementById('hamburger') || document.getElementById('navHamburger');
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

  /* ═══ DROPDOWN ══════════════════════════════════════════════════ */
  toggleToolsDD() {
    const w = document.getElementById('navDDWrap');
    const b = document.getElementById('navDDBtn');
    if (!w) return;
    const o = w.classList.toggle('open');
    if (b) b.setAttribute('aria-expanded', String(o));
  },
  closeToolsDD() {
    const w = document.getElementById('navDDWrap');
    if (w) w.classList.remove('open');
    const b = document.getElementById('navDDBtn');
    if (b) b.setAttribute('aria-expanded', 'false');
  },

  /* ═══ MOBILE PANEL ══════════════════════════════════════════════ */
  _initMobilePanel() {
    const wrap = document.getElementById('nmpTools');
    if (!wrap) return;

    let lastCat = '', html = '';
    TN.tools.forEach(t => {
      if (t.cat !== lastCat) {
        if (lastCat) html += '<div class="nmp-divider"></div>';
        html += `<div class="nmp-cat-lbl" role="heading" aria-level="4">${_sanitize(t.cat)}</div>`;
        lastCat = t.cat;
      }
      const badge = t.badge ? ` <span style="font-size:8px;font-weight:800;padding:1px 4px;border-radius:4px;background:${t.badge === 'HOT' ? '#FFE8D6' : '#D3F9D8'};color:${t.badge === 'HOT' ? '#B85000' : '#00612A'}">${t.badge}</span>` : '';
      html += `<a class="nmp-link nmp-tool-link" href="${t.url}" data-name="${t.name.toLowerCase()}" data-cat="${t.cat.toLowerCase()}">
        <span class="nmp-ico" aria-hidden="true">${t.icon}</span>
        <span>${_sanitize(t.name)}${badge}</span>
      </a>`;
    });
    wrap.innerHTML = html;

    const navHm = document.getElementById('navHamburger');
    const panel = document.getElementById('mobilePanel');
    if (navHm && panel) {
      navHm.addEventListener('click', () => {
        const open = navHm.classList.toggle('open');
        panel.classList.toggle('open', open);
        navHm.setAttribute('aria-expanded', String(open));
        panel.setAttribute('aria-hidden', String(!open));
      });
      document.addEventListener('click', e => {
        if (!navHm.contains(e.target) && !panel.contains(e.target)) {
          navHm.classList.remove('open');
          panel.classList.remove('open');
          panel.setAttribute('aria-hidden', 'true');
        }
      });
    }
  },
  _nmpSearch(q) {
    const s = (q || '').toLowerCase().trim();
    const wrap = document.getElementById('nmpTools');
    if (!wrap) return;
    wrap.querySelectorAll('.nmp-tool-link').forEach(a => {
      a.style.display = (!s || a.dataset.name.includes(s) || a.dataset.cat.includes(s)) ? '' : 'none';
    });
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

  /* ═══ SHARE ═════════════════════════════════════════════════════ */
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

  /* ═══ GA4 TRACK ═════════════════════════════════════════════════ */
  track(eventName, params) {
    if (typeof window.gtag === 'function') window.gtag('event', eventName, params || {});
    try {
      const key = 'tn_events';
      const events = JSON.parse(localStorage.getItem(key) || '[]');
      events.push({ e: eventName, p: params, t: Date.now() });
      if (events.length > 500) events.splice(0, events.length - 500);
      localStorage.setItem(key, JSON.stringify(events));
    } catch (e) { /* silent */ }
  },

  /* ═══ UI HELPERS ════════════════════════════════════════════════ */
  showError(message, containerIdOrEl, autoDismissMs) {
    const el = typeof containerIdOrEl === 'string' ? document.getElementById(containerIdOrEl) : containerIdOrEl;
    if (!el) return;
    el.innerHTML = `<span>⚠️ ${_sanitize(message)}</span>`;
    el.style.cssText = 'display:block;background:var(--red-l,#FFF0F0);border:1.5px solid rgba(229,62,62,.2);border-radius:12px;padding:.85rem 1.1rem;font-size:13px;color:#C03030;margin-top:.65rem';
    if (autoDismissMs) setTimeout(() => { if (el) el.style.display = 'none'; }, autoDismissMs);
  },
  showSuccess(message, containerIdOrEl, autoDismissMs) {
    const el = typeof containerIdOrEl === 'string' ? document.getElementById(containerIdOrEl) : containerIdOrEl;
    if (!el) return;
    el.innerHTML = `<span>✅ ${_sanitize(message)}</span>`;
    el.style.cssText = 'display:block;background:var(--green-l,#E6FAF4);border:1.5px solid rgba(0,179,126,.2);border-radius:12px;padding:.85rem 1.1rem;font-size:13px;color:#087F5B;margin-top:.65rem';
    if (autoDismissMs) setTimeout(() => { if (el) el.style.display = 'none'; }, autoDismissMs);
  },
  hideMessage(containerIdOrEl) {
    const el = typeof containerIdOrEl === 'string' ? document.getElementById(containerIdOrEl) : containerIdOrEl;
    if (el) el.style.display = 'none';
  },
  notify(message, type, durationMs) {
    type = type || 'info';
    durationMs = durationMs || 3500;
    let wrap = document.getElementById('tn-toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'tn-toast-wrap';
      wrap.setAttribute('role', 'status');
      wrap.setAttribute('aria-live', 'polite');
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
    toast.setAttribute('role', 'alert');
    toast.style.cssText = `${colors[type] || colors.info};border:1.5px solid;border-radius:12px;padding:10px 14px;font-size:13px;font-weight:600;font-family:var(--f-body,'Plus Jakarta Sans',sans-serif);box-shadow:0 4px 16px rgba(13,13,20,.12);pointer-events:auto;max-width:280px;animation:tnFadeUp .2s ease`;
    toast.textContent = (icons[type] || 'ℹ️') + ' ' + message;
    wrap.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all .3s';
      setTimeout(() => wrap.contains(toast) && wrap.removeChild(toast), 300);
    }, durationMs);
  },

  /* ═══ STATE ═════════════════════════════════════════════════════ */
  saveState(toolKey, data) {
    try { localStorage.setItem('tn_state_' + toolKey, JSON.stringify({ d: data, ts: Date.now() })); } catch (e) {}
  },
  loadState(toolKey, maxAgeMs) {
    try {
      const raw = localStorage.getItem('tn_state_' + toolKey);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      // Type validation
      if (!obj || typeof obj !== 'object' || !('d' in obj)) return null;
      if (maxAgeMs && (Date.now() - obj.ts) > maxAgeMs) return null;
      return obj.d;
    } catch (e) { return null; }
  },
  clearState(toolKey) {
    try { localStorage.removeItem('tn_state_' + toolKey); } catch (e) {}
  },

  /* ═══ META INJECT ════════════════════════════════════════════════ */
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

  /* ═══ INTERNAL UTILS ════════════════════════════════════════════ */
  _fmtSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  },

  /* ═══ INIT ═══════════════════════════════════════════════════════ */
  init() {
    TN._injectNavCSS();
    TN.initDarkMode();           // FIX 4: Dark mode
    TN.injectNav();
    TN.injectSidebar();          // FIX 8: Proper sidebar from TN.tools
    TN.injectFooter();
    TN._injectMeta();
    TN.initKeyboardShortcuts();  // FIX 11: Ctrl+K
    TN.initHomeDragDrop();       // FIX 10: Homepage drag-drop

    // Global go() shorthand
    if (typeof window.go !== 'function') {
      window.go = url => { location.href = url; };
    }
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => TN.init());
} else {
  TN.init();
}
