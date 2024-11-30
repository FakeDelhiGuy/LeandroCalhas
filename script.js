document.addEventListener("DOMContentLoaded", () => {
    const menuHamburguer = document.getElementById("menu-hamburguer");
    const navMenu = document.getElementById("nav-menu");

    menuHamburguer.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
function openFullScreen(imgElement) {
    const fullscreen = document.getElementById("fullscreen");
    const fullscreenImg = document.getElementById("fullscreen-img");

    // Define a imagem clicada como a imagem em tela cheia
    fullscreenImg.src = imgElement.src;
    fullscreen.style.display = "flex";
}

function closeFullScreen() {
    const fullscreen = document.getElementById("fullscreen");

    // Esconde o modo tela cheia
    fullscreen.style.display = "none";
}
