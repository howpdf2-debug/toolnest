// include.js - Dynamic header, footer, and interactive elements

document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // HEADER INJECTION
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
          <button class="dropbtn" id="toolsDropdown">Tools ▼</button>
          <div class="dropdown-content" id="toolsDropdownContent">
            <a href="/index.html#tools">All Tools</a>
            <a href="/blog.html">Blog & Tutorials</a>
            <a href="/about.html">About Us</a>
          </div>
        </div>
        
        <a href="/blog.html" class="nav-link">Blog</a>
        <a href="/about.html" class="nav-link">About</a>
        <a href="/contact.html" class="nav-link">Contact</a>
        
        <button id="darkToggle" aria-label="Toggle dark mode">🌙</button>
      </nav>
      
      <div class="mobile-overlay" id="mobileOverlay"></div>
    </div>
  `;
  
  const headerElement = document.getElementById('header');
  if (headerElement) {
    headerElement.innerHTML = headerHTML;
  }
  
  // ============================================
  // FOOTER INJECTION
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
  }
  
  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navRight = document.getElementById('navRight');
  const mobileOverlay = document.getElementById('mobileOverlay');
  
  if (mobileMenuToggle && navRight) {
    mobileMenuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navRight.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
    });
    
    // Close menu when clicking overlay
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', function() {
        navRight.classList.remove('active');
        mobileOverlay.classList.remove('active');
      });
    }
    
    // Close menu when clicking a link
    navRight.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navRight.classList.remove('active');
        mobileOverlay.classList.remove('active');
      });
    });
  }
  
  // ============================================
  // DROPDOWN MENU TOGGLE (Desktop & Mobile)
  // ============================================
  const dropdownBtn = document.getElementById('toolsDropdown');
  const dropdownContent = document.getElementById('toolsDropdownContent');
  
  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropdownContent.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        dropdownContent.classList.remove('show');
      }
    });
    
    // Close dropdown when clicking a link inside it
    dropdownContent.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        dropdownContent.classList.remove('show');
      });
    });
  }
  
  // ============================================
  // DARK MODE TOGGLE
  // ============================================
  const darkToggle = document.getElementById('darkToggle');
  
  if (darkToggle) {
    // Check if dark mode is already enabled
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      darkToggle.textContent = '☀️';
    } else {
      darkToggle.textContent = '🌙';
    }
    
    // Toggle dark mode
    darkToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const html = document.documentElement;
      const isDark = html.classList.toggle('dark');
      
      // Save preference to localStorage
      localStorage.setItem('darkMode', isDark);
      
      // Update button emoji
      darkToggle.textContent = isDark ? '☀️' : '🌙';
    });
  }
  
  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  
  // ============================================
  // KEYBOARD ACCESSIBILITY
  // ============================================
  
  // Close dropdown with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && dropdownContent) {
      dropdownContent.classList.remove('show');
    }
  });
  
  // ============================================
  // HANDLE SYSTEM DARK MODE PREFERENCE
  // ============================================
  if (window.matchMedia && localStorage.getItem('darkMode') === null) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (darkModeQuery.matches) {
      document.documentElement.classList.add('dark');
      if (darkToggle) darkToggle.textContent = '☀️';
    }
    
    darkModeQuery.addListener(e => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        if (darkToggle) darkToggle.textContent = '☀️';
      } else {
        document.documentElement.classList.remove('dark');
        if (darkToggle) darkToggle.textContent = '🌙';
      }
    });
  }
});
