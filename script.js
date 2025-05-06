document.addEventListener('DOMContentLoaded', () => {
    // Get all section elements
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    function handleScroll() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.7;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                section.classList.add('in-view');
                navLinks[index + 1].classList.add('active');

                // Animate skill bars when #skills section is in view
                if (section.id === 'skills') {
                    const skillFills = section.querySelectorAll('.skill-fill');
                    skillFills.forEach(fill => {
                        const percentage = fill.getAttribute('data-percentage');
                        fill.style.width = percentage + '%';
                    });
                }

            } else {
                section.classList.remove('in-view');
                navLinks[index + 1].classList.remove('active');

                // Reset skill bars when leaving the section
                if (section.id === 'skills') {
                    const skillFills = section.querySelectorAll('.skill-fill');
                    skillFills.forEach(fill => {
                        fill.style.width = '0';
                    });
                }
            }
        });
    }

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});