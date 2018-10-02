define("ReactSwiper", ["React"], function (e) {
    return function (e) {
        var t = {};

        function i(s) {
            if (t[s]) {
                return t[s].exports
            }
            var n = t[s] = {
                i: s,
                l: false,
                exports: {}
            };
            e[s].call(n.exports, n, n.exports, i);
            n.l = true;
            return n.exports
        }
        i.m = e;
        i.c = t;
        i.d = function (e, t, s) {
            if (!i.o(e, t)) {
                Object.defineProperty(e, t, {
                    enumerable: true,
                    get: s
                })
            }
        };
        i.r = function (e) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: true
            })
        };
        i.t = function (e, t) {
            if (t & 1) e = i(e);
            if (t & 8) return e;
            if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
            var s = Object.create(null);
            i.r(s);
            Object.defineProperty(s, "default", {
                enumerable: true,
                value: e
            });
            if (t & 2 && typeof e != "string")
                for (var n in e) i.d(s, n, function (t) {
                    return e[t]
                }.bind(null, n));
            return s
        };
        i.n = function (e) {
            var t = e && e.__esModule ? function t() {
                return e["default"]
            } : function t() {
                return e
            };
            i.d(t, "a", t);
            return t
        };
        i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        };
        i.p = "";
        return i(i.s = 3)
    }([function (t, i) {
        t.exports = e
    }, function (e, t, i) {
        t = e.exports = i(2)(false);
        t.push([e.i, "/**\n * Swiper 4.4.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 14, 2018\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;-o-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s top,.2s -webkit-transform;transition:.2s top,.2s -webkit-transform;-o-transition:.2s transform,.2s top;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s left,.2s -webkit-transform;transition:.2s left,.2s -webkit-transform;-o-transition:.2s transform,.2s left;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s right,.2s -webkit-transform;transition:.2s right,.2s -webkit-transform;-o-transition:.2s transform,.2s right;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}", ""])
    }, function (e, t) {
        e.exports = function (e) {
            var t = [];
            t.toString = function t() {
                return this.map(function (t) {
                    var s = i(t, e);
                    if (t[2]) {
                        return "@media " + t[2] + "{" + s + "}"
                    } else {
                        return s
                    }
                }).join("")
            };
            t.i = function (e, i) {
                if (typeof e === "string") e = [
                    [null, e, ""]
                ];
                var s = {};
                for (var n = 0; n < this.length; n++) {
                    var a = this[n][0];
                    if (typeof a === "number") s[a] = true
                }
                for (n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (typeof r[0] !== "number" || !s[r[0]]) {
                        if (i && !r[2]) {
                            r[2] = i
                        } else if (i) {
                            r[2] = "(" + r[2] + ") and (" + i + ")"
                        }
                        t.push(r)
                    }
                }
            };
            return t
        };

        function i(e, t) {
            var i = e[1] || "";
            var n = e[3];
            if (!n) {
                return i
            }
            if (t && typeof btoa === "function") {
                var a = s(n);
                var r = n.sources.map(function (e) {
                    return "/*# sourceURL=" + n.sourceRoot + e + " */"
                });
                return [i].concat(r).concat([a]).join("\n")
            }
            return [i].join("\n")
        }

        function s(e) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(e))));
            var i = "sourceMappingURL=data:application/json;charset=utf-8;base64," + t;
            return "/*# " + i + " */"
        }
    }, function (e, t, i) {
        "use strict";
        i.r(t);
        var s = i(0);
        var n = i.n(s);
        var a = typeof document === "undefined" ? {
            body: {},
            addEventListener: function e() {},
            removeEventListener: function e() {},
            activeElement: {
                blur: function e() {},
                nodeName: ""
            },
            querySelector: function e() {
                return null
            },
            querySelectorAll: function e() {
                return []
            },
            getElementById: function e() {
                return null
            },
            createEvent: function e() {
                return {
                    initEvent: function e() {}
                }
            },
            createElement: function e() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function e() {},
                    getElementsByTagName: function e() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document;
        var r = typeof window === "undefined" ? {
            document: a,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function e() {
                return this
            },
            addEventListener: function e() {},
            removeEventListener: function e() {},
            getComputedStyle: function e() {
                return {
                    getPropertyValue: function e() {
                        return ""
                    }
                }
            },
            Image: function e() {},
            Date: function e() {},
            screen: {},
            setTimeout: function e() {},
            clearTimeout: function e() {}
        } : window;
        class o {
            constructor(e) {
                const t = this;
                for (let i = 0; i < e.length; i += 1) {
                    t[i] = e[i]
                }
                t.length = e.length;
                return this
            }
        }

        function l(e, t) {
            const i = [];
            let s = 0;
            if (e && !t) {
                if (e instanceof o) {
                    return e
                }
            }
            if (e) {
                if (typeof e === "string") {
                    let n;
                    let r;
                    const o = e.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                        let e = "div";
                        if (o.indexOf("<li") === 0) e = "ul";
                        if (o.indexOf("<tr") === 0) e = "tbody";
                        if (o.indexOf("<td") === 0 || o.indexOf("<th") === 0) e = "tr";
                        if (o.indexOf("<tbody") === 0) e = "table";
                        if (o.indexOf("<option") === 0) e = "select";
                        r = a.createElement(e);
                        r.innerHTML = o;
                        for (s = 0; s < r.childNodes.length; s += 1) {
                            i.push(r.childNodes[s])
                        }
                    } else {
                        if (!t && e[0] === "#" && !e.match(/[ .<>:~]/)) {
                            n = [a.getElementById(e.trim().split("#")[1])]
                        } else {
                            n = (t || a).querySelectorAll(e.trim())
                        }
                        for (s = 0; s < n.length; s += 1) {
                            if (n[s]) i.push(n[s])
                        }
                    }
                } else if (e.nodeType || e === r || e === a) {
                    i.push(e)
                } else if (e.length > 0 && e[0].nodeType) {
                    for (s = 0; s < e.length; s += 1) {
                        i.push(e[s])
                    }
                }
            }
            return new o(i)
        }
        l.fn = o.prototype;
        l.Class = o;
        l.Dom7 = o;

        function d(e) {
            const t = [];
            for (let i = 0; i < e.length; i += 1) {
                if (t.indexOf(e[i]) === -1) t.push(e[i])
            }
            return t
        }

        function c(e) {
            return e.toLowerCase().replace(/-(.)/g, (e, t) => t.toUpperCase())
        }

        function p(e) {
            if (r.requestAnimationFrame) return r.requestAnimationFrame(e);
            else if (r.webkitRequestAnimationFrame) return r.webkitRequestAnimationFrame(e);
            return r.setTimeout(e, 1e3 / 60)
        }

        function f(e) {
            if (r.cancelAnimationFrame) return r.cancelAnimationFrame(e);
            else if (r.webkitCancelAnimationFrame) return r.webkitCancelAnimationFrame(e);
            return r.clearTimeout(e)
        }

        function u(e) {
            if (typeof e === "undefined") {
                return this
            }
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1) {
                for (let i = 0; i < this.length; i += 1) {
                    if (typeof this[i] !== "undefined" && typeof this[i].classList !== "undefined") this[i].classList.add(t[e])
                }
            }
            return this
        }

        function h(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1) {
                for (let i = 0; i < this.length; i += 1) {
                    if (typeof this[i] !== "undefined" && typeof this[i].classList !== "undefined") this[i].classList.remove(t[e])
                }
            }
            return this
        }

        function m(e) {
            if (!this[0]) return false;
            return this[0].classList.contains(e)
        }

        function g(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1) {
                for (let i = 0; i < this.length; i += 1) {
                    if (typeof this[i] !== "undefined" && typeof this[i].classList !== "undefined") this[i].classList.toggle(t[e])
                }
            }
            return this
        }

        function w(e, t) {
            if (arguments.length === 1 && typeof e === "string") {
                if (this[0]) return this[0].getAttribute(e);
                return undefined
            }
            for (let i = 0; i < this.length; i += 1) {
                if (arguments.length === 2) {
                    this[i].setAttribute(e, t)
                } else {
                    for (const t in e) {
                        this[i][t] = e[t];
                        this[i].setAttribute(t, e[t])
                    }
                }
            }
            return this
        }

        function v(e) {
            for (let t = 0; t < this.length; t += 1) {
                this[t].removeAttribute(e)
            }
            return this
        }

        function b(e, t) {
            if (arguments.length === 1 && typeof e === "string") {
                if (this[0]) return this[0][e]
            } else {
                for (let i = 0; i < this.length; i += 1) {
                    if (arguments.length === 2) {
                        this[i][e] = t
                    } else {
                        for (const t in e) {
                            this[i][t] = e[t]
                        }
                    }
                }
                return this
            }
        }

        function y(e, t) {
            let i;
            if (typeof t === "undefined") {
                i = this[0];
                if (i) {
                    if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) {
                        return i.dom7ElementDataStorage[e]
                    }
                    const t = i.getAttribute(`data-${e}`);
                    if (t) {
                        return t
                    }
                    return undefined
                }
                return undefined
            }
            for (let s = 0; s < this.length; s += 1) {
                i = this[s];
                if (!i.dom7ElementDataStorage) i.dom7ElementDataStorage = {};
                i.dom7ElementDataStorage[e] = t
            }
            return this
        }

        function x(e) {
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t];
                if (i.dom7ElementDataStorage && i.dom7ElementDataStorage[e]) {
                    i.dom7ElementDataStorage[e] = null;
                    delete i.dom7ElementDataStorage[e]
                }
            }
        }

        function E() {
            const e = this[0];
            if (!e) return undefined;
            const t = {};
            if (e.dataset) {
                for (const i in e.dataset) {
                    t[i] = e.dataset[i]
                }
            } else {
                for (let i = 0; i < e.attributes.length; i += 1) {
                    const s = e.attributes[i];
                    if (s.name.indexOf("data-") >= 0) {
                        t[c(s.name.split("data-")[1])] = s.value
                    }
                }
            }
            for (const e in t) {
                if (t[e] === "false") t[e] = false;
                else if (t[e] === "true") t[e] = true;
                else if (parseFloat(t[e]) === t[e] * 1) t[e] *= 1
            }
            return t
        }

        function C(e) {
            const t = this;
            if (typeof e === "undefined") {
                if (t[0]) {
                    if (t[0].multiple && t[0].nodeName.toLowerCase() === "select") {
                        const e = [];
                        for (let i = 0; i < t[0].selectedOptions.length; i += 1) {
                            e.push(t[0].selectedOptions[i].value)
                        }
                        return e
                    }
                    return t[0].value
                }
                return undefined
            }
            for (let i = 0; i < t.length; i += 1) {
                const s = t[i];
                if (Array.isArray(e) && s.multiple && s.nodeName.toLowerCase() === "select") {
                    for (let t = 0; t < s.options.length; t += 1) {
                        s.options[t].selected = e.indexOf(s.options[t].value) >= 0
                    }
                } else {
                    s.value = e
                }
            }
            return t
        }

        function T(e) {
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransform = e;
                i.transform = e
            }
            return this
        }

        function S(e) {
            if (typeof e !== "string") {
                e = `${e}ms`
            }
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransitionDuration = e;
                i.transitionDuration = e
            }
            return this
        }

        function k(...e) {
            let [t, i, s, n] = e;
            if (typeof e[1] === "function") {
                [t, s, n] = e;
                i = undefined
            }
            if (!n) n = false;

            function a(e) {
                const t = e.target;
                if (!t) return;
                const n = e.target.dom7EventData || [];
                if (n.indexOf(e) < 0) {
                    n.unshift(e)
                }
                if (l(t).is(i)) s.apply(t, n);
                else {
                    const e = l(t).parents();
                    for (let t = 0; t < e.length; t += 1) {
                        if (l(e[t]).is(i)) s.apply(e[t], n)
                    }
                }
            }

            function r(e) {
                const t = e && e.target ? e.target.dom7EventData || [] : [];
                if (t.indexOf(e) < 0) {
                    t.unshift(e)
                }
                s.apply(this, t)
            }
            const o = t.split(" ");
            let d;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (!i) {
                    for (d = 0; d < o.length; d += 1) {
                        const e = o[d];
                        if (!t.dom7Listeners) t.dom7Listeners = {};
                        if (!t.dom7Listeners[e]) t.dom7Listeners[e] = [];
                        t.dom7Listeners[e].push({
                            listener: s,
                            proxyListener: r
                        });
                        t.addEventListener(e, r, n)
                    }
                } else {
                    for (d = 0; d < o.length; d += 1) {
                        const e = o[d];
                        if (!t.dom7LiveListeners) t.dom7LiveListeners = {};
                        if (!t.dom7LiveListeners[e]) t.dom7LiveListeners[e] = [];
                        t.dom7LiveListeners[e].push({
                            listener: s,
                            proxyListener: a
                        });
                        t.addEventListener(e, a, n)
                    }
                }
            }
            return this
        }

        function $(...e) {
            let [t, i, s, n] = e;
            if (typeof e[1] === "function") {
                [t, s, n] = e;
                i = undefined
            }
            if (!n) n = false;
            const a = t.split(" ");
            for (let e = 0; e < a.length; e += 1) {
                const t = a[e];
                for (let e = 0; e < this.length; e += 1) {
                    const a = this[e];
                    let r;
                    if (!i && a.dom7Listeners) {
                        r = a.dom7Listeners[t]
                    } else if (i && a.dom7LiveListeners) {
                        r = a.dom7LiveListeners[t]
                    }
                    if (r && r.length) {
                        for (let e = r.length - 1; e >= 0; e -= 1) {
                            const i = r[e];
                            if (s && i.listener === s) {
                                a.removeEventListener(t, i.proxyListener, n);
                                r.splice(e, 1)
                            } else if (!s) {
                                a.removeEventListener(t, i.proxyListener, n);
                                r.splice(e, 1)
                            }
                        }
                    }
                }
            }
            return this
        }

        function M(...e) {
            const t = this;
            let [i, s, n, a] = e;
            if (typeof e[1] === "function") {
                [i, n, a] = e;
                s = undefined
            }

            function r(...e) {
                n.apply(this, e);
                t.off(i, s, r, a)
            }
            return t.on(i, s, r, a)
        }

        function z(...e) {
            const t = e[0].split(" ");
            const i = e[1];
            for (let s = 0; s < t.length; s += 1) {
                const n = t[s];
                for (let t = 0; t < this.length; t += 1) {
                    const s = this[t];
                    let o;
                    try {
                        o = new r.CustomEvent(n, {
                            detail: i,
                            bubbles: true,
                            cancelable: true
                        })
                    } catch (e) {
                        o = a.createEvent("Event");
                        o.initEvent(n, true, true);
                        o.detail = i
                    }
                    s.dom7EventData = e.filter((e, t) => t > 0);
                    s.dispatchEvent(o);
                    s.dom7EventData = [];
                    delete s.dom7EventData
                }
            }
            return this
        }

        function D(e) {
            const t = ["webkitTransitionEnd", "transitionend"];
            const i = this;
            let s;

            function n(a) {
                if (a.target !== this) return;
                e.call(this, a);
                for (s = 0; s < t.length; s += 1) {
                    i.off(t[s], n)
                }
            }
            if (e) {
                for (s = 0; s < t.length; s += 1) {
                    i.on(t[s], n)
                }
            }
            return this
        }

        function P(e) {
            const t = ["webkitAnimationEnd", "animationend"];
            const i = this;
            let s;

            function n(a) {
                if (a.target !== this) return;
                e.call(this, a);
                for (s = 0; s < t.length; s += 1) {
                    i.off(t[s], n)
                }
            }
            if (e) {
                for (s = 0; s < t.length; s += 1) {
                    i.on(t[s], n)
                }
            }
            return this
        }

        function L() {
            if (this[0] === r) {
                return r.innerWidth
            }
            if (this.length > 0) {
                return parseFloat(this.css("width"))
            }
            return null
        }

        function I(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }

        function A() {
            if (this[0] === r) {
                return r.innerHeight
            }
            if (this.length > 0) {
                return parseFloat(this.css("height"))
            }
            return null
        }

        function O(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }

        function F() {
            if (this.length > 0) {
                const e = this[0];
                const t = e.getBoundingClientRect();
                const i = a.body;
                const s = e.clientTop || i.clientTop || 0;
                const n = e.clientLeft || i.clientLeft || 0;
                const o = e === r ? r.scrollY : e.scrollTop;
                const l = e === r ? r.scrollX : e.scrollLeft;
                return {
                    top: t.top + o - s,
                    left: t.left + l - n
                }
            }
            return null
        }

        function N() {
            for (let e = 0; e < this.length; e += 1) {
                this[e].style.display = "none"
            }
            return this
        }

        function B() {
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (t.style.display === "none") {
                    t.style.display = ""
                }
                if (r.getComputedStyle(t, null).getPropertyValue("display") === "none") {
                    t.style.display = "block"
                }
            }
            return this
        }

        function H() {
            if (this[0]) return r.getComputedStyle(this[0], null);
            return {}
        }

        function G(e, t) {
            let i;
            if (arguments.length === 1) {
                if (typeof e === "string") {
                    if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e)
                } else {
                    for (i = 0; i < this.length; i += 1) {
                        for (let t in e) {
                            this[i].style[t] = e[t]
                        }
                    }
                    return this
                }
            }
            if (arguments.length === 2 && typeof e === "string") {
                for (i = 0; i < this.length; i += 1) {
                    this[i].style[e] = t
                }
                return this
            }
            return this
        }

        function X() {
            const e = [];
            for (let t = 0; t < this.length; t += 1) {
                e.push(this[t])
            }
            return e
        }

        function Y(e) {
            if (!e) return this;
            for (let t = 0; t < this.length; t += 1) {
                if (e.call(this[t], t, this[t]) === false) {
                    return this
                }
            }
            return this
        }

        function V(e) {
            if (!e) return this;
            for (let t = 0; t < this.length; t += 1) {
                if (e.call(this[t], this[t], t) === false) {
                    return this
                }
            }
            return this
        }

        function R(e) {
            const t = [];
            const i = this;
            for (let s = 0; s < i.length; s += 1) {
                if (e.call(i[s], s, i[s])) t.push(i[s])
            }
            return new o(t)
        }

        function q(e) {
            const t = [];
            const i = this;
            for (let s = 0; s < i.length; s += 1) {
                t.push(e.call(i[s], s, i[s]))
            }
            return new o(t)
        }

        function j(e) {
            if (typeof e === "undefined") {
                return this[0] ? this[0].innerHTML : undefined
            }
            for (let t = 0; t < this.length; t += 1) {
                this[t].innerHTML = e
            }
            return this
        }

        function W(e) {
            if (typeof e === "undefined") {
                if (this[0]) {
                    return this[0].textContent.trim()
                }
                return null
            }
            for (let t = 0; t < this.length; t += 1) {
                this[t].textContent = e
            }
            return this
        }

        function _(e) {
            const t = this[0];
            let i;
            let s;
            if (!t || typeof e === "undefined") return false;
            if (typeof e === "string") {
                if (t.matches) return t.matches(e);
                else if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                else if (t.msMatchesSelector) return t.msMatchesSelector(e);
                i = l(e);
                for (s = 0; s < i.length; s += 1) {
                    if (i[s] === t) return true
                }
                return false
            } else if (e === a) return t === a;
            else if (e === r) return t === r;
            if (e.nodeType || e instanceof o) {
                i = e.nodeType ? [e] : e;
                for (s = 0; s < i.length; s += 1) {
                    if (i[s] === t) return true
                }
                return false
            }
            return false
        }

        function U(e) {
            for (let t = 0; t < this.length; t += 1) {
                if (this[t] === e) return t
            }
            return -1
        }

        function K() {
            let e = this[0];
            let t;
            if (e) {
                t = 0;
                while ((e = e.previousSibling) !== null) {
                    if (e.nodeType === 1) t += 1
                }
                return t
            }
            return undefined
        }

        function Z(e) {
            if (typeof e === "undefined") return this;
            const t = this.length;
            let i;
            if (e > t - 1) {
                return new o([])
            }
            if (e < 0) {
                i = t + e;
                if (i < 0) return new o([]);
                return new o([this[i]])
            }
            return new o([this[e]])
        }

        function J(...e) {
            let t;
            for (let i = 0; i < e.length; i += 1) {
                t = e[i];
                for (let e = 0; e < this.length; e += 1) {
                    if (typeof t === "string") {
                        const i = a.createElement("div");
                        i.innerHTML = t;
                        while (i.firstChild) {
                            this[e].appendChild(i.firstChild)
                        }
                    } else if (t instanceof o) {
                        for (let i = 0; i < t.length; i += 1) {
                            this[e].appendChild(t[i])
                        }
                    } else {
                        this[e].appendChild(t)
                    }
                }
            }
            return this
        }

        function Q(e) {
            l(e).append(this);
            return this
        }

        function ee(e) {
            let t;
            let i;
            for (t = 0; t < this.length; t += 1) {
                if (typeof e === "string") {
                    const s = a.createElement("div");
                    s.innerHTML = e;
                    for (i = s.childNodes.length - 1; i >= 0; i -= 1) {
                        this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
                    }
                } else if (e instanceof o) {
                    for (i = 0; i < e.length; i += 1) {
                        this[t].insertBefore(e[i], this[t].childNodes[0])
                    }
                } else {
                    this[t].insertBefore(e, this[t].childNodes[0])
                }
            }
            return this
        }

        function te(e) {
            l(e).prepend(this);
            return this
        }

        function ie(e) {
            const t = l(e);
            for (let e = 0; e < this.length; e += 1) {
                if (t.length === 1) {
                    t[0].parentNode.insertBefore(this[e], t[0])
                } else if (t.length > 1) {
                    for (let i = 0; i < t.length; i += 1) {
                        t[i].parentNode.insertBefore(this[e].cloneNode(true), t[i])
                    }
                }
            }
        }

        function se(e) {
            const t = l(e);
            for (let e = 0; e < this.length; e += 1) {
                if (t.length === 1) {
                    t[0].parentNode.insertBefore(this[e], t[0].nextSibling)
                } else if (t.length > 1) {
                    for (let i = 0; i < t.length; i += 1) {
                        t[i].parentNode.insertBefore(this[e].cloneNode(true), t[i].nextSibling)
                    }
                }
            }
        }

        function ne(e) {
            if (this.length > 0) {
                if (e) {
                    if (this[0].nextElementSibling && l(this[0].nextElementSibling).is(e)) {
                        return new o([this[0].nextElementSibling])
                    }
                    return new o([])
                }
                if (this[0].nextElementSibling) return new o([this[0].nextElementSibling]);
                return new o([])
            }
            return new o([])
        }

        function ae(e) {
            const t = [];
            let i = this[0];
            if (!i) return new o([]);
            while (i.nextElementSibling) {
                const s = i.nextElementSibling;
                if (e) {
                    if (l(s).is(e)) t.push(s)
                } else t.push(s);
                i = s
            }
            return new o(t)
        }

        function re(e) {
            if (this.length > 0) {
                const t = this[0];
                if (e) {
                    if (t.previousElementSibling && l(t.previousElementSibling).is(e)) {
                        return new o([t.previousElementSibling])
                    }
                    return new o([])
                }
                if (t.previousElementSibling) return new o([t.previousElementSibling]);
                return new o([])
            }
            return new o([])
        }

        function oe(e) {
            const t = [];
            let i = this[0];
            if (!i) return new o([]);
            while (i.previousElementSibling) {
                const s = i.previousElementSibling;
                if (e) {
                    if (l(s).is(e)) t.push(s)
                } else t.push(s);
                i = s
            }
            return new o(t)
        }

        function le(e) {
            return this.nextAll(e).add(this.prevAll(e))
        }

        function de(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                if (this[i].parentNode !== null) {
                    if (e) {
                        if (l(this[i].parentNode).is(e)) t.push(this[i].parentNode)
                    } else {
                        t.push(this[i].parentNode)
                    }
                }
            }
            return l(d(t))
        }

        function ce(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                let s = this[i].parentNode;
                while (s) {
                    if (e) {
                        if (l(s).is(e)) t.push(s)
                    } else {
                        t.push(s)
                    }
                    s = s.parentNode
                }
            }
            return l(d(t))
        }

        function pe(e) {
            let t = this;
            if (typeof e === "undefined") {
                return new o([])
            }
            if (!t.is(e)) {
                t = t.parents(e).eq(0)
            }
            return t
        }

        function fe(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const s = this[i].querySelectorAll(e);
                for (let e = 0; e < s.length; e += 1) {
                    t.push(s[e])
                }
            }
            return new o(t)
        }

        function ue(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const s = this[i].childNodes;
                for (let i = 0; i < s.length; i += 1) {
                    if (!e) {
                        if (s[i].nodeType === 1) t.push(s[i])
                    } else if (s[i].nodeType === 1 && l(s[i]).is(e)) {
                        t.push(s[i])
                    }
                }
            }
            return new o(d(t))
        }

        function he() {
            for (let e = 0; e < this.length; e += 1) {
                if (this[e].parentNode) this[e].parentNode.removeChild(this[e])
            }
            return this
        }

        function me() {
            return this.remove()
        }

        function ge(...e) {
            const t = this;
            let i;
            let s;
            for (i = 0; i < e.length; i += 1) {
                const n = l(e[i]);
                for (s = 0; s < n.length; s += 1) {
                    t[t.length] = n[s];
                    t.length += 1
                }
            }
            return t
        }

        function we() {
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (t.nodeType === 1) {
                    for (let e = 0; e < t.childNodes.length; e += 1) {
                        if (t.childNodes[e].parentNode) {
                            t.childNodes[e].parentNode.removeChild(t.childNodes[e])
                        }
                    }
                    t.textContent = ""
                }
            }
            return this
        }

        function ve(...e) {
            let [t, i, s, n, a] = e;
            if (e.length === 4 && typeof n === "function") {
                a = n;
                [t, i, s, a, n] = e
            }
            if (typeof n === "undefined") n = "swing";
            return this.each(function e() {
                const r = this;
                let o;
                let l;
                let d;
                let c;
                let f;
                let u;
                let h;
                let m;
                let g = i > 0 || i === 0;
                let w = t > 0 || t === 0;
                if (typeof n === "undefined") {
                    n = "swing"
                }
                if (g) {
                    o = r.scrollTop;
                    if (!s) {
                        r.scrollTop = i
                    }
                }
                if (w) {
                    l = r.scrollLeft;
                    if (!s) {
                        r.scrollLeft = t
                    }
                }
                if (!s) return;
                if (g) {
                    d = r.scrollHeight - r.offsetHeight;
                    f = Math.max(Math.min(i, d), 0)
                }
                if (w) {
                    c = r.scrollWidth - r.offsetWidth;
                    u = Math.max(Math.min(t, c), 0)
                }
                let v = null;
                if (g && f === o) g = false;
                if (w && u === l) w = false;

                function b(e = (new Date).getTime()) {
                    if (v === null) {
                        v = e
                    }
                    const t = Math.max(Math.min((e - v) / s, 1), 0);
                    const i = n === "linear" ? t : .5 - Math.cos(t * Math.PI) / 2;
                    let d;
                    if (g) h = o + i * (f - o);
                    if (w) m = l + i * (u - l);
                    if (g && f > o && h >= f) {
                        r.scrollTop = f;
                        d = true
                    }
                    if (g && f < o && h <= f) {
                        r.scrollTop = f;
                        d = true
                    }
                    if (w && u > l && m >= u) {
                        r.scrollLeft = u;
                        d = true
                    }
                    if (w && u < l && m <= u) {
                        r.scrollLeft = u;
                        d = true
                    }
                    if (d) {
                        if (a) a();
                        return
                    }
                    if (g) r.scrollTop = h;
                    if (w) r.scrollLeft = m;
                    p(b)
                }
                p(b)
            })
        }

        function be(...e) {
            let [t, i, s, n] = e;
            if (e.length === 3 && typeof s === "function") {
                [t, i, n, s] = e
            }
            const a = this;
            if (typeof t === "undefined") {
                if (a.length > 0) return a[0].scrollTop;
                return null
            }
            return a.scrollTo(undefined, t, i, s, n)
        }

        function ye(...e) {
            let [t, i, s, n] = e;
            if (e.length === 3 && typeof s === "function") {
                [t, i, n, s] = e
            }
            const a = this;
            if (typeof t === "undefined") {
                if (a.length > 0) return a[0].scrollLeft;
                return null
            }
            return a.scrollTo(t, undefined, i, s, n)
        }

        function xe(e, t) {
            const i = this;
            const s = {
                props: Object.assign({}, e),
                params: Object.assign({
                    duration: 300,
                    easing: "swing"
                }, t),
                elements: i,
                animating: false,
                que: [],
                easingProgress(e, t) {
                    if (e === "swing") {
                        return .5 - Math.cos(t * Math.PI) / 2
                    }
                    if (typeof e === "function") {
                        return e(t)
                    }
                    return t
                },
                stop() {
                    if (s.frameId) {
                        f(s.frameId)
                    }
                    s.animating = false;
                    s.elements.each((e, t) => {
                        const i = t;
                        delete i.dom7AnimateInstance
                    });
                    s.que = []
                },
                done(e) {
                    s.animating = false;
                    s.elements.each((e, t) => {
                        const i = t;
                        delete i.dom7AnimateInstance
                    });
                    if (e) e(i);
                    if (s.que.length > 0) {
                        const e = s.que.shift();
                        s.animate(e[0], e[1])
                    }
                },
                animate(e, t) {
                    if (s.animating) {
                        s.que.push([e, t]);
                        return s
                    }
                    const n = [];
                    s.elements.each((t, i) => {
                        let a;
                        let o;
                        let l;
                        let d;
                        let c;
                        if (!i.dom7AnimateInstance) s.elements[t].dom7AnimateInstance = s;
                        n[t] = {
                            container: i
                        };
                        Object.keys(e).forEach(s => {
                            a = r.getComputedStyle(i, null).getPropertyValue(s).replace(",", ".");
                            o = parseFloat(a);
                            l = a.replace(o, "");
                            d = parseFloat(e[s]);
                            c = e[s] + l;
                            n[t][s] = {
                                initialFullValue: a,
                                initialValue: o,
                                unit: l,
                                finalValue: d,
                                finalFullValue: c,
                                currentValue: o
                            }
                        })
                    });
                    let a = null;
                    let o;
                    let l = 0;
                    let d = 0;
                    let c;
                    let f = false;
                    s.animating = true;

                    function u() {
                        o = (new Date).getTime();
                        let r;
                        let h;
                        if (!f) {
                            f = true;
                            if (t.begin) t.begin(i)
                        }
                        if (a === null) {
                            a = o
                        }
                        if (t.progress) {
                            t.progress(i, Math.max(Math.min((o - a) / t.duration, 1), 0), a + t.duration - o < 0 ? 0 : a + t.duration - o, a)
                        }
                        n.forEach(i => {
                            const p = i;
                            if (c || p.done) return;
                            Object.keys(e).forEach(i => {
                                if (c || p.done) return;
                                r = Math.max(Math.min((o - a) / t.duration, 1), 0);
                                h = s.easingProgress(t.easing, r);
                                const {
                                    initialValue: f,
                                    finalValue: u,
                                    unit: m
                                } = p[i];
                                p[i].currentValue = f + h * (u - f);
                                const g = p[i].currentValue;
                                if (u > f && g >= u || u < f && g <= u) {
                                    p.container.style[i] = u + m;
                                    d += 1;
                                    if (d === Object.keys(e).length) {
                                        p.done = true;
                                        l += 1
                                    }
                                    if (l === n.length) {
                                        c = true
                                    }
                                }
                                if (c) {
                                    s.done(t.complete);
                                    return
                                }
                                p.container.style[i] = g + m
                            })
                        });
                        if (c) return;
                        s.frameId = p(u)
                    }
                    s.frameId = p(u);
                    return s
                }
            };
            if (s.elements.length === 0) {
                return i
            }
            let n;
            for (let e = 0; e < s.elements.length; e += 1) {
                if (s.elements[e].dom7AnimateInstance) {
                    n = s.elements[e].dom7AnimateInstance
                } else s.elements[e].dom7AnimateInstance = s
            }
            if (!n) {
                n = s
            }
            if (e === "stop") {
                n.stop()
            } else {
                n.animate(s.props, s.params)
            }
            return i
        }

        function Ee() {
            const e = this;
            for (let t = 0; t < e.length; t += 1) {
                if (e[t].dom7AnimateInstance) {
                    e[t].dom7AnimateInstance.stop()
                }
            }
        }
        const Ce = "resize scroll".split(" ");

        function Te(e, ...t) {
            if (typeof t[0] === "undefined") {
                for (let t = 0; t < this.length; t += 1) {
                    if (Ce.indexOf(e) < 0) {
                        if (e in this[t]) this[t][e]();
                        else {
                            l(this[t]).trigger(e)
                        }
                    }
                }
                return this
            }
            return this.on(e, ...t)
        }

        function Se(...e) {
            return Te.bind(this)("click", ...e)
        }

        function ke(...e) {
            return Te.bind(this)("blur", ...e)
        }

        function $e(...e) {
            return Te.bind(this)("focus", ...e)
        }

        function Me(...e) {
            return Te.bind(this)("focusin", ...e)
        }

        function ze(...e) {
            return Te.bind(this)("focusout", ...e)
        }

        function De(...e) {
            return Te.bind(this)("keyup", ...e)
        }

        function Pe(...e) {
            return Te.bind(this)("keydown", ...e)
        }

        function Le(...e) {
            return Te.bind(this)("keypress", ...e)
        }

        function Ie(...e) {
            return Te.bind(this)("submit", ...e)
        }

        function Ae(...e) {
            return Te.bind(this)("change", ...e)
        }

        function Oe(...e) {
            return Te.bind(this)("mousedown", ...e)
        }

        function Fe(...e) {
            return Te.bind(this)("mousemove", ...e)
        }

        function Ne(...e) {
            return Te.bind(this)("mouseup", ...e)
        }

        function Be(...e) {
            return Te.bind(this)("mouseenter", ...e)
        }

        function He(...e) {
            return Te.bind(this)("mouseleave", ...e)
        }

        function Ge(...e) {
            return Te.bind(this)("mouseout", ...e)
        }

        function Xe(...e) {
            return Te.bind(this)("mouseover", ...e)
        }

        function Ye(...e) {
            return Te.bind(this)("touchstart", ...e)
        }

        function Ve(...e) {
            return Te.bind(this)("touchend", ...e)
        }

        function Re(...e) {
            return Te.bind(this)("touchmove", ...e)
        }

        function qe(...e) {
            return Te.bind(this)("resize", ...e)
        }

        function je(...e) {
            return Te.bind(this)("scroll", ...e)
        }
        const We = {
            addClass: u,
            removeClass: h,
            hasClass: m,
            toggleClass: g,
            attr: w,
            removeAttr: v,
            data: y,
            transform: T,
            transition: S,
            on: k,
            off: $,
            trigger: z,
            transitionEnd: D,
            outerWidth: I,
            outerHeight: O,
            offset: F,
            css: G,
            each: Y,
            html: j,
            text: W,
            is: _,
            index: K,
            eq: Z,
            append: J,
            prepend: ee,
            next: ne,
            nextAll: ae,
            prev: re,
            prevAll: oe,
            parent: de,
            parents: ce,
            closest: pe,
            find: fe,
            children: ue,
            remove: he,
            add: ge,
            styles: H
        };
        Object.keys(We).forEach(e => {
            l.fn[e] = We[e]
        });
        const _e = {
            deleteProps(e) {
                const t = e;
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick(e, t = 0) {
                return setTimeout(e, t)
            },
            now() {
                return Date.now()
            },
            getTranslate(e, t = "x") {
                let i;
                let s;
                let n;
                const a = r.getComputedStyle(e, null);
                if (r.WebKitCSSMatrix) {
                    s = a.transform || a.webkitTransform;
                    if (s.split(",").length > 6) {
                        s = s.split(", ").map(e => e.replace(",", ".")).join(", ")
                    }
                    n = new r.WebKitCSSMatrix(s === "none" ? "" : s)
                } else {
                    n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                    i = n.toString().split(",")
                }
                if (t === "x") {
                    if (r.WebKitCSSMatrix) s = n.m41;
                    else if (i.length === 16) s = parseFloat(i[12]);
                    else s = parseFloat(i[4])
                }
                if (t === "y") {
                    if (r.WebKitCSSMatrix) s = n.m42;
                    else if (i.length === 16) s = parseFloat(i[13]);
                    else s = parseFloat(i[5])
                }
                return s || 0
            },
            parseUrlQuery(e) {
                const t = {};
                let i = e || r.location.href;
                let s;
                let n;
                let a;
                let o;
                if (typeof i === "string" && i.length) {
                    i = i.indexOf("?") > -1 ? i.replace(/\S*\?/, "") : "";
                    n = i.split("&").filter(e => e !== "");
                    o = n.length;
                    for (s = 0; s < o; s += 1) {
                        a = n[s].replace(/#\S+/g, "").split("=");
                        t[decodeURIComponent(a[0])] = typeof a[1] === "undefined" ? undefined : decodeURIComponent(a[1]) || ""
                    }
                }
                return t
            },
            isObject(e) {
                return typeof e === "object" && e !== null && e.constructor && e.constructor === Object
            },
            extend(...e) {
                const t = Object(e[0]);
                for (let i = 1; i < e.length; i += 1) {
                    const s = e[i];
                    if (s !== undefined && s !== null) {
                        const e = Object.keys(Object(s));
                        for (let i = 0, n = e.length; i < n; i += 1) {
                            const n = e[i];
                            const a = Object.getOwnPropertyDescriptor(s, n);
                            if (a !== undefined && a.enumerable) {
                                if (_e.isObject(t[n]) && _e.isObject(s[n])) {
                                    _e.extend(t[n], s[n])
                                } else if (!_e.isObject(t[n]) && _e.isObject(s[n])) {
                                    t[n] = {};
                                    _e.extend(t[n], s[n])
                                } else {
                                    t[n] = s[n]
                                }
                            }
                        }
                    }
                }
                return t
            }
        };
        const Ue = function e() {
            const t = a.createElement("div");
            return {
                touch: r.Modernizr && r.Modernizr.touch === true || function e() {
                    return !!("ontouchstart" in r || r.DocumentTouch && a instanceof r.DocumentTouch)
                }(),
                pointerEvents: !!(r.navigator.pointerEnabled || r.PointerEvent),
                prefixedPointerEvents: !!r.navigator.msPointerEnabled,
                transition: function e() {
                    const i = t.style;
                    return "transition" in i || "webkitTransition" in i || "MozTransition" in i
                }(),
                transforms3d: r.Modernizr && r.Modernizr.csstransforms3d === true || function e() {
                    const i = t.style;
                    return "webkitPerspective" in i || "MozPerspective" in i || "OPerspective" in i || "MsPerspective" in i || "perspective" in i
                }(),
                flexbox: function e() {
                    const i = t.style;
                    const s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
                    for (let e = 0; e < s.length; e += 1) {
                        if (s[e] in i) return true
                    }
                    return false
                }(),
                observer: function e() {
                    return "MutationObserver" in r || "WebkitMutationObserver" in r
                }(),
                passiveListener: function e() {
                    let t = false;
                    try {
                        const e = Object.defineProperty({}, "passive", {
                            get() {
                                t = true
                            }
                        });
                        r.addEventListener("testPassiveListener", null, e)
                    } catch (e) {}
                    return t
                }(),
                gestures: function e() {
                    return "ongesturestart" in r
                }()
            }
        }();
        class Ke {
            constructor(e = {}) {
                const t = this;
                t.params = e;
                t.eventsListeners = {};
                if (t.params && t.params.on) {
                    Object.keys(t.params.on).forEach(e => {
                        t.on(e, t.params.on[e])
                    })
                }
            }
            on(e, t, i) {
                const s = this;
                if (typeof t !== "function") return s;
                const n = i ? "unshift" : "push";
                e.split(" ").forEach(e => {
                    if (!s.eventsListeners[e]) s.eventsListeners[e] = [];
                    s.eventsListeners[e][n](t)
                });
                return s
            }
            once(e, t, i) {
                const s = this;
                if (typeof t !== "function") return s;

                function n(...i) {
                    t.apply(s, i);
                    s.off(e, n)
                }
                return s.on(e, n, i)
            }
            off(e, t) {
                const i = this;
                if (!i.eventsListeners) return i;
                e.split(" ").forEach(e => {
                    if (typeof t === "undefined") {
                        i.eventsListeners[e] = []
                    } else if (i.eventsListeners[e] && i.eventsListeners[e].length) {
                        i.eventsListeners[e].forEach((s, n) => {
                            if (s === t) {
                                i.eventsListeners[e].splice(n, 1)
                            }
                        })
                    }
                });
                return i
            }
            emit(...e) {
                const t = this;
                if (!t.eventsListeners) return t;
                let i;
                let s;
                let n;
                if (typeof e[0] === "string" || Array.isArray(e[0])) {
                    i = e[0];
                    s = e.slice(1, e.length);
                    n = t
                } else {
                    i = e[0].events;
                    s = e[0].data;
                    n = e[0].context || t
                }
                const a = Array.isArray(i) ? i : i.split(" ");
                a.forEach(e => {
                    if (t.eventsListeners && t.eventsListeners[e]) {
                        const i = [];
                        t.eventsListeners[e].forEach(e => {
                            i.push(e)
                        });
                        i.forEach(e => {
                            e.apply(n, s)
                        })
                    }
                });
                return t
            }
            useModulesParams(e) {
                const t = this;
                if (!t.modules) return;
                Object.keys(t.modules).forEach(i => {
                    const s = t.modules[i];
                    if (s.params) {
                        _e.extend(e, s.params)
                    }
                })
            }
            useModules(e = {}) {
                const t = this;
                if (!t.modules) return;
                Object.keys(t.modules).forEach(i => {
                    const s = t.modules[i];
                    const n = e[i] || {};
                    if (s.instance) {
                        Object.keys(s.instance).forEach(e => {
                            const i = s.instance[e];
                            if (typeof i === "function") {
                                t[e] = i.bind(t)
                            } else {
                                t[e] = i
                            }
                        })
                    }
                    if (s.on && t.on) {
                        Object.keys(s.on).forEach(e => {
                            t.on(e, s.on[e])
                        })
                    }
                    if (s.create) {
                        s.create.bind(t)(n)
                    }
                })
            }
            static set components(e) {
                const t = this;
                if (!t.use) return;
                t.use(e)
            }
            static installModule(e, ...t) {
                const i = this;
                if (!i.prototype.modules) i.prototype.modules = {};
                const s = e.name || `${Object.keys(i.prototype.modules).length}_${_e.now()}`;
                i.prototype.modules[s] = e;
                if (e.proto) {
                    Object.keys(e.proto).forEach(t => {
                        i.prototype[t] = e.proto[t]
                    })
                }
                if (e.static) {
                    Object.keys(e.static).forEach(t => {
                        i[t] = e.static[t]
                    })
                }
                if (e.install) {
                    e.install.apply(i, t)
                }
                return i
            }
            static use(e, ...t) {
                const i = this;
                if (Array.isArray(e)) {
                    e.forEach(e => i.installModule(e));
                    return i
                }
                return i.installModule(e, ...t)
            }
        }

        function Ze() {
            const e = this;
            let t;
            let i;
            const s = e.$el;
            if (typeof e.params.width !== "undefined") {
                t = e.params.width
            } else {
                t = s[0].clientWidth
            }
            if (typeof e.params.height !== "undefined") {
                i = e.params.height
            } else {
                i = s[0].clientHeight
            }
            if (t === 0 && e.isHorizontal() || i === 0 && e.isVertical()) {
                return
            }
            t = t - parseInt(s.css("padding-left"), 10) - parseInt(s.css("padding-right"), 10);
            i = i - parseInt(s.css("padding-top"), 10) - parseInt(s.css("padding-bottom"), 10);
            _e.extend(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i
            })
        }

        function Je() {
            const e = this;
            const t = e.params;
            const {
                $wrapperEl: i,
                size: s,
                rtlTranslate: n,
                wrongRTL: a
            } = e;
            const o = e.virtual && t.virtual.enabled;
            const l = o ? e.virtual.slides.length : e.slides.length;
            const d = i.children(`.${e.params.slideClass}`);
            const c = o ? e.virtual.slides.length : d.length;
            let p = [];
            const f = [];
            const u = [];
            let h = t.slidesOffsetBefore;
            if (typeof h === "function") {
                h = t.slidesOffsetBefore.call(e)
            }
            let m = t.slidesOffsetAfter;
            if (typeof m === "function") {
                m = t.slidesOffsetAfter.call(e)
            }
            const g = e.snapGrid.length;
            const w = e.snapGrid.length;
            let v = t.spaceBetween;
            let b = -h;
            let y = 0;
            let x = 0;
            if (typeof s === "undefined") {
                return
            }
            if (typeof v === "string" && v.indexOf("%") >= 0) {
                v = parseFloat(v.replace("%", "")) / 100 * s
            }
            e.virtualSize = -v;
            if (n) d.css({
                marginLeft: "",
                marginTop: ""
            });
            else d.css({
                marginRight: "",
                marginBottom: ""
            });
            let E;
            if (t.slidesPerColumn > 1) {
                if (Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn) {
                    E = c
                } else {
                    E = Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn
                }
                if (t.slidesPerView !== "auto" && t.slidesPerColumnFill === "row") {
                    E = Math.max(E, t.slidesPerView * t.slidesPerColumn)
                }
            }
            let C;
            const T = t.slidesPerColumn;
            const S = E / T;
            const k = S - (t.slidesPerColumn * S - c);
            for (let i = 0; i < c; i += 1) {
                C = 0;
                const n = d.eq(i);
                if (t.slidesPerColumn > 1) {
                    let s;
                    let a;
                    let r;
                    if (t.slidesPerColumnFill === "column") {
                        a = Math.floor(i / T);
                        r = i - a * T;
                        if (a > k || a === k && r === T - 1) {
                            r += 1;
                            if (r >= T) {
                                r = 0;
                                a += 1
                            }
                        }
                        s = a + r * E / T;
                        n.css({
                            "-webkit-box-ordinal-group": s,
                            "-moz-box-ordinal-group": s,
                            "-ms-flex-order": s,
                            "-webkit-order": s,
                            order: s
                        })
                    } else {
                        r = Math.floor(i / S);
                        a = i - r * S
                    }
                    n.css(`margin-${e.isHorizontal()?"top":"left"}`, r !== 0 && t.spaceBetween && `${t.spaceBetween}px`).attr("data-swiper-column", a).attr("data-swiper-row", r)
                }
                if (n.css("display") === "none") continue;
                if (t.slidesPerView === "auto") {
                    const i = r.getComputedStyle(n[0], null);
                    const s = n[0].style.transform;
                    const a = n[0].style.webkitTransform;
                    if (s) {
                        n[0].style.transform = "none"
                    }
                    if (a) {
                        n[0].style.webkitTransform = "none"
                    }
                    if (t.roundLengths) {
                        C = e.isHorizontal() ? n.outerWidth(true) : n.outerHeight(true)
                    } else {
                        if (e.isHorizontal()) {
                            C = n[0].getBoundingClientRect().width + parseFloat(i.getPropertyValue("margin-left")) + parseFloat(i.getPropertyValue("margin-right"))
                        } else {
                            C = n[0].getBoundingClientRect().height + parseFloat(i.getPropertyValue("margin-top")) + parseFloat(i.getPropertyValue("margin-bottom"))
                        }
                    }
                    if (s) {
                        n[0].style.transform = s
                    }
                    if (a) {
                        n[0].style.webkitTransform = a
                    }
                    if (t.roundLengths) C = Math.floor(C)
                } else {
                    C = (s - (t.slidesPerView - 1) * v) / t.slidesPerView;
                    if (t.roundLengths) C = Math.floor(C);
                    if (d[i]) {
                        if (e.isHorizontal()) {
                            d[i].style.width = `${C}px`
                        } else {
                            d[i].style.height = `${C}px`
                        }
                    }
                }
                if (d[i]) {
                    d[i].swiperSlideSize = C
                }
                u.push(C);
                if (t.centeredSlides) {
                    b = b + C / 2 + y / 2 + v;
                    if (y === 0 && i !== 0) b = b - s / 2 - v;
                    if (i === 0) b = b - s / 2 - v;
                    if (Math.abs(b) < 1 / 1e3) b = 0;
                    if (t.roundLengths) b = Math.floor(b);
                    if (x % t.slidesPerGroup === 0) p.push(b);
                    f.push(b)
                } else {
                    if (t.roundLengths) b = Math.floor(b);
                    if (x % t.slidesPerGroup === 0) p.push(b);
                    f.push(b);
                    b = b + C + v
                }
                e.virtualSize += C + v;
                y = C;
                x += 1
            }
            e.virtualSize = Math.max(e.virtualSize, s) + m;
            let $;
            if (n && a && (t.effect === "slide" || t.effect === "coverflow")) {
                i.css({
                    width: `${e.virtualSize+t.spaceBetween}px`
                })
            }
            if (!Ue.flexbox || t.setWrapperSize) {
                if (e.isHorizontal()) i.css({
                    width: `${e.virtualSize+t.spaceBetween}px`
                });
                else i.css({
                    height: `${e.virtualSize+t.spaceBetween}px`
                })
            }
            if (t.slidesPerColumn > 1) {
                e.virtualSize = (C + t.spaceBetween) * E;
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween;
                if (e.isHorizontal()) i.css({
                    width: `${e.virtualSize+t.spaceBetween}px`
                });
                else i.css({
                    height: `${e.virtualSize+t.spaceBetween}px`
                });
                if (t.centeredSlides) {
                    $ = [];
                    for (let i = 0; i < p.length; i += 1) {
                        let s = p[i];
                        if (t.roundLengths) s = Math.floor(s);
                        if (p[i] < e.virtualSize + p[0]) $.push(s)
                    }
                    p = $
                }
            }
            if (!t.centeredSlides) {
                $ = [];
                for (let i = 0; i < p.length; i += 1) {
                    let n = p[i];
                    if (t.roundLengths) n = Math.floor(n);
                    if (p[i] <= e.virtualSize - s) {
                        $.push(n)
                    }
                }
                p = $;
                if (Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1) {
                    p.push(e.virtualSize - s)
                }
            }
            if (p.length === 0) p = [0];
            if (t.spaceBetween !== 0) {
                if (e.isHorizontal()) {
                    if (n) d.css({
                        marginLeft: `${v}px`
                    });
                    else d.css({
                        marginRight: `${v}px`
                    })
                } else d.css({
                    marginBottom: `${v}px`
                })
            }
            if (t.centerInsufficientSlides) {
                let e = 0;
                u.forEach(i => {
                    e += i + (t.spaceBetween ? t.spaceBetween : 0)
                });
                e -= t.spaceBetween;
                if (e < s) {
                    const t = (s - e) / 2;
                    p.forEach((e, i) => {
                        p[i] = e - t
                    });
                    f.forEach((e, i) => {
                        f[i] = e + t
                    })
                }
            }
            _e.extend(e, {
                slides: d,
                snapGrid: p,
                slidesGrid: f,
                slidesSizesGrid: u
            });
            if (c !== l) {
                e.emit("slidesLengthChange")
            }
            if (p.length !== g) {
                if (e.params.watchOverflow) e.checkOverflow();
                e.emit("snapGridLengthChange")
            }
            if (f.length !== w) {
                e.emit("slidesGridLengthChange")
            }
            if (t.watchSlidesProgress || t.watchSlidesVisibility) {
                e.updateSlidesOffset()
            }
        }

        function Qe(e) {
            const t = this;
            const i = [];
            let s = 0;
            let n;
            if (typeof e === "number") {
                t.setTransition(e)
            } else if (e === true) {
                t.setTransition(t.params.speed)
            }
            if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1) {
                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                    const e = t.activeIndex + n;
                    if (e > t.slides.length) break;
                    i.push(t.slides.eq(e)[0])
                }
            } else {
                i.push(t.slides.eq(t.activeIndex)[0])
            }
            for (n = 0; n < i.length; n += 1) {
                if (typeof i[n] !== "undefined") {
                    const e = i[n].offsetHeight;
                    s = e > s ? e : s
                }
            }
            if (s) t.$wrapperEl.css("height", `${s}px`)
        }

        function et() {
            const e = this;
            const t = e.slides;
            for (let i = 0; i < t.length; i += 1) {
                t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
            }
        }

        function tt(e = this && this.translate || 0) {
            const t = this;
            const i = t.params;
            const {
                slides: s,
                rtlTranslate: n
            } = t;
            if (s.length === 0) return;
            if (typeof s[0].swiperSlideOffset === "undefined") t.updateSlidesOffset();
            let a = -e;
            if (n) a = e;
            s.removeClass(i.slideVisibleClass);
            t.visibleSlidesIndexes = [];
            t.visibleSlides = [];
            for (let e = 0; e < s.length; e += 1) {
                const r = s[e];
                const o = (a + (i.centeredSlides ? t.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + i.spaceBetween);
                if (i.watchSlidesVisibility) {
                    const n = -(a - r.swiperSlideOffset);
                    const o = n + t.slidesSizesGrid[e];
                    const l = n >= 0 && n < t.size || o > 0 && o <= t.size || n <= 0 && o >= t.size;
                    if (l) {
                        t.visibleSlides.push(r);
                        t.visibleSlidesIndexes.push(e);
                        s.eq(e).addClass(i.slideVisibleClass)
                    }
                }
                r.progress = n ? -o : o
            }
            t.visibleSlides = l(t.visibleSlides)
        }

        function it(e = this && this.translate || 0) {
            const t = this;
            const i = t.params;
            const s = t.maxTranslate() - t.minTranslate();
            let {
                progress: n,
                isBeginning: a,
                isEnd: r
            } = t;
            const o = a;
            const l = r;
            if (s === 0) {
                n = 0;
                a = true;
                r = true
            } else {
                n = (e - t.minTranslate()) / s;
                a = n <= 0;
                r = n >= 1
            }
            _e.extend(t, {
                progress: n,
                isBeginning: a,
                isEnd: r
            });
            if (i.watchSlidesProgress || i.watchSlidesVisibility) t.updateSlidesProgress(e);
            if (a && !o) {
                t.emit("reachBeginning toEdge")
            }
            if (r && !l) {
                t.emit("reachEnd toEdge")
            }
            if (o && !a || l && !r) {
                t.emit("fromEdge")
            }
            t.emit("progress", n)
        }

        function st() {
            const e = this;
            const {
                slides: t,
                params: i,
                $wrapperEl: s,
                activeIndex: n,
                realIndex: a
            } = e;
            const r = e.virtual && i.virtual.enabled;
            t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`);
            let o;
            if (r) {
                o = e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${n}"]`)
            } else {
                o = t.eq(n)
            }
            o.addClass(i.slideActiveClass);
            if (i.loop) {
                if (o.hasClass(i.slideDuplicateClass)) {
                    s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass)
                } else {
                    s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass)
                }
            }
            let l = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
            if (i.loop && l.length === 0) {
                l = t.eq(0);
                l.addClass(i.slideNextClass)
            }
            let d = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
            if (i.loop && d.length === 0) {
                d = t.eq(-1);
                d.addClass(i.slidePrevClass)
            }
            if (i.loop) {
                if (l.hasClass(i.slideDuplicateClass)) {
                    s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass)
                } else {
                    s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass)
                }
                if (d.hasClass(i.slideDuplicateClass)) {
                    s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)
                } else {
                    s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)
                }
            }
        }

        function nt(e) {
            const t = this;
            const i = t.rtlTranslate ? t.translate : -t.translate;
            const {
                slidesGrid: s,
                snapGrid: n,
                params: a,
                activeIndex: r,
                realIndex: o,
                snapIndex: l
            } = t;
            let d = e;
            let c;
            if (typeof d === "undefined") {
                for (let e = 0; e < s.length; e += 1) {
                    if (typeof s[e + 1] !== "undefined") {
                        if (i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2) {
                            d = e
                        } else if (i >= s[e] && i < s[e + 1]) {
                            d = e + 1
                        }
                    } else if (i >= s[e]) {
                        d = e
                    }
                }
                if (a.normalizeSlideIndex) {
                    if (d < 0 || typeof d === "undefined") d = 0
                }
            }
            if (n.indexOf(i) >= 0) {
                c = n.indexOf(i)
            } else {
                c = Math.floor(d / a.slidesPerGroup)
            }
            if (c >= n.length) c = n.length - 1;
            if (d === r) {
                if (c !== l) {
                    t.snapIndex = c;
                    t.emit("snapIndexChange")
                }
                return
            }
            const p = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
            _e.extend(t, {
                snapIndex: c,
                realIndex: p,
                previousIndex: r,
                activeIndex: d
            });
            t.emit("activeIndexChange");
            t.emit("snapIndexChange");
            if (o !== p) {
                t.emit("realIndexChange")
            }
            t.emit("slideChange")
        }

        function at(e) {
            const t = this;
            const i = t.params;
            const s = l(e.target).closest(`.${i.slideClass}`)[0];
            let n = false;
            if (s) {
                for (let e = 0; e < t.slides.length; e += 1) {
                    if (t.slides[e] === s) n = true
                }
            }
            if (s && n) {
                t.clickedSlide = s;
                if (t.virtual && t.params.virtual.enabled) {
                    t.clickedIndex = parseInt(l(s).attr("data-swiper-slide-index"), 10)
                } else {
                    t.clickedIndex = l(s).index()
                }
            } else {
                t.clickedSlide = undefined;
                t.clickedIndex = undefined;
                return
            }
            if (i.slideToClickedSlide && t.clickedIndex !== undefined && t.clickedIndex !== t.activeIndex) {
                t.slideToClickedSlide()
            }
        }
        var rt = {
            updateSize: Ze,
            updateSlides: Je,
            updateAutoHeight: Qe,
            updateSlidesOffset: et,
            updateSlidesProgress: tt,
            updateProgress: it,
            updateSlidesClasses: st,
            updateActiveIndex: nt,
            updateClickedSlide: at
        };

        function ot(e = (this.isHorizontal() ? "x" : "y")) {
            const t = this;
            const {
                params: i,
                rtlTranslate: s,
                translate: n,
                $wrapperEl: a
            } = t;
            if (i.virtualTranslate) {
                return s ? -n : n
            }
            let r = _e.getTranslate(a[0], e);
            if (s) r = -r;
            return r || 0
        }

        function lt(e, t) {
            const i = this;
            const {
                rtlTranslate: s,
                params: n,
                $wrapperEl: a,
                progress: r
            } = i;
            let o = 0;
            let l = 0;
            const d = 0;
            if (i.isHorizontal()) {
                o = s ? -e : e
            } else {
                l = e
            }
            if (n.roundLengths) {
                o = Math.floor(o);
                l = Math.floor(l)
            }
            if (!n.virtualTranslate) {
                if (Ue.transforms3d) a.transform(`translate3d(${o}px, ${l}px, ${d}px)`);
                else a.transform(`translate(${o}px, ${l}px)`)
            }
            i.previousTranslate = i.translate;
            i.translate = i.isHorizontal() ? o : l;
            let c;
            const p = i.maxTranslate() - i.minTranslate();
            if (p === 0) {
                c = 0
            } else {
                c = (e - i.minTranslate()) / p
            }
            if (c !== r) {
                i.updateProgress(e)
            }
            i.emit("setTranslate", i.translate, t)
        }

        function dt() {
            return -this.snapGrid[0]
        }

        function ct() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
        var pt = {
            getTranslate: ot,
            setTranslate: lt,
            minTranslate: dt,
            maxTranslate: ct
        };

        function ft(e, t) {
            const i = this;
            i.$wrapperEl.transition(e);
            i.emit("setTransition", e, t)
        }

        function ut(e = true, t) {
            const i = this;
            const {
                activeIndex: s,
                params: n,
                previousIndex: a
            } = i;
            if (n.autoHeight) {
                i.updateAutoHeight()
            }
            let r = t;
            if (!r) {
                if (s > a) r = "next";
                else if (s < a) r = "prev";
                else r = "reset"
            }
            i.emit("transitionStart");
            if (e && s !== a) {
                if (r === "reset") {
                    i.emit("slideResetTransitionStart");
                    return
                }
                i.emit("slideChangeTransitionStart");
                if (r === "next") {
                    i.emit("slideNextTransitionStart")
                } else {
                    i.emit("slidePrevTransitionStart")
                }
            }
        }

        function ht(e = true, t) {
            const i = this;
            const {
                activeIndex: s,
                previousIndex: n
            } = i;
            i.animating = false;
            i.setTransition(0);
            let a = t;
            if (!a) {
                if (s > n) a = "next";
                else if (s < n) a = "prev";
                else a = "reset"
            }
            i.emit("transitionEnd");
            if (e && s !== n) {
                if (a === "reset") {
                    i.emit("slideResetTransitionEnd");
                    return
                }
                i.emit("slideChangeTransitionEnd");
                if (a === "next") {
                    i.emit("slideNextTransitionEnd")
                } else {
                    i.emit("slidePrevTransitionEnd")
                }
            }
        }
        var mt = {
            setTransition: ft,
            transitionStart: ut,
            transitionEnd: ht
        };

        function gt(e = 0, t = this.params.speed, i = true, s) {
            const n = this;
            let a = e;
            if (a < 0) a = 0;
            const {
                params: r,
                snapGrid: o,
                slidesGrid: l,
                previousIndex: d,
                activeIndex: c,
                rtlTranslate: p
            } = n;
            if (n.animating && r.preventInteractionOnTransition) {
                return false
            }
            let f = Math.floor(a / r.slidesPerGroup);
            if (f >= o.length) f = o.length - 1;
            if ((c || r.initialSlide || 0) === (d || 0) && i) {
                n.emit("beforeSlideChangeStart")
            }
            const u = -o[f];
            n.updateProgress(u);
            if (r.normalizeSlideIndex) {
                for (let e = 0; e < l.length; e += 1) {
                    if (-Math.floor(u * 100) >= Math.floor(l[e] * 100)) {
                        a = e
                    }
                }
            }
            if (n.initialized && a !== c) {
                if (!n.allowSlideNext && u < n.translate && u < n.minTranslate()) {
                    return false
                }
                if (!n.allowSlidePrev && u > n.translate && u > n.maxTranslate()) {
                    if ((c || 0) !== a) return false
                }
            }
            let h;
            if (a > c) h = "next";
            else if (a < c) h = "prev";
            else h = "reset";
            if (p && -u === n.translate || !p && u === n.translate) {
                n.updateActiveIndex(a);
                if (r.autoHeight) {
                    n.updateAutoHeight()
                }
                n.updateSlidesClasses();
                if (r.effect !== "slide") {
                    n.setTranslate(u)
                }
                if (h !== "reset") {
                    n.transitionStart(i, h);
                    n.transitionEnd(i, h)
                }
                return false
            }
            if (t === 0 || !Ue.transition) {
                n.setTransition(0);
                n.setTranslate(u);
                n.updateActiveIndex(a);
                n.updateSlidesClasses();
                n.emit("beforeTransitionStart", t, s);
                n.transitionStart(i, h);
                n.transitionEnd(i, h)
            } else {
                n.setTransition(t);
                n.setTranslate(u);
                n.updateActiveIndex(a);
                n.updateSlidesClasses();
                n.emit("beforeTransitionStart", t, s);
                n.transitionStart(i, h);
                if (!n.animating) {
                    n.animating = true;
                    if (!n.onSlideToWrapperTransitionEnd) {
                        n.onSlideToWrapperTransitionEnd = function e(t) {
                            if (!n || n.destroyed) return;
                            if (t.target !== this) return;
                            n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd);
                            n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd);
                            n.onSlideToWrapperTransitionEnd = null;
                            delete n.onSlideToWrapperTransitionEnd;
                            n.transitionEnd(i, h)
                        }
                    }
                    n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd);
                    n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd)
                }
            }
            return true
        }

        function wt(e = 0, t = this.params.speed, i = true, s) {
            const n = this;
            let a = e;
            if (n.params.loop) {
                a += n.loopedSlides
            }
            return n.slideTo(a, t, i, s)
        }

        function vt(e = this.params.speed, t = true, i) {
            const s = this;
            const {
                params: n,
                animating: a
            } = s;
            if (n.loop) {
                if (a) return false;
                s.loopFix();
                s._clientLeft = s.$wrapperEl[0].clientLeft;
                return s.slideTo(s.activeIndex + n.slidesPerGroup, e, t, i)
            }
            return s.slideTo(s.activeIndex + n.slidesPerGroup, e, t, i)
        }

        function bt(e = this.params.speed, t = true, i) {
            const s = this;
            const {
                params: n,
                animating: a,
                snapGrid: r,
                slidesGrid: o,
                rtlTranslate: l
            } = s;
            if (n.loop) {
                if (a) return false;
                s.loopFix();
                s._clientLeft = s.$wrapperEl[0].clientLeft
            }
            const d = l ? s.translate : -s.translate;

            function c(e) {
                if (e < 0) return -Math.floor(Math.abs(e));
                return Math.floor(e)
            }
            const p = c(d);
            const f = r.map(e => c(e));
            const u = o.map(e => c(e));
            const h = r[f.indexOf(p)];
            const m = r[f.indexOf(p) - 1];
            let g;
            if (typeof m !== "undefined") {
                g = o.indexOf(m);
                if (g < 0) g = s.activeIndex - 1
            }
            return s.slideTo(g, e, t, i)
        }

        function yt(e = this.params.speed, t = true, i) {
            const s = this;
            return s.slideTo(s.activeIndex, e, t, i)
        }

        function xt(e = this.params.speed, t = true, i) {
            const s = this;
            let n = s.activeIndex;
            const a = Math.floor(n / s.params.slidesPerGroup);
            if (a < s.snapGrid.length - 1) {
                const e = s.rtlTranslate ? s.translate : -s.translate;
                const t = s.snapGrid[a];
                const i = s.snapGrid[a + 1];
                if (e - t > (i - t) / 2) {
                    n = s.params.slidesPerGroup
                }
            }
            return s.slideTo(n, e, t, i)
        }

        function Et() {
            const e = this;
            const {
                params: t,
                $wrapperEl: i
            } = e;
            const s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
            let n = e.clickedIndex;
            let a;
            if (t.loop) {
                if (e.animating) return;
                a = parseInt(l(e.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (t.centeredSlides) {
                    if (n < e.loopedSlides - s / 2 || n > e.slides.length - e.loopedSlides + s / 2) {
                        e.loopFix();
                        n = i.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index();
                        _e.nextTick(() => {
                            e.slideTo(n)
                        })
                    } else {
                        e.slideTo(n)
                    }
                } else if (n > e.slides.length - s) {
                    e.loopFix();
                    n = i.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index();
                    _e.nextTick(() => {
                        e.slideTo(n)
                    })
                } else {
                    e.slideTo(n)
                }
            } else {
                e.slideTo(n)
            }
        }
        var Ct = {
            slideTo: gt,
            slideToLoop: wt,
            slideNext: vt,
            slidePrev: bt,
            slideReset: yt,
            slideToClosest: xt,
            slideToClickedSlide: Et
        };

        function Tt() {
            const e = this;
            const {
                params: t,
                $wrapperEl: i
            } = e;
            i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let s = i.children(`.${t.slideClass}`);
            if (t.loopFillGroupWithBlank) {
                const e = t.slidesPerGroup - s.length % t.slidesPerGroup;
                if (e !== t.slidesPerGroup) {
                    for (let s = 0; s < e; s += 1) {
                        const e = l(a.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                        i.append(e)
                    }
                    s = i.children(`.${t.slideClass}`)
                }
            }
            if (t.slidesPerView === "auto" && !t.loopedSlides) t.loopedSlides = s.length;
            e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10);
            e.loopedSlides += t.loopAdditionalSlides;
            if (e.loopedSlides > s.length) {
                e.loopedSlides = s.length
            }
            const n = [];
            const r = [];
            s.each((t, i) => {
                const a = l(i);
                if (t < e.loopedSlides) r.push(i);
                if (t < s.length && t >= s.length - e.loopedSlides) n.push(i);
                a.attr("data-swiper-slide-index", t)
            });
            for (let e = 0; e < r.length; e += 1) {
                i.append(l(r[e].cloneNode(true)).addClass(t.slideDuplicateClass))
            }
            for (let e = n.length - 1; e >= 0; e -= 1) {
                i.prepend(l(n[e].cloneNode(true)).addClass(t.slideDuplicateClass))
            }
        }

        function St() {
            const e = this;
            const {
                params: t,
                activeIndex: i,
                slides: s,
                loopedSlides: n,
                allowSlidePrev: a,
                allowSlideNext: r,
                snapGrid: o,
                rtlTranslate: l
            } = e;
            let d;
            e.allowSlidePrev = true;
            e.allowSlideNext = true;
            const c = -o[i];
            const p = c - e.getTranslate();
            if (i < n) {
                d = s.length - n * 3 + i;
                d += n;
                const t = e.slideTo(d, 0, false, true);
                if (t && p !== 0) {
                    e.setTranslate((l ? -e.translate : e.translate) - p)
                }
            } else if (t.slidesPerView === "auto" && i >= n * 2 || i >= s.length - n) {
                d = -s.length + i + n;
                d += n;
                const t = e.slideTo(d, 0, false, true);
                if (t && p !== 0) {
                    e.setTranslate((l ? -e.translate : e.translate) - p)
                }
            }
            e.allowSlidePrev = a;
            e.allowSlideNext = r
        }

        function kt() {
            const e = this;
            const {
                $wrapperEl: t,
                params: i,
                slides: s
            } = e;
            t.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
            s.removeAttr("data-swiper-slide-index")
        }
        var $t = {
            loopCreate: Tt,
            loopFix: St,
            loopDestroy: kt
        };

        function Mt(e) {
            const t = this;
            if (Ue.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked) return;
            const i = t.el;
            i.style.cursor = "move";
            i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab";
            i.style.cursor = e ? "-moz-grabbin" : "-moz-grab";
            i.style.cursor = e ? "grabbing" : "grab"
        }

        function zt() {
            const e = this;
            if (Ue.touch || e.params.watchOverflow && e.isLocked) return;
            e.el.style.cursor = ""
        }
        var Dt = {
            setGrabCursor: Mt,
            unsetGrabCursor: zt
        };

        function Pt(e) {
            const t = this;
            const {
                $wrapperEl: i,
                params: s
            } = t;
            if (s.loop) {
                t.loopDestroy()
            }
            if (typeof e === "object" && "length" in e) {
                for (let t = 0; t < e.length; t += 1) {
                    if (e[t]) i.append(e[t])
                }
            } else {
                i.append(e)
            }
            if (s.loop) {
                t.loopCreate()
            }
            if (!(s.observer && Ue.observer)) {
                t.update()
            }
        }

        function Lt(e) {
            const t = this;
            const {
                params: i,
                $wrapperEl: s,
                activeIndex: n
            } = t;
            if (i.loop) {
                t.loopDestroy()
            }
            let a = n + 1;
            if (typeof e === "object" && "length" in e) {
                for (let t = 0; t < e.length; t += 1) {
                    if (e[t]) s.prepend(e[t])
                }
                a = n + e.length
            } else {
                s.prepend(e)
            }
            if (i.loop) {
                t.loopCreate()
            }
            if (!(i.observer && Ue.observer)) {
                t.update()
            }
            t.slideTo(a, 0, false)
        }

        function It(e, t) {
            const i = this;
            const {
                $wrapperEl: s,
                params: n,
                activeIndex: a
            } = i;
            let r = a;
            if (n.loop) {
                r -= i.loopedSlides;
                i.loopDestroy();
                i.slides = s.children(`.${n.slideClass}`)
            }
            const o = i.slides.length;
            if (e <= 0) {
                i.prependSlide(t);
                return
            }
            if (e >= o) {
                i.appendSlide(t);
                return
            }
            let l = r > e ? r + 1 : r;
            const d = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = i.slides.eq(t);
                e.remove();
                d.unshift(e)
            }
            if (typeof t === "object" && "length" in t) {
                for (let e = 0; e < t.length; e += 1) {
                    if (t[e]) s.append(t[e])
                }
                l = r > e ? r + t.length : r
            } else {
                s.append(t)
            }
            for (let e = 0; e < d.length; e += 1) {
                s.append(d[e])
            }
            if (n.loop) {
                i.loopCreate()
            }
            if (!(n.observer && Ue.observer)) {
                i.update()
            }
            if (n.loop) {
                i.slideTo(l + i.loopedSlides, 0, false)
            } else {
                i.slideTo(l, 0, false)
            }
        }

        function At(e) {
            const t = this;
            const {
                params: i,
                $wrapperEl: s,
                activeIndex: n
            } = t;
            let a = n;
            if (i.loop) {
                a -= t.loopedSlides;
                t.loopDestroy();
                t.slides = s.children(`.${i.slideClass}`)
            }
            let r = a;
            let o;
            if (typeof e === "object" && "length" in e) {
                for (let i = 0; i < e.length; i += 1) {
                    o = e[i];
                    if (t.slides[o]) t.slides.eq(o).remove();
                    if (o < r) r -= 1
                }
                r = Math.max(r, 0)
            } else {
                o = e;
                if (t.slides[o]) t.slides.eq(o).remove();
                if (o < r) r -= 1;
                r = Math.max(r, 0)
            }
            if (i.loop) {
                t.loopCreate()
            }
            if (!(i.observer && Ue.observer)) {
                t.update()
            }
            if (i.loop) {
                t.slideTo(r + t.loopedSlides, 0, false)
            } else {
                t.slideTo(r, 0, false)
            }
        }

        function Ot() {
            const e = this;
            const t = [];
            for (let i = 0; i < e.slides.length; i += 1) {
                t.push(i)
            }
            e.removeSlide(t)
        }
        var Ft = {
            appendSlide: Pt,
            prependSlide: Lt,
            addSlide: It,
            removeSlide: At,
            removeAllSlides: Ot
        };
        const Nt = function e() {
            const t = r.navigator.userAgent;
            const i = {
                ios: false,
                android: false,
                androidChrome: false,
                desktop: false,
                windows: false,
                iphone: false,
                ipod: false,
                ipad: false,
                cordova: r.cordova || r.phonegap,
                phonegap: r.cordova || r.phonegap
            };
            const s = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);
            const n = t.match(/(Android);?[\s\/]+([\d.]+)?/);
            const o = t.match(/(iPad).*OS\s([\d_]+)/);
            const l = t.match(/(iPod)(.*OS\s([\d_]+))?/);
            const d = !o && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (s) {
                i.os = "windows";
                i.osVersion = s[2];
                i.windows = true
            }
            if (n && !s) {
                i.os = "android";
                i.osVersion = n[2];
                i.android = true;
                i.androidChrome = t.toLowerCase().indexOf("chrome") >= 0
            }
            if (o || d || l) {
                i.os = "ios";
                i.ios = true
            }
            if (d && !l) {
                i.osVersion = d[2].replace(/_/g, ".");
                i.iphone = true
            }
            if (o) {
                i.osVersion = o[2].replace(/_/g, ".");
                i.ipad = true
            }
            if (l) {
                i.osVersion = l[3] ? l[3].replace(/_/g, ".") : null;
                i.iphone = true
            }
            if (i.ios && i.osVersion && t.indexOf("Version/") >= 0) {
                if (i.osVersion.split(".")[0] === "10") {
                    i.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]
                }
            }
            i.desktop = !(i.os || i.android || i.webView);
            i.webView = (d || o || l) && t.match(/.*AppleWebKit(?!.*Safari)/i);
            if (i.os && i.os === "ios") {
                const e = i.osVersion.split(".");
                const t = a.querySelector('meta[name="viewport"]');
                i.minimalUi = !i.webView && (l || d) && (e[0] * 1 === 7 ? e[1] * 1 >= 1 : e[0] * 1 > 7) && t && t.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            i.pixelRatio = r.devicePixelRatio || 1;
            return i
        }();

        function Bt(e) {
            const t = this;
            const i = t.touchEventsData;
            const {
                params: s,
                touches: n
            } = t;
            if (t.animating && s.preventInteractionOnTransition) {
                return
            }
            let o = e;
            if (o.originalEvent) o = o.originalEvent;
            i.isTouchEvent = o.type === "touchstart";
            if (!i.isTouchEvent && "which" in o && o.which === 3) return;
            if (!i.isTouchEvent && "button" in o && o.button > 0) return;
            if (i.isTouched && i.isMoved) return;
            if (s.noSwiping && l(o.target).closest(s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`)[0]) {
                t.allowClick = true;
                return
            }
            if (s.swipeHandler) {
                if (!l(o).closest(s.swipeHandler)[0]) return
            }
            n.currentX = o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX;
            n.currentY = o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY;
            const d = n.currentX;
            const c = n.currentY;
            const p = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection;
            const f = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
            if (p && (d <= f || d >= r.screen.width - f)) {
                return
            }
            _e.extend(i, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: undefined,
                startMoving: undefined
            });
            n.startX = d;
            n.startY = c;
            i.touchStartTime = _e.now();
            t.allowClick = true;
            t.updateSize();
            t.swipeDirection = undefined;
            if (s.threshold > 0) i.allowThresholdMove = false;
            if (o.type !== "touchstart") {
                let e = true;
                if (l(o.target).is(i.formElements)) e = false;
                if (a.activeElement && l(a.activeElement).is(i.formElements) && a.activeElement !== o.target) {
                    a.activeElement.blur()
                }
                if (e && t.allowTouchMove && s.touchStartPreventDefault) {
                    o.preventDefault()
                }
            }
            t.emit("touchStart", o)
        }

        function Ht(e) {
            const t = this;
            const i = t.touchEventsData;
            const {
                params: s,
                touches: n,
                rtlTranslate: r
            } = t;
            let o = e;
            if (o.originalEvent) o = o.originalEvent;
            if (!i.isTouched) {
                if (i.startMoving && i.isScrolling) {
                    t.emit("touchMoveOpposite", o)
                }
                return
            }
            if (i.isTouchEvent && o.type === "mousemove") return;
            const d = o.type === "touchmove" ? o.targetTouches[0].pageX : o.pageX;
            const c = o.type === "touchmove" ? o.targetTouches[0].pageY : o.pageY;
            if (o.preventedByNestedSwiper) {
                n.startX = d;
                n.startY = c;
                return
            }
            if (!t.allowTouchMove) {
                t.allowClick = false;
                if (i.isTouched) {
                    _e.extend(n, {
                        startX: d,
                        startY: c,
                        currentX: d,
                        currentY: c
                    });
                    i.touchStartTime = _e.now()
                }
                return
            }
            if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
                if (t.isVertical()) {
                    if (c < n.startY && t.translate <= t.maxTranslate() || c > n.startY && t.translate >= t.minTranslate()) {
                        i.isTouched = false;
                        i.isMoved = false;
                        return
                    }
                } else if (d < n.startX && t.translate <= t.maxTranslate() || d > n.startX && t.translate >= t.minTranslate()) {
                    return
                }
            }
            if (i.isTouchEvent && a.activeElement) {
                if (o.target === a.activeElement && l(o.target).is(i.formElements)) {
                    i.isMoved = true;
                    t.allowClick = false;
                    return
                }
            }
            if (i.allowTouchCallbacks) {
                t.emit("touchMove", o)
            }
            if (o.targetTouches && o.targetTouches.length > 1) return;
            n.currentX = d;
            n.currentY = c;
            const p = n.currentX - n.startX;
            const f = n.currentY - n.startY;
            if (t.params.threshold && Math.sqrt(p ** 2 + f ** 2) < t.params.threshold) return;
            if (typeof i.isScrolling === "undefined") {
                let e;
                if (t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX) {
                    i.isScrolling = false
                } else {
                    if (p * p + f * f >= 25) {
                        e = Math.atan2(Math.abs(f), Math.abs(p)) * 180 / Math.PI;
                        i.isScrolling = t.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle
                    }
                }
            }
            if (i.isScrolling) {
                t.emit("touchMoveOpposite", o)
            }
            if (typeof i.startMoving === "undefined") {
                if (n.currentX !== n.startX || n.currentY !== n.startY) {
                    i.startMoving = true
                }
            }
            if (i.isScrolling) {
                i.isTouched = false;
                return
            }
            if (!i.startMoving) {
                return
            }
            t.allowClick = false;
            o.preventDefault();
            if (s.touchMoveStopPropagation && !s.nested) {
                o.stopPropagation()
            }
            if (!i.isMoved) {
                if (s.loop) {
                    t.loopFix()
                }
                i.startTranslate = t.getTranslate();
                t.setTransition(0);
                if (t.animating) {
                    t.$wrapperEl.trigger("webkitTransitionEnd transitionend")
                }
                i.allowMomentumBounce = false;
                if (s.grabCursor && (t.allowSlideNext === true || t.allowSlidePrev === true)) {
                    t.setGrabCursor(true)
                }
                t.emit("sliderFirstMove", o)
            }
            t.emit("sliderMove", o);
            i.isMoved = true;
            let u = t.isHorizontal() ? p : f;
            n.diff = u;
            u *= s.touchRatio;
            if (r) u = -u;
            t.swipeDirection = u > 0 ? "prev" : "next";
            i.currentTranslate = u + i.startTranslate;
            let h = true;
            let m = s.resistanceRatio;
            if (s.touchReleaseOnEdges) {
                m = 0
            }
            if (u > 0 && i.currentTranslate > t.minTranslate()) {
                h = false;
                if (s.resistance) i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + u) ** m
            } else if (u < 0 && i.currentTranslate < t.maxTranslate()) {
                h = false;
                if (s.resistance) i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - u) ** m
            }
            if (h) {
                o.preventedByNestedSwiper = true
            }
            if (!t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate) {
                i.currentTranslate = i.startTranslate
            }
            if (!t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate) {
                i.currentTranslate = i.startTranslate
            }
            if (s.threshold > 0) {
                if (Math.abs(u) > s.threshold || i.allowThresholdMove) {
                    if (!i.allowThresholdMove) {
                        i.allowThresholdMove = true;
                        n.startX = n.currentX;
                        n.startY = n.currentY;
                        i.currentTranslate = i.startTranslate;
                        n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                        return
                    }
                } else {
                    i.currentTranslate = i.startTranslate;
                    return
                }
            }
            if (!s.followFinger) return;
            if (s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) {
                t.updateActiveIndex();
                t.updateSlidesClasses()
            }
            if (s.freeMode) {
                if (i.velocities.length === 0) {
                    i.velocities.push({
                        position: n[t.isHorizontal() ? "startX" : "startY"],
                        time: i.touchStartTime
                    })
                }
                i.velocities.push({
                    position: n[t.isHorizontal() ? "currentX" : "currentY"],
                    time: _e.now()
                })
            }
            t.updateProgress(i.currentTranslate);
            t.setTranslate(i.currentTranslate)
        }

        function Gt(e) {
            const t = this;
            const i = t.touchEventsData;
            const {
                params: s,
                touches: n,
                rtlTranslate: a,
                $wrapperEl: r,
                slidesGrid: o,
                snapGrid: l
            } = t;
            let d = e;
            if (d.originalEvent) d = d.originalEvent;
            if (i.allowTouchCallbacks) {
                t.emit("touchEnd", d)
            }
            i.allowTouchCallbacks = false;
            if (!i.isTouched) {
                if (i.isMoved && s.grabCursor) {
                    t.setGrabCursor(false)
                }
                i.isMoved = false;
                i.startMoving = false;
                return
            }
            if (s.grabCursor && i.isMoved && i.isTouched && (t.allowSlideNext === true || t.allowSlidePrev === true)) {
                t.setGrabCursor(false)
            }
            const c = _e.now();
            const p = c - i.touchStartTime;
            if (t.allowClick) {
                t.updateClickedSlide(d);
                t.emit("tap", d);
                if (p < 300 && c - i.lastClickTime > 300) {
                    if (i.clickTimeout) clearTimeout(i.clickTimeout);
                    i.clickTimeout = _e.nextTick(() => {
                        if (!t || t.destroyed) return;
                        t.emit("click", d)
                    }, 300)
                }
                if (p < 300 && c - i.lastClickTime < 300) {
                    if (i.clickTimeout) clearTimeout(i.clickTimeout);
                    t.emit("doubleTap", d)
                }
            }
            i.lastClickTime = _e.now();
            _e.nextTick(() => {
                if (!t.destroyed) t.allowClick = true
            });
            if (!i.isTouched || !i.isMoved || !t.swipeDirection || n.diff === 0 || i.currentTranslate === i.startTranslate) {
                i.isTouched = false;
                i.isMoved = false;
                i.startMoving = false;
                return
            }
            i.isTouched = false;
            i.isMoved = false;
            i.startMoving = false;
            let f;
            if (s.followFinger) {
                f = a ? t.translate : -t.translate
            } else {
                f = -i.currentTranslate
            }
            if (s.freeMode) {
                if (f < -t.minTranslate()) {
                    t.slideTo(t.activeIndex);
                    return
                }
                if (f > -t.maxTranslate()) {
                    if (t.slides.length < l.length) {
                        t.slideTo(l.length - 1)
                    } else {
                        t.slideTo(t.slides.length - 1)
                    }
                    return
                }
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        const e = i.velocities.pop();
                        const n = i.velocities.pop();
                        const a = e.position - n.position;
                        const r = e.time - n.time;
                        t.velocity = a / r;
                        t.velocity /= 2;
                        if (Math.abs(t.velocity) < s.freeModeMinimumVelocity) {
                            t.velocity = 0
                        }
                        if (r > 150 || _e.now() - e.time > 300) {
                            t.velocity = 0
                        }
                    } else {
                        t.velocity = 0
                    }
                    t.velocity *= s.freeModeMomentumVelocityRatio;
                    i.velocities.length = 0;
                    let e = 1e3 * s.freeModeMomentumRatio;
                    const n = t.velocity * e;
                    let o = t.translate + n;
                    if (a) o = -o;
                    let d = false;
                    let c;
                    const p = Math.abs(t.velocity) * 20 * s.freeModeMomentumBounceRatio;
                    let f;
                    if (o < t.maxTranslate()) {
                        if (s.freeModeMomentumBounce) {
                            if (o + t.maxTranslate() < -p) {
                                o = t.maxTranslate() - p
                            }
                            c = t.maxTranslate();
                            d = true;
                            i.allowMomentumBounce = true
                        } else {
                            o = t.maxTranslate()
                        }
                        if (s.loop && s.centeredSlides) f = true
                    } else if (o > t.minTranslate()) {
                        if (s.freeModeMomentumBounce) {
                            if (o - t.minTranslate() > p) {
                                o = t.minTranslate() + p
                            }
                            c = t.minTranslate();
                            d = true;
                            i.allowMomentumBounce = true
                        } else {
                            o = t.minTranslate()
                        }
                        if (s.loop && s.centeredSlides) f = true
                    } else if (s.freeModeSticky) {
                        let e;
                        for (let t = 0; t < l.length; t += 1) {
                            if (l[t] > -o) {
                                e = t;
                                break
                            }
                        }
                        if (Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) || t.swipeDirection === "next") {
                            o = l[e]
                        } else {
                            o = l[e - 1]
                        }
                        o = -o
                    }
                    if (f) {
                        t.once("transitionEnd", () => {
                            t.loopFix()
                        })
                    }
                    if (t.velocity !== 0) {
                        if (a) {
                            e = Math.abs((-o - t.translate) / t.velocity)
                        } else {
                            e = Math.abs((o - t.translate) / t.velocity)
                        }
                    } else if (s.freeModeSticky) {
                        t.slideToClosest();
                        return
                    }
                    if (s.freeModeMomentumBounce && d) {
                        t.updateProgress(c);
                        t.setTransition(e);
                        t.setTranslate(o);
                        t.transitionStart(true, t.swipeDirection);
                        t.animating = true;
                        r.transitionEnd(() => {
                            if (!t || t.destroyed || !i.allowMomentumBounce) return;
                            t.emit("momentumBounce");
                            t.setTransition(s.speed);
                            t.setTranslate(c);
                            r.transitionEnd(() => {
                                if (!t || t.destroyed) return;
                                t.transitionEnd()
                            })
                        })
                    } else if (t.velocity) {
                        t.updateProgress(o);
                        t.setTransition(e);
                        t.setTranslate(o);
                        t.transitionStart(true, t.swipeDirection);
                        if (!t.animating) {
                            t.animating = true;
                            r.transitionEnd(() => {
                                if (!t || t.destroyed) return;
                                t.transitionEnd()
                            })
                        }
                    } else {
                        t.updateProgress(o)
                    }
                    t.updateActiveIndex();
                    t.updateSlidesClasses()
                } else if (s.freeModeSticky) {
                    t.slideToClosest();
                    return
                }
                if (!s.freeModeMomentum || p >= s.longSwipesMs) {
                    t.updateProgress();
                    t.updateActiveIndex();
                    t.updateSlidesClasses()
                }
                return
            }
            let u = 0;
            let h = t.slidesSizesGrid[0];
            for (let e = 0; e < o.length; e += s.slidesPerGroup) {
                if (typeof o[e + s.slidesPerGroup] !== "undefined") {
                    if (f >= o[e] && f < o[e + s.slidesPerGroup]) {
                        u = e;
                        h = o[e + s.slidesPerGroup] - o[e]
                    }
                } else if (f >= o[e]) {
                    u = e;
                    h = o[o.length - 1] - o[o.length - 2]
                }
            }
            const m = (f - o[u]) / h;
            if (p > s.longSwipesMs) {
                if (!s.longSwipes) {
                    t.slideTo(t.activeIndex);
                    return
                }
                if (t.swipeDirection === "next") {
                    if (m >= s.longSwipesRatio) t.slideTo(u + s.slidesPerGroup);
                    else t.slideTo(u)
                }
                if (t.swipeDirection === "prev") {
                    if (m > 1 - s.longSwipesRatio) t.slideTo(u + s.slidesPerGroup);
                    else t.slideTo(u)
                }
            } else {
                if (!s.shortSwipes) {
                    t.slideTo(t.activeIndex);
                    return
                }
                if (t.swipeDirection === "next") {
                    t.slideTo(u + s.slidesPerGroup)
                }
                if (t.swipeDirection === "prev") {
                    t.slideTo(u)
                }
            }
        }

        function Xt() {
            const e = this;
            const {
                params: t,
                el: i
            } = e;
            if (i && i.offsetWidth === 0) return;
            if (t.breakpoints) {
                e.setBreakpoint()
            }
            const {
                allowSlideNext: s,
                allowSlidePrev: n,
                snapGrid: a
            } = e;
            e.allowSlideNext = true;
            e.allowSlidePrev = true;
            e.updateSize();
            e.updateSlides();
            if (t.freeMode) {
                const i = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i);
                e.updateActiveIndex();
                e.updateSlidesClasses();
                if (t.autoHeight) {
                    e.updateAutoHeight()
                }
            } else {
                e.updateSlidesClasses();
                if ((t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides) {
                    e.slideTo(e.slides.length - 1, 0, false, true)
                } else {
                    e.slideTo(e.activeIndex, 0, false, true)
                }
            }
            e.allowSlidePrev = n;
            e.allowSlideNext = s;
            if (e.params.watchOverflow && a !== e.snapGrid) {
                e.checkOverflow()
            }
        }

        function Yt(e) {
            const t = this;
            if (!t.allowClick) {
                if (t.params.preventClicks) e.preventDefault();
                if (t.params.preventClicksPropagation && t.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation()
                }
            }
        }

        function Vt() {
            const e = this;
            const {
                params: t,
                touchEvents: i,
                el: s,
                wrapperEl: n
            } = e; {
                e.onTouchStart = Bt.bind(e);
                e.onTouchMove = Ht.bind(e);
                e.onTouchEnd = Gt.bind(e)
            }
            e.onClick = Yt.bind(e);
            const r = t.touchEventsTarget === "container" ? s : n;
            const o = !!t.nested; {
                if (!Ue.touch && (Ue.pointerEvents || Ue.prefixedPointerEvents)) {
                    r.addEventListener(i.start, e.onTouchStart, false);
                    a.addEventListener(i.move, e.onTouchMove, o);
                    a.addEventListener(i.end, e.onTouchEnd, false)
                } else {
                    if (Ue.touch) {
                        const s = i.start === "touchstart" && Ue.passiveListener && t.passiveListeners ? {
                            passive: true,
                            capture: false
                        } : false;
                        r.addEventListener(i.start, e.onTouchStart, s);
                        r.addEventListener(i.move, e.onTouchMove, Ue.passiveListener ? {
                            passive: false,
                            capture: o
                        } : o);
                        r.addEventListener(i.end, e.onTouchEnd, s)
                    }
                    if (t.simulateTouch && !Nt.ios && !Nt.android || t.simulateTouch && !Ue.touch && Nt.ios) {
                        r.addEventListener("mousedown", e.onTouchStart, false);
                        a.addEventListener("mousemove", e.onTouchMove, o);
                        a.addEventListener("mouseup", e.onTouchEnd, false)
                    }
                }
                if (t.preventClicks || t.preventClicksPropagation) {
                    r.addEventListener("click", e.onClick, true)
                }
            }
            e.on(Nt.ios || Nt.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Xt, true)
        }

        function Rt() {
            const e = this;
            const {
                params: t,
                touchEvents: i,
                el: s,
                wrapperEl: n
            } = e;
            const r = t.touchEventsTarget === "container" ? s : n;
            const o = !!t.nested; {
                if (!Ue.touch && (Ue.pointerEvents || Ue.prefixedPointerEvents)) {
                    r.removeEventListener(i.start, e.onTouchStart, false);
                    a.removeEventListener(i.move, e.onTouchMove, o);
                    a.removeEventListener(i.end, e.onTouchEnd, false)
                } else {
                    if (Ue.touch) {
                        const s = i.start === "onTouchStart" && Ue.passiveListener && t.passiveListeners ? {
                            passive: true,
                            capture: false
                        } : false;
                        r.removeEventListener(i.start, e.onTouchStart, s);
                        r.removeEventListener(i.move, e.onTouchMove, o);
                        r.removeEventListener(i.end, e.onTouchEnd, s)
                    }
                    if (t.simulateTouch && !Nt.ios && !Nt.android || t.simulateTouch && !Ue.touch && Nt.ios) {
                        r.removeEventListener("mousedown", e.onTouchStart, false);
                        a.removeEventListener("mousemove", e.onTouchMove, o);
                        a.removeEventListener("mouseup", e.onTouchEnd, false)
                    }
                }
                if (t.preventClicks || t.preventClicksPropagation) {
                    r.removeEventListener("click", e.onClick, true)
                }
            }
            e.off(Nt.ios || Nt.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Xt)
        }
        var qt = {
            attachEvents: Vt,
            detachEvents: Rt
        };

        function jt() {
            const e = this;
            const {
                activeIndex: t,
                initialized: i,
                loopedSlides: s = 0,
                params: n
            } = e;
            const a = n.breakpoints;
            if (!a || a && Object.keys(a).length === 0) return;
            const r = e.getBreakpoint(a);
            if (r && e.currentBreakpoint !== r) {
                const o = r in a ? a[r] : e.originalParams;
                const l = n.loop && o.slidesPerView !== n.slidesPerView;
                _e.extend(e.params, o);
                _e.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                });
                e.currentBreakpoint = r;
                if (l && i) {
                    e.loopDestroy();
                    e.loopCreate();
                    e.updateSlides();
                    e.slideTo(t - s + e.loopedSlides, 0, false)
                }
                e.emit("breakpoint", o)
            }
        }

        function Wt(e) {
            const t = this;
            if (!e) return undefined;
            let i = false;
            const s = [];
            Object.keys(e).forEach(e => {
                s.push(e)
            });
            s.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
            for (let e = 0; e < s.length; e += 1) {
                const n = s[e];
                if (t.params.breakpointsInverse) {
                    if (n <= r.innerWidth) {
                        i = n
                    }
                } else if (n >= r.innerWidth && !i) {
                    i = n
                }
            }
            return i || "max"
        }
        var _t = {
            setBreakpoint: jt,
            getBreakpoint: Wt
        };
        const Ut = function e() {
            function t() {
                const e = r.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }
            return {
                isIE: !!r.navigator.userAgent.match(/Trident/g) || !!r.navigator.userAgent.match(/MSIE/g),
                isEdge: !!r.navigator.userAgent.match(/Edge/g),
                isSafari: t(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
            }
        }();

        function Kt() {
            const e = this;
            const {
                classNames: t,
                params: i,
                rtl: s,
                $el: n
            } = e;
            const a = [];
            a.push(i.direction);
            if (i.freeMode) {
                a.push("free-mode")
            }
            if (!Ue.flexbox) {
                a.push("no-flexbox")
            }
            if (i.autoHeight) {
                a.push("autoheight")
            }
            if (s) {
                a.push("rtl")
            }
            if (i.slidesPerColumn > 1) {
                a.push("multirow")
            }
            if (Nt.android) {
                a.push("android")
            }
            if (Nt.ios) {
                a.push("ios")
            }
            if ((Ut.isIE || Ut.isEdge) && (Ue.pointerEvents || Ue.prefixedPointerEvents)) {
                a.push(`wp8-${i.direction}`)
            }
            a.forEach(e => {
                t.push(i.containerModifierClass + e)
            });
            n.addClass(t.join(" "))
        }

        function Zt() {
            const e = this;
            const {
                $el: t,
                classNames: i
            } = e;
            t.removeClass(i.join(" "))
        }
        var Jt = {
            addClasses: Kt,
            removeClasses: Zt
        };

        function Qt(e, t, i, s, n, a) {
            let o;

            function l() {
                if (a) a()
            }
            if (!e.complete || !n) {
                if (t) {
                    o = new r.Image;
                    o.onload = l;
                    o.onerror = l;
                    if (s) {
                        o.sizes = s
                    }
                    if (i) {
                        o.srcset = i
                    }
                    if (t) {
                        o.src = t
                    }
                } else {
                    l()
                }
            } else {
                l()
            }
        }

        function ei() {
            const e = this;
            e.imagesToLoad = e.$el.find("img");

            function t() {
                if (typeof e === "undefined" || e === null || !e || e.destroyed) return;
                if (e.imagesLoaded !== undefined) e.imagesLoaded += 1;
                if (e.imagesLoaded === e.imagesToLoad.length) {
                    if (e.params.updateOnImagesReady) e.update();
                    e.emit("imagesReady")
                }
            }
            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                const s = e.imagesToLoad[i];
                e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), true, t)
            }
        }
        var ti = {
            loadImage: Qt,
            preloadImages: ei
        };

        function ii() {
            const e = this;
            const t = e.isLocked;
            e.isLocked = e.snapGrid.length === 1;
            e.allowSlideNext = !e.isLocked;
            e.allowSlidePrev = !e.isLocked;
            if (t !== e.isLocked) e.emit(e.isLocked ? "lock" : "unlock");
            if (t && t !== e.isLocked) {
                e.isEnd = false;
                e.navigation.update()
            }
        }
        var si = {
            checkOverflow: ii
        };
        var ni = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: false,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: .02,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: undefined,
            breakpointsInverse: false,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: false,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchStartPreventDefault: true,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true
        };
        const ai = {
            update: rt,
            translate: pt,
            transition: mt,
            slide: Ct,
            loop: $t,
            grabCursor: Dt,
            manipulation: Ft,
            events: qt,
            breakpoints: _t,
            checkOverflow: si,
            classes: Jt,
            images: ti
        };
        const ri = {};
        class oi extends Ke {
            constructor(...e) {
                let t;
                let i;
                if (e.length === 1 && e[0].constructor && e[0].constructor === Object) {
                    i = e[0]
                } else {
                    [t, i] = e
                }
                if (!i) i = {};
                i = _e.extend({}, i);
                if (t && !i.el) i.el = t;
                super(i);
                Object.keys(ai).forEach(e => {
                    Object.keys(ai[e]).forEach(t => {
                        if (!oi.prototype[t]) {
                            oi.prototype[t] = ai[e][t]
                        }
                    })
                });
                const s = this;
                if (typeof s.modules === "undefined") {
                    s.modules = {}
                }
                Object.keys(s.modules).forEach(e => {
                    const t = s.modules[e];
                    if (t.params) {
                        const e = Object.keys(t.params)[0];
                        const s = t.params[e];
                        if (typeof s !== "object" || s === null) return;
                        if (!(e in i && "enabled" in s)) return;
                        if (i[e] === true) {
                            i[e] = {
                                enabled: true
                            }
                        }
                        if (typeof i[e] === "object" && !("enabled" in i[e])) {
                            i[e].enabled = true
                        }
                        if (!i[e]) i[e] = {
                            enabled: false
                        }
                    }
                });
                const n = _e.extend({}, ni);
                s.useModulesParams(n);
                s.params = _e.extend({}, n, ri, i);
                s.originalParams = _e.extend({}, s.params);
                s.passedParams = _e.extend({}, i);
                s.$ = l;
                const a = l(s.params.el);
                t = a[0];
                if (!t) {
                    return undefined
                }
                if (a.length > 1) {
                    const e = [];
                    a.each((t, s) => {
                        const n = _e.extend({}, i, {
                            el: s
                        });
                        e.push(new oi(n))
                    });
                    return e
                }
                t.swiper = s;
                a.data("swiper", s);
                const r = a.children(`.${s.params.wrapperClass}`);
                _e.extend(s, {
                    $el: a,
                    el: t,
                    $wrapperEl: r,
                    wrapperEl: r[0],
                    classNames: [],
                    slides: l(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return s.params.direction === "horizontal"
                    },
                    isVertical() {
                        return s.params.direction === "vertical"
                    },
                    rtl: t.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl",
                    rtlTranslate: s.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl"),
                    wrongRTL: r.css("display") === "-webkit-box",
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: s.params.allowSlideNext,
                    allowSlidePrev: s.params.allowSlidePrev,
                    touchEvents: function e() {
                        const t = ["touchstart", "touchmove", "touchend"];
                        let i = ["mousedown", "mousemove", "mouseup"];
                        if (Ue.pointerEvents) {
                            i = ["pointerdown", "pointermove", "pointerup"]
                        } else if (Ue.prefixedPointerEvents) {
                            i = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]
                        }
                        s.touchEventsTouch = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        };
                        s.touchEventsDesktop = {
                            start: i[0],
                            move: i[1],
                            end: i[2]
                        };
                        return Ue.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: undefined,
                        isMoved: undefined,
                        allowTouchCallbacks: undefined,
                        touchStartTime: undefined,
                        isScrolling: undefined,
                        currentTranslate: undefined,
                        startTranslate: undefined,
                        allowThresholdMove: undefined,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: _e.now(),
                        clickTimeout: undefined,
                        velocities: [],
                        allowMomentumBounce: undefined,
                        isTouchEvent: undefined,
                        startMoving: undefined
                    },
                    allowClick: true,
                    allowTouchMove: s.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                s.useModules();
                if (s.params.init) {
                    s.init()
                }
                return s
            }
            slidesPerViewDynamic() {
                const e = this;
                const {
                    params: t,
                    slides: i,
                    slidesGrid: s,
                    size: n,
                    activeIndex: a
                } = e;
                let r = 1;
                if (t.centeredSlides) {
                    let e = i[a].swiperSlideSize;
                    let t;
                    for (let s = a + 1; s < i.length; s += 1) {
                        if (i[s] && !t) {
                            e += i[s].swiperSlideSize;
                            r += 1;
                            if (e > n) t = true
                        }
                    }
                    for (let s = a - 1; s >= 0; s -= 1) {
                        if (i[s] && !t) {
                            e += i[s].swiperSlideSize;
                            r += 1;
                            if (e > n) t = true
                        }
                    }
                } else {
                    for (let e = a + 1; e < i.length; e += 1) {
                        if (s[e] - s[a] < n) {
                            r += 1
                        }
                    }
                }
                return r
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {
                    snapGrid: t,
                    params: i
                } = e;
                if (i.breakpoints) {
                    e.setBreakpoint()
                }
                e.updateSize();
                e.updateSlides();
                e.updateProgress();
                e.updateSlidesClasses();

                function s() {
                    const t = e.rtlTranslate ? e.translate * -1 : e.translate;
                    const i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i);
                    e.updateActiveIndex();
                    e.updateSlidesClasses()
                }
                let n;
                if (e.params.freeMode) {
                    s();
                    if (e.params.autoHeight) {
                        e.updateAutoHeight()
                    }
                } else {
                    if ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides) {
                        n = e.slideTo(e.slides.length - 1, 0, false, true)
                    } else {
                        n = e.slideTo(e.activeIndex, 0, false, true)
                    }
                    if (!n) {
                        s()
                    }
                }
                if (i.watchOverflow && t !== e.snapGrid) {
                    e.checkOverflow()
                }
                e.emit("update")
            }
            init() {
                const e = this;
                if (e.initialized) return;
                e.emit("beforeInit");
                if (e.params.breakpoints) {
                    e.setBreakpoint()
                }
                e.addClasses();
                if (e.params.loop) {
                    e.loopCreate()
                }
                e.updateSize();
                e.updateSlides();
                if (e.params.watchOverflow) {
                    e.checkOverflow()
                }
                if (e.params.grabCursor) {
                    e.setGrabCursor()
                }
                if (e.params.preloadImages) {
                    e.preloadImages()
                }
                if (e.params.loop) {
                    e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit)
                } else {
                    e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit)
                }
                e.attachEvents();
                e.initialized = true;
                e.emit("init")
            }
            destroy(e = true, t = true) {
                const i = this;
                const {
                    params: s,
                    $el: n,
                    $wrapperEl: a,
                    slides: r
                } = i;
                if (typeof i.params === "undefined" || i.destroyed) {
                    return null
                }
                i.emit("beforeDestroy");
                i.initialized = false;
                i.detachEvents();
                if (s.loop) {
                    i.loopDestroy()
                }
                if (t) {
                    i.removeClasses();
                    n.removeAttr("style");
                    a.removeAttr("style");
                    if (r && r.length) {
                        r.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")
                    }
                }
                i.emit("destroy");
                Object.keys(i.eventsListeners).forEach(e => {
                    i.off(e)
                });
                if (e !== false) {
                    i.$el[0].swiper = null;
                    i.$el.data("swiper", null);
                    _e.deleteProps(i)
                }
                i.destroyed = true;
                return null
            }
            static extendDefaults(e) {
                _e.extend(ri, e)
            }
            static get extendedDefaults() {
                return ri
            }
            static get defaults() {
                return ni
            }
            static get Class() {
                return Ke
            }
            static get $() {
                return l
            }
        }
        var li = {
            name: "device",
            proto: {
                device: Nt
            },
            static: {
                device: Nt
            }
        };
        var di = {
            name: "support",
            proto: {
                support: Ue
            },
            static: {
                support: Ue
            }
        };
        var ci = {
            name: "browser",
            proto: {
                browser: Ut
            },
            static: {
                browser: Ut
            }
        };
        var pi = {
            name: "resize",
            create() {
                const e = this;
                _e.extend(e, {
                    resize: {
                        resizeHandler() {
                            if (!e || e.destroyed || !e.initialized) return;
                            e.emit("beforeResize");
                            e.emit("resize")
                        },
                        orientationChangeHandler() {
                            if (!e || e.destroyed || !e.initialized) return;
                            e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    r.addEventListener("resize", e.resize.resizeHandler);
                    r.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                },
                destroy() {
                    const e = this;
                    r.removeEventListener("resize", e.resize.resizeHandler);
                    r.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        };
        const fi = {
            func: r.MutationObserver || r.WebkitMutationObserver,
            attach(e, t = {}) {
                const i = this;
                const s = fi.func;
                const n = new s(e => {
                    if (e.length === 1) {
                        i.emit("observerUpdate", e[0]);
                        return
                    }
                    const t = function t() {
                        i.emit("observerUpdate", e[0])
                    };
                    if (r.requestAnimationFrame) {
                        r.requestAnimationFrame(t)
                    } else {
                        r.setTimeout(t, 0)
                    }
                });
                n.observe(e, {
                    attributes: typeof t.attributes === "undefined" ? true : t.attributes,
                    childList: typeof t.childList === "undefined" ? true : t.childList,
                    characterData: typeof t.characterData === "undefined" ? true : t.characterData
                });
                i.observer.observers.push(n)
            },
            init() {
                const e = this;
                if (!Ue.observer || !e.params.observer) return;
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let i = 0; i < t.length; i += 1) {
                        e.observer.attach(t[i])
                    }
                }
                e.observer.attach(e.$el[0], {
                    childList: false
                });
                e.observer.attach(e.$wrapperEl[0], {
                    attributes: false
                })
            },
            destroy() {
                const e = this;
                e.observer.observers.forEach(e => {
                    e.disconnect()
                });
                e.observer.observers = []
            }
        };
        var ui = {
            name: "observer",
            params: {
                observer: false,
                observeParents: false
            },
            create() {
                const e = this;
                _e.extend(e, {
                    observer: {
                        init: fi.init.bind(e),
                        attach: fi.attach.bind(e),
                        destroy: fi.destroy.bind(e),
                        observers: []
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.observer.init()
                },
                destroy() {
                    const e = this;
                    e.observer.destroy()
                }
            }
        };
        const hi = {
            update(e) {
                const t = this;
                const {
                    slidesPerView: i,
                    slidesPerGroup: s,
                    centeredSlides: n
                } = t.params;
                const {
                    addSlidesBefore: a,
                    addSlidesAfter: r
                } = t.params.virtual;
                const {
                    from: o,
                    to: l,
                    slides: d,
                    slidesGrid: c,
                    renderSlide: p,
                    offset: f
                } = t.virtual;
                t.updateActiveIndex();
                const u = t.activeIndex || 0;
                let h;
                if (t.rtlTranslate) h = "right";
                else h = t.isHorizontal() ? "left" : "top";
                let m;
                let g;
                if (n) {
                    m = Math.floor(i / 2) + s + a;
                    g = Math.floor(i / 2) + s + r
                } else {
                    m = i + (s - 1) + a;
                    g = s + r
                }
                const w = Math.max((u || 0) - g, 0);
                const v = Math.min((u || 0) + m, d.length - 1);
                const b = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
                _e.extend(t.virtual, {
                    from: w,
                    to: v,
                    offset: b,
                    slidesGrid: t.slidesGrid
                });

                function y() {
                    t.updateSlides();
                    t.updateProgress();
                    t.updateSlidesClasses();
                    if (t.lazy && t.params.lazy.enabled) {
                        t.lazy.load()
                    }
                }
                if (o === w && l === v && !e) {
                    if (t.slidesGrid !== c && b !== f) {
                        t.slides.css(h, `${b}px`)
                    }
                    t.updateProgress();
                    return
                }
                if (t.params.virtual.renderExternal) {
                    t.params.virtual.renderExternal.call(t, {
                        offset: b,
                        from: w,
                        to: v,
                        slides: function e() {
                            const t = [];
                            for (let e = w; e <= v; e += 1) {
                                t.push(d[e])
                            }
                            return t
                        }()
                    });
                    y();
                    return
                }
                const x = [];
                const E = [];
                if (e) {
                    t.$wrapperEl.find(`.${t.params.slideClass}`).remove()
                } else {
                    for (let e = o; e <= l; e += 1) {
                        if (e < w || e > v) {
                            t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove()
                        }
                    }
                }
                for (let t = 0; t < d.length; t += 1) {
                    if (t >= w && t <= v) {
                        if (typeof l === "undefined" || e) {
                            E.push(t)
                        } else {
                            if (t > l) E.push(t);
                            if (t < o) x.push(t)
                        }
                    }
                }
                E.forEach(e => {
                    t.$wrapperEl.append(p(d[e], e))
                });
                x.sort((e, t) => e < t).forEach(e => {
                    t.$wrapperEl.prepend(p(d[e], e))
                });
                t.$wrapperEl.children(".swiper-slide").css(h, `${b}px`);
                y()
            },
            renderSlide(e, t) {
                const i = this;
                const s = i.params.virtual;
                if (s.cache && i.virtual.cache[t]) {
                    return i.virtual.cache[t]
                }
                const n = s.renderSlide ? l(s.renderSlide.call(i, e, t)) : l(`<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                if (!n.attr("data-swiper-slide-index")) n.attr("data-swiper-slide-index", t);
                if (s.cache) i.virtual.cache[t] = n;
                return n
            },
            appendSlide(e) {
                const t = this;
                t.virtual.slides.push(e);
                t.virtual.update(true)
            },
            prependSlide(e) {
                const t = this;
                t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    const e = t.virtual.cache;
                    const i = {};
                    Object.keys(e).forEach(t => {
                        i[t + 1] = e[t]
                    });
                    t.virtual.cache = i
                }
                t.virtual.update(true);
                t.slideNext(0)
            }
        };
        var mi = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: false,
                    slides: [],
                    cache: true,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    virtual: {
                        update: hi.update.bind(e),
                        appendSlide: hi.appendSlide.bind(e),
                        prependSlide: hi.prependSlide.bind(e),
                        renderSlide: hi.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (!e.params.virtual.enabled) return;
                    e.classNames.push(`${e.params.containerModifierClass}virtual`);
                    const t = {
                        watchSlidesProgress: true
                    };
                    _e.extend(e.params, t);
                    _e.extend(e.originalParams, t);
                    e.virtual.update()
                },
                setTranslate() {
                    const e = this;
                    if (!e.params.virtual.enabled) return;
                    e.virtual.update()
                }
            }
        };
        const gi = {
            handle(e) {
                const t = this;
                const {
                    rtlTranslate: i
                } = t;
                let s = e;
                if (s.originalEvent) s = s.originalEvent;
                const n = s.keyCode || s.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && n === 39 || t.isVertical() && n === 40)) {
                    return false
                }
                if (!t.allowSlidePrev && (t.isHorizontal() && n === 37 || t.isVertical() && n === 38)) {
                    return false
                }
                if (s.shiftKey || s.altKey || s.ctrlKey || s.metaKey) {
                    return undefined
                }
                if (a.activeElement && a.activeElement.nodeName && (a.activeElement.nodeName.toLowerCase() === "input" || a.activeElement.nodeName.toLowerCase() === "textarea")) {
                    return undefined
                }
                if (t.params.keyboard.onlyInViewport && (n === 37 || n === 39 || n === 38 || n === 40)) {
                    let e = false;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && t.$el.parents(`.${t.params.slideActiveClass}`).length === 0) {
                        return undefined
                    }
                    const s = r.innerWidth;
                    const n = r.innerHeight;
                    const a = t.$el.offset();
                    if (i) a.left -= t.$el[0].scrollLeft;
                    const o = [
                        [a.left, a.top],
                        [a.left + t.width, a.top],
                        [a.left, a.top + t.height],
                        [a.left + t.width, a.top + t.height]
                    ];
                    for (let t = 0; t < o.length; t += 1) {
                        const i = o[t];
                        if (i[0] >= 0 && i[0] <= s && i[1] >= 0 && i[1] <= n) {
                            e = true
                        }
                    }
                    if (!e) return undefined
                }
                if (t.isHorizontal()) {
                    if (n === 37 || n === 39) {
                        if (s.preventDefault) s.preventDefault();
                        else s.returnValue = false
                    }
                    if (n === 39 && !i || n === 37 && i) t.slideNext();
                    if (n === 37 && !i || n === 39 && i) t.slidePrev()
                } else {
                    if (n === 38 || n === 40) {
                        if (s.preventDefault) s.preventDefault();
                        else s.returnValue = false
                    }
                    if (n === 40) t.slideNext();
                    if (n === 38) t.slidePrev()
                }
                t.emit("keyPress", n);
                return undefined
            },
            enable() {
                const e = this;
                if (e.keyboard.enabled) return;
                l(a).on("keydown", e.keyboard.handle);
                e.keyboard.enabled = true
            },
            disable() {
                const e = this;
                if (!e.keyboard.enabled) return;
                l(a).off("keydown", e.keyboard.handle);
                e.keyboard.enabled = false
            }
        };
        var wi = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: false,
                    onlyInViewport: true
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    keyboard: {
                        enabled: false,
                        enable: gi.enable.bind(e),
                        disable: gi.disable.bind(e),
                        handle: gi.handle.bind(e)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    if (e.params.keyboard.enabled) {
                        e.keyboard.enable()
                    }
                },
                destroy() {
                    const e = this;
                    if (e.keyboard.enabled) {
                        e.keyboard.disable()
                    }
                }
            }
        };

        function vi() {
            const e = "onwheel";
            let t = e in a;
            if (!t) {
                const i = a.createElement("div");
                i.setAttribute(e, "return;");
                t = typeof i[e] === "function"
            }
            if (!t && a.implementation && a.implementation.hasFeature && a.implementation.hasFeature("", "") !== true) {
                t = a.implementation.hasFeature("Events.wheel", "3.0")
            }
            return t
        }
        const bi = {
            lastScrollTime: _e.now(),
            event: function e() {
                if (r.navigator.userAgent.indexOf("firefox") > -1) return "DOMMouseScroll";
                return vi() ? "wheel" : "mousewheel"
            }(),
            normalize(e) {
                const t = 10;
                const i = 40;
                const s = 800;
                let n = 0;
                let a = 0;
                let r = 0;
                let o = 0;
                if ("detail" in e) {
                    a = e.detail
                }
                if ("wheelDelta" in e) {
                    a = -e.wheelDelta / 120
                }
                if ("wheelDeltaY" in e) {
                    a = -e.wheelDeltaY / 120
                }
                if ("wheelDeltaX" in e) {
                    n = -e.wheelDeltaX / 120
                }
                if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
                    n = a;
                    a = 0
                }
                r = n * t;
                o = a * t;
                if ("deltaY" in e) {
                    o = e.deltaY
                }
                if ("deltaX" in e) {
                    r = e.deltaX
                }
                if ((r || o) && e.deltaMode) {
                    if (e.deltaMode === 1) {
                        r *= i;
                        o *= i
                    } else {
                        r *= s;
                        o *= s
                    }
                }
                if (r && !n) {
                    n = r < 1 ? -1 : 1
                }
                if (o && !a) {
                    a = o < 1 ? -1 : 1
                }
                return {
                    spinX: n,
                    spinY: a,
                    pixelX: r,
                    pixelY: o
                }
            },
            handleMouseEnter() {
                const e = this;
                e.mouseEntered = true
            },
            handleMouseLeave() {
                const e = this;
                e.mouseEntered = false
            },
            handle(e) {
                let t = e;
                const i = this;
                const s = i.params.mousewheel;
                if (!i.mouseEntered && !s.releaseOnEdges) return true;
                if (t.originalEvent) t = t.originalEvent;
                let n = 0;
                const a = i.rtlTranslate ? -1 : 1;
                const o = bi.normalize(t);
                if (s.forceToAxis) {
                    if (i.isHorizontal()) {
                        if (Math.abs(o.pixelX) > Math.abs(o.pixelY)) n = o.pixelX * a;
                        else return true
                    } else if (Math.abs(o.pixelY) > Math.abs(o.pixelX)) n = o.pixelY;
                    else return true
                } else {
                    n = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * a : -o.pixelY
                }
                if (n === 0) return true;
                if (s.invert) n = -n;
                if (!i.params.freeMode) {
                    if (_e.now() - i.mousewheel.lastScrollTime > 60) {
                        if (n < 0) {
                            if ((!i.isEnd || i.params.loop) && !i.animating) {
                                i.slideNext();
                                i.emit("scroll", t)
                            } else if (s.releaseOnEdges) return true
                        } else if ((!i.isBeginning || i.params.loop) && !i.animating) {
                            i.slidePrev();
                            i.emit("scroll", t)
                        } else if (s.releaseOnEdges) return true
                    }
                    i.mousewheel.lastScrollTime = (new r.Date).getTime()
                } else {
                    if (i.params.loop) {
                        i.loopFix()
                    }
                    let e = i.getTranslate() + n * s.sensitivity;
                    const a = i.isBeginning;
                    const r = i.isEnd;
                    if (e >= i.minTranslate()) e = i.minTranslate();
                    if (e <= i.maxTranslate()) e = i.maxTranslate();
                    i.setTransition(0);
                    i.setTranslate(e);
                    i.updateProgress();
                    i.updateActiveIndex();
                    i.updateSlidesClasses();
                    if (!a && i.isBeginning || !r && i.isEnd) {
                        i.updateSlidesClasses()
                    }
                    if (i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout);
                        i.mousewheel.timeout = _e.nextTick(() => {
                            i.slideToClosest()
                        }, 300)
                    }
                    i.emit("scroll", t);
                    if (i.params.autoplay && i.params.autoplayDisableOnInteraction) i.autoplay.stop();
                    if (e === i.minTranslate() || e === i.maxTranslate()) return true
                }
                if (t.preventDefault) t.preventDefault();
                else t.returnValue = false;
                return false
            },
            enable() {
                const e = this;
                if (!bi.event) return false;
                if (e.mousewheel.enabled) return false;
                let t = e.$el;
                if (e.params.mousewheel.eventsTarged !== "container") {
                    t = l(e.params.mousewheel.eventsTarged)
                }
                t.on("mouseenter", e.mousewheel.handleMouseEnter);
                t.on("mouseleave", e.mousewheel.handleMouseLeave);
                t.on(bi.event, e.mousewheel.handle);
                e.mousewheel.enabled = true;
                return true
            },
            disable() {
                const e = this;
                if (!bi.event) return false;
                if (!e.mousewheel.enabled) return false;
                let t = e.$el;
                if (e.params.mousewheel.eventsTarged !== "container") {
                    t = l(e.params.mousewheel.eventsTarged)
                }
                t.off(bi.event, e.mousewheel.handle);
                e.mousewheel.enabled = false;
                return true
            }
        };
        var yi = {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: false,
                    releaseOnEdges: false,
                    invert: false,
                    forceToAxis: false,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    mousewheel: {
                        enabled: false,
                        enable: bi.enable.bind(e),
                        disable: bi.disable.bind(e),
                        handle: bi.handle.bind(e),
                        handleMouseEnter: bi.handleMouseEnter.bind(e),
                        handleMouseLeave: bi.handleMouseLeave.bind(e),
                        lastScrollTime: _e.now()
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    if (e.params.mousewheel.enabled) e.mousewheel.enable()
                },
                destroy() {
                    const e = this;
                    if (e.mousewheel.enabled) e.mousewheel.disable()
                }
            }
        };
        const xi = {
            update() {
                const e = this;
                const t = e.params.navigation;
                if (e.params.loop) return;
                const {
                    $nextEl: i,
                    $prevEl: s
                } = e.navigation;
                if (s && s.length > 0) {
                    if (e.isBeginning) {
                        s.addClass(t.disabledClass)
                    } else {
                        s.removeClass(t.disabledClass)
                    }
                    s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
                if (i && i.length > 0) {
                    if (e.isEnd) {
                        i.addClass(t.disabledClass)
                    } else {
                        i.removeClass(t.disabledClass)
                    }
                    i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            init() {
                const e = this;
                const t = e.params.navigation;
                if (!(t.nextEl || t.prevEl)) return;
                let i;
                let s;
                if (t.nextEl) {
                    i = l(t.nextEl);
                    if (e.params.uniqueNavElements && typeof t.nextEl === "string" && i.length > 1 && e.$el.find(t.nextEl).length === 1) {
                        i = e.$el.find(t.nextEl)
                    }
                }
                if (t.prevEl) {
                    s = l(t.prevEl);
                    if (e.params.uniqueNavElements && typeof t.prevEl === "string" && s.length > 1 && e.$el.find(t.prevEl).length === 1) {
                        s = e.$el.find(t.prevEl)
                    }
                }
                if (i && i.length > 0) {
                    i.on("click", t => {
                        t.preventDefault();
                        if (e.isEnd && !e.params.loop) return;
                        e.slideNext()
                    })
                }
                if (s && s.length > 0) {
                    s.on("click", t => {
                        t.preventDefault();
                        if (e.isBeginning && !e.params.loop) return;
                        e.slidePrev()
                    })
                }
                _e.extend(e.navigation, {
                    $nextEl: i,
                    nextEl: i && i[0],
                    $prevEl: s,
                    prevEl: s && s[0]
                })
            },
            destroy() {
                const e = this;
                const {
                    $nextEl: t,
                    $prevEl: i
                } = e.navigation;
                if (t && t.length) {
                    t.off("click");
                    t.removeClass(e.params.navigation.disabledClass)
                }
                if (i && i.length) {
                    i.off("click");
                    i.removeClass(e.params.navigation.disabledClass)
                }
            }
        };
        var Ei = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    navigation: {
                        init: xi.init.bind(e),
                        update: xi.update.bind(e),
                        destroy: xi.destroy.bind(e)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.navigation.init();
                    e.navigation.update()
                },
                toEdge() {
                    const e = this;
                    e.navigation.update()
                },
                fromEdge() {
                    const e = this;
                    e.navigation.update()
                },
                destroy() {
                    const e = this;
                    e.navigation.destroy()
                },
                click(e) {
                    const t = this;
                    const {
                        $nextEl: i,
                        $prevEl: s
                    } = t.navigation;
                    if (t.params.navigation.hideOnClick && !l(e.target).is(s) && !l(e.target).is(i)) {
                        if (i) i.toggleClass(t.params.navigation.hiddenClass);
                        if (s) s.toggleClass(t.params.navigation.hiddenClass)
                    }
                }
            }
        };
        const Ci = {
            update() {
                const e = this;
                const t = e.rtl;
                const i = e.params.pagination;
                if (!i.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
                const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
                const n = e.pagination.$el;
                let a;
                const r = e.params.loop ? Math.ceil((s - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop) {
                    a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup);
                    if (a > s - 1 - e.loopedSlides * 2) {
                        a -= s - e.loopedSlides * 2
                    }
                    if (a > r - 1) a -= r;
                    if (a < 0 && e.params.paginationType !== "bullets") a = r + a
                } else if (typeof e.snapIndex !== "undefined") {
                    a = e.snapIndex
                } else {
                    a = e.activeIndex || 0
                }
                if (i.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    const s = e.pagination.bullets;
                    let r;
                    let o;
                    let d;
                    if (i.dynamicBullets) {
                        e.pagination.bulletSize = s.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        n.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize*(i.dynamicMainBullets+4)}px`);
                        if (i.dynamicMainBullets > 1 && e.previousIndex !== undefined) {
                            e.pagination.dynamicBulletIndex += a - e.previousIndex;
                            if (e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1) {
                                e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1
                            } else if (e.pagination.dynamicBulletIndex < 0) {
                                e.pagination.dynamicBulletIndex = 0
                            }
                        }
                        r = a - e.pagination.dynamicBulletIndex;
                        o = r + (Math.min(s.length, i.dynamicMainBullets) - 1);
                        d = (o + r) / 2
                    }
                    s.removeClass(`${i.bulletActiveClass} ${i.bulletActiveClass}-next ${i.bulletActiveClass}-next-next ${i.bulletActiveClass}-prev ${i.bulletActiveClass}-prev-prev ${i.bulletActiveClass}-main`);
                    if (n.length > 1) {
                        s.each((e, t) => {
                            const s = l(t);
                            const n = s.index();
                            if (n === a) {
                                s.addClass(i.bulletActiveClass)
                            }
                            if (i.dynamicBullets) {
                                if (n >= r && n <= o) {
                                    s.addClass(`${i.bulletActiveClass}-main`)
                                }
                                if (n === r) {
                                    s.prev().addClass(`${i.bulletActiveClass}-prev`).prev().addClass(`${i.bulletActiveClass}-prev-prev`)
                                }
                                if (n === o) {
                                    s.next().addClass(`${i.bulletActiveClass}-next`).next().addClass(`${i.bulletActiveClass}-next-next`)
                                }
                            }
                        })
                    } else {
                        const e = s.eq(a);
                        e.addClass(i.bulletActiveClass);
                        if (i.dynamicBullets) {
                            const e = s.eq(r);
                            const t = s.eq(o);
                            for (let e = r; e <= o; e += 1) {
                                s.eq(e).addClass(`${i.bulletActiveClass}-main`)
                            }
                            e.prev().addClass(`${i.bulletActiveClass}-prev`).prev().addClass(`${i.bulletActiveClass}-prev-prev`);
                            t.next().addClass(`${i.bulletActiveClass}-next`).next().addClass(`${i.bulletActiveClass}-next-next`)
                        }
                    }
                    if (i.dynamicBullets) {
                        const n = Math.min(s.length, i.dynamicMainBullets + 4);
                        const a = (e.pagination.bulletSize * n - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize;
                        const r = t ? "right" : "left";
                        s.css(e.isHorizontal() ? r : "top", `${a}px`)
                    }
                }
                if (i.type === "fraction") {
                    n.find(`.${i.currentClass}`).text(i.formatFractionCurrent(a + 1));
                    n.find(`.${i.totalClass}`).text(i.formatFractionTotal(r))
                }
                if (i.type === "progressbar") {
                    let t;
                    if (i.progressbarOpposite) {
                        t = e.isHorizontal() ? "vertical" : "horizontal"
                    } else {
                        t = e.isHorizontal() ? "horizontal" : "vertical"
                    }
                    const s = (a + 1) / r;
                    let o = 1;
                    let l = 1;
                    if (t === "horizontal") {
                        o = s
                    } else {
                        l = s
                    }
                    n.find(`.${i.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`).transition(e.params.speed)
                }
                if (i.type === "custom" && i.renderCustom) {
                    n.html(i.renderCustom(e, a + 1, r));
                    e.emit("paginationRender", e, n[0])
                } else {
                    e.emit("paginationUpdate", e, n[0])
                }
                n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
            },
            render() {
                const e = this;
                const t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
                const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
                const s = e.pagination.$el;
                let n = "";
                if (t.type === "bullets") {
                    const a = e.params.loop ? Math.ceil((i - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
                    for (let i = 0; i < a; i += 1) {
                        if (t.renderBullet) {
                            n += t.renderBullet.call(e, i, t.bulletClass)
                        } else {
                            n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`
                        }
                    }
                    s.html(n);
                    e.pagination.bullets = s.find(`.${t.bulletClass}`)
                }
                if (t.type === "fraction") {
                    if (t.renderFraction) {
                        n = t.renderFraction.call(e, t.currentClass, t.totalClass)
                    } else {
                        n = `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`
                    }
                    s.html(n)
                }
                if (t.type === "progressbar") {
                    if (t.renderProgressbar) {
                        n = t.renderProgressbar.call(e, t.progressbarFillClass)
                    } else {
                        n = `<span class="${t.progressbarFillClass}"></span>`
                    }
                    s.html(n)
                }
                if (t.type !== "custom") {
                    e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init() {
                const e = this;
                const t = e.params.pagination;
                if (!t.el) return;
                let i = l(t.el);
                if (i.length === 0) return;
                if (e.params.uniqueNavElements && typeof t.el === "string" && i.length > 1 && e.$el.find(t.el).length === 1) {
                    i = e.$el.find(t.el)
                }
                if (t.type === "bullets" && t.clickable) {
                    i.addClass(t.clickableClass)
                }
                i.addClass(t.modifierClass + t.type);
                if (t.type === "bullets" && t.dynamicBullets) {
                    i.addClass(`${t.modifierClass}${t.type}-dynamic`);
                    e.pagination.dynamicBulletIndex = 0;
                    if (t.dynamicMainBullets < 1) {
                        t.dynamicMainBullets = 1
                    }
                }
                if (t.type === "progressbar" && t.progressbarOpposite) {
                    i.addClass(t.progressbarOppositeClass)
                }
                if (t.clickable) {
                    i.on("click", `.${t.bulletClass}`, function t(i) {
                        i.preventDefault();
                        let s = l(this).index() * e.params.slidesPerGroup;
                        if (e.params.loop) s += e.loopedSlides;
                        e.slideTo(s)
                    })
                }
                _e.extend(e.pagination, {
                    $el: i,
                    el: i[0]
                })
            },
            destroy() {
                const e = this;
                const t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
                const i = e.pagination.$el;
                i.removeClass(t.hiddenClass);
                i.removeClass(t.modifierClass + t.type);
                if (e.pagination.bullets) e.pagination.bullets.removeClass(t.bulletActiveClass);
                if (t.clickable) {
                    i.off("click", `.${t.bulletClass}`)
                }
            }
        };
        var Ti = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    pagination: {
                        init: Ci.init.bind(e),
                        render: Ci.render.bind(e),
                        update: Ci.update.bind(e),
                        destroy: Ci.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.pagination.init();
                    e.pagination.render();
                    e.pagination.update()
                },
                activeIndexChange() {
                    const e = this;
                    if (e.params.loop) {
                        e.pagination.update()
                    } else if (typeof e.snapIndex === "undefined") {
                        e.pagination.update()
                    }
                },
                snapIndexChange() {
                    const e = this;
                    if (!e.params.loop) {
                        e.pagination.update()
                    }
                },
                slidesLengthChange() {
                    const e = this;
                    if (e.params.loop) {
                        e.pagination.render();
                        e.pagination.update()
                    }
                },
                snapGridLengthChange() {
                    const e = this;
                    if (!e.params.loop) {
                        e.pagination.render();
                        e.pagination.update()
                    }
                },
                destroy() {
                    const e = this;
                    e.pagination.destroy()
                },
                click(e) {
                    const t = this;
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !l(e.target).hasClass(t.params.pagination.bulletClass)) {
                        t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                    }
                }
            }
        };
        const Si = {
            setTranslate() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const {
                    scrollbar: t,
                    rtlTranslate: i,
                    progress: s
                } = e;
                const {
                    dragSize: n,
                    trackSize: a,
                    $dragEl: r,
                    $el: o
                } = t;
                const l = e.params.scrollbar;
                let d = n;
                let c = (a - n) * s;
                if (i) {
                    c = -c;
                    if (c > 0) {
                        d = n - c;
                        c = 0
                    } else if (-c + n > a) {
                        d = a + c
                    }
                } else if (c < 0) {
                    d = n + c;
                    c = 0
                } else if (c + n > a) {
                    d = a - c
                }
                if (e.isHorizontal()) {
                    if (Ue.transforms3d) {
                        r.transform(`translate3d(${c}px, 0, 0)`)
                    } else {
                        r.transform(`translateX(${c}px)`)
                    }
                    r[0].style.width = `${d}px`
                } else {
                    if (Ue.transforms3d) {
                        r.transform(`translate3d(0px, ${c}px, 0)`)
                    } else {
                        r.transform(`translateY(${c}px)`)
                    }
                    r[0].style.height = `${d}px`
                }
                if (l.hide) {
                    clearTimeout(e.scrollbar.timeout);
                    o[0].style.opacity = 1;
                    e.scrollbar.timeout = setTimeout(() => {
                        o[0].style.opacity = 0;
                        o.transition(400)
                    }, 1e3)
                }
            },
            setTransition(e) {
                const t = this;
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                t.scrollbar.$dragEl.transition(e)
            },
            updateSize() {
                const e = this;
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const {
                    scrollbar: t
                } = e;
                const {
                    $dragEl: i,
                    $el: s
                } = t;
                i[0].style.width = "";
                i[0].style.height = "";
                const n = e.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight;
                const a = e.size / e.virtualSize;
                const r = a * (n / e.size);
                let o;
                if (e.params.scrollbar.dragSize === "auto") {
                    o = n * a
                } else {
                    o = parseInt(e.params.scrollbar.dragSize, 10)
                }
                if (e.isHorizontal()) {
                    i[0].style.width = `${o}px`
                } else {
                    i[0].style.height = `${o}px`
                }
                if (a >= 1) {
                    s[0].style.display = "none"
                } else {
                    s[0].style.display = ""
                }
                if (e.params.scrollbarHide) {
                    s[0].style.opacity = 0
                }
                _e.extend(t, {
                    trackSize: n,
                    divider: a,
                    moveDivider: r,
                    dragSize: o
                });
                t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            },
            setDragPosition(e) {
                const t = this;
                const {
                    scrollbar: i,
                    rtlTranslate: s
                } = t;
                const {
                    $el: n,
                    dragSize: a,
                    trackSize: r
                } = i;
                let o;
                if (t.isHorizontal()) {
                    o = e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX || e.clientX
                } else {
                    o = e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY || e.clientY
                }
                let l;
                l = (o - n.offset()[t.isHorizontal() ? "left" : "top"] - a / 2) / (r - a);
                l = Math.max(Math.min(l, 1), 0);
                if (s) {
                    l = 1 - l
                }
                const d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * l;
                t.updateProgress(d);
                t.setTranslate(d);
                t.updateActiveIndex();
                t.updateSlidesClasses()
            },
            onDragStart(e) {
                const t = this;
                const i = t.params.scrollbar;
                const {
                    scrollbar: s,
                    $wrapperEl: n
                } = t;
                const {
                    $el: a,
                    $dragEl: r
                } = s;
                t.scrollbar.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
                n.transition(100);
                r.transition(100);
                s.setDragPosition(e);
                clearTimeout(t.scrollbar.dragTimeout);
                a.transition(0);
                if (i.hide) {
                    a.css("opacity", 1)
                }
                t.emit("scrollbarDragStart", e)
            },
            onDragMove(e) {
                const t = this;
                const {
                    scrollbar: i,
                    $wrapperEl: s
                } = t;
                const {
                    $el: n,
                    $dragEl: a
                } = i;
                if (!t.scrollbar.isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                i.setDragPosition(e);
                s.transition(0);
                n.transition(0);
                a.transition(0);
                t.emit("scrollbarDragMove", e)
            },
            onDragEnd(e) {
                const t = this;
                const i = t.params.scrollbar;
                const {
                    scrollbar: s
                } = t;
                const {
                    $el: n
                } = s;
                if (!t.scrollbar.isTouched) return;
                t.scrollbar.isTouched = false;
                if (i.hide) {
                    clearTimeout(t.scrollbar.dragTimeout);
                    t.scrollbar.dragTimeout = _e.nextTick(() => {
                        n.css("opacity", 0);
                        n.transition(400)
                    }, 1e3)
                }
                t.emit("scrollbarDragEnd", e);
                if (i.snapOnRelease) {
                    t.slideToClosest()
                }
            },
            enableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el) return;
                const {
                    scrollbar: t,
                    touchEvents: i,
                    touchEventsDesktop: s,
                    params: n
                } = e;
                const r = t.$el;
                const o = r[0];
                const l = Ue.passiveListener && n.passiveListeners ? {
                    passive: false,
                    capture: false
                } : false;
                const d = Ue.passiveListener && n.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (!Ue.touch && (Ue.pointerEvents || Ue.prefixedPointerEvents)) {
                    o.addEventListener(s.start, e.scrollbar.onDragStart, l);
                    a.addEventListener(s.move, e.scrollbar.onDragMove, l);
                    a.addEventListener(s.end, e.scrollbar.onDragEnd, d)
                } else {
                    if (Ue.touch) {
                        o.addEventListener(i.start, e.scrollbar.onDragStart, l);
                        o.addEventListener(i.move, e.scrollbar.onDragMove, l);
                        o.addEventListener(i.end, e.scrollbar.onDragEnd, d)
                    }
                    if (n.simulateTouch && !Nt.ios && !Nt.android || n.simulateTouch && !Ue.touch && Nt.ios) {
                        o.addEventListener("mousedown", e.scrollbar.onDragStart, l);
                        a.addEventListener("mousemove", e.scrollbar.onDragMove, l);
                        a.addEventListener("mouseup", e.scrollbar.onDragEnd, d)
                    }
                }
            },
            disableDraggable() {
                const e = this;
                if (!e.params.scrollbar.el) return;
                const {
                    scrollbar: t,
                    touchEvents: i,
                    touchEventsDesktop: s,
                    params: n
                } = e;
                const r = t.$el;
                const o = r[0];
                const l = Ue.passiveListener && n.passiveListeners ? {
                    passive: false,
                    capture: false
                } : false;
                const d = Ue.passiveListener && n.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (!Ue.touch && (Ue.pointerEvents || Ue.prefixedPointerEvents)) {
                    o.removeEventListener(s.start, e.scrollbar.onDragStart, l);
                    a.removeEventListener(s.move, e.scrollbar.onDragMove, l);
                    a.removeEventListener(s.end, e.scrollbar.onDragEnd, d)
                } else {
                    if (Ue.touch) {
                        o.removeEventListener(i.start, e.scrollbar.onDragStart, l);
                        o.removeEventListener(i.move, e.scrollbar.onDragMove, l);
                        o.removeEventListener(i.end, e.scrollbar.onDragEnd, d)
                    }
                    if (n.simulateTouch && !Nt.ios && !Nt.android || n.simulateTouch && !Ue.touch && Nt.ios) {
                        o.removeEventListener("mousedown", e.scrollbar.onDragStart, l);
                        a.removeEventListener("mousemove", e.scrollbar.onDragMove, l);
                        a.removeEventListener("mouseup", e.scrollbar.onDragEnd, d)
                    }
                }
            },
            init() {
                const e = this;
                if (!e.params.scrollbar.el) return;
                const {
                    scrollbar: t,
                    $el: i
                } = e;
                const s = e.params.scrollbar;
                let n = l(s.el);
                if (e.params.uniqueNavElements && typeof s.el === "string" && n.length > 1 && i.find(s.el).length === 1) {
                    n = i.find(s.el)
                }
                let a = n.find(`.${e.params.scrollbar.dragClass}`);
                if (a.length === 0) {
                    a = l(`<div class="${e.params.scrollbar.dragClass}"></div>`);
                    n.append(a)
                }
                _e.extend(t, {
                    $el: n,
                    el: n[0],
                    $dragEl: a,
                    dragEl: a[0]
                });
                if (s.draggable) {
                    t.enableDraggable()
                }
            },
            destroy() {
                const e = this;
                e.scrollbar.disableDraggable()
            }
        };
        var ki = {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: false,
                    draggable: false,
                    snapOnRelease: true,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    scrollbar: {
                        init: Si.init.bind(e),
                        destroy: Si.destroy.bind(e),
                        updateSize: Si.updateSize.bind(e),
                        setTranslate: Si.setTranslate.bind(e),
                        setTransition: Si.setTransition.bind(e),
                        enableDraggable: Si.enableDraggable.bind(e),
                        disableDraggable: Si.disableDraggable.bind(e),
                        setDragPosition: Si.setDragPosition.bind(e),
                        onDragStart: Si.onDragStart.bind(e),
                        onDragMove: Si.onDragMove.bind(e),
                        onDragEnd: Si.onDragEnd.bind(e),
                        isTouched: false,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    e.scrollbar.init();
                    e.scrollbar.updateSize();
                    e.scrollbar.setTranslate()
                },
                update() {
                    const e = this;
                    e.scrollbar.updateSize()
                },
                resize() {
                    const e = this;
                    e.scrollbar.updateSize()
                },
                observerUpdate() {
                    const e = this;
                    e.scrollbar.updateSize()
                },
                setTranslate() {
                    const e = this;
                    e.scrollbar.setTranslate()
                },
                setTransition(e) {
                    const t = this;
                    t.scrollbar.setTransition(e)
                },
                destroy() {
                    const e = this;
                    e.scrollbar.destroy()
                }
            }
        };
        const $i = {
            setTransform(e, t) {
                const i = this;
                const {
                    rtl: s
                } = i;
                const n = l(e);
                const a = s ? -1 : 1;
                const r = n.attr("data-swiper-parallax") || "0";
                let o = n.attr("data-swiper-parallax-x");
                let d = n.attr("data-swiper-parallax-y");
                const c = n.attr("data-swiper-parallax-scale");
                const p = n.attr("data-swiper-parallax-opacity");
                if (o || d) {
                    o = o || "0";
                    d = d || "0"
                } else if (i.isHorizontal()) {
                    o = r;
                    d = "0"
                } else {
                    d = r;
                    o = "0"
                }
                if (o.indexOf("%") >= 0) {
                    o = `${parseInt(o,10)*t*a}%`
                } else {
                    o = `${o*t*a}px`
                }
                if (d.indexOf("%") >= 0) {
                    d = `${parseInt(d,10)*t}%`
                } else {
                    d = `${d*t}px`
                }
                if (typeof p !== "undefined" && p !== null) {
                    const e = p - (p - 1) * (1 - Math.abs(t));
                    n[0].style.opacity = e
                }
                if (typeof c === "undefined" || c === null) {
                    n.transform(`translate3d(${o}, ${d}, 0px)`)
                } else {
                    const e = c - (c - 1) * (1 - Math.abs(t));
                    n.transform(`translate3d(${o}, ${d}, 0px) scale(${e})`)
                }
            },
            setTranslate() {
                const e = this;
                const {
                    $el: t,
                    slides: i,
                    progress: s,
                    snapGrid: n
                } = e;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, i) => {
                    e.parallax.setTransform(i, s)
                });
                i.each((t, i) => {
                    let a = i.progress;
                    if (e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto") {
                        a += Math.ceil(t / 2) - s * (n.length - 1)
                    }
                    a = Math.min(Math.max(a, -1), 1);
                    l(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, i) => {
                        e.parallax.setTransform(i, a)
                    })
                })
            },
            setTransition(e = this.params.speed) {
                const t = this;
                const {
                    $el: i
                } = t;
                i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((t, i) => {
                    const s = l(i);
                    let n = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    if (e === 0) n = 0;
                    s.transition(n)
                })
            }
        };
        var Mi = {
            name: "parallax",
            params: {
                parallax: {
                    enabled: false
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    parallax: {
                        setTransform: $i.setTransform.bind(e),
                        setTranslate: $i.setTranslate.bind(e),
                        setTransition: $i.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (!e.params.parallax.enabled) return;
                    e.params.watchSlidesProgress = true;
                    e.originalParams.watchSlidesProgress = true
                },
                init() {
                    const e = this;
                    if (!e.params.parallax) return;
                    e.parallax.setTranslate()
                },
                setTranslate() {
                    const e = this;
                    if (!e.params.parallax) return;
                    e.parallax.setTranslate()
                },
                setTransition(e) {
                    const t = this;
                    if (!t.params.parallax) return;
                    t.parallax.setTransition(e)
                }
            }
        };
        const zi = {
            getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2) return 1;
                const t = e.targetTouches[0].pageX;
                const i = e.targetTouches[0].pageY;
                const s = e.targetTouches[1].pageX;
                const n = e.targetTouches[1].pageY;
                const a = Math.sqrt((s - t) ** 2 + (n - i) ** 2);
                return a
            },
            onGestureStart(e) {
                const t = this;
                const i = t.params.zoom;
                const s = t.zoom;
                const {
                    gesture: n
                } = s;
                s.fakeGestureTouched = false;
                s.fakeGestureMoved = false;
                if (!Ue.gestures) {
                    if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2) {
                        return
                    }
                    s.fakeGestureTouched = true;
                    n.scaleStart = zi.getDistanceBetweenTouches(e)
                }
                if (!n.$slideEl || !n.$slideEl.length) {
                    n.$slideEl = l(e.target).closest(".swiper-slide");
                    if (n.$slideEl.length === 0) n.$slideEl = t.slides.eq(t.activeIndex);
                    n.$imageEl = n.$slideEl.find("img, svg, canvas");
                    n.$imageWrapEl = n.$imageEl.parent(`.${i.containerClass}`);
                    n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio;
                    if (n.$imageWrapEl.length === 0) {
                        n.$imageEl = undefined;
                        return
                    }
                }
                n.$imageEl.transition(0);
                t.zoom.isScaling = true
            },
            onGestureChange(e) {
                const t = this;
                const i = t.params.zoom;
                const s = t.zoom;
                const {
                    gesture: n
                } = s;
                if (!Ue.gestures) {
                    if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2) {
                        return
                    }
                    s.fakeGestureMoved = true;
                    n.scaleMove = zi.getDistanceBetweenTouches(e)
                }
                if (!n.$imageEl || n.$imageEl.length === 0) return;
                if (Ue.gestures) {
                    t.zoom.scale = e.scale * s.currentScale
                } else {
                    s.scale = n.scaleMove / n.scaleStart * s.currentScale
                }
                if (s.scale > n.maxRatio) {
                    s.scale = n.maxRatio - 1 + (s.scale - n.maxRatio + 1) ** .5
                }
                if (s.scale < i.minRatio) {
                    s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** .5
                }
                n.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)
            },
            onGestureEnd(e) {
                const t = this;
                const i = t.params.zoom;
                const s = t.zoom;
                const {
                    gesture: n
                } = s;
                if (!Ue.gestures) {
                    if (!s.fakeGestureTouched || !s.fakeGestureMoved) {
                        return
                    }
                    if (e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !Nt.android) {
                        return
                    }
                    s.fakeGestureTouched = false;
                    s.fakeGestureMoved = false
                }
                if (!n.$imageEl || n.$imageEl.length === 0) return;
                s.scale = Math.max(Math.min(s.scale, n.maxRatio), i.minRatio);
                n.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${s.scale})`);
                s.currentScale = s.scale;
                s.isScaling = false;
                if (s.scale === 1) n.$slideEl = undefined
            },
            onTouchStart(e) {
                const t = this;
                const i = t.zoom;
                const {
                    gesture: s,
                    image: n
                } = i;
                if (!s.$imageEl || s.$imageEl.length === 0) return;
                if (n.isTouched) return;
                if (Nt.android) e.preventDefault();
                n.isTouched = true;
                n.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
                n.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY
            },
            onTouchMove(e) {
                const t = this;
                const i = t.zoom;
                const {
                    gesture: s,
                    image: n,
                    velocity: a
                } = i;
                if (!s.$imageEl || s.$imageEl.length === 0) return;
                t.allowClick = false;
                if (!n.isTouched || !s.$slideEl) return;
                if (!n.isMoved) {
                    n.width = s.$imageEl[0].offsetWidth;
                    n.height = s.$imageEl[0].offsetHeight;
                    n.startX = _e.getTranslate(s.$imageWrapEl[0], "x") || 0;
                    n.startY = _e.getTranslate(s.$imageWrapEl[0], "y") || 0;
                    s.slideWidth = s.$slideEl[0].offsetWidth;
                    s.slideHeight = s.$slideEl[0].offsetHeight;
                    s.$imageWrapEl.transition(0);
                    if (t.rtl) {
                        n.startX = -n.startX;
                        n.startY = -n.startY
                    }
                }
                const r = n.width * i.scale;
                const o = n.height * i.scale;
                if (r < s.slideWidth && o < s.slideHeight) return;
                n.minX = Math.min(s.slideWidth / 2 - r / 2, 0);
                n.maxX = -n.minX;
                n.minY = Math.min(s.slideHeight / 2 - o / 2, 0);
                n.maxY = -n.minY;
                n.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
                n.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
                if (!n.isMoved && !i.isScaling) {
                    if (t.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) {
                        n.isTouched = false;
                        return
                    }
                    if (!t.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) {
                        n.isTouched = false;
                        return
                    }
                }
                e.preventDefault();
                e.stopPropagation();
                n.isMoved = true;
                n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX;
                n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY;
                if (n.currentX < n.minX) {
                    n.currentX = n.minX + 1 - (n.minX - n.currentX + 1) ** .8
                }
                if (n.currentX > n.maxX) {
                    n.currentX = n.maxX - 1 + (n.currentX - n.maxX + 1) ** .8
                }
                if (n.currentY < n.minY) {
                    n.currentY = n.minY + 1 - (n.minY - n.currentY + 1) ** .8
                }
                if (n.currentY > n.maxY) {
                    n.currentY = n.maxY - 1 + (n.currentY - n.maxY + 1) ** .8
                }
                if (!a.prevPositionX) a.prevPositionX = n.touchesCurrent.x;
                if (!a.prevPositionY) a.prevPositionY = n.touchesCurrent.y;
                if (!a.prevTime) a.prevTime = Date.now();
                a.x = (n.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2;
                a.y = (n.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2;
                if (Math.abs(n.touchesCurrent.x - a.prevPositionX) < 2) a.x = 0;
                if (Math.abs(n.touchesCurrent.y - a.prevPositionY) < 2) a.y = 0;
                a.prevPositionX = n.touchesCurrent.x;
                a.prevPositionY = n.touchesCurrent.y;
                a.prevTime = Date.now();
                s.$imageWrapEl.transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`)
            },
            onTouchEnd() {
                const e = this;
                const t = e.zoom;
                const {
                    gesture: i,
                    image: s,
                    velocity: n
                } = t;
                if (!i.$imageEl || i.$imageEl.length === 0) return;
                if (!s.isTouched || !s.isMoved) {
                    s.isTouched = false;
                    s.isMoved = false;
                    return
                }
                s.isTouched = false;
                s.isMoved = false;
                let a = 300;
                let r = 300;
                const o = n.x * a;
                const l = s.currentX + o;
                const d = n.y * r;
                const c = s.currentY + d;
                if (n.x !== 0) a = Math.abs((l - s.currentX) / n.x);
                if (n.y !== 0) r = Math.abs((c - s.currentY) / n.y);
                const p = Math.max(a, r);
                s.currentX = l;
                s.currentY = c;
                const f = s.width * t.scale;
                const u = s.height * t.scale;
                s.minX = Math.min(i.slideWidth / 2 - f / 2, 0);
                s.maxX = -s.minX;
                s.minY = Math.min(i.slideHeight / 2 - u / 2, 0);
                s.maxY = -s.minY;
                s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX);
                s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY);
                i.$imageWrapEl.transition(p).transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`)
            },
            onTransitionEnd() {
                const e = this;
                const t = e.zoom;
                const {
                    gesture: i
                } = t;
                if (i.$slideEl && e.previousIndex !== e.activeIndex) {
                    i.$imageEl.transform("translate3d(0,0,0) scale(1)");
                    i.$imageWrapEl.transform("translate3d(0,0,0)");
                    i.$slideEl = undefined;
                    i.$imageEl = undefined;
                    i.$imageWrapEl = undefined;
                    t.scale = 1;
                    t.currentScale = 1
                }
            },
            toggle(e) {
                const t = this;
                const i = t.zoom;
                if (i.scale && i.scale !== 1) {
                    i.out()
                } else {
                    i.in(e)
                }
            },
            in (e) {
                const t = this;
                const i = t.zoom;
                const s = t.params.zoom;
                const {
                    gesture: n,
                    image: a
                } = i;
                if (!n.$slideEl) {
                    n.$slideEl = t.clickedSlide ? l(t.clickedSlide) : t.slides.eq(t.activeIndex);
                    n.$imageEl = n.$slideEl.find("img, svg, canvas");
                    n.$imageWrapEl = n.$imageEl.parent(`.${s.containerClass}`)
                }
                if (!n.$imageEl || n.$imageEl.length === 0) return;
                n.$slideEl.addClass(`${s.zoomedSlideClass}`);
                let r;
                let o;
                let d;
                let c;
                let p;
                let f;
                let u;
                let h;
                let m;
                let g;
                let w;
                let v;
                let b;
                let y;
                let x;
                let E;
                let C;
                let T;
                if (typeof a.touchesStart.x === "undefined" && e) {
                    r = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
                    o = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY
                } else {
                    r = a.touchesStart.x;
                    o = a.touchesStart.y
                }
                i.scale = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio;
                i.currentScale = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio;
                if (e) {
                    C = n.$slideEl[0].offsetWidth;
                    T = n.$slideEl[0].offsetHeight;
                    d = n.$slideEl.offset().left;
                    c = n.$slideEl.offset().top;
                    p = d + C / 2 - r;
                    f = c + T / 2 - o;
                    m = n.$imageEl[0].offsetWidth;
                    g = n.$imageEl[0].offsetHeight;
                    w = m * i.scale;
                    v = g * i.scale;
                    b = Math.min(C / 2 - w / 2, 0);
                    y = Math.min(T / 2 - v / 2, 0);
                    x = -b;
                    E = -y;
                    u = p * i.scale;
                    h = f * i.scale;
                    if (u < b) {
                        u = b
                    }
                    if (u > x) {
                        u = x
                    }
                    if (h < y) {
                        h = y
                    }
                    if (h > E) {
                        h = E
                    }
                } else {
                    u = 0;
                    h = 0
                }
                n.$imageWrapEl.transition(300).transform(`translate3d(${u}px, ${h}px,0)`);
                n.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${i.scale})`)
            },
            out() {
                const e = this;
                const t = e.zoom;
                const i = e.params.zoom;
                const {
                    gesture: s
                } = t;
                if (!s.$slideEl) {
                    s.$slideEl = e.clickedSlide ? l(e.clickedSlide) : e.slides.eq(e.activeIndex);
                    s.$imageEl = s.$slideEl.find("img, svg, canvas");
                    s.$imageWrapEl = s.$imageEl.parent(`.${i.containerClass}`)
                }
                if (!s.$imageEl || s.$imageEl.length === 0) return;
                t.scale = 1;
                t.currentScale = 1;
                s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
                s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
                s.$slideEl.removeClass(`${i.zoomedSlideClass}`);
                s.$slideEl = undefined
            },
            enable() {
                const e = this;
                const t = e.zoom;
                if (t.enabled) return;
                t.enabled = true;
                const i = e.touchEvents.start === "touchstart" && Ue.passiveListener && e.params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (Ue.gestures) {
                    e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i);
                    e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i);
                    e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)
                } else if (e.touchEvents.start === "touchstart") {
                    e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i);
                    e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i);
                    e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)
                }
                e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove)
            },
            disable() {
                const e = this;
                const t = e.zoom;
                if (!t.enabled) return;
                e.zoom.enabled = false;
                const i = e.touchEvents.start === "touchstart" && Ue.passiveListener && e.params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (Ue.gestures) {
                    e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i);
                    e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i);
                    e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)
                } else if (e.touchEvents.start === "touchstart") {
                    e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i);
                    e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i);
                    e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)
                }
                e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove)
            }
        };
        var Di = {
            name: "zoom",
            params: {
                zoom: {
                    enabled: false,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: true,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create() {
                const e = this;
                const t = {
                    enabled: false,
                    scale: 1,
                    currentScale: 1,
                    isScaling: false,
                    gesture: {
                        $slideEl: undefined,
                        slideWidth: undefined,
                        slideHeight: undefined,
                        $imageEl: undefined,
                        $imageWrapEl: undefined,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: undefined,
                        isMoved: undefined,
                        currentX: undefined,
                        currentY: undefined,
                        minX: undefined,
                        minY: undefined,
                        maxX: undefined,
                        maxY: undefined,
                        width: undefined,
                        height: undefined,
                        startX: undefined,
                        startY: undefined,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: undefined,
                        y: undefined,
                        prevPositionX: undefined,
                        prevPositionY: undefined,
                        prevTime: undefined
                    }
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(i => {
                    t[i] = zi[i].bind(e)
                });
                _e.extend(e, {
                    zoom: t
                })
            },
            on: {
                init() {
                    const e = this;
                    if (e.params.zoom.enabled) {
                        e.zoom.enable()
                    }
                },
                destroy() {
                    const e = this;
                    e.zoom.disable()
                },
                touchStart(e) {
                    const t = this;
                    if (!t.zoom.enabled) return;
                    t.zoom.onTouchStart(e)
                },
                touchEnd(e) {
                    const t = this;
                    if (!t.zoom.enabled) return;
                    t.zoom.onTouchEnd(e)
                },
                doubleTap(e) {
                    const t = this;
                    if (t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle) {
                        t.zoom.toggle(e)
                    }
                },
                transitionEnd() {
                    const e = this;
                    if (e.zoom.enabled && e.params.zoom.enabled) {
                        e.zoom.onTransitionEnd()
                    }
                }
            }
        };
        const Pi = {
            loadInSlide(e, t = true) {
                const i = this;
                const s = i.params.lazy;
                if (typeof e === "undefined") return;
                if (i.slides.length === 0) return;
                const n = i.virtual && i.params.virtual.enabled;
                const a = n ? i.$wrapperEl.children(`.${i.params.slideClass}[data-swiper-slide-index="${e}"]`) : i.slides.eq(e);
                let r = a.find(`.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`);
                if (a.hasClass(s.elementClass) && !a.hasClass(s.loadedClass) && !a.hasClass(s.loadingClass)) {
                    r = r.add(a[0])
                }
                if (r.length === 0) return;
                r.each((e, n) => {
                    const r = l(n);
                    r.addClass(s.loadingClass);
                    const o = r.attr("data-background");
                    const d = r.attr("data-src");
                    const c = r.attr("data-srcset");
                    const p = r.attr("data-sizes");
                    i.loadImage(r[0], d || o, c, p, false, () => {
                        if (typeof i === "undefined" || i === null || !i || i && !i.params || i.destroyed) return;
                        if (o) {
                            r.css("background-image", `url("${o}")`);
                            r.removeAttr("data-background")
                        } else {
                            if (c) {
                                r.attr("srcset", c);
                                r.removeAttr("data-srcset")
                            }
                            if (p) {
                                r.attr("sizes", p);
                                r.removeAttr("data-sizes")
                            }
                            if (d) {
                                r.attr("src", d);
                                r.removeAttr("data-src")
                            }
                        }
                        r.addClass(s.loadedClass).removeClass(s.loadingClass);
                        a.find(`.${s.preloaderClass}`).remove();
                        if (i.params.loop && t) {
                            const e = a.attr("data-swiper-slide-index");
                            if (a.hasClass(i.params.slideDuplicateClass)) {
                                const t = i.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${i.params.slideDuplicateClass})`);
                                i.lazy.loadInSlide(t.index(), false)
                            } else {
                                const t = i.$wrapperEl.children(`.${i.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                i.lazy.loadInSlide(t.index(), false)
                            }
                        }
                        i.emit("lazyImageReady", a[0], r[0])
                    });
                    i.emit("lazyImageLoad", a[0], r[0])
                })
            },
            load() {
                const e = this;
                const {
                    $wrapperEl: t,
                    params: i,
                    slides: s,
                    activeIndex: n
                } = e;
                const a = e.virtual && i.virtual.enabled;
                const r = i.lazy;
                let o = i.slidesPerView;
                if (o === "auto") {
                    o = 0
                }

                function d(e) {
                    if (a) {
                        if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length) {
                            return true
                        }
                    } else if (s[e]) return true;
                    return false
                }

                function c(e) {
                    if (a) {
                        return l(e).attr("data-swiper-slide-index")
                    }
                    return l(e).index()
                }
                if (!e.lazy.initialImageLoaded) e.lazy.initialImageLoaded = true;
                if (e.params.watchSlidesVisibility) {
                    t.children(`.${i.slideVisibleClass}`).each((t, i) => {
                        const s = a ? l(i).attr("data-swiper-slide-index") : l(i).index();
                        e.lazy.loadInSlide(s)
                    })
                } else if (o > 1) {
                    for (let t = n; t < n + o; t += 1) {
                        if (d(t)) e.lazy.loadInSlide(t)
                    }
                } else {
                    e.lazy.loadInSlide(n)
                }
                if (r.loadPrevNext) {
                    if (o > 1 || r.loadPrevNextAmount && r.loadPrevNextAmount > 1) {
                        const t = r.loadPrevNextAmount;
                        const i = o;
                        const a = Math.min(n + i + Math.max(t, i), s.length);
                        const l = Math.max(n - Math.max(i, t), 0);
                        for (let t = n + o; t < a; t += 1) {
                            if (d(t)) e.lazy.loadInSlide(t)
                        }
                        for (let t = l; t < n; t += 1) {
                            if (d(t)) e.lazy.loadInSlide(t)
                        }
                    } else {
                        const s = t.children(`.${i.slideNextClass}`);
                        if (s.length > 0) e.lazy.loadInSlide(c(s));
                        const n = t.children(`.${i.slidePrevClass}`);
                        if (n.length > 0) e.lazy.loadInSlide(c(n))
                    }
                }
            }
        };
        var Li = {
            name: "lazy",
            params: {
                lazy: {
                    enabled: false,
                    loadPrevNext: false,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: false,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    lazy: {
                        initialImageLoaded: false,
                        load: Pi.load.bind(e),
                        loadInSlide: Pi.loadInSlide.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (e.params.lazy.enabled && e.params.preloadImages) {
                        e.params.preloadImages = false
                    }
                },
                init() {
                    const e = this;
                    if (e.params.lazy.enabled && !e.params.loop && e.params.initialSlide === 0) {
                        e.lazy.load()
                    }
                },
                scroll() {
                    const e = this;
                    if (e.params.freeMode && !e.params.freeModeSticky) {
                        e.lazy.load()
                    }
                },
                resize() {
                    const e = this;
                    if (e.params.lazy.enabled) {
                        e.lazy.load()
                    }
                },
                scrollbarDragMove() {
                    const e = this;
                    if (e.params.lazy.enabled) {
                        e.lazy.load()
                    }
                },
                transitionStart() {
                    const e = this;
                    if (e.params.lazy.enabled) {
                        if (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) {
                            e.lazy.load()
                        }
                    }
                },
                transitionEnd() {
                    const e = this;
                    if (e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart) {
                        e.lazy.load()
                    }
                }
            }
        };
        const Ii = {
            LinearSpline: function e(t, i) {
                const s = function e() {
                    let t;
                    let i;
                    let s;
                    return (e, n) => {
                        i = -1;
                        t = e.length;
                        while (t - i > 1) {
                            s = t + i >> 1;
                            if (e[s] <= n) {
                                i = s
                            } else {
                                t = s
                            }
                        }
                        return t
                    }
                }();
                this.x = t;
                this.y = i;
                this.lastIndex = t.length - 1;
                let n;
                let a;
                this.interpolate = function e(t) {
                    if (!t) return 0;
                    a = s(this.x, t);
                    n = a - 1;
                    return (t - this.x[n]) * (this.y[a] - this.y[n]) / (this.x[a] - this.x[n]) + this.y[n]
                };
                return this
            },
            getInterpolateFunction(e) {
                const t = this;
                if (!t.controller.spline) {
                    t.controller.spline = t.params.loop ? new Ii.LinearSpline(t.slidesGrid, e.slidesGrid) : new Ii.LinearSpline(t.snapGrid, e.snapGrid)
                }
            },
            setTranslate(e, t) {
                const i = this;
                const s = i.controller.control;
                let n;
                let a;

                function r(e) {
                    const t = i.rtlTranslate ? -i.translate : i.translate;
                    if (i.params.controller.by === "slide") {
                        i.controller.getInterpolateFunction(e);
                        a = -i.controller.spline.interpolate(-t)
                    }
                    if (!a || i.params.controller.by === "container") {
                        n = (e.maxTranslate() - e.minTranslate()) / (i.maxTranslate() - i.minTranslate());
                        a = (t - i.minTranslate()) * n + e.minTranslate()
                    }
                    if (i.params.controller.inverse) {
                        a = e.maxTranslate() - a
                    }
                    e.updateProgress(a);
                    e.setTranslate(a, i);
                    e.updateActiveIndex();
                    e.updateSlidesClasses()
                }
                if (Array.isArray(s)) {
                    for (let e = 0; e < s.length; e += 1) {
                        if (s[e] !== t && s[e] instanceof oi) {
                            r(s[e])
                        }
                    }
                } else if (s instanceof oi && t !== s) {
                    r(s)
                }
            },
            setTransition(e, t) {
                const i = this;
                const s = i.controller.control;
                let n;

                function a(t) {
                    t.setTransition(e, i);
                    if (e !== 0) {
                        t.transitionStart();
                        if (t.params.autoHeight) {
                            _e.nextTick(() => {
                                t.updateAutoHeight()
                            })
                        }
                        t.$wrapperEl.transitionEnd(() => {
                            if (!s) return;
                            if (t.params.loop && i.params.controller.by === "slide") {
                                t.loopFix()
                            }
                            t.transitionEnd()
                        })
                    }
                }
                if (Array.isArray(s)) {
                    for (n = 0; n < s.length; n += 1) {
                        if (s[n] !== t && s[n] instanceof oi) {
                            a(s[n])
                        }
                    }
                } else if (s instanceof oi && t !== s) {
                    a(s)
                }
            }
        };
        var Ai = {
            name: "controller",
            params: {
                controller: {
                    control: undefined,
                    inverse: false,
                    by: "slide"
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: Ii.getInterpolateFunction.bind(e),
                        setTranslate: Ii.setTranslate.bind(e),
                        setTransition: Ii.setTransition.bind(e)
                    }
                })
            },
            on: {
                update() {
                    const e = this;
                    if (!e.controller.control) return;
                    if (e.controller.spline) {
                        e.controller.spline = undefined;
                        delete e.controller.spline
                    }
                },
                resize() {
                    const e = this;
                    if (!e.controller.control) return;
                    if (e.controller.spline) {
                        e.controller.spline = undefined;
                        delete e.controller.spline
                    }
                },
                observerUpdate() {
                    const e = this;
                    if (!e.controller.control) return;
                    if (e.controller.spline) {
                        e.controller.spline = undefined;
                        delete e.controller.spline
                    }
                },
                setTranslate(e, t) {
                    const i = this;
                    if (!i.controller.control) return;
                    i.controller.setTranslate(e, t)
                },
                setTransition(e, t) {
                    const i = this;
                    if (!i.controller.control) return;
                    i.controller.setTransition(e, t)
                }
            }
        };
        const Oi = {
            makeElFocusable(e) {
                e.attr("tabIndex", "0");
                return e
            },
            addElRole(e, t) {
                e.attr("role", t);
                return e
            },
            addElLabel(e, t) {
                e.attr("aria-label", t);
                return e
            },
            disableEl(e) {
                e.attr("aria-disabled", true);
                return e
            },
            enableEl(e) {
                e.attr("aria-disabled", false);
                return e
            },
            onEnterKey(e) {
                const t = this;
                const i = t.params.a11y;
                if (e.keyCode !== 13) return;
                const s = l(e.target);
                if (t.navigation && t.navigation.$nextEl && s.is(t.navigation.$nextEl)) {
                    if (!(t.isEnd && !t.params.loop)) {
                        t.slideNext()
                    }
                    if (t.isEnd) {
                        t.a11y.notify(i.lastSlideMessage)
                    } else {
                        t.a11y.notify(i.nextSlideMessage)
                    }
                }
                if (t.navigation && t.navigation.$prevEl && s.is(t.navigation.$prevEl)) {
                    if (!(t.isBeginning && !t.params.loop)) {
                        t.slidePrev()
                    }
                    if (t.isBeginning) {
                        t.a11y.notify(i.firstSlideMessage)
                    } else {
                        t.a11y.notify(i.prevSlideMessage)
                    }
                }
                if (t.pagination && s.is(`.${t.params.pagination.bulletClass}`)) {
                    s[0].click()
                }
            },
            notify(e) {
                const t = this;
                const i = t.a11y.liveRegion;
                if (i.length === 0) return;
                i.html("");
                i.html(e)
            },
            updateNavigation() {
                const e = this;
                if (e.params.loop) return;
                const {
                    $nextEl: t,
                    $prevEl: i
                } = e.navigation;
                if (i && i.length > 0) {
                    if (e.isBeginning) {
                        e.a11y.disableEl(i)
                    } else {
                        e.a11y.enableEl(i)
                    }
                }
                if (t && t.length > 0) {
                    if (e.isEnd) {
                        e.a11y.disableEl(t)
                    } else {
                        e.a11y.enableEl(t)
                    }
                }
            },
            updatePagination() {
                const e = this;
                const t = e.params.a11y;
                if (e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length) {
                    e.pagination.bullets.each((i, s) => {
                        const n = l(s);
                        e.a11y.makeElFocusable(n);
                        e.a11y.addElRole(n, "button");
                        e.a11y.addElLabel(n, t.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
                    })
                }
            },
            init() {
                const e = this;
                e.$el.append(e.a11y.liveRegion);
                const t = e.params.a11y;
                let i;
                let s;
                if (e.navigation && e.navigation.$nextEl) {
                    i = e.navigation.$nextEl
                }
                if (e.navigation && e.navigation.$prevEl) {
                    s = e.navigation.$prevEl
                }
                if (i) {
                    e.a11y.makeElFocusable(i);
                    e.a11y.addElRole(i, "button");
                    e.a11y.addElLabel(i, t.nextSlideMessage);
                    i.on("keydown", e.a11y.onEnterKey)
                }
                if (s) {
                    e.a11y.makeElFocusable(s);
                    e.a11y.addElRole(s, "button");
                    e.a11y.addElLabel(s, t.prevSlideMessage);
                    s.on("keydown", e.a11y.onEnterKey)
                }
                if (e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length) {
                    e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
                }
            },
            destroy() {
                const e = this;
                if (e.a11y.liveRegion && e.a11y.liveRegion.length > 0) e.a11y.liveRegion.remove();
                let t;
                let i;
                if (e.navigation && e.navigation.$nextEl) {
                    t = e.navigation.$nextEl
                }
                if (e.navigation && e.navigation.$prevEl) {
                    i = e.navigation.$prevEl
                }
                if (t) {
                    t.off("keydown", e.a11y.onEnterKey)
                }
                if (i) {
                    i.off("keydown", e.a11y.onEnterKey)
                }
                if (e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length) {
                    e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
                }
            }
        };
        var Fi = {
            name: "a11y",
            params: {
                a11y: {
                    enabled: true,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    a11y: {
                        liveRegion: l(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                    }
                });
                Object.keys(Oi).forEach(t => {
                    e.a11y[t] = Oi[t].bind(e)
                })
            },
            on: {
                init() {
                    const e = this;
                    if (!e.params.a11y.enabled) return;
                    e.a11y.init();
                    e.a11y.updateNavigation()
                },
                toEdge() {
                    const e = this;
                    if (!e.params.a11y.enabled) return;
                    e.a11y.updateNavigation()
                },
                fromEdge() {
                    const e = this;
                    if (!e.params.a11y.enabled) return;
                    e.a11y.updateNavigation()
                },
                paginationUpdate() {
                    const e = this;
                    if (!e.params.a11y.enabled) return;
                    e.a11y.updatePagination()
                },
                destroy() {
                    const e = this;
                    if (!e.params.a11y.enabled) return;
                    e.a11y.destroy()
                }
            }
        };
        const Ni = {
            init() {
                const e = this;
                if (!e.params.history) return;
                if (!r.history || !r.history.pushState) {
                    e.params.history.enabled = false;
                    e.params.hashNavigation.enabled = true;
                    return
                }
                const t = e.history;
                t.initialized = true;
                t.paths = Ni.getPathValues();
                if (!t.paths.key && !t.paths.value) return;
                t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit);
                if (!e.params.history.replaceState) {
                    r.addEventListener("popstate", e.history.setHistoryPopState)
                }
            },
            destroy() {
                const e = this;
                if (!e.params.history.replaceState) {
                    r.removeEventListener("popstate", e.history.setHistoryPopState)
                }
            },
            setHistoryPopState() {
                const e = this;
                e.history.paths = Ni.getPathValues();
                e.history.scrollToSlide(e.params.speed, e.history.paths.value, false)
            },
            getPathValues() {
                const e = r.location.pathname.slice(1).split("/").filter(e => e !== "");
                const t = e.length;
                const i = e[t - 2];
                const s = e[t - 1];
                return {
                    key: i,
                    value: s
                }
            },
            setHistory(e, t) {
                const i = this;
                if (!i.history.initialized || !i.params.history.enabled) return;
                const s = i.slides.eq(t);
                let n = Ni.slugify(s.attr("data-history"));
                if (!r.location.pathname.includes(e)) {
                    n = `${e}/${n}`
                }
                const a = r.history.state;
                if (a && a.value === n) {
                    return
                }
                if (i.params.history.replaceState) {
                    r.history.replaceState({
                        value: n
                    }, null, n)
                } else {
                    r.history.pushState({
                        value: n
                    }, null, n)
                }
            },
            slugify(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide(e, t, i) {
                const s = this;
                if (t) {
                    for (let n = 0, a = s.slides.length; n < a; n += 1) {
                        const a = s.slides.eq(n);
                        const r = Ni.slugify(a.attr("data-history"));
                        if (r === t && !a.hasClass(s.params.slideDuplicateClass)) {
                            const t = a.index();
                            s.slideTo(t, e, i)
                        }
                    }
                } else {
                    s.slideTo(0, e, i)
                }
            }
        };
        var Bi = {
            name: "history",
            params: {
                history: {
                    enabled: false,
                    replaceState: false,
                    key: "slides"
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    history: {
                        init: Ni.init.bind(e),
                        setHistory: Ni.setHistory.bind(e),
                        setHistoryPopState: Ni.setHistoryPopState.bind(e),
                        scrollToSlide: Ni.scrollToSlide.bind(e),
                        destroy: Ni.destroy.bind(e)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    if (e.params.history.enabled) {
                        e.history.init()
                    }
                },
                destroy() {
                    const e = this;
                    if (e.params.history.enabled) {
                        e.history.destroy()
                    }
                },
                transitionEnd() {
                    const e = this;
                    if (e.history.initialized) {
                        e.history.setHistory(e.params.history.key, e.activeIndex)
                    }
                }
            }
        };
        const Hi = {
            onHashCange() {
                const e = this;
                const t = a.location.hash.replace("#", "");
                const i = e.slides.eq(e.activeIndex).attr("data-hash");
                if (t !== i) {
                    const i = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (typeof i === "undefined") return;
                    e.slideTo(i)
                }
            },
            setHash() {
                const e = this;
                if (!e.hashNavigation.initialized || !e.params.hashNavigation.enabled) return;
                if (e.params.hashNavigation.replaceState && r.history && r.history.replaceState) {
                    r.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || "")
                } else {
                    const t = e.slides.eq(e.activeIndex);
                    const i = t.attr("data-hash") || t.attr("data-history");
                    a.location.hash = i || ""
                }
            },
            init() {
                const e = this;
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                e.hashNavigation.initialized = true;
                const t = a.location.hash.replace("#", "");
                if (t) {
                    const i = 0;
                    for (let s = 0, n = e.slides.length; s < n; s += 1) {
                        const n = e.slides.eq(s);
                        const a = n.attr("data-hash") || n.attr("data-history");
                        if (a === t && !n.hasClass(e.params.slideDuplicateClass)) {
                            const t = n.index();
                            e.slideTo(t, i, e.params.runCallbacksOnInit, true)
                        }
                    }
                }
                if (e.params.hashNavigation.watchState) {
                    l(r).on("hashchange", e.hashNavigation.onHashCange)
                }
            },
            destroy() {
                const e = this;
                if (e.params.hashNavigation.watchState) {
                    l(r).off("hashchange", e.hashNavigation.onHashCange)
                }
            }
        };
        var Gi = {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: false,
                    replaceState: false,
                    watchState: false
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    hashNavigation: {
                        initialized: false,
                        init: Hi.init.bind(e),
                        destroy: Hi.destroy.bind(e),
                        setHash: Hi.setHash.bind(e),
                        onHashCange: Hi.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    if (e.params.hashNavigation.enabled) {
                        e.hashNavigation.init()
                    }
                },
                destroy() {
                    const e = this;
                    if (e.params.hashNavigation.enabled) {
                        e.hashNavigation.destroy()
                    }
                },
                transitionEnd() {
                    const e = this;
                    if (e.hashNavigation.initialized) {
                        e.hashNavigation.setHash()
                    }
                }
            }
        };
        const Xi = {
            run() {
                const e = this;
                const t = e.slides.eq(e.activeIndex);
                let i = e.params.autoplay.delay;
                if (t.attr("data-swiper-autoplay")) {
                    i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay
                }
                e.autoplay.timeout = _e.nextTick(() => {
                    if (e.params.autoplay.reverseDirection) {
                        if (e.params.loop) {
                            e.loopFix();
                            e.slidePrev(e.params.speed, true, true);
                            e.emit("autoplay")
                        } else if (!e.isBeginning) {
                            e.slidePrev(e.params.speed, true, true);
                            e.emit("autoplay")
                        } else if (!e.params.autoplay.stopOnLastSlide) {
                            e.slideTo(e.slides.length - 1, e.params.speed, true, true);
                            e.emit("autoplay")
                        } else {
                            e.autoplay.stop()
                        }
                    } else if (e.params.loop) {
                        e.loopFix();
                        e.slideNext(e.params.speed, true, true);
                        e.emit("autoplay")
                    } else if (!e.isEnd) {
                        e.slideNext(e.params.speed, true, true);
                        e.emit("autoplay")
                    } else if (!e.params.autoplay.stopOnLastSlide) {
                        e.slideTo(0, e.params.speed, true, true);
                        e.emit("autoplay")
                    } else {
                        e.autoplay.stop()
                    }
                }, i)
            },
            start() {
                const e = this;
                if (typeof e.autoplay.timeout !== "undefined") return false;
                if (e.autoplay.running) return false;
                e.autoplay.running = true;
                e.emit("autoplayStart");
                e.autoplay.run();
                return true
            },
            stop() {
                const e = this;
                if (!e.autoplay.running) return false;
                if (typeof e.autoplay.timeout === "undefined") return false;
                if (e.autoplay.timeout) {
                    clearTimeout(e.autoplay.timeout);
                    e.autoplay.timeout = undefined
                }
                e.autoplay.running = false;
                e.emit("autoplayStop");
                return true
            },
            pause(e) {
                const t = this;
                if (!t.autoplay.running) return;
                if (t.autoplay.paused) return;
                if (t.autoplay.timeout) clearTimeout(t.autoplay.timeout);
                t.autoplay.paused = true;
                if (e === 0 || !t.params.autoplay.waitForTransition) {
                    t.autoplay.paused = false;
                    t.autoplay.run()
                } else {
                    t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd);
                    t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)
                }
            }
        };
        var Yi = {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    autoplay: {
                        running: false,
                        paused: false,
                        run: Xi.run.bind(e),
                        start: Xi.start.bind(e),
                        stop: Xi.stop.bind(e),
                        pause: Xi.pause.bind(e),
                        onTransitionEnd(t) {
                            if (!e || e.destroyed || !e.$wrapperEl) return;
                            if (t.target !== this) return;
                            e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd);
                            e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd);
                            e.autoplay.paused = false;
                            if (!e.autoplay.running) {
                                e.autoplay.stop()
                            } else {
                                e.autoplay.run()
                            }
                        }
                    }
                })
            },
            on: {
                init() {
                    const e = this;
                    if (e.params.autoplay.enabled) {
                        e.autoplay.start()
                    }
                },
                beforeTransitionStart(e, t) {
                    const i = this;
                    if (i.autoplay.running) {
                        if (t || !i.params.autoplay.disableOnInteraction) {
                            i.autoplay.pause(e)
                        } else {
                            i.autoplay.stop()
                        }
                    }
                },
                sliderFirstMove() {
                    const e = this;
                    if (e.autoplay.running) {
                        if (e.params.autoplay.disableOnInteraction) {
                            e.autoplay.stop()
                        } else {
                            e.autoplay.pause()
                        }
                    }
                },
                destroy() {
                    const e = this;
                    if (e.autoplay.running) {
                        e.autoplay.stop()
                    }
                }
            }
        };
        const Vi = {
            setTranslate() {
                const e = this;
                const {
                    slides: t
                } = e;
                for (let i = 0; i < t.length; i += 1) {
                    const t = e.slides.eq(i);
                    const s = t[0].swiperSlideOffset;
                    let n = -s;
                    if (!e.params.virtualTranslate) n -= e.translate;
                    let a = 0;
                    if (!e.isHorizontal()) {
                        a = n;
                        n = 0
                    }
                    const r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    t.css({
                        opacity: r
                    }).transform(`translate3d(${n}px, ${a}px, 0px)`)
                }
            },
            setTransition(e) {
                const t = this;
                const {
                    slides: i,
                    $wrapperEl: s
                } = t;
                i.transition(e);
                if (t.params.virtualTranslate && e !== 0) {
                    let e = false;
                    i.transitionEnd(() => {
                        if (e) return;
                        if (!t || t.destroyed) return;
                        e = true;
                        t.animating = false;
                        const i = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < i.length; e += 1) {
                            s.trigger(i[e])
                        }
                    })
                }
            }
        };
        var Ri = {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: false
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    fadeEffect: {
                        setTranslate: Vi.setTranslate.bind(e),
                        setTransition: Vi.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (e.params.effect !== "fade") return;
                    e.classNames.push(`${e.params.containerModifierClass}fade`);
                    const t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true
                    };
                    _e.extend(e.params, t);
                    _e.extend(e.originalParams, t)
                },
                setTranslate() {
                    const e = this;
                    if (e.params.effect !== "fade") return;
                    e.fadeEffect.setTranslate()
                },
                setTransition(e) {
                    const t = this;
                    if (t.params.effect !== "fade") return;
                    t.fadeEffect.setTransition(e)
                }
            }
        };
        const qi = {
            setTranslate() {
                const e = this;
                const {
                    $el: t,
                    $wrapperEl: i,
                    slides: s,
                    width: n,
                    height: a,
                    rtlTranslate: r,
                    size: o
                } = e;
                const d = e.params.cubeEffect;
                const c = e.isHorizontal();
                const p = e.virtual && e.params.virtual.enabled;
                let f = 0;
                let u;
                if (d.shadow) {
                    if (c) {
                        u = i.find(".swiper-cube-shadow");
                        if (u.length === 0) {
                            u = l('<div class="swiper-cube-shadow"></div>');
                            i.append(u)
                        }
                        u.css({
                            height: `${n}px`
                        })
                    } else {
                        u = t.find(".swiper-cube-shadow");
                        if (u.length === 0) {
                            u = l('<div class="swiper-cube-shadow"></div>');
                            t.append(u)
                        }
                    }
                }
                for (let e = 0; e < s.length; e += 1) {
                    const t = s.eq(e);
                    let i = e;
                    if (p) {
                        i = parseInt(t.attr("data-swiper-slide-index"), 10)
                    }
                    let n = i * 90;
                    let a = Math.floor(n / 360);
                    if (r) {
                        n = -n;
                        a = Math.floor(-n / 360)
                    }
                    const u = Math.max(Math.min(t[0].progress, 1), -1);
                    let h = 0;
                    let m = 0;
                    let g = 0;
                    if (i % 4 === 0) {
                        h = -a * 4 * o;
                        g = 0
                    } else if ((i - 1) % 4 === 0) {
                        h = 0;
                        g = -a * 4 * o
                    } else if ((i - 2) % 4 === 0) {
                        h = o + a * 4 * o;
                        g = o
                    } else if ((i - 3) % 4 === 0) {
                        h = -o;
                        g = 3 * o + o * 4 * a
                    }
                    if (r) {
                        h = -h
                    }
                    if (!c) {
                        m = h;
                        h = 0
                    }
                    const w = `rotateX(${c?0:-n}deg) rotateY(${c?n:0}deg) translate3d(${h}px, ${m}px, ${g}px)`;
                    if (u <= 1 && u > -1) {
                        f = i * 90 + u * 90;
                        if (r) f = -i * 90 - u * 90
                    }
                    t.transform(w);
                    if (d.slideShadows) {
                        let e = c ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top");
                        let i = c ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        if (e.length === 0) {
                            e = l(`<div class="swiper-slide-shadow-${c?"left":"top"}"></div>`);
                            t.append(e)
                        }
                        if (i.length === 0) {
                            i = l(`<div class="swiper-slide-shadow-${c?"right":"bottom"}"></div>`);
                            t.append(i)
                        }
                        if (e.length) e[0].style.opacity = Math.max(-u, 0);
                        if (i.length) i[0].style.opacity = Math.max(u, 0)
                    }
                }
                i.css({
                    "-webkit-transform-origin": `50% 50% -${o/2}px`,
                    "-moz-transform-origin": `50% 50% -${o/2}px`,
                    "-ms-transform-origin": `50% 50% -${o/2}px`,
                    "transform-origin": `50% 50% -${o/2}px`
                });
                if (d.shadow) {
                    if (c) {
                        u.transform(`translate3d(0px, ${n/2+d.shadowOffset}px, ${-n/2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`)
                    } else {
                        const e = Math.abs(f) - Math.floor(Math.abs(f) / 90) * 90;
                        const t = 1.5 - (Math.sin(e * 2 * Math.PI / 360) / 2 + Math.cos(e * 2 * Math.PI / 360) / 2);
                        const i = d.shadowScale;
                        const s = d.shadowScale / t;
                        const n = d.shadowOffset;
                        u.transform(`scale3d(${i}, 1, ${s}) translate3d(0px, ${a/2+n}px, ${-a/2/s}px) rotateX(-90deg)`)
                    }
                }
                const h = Ut.isSafari || Ut.isUiWebView ? -o / 2 : 0;
                i.transform(`translate3d(0px,0,${h}px) rotateX(${e.isHorizontal()?0:f}deg) rotateY(${e.isHorizontal()?-f:0}deg)`)
            },
            setTransition(e) {
                const t = this;
                const {
                    $el: i,
                    slides: s
                } = t;
                s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                if (t.params.cubeEffect.shadow && !t.isHorizontal()) {
                    i.find(".swiper-cube-shadow").transition(e)
                }
            }
        };
        var ji = {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    cubeEffect: {
                        setTranslate: qi.setTranslate.bind(e),
                        setTransition: qi.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (e.params.effect !== "cube") return;
                    e.classNames.push(`${e.params.containerModifierClass}cube`);
                    e.classNames.push(`${e.params.containerModifierClass}3d`);
                    const t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: false,
                        virtualTranslate: true
                    };
                    _e.extend(e.params, t);
                    _e.extend(e.originalParams, t)
                },
                setTranslate() {
                    const e = this;
                    if (e.params.effect !== "cube") return;
                    e.cubeEffect.setTranslate()
                },
                setTransition(e) {
                    const t = this;
                    if (t.params.effect !== "cube") return;
                    t.cubeEffect.setTransition(e)
                }
            }
        };
        const Wi = {
            setTranslate() {
                const e = this;
                const {
                    slides: t,
                    rtlTranslate: i
                } = e;
                for (let s = 0; s < t.length; s += 1) {
                    const n = t.eq(s);
                    let a = n[0].progress;
                    if (e.params.flipEffect.limitRotation) {
                        a = Math.max(Math.min(n[0].progress, 1), -1)
                    }
                    const r = n[0].swiperSlideOffset;
                    const o = -180 * a;
                    let d = o;
                    let c = 0;
                    let p = -r;
                    let f = 0;
                    if (!e.isHorizontal()) {
                        f = p;
                        p = 0;
                        c = -d;
                        d = 0
                    } else if (i) {
                        d = -d
                    }
                    n[0].style.zIndex = -Math.abs(Math.round(a)) + t.length;
                    if (e.params.flipEffect.slideShadows) {
                        let t = e.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top");
                        let i = e.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                        if (t.length === 0) {
                            t = l(`<div class="swiper-slide-shadow-${e.isHorizontal()?"left":"top"}"></div>`);
                            n.append(t)
                        }
                        if (i.length === 0) {
                            i = l(`<div class="swiper-slide-shadow-${e.isHorizontal()?"right":"bottom"}"></div>`);
                            n.append(i)
                        }
                        if (t.length) t[0].style.opacity = Math.max(-a, 0);
                        if (i.length) i[0].style.opacity = Math.max(a, 0)
                    }
                    n.transform(`translate3d(${p}px, ${f}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`)
                }
            },
            setTransition(e) {
                const t = this;
                const {
                    slides: i,
                    activeIndex: s,
                    $wrapperEl: n
                } = t;
                i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                if (t.params.virtualTranslate && e !== 0) {
                    let e = false;
                    i.eq(s).transitionEnd(function i() {
                        if (e) return;
                        if (!t || t.destroyed) return;
                        e = true;
                        t.animating = false;
                        const s = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < s.length; e += 1) {
                            n.trigger(s[e])
                        }
                    })
                }
            }
        };
        var _i = {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: true,
                    limitRotation: true
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    flipEffect: {
                        setTranslate: Wi.setTranslate.bind(e),
                        setTransition: Wi.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (e.params.effect !== "flip") return;
                    e.classNames.push(`${e.params.containerModifierClass}flip`);
                    e.classNames.push(`${e.params.containerModifierClass}3d`);
                    const t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true
                    };
                    _e.extend(e.params, t);
                    _e.extend(e.originalParams, t)
                },
                setTranslate() {
                    const e = this;
                    if (e.params.effect !== "flip") return;
                    e.flipEffect.setTranslate()
                },
                setTransition(e) {
                    const t = this;
                    if (t.params.effect !== "flip") return;
                    t.flipEffect.setTransition(e)
                }
            }
        };
        const Ui = {
            setTranslate() {
                const e = this;
                const {
                    width: t,
                    height: i,
                    slides: s,
                    $wrapperEl: n,
                    slidesSizesGrid: a
                } = e;
                const r = e.params.coverflowEffect;
                const o = e.isHorizontal();
                const d = e.translate;
                const c = o ? -d + t / 2 : -d + i / 2;
                const p = o ? r.rotate : -r.rotate;
                const f = r.depth;
                for (let e = 0, t = s.length; e < t; e += 1) {
                    const t = s.eq(e);
                    const i = a[e];
                    const n = t[0].swiperSlideOffset;
                    const d = (c - n - i / 2) / i * r.modifier;
                    let u = o ? p * d : 0;
                    let h = o ? 0 : p * d;
                    let m = -f * Math.abs(d);
                    let g = o ? 0 : r.stretch * d;
                    let w = o ? r.stretch * d : 0;
                    if (Math.abs(w) < .001) w = 0;
                    if (Math.abs(g) < .001) g = 0;
                    if (Math.abs(m) < .001) m = 0;
                    if (Math.abs(u) < .001) u = 0;
                    if (Math.abs(h) < .001) h = 0;
                    const v = `translate3d(${w}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg)`;
                    t.transform(v);
                    t[0].style.zIndex = -Math.abs(Math.round(d)) + 1;
                    if (r.slideShadows) {
                        let e = o ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top");
                        let i = o ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        if (e.length === 0) {
                            e = l(`<div class="swiper-slide-shadow-${o?"left":"top"}"></div>`);
                            t.append(e)
                        }
                        if (i.length === 0) {
                            i = l(`<div class="swiper-slide-shadow-${o?"right":"bottom"}"></div>`);
                            t.append(i)
                        }
                        if (e.length) e[0].style.opacity = d > 0 ? d : 0;
                        if (i.length) i[0].style.opacity = -d > 0 ? -d : 0
                    }
                }
                if (Ue.pointerEvents || Ue.prefixedPointerEvents) {
                    const e = n[0].style;
                    e.perspectiveOrigin = `${c}px 50%`
                }
            },
            setTransition(e) {
                const t = this;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        };
        var Ki = {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    coverflowEffect: {
                        setTranslate: Ui.setTranslate.bind(e),
                        setTransition: Ui.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    if (e.params.effect !== "coverflow") return;
                    e.classNames.push(`${e.params.containerModifierClass}coverflow`);
                    e.classNames.push(`${e.params.containerModifierClass}3d`);
                    e.params.watchSlidesProgress = true;
                    e.originalParams.watchSlidesProgress = true
                },
                setTranslate() {
                    const e = this;
                    if (e.params.effect !== "coverflow") return;
                    e.coverflowEffect.setTranslate()
                },
                setTransition(e) {
                    const t = this;
                    if (t.params.effect !== "coverflow") return;
                    t.coverflowEffect.setTransition(e)
                }
            }
        };
        const Zi = {
            init() {
                const e = this;
                const {
                    thumbs: t
                } = e.params;
                const i = e.constructor;
                if (t.swiper instanceof i) {
                    e.thumbs.swiper = t.swiper;
                    _e.extend(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    _e.extend(e.thumbs.swiper.params, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    })
                } else if (_e.isObject(t.swiper)) {
                    e.thumbs.swiper = new i(_e.extend({}, t.swiper, {
                        watchSlidesVisibility: true,
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    }));
                    e.thumbs.swiperCreated = true
                }
                e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass);
                e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick() {
                const e = this;
                const t = e.thumbs.swiper;
                if (!t) return;
                const i = t.clickedIndex;
                if (typeof i === "undefined" || i === null) return;
                let s;
                if (t.params.loop) {
                    s = parseInt(l(t.clickedSlide).attr("data-swiper-slide-index"), 10)
                } else {
                    s = i
                }
                if (e.params.loop) {
                    let t = e.activeIndex;
                    if (e.slides.eq(t).hasClass(e.params.slideDuplicateClass)) {
                        e.loopFix();
                        e._clientLeft = e.$wrapperEl[0].clientLeft;
                        t = e.activeIndex
                    }
                    const i = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                    const n = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                    if (typeof i === "undefined") s = n;
                    else if (typeof n === "undefined") s = i;
                    else if (n - t < t - i) s = n;
                    else s = i
                }
                e.slideTo(s)
            },
            update(e) {
                const t = this;
                const i = t.thumbs.swiper;
                if (!i) return;
                const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                if (t.realIndex !== i.realIndex) {
                    let n = i.activeIndex;
                    let a;
                    if (i.params.loop) {
                        if (i.slides.eq(n).hasClass(i.params.slideDuplicateClass)) {
                            i.loopFix();
                            i._clientLeft = i.$wrapperEl[0].clientLeft;
                            n = i.activeIndex
                        }
                        const e = i.slides.eq(n).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        const s = i.slides.eq(n).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        if (typeof e === "undefined") a = s;
                        else if (typeof s === "undefined") a = e;
                        else if (s - n < n - e) a = s;
                        else a = e
                    } else {
                        a = t.realIndex
                    }
                    if (i.visibleSlidesIndexes.indexOf(a) < 0) {
                        if (i.params.centeredSlides) {
                            if (a > n) {
                                a = a - Math.floor(s / 2) + 1
                            } else {
                                a = a + Math.floor(s / 2) - 1
                            }
                        } else if (a > n) {
                            a = a - s + 1
                        }
                        i.slideTo(a, e ? 0 : undefined)
                    }
                }
                let n = 1;
                const a = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides) {
                    n = t.params.slidesPerView
                }
                i.slides.removeClass(a);
                if (i.params.loop) {
                    for (let e = 0; e < n; e += 1) {
                        i.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(a)
                    }
                } else {
                    for (let e = 0; e < n; e += 1) {
                        i.slides.eq(t.realIndex + e).addClass(a)
                    }
                }
            }
        };
        var Ji = {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create() {
                const e = this;
                _e.extend(e, {
                    thumbs: {
                        swiper: null,
                        init: Zi.init.bind(e),
                        update: Zi.update.bind(e),
                        onThumbClick: Zi.onThumbClick.bind(e)
                    }
                })
            },
            on: {
                beforeInit() {
                    const e = this;
                    const {
                        thumbs: t
                    } = e.params;
                    if (!t || !t.swiper) return;
                    e.thumbs.init();
                    e.thumbs.update(true)
                },
                slideChange() {
                    const e = this;
                    if (!e.thumbs.swiper) return;
                    e.thumbs.update()
                },
                update() {
                    const e = this;
                    if (!e.thumbs.swiper) return;
                    e.thumbs.update()
                },
                resize() {
                    const e = this;
                    if (!e.thumbs.swiper) return;
                    e.thumbs.update()
                },
                observerUpdate() {
                    const e = this;
                    if (!e.thumbs.swiper) return;
                    e.thumbs.update()
                },
                setTransition(e) {
                    const t = this;
                    const i = t.thumbs.swiper;
                    if (!i) return;
                    i.setTransition(e)
                },
                beforeDestroy() {
                    const e = this;
                    const t = e.thumbs.swiper;
                    if (!t) return;
                    if (e.thumbs.swiperCreated && t) {
                        t.destroy()
                    }
                }
            }
        };
        const Qi = [li, di, ci, pi, ui, mi, wi, yi, Ei, Ti, ki, Mi, Di, Li, Ai, Fi, Bi, Gi, Yi, Ri, ji, _i, Ki, Ji];
        if (typeof oi.use === "undefined") {
            oi.use = oi.Class.use;
            oi.installModule = oi.Class.installModule
        }
        oi.use(Qi);
        var es = oi;
        var ts = i(1);
        var is = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || false;
                    s.configurable = true;
                    if ("value" in s) s.writable = true;
                    Object.defineProperty(e, s.key, s)
                }
            }
            return function (t, i, s) {
                if (i) e(t.prototype, i);
                if (s) e(t, s);
                return t
            }
        }();

        function ss(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function ns(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function as(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        var rs = function (e) {
            as(t, e);

            function t() {
                var e;
                var i, s, n;
                ss(this, t);
                for (var a = arguments.length, r = Array(a), o = 0; o < a; o++) {
                    r[o] = arguments[o]
                }
                return n = (i = (s = ns(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))), s), s.swiper = null, i), ns(s, n)
            }
            is(t, [{
                key: "componentDidMount",
                value: function e() {
                    this.swiper = new es(".swiper-container", this.props.config)
                }
            }, {
                key: "render",
                value: function e() {
                    return n.a.createElement("div", {
                        className: "swiper-container"
                    }, this.props.children)
                }
            }]);
            return t
        }(n.a.Component);
        var os = t["default"] = rs
    }])
});