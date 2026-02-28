// ============================================
// GOOGLE ADSENSE INTEGRATION
// ============================================
// Replace ca-pub-XXXXXXXXXXXXXXXX with your Publisher ID from Step 1B

(function() {
  'use strict';
  
  // Your AdSense Publisher ID
  const ADSENSE_PUBLISHER_ID = 'ca-pub-9233973597909198'; // ← CHANGE THIS
  
  // Check if already loaded
  if (window.adsbygoogle) {
    console.log('AdSense already loaded');
    return;
  }
  
  // Create and load AdSense script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`;
  script.crossOrigin = 'anonymous';
  
  script.onload = function() {
    console.log('✅ AdSense loaded successfully');
  };
  
  script.onerror = function() {
    console.error('❌ Failed to load AdSense (might be blocked by ad blocker)');
  };
  
  document.head.appendChild(script);
  
  console.log('💰 AdSense script initialized');
})();

// ============================================
// AUTO-INITIALIZE ADS AFTER PAGE LOAD
// ============================================
window.addEventListener('load', function() {
  // Wait a bit for page to settle
  setTimeout(function() {
    const adElements = document.querySelectorAll('.adsbygoogle');
    
    if (adElements.length === 0) {
      console.log('ℹ️ No ad slots found on this page');
      return;
    }
    
    console.log(`💰 Found ${adElements.length} ad slot(s), initializing...`);
    
    adElements.forEach(function(ad, index) {
      // Check if ad is already initialized
      if (ad.dataset.adsbygoogleStatus === 'done') {
        console.log(`Ad ${index + 1} already initialized`);
        return;
      }
      
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
        console.log(`✅ Ad ${index + 1} initialized`);
      } catch (e) {
        console.error(`❌ Failed to initialize ad ${index + 1}:`, e);
      }
    });
  }, 1000);
});

// ============================================
// HELPER FUNCTION TO CREATE AD UNITS
// ============================================
window.createAdUnit = function(options) {
  const defaults = {
    client: 'ca-pub-XXXXXXXXXXXXXXXX', // ← CHANGE THIS
    slot: '1234567890',
    format: 'auto',
    responsive: true,
    style: 'display:block'
  };
  
  const config = Object.assign({}, defaults, options);
  
  const ad = document.createElement('ins');
  ad.className = 'adsbygoogle';
  ad.style.cssText = config.style;
  ad.setAttribute('data-ad-client', config.client);
  ad.setAttribute('data-ad-slot', config.slot);
  ad.setAttribute('data-ad-format', config.format);
  
  if (config.responsive) {
    ad.setAttribute('data-full-width-responsive', 'true');
  }
  
  return ad;
};

console.log('💰 AdSense utilities loaded');
