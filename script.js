document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isLight = body.classList.contains('dark-mode');

        themeIcon.classList.toggle('bi-sun-fill', isLight);
        themeIcon.classList.toggle('bi-moon-fill', !isLight);

        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Scroll Animation
    const sections = document.querySelectorAll('section');
    const card = document.querySelectorAll('.project-card');

    function animateSectionsOnScroll() {
        const triggerPoint = window.innerHeight * 0.85;

        // animation for sections
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;

            if (top < triggerPoint) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });

        // animation for project cards
        card.forEach(card => {
            const top = card.getBoundingClientRect().top;

            if (top < triggerPoint) {
                card.classList.add('in-view');
            } else {
                card.classList.remove('in-view');
            }
        });

        
    }

    animateSectionsOnScroll(); // initial check
    window.addEventListener('scroll', animateSectionsOnScroll);
});
