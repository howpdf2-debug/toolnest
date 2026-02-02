// ToolNest Global Dark Mode System
(function () {
  const toggleBtn = document.getElementById("darkToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Apply saved or system theme on load
  const savedTheme = localStorage.getItem("toolnest-theme");
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }

  // Toggle theme on button click
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark");
      localStorage.setItem("toolnest-theme", isDark ? "dark" : "light");
      toggleBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }
})();
