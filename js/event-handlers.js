document
.getElementById("nav-mobile-button")
.addEventListener("click", () => {
  document.getElementById("nav-mobile").style.width = "100%";
  document.getElementById("darken-background").style.display = "block";
});

document
.getElementById("nav-close-button")
.addEventListener("click", () => {
  document.getElementById("darken-background").style.display = "none";
  document.getElementById("nav-mobile").style.width = "0";
});