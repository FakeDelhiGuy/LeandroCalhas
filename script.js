document.addEventListener("DOMContentLoaded", () => {
    const menuHamburguer = document.getElementById("menu-hamburguer");
    const navMenu = document.getElementById("nav-menu");

    menuHamburguer.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
