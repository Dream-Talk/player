(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/quiz/index" ], {
    "04c4": function(e, t, a) {
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
            var o, n = a("4e22"), r = a("c7c6"), l = s(a("cd71")), u = s(a("6654")), d = s(a("6f91")), c = s(a("a94b")), h = s(a("a6fa")), g = s(a("0861")), p = s(a("3324")), m = s(a("57a0")), f = s(a("1418")), b = s(a("f47e")), v = new (s(a("94f5")).default)(), _ = getApp(), y = {
                data: function() {
                    return {
                        closeIcon: f.default,
                        watchBtn: p.default,
                        videoButton: !1,
                        originalQuce: l.default,
                        videoIcon: m.default,
                        previewImage: !1,
                        authorButton: !1,
                        makeButton: !1,
                        question_info: {},
                        special_config: {},
                        question: [],
                        shareOther: c.default,
                        shuoshuotu: h.default,
                        againimg: g.default,
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
                        answerAvatar: _.globalData.user.avatarUrl ? _.globalData.user.avatarUrl : u.default,
                        resimg: {
                            qrcode: "",
                            result: "",
                            avatar: _.globalData.user.avatarUrl ? _.globalData.user.avatarUrl : n.ssl_static_host + "quce/1562666285IKXQK.png"
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
                        needlogin: !1
                    };
                },
                onLoad: function(t) {
                    (0, r.initChannel)(t), console.log(_.globalData.from_gid), b.default.Page.init(), 
                    this.onload = 1;
                    var a = this;
                    a.id = t.id, "undefined" != t.title && (console.log("setNavigationBarTitle", t.title), 
                    a.sharetitle = t.title, e.setNavigationBarTitle({
                        title: a.sharetitle
                    }));
                    var s = e.getStorageSync("bannerNumber"), i = e.getStorageSync("user"), o = e.getStorageSync("userinfo");
                    e.getUserInfo({
                        success: function(t) {
                            if (a.hasUserinfo = !0, o.nickName == t.userInfo.nickName && o.avatarUrl == t.userInfo.avatarUrl) _.globalData.user = i; else {
                                var s = {
                                    nickName: t.userInfo.nickName,
                                    avatarUrl: t.userInfo.avatarUrl,
                                    verify: 0
                                };
                                _.globalData.user = s, e.setStorageSync("user", s), e.setStorageSync("userinfo", s);
                            }
                        },
                        fail: function(e) {}
                    }), t.acid && (_.globalData.acid = t.acid), this.canshareqzone = !1;
                    var n = e.getStorageSync("playNumber"), l = e.getStorageSync("videoplayednumber");
                    this.playNumber = n || 0, this.bannerNumber = s || 0, this.videoplayednumber = l || 0, 
                    this.initQuestion(t), e.onUserCaptureScreen(function(e) {
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
                computed: {
                    modelList: function() {
                        if (this.modelContent) return this.modelContent.split("##");
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
                components: {
                    AnswerBox: function() {
                        return Promise.all([ a.e("common/vendor"), a.e("components/AnswerBox") ]).then(a.bind(null, "2b59"));
                    },
                    AuthorBox: function() {
                        return Promise.all([ a.e("common/vendor"), a.e("components/AuthorBox") ]).then(a.bind(null, "7db3"));
                    },
                    QuestionNum: function() {
                        return a.e("components/QuestionNum").then(a.bind(null, "1594"));
                    }
                },
                methods: {
                    initQuestion: function(t) {
                        var a = this;
                        this.adtime = e.getStorageSync("ad_video");
                        var s = {
                            appid: _.globalData.appid,
                            ver: _.globalData.ver,
                            sgid: _.globalData.from_gid,
                            uid: (0, r.setUid)(),
                            source: _.globalData.source,
                            scene: _.globalData.scene,
                            src: _.globalData.src,
                            adtime: this.adtime ? this.adtime : 0,
                            adplayed: this.bannerNumber,
                            quizplayed: this.playNumber,
                            videoplayed: this.videoplayednumber
                        };
                        t.id && (s.id = t.id), t.q && (s.q = t.q), e.request({
                            url: _.globalData.host + "/index.php/App/Index/getQuizInfo",
                            data: s,
                            success: function(s) {
                                console.log(s.data);
                                var i = s.data;
                                if (t.q && (a.round = i.round ? i.round : "1", _.globalData.from_gid = s.data.id ? s.data.id : "0", 
                                _.globalData.src = s.data.src ? s.data.src : "301", a.hour = s.data.hour, a.id = s.data.id), 
                                b.default.Event.stat("participation", {
                                    gid: a.id
                                }), a.needAsk = s.data.needAsk, a.showAds = 1 == i.showAds, a.forcedAds = 1 == i.forcedAds, 
                                a.quiztype = i.type, a.cancelinc = i.cancelinc, a.question_info = i, a.special_config = i.special_config, 
                                a.shuoshuo = i.shuoshuo, a.shuoshuo_sharetitle = i.shuoshuo_sharetitle, a.hasbannerad = i.banner_ad, 
                                a.transitiontime = 10 * parseInt(i.banner_ad_time), a.banneradutilid = i.banner_ad_utilid, 
                                a.banneradcontent = i.banner_ad_content, a.imageshare = i.imageshare, a.original = i.original, 
                                a.video_banner_ad = i.video_banner_ad, a.adBox_cancel_btn = i.adBox_cancel_btn, 
                                a.adBox_video_btn = i.adBox_video_btn, a.banner_ad_style = i.banner_ad_style, a.subscribe_status = i.subscribe_status ? i.subscribe_status : 0, 
                                a.subscribe_content = i.subscribe_content, a.adBox_style_type = i.adBox_style_type ? i.adBox_style_type : 1, 
                                a.showVideoModel = void 0 != i.show_video_model ? i.show_video_model : 1, "1109659848" == _.globalData.appid) {
                                    var o = i.video_ad_utilid ? i.video_ad_utilid : "54722faa6e7bc4733033911f21e83b90";
                                    console.log(i.video_ad_select), a.forcebutton = 1 != i.video_ad_select;
                                } else "1109802828" == _.globalData.appid ? (o = i.video_ad_utilid, a.forcebutton = !0) : "wx" == _.globalData.apptype ? (o = i.video_ad_utilid, 
                                console.log(i.video_ad_select), a.forcebutton = 1 != i.video_ad_select) : (_.globalData.appid = "1109743918") && (o = i.video_ad_utilid ? i.video_ad_utilid : "", 
                                a.forcebutton = 1 != i.video_ad_select);
                                try {
                                    a.videoAd = wx.createRewardedVideoAd({
                                        adUnitId: o
                                    });
                                } catch (e) {}
                                a.videoAd && a.videoAd.onError(function(e) {
                                    a.videoErr = !0;
                                }), a.showAds && a.videoAd && (a.transitiontime = 10 * parseInt(i.banner_videoad_time), 
                                a.banneradutilid = i.banner_videoad_utilid), a.title || (a.sharetitle = i.title, 
                                e.setNavigationBarTitle({
                                    title: i.title
                                })), i.sharetitle && (a.shareqzonetitle = i.sharetitle), !e.getStorageSync("user_top") && i.settop && (a.settop = i.settop, 
                                a.settop.img = n.static_host + s.data.settop.img, a.cancalSettop()), a.special_config && 0 == a.hasUserinfo && (a.needlogin = !0), 
                                console.log(a.needlogin), a.modelContent = i.adBox_desc, a.question = JSON.parse(i.question), 
                                a.options = a.question.map(function() {
                                    return 0;
                                }), i.logo && a.add("AuthorBox", a.setObj({
                                    topicImage: n.static_host + i.logo
                                })), setTimeout(function() {
                                    a.add("AuthorBox", a.setObj({
                                        desc: i.desc,
                                        start: a.start
                                    })), setTimeout(function() {
                                        a.loading = !1;
                                    }, 500);
                                }, 200);
                            }
                        });
                    },
                    sharefriend: function(e) {
                        console.log(e), 2 == e ? b.default.Event.stat("sharestatistics", {
                            sharetype: 2,
                            gid: this.id
                        }) : this.saveImageSmall ? b.default.Event.stat("sharestatistics", {
                            sharetype: 1,
                            gid: this.id
                        }) : b.default.Event.stat("sharestatistics", {
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
                        }), b.default.Event.stat("captureScreen", {
                            gid: this.id,
                            capturetype: this.CaptureImage
                        }), e.request({
                            url: _.globalData.host + "/index.php/App/Index/incUserCaptureScreen",
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
                                    url: _.globalData.host + "/index.php/App/Index/getQQappOpenid",
                                    data: {
                                        js_code: a.code,
                                        appid: _.globalData.appid
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
                    setObj: function(e) {
                        var t = {
                            desc: !1,
                            question: !1,
                            topicImage: !1,
                            picture: !1,
                            audio: !1,
                            picarr: !1,
                            options: !1,
                            start: !1,
                            nextQuestion: !1,
                            prevQuestion: !1,
                            resultImage: !1,
                            viewPicture: !1,
                            resultTjFlag: !0,
                            savePicture: !1,
                            animationData: ""
                        };
                        for (var a in e) t[a] = e[a];
                        return t;
                    },
                    openQzone: function(e) {
                        var t = this, a = "";
                        a = this.shuoshuo_sharetitle ? this.shuoshuo_sharetitle : this.shareqzonetitle, 
                        2 == e ? b.default.Event.stat("shareqzone", {
                            gid: this.id,
                            qzonetype: 2
                        }) : this.saveImageSmall ? b.default.Event.stat("shareqzone", {
                            gid: this.id,
                            qzonetype: 1
                        }) : b.default.Event.stat("shareqzone", {
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
                    start: function() {
                        var e = this;
                        1 == this.subscribe_status ? this.showSubscribe(function() {
                            e.starGame();
                        }) : this.starGame();
                    },
                    starGame: function() {
                        var e = this;
                        this.add("AnswerBox", {
                            text: "开始",
                            avatar: this.answerAvatar
                        }), setTimeout(function() {
                            var t = e.question[0], a = e.resetOption(t.answer), s = {
                                question: t.question,
                                picture: !!t.img && n.static_host + t.img,
                                options: a.options,
                                picarr: a.picarr,
                                nextQuestion: e.nextQuestion
                            };
                            e.add("QuestionNum", {
                                num: e.current + 1,
                                len: e.question.length
                            }), e.add("AuthorBox", e.setObj(s)), 3 != e.question_info.type ? e.current += 1 : e.options[0] = 1, 
                            o = setTimeout(function() {
                                e.scrollToView = e.scrollId, e.scrollTop = 1e3 * e.count;
                            }, 400);
                        }, 400);
                    },
                    nextQuestion: function(e) {
                        var t = this, a = !1;
                        switch (clearTimeout(o), this.question_info.type) {
                          case "2":
                            this.options[this.current - 1] = this.question[this.current - 1].answer[e.num].weight;
                            break;

                          case "3":
                            var s = this.question[this.current].answer[e.num].next;
                            parseInt(s) ? (this.options[this.current] = parseInt(s), this.current = parseInt(s) - 1) : (a = !0, 
                            this.options[this.current] = s);
                            break;

                          default:
                            this.options[this.current - 1] = e.num.toUpperCase();
                        }
                        this.add("AnswerBox", {
                            text: e.title ? e.title : e.num,
                            avatar: this.answerAvatar
                        }), setTimeout(function() {
                            t.scrollToView = t.scrollId, t.scrollTop = 1e3 * t.count;
                        }, 100), this.current === this.question.length || a ? (this.showbannerad = this.showAds && this.videoAd, 
                        this.special_config && 0 == this.hasUserinfo ? (this.authorButton = !0, this.margin = !0) : this.overAnswer()) : setTimeout(function() {
                            var e = t.question[t.current], a = t.resetOption(e.answer), s = {
                                question: e.question,
                                picture: !!e.img && n.static_host + e.img,
                                options: a.options,
                                picarr: a.picarr,
                                audio: !!e.audio && n.static_host + e.audio,
                                nextQuestion: t.nextQuestion,
                                prevQuestion: t.current > 0,
                                playAudiao: t.playAudiao
                            };
                            t.add("QuestionNum", {
                                num: t.current + 1,
                                len: t.question.length
                            }), t.add("AuthorBox", t.setObj(s)), o = setTimeout(function() {
                                t.scrollToView = t.scrollId, t.scrollTop = 1e3 * t.count;
                            }, 400), 3 != t.question_info.type && (t.current += 1);
                        }, 400);
                    },
                    overAnswer: function() {
                        var e = this;
                        this.isfirstplay ? this.showAds && this.videoAd ? 0 == this.showVideoModel ? setTimeout(function() {
                            e.makeResult();
                        }, 500) : setTimeout(function() {
                            1 == e.adBox_style_type ? b.default.Event.stat("showvideomodel", {
                                videotype: "3_" + _.globalData.ver,
                                gid: e.id
                            }) : b.default.Event.stat("showvideomodel", {
                                videotype: e.adBox_style_type + "_" + _.globalData.ver,
                                gid: e.id
                            }), console.log(!0), e.showmodel = !0;
                        }, 1e3) : 2 == this.subscribe_status ? this.showSubscribe(function() {
                            e.scrollToView = e.scrollId, e.scrollTop = 1e3 * e.count, e.analyzeResult(), 1 == e.hasbannerad && (e.showmodel = !0, 
                            setTimeout(function() {
                                e.modelProgress();
                            }, 1e3));
                        }) : (this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count, this.analyzeResult(), 
                        1 == this.hasbannerad && (this.showmodel = !0, setTimeout(function() {
                            e.modelProgress();
                        }, 1e3))) : (this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count, 
                        this.analyzeResult());
                    },
                    checking: function(e) {
                        return !!/^[a-zA-Z]+$/.test(e);
                    },
                    prevQuestion: function(e) {
                        for (var t = this, a = this.options.length; a > 0; a--) if (0 != this.options[a - 1]) {
                            this.current = a - 1, this.options[a - 1] = 0;
                            break;
                        }
                        this.add("AnswerBox", {
                            text: "重新回答上一题",
                            avatar: this.answerAvatar
                        }), setTimeout(function() {
                            t.scrollToView = t.scrollId, t.scrollTop = 1e3 * t.count;
                        }, 100), setTimeout(function() {
                            var e = t.question[t.current], a = t.resetOption(e.answer), s = {
                                question: e.question,
                                picture: !!e.img && n.static_host + e.img,
                                options: a.options,
                                picarr: a.picarr,
                                nextQuestion: t.nextQuestion,
                                prevQuestion: t.current > 0
                            };
                            t.add("QuestionNum", {
                                num: t.current + 1,
                                len: t.question.length
                            }), t.add("AuthorBox", t.setObj(s)), 3 != t.question_info.type && (t.current += 1), 
                            setTimeout(function() {
                                t.scrollToView = t.scrollId, t.scrollTop = 1e3 * t.count;
                            }, 400);
                        }, 500);
                    },
                    add: function(e, t) {
                        this.scrollId += 1, t.scrollid = this.scrollId, this.count += .5, this.items.push({
                            component: e,
                            content: t
                        });
                    },
                    resetOption: function(e) {
                        var t = [], a = !1;
                        for (var s in e) e[s].img && (a = !0), t.push({
                            title: e[s].title,
                            num: s,
                            img: n.static_host + e[s].img
                        });
                        return {
                            options: t,
                            picarr: a
                        };
                    },
                    getUserInfo: function(t) {
                        var a = this, s = this;
                        this.showbannerad = this.showAds && this.videoAd, t.detail && t.detail.userInfo ? (console.log("analyzeResult111111111111"), 
                        this.hasUserinfo = !0, this.authorButton = !1, this.margin = !1, _.globalData.user = {
                            nickName: t.detail.userInfo.nickName,
                            avatarUrl: t.detail.userInfo.avatarUrl,
                            verify: 0
                        }, e.setStorageSync("user", _.globalData.user), e.setStorageSync("userinfo", {
                            nickName: t.detail.userInfo.nickName,
                            avatarUrl: t.detail.userInfo.avatarUrl
                        }), this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count, s.authorButton = !1, 
                        s.margin = !1, s.showAds && s.videoAd ? (console.log("analyzeResult11222221"), 0 == this.showVideoModel ? (console.log("analyzeResul33333333333"), 
                        setTimeout(function() {
                            a.makeResult();
                        }, 500)) : (1 == this.adBox_style_type ? b.default.Event.stat("showvideomodel", {
                            videotype: "3_" + _.globalData.ver,
                            gid: this.id
                        }) : b.default.Event.stat("showvideomodel", {
                            videotype: this.adBox_style_type + "_" + _.globalData.ver + "_" + this.videoWatchNumber,
                            gid: this.id
                        }), console.log("analyzeResul4444444"), s.showmodel = !0)) : (console.log("analyzeResult"), 
                        s.analyzeResult(), 1 == s.hasbannerad && (s.showmodel = !0, setTimeout(function() {
                            s.modelProgress();
                        }, 1e3)))) : (console.log("授权失败"), this.authorButton = !1, this.margin = !1, _.globalData.user = {
                            nickName: "趣测",
                            avatarUrl: n.ssl_static_host + "quce/1562666285IKXQK.png"
                        }, this.resimg.avatar = n.ssl_static_host + "quce/1562666285IKXQK.png", this.scrollToView = this.scrollId, 
                        this.scrollTop = 1e3 * this.count, s.authorButton = !1, s.margin = !1, s.showAds && s.videoAd ? 0 == this.showVideoModel ? setTimeout(function() {
                            a.makeResult();
                        }, 500) : (1 == this.adBox_style_type ? b.default.Event.stat("showvideomodel", {
                            videotype: "3_" + _.globalData.ver,
                            gid: this.id
                        }) : b.default.Event.stat("showvideomodel", {
                            videotype: this.adBox_style_type + "_" + _.globalData.ver,
                            gid: this.id
                        }), s.showmodel = !0) : (s.analyzeResult(), 1 == s.hasbannerad && (s.showmodel = !0, 
                        setTimeout(function() {
                            s.modelProgress();
                        }, 1e3))));
                    },
                    gohome: function() {
                        console.log("cancal_video", {
                            gid: this.id,
                            cancaltype: "3_" + _.globalData.ver + "_" + this.videoWatchNumber,
                            adstyletype: this.adBox_style_type
                        }), b.default.Event.stat("cancal_video", {
                            gid: this.id,
                            cancaltype: "3_" + _.globalData.ver + "_" + this.videoWatchNumber,
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
                        1 == this.adBox_style_type ? b.default.Event.stat("show_video", {
                            showtype: "3_" + _.globalData.ver,
                            gid: this.id
                        }) : (console.log("show_video", {
                            showtype: this.adBox_style_type + "_" + _.globalData.ver + "_" + this.videoWatchNumber,
                            gid: this.id
                        }), b.default.Event.stat("show_video", {
                            showtype: this.adBox_style_type + "_" + _.globalData.ver + "_" + this.videoWatchNumber,
                            gid: this.id
                        })), this.videoAd.load().then(function() {
                            console.log("load sucess"), t.videoAd.show().catch(function() {
                                a.analyzeResult();
                            }), console.log("show"), t.videoAd.show(), t.videoAd.onClose(function(t) {
                                if (a.makeRes && !a.videoErr) {
                                    a.videoEnded = t.isEnded;
                                    var s = t.isEnded ? 1 : 0;
                                    s && (a.bannerNumber = parseInt(a.bannerNumber) + 1, e.setStorageSync("bannerNumber", a.bannerNumber), 
                                    a.videoplayednumber = parseInt(a.videoplayednumber) + 1, e.setStorageSync("videoplayednumber", a.videoplayednumber), 
                                    e.setStorageSync("ad_video", Math.round(new Date().getTime() / 1e3))), setTimeout(function() {
                                        e.request({
                                            url: _.globalData.host + "/index.php/App/Index/incQQAdsProgress",
                                            data: {
                                                progress: s,
                                                gid: a.id,
                                                appid: _.globalData.appid,
                                                sgid: _.globalData.from_gid,
                                                ver: _.globalData.ver,
                                                round: this.round,
                                                uid: (0, r.setUid)(),
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
                                            playedtype: a.adBox_style_type + "_" + _.globalData.ver + "_" + a.videoWatchNumber,
                                            gid: a.id
                                        }), b.default.Event.stat("video_played", {
                                            playedtype: a.adBox_style_type + "_" + _.globalData.ver + "_" + a.videoWatchNumber,
                                            gid: a.id
                                        }), a.analyzeResult();
                                    }, 500) : "1109659848" == _.globalData.appid || "1109743918" == _.globalData.appid || "wx" == _.globalData.apptype ? (setTimeout(function() {
                                        console.log("cancal_video", {
                                            gid: a.id,
                                            cancaltype: "2_" + _.globalData.ver + "_" + a.videoWatchNumber,
                                            adstyletype: a.adBox_style_type
                                        }), b.default.Event.stat("cancal_video", {
                                            gid: a.id,
                                            cancaltype: "2_" + _.globalData.ver + "_" + a.videoWatchNumber,
                                            adstyletype: a.adBox_style_type + "_" + _.globalData.ver
                                        });
                                    }, 200), a.forcedAds ? 1 == a.video_banner_ad ? (a.showmodel = !0, a.showbannerad = !1, 
                                    setTimeout(function() {
                                        a.analyzeResult(), a.progresswidth = 100, a.modelProgress();
                                    }, 1e3)) : a.videoButton = !0 : setTimeout(function() {
                                        a.analyzeResult();
                                    }, 500)) : "1109802828" == _.globalData.appid && (a.forcedAds ? a.showmodel = !0 : setTimeout(function() {
                                        a.analyzeResult();
                                    }, 500)), a.makeRes = 0;
                                }
                            }), t.videoAd.onError(function(t) {
                                console.log(t), e.request({
                                    url: _.globalData.host + "/index.php/App/Index/incQQAdsProgress",
                                    data: {
                                        progress: 2,
                                        gid: a.id,
                                        appid: _.globalData.appid,
                                        ver: _.globalData.ver,
                                        sgid: _.globalData.from_gid,
                                        uid: (0, r.setUid)(),
                                        round: this.round,
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
                                }), a.videoErr = !0, a.makeButton = !1, a.margin = !1, a.analyzeResult();
                            });
                        }).catch(function() {
                            console.log("load fail"), a.makeButton = !1, a.margin = !1, a.analyzeResult();
                        })) : (console.log(1111111111111), a.makeButton = !1, a.margin = !1, a.analyzeResult());
                    },
                    analyzeResult: function() {
                        var e = this;
                        o = setTimeout(function() {
                            e.parseResult();
                        }, 400);
                    },
                    parseResult: function() {
                        var t = this, a = [];
                        this.options.map(function(e, t) {
                            0 != e && (e = e.toString(), a.push(e.toUpperCase()));
                        }), a = a.toString(",");
                        var s = this;
                        this.add("AuthorBox", this.setObj({
                            question: "正在为您分析结果......"
                        })), this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count;
                        var i = {
                            id: this.question_info.id,
                            acid: _.globalData.acid,
                            userinput: _.globalData.user.nickName,
                            isreplay: this.isreplay,
                            sgid: _.globalData.from_gid,
                            round: this.round,
                            ver: _.globalData.ver,
                            appid: _.globalData.appid,
                            uid: (0, r.setUid)(),
                            src: _.globalData.src,
                            source: _.globalData.source,
                            scene: _.globalData.scene,
                            quizfrom: "wxapp"
                        };
                        0 == this.needAsk ? (i.israndresult = 1, i.option = "A") : i.option = a, e.request({
                            url: _.globalData.host + "/index.php/Wetest/Entry/getresult",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: i,
                            success: function(a) {
                                var i = a.data;
                                if (t.resultData = a.data, s.resimg.qrcode = n.ssl_static_host + JSON.parse(a.data.attention).qrcode, 
                                s.resimg.result = n.ssl_static_host + JSON.parse(a.data.content).img, t.share_ecodeid = !!i.share_ecodeid && i.share_ecodeid, 
                                s.shareImage = s.resimg.result, s.special_config && s.special_config.result_image) {
                                    var o = JSON.parse(a.data.content).threshold, r = JSON.parse(s.special_config.result_image)[o];
                                    r && (s.resimg.result = n.ssl_static_host + r);
                                }
                                i.share_title && (s.shareqzonetitle = i.share_title), i.share_shuoshuo_title && (s.shuoshuo_sharetitle = i.share_shuoshuo_title), 
                                s.isfirstplay && s.special_config ? e.getImageInfo({
                                    src: _.globalData.user.avatarUrl,
                                    success: function(e) {
                                        "gif" == e.type ? s.resimg.avatar = n.ssl_static_host + "quce/1562666285IKXQK.png" : s.resimg.avatar = _.globalData.user.avatarUrl, 
                                        s.getImageAll(i, s.drawPicture);
                                    },
                                    fail: function(e) {
                                        console.log(e);
                                    }
                                }) : s.getImageAll(a.data, s.drawPicture);
                            }
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
                        if (this.imageshare) b.default.Event.stat("preview", {
                            gid: this.id,
                            previewtype: 1
                        }), this.preview = !this.preview, this.showshare = !1, this.saveImageSmall = !this.saveImageSmall, 
                        this.CaptureImage = this.preview ? 3 : 1; else {
                            b.default.Event.stat("preview", {
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
                        var e = this;
                        this.incsavestatus = !0, this.isreplay = 1, this.isfirstplay = !1, this.shuoshuobutton = !1, 
                        this.button = !1, this.resimg = {
                            qrcode: "",
                            result: "",
                            avatar: _.globalData.user.avatarUrl ? _.globalData.user.avatarUrl : n.ssl_static_host + "quce/1562666285IKXQK.png"
                        }, this.current = 0, this.options = this.question.map(function() {
                            return 0;
                        }), 3 == this.question_info.type && (this.options[0] = 1), setTimeout(function() {
                            e.add("AnswerBox", {
                                text: "再来一次",
                                avatar: e.answerAvatar
                            }), e.scrollToView = e.scrollId, setTimeout(function() {
                                e.button = !1, e.margin = !1;
                                var t = e.question[0], a = e.resetOption(t.answer), s = {
                                    question: t.question,
                                    picture: !!t.img && n.static_host + t.img,
                                    options: a.options,
                                    picarr: a.picarr,
                                    nextQuestion: e.nextQuestion
                                };
                                e.add("QuestionNum", {
                                    num: e.current + 1,
                                    len: e.question.length
                                }), e.add("AuthorBox", e.setObj(s)), 3 != e.question_info.type && (e.current += 1), 
                                setTimeout(function() {
                                    e.scrollToView = e.scrollId, e.scrollTop = 1e3 * e.count;
                                }, 400);
                            }, 100);
                        }, 100);
                    },
                    verifyUserInfo: function(t) {
                        e.request({
                            url: _.globalData.host + "/index.php/App/Index/checkAppAvatar",
                            data: {
                                appid: _.globalData.appid,
                                avatarUrl: _.globalData.user.avatarUrl,
                                nickName: _.globalData.user.nickName
                            },
                            success: function(a) {
                                console.log(a), 0 == a.data.avatar_status && (_.globalData.user.avatarUrl = a.data.url), 
                                0 == a.data.name_status && (_.globalData.user.nickName = a.data.name), _.globalData.user.verify = 1, 
                                e.setStorageSync("user", _.globalData.user), t();
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
                            var u = JSON.parse(n.image_config), d = JSON.parse(n.draw_config);
                            o.setFillStyle("rgb(".concat(u.c_r, ", ").concat(u.c_g, ", ").concat(u.c_b, ")")), 
                            o.setFontSize(parseInt(u.font)), o.setTextAlign(d.align), o.setTextBaseline("top"), 
                            0 == _.globalData.user.verify && this.hasUserinfo ? this.verifyUserInfo(function() {
                                "center" == d.align ? o.fillText(_.globalData.user.nickName, d.x ? d.x : 320, d.y) : "right" == d.align ? o.fillText(_.globalData.user.nickName, d.x, d.y) : "left" == d.align && o.fillText(_.globalData.user.nickName, d.x, d.y), 
                                s(i);
                            }) : ("center" == d.align ? o.fillText(_.globalData.user.nickName, d.x ? d.x : 320, d.y) : "right" == d.align ? o.fillText(_.globalData.user.nickName, d.x, d.y) : "left" == d.align && o.fillText(_.globalData.user.nickName, d.x, d.y), 
                            s(this));
                        } else s(this);
                    },
                    addResultPicture: function() {
                        var t = this;
                        this.add("AuthorBox", this.setObj({
                            resultImage: this.resultImage,
                            viewPicture: this.viewPicture,
                            savePicture: this.savePicture
                        })), this.scrollToView = this.scrollId, this.ceshiprogress = !0, !this.cancelinc && this.onload && (this.postResult(), 
                        b.default.Event.stat("finishtest", {
                            gid: this.id
                        })), this.isfirstplay && this.onload && (this.playNumber = parseInt(this.playNumber) + 1, 
                        e.setStorageSync("playNumber", this.playNumber)), setTimeout(function() {
                            t.scrollTop = 1e3 * t.count, t.add("AuthorBox", t.setObj({
                                question: "长按上方图片保存您的结果卡片"
                            })), t.margin = !0, setTimeout(function() {
                                t.margin = !0, t.shuoshuo ? t.shuoshuobutton = !0 : t.button = !0, t.scrollToView = t.scrollId, 
                                t.scrollTop = 1e3 * t.count;
                            }, 400);
                        }, 400);
                    },
                    postResult: function() {
                        var t = this.videoEnded ? this.bannerNumber : 0;
                        console.log(t);
                        var a = this;
                        if (a.resultTjFlag) {
                            var s;
                            a.resultTjFlag = !1;
                            var o = JSON.parse(a.resultData.content), n = JSON.parse(a.resultData.attention), l = _.globalData.host + "/index.php/Wetest/Entry/incGetresult";
                            a.result = o.threshold, e.request({
                                url: l,
                                data: (s = {
                                    src: _.globalData.src,
                                    id: a.question_info.id,
                                    acid: _.globalData.acid,
                                    result: o.threshold,
                                    account: n.account,
                                    idx: o.new_idx,
                                    round: this.round,
                                    appid: _.globalData.appid,
                                    sgid: _.globalData.from_gid,
                                    ver: _.globalData.ver
                                }, i(s, "src", _.globalData.src), i(s, "scene", _.globalData.scene), i(s, "source", _.globalData.source), 
                                i(s, "uid", (0, r.setUid)()), i(s, "videoad", t), i(s, "hour", this.hour), s),
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
                    incImageSave: function(t, a) {
                        console.log("dst:" + a);
                        var s = this;
                        e.request({
                            url: _.globalData.host + "/index.php/App/Index/commonLongtap",
                            method: "POST",
                            data: {
                                result: s.result,
                                gid: s.question_info.id,
                                type: t,
                                src: _.globalData.src,
                                source: _.globalData.source,
                                round: this.round,
                                sgid: _.globalData.from_gid,
                                uid: (0, r.setUid)(),
                                scene: _.globalData.scene,
                                appid: _.globalData.appid,
                                ver: _.globalData.ver,
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
                                        console.log("save success"), s.saveImageSmall ? (b.default.Event.stat("saveresultimage", {
                                            gid: s.id,
                                            savetype: 1
                                        }), s.inlongSmall && (s.incImageSave(1, 2), s.inlongSmall = !1)) : (b.default.Event.stat("saveresultimage", {
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
                                        console.log("save success"), s.saveImageSmall ? (b.default.Event.stat("saveresultimage", {
                                            gid: s.id,
                                            savetype: 1
                                        }), s.inlongSmall && (s.incImageSave(1, 2), s.inlongSmall = !1)) : (b.default.Event.stat("saveresultimage", {
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
                        this.showdingyue && "303" != _.globalData.source ? (this.dingyuemodel = !0, b.default.Event.stat("showSubscribebox", {
                            showtype: this.subscribe_status + "_1"
                        })) : e();
                    },
                    cancalsub: function() {
                        var e = this;
                        switch (this.dingyuemodel = !1, b.default.Event.stat("showSubscribebox", {
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
                        this.dingyuemodel = !1, b.default.Event.stat("showSubscribebox", {
                            showtype: this.subscribe_status + "_2"
                        }), qq.subscribeAppMsg({
                            subscribe: !0,
                            success: function(a) {
                                switch (v.addSubscribe(_, function() {
                                    e.setStorageSync("subscribe", 1), b.default.Event.stat("addSubscribe", {
                                        subscribetype: _.globalData.ver + "_" + t.subscribe_status + "_1"
                                    });
                                }), t.subscribe_status) {
                                  case 1:
                                    t.starGame();
                                    break;

                                  case 2:
                                    t.scrollToView = t.scrollId, t.scrollTop = 1e3 * t.count, t.analyzeResult();
                                }
                            },
                            fail: function(a) {
                                switch (console.log("----subscribeAppMsg----fail", a), "subscribeAppMsg:fail no permission" == a.errMsg && e.setStorageSync("subscribe", 2), 
                                b.default.Event.stat("addSubscribe", {
                                    subscribetype: _.globalData.ver + "_" + t.subscribe_status + "_2"
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
            t.default = y;
        }).call(this, a("543d").default);
    },
    "0a64": function(e, t, a) {},
    2720: function(e, t, a) {
        var s = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
        a.d(t, "a", function() {
            return s;
        }), a.d(t, "b", function() {
            return i;
        });
    },
    "548d": function(e, t, a) {
        var s = a("0a64");
        a.n(s).a;
    },
    "7d65": function(e, t, a) {
        a.r(t);
        var s = a("2720"), i = a("958b");
        for (var o in i) "default" !== o && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(o);
        a("548d");
        var n = a("2877"), r = Object(n.a)(i.default, s.a, s.b, !1, null, "124ba3ab", null);
        t.default = r.exports;
    },
    "958b": function(e, t, a) {
        a.r(t);
        var s = a("04c4"), i = a.n(s);
        for (var o in s) "default" !== o && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(o);
        t.default = i.a;
    },
    aa9e: function(e, t, a) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("8b22"), a("921b"), t(a("66fd")), e(t(a("7d65")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "aa9e", "common/runtime", "common/vendor" ] ] ]);