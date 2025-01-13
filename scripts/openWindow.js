document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burgerMenu");
    const windowContainer = document.querySelector(".menu");
    const menuWindow = document.querySelector(".menu__window");
    const closeWindow = document.querySelector(".menu__close");

    burgerMenu.addEventListener("click", function () {
        burgerMenu.classList.toggle("active");
        menuWindow.classList.toggle("open");
        windowContainer.classList.toggle("open");
    });

    closeWindow.addEventListener("click", function () {
        burgerMenu.classList.remove("active");
        menuWindow.classList.remove("open");
        windowContainer.classList.remove("open");
    })
});
