// Breadcrumbs Generator
(function() {
    'use strict';
    
    function generateBreadcrumbs() {
        const path = window.location.pathname;
        const segments = path.split('/').filter(s => s);
        
        if (segments.length === 0 || path === '/') return;
        
        const breadcrumbContainer = document.createElement('nav');
        breadcrumbContainer.setAttribute('aria-label', 'Breadcrumb');
        breadcrumbContainer.style.cssText = 'max-width: 1200px; margin: 20px auto; padding: 0 20px;';
        
        let breadcrumbHTML = '<ol style="display: flex; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; font-size: 14px; color: var(--text-muted);">';
        breadcrumbHTML += '<li><a href="/" style="color: var(--blue); text-decoration: none;">🏠 Home</a></li>';
        
        let currentPath = '';
        segments.forEach((segment, index) => {
            currentPath += '/' + segment;
            const isLast = index === segments.length - 1;
            const name = segment
                .replace('.html', '')
                .replace(/-/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
            
            if (isLast) {
                breadcrumbHTML += `<li style="margin-left: 10px;"><span style="margin-right: 10px;">›</span><span style="color: var(--text-main);">${name}</span></li>`;
            } else {
                breadcrumbHTML += `<li style="margin-left: 10px;"><span style="margin-right: 10px;">›</span><a href="${currentPath}" style="color: var(--blue); text-decoration: none;">${name}</a></li>`;
            }
        });
        
        breadcrumbHTML += '</ol>';
        breadcrumbContainer.innerHTML = breadcrumbHTML;
        
        // Insert after header
        const header = document.querySelector('header, #header');
        if (header && header.nextSibling) {
            header.parentNode.insertBefore(breadcrumbContainer, header.nextSibling);
        }
        
        // Add Schema
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
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', generateBreadcrumbs);
    } else {
        generateBreadcrumbs();
    }
})();
