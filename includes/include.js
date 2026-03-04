// =====================================================
// TOOLNEST - include.js
// COMPLETE FIXED VERSION - Desktop Dropdown WORKING
// All issues resolved + full debugging
// =====================================================

(function() {
  'use strict';
  
  console.log('🚀 ToolNest initializing...');
  
  // ============================================
  // STEP 1: INJECT HEADER WITH PROPER HTML
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
              <h4 style="padding: 12px 16px; margin: 8px 0 5px 0; font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.5px;">📄 PDF Tools</h4>
              <a href="/pdf-merger/" class="dropdown-link">PDF Merger</a>
              <a href="/pdf-to-jpg/" class="dropdown-link">PDF to JPG</a>
              <a href="/pdf-compressor/" class="dropdown-link">PDF Compressor</a>
              <a href="/jpg-to-pdf/" class="dropdown-link">JPG to PDF</a>
            </div>
            
            <!-- IMAGE TOOLS -->
            <div class="dropdown-section">
              <h4 style="padding: 12px 16px; margin: 8px 0 5px 0; font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.5px;">🖼️ Image Tools</h4>
              <a href="/image-compressor/" class="dropdown-link">Image Compressor</a>
              <a href="/image-converter/" class="dropdown-link">Image Converter</a>
              <a href="/image-resizer/" class="dropdown-link">Image Resizer</a>
            </div>
            
            <!-- BUSINESS TOOLS -->
            <div class="dropdown-section">
              <h4 style="padding: 12px 16px; margin: 8px 0 5px 0; font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.5px;">💼 Business Tools</h4>
              <a href="/invoice-generator/" class="dropdown-link">Invoice Generator</a>
              <a href="/gst-invoice/" class="dropdown-link">GST Invoice</a>
              <a href="/resume-builder/" class="dropdown-link">Resume Builder</a>
            </div>
            
            <!-- PRODUCTIVITY TOOLS -->
            <div class="dropdown-section">
              <h4 style="padding: 12px 16px; margin: 8px 0 5px 0; font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.5px;">⚡ Productivity Tools</h4>
              <a href="/qr-code-generator/" class="dropdown-link">QR Code Generator</a>
              <a href="/password-generator/" class="dropdown-link">Password Generator</a>
              <a href="/word-counter/" class="dropdown-link">Word Counter</a>
              <a href="/base64-encoder/" class="dropdown-link">Base64 Encoder</a>
              <a href="/json-formatter/" class="dropdown-link">JSON Formatter</a>
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
  // STEP 3: WAIT FOR DOM & INITIALIZE
  // ============================================
  console.log('⏳ Step 3: Waiting for DOM ready...');
  
  function initializeAllComponents() {
    console.log('🔧 Initializing all components...');
    
    // Initialize in order
    initializeElements();
    initializeMobileMenu();
    initializeDropdown();
    initializeDarkMode();
    initializeSmoothScroll();
    initializeKeyboardAccessibility();
    
    console.log('✅ All components initialized successfully');
    console.log('🎉 ToolNest ready!');
  }
  
  // ============================================
  // ELEMENT VERIFICATION
  // ============================================
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
      if (el) {
        console.log(`  ✅ ${name} (ID: ${id}) found`);
      } else {
        console.warn(`  ⚠️ ${name} (ID: ${id}) NOT found`);
      }
    }
  }
  
  // ============================================
  // MOBILE MENU INITIALIZATION
  // ============================================
  function initializeMobileMenu() {
    console.log('⚙️ Initializing mobile menu...');
    
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navRight = document.getElementById('navRight');
    const mobileOverlay = document.getElementById('mobileOverlay');
    
    if (!mobileMenuToggle) {
      console.warn('⚠️ Mobile menu toggle not found');
      return;
    }
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('📱 Mobile menu toggle clicked');
      
      navRight.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
      
      const isOpen = navRight.classList.contains('active');
      console.log(`  → Menu is now ${isOpen ? 'OPEN' : 'CLOSED'}`);
    });
    
    // Close menu when clicking overlay
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', function() {
        console.log('📱 Overlay clicked - closing menu');
        navRight.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    }
    
    // Close menu when clicking any link
    navRight.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        console.log(`📱 Link clicked: ${this.textContent} - closing menu`);
        navRight.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });
    
    console.log('✅ Mobile menu initialized');
  }
  
  // ============================================
  // DROPDOWN INITIALIZATION (MAIN FIX)
  // ============================================
  function initializeDropdown() {
    console.log('⚙️ Initializing dropdown...');
    
    const dropdownBtn = document.getElementById('toolsDropdown');
    const dropdownContent = document.getElementById('toolsDropdownContent');
    const dropdownContainer = document.getElementById('toolsDropdownContainer');
    
    if (!dropdownBtn) {
      console.error('❌ Dropdown button NOT found (ID: toolsDropdown)');
      return;
    }
    
    if (!dropdownContent) {
      console.error('❌ Dropdown content NOT found (ID: toolsDropdownContent)');
      return;
    }
    
    console.log('  ✅ Dropdown elements found');
    
    // MAIN FIX: Click on button to toggle dropdown
    dropdownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('🔽 Dropdown button clicked');
      
      const isCurrentlyOpen = dropdownContent.classList.contains('show');
      console.log(`  → Dropdown is currently ${isCurrentlyOpen ? 'OPEN' : 'CLOSED'}`);
      
      // Toggle the show class
      dropdownContent.classList.toggle('show');
      
      const isNowOpen = dropdownContent.classList.contains('show');
      dropdownBtn.setAttribute('aria-expanded', isNowOpen);
      
      console.log(`  → Dropdown is now ${isNowOpen ? 'OPEN ✅' : 'CLOSED ✅'}`);
    });
    
    // Close dropdown when clicking outside (DOCUMENT level)
    document.addEventListener('click', function(e) {
      const isClickInside = dropdownContainer.contains(e.target);
      
      if (!isClickInside) {
        const wasOpen = dropdownContent.classList.contains('show');
        if (wasOpen) {
          console.log('🔽 Click outside - closing dropdown');
          dropdownContent.classList.remove('show');
          dropdownBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
    
    // Close dropdown when clicking a link inside it
    dropdownContent.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
        console.log(`🔽 Dropdown link clicked: ${this.textContent}`);
        dropdownContent.classList.remove('show');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      });
    });
    
    console.log('✅ Dropdown initialized');
  }
  
  // ============================================
  // DARK MODE INITIALIZATION
  // ============================================
  function initializeDarkMode() {
    console.log('⚙️ Initializing dark mode...');
    
    const darkToggle = document.getElementById('darkToggle');
    
    if (!darkToggle) {
      console.warn('⚠️ Dark toggle button not found');
      return;
    }
    
    // Check localStorage for saved preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      darkToggle.textContent = '☀️';
      console.log('🌙 Dark mode loaded from storage');
    } else {
      darkToggle.textContent = '🌙';
    }
    
    // Toggle dark mode on button click
    darkToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const html = document.documentElement;
      const isDark = html.classList.toggle('dark');
      
      // Save to localStorage
      localStorage.setItem('darkMode', isDark);
      
      // Update button emoji
      darkToggle.textContent = isDark ? '☀️' : '🌙';
      
      console.log(`🌓 Dark mode toggled: ${isDark ? 'ON' : 'OFF'} (saved to storage)`);
    });
    
    // Respect system dark mode preference
    if (window.matchMedia && localStorage.getItem('darkMode') === null) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      if (darkModeQuery.matches) {
        document.documentElement.classList.add('dark');
        darkToggle.textContent = '☀️';
        console.log('🌙 System dark mode detected');
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
    
    console.log('✅ Dark mode initialized');
  }
  
  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  function initializeSmoothScroll() {
    console.log('⚙️ Initializing smooth scroll...');
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            console.log(`⬇️ Scrolling to ${href}`);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
    
    console.log('✅ Smooth scroll initialized');
  }
  
  // ============================================
  // KEYBOARD ACCESSIBILITY
  // ============================================
  function initializeKeyboardAccessibility() {
    console.log('⚙️ Initializing keyboard accessibility...');
    
    // Close dropdown with ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const dropdownContent = document.getElementById('toolsDropdownContent');
        const dropdownBtn = document.getElementById('toolsDropdown');
        
        if (dropdownContent && dropdownContent.classList.contains('show')) {
          console.log('⌨️ ESC key pressed - closing dropdown');
          dropdownContent.classList.remove('show');
          dropdownBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
    
    console.log('✅ Keyboard accessibility initialized');
  }
  
  // ============================================
  // START INITIALIZATION
  // ============================================
  
  // If DOM is already ready, initialize now
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAllComponents);
    console.log('📋 DOMContentLoaded event listener added');
  } else {
    // DOM is already ready
    console.log('📋 DOM already ready - initializing now');
    setTimeout(initializeAllComponents, 100);
  }
  
})();
