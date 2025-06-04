document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(11, 33, 49, 0.9)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});