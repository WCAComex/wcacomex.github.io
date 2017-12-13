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

    console.time('Execução do script');

    var parallaxContainer = document.querySelector('.parallax-container');
    var mapContainer = document.querySelector('#map-container');
    var serviceArticles = document.querySelectorAll('.section-services article');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwiY29uc29sZSIsInRpbWUiLCJwYXJhbGxheENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJtYXBDb250YWluZXIiLCJzZXJ2aWNlQXJ0aWNsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxZIiwibWF4U2Nyb2xsT2Zmc2V0IiwicGFyYWxsYXhDb250ZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzaXRlSGVhZGVyIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93IiwicGFzc2l2ZSIsImxlbmd0aCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJ2QmVnaW4iLCJpdGVtIiwiaW5uZXJIZWlnaHQiLCJ2RW5kIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsVG9NYXAiLCJhcHBlbmRDaGlsZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZnJhbWVib3JkZXIiLCJhbGxvd2Z1bGxzY3JlZW4iLCJkaXNwbGF5IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpbWVFbmQiXSwibWFwcGluZ3MiOiI7O0FBQUMsYUFBWTtBQUNiOztBQUVBLFFBQUlBLFdBQVcsU0FBWEEsUUFBVyxDQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUF5QjtBQUNwQyxZQUFJLE9BQU9ELE9BQVAsS0FBbUIsUUFBdkIsRUFBaUNBLFVBQVVFLFNBQVNDLGFBQVQsQ0FBdUJILE9BQXZCLENBQVY7QUFDakMsWUFBSUMsS0FBSixFQUFXRyxVQUFVSixPQUFWLEVBQW1CQyxLQUFuQjtBQUNYLGVBQU9ELE9BQVA7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QUFTd0IsV0FBVCxHQUF1QjtBQUNyRCxnQkFBSXRCLFVBQVVpQixXQUFWLEdBQXdCdkIsYUFBYVksU0FBekMsRUFBb0QsT0FBTyxLQUFQO0FBQ3BEWix5QkFBYTZCLFdBQWIsQ0FBeUJ6QyxTQUFTLFFBQVQsRUFBbUI7QUFDeEMwQyxxQkFBSzlCLGFBQWErQixZQUFiLENBQTBCLGFBQTFCLENBRG1DO0FBRXhDQyx1QkFBT2hDLGFBQWErQixZQUFiLENBQTBCLFlBQTFCLENBRmlDO0FBR3hDRSx3QkFBUWpDLGFBQWErQixZQUFiLENBQTBCLGFBQTFCLENBSGdDO0FBSXhDRyw2QkFBYSxHQUoyQjtBQUt4Q0MsaUNBQWlCLElBTHVCO0FBTXhDMUIsdUJBQU87QUFDSDJCLDZCQUFTLE9BRE47QUFFSEMsNEJBQVEsR0FGTDtBQUdIQyxxQ0FBaUI7QUFIZDtBQU5pQyxhQUFuQixDQUF6QjtBQVlBeEIsbUJBQU95QixtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1gsV0FBckM7QUFDSCxTQWZEO0FBZ0JIOztBQUVEaEMsWUFBUTRDLE9BQVIsQ0FBZ0Isb0JBQWhCO0FBRUMsQ0FoRkEsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWxDb21wID0gZnVuY3Rpb24oZWxlbWVudCwgcHJvcHMpIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYgKHByb3BzKSBleHRlbmRPYmooZWxlbWVudCwgcHJvcHMpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGV4dGVuZE9iaihvYmosIHByb3BzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3R5bGUnIHx8IHByb3AgPT09ICdkYXRhc2V0JykgZXh0ZW5kT2JqKGVsZW1lbnRbcHJvcF0sIHByb3BzW3Byb3BdKTtcclxuICAgICAgICAgICAgZWxzZSBvYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbmNvbnNvbGUudGltZSgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcclxuXHJcbmNvbnN0IHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LWNvbnRhaW5lcicpO1xyXG5jb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwLWNvbnRhaW5lcicpO1xyXG5jb25zdCBzZXJ2aWNlQXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbi1zZXJ2aWNlcyBhcnRpY2xlJyk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSk7XHJcblxyXG5pZiAocGFyYWxsYXhDb250YWluZXIpIHtcclxuICAgIGNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcclxuICAgIGNvbnN0IHBhcmFsbGF4Q29udGVudCA9IHBhcmFsbGF4Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYXhTY3JvbGxPZmZzZXQgPSBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRUb3AgKyBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2VzdHVyZWNoYW5nZScsIGhhbmRsZVNjcm9sbCwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVTY3JvbGwsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSA+IG1heFNjcm9sbE9mZnNldCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHBhcmFsbGF4Q29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNX1weClgO1xyXG4gICAgICAgIHNpdGVIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZICogLjc1fXB4KWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChzZXJ2aWNlQXJ0aWNsZXMubGVuZ3RoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzZXJ2aWNlQXJ0aWNsZXMsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2QmVnaW4gPSBpdGVtLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAqIC44O1xyXG4gICAgICAgICAgICBjb25zdCB2RW5kID0gaXRlbS5vZmZzZXRUb3AgKyBpdGVtLm9mZnNldEhlaWdodCAqIC44O1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsWSA8IHZCZWdpbikge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdiZWxsb3ctc2NyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3ZlLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNjcm9sbFkgPiB2RW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAobWFwQ29udGFpbmVyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gc2Nyb2xsVG9NYXAoKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFkgKyBpbm5lckhlaWdodCA8IG1hcENvbnRhaW5lci5vZmZzZXRUb3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbENvbXAoJ2lmcmFtZScsIHtcclxuICAgICAgICAgICAgc3JjOiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlmcmFtZScpLFxyXG4gICAgICAgICAgICB3aWR0aDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGVpZ2h0JyksXHJcbiAgICAgICAgICAgIGZyYW1lYm9yZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzg4OCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9NYXApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnNvbGUudGltZUVuZCgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcblxufSgpKTtcbiJdfQ==
