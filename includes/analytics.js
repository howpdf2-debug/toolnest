// Google Analytics 4 Configuration
// Measurement ID: G-Y6W96XKXDR

(function() {
    'use strict';
    
    const GA_MEASUREMENT_ID = 'G-Y6W96XKXDR';
    
    // Load Google Analytics gtag.js
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gtagScript);
    
    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        'send_page_view': true,
        'cookie_flags': 'SameSite=None;Secure'
    });
    
    // Make gtag globally accessible
    window.gtag = gtag;
    
    console.log('✅ Google Analytics loaded (G-Y6W96XKXDR)');
    
    // Auto Event Tracking
    function setupAutoTracking() {
        // Track external links
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href && link.hostname !== window.location.hostname) {
                gtag('event', 'click', {
                    'event_category': 'external_link',
                    'event_label': link.href
                });
            }
        });
        
        // Track tool usage
        const toolButtons = document.querySelectorAll('.btn-primary, .tool-card a');
        toolButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const toolName = this.textContent.trim() || 'Unknown Tool';
                gtag('event', 'tool_click', {
                    'event_category': 'engagement',
                    'event_label': toolName
                });
            });
        });
        
        // Track downloads
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href && (link.href.includes('download') || link.download)) {
                gtag('event', 'file_download', {
                    'event_category': 'engagement',
                    'event_label': link.href
                });
            }
        });
        
        // Track form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(function(form) {
            form.addEventListener('submit', function() {
                gtag('event', 'form_submit', {
                    'event_category': 'engagement',
                    'event_label': form.id || 'unknown_form'
                });
            });
        });
        
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', function() {
            const scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
            if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
                maxScroll = scrollPercent;
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': scrollPercent + '%'
                });
            }
        });
        
        console.log('📊 Auto event tracking activated');
    }
    
    // Initialize tracking after page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupAutoTracking);
    } else {
        setupAutoTracking();
    }
    
    // Custom event helper function
    window.trackEvent = function(category, action, label, value) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label,
                'value': value
            });
        }
    };
    
})();
