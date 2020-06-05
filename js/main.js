const menuBTN = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");

menuBTN.addEventListener("click", function () {
  menu.classList.toggle("active");
})