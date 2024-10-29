document.addEventListener('DOMContentLoaded', function () {
    const carItems = document.querySelectorAll('.car-item');
    const logoSlides = document.querySelectorAll('.logos-slide'); // Get all logo slider elements
    const logoItems = document.querySelectorAll('.logo-item');
    const logoContainer = document.querySelector('.logo-container'); // The container itself
    const expandedContainer = document.querySelector('.divindiv'); // The container itself
    let currentIndex = 0;
    const totalImages = carItems.length;

    logoSlides.forEach(element => {
        element.style.animationName = "slide"; // Assuming 'slide' is the animation in CSS
        element.style.animationDuration = "10s"; // Set the duration dynamically
        element.style.animationTimingFunction = "linear";
        element.style.animationIterationCount = "infinite";  // Remove the class to resume animation
    });
});
