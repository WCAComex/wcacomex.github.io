export default function(parent, children) {
    if (typeof parent === 'string') parent = document.querySelector(parent);
    if (!parent) return console.log('Parallax container not found');
    const offset = parent.offsetTop;
    window.addEventListener('scroll', function(){
        const boundings = parent.getBoundingClientRect();
        const isOnScreen = boundings.top < innerHeight && boundings.bottom > 0;
        if (isOnScreen) translate(children);
    });
    function translate(children) {
        for (const selector in children) {
            const el = typeof selector === 'string' ? parent.querySelector(selector) : selector;
            if (!el) return console.log('Child not found');
            const scrollAmount = Math.max(0 - el.offsetTop, (scrollY - offset) / children[selector]);
            el.style.transform = 'translateY('+ scrollAmount +'px)';
        };
    }
};