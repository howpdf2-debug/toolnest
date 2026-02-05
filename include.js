


// includes/include.js
async function loadHTML(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error("Failed to load " + file);
    document.getElementById(id).innerHTML = await res.text();
  } catch (e) {
    console.error(e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "includes/header.html");
  loadHTML("footer", "includes/footer.html");
});


