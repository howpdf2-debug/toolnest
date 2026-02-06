document.addEventListener("DOMContentLoaded", () => {

  /* LOAD HEADER */
  fetch("includes/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      initHeaderFeatures();
    });

  /* LOAD FOOTER */
  fetch("includes/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

});

/* HEADER JS */
function initHeaderFeatures(){

  /* DARK MODE */
  const toggle = document.getElementById("darkToggle");
  if(toggle){
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark") ? "on" : "off"
      );
    });
  }

  if(localStorage.getItem("darkMode") === "on"){
    document.body.classList.add("dark");
  }

  /* EXPLORE TOOLS DROPDOWN */
  const btn = document.getElementById("toolsBtn");
  const menu = document.getElementById("toolsMenu");

  if(btn && menu){
    btn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
}
