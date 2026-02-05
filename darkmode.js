// darkmode.js (FINAL – WORKS WITH JS INCLUDES)
(function () {
  function initDarkMode() {
    const toggle = document.getElementById("darkToggle");
    if (!toggle) return;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      toggle.textContent = "☀️";
    }

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggle.textContent = isDark ? "☀️" : "🌙";
    });
  }

  // try immediately
  document.addEventListener("DOMContentLoaded", initDarkMode);

  // retry after header is injected
  const observer = new MutationObserver(initDarkMode);
  observer.observe(document.body, { childList: true, subtree: true });
})();
