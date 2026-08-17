
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.global-nav');
const overlay = document.querySelector('.menu-overlay');


hamburger.addEventListener('click', () => {
nav.classList.toggle('open');
hamburger.classList.toggle('active');
overlay.classList.toggle('open');
});