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

    document.body.addEventListener('touchstart', function () {});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwiY29uc29sZSIsInRpbWUiLCJzaXRlSGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInBhcmFsbGF4Q29udGFpbmVyIiwicGFyYWxsYXhDb250ZW50IiwibWFwQ29udGFpbmVyIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzY3JvbGxUb01hcCIsImlubmVySGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lYm9yZGVyIiwiYWxsb3dmdWxsc2NyZWVuIiwiZGlzcGxheSIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aW1lRW5kIl0sIm1hcHBpbmdzIjoiOztBQUFDLGFBQVk7QUFDYjs7QUFFQSxRQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDcEMsWUFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDQSxVQUFVRSxTQUFTQyxhQUFULENBQXVCSCxPQUF2QixDQUFWO0FBQ2pDLFlBQUlDLEtBQUosRUFBV0csVUFBVUosT0FBVixFQUFtQkMsS0FBbkI7QUFDWCxlQUFPRCxPQUFQOztBQUVBLGlCQUFTSSxTQUFULENBQW1CQyxHQUFuQixFQUF3QkosS0FBeEIsRUFBK0I7QUFDM0IsaUJBQUssSUFBTUssSUFBWCxJQUFtQkwsS0FBbkIsRUFBMEI7QUFDdEIsb0JBQUlLLFNBQVMsT0FBVCxJQUFvQkEsU0FBUyxTQUFqQyxFQUE0Q0YsVUFBVUosUUFBUU0sSUFBUixDQUFWLEVBQXlCTCxNQUFNSyxJQUFOLENBQXpCLEVBQTVDLEtBQ0tELElBQUlDLElBQUosSUFBWUwsTUFBTUssSUFBTixDQUFaO0FBQ1I7QUFDSjtBQUNKLEtBWEQ7O0FBYUFDLFlBQVFDLElBQVIsQ0FBYSxvQkFBYjs7QUFFQSxRQUFNQyxhQUFhUCxTQUFTUSxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsUUFBTUMsb0JBQW9CVCxTQUFTUSxhQUFULENBQXVCLHFCQUF2QixDQUExQjtBQUNBLFFBQU1FLGtCQUFrQkQsa0JBQWtCRCxhQUFsQixDQUFnQyxtQkFBaEMsQ0FBeEI7QUFDQSxRQUFNRyxlQUFlWCxTQUFTUSxhQUFULENBQXVCLGdCQUF2QixDQUFyQjs7QUFFQVIsYUFBU1ksSUFBVCxDQUFjQyxnQkFBZCxDQUErQixZQUEvQixFQUE2QyxZQUFNLENBQUUsQ0FBckQ7O0FBRUEsUUFBSUoscUJBQXFCQyxlQUF6QixFQUEwQ0ksT0FBT0QsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVztBQUNuRixZQUFJRSxVQUFVTixrQkFBa0JPLFNBQWxCLEdBQThCUCxrQkFBa0JRLFlBQTlELEVBQTRFLE9BQU8sS0FBUDtBQUM1RVAsd0JBQWdCUSxLQUFoQixDQUFzQkMsU0FBdEIsbUJBQWdESixVQUFVLENBQTFEO0FBQ0FSLG1CQUFXVyxLQUFYLENBQWlCQyxTQUFqQixtQkFBMkNKLFVBQVUsQ0FBckQ7QUFDSCxLQUp5Qzs7QUFNMUNELFdBQU9ELGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFNBQVNPLFdBQVQsR0FBdUI7O0FBRXJELFlBQUlMLFVBQVVNLFdBQVYsR0FBd0JWLGFBQWFLLFNBQXpDLEVBQW9ELE9BQU8sS0FBUDs7QUFFcERMLHFCQUFhVyxXQUFiLENBQXlCekIsU0FBUyxRQUFULEVBQW1CO0FBQ3hDMEIsaUJBQUtaLGFBQWFhLFlBQWIsQ0FBMEIsYUFBMUIsQ0FEbUM7QUFFeENDLG1CQUFPZCxhQUFhYSxZQUFiLENBQTBCLFlBQTFCLENBRmlDO0FBR3hDRSxvQkFBUWYsYUFBYWEsWUFBYixDQUEwQixhQUExQixDQUhnQztBQUl4Q0cseUJBQWEsR0FKMkI7QUFLeENDLDZCQUFpQixJQUx1QjtBQU14Q1YsbUJBQU87QUFDSFcseUJBQVMsT0FETjtBQUVISCx3QkFBUSxPQUZMO0FBR0hJLHdCQUFRLEdBSEw7QUFJSEMsaUNBQWlCO0FBSmQ7QUFOaUMsU0FBbkIsQ0FBekI7O0FBY0FqQixlQUFPa0IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNaLFdBQXJDO0FBRUgsS0FwQkQ7O0FBc0JBZixZQUFRNEIsT0FBUixDQUFnQixvQkFBaEI7QUFFQyxDQXZEQSxHQUFEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbENvbXAgPSBmdW5jdGlvbihlbGVtZW50LCBwcm9wcykge1xyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBpZiAocHJvcHMpIGV4dGVuZE9iaihlbGVtZW50LCBwcm9wcyk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZXh0ZW5kT2JqKG9iaiwgcHJvcHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdHlsZScgfHwgcHJvcCA9PT0gJ2RhdGFzZXQnKSBleHRlbmRPYmooZWxlbWVudFtwcm9wXSwgcHJvcHNbcHJvcF0pO1xyXG4gICAgICAgICAgICBlbHNlIG9ialtwcm9wXSA9IHByb3BzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuY29uc29sZS50aW1lKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xyXG5cclxuY29uc3Qgc2l0ZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xyXG5jb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250YWluZXInKTtcclxuY29uc3QgcGFyYWxsYXhDb250ZW50ID0gcGFyYWxsYXhDb250YWluZXIucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LWNvbnRlbnQnKTtcclxuY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1jb250YWluZXInKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHt9KTtcclxuXHJcbmlmIChwYXJhbGxheENvbnRhaW5lciAmJiBwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChzY3JvbGxZID4gcGFyYWxsYXhDb250YWluZXIub2Zmc2V0VG9wICsgcGFyYWxsYXhDb250YWluZXIub2Zmc2V0SGVpZ2h0KSByZXR1cm4gZmFsc2U7XHJcbiAgICBwYXJhbGxheENvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZIC8gM31weClgO1xyXG4gICAgc2l0ZUhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgLyAyfXB4KWA7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIHNjcm9sbFRvTWFwKCkge1xyXG4gICAgXHJcbiAgICBpZiAoc2Nyb2xsWSArIGlubmVySGVpZ2h0IDwgbWFwQ29udGFpbmVyLm9mZnNldFRvcCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIG1hcENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sQ29tcCgnaWZyYW1lJywge1xyXG4gICAgICAgIHNyYzogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZnJhbWUnKSxcclxuICAgICAgICB3aWR0aDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpLFxyXG4gICAgICAgIGhlaWdodDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSxcclxuICAgICAgICBmcmFtZWJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnXHJcbiAgICAgICAgfVxyXG4gICAgfSkpO1xyXG4gICAgXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9NYXApO1xyXG4gICAgXHJcbn0pO1xyXG5cclxuY29uc29sZS50aW1lRW5kKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xuXG59KCkpO1xuIl19
