document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header class="topbar">
            <a href="/" class="logo">
                <img src="logo-header.png" alt="ToolNest Logo">
                <span>ToolNest</span>
            </a>
            <nav class="main-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#tools">Tools</a></li>
                </ul>
            </nav>
            <button class="dark-toggle" aria-label="Toggle Dark Mode">🌙</button>
        </header>
    `;

    const footerHTML = `
        <footer>
            <p>ToolNest – Free Online Tools for PDF, Image & Text Processing</p>
            <nav class="footer-nav">
                <a href="/">Home</a> |
                <a href="/privacy.html">Privacy Policy</a> |
                <a href="/terms.html">Terms of Use</a> |
                <a href="/contact.html">Contact</a>
            </nav>
            <p>&copy; ${new Date().getFullYear()} ToolNest. All rights reserved.</p>
        </footer>
    `;

    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
});
