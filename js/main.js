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

    var parallaxContainer = document.querySelector('.section-hero');
    var parallaxContent = parallaxContainer.querySelector('.hero-content');
    var mapContainer = document.querySelector('#map-container');

    window.addEventListener('scroll', function () {
        if (scrollY > parallaxContainer.offsetTop + parallaxContainer.offsetHeight) return false;
        parallaxContent.style.transform = 'translateY(' + scrollY / 3 + 'px)';
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwiY29uc29sZSIsInRpbWUiLCJwYXJhbGxheENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJhbGxheENvbnRlbnQiLCJtYXBDb250YWluZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwidHJhbnNmb3JtIiwic2Nyb2xsVG9NYXAiLCJpbm5lckhlaWdodCIsImFwcGVuZENoaWxkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwid2lkdGgiLCJoZWlnaHQiLCJmcmFtZWJvcmRlciIsImFsbG93ZnVsbHNjcmVlbiIsImRpc3BsYXkiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGltZUVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQyxhQUFZO0FBQ2I7O0FBRUEsUUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ3BDLFlBQUksT0FBT0QsT0FBUCxLQUFtQixRQUF2QixFQUFpQ0EsVUFBVUUsU0FBU0MsYUFBVCxDQUF1QkgsT0FBdkIsQ0FBVjtBQUNqQyxZQUFJQyxLQUFKLEVBQVdHLFVBQVVKLE9BQVYsRUFBbUJDLEtBQW5CO0FBQ1gsZUFBT0QsT0FBUDs7QUFFQSxpQkFBU0ksU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JKLEtBQXhCLEVBQStCO0FBQzNCLGlCQUFLLElBQU1LLElBQVgsSUFBbUJMLEtBQW5CLEVBQTBCO0FBQ3RCLG9CQUFJSyxTQUFTLE9BQVQsSUFBb0JBLFNBQVMsU0FBakMsRUFBNENGLFVBQVVKLFFBQVFNLElBQVIsQ0FBVixFQUF5QkwsTUFBTUssSUFBTixDQUF6QixFQUE1QyxLQUNLRCxJQUFJQyxJQUFKLElBQVlMLE1BQU1LLElBQU4sQ0FBWjtBQUNSO0FBQ0o7QUFDSixLQVhEOztBQWFBQyxZQUFRQyxJQUFSLENBQWEsb0JBQWI7O0FBRUEsUUFBTUMsb0JBQW9CUCxTQUFTUSxhQUFULENBQXVCLGVBQXZCLENBQTFCO0FBQ0EsUUFBTUMsa0JBQWtCRixrQkFBa0JDLGFBQWxCLENBQWdDLGVBQWhDLENBQXhCO0FBQ0EsUUFBTUUsZUFBZVYsU0FBU1EsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7O0FBR0FHLFdBQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVc7QUFDekMsWUFBSUMsVUFBVU4sa0JBQWtCTyxTQUFsQixHQUE4QlAsa0JBQWtCUSxZQUE5RCxFQUE0RSxPQUFPLEtBQVA7QUFDNUVOLHdCQUFnQk8sS0FBaEIsQ0FBc0JDLFNBQXRCLG1CQUFnREosVUFBVSxDQUExRDtBQUNILEtBSEQ7O0FBTUFGLFdBQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFNBQVNNLFdBQVQsR0FBdUI7O0FBRXJELFlBQUlMLFVBQVVNLFdBQVYsR0FBd0JULGFBQWFJLFNBQXpDLEVBQW9ELE9BQU8sS0FBUDs7QUFFcERKLHFCQUFhVSxXQUFiLENBQXlCdkIsU0FBUyxRQUFULEVBQW1CO0FBQ3hDd0IsaUJBQUtYLGFBQWFZLFlBQWIsQ0FBMEIsYUFBMUIsQ0FEbUM7QUFFeENDLG1CQUFPYixhQUFhWSxZQUFiLENBQTBCLFlBQTFCLENBRmlDO0FBR3hDRSxvQkFBUWQsYUFBYVksWUFBYixDQUEwQixhQUExQixDQUhnQztBQUl4Q0cseUJBQWEsR0FKMkI7QUFLeENDLDZCQUFpQixJQUx1QjtBQU14Q1YsbUJBQU87QUFDSFcseUJBQVMsT0FETjtBQUVISCx3QkFBUSxPQUZMO0FBR0hJLHdCQUFRLEdBSEw7QUFJSEMsaUNBQWlCO0FBSmQ7QUFOaUMsU0FBbkIsQ0FBekI7O0FBY0FsQixlQUFPbUIsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNaLFdBQXJDO0FBRUgsS0FwQkQ7O0FBc0JBYixZQUFRMEIsT0FBUixDQUFnQixvQkFBaEI7QUFFQyxDQXJEQSxHQUFEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHRtbENvbXAgPSBmdW5jdGlvbihlbGVtZW50LCBwcm9wcykge1xyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBpZiAocHJvcHMpIGV4dGVuZE9iaihlbGVtZW50LCBwcm9wcyk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZXh0ZW5kT2JqKG9iaiwgcHJvcHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gcHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdHlsZScgfHwgcHJvcCA9PT0gJ2RhdGFzZXQnKSBleHRlbmRPYmooZWxlbWVudFtwcm9wXSwgcHJvcHNbcHJvcF0pO1xyXG4gICAgICAgICAgICBlbHNlIG9ialtwcm9wXSA9IHByb3BzW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuY29uc29sZS50aW1lKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xyXG5cclxuY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1oZXJvJyk7XHJcbmNvbnN0IHBhcmFsbGF4Q29udGVudCA9IHBhcmFsbGF4Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWNvbnRlbnQnKTtcclxuY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1jb250YWluZXInKTtcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoc2Nyb2xsWSA+IHBhcmFsbGF4Q29udGFpbmVyLm9mZnNldFRvcCArIHBhcmFsbGF4Q29udGFpbmVyLm9mZnNldEhlaWdodCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcGFyYWxsYXhDb250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7c2Nyb2xsWSAvIDN9cHgpYDtcclxufSk7XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIHNjcm9sbFRvTWFwKCkge1xyXG4gICAgXHJcbiAgICBpZiAoc2Nyb2xsWSArIGlubmVySGVpZ2h0IDwgbWFwQ29udGFpbmVyLm9mZnNldFRvcCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIG1hcENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sQ29tcCgnaWZyYW1lJywge1xyXG4gICAgICAgIHNyYzogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZnJhbWUnKSxcclxuICAgICAgICB3aWR0aDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpLFxyXG4gICAgICAgIGhlaWdodDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSxcclxuICAgICAgICBmcmFtZWJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnXHJcbiAgICAgICAgfVxyXG4gICAgfSkpO1xyXG4gICAgXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9NYXApO1xyXG4gICAgXHJcbn0pO1xyXG5cclxuY29uc29sZS50aW1lRW5kKCdFeGVjdcOnw6NvIGRvIHNjcmlwdCcpO1xuXG59KCkpO1xuIl19
