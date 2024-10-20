document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-link');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});