console.time('Execução do script');

import htmlComp from './libs/htmlComp';

const parallaxContainer = document.querySelector('.section-hero');
const parallaxContent = parallaxContainer.querySelector('.hero-content');
const mapContainer = document.querySelector('#map-container');


window.addEventListener('scroll', function() {
    if (scrollY > parallaxContainer.offsetTop + parallaxContainer.offsetHeight) return false;
    parallaxContent.style.transform = `translateY(${scrollY / 3}px)`;
});


window.addEventListener('scroll', function scrollToMap() {
    
    if (scrollY + innerHeight < mapContainer.offsetTop) return false;

    mapContainer.appendChild(htmlComp('iframe', {
        src: mapContainer.getAttribute('data-iframe'),
        width: mapContainer.getAttribute('data-width'),
        height: mapContainer.getAttribute('data-height'),
        frameborder: "0",
        allowfullscreen: true,
        style: {
            display: 'block',
            height: '100vh',
            border: '0',
            backgroundColor: '#eee'
        }
    }));
    
    window.removeEventListener('scroll', scrollToMap);
    
});

console.timeEnd('Execução do script');
