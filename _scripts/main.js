console.time('Execução do script');

import htmlComp from './libs/htmlComp';

const parallaxContainer = document.querySelector('.parallax-container');
const mapContainer = document.querySelector('#map-container');

document.body.addEventListener('touchstart', () => {});

if (parallaxContainer) {
    const siteHeader = document.querySelector('.site-header');
    const parallaxContent = parallaxContainer.querySelector('.parallax-content');
    if (parallaxContent) window.addEventListener('scroll', function() {
        if (scrollY > parallaxContainer.offsetTop + parallaxContainer.offsetHeight) return false;
        parallaxContent.style.transform = `translateY(${scrollY * .5}px)`;
        siteHeader.style.transform = `translateY(${scrollY * .75}px)`;
    });
};

if (mapContainer) {
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
                border: '0',
                backgroundColor: '#888'
            }
        }));
        window.removeEventListener('scroll', scrollToMap);
    });
};

console.timeEnd('Execução do script');
