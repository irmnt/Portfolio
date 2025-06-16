document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Load saved mode from localStorage
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');

        themeIcon.classList.toggle('bi-sun-fill', !isLight);
        themeIcon.classList.toggle('bi-moon-fill', isLight);

        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
});