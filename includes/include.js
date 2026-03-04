// =====================================================
// TOOLNEST - include.js
// PROFESSIONAL DESIGN - Navy + Teal + Gold
// Matches style-PROFESSIONAL.css
// =====================================================

(function() {
  'use strict';
  
  console.log('🚀 ToolNest initializing...');
  
  // ============================================
  // STEP 1: INJECT HEADER
  // ============================================
  console.log('📝 Step 1: Injecting header...');
  
  const headerHTML = `
    <div class="topbar">
      <a href="/index.html" class="logo">
        <span>🎯</span> ToolNest
      </a>
      
      <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
        <span class="hamburger">☰</span>
      </button>
      
      <nav class="nav-right" id="navRight">
        <a href="/index.html" class="nav-link">Home</a>
        
        <div class="dropdown" id="toolsDropdownContainer">
          <button class="dropbtn" id="toolsDropdown" type="button" aria-label="Tools menu" aria-expanded="false">Tools ▼</button>
          <div class="dropdown-content" id="toolsDropdownContent">
            <!-- PDF TOOLS -->
            <div class="dropdown-section">
              <div class="dropdown-category">📄 Document Tools</div>
              <a href="/tools/merge-pdf.html" class="dropdown-link" data-tool="Merge PDF">Merge PDF Files</a>
              <a href="/tools/pdf-to-jpg.html" class="dropdown-link" data-tool="PDF to JPG">PDF to JPG</a>
              <a href="/tools/jpg-to-pdf.html" class="dropdown-link" data-tool="JPG to PDF">JPG to PDF</a>
            </div>
            
            <!-- IMAGE TOOLS -->
            <div class="dropdown-section">
              <div class="dropdown-category">🖼️ Media Tools</div>
              <a href="/tools/image-compress.html" class="dropdown-link" data-tool="Image Compressor">Image Compressor</a>
              <a href="/tools/youtube-downloader.html" class="dropdown-link" data-tool="YouTube Downloader">YouTube Downloader</a>
            </div>
            
            <!-- PRODUCTIVITY TOOLS -->
            <div class="dropdown-section">
              <div class="dropdown-category">⚡ Productivity</div>
              <a href="/tools/qr-code-generator.html" class="dropdown-link" data-tool="QR Code Generator">QR Code Generator</a>
              <a href="/tools/password-generator.html" class="dropdown-link" data-tool="Password Generator">Password Generator</a>
              <a href="/tools/word-counter.html" class="dropdown-link" data-tool="Word Counter">Word Counter</a>
              <a href="/tools/json-formatter.html" class="dropdown-link" data-tool="JSON Formatter">JSON Formatter</a>
              <a href="/tools/base64-encoder.html" class="dropdown-link" data-tool="Base64 Encoder">Base64 Encoder</a>
            </div>
            
            <!-- BUSINESS TOOLS -->
            <div class="dropdown-section">
              <div class="dropdown-category">💼 Business</div>
              <a href="/tools/invoice-generator.html" class="dropdown-link" data-tool="Invoice Generator">Invoice Generator</a>
              <a href="/tools/seo-generator.html" class="dropdown-link" data-tool="SEO Generator">SEO Meta Tags</a>
            </div>
          </div>
        </div>
        
        <a href="/blog.html" class="nav-link">Blog</a>
        <a href="/about.html" class="nav-link">About</a>
        <a href="/contact.html" class="nav-link">Contact</a>
        
        <button id="darkToggle" type="button" aria-label="Toggle dark mode" style="margin-left: auto;">🌙</button>
      </nav>
      
      <div class="mobile-overlay" id="mobileOverlay"></div>
    </div>
  `;
  
  try {
    const headerElement = document.getElementById('header');
    if (headerElement) {
      headerElement.innerHTML = headerHTML;
      console.log('✅ Header injected successfully');
    } else {
      throw new Error('header element with id="header" not found in HTML');
    }
  } catch (error) {
    console.error('❌ Header injection failed:', error);
  }
  
  // ============================================
  // STEP 2: INJECT FOOTER
  // ============================================
  console.log('📝 Step 2: Injecting footer...');
  
  const footerHTML = `
    <footer>
      <div class="container" style="text-align: center; padding: 40px 20px;">
        <p style="margin-bottom: 20px;">
          © 2024 ToolNest. Free professional online tools for everyone. Made with ❤️
        </p>
        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px;">
          <a href="/about.html" style="font-weight: 600;">About</a>
          <a href="/contact.html" style="font-weight: 600;">Contact</a>
          <a href="/blog.html" style="font-weight: 600;">Blog</a>
          <a href="/privacy.html" style="font-weight: 600;">Privacy</a>
          <a href="/terms.html" style="font-weight: 600;">Terms</a>
        </div>
        <p style="font-size: 13px;">
          All tools are 100% free, no registration required, and process securely on your device.
        </p>
      </div>
    </footer>
  `;
  
  try {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.innerHTML = footerHTML;
      console.log('✅ Footer injected successfully');
    } else {
      throw new Error('footer element with id="footer" not found in HTML');
    }
  } catch (error) {
    console.error('❌ Footer injection failed:', error);
  }
  
  // ============================================
  // STEP 3: INITIALIZE COMPONENTS
  // ============================================
  console.log('⏳ Initializing all components...');
  
  function initializeAllComponents() {
    initializeElements();
    initializeMobileMenu();
    initializeDropdown();
    initializeDarkMode();
    initializeSmoothScroll();
    initializeKeyboardAccessibility();
    
    console.log('✅ All components initialized');
    console.log('🎉 ToolNest ready!');
  }
  
  // Element verification
  function initializeElements() {
    console.log('✓ Verifying elements...');
    const elements = {
      'header': 'header',
      'footer': 'footer',
      'mobileMenuToggle': 'mobileMenuToggle',
      'navRight': 'navRight',
      'mobileOverlay': 'mobileOverlay',
      'toolsDropdown': 'toolsDropdown',
      'toolsDropdownContent': 'toolsDropdownContent',
      'darkToggle': 'darkToggle'
    };
    
    for (let [name, id] of Object.entries(elements)) {
      const el = document.getElementById(id);
      console.log(`  ${el ? '✅' : '⚠️'} ${name}`);
    }
  }
  
  // Mobile menu
  function initializeMobileMenu() {
    console.log('⚙️ Initializing mobile menu...');
    
    const toggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('navRight');
    const overlay = document.getElementById('mobileOverlay');
    
    if (!toggle) return;
    
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
      toggle.classList.toggle('active');
      
      console.log('📱 Menu toggled');
    });
    
    if (overlay) {
      overlay.addEventListener('click', function() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        toggle.classList.remove('active');
      });
    }
    
    nav.querySelectorAll('a.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
    
    console.log('✅ Mobile menu ready');
  }
  
  // Dropdown
  function initializeDropdown() {
    console.log('⚙️ Initializing dropdown...');
    
    const btn = document.getElementById('toolsDropdown');
    const content = document.getElementById('toolsDropdownContent');
    const container = document.getElementById('toolsDropdownContainer');
    
    if (!btn || !content) return;
    
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const isOpen = content.classList.toggle('show');
      btn.setAttribute('aria-expanded', isOpen);
      
      console.log(`🔽 Dropdown ${isOpen ? 'opened' : 'closed'}`);
    });
    
    document.addEventListener('click', function(e) {
      if (!container.contains(e.target)) {
        content.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    
    content.querySelectorAll('a.dropdown-link').forEach(link => {
      link.addEventListener('click', function(e) {
        const tool = this.getAttribute('data-tool') || this.textContent;
        console.log(`🔽 Tool clicked: ${tool}`);
        
        setTimeout(() => {
          content.classList.remove('show');
          btn.setAttribute('aria-expanded', 'false');
        }, 100);
        
        const nav = document.getElementById('navRight');
        const overlay = document.getElementById('mobileOverlay');
        const toggle = document.getElementById('mobileMenuToggle');
        
        if (nav.classList.contains('active')) {
          setTimeout(() => {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            toggle.classList.remove('active');
          }, 100);
        }
      });
    });
    
    console.log('✅ Dropdown ready');
  }
  
  // Dark mode
  function initializeDarkMode() {
    console.log('⚙️ Initializing dark mode...');
    
    const toggle = document.getElementById('darkToggle');
    if (!toggle) return;
    
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
      document.documentElement.classList.add('dark');
      toggle.textContent = '☀️';
    } else {
      toggle.textContent = '🌙';
    }
    
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const html = document.documentElement;
      const isDarkNow = html.classList.toggle('dark');
      
      localStorage.setItem('darkMode', isDarkNow);
      toggle.textContent = isDarkNow ? '☀️' : '🌙';
      
      console.log(`🌓 Dark mode: ${isDarkNow ? 'ON' : 'OFF'}`);
    });
    
    if (window.matchMedia && !localStorage.getItem('darkMode')) {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      if (query.matches) {
        document.documentElement.classList.add('dark');
        toggle.textContent = '☀️';
      }
    }
    
    console.log('✅ Dark mode ready');
  }
  
  // Smooth scroll
  function initializeSmoothScroll() {
    console.log('⚙️ Initializing smooth scroll...');
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
    
    console.log('✅ Smooth scroll ready');
  }
  
  // Keyboard support
  function initializeKeyboardAccessibility() {
    console.log('⚙️ Initializing keyboard support...');
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const content = document.getElementById('toolsDropdownContent');
        const btn = document.getElementById('toolsDropdown');
        
        if (content && content.classList.contains('show')) {
          content.classList.remove('show');
          btn.setAttribute('aria-expanded', 'false');
          console.log('⌨️ ESC: Dropdown closed');
        }
      }
    });
    
    console.log('✅ Keyboard support ready');
  }
  
  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAllComponents);
  } else {
    setTimeout(initializeAllComponents, 100);
  }
  
})();
