const menuMobile = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");

menuMobile.addEventListener("click", () => {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});
