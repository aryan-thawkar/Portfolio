gsap.registerPlugin(ScrollTrigger);

// Split text into spans
function splitText(selector) {
    const element = document.querySelector(selector);
    const text = element.textContent;
    element.textContent = '';
    
    return [...text].map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        element.appendChild(span);
        return span;
    });
}

// Initial animations when page loads
window.addEventListener('load', () => {
    // Split and animate name text
    const nameSpans = splitText('.name span');
    
    // Unscramble animation for name
    gsap.from(nameSpans, {
        opacity: 0,
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        rotation: "random(-360, 360)",
        duration: 1.5,
        stagger: 0.05,
        ease: "power4.out"
    });

    // Spinning animation on hover
    const nameElement = document.querySelector('.name span');
    nameElement.addEventListener('mouseenter', () => {
        gsap.to(nameSpans, {
            rotation: 360,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out"
        });
    });

    // Regular text animations
    gsap.to('.greeting', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.to('.role', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power2.out'
    });

    // Animate image with a more dramatic entrance
    gsap.from('.image-container', {
        opacity: 0,
        scale: 0.5,
        rotation: 15,
        duration: 1.2,
        delay: 0.3,
        ease: 'elastic.out(1, 0.7)'
    });
});

// Enhanced floating animation for image
gsap.to('.image-container', {
    y: 15,
    rotation: 3,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});