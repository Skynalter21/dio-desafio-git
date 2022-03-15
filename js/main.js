function iniciaModal(modalID) {
    const modal = document.getElementById(modalID)
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'fechar-modal')
                modal.classList.remove('mostrar');
        });
    }
}

const info = document.querySelector('.info');
info.addEventListener('click', () => iniciaModal('modal-informacao'));