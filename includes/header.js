document.write(`
<header class="header">
    <div class="container">
        <div class="header-content">
            <a href="/index.html" class="logo">
                🛠️ <span>ToolNest</span>
            </a>
            
            <!-- Desktop Navigation -->
            <nav class="nav-links">
                <a href="/index.html">Home</a>
                
                <!-- Tools Dropdown -->
                <div class="dropdown">
                    <button class="dropbtn">
                        Tools ▼
                    </button>
                    <div class="dropdown-content">
                        <div class="dropdown-header">📄 Document Tools</div>
                        <a href="/tools/merge-pdf.html">Merge PDF</a>
                        <a href="/tools/pdf-to-jpg.html">PDF to JPG</a>
                        
                        <div class="dropdown-header">🖼️ Media Tools</div>
                        <a href="/tools/image-compress.html">Image Compressor</a>
                        <a href="/tools/youtube-downloader.html">YouTube Downloader</a>
                        
                        <div class="dropdown-header">⚡ Productivity Tools</div>
                        <a href="/tools/qr-code-generator.html">QR Code Generator</a>
                        <a href="/tools/password-generator.html">Password Generator</a>
                        <a href="/tools/word-counter.html">Word Counter</a>
                        <a href="/tools/json-formatter.html">JSON Formatter</a>
                        
                        <div class="dropdown-header">💼 Business Tools</div>
                        <a href="/tools/invoice-generator.html">Invoice Generator</a>
                        <a href="/tools/seo-generator.html">SEO Meta Tags</a>
                    </div>
                </div>
                
                <a href="/blog.html">Blog</a>
                <a href="/about.html">About</a>
                <a href="/contact.html">Contact</a>
            </nav>
            
            <!-- Mobile Menu Button -->
            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-content">
            <a href="/index.html" class="mobile-menu-item">🏠 Home</a>
            
            <!-- Tools Section in Mobile -->
            <div class="mobile-tools-section">
                <div class="mobile-section-header">📄 Document Tools</div>
                <a href="/tools/merge-pdf.html" class="mobile-menu-item">Merge PDF</a>
                <a href="/tools/pdf-to-jpg.html" class="mobile-menu-item">PDF to JPG</a>
                
                <div class="mobile-section-header">🖼️ Media Tools</div>
                <a href="/tools/image-compress.html" class="mobile-menu-item">Image Compressor</a>
                <a href="/tools/youtube-downloader.html" class="mobile-menu-item">YouTube Downloader</a>
                
                <div class="mobile-section-header">⚡ Productivity Tools</div>
                <a href="/tools/qr-code-generator.html" class="mobile-menu-item">QR Code Generator</a>
                <a href="/tools/password-generator.html" class="mobile-menu-item">Password Generator</a>
                <a href="/tools/word-counter.html" class="mobile-menu-item">Word Counter</a>
                <a href="/tools/json-formatter.html" class="mobile-menu-item">JSON Formatter</a>
                
                <div class="mobile-section-header">💼 Business Tools</div>
                <a href="/tools/invoice-generator.html" class="mobile-menu-item">Invoice Generator</a>
                <a href="/tools/seo-generator.html" class="mobile-menu-item">SEO Meta Tags</a>
            </div>
            
            <a href="/blog.html" class="mobile-menu-item">📚 Blog</a>
            <a href="/about.html" class="mobile-menu-item">ℹ️ About</a>
            <a href="/contact.html" class="mobile-menu-item">✉️ Contact</a>
        </div>
    </div>
</header>

<style>
/* Header Styles */
.header {
    background: var(--bg-card);
    border-bottom: 2px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo {
    font-size: 24px;
    font-weight: 700;
    color: var(--text-main);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: 0.3s;
}

.logo:hover {
    color: var(--blue);
}

/* Desktop Navigation */
.nav-links {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-links > a {
    color: var(--text-main);
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
    position: relative;
}

.nav-links > a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--blue);
    transition: 0.3s;
}

.nav-links > a:hover {
    color: var(--blue);
}

.nav-links > a:hover::after {
    width: 100%;
}

/* Dropdown */
.dropdown {
    position: relative;
}

.dropbtn {
    background: transparent;
    color: var(--text-main);
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    transition: 0.3s;
}

.dropbtn:hover {
    color: var(--blue);
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--bg-card);
    min-width: 250px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    border-radius: 8px;
    border: 2px solid var(--border);
    z-index: 1000;
    margin-top: 10px;
    padding: 10px 0;
    max-height: 500px;
    overflow-y: auto;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-header {
    padding: 12px 20px 8px 20px;
    font-weight: 700;
    font-size: 13px;
    color: var(--blue);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-top: 1px solid var(--border);
    margin-top: 5px;
}

.dropdown-header:first-child {
    border-top: none;
    margin-top: 0;
}

.dropdown-content a {
    color: var(--text-main);
    padding: 10px 20px;
    text-decoration: none;
    display: block;
    transition: 0.2s;
    font-size: 14px;
}

.dropdown-content a:hover {
    background: rgba(37, 99, 235, 0.1);
    color: var(--blue);
    padding-left: 25px;
}

/* Mobile Menu Button */
.mobile-menu-btn {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    z-index: 1001;
}

.mobile-menu-btn span {
    width: 25px;
    height: 3px;
    background: var(--text-main);
    transition: 0.3s;
    border-radius: 2px;
}

.mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(7px, 7px);
}

.mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* Mobile Menu */
.mobile-menu {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: var(--bg-main);
    overflow-y: auto;
    z-index: 999;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

.mobile-menu.active {
    transform: translateX(0);
}

.mobile-menu-content {
    padding: 20px;
}

.mobile-menu-item {
    display: block;
    padding: 15px 20px;
    color: var(--text-main);
    text-decoration: none;
    font-weight: 600;
    border-radius: 8px;
    margin-bottom: 5px;
    transition: 0.2s;
}

.mobile-menu-item:hover {
    background: rgba(37, 99, 235, 0.1);
    color: var(--blue);
}

.mobile-section-header {
    padding: 15px 20px 8px 20px;
    font-weight: 700;
    font-size: 13px;
    color: var(--blue);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 10px;
}

.mobile-tools-section {
    border-top: 2px solid var(--border);
    border-bottom: 2px solid var(--border);
    margin: 10px 0;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .mobile-menu-btn {
        display: flex;
    }
    
    .mobile-menu {
        display: block;
    }
}
</style>

<script>
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});
</script>
`);
