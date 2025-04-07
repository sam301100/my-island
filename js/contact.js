document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add scroll animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all contact cards and message
    const elementsToObserve = [...contactCards, document.querySelector('.contact-message')];
    
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });

    // Add smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add click animation to contact buttons
    const contactButtons = document.querySelectorAll('.contact-button');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Only prevent default if it's not an actual link
            if (!button.getAttribute('href').startsWith('mailto:') && 
                !button.getAttribute('href').startsWith('http')) {
                e.preventDefault();
            }
            
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                // Only navigate if it's not an external link or mailto
                if (!button.getAttribute('href').startsWith('mailto:') && 
                    !button.getAttribute('href').startsWith('http')) {
                    window.location.href = button.getAttribute('href');
                }
            }, 200);
        });
    });
});