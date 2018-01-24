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
        topVideoBackground.src = w < 400 && h < 400 ? topVideoBackground.getAttribute('data-ld') : topVideoBackground.getAttribute('data-hd');
        topVideoBackground.addEventListener('canplay', function () {
            this.style.opacity = 1;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwic2NyZWVuIiwidyIsIndpbmRvdyIsImQiLCJlIiwiZG9jdW1lbnRFbGVtZW50IiwiZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnNvbGUiLCJ0aW1lIiwicGFyYWxsYXhDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibWFwQ29udGFpbmVyIiwic2VydmljZUFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcFZpZGVvQmFja2dyb3VuZCIsImdldEVsZW1lbnRCeUlkIiwicyIsImgiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJvcGFjaXR5IiwicGxheSIsImJvZHkiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxZIiwibWF4U2Nyb2xsT2Zmc2V0IiwicGFyYWxsYXhDb250ZW50IiwidHJhbnNmb3JtIiwic2l0ZUhlYWRlciIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInBhc3NpdmUiLCJsZW5ndGgiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwidkJlZ2luIiwiaXRlbSIsInZFbmQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxUb01hcCIsImFwcGVuZENoaWxkIiwiZnJhbWVib3JkZXIiLCJhbGxvd2Z1bGxzY3JlZW4iLCJkaXNwbGF5IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpbWVFbmQiXSwibWFwcGluZ3MiOiI7O0FBQUMsYUFBWTtBQUNiOztBQUVBLFFBQUlBLFdBQVcsU0FBWEEsUUFB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QUFrQkg7O0FBRUQsUUFBSWpDLFlBQUosRUFBa0I7QUFDZGhCLGVBQU95QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxTQUFTeUIsV0FBVCxHQUF1QjtBQUNyRCxnQkFBSW5CLFVBQVVyQixXQUFWLEdBQXdCTSxhQUFhb0IsU0FBekMsRUFBb0QsT0FBTyxLQUFQO0FBQ3BEcEIseUJBQWFtQyxXQUFiLENBQXlCN0QsU0FBUyxRQUFULEVBQW1CO0FBQ3hDaUMscUJBQUtQLGFBQWFRLFlBQWIsQ0FBMEIsYUFBMUIsQ0FEbUM7QUFFeENsQix1QkFBT1UsYUFBYVEsWUFBYixDQUEwQixZQUExQixDQUZpQztBQUd4Q2Ysd0JBQVFPLGFBQWFRLFlBQWIsQ0FBMEIsYUFBMUIsQ0FIZ0M7QUFJeEM0Qiw2QkFBYSxHQUoyQjtBQUt4Q0MsaUNBQWlCLElBTHVCO0FBTXhDM0IsdUJBQU87QUFDSDRCLDZCQUFTLE9BRE47QUFFSEMsNEJBQVEsR0FGTDtBQUdIQyxxQ0FBaUI7QUFIZDtBQU5pQyxhQUFuQixDQUF6QjtBQVlBeEQsbUJBQU95RCxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1AsV0FBckM7QUFDSCxTQWZEO0FBZ0JIOztBQUVEdEMsWUFBUThDLE9BQVIsQ0FBZ0Isb0JBQWhCO0FBRUMsQ0FwR0EsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWxDb21wID0gZnVuY3Rpb24oZWxlbWVudCwgcHJvcHMpIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYgKHByb3BzKSBleHRlbmRPYmooZWxlbWVudCwgcHJvcHMpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGV4dGVuZE9iaihvYmosIHByb3BzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3R5bGUnIHx8IHByb3AgPT09ICdkYXRhc2V0JykgZXh0ZW5kT2JqKGVsZW1lbnRbcHJvcF0sIHByb3BzW3Byb3BdKTtcclxuICAgICAgICAgICAgZWxzZSBvYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciBzY3JlZW4gPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHc9d2luZG93LGQ9ZG9jdW1lbnQsZT1kLmRvY3VtZW50RWxlbWVudCxnPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSx3aWR0aD13LmlubmVyV2lkdGh8fGUuY2xpZW50V2lkdGh8fGcuY2xpZW50V2lkdGgsaGVpZ2h0PXcuaW5uZXJIZWlnaHR8fGUuY2xpZW50SGVpZ2h0fHxnLmNsaWVudEhlaWdodDtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgfVxyXG59O1xuXG5jb25zb2xlLnRpbWUoJ0V4ZWN1w6fDo28gZG8gc2NyaXB0Jyk7XHJcblxyXG5jb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250YWluZXInKTtcclxuY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1jb250YWluZXInKTtcclxuY29uc3Qgc2VydmljZUFydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24tc2VydmljZXMgYXJ0aWNsZScpO1xyXG5jb25zdCB0b3BWaWRlb0JhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLXZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbmlmICh0b3BWaWRlb0JhY2tncm91bmQpIHtcclxuICAgIGNvbnN0IHMgPSBzY3JlZW4oKSwgdyA9IHMud2lkdGgsIGggPSBzLmhlaWdodDtcclxuICAgIHRvcFZpZGVvQmFja2dyb3VuZC5zcmMgPSB3IDwgNDAwICYmIGggPCA0MDAgPyBcclxuICAgICAgICB0b3BWaWRlb0JhY2tncm91bmQuZ2V0QXR0cmlidXRlKCdkYXRhLWxkJykgOlxyXG4gICAgICAgIHRvcFZpZGVvQmFja2dyb3VuZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGQnKTtcclxuICAgIHRvcFZpZGVvQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH0sIGZhbHNlKTtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge30pO1xyXG5cclxuaWYgKHBhcmFsbGF4Q29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBzaXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XHJcbiAgICBjb25zdCBwYXJhbGxheENvbnRlbnQgPSBwYXJhbGxheENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtY29udGVudCcpO1xyXG4gICAgY29uc3QgbWF4U2Nyb2xsT2Zmc2V0ID0gcGFyYWxsYXhDb250YWluZXIub2Zmc2V0VG9wICsgcGFyYWxsYXhDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgaWYgKHBhcmFsbGF4Q29udGVudCkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2dlc3R1cmVjaGFuZ2UnLCBoYW5kbGVTY3JvbGwsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlU2Nyb2xsLCB7cGFzc2l2ZTogdHJ1ZX0pO1xyXG4gICAgaWYgKHBhcmFsbGF4Q29udGVudCkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFkgPiBtYXhTY3JvbGxPZmZzZXQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBwYXJhbGxheENvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZICogLjV9cHgpYDtcclxuICAgICAgICBzaXRlSGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c2Nyb2xsWSAqIC43NX1weClgO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoc2VydmljZUFydGljbGVzLmxlbmd0aCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2VydmljZUFydGljbGVzLCBpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdkJlZ2luID0gaXRlbS5vZmZzZXRUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuODtcclxuICAgICAgICAgICAgY29uc3QgdkVuZCA9IGl0ZW0ub2Zmc2V0VG9wICsgaXRlbS5vZmZzZXRIZWlnaHQgKiAuODtcclxuICAgICAgICAgICAgaWYgKHNjcm9sbFkgPCB2QmVnaW4pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYmVsbG93LXNjcmVlbicpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhYm92ZS1zY3JlZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzY3JvbGxZID4gdkVuZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdiZWxsb3ctc2NyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Fib3ZlLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdiZWxsb3ctc2NyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3ZlLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKG1hcENvbnRhaW5lcikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIHNjcm9sbFRvTWFwKCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxZICsgaW5uZXJIZWlnaHQgPCBtYXBDb250YWluZXIub2Zmc2V0VG9wKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbWFwQ29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxDb21wKCdpZnJhbWUnLCB7XHJcbiAgICAgICAgICAgIHNyYzogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZnJhbWUnKSxcclxuICAgICAgICAgICAgd2lkdGg6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWhlaWdodCcpLFxyXG4gICAgICAgICAgICBmcmFtZWJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM4ODgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvTWFwKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zb2xlLnRpbWVFbmQoJ0V4ZWN1w6fDo28gZG8gc2NyaXB0Jyk7XG5cbn0oKSk7XG4iXX0=
