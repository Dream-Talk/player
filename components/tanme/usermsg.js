(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/tanme/usermsg" ], {
    "498c": function(n, e, t) {
        t.r(e);
        var o = t("547a"), a = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = a.a;
    },
    "547a": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "umsg",
            props: {
                ucontent: {
                    default: ""
                },
                userurl: {
                    default: ""
                }
            },
            data: function() {
                return {};
            }
        };
        e.default = o;
    },
    "5c65": function(n, e, t) {
        t.r(e);
        var o = t("b7e3"), a = t("498c");
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        t("dbd7");
        var c = t("2877"), r = Object(c.a)(a.default, o.a, o.b, !1, null, "d8fb415c", null);
        e.default = r.exports;
    },
    "71f1": function(n, e, t) {},
    b7e3: function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return a;
        });
    },
    dbd7: function(n, e, t) {
        var o = t("71f1");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/tanme/usermsg-create-component", {
    "components/tanme/usermsg-create-component": function(n, e, t) {
        t("543d").createComponent(t("5c65"));
    }
}, [ [ "components/tanme/usermsg-create-component" ] ] ]);