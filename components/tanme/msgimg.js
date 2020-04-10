(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/tanme/msgimg" ], {
    1106: function(n, t, e) {
        var a = e("8671");
        e.n(a).a;
    },
    "38b9": function(n, t, e) {
        e.r(t);
        var a = e("b1a6"), o = e.n(a);
        for (var c in a) "default" !== c && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        t.default = o.a;
    },
    8671: function(n, t, e) {},
    b1a6: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {
            name: "msgimg",
            props: {
                m_img: {
                    default: ""
                }
            },
            data: function() {
                return {};
            },
            methods: {}
        };
        t.default = a;
    },
    cc9a: function(n, t, e) {
        e.r(t);
        var a = e("f922"), o = e("38b9");
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        e("1106");
        var u = e("2877"), r = Object(u.a)(o.default, a.a, a.b, !1, null, "7c1f000d", null);
        t.default = r.exports;
    },
    f922: function(n, t, e) {
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
        e.d(t, "a", function() {
            return a;
        }), e.d(t, "b", function() {
            return o;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/tanme/msgimg-create-component", {
    "components/tanme/msgimg-create-component": function(n, t, e) {
        e("543d").createComponent(e("cc9a"));
    }
}, [ [ "components/tanme/msgimg-create-component" ] ] ]);