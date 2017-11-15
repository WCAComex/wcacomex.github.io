import parallax from './libs/parallax';

const parallaxContainer = document.querySelector('.section-features');
parallaxContainer.style.overflow = 'hidden';
parallax(parallaxContainer, {
    '.feature-icon': 2, 
    '.feature-text': 2
});