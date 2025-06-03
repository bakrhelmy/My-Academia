document.addEventListener("DOMContentLoaded", function() {
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust this value as needed
            navbar.classList.add('scrolled'); // Add 'scrolled' class
        } else {
            navbar.classList.remove('scrolled'); // Remove 'scrolled' class
        }
    });

    // Animation on scroll using Intersection Observer
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optional: stop observing once animated to save resources
                // observer.unobserve(entry.target);
            } else {
                // Optional: remove 'animate-in' if you want elements to re-animate on scroll back up
                // entry.target.classList.remove('animate-in');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scrolling for navigation (if you have internal #links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Handle potential offset from fixed navbar
            const targetId = this.getAttribute('href').substring(1); // Get target ID without '#'
            const targetElement = document.getElementById(targetId);
            const navbarHeight = navbar ? navbar.offsetHeight : 0; // Get navbar height, default to 0 if not found

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight - 20; // -20 for a little extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
