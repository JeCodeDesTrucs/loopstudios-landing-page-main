const buttonMenuOpen = document.querySelector('.main-navigation__mobile-btn__open');
const buttonMenuClose = document.querySelector('.main-navigation__mobile-btn__close');
const mainNav = document.querySelector('.main-navigation');

buttonMenuOpen.addEventListener('click', () => {
    mainNav.classList.add('active-menu');
});

buttonMenuClose.addEventListener('click', () => {
    mainNav.classList.remove('active-menu');
});