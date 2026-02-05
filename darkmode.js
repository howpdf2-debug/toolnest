document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("darkToggle");

  if (!btn) return;

  // Load saved mode
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
    btn.innerHTML = "☀️";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains)
