// Typed.js animation (only on home page)
if (document.getElementById("element")) {
  var typed = new Typed("#element", {
    strings: ["Software Developer", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });
}

// Modal open/close (only on about page)
function openModal() {
  const modal = document.getElementById("contactModal");
  if (modal) modal.style.display = "flex";
}
function closeModal() {
  const modal = document.getElementById("contactModal");
  if (modal) modal.style.display = "none";
}

// Hamburger toggle
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

// Close menu when link clicked
const navLinksMobile = document.querySelectorAll("#nav-menu li a");
navLinksMobile.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
    }
  });
});
