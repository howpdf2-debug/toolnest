// ToolNest Global Dark Mode System

(function () {
  const toggleId = "darkToggle";

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("toolnest-theme") || "light";
  applyTheme(savedTheme);

  // Toggle function
  window.toggleDarkMode = function () {
    const isDark = document.body.classList.toggle("dark");
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("toolnest-theme", theme);
  };

})();

