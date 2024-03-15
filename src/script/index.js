"use strict";
(() => {
    const buttonClose = document.querySelector("#nav-close");
    const buttonShow = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector("#nav-menu");
    const handleMenu = () => {
        if (navMenu) {
            navMenu.classList.toggle("show-menu");
        }
    };
    buttonClose.addEventListener("click", handleMenu);
    buttonShow.addEventListener("click", handleMenu);
})();
