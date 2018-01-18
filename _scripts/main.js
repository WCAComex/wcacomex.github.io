console.time('Execução do script');

import htmlComp from './libs/htmlComp';
import screen from './libs/screen';

const parallaxContainer = document.querySelector('.parallax-container');
const mapContainer = document.querySelector('#map-container');
const serviceArticles = document.querySelectorAll('.section-services article');
const topVideoBackground = document.getElementById('top-video-background');

if (topVideoBackground) {
    const s = screen(), w = s.width, h = s.height;
    topVideoBackground.src = 
        w < 400 && h < 400 ? topVideoBackground.getAttribute('data-ld') :
        // w < 700 && h < 700 ? topVideoBackground.getAttribute('data-hd') :
        topVideoBackground.getAttribute('data-hd');
    topVideoBackground.addEventListener('loadedmetadata', function() {
        console.log( 
            w / topVideoBackground.videoWidth, 
            h / topVideoBackground.videoHeight 
        );
    });
    topVideoBackground.addEventListener('canplay', function() {
        this.style.opacity = 1;
        this.play();
    }, false);
};

document.body.addEventListener('touchstart', () => {});

if (parallaxContainer) {
    const siteHeader = document.querySelector('.site-header');
    const parallaxContent = parallaxContainer.querySelector('.parallax-content');
    const maxScrollOffset = parallaxContainer.offsetTop + parallaxContainer.offsetHeight;
    if (parallaxContent) window.addEventListener('gesturechange', handleScroll, {passive: true});
    if (parallaxContent) window.addEventListener('touchmove', handleScroll, {passive: true});
    if (parallaxContent) window.addEventListener('scroll', handleScroll);
    function handleScroll() {
        if (scrollY > maxScrollOffset) return false;
        parallaxContent.style.transform = `translateY(${scrollY * .5}px)`;
        siteHeader.style.transform = `translateY(${scrollY * .75}px)`;
    };
};

if (serviceArticles.length) {
    window.addEventListener('scroll', function() {
        Array.prototype.forEach.call(serviceArticles, item => {
            const vBegin = item.offsetTop - window.innerHeight * .8;
            const vEnd = item.offsetTop + item.offsetHeight * .8;
            if (scrollY < vBegin) {
                item.classList.add('bellow-screen');
                item.classList.remove('above-screen');
            }
            else if (scrollY > vEnd) {
                item.classList.remove('bellow-screen');
                item.classList.add('above-screen');
            }
            else {
                item.classList.remove('bellow-screen');
                item.classList.remove('above-screen');
            };
        });
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
