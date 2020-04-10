(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/index" ], {
    "166d": function(a, t, e) {
        e.r(t);
        var n = e("533b"), o = e("caca");
        for (var i in o) "default" !== i && function(a) {
            e.d(t, a, function() {
                return o[a];
            });
        }(i);
        e("ec69");
        var r = e("2877"), c = Object(r.a)(o.default, n.a, n.b, !1, null, "a2df2248", null);
        t.default = c.exports;
    },
    "2e0d": function(a, t, e) {
        (function(a) {
            function n(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(e("81ab")), i = n(e("2e96")), r = n(e("1b15")), c = n(e("a35f")), d = n(e("f47e")), s = e("4e22"), l = e("c7c6"), u = (new (n(e("94f5")).default)(), 
            getApp()), p = {
                data: function() {
                    return {
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
                        waitIcon: r.default,
                        searchIcon: c.default,
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
                        groupclose: o.default,
                        groupicon: i.default,
                        showgroupBox: !1,
                        qqGroupid: "",
                        showdingyue: "",
                        navData: "",
                        navnum: ""
                    };
                },
                onLoad: function(t) {
                    var e = this;
                    d.default.Page.init(), (0, l.initChannel)(t);
                    var n = {};
                    if (t.scene && (console.log(decodeURIComponent(t.scene)), decodeURIComponent(t.scene).split("&").forEach(function(a, t) {
                        n[a.split("=")[0]] = a.split("=")[1];
                    }), (0, l.initChannel)(n)), 1 == u.globalData.update) {
                        var o = a.getUpdateManager();
                        o.onCheckForUpdate(function(t) {
                            console.log(t.hasUpdate), t.hasUpdate && o.onUpdateReady(function(t) {
                                a.showModal({
                                    title: "更新提示",
                                    content: "发现新版本，是否重启应用?",
                                    cancelColor: "#eeeeee",
                                    confirmColor: "#FF0000",
                                    success: function(a) {
                                        a.confirm && o.applyUpdate();
                                    }
                                });
                            });
                        });
                    }
                    a.showLoading({
                        title: "加载中"
                    }), d.default.Event.stat("homepage", {}),"1109659848" == u.globalData.appid ? a.setNavigationBarTitle({
                        title: "趣测"
                    }) : "1109802828" == u.globalData.appid && a.setNavigationBarTitle({
                        title: "微测试"
                    }), "303" == u.globalData.source && (this.listshow = !1);
                    var i = setInterval(function() {
                        if (u.globalData.host_init_status || e.init_times >= 5) {
                            clearInterval(i), console.log("home init start");
                            var a = new Date(), o = a.getFullYear(a), r = a.getMonth(a) + 1, c = a.getDate(a);
                            e.today = o + "" + r + c, e.initHome(t, n);
                        }
                        e.init_times += 1;
                    }, 100);
                    try {
                        this.boxVideoAd = qq.createAppBox({
                            adUnitId: "319e42e9f1046f5c3323424e28ad35e9"
                        });
                    } catch (a) {}
                },
                onShareAppMessage: function() {
                    return {
                        title: "趣测-好玩有趣的测试网站",
                        imageUrl: ""
                    };
                },
                onShow: function() {
                    this.selectstar = !1, "1109659848" == u.globalData.appid ? a.setNavigationBarTitle({
                        title: "趣测"
                    }) : "1109802828" == u.globalData.appid && a.setNavigationBarTitle({
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
                    initHome: function(t, e) {
                        var n = this, o = {
                            env: u.globalData.env,
                            ver: u.globalData.ver,
                            appid: u.globalData.appid,
                            scene: u.globalData.scene,
                            src: u.globalData.src,
                            source: u.globalData.source
                        };
                        t.g && (o.scan_gid = t.g), t.q && (o.q = t.q);
                        var i = a.getStorageSync("star") ? a.getStorageSync("star") : 0;
                        o.star_id = i;
                        var r = a.getStorageSync("Gridlist") ? a.getStorageSync("Gridlist") : [], c = a.getStorageSync("appidList") ? a.getStorageSync("appidList") : [];
                        r.length > 20 && (r = r.slice(0, 20), a.setStorageSync("Gridlist", r)), o.history_rcmd = r.join(), 
                        o.history_app = c.join(), a.request({
                            url: u.globalData.host + "/index.php/App/index/qqindexData",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            method: "POST",
                            data: o,
                            success: function(o) {
                                n.searchRmd = o.data.searchRmd;
                                var i = 0;
                                n.searchitem = n.searchRmd[i], setInterval(function() {
                                    ++i >= n.searchRmd.length && (i = 0), n.searchitem = n.searchRmd[i];
                                }, 3e3), n.recommend = o.data.recommend, n.navData = o.data.nav;
                                for (var r = 0; r < n.navData.length; r++) if (console.log(n.navData[r].desc), "/pages/home/index" == n.navData[r].path) {
                                    n.navnum = r;
                                    break;
                                }
                                n.banners = o.data.banner;
                                var c = a.getStorageSync("daily_recommend_status"), d = !1;
                                if (1 == o.data.daily.show_daily_box && (n.ispush || c == n.today || (a.setStorageSync("daily_recommend_status", n.today), 
                                d = !0)), console.log(d), o.data.indexImg) {
                                    var p = n.today + o.data.indexImg.id;
                                    p == a.getStorageSync("today_img") || (a.setStorageSync("today_img", p), n.showindeximg = !0, 
                                    o.data.indexImg.src = s.static_host + o.data.indexImg.src, n.indexImg = o.data.indexImg);
                                }
                                o.data.channel && (u.globalData.src = o.data.channel.src, u.globalData.template = o.data.channel.template);
                                var g = o.data.qqGroup ? o.data.qqGroup : {};
                                g.status && (n.showgroupBox = !0, n.qqGroupid = g.groupid), u.globalData.adbox = o.data.boxAd, 
                                n.dailybox = !(1 != o.data.daily.show_daily_box || !d), n.popup = {
                                    update: o.data.daily.count,
                                    items: o.data.daily.list
                                };
                                var h = o.data.lists.map(function(a, t) {
                                    return a.img = s.static_host + a.img + "?imageView2/1/w/100/h/100", a;
                                });
                                n.latest = n.latest.concat(h), 1 == n.pageIndex && (n.featured = n.latest), console.log(o.data.scandata), 
                                o.data.scandata && (0, l.playGame)(o.data.scandata);
                                var m = o.data.newScanData ? o.data.newScanData : {};
                                console.log(o.data.newScanData, m), n.showtestbox = m.showScanbox, t.g && (m.showScanbox ? n.showtestbox = m.showScanbox : (0, 
                                l.playGame)({
                                    gid: t.g
                                })), t.q && (1 == u.globalData.template ? a.navigateTo({
                                    url: "/pages/quiz/index?q=".concat(t.q)
                                }) : 2 == u.globalData.template && a.navigateTo({
                                    url: "/pages/quizchoiceness/index?q=".concat(t.q)
                                })), m.data && (m.data.img = s.static_host + m.data.logo), n.newScanData = m, n.pageIndex += 1, 
                                t.ispush && (0, l.playGame)(t), e.ispush && (0, l.playGame)(e);
                            },
                            complete: function() {
                                a.hideLoading();
                            }
                        });
                    },
                    getPagedata: function() {
                        var t = this;
                        this.load && (this.load = !1, a.request({
                            url: u.globalData.host + "/index.php/App/index/getPageData",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                pageIndex: this.pageIndex,
                                appid: u.globalData.appid,
                                ver: u.globalData.ver
                            },
                            success: function(a) {
                                if (200 == a.statusCode) {
                                    var e = a.data.map(function(a, t) {
                                        return a.img = s.static_host + a.img + "?imageView2/1/w/100/h/100", a;
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
                        var e = this, n = a.getStorageSync("MiniProgram");
                        d.default.Event.stat("navigateMiniProgram", {
                            minitype: n.appid + "_1"
                        }), a.navigateToMiniProgram({
                            appId: n.appid,
                            path: n.path + "?star=" + t + "&target=" + n.appid + "&from=1109659848&channel=" + n.channel,
                            success: function(o) {
                                d.default.Event.stat("navigateMiniProgram", {
                                    minitype: n.appid + "_2"
                                }), d.default.Event.stat("jumpluka", {
                                    hasstar: 0
                                }), a.setStorageSync("star", t), console.log(n.path + "?star=" + t + "&target=" + n.appid + "&from=1109659848&channel=2"), 
                                e.selectstar = !1, e.initHome({});
                            }
                        });
                    }
                }
            };
            t.default = p;
        }).call(this, e("543d").default);
    },
    "533b": function(a, t, e) {
        var n = function() {
            var a = this;
            a.$createElement;
            a._self._c;
        }, o = [];
        e.d(t, "a", function() {
            return n;
        }), e.d(t, "b", function() {
            return o;
        });
    },
    "6cf4": function(a, t, e) {
        (function(a) {
            function t(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            e("8b22"), e("921b"), t(e("66fd")), a(t(e("166d")).default);
        }).call(this, e("543d").createPage);
    },
    caca: function(a, t, e) {
        e.r(t);
        var n = e("2e0d"), o = e.n(n);
        for (var i in n) "default" !== i && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(i);
        t.default = o.a;
    },
    df20: function(a, t, e) {},
    ec69: function(a, t, e) {
        var n = e("df20");
        e.n(n).a;
    }
}, [ [ "6cf4", "common/runtime", "common/vendor" ] ] ]);