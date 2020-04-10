var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tanmegame/game" ], {
    "2d2f": function(e, t, n) {
        n.r(t);
        var s = n("d836"), o = n.n(s);
        for (var i in s) "default" !== i && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(i);
        t.default = o.a;
    },
    "70be": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("8b22"), n("921b"), t(n("66fd")), e(t(n("7738")).default);
        }).call(this, n("543d").createPage);
    },
    "75ad": function(e, t, n) {
        var s = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        n.d(t, "a", function() {
            return s;
        }), n.d(t, "b", function() {
            return o;
        });
    },
    7738: function(e, t, n) {
        n.r(t);
        var s = n("75ad"), o = n("2d2f");
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("a653");
        var a = n("2877"), r = Object(a.a)(o.default, s.a, s.b, !1, null, "205cbec8", null);
        t.default = r.exports;
    },
    "82b9": function(e, t, n) {},
    a653: function(e, t, n) {
        var s = n("82b9");
        n.n(s).a;
    },
    d836: function(t, n, s) {
        (function(t) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = o(s("f47e")), r = o(s("6f91")), l = new (o(s("94f5")).default)(), c = getApp(), m = {
                onShareAppMessage: function() {
                    return this.footbox = !1, {
                        title: this.sharetitle,
                        path: "/pages/home/index?ispush=1&jump_type=3&id=" + this.gamegid
                    };
                },
                components: {
                    msg: function() {
                        return s.e("pages/tanmegame/message").then(s.bind(null, "a136"));
                    },
                    umsg: function() {
                        return s.e("components/tanme/usermsg").then(s.bind(null, "5c65"));
                    },
                    msgimg: function() {
                        return s.e("components/tanme/msgimg").then(s.bind(null, "cc9a"));
                    },
                    userimgBox: function() {
                        return s.e("components/tanme/userimg").then(s.bind(null, "1df7"));
                    },
                    resimg: function() {
                        return s.e("components/tanme/resultimg").then(s.bind(null, "d609"));
                    },
                    ImageCropper: function() {
                        return s.e("components/invinbg-image-cropper/invinbg-image-cropper").then(s.bind(null, "c0e6"));
                    }
                },
                data: function() {
                    var e;
                    return e = {
                        wechatdesc: "",
                        wechatresult: "",
                        topimg: r.default,
                        defaulticon: "https://ssl-tanme.cdn.itwlw.com/common/img/tanme.jpg",
                        username: "",
                        scrollNumber: 0,
                        scrollId: "id0",
                        usersex: "",
                        ischeck: 0,
                        isinput: "",
                        userimg: "https://ssl-tanme.cdn.itwlw.com/common/img/tanme.jpg",
                        tempFilePaths: "",
                        resimgurl: "",
                        sharetitle: "",
                        sendbtn: !0,
                        filebtn: !1,
                        sexbtn: !1,
                        contentmsg: [],
                        gameconfig: "",
                        qzonetitle: "",
                        footbox: !1,
                        commimg: "",
                        gameheight: "",
                        gamegid: "",
                        imgfinished: !1,
                        showmodel: !1,
                        hasbannerad: 0,
                        transitiontime: 60,
                        showAds: !1,
                        forcedAds: !1,
                        asbannerad: ""
                    }, i(e, "transitiontime", ""), i(e, "banneradutilid", ""), i(e, "banneradcontent", ""), 
                    i(e, "video_banner_ad", ""), i(e, "adBox_cancel_btn", ""), i(e, "adBox_video_btn", ""), 
                    i(e, "banner_ad_style", ""), i(e, "adBox_style_type", ""), i(e, "modelContent", ""), 
                    i(e, "progresspercent", 0), i(e, "bannerNumber", 0), i(e, "playNumber", 0), i(e, "videoplayednumber", ""), 
                    i(e, "adtime", ""), i(e, "forcebutton", !1), i(e, "videoAd", ""), i(e, "showbannerad", !1), 
                    i(e, "makeRes", 0), i(e, "userinfo", {}), i(e, "host", "https://ssl-tanme.itwlw.com"), 
                    i(e, "imgurl", "https://ssl-uploads-admin.cdn.itwlw.com"), i(e, "uploadimg", ""), 
                    e;
                },
                onLoad: function(e) {
                    a.default.Page.init(), t.showLoading({
                        title: "正在加载"
                    });
                    var n = this, s = {
                        gid: e.id
                    };
                    a.default.Event.stat("startgame", {
                        gid: s.gid
                    }), n.gamegid = s.gid, console.log(s.gid, "用户gid"), this.userinfo = t.getStorageSync("userinfo") ? t.getStorageSync("userinfo") : {
                        nickName: "",
                        avatarUrl: ""
                    }, this.userinfo.avatarUrl ? (n.isinput = this.userinfo.nickName, n.userimg = this.userinfo.avatarUrl, 
                    n.tempFilePaths = n.userimg, t.getImageInfo({
                        src: this.userinfo.avatarUrl,
                        success: function(e) {
                            console.log(e.type), "gif" == e.type ? n.tempFilePaths = n.defaulticon : n.tempFilePaths = n.userimg;
                        }
                    })) : (n.userimg = n.defaulticon, n.tempFilePaths = n.userimg);
                    var o = t.getStorageSync("playNumbertanme"), i = t.getStorageSync("bannerNumbertanme"), r = t.getStorageSync("videoplayednumbertanme");
                    n.playNumber = o || 0, n.bannerNumber = i || 0, n.videoplayednumber = r || 0, n.adtime = t.getStorageSync("ad_videotanme") ? n.adtime : 0, 
                    console.log(n.playNumber, n.bannerNumber, n.videoplayednumber, n.adtime, "广告测试"), 
                    this.getGameData();
                },
                computed: {
                    modelList: function() {
                        if (this.modelContent) return this.modelContent.split("##");
                        console.log(this.modelContent, "////////+////");
                    },
                    adcontent: function() {
                        if (this.banneradcontent) {
                            if (1 == this.banner_ad_style) return this.banneradcontent.split("##").join("，");
                            if (2 == this.banner_ad_style) return this.banneradcontent.split("##");
                        }
                    }
                },
                watch: {
                    imgfinished: function() {
                        console.log("==================");
                    }
                },
                methods: {
                    getGameData: function() {
                        var e = this;
                        t.request({
                            url: this.host + "/index.php/Wxapp/Index/getGameInfo",
                            data: {
                                gid: this.gamegid,
                                appid: c.globalData.appid,
                                version: c.globalData.ver,
                                adtime: this.adtime ? this.adtime : 0,
                                adplayed: this.bannerNumber,
                                quizplayed: this.playNumber,
                                videoplayed: this.videoplayednumber
                            },
                            success: function(n) {
                                console.log(n.data, "*****"), e.sharetitle = n.data.sharetitle, e.wechatdesc = n.data.wechatdesc, 
                                e.wechatresult = n.data.wechatresult, e.gameconfig = JSON.parse(n.data.gameConfig), 
                                e.qzonetitle = n.data.title, console.log(e.gameconfig, "---");
                                var s = n.data;
                                e.showAds = 1 == s.showAds, e.forcedAds = 1 == s.forcedAds, e.hasbannerad = s.banner_ad, 
                                e.transitiontime = 10 * parseInt(s.banner_ad_time), e.banneradutilid = s.banner_ad_utilid, 
                                e.banneradcontent = s.banner_ad_content, e.video_banner_ad = s.video_banner_ad, 
                                e.adBox_cancel_btn = s.adBox_cancel_btn, e.adBox_video_btn = s.adBox_video_btn, 
                                e.banner_ad_style = s.banner_ad_style, e.adBox_style_type = s.adBox_style_type ? s.adBox_style_type : 1, 
                                e.modelContent = s.adBox_desc, console.log(s.adBox_desc, "desc");
                                var o = s.video_ad_utilid ? s.video_ad_utilid : "54722faa6e7bc4733033911f21e83b90";
                                console.log(s.video_ad_select), e.forcebutton = 1 != s.video_ad_select;
                                try {
                                    e.videoAd = qq.createRewardedVideoAd({
                                        adUnitId: o
                                    });
                                } catch (e) {}
                                console.log(e.videoAd, "*****"), void 0 == e.userinfo.nickName ? e.isinput = "" : e.isinput = e.userinfo.nickName, 
                                t.setNavigationBarTitle({
                                    title: n.data.title
                                }), e.getqrcodeUrl(), e.unamestyle(), t.hideLoading(), e.sendbtn = !1;
                            },
                            fail: function(e) {
                                console.log(e, "-------------------");
                            }
                        });
                    },
                    getqrcodeUrl: function() {
                        var e = this;
                        t.request({
                            url: this.host + "/index.php/Wxapp/Index/getGameQrcode",
                            data: {
                                gid: this.gamegid,
                                appid: c.globalData.appid,
                                version: c.globalData.ver
                            },
                            success: function(t) {
                                console.log(t.data.qrcode), e.gameconfig.drawconfig.qrcode.path = e.imgurl + "/" + t.data.qrcode;
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    },
                    adresult: function() {
                        var e = this;
                        this.drawcanvas(), this.showAds && this.videoAd ? (console.log("----------视频广告------------"), 
                        setTimeout(function() {
                            a.default.Event.stat("show_video", {
                                videotype: e.adBox_style_type
                            }), console.log("show_video", {
                                videotype: e.adBox_style_type
                            }, "98798798"), e.showmodel = !0, e.showbannerad = !0;
                        }, 1e3)) : 1 == this.hasbannerad ? (console.log("----------banner广告------------"), 
                        this.showmodel = !0, setTimeout(function() {
                            e.modelProgress();
                        }, 1e3)) : (console.log("----------------无广告-----------------"), setTimeout(function() {
                            t.showLoading({
                                title: "请稍后"
                            }), setTimeout(function() {
                                var n = setInterval(function() {
                                    e.imgfinished && (e.imgresult(), t.hideLoading(), clearInterval(n));
                                }, 10);
                            }, 1e3);
                        }, 600));
                    },
                    modelProgress: function() {
                        var e = this, n = setInterval(function() {
                            e.progresspercent < 100 ? e.progresspercent++ : (clearInterval(n), e.showmodel = !1, 
                            setTimeout(function() {
                                var n = setInterval(function() {
                                    e.imgfinished && (e.imgresult(), clearInterval(n));
                                }, 10);
                                e.showAds && (e.bannerNumber = parseInt(e.bannerNumber) + 1, t.setStorageSync("bannerNumbertanme", e.bannerNumber), 
                                console.log(e.bannerNumber, "**************************"));
                            }, 600));
                        }, this.transitiontime);
                    },
                    watchBanner: function() {
                        var e = this;
                        this.showmodel = !1, l.useQQAd(this.videoAd).then(function(n) {
                            n ? (t.setStorageSync("ad_videotanme", Math.round(new Date().getTime() / 1e3)), 
                            e.bannerNumber = parseInt(e.bannerNumber) + 1, t.setStorageSync("bannerNumbertanme", e.bannerNumber), 
                            e.videoplayednumber = parseInt(e.videoplayednumber) + 1, t.setStorageSync("videoplayednumbertanme", e.videoplayednumber), 
                            a.default.Event.stat("success_video", {
                                showtype: e.adBox_style_type
                            }), setTimeout(function() {
                                var t = setInterval(function() {
                                    e.imgfinished && (e.imgresult(), clearInterval(t));
                                }, 10);
                            }, 1e3)) : (e.forcedAds ? 1 == e.video_banner_ad && (e.showmodel = !0, e.showbannerad = !1, 
                            setTimeout(function() {
                                e.modelProgress();
                            }, 1e3)) : setTimeout(function() {
                                var t = setInterval(function() {
                                    e.imgfinished && (e.imgresult(), clearInterval(t));
                                }, 10);
                            }, 500), a.default.Event.stat("fail_video", {
                                cancaltype: 1,
                                adstyletype: e.adBox_style_type
                            }));
                        }).catch(function() {
                            t.setStorageSync("ad_videotanme", Math.round(new Date().getTime() / 1e3)), e.bannerNumber = parseInt(e.bannerNumber) + 1, 
                            t.setStorageSync("bannerNumbertanme", e.bannerNumber), e.videoplayednumber = parseInt(e.videoplayednumber) + 1, 
                            t.setStorageSync("videoplayednumbertanme", e.videoplayednumber), a.default.Event.stat("success_video", {
                                showtype: e.adBox_style_type
                            }), setTimeout(function() {
                                var t = setInterval(function() {
                                    e.imgfinished && (e.imgresult(), clearInterval(t));
                                }, 10);
                            }, 1e3);
                        });
                    },
                    gohome: function() {
                        a.default.Event.stat("fail_video", {
                            cancaltype: 2,
                            adstyletype: this.adBox_style_type
                        }), t.navigateBack({
                            delta: 1
                        });
                    },
                    cancalModel: function() {
                        this.showmodel = !1, this.videoButton = !0, this.margin = !1;
                    },
                    unamestyle: function() {
                        1 == this.gameconfig.gameconfig.nickname.status && (this.contentmsg.push({
                            msg: this.wechatdesc,
                            temp: "msg"
                        }), this.contentmsg.push({
                            msg: "请输入姓名",
                            temp: "msg"
                        }), this.scrollNumber++, this.scrollId = "id" + this.scrollNumber);
                    },
                    getuserinfo: function(e) {
                        var n = this, s = this, o = e.currentTarget.dataset;
                        console.log(o), e.detail.userInfo ? (c.globalData.user = {
                            nickName: e.detail.userInfo.nickName,
                            avatarUrl: e.detail.userInfo.avatarUrl,
                            verify: 0
                        }, t.setStorageSync("user", c.globalData.user), t.setStorageSync("userinfo", {
                            nickName: e.detail.userInfo.nickName,
                            avatarUrl: e.detail.userInfo.avatarUrl
                        }), this.userinfo = {
                            nickName: e.detail.userInfo.nickName,
                            avatarUrl: e.detail.userInfo.avatarUrl
                        }, t.getImageInfo({
                            src: this.userinfo.avatarUrl,
                            success: function(e) {
                                console.log(e.type), "gif" == e.type ? (s.tempFilePaths = s.defaulticon, s.sendnametext()) : (s.tempFilePaths = n.userinfo.avatarUrl, 
                                s.userimg = n.userinfo.avatarUrl, s.sendnametext());
                            }
                        })) : s.sendnametext();
                    },
                    sendnametext: function() {
                        var e = this;
                        if ("" == this.isinput) return this.contentmsg.push({
                            msg: "你还没有输入姓名~",
                            temp: "msg"
                        }), this.scrollNumber++, void (this.scrollId = "id" + this.scrollNumber);
                        this.sendbtn = !0, this.username = this.isinput, this.isinput = "", this.contentmsg.push({
                            umsg: this.username,
                            temp: "umsg",
                            usericon: this.userimg
                        }), this.scrollNumber++, this.scrollId = "id" + this.scrollNumber, 1 == this.gameconfig.gameconfig.headimg.status ? setTimeout(function() {
                            e.contentmsg.push({
                                msg: "确认使用头像",
                                temp: "msg"
                            }), e.contentmsg.push({
                                msgimg: e.userimg,
                                temp: "msgimg"
                            }), e.scrollNumber++, e.scrollId = "id" + e.scrollNumber, e.ischeck = 1;
                        }, 1e3) : 1 == this.gameconfig.gameconfig.gender.status ? setTimeout(function() {
                            e.contentmsg.push({
                                msg: "请选择你的性别",
                                temp: "msg"
                            }), e.scrollNumber++, e.scrollId = "id" + e.scrollNumber, e.ischeck = 2;
                        }, 1e3) : setTimeout(function() {
                            e.contentmsg.push({
                                msg: "正在为你分析结果，请稍后...",
                                temp: "msg"
                            }), e.scrollNumber++, e.scrollId = "id" + e.scrollNumber, e.adresult();
                        }, 1e3);
                    },
                    searchsex_m: function() {
                        var e = this;
                        this.sexbtn = !0, this.usersex = "男", this.contentmsg.push({
                            umsg: "男",
                            temp: "umsg",
                            usericon: this.userimg
                        }), this.scrollNumber++, this.scrollId = "id" + this.scrollNumber, setTimeout(function() {
                            e.contentmsg.push({
                                msg: "正在为你分析结果，请稍后...",
                                temp: "msg"
                            }), e.scrollNumber++, e.scrollId = "id" + e.scrollNumber, e.adresult();
                        }, 1e3);
                    },
                    searchsex_w: function() {
                        var e = this;
                        this.sexbtn = !0, this.usersex = "女", this.contentmsg.push({
                            umsg: "女",
                            temp: "umsg",
                            usericon: this.userimg
                        }), this.scrollNumber++, this.scrollId = "id" + this.scrollNumber, setTimeout(function() {
                            e.contentmsg.push({
                                msg: "正在为你分析结果，请稍后...",
                                temp: "msg"
                            }), e.scrollNumber++, e.scrollId = "id" + e.scrollNumber, e.adresult();
                        }, 1e3);
                    },
                    queren: function() {
                        var e = this;
                        this.filebtn = !0, this.contentmsg.push({
                            umsg: "确认使用",
                            temp: "umsg",
                            usericon: this.userimg
                        }), this.scrollNumber++, this.scrollId = "id" + this.scrollNumber, 1 == this.gameconfig.gameconfig.gender.status ? setTimeout(function() {
                            e.contentmsg.push({
                                msg: "请选择你的性别",
                                temp: "msg"
                            }), e.scrollNumber++, e.scrollId = "id" + e.scrollNumber, e.ischeck = 2;
                        }, 1e3) : (this.filebtn = !0, setTimeout(function() {
                            e.contentmsg.push({
                                msg: "正在为你分析结果，请稍后...",
                                temp: "msg"
                            }), e.scrollNumber++, e.scrollId = "id" + e.scrollNumber, e.adresult();
                        }, 1e3));
                    },
                    fileImg: function() {
                        var e = this;
                        e.filebtn = !0, t.chooseImage({
                            count: 1,
                            sizeType: [ "original", "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(t) {
                                e.uploadimg = t.tempFilePaths[0];
                            },
                            fail: function(n) {
                                t.showToast({
                                    title: "上传失败，请重试"
                                }), e.filebtn = !1;
                            }
                        });
                    },
                    confirm: function(e) {
                        var n = this;
                        this.uploadimg = "", n.filebtn = !1, n.contentmsg.push({
                            msg: "正在上传中...",
                            temp: "msg"
                        }), n.scrollNumber++, n.scrollId = "id" + n.scrollNumber, t.showLoading({
                            title: "请稍后"
                        }), n.tempFilePaths = e.detail.tempFilePath, setTimeout(function() {
                            n.contentmsg.push({
                                uimg: n.tempFilePaths,
                                usericon: n.userimg,
                                temp: "uimg"
                            }), n.scrollNumber++, n.scrollId = "id" + n.scrollNumber, n.contentmsg.push({
                                msg: "确认使用头像",
                                temp: "msg"
                            }), n.scrollNumber++, n.scrollId = "id" + n.scrollNumber, t.hideLoading();
                        }, 1e3);
                    },
                    drawcanvas: function(e) {
                        var t = this, n = t.getIndex(t.username, !0) - 1;
                        console.log(n, "");
                        var s = t.gameconfig.drawconfig.head_image, o = (t.gameconfig.drawconfig.nickname, 
                        t.gameconfig.drawconfig.qrcode), i = this.imgurl + "/" + t.commimg[n].path;
                        console.log(i);
                        var r = {};
                        r.bg = i, 1 == s.status && (r.header = t.tempFilePaths, console.log(t.tempFilePaths, "头像")), 
                        1 == o.status && "" != o.path && (r.qrcode = o.path, console.log(o.path)), t.getImageAll(r, t.drawcanvas2), 
                        a.default.Event.stat("endgame", {
                            gid: t.gamegid
                        });
                    },
                    drawcanvas2: function(n) {
                        console.log(n);
                        var s = this, o = s.gameconfig.drawconfig.head_image, i = s.gameconfig.drawconfig.nickname, a = s.gameconfig.drawconfig.qrcode, r = t.createCanvasContext("myCanvas");
                        1 == o.status && r.drawImage(n.header.path, o.x, o.y, parseInt(o.width), parseInt(o.width)), 
                        r.drawImage(n.bg.path, 0, 0), 1 == a.status && "" != a.path && r.drawImage(n.qrcode.path, parseInt(a.x), parseInt(a.y), parseInt(a.width), parseInt(a.width)), 
                        1 == i.status && (r.setFontSize(i.font_size), r.setFillStyle(i.color), r.setTextBaseline("top"), 
                        r.setTextAlign(i.text_align), r.fillText(s.username, i.x, i.y)), r.draw(!0, function() {
                            setTimeout(function() {
                                t.canvasToTempFilePath({
                                    x: 0,
                                    y: 0,
                                    width: n.bg.width,
                                    height: n.bg.height,
                                    destWidth: n.bg.width,
                                    destHeight: n.bg.height,
                                    canvasId: "myCanvas",
                                    success: function(t) {
                                        console.log(n.bg.height, e(n.bg.height));
                                        var o = n.bg.width / n.bg.height;
                                        console.log(o), s.gameheight = 460 / o + "rpx", s.resimgurl = t.tempFilePath, s.imgfinished = !0, 
                                        console.log(s.resimgurl, "result");
                                    },
                                    fail: function() {
                                        console.log("------------");
                                    }
                                });
                            }, 800);
                        });
                    },
                    imgresult: function() {
                        var e = this;
                        e.contentmsg.push({
                            resimg: e.resimgurl,
                            temp: "resimg"
                        }), e.scrollNumber++, e.scrollId = "id" + e.scrollNumber, e.contentmsg.push({
                            msg: e.wechatresult,
                            temp: "msg"
                        }), e.scrollNumber++, e.scrollId = "id" + e.scrollNumber, e.filebtn = !0, e.ischeck = 3, 
                        e.playNumber = parseInt(e.playNumber) + 1, t.setStorageSync("playNumbertanme", e.playNumber);
                    },
                    fsaveimg: function() {
                        this.footbox = !0;
                    },
                    saveImg: function() {
                        var e = this;
                        t.saveImageToPhotosAlbum({
                            filePath: e.resimgurl,
                            success: function() {
                                setTimeout(function() {
                                    t.showToast({
                                        title: "图片保存成功",
                                        icon: "none",
                                        duration: 1e3
                                    }), e.footbox = !1;
                                }, 200);
                            },
                            fail: function(e) {
                                t.showModal({
                                    title: "保存失败",
                                    content: "保存图片到相册功能需要开启相册授权！",
                                    showCancel: !1,
                                    cancelText: "取消",
                                    confirmText: "确定",
                                    success: function(e) {
                                        qq.openSetting({});
                                    }
                                });
                            }
                        });
                    },
                    clearbox: function() {
                        this.footbox = !1;
                    },
                    fpreview: function() {
                        var e = this;
                        t.previewImage({
                            urls: [ e.resimgurl ],
                            longPressActions: {
                                success: function(e) {}
                            }
                        });
                    },
                    shareqzon: function() {
                        var e = this;
                        qq.openQzonePublish({
                            text: e.sharetitle,
                            media: [ {
                                type: "photo",
                                path: e.resimgurl
                            } ]
                        }), e.footbox = !1;
                    },
                    getImageAll: function(e, n) {
                        var s = 0, o = {}, i = [];
                        i = Object.keys(e);
                        for (var a in e) !function(a) {
                            t.getImageInfo({
                                src: e[a],
                                success: function(e) {
                                    o[a] = e, (s += 1) == i.length && n(o);
                                },
                                fail: function(e) {
                                    console.log(e);
                                }
                            });
                        }(a);
                    },
                    getIndex: function(e, t) {
                        var n = this, s = n.gameconfig.gameconfig, o = n.gameconfig.resultimage, i = escape(e), a = [], r = 0;
                        if (t) for (var l in i) r += i.charAt(l).charCodeAt(); else r = e;
                        if (console.log(n.usersex), 1 == s.gender.status) {
                            if ("男" == n.usersex) {
                                console.log("man");
                                var c = o.male.concat(o.common);
                                for (n.commimg = c, l = 0; l < c.length; l++) a.push(100 / c.length);
                                return n.probability(r % 100, a, 1, c.length);
                            }
                            var m = o.famale.concat(o.common);
                            for (n.commimg = m, console.log(m, "+++++++"), l = 0; l < m.length; l++) a.push(100 / m.length);
                            return n.probability(r % 100, a, 1, m.length);
                        }
                        for (n.commimg = o.common, l = 0; l < o.common.length; l++) a.push(100 / o.common.length);
                        return n.probability(r % 100, a, 1, o.common.length);
                    },
                    probability: function(e, t, n, s) {
                        var o = 0;
                        for (n; n <= s; n++) if (o += 1 * t[n - 1], e < o) return n;
                        return e % s + n;
                    }
                }
            };
            n.default = m;
        }).call(this, s("543d").default);
    }
}, [ [ "70be", "common/runtime", "common/vendor" ] ] ]);