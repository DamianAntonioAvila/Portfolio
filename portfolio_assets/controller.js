import { TYPED_STRINGS } from './model.js';
import { qs, qsa, renderSkills, renderTimeline, renderProjects, renderMusic, initReveal } from './view.js';

function initCursor() {
  const cursor = qs('#cursor');
  const ring = qs('#cursor-ring');
  if (!cursor || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }

  animateRing();
}

function initNav() {
  const nav = qs('#nav');
  const hamburger = qs('#hamburger');
  const mobileMenu = qs('#mobileMenu');

  if (!nav || !hamburger || !mobileMenu) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  qsa('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

function initTyped() {
  const element = qs('#typedText');
  if (!element) return;

  let stringIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = TYPED_STRINGS[stringIndex];

    if (deleting) {
      element.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        stringIndex = (stringIndex + 1) % TYPED_STRINGS.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 40);
    } else {
      element.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(tick, 2200);
        return;
      }
      setTimeout(tick, 60);
    }
  }

  setTimeout(tick, 800);
}

function animateCount(element, target, suffix = '') {
  let value = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    value = Math.min(value + step, target);
    element.textContent = `${value}${suffix}`;
    if (value >= target) clearInterval(timer);
  }, 30);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(qs('#countYears'), 19, '+');
        animateCount(qs('#countInstruments'), 7);
        animateCount(qs('#countLangs'), 4);
        animateCount(qs('#countCountries'), 5, '+');
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsElement = qs('.hero-stats');
  if (statsElement) observer.observe(statsElement);
}

function boot() {
  initCursor();
  initNav();
  initTyped();
  initCounters();
  renderSkills();
  renderTimeline();
  renderProjects();
  renderMusic();
  initReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
