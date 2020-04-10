(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/SwiperBox" ], {
    "0251": function(t, n, e) {
        e.r(n);
        var a = e("656a"), o = e.n(a);
        for (var i in a) "default" !== i && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(i);
        n.default = o.a;
    },
    "235b": function(t, n, e) {
        var a = e("d576");
        e.n(a).a;
    },
    "656a": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = e("c7c6"), o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("f47e")), i = getApp(), r = {
                name: "SwiperBox",
                props: [ "banners" ],
                data: function() {
                    return {
                        duration: 800,
                        interval: 3e3,
                        indicatorDots: !0,
                        autoplay: !0,
                        bannersP: this.banners
                    };
                },
                computed: {},
                methods: {
                    openQuiz: function(n) {
                        if (1 == n.is_jump) if (2 == n.type) {
                            var e = t.getStorageSync("star");
                            "constell" == n.content ? e ? (o.default.Event.stat("navigateMiniProgram", {
                                minitype: n.appid + "_1"
                            }), t.navigateToMiniProgram({
                                appId: n.appid,
                                path: n.path + "?star=" + e + "&target=" + n.appid + "&from=1109659848&channel=2",
                                success: function() {
                                    o.default.Event.stat("navigateMiniProgram", {
                                        minitype: n.appid + "_2"
                                    });
                                }
                            })) : (n.channel = 2, t.setStorageSync("MiniProgram", n), o.default.Event.stat("selectstar", {
                                showorcencal: i.globalData.ver + "_show"
                            }), this.$parent.selectstar = !0) : (o.default.Event.stat("navigateMiniProgram", {
                                minitype: n.appid + "_1"
                            }), t.navigateToMiniProgram({
                                appId: n.appid,
                                path: n.path,
                                success: function() {
                                    o.default.Event.stat("navigateMiniProgram", {
                                        minitype: n.appid + "_2"
                                    });
                                }
                            }));
                        } else 1 == n.type && (t.switchTab({
                            url: n.path
                        }), t.setStorageSync("category_cid", n.parame.cid)); else (0, a.playGame)(n);
                    }
                },
                watch: {
                    banners: {
                        immediate: !0,
                        handler: function(t) {
                            console.log(t), this.bannersP = t;
                        }
                    }
                }
            };
            n.default = r;
        }).call(this, e("543d").default);
    },
    b895: function(t, n, e) {
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
        e.d(n, "a", function() {
            return a;
        }), e.d(n, "b", function() {
            return o;
        });
    },
    d576: function(t, n, e) {},
    f265: function(t, n, e) {
        e.r(n);
        var a = e("b895"), o = e("0251");
        for (var i in o) "default" !== i && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(i);
        e("235b");
        var r = e("2877"), c = Object(r.a)(o.default, a.a, a.b, !1, null, "4b392d42", null);
        n.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/SwiperBox-create-component", {
    "components/SwiperBox-create-component": function(t, n, e) {
        e("543d").createComponent(e("f265"));
    }
}, [ [ "components/SwiperBox-create-component" ] ] ]);