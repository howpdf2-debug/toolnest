// darkmode.js
(function () {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark");

  document.addEventListener("click", e => {
    if (e.target.id === "darkToggle") {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
      e.target.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
    }
  });
})();
