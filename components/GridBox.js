(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/GridBox" ], {
    "0585": function(t, e, n) {
        n.r(e);
        var a = n("e722"), o = n("eba2");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("60d6");
        var r = n("2877"), c = Object(r.a)(o.default, a.a, a.b, !1, null, "6ec0f32e", null);
        e.default = c.exports;
    },
    "0b7f": function(t, e, n) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a(n("48b8")), i = n("c7c6"), r = a(n("f47e")), c = getApp(), d = {
                props: [ "recommend" ],
                data: function() {
                    return {
                        recommendP: this.recommend,
                        moreIcon: o.default
                    };
                },
                methods: {
                    viewUrl: function(e) {
                        if (e.is_jump) if ("constell" == e.content) {
                            var n = t.getStorageSync("star");
                            n ? (r.default.Event.stat("navigateMiniProgram", {
                                minitype: e.appid + "_1"
                            }), t.navigateToMiniProgram({
                                appId: e.appid,
                                path: e.path + "?star=" + n + "&target=" + e.appid + "&from=1109659848&channel=3",
                                success: function() {
                                    r.default.Event.stat("navigateMiniProgram", {
                                        minitype: e.appid + "_2"
                                    }), r.default.Event.stat("jumpluka", {
                                        hasstar: 1
                                    });
                                }
                            })) : (e.channel = 3, t.setStorageSync("MiniProgram", e), r.default.Event.stat("selectstar", {
                                showorcencal: c.globalData.ver + "_show"
                            }), this.$parent.selectstar = !0);
                        } else r.default.Event.stat("navigateMiniProgram", {
                            minitype: e.appid + "_1"
                        }), t.navigateToMiniProgram({
                            appId: e.appid,
                            path: e.path,
                            success: function() {
                                r.default.Event.stat("navigateMiniProgram", {
                                    minitype: e.appid + "_2"
                                });
                            }
                        }); else {
                            console.log(e.id);
                            var a = t.getStorageSync("Gridlist") ? t.getStorageSync("Gridlist") : [];
                            -1 == a.indexOf(e.id) && a.unshift(e.id), t.setStorageSync("Gridlist", a), (0, i.playGame)(e);
                        }
                    }
                },
                watch: {
                    recommend: {
                        immediate: !0,
                        handler: function(t) {
                            this.recommendP = t;
                        }
                    }
                }
            };
            e.default = d;
        }).call(this, n("543d").default);
    },
    "60d6": function(t, e, n) {
        var a = n("e9a0");
        n.n(a).a;
    },
    e722: function(t, e, n) {
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
        n.d(e, "a", function() {
            return a;
        }), n.d(e, "b", function() {
            return o;
        });
    },
    e9a0: function(t, e, n) {},
    eba2: function(t, e, n) {
        n.r(e);
        var a = n("0b7f"), o = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/GridBox-create-component", {
    "components/GridBox-create-component": function(t, e, n) {
        n("543d").createComponent(n("0585"));
    }
}, [ [ "components/GridBox-create-component" ] ] ]);