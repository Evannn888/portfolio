// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    // Add click event listener to hamburger menu
    hamburger.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation list
        navList.classList.toggle('active');
        
        // Optional: Add animation to hamburger icon
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navList.contains(event.target)) {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    
    if (darkModeToggle) {
        const darkModeIcon = darkModeToggle.querySelector('i');

        // Helper to set icon
        function updateDarkModeIcon(isDark) {
            if (isDark) {
                darkModeIcon.classList.remove('fa-moon');
                darkModeIcon.classList.add('fa-sun');
            } else {
                darkModeIcon.classList.remove('fa-sun');
                darkModeIcon.classList.add('fa-moon');
            }
        }

        // Load preference
        const darkPref = localStorage.getItem('darkMode');
        if (darkPref === 'enabled' || (darkPref === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            body.classList.add('dark-mode');
            updateDarkModeIcon(true);
        } else {
            body.classList.remove('dark-mode');
            updateDarkModeIcon(false);
        }

        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isDark = body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
            updateDarkModeIcon(isDark);
            console.log('Dark mode toggled:', isDark ? 'enabled' : 'disabled');
        });
    }

    // Enhanced scroll-triggered animations
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .experience-card, .project-card, .skill-category, .blog-card, .education-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check for elements in view
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);

    // Typing animation for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 100);
        }, 500);
    }

    // Typing effect for hero subtitle
    const heroSubtitle = document.querySelector('.typing-subtitle');
    if (heroSubtitle) {
        const subtitleText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        let i = 0;
        function typeSubtitle() {
            if (i < subtitleText.length) {
                heroSubtitle.textContent += subtitleText.charAt(i);
                i++;
                setTimeout(typeSubtitle, 60);
            }
        }
        setTimeout(typeSubtitle, 800);
    }

    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Simplified parallax effect for hero section
    function handleParallax() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        }
    }

    window.addEventListener('scroll', handleParallax);
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Smooth page transitions between sections
const navLinks2 = document.querySelectorAll('.nav-link');
navLinks2.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            e.preventDefault();
            // Fade out all sections
            const allSections = document.querySelectorAll('section');
            allSections.forEach(sec => sec.classList.remove('visible', 'fade-section'));
            // Add fade-section to target
            targetSection.classList.add('fade-section');
            setTimeout(() => {
                targetSection.classList.add('visible');
                // Scroll after fade in
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }, 10);
            setTimeout(() => {
                targetSection.classList.remove('fade-section');
            }, 600);
        }
    });
}); 