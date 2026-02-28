// ============================================
// FACEBOOK PIXEL
// ============================================
// Replace 123456789012345 with your Pixel ID from Step 1C

(function() {
  'use strict';
  
  // Your Facebook Pixel ID
  const FACEBOOK_PIXEL_ID = '123456789012345'; // ← CHANGE THIS
  
  // Check if already loaded
  if (window.fbq) {
    console.log('Facebook Pixel already loaded');
    return;
  }
  
  // Facebook Pixel Code
  !function(f,b,e,v,n,t,s) {
    if(f.fbq) return;
    n=f.fbq=function(){
      n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
    };
    if(!f._fbq) f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];
    t=b.createElement(e);
    t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  
  // Initialize Pixel
  fbq('init', FACEBOOK_PIXEL_ID);
  
  // Track PageView
  fbq('track', 'PageView');
  
  // Create noscript fallback
  const noscript = document.createElement('noscript');
  const img = document.createElement('img');
  img.height = 1;
  img.width = 1;
  img.style.display = 'none';
  img.src = `https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`;
  noscript.appendChild(img);
  document.body.appendChild(noscript);
  
  console.log('✅ Facebook Pixel initialized');
})();

// ============================================
// CUSTOM EVENT TRACKING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  
  // Track tool usage
  const toolButtons = document.querySelectorAll(
    'button[onclick*="generate"], button[onclick*="compress"], ' +
    'button[onclick*="merge"], button[onclick*="convert"]'
  );
  
  toolButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      fbq('track', 'ToolUsed', {
        tool_name: document.title,
        button_text: this.textContent.trim(),
        page: window.location.pathname
      });
    });
  });
  
  // Track downloads
  const downloadLinks = document.querySelectorAll('a[download]');
  downloadLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      fbq('track', 'Download', {
        file_name: this.getAttribute('download'),
        page: window.location.pathname
      });
    });
  });
  
  // Track newsletter signups
  const newsletterForms = document.querySelectorAll('form[action*="subscribe"], form[action*="newsletter"], #newsletterForm');
  newsletterForms.forEach(function(form) {
    form.addEventListener('submit', function() {
      fbq('track', 'Lead', {
        content_name: 'Newsletter Signup',
        page: window.location.pathname
      });
    });
  });
  
  // Track contact form
  const contactForms = document.querySelectorAll('form[action*="contact"]');
  contactForms.forEach(function(form) {
    form.addEventListener('submit', function() {
      fbq('track', 'Contact', {
        content_name: 'Contact Form Submission',
        page: window.location.pathname
      });
    });
  });
  
  console.log('📘 Facebook Pixel event tracking activated');
});

// ============================================
// HELPER FUNCTION FOR CUSTOM EVENTS
// ============================================
window.trackFBEvent = function(eventName, params) {
  if (window.fbq) {
    fbq('track', eventName, params || {});
    console.log('📘 FB Event tracked:', eventName, params);
  }
};

console.log('📘 Facebook Pixel loaded');
