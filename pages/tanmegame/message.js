(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tanmegame/message" ], {
    "0b31": function(e, a, n) {},
    "457b": function(e, a, n) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var t = {
            name: "msg",
            props: {
                content: {
                    default: ""
                },
                msgimg: {
                    default: ""
                }
            },
            data: function() {
                return {};
            }
        };
        a.default = t;
    },
    "5a72": function(e, a, n) {
        var t = n("0b31");
        n.n(t).a;
    },
    a136: function(e, a, n) {
        n.r(a);
        var t = n("d97a"), o = n("f420");
        for (var u in o) "default" !== u && function(e) {
            n.d(a, e, function() {
                return o[e];
            });
        }(u);
        n("5a72");
        var c = n("2877"), r = Object(c.a)(o.default, t.a, t.b, !1, null, "5df7941c", null);
        a.default = r.exports;
    },
    d97a: function(e, a, n) {
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        n.d(a, "a", function() {
            return t;
        }), n.d(a, "b", function() {
            return o;
        });
    },
    f420: function(e, a, n) {
        n.r(a);
        var t = n("457b"), o = n.n(t);
        for (var u in t) "default" !== u && function(e) {
            n.d(a, e, function() {
                return t[e];
            });
        }(u);
        a.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/tanmegame/message-create-component", {
    "pages/tanmegame/message-create-component": function(e, a, n) {
        n("543d").createComponent(n("a136"));
    }
}, [ [ "pages/tanmegame/message-create-component" ] ] ]);