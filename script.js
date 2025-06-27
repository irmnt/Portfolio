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

// function toggleList(button) {
//     const container = button.nextElementSibling;
//     const isCollapsed = container.classList.toggle('collapsed');
//     button.textContent = isCollapsed ? 'See More' : 'Close';
//   }

function toggleList(button) {
    const container = button.nextElementSibling;

    if (container.classList.contains('expanded')) {
      // Collapse
      container.style.height = container.scrollHeight + 'px'; // set to full height first
      requestAnimationFrame(() => {
        container.style.height = '0';
        container.classList.remove('expanded');
      });
      button.textContent = 'Show More';
    } else {
      // Expand
      container.classList.add('expanded');
      container.style.height = container.scrollHeight + 'px';
      button.textContent = 'Show Less';
    }
  }