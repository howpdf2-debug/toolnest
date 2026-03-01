// Lazy Loading Images
(function() {
    'use strict';
    
    // Add loading="lazy" to all images
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img:not([loading])');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
        
        console.log('✅ Lazy loading enabled for', images.length, 'images');
    });
    
    // Defer non-critical CSS
    const deferCSS = function() {
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"][data-defer]');
        stylesheets.forEach(link => {
            link.media = 'all';
        });
    };
    
    if (window.requestIdleCallback) {
        requestIdleCallback(deferCSS);
    } else {
        setTimeout(deferCSS, 1);
    }
})();
