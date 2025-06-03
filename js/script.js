document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust this value as needed
            navbar.style.backgroundColor = 'rgba(11, 33, 49, 0.9)'; // Darker, slightly transparent background on scroll
        } else {
            navbar.style.backgroundColor = 'transparent'; // Transparent when at the top
        }
    });
});