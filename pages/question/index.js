(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/question/index" ], {
    6230: function(t, e, s) {
        s.r(e);
        var a = s("f371"), i = s.n(a);
        for (var n in a) "default" !== n && function(t) {
            s.d(e, t, function() {
                return a[t];
            });
        }(n);
        e.default = i.a;
    },
    "71fe": function(t, e, s) {
        s.r(e);
        var a = s("a302"), i = s("6230");
        for (var n in i) "default" !== n && function(t) {
            s.d(e, t, function() {
                return i[t];
            });
        }(n);
        s("db6b");
        var o = s("2877"), r = Object(o.a)(i.default, a.a, a.b, !1, null, "19375abe", null);
        e.default = r.exports;
    },
    9498: function(t, e, s) {},
    a302: function(t, e, s) {
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                t.showshare = !0;
            }, t.e1 = function(e) {
                t.showshare = !1;
            }, t.e2 = function(e) {
                t.showshare = !1;
            });
        }, i = [];
        s.d(e, "a", function() {
            return a;
        }), s.d(e, "b", function() {
            return i;
        });
    },
    c3ff: function(t, e, s) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            s("8b22"), s("921b"), e(s("66fd")), t(e(s("71fe")).default);
        }).call(this, s("543d").createPage);
    },
    db6b: function(t, e, s) {
        var a = s("9498");
        s.n(a).a;
    },
    f371: function(t, e, s) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, s) {
                return e in t ? Object.defineProperty(t, e, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = s, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(s("f47e")), o = s("c7c6"), r = a(s("94f5")), u = a(s("6f91")), l = a(s("1418")), c = getApp(), d = 1, h = "https://ssl-uploads-admin.cdn.itwlw.com/", g = new r.default(), p = {
                data: function() {
                    return {
                        topimg: u.default,
                        closeIcon: l.default,
                        question: null,
                        answer: [],
                        special: null,
                        nouserInfo: !0,
                        isready: !1,
                        id: "",
                        icons: {
                            more: h + "quce/1577182509Bx4Bc.png",
                            finish: h + "quce/1577182538fZtvL.png",
                            start: h + "quce/1577182598bwTXf.png",
                            Viewresults: h + "quce/1577182612NvSJM.png",
                            ViewresultsVideo: h + "quce/1577182622UbusY.png"
                        },
                        finger: "../../static/question/finger3.png",
                        animationData: "",
                        scaleAnmia: !1,
                        activenum: [],
                        length: 0,
                        userInfo: null,
                        audiores: {
                            src: "",
                            icon: h + "quce/1577182749m10yC.png",
                            status: "pause",
                            tips: "点击播放"
                        },
                        canvas: {
                            width: 640,
                            height: 1104
                        },
                        result: "",
                        resultimg: "",
                        showTips: !1,
                        share_shuoshuo_title: "",
                        showshare: !1,
                        finished: !1,
                        appid: c.globalData.appid,
                        huangAd: [],
                        videoAd: "",
                        subscribe_status: 0,
                        afterquestion: [],
                        resultTjFlag: !0,
                        round: 1,
                        share_ecodeid: "",
                        hour: 0,
                        videolockBox: !1,
                        AdmodelContent: [],
                        resultsofvideo: !0,
                        showAdmodelClose: !1,
                        resimg: {
                            qrcode: "",
                            resultTemp: "",
                            nickName: "",
                            avatarUrl: "",
                            result: ""
                        },
                        canaddDingYue: !1,
                        subscribe_content: "",
                        temp_answer: {},
                        next_answer: {},
                        options3: [],
                        audio: "",
                        nosave: "",
                        reset: "",
                        playing: "",
                        issave: "",
                        start: "",
                        screenWidth: "",
                        translateX: 0,
                        animation: {},
                        aginActive: {},
                        resultdata: {},
                        loading: !0
                    };
                },
                onLoad: function(e) {
                    var s = this;
                    (0, o.initChannel)(e), console.log(c.globalData.from_gid), n.default.Page.init(), 
                    this.onload = 1;
                    var a = this;
                    a.id = e.id, "undefined" != e.title && (console.log("setNavigationBarTitle", e.title), 
                    a.sharetitle = e.title, t.setNavigationBarTitle({
                        title: a.sharetitle
                    }));
                    var i = t.getStorageSync("user"), r = t.getStorageSync("userinfo");
                    t.getSetting({
                        success: function(e) {
                            e.authSetting["scope.userInfo"] && t.getUserInfo({
                                success: function(e) {
                                    if (a.nouserInfo = !1, r.nickName == e.userInfo.nickName && r.avatarUrl == e.userInfo.avatarUrl) c.globalData.user = i, 
                                    s.userInfo = i; else {
                                        var n = {
                                            nickName: e.userInfo.nickName,
                                            avatarUrl: e.userInfo.avatarUrl,
                                            verify: 0
                                        };
                                        c.globalData.user = n, s.userInfo = n, t.setStorageSync("user", n), t.setStorageSync("userinfo", n);
                                    }
                                }
                            });
                        }
                    }), e.acid && (c.globalData.acid = e.acid), this.canshareqzone = !1;
                    var u = t.getStorageSync("bannerNumber"), l = t.getStorageSync("playNumber"), d = t.getStorageSync("videoplayednumber");
                    this.playNumber = l || 0, this.bannerNumber = u || 0, this.videoplayednumber = d || 0, 
                    this.requestbannerlist(), this.initQuestion(e), t.onUserCaptureScreen(function(t) {
                        a.userCaptureScreen();
                    });
                },
                onUnload: function() {
                    console.log("close"), this.onload = 0;
                },
                onReady: function() {
                    this.audio = qq.createInnerAudioContext("audio"), this.playing = 0, this.nosave = !0, 
                    this.reset = 0, this.issave = !1, this.start = !1;
                    var t = qq.getSystemInfoSync();
                    this.screenWidth = t.windowWidth, this.translateX = 0, this.animation = qq.createAnimation({
                        duration: 400,
                        timingFunction: "ease-in",
                        delay: 80
                    }), this.aginActive = qq.createAnimation({
                        duration: 0,
                        timingFunction: "linear",
                        delay: 0
                    });
                },
                onShareAppMessage: function() {
                    var t = this;
                    console.log("id=" + this.id + "&title=" + this.sharetitle + "&ispush=1");
                    var e = "";
                    e = this.shareqzonetitle ? this.shareqzonetitle : this.sharetitle, this.showdingyue && 3 == this.subscribe_status && setTimeout(function() {
                        t.addDingYue();
                    }, 5e3);
                    var s = "/pages/home/index?id=" + this.id + "&title=" + this.sharetitle + "&ispush=1";
                    return this.share_ecodeid && (s = "/pages/home/index?q=".concat(this.share_ecodeid)), 
                    console.log(s), {
                        title: e,
                        imageUrl: this.shareAppImage,
                        path: s
                    };
                },
                computed: {
                    subscribelist: function() {
                        if (this.subscribe_content) return this.subscribe_content.split("##");
                    }
                },
                methods: {
                    initQuestion: function(e) {
                        var s = this;
                        this.adtime = t.getStorageSync("ad_video");
                        var a = {
                            appid: c.globalData.appid,
                            ver: c.globalData.ver,
                            sgid: c.globalData.from_gid,
                            uid: (0, o.setUid)(),
                            source: c.globalData.source,
                            scene: c.globalData.scene,
                            src: c.globalData.src,
                            adtime: this.adtime ? this.adtime : 0,
                            adplayed: this.bannerNumber,
                            quizplayed: this.playNumber,
                            videoplayed: this.videoplayednumber
                        };
                        e.id && (a.id = e.id), e.q && (a.q = e.q), t.request({
                            url: c.globalData.host + "/index.php/App/Index/getQuizInfo",
                            data: a,
                            success: function(t) {
                                console.log(t.data);
                                var a = t.data;
                                n.default.Event.stat("participation", {
                                    gid: s.id
                                }), e.q && (s.round = a.round ? a.round : "1", c.globalData.from_gid = t.data.id ? t.data.id : "0", 
                                c.globalData.src = t.data.src ? t.data.src : "301", s.hour = t.data.hour, s.id = t.data.id), 
                                a.img = h + a.img, a.logo = h + a.logo;
                                var i = JSON.parse(a.question);
                                i = i.map(function(t, e) {
                                    var s = [], a = [];
                                    for (var i in t.answer) t.answer[i].key = i.toUpperCase(), t.answer[i].title = t.answer[i].img ? i : i + "." + t.answer[i].title, 
                                    t.answer[i].img = t.answer[i].img ? h + t.answer[i].img : "", t.answer[i].img && a.push(t.answer[i].img), 
                                    s.push(t.answer[i]);
                                    return t.img = t.img ? h + t.img : "", t.answer = s, t.pictures = a, t.index = e, 
                                    t;
                                });
                                var o = a.video_ad_utilid ? a.video_ad_utilid : "54722faa6e7bc4733033911f21e83b90";
                                try {
                                    s.videoAd = wx.createRewardedVideoAd({
                                        adUnitId: o
                                    });
                                } catch (t) {}
                                s.videoAd && s.videoAd.onError(function(t) {
                                    s.videoErr = !0;
                                }), s.temp_answer = i, s.next_answer = [ s.temp_answer[0] ], s.options3 = [], s.question = a, 
                                s.answer = i, s.length = i.length, s.resultsofvideo = 1 == a.ad_model, s.showAdmodelClose = 1 == a.ad_model_close, 
                                s.AdmodelContent = a.ad_model_content ? a.ad_model_content.split("##") : [ "你的测试结果已生成", "看一个小视频,即可查看详情" ], 
                                s.special = a.hasOwnProperty("special_config") ? a.special_config : "", s.activenum = i.map(function(t) {
                                    return "";
                                }), setTimeout(function() {
                                    s.loading = !1;
                                }, 1e3);
                            }
                        });
                    },
                    formSubmit: function(t) {},
                    userCaptureScreen: function() {
                        var e = this.resultdata ? 1 : 0;
                        console.log({
                            imagetype: 1,
                            progress: e,
                            gid: this.id
                        }), n.default.Event.stat("captureScreen", {
                            gid: this.id,
                            capturetype: 1
                        }), t.request({
                            url: c.globalData.host + "/index.php/App/Index/incUserCaptureScreen",
                            data: {
                                imagetype: 1,
                                progress: e,
                                gid: this.id
                            },
                            success: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    gohome: function() {
                        console.log("cancal_video", {
                            gid: this.id,
                            cancaltype: "3_" + c.globalData.ver + "_" + this.videoWatchNumber,
                            adstyletype: this.adBox_style_type
                        }), n.default.Event.stat("cancal_video", {
                            gid: this.id,
                            cancaltype: "3_" + c.globalData.ver + "_" + this.videoWatchNumber,
                            adstyletype: this.adBox_style_type
                        }), t.navigateBack({
                            delta: 1
                        });
                    },
                    modelProgress: function() {
                        var e = this;
                        this.addresultimg = !1;
                        var s = setInterval(function() {
                            e.progresspercent < 100 ? e.progresspercent++ : (clearInterval(s), setTimeout(function() {
                                e.progressend = !0, e.imgfinished && (e.showAds && e.onload && (e.bannerNumber = parseInt(e.bannerNumber) + 1, 
                                t.setStorageSync("bannerNumber", e.bannerNumber)), e.addResultPicture(), e.showmodel = !1);
                            }, 1e3));
                        }, this.transitiontime);
                    },
                    showChoose: function() {
                        var t = this;
                        this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count, this.makeButton = !1, 
                        this.margin = !1, setTimeout(function() {
                            t.showmodel = !0;
                        }, 100);
                    },
                    closevideoBox: function() {
                        n.default.Event.stat("resultVdieoclose", {
                            closetype: c.globalData.ver + "_3"
                        }), this.videolockBox = !1, this.imgGif(), this.postResult();
                    },
                    savePicture: function(e) {
                        var s = this.resultimg, a = this;
                        wx.getSetting({
                            success: function(e) {
                                e.authSetting["scope.writePhotosAlbum"] ? t.saveImageToPhotosAlbum({
                                    filePath: s,
                                    success: function() {
                                        t.showToast({
                                            title: "图片保存成功"
                                        }), a.showdingyue && 4 == a.subscribe_status && a.addDingYue(a.subscribe_status), 
                                        console.log("save success"), a.saveImageSmall ? (n.default.Event.stat("saveresultimage", {
                                            gid: a.id,
                                            savetype: 1
                                        }), a.inlongSmall && (a.incImageSave(1, 2), a.inlongSmall = !1)) : (n.default.Event.stat("saveresultimage", {
                                            gid: a.id,
                                            savetype: 2
                                        }), a.inlongBig && (a.incImageSave(1, 3), a.inlongBig = !1));
                                    }
                                }) : t.saveImageToPhotosAlbum({
                                    filePath: s,
                                    success: function() {
                                        t.showToast({
                                            title: "图片保存成功"
                                        }), a.showdingyue && 4 == a.subscribe_status && a.addDingYue(a.subscribe_status), 
                                        console.log("save success"), a.saveImageSmall ? (n.default.Event.stat("saveresultimage", {
                                            gid: a.id,
                                            savetype: 1
                                        }), a.inlongSmall && (a.incImageSave(1, 2), a.inlongSmall = !1)) : (n.default.Event.stat("saveresultimage", {
                                            gid: a.id,
                                            savetype: 2
                                        }), a.inlongBig && (a.incImageSave(1, 3), a.inlongBig = !1));
                                    },
                                    fail: function(e) {
                                        t.showModal({
                                            title: "保存失败",
                                            content: "保存图片到相册功能需要开启相册授权！",
                                            showCancel: !1,
                                            cancelText: "取消",
                                            confirmText: "确定",
                                            success: function(t) {
                                                wx.openSetting({});
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    showSubscribe: function(t) {
                        this.showdingyue && "303" != c.globalData.source ? (this.dingyuemodel = !0, n.default.Event.stat("showSubscribebox", {
                            showtype: this.subscribe_status + "_1"
                        })) : t();
                    },
                    cancalsub: function() {
                        var t = this;
                        switch (this.dingyuemodel = !1, n.default.Event.stat("showSubscribebox", {
                            showtype: this.subscribe_status + "_3"
                        }), this.subscribe_status) {
                          case 1:
                            this.starGame();
                            break;

                          case 2:
                            this.scrollToView = this.scrollId, this.scrollTop = 1e3 * this.count, this.analyzeResult(), 
                            1 == this.hasbannerad && (this.showmodel = !0, setTimeout(function() {
                                t.modelProgress();
                            }, 1e3));
                        }
                    },
                    login: function() {
                        var e = this;
                        t.login({
                            success: function(s) {
                                t.request({
                                    url: c.globalData.host + "/index.php/App/Index/getQQappOpenid",
                                    data: {
                                        js_code: s.code,
                                        appid: c.globalData.appid
                                    },
                                    success: function(s) {
                                        t.setStorageSync("openid", s.data.openid), e.openid = s.data.openid;
                                    }
                                });
                            }
                        });
                    },
                    addDingYue: function(t, e) {
                        !0 === this.canaddDingYue ? "function" == typeof qq.subscribeAppMsg ? qq.subscribeAppMsg({
                            subscribe: !0,
                            success: function(s) {
                                g.addSubscribe(c, function() {
                                    qq.setStorageSync("subscribe", 1), n.default.Event.stat("addSubscribe", {
                                        subscribetype: t + "_1"
                                    });
                                }), e && e();
                            },
                            fail: function(s) {
                                console.log("----subscribeAppMsg----fail", s), "subscribeAppMsg:fail no permission" == s.errMsg && qq.setStorageSync("subscribe", 2), 
                                n.default.Event.stat("addSubscribe", {
                                    subscribetype: t + "_2"
                                }), e && e();
                            }
                        }) : (n.default.Event.stat("addSubscribe", {
                            subscribetype: "subscribeAppMsg is not function"
                        }), e && e()) : e && e();
                    },
                    getAuthorize: function(e) {
                        var s = e.detail;
                        if (s.hasOwnProperty("userInfo")) {
                            c.globalData.user = {
                                nickName: e.detail.userInfo.nickName,
                                avatarUrl: e.detail.userInfo.avatarUrl,
                                verify: 0
                            }, c.globalData.userInfo = s.userInfo, t.setStorageSync("user", c.globalData.user), 
                            t.setStorageSync("userinfo", {
                                nickName: e.detail.userInfo.nickName,
                                avatarUrl: e.detail.userInfo.avatarUrl
                            }), this.userInfo = s.userInfo, this.nouserInfo = !1;
                            var a = !1;
                            this.videoAd && this.question.showAds && !this.resultsofvideo && (a = !0), a ? this.watchVideoBanner() : this.getResult();
                        }
                    },
                    startgame: function() {
                        if (this.start) return !1;
                        this.start = !0, this.animation.translateX(this.translateX - this.screenWidth).step(), 
                        this.animationData = this.animation.export(), this.temp_answer[0].audio && (this.audio = qq.createInnerAudioContext("audio-0"), 
                        this.audio.play()), this.translateX = this.translateX - this.screenWidth, console.log("stargame");
                    },
                    saveImg: function() {
                        var t = this;
                        this.nosave = !1, qq.getSetting({
                            success: function(e) {
                                console.log(e), e.authSetting["scope.writePhotosAlbum"] ? qq.saveImageToPhotosAlbum({
                                    filePath: t.resultimg,
                                    success: function() {
                                        qq.showToast({
                                            title: "已保存到相册"
                                        }), 4 == t.question.subscribe_status && t.addDingYue(t.question.subscribe_status), 
                                        n.default.Event.stat("saveimg", {
                                            savetype: c.globalData.ver + "_" + t.id
                                        }), t.incImageSave(), setTimeout(function() {
                                            t.nosave = !0;
                                        }, 1e3);
                                    },
                                    fail: function(t) {
                                        console.log(e), qq.showModal({
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
                                }) : qq.saveImageToPhotosAlbum({
                                    filePath: t.resultimg,
                                    success: function() {
                                        qq.showToast({
                                            title: "已保存到相册"
                                        }), 4 == t.question.subscribe_status && t.addDingYue(t.question.subscribe_status), 
                                        n.default.Event.stat("saveimg", {
                                            savetype: c.globalData.ver + "_" + t.id
                                        }), t.incImageSave(), setTimeout(function() {
                                            t.nosave = !0;
                                        }, 1e3);
                                    },
                                    fail: function(t) {
                                        console.log(t), qq.showModal({
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
                        });
                    },
                    startAnswer: function() {
                        var t = this;
                        1 == this.question.subscribe_status ? this.addDingYue(this.question.subscribe_status, function() {
                            t.startgame();
                        }) : this.startgame();
                    },
                    nextAnswer: function(t, e) {
                        console.log(t, e);
                        var s = this.activenum;
                        if (s[e] === t || "" !== s[e]) return !1;
                        this.temp_answer[e].audio && (this.audiores = {
                            src: "",
                            icon: "../../assets/icons/pause.png",
                            status: "pause",
                            tips: "点击播放"
                        }, 0 !== this.playing && (this.playing = 0, this.audio.stop()));
                        var a = this.afterquestion;
                        a.push(e), s[e] = t;
                        var i = e + 1, n = this.answer;
                        if ("3" === this.question.type) {
                            var o = this.temp_answer[e].answer[t].next;
                            (o = parseInt(o)) ? (this.options3.push(o), this.next_answer.push(this.temp_answer[o - 1]), 
                            n = this.next_answer, i = o - 1) : i = this.length;
                        }
                        if (this.answer = n, this.activenum = s, this.afterquestion = a, i === this.length) {
                            console.log(this.special, this.nouserInfo, this.question.showAds);
                            var r = !1;
                            console.log(this.videoAd, this.question.showAds, !this.resultsofvideo), this.videoAd && this.question.showAds && !this.resultsofvideo && (r = !0), 
                            this.nouserInfo || r ? (this.isnext = !0, this.finished = !0) : this.getResult();
                        } else this.animation.translateX(this.translateX - this.screenWidth).step(), this.animationData = this.animation.export(), 
                        this.temp_answer[i].audio && (this.audio = qq.createInnerAudioContext("audio-".concat(i)), 
                        this.audio.play()), this.translateX = this.translateX - this.screenWidth;
                    },
                    afterAnswer: function(t) {
                        var e = this.activenum, s = this.afterquestion;
                        e[t] = "", e[s[s.length - 1]] = "";
                        var a = s[s.length - 1];
                        this.finished && (e[s[s.length - 2]] = ""), this.temp_answer[t].audio && (this.audiores = {
                            src: "",
                            icon: "../../assets/icons/pause.png",
                            status: "pause",
                            tips: "点击播放"
                        }, 0 !== this.playing && (this.playing = 0, this.audio.stop()));
                        var i = this.answer;
                        "3" === this.question.type && i.pop(), s.pop(), this.finished && s.pop(), this.activenum = e, 
                        this.afterquestion = s, this.finished = !1, this.animation.translateX(this.translateX + this.screenWidth).step(), 
                        this.animationData = this.animation.export(), this.temp_answer[a].audio && (this.audio = qq.createInnerAudioContext("audio-".concat(a)), 
                        this.audio.play()), this.translateX = this.translateX + this.screenWidth;
                    },
                    getResult: function() {
                        var t = this;
                        qq.showLoading({
                            title: "正在获取结果"
                        });
                        var e = this.question, s = this.answer, a = "";
                        if (this.question.needAsk) {
                            var i = "3" !== e.type ? this.activenum.map(function(t, i) {
                                switch (e.type) {
                                  case "1":
                                    a = s[i].answer[t].key;
                                    break;

                                  case "2":
                                    a = s[i].answer[t].weight;
                                    break;

                                  case "8":
                                    a = s[i].answer[t].key;
                                }
                                return a;
                            }) : this.options3;
                            a = i.toString(",");
                        } else a = "A";
                        var n = {
                            appid: c.globalData.appid,
                            ver: c.globalData.ver,
                            userinput: this.userInfo.nickName,
                            id: e.id,
                            acid: 0,
                            ext: 0,
                            isreplay: this.reset,
                            option: a,
                            round: this.round,
                            uid: (0, o.setUid)(),
                            sgid: c.globalData.from_gid,
                            src: c.globalData.src,
                            source: c.globalData.source,
                            scene: c.globalData.scene
                        };
                        this.needAsk || (n.israndresult = 1), qq.request({
                            url: c.globalData.host + "/index.php/Wetest/Entry/getresult",
                            data: n,
                            success: function(e) {
                                if (t.resultdata = e.data, t.resimg.qrcode = h + JSON.parse(e.data.attention).qrcode, 
                                t.resimg.resultTemp = h + JSON.parse(e.data.content).img, t.share_shuoshuo_title = e.data.share_shuoshuo_title, 
                                t.share_ecodeid = !!e.data.share_ecodeid && e.data.share_ecodeid, t.special) {
                                    if (t.special.result_image) {
                                        var s = JSON.parse(e.data.content).threshold, a = JSON.parse(t.special.result_image)[s];
                                        a && (t.resimg.resultTemp = h + a);
                                    }
                                    wx.getImageInfo({
                                        src: t.userInfo.avatarUrl,
                                        success: function(e) {
                                            "gif" == e.type ? t.resimg.avatarUrl = "https://ssl-uploads-admin.cdn.itwlw.com/quce/1562666285IKXQK.png" : t.resimg.avatarUrl = t.userInfo.avatarUrl, 
                                            t.canvasDraw(3);
                                        },
                                        fail: function(e) {
                                            t.resimg.avatarUrl = t.userInfo.avatarUrl, t.canvasDraw(3);
                                        }
                                    });
                                } else t.canvasDraw(2);
                            },
                            fail: function(e) {
                                qq.showToast({
                                    icon: "none",
                                    title: "结果获取失败",
                                    success: function() {
                                        qq.hideLoading(), t.playAgin();
                                    }
                                });
                            }
                        });
                    },
                    verifyUserInfo: function(e) {
                        t.request({
                            url: c.globalData.host + "/index.php/App/Index/checkAppAvatar",
                            data: {
                                appid: c.globalData.appid,
                                avatarUrl: c.globalData.user.avatarUrl,
                                nickName: c.globalData.user.nickName
                            },
                            success: function(s) {
                                console.log(s), 0 == s.data.avatar_status && (c.globalData.user.avatarUrl = s.data.url), 
                                0 == s.data.name_status && (c.globalData.user.nickName = s.data.name), c.globalData.user.verify = 1, 
                                t.setStorageSync("user", c.globalData.user), e();
                            },
                            fail: function(t) {
                                console.log(t), e();
                            }
                        });
                    },
                    watchVideoBanner: function() {
                        var t = this;
                        d = 1, n.default.Event.stat("show_video", {
                            showtype: c.globalData.ver
                        }), this.videoAd.show(), this.videoAd.onClose(function(e) {
                            if (d && !t.videoErr) {
                                t.setData({
                                    videoEnded: e.isEnded
                                });
                                var s = e.isEnded ? 1 : 0;
                                if (s) {
                                    var a = parseInt(t.data.bannerNumber) + 1, i = parseInt(t.data.videoplayednumber) + 1;
                                    qq.setStorageSync("bannerNumber", a), qq.setStorageSync("videoplayednumber", i), 
                                    qq.setStorageSync("ad_video", Math.round(new Date().getTime() / 1e3));
                                }
                                setTimeout(function() {
                                    qq.request({
                                        url: c.globalData.host + "/index.php/App/Index/incQQAdsProgress",
                                        data: {
                                            progress: s,
                                            gid: t.id,
                                            appid: c.globalData.appid,
                                            ver: c.globalData.ver,
                                            sgid: c.globalData.from_gid,
                                            uid: (0, o.setUid)(),
                                            round: t.round,
                                            force: t.question.video_banner_ad ? 2 : 1,
                                            scene: c.globalData.scene
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function() {},
                                        fail: function(t) {
                                            console.log(t);
                                        }
                                    });
                                }, 500), e.isEnded ? t.data.resultsofvideo ? (n.default.Event.stat("resultVdieoclose", {
                                    closetype: c.globalData.ver + "_1"
                                }), n.default.Event.stat("video_played", {
                                    playedtype: c.globalData.ver,
                                    gid: t.data.id
                                }), t.videolockBox = !1, t.postResult(), t.imgGif()) : setTimeout(function() {
                                    n.default.Event.stat("video_played", {
                                        playedtype: c.globalData.ver,
                                        gid: t.data.id
                                    }), t.getResult();
                                }, 200) : (setTimeout(function() {
                                    console.log("cancal_video", {
                                        gid: t.id,
                                        cancaltype: c.globalData.ver
                                    }), n.default.Event.stat("cancal_video", {
                                        gid: t.id,
                                        cancaltype: c.globalData.ver
                                    });
                                }, 200), t.question.forcedAds || (t.resultsofvideo ? (t.videolockBox = !1, t.imgGif()) : setTimeout(function() {
                                    t.getResult();
                                }, 200))), d = 0;
                            }
                        }), this.videoAd.onError(function(e) {
                            console.log(e), qq.request({
                                url: c.globalData.host + "/index.php/App/Index/incQQAdsProgress",
                                data: {
                                    progress: 2,
                                    gid: t.id,
                                    appid: c.globalData.appid,
                                    ver: c.globalData.ver,
                                    uid: (0, o.setUid)(),
                                    sgid: c.globalData.from_gid,
                                    errCode: e.errCode,
                                    errMsg: e.errMsg,
                                    videonumber: this.videoWatchNumber,
                                    force: t.question.video_banner_ad ? 2 : 1,
                                    scene: c.globalData.scene
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function() {},
                                fail: function(t) {
                                    console.log(t);
                                }
                            }), t.videoErr = !0, t.resultsofvideo ? (n.default.Event.stat("resultVdieoclose", {
                                closetype: c.globalData.ver + "_2"
                            }), t.videolockBox = !1, t.postResult(), t.imgGif()) : t.getResult();
                        });
                    },
                    canvasDraw: function(t) {
                        var e = this, s = this.resimg;
                        new Promise(function(a, i) {
                            var n = 0;
                            for (var o in e.resimg) !function(i) {
                                e.resimg[i] && qq.getImageInfo({
                                    src: s[i],
                                    success: function(s) {
                                        e.resimg[i] = s, ++n === t && a(e.resimg);
                                    },
                                    fail: function(t) {
                                        qq.showToast({
                                            icon: "none",
                                            title: "结果获取失败",
                                            success: function() {
                                                a(0);
                                            }
                                        });
                                    }
                                });
                            }(o);
                        }).then(function(t) {
                            if (0 === t) return e.showResult(e.resimg.resultTemp), !1;
                            console.log(22222222222222), e.canvas = {
                                width: t.resultTemp.width,
                                height: t.resultTemp.height
                            };
                            var s = qq.createCanvasContext("canvas"), a = e.special, i = "";
                            if (a && a.headimg_config) {
                                i = JSON.parse(e.resultdata.content).threshold;
                                var n = JSON.parse(a.headimg_config);
                                n = n.hasOwnProperty(i) ? n[i] : n, s.drawImage(t.avatarUrl.path, 0, 0, t.avatarUrl.width, t.avatarUrl.height, n.x, n.y, n.width, n.height);
                            }
                            s.drawImage(t.resultTemp.path, 0, 0, t.resultTemp.width, t.resultTemp.height), s.drawImage(t.qrcode.path, 0, t.resultTemp.height - t.qrcode.height, t.qrcode.width, t.qrcode.height), 
                            new Promise(function(t, n) {
                                if (console.log(333333333), a && a.draw_config) {
                                    i = JSON.parse(e.resultdata.content).threshold;
                                    var o = JSON.parse(a.draw_config), r = JSON.parse(a.image_config);
                                    o = o.hasOwnProperty(i) ? o[i] : o, s.setFillStyle("rgb(".concat(r.c_r, ", ").concat(r.c_g, ", ").concat(r.c_b, ")")), 
                                    s.setFontSize(parseInt(r.font)), s.setTextAlign(o.align), s.setTextBaseline("top"), 
                                    0 != c.globalData.user.verify || e.nouserInfo ? ("center" == o.align ? s.fillText(e.userInfo.nickName, o.x ? o.x : 320, o.y) : "right" == o.align ? s.fillText(e.userInfo.nickName, o.x, o.y) : "left" == o.align && s.fillText(e.userInfo.nickName, o.x, o.y), 
                                    t()) : e.verifyUserInfo(function() {
                                        "center" == o.align ? s.fillText(e.userInfo.nickName, o.x ? o.x : 320, o.y) : "right" == o.align ? s.fillText(e.userInfo.nickName, o.x, o.y) : "left" == o.align && s.fillText(e.userInfo.nickName, o.x, o.y), 
                                        t();
                                    });
                                } else t();
                            }).then(function() {
                                setTimeout(function() {
                                    s.draw(!0, function() {
                                        setTimeout(function() {
                                            qq.canvasToTempFilePath({
                                                x: 0,
                                                y: 0,
                                                width: e.canvas.width,
                                                height: e.canvas.height,
                                                destWidth: e.canvas.width,
                                                destHeight: e.canvas.height,
                                                canvasId: "canvas",
                                                success: function(t) {
                                                    e.showResult(t.tempFilePath);
                                                },
                                                fail: function(s) {
                                                    e.showResult(t.resultTemp);
                                                }
                                            });
                                        }, 200);
                                    });
                                }, 100);
                            });
                        });
                    },
                    showResult: function(t) {
                        var e = this;
                        console.log(t);
                        var s = !1;
                        console.log(this.videoAd, this.question.showAds, this.resultsofvideo), this.videoAd && this.question.showAds && this.resultsofvideo && (s = !0, 
                        n.default.Event.stat("resultvideoshow", {})), this.resultimg = t, qq.hideLoading();
                        var a = parseInt(this.playNumber) + 1;
                        qq.setStorageSync("playNumber", a), this.animation.translateX(this.translateX - this.screenWidth).step(), 
                        this.animationData = this.animation.export(), this.translateX = this.translateX - this.screenWidth, 
                        setTimeout(function() {
                            e.scaleAnmia = !0, console.log(s), e.videolockBox = s, setTimeout(function() {
                                e.showTips = !0, s || (e.imgGif(), e.postResult()), 2 == e.question.subscribe_status && e.addDingYue(e.question.subscribe_status);
                            }, 900);
                        }, 500);
                    },
                    openQzone: function(t) {
                        var e = this;
                        n.default.Event.stat("shareqzone", {
                            gid: this.id,
                            qzonetype: 2
                        });
                        var s = "";
                        s = this.share_shuoshuo_title ? this.share_shuoshuo_title : this.question.title, 
                        3 == this.question.subscribe_status && setTimeout(function() {
                            e.addDingYue(e.question.subscribe_status);
                        }, 5e3), qq.openQzonePublish({
                            text: s,
                            media: [ {
                                type: "photo",
                                path: this.resultimg
                            } ]
                        });
                    },
                    postResult: function() {
                        var e = this.videoEnded ? this.bannerNumber : 0;
                        console.log(e);
                        var s = this;
                        if (s.resultTjFlag) {
                            var a;
                            s.resultTjFlag = !1, console.log(s.resultdata);
                            var n = JSON.parse(s.resultdata.content), r = JSON.parse(s.resultdata.attention), u = c.globalData.host + "/index.php/Wetest/Entry/incGetresult";
                            s.result = n.threshold, t.request({
                                url: u,
                                data: (a = {
                                    src: c.globalData.src,
                                    id: s.id,
                                    acid: c.globalData.acid,
                                    result: n.threshold,
                                    account: r.account,
                                    idx: n.new_idx,
                                    round: this.round,
                                    appid: c.globalData.appid,
                                    sgid: c.globalData.from_gid,
                                    ver: c.globalData.ver
                                }, i(a, "src", c.globalData.src), i(a, "scene", c.globalData.scene), i(a, "source", c.globalData.source), 
                                i(a, "uid", (0, o.setUid)()), i(a, "videoad", e), i(a, "hour", this.hour), a),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function() {
                                    s.resultTjFlag = !1;
                                },
                                fail: function() {
                                    s.resultTjFlag = !0;
                                }
                            });
                        }
                    },
                    incImageSave: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        console.log("dst:" + s);
                        var a = this;
                        t.request({
                            url: c.globalData.host + "/index.php/App/Index/commonLongtap",
                            method: "POST",
                            data: {
                                result: a.result,
                                gid: a.id,
                                type: e,
                                src: c.globalData.src,
                                source: c.globalData.source,
                                round: this.round,
                                sgid: c.globalData.from_gid,
                                uid: (0, o.setUid)(),
                                scene: c.globalData.scene,
                                appid: c.globalData.appid,
                                ver: c.globalData.ver,
                                dst: s
                            },
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {}
                        });
                    },
                    imgGif: function() {
                        var t = this, e = 0, s = setInterval(function() {
                            t.finger = "../../static/question/finger".concat(e % 3 + 1, ".png"), ++e > 17 && (t.showTips = !1, 
                            clearInterval(s));
                        }, 300);
                    },
                    playAgin: function() {
                        var t = this;
                        this.start = !1, this.translateX = 0, this.next_answer = [ this.temp_answer[0] ], 
                        this.reset = 1, this.issave = !1, this.resimg = {
                            qrcode: "",
                            resultTemp: "",
                            nickName: "",
                            avatarUrl: "",
                            result: ""
                        }, this.activenum = this.temp_answer.map(function(t) {
                            return "";
                        }), this.scaleAnmia = !1, this.aginActive.translateX(this.translateX - this.screenWidth).step(), 
                        this.setData({
                            animation: this.aginActive.export()
                        }, function() {
                            t.translateX = t.translateX - t.screenWidth;
                        });
                    },
                    noaskresult: function() {
                        var t = !1;
                        this.videoAd && this.question.showAds && !this.resultsofvideo && (t = !0), t ? this.watchVideoBanner() : this.getResult();
                    },
                    playVoice: function(t) {
                        var e = this, s = {
                            src: h + this.temp_answer[t].audio,
                            icon: "../../assets/icons/play.gif",
                            status: "playing",
                            tips: "正在播放"
                        }, a = {
                            src: "",
                            icon: "../../assets/icons/pause.png",
                            status: "pause",
                            tips: "点击播放"
                        }, i = {
                            src: h + this.temp_answer[t].audio,
                            icon: "../../assets/icons/pause.png",
                            status: "pause",
                            tips: "已暂停"
                        };
                        0 === this.playing ? (this.audio.src = s.src, this.audiores = s, this.playing = 1, 
                        this.audio.play()) : 1 === this.playing ? (this.playing = 2, this.audio.pause(), 
                        this.audiores = i) : 2 === this.playing && (this.audiores = s, this.playing = 1, 
                        this.audio.play()), this.audio.onEnded(function() {
                            e.playing = 0, e.audiores = a;
                        });
                    },
                    requestbannerlist: function() {
                        var t = this;
                        wx.request({
                            url: c.globalData.getJumpUrl + "Wxapp/BoxApi/getJumpList",
                            data: {
                                appid: c.globalData.appid,
                                channel: 4
                            },
                            success: function(e) {
                                t.huangAd = e.data;
                            }
                        });
                    },
                    candingyue: function() {
                        var t = this;
                        qq.getSetting({
                            success: function(e) {
                                console.log("订阅全新", e.authSetting["scope.appMsgSubscribed"]), void 0 === e.authSetting["scope.appMsgSubscribed"] && "function" == typeof qq.subscribeAppMsg && (t.canaddDingYue = !0), 
                                !0 === e.authSetting["scope.appMsgSubscribed"] && 1 != qq.getStorageSync("subscribe") && g.addSubscribe(c, function() {
                                    qq.setStorageSync("subscribe", 1), n.default.Event.stat("addSubscribe", {
                                        subscribetype: type + "_1"
                                    });
                                }), !1 === e.authSetting["scope.appMsgSubscribed"] && qq.setStorageSync("subscribe", 2);
                            }
                        });
                    }
                }
            };
            e.default = p;
        }).call(this, s("543d").default);
    }
}, [ [ "c3ff", "common/runtime", "common/vendor" ] ] ]);