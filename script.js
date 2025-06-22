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