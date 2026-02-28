// ============================================
// TOOLNEST COMPONENT LOADER
// Auto-loads header, footer, and tracking scripts
// ============================================

// Load all tracking scripts first
(function() {
  'use strict';
  
  console.log('🚀 ToolNest initialization started');
  
  // 1. Load Google Analytics
  const analyticsScript = document.createElement('script');
  analyticsScript.src = '/includes/analytics.js';
  analyticsScript.async = true;
  analyticsScript.onload = function() {
    console.log('✅ Analytics loaded');
  };
  document.head.appendChild(analyticsScript);
  
  // 2. Load AdSense
  const adsenseScript = document.createElement('script');
  adsenseScript.src = '/includes/adsense.js';
  adsenseScript.async = true;
  adsenseScript.onload = function() {
    console.log('✅ AdSense loaded');
  };
  document.head.appendChild(adsenseScript);
  
  // 3. Load Facebook Pixel
  const pixelScript = document.createElement('script');
  pixelScript.src = '/includes/facebook-pixel.js';
  pixelScript.async = true;
  pixelScript.onload = function() {
    console.log('✅ Facebook Pixel loaded');
  };
  document.head.appendChild(pixelScript);
  
  console.log('📊 Tracking scripts initialized');
})();

// ============================================
// LOAD HEADER AND FOOTER COMPONENTS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  
  // Load header component
  const headerContainer = document.getElementById('header');
  if (headerContainer) {
    fetch('/includes/header.html')
      .then(function(response) {
        if (!response.ok) {
          console.warn('Header load failed:', response.status);
          return null;
        }
        return response.text();
      })
      .then(function(data) {
        if (data) {
          headerContainer.innerHTML = data;
          console.log('✅ Header loaded');
          
          // Initialize header functionality
          initializeDropdown();
          initializeDarkToggle();
          initializeMobileMenu();
        }
      })
      .catch(function(error) {
        console.warn('Header fetch error:', error);
      });
  }
  
  // Load footer component
  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    fetch('/includes/footer.html')
      .then(function(response) {
        if (!response.ok) {
          console.warn('Footer load failed:', response.status);
          return null;
        }
        return response.text();
      })
      .then(function(data) {
        if (data) {
          footerContainer.innerHTML = data;
          console.log('✅ Footer loaded');
        }
      })
      .catch(function(error) {
        console.warn('Footer fetch error:', error);
      });
  }
});

// ============================================
// DROPDOWN FUNCTIONALITY
// ============================================
function initializeDropdown() {
  const dropdownBtn = document.getElementById('toolsDropdownBtn');
  const dropdownContent = document.getElementById('toolsDropdown');
  
  if (!dropdownBtn || !dropdownContent) return;
  
  // Toggle dropdown on button click
  dropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
    
    // Update aria attribute
    const isExpanded = dropdownContent.classList.contains('show');
    dropdownBtn.setAttribute('aria-expanded', isExpanded);
  });
  
  // Close dropdown when clicking a link
  const dropdownLinks = dropdownContent.querySelectorAll('a');
  dropdownLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      dropdownContent.classList.remove('show');
      dropdownBtn.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdownContent.classList.remove('show');
      dropdownBtn.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Close dropdown on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
      dropdownBtn.setAttribute('aria-expanded', 'false');
      dropdownBtn.focus();
    }
  });
  
  console.log('✅ Dropdown initialized');
}

// ============================================
// DARK MODE TOGGLE
// ============================================
function initializeDarkToggle() {
  const darkToggleBtn = document.getElementById('darkToggle');
  
  if (!darkToggleBtn) return;
  
  // Load saved preference
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.documentElement.classList.add('dark');
    darkToggleBtn.textContent = '☀️';
  } else {
    darkToggleBtn.textContent = '🌙';
  }
  
  // Toggle dark mode on click
  darkToggleBtn.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    
    // Save preference
    localStorage.setItem('darkMode', isDark);
    
    // Update button icon
    darkToggleBtn.textContent = isDark ? '☀️' : '🌙';
    
    // Track event
    if (window.trackEvent) {
      window.trackEvent('dark_mode_toggle', {
        'mode': isDark ? 'dark' : 'light'
      });
    }
  });
  
  console.log('✅ Dark mode initialized');
}

// ============================================
// MOBILE MENU (if exists)
// ============================================
function initializeMobileMenu() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navRight = document.getElementById('navRight');
  const mobileOverlay = document.getElementById('mobileOverlay');
  
  if (!mobileToggle || !navRight) return;
  
  // Toggle mobile menu
  mobileToggle.addEventListener('click', function() {
    navRight.classList.toggle('active');
    if (mobileOverlay) {
      mobileOverlay.classList.toggle('active');
    }
    
    // Change icon
    this.textContent = navRight.classList.contains('active') ? '✕' : '☰';
  });
  
  // Close menu when clicking overlay
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function() {
      navRight.classList.remove('active');
      this.classList.remove('active');
      mobileToggle.textContent = '☰';
    });
  }
  
  // Close menu on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navRight.classList.remove('active');
      if (mobileOverlay) {
        mobileOverlay.classList.remove('active');
      }
      mobileToggle.textContent = '☰';
    }
  });
  
  console.log('✅ Mobile menu initialized');
}

console.log('✅ ToolNest components ready');
