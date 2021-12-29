(() => {
    const refs = {
      openMenuBtn: document.querySelector('.open-mobile-menu'),
      closeMenuBtn: document.querySelector('.mobile-menu-closed'),
      menu: document.querySelector('.mob-menu'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden-a');
    }
  })();