// Back to Top Button
(function() {
    'use strict';
    
    const button = document.createElement('button');
    button.id = 'backToTopBtn';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Back to top');
    button.setAttribute('title', 'Back to top');
    button.style.cssText = 'position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px; border-radius: 50%; background: var(--blue); color: white; border: none; font-size: 24px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 999; opacity: 0; transition: opacity 0.3s, transform 0.3s; display: none; font-weight: bold;';
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        if (window.scrollY > 300) {
            button.style.display = 'block';
            setTimeout(() => {
                button.style.opacity = '1';
                button.style.transform = 'scale(1)';
            }, 10);
        } else {
            button.style.opacity = '0';
            button.style.transform = 'scale(0.8)';
            scrollTimeout = setTimeout(() => {
                button.style.display = 'none';
            }, 300);
        }
    });
    
    // Click to scroll to top
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    button.addEventListener('mouseenter', function() {
        this.style.background = '#1e40af';
        this.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.background = 'var(--blue)';
        this.style.transform = 'scale(1)';
    });
    
    // Mobile styles
    if (window.innerWidth <= 768) {
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.width = '45px';
        button.style.height = '45px';
        button.style.fontSize = '20px';
    }
    
    console.log('✅ Back to top button added');
})();
