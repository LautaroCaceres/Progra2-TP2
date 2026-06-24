const sportsGrid = document.getElementById('sportsGrid');
const sportsToggle = document.getElementById('sportsToggle');
const sportsGridFloating = document.getElementById('sportsGridFloating');

const SCROLL_THRESHOLD = 50;

function handleScroll() {
  if (window.scrollY > SCROLL_THRESHOLD) {
    sportsGrid.classList.add('sports-grid--collapsed');
    sportsToggle.classList.add('sports-toggle--visible');
  } else {
    sportsGrid.classList.remove('sports-grid--collapsed');
    sportsToggle.classList.remove('sports-toggle--visible');
    sportsGridFloating.classList.remove('sports-grid--open');
    sportsToggle.classList.remove('sports-toggle--open');
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

sportsToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  sportsGridFloating.classList.toggle('sports-grid--open');
  sportsToggle.classList.toggle('sports-toggle--open');
});

document.addEventListener('click', (e) => {
  const isOpen = sportsGridFloating.classList.contains('sports-grid--open');
  if (isOpen && !sportsGridFloating.contains(e.target) && !sportsToggle.contains(e.target)) {
    sportsGridFloating.classList.remove('sports-grid--open');
    sportsToggle.classList.remove('sports-toggle--open');
  }
});

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

// Carrusel de Resúmenes (automático, 1 card a la vez)
const resumenesTrack = document.getElementById('resumenesTrack');
const resumenCards = resumenesTrack.querySelectorAll('.resumen-card');
const cardWidth = 334 + 50; // ancho + gap
let resumenIndex = 0;

function nextResumen() {
  resumenIndex = (resumenIndex + 1) % resumenCards.length;
  resumenesTrack.style.transform = `translateX(-${resumenIndex * cardWidth}px)`;
}

setInterval(nextResumen, 3500);

// Carrusel de Tendencias (automático, 6 segundos)
const tendenciasTrack = document.getElementById('tendenciasTrack');
const tendenciaCards = tendenciasTrack.querySelectorAll('.tendencia-card');
const tendenciaCardWidth = 226 + 25; // ancho + gap
let tendenciaIndex = 0;

function nextTendencia() {
  tendenciaIndex = (tendenciaIndex + 1) % tendenciaCards.length;
  tendenciasTrack.style.transform = `translateX(-${tendenciaIndex * tendenciaCardWidth}px)`;
}

setInterval(nextTendencia, 6000);