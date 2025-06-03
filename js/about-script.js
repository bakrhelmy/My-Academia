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

    // Animation on scroll for team cards
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optionally stop observing once animated to save resources
                // observer.unobserve(entry.target);
            } else {
                // Optional: remove 'animate-in' if you want elements to re-animate on scroll back up
                // entry.target.classList.remove('animate-in');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    elements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scrolling for navigation - removed as there are no internal anchors in this context
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
});