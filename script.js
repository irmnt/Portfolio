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
    const skill = document.querySelectorAll('.skill-icons');
    const service = document.querySelectorAll('.service');

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

        // animation for service cards
        service.forEach(service => {
            const top = service.getBoundingClientRect().top;

            if (top < triggerPoint) {
                service.classList.add('in-view');
            } else {
                service.classList.remove('in-view');
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

        // animation for skills items
        skill.forEach(skill => {
            const top = skill.getBoundingClientRect().top;

            if (top < triggerPoint) {
                skill.classList.add('in-view');
            } else {
                skill.classList.remove('in-view');
            }
        });


    }

    animateSectionsOnScroll(); // initial check
    window.addEventListener('scroll', animateSectionsOnScroll);
});

function toggleList(button) {
    const container = button.nextElementSibling;
    const icon = button.querySelector('i'); // get the icon element
    const label = button.querySelector('span'); // optional: for label like "Show More"

    if (container.classList.contains('expanded')) {
        // Collapse
        container.style.height = container.scrollHeight + 'px';
        requestAnimationFrame(() => {
            container.style.height = '0';
            container.classList.remove('expanded');
        });

        icon.classList.remove('bi-chevron-up');
        icon.classList.add('bi-chevron-down');
        if (label) label.textContent = 'Show More';
    } else {
        // Expand
        container.classList.add('expanded');
        container.style.height = container.scrollHeight + 'px';

        icon.classList.remove('bi-chevron-down');
        icon.classList.add('bi-chevron-up');
        if (label) label.textContent = 'Show Less';
    }
}
