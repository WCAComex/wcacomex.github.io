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

    console.time('Execução do script');

    var parallaxContainer = document.querySelector('.section-features');

    parallaxContainer.style.overflow = 'hidden';
    parallax(parallaxContainer, [{
        element: '.feature-icon', level: 2
    }, {
        element: '.feature-text', level: 2
    }]);

    var mapContainer = document.querySelector('#map-container');
    window.addEventListener('scroll', function scrollToMap() {

        if (scrollY + innerHeight < mapContainer.offsetTop) return false;

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
    });

    console.timeEnd('Execução do script');
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicGFyYWxsYXgiLCJwYXJlbnQiLCJmeCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJib3VuZGluZ3MiLCJ0b3AiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImJvdHRvbSIsIm9mZnNldEhlaWdodCIsIml0ZW0iLCJzZWxlY3RvciIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInRyYW5zbGF0ZSIsImVmZmVjdCIsInRyYW5zbGF0aW9uIiwibGV2ZWwiLCJzdHlsZSIsInRyYW5zZm9ybSIsInRpbWUiLCJwYXJhbGxheENvbnRhaW5lciIsIm92ZXJmbG93IiwibWFwQ29udGFpbmVyIiwic2Nyb2xsVG9NYXAiLCJtYXBJZnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiZ2V0QXR0cmlidXRlIiwid2lkdGgiLCJoZWlnaHQiLCJmcmFtZWJvcmRlciIsImJvcmRlciIsInNldEF0dHJpYnV0ZSIsImJhY2tncm91bmRDb2xvciIsImFwcGVuZENoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpbWVFbmQiXSwibWFwcGluZ3MiOiI7O0FBQUMsYUFBWTtBQUNiOztBQUVBLFFBQUlBLFdBQVcsU0FBWEEsUUFBVyxDQUFTQyxNQUFULEVBQWlCQyxFQUFqQixFQUFxQjs7QUFFaEMsWUFBSSxPQUFPRCxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDQSxTQUFTRSxTQUFTQyxhQUFULENBQXVCSCxNQUF2QixDQUFUO0FBQ2hDLFlBQUksQ0FBQ0EsTUFBTCxFQUFhLE9BQU9JLFFBQVFDLEdBQVIsQ0FBWSw4QkFBWixDQUFQOztBQUViLFlBQU1DLFlBQVksRUFBRUMsS0FBS1AsT0FBT1EsU0FBUCxHQUFtQkMsT0FBT0MsV0FBakMsRUFBOENDLFFBQVFYLE9BQU9RLFNBQVAsR0FBbUJSLE9BQU9ZLFlBQWhGLEVBQWxCOztBQUVBLGFBQUssSUFBTUMsSUFBWCxJQUFtQlosRUFBbkIsRUFBdUI7QUFDbkIsZ0JBQU1hLFdBQVdiLEdBQUdZLElBQUgsRUFBU0UsT0FBMUI7QUFDQSxnQkFBSSxPQUFPRCxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDYixHQUFHWSxJQUFILEVBQVNFLE9BQVQsR0FBbUJmLE9BQU9HLGFBQVAsQ0FBcUJXLFFBQXJCLENBQW5CO0FBQ2xDLGdCQUFJLENBQUNiLEdBQUdZLElBQUgsRUFBU0UsT0FBZCxFQUF1QlgsUUFBUUMsR0FBUixhQUFzQlMsUUFBdEI7QUFDMUI7O0FBRURMLGVBQU9PLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVU7QUFDeEMsZ0JBQUlDLFVBQVVYLFVBQVVDLEdBQXBCLElBQTJCVSxVQUFVWCxVQUFVSyxNQUFuRCxFQUEyRCxLQUFLLElBQU1FLEtBQVgsSUFBbUJaLEVBQW5CO0FBQXVCaUIsMEJBQVVqQixHQUFHWSxLQUFILENBQVY7QUFBdkI7QUFDOUQsU0FGRDs7QUFJQSxpQkFBU0ssU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDdkIsZ0JBQUksQ0FBQ0EsTUFBTCxFQUFhLE9BQU8sS0FBUDtBQUNiLGdCQUFNQyxjQUFjLENBQUNILFVBQVVqQixPQUFPUSxTQUFsQixJQUErQlcsT0FBT0UsS0FBMUQ7QUFDQUYsbUJBQU9KLE9BQVAsQ0FBZU8sS0FBZixDQUFxQkMsU0FBckIsbUJBQStDSCxXQUEvQztBQUNIO0FBRUosS0F2QkQ7O0FBeUJBaEIsWUFBUW9CLElBQVIsQ0FBYSxvQkFBYjs7QUFFQSxRQUFNQyxvQkFBb0J2QixTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUExQjs7QUFFQXNCLHNCQUFrQkgsS0FBbEIsQ0FBd0JJLFFBQXhCLEdBQW1DLFFBQW5DO0FBQ0EzQixhQUFTMEIsaUJBQVQsRUFBNEIsQ0FBQztBQUN6QlYsaUJBQVMsZUFEZ0IsRUFDQ00sT0FBTztBQURSLEtBQUQsRUFFekI7QUFDQ04saUJBQVMsZUFEVixFQUMyQk0sT0FBTztBQURsQyxLQUZ5QixDQUE1Qjs7QUFNQSxRQUFNTSxlQUFlekIsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQU0sV0FBT08sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBU1ksV0FBVCxHQUF1Qjs7QUFFckQsWUFBSVgsVUFBVVAsV0FBVixHQUF3QmlCLGFBQWFuQixTQUF6QyxFQUFvRCxPQUFPLEtBQVA7O0FBRXBELFlBQU1xQixZQUFZM0IsU0FBUzRCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEI7QUFDQUQsa0JBQVVFLEdBQVYsR0FBZ0JKLGFBQWFLLFlBQWIsQ0FBMEIsYUFBMUIsQ0FBaEI7QUFDQUgsa0JBQVVJLEtBQVYsR0FBa0JOLGFBQWFLLFlBQWIsQ0FBMEIsWUFBMUIsQ0FBbEI7QUFDQUgsa0JBQVVLLE1BQVYsR0FBbUJQLGFBQWFLLFlBQWIsQ0FBMEIsYUFBMUIsQ0FBbkI7QUFDQUgsa0JBQVVNLFdBQVYsR0FBd0IsR0FBeEI7QUFDQU4sa0JBQVVQLEtBQVYsQ0FBZ0JjLE1BQWhCLEdBQXlCLEdBQXpCO0FBQ0FQLGtCQUFVUSxZQUFWLENBQXVCLGlCQUF2QixFQUEwQyxJQUExQztBQUNBUixrQkFBVVAsS0FBVixDQUFnQmdCLGVBQWhCLEdBQWtDLE1BQWxDO0FBQ0FYLHFCQUFhWSxXQUFiLENBQXlCVixTQUF6Qjs7QUFFQXBCLGVBQU8rQixtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1osV0FBckM7QUFFSCxLQWhCRDs7QUFrQkF4QixZQUFRcUMsT0FBUixDQUFnQixvQkFBaEI7QUFFQyxDQTVEQSxHQUFEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyYWxsYXggPSBmdW5jdGlvbihwYXJlbnQsIGZ4KSB7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCk7XHJcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuIGNvbnNvbGUubG9nKCdQYXJhbGxheCBjb250YWluZXIgbm90IGZvdW5kJyk7XHJcblxyXG4gICAgY29uc3QgYm91bmRpbmdzID0geyB0b3A6IHBhcmVudC5vZmZzZXRUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHQsIGJvdHRvbTogcGFyZW50Lm9mZnNldFRvcCArIHBhcmVudC5vZmZzZXRIZWlnaHQgfTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gZngpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IGZ4W2l0ZW1dLmVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIGZ4W2l0ZW1dLmVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCFmeFtpdGVtXS5lbGVtZW50KSBjb25zb2xlLmxvZyhgQ2hpbGQgXCIke3NlbGVjdG9yfVwiIG5vdCBmb3VuZCFgKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoc2Nyb2xsWSA+IGJvdW5kaW5ncy50b3AgJiYgc2Nyb2xsWSA8IGJvdW5kaW5ncy5ib3R0b20pIGZvciAoY29uc3QgaXRlbSBpbiBmeCkgdHJhbnNsYXRlKGZ4W2l0ZW1dKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZShlZmZlY3QpIHtcclxuICAgICAgICBpZiAoIWVmZmVjdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gKHNjcm9sbFkgLSBwYXJlbnQub2Zmc2V0VG9wKSAvIGVmZmVjdC5sZXZlbDtcclxuICAgICAgICBlZmZlY3QuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RyYW5zbGF0aW9ufXB4KWA7XHJcbiAgICB9XHJcblxyXG59O1xuXG5jb25zb2xlLnRpbWUoJ0V4ZWN1w6fDo28gZG8gc2NyaXB0Jyk7XHJcblxyXG5jb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWZlYXR1cmVzJyk7XHJcblxyXG5wYXJhbGxheENvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5wYXJhbGxheChwYXJhbGxheENvbnRhaW5lciwgW3tcclxuICAgIGVsZW1lbnQ6ICcuZmVhdHVyZS1pY29uJywgbGV2ZWw6IDJcclxufSwge1xyXG4gICAgZWxlbWVudDogJy5mZWF0dXJlLXRleHQnLCBsZXZlbDogMlxyXG59XSk7XHJcblxyXG5jb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwLWNvbnRhaW5lcicpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gc2Nyb2xsVG9NYXAoKSB7XHJcbiAgICBcclxuICAgIGlmIChzY3JvbGxZICsgaW5uZXJIZWlnaHQgPCBtYXBDb250YWluZXIub2Zmc2V0VG9wKSByZXR1cm4gZmFsc2U7XHJcbiAgICBcclxuICAgIGNvbnN0IG1hcElmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgbWFwSWZyYW1lLnNyYyA9IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWZyYW1lJyk7XHJcbiAgICBtYXBJZnJhbWUud2lkdGggPSBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZHRoJyk7XHJcbiAgICBtYXBJZnJhbWUuaGVpZ2h0ID0gbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKTtcclxuICAgIG1hcElmcmFtZS5mcmFtZWJvcmRlciA9IFwiMFwiO1xyXG4gICAgbWFwSWZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgbWFwSWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgdHJ1ZSk7XHJcbiAgICBtYXBJZnJhbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZWUnO1xyXG4gICAgbWFwQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcElmcmFtZSk7XHJcbiAgICBcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb01hcCk7XHJcbiAgICBcclxufSk7XHJcblxyXG5jb25zb2xlLnRpbWVFbmQoJ0V4ZWN1w6fDo28gZG8gc2NyaXB0Jyk7XG5cbn0oKSk7XG4iXX0=
