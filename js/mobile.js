(() => {
    const refs = {
        openMenuBtn: document.querySelector(".open-mobile-menu"),
        closeMenuBtn: document.querySelector(".mobile-menu-closed"),
        menu: document.querySelector(".mob-menu"),
    };

    refs.open-mobile-menu.addEventListener("click", toggleMenu);
    refs.mobile-menu-closed.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle(".is-hidden-a");
    }
})();