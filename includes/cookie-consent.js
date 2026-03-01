// Cookie Consent Banner - GDPR Compliant
(function() {
    'use strict';
    
    // Check if user already made a choice
    if (localStorage.getItem('cookieConsent')) {
        console.log('🍪 Cookie consent already set:', localStorage.getItem('cookieConsent'));
        return;
    }
    
    // Create banner
    const banner = document.createElement('div');
    banner.id = 'cookieConsentBanner';
    banner.style.cssText = 'position: fixed; bottom: 0; left: 0; right: 0; background: var(--bg-card); border-top: 2px solid var(--border); padding: 20px; box-shadow: 0 -4px 20px rgba(0,0,0,0.15); z-index: 9998; display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; animation: slideUp 0.4s ease;';
    
    banner.innerHTML = `
        <div style="flex: 1; min-width: 250px;">
            <p style="margin: 0 0 8px 0; color: var(--text-main); font-size: 15px; font-weight: 600;">
                🍪 We use cookies
            </p>
            <p style="margin: 0; color: var(--text-muted); font-size: 14px; line-height: 1.5;">
                We use cookies to improve your experience, analyze site traffic, and for marketing purposes. 
                <a href="/privacy-policy.html" style="color: var(--blue); text-decoration: underline;">Learn more in our Privacy Policy</a>
            </p>
        </div>
        <div style="display: flex; gap: 10px; flex-shrink: 0;">
            <button id="acceptCookies" style="padding: 12px 24px; background: var(--blue); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; transition: 0.2s;">
                Accept All
            </button>
            <button id="declineCookies" style="padding: 12px 24px; background: var(--bg-main); color: var(--text-main); border: 1px solid var(--border); border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; transition: 0.2s;">
                Decline
            </button>
        </div>
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @media (max-width: 768px) {
            #cookieConsentBanner {
                flex-direction: column;
                align-items: stretch;
            }
            #cookieConsentBanner > div:last-child {
                width: 100%;
            }
            #cookieConsentBanner button {
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(banner);
    
    // Button hover effects
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');
    
    acceptBtn.addEventListener('mouseenter', function() {
        this.style.background = '#1e40af';
        this.style.transform = 'translateY(-2px)';
    });
    acceptBtn.addEventListener('mouseleave', function() {
        this.style.background = 'var(--blue)';
        this.style.transform = 'translateY(0)';
    });
    
    declineBtn.addEventListener('mouseenter', function() {
        this.style.background = 'var(--border)';
    });
    declineBtn.addEventListener('mouseleave', function() {
        this.style.background = 'var(--bg-main)';
    });
    
    // Accept cookies
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.style.animation = 'slideUp 0.4s ease reverse';
        setTimeout(() => {
            banner.remove();
        }, 400);
        console.log('✅ Cookies accepted');
        
        // Enable tracking if needed
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });
        }
    });
    
    // Decline cookies
    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        banner.style.animation = 'slideUp 0.4s ease reverse';
        setTimeout(() => {
            banner.remove();
        }, 400);
        console.log('⚠️ Cookies declined');
        
        // Disable tracking
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
            });
        }
    });
    
    console.log('🍪 Cookie consent banner displayed');
})();
