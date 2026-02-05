document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");

  if (!toggle) return;

  // Load saved state
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    toggle.innerText = "☀️";
  }

  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggle.innerText = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggle.innerText = "🌙";
    }
  });
});
