// closes hamburger menu on click
const menuToggle = document.getElementById('navbarSupportedContent')
const navLinks = document.querySelectorAll('.nav-item');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l, index) => {
  addEventListener('click', () => { bsCollapse.hide() })
})
