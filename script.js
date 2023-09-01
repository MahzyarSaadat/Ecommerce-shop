// Script for navigation bar
const navHeader = document.getElementById("header");
const btn = document.querySelector(".nav-toggle i");
const links = document.querySelector(".links");

btn.addEventListener("click", (e) => {
  links.classList.toggle("show-links");
});
