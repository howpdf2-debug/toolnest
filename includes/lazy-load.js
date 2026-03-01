// Lazy Loading Images & Performance Optimization
(function() {
    'use strict';
    
    function initLazyLoading() {
        // Add loading="lazy" to all images without it
        const images = document.querySelectorAll('img:not([loading])');
        let count = 0;
        
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
            count++;
        });
        
        if (count > 0) {
            console.log('✅ Lazy loading enabled for', count, 'images');
        }
        
        // Optimize iframes (for YouTube embeds, etc.)
        const iframes = document.querySelectorAll('iframe:not([loading])');
        iframes.forEach(iframe => {
            iframe.setAttribute('loading', 'lazy');
        });
        
        // Preload critical resources
        const preloadLinks = [
            { href: '/style.css', as: 'style' },
            { href: '/favicon.png', as: 'image' }
        ];
        
        preloadLinks.forEach(link => {
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.href = link.href;
            preloadLink.as = link.as;
            document.head.appendChild(preloadLink);
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
        
        // Optimize font loading
        if ('fonts' in document) {
            document.fonts.ready.then(() => {
                console.log('✅ Fonts loaded');
            });
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLazyLoading);
    } else {
        initLazyLoading();
    }
})();
