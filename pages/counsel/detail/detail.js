function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i;
    }
    return Array.from(e);
}

function t(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../utils/user.js")), o = (require("../../../wux/wux"), require("../../../api.js")), n = require("../../../utils/util.js"), s = require("../../../utils/upload.js"), r = require("../../../zanui/index"), u = require("../../../utils/config.js"), d = getApp(), l = [ "仿宋", "黑体", "楷体", "宋体", "微软雅黑" ], c = d.globalData.system_info, f = c.windowWidth, h = c.pixelRatio;

Page(Object.assign({}, r.Toast, {
    data: {
        isShowStartPage: !0,
        disable: !0,
        guanggaoName: u.config.guanggaoName,
        appName: u.config.app_name,
        isCustomNavigationStyle: d.globalData.system_info.version && d.globalData.system_info.version[0] >= 7,
        picSize: "?imageView2/2/w/" + Math.ceil(.84 * f * h),
        tuijianPicSize: "?imageView2/2/w/" + Math.ceil(.16 * f * h),
        answerPicSize: "?imageView2/2/w/" + Math.ceil(490 / 750 * f * h),
        answerNumbers: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N" ]
    },
    onLoad: function(e) {
        var t = this;
        wx.showNavigationBarLoading(), wx.showToast({
            title: "加载中……",
            duration: 2e4,
            icon: "loading"
        });
        var i = decodeURIComponent(e.scene);
        this.getTemplateInfo(i).then(function(e) {
            var o = e.name, n = e.times, s = e.avatar, r = e.content;
            t.data.item = e, t.setData({
                disable: !1,
                id: i,
                isLogin: a.default.isLogin,
                isFromSitemap: 1 == getCurrentPages().length,
                startPageInfo: {
                    name: o,
                    times: n,
                    avatar: s,
                    content: r.content
                },
                title: e.name,
                description: e.desc
            }, function() {
                t.data.isShowRewardedVideoAd || t.setData({
                    isShowRewardedVideoAd: !0
                }), wx.hideNavigationBarLoading(), wx.hideToast();
            });
        }, function() {}), this.isSaveSelfResult = e.isSaveSelfResult || !1, d.globalData.getAdPromise.then(function() {
            t.setData({
                canUseRewardedVideoAd: d.globalData.isSetRewardedVideoAdUnitId && !!wx.createRewardedVideoAd
            });
        });
    },
    getTemplateInfo: function(e) {
        return new Promise(function(t, i) {
            o.zhuangxinfo(e, function(i) {
                console.log("res", i), "string" == typeof i.content && (i.content = JSON.parse(n.decode(n.decode(n.decode(i.content))))), 
                t(i), wx.reportAnalytics("enter_question_page", {
                    id: e,
                    title: i.name
                });
            }, function() {
                wx.hideNavigationBarLoading(), wx.hideToast(), wx.showToast({
                    title: "数据不存在或者被删除",
                    duration: 1500,
                    icon: "none"
                }), setTimeout(function() {
                    wx.reLaunch({
                        url: "/pages/counsel/index/index"
                    });
                }, 1500), i();
            });
        });
    },
    onShow: function() {
        var e = this;
        if (n.createInterstitialAd(), this.isViewRewardedVideoAd) this.isViewRewardedVideoAd = !1; else {
            if (this.isChoosingImage || d.globalData.g_isChoosingImage) return this.isChoosingImage = !1, 
            d.globalData.g_isChoosingImage = null, void wx.getStorage({
                key: "zhuangx_clipImageUrl",
                success: function(t) {
                    e.afterAvatarChoose(t.data);
                },
                complete: function() {
                    wx.removeStorage({
                        key: "zhuangx_clipImageUrl",
                        success: function(e) {}
                    });
                }
            });
            this.getList(5, 5), d.globalData.hasResult && (this.setData({
                isShowKaiping: !0
            }), d.globalData.hasResult = "");
        }
    },
    afterAvatarChoose: function(e) {
        var i, a = this, o = this.chooseImageEvent.currentTarget.dataset.id, n = new Promise(function(t, i) {
            "base64" == a.data.item.content.questions.imageFormat ? wx.getFileSystemManager().readFile({
                filePath: e,
                encoding: "base64",
                success: function(i) {
                    var o = a.getExtand(e) || "jpeg";
                    t({
                        url: "data:image/" + o + ";base64," + i.data
                    });
                },
                fail: function() {
                    i();
                }
            }) : s.uploadSingleB({
                path: e,
                state: 1
            }, "temp_xinliceshi_", function(e) {
                e ? t({
                    url: e.url
                }) : i();
            });
        });
        this.setData((i = {}, t(i, "question.chooseImageUrl", e), t(i, "isScanImage", !0), 
        i), function() {
            setTimeout(function() {
                a.setData({
                    isScanImage: !1
                }), n.then(function(e) {
                    a.userChoiceList || (a.userChoiceList = {}), a.userChoiceList[o] = e, console.log("userChoiceList", a.userChoiceList), 
                    a.selectAnswer(a.chooseImageEvent);
                }, function() {
                    wx.showToast({
                        title: "失败啦，请稍后再试呢",
                        icon: "none",
                        duration: 1500
                    });
                });
            }, 3e3);
        });
    },
    getList: function(e, t) {
        var i = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        o.getRandomTemplate(e, t, a, function(e) {
            i.setData({
                list: e.user
            });
        });
    },
    refreshList: function() {
        this.getList(5, 5, 1);
    },
    startTest: function(e) {
        var t = this;
        this.getTemplateInfo(this.data.id).then(function(e) {
            var i = e.content.questions.question;
            i.forEach(function(e, t) {
                e.titleNumber = t + 1;
            }), t.originalQuestions = JSON.parse(JSON.stringify(i));
            var a = i[0];
            t.completedQuestions = [ a ], t.setData({
                isShowStartPage: !1,
                question: a,
                questionInd: 0,
                isShowSubmit: !1,
                isShowPrevious: !a.type && 0 !== a.type,
                questionsLength: i.length
            });
        }, function() {}), e.detail && e.detail.formId && n.dealFormIds(e.detail.formId), 
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        });
    },
    showDetail: function(e) {
        this.collectFormId(e), wx.redirectTo({
            url: "/pages/counsel/detail/detail?scene=" + e.currentTarget.dataset.id
        }), wx.reportAnalytics("question_detail_to_more", {});
    },
    selectAnswer: function(e) {
        var t = this;
        if (!this.isAnimating) {
            var i = e.currentTarget.dataset, a = i.questionind, o = i.answerind, n = i.type, s = i.id;
            this.selectComponent("#audio" + a) && this.selectComponent("#audio" + a).stopMusic();
            var r = this.data.question, u = r.answer || r.choice;
            u && u.length && (u.forEach(function(e) {
                e.select = !1;
            }), u[o].select = !0), this.setData({
                question: r
            }), 0 !== n && 1 != n || (this.userChoiceList || (this.userChoiceList = {}), this.userChoiceList[s] = {
                id: u[o].id
            }, console.log("userChoiceList", this.userChoiceList));
            var d = !1, l = null, c = this.originalQuestions.length;
            if (c > 1) {
                var f = null;
                u && u[o] && u[o].next && (f = u[o].next), f ? f > 0 ? (l = JSON.parse(JSON.stringify(this.originalQuestions[f - 1])), 
                this.completedQuestions.push(l)) : d = !0 : this.completedQuestions.length < c ? (l = JSON.parse(JSON.stringify(this.originalQuestions[a + 1])), 
                this.completedQuestions.push(l)) : d = !0;
            } else d = !0;
            d ? this.setData({
                isShowSubmit: !0
            }) : (0 !== n && 1 != n || "男生" != u[o].title && "男" != u[o].title || (l.isMale = !0), 
            this.isAnimating = !0, setTimeout(function() {
                t.isAnimating = !1, t.setData({
                    question: l,
                    questionInd: a + 1
                }), wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                });
            }, 200)), console.log("completedQuestions", this.completedQuestions);
        }
    },
    rebackPrevousQuestion: function() {
        var e = this.data.questionInd;
        e -= 1, this.setData({
            question: this.completedQuestions[e],
            questionInd: e,
            isShowSubmit: !1
        }), this.completedQuestions.pop();
    },
    loadedRewardedVideoAd: function() {
        this.videoAdLoaded = !0;
    },
    errorRewardedVideoAd: function() {
        this.isVideoAdError = !0;
    },
    endedRewardedVideoAd: function() {
        "qq_mini" == u.config.AppPlatform && (this.isViewRewardedVideoAd = !0), this.navigateToResult();
    },
    pauseRewardedVideoAd: function() {
        "qq_mini" == u.config.AppPlatform && (this.isViewRewardedVideoAd = !0), this.setData({
            isShowVideoDialog: !0,
            videoContent: "观看完整视频广告，才能看测试结果哦",
            confirmText: "继续观看"
        });
    },
    continueViewVideo: function() {
        this.selectComponent("#rewardedVideoAd").showRewardedVideoAd();
    },
    viewRewardedVideoAd: function() {
        if (d.globalData.isSetRewardedVideoAdUnitId && wx.createRewardedVideoAd && !u.config.test) {
            if (!this.isVideoAdError) return void ("qq_mini" == u.config.AppPlatform ? this.selectComponent("#rewardedVideoAd").showRewardedVideoAd() : this.setData({
                isShowVideoDialog: !0,
                videoContent: "观看视频广告，才能看测试结果哦",
                confirmText: "确定"
            }));
            this.navigateToResult();
        } else this.navigateToResult();
    },
    formSubmit: function(e) {
        e.detail.formId && n.dealFormIds(e.detail.formId);
        var t = d.globalData.gloabalFomIds;
        if (t && t.length && o.saveformids(JSON.stringify(t), function(e) {
            console.log("saveformids", e), d.globalData.gloabalFomIds = [];
        }), a.default.userInfo) {
            var i = a.default.userInfo, s = i.user_avatar, r = i.user_name;
            this.data.userInfo = {
                user_avatar: s,
                user_name: r
            };
        }
        this.submit();
    },
    submit: function(e) {
        var t = this, i = this.data, a = i.item, s = i.id, r = i.title;
        o.zhuangxadd(s, function() {}), d.globalData.item = a, this.userChoiceList && !n.isEmptyObject(this.userChoiceList) ? this.getResultByApi() : this.getResultIndex().then(function(e) {
            t.makePoster(e);
        }, function() {}), wx.reportAnalytics("click_report", {
            id: s,
            title: r
        });
    },
    getResultByApi: function() {
        var e = this;
        wx.showLoading({
            title: "正在分析结果..."
        });
        var t = this.data.item.content.questions, a = t.qrcode || "";
        this.data.item.qrcode || (a = "");
        var n = this.data.userInfo;
        t.question.forEach(function(t) {
            7 == t.type && n && n.user_avatar ? e.userChoiceList[t.id] = {
                url: n.user_avatar
            } : 6 == t.type && n && n.user_name && (e.userChoiceList[t.id] = {
                text: n.user_name
            });
        }), a && "object" == (void 0 === a ? "undefined" : i(a)) && (a.value = this.data.item.qrcode);
        var s = function(e) {
            wx.hideLoading(), wx.showToast({
                title: e || "失败啦，请稍后再试",
                icon: "none",
                duration: 1500
            });
        };
        o.getResult(t.form_url, t.id, this.userChoiceList, a, function(t) {
            console.log("getResultByApi", t), t.url ? e.downloadFile(t.url) : s(t);
        }, function(e) {
            s(e);
        });
    },
    getResultIndex: function() {
        var e = this;
        return wx.showLoading({
            title: "正在分析结果..."
        }), new Promise(function(t, i) {
            var a = e.data, o = a.item, n = a.question;
            if (o.content.selfResult) {
                var s = e.getAnswers(e.completedQuestions), r = s.answers, u = s.ramdomRelates, d = o.id;
                r.forEach(function(e) {
                    d += "_" + e.content;
                }), e.storageResultKey = d, wx.getStorage({
                    key: d,
                    complete: function(a) {
                        if (console.log("getStorage", a), a.data) e.downloadFile(a.data), i(); else {
                            var n = o.content.questions.result;
                            u && u.length && u.forEach(function(e) {
                                n = n[e];
                            });
                            var s = Math.floor(Math.random() * n.length);
                            t({
                                resultIndex: s,
                                results: n
                            });
                        }
                    }
                });
            } else {
                var l = n.answer.filter(function(e) {
                    return e.select;
                })[0].next;
                console.log("nextValue", l);
                var c = o.content.questions.result, f = void 0;
                if (l) for (var h = 0; h < c.length; h++) {
                    var g = c[h].store + "";
                    if (g.match(/[a-zA-Z]/) && g.split("-").length > 1 && (g = g.split("-")[1]), console.log("store", g), 
                    g == l) {
                        f = h;
                        break;
                    }
                } else {
                    var m = 0;
                    e.getAnswers(e.completedQuestions).answers.forEach(function(e) {
                        m += Number(e.store);
                    }), console.log("totalStore", m);
                    for (var v = 0; v < c.length; v++) {
                        var w = (c[v].store + "").split("-")[1];
                        if (w = w || c[v].store, console.log("store", w), w >= m) {
                            f = v;
                            break;
                        }
                    }
                }
                f || 0 === f || (f = c.length - 1), t({
                    resultIndex: f,
                    results: c
                });
            }
        });
    },
    getAnswers: function(t) {
        var i = [], a = [];
        return t.forEach(function(t) {
            var o = t.answer.filter(function(e) {
                return e.select;
            });
            o && o.length && (a.push.apply(a, e(o)), t.relate && i.push(o[0].value));
        }), {
            answers: a,
            ramdomRelates: i
        };
    },
    getImageInfo: function(e) {
        return new Promise(function(t, i) {
            wx.getImageInfo({
                src: n.replaceQiniuHttps(e),
                success: function(e) {
                    t(e);
                },
                fail: function() {
                    i();
                }
            });
        });
    },
    makePoster: function(e) {
        var t = this, i = e.resultIndex, a = e.results, s = this.data, r = s.item, u = s.userInfo, d = a[i];
        if (!d.src) var l = r.haibao[i];
        var c = void 0;
        new Promise(function(e, i) {
            if (d.src) c = d.items, e(); else {
                c = [ {
                    dx: 20,
                    dy: 0,
                    gravity: "NorthWest",
                    width: 50,
                    height: 50,
                    radiusx: "!50p",
                    radiusy: "!50p",
                    type: "avatar",
                    value: ""
                }, {
                    color: "#999999",
                    dx: 80,
                    dy: 0,
                    font: "黑体",
                    gravity: "NorthWest",
                    size: 24,
                    type: "user_name",
                    value: ""
                }, {
                    dx: 23,
                    dy: 0,
                    gravity: "NorthWest",
                    width: 200,
                    height: 200,
                    type: "image",
                    value: r.qrcode
                } ];
                var a = [];
                a = u && r.avatar.url ? [ t.getImageInfo(l.img_url), t.getImageInfo(r.avatar.url) ] : [ t.getImageInfo(l.img_url) ], 
                Promise.all(a).then(function(t) {
                    if (c[2].dy = Math.floor(t[0].height - 220), 2 == t.length) {
                        var i = t[1];
                        i.width < 750 ? (c[0].dy = Math.floor(i.height + 20), c[1].dy = Math.floor(i.height + 30)) : (c[0].dy = Math.floor(i.height / i.width * 750 + 20), 
                        c[1].dy = Math.floor(i.height / i.width * 750 + 30));
                    } else u && (c[0].dy = 520, c[1].dy = 530);
                    e();
                }, function() {
                    i();
                });
            }
        }).then(function() {
            var e = [];
            c.forEach(function(t, i) {
                "user_name" == t.type ? u && u.user_name ? t.value = u.user_name : c[i] = [] : "avatar" == t.type ? u && u.user_avatar ? e.push(new Promise(function(e, i) {
                    o.getQiniuAvatar(u.user_avatar, function(i) {
                        t.value = i.avatar, e();
                    }, function() {
                        i();
                    });
                })) : c[i] = [] : "image" == t.type && (t.value || (c[i] = [])), t.gravity || (t.gravity = "NorthWest");
            }), Promise.all(e).then(function() {
                if (d.src) e = d.src; else var e = l.img_url;
                c.length > 0 && (e += "?watermark/3"), c.forEach(function(i) {
                    if (i.type) if ("image" == i.type || "avatar" == i.type) e += "/image/" + n.urlSafe(n.encode(n.getThumbnailUrl(i.value, i.width, i.height, i.radiusx ? i.radiusx : 0, i.radiusy ? i.radiusy : 0))) + "/gravity/" + i.gravity + "/dx/" + i.dx + "/dy/" + i.dy; else if ("text" == i.type || "user_name" == i.type) {
                        var a = (i.value + "").replace(/ /g, "");
                        e += t.textWatermark(i, a);
                    }
                }), t.downloadFile(e, d);
            });
        }, function() {});
    },
    downloadFile: function(e, t) {
        var i = this;
        t ? (t.resultUrl = e, t.list = this.data.list) : t = {
            src: e,
            resultUrl: e,
            list: this.data.list
        }, this.resultUrl = e, t.src ? wx.downloadFile({
            url: n.replaceQiniuHttps(e),
            success: function(e) {
                t.resultTempFilePath = e.tempFilePath, d.globalData.result = t, i.addTestResult(), 
                i.viewRewardedVideoAd();
            },
            complete: function() {
                wx.hideLoading();
            }
        }) : (d.globalData.result = t, this.addTestResult(), wx.hideLoading(), this.viewRewardedVideoAd());
    },
    navigateToResult: function() {
        this.setData({
            isShowStartPage: !0
        }), this.data.item.content.selfResult && wx.setStorage({
            key: this.storageResultKey,
            data: this.resultUrl
        }), wx.navigateTo({
            url: "/pages/counsel/result/result?id=" + this.data.id + "&title=" + this.data.title
        });
    },
    addTestResult: function() {
        var e = this;
        wx.getStorage({
            key: "from_user_id",
            complete: function(t) {
                if (t.data || e.isSaveSelfResult) {
                    var i = void 0;
                    e.isSaveSelfResult ? i = a.default.openId : t.data && (i = t.data);
                    var s = e.data, r = s.userInfo, d = s.id;
                    if (r) {
                        var l = r.user_avatar, c = r.user_name;
                        if (!c) return;
                        var f = {
                            isSelf: e.isSaveSelfResult,
                            url: e.resultUrl,
                            user_avatar: l || "",
                            user_name: c || ""
                        };
                        o.addTestResult(i, d, JSON.stringify(f), function() {
                            if (!f.isSelf) {
                                var t = "/pages/counsel/index/index?from_user_id=" + i + "&template_id=" + d, a = {
                                    keyword1: {
                                        value: c,
                                        color: "#000000"
                                    },
                                    keyword2: {
                                        value: e.data.item.name,
                                        color: "#000000"
                                    },
                                    keyword3: {
                                        value: n.formatTime(new Date()),
                                        color: "#000000"
                                    },
                                    keyword4: {
                                        value: "点击进入小程序，即可查看TA的测试结果",
                                        color: "#000000"
                                    }
                                };
                                o.sendTemplate(i, t, a, "#000000", "keyword1.DATA", u.config.templateId, function(e) {
                                    console.log("sendTemplate", e);
                                });
                            }
                        }, function() {});
                    }
                    e.isSaveSelfResult = null;
                }
            }
        });
    },
    chooseImage: function(e) {
        this.isChoosingImage = !0, this.chooseImageEvent = e, wx.chooseImage({
            sizeType: [ "compressed" ],
            sourceType: [ "album" ],
            count: 1,
            success: function(e) {
                wx.navigateTo({
                    url: "/pages/zhuangx/cutInside/cutInside?src=" + e.tempFilePaths[0] + "&width=300&height=300"
                });
            }
        });
    },
    getExtand: function(e) {
        var t = e.lastIndexOf("."), i = e.length;
        return e.substring(t, i);
    },
    inputText: function(e) {
        this.textValue = e.detail.value;
    },
    confirmInputText: function(e) {
        var t = e.currentTarget.dataset, i = t.id, a = t.title;
        this.textValue ? (this.userChoiceList || (this.userChoiceList = {}), this.userChoiceList[i] = {
            text: this.textValue
        }, this.textValue = null, console.log("userChoiceList", this.userChoiceList), this.selectAnswer(e)) : wx.showToast({
            title: a,
            duration: 1500,
            icon: "none"
        });
    },
    textWatermark: function(e, t) {
        t = this.removeEmoji(t);
        var i = "", a = e.gravity, o = e.size;
        e.font && -1 != l.indexOf(e.font) && (o *= 20);
        var s = "/fill/" + n.urlSafe(n.encode(e.color)) + "/fontsize/" + o + "/gravity/" + a + "/dx/" + e.dx + "/dy/";
        if (e.lineLenght) {
            var r = n.spliteByLength(t, 0, e.lineLenght);
            if (e.lineHeight) for (var u = 0; u < r.length; u++) i += "/text/" + n.urlSafe(n.encode(r[u])) + s + (e.dy + e.lineHeight * u), 
            e.font && (i += "/font/" + n.urlSafe(n.encode(e.font))); else i += "/text/" + n.urlSafe(n.encode(r.join("\r\n"))) + s + e.dy, 
            e.font && (i += "/font/" + n.urlSafe(n.encode(e.font)));
            return i;
        }
        return i += "/text/" + n.urlSafe(n.encode(t)) + s + e.dy, e.font && (i += "/font/" + n.urlSafe(n.encode(e.font))), 
        i;
    },
    removeEmoji: function(e) {
        return e.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, " ");
    },
    onShareAppMessage: function() {
        return {
            title: "" + this.data.item.name,
            path: "/pages/counsel/index/index?scene=" + this.data.id,
            imageUrl: this.data.item.avatar.url,
            generalWebpageUrl: "http://www.maiyizhi.cn/index.php?r=common/index/qqmp"
        };
    },
    loginButton: function(e) {
        this.formSubmit(e), this.setData({
            isLogin: a.default.isLogin
        });
    },
    loginFail: function(e) {
        this.formSubmit(e);
    },
    guanzhu: function(e) {
        var t = this, i = e.detail, a = i.attention_logo, o = i.attention_name, n = i.attention_btn_name;
        this.setData({
            attention_logo: a,
            attention_name: o,
            attention_btn_name: n
        }, function() {
            t.selectComponent("#attention").showtype2();
        });
    },
    reback: function() {
        wx.navigateBack();
    },
    collectFormId: function(e) {
        e.detail && e.detail.formId && n.dealFormIds(e.detail.formId);
    }
}));