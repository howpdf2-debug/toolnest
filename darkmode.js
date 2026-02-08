const html = document.documentElement;

const savedMode = localStorage.getItem("theme");
if(savedMode === "dark"){
  html.classList.add("dark");
}

document.addEventListener("click", e => {
  if(e.target.id === "darkToggle"){
    html.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      html.classList.contains("dark") ? "dark" : "light"
    );
    e.target.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
  }
});
