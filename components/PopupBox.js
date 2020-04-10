(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/PopupBox" ], {
    "240f": function(t, n, e) {
        e.r(n);
        var o = e("fec2"), i = e("48c2");
        for (var c in i) "default" !== c && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(c);
        e("fc8f");
        var a = e("2877"), s = Object(a.a)(i.default, o.a, o.b, !1, null, "0d6b6140", null);
        n.default = s.exports;
    },
    "48c2": function(t, n, e) {
        e.r(n);
        var o = e("a879"), i = e.n(o);
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = i.a;
    },
    a879: function(t, n, e) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = o(e("1418")), c = o(e("6f91")), a = e("c7c6"), s = o(e("f47e")), u = {
                props: [ "content", "indeximg" ],
                data: function() {
                    return {
                        closeIcon: i.default,
                        topImg: c.default,
                        contents: this.content,
                        indeximgs: this.indeximg
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
                        this.$parent.dailybox = !1, this.$parent.showindeximg = !1, s.default.Event.stat("index_img", {
                            cilicktype: 1
                        });
                    },
                    showAllContents: function() {
                        this.$parent.dailybox = !1, this.$parent.scrollToLists();
                    },
                    toQuestion: function(t) {
                        (0, a.playGame)(t);
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
            n.default = u;
        }).call(this, e("543d").default);
    },
    cea6: function(t, n, e) {},
    fc8f: function(t, n, e) {
        var o = e("cea6");
        e.n(o).a;
    },
    fec2: function(t, n, e) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        e.d(n, "a", function() {
            return o;
        }), e.d(n, "b", function() {
            return i;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/PopupBox-create-component", {
    "components/PopupBox-create-component": function(t, n, e) {
        e("543d").createComponent(e("240f"));
    }
}, [ [ "components/PopupBox-create-component" ] ] ]);