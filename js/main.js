'use strict';

(function () {
    'use strict';

    var parallax = function parallax(parent, fx) {
        if (typeof parent === 'string') parent = document.querySelector(parent);
        if (!parent) return console.log('Parallax container not found');
        var boundings = { top: parent.offsetTop - window.innerHeight, bottom: parent.offsetTop + parent.offsetHeight };
        for (var item in fx) {
            var selector = fx[item].element;
            if (typeof selector === 'string') fx[item].element = parent.querySelector(selector);
            if (!fx[item].element) console.log('Child "' + selector + '" not found!');
        }
        window.addEventListener('scroll', function () {
            if (scrollY > boundings.top && scrollY < boundings.bottom) for (var _item in fx) {
                translate(fx[_item]);
            }
        });
        function translate(effect) {
            if (!effect) return false;
            var translation = (scrollY - parent.offsetTop) / effect.level;
            effect.element.style.transform = 'translateY(' + translation + 'px)';
        }
    };

    var parallaxContainer = document.querySelector('.section-features');
    parallaxContainer.style.overflow = 'hidden';
    parallax(parallaxContainer, [{
        element: '.feature-icon', level: 2
    }, {
        element: '.feature-text', level: 2
    }]);

    var mapContainer = document.querySelector('#map-container');
    window.addEventListener('scroll', function scrollToMap() {
        if (scrollY + innerHeight >= mapContainer.offsetTop) {
            var mapIframe = document.createElement('iframe');
            mapIframe.src = mapContainer.getAttribute('data-iframe');
            mapIframe.width = mapContainer.getAttribute('data-width');
            mapIframe.height = mapContainer.getAttribute('data-height');
            mapIframe.frameborder = "0";
            mapIframe.style.border = "0";
            mapIframe.setAttribute('allowfullscreen', true);
            mapIframe.style.backgroundColor = '#eee';
            mapContainer.appendChild(mapIframe);
            window.removeEventListener('scroll', scrollToMap);
        }
    });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicGFyYWxsYXgiLCJwYXJlbnQiLCJmeCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJib3VuZGluZ3MiLCJ0b3AiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImJvdHRvbSIsIm9mZnNldEhlaWdodCIsIml0ZW0iLCJzZWxlY3RvciIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInRyYW5zbGF0ZSIsImVmZmVjdCIsInRyYW5zbGF0aW9uIiwibGV2ZWwiLCJzdHlsZSIsInRyYW5zZm9ybSIsInBhcmFsbGF4Q29udGFpbmVyIiwib3ZlcmZsb3ciLCJtYXBDb250YWluZXIiLCJzY3JvbGxUb01hcCIsIm1hcElmcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsImZyYW1lYm9yZGVyIiwiYm9yZGVyIiwic2V0QXR0cmlidXRlIiwiYmFja2dyb3VuZENvbG9yIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFDLGFBQVk7QUFDYjs7QUFFQSxRQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBU0MsTUFBVCxFQUFpQkMsRUFBakIsRUFBcUI7QUFDaEMsWUFBSSxPQUFPRCxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDQSxTQUFTRSxTQUFTQyxhQUFULENBQXVCSCxNQUF2QixDQUFUO0FBQ2hDLFlBQUksQ0FBQ0EsTUFBTCxFQUFhLE9BQU9JLFFBQVFDLEdBQVIsQ0FBWSw4QkFBWixDQUFQO0FBQ2IsWUFBTUMsWUFBWSxFQUFFQyxLQUFLUCxPQUFPUSxTQUFQLEdBQW1CQyxPQUFPQyxXQUFqQyxFQUE4Q0MsUUFBUVgsT0FBT1EsU0FBUCxHQUFtQlIsT0FBT1ksWUFBaEYsRUFBbEI7QUFDQSxhQUFLLElBQU1DLElBQVgsSUFBbUJaLEVBQW5CLEVBQXVCO0FBQ25CLGdCQUFNYSxXQUFXYixHQUFHWSxJQUFILEVBQVNFLE9BQTFCO0FBQ0EsZ0JBQUksT0FBT0QsUUFBUCxLQUFvQixRQUF4QixFQUFrQ2IsR0FBR1ksSUFBSCxFQUFTRSxPQUFULEdBQW1CZixPQUFPRyxhQUFQLENBQXFCVyxRQUFyQixDQUFuQjtBQUNsQyxnQkFBSSxDQUFDYixHQUFHWSxJQUFILEVBQVNFLE9BQWQsRUFBdUJYLFFBQVFDLEdBQVIsYUFBc0JTLFFBQXRCO0FBQzFCO0FBQ0RMLGVBQU9PLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVU7QUFDeEMsZ0JBQUlDLFVBQVVYLFVBQVVDLEdBQXBCLElBQTJCVSxVQUFVWCxVQUFVSyxNQUFuRCxFQUEyRCxLQUFLLElBQU1FLEtBQVgsSUFBbUJaLEVBQW5CO0FBQXVCaUIsMEJBQVVqQixHQUFHWSxLQUFILENBQVY7QUFBdkI7QUFDOUQsU0FGRDtBQUdBLGlCQUFTSyxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUN2QixnQkFBSSxDQUFDQSxNQUFMLEVBQWEsT0FBTyxLQUFQO0FBQ2IsZ0JBQU1DLGNBQWMsQ0FBQ0gsVUFBVWpCLE9BQU9RLFNBQWxCLElBQStCVyxPQUFPRSxLQUExRDtBQUNBRixtQkFBT0osT0FBUCxDQUFlTyxLQUFmLENBQXFCQyxTQUFyQixtQkFBK0NILFdBQS9DO0FBQ0g7QUFDSixLQWpCRDs7QUFtQkEsUUFBTUksb0JBQW9CdEIsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBMUI7QUFDQXFCLHNCQUFrQkYsS0FBbEIsQ0FBd0JHLFFBQXhCLEdBQW1DLFFBQW5DO0FBQ0ExQixhQUFTeUIsaUJBQVQsRUFBNEIsQ0FBQztBQUN6QlQsaUJBQVMsZUFEZ0IsRUFDQ00sT0FBTztBQURSLEtBQUQsRUFFekI7QUFDQ04saUJBQVMsZUFEVixFQUMyQk0sT0FBTztBQURsQyxLQUZ5QixDQUE1Qjs7QUFNQSxRQUFNSyxlQUFleEIsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQU0sV0FBT08sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBU1csV0FBVCxHQUF1QjtBQUNyRCxZQUFJVixVQUFVUCxXQUFWLElBQXlCZ0IsYUFBYWxCLFNBQTFDLEVBQXFEO0FBQ2pELGdCQUFNb0IsWUFBWTFCLFNBQVMyQixhQUFULENBQXVCLFFBQXZCLENBQWxCO0FBQ0FELHNCQUFVRSxHQUFWLEdBQWdCSixhQUFhSyxZQUFiLENBQTBCLGFBQTFCLENBQWhCO0FBQ0FILHNCQUFVSSxLQUFWLEdBQWtCTixhQUFhSyxZQUFiLENBQTBCLFlBQTFCLENBQWxCO0FBQ0FILHNCQUFVSyxNQUFWLEdBQW1CUCxhQUFhSyxZQUFiLENBQTBCLGFBQTFCLENBQW5CO0FBQ0FILHNCQUFVTSxXQUFWLEdBQXdCLEdBQXhCO0FBQ0FOLHNCQUFVTixLQUFWLENBQWdCYSxNQUFoQixHQUF5QixHQUF6QjtBQUNBUCxzQkFBVVEsWUFBVixDQUF1QixpQkFBdkIsRUFBMEMsSUFBMUM7QUFDQVIsc0JBQVVOLEtBQVYsQ0FBZ0JlLGVBQWhCLEdBQWtDLE1BQWxDO0FBQ0FYLHlCQUFhWSxXQUFiLENBQXlCVixTQUF6QjtBQUNBbkIsbUJBQU84QixtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1osV0FBckM7QUFDSDtBQUNKLEtBYkQ7QUFlQyxDQTlDQSxHQUFEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyYWxsYXggPSBmdW5jdGlvbihwYXJlbnQsIGZ4KSB7XHJcbiAgICBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KTtcclxuICAgIGlmICghcGFyZW50KSByZXR1cm4gY29uc29sZS5sb2coJ1BhcmFsbGF4IGNvbnRhaW5lciBub3QgZm91bmQnKTtcclxuICAgIGNvbnN0IGJvdW5kaW5ncyA9IHsgdG9wOiBwYXJlbnQub2Zmc2V0VG9wIC0gd2luZG93LmlubmVySGVpZ2h0LCBib3R0b206IHBhcmVudC5vZmZzZXRUb3AgKyBwYXJlbnQub2Zmc2V0SGVpZ2h0IH07XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gZngpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IGZ4W2l0ZW1dLmVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIGZ4W2l0ZW1dLmVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCFmeFtpdGVtXS5lbGVtZW50KSBjb25zb2xlLmxvZyhgQ2hpbGQgXCIke3NlbGVjdG9yfVwiIG5vdCBmb3VuZCFgKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChzY3JvbGxZID4gYm91bmRpbmdzLnRvcCAmJiBzY3JvbGxZIDwgYm91bmRpbmdzLmJvdHRvbSkgZm9yIChjb25zdCBpdGVtIGluIGZ4KSB0cmFuc2xhdGUoZnhbaXRlbV0pO1xyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoZWZmZWN0KSB7XHJcbiAgICAgICAgaWYgKCFlZmZlY3QpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IChzY3JvbGxZIC0gcGFyZW50Lm9mZnNldFRvcCkgLyBlZmZlY3QubGV2ZWw7XHJcbiAgICAgICAgZWZmZWN0LmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGlvbn1weClgO1xyXG4gICAgfVxyXG59O1xuXG5jb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWZlYXR1cmVzJyk7XHJcbnBhcmFsbGF4Q29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbnBhcmFsbGF4KHBhcmFsbGF4Q29udGFpbmVyLCBbe1xyXG4gICAgZWxlbWVudDogJy5mZWF0dXJlLWljb24nLCBsZXZlbDogMlxyXG59LCB7XHJcbiAgICBlbGVtZW50OiAnLmZlYXR1cmUtdGV4dCcsIGxldmVsOiAyXHJcbn1dKTtcclxuXHJcbmNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAtY29udGFpbmVyJyk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiBzY3JvbGxUb01hcCgpIHtcclxuICAgIGlmIChzY3JvbGxZICsgaW5uZXJIZWlnaHQgPj0gbWFwQ29udGFpbmVyLm9mZnNldFRvcCkge1xyXG4gICAgICAgIGNvbnN0IG1hcElmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgICAgIG1hcElmcmFtZS5zcmMgPSBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlmcmFtZScpO1xyXG4gICAgICAgIG1hcElmcmFtZS53aWR0aCA9IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKTtcclxuICAgICAgICBtYXBJZnJhbWUuaGVpZ2h0ID0gbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKTtcclxuICAgICAgICBtYXBJZnJhbWUuZnJhbWVib3JkZXIgPSBcIjBcIjtcclxuICAgICAgICBtYXBJZnJhbWUuc3R5bGUuYm9yZGVyID0gXCIwXCI7XHJcbiAgICAgICAgbWFwSWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgdHJ1ZSk7XHJcbiAgICAgICAgbWFwSWZyYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWVlJztcclxuICAgICAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwSWZyYW1lKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9NYXApO1xyXG4gICAgfVxyXG59KTtcblxufSgpKTtcbiJdfQ==
