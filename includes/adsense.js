// Google AdSense Configuration
// Publisher ID: ca-pub-9233973597909198

(function() {
    'use strict';
    
    const ADSENSE_PUBLISHER_ID = 'ca-pub-9233973597909198';
    
    // Load AdSense script
    const adsenseScript = document.createElement('script');
    adsenseScript.async = true;
    adsenseScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`;
    adsenseScript.crossOrigin = 'anonymous';
    
    adsenseScript.onload = function() {
        console.log('✅ AdSense loaded (ca-pub-9233973597909198)');
        
        // Initialize existing ad units
        const adUnits = document.querySelectorAll('.adsbygoogle');
        if (adUnits.length > 0) {
            console.log('📢 Found ' + adUnits.length + ' ad unit(s)');
            
            // Push ads after a short delay
            setTimeout(function() {
                adUnits.forEach(function(ad) {
                    try {
                        if (!ad.getAttribute('data-adsbygoogle-status')) {
                            (window.adsbygoogle = window.adsbygoogle || []).push({});
                        }
                    } catch (e) {
                        console.error('AdSense error:', e);
                    }
                });
            }, 100);
        }
    };
    
    adsenseScript.onerror = function() {
        console.warn('⚠️ AdSense script failed to load (ad blocker or network issue)');
    };
    
    document.head.appendChild(adsenseScript);
    
    console.log('💰 AdSense script initialized');
    
    // Helper function to create ad unit
    window.createAdUnit = function(options) {
        const defaults = {
            client: 'ca-pub-9233973597909198',
            slot: '0000000000',
            format: 'auto',
            fullWidthResponsive: true,
            style: 'display:block'
        };
        
        const config = Object.assign({}, defaults, options);
        
        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.style.cssText = config.style;
        ins.setAttribute('data-ad-client', config.client);
        ins.setAttribute('data-ad-slot', config.slot);
        ins.setAttribute('data-ad-format', config.format);
        ins.setAttribute('data-full-width-responsive', config.fullWidthResponsive);
        
        return ins;
    };
    
})();
