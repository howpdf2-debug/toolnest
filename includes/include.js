// ToolNest - Dynamic Component Loader & Complete Initialization
(function() {
    'use strict';
    
    console.log('🚀 ToolNest initializing...');
    
    // Load header
    fetch('/includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            console.log('✅ Header loaded');
            initializeMobileMenu();
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
    
    // Mobile Menu Initialization
    function initializeMobileMenu() {
        console.log('🔧 Initializing mobile menu...');
        
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const navRight = document.getElementById('navRight');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const dropdownBtn = document.getElementById('toolsDropdownBtn');
        const dropdownContent = document.getElementById('toolsDropdown');
        const darkToggle = document.getElementById('darkToggle');
        
        if (!mobileToggle || !navRight) {
            console.error('❌ Mobile menu elements not found');
            return;
        }
        
        // Toggle mobile menu
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = navRight.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            if (mobileOverlay) mobileOverlay.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
        });
        
        // Close menu when clicking overlay
        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', function() {
                navRight.classList.remove('active');
                mobileToggle.classList.remove('active');
                this.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        }
        
        // Close menu when clicking nav links
        const navLinks = navRight.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navRight.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    if (mobileOverlay) mobileOverlay.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Dropdown functionality
        if (dropdownBtn && dropdownContent) {
            dropdownBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                const isExpanded = dropdownContent.classList.toggle('show');
                this.setAttribute('aria-expanded', isExpanded);
            });
            
            const dropdownLinks = dropdownContent.querySelectorAll('a');
            dropdownLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    dropdownContent.classList.remove('show');
                    dropdownBtn.setAttribute('aria-expanded', 'false');
                    if (window.innerWidth <= 768) {
                        setTimeout(function() {
                            navRight.classList.remove('active');
                            mobileToggle.classList.remove('active');
                            if (mobileOverlay) mobileOverlay.classList.remove('active');
                            mobileToggle.setAttribute('aria-expanded', 'false');
                            document.body.style.overflow = '';
                        }, 100);
                    }
                });
            });
        }
        
        // Dark mode toggle
        if (darkToggle) {
            const savedMode = localStorage.getItem('darkMode');
            if (savedMode === 'true') {
                document.documentElement.classList.add('dark');
                darkToggle.textContent = '☀️';
            }
            
            darkToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('darkMode', isDark);
                darkToggle.textContent = isDark ? '☀️' : '🌙';
                console.log('🌓 Dark mode:', isDark ? 'ON' : 'OFF');
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                if (dropdownContent) dropdownContent.classList.remove('show');
                if (dropdownBtn) dropdownBtn.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navRight.classList.remove('active');
                mobileToggle.classList.remove('active');
                if (mobileOverlay) mobileOverlay.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                if (dropdownContent) dropdownContent.classList.remove('show');
            }
        });
        
        console.log('✅ Mobile menu initialized');
    }
    
    // Script loader helper
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
    
    // Load all scripts sequentially
    Promise.all([
        loadScript('/includes/analytics.js'),
        loadScript('/includes/adsense.js'),
        loadScript('/includes/facebook-pixel.js'),
        loadScript('/includes/breadcrumbs.js'),
        loadScript('/includes/lazy-load.js'),
        loadScript('/includes/search.js'),
        loadScript('/includes/cookie-consent.js'),
        loadScript('/includes/back-to-top.js')
    ]).then(() => {
        console.log('✅ All scripts loaded successfully');
        console.log('🎉 ToolNest initialization complete');
    }).catch(err => {
        console.warn('⚠️ Some scripts failed to load:', err);
    });
    
})();
