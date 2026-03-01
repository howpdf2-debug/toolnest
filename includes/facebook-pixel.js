// Facebook Pixel Configuration
// Pixel ID: 1254495433310462

(function() {
    'use strict';
    
    const FACEBOOK_PIXEL_ID = '1254495433310462';
    
    // Facebook Pixel Code
    !function(f,b,e,v,n,t,s) {
        if(f.fbq) return;
        n=f.fbq=function() {
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
        s.parentNode.insertBefore(t,s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', FACEBOOK_PIXEL_ID);
    fbq('track', 'PageView');
    
    console.log('✅ Facebook Pixel loaded (1254495433310462)');
    
    // Auto Event Tracking
    function setupFBTracking() {
        // Track tool usage
        document.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn-primary, .tool-card a');
            if (btn) {
                const toolName = btn.textContent.trim();
                fbq('track', 'ViewContent', {
                    content_name: toolName,
                    content_category: 'Tool'
                });
            }
        });
        
        // Track downloads
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && (link.href.includes('download') || link.download)) {
                fbq('track', 'Download', {
                    content_name: link.href
                });
            }
        });
        
        // Track contact form
        const contactForms = document.querySelectorAll('form');
        contactForms.forEach(function(form) {
            form.addEventListener('submit', function() {
                fbq('track', 'Contact');
            });
        });
        
        // Track newsletter signup
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function() {
                fbq('track', 'Lead', {
                    content_name: 'Newsletter Signup'
                });
            });
        }
        
        console.log('📘 Facebook Pixel auto-tracking enabled');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupFBTracking);
    } else {
        setupFBTracking();
    }
    
    // Helper function for custom events
    window.trackFBEvent = function(eventName, params) {
        if (typeof fbq !== 'undefined') {
            fbq('track', eventName, params);
        }
    };
    
})();
