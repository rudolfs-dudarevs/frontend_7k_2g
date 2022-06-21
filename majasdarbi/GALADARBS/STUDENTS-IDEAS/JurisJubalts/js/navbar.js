const toggleButton = document.getElementsByClassName('navbar__toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar__menu')[0];

toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active');
})