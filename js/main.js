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
        topVideoBackground.src = screen().width > 600 ? topVideoBackground.dataset.src : topVideoBackground.dataset.mobile;
        topVideoBackground.addEventListener('load', function () {
            this.play();
        });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwic2NyZWVuIiwidyIsIndpbmRvdyIsImQiLCJlIiwiZG9jdW1lbnRFbGVtZW50IiwiZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnNvbGUiLCJ0aW1lIiwicGFyYWxsYXhDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibWFwQ29udGFpbmVyIiwic2VydmljZUFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcFZpZGVvQmFja2dyb3VuZCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwiZGF0YXNldCIsIm1vYmlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5IiwiYm9keSIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFkiLCJtYXhTY3JvbGxPZmZzZXQiLCJwYXJhbGxheENvbnRlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNpdGVIZWFkZXIiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJwYXNzaXZlIiwibGVuZ3RoIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsInZCZWdpbiIsIml0ZW0iLCJ2RW5kIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsVG9NYXAiLCJhcHBlbmRDaGlsZCIsImdldEF0dHJpYnV0ZSIsImZyYW1lYm9yZGVyIiwiYWxsb3dmdWxsc2NyZWVuIiwiZGlzcGxheSIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aW1lRW5kIl0sIm1hcHBpbmdzIjoiOztBQUFDLGFBQVk7QUFDYjs7QUFFQSxRQUFJQSxXQUFXLFNBQVhBLFFB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Q3BEbEIseUJBQWFpQyxXQUFiLENBQXlCM0QsU0FBUyxRQUFULEVBQW1CO0FBQ3hDK0IscUJBQUtMLGFBQWFrQyxZQUFiLENBQTBCLGFBQTFCLENBRG1DO0FBRXhDNUMsdUJBQU9VLGFBQWFrQyxZQUFiLENBQTBCLFlBQTFCLENBRmlDO0FBR3hDekMsd0JBQVFPLGFBQWFrQyxZQUFiLENBQTBCLGFBQTFCLENBSGdDO0FBSXhDQyw2QkFBYSxHQUoyQjtBQUt4Q0MsaUNBQWlCLElBTHVCO0FBTXhDckIsdUJBQU87QUFDSHNCLDZCQUFTLE9BRE47QUFFSEMsNEJBQVEsR0FGTDtBQUdIQyxxQ0FBaUI7QUFIZDtBQU5pQyxhQUFuQixDQUF6QjtBQVlBdkQsbUJBQU93RCxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsV0FBckM7QUFDSCxTQWZEO0FBZ0JIOztBQUVEcEMsWUFBUTZDLE9BQVIsQ0FBZ0Isb0JBQWhCO0FBRUMsQ0E5RkEsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWxDb21wID0gZnVuY3Rpb24oZWxlbWVudCwgcHJvcHMpIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYgKHByb3BzKSBleHRlbmRPYmooZWxlbWVudCwgcHJvcHMpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGV4dGVuZE9iaihvYmosIHByb3BzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3R5bGUnIHx8IHByb3AgPT09ICdkYXRhc2V0JykgZXh0ZW5kT2JqKGVsZW1lbnRbcHJvcF0sIHByb3BzW3Byb3BdKTtcclxuICAgICAgICAgICAgZWxzZSBvYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciBzY3JlZW4gPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHc9d2luZG93LGQ9ZG9jdW1lbnQsZT1kLmRvY3VtZW50RWxlbWVudCxnPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSx3aWR0aD13LmlubmVyV2lkdGh8fGUuY2xpZW50V2lkdGh8fGcuY2xpZW50V2lkdGgsaGVpZ2h0PXcuaW5uZXJIZWlnaHR8fGUuY2xpZW50SGVpZ2h0fHxnLmNsaWVudEhlaWdodDtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgfVxyXG59O1xuXG5jb25zb2xlLnRpbWUoJ0V4ZWN1w6fDo28gZG8gc2NyaXB0Jyk7XHJcblxyXG5jb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250YWluZXInKTtcclxuY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1jb250YWluZXInKTtcclxuY29uc3Qgc2VydmljZUFydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24tc2VydmljZXMgYXJ0aWNsZScpO1xyXG5jb25zdCB0b3BWaWRlb0JhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLXZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbmlmICh0b3BWaWRlb0JhY2tncm91bmQpIHtcclxuICAgIHRvcFZpZGVvQmFja2dyb3VuZC5zcmMgPSBzY3JlZW4oKS53aWR0aCA+IDYwMCA/IHRvcFZpZGVvQmFja2dyb3VuZC5kYXRhc2V0LnNyYyA6IHRvcFZpZGVvQmFja2dyb3VuZC5kYXRhc2V0Lm1vYmlsZTtcclxuICAgIHRvcFZpZGVvQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7dGhpcy5wbGF5KCk7fSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHt9KTtcclxuXHJcbmlmIChwYXJhbGxheENvbnRhaW5lcikge1xyXG4gICAgY29uc3Qgc2l0ZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xyXG4gICAgY29uc3QgcGFyYWxsYXhDb250ZW50ID0gcGFyYWxsYXhDb250YWluZXIucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1heFNjcm9sbE9mZnNldCA9IHBhcmFsbGF4Q29udGFpbmVyLm9mZnNldFRvcCArIHBhcmFsbGF4Q29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdnZXN0dXJlY2hhbmdlJywgaGFuZGxlU2Nyb2xsLCB7cGFzc2l2ZTogdHJ1ZX0pO1xyXG4gICAgaWYgKHBhcmFsbGF4Q29udGVudCkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVNjcm9sbCwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxZID4gbWF4U2Nyb2xsT2Zmc2V0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcGFyYWxsYXhDb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c2Nyb2xsWSAqIC41fXB4KWA7XHJcbiAgICAgICAgc2l0ZUhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNzV9cHgpYDtcclxuICAgIH1cclxufVxyXG5cclxuaWYgKHNlcnZpY2VBcnRpY2xlcy5sZW5ndGgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNlcnZpY2VBcnRpY2xlcywgaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZCZWdpbiA9IGl0ZW0ub2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0ICogLjg7XHJcbiAgICAgICAgICAgIGNvbnN0IHZFbmQgPSBpdGVtLm9mZnNldFRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0ICogLjg7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxZIDwgdkJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2Nyb2xsWSA+IHZFbmQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYmVsbG93LXNjcmVlbicpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhYm92ZS1zY3JlZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYmVsbG93LXNjcmVlbicpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhYm92ZS1zY3JlZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmIChtYXBDb250YWluZXIpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiBzY3JvbGxUb01hcCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSArIGlubmVySGVpZ2h0IDwgbWFwQ29udGFpbmVyLm9mZnNldFRvcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIG1hcENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sQ29tcCgnaWZyYW1lJywge1xyXG4gICAgICAgICAgICBzcmM6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWZyYW1lJyksXHJcbiAgICAgICAgICAgIHdpZHRoOiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZHRoJyksXHJcbiAgICAgICAgICAgIGhlaWdodDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSxcclxuICAgICAgICAgICAgZnJhbWVib3JkZXI6IFwiMFwiLFxyXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjODg4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb01hcCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc29sZS50aW1lRW5kKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xuXG59KCkpO1xuIl19
