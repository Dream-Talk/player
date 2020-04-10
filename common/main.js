(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    2826: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function n(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            a("8b22"), a("921b");
            var o = t(a("66fd")), r = t(a("e2a4"));
            o.default.config.productionTip = !1, r.default.mpType = "app", e(new o.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {}, o = Object.keys(a);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                    }))), o.forEach(function(t) {
                        n(e, t, a[t]);
                    });
                }
                return e;
            }({}, r.default))).$mount();
        }).call(this, a("543d").createApp);
    },
    "63f7": function(e, t, a) {
        a.r(t);
        var n = a("fce6"), o = a.n(n);
        for (var r in n) "default" !== r && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(r);
        t.default = o.a;
    },
    9723: function(e, t, a) {},
    d73a: function(e, t, a) {
        var n = a("9723");
        a.n(n).a;
    },
    e2a4: function(e, t, a) {
        a.r(t);
        var n = a("63f7");
        for (var o in n) "default" !== o && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(o);
        a("d73a");
        var r = a("2877"), u = Object(r.a)(n.default, void 0, void 0, !1, null, null, null);
        t.default = u.exports;
    },
    fce6: function(e, t, a) {
        (function(e) {
            function n(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, r = a("4e22"), u = a("c7c6"), s = a("615d"), c = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(a("f47e")), l = a("4fab"), i = {
                globalData: (o = {
                    appid: "wxb1eae598597de472",
                    ver: "5.4.012",
                    src: 14,
                    source: 14,
                    apptype: "wx",
                    env: "wxapp_pro",
                    user: {
                        nickName: "",
                        avatarUrl: ""
                    },
                    view_url: "",
                    channel: 1,
                    acid: 0,
                    round: 1,
                    userInfo: null,
                    host: "https://qc-ssl.itwlw.com",
                    spare_status: 0,
                    free_jump: "",
                    pro_jump: "",
                    shareTicket: "",
                    scene: "",
                    onshowdata: "",
                    app_status: 2,
                    ajax_status: 0,
                    adbannerstatus: 0,
                    adbannerid: ""
                }, n(o, "scene", ""), n(o, "host_init_status", 0), n(o, "update", ""), n(o, "adbox", ""), 
                n(o, "getJumpUrl", "https://mp.itwlw.com/index.php/"), n(o, "from_gid", 0), n(o, "christmas", {}), 
                n(o, "template", 1), o),
                onLaunch: function(t) {
                    var a = this;
                    c.default.App.init({
                        appID: "500695233",
                        eventID: "500695234",
                        autoReport: !0,
                        statParam: !0,
                        ignoreParams: []
                    }), this.$options.globalData.scene = t.scene;
                    var n = this.$scope;
                    n.globalData.scene = t.scene, 1037 == t.scene && t.query.target && (0, s.saveJumpRecord)(t, this.$options), 
                    1022 == t.scene && e.setStorageSync("user_top", !0), console.log(t), e.getSetting({
                        success: function(t) {
                            t.authSetting["scope.userInfo"] && e.getUserInfo({
                                success: function(e) {
                                    e.userInfo && (n.globalData.user = {
                                        nickName: e.userInfo.nickName,
                                        avatarUrl: e.userInfo.avatarUrl
                                    });
                                }
                            });
                        }
                    }), console.log((0, u.formatVer)());
                    var o = (0, u.formatVer)() + "quceConfig";
                    e.request({
                        url: r.ssl_static_host + "qqapp/quce.config.json?vv=" + (0, l.Md5)(o),
                        success: function(e) {
                            if (1 == e.data.status) {
                                var t = e.data.host_list;
                                n.globalData.host = t[(0, u.getRandIndex)(t.length)], n.globalData.host_init_status = 1, 
                                console.log(n.globalData.host);
                            } else n.globalData.host_init_status = 1;
                            n.globalData.update = e.data.update;
                        },
                        fail: function(e) {
                            n.globalData.host_init_status = 1;
                        }
                    }), setTimeout(function() {
                        e.request({
                            url: n.globalData.host + "/index.php/App/Index/incAppScene",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                scene: t.scene,
                                ver: a.$options.globalData.ver,
                                appid: a.$options.globalData.appid
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        });
                    }, 150);
                },
                onShow: function(e) {}
            };
            t.default = i;
        }).call(this, a("543d").default);
    }
}, [ [ "2826", "common/runtime", "common/vendor" ] ] ]);