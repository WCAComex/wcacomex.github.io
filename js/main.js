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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwiY29uc29sZSIsInRpbWUiLCJwYXJhbGxheENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJtYXBDb250YWluZXIiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFkiLCJtYXhTY3JvbGxPZmZzZXQiLCJwYXJhbGxheENvbnRlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNpdGVIZWFkZXIiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxUb01hcCIsImlubmVySGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lYm9yZGVyIiwiYWxsb3dmdWxsc2NyZWVuIiwiZGlzcGxheSIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aW1lRW5kIl0sIm1hcHBpbmdzIjoiOztBQUFDLGFBQVk7QUFDYjs7QUFFQSxRQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDcEMsWUFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDQSxVQUFVRSxTQUFTQyxhQUFULENBQXVCSCxPQUF2QixDQUFWO0FBQ2pDLFlBQUlDLEtBQUosRUFBV0csVUFBVUosT0FBVixFQUFtQkMsS0FBbkI7QUFDWCxlQUFPRCxPQUFQOztBQUVBLGlCQUFTSSxTQUFULENBQW1CQyxHQUFuQixFQUF3QkosS0FBeEIsRUFBK0I7QUFDM0IsaUJBQUssSUFBTUssSUFBWCxJQUFtQkwsS0FBbkIsRUFBMEI7QUFDdEIsb0JBQUlLLFNBQVMsT0FBVCxJQUFvQkEsU0FBUyxTQUFqQyxFQUE0Q0YsVUFBVUosUUFBUU0sSUFBUixDQUFWLEVBQXlCTCxNQUFNSyxJQUFOLENBQXpCLEVBQTVDLEtBQ0tELElBQUlDLElBQUosSUFBWUwsTUFBTUssSUFBTixDQUFaO0FBQ1I7QUFDSjtBQUNKLEtBWEQ7O0FBYUFDLFlBQVFDLElBQVIsQ0FBYSxvQkFBYjs7QUFFQSxRQUFNQyxvQkFBb0JQLFNBQVNRLGFBQVQsQ0FBdUIscUJBQXZCLENBQTFCO0FBQ0EsUUFBTUMsZUFBZVQsU0FBU1EsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7O0FBRUFSLGFBQVNVLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsWUFBL0IsRUFBNkMsWUFBTSxDQUFFLENBQXJEOztBQUVBLFFBQUlKLGlCQUFKLEVBQXVCO0FBQUEsWUFNVkssWUFOVSxHQU1uQixTQUFTQSxZQUFULEdBQXdCO0FBQ3BCLGdCQUFJQyxVQUFVQyxlQUFkLEVBQStCLE9BQU8sS0FBUDtBQUMvQkMsNEJBQWdCQyxLQUFoQixDQUFzQkMsU0FBdEIsbUJBQWdESixVQUFVLEVBQTFEO0FBQ0FLLHVCQUFXRixLQUFYLENBQWlCQyxTQUFqQixtQkFBMkNKLFVBQVUsR0FBckQ7QUFDSCxTQVZrQjs7QUFDbkIsWUFBTUssYUFBYWxCLFNBQVNRLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxZQUFNTyxrQkFBa0JSLGtCQUFrQkMsYUFBbEIsQ0FBZ0MsbUJBQWhDLENBQXhCO0FBQ0EsWUFBTU0sa0JBQWtCUCxrQkFBa0JZLFNBQWxCLEdBQThCWixrQkFBa0JhLFlBQXhFO0FBQ0EsWUFBSUwsZUFBSixFQUFxQk0sT0FBT1YsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNDLFlBQXJDO0FBQ3JCLFlBQUlHLGVBQUosRUFBcUJNLE9BQU9WLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxZQUFsQztBQU14Qjs7QUFFRCxRQUFJSCxZQUFKLEVBQWtCO0FBQ2RZLGVBQU9WLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFNBQVNXLFdBQVQsR0FBdUI7QUFDckQsZ0JBQUlULFVBQVVVLFdBQVYsR0FBd0JkLGFBQWFVLFNBQXpDLEVBQW9ELE9BQU8sS0FBUDtBQUNwRFYseUJBQWFlLFdBQWIsQ0FBeUIzQixTQUFTLFFBQVQsRUFBbUI7QUFDeEM0QixxQkFBS2hCLGFBQWFpQixZQUFiLENBQTBCLGFBQTFCLENBRG1DO0FBRXhDQyx1QkFBT2xCLGFBQWFpQixZQUFiLENBQTBCLFlBQTFCLENBRmlDO0FBR3hDRSx3QkFBUW5CLGFBQWFpQixZQUFiLENBQTBCLGFBQTFCLENBSGdDO0FBSXhDRyw2QkFBYSxHQUoyQjtBQUt4Q0MsaUNBQWlCLElBTHVCO0FBTXhDZCx1QkFBTztBQUNIZSw2QkFBUyxPQUROO0FBRUhDLDRCQUFRLEdBRkw7QUFHSEMscUNBQWlCO0FBSGQ7QUFOaUMsYUFBbkIsQ0FBekI7QUFZQVosbUJBQU9hLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDWixXQUFyQztBQUNILFNBZkQ7QUFnQkg7O0FBRURqQixZQUFROEIsT0FBUixDQUFnQixvQkFBaEI7QUFFQyxDQXpEQSxHQUFEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbENvbXAgPSBmdW5jdGlvbihlbGVtZW50LCBwcm9wcykge1xyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBpZiAocHJvcHMpIGV4dGVuZE9iaihlbGVtZW50LCBwcm9wcyk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZXh0ZW5kT2JqKG9iaiwgcHJvcHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdHlsZScgfHwgcHJvcCA9PT0gJ2RhdGFzZXQnKSBleHRlbmRPYmooZWxlbWVudFtwcm9wXSwgcHJvcHNbcHJvcF0pO1xyXG4gICAgICAgICAgICBlbHNlIG9ialtwcm9wXSA9IHByb3BzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuY29uc29sZS50aW1lKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xyXG5cclxuY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtY29udGFpbmVyJyk7XHJcbmNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtY29udGFpbmVyJyk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSk7XHJcblxyXG5pZiAocGFyYWxsYXhDb250YWluZXIpIHtcclxuICAgIGNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcclxuICAgIGNvbnN0IHBhcmFsbGF4Q29udGVudCA9IHBhcmFsbGF4Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYXhTY3JvbGxPZmZzZXQgPSBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRUb3AgKyBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxZID4gbWF4U2Nyb2xsT2Zmc2V0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcGFyYWxsYXhDb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c2Nyb2xsWSAqIC41fXB4KWA7XHJcbiAgICAgICAgc2l0ZUhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNzV9cHgpYDtcclxuICAgIH1cclxufVxyXG5cclxuaWYgKG1hcENvbnRhaW5lcikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIHNjcm9sbFRvTWFwKCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxZICsgaW5uZXJIZWlnaHQgPCBtYXBDb250YWluZXIub2Zmc2V0VG9wKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgbWFwQ29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxDb21wKCdpZnJhbWUnLCB7XHJcbiAgICAgICAgICAgIHNyYzogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZnJhbWUnKSxcclxuICAgICAgICAgICAgd2lkdGg6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWhlaWdodCcpLFxyXG4gICAgICAgICAgICBmcmFtZWJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbjogdHJ1ZSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM4ODgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvTWFwKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zb2xlLnRpbWVFbmQoJ0V4ZWN1w6fDo28gZG8gc2NyaXB0Jyk7XG5cbn0oKSk7XG4iXX0=
