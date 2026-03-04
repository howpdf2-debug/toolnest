// =====================================================
// TOOLNEST - include.js
// MERGED & COMPLETE FIXED VERSION
// Combines best of both approaches + proper tools dropdown
// =====================================================

(function() {
  'use strict';
  
  console.log('🚀 ToolNest initializing...');
  
  // ============================================
  // CONFIGURATION
  // ============================================
  const CONFIG = {
    useInlineHTML: true,  // Use inline HTML instead of fetch
    debugMode: true,      // Set to false in production
  };
  
  // ============================================
  // HEADER INJECTION (Inline HTML)
  // ============================================
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
        
        <div class="dropdown">
          <button class="dropbtn" id="toolsDropdown" aria-label="Tools menu" aria-expanded="false">Tools ▼</button>
          <div class="dropdown-content" id="toolsDropdownContent">
            <!-- PDF TOOLS -->
            <div class="dropdown-section">
              <h4 style="padding: 8px 16px; margin: 10px 0 0 0; font-size: 12px; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">📄 PDF Tools</h4>
              <a href="/pdf-merger/">PDF Merger</a>
              <a href="/pdf-to-jpg/">PDF to JPG</a>
              <a href="/pdf-compressor/">PDF Compressor</a>
              <a href="/jpg-to-pdf/">JPG to PDF</a>
            </div>
            
            <!-- IMAGE TOOLS -->
            <div class="dropdown-section">
              <h4 style="padding: 8px 16px; margin: 10px 0 0 0; font-size: 12px; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">🖼️ Image Tools</h4>
              <a href="/image-compressor/">Image Compressor</a>
              <a href="/image-converter/">Image Converter</a>
              <a href="/image-resizer/">Image Resizer</a>
            </div>
            
            <!-- BUSINESS TOOLS -->
            <div class="dropdown-section">
              <h4 style="padding: 8px 16px; margin: 10px 0 0 0; font-size: 12px; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">💼 Business Tools</h4>
              <a href="/invoice-generator/">Invoice Generator</a>
              <a href="/gst-invoice/">GST Invoice</a>
              <a href="/resume-builder/">Resume Builder</a>
            </div>
            
            <!-- PRODUCTIVITY TOOLS -->
            <div class="dropdown-section">
              <h4 style="padding: 8px 16px; margin: 10px 0 0 0; font-size: 12px; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">⚡ Productivity Tools</h4>
              <a href="/qr-code-generator/">QR Code Generator</a>
              <a href="/password-generator/">Password Generator</a>
              <a href="/word-counter/">Word Counter</a>
              <a href="/base64-encoder/">Base64 Encoder</a>
              <a href="/json-formatter/">JSON Formatter</a>
            </div>
          </div>
        </div>
        
        <a href="/blog.html" class="nav-link">Blog</a>
        <a href="/about.html" class="nav-link">About</a>
        <a href="/contact.html" class="nav-link">Contact</a>
        
        <button id="darkToggle" aria-label="Toggle dark mode" style="margin-left: auto;">🌙</button>
      </nav>
      
      <div class="mobile-overlay" id="mobileOverlay"></div>
    </div>
  `;
  
  const headerElement = document.getElementById('header');
  if (headerElement) {
    headerElement.innerHTML = headerHTML;
    log('✅ Header injected successfully');
  } else {
    error('❌ Header element not found - add <div id="header"></div> to HTML');
  }
  
  // ============================================
  // FOOTER INJECTION (Inline HTML)
  // ============================================
  const footerHTML = `
    <footer>
      <div class="container" style="text-align: center; padding: 40px 20px;">
        <p style="margin-bottom: 20px; color: var(--text-muted);">
          © 2026 ToolNest. Free online tools for everyone. Made with ❤️
        </p>
        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px;">
          <a href="/about.html" style="color: var(--blue); font-weight: 500;">About</a>
          <a href="/contact.html" style="color: var(--blue); font-weight: 500;">Contact</a>
          <a href="/privacy-policy.html" style="color: var(--blue); font-weight: 500;">Privacy</a>
          <a href="/terms.html" style="color: var(--blue); font-weight: 500;">Terms</a>
          <a href="/disclaimer.html" style="color: var(--blue); font-weight: 500;">Disclaimer</a>
        </div>
        <p style="font-size: 12px; color: var(--text-muted);">
          All tools are 100% free, no signup required, and process locally in your browser.
        </p>
      </div>
    </footer>
  `;
  
  const footerElement = document.getElementById('footer');
  if (footerElement) {
    footerElement.innerHTML = footerHTML;
    log('✅ Footer injected successfully');
  } else {
    error('❌ Footer element not found - add <div id="footer"></div> to HTML');
  }
  
  // ============================================
  // INITIALIZE ALL COMPONENTS
  // ============================================
  document.addEventListener('DOMContentLoaded', function() {
    log('🔧 Initializing components...');
    
    initializeMobileMenu();
    initializeDropdown();
    initializeDarkMode();
    initializeSmoothScroll();
    initializeKeyboardAccessibility();
    
    log('✅ All components initialized');
  });
  
  // ============================================
  // MOBILE MENU INITIALIZATION
  // ============================================
  function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navRight = document.getElementById('navRight');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    if (!mobileMenuToggle || !navRight) {
      error('❌ Mobile menu elements not found');
      return;
    }
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navRight.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
      log('📱 Mobile menu toggled');
    });
    
    // Close menu when clicking overlay
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', function() {
        navRight.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        log('📱 Mobile menu closed (overlay)');
      });
    }
    
    // Close menu when clicking any link
    navRight.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navRight.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        log('📱 Mobile menu closed (link click)');
      });
    });
    
    log('✅ Mobile menu initialized');
  }
  
  // ============================================
  // DROPDOWN INITIALIZATION (FIXED)
  // ============================================
  function initializeDropdown() {
    const dropdownBtn = document.getElementById('toolsDropdown');
    const dropdownContent = document.getElementById('toolsDropdownContent');
    
    if (!dropdownBtn || !dropdownContent) {
      error('❌ Dropdown elements not found (IDs: toolsDropdown, toolsDropdownContent)');
      return;
    }
    
    // FIX #1: Dropdown toggle on button click
    dropdownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = dropdownContent.classList.toggle('show');
      dropdownBtn.setAttribute('aria-expanded', isExpanded);
      log(`🔽 Dropdown toggled: ${isExpanded ? 'OPEN' : 'CLOSED'}`);
    });
    
    // FIX #2: Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        dropdownContent.classList.remove('show');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
    
    // FIX #3: Close dropdown when clicking a link inside it
    dropdownContent.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        dropdownContent.classList.remove('show');
        dropdownBtn.setAttribute('aria-expanded', 'false');
        log('🔽 Dropdown closed (link click)');
      });
    });
    
    // FIX #4: Close dropdown when clicking dropdown button again
    dropdownBtn.addEventListener('click', function(e) {
      const isExpanded = dropdownContent.classList.contains('show');
      if (isExpanded) {
        dropdownContent.classList.remove('show');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
    
    log('✅ Dropdown initialized');
  }
  
  // ============================================
  // DARK MODE INITIALIZATION
  // ============================================
  function initializeDarkMode() {
    const darkToggle = document.getElementById('darkToggle');
    
    if (!darkToggle) {
      error('❌ Dark toggle button not found (ID: darkToggle)');
      return;
    }
    
    // Check if dark mode preference exists
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      darkToggle.textContent = '☀️';
      log('🌙 Dark mode loaded from storage');
    } else {
      darkToggle.textContent = '🌙';
    }
    
    // Toggle dark mode on button click
    darkToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const html = document.documentElement;
      const isDark = html.classList.toggle('dark');
      
      // FIX #5: Save to localStorage
      localStorage.setItem('darkMode', isDark);
      
      // Update button emoji
      darkToggle.textContent = isDark ? '☀️' : '🌙';
      
      log(`🌓 Dark mode: ${isDark ? 'ON' : 'OFF'} (saved to storage)`);
    });
    
    // FIX #6: Respect system dark mode preference
    if (window.matchMedia && localStorage.getItem('darkMode') === null) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      if (darkModeQuery.matches) {
        document.documentElement.classList.add('dark');
        darkToggle.textContent = '☀️';
        log('🌙 System dark mode detected');
      }
      
      darkModeQuery.addListener(e => {
        if (e.matches) {
          document.documentElement.classList.add('dark');
          darkToggle.textContent = '☀️';
        } else {
          document.documentElement.classList.remove('dark');
          darkToggle.textContent = '🌙';
        }
      });
    }
    
    log('✅ Dark mode initialized');
  }
  
  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            log(`⬇️ Scrolling to ${href}`);
          }
        }
      });
    });
  }
  
  // ============================================
  // KEYBOARD ACCESSIBILITY
  // ============================================
  function initializeKeyboardAccessibility() {
    // FIX #7: Close dropdown with ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const dropdownContent = document.getElementById('toolsDropdownContent');
        const dropdownBtn = document.getElementById('toolsDropdown');
        if (dropdownContent && dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
          dropdownBtn.setAttribute('aria-expanded', 'false');
          log('🔽 Dropdown closed (ESC key)');
        }
      }
    });
    
    log('✅ Keyboard accessibility initialized');
  }
  
  // ============================================
  // OPTIONAL: LOAD EXTERNAL SCRIPTS
  // ============================================
  function loadExternalScripts() {
    const scripts = [
      '/includes/analytics.js',
      '/includes/adsense.js',
      '/includes/facebook-pixel.js',
      '/includes/breadcrumbs.js',
      '/includes/lazy-load.js',
      '/includes/search.js',
      '/includes/cookie-consent.js',
      '/includes/back-to-top.js'
    ];
    
    // Only load if files exist
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onerror = () => log(`⚠️ Optional script not found: ${src}`);
      document.head.appendChild(script);
    });
    
    log('📦 External scripts loading...');
  }
  
  // Call external scripts loading (optional)
  // Uncomment if you have these script files
  // loadExternalScripts();
  
  // ============================================
  // DEBUG LOGGING
  // ============================================
  function log(message) {
    if (CONFIG.debugMode) {
      console.log(message);
    }
  }
  
  function error(message) {
    console.error(message);
  }
  
})();
