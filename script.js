const menuButton = document.querySelector('.navbar__menu');
const sportsMenu = document.getElementById('sportsMenu');

menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  sportsMenu.classList.toggle('sports-menu--open');
});

document.addEventListener('click', (e) => {
  if (!sportsMenu.contains(e.target) && !menuButton.contains(e.target)) {
    sportsMenu.classList.remove('sports-menu--open');
  }
});