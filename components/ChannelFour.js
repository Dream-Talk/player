(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ChannelFour" ], {
    2121: function(n, t, e) {
        e.r(t);
        var o = e("967d"), a = e("3252");
        for (var u in a) "default" !== u && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(u);
        e("5176");
        var c = e("2877"), r = Object(c.a)(a.default, o.a, o.b, !1, null, "4f8fd974", null);
        t.default = r.exports;
    },
    3252: function(n, t, e) {
        e.r(t);
        var o = e("9c07"), a = e.n(o);
        for (var u in o) "default" !== u && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        t.default = a.a;
    },
    5176: function(n, t, e) {
        var o = e("b349");
        e.n(o).a;
    },
    "967d": function(n, t, e) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        e.d(t, "a", function() {
            return o;
        }), e.d(t, "b", function() {
            return a;
        });
    },
    "9c07": function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("94f5")), a = getApp(), u = new o.default(), c = {
                props: [ "list" ],
                data: function() {
                    return {};
                },
                computed: {},
                created: function() {},
                methods: {
                    requestbannerlist: function() {},
                    jump: function(t) {
                        1 == t.isjump ? n.navigateToMiniProgram({
                            appId: t.appid,
                            path: t.path,
                            success: function() {
                                2 == t.type && u.saveOutRecord(t, a.globalData.appid);
                            }
                        }) : n.navigateTo({
                            url: t.path
                        });
                    }
                }
            };
            t.default = c;
        }).call(this, e("543d").default);
    },
    b349: function(n, t, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ChannelFour-create-component", {
    "components/ChannelFour-create-component": function(n, t, e) {
        e("543d").createComponent(e("2121"));
    }
}, [ [ "components/ChannelFour-create-component" ] ] ]);