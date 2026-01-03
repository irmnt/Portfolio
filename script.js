document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Initialize theme from localStorage or system preference
    const bgContainer = document.querySelector('.bg-container');
    const storedTheme = localStorage.getItem('theme');

    // helper to apply icon + body class + background opacity var
    function applyTheme(isDark) {
        body.classList.toggle('dark-mode', isDark);
        themeIcon.classList.toggle('bi-sun-fill', isDark);
        themeIcon.classList.toggle('bi-moon-fill', !isDark);

        // update CSS variable used by the background ::before pseudo-element
        if (bgContainer) {
            bgContainer.style.setProperty('--bg-opacity', isDark ? '0.6' : '1');
            // force a reflow to encourage iOS to repaint the pseudo-element
            void bgContainer.offsetWidth;
        }
    }

    if (storedTheme === 'dark') {
        applyTheme(true);
    } else if (storedTheme === 'light') {
        applyTheme(false);
    } else {
        // fallback: use system preference if available
        const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
        const prefersDark = mq ? mq.matches : false;
        applyTheme(prefersDark);

        // if system preference changes and user hasn't chosen a theme, follow it live
        if (mq) {
            mq.addEventListener && mq.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    applyTheme(e.matches);
                }
            });
        }
    }

    // Toggle theme and persist the value
    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode'); // true when dark-mode now active

        themeIcon.classList.toggle('bi-sun-fill', isDark);
        themeIcon.classList.toggle('bi-moon-fill', !isDark);

        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // ensure background var updates and force reflow to repaint pseudo-element on iOS
        if (bgContainer) {
            bgContainer.style.setProperty('--bg-opacity', isDark ? '0.6' : '1');
            // small reflow + optional transform toggle to ensure repaint
            void bgContainer.offsetWidth;
        }
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
