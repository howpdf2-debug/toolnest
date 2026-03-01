// Breadcrumbs Generator with Schema Markup
(function() {
    'use strict';
    
    function generateBreadcrumbs() {
        const path = window.location.pathname;
        const segments = path.split('/').filter(s => s);
        
        // Don't show breadcrumbs on homepage
        if (segments.length === 0 || path === '/' || path === '/index.html') return;
        
        const breadcrumbContainer = document.createElement('nav');
        breadcrumbContainer.setAttribute('aria-label', 'Breadcrumb');
        breadcrumbContainer.className = 'breadcrumb-nav';
        breadcrumbContainer.style.cssText = 'max-width: 1200px; margin: 20px auto 10px; padding: 0 20px;';
        
        let breadcrumbHTML = '<ol style="display: flex; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; font-size: 14px; color: var(--text-muted); gap: 5px;">';
        breadcrumbHTML += '<li style="display: flex; align-items: center;"><a href="/" style="color: var(--blue); text-decoration: none; transition: 0.2s;">🏠 Home</a></li>';
        
        let currentPath = '';
        segments.forEach((segment, index) => {
            currentPath += '/' + segment;
            const isLast = index === segments.length - 1;
            const name = segment
                .replace('.html', '')
                .replace(/-/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
            
            if (isLast) {
                breadcrumbHTML += `<li style="display: flex; align-items: center;"><span style="margin: 0 8px; color: var(--text-muted);">›</span><span style="color: var(--text-main); font-weight: 600;">${name}</span></li>`;
            } else {
                breadcrumbHTML += `<li style="display: flex; align-items: center;"><span style="margin: 0 8px; color: var(--text-muted);">›</span><a href="${currentPath}" style="color: var(--blue); text-decoration: none; transition: 0.2s;">${name}</a></li>`;
            }
        });
        
        breadcrumbHTML += '</ol>';
        breadcrumbContainer.innerHTML = breadcrumbHTML;
        
        // Add hover effects
        const links = breadcrumbContainer.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.textDecoration = 'underline';
            });
            link.addEventListener('mouseleave', function() {
                this.style.textDecoration = 'none';
            });
        });
        
        // Insert after header
        const header = document.querySelector('header, #header');
        if (header) {
            const nextElement = header.nextElementSibling;
            if (nextElement && !nextElement.classList.contains('mini-hero')) {
                header.parentNode.insertBefore(breadcrumbContainer, nextElement);
            } else if (nextElement) {
                nextElement.parentNode.insertBefore(breadcrumbContainer, nextElement);
            } else {
                header.parentNode.appendChild(breadcrumbContainer);
            }
        }
        
        // Add Schema Markup
        const schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": []
        };
        
        schema.itemListElement.push({
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://toolnest.bhaihelp.in/"
        });
        
        currentPath = '';
        segments.forEach((segment, index) => {
            currentPath += '/' + segment;
            const name = segment.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            schema.itemListElement.push({
                "@type": "ListItem",
                "position": index + 2,
                "name": name,
                "item": "https://toolnest.bhaihelp.in" + currentPath
            });
        });
        
        const schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.textContent = JSON.stringify(schema);
        document.head.appendChild(schemaScript);
        
        console.log('✅ Breadcrumbs generated with schema markup');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', generateBreadcrumbs);
    } else {
        generateBreadcrumbs();
    }
})();
