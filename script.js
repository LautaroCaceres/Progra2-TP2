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

// Hero carrusel
const heroTrack = document.getElementById('heroTrack');
const heroDots = document.getElementById('heroDots');
const slides = heroTrack.querySelectorAll('.hero__slide');
const dots = heroDots.querySelectorAll('.hero__dot');
let currentSlide = 0;
let heroInterval;

function goToSlide(index) {
  heroTrack.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove('hero__dot--active'));
  dots[index].classList.add('hero__dot--active');
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

function startAuto() {
  heroInterval = setInterval(nextSlide, 5000);
}

function stopAuto() {
  clearInterval(heroInterval);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    stopAuto();
    goToSlide(i);
    startAuto();
  });
});

startAuto();