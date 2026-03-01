// Site Search Functionality
(function() {
    'use strict';
    
    const searchData = [
        { title: 'Invoice Generator', url: '/tools/invoice-generator.html', keywords: 'invoice gst bill receipt generate', emoji: '🧾' },
        { title: 'Merge PDF', url: '/tools/merge-pdf.html', keywords: 'merge combine join pdf files', emoji: '📄' },
        { title: 'Image Compressor', url: '/tools/image-compress.html', keywords: 'compress reduce image photo size optimize', emoji: '🖼️' },
        { title: 'PDF to JPG', url: '/tools/pdf-to-jpg.html', keywords: 'convert pdf jpg image png', emoji: '🔄' },
        { title: 'YouTube Downloader', url: '/tools/youtube-downloader.html', keywords: 'youtube download video mp4 save', emoji: '📺' },
        { title: 'SEO Generator', url: '/tools/seo-generator.html', keywords: 'seo meta tags generator description', emoji: '🔍' },
        { title: 'Word Counter', url: '/tools/word-counter.html', keywords: 'word count character counter text', emoji: '📝' },
        { title: 'Resume Builder', url: '/tools/resume-builder.html', keywords: 'resume cv builder maker create', emoji: '💼' },
        { title: 'Blog', url: '/blog.html', keywords: 'blog articles posts tutorials guides', emoji: '📚' },
        { title: 'About Us', url: '/about.html', keywords: 'about company info information', emoji: 'ℹ️' },
        { title: 'Contact', url: '/contact.html', keywords: 'contact support help email', emoji: '📧' },
        { title: 'FAQ', url: '/faq.html', keywords: 'faq questions help support answers', emoji: '❓' }
    ];
    
    function createSearchBox() {
        // Add search icon to header
        const searchIcon = document.createElement('button');
        searchIcon.innerHTML = '🔍';
        searchIcon.className = 'search-icon-btn';
        searchIcon.style.cssText = 'background: transparent; border: none; font-size: 20px; cursor: pointer; padding: 8px; color: var(--text-main); transition: 0.2s;';
        searchIcon.setAttribute('aria-label', 'Search site');
        searchIcon.setAttribute('title', 'Search (Ctrl+K)');
        
        searchIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        searchIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        const navRight = document.querySelector('.nav-right');
        if (navRight) {
            const darkToggle = document.getElementById('darkToggle');
            if (darkToggle) {
                navRight.insertBefore(searchIcon, darkToggle);
            } else {
                navRight.appendChild(searchIcon);
            }
        }
        
        // Create search modal
        const modal = document.createElement('div');
        modal.id = 'searchModal';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 9999; align-items: flex-start; justify-content: center; padding-top: 80px;';
        
        modal.innerHTML = `
            <div style="background: var(--bg-card); width: 90%; max-width: 600px; border-radius: 16px; padding: 0; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-height: 80vh; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid var(--border);">
                    <h3 style="margin: 0; color: var(--text-main); font-size: 18px;">🔍 Search ToolNest</h3>
                    <button id="closeSearch" style="background: transparent; border: none; font-size: 28px; cursor: pointer; color: var(--text-muted); line-height: 1; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">×</button>
                </div>
                <div style="padding: 20px;">
                    <input type="text" id="searchInput" placeholder="Search for tools, blog posts..." style="width: 100%; padding: 15px; border: 2px solid var(--border); border-radius: 12px; font-size: 16px; background: var(--bg-main); color: var(--text-main); transition: 0.2s;" autocomplete="off">
                </div>
                <div id="searchResults" style="padding: 0 20px 20px; max-height: 400px; overflow-y: auto;"></div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Open search
        searchIcon.addEventListener('click', function() {
            modal.style.display = 'flex';
            setTimeout(() => {
                document.getElementById('searchInput').focus();
            }, 100);
        });
        
        // Close search
        document.getElementById('closeSearch').addEventListener('click', function() {
            modal.style.display = 'none';
            document.getElementById('searchInput').value = '';
            document.getElementById('searchResults').innerHTML = '';
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.getElementById('searchInput').value = '';
                document.getElementById('searchResults').innerHTML = '';
            }
        });
        
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = 'var(--blue)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = 'var(--border)';
        });
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 20px; font-size: 14px;">Type at least 2 characters to search...</p>';
                return;
            }
            
            const matches = searchData.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.keywords.toLowerCase().includes(query)
            );
            
            if (matches.length > 0) {
                searchResults.innerHTML = matches.map(item => `
                    <a href="${item.url}" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: var(--bg-main); border-radius: 8px; margin-bottom: 10px; text-decoration: none; color: var(--text-main); transition: 0.2s; border: 1px solid transparent;">
                        <span style="font-size: 24px;">${item.emoji}</span>
                        <div style="flex: 1;">
                            <strong style="color: var(--blue); display: block; margin-bottom: 3px;">${item.title}</strong>
                            <small style="color: var(--text-muted); font-size: 12px;">${item.url}</small>
                        </div>
                        <span style="color: var(--text-muted); font-size: 18px;">→</span>
                    </a>
                `).join('');
                
                // Add hover effect
                searchResults.querySelectorAll('a').forEach(link => {
                    link.addEventListener('mouseenter', function() {
                        this.style.background = 'var(--blue)';
                        this.style.borderColor = 'var(--blue)';
                        this.style.transform = 'translateX(5px)';
                        this.querySelector('strong').style.color = 'white';
                        this.querySelector('small').style.color = 'rgba(255,255,255,0.8)';
                        const arrow = this.querySelector('span:last-child');
                        if (arrow) arrow.style.color = 'white';
                    });
                    link.addEventListener('mouseleave', function() {
                        this.style.background = 'var(--bg-main)';
                        this.style.borderColor = 'transparent';
                        this.style.transform = 'translateX(0)';
                        this.querySelector('strong').style.color = 'var(--blue)';
                        this.querySelector('small').style.color = 'var(--text-muted)';
                        const arrow = this.querySelector('span:last-child');
                        if (arrow) arrow.style.color = 'var(--text-muted)';
                    });
                });
            } else {
                searchResults.innerHTML = '<div style="text-align: center; padding: 30px;"><p style="font-size: 48px; margin-bottom: 10px;">🔍</p><p style="color: var(--text-muted); margin: 0;">No results found for "<strong>' + query + '</strong>"</p><p style="color: var(--text-muted); font-size: 14px; margin-top: 10px;">Try different keywords</p></div>';
            }
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl+K or Cmd+K to open search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                modal.style.display = 'flex';
                setTimeout(() => {
                    searchInput.focus();
                }, 100);
            }
            
            // Escape to close
            if (e.key === 'Escape') {
                modal.style.display = 'none';
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
            
            // Enter to go to first result
            if (e.key === 'Enter' && document.activeElement === searchInput) {
                const firstLink = searchResults.querySelector('a');
                if (firstLink) {
                    window.location.href = firstLink.href;
                }
            }
        });
        
        console.log('✅ Search functionality added (Press Ctrl+K to search)');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createSearchBox);
    } else {
        createSearchBox();
    }
})();
