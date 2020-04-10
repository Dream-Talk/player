(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/LoadBox" ], {
    "0b8d": function(n, o, e) {},
    "95ed": function(n, o, e) {
        e.r(o);
        var t = e("a5a4"), a = e.n(t);
        for (var c in t) "default" !== c && function(n) {
            e.d(o, n, function() {
                return t[n];
            });
        }(c);
        o.default = a.a;
    },
    a5a4: function(n, o, e) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var t = {
            name: "LoadBox",
            props: [ "show" ],
            data: function() {
                return {
                    isActive: this.show
                };
            },
            watch: {
                show: {
                    immediate: !0,
                    handler: function(n) {
                        this.isActive = n;
                    }
                }
            }
        };
        o.default = t;
    },
    c216: function(n, o, e) {
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        e.d(o, "a", function() {
            return t;
        }), e.d(o, "b", function() {
            return a;
        });
    },
    cf2d: function(n, o, e) {
        var t = e("0b8d");
        e.n(t).a;
    },
    e82a: function(n, o, e) {
        e.r(o);
        var t = e("c216"), a = e("95ed");
        for (var c in a) "default" !== c && function(n) {
            e.d(o, n, function() {
                return a[n];
            });
        }(c);
        e("cf2d");
        var u = e("2877"), r = Object(u.a)(a.default, t.a, t.b, !1, null, "168808a5", null);
        o.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/LoadBox-create-component", {
    "components/LoadBox-create-component": function(n, o, e) {
        e("543d").createComponent(e("e82a"));
    }
}, [ [ "components/LoadBox-create-component" ] ] ]);