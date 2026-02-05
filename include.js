document.addEventListener("DOMContentLoaded", () => {

  // HEADER
  document.getElementById("header").innerHTML = `
    <header class="topbar">
      <a class="logo" href="index.html">ToolNest</a>
      <nav>
        <a href="index.html">Home</a>
        <a href="#tools">Tools</a>
        <button id="darkToggle">🌙</button>
      </nav>
    </header>
  `;

  // FOOTER
  document.getElementById("footer").innerHTML = `
    <footer>
      <p><strong>ToolNest</strong> – Free Online Tools</p>
      <div class="links">
        <a href="index.html">Home</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
      <p>© ${new Date().getFullYear()} ToolNest</p>
    </footer>
  `;
});
