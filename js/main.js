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
        if (parallaxContent) window.addEventListener('gesturechange', handleScroll, { passive: true });
        if (parallaxContent) window.addEventListener('touchmove', handleScroll, { passive: true });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwiY29uc29sZSIsInRpbWUiLCJwYXJhbGxheENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJtYXBDb250YWluZXIiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFkiLCJtYXhTY3JvbGxPZmZzZXQiLCJwYXJhbGxheENvbnRlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNpdGVIZWFkZXIiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJwYXNzaXZlIiwic2Nyb2xsVG9NYXAiLCJpbm5lckhlaWdodCIsImFwcGVuZENoaWxkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwid2lkdGgiLCJoZWlnaHQiLCJmcmFtZWJvcmRlciIsImFsbG93ZnVsbHNjcmVlbiIsImRpc3BsYXkiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGltZUVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQyxhQUFZO0FBQ2I7O0FBRUEsUUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ3BDLFlBQUksT0FBT0QsT0FBUCxLQUFtQixRQUF2QixFQUFpQ0EsVUFBVUUsU0FBU0MsYUFBVCxDQUF1QkgsT0FBdkIsQ0FBVjtBQUNqQyxZQUFJQyxLQUFKLEVBQVdHLFVBQVVKLE9BQVYsRUFBbUJDLEtBQW5CO0FBQ1gsZUFBT0QsT0FBUDs7QUFFQSxpQkFBU0ksU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JKLEtBQXhCLEVBQStCO0FBQzNCLGlCQUFLLElBQU1LLElBQVgsSUFBbUJMLEtBQW5CLEVBQTBCO0FBQ3RCLG9CQUFJSyxTQUFTLE9BQVQsSUFBb0JBLFNBQVMsU0FBakMsRUFBNENGLFVBQVVKLFFBQVFNLElBQVIsQ0FBVixFQUF5QkwsTUFBTUssSUFBTixDQUF6QixFQUE1QyxLQUNLRCxJQUFJQyxJQUFKLElBQVlMLE1BQU1LLElBQU4sQ0FBWjtBQUNSO0FBQ0o7QUFDSixLQVhEOztBQWFBQyxZQUFRQyxJQUFSLENBQWEsb0JBQWI7O0FBRUEsUUFBTUMsb0JBQW9CUCxTQUFTUSxhQUFULENBQXVCLHFCQUF2QixDQUExQjtBQUNBLFFBQU1DLGVBQWVULFNBQVNRLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCOztBQUVBUixhQUFTVSxJQUFULENBQWNDLGdCQUFkLENBQStCLFlBQS9CLEVBQTZDLFlBQU0sQ0FBRSxDQUFyRDs7QUFFQSxRQUFJSixpQkFBSixFQUF1QjtBQUFBLFlBT1ZLLFlBUFUsR0FPbkIsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQixnQkFBSUMsVUFBVUMsZUFBZCxFQUErQixPQUFPLEtBQVA7QUFDL0JDLDRCQUFnQkMsS0FBaEIsQ0FBc0JDLFNBQXRCLG1CQUFnREosVUFBVSxFQUExRDtBQUNBSyx1QkFBV0YsS0FBWCxDQUFpQkMsU0FBakIsbUJBQTJDSixVQUFVLEdBQXJEO0FBQ0gsU0FYa0I7O0FBQ25CLFlBQU1LLGFBQWFsQixTQUFTUSxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsWUFBTU8sa0JBQWtCUixrQkFBa0JDLGFBQWxCLENBQWdDLG1CQUFoQyxDQUF4QjtBQUNBLFlBQU1NLGtCQUFrQlAsa0JBQWtCWSxTQUFsQixHQUE4Qlosa0JBQWtCYSxZQUF4RTtBQUNBLFlBQUlMLGVBQUosRUFBcUJNLE9BQU9WLGdCQUFQLENBQXdCLGVBQXhCLEVBQXlDQyxZQUF6QyxFQUF1RCxFQUFDVSxTQUFTLElBQVYsRUFBdkQ7QUFDckIsWUFBSVAsZUFBSixFQUFxQk0sT0FBT1YsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNDLFlBQXJDLEVBQW1ELEVBQUNVLFNBQVMsSUFBVixFQUFuRDtBQUNyQixZQUFJUCxlQUFKLEVBQXFCTSxPQUFPVixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsWUFBbEM7QUFNeEI7O0FBRUQsUUFBSUgsWUFBSixFQUFrQjtBQUNkWSxlQUFPVixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxTQUFTWSxXQUFULEdBQXVCO0FBQ3JELGdCQUFJVixVQUFVVyxXQUFWLEdBQXdCZixhQUFhVSxTQUF6QyxFQUFvRCxPQUFPLEtBQVA7QUFDcERWLHlCQUFhZ0IsV0FBYixDQUF5QjVCLFNBQVMsUUFBVCxFQUFtQjtBQUN4QzZCLHFCQUFLakIsYUFBYWtCLFlBQWIsQ0FBMEIsYUFBMUIsQ0FEbUM7QUFFeENDLHVCQUFPbkIsYUFBYWtCLFlBQWIsQ0FBMEIsWUFBMUIsQ0FGaUM7QUFHeENFLHdCQUFRcEIsYUFBYWtCLFlBQWIsQ0FBMEIsYUFBMUIsQ0FIZ0M7QUFJeENHLDZCQUFhLEdBSjJCO0FBS3hDQyxpQ0FBaUIsSUFMdUI7QUFNeENmLHVCQUFPO0FBQ0hnQiw2QkFBUyxPQUROO0FBRUhDLDRCQUFRLEdBRkw7QUFHSEMscUNBQWlCO0FBSGQ7QUFOaUMsYUFBbkIsQ0FBekI7QUFZQWIsbUJBQU9jLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDWixXQUFyQztBQUNILFNBZkQ7QUFnQkg7O0FBRURsQixZQUFRK0IsT0FBUixDQUFnQixvQkFBaEI7QUFFQyxDQTFEQSxHQUFEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbENvbXAgPSBmdW5jdGlvbihlbGVtZW50LCBwcm9wcykge1xyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBpZiAocHJvcHMpIGV4dGVuZE9iaihlbGVtZW50LCBwcm9wcyk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZXh0ZW5kT2JqKG9iaiwgcHJvcHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdHlsZScgfHwgcHJvcCA9PT0gJ2RhdGFzZXQnKSBleHRlbmRPYmooZWxlbWVudFtwcm9wXSwgcHJvcHNbcHJvcF0pO1xyXG4gICAgICAgICAgICBlbHNlIG9ialtwcm9wXSA9IHByb3BzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuY29uc29sZS50aW1lKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xyXG5cclxuY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgtY29udGFpbmVyJyk7XHJcbmNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtY29udGFpbmVyJyk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSk7XHJcblxyXG5pZiAocGFyYWxsYXhDb250YWluZXIpIHtcclxuICAgIGNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcclxuICAgIGNvbnN0IHBhcmFsbGF4Q29udGVudCA9IHBhcmFsbGF4Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYXhTY3JvbGxPZmZzZXQgPSBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRUb3AgKyBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2VzdHVyZWNoYW5nZScsIGhhbmRsZVNjcm9sbCwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVTY3JvbGwsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSA+IG1heFNjcm9sbE9mZnNldCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHBhcmFsbGF4Q29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNX1weClgO1xyXG4gICAgICAgIHNpdGVIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZICogLjc1fXB4KWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChtYXBDb250YWluZXIpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiBzY3JvbGxUb01hcCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSArIGlubmVySGVpZ2h0IDwgbWFwQ29udGFpbmVyLm9mZnNldFRvcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIG1hcENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sQ29tcCgnaWZyYW1lJywge1xyXG4gICAgICAgICAgICBzcmM6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWZyYW1lJyksXHJcbiAgICAgICAgICAgIHdpZHRoOiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZHRoJyksXHJcbiAgICAgICAgICAgIGhlaWdodDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSxcclxuICAgICAgICAgICAgZnJhbWVib3JkZXI6IFwiMFwiLFxyXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW46IHRydWUsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjODg4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb01hcCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc29sZS50aW1lRW5kKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xuXG59KCkpO1xuIl19
