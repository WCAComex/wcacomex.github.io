export default function(parent, fx) {

    if (typeof parent === 'string') parent = document.querySelector(parent);
    if (!parent) return console.log('Parallax container not found');

    const boundings = { top: parent.offsetTop - window.innerHeight, bottom: parent.offsetTop + parent.offsetHeight };

    for (const item in fx) {
        const selector = fx[item].element;
        if (typeof selector === 'string') fx[item].element = parent.querySelector(selector);
        if (!fx[item].element) console.log(`Child "${selector}" not found!`);
    };

    window.addEventListener('scroll', function(){
        if (scrollY > boundings.top && scrollY < boundings.bottom) for (const item in fx) translate(fx[item]);
    });

    function translate(effect) {
        if (!effect) return false;
        const translation = (scrollY - parent.offsetTop) / effect.level;
        effect.element.style.transform = `translateY(${translation}px)`;
    }

};