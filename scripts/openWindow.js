document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burgerMenu");
    const windowContainer = document.querySelector(".menuWindow__container");
    const menuWindow = document.querySelector(".menuWindow");
    const closeWindow = document.querySelector(".closeWindow");

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
