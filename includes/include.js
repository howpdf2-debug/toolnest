// ToolNest - Dynamic Loader + Fixed Mobile Menu (Single Source of Truth)
(function() {
    'use strict';

    console.log('🚀 ToolNest initializing...');

    // Load Header
    fetch('/includes/header.html')
        .then(r => r.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            console.log('✅ Header loaded');
            initMobileMenu();           // ← Sirf yahin call hoga
        })
        .catch(err => console.error('❌ Header load failed:', err));

    // Load Footer
    fetch('/includes/footer.html')
        .then(r => r.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(err => console.error('❌ Footer load failed:', err));

    // ==================== FIXED MOBILE MENU ====================
    function initMobileMenu() {
        const mobileToggle   = document.getElementById('mobileMenuToggle');
        const navRight       = document.getElementById('navRight');
        const mobileOverlay  = document.getElementById('mobileOverlay');
        const dropdownBtn    = document.getElementById('toolsDropdownBtn');
        const dropdownContent = document.getElementById('toolsDropdown');
        const darkToggle     = document.getElementById('darkToggle');

        if (!mobileToggle || !navRight) {
            console.error('❌ Mobile menu elements not found in header');
            return;
        }

        // Hamburger Toggle
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = navRight.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            if (mobileOverlay) mobileOverlay.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // Overlay Close
        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', closeAll);
        }

        // Close on nav links
        navRight.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeAll);
        });

        function closeAll() {
            navRight.classList.remove('active');
            mobileToggle.classList.remove('active');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            if (dropdownContent) dropdownContent.classList.remove('show');
        }

        // Dropdown
        if (dropdownBtn && dropdownContent) {
            dropdownBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdownContent.classList.toggle('show');
                this.setAttribute('aria-expanded', dropdownContent.classList.contains('show'));
            });
        }

        // Click outside dropdown
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown')) {
                if (dropdownContent) dropdownContent.classList.remove('show');
                if (dropdownBtn) dropdownBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Dark Mode
        if (darkToggle) {
            const saved = localStorage.getItem('darkMode');
            if (saved === 'true') {
                document.documentElement.classList.add('dark');
                darkToggle.textContent = '☀️';
            }
            darkToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('darkMode', isDark);
                darkToggle.textContent = isDark ? '☀️' : '🌙';
            });
        }

        // Resize cleanup
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeAll();
        });

        console.log('✅ Mobile menu initialized successfully');
    }

    // Other scripts (analytics, adsense etc.)
    // ... aapke purane Promise.all wala code yahan rakh sakte ho
})();
