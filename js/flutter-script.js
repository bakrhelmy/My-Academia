document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            } else {
            }
        });
    }, { threshold: 0.1 });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});