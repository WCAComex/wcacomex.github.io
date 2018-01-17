'use strict';

(function () {
    'use strict';

    var htmlComp = function htmlComp(element, props) {
        if (typeof element === 'string') element = document.createElement(element);
        if (props) extendObj(element, props);
        return element;

        function extendObj(obj, props) {
            for (var prop in props) {
                if (prop === 'style' || prop === 'dataset') extendObj(element[prop], props[prop]);else obj[prop] = props[prop];
            }
        }
    };

    var screen = function screen() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            width = w.innerWidth || e.clientWidth || g.clientWidth,
            height = w.innerHeight || e.clientHeight || g.clientHeight;
        return {
            width: width,
            height: height
        };
    };

    console.time('Execução do script');

    var parallaxContainer = document.querySelector('.parallax-container');
    var mapContainer = document.querySelector('#map-container');
    var serviceArticles = document.querySelectorAll('.section-services article');
    var topVideoBackground = document.getElementById('top-video-background');

    if (topVideoBackground) {
        var s = screen(),
            w = s.width,
            h = s.height;
        var container = topVideoBackground.parentElement;
        topVideoBackground.src = w < 500 && h < 500 ? topVideoBackground.getAttribute('data-lq') : w < 700 && h < 700 ? topVideoBackground.getAttribute('data-hq') : topVideoBackground.getAttribute('data-4k');
        container.style.width = h * topVideoBackground.videoWidth / topVideoBackground.videoHeight;
        container.style.height = w * topVideoBackground.videoHeight / topVideoBackground.videoWidth;
        topVideoBackground.addEventListener('canplay', function () {
            this.play();
        }, false);
    }

    document.body.addEventListener('touchstart', function () {});

    if (parallaxContainer) {
        var handleScroll = function handleScroll() {
            if (scrollY > maxScrollOffset) return false;
            parallaxContent.style.transform = 'translateY(' + scrollY * .5 + 'px)';
            siteHeader.style.transform = 'translateY(' + scrollY * .75 + 'px)';
        };

        var siteHeader = document.querySelector('.site-header');
        var parallaxContent = parallaxContainer.querySelector('.parallax-content');
        var maxScrollOffset = parallaxContainer.offsetTop + parallaxContainer.offsetHeight;
        if (parallaxContent) window.addEventListener('gesturechange', handleScroll, { passive: true });
        if (parallaxContent) window.addEventListener('touchmove', handleScroll, { passive: true });
        if (parallaxContent) window.addEventListener('scroll', handleScroll);
    }

    if (serviceArticles.length) {
        window.addEventListener('scroll', function () {
            Array.prototype.forEach.call(serviceArticles, function (item) {
                var vBegin = item.offsetTop - window.innerHeight * .8;
                var vEnd = item.offsetTop + item.offsetHeight * .8;
                if (scrollY < vBegin) {
                    item.classList.add('bellow-screen');
                    item.classList.remove('above-screen');
                } else if (scrollY > vEnd) {
                    item.classList.remove('bellow-screen');
                    item.classList.add('above-screen');
                } else {
                    item.classList.remove('bellow-screen');
                    item.classList.remove('above-screen');
                }
            });
        });
    }

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
    }

    console.timeEnd('Execução do script');
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwic2NyZWVuIiwidyIsIndpbmRvdyIsImQiLCJlIiwiZG9jdW1lbnRFbGVtZW50IiwiZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnNvbGUiLCJ0aW1lIiwicGFyYWxsYXhDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibWFwQ29udGFpbmVyIiwic2VydmljZUFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcFZpZGVvQmFja2dyb3VuZCIsImdldEVsZW1lbnRCeUlkIiwicyIsImgiLCJjb250YWluZXIiLCJwYXJlbnRFbGVtZW50Iiwic3JjIiwiZ2V0QXR0cmlidXRlIiwic3R5bGUiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsImJvZHkiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxZIiwibWF4U2Nyb2xsT2Zmc2V0IiwicGFyYWxsYXhDb250ZW50IiwidHJhbnNmb3JtIiwic2l0ZUhlYWRlciIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInBhc3NpdmUiLCJsZW5ndGgiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwidkJlZ2luIiwiaXRlbSIsInZFbmQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxUb01hcCIsImFwcGVuZENoaWxkIiwiZnJhbWVib3JkZXIiLCJhbGxvd2Z1bGxzY3JlZW4iLCJkaXNwbGF5IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpbWVFbmQiXSwibWFwcGluZ3Mi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JztcblxudmFyIGh0bWxDb21wID0gZnVuY3Rpb24oZWxlbWVudCwgcHJvcHMpIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYgKHByb3BzKSBleHRlbmRPYmooZWxlbWVudCwgcHJvcHMpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGV4dGVuZE9iaihvYmosIHByb3BzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3R5bGUnIHx8IHByb3AgPT09ICdkYXRhc2V0JykgZXh0ZW5kT2JqKGVsZW1lbnRbcHJvcF0sIHByb3BzW3Byb3BdKTtcclxuICAgICAgICAgICAgZWxzZSBvYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciBzY3JlZW4gPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHc9d2luZG93LGQ9ZG9jdW1lbnQsZT1kLmRvY3VtZW50RWxlbWVudCxnPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSx3aWR0aD13LmlubmVyV2lkdGh8fGUuY2xpZW50V2lkdGh8fGcuY2xpZW50V2lkdGgsaGVpZ2h0PXcuaW5uZXJIZWlnaHR8fGUuY2xpZW50SGVpZ2h0fHxnLmNsaWVudEhlaWdodDtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgfVxyXG59O1xuXG5jb25zb2xlLnRpbWUoJ0V4ZWN1w6fDo28gZG8gc2NyaXB0Jyk7XHJcblxyXG5jb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250YWluZXInKTtcclxuY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1jb250YWluZXInKTtcclxuY29uc3Qgc2VydmljZUFydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24tc2VydmljZXMgYXJ0aWNsZScpO1xyXG5jb25zdCB0b3BWaWRlb0JhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLXZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbmlmICh0b3BWaWRlb0JhY2tncm91bmQpIHtcclxuICAgIGNvbnN0IHMgPSBzY3JlZW4oKSwgdyA9IHMud2lkdGgsIGggPSBzLmhlaWdodDtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRvcFZpZGVvQmFja2dyb3VuZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgdG9wVmlkZW9CYWNrZ3JvdW5kLnNyYyA9IFxyXG4gICAgICAgIHcgPCA1MDAgJiYgaCA8IDUwMCA/IHRvcFZpZGVvQmFja2dyb3VuZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbHEnKSA6XHJcbiAgICAgICAgdyA8IDcwMCAmJiBoIDwgNzAwID8gdG9wVmlkZW9CYWNrZ3JvdW5kLmdldEF0dHJpYnV0ZSgnZGF0YS1ocScpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BWaWRlb0JhY2tncm91bmQuZ2V0QXR0cmlidXRlKCdkYXRhLTRrJyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggID0gaCAqIHRvcFZpZGVvQmFja2dyb3VuZC52aWRlb1dpZHRoIC8gdG9wVmlkZW9CYWNrZ3JvdW5kLnZpZGVvSGVpZ2h0O1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHcgKiB0b3BWaWRlb0JhY2tncm91bmQudmlkZW9IZWlnaHQgLyB0b3BWaWRlb0JhY2tncm91bmQudmlkZW9XaWR0aDtcclxuICAgIHRvcFZpZGVvQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgZnVuY3Rpb24oKSB7dGhpcy5wbGF5KCk7fSwgZmFsc2UpO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSk7XHJcblxyXG5pZiAocGFyYWxsYXhDb250YWluZXIpIHtcclxuICAgIGNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcclxuICAgIGNvbnN0IHBhcmFsbGF4Q29udGVudCA9IHBhcmFsbGF4Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYXhTY3JvbGxPZmZzZXQgPSBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRUb3AgKyBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2VzdHVyZWNoYW5nZScsIGhhbmRsZVNjcm9sbCwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVTY3JvbGwsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSA+IG1heFNjcm9sbE9mZnNldCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHBhcmFsbGF4Q29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNX1weClgO1xyXG4gICAgICAgIHNpdGVIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZICogLjc1fXB4KWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChzZXJ2aWNlQXJ0aWNsZXMubGVuZ3RoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzZXJ2aWNlQXJ0aWNsZXMsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2QmVnaW4gPSBpdGVtLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAqIC44O1xyXG4gICAgICAgICAgICBjb25zdCB2RW5kID0gaXRlbS5vZmZzZXRUb3AgKyBpdGVtLm9mZnNldEhlaWdodCAqIC44O1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsWSA8IHZCZWdpbikge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdiZWxsb3ctc2NyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3ZlLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNjcm9sbFkgPiB2RW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAobWFwQ29udGFpbmVyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gc2Nyb2xsVG9NYXAoKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFkgKyBpbm5lckhlaWdodCA8IG1hcENvbnRhaW5lci5vZmZzZXRUb3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbENvbXAoJ2lmcmFtZScsIHtcclxuICAgICAgICAgICAgc3JjOiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlmcmFtZScpLFxyXG4gICAgICAgICAgICB3aWR0aDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGVpZ2h0JyksXHJcbiAgICAgICAgICAgIGZyYW1lYm9yZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzg4OCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9NYXApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnNvbGUudGltZUVuZCgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcblxufSgpKTtcbiJdfQ==
