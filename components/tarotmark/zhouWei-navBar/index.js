var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/tarotmark/zhouWei-navBar/index" ], {
    "0d58": function(t, n, o) {},
    "1f5a": function(t, n, o) {
        var e = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
        o.d(n, "a", function() {
            return e;
        }), o.d(n, "b", function() {
            return r;
        });
    },
    "3b88": function(t, n, o) {
        o.r(n);
        var e = o("51b0"), r = o.n(e);
        for (var a in e) "default" !== a && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(a);
        n.default = r.a;
    },
    "51b0": function(n, o, e) {
        (function(n) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var e = [ "pages/navList" ], r = [ "#FFF", "#FFFFFF", "white", "rgb(255,255,255)", "rgba(255,255,255,1)" ], a = {
                props: {
                    backState: {
                        default: function() {
                            return 1e3;
                        }
                    },
                    home: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    },
                    bgColor: {
                        type: [ String, Array ],
                        default: function() {
                            return "#FFF";
                        }
                    },
                    bgColorAngle: {
                        type: [ String, Number ],
                        default: function() {
                            return 90;
                        }
                    },
                    fontColor: {
                        type: String,
                        default: function() {
                            return "#000";
                        }
                    },
                    titleCenter: {
                        type: Boolean,
                        default: function() {
                            return !0;
                        }
                    },
                    title: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    type: {
                        type: String,
                        default: function() {
                            return "fixed";
                        }
                    },
                    transparentFixedFontColor: {
                        type: String,
                        default: function() {
                            return "#000";
                        }
                    }
                },
                data: function() {
                    return {
                        firstPage: !1,
                        transparentValue: 1,
                        navTitle: "",
                        navFontColor: "#000",
                        navBgColor: "linear-gradient(90deg, #FFF 0%, #FFF 100%)",
                        navTransparentFixedFontColor: "#000",
                        themeBgColor: !1,
                        statusBarHeight: 0
                    };
                },
                computed: {
                    back: function() {
                        return 1e3 == this.backState || 3e3 == this.backState;
                    },
                    navFixed: function() {
                        return "transparentFixed" == this.type || "fixed" == this.type;
                    },
                    navLine: function() {
                        return "transparent" !== this.type && r.includes(this.navBgColor);
                    },
                    isWhite: function() {
                        return r.includes(this.navFontColor);
                    },
                    isTwoBtn: function() {
                        return (1e3 == this.backState || 3e3 == this.backState) && this.home && !this.firstPage;
                    }
                },
                watch: {
                    title: function(t) {
                        this.navTitle = t;
                    },
                    fontColor: function(t) {
                        this.navFontColor = t;
                    },
                    bgColor: function(t) {
                        this.getNavBgColor(t);
                    },
                    transparentFixedFontColor: function(t) {
                        this.navTransparentFixedFontColor = t;
                    }
                },
                created: function() {
                    this.navTitle = this.title, this.navFontColor = this.fontColor, this.getNavBgColor(this.bgColor), 
                    this.navTransparentFixedFontColor = this.transparentFixedFontColor, this.statusBarHeight = n.getSystemInfoSync().statusBarHeight;
                    var t = this;
                    "transparentFixed" == this.type && (this.transparentValue = 0);
                    var o = getCurrentPages(), r = o.length;
                    1 != r || e.includes(o[0].route) || (this.firstPage = !0), "transparentFixed" == this.type && (o[r - 1].onPageScroll = function(n) {
                        t.$emit("scroll", n), n.scrollTop > 180 ? t.transparentValue = 1 : t.transparentValue = n.scrollTop / 180;
                    });
                },
                methods: {
                    onBackPage: function() {
                        3e3 == this.backState ? this.$emit("backClick") : n.navigateBack();
                    },
                    onBackHome: function() {
                        n.switchTab({
                            url: "/pages/navList"
                        });
                    },
                    getNavBgColor: function(n) {
                        if ("themeBgColor" == n) this.themeBgColor = !0, this.navBgColor = ""; else if ("string" == typeof n) this.navBgColor = "linear-gradient(90deg, " + n + " 0%, " + n + " 100%)"; else if (n instanceof Array && n.length >= 2) {
                            var o = "linear-gradient(" + this.bgColorAngle + "deg";
                            n.forEach(function(n) {
                                "string" == typeof n ? o += "," + n : "object" == (void 0 === n ? "undefined" : t(n)) && (o += "," + n.color + " " + n.scale);
                            }), o += ")", this.navBgColor = o;
                        }
                    },
                    settingColor: function() {
                        r.includes(this.navFontColor) ? n.setNavigationBarColor({
                            frontColor: "#ffffff",
                            backgroundColor: this.navBgColor
                        }) : n.setNavigationBarColor({
                            frontColor: "#000000",
                            backgroundColor: this.navBgColor
                        });
                    }
                }
            };
            o.default = a;
        }).call(this, e("543d").default);
    },
    9276: function(t, n, o) {
        o.r(n);
        var e = o("1f5a"), r = o("3b88");
        for (var a in r) "default" !== a && function(t) {
            o.d(n, t, function() {
                return r[t];
            });
        }(a);
        o("aa51");
        var i = o("2877"), l = Object(i.a)(r.default, e.a, e.b, !1, null, "ba24d200", null);
        n.default = l.exports;
    },
    aa51: function(t, n, o) {
        var e = o("0d58");
        o.n(e).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/tarotmark/zhouWei-navBar/index-create-component", {
    "components/tarotmark/zhouWei-navBar/index-create-component": function(t, n, o) {
        o("543d").createComponent(o("9276"));
    }
}, [ [ "components/tarotmark/zhouWei-navBar/index-create-component" ] ] ]);