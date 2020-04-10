(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tarotmark/item" ], {
    "3a3d": function(a, t, e) {
        (function(a) {
            function t(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            e("8b22"), e("921b"), t(e("66fd")), a(t(e("4c64")).default);
        }).call(this, e("543d").createPage);
    },
    "4c64": function(a, t, e) {
        e.r(t);
        var s = e("b5b5"), n = e("4ed5");
        for (var i in n) "default" !== i && function(a) {
            e.d(t, a, function() {
                return n[a];
            });
        }(i);
        e("fcde");
        var r = e("2877"), o = Object(r.a)(n.default, s.a, s.b, !1, null, "b692cb06", null);
        t.default = o.exports;
    },
    "4ed5": function(a, t, e) {
        e.r(t);
        var s = e("8c72"), n = e.n(s);
        for (var i in s) "default" !== i && function(a) {
            e.d(t, a, function() {
                return s[a];
            });
        }(i);
        t.default = n.a;
    },
    "571f": function(a, t, e) {},
    "8c72": function(a, t, e) {
        (function(a) {
            function s(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(e("f47e")), i = s(e("94f5")), r = s(e("57b9")), o = new i.default(), c = new r.default(), u = getApp(), d = {
                name: "banner",
                components: {
                    Result: function() {
                        return e.e("components/tarotmark/Result").then(e.bind(null, "2d62"));
                    },
                    NavBar: function() {
                        return e.e("components/tarotmark/zhouWei-navBar/index").then(e.bind(null, "9276"));
                    }
                },
                onShareAppMessage: function(a) {
                    return {
                        title: this.canvas_data.share_desc,
                        path: "/pages/home/index?ispush=1&jump_type=2&id=" + this.id,
                        imageUrl: this.img_src
                    };
                },
                data: function() {
                    return {
                        nav_height: 0,
                        page_control: !1,
                        id: 1,
                        can_get_user: !1,
                        card_image: "",
                        card_name: "",
                        card_positive: !1,
                        canvas_data: {
                            result_url: "",
                            share_url: "",
                            header_image: "",
                            again_number: "",
                            share_desc: "",
                            talk_desc: "",
                            id: !1,
                            attr: null,
                            explain_color: !1
                        },
                        share_desc_new: "",
                        card_statues: new Array(22).fill(1),
                        screen_width: 375,
                        screen_height: 800,
                        card_width: 200,
                        margin_left: 70,
                        number: 1,
                        choice_statues: !1,
                        scroll_x: 0,
                        moveStart: {
                            x: 0,
                            y: 0
                        },
                        moveEnd: {
                            x: 375,
                            y: 612
                        },
                        animationData: {},
                        animation_img: {},
                        canvas_move: !1,
                        choice_tip_statues: !0,
                        animation_start: {},
                        start_statues: [ !1, !1, !1 ],
                        scroll_statues: !1,
                        class_show: [ !1, !1, !1, !0 ],
                        page_statues: !1,
                        click_statues: !1,
                        save_statues: !1,
                        save_img: "save_1",
                        finger_statues: !1,
                        finger_img: "finger_1",
                        has_video: !1,
                        video_statues: !1,
                        images: {
                            video: !1,
                            save_bg: !1,
                            page_bg: !1,
                            title: !1,
                            top: !1,
                            area_bg: !1,
                            back_bg: !1,
                            back: !1,
                            start_btn: !1,
                            finger: "http://tarot.cdn.taluop.com/static/tarot_sign/images/common/finger.png",
                            save: "http://tarot.cdn.taluop.com/static/tarot_sign/images/common/save_animation.png"
                        },
                        img_src: !1,
                        title: "主页导航文字",
                        showBack: !0,
                        backBtnClass: "uni-icon uni-icon-back",
                        containerStyle: "background:#ffffff",
                        titleStyle: "font-size:15px",
                        backgroundColor: "",
                        host: "https://mp.itwlw.com/index.php/wxapp/tarot/",
                        res_url: "http://tarot.cdn.taluop.com/static/tarot_sign",
                        userinfo: {}
                    };
                },
                onLoad: function(t) {
                    n.default.Event.stat("product", {
                        id: t.id
                    });
                    var e = wx.getSystemInfoSync().statusBarHeight;
                    this.nav_height = Number(48 + e) + "px", n.default.Page.init(), this.id = t.id, 
                    this.canvas_data.id = t.id, this.images.video = this.res_url + "/images/sign_" + t.id + "/video.png", 
                    this.images.save_bg = this.res_url + "/images/sign_" + t.id + "/save_bg.png", this.images.page_bg = this.res_url + "/images/sign_" + t.id + "/page_bg.png", 
                    this.images.title = this.res_url + "/images/sign_" + t.id + "/title.png", this.images.top = this.res_url + "/images/sign_" + t.id + "/top.png", 
                    this.images.area_bg = this.res_url + "/images/sign_" + t.id + "/start_bg.png", this.images.back_bg = this.res_url + "/images/sign_" + t.id + "/back_bg.png", 
                    this.images.back = this.res_url + "/images/sign_" + t.id + "/back.png", this.images.start_btn = this.res_url + "/images/sign_" + t.id + "/start_btn.png", 
                    console.log(this.images.area_bg), this.userinfo = a.getStorageSync("userinfo") ? a.getStorageSync("userinfo") : {
                        nickName: "",
                        avatarUrl: ""
                    }, this.userinfo.avatarUrl && (this.can_get_user = !0), this.page_control = !0;
                    var s = this;
                    t.again ? this.canvas_data.again_number = Number(t.again) + 1 : this.canvas_data.again_number = 1, 
                    a.getSystemInfo({
                        success: function(a) {
                            s.screen_width = a.windowWidth, s.screen_height = a.windowHeight;
                        }
                    }), this.getInfo();
                },
                onShow: function(a) {},
                methods: {
                    getuserinfo: function(t) {
                        t.detail.userInfo ? (u.globalData.user = {
                            nickName: t.detail.userInfo.nickName,
                            avatarUrl: t.detail.userInfo.avatarUrl,
                            verify: 0
                        }, a.setStorageSync("user", u.globalData.user), a.setStorageSync("userinfo", {
                            nickName: t.detail.userInfo.nickName,
                            avatarUrl: t.detail.userInfo.avatarUrl
                        }), this.userinfo = {
                            nickName: t.detail.userInfo.nickName,
                            avatarUrl: t.detail.userInfo.avatarUrl
                        }, this.can_get_user = !0, this.canvas_animation()) : this.canvas_animation();
                    },
                    getInfo: function() {
                        var t = this;
                        a.request({
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            url: t.host + "getInfo",
                            data: {
                                gid: this.id,
                                appid: u.globalData.appid,
                                ver: u.globalData.ver,
                                scene: u.globalData.scene,
                                source: u.globalData.source,
                                src: u.globalData.src
                            },
                            success: function(e) {
                                console.log(e), t.backgroundColor = e.data.data.attr.background, a.setBackgroundColor({
                                    backgroundColor: e.data.data.attr.background
                                }), t.card_image = e.data.data.card.img_url, t.card_name = e.data.data.card.name, 
                                t.card_positive = e.data.data.card.positive, t.canvas_data.result_url = e.data.data.card.result_url, 
                                t.canvas_data.share_url = e.data.data.attr.share_url, t.canvas_data.header_image = e.data.data.share.headimg, 
                                t.canvas_data.share_desc = e.data.data.share.share_desc, t.canvas_data.talk_desc = e.data.data.share.talk_desc, 
                                t.share_desc_new = e.data.data.share.share_desc_t, t.canvas_data.attr = e.data.data.attr, 
                                t.canvas_data.explain_color = e.data.data.attr.explain_color, t.images.back = e.data.data.attr.card_url, 
                                t.img_src = e.data.data.attr.talk_url, t.has_video = 1 == e.data.data.attr.is_ad && 1, 
                                t.class_show[0] = !0, 1 == e.data.data.attr.is_sub && t.sub();
                            },
                            fail: function(a) {
                                console.log(a);
                            }
                        });
                    },
                    sub: function() {
                        var t = getApp();
                        a.getSetting({
                            success: function(e) {
                                console.log("订阅全新", e.authSetting["scope.appMsgSubscribed"]), void 0 === e.authSetting["scope.appMsgSubscribed"] && "function" == typeof qq.subscribeAppMsg && "303" != t.globalData.source && qq.subscribeAppMsg({
                                    subscribe: !0,
                                    success: function(e) {
                                        o.addSubscribe(t, function() {
                                            a.setStorageSync("subscribe", 1), n.default.Event.stat("addSubscribe", {
                                                subscribetype: t.globalData.ver + "home_1"
                                            });
                                        });
                                    },
                                    fail: function(e) {
                                        console.log("----subscribeAppMsg----fail", e), "subscribeAppMsg:fail no permission" == e.errMsg && a.setStorageSync("subscribe", 2), 
                                        n.default.Event.stat("addSubscribe", {
                                            subscribetype: t.globalData.ver + "home_2"
                                        });
                                    }
                                }), !0 === e.authSetting["scope.appMsgSubscribed"] && 1 != a.getStorageSync("subscribe") && o.addSubscribe(t, function() {
                                    a.setStorageSync("subscribe", 1), n.default.Event.stat("addSubscribe", {
                                        subscribetype: t.globalData.ver + "home_1"
                                    });
                                }), !1 === e.authSetting["scope.appMsgSubscribed"] && a.setStorageSync("subscribe", 2);
                            }
                        });
                    },
                    finger_animation: function() {
                        var a = 12, t = this, e = setInterval(function() {
                            t.finger_img = "finger_" + a % 12, a += 1;
                        }, 80);
                        setTimeout(function() {
                            clearInterval(e), t.choice_tip_statues = !0;
                        }, 2880);
                    },
                    canvasEnd: function() {
                        var t = this;
                        t.start_statues = [ !1, !0, !1 ], function() {
                            t.canvas_move = !0;
                            var e = a.createAnimation({
                                duration: 1e3,
                                timingFunction: "ease"
                            }), s = -50 * t.screen_width / 750, n = t.screen_height / 2 - 50 * t.screen_width / 750;
                            t.animation = e, e.translateX(s).translateY(n).scale(1.3).step(), t.animation_start = e.export();
                        }(), setTimeout(function() {
                            t.scroll_statues = !0, setTimeout(function() {
                                t.canvas_move = !1, a.getStorageSync("finger") || (t.choice_tip_statues = !1, a.setStorageSync("finger", "has"), 
                                t.finger_statues = !0, t.finger_animation(), setTimeout(function() {
                                    t.finger_statues = !1;
                                }, 2880));
                            }, 10);
                        }, 900);
                    },
                    canvas_animation: function() {
                        function t(a) {
                            return a * e.screen_width / 750;
                        }
                        var e = this;
                        if (!this.start_statues[0]) {
                            var s = a.createCanvasContext("animationCanvas");
                            this.start_statues = [ !0, !1, !1 ], a.getImageInfo({
                                src: e.images.back,
                                success: function(a) {
                                    setTimeout(function() {
                                        e.start_statues = [ !0, !0, !0 ], c.cardAnimation(e.canvasEnd, s, a.path, 2, e.screen_width, e.screen_height, t(150), t(249), 500, 2e3, t(225), t(375), t(375));
                                    }, 1e3);
                                }
                            });
                        }
                    },
                    scroll: function(a) {
                        var t = this, e = a.detail.scrollLeft + (t.card_width / 2 - t.margin_left) * (t.screen_width / 750), s = (t.card_width - t.margin_left) * (t.screen_width / 750), n = Math.ceil(e / s);
                        n >= 1 && (t.number = n), n >= 22 && (t.number = 22);
                    },
                    choice: function(t) {
                        var e = this, s = t.currentTarget.dataset.index;
                        (function() {
                            if (!e.choice_statues) {
                                e.choice_statues = !0;
                                var a = new Array(78).fill(1);
                                a[s] = 0, e.card_statues = a;
                            }
                        })(), e.click_statues || (e.click_statues = !0, function() {
                            e.moveStart.x = t.detail.x + "px", e.moveStart.y = t.detail.y + "px", e.class_show[1] = !0;
                            var s = a.createAnimation({
                                duration: 1e3,
                                timingFunction: "ease"
                            }), n = e.screen_width * e.moveEnd.y / 750 - t.detail.y, i = e.screen_width * e.moveEnd.x / 750 - t.detail.x;
                            e.animation = s, s.translateX(i).translateY(n).step(), e.animationData = s.export(), 
                            e.animation_img = s.export(), setTimeout(function() {
                                e.class_show[2] = !0;
                                var t = a.createAnimation({
                                    duration: 1e3,
                                    timingFunction: "ease"
                                });
                                e.animation = t, t.rotateY(180).scale(1.3).step(), e.animation_img = t.export(), 
                                setTimeout(function() {
                                    1 == e.has_video || (e.page_statues = !0, setTimeout(function() {
                                        e.userinfo.avatarUrl ? a.getImageInfo({
                                            src: e.userinfo.avatarUrl,
                                            success: function(a) {
                                                console.log(a.type), "gif" != a.type ? (e.canvas_data.header_image = e.userinfo.avatarUrl, 
                                                e.$refs.result.show(e.canvas_data)) : e.$refs.result.show(e.canvas_data);
                                            }
                                        }) : e.$refs.result.show(e.canvas_data);
                                    }, 1e3));
                                }, 2e3);
                            }, 1e3);
                        }());
                    },
                    video: function() {
                        var a = this, t = this;
                        n.default.Event.stat("video_in", {}), this.video_statues || (o.useQQAd("").then(function(e) {
                            e && (n.default.Event.stat("video_end", {}), t.page_statues = !0, setTimeout(function() {
                                t.$refs.result.show(t.canvas_data);
                            }, 1e3)), a.video_statues = !1;
                        }).catch(function() {
                            n.default.Event.stat("video_end", {}), t.page_statues = !0, setTimeout(function() {
                                t.$refs.result.show(t.canvas_data);
                            }, 1e3);
                        }), this.video_statues = !0);
                    },
                    save: function(a) {
                        var t = this;
                        this.img_src = a.img, this.canvas_data.share_desc = this.share_desc_new, this.save_statues = !0, 
                        this.save_naimate(), setTimeout(function() {
                            t.save_statues = !1;
                        }, 3e3);
                    },
                    save_naimate: function() {
                        var a = 1, t = this, e = setInterval(function() {
                            t.save_img = "save_" + a % 3, a += 1;
                        }, 300);
                        setTimeout(function() {
                            clearInterval(e);
                        }, 3e3);
                    }
                }
            };
            t.default = d;
        }).call(this, e("543d").default);
    },
    b5b5: function(a, t, e) {
        var s = function() {
            var a = this;
            a.$createElement;
            a._self._c;
        }, n = [];
        e.d(t, "a", function() {
            return s;
        }), e.d(t, "b", function() {
            return n;
        });
    },
    fcde: function(a, t, e) {
        var s = e("571f");
        e.n(s).a;
    }
}, [ [ "3a3d", "common/runtime", "common/vendor" ] ] ]);