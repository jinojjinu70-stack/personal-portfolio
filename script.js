document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    const iframe = document.getElementById('hidden_iframe');

    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            // Show popup immediately after submit (assuming success)
            // We can't easily detect failure with a cross-origin form post to Google
            setTimeout(() => {
                contactForm.reset();
                document.getElementById('success-modal').classList.add('show');
            }, 500);
        });
    }

    window.closePopup = function () {
        document.getElementById('success-modal').classList.remove('show');
    };

    // Optional: Add scroll animation class
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
