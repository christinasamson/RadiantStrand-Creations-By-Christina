const toggleMenu = document.querySelector('toggle-menu')
const navMenu = document.querySelector('nav-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});