document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

  fetch("/components/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
});

function toggleTools(){
  document.getElementById("toolsMenu").classList.toggle("show");
}

