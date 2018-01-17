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

    var screen = function screen() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            width = w.innerWidth || e.clientWidth || g.clientWidth,
            height = w.innerHeight || e.clientHeight || g.clientHeight;
        return {
            width: width,
            height: height
        };
    };

    console.time('Execução do script');

    var parallaxContainer = document.querySelector('.parallax-container');
    var mapContainer = document.querySelector('#map-container');
    var serviceArticles = document.querySelectorAll('.section-services article');
    var topVideoBackground = document.getElementById('top-video-background');

    if (topVideoBackground) {
        var s = screen(),
            w = s.width,
            h = s.height;
        topVideoBackground.src = w < 400 && h < 400 ? topVideoBackground.getAttribute('data-lq') : w < 700 && h < 700 ? topVideoBackground.getAttribute('data-hq') : topVideoBackground.getAttribute('data-4k');
        topVideoBackground.addEventListener('loadedmetadata', function () {
            console.log(w / topVideoBackground.videoWidth, h / topVideoBackground.videoHeight);
        });
        topVideoBackground.addEventListener('canplay', function () {
            this.play();
        }, false);
    }

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

    if (serviceArticles.length) {
        window.addEventListener('scroll', function () {
            Array.prototype.forEach.call(serviceArticles, function (item) {
                var vBegin = item.offsetTop - window.innerHeight * .8;
                var vEnd = item.offsetTop + item.offsetHeight * .8;
                if (scrollY < vBegin) {
                    item.classList.add('bellow-screen');
                    item.classList.remove('above-screen');
                } else if (scrollY > vEnd) {
                    item.classList.remove('bellow-screen');
                    item.classList.add('above-screen');
                } else {
                    item.classList.remove('bellow-screen');
                    item.classList.remove('above-screen');
                }
            });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaHRtbENvbXAiLCJlbGVtZW50IiwicHJvcHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJleHRlbmRPYmoiLCJvYmoiLCJwcm9wIiwic2NyZWVuIiwidyIsIndpbmRvdyIsImQiLCJlIiwiZG9jdW1lbnRFbGVtZW50IiwiZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnNvbGUiLCJ0aW1lIiwicGFyYWxsYXhDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibWFwQ29udGFpbmVyIiwic2VydmljZUFydGljbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRvcFZpZGVvQmFja2dyb3VuZCIsImdldEVsZW1lbnRCeUlkIiwicyIsImgiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nIiwidmlkZW9XaWR0aCIsInZpZGVvSGVpZ2h0IiwicGxheSIsImJvZHkiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxZIiwibWF4U2Nyb2xsT2Zmc2V0IiwicGFyYWxsYXhDb250ZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzaXRlSGVhZGVyIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicGFzc2l2ZSIsImxlbmd0aCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJ2QmVnaW4iLCJpdGVtIiwidkVuZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjcm9sbFRvTWFwIiwiYXBwZW5kQ2hpbGQiLCJmcmFtZWJvcmRlciIsImFsbG93ZnVsbHNjcmVlbiIsImRpc3BsYXkiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGltZUVuZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQyxhQUFZO0FBQ2I7O0FBRUEsUUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ3BDLFlBQUksT0FBT0QsT0FBUCxLQUFtQixRQUF2QixFQUFpQ0EsVUFBVUUsU0FBU0MsYUFBVCxDQUF1QkgsT0FBdkIsQ0FBVjtBQUNqQyxZQUFJQyxLQUFKLEVBQVdHLFVBQVVKLE9BQVYsRUFBbUJDLEtBQW5CO0FBQ1gsZUFBT0QsT0FBUDs7QUFFQSxpQkFBU0ksU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JKLEtBQXhCLEVBQStCO0FBQzNCLGlCQUFLLElBQU1LLElBQVgsSUFBbUJMLEtBQW5CLEVBQTBCO0FBQ3RCLG9CQUFJSyxTQUFTLE9BQVQsSUFBb0JBLFNBQVMsU0FBakMsRUFBNENGLFVBQVVKLFFBQVFNLElBQVIsQ0FBVixFQUF5QkwsTUFBTUssSUFBTixDQUF6QixFQUE1QyxLQUNLRCxJQUFJQyxJQUFKLElBQVlMLE1BQU1LLElBQU4sQ0FBWjtBQUNSO0FBQ0o7QUFDSixLQVhEOztBQWFBLFFBQUlDLFNBQVMsU0FBVEEsTUFBUyxHQUFXO0FBQ3BCLFlBQU1DLElBQUVDLE1BQVI7QUFBQSxZQUFlQyxJQUFFUixRQUFqQjtBQUFBLFlBQTBCUyxJQUFFRCxFQUFFRSxlQUE5QjtBQUFBLFlBQThDQyxJQUFFSCxFQUFFSSxvQkFBRixDQUF1QixNQUF2QixFQUErQixDQUEvQixDQUFoRDtBQUFBLFlBQWtGQyxRQUFNUCxFQUFFUSxVQUFGLElBQWNMLEVBQUVNLFdBQWhCLElBQTZCSixFQUFFSSxXQUF2SDtBQUFBLFlBQW1JQyxTQUFPVixFQUFFVyxXQUFGLElBQWVSLEVBQUVTLFlBQWpCLElBQStCUCxFQUFFTyxZQUEzSztBQUNILGVBQU87QUFDQUwsd0JBREE7QUFFQUc7QUFGQSxTQUFQO0FBSUEsS0FORDs7QUFRQUcsWUFBUUMsSUFBUixDQUFhLG9CQUFiOztBQUVBLFFBQU1DLG9CQUFvQnJCLFNBQVNzQixhQUFULENBQXVCLHFCQUF2QixDQUExQjtBQUNBLFFBQU1DLGVBQWV2QixTQUFTc0IsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQSxRQUFNRSxrQkFBa0J4QixTQUFTeUIsZ0JBQVQsQ0FBMEIsMkJBQTFCLENBQXhCO0FBQ0EsUUFBTUMscUJBQXFCMUIsU0FBUzJCLGNBQVQsQ0FBd0Isc0JBQXhCLENBQTNCOztBQUVBLFFBQUlELGtCQUFKLEVBQXdCO0FBQ3BCLFlBQU1FLElBQUl2QixRQUFWO0FBQUEsWUFBb0JDLElBQUlzQixFQUFFZixLQUExQjtBQUFBLFlBQWlDZ0IsSUFBSUQsRUFBRVosTUFBdkM7QUFDQVUsMkJBQW1CSSxHQUFuQixHQUNJeEIsSUFBSSxHQUFKLElBQVd1QixJQUFJLEdBQWYsR0FBcUJILG1CQUFtQkssWUFBbkIsQ0FBZ0MsU0FBaEMsQ0FBckIsR0FDQXpCLElBQUksR0FBSixJQUFXdUIsSUFBSSxHQUFmLEdBQXFCSCxtQkFBbUJLLFlBQW5CLENBQWdDLFNBQWhDLENBQXJCLEdBQ0FMLG1CQUFtQkssWUFBbkIsQ0FBZ0MsU0FBaEMsQ0FISjtBQUlBTCwyQkFBbUJNLGdCQUFuQixDQUFvQyxnQkFBcEMsRUFBc0QsWUFBVztBQUM3RGIsb0JBQVFjLEdBQVIsQ0FDSTNCLElBQUlvQixtQkFBbUJRLFVBRDNCLEVBRUlMLElBQUlILG1CQUFtQlMsV0FGM0I7QUFJSCxTQUxEO0FBTUFULDJCQUFtQk0sZ0JBQW5CLENBQW9DLFNBQXBDLEVBQStDLFlBQVc7QUFBQyxpQkFBS0ksSUFBTDtBQUFhLFNBQXhFLEVBQTBFLEtBQTFFO0FBQ0g7O0FBRURwQyxhQUFTcUMsSUFBVCxDQUFjTCxnQkFBZCxDQUErQixZQUEvQixFQUE2QyxZQUFNLENBQUUsQ0FBckQ7O0FBRUEsUUFBSVgsaUJBQUosRUFBdUI7QUFBQSxZQU9WaUIsWUFQVSxHQU9uQixTQUFTQSxZQUFULEdBQXdCO0FBQ3BCLGdCQUFJQyxVQUFVQyxlQUFkLEVBQStCLE9BQU8sS0FBUDtBQUMvQkMsNEJBQWdCQyxLQUFoQixDQUFzQkMsU0FBdEIsbUJBQWdESixVQUFVLEVBQTFEO0FBQ0FLLHVCQUFXRixLQUFYLENBQWlCQyxTQUFqQixtQkFBMkNKLFVBQVUsR0FBckQ7QUFDSCxTQVhrQjs7QUFDbkIsWUFBTUssYUFBYTVDLFNBQVNzQixhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsWUFBTW1CLGtCQUFrQnBCLGtCQUFrQkMsYUFBbEIsQ0FBZ0MsbUJBQWhDLENBQXhCO0FBQ0EsWUFBTWtCLGtCQUFrQm5CLGtCQUFrQndCLFNBQWxCLEdBQThCeEIsa0JBQWtCeUIsWUFBeEU7QUFDQSxZQUFJTCxlQUFKLEVBQXFCbEMsT0FBT3lCLGdCQUFQLENBQXdCLGVBQXhCLEVBQXlDTSxZQUF6QyxFQUF1RCxFQUFDUyxTQUFTLElBQVYsRUFBdkQ7QUFDckIsWUFBSU4sZUFBSixFQUFxQmxDLE9BQU95QixnQkFBUCxDQUF3QixXQUF4QixFQUFxQ00sWUFBckMsRUFBbUQsRUFBQ1MsU0FBUyxJQUFWLEVBQW5EO0FBQ3JCLFlBQUlOLGVBQUosRUFBcUJsQyxPQUFPeUIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NNLFlBQWxDO0FBTXhCOztBQUVELFFBQUlkLGdCQUFnQndCLE1BQXBCLEVBQTRCO0FBQ3hCekMsZUFBT3lCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVc7QUFDekNpQixrQkFBTUMsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCNUIsZUFBN0IsRUFBOEMsZ0JBQVE7QUFDbEQsb0JBQU02QixTQUFTQyxLQUFLVCxTQUFMLEdBQWlCdEMsT0FBT1UsV0FBUCxHQUFxQixFQUFyRDtBQUNBLG9CQUFNc0MsT0FBT0QsS0FBS1QsU0FBTCxHQUFpQlMsS0FBS1IsWUFBTCxHQUFvQixFQUFsRDtBQUNBLG9CQUFJUCxVQUFVYyxNQUFkLEVBQXNCO0FBQ2xCQyx5QkFBS0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGVBQW5CO0FBQ0FILHlCQUFLRSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsY0FBdEI7QUFDSCxpQkFIRCxNQUlLLElBQUluQixVQUFVZ0IsSUFBZCxFQUFvQjtBQUNyQkQseUJBQUtFLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixlQUF0QjtBQUNBSix5QkFBS0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGNBQW5CO0FBQ0gsaUJBSEksTUFJQTtBQUNESCx5QkFBS0UsU0FBTCxDQUFlRSxNQUFmLENBQXNCLGVBQXRCO0FBQ0FKLHlCQUFLRSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsY0FBdEI7QUFDSDtBQUNKLGFBZkQ7QUFnQkgsU0FqQkQ7QUFrQkg7O0FBRUQsUUFBSW5DLFlBQUosRUFBa0I7QUFDZGhCLGVBQU95QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxTQUFTMkIsV0FBVCxHQUF1QjtBQUNyRCxnQkFBSXBCLFVBQVV0QixXQUFWLEdBQXdCTSxhQUFhc0IsU0FBekMsRUFBb0QsT0FBTyxLQUFQO0FBQ3BEdEIseUJBQWFxQyxXQUFiLENBQXlCL0QsU0FBUyxRQUFULEVBQW1CO0FBQ3hDaUMscUJBQUtQLGFBQWFRLFlBQWIsQ0FBMEIsYUFBMUIsQ0FEbUM7QUFFeENsQix1QkFBT1UsYUFBYVEsWUFBYixDQUEwQixZQUExQixDQUZpQztBQUd4Q2Ysd0JBQVFPLGFBQWFRLFlBQWIsQ0FBMEIsYUFBMUIsQ0FIZ0M7QUFJeEM4Qiw2QkFBYSxHQUoyQjtBQUt4Q0MsaUNBQWlCLElBTHVCO0FBTXhDcEIsdUJBQU87QUFDSHFCLDZCQUFTLE9BRE47QUFFSEMsNEJBQVEsR0FGTDtBQUdIQyxxQ0FBaUI7QUFIZDtBQU5pQyxhQUFuQixDQUF6QjtBQVlBMUQsbUJBQU8yRCxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1AsV0FBckM7QUFDSCxTQWZEO0FBZ0JIOztBQUVEeEMsWUFBUWdELE9BQVIsQ0FBZ0Isb0JBQWhCO0FBRUMsQ0F4R0EsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIGh0bWxDb21wID0gZnVuY3Rpb24oZWxlbWVudCwgcHJvcHMpIHtcclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWYgKHByb3BzKSBleHRlbmRPYmooZWxlbWVudCwgcHJvcHMpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGV4dGVuZE9iaihvYmosIHByb3BzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3R5bGUnIHx8IHByb3AgPT09ICdkYXRhc2V0JykgZXh0ZW5kT2JqKGVsZW1lbnRbcHJvcF0sIHByb3BzW3Byb3BdKTtcclxuICAgICAgICAgICAgZWxzZSBvYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciBzY3JlZW4gPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHc9d2luZG93LGQ9ZG9jdW1lbnQsZT1kLmRvY3VtZW50RWxlbWVudCxnPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSx3aWR0aD13LmlubmVyV2lkdGh8fGUuY2xpZW50V2lkdGh8fGcuY2xpZW50V2lkdGgsaGVpZ2h0PXcuaW5uZXJIZWlnaHR8fGUuY2xpZW50SGVpZ2h0fHxnLmNsaWVudEhlaWdodDtcclxuXHRyZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgfVxyXG59O1xuXG5jb25zb2xlLnRpbWUoJ0V4ZWN1w6fDo28gZG8gc2NyaXB0Jyk7XHJcblxyXG5jb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250YWluZXInKTtcclxuY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcC1jb250YWluZXInKTtcclxuY29uc3Qgc2VydmljZUFydGljbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24tc2VydmljZXMgYXJ0aWNsZScpO1xyXG5jb25zdCB0b3BWaWRlb0JhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLXZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbmlmICh0b3BWaWRlb0JhY2tncm91bmQpIHtcclxuICAgIGNvbnN0IHMgPSBzY3JlZW4oKSwgdyA9IHMud2lkdGgsIGggPSBzLmhlaWdodDtcclxuICAgIHRvcFZpZGVvQmFja2dyb3VuZC5zcmMgPSBcclxuICAgICAgICB3IDwgNDAwICYmIGggPCA0MDAgPyB0b3BWaWRlb0JhY2tncm91bmQuZ2V0QXR0cmlidXRlKCdkYXRhLWxxJykgOlxyXG4gICAgICAgIHcgPCA3MDAgJiYgaCA8IDcwMCA/IHRvcFZpZGVvQmFja2dyb3VuZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHEnKSA6XHJcbiAgICAgICAgdG9wVmlkZW9CYWNrZ3JvdW5kLmdldEF0dHJpYnV0ZSgnZGF0YS00aycpO1xyXG4gICAgdG9wVmlkZW9CYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFxyXG4gICAgICAgICAgICB3IC8gdG9wVmlkZW9CYWNrZ3JvdW5kLnZpZGVvV2lkdGgsIFxyXG4gICAgICAgICAgICBoIC8gdG9wVmlkZW9CYWNrZ3JvdW5kLnZpZGVvSGVpZ2h0IFxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHRvcFZpZGVvQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgZnVuY3Rpb24oKSB7dGhpcy5wbGF5KCk7fSwgZmFsc2UpO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7fSk7XHJcblxyXG5pZiAocGFyYWxsYXhDb250YWluZXIpIHtcclxuICAgIGNvbnN0IHNpdGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcclxuICAgIGNvbnN0IHBhcmFsbGF4Q29udGVudCA9IHBhcmFsbGF4Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBtYXhTY3JvbGxPZmZzZXQgPSBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRUb3AgKyBwYXJhbGxheENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2VzdHVyZWNoYW5nZScsIGhhbmRsZVNjcm9sbCwge3Bhc3NpdmU6IHRydWV9KTtcclxuICAgIGlmIChwYXJhbGxheENvbnRlbnQpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVTY3JvbGwsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICBpZiAocGFyYWxsYXhDb250ZW50KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsWSA+IG1heFNjcm9sbE9mZnNldCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHBhcmFsbGF4Q29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3Njcm9sbFkgKiAuNX1weClgO1xyXG4gICAgICAgIHNpdGVIZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtzY3JvbGxZICogLjc1fXB4KWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChzZXJ2aWNlQXJ0aWNsZXMubGVuZ3RoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzZXJ2aWNlQXJ0aWNsZXMsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2QmVnaW4gPSBpdGVtLm9mZnNldFRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAqIC44O1xyXG4gICAgICAgICAgICBjb25zdCB2RW5kID0gaXRlbS5vZmZzZXRUb3AgKyBpdGVtLm9mZnNldEhlaWdodCAqIC44O1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsWSA8IHZCZWdpbikge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdiZWxsb3ctc2NyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3ZlLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNjcm9sbFkgPiB2RW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JlbGxvdy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWJvdmUtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5pZiAobWFwQ29udGFpbmVyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gc2Nyb2xsVG9NYXAoKSB7XHJcbiAgICAgICAgaWYgKHNjcm9sbFkgKyBpbm5lckhlaWdodCA8IG1hcENvbnRhaW5lci5vZmZzZXRUb3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbENvbXAoJ2lmcmFtZScsIHtcclxuICAgICAgICAgICAgc3JjOiBtYXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlmcmFtZScpLFxyXG4gICAgICAgICAgICB3aWR0aDogbWFwQ29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG1hcENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGVpZ2h0JyksXHJcbiAgICAgICAgICAgIGZyYW1lYm9yZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzg4OCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9NYXApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnNvbGUudGltZUVuZCgnRXhlY3XDp8OjbyBkbyBzY3JpcHQnKTtcblxufSgpKTtcbiJdfQ==
