async function loadHTML(id, file) {
  const el = document.getElementById(id);
  if (el) {
    const res = await fetch(file);
    el.innerHTML = await res.text();
  }
}

loadHTML("header", "includes/header.html");
loadHTML("footer", "includes/footer.html");

