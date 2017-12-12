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
        var handleScroll = function handleScroll() {
            if (scrollY > maxScrollOffset) return false;
            parallaxContent.style.transform = 'translateY(' + scrollY * .5 + 'px)';
            siteHeader.style.transform = 'translateY(' + scrollY * .75 + 'px)';
        };

        var siteHeader = document.querySelector('.site-header');
        var parallaxContent = parallaxContainer.querySelector('.parallax-content');
        var maxScrollOffset = parallaxContainer.offsetTop + parallaxContainer.offsetHeight;
        if (parallaxContent) window.addEventListener('gesturechange', handleScroll);
        if (parallaxContent) window.addEventListener('touchmove', handleScroll);
        if (parallaxContent) window.addEventListener('scroll', handleScroll);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwiY29uc29sZSIsInRpbWUiLCJwYXJhbGxheENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJtYXBDb250YWluZXIiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFkiLCJtYXhTY3JvbGxPZmZzZXQiLCJwYXJhbGxheENvbnRlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNpdGVIZWFkZXIiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxUb01hcCIsImlubmVySGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lYm9yZGVyIiwiYWxsb3dmdWxsc2NyZWVuIiwiZGlzcGxheSIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aW1lRW5kIl0sIm1hcHBpbmdzIjoiOztBQUFDLGFBQVk7QUFDYjs7QUFFQSxRQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDcEMsWUFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDQSxVQUFVRSxTQUFTQyxhQUFULENBQXVCSCxPQUF2QixDQUFWO0FBQ2pDLFlBQUlDLEtBQUosRUFBV0csVUFBVUosT0FBVixFQUFtQkMsS0FBbkI7QUFDWCxlQUFPRCxPQUFQOztBQUVBLGlCQUFTSSxTQUFULENBQW1CQyxHQUFuQixFQUF3QkosS0FBeEIsRUFBK0I7QUFDM0IsaUJBQUssSUFBTUssSUFBWCxJQUFtQkwsS0FBbkIsRUFBMEI7QUFDdEIsb0JBQUlLLFNBQVMsT0FBVCxJQUFvQkEsU0FBUyxTQUFqQyxFQUE0Q0YsVUFBVUosUUFBUU0sSUFBUixDQUFWLEVBQXlCTCxNQUFNSyxJQUFOLENBQXpCLEVBQTVDLEtBQ0tELElBQUlDLElBQUosSUFBWUwsTUFBTUssSUFBTixDQUFaO0FBQ1I7QUFDSjtBQUNKLEtBWEQ7O0FBYUFDLFlBQVFDLElBQVIsQ0FBYSxvQkFBYjs7QUFFQSxRQUFNQyxvQkFBb0JQLFNBQVNRLGFBQVQsQ0FBdUIscUJBQXZCLENBQTFCO0FBQ0EsUUFBTUMsZUFBZVQsU0FBU1EsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7O0FBRUFSLGFBQVNVLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsWUFBL0IsRUFBNkMsWUFBTSxDQUFFLENBQXJEOztBQUVBLFFBQUlKLGlCQUFKLEVBQXVCO0FBQUEsWUFPVkssWUFQVSxHQU9uQixTQUFTQSxZQUFULEdBQXdCO0FBQ3BCLGdCQUFJQyxVQUFVQyxlQUFkLEVBQStCLE9BQU8sS0FBUDtBQUMvQkMsNEJBQWdCQyxLQUFoQixDQUFzQkMsU0FBdEIsbUJBQWdESixVQUFVLEVBQTFEO0FBQ0FLLHVCQUFXRixLQUFYLENBQWlCQyxTQUFqQixtQkFBMkNKLFVBQVUsR0FBckQ7QUFDSCxTQVhrQjs7QUFDbkIsWUFBTUssYUFBYWxCLFNBQVNRLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxZQUFNTyxrQkFBa0JSLGtCQUFrQkMsYUFBbEIsQ0FBZ0MsbUJBQWhDLENBQXhCO0FBQ0EsWUFBTU0sa0JBQWtCUCxrQkFBa0JZLFNBQWxCLEdBQThCWixrQkFBa0JhLFlBQXhFO0FBQ0EsWUFBSUwsZUFBSixFQUFxQk0sT0FBT1YsZ0JBQVAsQ0FBd0IsZUFBeEIsRUFBeUNDLFlBQXpDO0FBQ3JCLFlBQUlHLGVBQUosRUFBcUJNLE9BQU9WLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDQyxZQUFyQztBQUNyQixZQUFJRyxlQUFKLEVBQXFCTSxPQUFPVixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsWUFBbEM7QUFNeEI7O0FBRUQsUUFBSUgsWUFBSixFQUFrQjtBQUNkWSxlQUFPVixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxTQUFTVyxXQUFULEdBQXVCO0FBQ3JELGdCQUFJVCxVQUFVVSxXQUFWLEdBQXdCZCxhQUFhVSxTQUF6QyxFQUFvRCxPQUFPLEtBQVA7QUFDcERWLHlCQUFhZSxXQUFiLENBQXlCM0IsU0FBUyxRQUFULEVBQW1CO0FBQ3hDNEIscUJBQUtoQixhQUFhaUIsWUFBYixDQUEwQixhQUExQixDQURtQztBQUV4Q0MsdUJBQU9sQixhQUFhaUIsWUFBYixDQUEwQixZQUExQixDQUZpQztBQUd4Q0Usd0JBQVFuQixhQUFhaUIsWUFBYixDQUEwQixhQUExQixDQUhnQztBQUl4Q0csNkJBQWEsR0FKMkI7QUFLeENDLGlDQUFpQixJQUx1QjtBQU14Q2QsdUJBQU87QUFDSGUsNkJBQVMsT0FETjtBQUVIQyw0QkFBUSxHQUZMO0FBR0hDLHFDQUFpQjtBQUhkO0FBTmlDLGFBQW5CLENBQXpCO0FBWUFaLG1CQUFPYSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1osV0FBckM7QUFDSCxTQWZEO0FBZ0JIOztBQUVEakIsWUFBUThCLE9BQVIsQ0FBZ0Isb0JBQWhCO0FBRUMsQ0ExREEsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWxDb21wID0gZnVuY3Rpb24oZWxlbWVudCwgcHJvcHMpIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYgKHByb3BzKSBleHRlbmRPYmooZWxlbWVudCwgcHJvcHMpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGV4dGVuZE9iaihvYmosIHByb3BzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3R5bGUnIHx8IHByb3AgPT09ICdkYXRhc2V0JykgZXh0ZW5kT2JqKGVsZW1lbnRbcHJvcF0sIHByb3BzW3Byb3BdKTtcclxuICAgICAgICAgICAgZWxzZSBvYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbmNvbnNvbGUudGltZSgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcclxuXHJcbmNvbnN0IHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LWNvbnRhaW5lcicpO1xyXG5jb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwLWNvbnRhaW5lcicpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge30pO1xyXG5cclxuaWYgKHBhcmFsbGF4Q29udGFpbmVyKSB7XHJcbiAgICBjb25zdCBzaXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XHJcbiAgICBjb25zdCBwYXJhbGxheENvbnRlbnQgPSBwYXJhbGxheENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtY29udGVudCcpO1xyXG4gICAgY29uc3QgbWF4U2Nyb2xsT2Zmc2V0ID0gcGFyYWxsYXhDb250YWluZXIub2Zmc2V0VG9wICsgcGFyYWxsYXhDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgaWYgKHBhcmFsbGF4Q29udGVudCkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2dlc3R1cmVjaGFuZ2UnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgaWYgKHBhcmFsbGF4Q29udGVudCkgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSA+IG1heFNjcm9sbE9mZnNldCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHBhcmFsbGF4Q29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNX1weClgO1xyXG4gICAgICAgIHNpdGVIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZICogLjc1fXB4KWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChtYXBDb250YWluZXIpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiBzY3JvbGxUb01hcCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSArIGlubmVySGVpZ2h0IDwgbWFwQ29udGFpbmVyLm9mZnNldFRvcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIG1hcENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sQ29tcCgnaWZyYW1lJywge1xyXG4gICAgICAgICAgICBzcmM6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWZyYW1lJyksXHJcbiAgICAgICAgICAgIHdpZHRoOiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZHRoJyksXHJcbiAgICAgICAgICAgIGhlaWdodDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSxcclxuICAgICAgICAgICAgZnJhbWVib3JkZXI6IFwiMFwiLFxyXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjODg4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb01hcCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc29sZS50aW1lRW5kKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xuXG59KCkpO1xuIl19
