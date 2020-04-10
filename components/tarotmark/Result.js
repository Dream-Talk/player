(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/tarotmark/Result" ], {
    "00d8": function(t, e, a) {},
    "0fbb": function(t, e, a) {
        var n = a("00d8");
        a.n(n).a;
    },
    "2d62": function(t, e, a) {
        a.r(e);
        var n = a("faf6"), i = a("4956");
        for (var s in i) "default" !== s && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(s);
        a("0fbb");
        var r = a("2877"), o = Object(r.a)(i.default, n.a, n.b, !1, null, "7801d948", null);
        e.default = o.exports;
    },
    4956: function(t, e, a) {
        a.r(e);
        var n = a("a84a"), i = a.n(n);
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = i.a;
    },
    a84a: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, function(t) {
                t && t.__esModule;
            }(a("f47e"));
            var n = {
                props: {
                    info: {
                        type: Object
                    }
                },
                data: function() {
                    return {
                        nav_height: 0,
                        id: !1,
                        save_statues: !1,
                        page_statues: !1,
                        canvas: {
                            width: "375px",
                            height: "565px"
                        },
                        img_src: !1,
                        images: {
                            more: !1,
                            share: !1,
                            again: !1,
                            result_bottom: !1
                        },
                        loading_statues: !1,
                        bottom_statues: !1,
                        canvas_image: this.info.share_url,
                        qr_code: this.info.result_url,
                        user_image: "",
                        showshare: !1,
                        user_name: !1,
                        again_number: 1,
                        share_desc: "快来领取你的2020年关键词吧",
                        talk_desc: "新的一年会有新的人生，新的主题，那么你的2020关键词会是什么呢？点击测试",
                        card_height: 1248,
                        card_width: 750,
                        attr: null,
                        explain_color: !1,
                        host: "http://mp.pv.itwlw.com/index.php/wxapp/tarot/",
                        res_url: "http://tarot.cdn.taluop.com/static/tarot_sign"
                    };
                },
                methods: {
                    show: function(e) {
                        function a() {
                            function e(e) {
                                t.getImageInfo({
                                    src: s.user_image,
                                    success: function(t) {
                                        r.drawImage(t.path, Number(s.attr.user_image[0]), Number(s.attr.user_image[1]), Number(s.attr.user_image[2]), Number(s.attr.user_image[3])), 
                                        e();
                                    },
                                    fail: function(t) {
                                        console.log("userimg", s.user_image, t);
                                    }
                                });
                            }
                            function a(e) {
                                t.getImageInfo({
                                    src: s.canvas_image,
                                    success: function(t) {
                                        r.drawImage(t.path, 0, 0, Number(s.card_width), Number(s.card_height)), e();
                                    },
                                    fail: function(t) {
                                        console.log("canvas_image", s.canvas_image, t);
                                    }
                                });
                            }
                            function n(e) {
                                t.getImageInfo({
                                    src: s.qr_code,
                                    success: function(t) {
                                        r.drawImage(t.path, Number(s.attr.qr_code[0]), Number(s.attr.qr_code[1]), Number(s.attr.qr_code[2]), Number(s.attr.qr_code[3])), 
                                        e();
                                    },
                                    fail: function(t) {
                                        console.log("qr_code", s.qr_code, t);
                                    }
                                });
                            }
                            function i() {
                                1 == s.attr.is_username && (r.font = s.attr.name_font, r.fillStyle = s.attr.name_fill, 
                                s.user_name.length >= s.attr.name_length && (s.user_name = s.user_name.substr(0, s.attr.name_length) + "..."), 
                                1 == s.attr.name_center && r.setTextAlign("center"), 0 != s.user_name && r.fillText(s.user_name, s.attr.name_location[0], s.attr.name_location[1])), 
                                r.draw(!0, function() {
                                    setTimeout(function() {
                                        t.canvasToTempFilePath({
                                            x: 0,
                                            y: 0,
                                            width: s.card_width,
                                            height: s.card_height,
                                            destWidth: s.card_width,
                                            destHeight: s.card_height,
                                            canvasId: "share",
                                            success: function(t) {
                                                s.img_src = t.tempFilePath, s.loading_statues = !1, s.bottom_statues = !0;
                                            }
                                        }), t.canvasToTempFilePath({
                                            x: s.attr.share_x,
                                            y: s.attr.share_y,
                                            width: s.attr.share_width,
                                            height: s.attr.share_height,
                                            destWidth: s.attr.share_width,
                                            destHeight: s.attr.share_height,
                                            canvasId: "share",
                                            success: function(t) {
                                                setTimeout(function() {
                                                    s.$emit("save", {
                                                        img: t.tempFilePath
                                                    });
                                                }, 1e3);
                                            }
                                        });
                                    }, 100);
                                });
                            }
                            var r = wx.createCanvasContext("share");
                            new Promise(function(t, a) {
                                e(t);
                            }).then(function() {
                                return new Promise(function(t, e) {
                                    a(t);
                                });
                            }).then(function() {
                                return new Promise(function(t, e) {
                                    n(t);
                                });
                            }).then(function() {
                                return new Promise(function(t, e) {
                                    i();
                                });
                            });
                        }
                        function n() {
                            if (r / c > s.card_width / s.card_height) {
                                var t = s.card_width * c / s.card_height;
                                return Math.floor(s.card_height * t / 750);
                            }
                            return Math.floor(s.card_height * r / 750);
                        }
                        console.log(e);
                        var i = wx.getSystemInfoSync().statusBarHeight;
                        this.nav_height = Number(48 + i) + "px", this.page_statues = !0;
                        var s = this;
                        this.id = e.id, this.canvas_image = e.result_url, this.qr_code = e.share_url, this.user_image = e.header_image, 
                        this.again_number = e.again_number, this.talk_desc = e.talk_desc, this.attr = e.attr, 
                        this.explain_color = e.explain_color, this.card_width = e.attr.width, this.card_height = e.attr.height, 
                        this.images.more = this.res_url + "/images/sign_" + e.id + "/more_btn.png", this.images.share = this.res_url + "/images/sign_" + e.id + "/share_btn.png", 
                        this.images.again = this.res_url + "/images/sign_" + e.id + "/again.png", this.images.result_bottom = this.res_url + "/images/sign_' + e.id + '/result_bottom.png", 
                        this.loading_statues = !0;
                        var r, o, c;
                        s = this, t.getSystemInfo({
                            success: function(t) {
                                r = t.windowWidth, o = t.windowHeight, c = Math.floor(o - 68 - 147 * r / 750), s.canvas.height = n() + "px", 
                                s.canvas.width = Number(n()) * (s.card_width / s.card_height) + "px", setTimeout(function() {
                                    a();
                                }, 1e3);
                            }
                        });
                    },
                    again: function() {
                        t.redirectTo({
                            url: "/pages/tarotmark/item?again=" + this.again_number + "&id=" + this.id
                        });
                    },
                    more: function() {
                        t.navigateBack({
                            delta: 1
                        });
                    },
                    shareQzone: function() {
                        qq.openQzonePublish({
                            text: this.talk_desc,
                            media: [ {
                                type: "photo",
                                path: this.img_src
                            } ]
                        });
                    },
                    shareList: function() {
                        this.showshare = !0;
                    },
                    save_image: function() {
                        var e = this;
                        if (!this.save_statues) {
                            var a = this.img_src;
                            t.saveImageToPhotosAlbum({
                                filePath: a,
                                success: function(t) {
                                    e.save_statues = !0, qq.showToast({
                                        title: "保存成功",
                                        icon: "success",
                                        duration: 2e3
                                    }), setTimeout(function() {
                                        e.save_statues = !1;
                                    }, 2e3);
                                },
                                fail: function(e) {
                                    t.showModal({
                                        title: "保存失败",
                                        content: "保存图片到相册功能需要开启相册授权！",
                                        showCancel: !1,
                                        cancelText: "取消",
                                        confirmText: "确定",
                                        success: function(t) {
                                            qq.openSetting({});
                                        }
                                    });
                                }
                            });
                        }
                    },
                    cancelShare: function() {
                        this.showshare = !1;
                    }
                }
            };
            e.default = n;
        }).call(this, a("543d").default);
    },
    faf6: function(t, e, a) {
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        a.d(e, "a", function() {
            return n;
        }), a.d(e, "b", function() {
            return i;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/tarotmark/Result-create-component", {
    "components/tarotmark/Result-create-component": function(t, e, a) {
        a("543d").createComponent(a("2d62"));
    }
}, [ [ "components/tarotmark/Result-create-component" ] ] ]);