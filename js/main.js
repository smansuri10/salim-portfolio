/* ============================================================
main.js
   ============================================================ */

/* Nav: adds shadow when user scrolls down */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

/* Nav: hamburger toggle */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen);
});

/* Nav: close menu when a link is clicked */
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});