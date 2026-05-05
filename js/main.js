/* ==========================================================
   KDL Consulting Landing Page Script (Vanilla JS)
   - Handles mobile nav toggle
   - Adds reveal-on-scroll animation to project cards
   - Sets footer year automatically
========================================================== */

// Mobile navigation toggle
const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when any nav link is clicked (better mobile UX)
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal animation for project cards as user scrolls
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -20px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all cards if observer is unavailable
  revealElements.forEach((el) => el.classList.add('show'));
}

// Set footer year automatically
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
