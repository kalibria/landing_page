document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burgerMenu");
    const menuWindow = document.querySelector(".menuWindow");

    burgerMenu.addEventListener("click", function () {
        // Переключение состояния активного меню
        burgerMenu.classList.toggle("active");
        menuWindow.classList.toggle("open");
    });
});
