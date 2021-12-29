(() => {
    const refs = {
      openModalBtn: document.querySelector('.open-mobile-menu'),
      closeModalBtn: document.querySelector('.mobile-menu-closed'),
      modal: document.querySelector('.mob-menu'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('.is-hidden-a');
    }
  })();