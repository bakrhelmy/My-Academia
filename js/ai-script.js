document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const animateOnScrollElements = document.querySelectorAll('.feature-card, .step, .tech-card, .result-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            } else {
            }
        });
    }, { threshold: 0.1 });

    animateOnScrollElements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });

    window.openModal = function(src, captionText) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById("modalImage");
        const caption = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = src;
        caption.innerHTML = captionText;
    }

    window.closeModal = function() {
        document.getElementById('imageModal').style.display = "none";
    }

    window.onclick = function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

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