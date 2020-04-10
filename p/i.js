(global.webpackJsonp = global.webpackJsonp || []).push([ [ "p/i" ], {
    "0037": function(a, t, e) {
        (function(a) {
            function o(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            function n(a, t, e) {
                return t in a ? Object.defineProperty(a, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : a[t] = e, a;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(e("81ab")), r = o(e("2e96")), s = o(e("1b15")), l = o(e("a35f")), c = o(e("f47e")), d = e("4e22"), u = e("c7c6"), p = getApp(), g = {
                data: function() {
                    var a;
                    return a = {
                        update: 0,
                        banners: [],
                        recommend: [],
                        searchRmd: [],
                        searchitem: {},
                        latest: [],
                        featured: [],
                        show: !0,
                        pageIndex: 1,
                        load: !0,
                        waitIcon: s.default,
                        searchIcon: l.default,
                        current: !0,
                        keyword: "",
                        dailybox: !1,
                        popup: [],
                        ispush: !1,
                        pushitem: [],
                        today: "",
                        focus: !1,
                        listshow: !0,
                        init_times: 0,
                        indexImg: "",
                        showindeximg: !1,
                        boxVideoAd: "",
                        showtestbox: !1,
                        newScanData: {},
                        selectstar: !1,
                        groupclose: i.default,
                        groupicon: r.default,
                        showgroupBox: !0
                    }, n(a, "showgroupBox", !1), n(a, "qqGroupid", ""), n(a, "navData", ""), a;
                },
                onLoad: function(t) {
                    var e = this;
                    c.default.Page.init();
                    var o = {};
                    if (t.scene && (console.log(decodeURIComponent(t.scene)), decodeURIComponent(t.scene).split("&").forEach(function(a, t) {
                        o[a.split("=")[0]] = a.split("=")[1];
                    }), (0, u.initChannel)(o)), 1 == p.globalData.update) {
                        var n = a.getUpdateManager();
                        n.onCheckForUpdate(function(t) {
                            console.log(t.hasUpdate), t.hasUpdate && n.onUpdateReady(function(t) {
                                a.showModal({
                                    title: "更新提示",
                                    content: "发现新版本，是否重启应用?",
                                    cancelColor: "#eeeeee",
                                    confirmColor: "#FF0000",
                                    success: function(a) {
                                        a.confirm && n.applyUpdate();
                                    }
                                });
                            });
                        });
                    }
                    a.showLoading({
                        title: "加载中"
                    }), c.default.Event.stat("homepage", {}), "1109659848" == p.globalData.appid ? a.setNavigationBarTitle({
                        title: "趣测"
                    }) : "1109802828" == p.globalData.appid && a.setNavigationBarTitle({
                        title: "微测试"
                    }), (0, u.initChannel)(t), "303" == p.globalData.source && (this.listshow = !1);
                    var i = setInterval(function() {
                        if (p.globalData.host_init_status || e.init_times >= 5) {
                            clearInterval(i), console.log("home init start");
                            var a = new Date(), o = a.getFullYear(a), n = a.getMonth(a) + 1, r = a.getDate(a);
                            e.today = o + "" + n + r, e.initHome(t);
                        }
                        e.init_times += 1;
                    }, 100);
                },
                onShareAppMessage: function() {
                    return {
                        title: "趣测-好玩有趣的测试网站",
                        imageUrl: ""
                    };
                },
                onShow: function() {
                    this.selectstar = !1, "1109659848" == p.globalData.appid ? a.setNavigationBarTitle({
                        title: "趣测"
                    }) : "1109802828" == p.globalData.appid && a.setNavigationBarTitle({
                        title: "微测试"
                    });
                },
                components: {
                    SearchBox: function() {
                        return Promise.all([ e.e("common/vendor"), e.e("components/SearchBox") ]).then(e.bind(null, "f1fb"));
                    },
                    SwiperBox: function() {
                        return e.e("components/SwiperBox").then(e.bind(null, "f265"));
                    },
                    GridBox: function() {
                        return Promise.all([ e.e("common/vendor"), e.e("components/GridBox") ]).then(e.bind(null, "0585"));
                    },
                    ListBox: function() {
                        return Promise.all([ e.e("common/vendor"), e.e("components/ListBox") ]).then(e.bind(null, "493d"));
                    },
                    LoadBox: function() {
                        return e.e("components/LoadBox").then(e.bind(null, "e82a"));
                    },
                    PopupBox: function() {
                        return Promise.all([ e.e("common/vendor"), e.e("components/PopupBox") ]).then(e.bind(null, "240f"));
                    },
                    NavgationBox: function() {
                        return Promise.all([ e.e("common/vendor"), e.e("components/NavgationBox") ]).then(e.bind(null, "326a"));
                    },
                    PoptestBox: function() {
                        return Promise.all([ e.e("common/vendor"), e.e("components/PoptestBox") ]).then(e.bind(null, "6234"));
                    },
                    SelectStarBox: function() {
                        return Promise.all([ e.e("common/vendor"), e.e("components/SelectStar") ]).then(e.bind(null, "6cc0"));
                    }
                },
                methods: {
                    initHome: function(t) {
                        var e = this, o = {
                            env: p.globalData.env,
                            ver: p.globalData.ver,
                            appid: p.globalData.appid,
                            scene: p.globalData.scene,
                            src: p.globalData.src,
                            source: p.globalData.source
                        };
                        t.g && (o.scan_gid = t.g), t.q && (o.q = t.q);
                        var n = a.getStorageSync("star") ? a.getStorageSync("star") : 0;
                        o.star_id = n;
                        var i = a.getStorageSync("Gridlist") ? a.getStorageSync("Gridlist") : [], r = a.getStorageSync("appidList") ? a.getStorageSync("appidList") : [];
                        i.length > 20 && (i = i.slice(0, 20), a.setStorageSync("Gridlist", i)), o.history_rcmd = i.join(), 
                        o.history_app = r.join(), a.request({
                            url: p.globalData.host + "/index.php/App/index/qqindexData",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            method: "POST",
                            data: o,
                            success: function(o) {
                                e.searchRmd = o.data.searchRmd;
                                var n = 0;
                                e.searchitem = e.searchRmd[n], setInterval(function() {
                                    ++n >= e.searchRmd.length && (n = 0), e.searchitem = e.searchRmd[n];
                                }, 3e3), e.recommend = o.data.recommend, e.banners = o.data.banner, e.navData = o.data.nav, 
                                o.data.channel && (p.globalData.src = o.data.channel.src, p.globalData.template = o.data.channel.template);
                                var i = a.getStorageSync("daily_recommend_status"), r = !1;
                                if (1 == o.data.daily.show_daily_box && (e.ispush || i == e.today || (a.setStorageSync("daily_recommend_status", e.today), 
                                r = !0)), console.log(r), o.data.indexImg) {
                                    var s = e.today + o.data.indexImg.id;
                                    s == a.getStorageSync("today_img") || (a.setStorageSync("today_img", s), e.showindeximg = !0, 
                                    o.data.indexImg.src = d.static_host + o.data.indexImg.src, e.indexImg = o.data.indexImg);
                                }
                                var l = o.data.qqGroup ? o.data.qqGroup : {};
                                l.status && (e.showgroupBox = !0, e.qqGroupid = l.groupid), p.globalData.adbox = o.data.boxAd, 
                                e.dailybox = !(1 != o.data.daily.show_daily_box || !r), e.popup = {
                                    update: o.data.daily.count,
                                    items: o.data.daily.list
                                };
                                var c = o.data.lists.map(function(a, t) {
                                    return a.img = d.static_host + a.img + "?imageView2/1/w/100/h/100", a;
                                });
                                e.latest = e.latest.concat(c), 1 == e.pageIndex && (e.featured = e.latest), console.log(o.data.scandata), 
                                o.data.scandata && (0, u.playGame)(o.data.scandata);
                                var g = o.data.newScanData ? o.data.newScanData : {};
                                console.log(o.data.newScanData, g), e.showtestbox = g.showScanbox, t.g && (g.showScanbox ? e.showtestbox = g.showScanbox : (0, 
                                u.playGame)({
                                    gid: t.g
                                })), t.q && (1 == p.globalData.template ? a.navigateTo({
                                    url: "/pages/quiz/index?q=".concat(t.q)
                                }) : 2 == p.globalData.template && a.navigateTo({
                                    url: "/pages/quizchoiceness/index?q=".concat(t.q)
                                })), t.t && (0, u.playGame)({
                                    jump_type: 2,
                                    gid: t.t
                                }), t.d && (0, u.playGame)({
                                    jump_type: 3,
                                    gid: t.d
                                }), g.data && (g.data.img = d.static_host + g.data.logo), e.newScanData = g, e.pageIndex += 1, 
                                t.ispush && (0, u.playGame)(t), op.ispush && (0, u.playGame)(op);
                            },
                            complete: function() {
                                a.hideLoading();
                            }
                        });
                    },
                    getPagedata: function() {
                        var t = this;
                        this.load && (this.load = !1, a.request({
                            url: p.globalData.host + "/index.php/App/index/getPageData",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                pageIndex: this.pageIndex,
                                appid: p.globalData.appid,
                                ver: p.globalData.ver
                            },
                            success: function(a) {
                                if (200 == a.statusCode) {
                                    var e = a.data.map(function(a, t) {
                                        return a.img = d.static_host + a.img + "?imageView2/1/w/100/h/100", a;
                                    });
                                    t.latest = t.latest.concat(e), 1 == t.pageIndex && (t.featured = t.latest), t.pageIndex += 1;
                                }
                                t.load = !0;
                            },
                            fail: function(a) {
                                t.load = !0;
                            }
                        }));
                    },
                    showboxBanner: function() {
                        var a = this;
                        console.log(this.boxVideoAd), this.boxVideoAd.load().then(function() {
                            a.boxVideoAd.show();
                        }), this.boxVideoAd.onClose(function(a) {
                            console.log(a);
                        });
                    },
                    switchContent: function(a) {
                        var t = this;
                        this.current = a, a ? (this.keyword = "", this.focus = !1) : setTimeout(function() {
                            t.focus = !0;
                        }, 300);
                    },
                    search: function(t) {
                        if (t) a.navigateTo({
                            url: "/pages/Search/Search?keyword=".concat(t)
                        }); else {
                            var e = this.keyword;
                            this.keyword = "", a.navigateTo({
                                url: "/pages/Search/Search?keyword=".concat(e)
                            });
                        }
                    },
                    toSearch: function(t) {
                        a.navigateTo({
                            url: "/pages/Search/Search?keyword=".concat(t.keyword)
                        });
                    },
                    scrollToLists: function() {
                        setTimeout(function() {
                            a.pageScrollTo({
                                scrollTop: 2e3,
                                duration: 300
                            });
                        }, 500);
                    },
                    bindStar: function(t) {
                        var e = this;
                        a.setStorageSync("star", t);
                        var o = a.getStorageSync("MiniProgram");
                        c.default.Event.stat("navigateMiniProgram", {
                            minitype: o.appid + "_1"
                        }), a.navigateToMiniProgram({
                            appId: o.appid,
                            path: o.path + "?star=" + t + "&target=" + o.appid + "&from=1109659848&channel=" + o.channel,
                            success: function(n) {
                                c.default.Event.stat("navigateMiniProgram", {
                                    minitype: o.appid + "_2"
                                }), c.default.Event.stat("jumpluka", {
                                    hasstar: 0
                                }), a.setStorageSync("star", t), console.log(n), e.selectstar = !1, e.initHome({});
                            }
                        });
                    }
                }
            };
            t.default = g;
        }).call(this, e("543d").default);
    },
    "0f94": function(a, t, e) {
        e.r(t);
        var o = e("0037"), n = e.n(o);
        for (var i in o) "default" !== i && function(a) {
            e.d(t, a, function() {
                return o[a];
            });
        }(i);
        t.default = n.a;
    },
    b49e: function(a, t, e) {},
    e472: function(a, t, e) {
        var o = e("b49e");
        e.n(o).a;
    },
    f07f: function(a, t, e) {
        (function(a) {
            function t(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            e("8b22"), e("921b"), t(e("66fd")), a(t(e("fabb")).default);
        }).call(this, e("543d").createPage);
    },
    f4a6: function(a, t, e) {
        var o = function() {
            var a = this;
            a.$createElement;
            a._self._c, a._isMounted || (a.e0 = function(t) {
                a.showgroupBox = !1;
            });
        }, n = [];
        e.d(t, "a", function() {
            return o;
        }), e.d(t, "b", function() {
            return n;
        });
    },
    fabb: function(a, t, e) {
        e.r(t);
        var o = e("f4a6"), n = e("0f94");
        for (var i in n) "default" !== i && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(i);
        e("e472");
        var r = e("2877"), s = Object(r.a)(n.default, o.a, o.b, !1, null, "75b8ba46", null);
        t.default = s.exports;
    }
}, [ [ "f07f", "common/runtime", "common/vendor" ] ] ]);