(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Search/Search" ], {
    "0924": function(t, e, n) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a(n("a35f")), c = n("4e22"), i = a(n("f47e")), r = getApp(), u = {
                name: "Search",
                data: function() {
                    return {
                        searchIcon: o.default,
                        search_list: [],
                        tips: "未搜到，来试试这些",
                        keyword: ""
                    };
                },
                onLoad: function(e) {
                    i.default.Page.init(), this.keyword = e.keyword, this.search(), t.setNavigationBarTitle({
                        title: "搜索"
                    });
                },
                components: {
                    ListBox: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("components/ListBox") ]).then(n.bind(null, "493d"));
                    }
                },
                methods: {
                    search: function() {
                        var e = this, n = this.keyword;
                        this.keyword = "", "openid_quce" == n ? qq.setClipboardData({
                            data: t.getStorageSync("openid"),
                            success: function(e) {
                                t.showModal({
                                    title: "提示",
                                    content: "用户openid已复制到剪切板"
                                });
                            }
                        }) : t.request({
                            url: r.globalData.host + "/index.php/App/Index/search",
                            data: {
                                q: n
                            },
                            success: function(t) {
                                console.log(t), t.data.rcmd ? e.tips = "未搜到，来试试这些" : e.tips = "与 ".concat(n, " 相关的测试"), 
                                e.search_list = t.data.content.map(function(t, e) {
                                    return t.img = c.static_host + t.img, t;
                                });
                            }
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    "14e3": function(t, e, n) {
        var a = n("6a8a");
        n.n(a).a;
    },
    2930: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("8b22"), n("921b"), e(n("66fd")), t(e(n("9263")).default);
        }).call(this, n("543d").createPage);
    },
    "6a8a": function(t, e, n) {},
    "7c13": function(t, e, n) {
        n.r(e);
        var a = n("0924"), o = n.n(a);
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        e.default = o.a;
    },
    9263: function(t, e, n) {
        n.r(e);
        var a = n("fd5e"), o = n("7c13");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("14e3");
        var i = n("2877"), r = Object(i.a)(o.default, a.a, a.b, !1, null, "2f560bfe", null);
        e.default = r.exports;
    },
    fd5e: function(t, e, n) {
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
    }
}, [ [ "2930", "common/runtime", "common/vendor" ] ] ]);