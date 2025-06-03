document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust this value as needed
            navbar.classList.add('scrolled'); // Add 'scrolled' class
        } else {
            navbar.classList.remove('scrolled'); // Remove 'scrolled' class
        }
    });
});