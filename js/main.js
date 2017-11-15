'use strict';

(function () {
    'use strict';

    var parallax = function parallax(parent, children) {
        if (typeof parent === 'string') parent = document.querySelector(parent);
        if (!parent) return console.log('Parallax container not found');
        var offset = parent.offsetTop;
        window.addEventListener('scroll', function () {
            var boundings = parent.getBoundingClientRect();
            var isOnScreen = boundings.top < innerHeight && boundings.bottom > 0;
            if (isOnScreen) translate(children);
        });
        function translate(children) {
            for (var selector in children) {
                var el = typeof selector === 'string' ? parent.querySelector(selector) : selector;
                if (!el) return console.log('Child not found');
                var scrollAmount = Math.max(0 - el.offsetTop, (scrollY - offset) / children[selector]);
                el.style.transform = 'translateY(' + scrollAmount + 'px)';
            }
        }
    };

    var parallaxContainer = document.querySelector('.section-features');
    parallaxContainer.style.overflow = 'hidden';
    parallax(parallaxContainer, {
        '.feature-icon': 2,
        '.feature-text': 2
    });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicGFyYWxsYXgiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJvZmZzZXQiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYm91bmRpbmdzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNPblNjcmVlbiIsInRvcCIsImlubmVySGVpZ2h0IiwiYm90dG9tIiwidHJhbnNsYXRlIiwic2VsZWN0b3IiLCJlbCIsInNjcm9sbEFtb3VudCIsIk1hdGgiLCJtYXgiLCJzY3JvbGxZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJwYXJhbGxheENvbnRhaW5lciIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOztBQUFDLGFBQVk7QUFDYjs7QUFFQSxRQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBU0MsTUFBVCxFQUFpQkMsUUFBakIsRUFBMkI7QUFDdEMsWUFBSSxPQUFPRCxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDQSxTQUFTRSxTQUFTQyxhQUFULENBQXVCSCxNQUF2QixDQUFUO0FBQ2hDLFlBQUksQ0FBQ0EsTUFBTCxFQUFhLE9BQU9JLFFBQVFDLEdBQVIsQ0FBWSw4QkFBWixDQUFQO0FBQ2IsWUFBTUMsU0FBU04sT0FBT08sU0FBdEI7QUFDQUMsZUFBT0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVTtBQUN4QyxnQkFBTUMsWUFBWVYsT0FBT1cscUJBQVAsRUFBbEI7QUFDQSxnQkFBTUMsYUFBYUYsVUFBVUcsR0FBVixHQUFnQkMsV0FBaEIsSUFBK0JKLFVBQVVLLE1BQVYsR0FBbUIsQ0FBckU7QUFDQSxnQkFBSUgsVUFBSixFQUFnQkksVUFBVWYsUUFBVjtBQUNuQixTQUpEO0FBS0EsaUJBQVNlLFNBQVQsQ0FBbUJmLFFBQW5CLEVBQTZCO0FBQ3pCLGlCQUFLLElBQU1nQixRQUFYLElBQXVCaEIsUUFBdkIsRUFBaUM7QUFDN0Isb0JBQU1pQixLQUFLLE9BQU9ELFFBQVAsS0FBb0IsUUFBcEIsR0FBK0JqQixPQUFPRyxhQUFQLENBQXFCYyxRQUFyQixDQUEvQixHQUFnRUEsUUFBM0U7QUFDQSxvQkFBSSxDQUFDQyxFQUFMLEVBQVMsT0FBT2QsUUFBUUMsR0FBUixDQUFZLGlCQUFaLENBQVA7QUFDVCxvQkFBTWMsZUFBZUMsS0FBS0MsR0FBTCxDQUFTLElBQUlILEdBQUdYLFNBQWhCLEVBQTJCLENBQUNlLFVBQVVoQixNQUFYLElBQXFCTCxTQUFTZ0IsUUFBVCxDQUFoRCxDQUFyQjtBQUNBQyxtQkFBR0ssS0FBSCxDQUFTQyxTQUFULEdBQXFCLGdCQUFlTCxZQUFmLEdBQTZCLEtBQWxEO0FBQ0g7QUFDSjtBQUNKLEtBakJEOztBQW1CQSxRQUFNTSxvQkFBb0J2QixTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUExQjtBQUNBc0Isc0JBQWtCRixLQUFsQixDQUF3QkcsUUFBeEIsR0FBbUMsUUFBbkM7QUFDQTNCLGFBQVMwQixpQkFBVCxFQUE0QjtBQUN4Qix5QkFBaUIsQ0FETztBQUV4Qix5QkFBaUI7QUFGTyxLQUE1QjtBQUtDLENBN0JBLEdBQUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBwYXJhbGxheCA9IGZ1bmN0aW9uKHBhcmVudCwgY2hpbGRyZW4pIHtcclxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xyXG4gICAgaWYgKCFwYXJlbnQpIHJldHVybiBjb25zb2xlLmxvZygnUGFyYWxsYXggY29udGFpbmVyIG5vdCBmb3VuZCcpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gcGFyZW50Lm9mZnNldFRvcDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGJvdW5kaW5ncyA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBpc09uU2NyZWVuID0gYm91bmRpbmdzLnRvcCA8IGlubmVySGVpZ2h0ICYmIGJvdW5kaW5ncy5ib3R0b20gPiAwO1xyXG4gICAgICAgIGlmIChpc09uU2NyZWVuKSB0cmFuc2xhdGUoY2hpbGRyZW4pO1xyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoY2hpbGRyZW4pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIGluIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG4gICAgICAgICAgICBpZiAoIWVsKSByZXR1cm4gY29uc29sZS5sb2coJ0NoaWxkIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxBbW91bnQgPSBNYXRoLm1heCgwIC0gZWwub2Zmc2V0VG9wLCAoc2Nyb2xsWSAtIG9mZnNldCkgLyBjaGlsZHJlbltzZWxlY3Rvcl0pO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnKyBzY3JvbGxBbW91bnQgKydweCknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1mZWF0dXJlcycpO1xyXG5wYXJhbGxheENvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5wYXJhbGxheChwYXJhbGxheENvbnRhaW5lciwge1xyXG4gICAgJy5mZWF0dXJlLWljb24nOiAyLCBcclxuICAgICcuZmVhdHVyZS10ZXh0JzogMlxyXG59KTtcblxufSgpKTtcbiJdfQ==
