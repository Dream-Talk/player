(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Category/Category" ], {
    "0014": function(t, e, a) {},
    "41fa": function(t, e, a) {
        a.r(e);
        var i = a("720e"), n = a("f861");
        for (var o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        a("86fe");
        var s = a("2877"), r = Object(s.a)(n.default, i.a, i.b, !1, null, "b9462a96", null);
        e.default = r.exports;
    },
    "720e": function(t, e, a) {
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, n = [];
        a.d(e, "a", function() {
            return i;
        }), a.d(e, "b", function() {
            return n;
        });
    },
    "86fe": function(t, e, a) {
        var i = a("0014");
        a.n(i).a;
    },
    dba0: function(t, e, a) {
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(a("129d")), o = i(a("4cbf")), s = i(a("1b15")), r = a("4e22"), c = a("c7c6"), d = i(a("f47e")), u = getApp(), g = {
                onLoad: function(e) {
                    var a = this;
                    if (d.default.Page.init(), 1 == u.globalData.update) {
                        var i = t.getUpdateManager();
                        i.onCheckForUpdate(function(e) {
                            e.hasUpdate && i.onUpdateReady(function(e) {
                                t.showModal({
                                    title: "更新提示",
                                    content: "发现新版本，是否重启应用?",
                                    cancelColor: "#eeeeee",
                                    confirmColor: "#FF0000",
                                    success: function(t) {
                                        t.confirm && i.applyUpdate();
                                    }
                                });
                            });
                        });
                    }
                    t.showLoading({
                        title: "加载中"
                    }), (0, c.initChannel)(e), console.log(e), 1 == e.ispush && (this.push_gid = e.push_gid),console.log("test");

                    var n = t.getStorageSync("category_cid") ? t.getStorageSync("category_cid") : e.cid;
                    this.cid = n || 14;
                    var o = setInterval(function() {
                        (u.globalData.host_init_status || a.init_times >= 5) && (clearInterval(o), a.getQQboxaddata(function() {
                            a.getCategory();
                        })), a.init_times += 1;
                    }, 100);
                },
                onShow: function() {
                    var e = t.getStorageSync("category_cid");
                    if (this.onshow && e) {
                        this.cid = e;
                        for (var a = 0; a < this.subCategories.length; a++) if (this.subCategories[a].id = this.cid) {
                            var i = a, n = this.subCategories[a];
                            this.switchTab(n, i);
                        }
                        t.removeStorageSync("category_cid");
                    }
                    this.onshow = 1;
                },
                onReady: function() {},
                onShareAppMessage: function() {
                    return {
                        title: "趣测-好玩有趣的测试网站",
                        imageUrl: ""
                    };
                },
                data: function() {
                    return {
                        categories: [],
                        subCategories: [],
                        container: [],
                        num: 0,
                        height: 0,
                        downIcon: n.default,
                        selectIcon: o.default,
                        isActive: !1,
                        order: "time",
                        load: !0,
                        waitIcon: s.default,
                        listshow: !0,
                        init_times: 0,
                        push_gid: "",
                        cid: "4",
                        onshow: 0,
                        boxVideoAd: "",
                        navData: "",
                        selectstar: !1,
                        navnum: 0,
                        nomorequiz: []
                    };
                },
                components: {
                    NavgationBox: function() {
                        return Promise.all([ a.e("common/vendor"), a.e("components/NavgationBox") ]).then(a.bind(null, "326a"));
                    },
                    SearchBox: function() {
                        return Promise.all([ a.e("common/vendor"), a.e("components/SearchBox") ]).then(a.bind(null, "f1fb"));
                    },
                    SelectStarBox: function() {
                        return Promise.all([ a.e("common/vendor"), a.e("components/SelectStar") ]).then(a.bind(null, "6cc0"));
                    }
                },
                methods: {
                    touchmove: function() {
                        return !1;
                    },
                    switchTab: function(t, e) {
                        console.log(t, e), this.cid = t.id, this.num = parseInt(e);
                        var a = this.subCategories[this.num];
                        this.subCategories[this.num][this.order + "_page"] > 1 ? this.container = this.subCategories[this.num][this.order + "_list"] : this.getSubCategory(this.num, a.cid, a.order, a[this.order + "_page"]);
                    },
                    getQQboxaddata: function(e) {
                        var a = this;
                        t.request({
                            url: u.globalData.host + "/index.php/App/Index/qqCategoryData",
                            data: {
                                appid: u.globalData.appid,
                                ver: u.globalData.ver,
                                source: u.globalData.source,
                                src: u.globalData.src
                            },
                            success: function(t) {
                                u.globalData.adbox = t.data.boxAd, a.navData = t.data.nav, t.data.channel && (u.globalData.src = t.data.channel.src, 
                                u.globalData.template = t.data.channel.template);
                                for (var i = 0; i < a.navData.length; i++) if (console.log(a.navData[i].desc), "/pages/Category/Category" == a.navData[i].path) {
                                    a.navnum = i;
                                    break;
                                }
                                e && e();
                            }
                        });
                    },
                    getCategory: function() {
                        var e = this;
                        t.request({
                            url: u.globalData.host + "/index.php/Wetest/Index/getCategoryData",
                            method: "GET",
                            data: {},
                            success: function(a) {
                                if (200 == a.statusCode) {
                                    e.categories = JSON.parse(a.data), e.subCategories = e.categories.map(function(t, e) {
                                        return {
                                            order: "time",
                                            cid: t.id,
                                            view_page: 1,
                                            view_list: [],
                                            time_page: 1,
                                            time_list: []
                                        };
                                    });
                                    for (var i = "", n = 0; n < e.subCategories.length; n++) e.subCategories[n].cid == e.cid && (e.num = n, 
                                    i = e.subCategories[n], console.log(i));
                                    e.getSubCategory(e.num, i.cid, i.order, i.view_page, e.push_gid), t.removeStorageSync("category_cid");
                                }
                            },
                            fail: function(t) {
                                console.log(t);
                            },
                            complete: function(e) {
                                t.hideLoading();
                            }
                        });
                    },
                    getSubCategory: function(e, a, i, n, o) {
                        var s = this, d = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        t.request({
                            url: u.globalData.host + "/index.php/App/Index/getPageData",
                            method: "GET",
                            data: {
                                cid: a,
                                order: i,
                                pageIndex: n,
                                appid: u.globalData.appid,
                                ver: u.globalData.ver,
                                push_gid: o
                            },
                            success: function(t) {
                                if (t.data || s.nomorequiz.push(a), 200 == t.statusCode && t.data) {
                                    var u = t.data.map(function(t, e) {
                                        return t.img = r.static_host + t.img, t;
                                    });
                                    s.subCategories[e][i + "_list"] = s.subCategories[e][i + "_list"].concat(u), s.subCategories[e][i + "_page"] = n + 1, 
                                    s.container = s.subCategories[e][i + "_list"], s.order = i;
                                }
                                o && (0, c.playGame)({
                                    id: o
                                }), d && d();
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    toQuestion: function(e) {
                        if (e.is_jump) if ("constell" == e.content) {
                            var a = t.getStorageSync("star");
                            a ? (d.default.Event.stat("navigateMiniProgram", {
                                minitype: e.appid + "_1"
                            }), t.navigateToMiniProgram({
                                appId: e.appid,
                                path: e.path + "?star=" + a + "&target=" + e.appid + "&from=1109659848&channel=2",
                                success: function() {
                                    d.default.Event.stat("navigateMiniProgram", {
                                        minitype: e.appid + "_2"
                                    });
                                    var a = t.getStorageSync("appidList") ? t.getStorageSync("appidList") : [];
                                    -1 == a.indexOf(e.appid) && a.unshift(e.appid), t.setStorageSync("appidList", a), 
                                    2 == e.type && saveOutRecord(u, 4, u.globalData.appid, e.appid);
                                }
                            })) : (t.setStorageSync("MiniProgram", e), d.default.Event.stat("selectstar", {
                                showorcencal: u.globalData.ver + "_show"
                            }), this.selectstar = !0);
                        } else d.default.Event.stat("navigateMiniProgram", {
                            minitype: e.appid + "_1"
                        }), t.navigateToMiniProgram({
                            appId: e.appid,
                            path: e.path,
                            success: function() {
                                d.default.Event.stat("navigateMiniProgram", {
                                    minitype: e.appid + "_2"
                                });
                                var a = t.getStorageSync("appidList") ? t.getStorageSync("appidList") : [];
                                -1 == a.indexOf(e.appid) && a.unshift(e.appid), t.setStorageSync("appidList", a), 
                                2 == e.type && saveOutRecord(u, 4, u.globalData.appid, e.appid);
                            }
                        }); else (0, c.playGame)(e);
                    },
                    openOrder: function() {
                        this.isActive ? this.isActive = !1 : this.isActive = !0;
                    },
                    changeOrder: function(t) {
                        if ("view" == this.order ? this.order = "time" : "time" == this.order && (this.order = "view"), 
                        this.isActive = !1, this.subCategories[this.num].order = this.order, this.subCategories[this.num][this.order + "_page"] > 1) this.container = this.subCategories[this.num][this.order + "_list"]; else {
                            var e = this.subCategories[this.num];
                            this.getSubCategory(this.num, e.cid, e.order, e[this.order + "_page"]);
                        }
                    },
                    getPagedata: function() {
                        var t = this;
                        if (console.log(this.nomorequiz, this.cid, this.nomorequiz.indexOf(this.cid)), this.load && -1 == this.nomorequiz.indexOf(this.cid)) {
                            this.load = !1;
                            var e = this.subCategories[this.num];
                            this.getSubCategory(this.num, e.cid, e.order, e[this.order + "_page"], "", function() {
                                t.load = !0;
                            });
                        }
                    },
                    bindStar: function(e) {
                        var a = this, i = t.getStorageSync("MiniProgram");
                        d.default.Event.stat("navigateMiniProgram", {
                            minitype: i.appid + "_1"
                        }), t.navigateToMiniProgram({
                            appId: i.appid,
                            path: i.path + "?star=" + e + "&target=" + i.appid + "&from=1109659848&channel=2",
                            success: function(n) {
                                d.default.Event.stat("navigateMiniProgram", {
                                    minitype: i.appid + "_2"
                                }), d.default.Event.stat("jumpluka", {
                                    hasstar: 0
                                }), t.setStorageSync("star", e), console.log(n), a.initHome({});
                            }
                        });
                    }
                },
                created: function() {}
            };
            e.default = g;
        }).call(this, a("543d").default);
    },
    f861: function(t, e, a) {
        a.r(e);
        var i = a("dba0"), n = a.n(i);
        for (var o in i) "default" !== o && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = n.a;
    },
    fc84: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("8b22"), a("921b"), e(a("66fd")), t(e(a("41fa")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "fc84", "common/runtime", "common/vendor" ] ] ]);