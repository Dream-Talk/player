(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/NavgationBox" ], {
    "144f": function(e, t, a) {
        var n = a("6c33");
        a.n(n).a;
    },
    3206: function(e, t, a) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n(a("bfc5")), n(a("c7cd")), n(a("eea2")), n(a("b902")), 
            n(a("939d")), n(a("c571"));
            var o = n(a("f47e")), c = !0, i = getApp(), s = {
                name: "NavgationBox",
                props: [ "page", "navdata" ],
                data: function() {
                    return {
                        current_page: this.page,
                        boxVideoAd: "",
                        show: !1,
                        recommendP: i.globalData.adbox,
                        canclick: !0
                    };
                },
                methods: {
                    switchPage: function(t, a) {
                        var n = this;
                        if (a == this.page) return !1;
                        if (1 == t.type) 10 == parseInt(this.current_page) ? (console.log("reLaunch"), e.reLaunch({
                            url: t.path
                        })) : (console.log("switchTab"), e.switchTab({
                            url: t.path
                        })); else if (2 == t.type) o.default.Event.stat("navigateMiniProgram", {
                            minitype: t.appid + "_1"
                        }), e.navigateToMiniProgram({
                            appId: t.appid,
                            path: t.path,
                            success: function() {
                                o.default.Event.stat("navigateMiniProgram", {
                                    minitype: t.appid + "_2"
                                });
                            }
                        }); else if (3 == t.type) {
                            o.default.Event.stat("indexswitch", {
                                switchtype: i.globalData.ver + "_3"
                            }), this.canclick = !1, this.recommendP = i.globalData.adbox, c = !0, e.showLoading({
                                title: "正在加载 ",
                                mask: !0
                            });
                            try {
                                var s = qq.createAppBox({
                                    adUnitId: "319e42e9f1046f5c3323424e28ad35e9"
                                });
                                s.load().then(function() {
                                    s.show().then(function() {
                                        console.log("show"), e.hideLoading();
                                    }).catch(function() {
                                        e.hideLoading(), n.show = !0, o.default.Event.stat("boxadshow", {
                                            boxtype: 2
                                        }), console.log("fffffffffffff");
                                    });
                                }).catch(function() {
                                    e.hideLoading(), n.show = !0, console.log("aaaaaaaa");
                                }), s.onClose(function(e) {
                                    c && (c = !1, n.canclick = !0, console.log(e), s.destroy(), o.default.Event.stat("boxadshow", {
                                        boxtype: 1
                                    }));
                                }), s.onError(function(e) {
                                    c && (console.log(e), c = !1, n.show = !0, o.default.Event.stat("boxadshow", {
                                        boxtype: 2
                                    }));
                                });
                            } catch (t) {
                                console.log("eeeeeeeeeeeeeeeee"), e.hideLoading(), this.show = !0, o.default.Event.stat("boxadshow", {
                                    boxtype: 2
                                });
                            }
                        }
                    },
                    clickcancel: function() {
                        this.show = !1, this.canclick = !0;
                    },
                    jumpother: function(t) {
                        e.navigateToMiniProgram({
                            appId: t.appid,
                            path: t.path
                        });
                    }
                }
            };
            t.default = s;
        }).call(this, a("543d").default);
    },
    "326a": function(e, t, a) {
        a.r(t);
        var n = a("bc99"), o = a("ecb9");
        for (var c in o) "default" !== c && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(c);
        a("144f");
        var i = a("2877"), s = Object(i.a)(o.default, n.a, n.b, !1, null, "203e0491", null);
        t.default = s.exports;
    },
    "6c33": function(e, t, a) {},
    bc99: function(e, t, a) {
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        a.d(t, "a", function() {
            return n;
        }), a.d(t, "b", function() {
            return o;
        });
    },
    ecb9: function(e, t, a) {
        a.r(t);
        var n = a("3206"), o = a.n(n);
        for (var c in n) "default" !== c && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(c);
        t.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/NavgationBox-create-component", {
    "components/NavgationBox-create-component": function(e, t, a) {
        a("543d").createComponent(a("326a"));
    }
}, [ [ "components/NavgationBox-create-component" ] ] ]);