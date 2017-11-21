console.time('Execução do script');

const parallaxContainer = document.querySelector('.section-hero');
const parallaxContent = parallaxContainer.querySelector('.wrapper');
const mapContainer = document.querySelector('#map-container');


window.addEventListener('scroll', function() {
    if (scrollY > parallaxContainer.offsetTop + parallaxContainer.offsetHeight) return false;
    parallaxContent.style.transform = `translateY(${scrollY / 3}px)`;
});


window.addEventListener('scroll', function scrollToMap() {
    
    if (scrollY + innerHeight < mapContainer.offsetTop) return false;
    
    const mapIframe = document.createElement('iframe');
    mapIframe.src = mapContainer.getAttribute('data-iframe');
    mapIframe.width = mapContainer.getAttribute('data-width');
    mapIframe.height = mapContainer.getAttribute('data-height');
    mapIframe.frameborder = "0";
    mapIframe.style.border = "0";
    mapIframe.setAttribute('allowfullscreen', true);
    mapIframe.style.backgroundColor = '#eee';
    mapContainer.appendChild(mapIframe);
    
    window.removeEventListener('scroll', scrollToMap);
    
});

console.timeEnd('Execução do script');
