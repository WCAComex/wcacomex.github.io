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
        topVideoBackground.src = w < 400 && h < 400 ? topVideoBackground.getAttribute('data-ld') :
        // w < 700 && h < 700 ? topVideoBackground.getAttribute('data-hd') :
        topVideoBackground.getAttribute('data-hd');
        topVideoBackground.addEventListener('loadedmetadata', function () {
            console.log(w / topVideoBackground.videoWidth, h / topVideoBackground.videoHeight);
        });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwic2NyZWVuIiwidyIsIndpbmRvdyIsImQiLCJlIiwiZG9jdW1lbnRFbGVtZW50IiwiZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnNvbGUiLCJ0aW1lIiwicGFyYWxsYXhDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibWFwQ29udGFpbmVyIiwic2VydmljZUFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcFZpZGVvQmFja2dyb3VuZCIsImdldEVsZW1lbnRCeUlkIiwicyIsImgiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwicGxheSIsImJvZHkiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxZIiwibWF4U2Nyb2xsT2Zmc2V0IiwicGFyYWxsYXhDb250ZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzaXRlSGVhZGVyIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicGFzc2l2ZSIsImxlbmd0aCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJ2QmVnaW4iLCJpdGVtIiwidkVuZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjcm9sbFRvTWFwIiwiYXBwZW5kQ2hpbGQiLCJmcmFtZWJvcmRlciIsImFsbG93ZnVsbHNjcmVlbiIsImRpc3BsYXkiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGltZUVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQyxhQUFZO0FBQ2I7O0FB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QUhJLE1BSUE7QUFDREgseUJBQUtFLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixlQUF0QjtBQUNBSix5QkFBS0UsU0FBTCxDQUFlRSxNQUFmLENBQXNCLGNBQXRCO0FBQ0g7QUFDSixhQWZEO0FBZ0JILFNBakJEO0FBa0JIOztBQUVELFFBQUluQyxZQUFKLEVBQWtCO0FBQ2RoQixlQUFPeUIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBUzJCLFdBQVQsR0FBdUI7QUFDckQsZ0JBQUlwQixVQUFVdEIsV0FBVixHQUF3Qk0sYUFBYXNCLFNBQXpDLEVBQW9ELE9BQU8sS0FBUDtBQUNwRHRCLHlCQUFhcUMsV0FBYixDQUF5Qi9ELFNBQVMsUUFBVCxFQUFtQjtBQUN4Q2lDLHFCQUFLUCxhQUFhUSxZQUFiLENBQTBCLGFBQTFCLENBRG1DO0FBRXhDbEIsdUJBQU9VLGFBQWFRLFlBQWIsQ0FBMEIsWUFBMUIsQ0FGaUM7QUFHeENmLHdCQUFRTyxhQUFhUSxZQUFiLENBQTBCLGFBQTFCLENBSGdDO0FBSXhDOEIsNkJBQWEsR0FKMkI7QUFLeENDLGlDQUFpQixJQUx1QjtBQU14Q3BCLHVCQUFPO0FBQ0hxQiw2QkFBUyxPQUROO0FBRUhDLDRCQUFRLEdBRkw7QUFHSEMscUNBQWlCO0FBSGQ7QUFOaUMsYUFBbkIsQ0FBekI7QUFZQTFELG1CQUFPMkQsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNQLFdBQXJDO0FBQ0gsU0FmRDtBQWdCSDs7QUFFRHhDLFlBQVFnRCxPQUFSLENBQWdCLG9CQUFoQjtBQUVDLENBeEdBLEdBQUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBodG1sQ29tcCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHByb3BzKSB7XHJcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgIGlmIChwcm9wcykgZXh0ZW5kT2JqKGVsZW1lbnQsIHByb3BzKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBleHRlbmRPYmoob2JqLCBwcm9wcykge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xyXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3N0eWxlJyB8fCBwcm9wID09PSAnZGF0YXNldCcpIGV4dGVuZE9iaihlbGVtZW50W3Byb3BdLCBwcm9wc1twcm9wXSk7XHJcbiAgICAgICAgICAgIGVsc2Ugb2JqW3Byb3BdID0gcHJvcHNbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG52YXIgc2NyZWVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB3PXdpbmRvdyxkPWRvY3VtZW50LGU9ZC5kb2N1bWVudEVsZW1lbnQsZz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0sd2lkdGg9dy5pbm5lcldpZHRofHxlLmNsaWVudFdpZHRofHxnLmNsaWVudFdpZHRoLGhlaWdodD13LmlubmVySGVpZ2h0fHxlLmNsaWVudEhlaWdodHx8Zy5jbGllbnRIZWlnaHQ7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHRcclxuICAgIH1cclxufTtcblxuY29uc29sZS50aW1lKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xyXG5cclxuY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtY29udGFpbmVyJyk7XHJcbmNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtY29udGFpbmVyJyk7XHJcbmNvbnN0IHNlcnZpY2VBcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uLXNlcnZpY2VzIGFydGljbGUnKTtcclxuY29uc3QgdG9wVmlkZW9CYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcC12aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG5pZiAodG9wVmlkZW9CYWNrZ3JvdW5kKSB7XHJcbiAgICBjb25zdCBzID0gc2NyZWVuKCksIHcgPSBzLndpZHRoLCBoID0gcy5oZWlnaHQ7XHJcbiAgICB0b3BWaWRlb0JhY2tncm91bmQuc3JjID0gXHJcbiAgICAgICAgdyA8IDQwMCAmJiBoIDwgNDAwID8gdG9wVmlkZW9CYWNrZ3JvdW5kLmdldEF0dHJpYnV0ZSgnZGF0YS1sZCcpIDpcclxuICAgICAgICAvLyB3IDwgNzAwICYmIGggPCA3MDAgPyB0b3BWaWRlb0JhY2tncm91bmQuZ2V0QXR0cmlidXRlKCdkYXRhLWhkJykgOlxyXG4gICAgICAgIHRvcFZpZGVvQmFja2dyb3VuZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGQnKTtcclxuICAgIHRvcFZpZGVvQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcclxuICAgICAgICAgICAgdyAvIHRvcFZpZGVvQmFja2dyb3VuZC52aWRlb1dpZHRoLCBcclxuICAgICAgICAgICAgaCAvIHRvcFZpZGVvQmFja2dyb3VuZC52aWRlb0hlaWdodCBcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB0b3BWaWRlb0JhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGZ1bmN0aW9uKCkge3RoaXMucGxheSgpO30sIGZhbHNlKTtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge30pO1xyXG5cclxuaWYgKHBhcmFsbGF4Q29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBzaXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XHJcbiAgICBjb25zdCBwYXJhbGxheENvbnRlbnQgPSBwYXJhbGxheENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtY29udGVudCcpO1xyXG4gICAgY29uc3QgbWF4U2Nyb2xsT2Zmc2V0ID0gcGFyYWxsYXhDb250YWluZXIub2Zmc2V0VG9wICsgcGFyYWxsYXhDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgaWYgKHBhcmFsbGF4Q29udGVudCkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2dlc3R1cmVjaGFuZ2UnLCBoYW5kbGVTY3JvbGwsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlU2Nyb2xsLCB7cGFzc2l2ZTogdHJ1ZX0pO1xyXG4gICAgaWYgKHBhcmFsbGF4Q29udGVudCkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFkgPiBtYXhTY3JvbGxPZmZzZXQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBwYXJhbGxheENvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZICogLjV9cHgpYDtcclxuICAgICAgICBzaXRlSGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c2Nyb2xsWSAqIC43NX1weClgO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoc2VydmljZUFydGljbGVzLmxlbmd0aCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2VydmljZUFydGljbGVzLCBpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdkJlZ2luID0gaXRlbS5vZmZzZXRUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAuODtcclxuICAgICAgICAgICAgY29uc3QgdkVuZCA9IGl0ZW0ub2Zmc2V0VG9wICsgaXRlbS5vZmZzZXRIZWlnaHQgKiAuODtcclxuICAgICAgICAgICAgaWYgKHNjcm9sbFkgPCB2QmVnaW4pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYmVsbG93LXNjcmVlbicpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhYm92ZS1zY3JlZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzY3JvbGxZID4gdkVuZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdiZWxsb3ctc2NyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Fib3ZlLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdiZWxsb3ctc2NyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3ZlLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYgKG1hcENvbnRhaW5lcikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIHNjcm9sbFRvTWFwKCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxZICsgaW5uZXJIZWlnaHQgPCBtYXBDb250YWluZXIub2Zmc2V0VG9wKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbWFwQ29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxDb21wKCdpZnJhbWUnLCB7XHJcbiAgICAgICAgICAgIHNyYzogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZnJhbWUnKSxcclxuICAgICAgICAgICAgd2lkdGg6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWhlaWdodCcpLFxyXG4gICAgICAgICAgICBmcmFtZWJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM4ODgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvTWFwKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zb2xlLnRpbWVFbmQoJ0V4ZWN1w6fDo28gZG8gc2NyaXB0Jyk7XG5cbn0oKSk7XG4iXX0=
