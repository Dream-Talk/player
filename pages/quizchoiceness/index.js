(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/quizchoiceness/index" ], {
    "5bf7": function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("8b22"), a("921b"), t(a("66fd")), e(t(a("f3a3")).default);
        }).call(this, a("543d").createPage);
    },
    7789: function(e, t, a) {
        var s = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                t.stopPropagation(), t.preventDefault(), e.showshare = !0;
            });
        }, i = [];
        a.d(t, "a", function() {
            return s;
        }), a.d(t, "b", function() {
            return i;
        });
    },
    b4a7: function(e, t, a) {},
    c4e4: function(e, t, a) {
        a.r(t);
        var s = a("cc9b"), i = a.n(s);
        for (var o in s) "default" !== o && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(o);
        t.default = i.a;
    },
    cc9b: function(e, t, a) {
        (function(e) {
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a("4e22"), n = a("c7c6"), r = s(a("cd71")), l = s(a("6654")), d = s(a("6f91")), u = s(a("a94b")), c = s(a("a6fa")), h = s(a("0861")), g = s(a("3324")), p = s(a("57a0")), m = s(a("1418")), f = s(a("f47e")), v = new (s(a("94f5")).default)(), b = getApp(), _ = {
                data: function() {
                    var e;
                    return e = {
                        closeIcon: m.default,
                        uzinfoData: {},
                        watchBtn: g.default,
                        videoButton: !1,
                        originalQuce: r.default,
                        videoIcon: p.default,
                        previewImage: !1,
                        authorButton: !1,
                        makeButton: !1,
                        question_info: {},
                        special_config: {},
                        showTips: "",
                        question: [],
                        shareOther: u.default,
                        shuoshuotu: c.default,
                        againimg: h.default,
                        items: [],
                        scrollTop: 0,
                        current: 0,
                        oldCurrent: 0,
                        count: 0,
                        input: !1,
                        button: !1,
                        margin: !1,
                        nickname: "",
                        message: "",
                        showMessage: !1,
                        canvasHW: {
                            width: 750,
                            height: 950
                        },
                        options: [],
                        answerAvatar: b.globalData.user.avatarUrl ? b.globalData.user.avatarUrl : l.default,
                        resimg: {
                            qrcode: "",
                            result: "",
                            avatar: b.globalData.user.avatarUrl ? b.globalData.user.avatarUrl : o.ssl_static_host + "quce/1562666285IKXQK.png"
                        },
                        preview: !1,
                        resultImage: "",
                        isfirstplay: !0,
                        resultTjFlag: !0,
                        result: "",
                        sharetitle: "",
                        quiztype: "",
                        incsavestatus: !0,
                        inlongSmall: !0,
                        inlongBig: !0,
                        isreplay: !1,
                        end: 0,
                        shareImage: "",
                        id: "",
                        scrollId: 0,
                        scrollToView: "",
                        videoAd: "",
                        showAds: !1,
                        forcedAds: !1,
                        makeRes: 1,
                        videoEnded: !1,
                        uid: "",
                        cancelinc: "",
                        showshare: !1,
                        modelContent: "",
                        showmodel: !1,
                        topimg: d.default,
                        settop: "",
                        imageshare: "",
                        openid: "",
                        ceshiprogress: !1,
                        shareqzonetitle: "",
                        shuoshuo: "",
                        shuoshuobutton: !1,
                        adtime: 0,
                        shareAppImage: "",
                        playNumber: 0,
                        bannerNumber: 0,
                        resultData: "",
                        CaptureImage: 1,
                        saveImageSmall: !0,
                        hasUserinfo: !1,
                        videoErr: !1,
                        shuoshuo_sharetitle: "",
                        canshareqzone: !0,
                        loading: !0,
                        progresspercent: 0,
                        transitiontime: 60,
                        progressend: !1,
                        imgfinished: !1,
                        finished: !1,
                        hasbannerad: 0,
                        banneradutilid: "",
                        showbannerad: !1,
                        addresultimg: !0,
                        banneradcontent: "",
                        forcebutton: !1,
                        original: "",
                        video_banner_ad: "",
                        adBox_cancel_btn: "",
                        adBox_video_btn: "",
                        banner_ad_style: "",
                        adBox_style_type: "",
                        showVideoModel: "",
                        onLoad: 1,
                        videoplayednumber: "",
                        videoLoad: !1,
                        videoWatchNumber: 0,
                        showdingyue: !1,
                        dingyuemodel: !1,
                        subscribe_status: 0,
                        subscribe_content: "",
                        round: 1,
                        share_ecodeid: "",
                        hour: 0,
                        needAsk: 1,
                        needlogin: !1,
                        icons: {
                            more: o.static_host + "quce/1577182509Bx4Bc.png",
                            finish: o.static_host + "quce/1577182538fZtvL.png",
                            start: o.static_host + "quce/1577182598bwTXf.png",
                            Viewresults: o.static_host + "quce/1577182612NvSJM.png",
                            ViewresultsVideo: o.static_host + "quce/1577182622UbusY.png"
                        },
                        finger: "../../static/question/finger3.png",
                        animationData: "",
                        animation: "",
                        scaleAnmia: !1,
                        temp_answer: {},
                        next_answer: {},
                        options3: [],
                        audio: "",
                        audiores: {
                            src: "",
                            icon: "../../static/question/pause.png",
                            status: "pause",
                            tips: "点击播放"
                        },
                        nosave: "",
                        reset: "",
                        playing: "",
                        issave: "",
                        start: "",
                        screenWidth: "",
                        translateX: 0
                    }, i(e, "animation", {}), i(e, "aginActive", {}), i(e, "afterquestion", []), i(e, "activenum", []), 
                    i(e, "videolockBox", !1), i(e, "AdmodelContent", []), i(e, "resultsofvideo", !0), 
                    i(e, "showAdmodelClose", !1), i(e, "huangAd", ""), i(e, "questionLength", 0), e;
                },
                components: {
                    channelFour: function() {
                        return a.e("components/ChannelFour").then(a.bind(null, "2121"));
                    }
                },
                onLoad: function(t) {
                    (0, n.initChannel)(t), console.log(b.globalData.from_gid), f.default.Page.init(), 
                    this.onload = 1;
                    var a = this;
                    a.id = t.id, "undefined" != t.title && (console.log("setNavigationBarTitle", t.title), 
                    a.sharetitle = t.title, e.setNavigationBarTitle({
                        title: a.sharetitle
                    }));
                    var s = e.getStorageSync("bannerNumber"), i = e.getStorageSync("user"), o = e.getStorageSync("userinfo");
                    e.getUserInfo({
                        success: function(t) {
                            if (a.hasUserinfo = !0, o.nickName == t.userInfo.nickName && o.avatarUrl == t.userInfo.avatarUrl) b.globalData.user = i; else {
                                var s = {
                                    nickName: t.userInfo.nickName,
                                    avatarUrl: t.userInfo.avatarUrl,
                                    verify: 0
                                };
                                b.globalData.user = s, e.setStorageSync("user", s), e.setStorageSync("userinfo", s);
                            }
                        },
                        fail: function(e) {}
                    }), t.acid && (b.globalData.acid = t.acid), this.canshareqzone = !1;
                    var r = e.getStorageSync("playNumber"), l = e.getStorageSync("videoplayednumber");
                    this.playNumber = r || 0, this.bannerNumber = s || 0, this.videoplayednumber = l || 0, 
                    this.requestbannerlist(), this.initQuestion(t), e.onUserCaptureScreen(function(e) {
                        a.userCaptureScreen();
                    });
                },
                onUnload: function() {
                    console.log("close"), this.onload = 0;
                },
                onShareAppMessage: function() {
                    var e = this;
                    console.log("id=" + this.id + "&title=" + this.sharetitle + "&ispush=1");
                    var t = "";
                    t = this.shareqzonetitle ? this.shareqzonetitle : this.sharetitle, this.showdingyue && 3 == this.subscribe_status && setTimeout(function() {
                        e.addDingYue();
                    }, 5e3);
                    var a = "/pages/home/index?id=" + this.id + "&title=" + this.sharetitle + "&ispush=1";
                    return this.share_ecodeid && (a = "/pages/home/index?q=".concat(this.share_ecodeid)), 
                    console.log(a), {
                        title: t,
                        imageUrl: this.shareAppImage,
                        path: a
                    };
                },
                onReady: function() {
                    this.audio = e.createInnerAudioContext("audio"), this.playing = 0, this.nosave = !0, 
                    this.reset = 0, this.issave = !1, this.start = !1;
                    var t = e.getSystemInfoSync();
                    this.screenWidth = t.windowWidth, this.translateX = 0, this.animation = e.createAnimation({
                        duration: 400,
                        timingFunction: "ease-in",
                        delay: 80
                    }), this.aginActive = e.createAnimation({
                        duration: 0,
                        timingFunction: "linear",
                        delay: 0
                    });
                },
                computed: {
                    modelList: function() {
                        if (this.modelContent) return this.modelContent.split("##");
                    },
                    preventTouchMove: function() {
                        return !1;
                    },
                    subscribelist: function() {
                        if (this.subscribe_content) return this.subscribe_content.split("##");
                    },
                    adcontent: function() {
                        if (this.banneradcontent) {
                            if (1 == this.banner_ad_style) return this.banneradcontent.split("##").join("，");
                            if (2 == this.banner_ad_style) return this.banneradcontent.split("##");
                        }
                    }
                },
                methods: {
                    initQuestion: function(t) {
                        var a = this;
                        this.adtime = e.getStorageSync("ad_video");
                        var s = {
                            appid: b.globalData.appid,
                            ver: b.globalData.ver,
                            sgid: b.globalData.from_gid,
                            uid: (0, n.setUid)(),
                            source: b.globalData.source,
                            scene: b.globalData.scene,
                            src: b.globalData.src,
                            adtime: this.adtime ? this.adtime : 0,
                            adplayed: this.bannerNumber,
                            quizplayed: this.playNumber,
                            videoplayed: this.videoplayednumber
                        };
                        t.id && (s.id = t.id), t.q && (s.q = t.q), e.request({
                            url: b.globalData.host + "/index.php/App/Index/getQuizInfo",
                            data: s,
                            success: function(s) {
                                console.log(s.data);
                                var i = s.data;
                                if (t.q && (a.round = i.round ? i.round : "1", b.globalData.from_gid = s.data.id ? s.data.id : "0", 
                                b.globalData.src = s.data.src ? s.data.src : "301", a.hour = s.data.hour, a.id = s.data.id), 
                                f.default.Event.stat("participation", {
                                    gid: a.id
                                }), i.img = o.static_host + i.img, i.logo = o.static_host + i.logo, a.uzinfoData = i, 
                                a.needAsk = s.data.needAsk, a.showAds = 1 == i.showAds, a.forcedAds = 1 == i.forcedAds, 
                                a.quiztype = i.type, a.cancelinc = i.cancelinc, a.question_info = i, a.special_config = i.special_config, 
                                a.shuoshuo = i.shuoshuo, a.shuoshuo_sharetitle = i.shuoshuo_sharetitle, a.hasbannerad = i.banner_ad, 
                                a.transitiontime = 10 * parseInt(i.banner_ad_time), a.banneradutilid = i.banner_ad_utilid, 
                                a.banneradcontent = i.banner_ad_content, a.imageshare = i.imageshare, a.original = i.original, 
                                a.video_banner_ad = i.video_banner_ad, a.adBox_cancel_btn = i.adBox_cancel_btn, 
                                a.adBox_video_btn = i.adBox_video_btn, a.banner_ad_style = i.banner_ad_style, a.subscribe_status = i.subscribe_status ? i.subscribe_status : 0, 
                                a.subscribe_content = i.subscribe_content, a.adBox_style_type = i.adBox_style_type ? i.adBox_style_type : 1, 
                                a.showVideoModel = void 0 != i.show_video_model ? i.show_video_model : 1, a.resultsofvideo = 1 == i.ad_model, 
                                a.showAdmodelClose = 1 == i.ad_model_close, a.AdmodelContent = i.ad_model_content ? i.ad_model_content.split("##") : [ "你的测试结果已生成", "看一个小视频,即可查看详情" ], 
                                "1109659848" == b.globalData.appid) {
                                    var n = i.video_ad_utilid ? i.video_ad_utilid : "54722faa6e7bc4733033911f21e83b90";
                                    console.log(i.video_ad_select), a.forcebutton = 1 != i.video_ad_select;
                                } else "1109802828" == b.globalData.appid ? (n = i.video_ad_utilid, a.forcebutton = !0) : "wx" == b.globalData.apptype ? (n = i.video_ad_utilid, 
                                console.log(i.video_ad_select), a.forcebutton = 1 != i.video_ad_select) : (b.globalData.appid = "1109743918") && (n = i.video_ad_utilid ? i.video_ad_utilid : "", 
                                a.forcebutton = 1 != i.video_ad_select);
                                try {
                                    a.videoAd = wx.createRewardedVideoAd({
                                        adUnitId: n
                                    });
                                } catch (e) {}
                                a.videoAd && a.videoAd.onError(function(e) {
                                    a.videoErr = !0;
                                }), a.showAds && a.videoAd && (a.transitiontime = 10 * parseInt(i.banner_videoad_time), 
                                a.banneradutilid = i.banner_videoad_utilid), a.title || (a.sharetitle = i.title, 
                                e.setNavigationBarTitle({
                                    title: i.title
                                })), i.sharetitle && (a.shareqzonetitle = i.sharetitle), !e.getStorageSync("user_top") && i.settop && (a.settop = i.settop, 
                                a.settop.img = o.static_host + s.data.settop.img, a.cancalSettop()), a.special_config && 0 == a.hasUserinfo && (a.needlogin = !0), 
                                console.log(a.needlogin), a.modelContent = i.adBox_desc;
                                var r = JSON.parse(i.question);
                                r = r.map(function(e, t) {
                                    var a = [], s = [];
                                    for (var i in e.answer) e.answer[i].key = i.toUpperCase(), e.answer[i].title = e.answer[i].img ? i : i + "." + e.answer[i].title, 
                                    e.answer[i].img = e.answer[i].img ? o.static_host + e.answer[i].img : "", e.answer[i].img && s.push(e.answer[i].img), 
                                    a.push(e.answer[i]);
                                    return e.img = e.img ? o.static_host + e.img : "", e.answer = a, e.pictures = s, 
                                    e.index = t, e;
                                }), a.temp_answer = r, a.next_answer = [ a.temp_answer[0] ], a.options3 = [], a.question = r, 
                                a.questionLength = r.length, a.activenum = a.question.map(function() {
                                    return "";
                                }), setTimeout(function() {
                                    a.loading = !1;
                                }, 1e3);
                            }
                        });
                    },
                    requestbannerlist: function() {
                        var e = this;
                        v.getJumpList(4, b.globalData.appid, function(t) {
                            e.huangAd = t;
                        });
                    },
                    sharefriend: function(e) {
                        console.log(e), 2 == e ? f.default.Event.stat("sharestatistics", {
                            sharetype: 2,
                            gid: this.id
                        }) : this.saveImageSmall ? f.default.Event.stat("sharestatistics", {
                            sharetype: 1,
                            gid: this.id
                        }) : f.default.Event.stat("sharestatistics", {
                            sharetype: 3,
                            gid: this.id
                        });
                    },
                    formSubmit: function(e) {},
                    userCaptureScreen: function() {
                        var t = this.ceshiprogress ? 1 : 0;
                        console.log({
                            imagetype: this.CaptureImage,
                            progress: t,
                            gid: this.id
                        }), f.default.Event.stat("captureScreen", {
                            gid: this.id,
                            capturetype: this.CaptureImage
                        }), e.request({
                            url: b.globalData.host + "/index.php/App/Index/incUserCaptureScreen",
                            data: {
                                imagetype: this.CaptureImage,
                                progress: t,
                                gid: this.id
                            },
                            success: function(e) {
                                console.log(e);
                            }
                        });
                    },
                    login: function() {
                        var t = this;
                        e.login({
                            success: function(a) {
                                e.request({
                                    url: b.globalData.host + "/index.php/App/Index/getQQappOpenid",
                                    data: {
                                        js_code: a.code,
                                        appid: b.globalData.appid
                                    },
                                    success: function(a) {
                                        e.setStorageSync("openid", a.data.openid), t.openid = a.data.openid;
                                    }
                                });
                            }
                        });
                    },
                    cancalSettop: function() {
                        var e = this;
                        setTimeout(function() {
                            e.settop.status = 0;
                        }, 4e4);
                    },
                    previewImages: function() {
                        this.preview || (this.CaptureImage = 1);
                    },
                    openQzone: function(e) {
                        var t = this, a = "";
                        a = this.shuoshuo_sharetitle ? this.shuoshuo_sharetitle : this.shareqzonetitle, 
                        2 == e ? f.default.Event.stat("shareqzone", {
                            gid: this.id,
                            qzonetype: 2
                        }) : this.saveImageSmall ? f.default.Event.stat("shareqzone", {
                            gid: this.id,
                            qzonetype: 1
                        }) : f.default.Event.stat("shareqzone", {
                            gid: this.id,
                            qzonetype: 3
                        }), this.showdingyue && 3 == this.subscribe_status && setTimeout(function() {
                            t.addDingYue();
                        }, 5e3), qq.openQzonePublish({
                            text: a,
                            media: [ {
                                type: "photo",
                                path: this.resultImage
                            } ]
                        });
                    },
                    startG: function() {
                        var e = this;
                        1 == this.subscribe_status ? this.showSubscribe(function() {
                            e.starGame();
                        }) : this.starGame();
                    },
                    starGame: function() {
                        if (this.start) return !1;
                        this.start = !0, this.animation.translateX(this.translateX - this.screenWidth).step(), 
                        this.animationData = this.animation.export(), this.temp_answer[0].audio && (this.audio = e.createInnerAudioContext("audio-0"), 
                        this.audio.play()), this.translateX = this.translateX - this.screenWidth;
                    },
                    nextAnswer: function(t, a) {
                        var s = this.activenum;
                        if (s[a] === t || "" !== s[a]) return !1;
                        this.temp_answer[a].audio && (this.audiores = {
                            src: "",
                            icon: "../../assets/icons/pause.png",
                            status: "pause",
                            tips: "点击播放"
                        }, 0 !== this.playing && (this.playing = 0, this.audio.stop()));
                        var i = this.afterquestion;
                        i.push(a), s[a] = t;
                        var o = a + 1, n = this.question;
                        if ("3" === this.uzinfoData.type) {
                            var r = this.temp_answer[a].answer[t].next;
                            (r = parseInt(r)) ? (this.options3.push(r), this.next_answer.push(this.temp_answer[r - 1]), 
                            n = this.next_answer, o = r - 1) : o = this.questionLength;
                        }
                        console.log(11), this.question = n, this.activenum = s, this.afterquestion = i, 
                        o === this.questionLength ? (this.showbannerad = this.showAds && this.videoAd, this.special_config && 0 == this.hasUserinfo ? (this.isnext = !0, 
                        this.finished = !0) : this.overAnswer()) : (this.animation.translateX(this.translateX - this.screenWidth).step(), 
                        this.animationData = this.animation.export(), this.temp_answer[o].audio && (this.audio = e.createInnerAudioContext("audio-".concat(o)), 
                        this.audio.play()), this.translateX = this.translateX - this.screenWidth);
                    },
                    overAnswer: function() {
                        var t = this;
                        this.showbannerad = this.showAds && this.videoAd, this.finished = !0, this.isfirstplay ? this.showAds && this.videoAd ? this.resultsofvideo ? (e.showLoading({
                            title: "正在获取结果",
                            mask: !0
                        }), this.analyzeResult()) : 0 == this.showVideoModel ? (console.log(1111111, !0, 111), 
                        setTimeout(function() {
                            t.makeResult();
                        }, 500)) : setTimeout(function() {
                            1 == t.adBox_style_type ? f.default.Event.stat("showvideomodel", {
                                videotype: "3_" + b.globalData.ver,
                                gid: t.id
                            }) : f.default.Event.stat("showvideomodel", {
                                videotype: t.adBox_style_type + "_" + b.globalData.ver,
                                gid: t.id
                            }), t.needAsk ? t.showmodel = !0 : t.makeResult();
                        }, 100) : (console.log(1111111, !1), 2 == this.subscribe_status ? this.showSubscribe(function() {
                            t.scrollToView = t.scrollId, t.scrollTop = 1e3 * t.count, t.analyzeResult(), 1 == t.hasbannerad && (t.showmodel = !0, 
                            setTimeout(function() {
                                t.modelProgress();
                            }, 1e3));
                        }) : (this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count, this.analyzeResult(), 
                        1 == this.hasbannerad && (this.showmodel = !0, setTimeout(function() {
                            t.modelProgress();
                        }, 1e3)))) : (e.showLoading({
                            title: "正在获取结果"
                        }), this.analyzeResult());
                    },
                    checking: function(e) {
                        return !!/^[a-zA-Z]+$/.test(e);
                    },
                    prevQuestion: function(t) {
                        if (this.finished) return !1;
                        var a = this.activenum, s = this.afterquestion;
                        a[t] = "", a[s[s.length - 1]] = "";
                        var i = s[s.length - 1];
                        this.finished && (a[s[s.length - 2]] = ""), this.temp_answer[t].audio && (this.audiores = {
                            src: "",
                            icon: "../../assets/icons/pause.png",
                            status: "pause",
                            tips: "点击播放"
                        }, 0 !== this.playing && (this.playing = 0, this.audio.stop()));
                        var o = this.question;
                        "3" === this.question.type && o.pop(), s.pop(), this.finished && s.pop(), this.activenum = a, 
                        this.afterquestion = s, this.finished = !1, this.animation.translateX(this.translateX + this.screenWidth).step(), 
                        this.animationData = this.animation.export(), this.temp_answer[i].audio && (this.audio = e.createInnerAudioContext("audio-".concat(i)), 
                        this.audio.play()), this.translateX = this.translateX + this.screenWidth;
                    },
                    resetOption: function(e) {
                        var t = [], a = !1;
                        for (var s in e) e[s].img && (a = !0), t.push({
                            title: e[s].title,
                            num: s,
                            img: o.static_host + e[s].img
                        });
                        return {
                            options: t,
                            picarr: a
                        };
                    },
                    getUserInfo: function(t) {
                        var a = this, s = this;
                        this.showbannerad = this.showAds && this.videoAd, t.detail && t.detail.userInfo ? (this.hasUserinfo = !0, 
                        this.authorButton = !1, this.margin = !1, b.globalData.user = {
                            nickName: t.detail.userInfo.nickName,
                            avatarUrl: t.detail.userInfo.avatarUrl,
                            verify: 0
                        }, e.setStorageSync("user", b.globalData.user), e.setStorageSync("userinfo", {
                            nickName: t.detail.userInfo.nickName,
                            avatarUrl: t.detail.userInfo.avatarUrl
                        }), this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count, s.authorButton = !1, 
                        s.margin = !1, s.showAds && s.videoAd ? 0 == this.showVideoModel ? setTimeout(function() {
                            a.makeResult();
                        }, 500) : (1 == this.adBox_style_type ? f.default.Event.stat("showvideomodel", {
                            videotype: "3_" + b.globalData.ver,
                            gid: this.id
                        }) : f.default.Event.stat("showvideomodel", {
                            videotype: this.adBox_style_type + "_" + b.globalData.ver + "_" + this.videoWatchNumber,
                            gid: this.id
                        }), console.log("analyzeResul4444444"), s.showmodel = !0) : (console.log("analyzeResult"), 
                        s.analyzeResult(), 1 == s.hasbannerad && (s.showmodel = !0, setTimeout(function() {
                            s.modelProgress();
                        }, 1e3)))) : (console.log("授权失败"), this.authorButton = !1, this.margin = !1, b.globalData.user = {
                            nickName: "趣测",
                            avatarUrl: o.ssl_static_host + "quce/1562666285IKXQK.png"
                        }, this.resimg.avatar = o.ssl_static_host + "quce/1562666285IKXQK.png", this.scrollToView = this.scrollId, 
                        this.scrollTop = 1e3 * this.count, s.authorButton = !1, s.margin = !1, s.showAds && s.videoAd ? 0 == this.showVideoModel ? setTimeout(function() {
                            a.makeResult();
                        }, 500) : (1 == this.adBox_style_type ? f.default.Event.stat("showvideomodel", {
                            videotype: "3_" + b.globalData.ver,
                            gid: this.id
                        }) : f.default.Event.stat("showvideomodel", {
                            videotype: this.adBox_style_type + "_" + b.globalData.ver,
                            gid: this.id
                        }), s.showmodel = !0) : (s.analyzeResult(), 1 == s.hasbannerad && (s.showmodel = !0, 
                        setTimeout(function() {
                            s.modelProgress();
                        }, 1e3))));
                    },
                    gohome: function() {
                        console.log("cancal_video", {
                            gid: this.id,
                            cancaltype: "3_" + b.globalData.ver + "_" + this.videoWatchNumber,
                            adstyletype: this.adBox_style_type
                        }), f.default.Event.stat("cancal_video", {
                            gid: this.id,
                            cancaltype: "3_" + b.globalData.ver + "_" + this.videoWatchNumber,
                            adstyletype: this.adBox_style_type
                        }), e.navigateBack({
                            delta: 1
                        });
                    },
                    modelProgress: function() {
                        var t = this;
                        this.addresultimg = !1;
                        var a = setInterval(function() {
                            t.progresspercent < 100 ? t.progresspercent++ : (clearInterval(a), setTimeout(function() {
                                t.progressend = !0, t.imgfinished && (t.showAds && t.onload && (t.bannerNumber = parseInt(t.bannerNumber) + 1, 
                                e.setStorageSync("bannerNumber", t.bannerNumber)), t.addResultPicture(), t.showmodel = !1);
                            }, 1e3));
                        }, this.transitiontime);
                    },
                    showChoose: function() {
                        var e = this;
                        this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count, this.makeButton = !1, 
                        this.margin = !1, setTimeout(function() {
                            e.showmodel = !0;
                        }, 100);
                    },
                    closevideoBox: function(e) {
                        f.default.Event.stat("resultVdieoclose", {
                            closetype: b.globalData.ver + "_" + e
                        }), this.videolockBox = !1, this.imgGif(), this.postResult();
                    },
                    cancalModel: function() {
                        this.showmodel = !1, this.videoButton = !0, this.margin = !1;
                    },
                    watchBanner: function() {
                        this.videoButton = !1, this.showmodel = !1, this.makeResult();
                    },
                    makeResult: function() {
                        var t = this;
                        console.log(this.videoAd);
                        var a = this;
                        this.showAds && this.videoAd && !this.videoErr ? (a.makeRes = 1, this.videoWatchNumber += 1, 
                        1 == this.adBox_style_type ? f.default.Event.stat("show_video", {
                            showtype: "3_" + b.globalData.ver,
                            gid: this.id
                        }) : (console.log("show_video", {
                            showtype: this.adBox_style_type + "_" + b.globalData.ver + "_" + this.videoWatchNumber,
                            gid: this.id
                        }), f.default.Event.stat("show_video", {
                            showtype: this.adBox_style_type + "_" + b.globalData.ver + "_" + this.videoWatchNumber,
                            gid: this.id
                        })), this.videoAd.load().then(function() {
                            console.log("load sucess"), t.videoAd.show().catch(function() {
                                e.showLoading({
                                    title: "正在获取结果",
                                    mask: !0
                                }), a.analyzeResult();
                            }), console.log("show"), t.videoAd.show(), t.videoAd.onClose(function(t) {
                                if (a.makeRes && !a.videoErr) {
                                    a.videoEnded = t.isEnded;
                                    var s = t.isEnded ? 1 : 0;
                                    s && (a.bannerNumber = parseInt(a.bannerNumber) + 1, e.setStorageSync("bannerNumber", a.bannerNumber), 
                                    a.videoplayednumber = parseInt(a.videoplayednumber) + 1, e.setStorageSync("videoplayednumber", a.videoplayednumber), 
                                    e.setStorageSync("ad_video", Math.round(new Date().getTime() / 1e3))), setTimeout(function() {
                                        e.request({
                                            url: b.globalData.host + "/index.php/App/Index/incQQAdsProgress",
                                            data: {
                                                progress: s,
                                                gid: a.id,
                                                appid: b.globalData.appid,
                                                sgid: b.globalData.from_gid,
                                                ver: b.globalData.ver,
                                                round: a.round,
                                                uid: (0, n.setUid)(),
                                                videonumber: a.videoWatchNumber,
                                                force: a.video_banner_ad ? 2 : 1
                                            },
                                            method: "POST",
                                            header: {
                                                "content-type": "application/x-www-form-urlencoded"
                                            },
                                            success: function() {},
                                            fail: function(e) {
                                                console.log(e);
                                            }
                                        });
                                    }, 500), t.isEnded ? setTimeout(function() {
                                        console.log({
                                            playedtype: a.adBox_style_type + "_" + b.globalData.ver + "_" + a.videoWatchNumber,
                                            gid: a.id
                                        }), f.default.Event.stat("video_played", {
                                            playedtype: a.adBox_style_type + "_" + b.globalData.ver + "_" + a.videoWatchNumber,
                                            gid: a.id
                                        }), a.resultsofvideo ? a.closevideoBox(1) : (e.showLoading({
                                            title: "正在获取结果",
                                            mask: !0
                                        }), a.analyzeResult());
                                    }, 500) : "1109659848" == b.globalData.appid || "1109743918" == b.globalData.appid || "wx" == b.globalData.apptype ? (setTimeout(function() {
                                        console.log("cancal_video", {
                                            gid: a.id,
                                            cancaltype: "2_" + b.globalData.ver + "_" + a.videoWatchNumber,
                                            adstyletype: a.adBox_style_type
                                        }), f.default.Event.stat("cancal_video", {
                                            gid: a.id,
                                            cancaltype: "2_" + b.globalData.ver + "_" + a.videoWatchNumber,
                                            adstyletype: a.adBox_style_type + "_" + b.globalData.ver
                                        });
                                    }, 200), a.forcedAds ? 1 == a.video_banner_ad ? (a.showmodel = !0, a.showbannerad = !1, 
                                    setTimeout(function() {
                                        a.resultsofvideo ? a.closevideoBox(1) : a.analyzeResult(), a.progresswidth = 100, 
                                        a.modelProgress();
                                    }, 1e3)) : a.videoButton = !0 : (e.showLoading({
                                        title: "正在获取结果",
                                        mask: !0
                                    }), setTimeout(function() {
                                        a.analyzeResult();
                                    }, 500))) : "1109802828" == b.globalData.appid && (a.forcedAds ? a.showmodel = !0 : (e.showLoading({
                                        title: "正在获取结果",
                                        mask: !0
                                    }), setTimeout(function() {
                                        a.analyzeResult();
                                    }, 500))), a.makeRes = 0;
                                }
                            }), t.videoAd.onError(function(t) {
                                console.log(t), e.request({
                                    url: b.globalData.host + "/index.php/App/Index/incQQAdsProgress",
                                    data: {
                                        progress: 2,
                                        gid: a.id,
                                        appid: b.globalData.appid,
                                        ver: b.globalData.ver,
                                        sgid: b.globalData.from_gid,
                                        uid: (0, n.setUid)(),
                                        round: a.round,
                                        errCode: t.errCode,
                                        errMsg: t.errMsg,
                                        videonumber: this.videoWatchNumber,
                                        force: a.video_banner_ad ? 2 : 1
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function() {},
                                    fail: function(e) {
                                        console.log(e);
                                    }
                                }), a.videoErr = !0, a.makeButton = !1, a.margin = !1, a.resultsofvideo ? a.closevideoBox(2) : (e.showLoading({
                                    title: "正在获取结果",
                                    mask: !0
                                }), a.analyzeResult());
                            });
                        }).catch(function() {
                            console.log("load fail"), a.makeButton = !1, a.margin = !1, a.resultsofvideo ? a.closevideoBox(2) : (e.showLoading({
                                title: "正在获取结果",
                                mask: !0
                            }), a.analyzeResult());
                        })) : (e.showLoading({
                            title: "正在获取结果",
                            mask: !0
                        }), a.analyzeResult());
                    },
                    analyzeResult: function() {
                        var e = this;
                        setTimeout(function() {
                            e.parseResult();
                        }, 400);
                    },
                    parseResult: function() {
                        var t = this, a = this.uzinfoData, s = this.question, i = "";
                        if (this.needAsk) {
                            var r = "3" !== a.type ? this.activenum.map(function(e, t) {
                                switch (a.type) {
                                  case "1":
                                    i = s[t].answer[e].key;
                                    break;

                                  case "2":
                                    i = s[t].answer[e].weight;
                                    break;

                                  case "8":
                                    i = s[t].answer[e].key;
                                }
                                return i;
                            }) : this.options3;
                            i = r.toString(",");
                        } else i = "A";
                        var l = this, d = {
                            id: this.id,
                            acid: b.globalData.acid,
                            userinput: b.globalData.user.nickName,
                            isreplay: this.isreplay,
                            sgid: b.globalData.from_gid,
                            round: this.round,
                            ver: b.globalData.ver,
                            appid: b.globalData.appid,
                            uid: (0, n.setUid)(),
                            src: b.globalData.src,
                            source: b.globalData.source,
                            scene: b.globalData.scene,
                            quizfrom: "wxapp"
                        };
                        0 == this.needAsk ? (d.israndresult = 1, d.option = "A") : d.option = i, e.request({
                            url: b.globalData.host + "/index.php/Wetest/Entry/getresult",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: d,
                            success: function(a) {
                                var s = a.data;
                                if (t.resultData = a.data, l.resimg.qrcode = o.ssl_static_host + JSON.parse(a.data.attention).qrcode, 
                                l.resimg.result = o.ssl_static_host + JSON.parse(a.data.content).img, t.share_ecodeid = !!s.share_ecodeid && s.share_ecodeid, 
                                l.shareImage = l.resimg.result, l.special_config && l.special_config.result_image) {
                                    var i = JSON.parse(a.data.content).threshold, n = JSON.parse(l.special_config.result_image)[i];
                                    n && (l.resimg.result = o.ssl_static_host + n);
                                }
                                s.share_title && (l.shareqzonetitle = s.share_title), s.share_shuoshuo_title && (l.shuoshuo_sharetitle = s.share_shuoshuo_title), 
                                l.isfirstplay && l.special_config ? e.getImageInfo({
                                    src: b.globalData.user.avatarUrl,
                                    success: function(e) {
                                        "gif" == e.type ? l.resimg.avatar = o.ssl_static_host + "quce/1562666285IKXQK.png" : l.resimg.avatar = b.globalData.user.avatarUrl, 
                                        l.getImageAll(s, l.drawPicture);
                                    },
                                    fail: function(e) {
                                        console.log(e);
                                    }
                                }) : l.getImageAll(a.data, l.drawPicture);
                            }
                        });
                    },
                    playVoice: function(e) {
                        var t = this, a = {
                            src: o.static_host + this.temp_answer[e].audio,
                            icon: "../../static/question/play.gif",
                            status: "playing",
                            tips: "正在播放"
                        }, s = {
                            src: "",
                            icon: "../../static/question/pause.png",
                            status: "pause",
                            tips: "点击播放"
                        }, i = {
                            src: o.static_host + this.temp_answer[e].audio,
                            icon: "../../static/question/pause.png",
                            status: "pause",
                            tips: "已暂停"
                        };
                        0 === this.playing ? (this.audio.src = a.src, this.audiores = a, this.playing = 1, 
                        this.audio.play()) : 1 === this.playing ? (this.playing = 2, this.audio.pause(), 
                        this.audiores = i) : 2 === this.playing && (this.audiores = a, this.playing = 1, 
                        this.audio.play()), this.audio.onEnded(function() {
                            t.playing = 0, t.audiores = s;
                        });
                    },
                    getImageAll: function(t, a) {
                        var s = 0, i = this;
                        for (var o in i.resimg) !function(o) {
                            e.getImageInfo({
                                src: i.resimg[o],
                                success: function(e) {
                                    i.resimg[o] = e, 3 == (s += 1) && a(t, i.resimg);
                                },
                                fail: function(e) {
                                    console.log(e);
                                }
                            });
                        }(o);
                    },
                    resultLongPress: function(e) {
                        this.showShare(2);
                    },
                    viewPicture: function() {
                        if (this.imageshare) f.default.Event.stat("preview", {
                            gid: this.id,
                            previewtype: 1
                        }), this.preview = !this.preview, this.showshare = !1, this.saveImageSmall = !this.saveImageSmall, 
                        this.CaptureImage = this.preview ? 3 : 1; else {
                            f.default.Event.stat("preview", {
                                gid: this.id,
                                previewtype: 2
                            });
                            var t = this.resultImage, a = this;
                            e.previewImage({
                                urls: [ t ],
                                success: function(e) {
                                    a.CaptureImage = 2, a.previewImage = !0;
                                }
                            });
                        }
                    },
                    showShare: function(e) {
                        this.saveImageSmall = 2 == e, this.showshare = !0;
                    },
                    cancelShare: function() {
                        this.showshare = !1;
                    },
                    returnHome: function() {
                        e.navigateBack({});
                    },
                    answerAgin: function() {
                        this.incsavestatus = !0, this.isreplay = 1, this.isfirstplay = !1, this.start = !1, 
                        this.translateX = 0, this.next_answer = [ this.temp_answer[0] ], this.reset = 1, 
                        this.issave = !1, this.resimg = {
                            qrcode: "",
                            resultTemp: "",
                            nickName: "",
                            avatarUrl: "",
                            result: ""
                        }, this.activenum = this.temp_answer.map(function(e) {
                            return "";
                        }), this.scaleAnmia = !1, this.aginActive.translateX(this.translateX - this.screenWidth).step(), 
                        this.animationData = this.aginActive.export(), this.translateX = this.translateX - this.screenWidth;
                    },
                    verifyUserInfo: function(t) {
                        e.request({
                            url: b.globalData.host + "/index.php/App/Index/checkAppAvatar",
                            data: {
                                appid: b.globalData.appid,
                                avatarUrl: b.globalData.user.avatarUrl,
                                nickName: b.globalData.user.nickName
                            },
                            success: function(a) {
                                console.log(a), 0 == a.data.avatar_status && (b.globalData.user.avatarUrl = a.data.url), 
                                0 == a.data.name_status && (b.globalData.user.nickName = a.data.name), b.globalData.user.verify = 1, 
                                e.setStorageSync("user", b.globalData.user), t();
                            },
                            fail: function(e) {
                                console.log(e), t();
                            }
                        });
                    },
                    drawPicture: function(t, a) {
                        function s(t) {
                            setTimeout(function() {
                                o.draw(!0, function() {
                                    setTimeout(function() {
                                        e.canvasToTempFilePath({
                                            x: 0,
                                            y: 0,
                                            width: t.canvasHW.width,
                                            height: t.canvasHW.height,
                                            destWidth: t.canvasHW.width,
                                            destHeight: t.canvasHW.height,
                                            quality: .5,
                                            canvasId: "canvas",
                                            success: function(a) {
                                                t.resultImage = a.tempFilePath, setTimeout(function() {
                                                    t.imgfinished = !0, t.addresultimg ? t.addResultPicture() : t.progressend && (t.showmodel = !1, 
                                                    t.addResultPicture(), t.showAds && t.onload && (t.bannerNumber = parseInt(t.bannerNumber) + 1, 
                                                    e.setStorageSync("bannerNumber", t.bannerNumber)));
                                                }, 100);
                                            }
                                        }), e.canvasToTempFilePath({
                                            x: 0,
                                            y: 0,
                                            width: t.canvasHW.width,
                                            height: 512,
                                            destWidth: t.canvasHW.width,
                                            destHeight: 512,
                                            quality: .5,
                                            canvasId: "canvas",
                                            success: function(e) {
                                                t.shareAppImage = e.tempFilePath;
                                            }
                                        });
                                    }, 500);
                                });
                            }, 500);
                        }
                        var i = this;
                        this.canvasHW = {
                            width: a.result.width,
                            height: a.result.height
                        }, console.log(this.canvasHW);
                        var o = e.createCanvasContext("canvas"), n = this.special_config, r = JSON.parse(t.content).threshold;
                        if (n && n.headimg_config) {
                            var l = JSON.parse(n.headimg_config);
                            r && l[r] && (l = l[r]), o.drawImage(a.avatar.path, 0, 0, a.avatar.width, a.avatar.height, l.x, l.y, l.width, l.height);
                        }
                        if (o.drawImage(a.result.path, 0, 0), o.drawImage(a.qrcode.path, 0, 0, a.qrcode.width, a.qrcode.height, 0, a.result.height - a.qrcode.height * a.result.width / a.qrcode.width, a.result.width, a.qrcode.height * a.result.width / a.qrcode.width), 
                        n && n.draw_config && this.question_info.special_result) {
                            var d = JSON.parse(n.image_config), u = JSON.parse(n.draw_config);
                            o.setFillStyle("rgb(".concat(d.c_r, ", ").concat(d.c_g, ", ").concat(d.c_b, ")")), 
                            o.setFontSize(parseInt(d.font)), o.setTextAlign(u.align), o.setTextBaseline("top"), 
                            0 == b.globalData.user.verify && this.hasUserinfo ? this.verifyUserInfo(function() {
                                "center" == u.align ? o.fillText(b.globalData.user.nickName, u.x ? u.x : 320, u.y) : "right" == u.align ? o.fillText(b.globalData.user.nickName, u.x, u.y) : "left" == u.align && o.fillText(b.globalData.user.nickName, u.x, u.y), 
                                s(i);
                            }) : ("center" == u.align ? o.fillText(b.globalData.user.nickName, u.x ? u.x : 320, u.y) : "right" == u.align ? o.fillText(b.globalData.user.nickName, u.x, u.y) : "left" == u.align && o.fillText(b.globalData.user.nickName, u.x, u.y), 
                            s(this));
                        } else s(this);
                    },
                    addResultPicture: function() {
                        var t = this;
                        this.scrollToView = this.scrollId, this.ceshiprogress = !0, this.isfirstplay && this.onload && (this.playNumber = parseInt(this.playNumber) + 1, 
                        e.setStorageSync("playNumber", this.playNumber)), e.hideLoading(), this.animation.translateX(this.translateX - this.screenWidth).step(), 
                        this.animationData = this.animation.export(), this.translateX = this.translateX - this.screenWidth, 
                        setTimeout(function() {
                            t.scaleAnmia = !0, console.log(t.resultsofvideo, "resultsofvideo"), t.resultsofvideo && t.videoAd && t.showAds && (t.videolockBox = !0), 
                            setTimeout(function() {
                                if (t.showTips = !0, t.resultsofvideo && t.videoAd && t.showAds) return !0;
                                t.imgGif(), !t.cancelinc && t.onload && (t.postResult(), f.default.Event.stat("finishtest", {
                                    gid: t.id
                                }));
                            }, 900);
                        }, 500);
                    },
                    postResult: function() {
                        var t = this.videoEnded ? this.bannerNumber : 0;
                        console.log(t);
                        var a = this;
                        if (a.resultTjFlag) {
                            var s;
                            a.resultTjFlag = !1;
                            var o = JSON.parse(a.resultData.content), r = JSON.parse(a.resultData.attention), l = b.globalData.host + "/index.php/Wetest/Entry/incGetresult";
                            a.result = o.threshold, e.request({
                                url: l,
                                data: (s = {
                                    src: b.globalData.src,
                                    id: a.question_info.id,
                                    acid: b.globalData.acid,
                                    result: o.threshold,
                                    account: r.account,
                                    idx: o.new_idx,
                                    round: this.round,
                                    appid: b.globalData.appid,
                                    sgid: b.globalData.from_gid,
                                    ver: b.globalData.ver
                                }, i(s, "src", b.globalData.src), i(s, "scene", b.globalData.scene), i(s, "source", b.globalData.source), 
                                i(s, "uid", (0, n.setUid)()), i(s, "videoad", t), i(s, "hour", this.hour), s),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function() {
                                    a.resultTjFlag = !1;
                                },
                                fail: function() {
                                    a.resultTjFlag = !0;
                                }
                            });
                        }
                    },
                    imgGif: function() {
                        var e = this, t = 0, a = setInterval(function() {
                            e.finger = "../../static/question/finger".concat(t % 3 + 1, ".png"), ++t > 17 && (e.showTips = !1, 
                            clearInterval(a));
                        }, 300);
                    },
                    incImageSave: function(t, a) {
                        console.log("dst:" + a);
                        var s = this;
                        e.request({
                            url: b.globalData.host + "/index.php/App/Index/commonLongtap",
                            method: "POST",
                            data: {
                                result: s.result,
                                gid: s.question_info.id,
                                type: t,
                                src: b.globalData.src,
                                source: b.globalData.source,
                                round: this.round,
                                sgid: b.globalData.from_gid,
                                uid: (0, n.setUid)(),
                                scene: b.globalData.scene,
                                appid: b.globalData.appid,
                                ver: b.globalData.ver,
                                dst: a
                            },
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {}
                        });
                    },
                    savePicture: function(t) {
                        var a = this.resultImage, s = this;
                        wx.getSetting({
                            success: function(t) {
                                t.authSetting["scope.writePhotosAlbum"] ? e.saveImageToPhotosAlbum({
                                    filePath: a,
                                    success: function() {
                                        e.showToast({
                                            title: "图片保存成功"
                                        }), s.showdingyue && 4 == s.subscribe_status && s.addDingYue(s.subscribe_status), 
                                        console.log("save success"), s.saveImageSmall ? (f.default.Event.stat("saveresultimage", {
                                            gid: s.id,
                                            savetype: 1
                                        }), s.inlongSmall && (s.incImageSave(1, 2), s.inlongSmall = !1)) : (f.default.Event.stat("saveresultimage", {
                                            gid: s.id,
                                            savetype: 2
                                        }), s.inlongBig && (s.incImageSave(1, 3), s.inlongBig = !1));
                                    }
                                }) : e.saveImageToPhotosAlbum({
                                    filePath: a,
                                    success: function() {
                                        e.showToast({
                                            title: "图片保存成功"
                                        }), s.showdingyue && 4 == s.subscribe_status && s.addDingYue(s.subscribe_status), 
                                        console.log("save success"), s.saveImageSmall ? (f.default.Event.stat("saveresultimage", {
                                            gid: s.id,
                                            savetype: 1
                                        }), s.inlongSmall && (s.incImageSave(1, 2), s.inlongSmall = !1)) : (f.default.Event.stat("saveresultimage", {
                                            gid: s.id,
                                            savetype: 2
                                        }), s.inlongBig && (s.incImageSave(1, 3), s.inlongBig = !1));
                                    },
                                    fail: function(t) {
                                        e.showModal({
                                            title: "保存失败",
                                            content: "保存图片到相册功能需要开启相册授权！",
                                            showCancel: !1,
                                            cancelText: "取消",
                                            confirmText: "确定",
                                            success: function(e) {
                                                wx.openSetting({});
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    showSubscribe: function(e) {
                        this.showdingyue && "303" != b.globalData.source ? (this.dingyuemodel = !0, f.default.Event.stat("showSubscribebox", {
                            showtype: this.subscribe_status + "_1"
                        })) : e();
                    },
                    cancalsub: function() {
                        var e = this;
                        switch (this.dingyuemodel = !1, f.default.Event.stat("showSubscribebox", {
                            showtype: this.subscribe_status + "_3"
                        }), this.subscribe_status) {
                          case 1:
                            this.starGame();
                            break;

                          case 2:
                            this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count, this.analyzeResult(), 
                            1 == this.hasbannerad && (this.showmodel = !0, setTimeout(function() {
                                e.modelProgress();
                            }, 1e3));
                        }
                    },
                    addDingYue: function() {
                        var t = this;
                        this.dingyuemodel = !1, f.default.Event.stat("showSubscribebox", {
                            showtype: this.subscribe_status + "_2"
                        }), qq.subscribeAppMsg({
                            subscribe: !0,
                            success: function(a) {
                                switch (v.addSubscribe(b, function() {
                                    e.setStorageSync("subscribe", 1), f.default.Event.stat("addSubscribe", {
                                        subscribetype: b.globalData.ver + "_" + t.subscribe_status + "_1"
                                    });
                                }), t.subscribe_status) {
                                  case 1:
                                    t.starGame();
                                    break;

                                  case 2:
                                    t.analyzeResult(), 1 == t.hasbannerad && (t.showmodel = !0, setTimeout(function() {
                                        t.modelProgress();
                                    }, 1e3));
                                }
                            },
                            fail: function(a) {
                                switch (console.log("----subscribeAppMsg----fail", a), "subscribeAppMsg:fail no permission" == a.errMsg && e.setStorageSync("subscribe", 2), 
                                f.default.Event.stat("addSubscribe", {
                                    subscribetype: b.globalData.ver + "_" + t.subscribe_status + "_2"
                                }), t.subscribe_status) {
                                  case 1:
                                    t.starGame();
                                    break;

                                  case 2:
                                    t.scrollToView = t.scrollId, t.scrollTop = 1e3 * t.count, t.analyzeResult(), 1 == t.hasbannerad && (t.showmodel = !0, 
                                    setTimeout(function() {
                                        t.modelProgress();
                                    }, 1e3));
                                }
                            }
                        });
                    }
                }
            };
            t.default = _;
        }).call(this, a("543d").default);
    },
    f3a3: function(e, t, a) {
        a.r(t);
        var s = a("7789"), i = a("c4e4");
        for (var o in i) "default" !== o && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        a("f700");
        var n = a("2877"), r = Object(n.a)(i.default, s.a, s.b, !1, null, "1ea419b0", null);
        t.default = r.exports;
    },
    f700: function(e, t, a) {
        var s = a("b4a7");
        a.n(s).a;
    }
}, [ [ "5bf7", "common/runtime", "common/vendor" ] ] ]);