const burger = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu-responsive");
const xclose = document.querySelector(".nav-close-btn");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelector(".nav-close-btn").addEventListener("click", () => {
  navMenu.classList.remove("active");
});
