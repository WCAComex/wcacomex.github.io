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

    document.body.addEventListener('touchstart', function () {});

    if (parallaxContainer) {
        var siteHeader = document.querySelector('.site-header');
        var parallaxContent = parallaxContainer.querySelector('.parallax-content');
        if (parallaxContent) window.addEventListener('scroll', function () {
            if (scrollY > parallaxContainer.offsetTop + parallaxContainer.offsetHeight) return false;
            parallaxContent.style.transform = 'translateY(' + scrollY * .5 + 'px)';
            siteHeader.style.transform = 'translateY(' + scrollY * .75 + 'px)';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwiY29uc29sZSIsInRpbWUiLCJwYXJhbGxheENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJtYXBDb250YWluZXIiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpdGVIZWFkZXIiLCJwYXJhbGxheENvbnRlbnQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzY3JvbGxUb01hcCIsImlubmVySGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lYm9yZGVyIiwiYWxsb3dmdWxsc2NyZWVuIiwiZGlzcGxheSIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aW1lRW5kIl0sIm1hcHBpbmdzIjoiOztBQUFDLGFBQVk7QUFDYjs7QUFFQSxRQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDcEMsWUFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDQSxVQUFVRSxTQUFTQyxhQUFULENBQXVCSCxPQUF2QixDQUFWO0FBQ2pDLFlBQUlDLEtBQUosRUFBV0csVUFBVUosT0FBVixFQUFtQkMsS0FBbkI7QUFDWCxlQUFPRCxPQUFQOztBQUVBLGlCQUFTSSxTQUFULENBQW1CQyxHQUFuQixFQUF3QkosS0FBeEIsRUFBK0I7QUFDM0IsaUJBQUssSUFBTUssSUFBWCxJQUFtQkwsS0FBbkIsRUFBMEI7QUFDdEIsb0JBQUlLLFNBQVMsT0FBVCxJQUFvQkEsU0FBUyxTQUFqQyxFQUE0Q0YsVUFBVUosUUFBUU0sSUFBUixDQUFWLEVBQXlCTCxNQUFNSyxJQUFOLENBQXpCLEVBQTVDLEtBQ0tELElBQUlDLElBQUosSUFBWUwsTUFBTUssSUFBTixDQUFaO0FBQ1I7QUFDSjtBQUNKLEtBWEQ7O0FBYUFDLFlBQVFDLElBQVIsQ0FBYSxvQkFBYjs7QUFFQSxRQUFNQyxvQkFBb0JQLFNBQVNRLGFBQVQsQ0FBdUIscUJBQXZCLENBQTFCO0FBQ0EsUUFBTUMsZUFBZVQsU0FBU1EsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7O0FBRUFSLGFBQVNVLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsWUFBL0IsRUFBNkMsWUFBTSxDQUFFLENBQXJEOztBQUVBLFFBQUlKLGlCQUFKLEVBQXVCO0FBQ25CLFlBQU1LLGFBQWFaLFNBQVNRLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxZQUFNSyxrQkFBa0JOLGtCQUFrQkMsYUFBbEIsQ0FBZ0MsbUJBQWhDLENBQXhCO0FBQ0EsWUFBSUssZUFBSixFQUFxQkMsT0FBT0gsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVztBQUM5RCxnQkFBSUksVUFBVVIsa0JBQWtCUyxTQUFsQixHQUE4QlQsa0JBQWtCVSxZQUE5RCxFQUE0RSxPQUFPLEtBQVA7QUFDNUVKLDRCQUFnQkssS0FBaEIsQ0FBc0JDLFNBQXRCLG1CQUFnREosVUFBVSxFQUExRDtBQUNBSCx1QkFBV00sS0FBWCxDQUFpQkMsU0FBakIsbUJBQTJDSixVQUFVLEdBQXJEO0FBQ0gsU0FKb0I7QUFLeEI7O0FBRUQsUUFBSU4sWUFBSixFQUFrQjtBQUNkSyxlQUFPSCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxTQUFTUyxXQUFULEdBQXVCO0FBQ3JELGdCQUFJTCxVQUFVTSxXQUFWLEdBQXdCWixhQUFhTyxTQUF6QyxFQUFvRCxPQUFPLEtBQVA7QUFDcERQLHlCQUFhYSxXQUFiLENBQXlCekIsU0FBUyxRQUFULEVBQW1CO0FBQ3hDMEIscUJBQUtkLGFBQWFlLFlBQWIsQ0FBMEIsYUFBMUIsQ0FEbUM7QUFFeENDLHVCQUFPaEIsYUFBYWUsWUFBYixDQUEwQixZQUExQixDQUZpQztBQUd4Q0Usd0JBQVFqQixhQUFhZSxZQUFiLENBQTBCLGFBQTFCLENBSGdDO0FBSXhDRyw2QkFBYSxHQUoyQjtBQUt4Q0MsaUNBQWlCLElBTHVCO0FBTXhDVix1QkFBTztBQUNIVyw2QkFBUyxPQUROO0FBRUhDLDRCQUFRLEdBRkw7QUFHSEMscUNBQWlCO0FBSGQ7QUFOaUMsYUFBbkIsQ0FBekI7QUFZQWpCLG1CQUFPa0IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNaLFdBQXJDO0FBQ0gsU0FmRDtBQWdCSDs7QUFFRGYsWUFBUTRCLE9BQVIsQ0FBZ0Isb0JBQWhCO0FBRUMsQ0F0REEsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWxDb21wID0gZnVuY3Rpb24oZWxlbWVudCwgcHJvcHMpIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYgKHByb3BzKSBleHRlbmRPYmooZWxlbWVudCwgcHJvcHMpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGV4dGVuZE9iaihvYmosIHByb3BzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3R5bGUnIHx8IHByb3AgPT09ICdkYXRhc2V0JykgZXh0ZW5kT2JqKGVsZW1lbnRbcHJvcF0sIHByb3BzW3Byb3BdKTtcclxuICAgICAgICAgICAgZWxzZSBvYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbmNvbnNvbGUudGltZSgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcclxuXHJcbmNvbnN0IHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LWNvbnRhaW5lcicpO1xyXG5jb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwLWNvbnRhaW5lcicpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge30pO1xyXG5cclxuaWYgKHBhcmFsbGF4Q29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBzaXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XHJcbiAgICBjb25zdCBwYXJhbGxheENvbnRlbnQgPSBwYXJhbGxheENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtY29udGVudCcpO1xyXG4gICAgaWYgKHBhcmFsbGF4Q29udGVudCkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxZID4gcGFyYWxsYXhDb250YWluZXIub2Zmc2V0VG9wICsgcGFyYWxsYXhDb250YWluZXIub2Zmc2V0SGVpZ2h0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcGFyYWxsYXhDb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c2Nyb2xsWSAqIC41fXB4KWA7XHJcbiAgICAgICAgc2l0ZUhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNzV9cHgpYDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAobWFwQ29udGFpbmVyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gc2Nyb2xsVG9NYXAoKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFkgKyBpbm5lckhlaWdodCA8IG1hcENvbnRhaW5lci5vZmZzZXRUb3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbENvbXAoJ2lmcmFtZScsIHtcclxuICAgICAgICAgICAgc3JjOiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlmcmFtZScpLFxyXG4gICAgICAgICAgICB3aWR0aDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGVpZ2h0JyksXHJcbiAgICAgICAgICAgIGZyYW1lYm9yZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzg4OCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9NYXApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnNvbGUudGltZUVuZCgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcblxufSgpKTtcbiJdfQ==
