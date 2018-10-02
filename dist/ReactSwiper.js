define("ReactSwiper", ["react", "swiper"], function (e, t) {
    return function (e) {
        var t = {};

        function r(n) {
            if (t[n]) {
                return t[n].exports
            }
            var o = t[n] = {
                i: n,
                l: false,
                exports: {}
            };
            e[n].call(o.exports, o, o.exports, r);
            o.l = true;
            return o.exports
        }
        r.m = e;
        r.c = t;
        r.d = function (e, t, n) {
            if (!r.o(e, t)) {
                Object.defineProperty(e, t, {
                    enumerable: true,
                    get: n
                })
            }
        };
        r.r = function (e) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: true
            })
        };
        r.t = function (e, t) {
            if (t & 1) e = r(e);
            if (t & 8) return e;
            if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
            var n = Object.create(null);
            r.r(n);
            Object.defineProperty(n, "default", {
                enumerable: true,
                value: e
            });
            if (t & 2 && typeof e != "string")
                for (var o in e) r.d(n, o, function (t) {
                    return e[t]
                }.bind(null, o));
            return n
        };
        r.n = function (e) {
            var t = e && e.__esModule ? function t() {
                return e["default"]
            } : function t() {
                return e
            };
            r.d(t, "a", t);
            return t
        };
        r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        };
        r.p = "";
        return r(r.s = 2)
    }([function (t, r) {
        t.exports = e
    }, function (e, r) {
        e.exports = t
    }, function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(0);
        var o = r.n(n);
        var i = r(1);
        var u = r.n(i);
        var f = function () {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t
            }
        }();

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function c(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }

        function l(e, t) {
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
        var p = function (e) {
            l(t, e);

            function t() {
                var e;
                var r, n, o;
                a(this, t);
                for (var i = arguments.length, u = Array(i), f = 0; f < i; f++) {
                    u[f] = arguments[f]
                }
                return o = (r = (n = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), n), n.swiper = null, r), c(n, o)
            }
            f(t, [{
                key: "componentDidMount",
                value: function e() {
                    this.swiper = new u.a(".swiper-container", this.props.config)
                }
            }, {
                key: "render",
                value: function e() {
                    return o.a.createElement("div", {
                        className: "swiper-container"
                    }, this.props.children)
                }
            }]);
            return t
        }(o.a.Component);
        t["default"] = p
    }])
});