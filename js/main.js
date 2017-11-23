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

    var siteHeader = document.querySelector('.site-header');
    var parallaxContainer = document.querySelector('.parallax-container');
    var parallaxContent = parallaxContainer.querySelector('.parallax-content');
    var mapContainer = document.querySelector('#map-container');

    if (parallaxContainer && parallaxContent) window.addEventListener('scroll', function () {
        if (scrollY > parallaxContainer.offsetTop + parallaxContainer.offsetHeight) return false;
        parallaxContent.style.transform = 'translateY(' + scrollY / 3 + 'px)';
        siteHeader.style.transform = 'translateY(' + scrollY / 2 + 'px)';
    });

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
                height: '100vh',
                border: '0',
                backgroundColor: '#eee'
            }
        }));

        window.removeEventListener('scroll', scrollToMap);
    });

    console.timeEnd('Execução do script');
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwiY29uc29sZSIsInRpbWUiLCJzaXRlSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInBhcmFsbGF4Q29udGFpbmVyIiwicGFyYWxsYXhDb250ZW50IiwibWFwQ29udGFpbmVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNjcm9sbFRvTWFwIiwiaW5uZXJIZWlnaHQiLCJhcHBlbmRDaGlsZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZnJhbWVib3JkZXIiLCJhbGxvd2Z1bGxzY3JlZW4iLCJkaXNwbGF5IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpbWVFbmQiXSwibWFwcGluZ3MiOiI7O0FBQUMsYUFBWTtBQUNiOztBQUVBLFFBQUlBLFdBQVcsU0FBWEEsUUFBVyxDQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUF5QjtBQUNwQyxZQUFJLE9BQU9ELE9BQVAsS0FBbUIsUUFBdkIsRUFBaUNBLFVBQVVFLFNBQVNDLGFBQVQsQ0FBdUJILE9BQXZCLENBQVY7QUFDakMsWUFBSUMsS0FBSixFQUFXRyxVQUFVSixPQUFWLEVBQW1CQyxLQUFuQjtBQUNYLGVBQU9ELE9BQVA7O0FBRUEsaUJBQVNJLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCSixLQUF4QixFQUErQjtBQUMzQixpQkFBSyxJQUFNSyxJQUFYLElBQW1CTCxLQUFuQixFQUEwQjtBQUN0QixvQkFBSUssU0FBUyxPQUFULElBQW9CQSxTQUFTLFNBQWpDLEVBQTRDRixVQUFVSixRQUFRTSxJQUFSLENBQVYsRUFBeUJMLE1BQU1LLElBQU4sQ0FBekIsRUFBNUMsS0FDS0QsSUFBSUMsSUFBSixJQUFZTCxNQUFNSyxJQUFOLENBQVo7QUFDUjtBQUNKO0FBQ0osS0FYRDs7QUFhQUMsWUFBUUMsSUFBUixDQUFhLG9CQUFiOztBQUVBLFFBQU1DLGFBQWFQLFNBQVNRLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxRQUFNQyxvQkFBb0JULFNBQVNRLGFBQVQsQ0FBdUIscUJBQXZCLENBQTFCO0FBQ0EsUUFBTUUsa0JBQWtCRCxrQkFBa0JELGFBQWxCLENBQWdDLG1CQUFoQyxDQUF4QjtBQUNBLFFBQU1HLGVBQWVYLFNBQVNRLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCOztBQUVBLFFBQUlDLHFCQUFxQkMsZUFBekIsRUFBMENFLE9BQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVc7QUFDbkYsWUFBSUMsVUFBVUwsa0JBQWtCTSxTQUFsQixHQUE4Qk4sa0JBQWtCTyxZQUE5RCxFQUE0RSxPQUFPLEtBQVA7QUFDNUVOLHdCQUFnQk8sS0FBaEIsQ0FBc0JDLFNBQXRCLG1CQUFnREosVUFBVSxDQUExRDtBQUNBUCxtQkFBV1UsS0FBWCxDQUFpQkMsU0FBakIsbUJBQTJDSixVQUFVLENBQXJEO0FBQ0gsS0FKeUM7O0FBTTFDRixXQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxTQUFTTSxXQUFULEdBQXVCOztBQUVyRCxZQUFJTCxVQUFVTSxXQUFWLEdBQXdCVCxhQUFhSSxTQUF6QyxFQUFvRCxPQUFPLEtBQVA7O0FBRXBESixxQkFBYVUsV0FBYixDQUF5QnhCLFNBQVMsUUFBVCxFQUFtQjtBQUN4Q3lCLGlCQUFLWCxhQUFhWSxZQUFiLENBQTBCLGFBQTFCLENBRG1DO0FBRXhDQyxtQkFBT2IsYUFBYVksWUFBYixDQUEwQixZQUExQixDQUZpQztBQUd4Q0Usb0JBQVFkLGFBQWFZLFlBQWIsQ0FBMEIsYUFBMUIsQ0FIZ0M7QUFJeENHLHlCQUFhLEdBSjJCO0FBS3hDQyw2QkFBaUIsSUFMdUI7QUFNeENWLG1CQUFPO0FBQ0hXLHlCQUFTLE9BRE47QUFFSEgsd0JBQVEsT0FGTDtBQUdISSx3QkFBUSxHQUhMO0FBSUhDLGlDQUFpQjtBQUpkO0FBTmlDLFNBQW5CLENBQXpCOztBQWNBbEIsZUFBT21CLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDWixXQUFyQztBQUVILEtBcEJEOztBQXNCQWQsWUFBUTJCLE9BQVIsQ0FBZ0Isb0JBQWhCO0FBRUMsQ0FyREEsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWxDb21wID0gZnVuY3Rpb24oZWxlbWVudCwgcHJvcHMpIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYgKHByb3BzKSBleHRlbmRPYmooZWxlbWVudCwgcHJvcHMpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGV4dGVuZE9iaihvYmosIHByb3BzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3R5bGUnIHx8IHByb3AgPT09ICdkYXRhc2V0JykgZXh0ZW5kT2JqKGVsZW1lbnRbcHJvcF0sIHByb3BzW3Byb3BdKTtcclxuICAgICAgICAgICAgZWxzZSBvYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbmNvbnNvbGUudGltZSgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcclxuXHJcbmNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcclxuY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtY29udGFpbmVyJyk7XHJcbmNvbnN0IHBhcmFsbGF4Q29udGVudCA9IHBhcmFsbGF4Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250ZW50Jyk7XHJcbmNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtY29udGFpbmVyJyk7XHJcblxyXG5pZiAocGFyYWxsYXhDb250YWluZXIgJiYgcGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoc2Nyb2xsWSA+IHBhcmFsbGF4Q29udGFpbmVyLm9mZnNldFRvcCArIHBhcmFsbGF4Q29udGFpbmVyLm9mZnNldEhlaWdodCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcGFyYWxsYXhDb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c2Nyb2xsWSAvIDN9cHgpYDtcclxuICAgIHNpdGVIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZIC8gMn1weClgO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiBzY3JvbGxUb01hcCgpIHtcclxuICAgIFxyXG4gICAgaWYgKHNjcm9sbFkgKyBpbm5lckhlaWdodCA8IG1hcENvbnRhaW5lci5vZmZzZXRUb3ApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbENvbXAoJ2lmcmFtZScsIHtcclxuICAgICAgICBzcmM6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWZyYW1lJyksXHJcbiAgICAgICAgd2lkdGg6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKSxcclxuICAgICAgICBoZWlnaHQ6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGVpZ2h0JyksXHJcbiAgICAgICAgZnJhbWVib3JkZXI6IFwiMFwiLFxyXG4gICAgICAgIGFsbG93ZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJzAnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJ1xyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxuICAgIFxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvTWFwKTtcclxuICAgIFxyXG59KTtcclxuXHJcbmNvbnNvbGUudGltZUVuZCgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcblxufSgpKTtcbiJdfQ==
