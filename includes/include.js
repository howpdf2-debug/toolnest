// ToolNest - Dynamic Component Loader & Initialization
(function() {
    'use strict';
    
    console.log('🚀 ToolNest initializing...');
    
    // Load header
    fetch('/includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            console.log('✅ Header loaded');
            
            // Execute header scripts after insertion
            const scripts = document.getElementById('header').querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.head.appendChild(newScript);
            });
        })
        .catch(err => console.error('❌ Header load error:', err));
    
    // Load footer
    fetch('/includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            console.log('✅ Footer loaded');
        })
        .catch(err => console.error('❌ Footer load error:', err));
    
    // Load tracking scripts
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    
    // Load all tracking scripts in sequence
    Promise.all([
        loadScript('/includes/analytics.js'),
        loadScript('/includes/adsense.js'),
        loadScript('/includes/facebook-pixel.js')
    ]).then(() => {
        console.log('✅ All tracking scripts loaded');
    }).catch(err => {
        console.warn('⚠️ Some tracking scripts failed:', err);
    });
    
    console.log('🎉 ToolNest initialized successfully');
})();
