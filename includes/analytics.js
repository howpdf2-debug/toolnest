// ============================================
// GOOGLE ANALYTICS 4 (GA4)
// ============================================
// Replace G-XXXXXXXXXX with your actual Measurement ID from Step 1A

(function() {
  'use strict';
  
  // Your Google Analytics Measurement ID
  const GA_MEASUREMENT_ID = 'G-Y6W96XKXDR'; // ← CHANGE THIS
  
  // Check if already loaded
  if (window.gtag) {
    console.log('Google Analytics already loaded');
    return;
  }
  
  // Create and load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  
  script.onload = function() {
    console.log('✅ Google Analytics loaded successfully');
  };
  
  script.onerror = function() {
    console.error('❌ Failed to load Google Analytics');
  };
  
  document.head.appendChild(script);
  
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  
  // Configure Analytics
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    'send_page_view': true,
    'anonymize_ip': true, // GDPR compliance
    'cookie_flags': 'SameSite=None;Secure',
    'allow_google_signals': true,
    'allow_ad_personalization_signals': true
  });
  
  // Make gtag available globally
  window.gtag = gtag;
  
  // Custom event tracking helper
  window.trackEvent = function(eventName, eventParams) {
    if (window.gtag) {
      gtag('event', eventName, eventParams || {});
      console.log('📊 Event tracked:', eventName, eventParams);
    }
  };
  
  console.log('📊 Google Analytics initialized');
})();

// ============================================
// AUTO EVENT TRACKING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  
  // Track tool usage (button clicks)
  const toolButtons = document.querySelectorAll(
    'button[onclick*="generate"], button[onclick*="compress"], ' +
    'button[onclick*="merge"], button[onclick*="convert"], ' +
    'button[onclick*="download"], button[onclick*="create"]'
  );
  
  toolButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const toolName = document.title.split('|')[0].trim();
      window.trackEvent('tool_used', {
        'tool_name': toolName,
        'button_text': this.textContent.trim(),
        'page_path': window.location.pathname
      });
    });
  });
  
  // Track file downloads
  const downloadLinks = document.querySelectorAll('a[download], a[href*="download"]');
  downloadLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      window.trackEvent('file_download', {
        'file_name': this.getAttribute('download') || 'file',
        'link_text': this.textContent.trim(),
        'page_path': window.location.pathname
      });
    });
  });
  
  // Track external links
  const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="toolnest.bhaihelp.in"])');
  externalLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      window.trackEvent('external_link_click', {
        'link_url': this.href,
        'link_text': this.textContent.trim()
      });
    });
  });
  
  // Track form submissions
  const forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function() {
      const formName = this.id || this.className || 'unnamed_form';
      window.trackEvent('form_submission', {
        'form_name': formName,
        'page_path': window.location.pathname
      });
    });
  });
  
  // Track scroll depth
  let scrollTracked = false;
  window.addEventListener('scroll', function() {
    if (!scrollTracked) {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 75) {
        window.trackEvent('scroll_depth', {
          'percent': '75',
          'page_path': window.location.pathname
        });
        scrollTracked = true;
      }
    }
  });
  
  console.log('📊 Auto event tracking activated');
});
