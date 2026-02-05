/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => links.classList.remove("active"));
      document
        .querySelector("header nav a[href*=" + id + "]")
        ?.classList.add("active");
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", top > 100);

  /*==================== close menu on scroll ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== close menu when clicking nav links ====================*/
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

/*==================== click profile image to open full ====================*/
const profileImg = document.getElementById("profileImg");
profileImg?.addEventListener("click", () => {
  window.open("images/profile.jpg", "_blank");
});

/*==================== scroll reveal ====================*/
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal({
    reset: false,
    distance: "60px",
    duration: 1200,
    delay: 120,
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(".home-img, .services-container, .skills-container, .portfolio-card, .contact form", {
    origin: "bottom",
  });
  ScrollReveal().reveal(".about-img, .home-content h1", { origin: "left" });
  ScrollReveal().reveal(".about-content, .home-content p", { origin: "right" });
}

/*==================== typed js ====================*/
if (typeof Typed !== "undefined") {
  new Typed(".multiple-text", {
    strings: ["Data Analyst", "Data Scientist", "Data Engineer"],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1200,
    loop: true,
  });
}

/*==================== set footer year ====================*/
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/*==================== always open Home first ====================*/
window.addEventListener("DOMContentLoaded", () => {
  // remove any hash like #portfolio
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
});
