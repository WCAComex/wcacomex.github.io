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
        topVideoBackground.src = w > 1000 || h > 1000 ? topVideoBackground.getAttribute('data-4k') : w > 700 || h > 700 ? topVideoBackground.getAttribute('data-hq') : topVideoBackground.getAttribute('data-lq');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwic2NyZWVuIiwidyIsIndpbmRvdyIsImQiLCJlIiwiZG9jdW1lbnRFbGVtZW50IiwiZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnNvbGUiLCJ0aW1lIiwicGFyYWxsYXhDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibWFwQ29udGFpbmVyIiwic2VydmljZUFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcFZpZGVvQmFja2dyb3VuZCIsImdldEVsZW1lbnRCeUlkIiwicyIsImgiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsImJvZHkiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxZIiwibWF4U2Nyb2xsT2Zmc2V0IiwicGFyYWxsYXhDb250ZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzaXRlSGVhZGVyIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicGFzc2l2ZSIsImxlbmd0aCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJ2QmVnaW4iLCJpdGVtIiwidkVuZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjcm9sbFRvTWFwIiwiYXBwZW5kQ2hpbGQiLCJmcmFtZWJvcmRlciIsImFsbG93ZnVsbHNjcmVlbiIsImRpc3BsYXkiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGltZUVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQyxhQUFZO0FBQ2I7O0FBRUEsUUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQVNDLE9B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RDtBQWdCSCxTQWpCRDtBQWtCSDs7QUFFRCxRQUFJaEMsWUFBSixFQUFrQjtBQUNkaEIsZUFBT3lCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFNBQVN3QixXQUFULEdBQXVCO0FBQ3JELGdCQUFJcEIsVUFBVW5CLFdBQVYsR0FBd0JNLGFBQWFtQixTQUF6QyxFQUFvRCxPQUFPLEtBQVA7QUFDcERuQix5QkFBYWtDLFdBQWIsQ0FBeUI1RCxTQUFTLFFBQVQsRUFBbUI7QUFDeENpQyxxQkFBS1AsYUFBYVEsWUFBYixDQUEwQixhQUExQixDQURtQztBQUV4Q2xCLHVCQUFPVSxhQUFhUSxZQUFiLENBQTBCLFlBQTFCLENBRmlDO0FBR3hDZix3QkFBUU8sYUFBYVEsWUFBYixDQUEwQixhQUExQixDQUhnQztBQUl4QzJCLDZCQUFhLEdBSjJCO0FBS3hDQyxpQ0FBaUIsSUFMdUI7QUFNeENwQix1QkFBTztBQUNIcUIsNkJBQVMsT0FETjtBQUVIQyw0QkFBUSxHQUZMO0FBR0hDLHFDQUFpQjtBQUhkO0FBTmlDLGFBQW5CLENBQXpCO0FBWUF2RCxtQkFBT3dELG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUCxXQUFyQztBQUNILFNBZkQ7QUFnQkg7O0FBRURyQyxZQUFRNkMsT0FBUixDQUFnQixvQkFBaEI7QUFFQyxDQWxHQSxHQUFEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbENvbXAgPSBmdW5jdGlvbihlbGVtZW50LCBwcm9wcykge1xyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBpZiAocHJvcHMpIGV4dGVuZE9iaihlbGVtZW50LCBwcm9wcyk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZXh0ZW5kT2JqKG9iaiwgcHJvcHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdHlsZScgfHwgcHJvcCA9PT0gJ2RhdGFzZXQnKSBleHRlbmRPYmooZWxlbWVudFtwcm9wXSwgcHJvcHNbcHJvcF0pO1xyXG4gICAgICAgICAgICBlbHNlIG9ialtwcm9wXSA9IHByb3BzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxudmFyIHNjcmVlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3Qgdz13aW5kb3csZD1kb2N1bWVudCxlPWQuZG9jdW1lbnRFbGVtZW50LGc9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLHdpZHRoPXcuaW5uZXJXaWR0aHx8ZS5jbGllbnRXaWR0aHx8Zy5jbGllbnRXaWR0aCxoZWlnaHQ9dy5pbm5lckhlaWdodHx8ZS5jbGllbnRIZWlnaHR8fGcuY2xpZW50SGVpZ2h0O1xyXG5cdHJldHVybiB7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0XHJcbiAgICB9XHJcbn07XG5cbmNvbnNvbGUudGltZSgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcclxuXHJcbmNvbnN0IHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LWNvbnRhaW5lcicpO1xyXG5jb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwLWNvbnRhaW5lcicpO1xyXG5jb25zdCBzZXJ2aWNlQXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbi1zZXJ2aWNlcyBhcnRpY2xlJyk7XHJcbmNvbnN0IHRvcFZpZGVvQmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AtdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuaWYgKHRvcFZpZGVvQmFja2dyb3VuZCkge1xyXG4gICAgY29uc3QgcyA9IHNjcmVlbigpLCB3ID0gcy53aWR0aCwgaCA9IHMuaGVpZ2h0O1xyXG4gICAgdG9wVmlkZW9CYWNrZ3JvdW5kLnNyYyA9IFxyXG4gICAgICAgIHcgPiAxMDAwIHx8IGggPiAxMDAwID8gdG9wVmlkZW9CYWNrZ3JvdW5kLmdldEF0dHJpYnV0ZSgnZGF0YS00aycpIDpcclxuICAgICAgICB3ID4gIDcwMCB8fCBoID4gIDcwMCA/IHRvcFZpZGVvQmFja2dyb3VuZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHEnKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BWaWRlb0JhY2tncm91bmQuZ2V0QXR0cmlidXRlKCdkYXRhLWxxJyk7XHJcbiAgICB0b3BWaWRlb0JhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge3RoaXMucGxheSgpO30pO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSk7XHJcblxyXG5pZiAocGFyYWxsYXhDb250YWluZXIpIHtcclxuICAgIGNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcclxuICAgIGNvbnN0IHBhcmFsbGF4Q29udGVudCA9IHBhcmFsbGF4Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYXhTY3JvbGxPZmZzZXQgPSBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRUb3AgKyBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2VzdHVyZWNoYW5nZScsIGhhbmRsZVNjcm9sbCwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVTY3JvbGwsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSA+IG1heFNjcm9sbE9mZnNldCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHBhcmFsbGF4Q29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNX1weClgO1xyXG4gICAgICAgIHNpdGVIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZICogLjc1fXB4KWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChzZXJ2aWNlQXJ0aWNsZXMubGVuZ3RoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzZXJ2aWNlQXJ0aWNsZXMsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2QmVnaW4gPSBpdGVtLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAqIC44O1xyXG4gICAgICAgICAgICBjb25zdCB2RW5kID0gaXRlbS5vZmZzZXRUb3AgKyBpdGVtLm9mZnNldEhlaWdodCAqIC44O1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsWSA8IHZCZWdpbikge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdiZWxsb3ctc2NyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3ZlLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNjcm9sbFkgPiB2RW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAobWFwQ29udGFpbmVyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gc2Nyb2xsVG9NYXAoKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFkgKyBpbm5lckhlaWdodCA8IG1hcENvbnRhaW5lci5vZmZzZXRUb3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbENvbXAoJ2lmcmFtZScsIHtcclxuICAgICAgICAgICAgc3JjOiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlmcmFtZScpLFxyXG4gICAgICAgICAgICB3aWR0aDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGVpZ2h0JyksXHJcbiAgICAgICAgICAgIGZyYW1lYm9yZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzg4OCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9NYXApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnNvbGUudGltZUVuZCgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcblxufSgpKTtcbiJdfQ==
