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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwic2NyZWVuIiwidyIsIndpbmRvdyIsImQiLCJlIiwiZG9jdW1lbnRFbGVtZW50IiwiZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnNvbGUiLCJ0aW1lIiwicGFyYWxsYXhDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibWFwQ29udGFpbmVyIiwic2VydmljZUFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcFZpZGVvQmFja2dyb3VuZCIsImdldEVsZW1lbnRCeUlkIiwicyIsImgiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0Iiwic3R5bGUiLCJvcGFjaXR5IiwicGxheSIsImJvZHkiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxZIiwibWF4U2Nyb2xsT2Zmc2V0IiwicGFyYWxsYXhDb250ZW50IiwidHJhbnNmb3JtIiwic2l0ZUhlYWRlciIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInBhc3NpdmUiLCJsZW5ndGgiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwidkJlZ2luIiwiaXRlbSIsInZFbmQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxUb01hcCIsImFwcGVuZENoaWxkIiwiZnJhbWVib3JkZXIiLCJhbGxvd2Z1bGxzY3JlZW4iLCJkaXNwbGF5IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpbWVFbmQiXSwibWFwcGluZ3MiOiI7O0FBQUMsYUFB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QUFDQUoseUJBQUtFLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixjQUFuQjtBQUNILGlCQUhJLE1BSUE7QUFDREgseUJBQUtFLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixlQUF0QjtBQUNBSix5QkFBS0UsU0FBTCxDQUFlRSxNQUFmLENBQXNCLGNBQXRCO0FBQ0g7QUFDSixhQWZEO0FBZ0JILFNBakJEO0FBa0JIOztBQUVELFFBQUlwQyxZQUFKLEVBQWtCO0FBQ2RoQixlQUFPeUIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBUzRCLFdBQVQsR0FBdUI7QUFDckQsZ0JBQUluQixVQUFVeEIsV0FBVixHQUF3Qk0sYUFBYXVCLFNBQXpDLEVBQW9ELE9BQU8sS0FBUDtBQUNwRHZCLHlCQUFhc0MsV0FBYixDQUF5QmhFLFNBQVMsUUFBVCxFQUFtQjtBQUN4Q2lDLHFCQUFLUCxhQUFhUSxZQUFiLENBQTBCLGFBQTFCLENBRG1DO0FBRXhDbEIsdUJBQU9VLGFBQWFRLFlBQWIsQ0FBMEIsWUFBMUIsQ0FGaUM7QUFHeENmLHdCQUFRTyxhQUFhUSxZQUFiLENBQTBCLGFBQTFCLENBSGdDO0FBSXhDK0IsNkJBQWEsR0FKMkI7QUFLeENDLGlDQUFpQixJQUx1QjtBQU14QzNCLHVCQUFPO0FBQ0g0Qiw2QkFBUyxPQUROO0FBRUhDLDRCQUFRLEdBRkw7QUFHSEMscUNBQWlCO0FBSGQ7QUFOaUMsYUFBbkIsQ0FBekI7QUFZQTNELG1CQUFPNEQsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNQLFdBQXJDO0FBQ0gsU0FmRDtBQWdCSDs7QUFFRHpDLFlBQVFpRCxPQUFSLENBQWdCLG9CQUFoQjtBQUVDLENBM0dBLEdBQUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBodG1sQ29tcCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHByb3BzKSB7XHJcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgIGlmIChwcm9wcykgZXh0ZW5kT2JqKGVsZW1lbnQsIHByb3BzKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBleHRlbmRPYmoob2JqLCBwcm9wcykge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xyXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3N0eWxlJyB8fCBwcm9wID09PSAnZGF0YXNldCcpIGV4dGVuZE9iaihlbGVtZW50W3Byb3BdLCBwcm9wc1twcm9wXSk7XHJcbiAgICAgICAgICAgIGVsc2Ugb2JqW3Byb3BdID0gcHJvcHNbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG52YXIgc2NyZWVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB3PXdpbmRvdyxkPWRvY3VtZW50LGU9ZC5kb2N1bWVudEVsZW1lbnQsZz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0sd2lkdGg9dy5pbm5lcldpZHRofHxlLmNsaWVudFdpZHRofHxnLmNsaWVudFdpZHRoLGhlaWdodD13LmlubmVySGVpZ2h0fHxlLmNsaWVudEhlaWdodHx8Zy5jbGllbnRIZWlnaHQ7XHJcblx0cmV0dXJuIHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHRcclxuICAgIH1cclxufTtcblxuY29uc29sZS50aW1lKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xyXG5cclxuY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtY29udGFpbmVyJyk7XHJcbmNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtY29udGFpbmVyJyk7XHJcbmNvbnN0IHNlcnZpY2VBcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uLXNlcnZpY2VzIGFydGljbGUnKTtcclxuY29uc3QgdG9wVmlkZW9CYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcC12aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG5pZiAodG9wVmlkZW9CYWNrZ3JvdW5kKSB7XHJcbiAgICBjb25zdCBzID0gc2NyZWVuKCksIHcgPSBzLndpZHRoLCBoID0gcy5oZWlnaHQ7XHJcbiAgICB0b3BWaWRlb0JhY2tncm91bmQuc3JjID0gXHJcbiAgICAgICAgdyA8IDQwMCAmJiBoIDwgNDAwID8gdG9wVmlkZW9CYWNrZ3JvdW5kLmdldEF0dHJpYnV0ZSgnZGF0YS1sZCcpIDpcclxuICAgICAgICAvLyB3IDwgNzAwICYmIGggPCA3MDAgPyB0b3BWaWRlb0JhY2tncm91bmQuZ2V0QXR0cmlidXRlKCdkYXRhLWhkJykgOlxyXG4gICAgICAgIHRvcFZpZGVvQmFja2dyb3VuZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGQnKTtcclxuICAgIHRvcFZpZGVvQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBcclxuICAgICAgICAgICAgdyAvIHRvcFZpZGVvQmFja2dyb3VuZC52aWRlb1dpZHRoLCBcclxuICAgICAgICAgICAgaCAvIHRvcFZpZGVvQmFja2dyb3VuZC52aWRlb0hlaWdodCBcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgICB0b3BWaWRlb0JhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgdGhpcy5wbGF5KCk7XHJcbiAgICB9LCBmYWxzZSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHt9KTtcclxuXHJcbmlmIChwYXJhbGxheENvbnRhaW5lcikge1xyXG4gICAgY29uc3Qgc2l0ZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xyXG4gICAgY29uc3QgcGFyYWxsYXhDb250ZW50ID0gcGFyYWxsYXhDb250YWluZXIucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LWNvbnRlbnQnKTtcclxuICAgIGNvbnN0IG1heFNjcm9sbE9mZnNldCA9IHBhcmFsbGF4Q29udGFpbmVyLm9mZnNldFRvcCArIHBhcmFsbGF4Q29udGFpbmVyLm9mZnNldEhlaWdodDtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdnZXN0dXJlY2hhbmdlJywgaGFuZGxlU2Nyb2xsLCB7cGFzc2l2ZTogdHJ1ZX0pO1xyXG4gICAgaWYgKHBhcmFsbGF4Q29udGVudCkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVNjcm9sbCwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxZID4gbWF4U2Nyb2xsT2Zmc2V0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcGFyYWxsYXhDb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c2Nyb2xsWSAqIC41fXB4KWA7XHJcbiAgICAgICAgc2l0ZUhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNzV9cHgpYDtcclxuICAgIH1cclxufVxyXG5cclxuaWYgKHNlcnZpY2VBcnRpY2xlcy5sZW5ndGgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNlcnZpY2VBcnRpY2xlcywgaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZCZWdpbiA9IGl0ZW0ub2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0ICogLjg7XHJcbiAgICAgICAgICAgIGNvbnN0IHZFbmQgPSBpdGVtLm9mZnNldFRvcCArIGl0ZW0ub2Zmc2V0SGVpZ2h0ICogLjg7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxZIDwgdkJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2Nyb2xsWSA+IHZFbmQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYmVsbG93LXNjcmVlbicpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhYm92ZS1zY3JlZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYmVsbG93LXNjcmVlbicpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhYm92ZS1zY3JlZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmIChtYXBDb250YWluZXIpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiBzY3JvbGxUb01hcCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSArIGlubmVySGVpZ2h0IDwgbWFwQ29udGFpbmVyLm9mZnNldFRvcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIG1hcENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sQ29tcCgnaWZyYW1lJywge1xyXG4gICAgICAgICAgICBzcmM6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWZyYW1lJyksXHJcbiAgICAgICAgICAgIHdpZHRoOiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZHRoJyksXHJcbiAgICAgICAgICAgIGhlaWdodDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSxcclxuICAgICAgICAgICAgZnJhbWVib3JkZXI6IFwiMFwiLFxyXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjODg4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb01hcCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc29sZS50aW1lRW5kKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xuXG59KCkpO1xuIl19
