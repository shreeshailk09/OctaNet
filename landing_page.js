// Scroll-based animations for service cards
// Scroll event to trigger background change
window.addEventListener('scroll', () => {
    const servicesSection = document.querySelector('#services');
    const servicesTop = servicesSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // If the user scrolls into the services section
    if (servicesTop <= windowHeight / 2) {
        servicesSection.classList.add('change-bg', 'fade-in'); // Add GIF background change and animation
    } else {
        servicesSection.classList.remove('change-bg', 'fade-in'); // Remove if scrolled up
    }
});
