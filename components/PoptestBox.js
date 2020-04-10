(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/PoptestBox" ], {
    "344f": function(t, e, n) {
        var o = n("55e8");
        n.n(o).a;
    },
    "55e8": function(t, e, n) {},
    6234: function(t, e, n) {
        n.r(e);
        var o = n("aace"), a = n("bf4a");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("344f");
        var c = n("2877"), s = Object(c.a)(a.default, o.a, o.b, !1, null, "49cdcde7", null);
        e.default = s.exports;
    },
    6458: function(t, e, n) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("1418")), i = o(n("df8f")), c = n("c7c6"), s = o(n("f47e")), u = getApp(), l = {
                props: [ "indextest" ],
                data: function() {
                    return {
                        closeIcon: a.default,
                        topImg: i.default,
                        indeximgs: this.indextest
                    };
                },
                watch: {
                    content: {
                        immediate: !0,
                        handler: function(t) {
                            this.contents = t;
                        }
                    }
                },
                methods: {
                    closePopup: function() {
                        this.$parent.dailybox = !1, this.$parent.showtestbox = !1, s.default.Event.stat("indextestBox", {
                            clicktype: u.globalData.ver + "_1"
                        });
                    },
                    toQuestion: function(t) {
                        s.default.Event.stat("indextestBox", {
                            clicktype: u.globalData.ver + "_2"
                        }), (0, c.playGame)({
                            gid: t
                        }), this.$parent.showtestbox = !1;
                    },
                    jump: function() {
                        console.log(this.indeximgs.path), this.$parent.showindeximg = !1, s.default.Event.stat("index_img", {
                            cilicktype: 2
                        }), 2 == this.indeximgs.type ? t.navigateTo({
                            url: this.indeximgs.path
                        }) : 1 == this.indeximgs.type && (t.switchTab({
                            url: this.indeximgs.path
                        }), t.setStorageSync("category_cid", this.indeximgs.parame.cid));
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    aace: function(t, e, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return a;
        });
    },
    bf4a: function(t, e, n) {
        n.r(e);
        var o = n("6458"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/PoptestBox-create-component", {
    "components/PoptestBox-create-component": function(t, e, n) {
        n("543d").createComponent(n("6234"));
    }
}, [ [ "components/PoptestBox-create-component" ] ] ]);