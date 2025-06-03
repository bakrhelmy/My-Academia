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

    // No specific "animate on scroll" elements or smooth scrolling defined in your smart-parking.html
    // If you add .animate-on-scroll classes to elements, you can add IntersectionObserver logic here.
});