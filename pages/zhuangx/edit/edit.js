var e, t, a, i, o, n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../utils/user")), l = require("../../../wux/wux"), s = require("../../../api.js"), r = require("../../../utils/util.js"), d = require("../../../zanui/index"), u = require("../../../utils/upload.js"), c = require("../../../utils/config.js"), f = {}, g = [], h = getApp(), v = [ "仿宋", "黑体", "楷体", "宋体", "微软雅黑" ], m = {}, p = wx.getSystemInfoSync();

Page(Object.assign({}, d.Toast, {
    data: {
        pickerIndex: [],
        disabled: !0,
        date: [],
        time: [],
        buttonText: "测一测",
        avatar: [],
        lb: [ "cur", "r1", "r2", "l1", "l2" ],
        AppPlatform: c.config.AppPlatform,
        guanggaoName: c.config.guanggaoName,
        appName: c.config.app_name,
        isCustomNavigationStyle: h.globalData.system_info.version && h.globalData.system_info.version[0] >= 7,
        isLoading: !0
    },
    queryMultipleNodes: function() {
        var e = this, t = wx.createSelectorQuery();
        t.selectAll(".zan-form").boundingClientRect(), t.selectViewport().scrollOffset(), 
        t.exec(function(t) {
            console.log("queryMultipleNodes", t);
            var a = 0;
            t[0].forEach(function(e) {
                console.log(e), a += e.height;
            });
            var n = p.windowWidth / 750, l = 160 + 10 * (t[0].length - 1);
            a = a / n + l, console.log("fixHeight", a);
            var s = r.getSize(i, o, a, h.globalData.system_info, e.data.isCustomNavigationStyle);
            e.setData({
                size: s
            });
        });
    },
    afterAvatarChoose: function(t) {
        var i = this;
        if ("avatar" == a) o = i.data.avatarIndex; else if ("image" == a) var o = i.data.imageindex;
        o >= 0 && (e[o].value = t), i.setData({
            contentItem: e,
            disabled: !0
        }), u.uploadSingleB({
            path: t,
            state: 1
        }, "ceyice_avatar_", function(t) {
            t ? (s.checkImage(t.url, function() {}), o >= 0 && (e[o].value = t.url), i.setData({
                contentItem: e
            })) : i.showZanToast("上传失败，请稍后再试呢"), i.setData({
                disabled: !1
            });
        });
    },
    avatarMenu: function(t) {
        a = "avatar";
        var i = t.currentTarget.dataset.avatarindex;
        this.setData({
            avatarIndex: i
        });
        var o = this;
        "qq" != c.config.AppPlatform ? l.$wuxDialog.open({
            title: "",
            content: "",
            verticalButtons: !0,
            userInfoButtons: [ {
                text: "选择我自己",
                bold: 0,
                isLogin: !!o.data.isLogin,
                onTap: function(e) {
                    if (o.data.isLogin) o.selfCommon(i); else {
                        var t = e.detail;
                        t.hasOwnProperty("userInfo") && (h.globalData.from_user_id && (t.from_user_id = h.globalData.from_user_id, 
                        h.globalData.from_user_id = null), n.default.updateUserInfo(t).then(function(e) {
                            o.selfCommon(i);
                        }, function(e) {}));
                    }
                }
            } ],
            buttons: [ {
                text: "从相册选择",
                bold: 0,
                onTap: function(t) {
                    wx.chooseImage({
                        sizeType: [ "original", "compressed" ],
                        sourceType: [ "album" ],
                        count: 1,
                        success: function(t) {
                            e[i].width ? wx.navigateTo({
                                url: "../cutInside/cutInside?src=" + t.tempFilePaths[0] + "&width=" + e[i].width + "&height=" + e[i].height
                            }) : (e[i].localSrc = t.tempFilePaths[0], o.setData({
                                contentItem: e,
                                disabled: !0
                            }), u.uploadSingleB({
                                path: t.tempFilePaths[0],
                                state: 1
                            }, "zhuangx_avatar_", function(t) {
                                console.log("pic", t), t ? (s.checkImage(t.url, function() {}), e[i].value = t.url, 
                                o.setData({
                                    contentItem: e
                                })) : o.showZanToast("上传失败，请稍后再试呢"), o.setData({
                                    disabled: !1
                                });
                            }));
                        }
                    });
                }
            }, {
                text: "取消",
                bold: 0,
                onTap: function(e) {
                    return !1;
                }
            } ]
        }) : l.$wuxDialog.open({
            title: "",
            content: "",
            verticalButtons: !0,
            buttons: [ {
                text: "从相册选择",
                bold: 0,
                onTap: function(t) {
                    wx.chooseImage({
                        sizeType: [ "original", "compressed" ],
                        sourceType: [ "album" ],
                        count: 1,
                        success: function(t) {
                            e[i].width ? wx.navigateTo({
                                url: "../cutInside/cutInside?src=" + t.tempFilePaths[0] + "&width=" + e[i].width + "&height=" + e[i].height
                            }) : (e[i].localSrc = t.tempFilePaths[0], o.setData({
                                contentItem: e,
                                disabled: !0
                            }), u.uploadSingleB({
                                path: t.tempFilePaths[0],
                                state: 1
                            }, "zhuangx_avatar_", function(t) {
                                console.log("pic", t), t ? (s.checkImage(t.url, function() {}), e[i].value = t.url, 
                                o.setData({
                                    contentItem: e
                                })) : o.showZanToast("上传失败，请稍后再试呢"), o.setData({
                                    disabled: !1
                                });
                            }));
                        }
                    });
                }
            }, {
                text: "取消",
                bold: 0,
                onTap: function(e) {
                    return !1;
                }
            } ]
        });
    },
    selfCommon: function(t) {
        var a = this;
        s.login(function(i) {
            s.getQiniuAvatar(i.avatar, function(o) {
                e[t + 1] && "user_name" == e[t + 1].type && (e[t + 1].value = i.user_name), e[t].width == e[t].height ? (e[t].localSrc = o.avatar, 
                e[t].value = o.avatar) : wx.navigateTo({
                    url: "../cutInside/cutInside?src=" + r.replaceQiniuHttps(o.avatar) + "&width=" + e[t].width + "&height=" + e[t].height
                }), a.setData({
                    contentItem: e
                });
            }, function() {
                a.showZanToast("头像加载失败，请重新上传哦");
            });
        }, function() {}, "必须授权登录之后才能操作呢，是否重新授权登录？");
    },
    imageMenu: function(t) {
        a = "image";
        var i = t.currentTarget.dataset.imageindex;
        this.setData({
            imageindex: i
        });
        var o = this;
        wx.chooseImage({
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            count: 1,
            success: function(t) {
                e[i].width ? wx.navigateTo({
                    url: "../cutInside/cutInside?src=" + t.tempFilePaths[0] + "&width=" + e[i].width + "&height=" + e[i].height
                }) : (e[i].value = t.tempFilePaths[0], o.setData({
                    contentItem: e,
                    disabled: !0
                }), u.uploadSingleB({
                    path: t.tempFilePaths[0],
                    state: 1
                }, "ceyice_avatar_", function(t) {
                    t ? (s.checkImage(t.url, function() {}), e[i].value = t.url) : o.showZanToast("上传失败，请稍后再试呢"), 
                    o.setData({
                        disabled: !1
                    });
                }));
            }
        });
    },
    pickerChange: function(t) {
        console.log(t), m[t.currentTarget.dataset.title] = t.detail.value, wx.setStorage({
            key: "customerInfo",
            data: m
        }), this.data.pickerIndex[t.target.dataset.name] = t.detail.value, "自定义" == e[t.target.dataset.name].options[t.detail.value].name ? e[t.target.dataset.name].selfDefine = !0 : e[t.target.dataset.name].selfDefine = !1, 
        this.setData({
            contentItem: e,
            pickerIndex: this.data.pickerIndex
        });
        var a = this;
        e.forEach(function(i, o, n) {
            if (i.relate) {
                var l = i.relate, s = void 0, r = n.filter(function(e, t, a) {
                    if (e.title == l) return s = t, e;
                });
                "select" == r[0].type && r[0].options[t.detail.value[s]] && (e[o].value = r[0].options[t.detail.value[s]].value ? r[0].options[t.detail.value[s]].value : r[0].options[t.detail.value[s]].name, 
                a.setData({
                    contentItem: e
                }));
            }
        });
    },
    bindDateChange: function(t) {
        this.data.date[t.target.dataset.name] = t.detail.value, e[t.target.dataset.name].value = t.detail.value, 
        this.setData({
            date: this.data.date
        });
    },
    inputBlur: function(t) {
        console.log(t);
        t.currentTarget.dataset.type;
        var a = t.currentTarget.dataset.title;
        e[t.target.id].value = t.detail.value, m[a] = t.detail.value, wx.setStorage({
            key: "customerInfo",
            data: m
        });
    },
    bindTimeChange: function(e) {
        var t = [];
        t[e.target.dataset.name] = e.detail.value, this.setData({
            time: t
        });
    },
    onLoad: function(e) {
        var a = this;
        wx.showToast({
            title: "加载中……",
            duration: 2e4,
            icon: "loading"
        }), h.globalData.system_info = wx.getSystemInfoSync(), this.isSaveSelfResult = e.isSaveSelfResult || !1, 
        e.scene && (t = decodeURIComponent(e.scene), this.setData({
            id: t
        })), 1 == getCurrentPages().length && this.setData({
            isFromSitemap: !0
        }), h.globalData.getAdPromise.then(function() {
            a.setData({
                canUseRewardedVideoAd: h.globalData.isSetRewardedVideoAdUnitId && !!wx.createRewardedVideoAd
            });
        });
    },
    onShow: function() {
        if (this.data.id && (this.getData(this.data.id), h.globalData.showTuijian && 1007 != h.globalData.scene && 1008 != h.globalData.scene && (h.globalData.showTuijian = !1, 
        this.setData({
            isShowKaiping: !0
        })), h.globalData.scene = "", this.data.hasReport)) {
            var t = this.data.id, a = this.data.title;
            wx.reportAnalytics("enter_detail", {
                id: t,
                title: a
            });
        }
        var i = wx.getStorageSync("zhuangx_clipImageUrl");
        r.isEmptyObject(i) || (this.afterAvatarChoose(i), wx.removeStorage({
            key: "zhuangx_clipImageUrl",
            success: function(e) {}
        }));
        var o = wx.getStorageSync("zhuangx_user");
        if (!r.isEmptyObject(o)) {
            var n = this.data.avatarIndex;
            n >= 0 && (e[n + 1] && "user_name" == e[n + 1].type && (e[n + 1].value = o.user_name), 
            e[n].width == e[n].height ? e[n].value = o.avatar : wx.navigateTo({
                url: "../cutInside/cutInside?src=" + r.replaceQiniuHttps(o.avatar) + "&width=" + e[n].width + "&height=" + e[n].height
            }), this.setData({
                contentItem: e
            })), wx.removeStorage({
                key: "zhuangx_user",
                success: function(e) {}
            });
        }
        r.createInterstitialAd();
    },
    getData: function(e) {
        wx.showNavigationBarLoading();
        var t = this;
        s.zhuangxinfo(e, function(a) {
            f = a, wx.setNavigationBarTitle({
                title: a.name
            }), t.setData({
                id: e,
                title: a.name,
                disabled: !1,
                hasReport: !0,
                description: a.desc,
                isLoading: !1
            }, function() {
                wx.reportAnalytics("enter_detail", {
                    id: e,
                    title: a.name
                }), t.commonPart();
            });
        }, function() {
            wx.hideNavigationBarLoading(), wx.hideToast(), t.showZanToast("数据不存在或者被删除"), setTimeout(function() {
                wx.navigateTo({
                    url: "/pages/zhuangx/list/list?type=1"
                });
            }, 1500);
        });
    },
    loadImage: function() {},
    commonPart: function() {
        var a = this;
        console.log("item", f);
        var n = this;
        if (n.getList(6, 5), "string" == typeof f.content && (f.content = JSON.parse(r.decode(r.decode(r.decode(f.content))))), 
        console.log(f.content), (g = f.content.slice())[0].target) {
            var l = g[0].target.url;
            n.setData({
                select: l
            });
        }
        if (e = g[0].items, g[0].title && wx.setNavigationBarTitle({
            title: g[0].title
        }), console.log("contentItem", e), g.length > 1) {
            g.length < 5 && (g = 2 == g.length ? g.concat(g, g) : g.concat(g));
            for (var s = n.data.lb.slice(0, 4), d = 0; d < g.length - 5; d++) s.push("l1");
            s.push("l2"), n.setData({
                lb: s
            });
        }
        i = g[0].preview.width, o = g[0].preview.height, n.setData({
            previewWidth: i
        });
        var u = 0;
        e.forEach(function(e) {
            console.log("item", e), 1 != e.disabled && u++;
        });
        var c = r.getSize(i, o, 400, h.globalData.system_info, this.data.isCustomNavigationStyle);
        if (console.log(c), wx.getStorage({
            key: "customerInfo",
            success: function(e) {
                e.data && (m = e.data), n.getUserInfo();
            },
            fail: function() {
                n.getUserInfo();
            }
        }), t = f.id, f.content[0].buttonText) v = f.content[0].buttonText; else var v = "测一测";
        this.setData({
            buttonText: v,
            content: g,
            contentItem: e,
            size: c,
            testTimes: f.times
        }, function() {
            a.setData({
                isShowRewardedVideoAd: !0
            }), wx.hideNavigationBarLoading(), wx.hideToast();
        });
    },
    getUserInfo: function() {
        var t = this, a = !0, i = [], o = [];
        e.forEach(function(t, n, l) {
            "select" == t.type && "性别" == t.title && m[t.title] && (e[n].value = m[t.title]), 
            "姓名" == t.title && m && m[t.title] && (t.value = m[t.title], e[n].value = m[t.title]), 
            "user_name" == t.type && (t.value || (a = !0, i.push(n))), "avatar" == t.type && (t.value || (a = !0, 
            o.push(n)));
        }), t.setData({
            contentItem: e
        }), t.queryMultipleNodes(), a && s.login(function(a) {
            wx.showNavigationBarLoading(), h.globalData.user_name = a.user_name, s.getQiniuAvatar(a.avatar, function(n) {
                wx.hideNavigationBarLoading();
                for (var l = 0; l < i.length; l++) i[l] >= 0 && (e[i[l]].value = a.user_name);
                if (console.log(n.avatar), "qq" != c.config.AppPlatform) for (var s = 0; s < o.length; s++) o[s] >= 0 && (e[o[s]].value = n.avatar);
                t.setData({
                    contentItem: e
                });
            }, function() {
                t.showZanToast("头像加载失败，请重新上传哦");
            });
        }, function() {}, "必须授权登录之后才能操作呢，是否重新授权登录？");
    },
    onShareAppMessage: function() {
        return console.log(this.data), {
            title: f.name,
            path: "/pages/zhuangx/list/list?path=/pages/zhuangx/edit/edit&scene=" + f.id,
            imageUrl: f.avatar.url,
            generalWebpageUrl: "http://www.maiyizhi.cn/index.php?r=common/index/qqmp"
        };
    },
    preview: function(e) {
        console.log(e);
        var t = e.detail.formId;
        r.dealFormIds(t), r.previewSingalPic(e.target.dataset.src);
    },
    textWatermark: function(e, t) {
        var a = "", i = e.gravity, o = e.size;
        e.font && -1 != v.indexOf(e.font) && (o *= 20);
        var n = "/fill/" + r.urlSafe(r.encode(e.color)) + "/fontsize/" + o + "/gravity/" + i + "/dx/" + e.dx + "/dy/";
        if (e.lineLenght) {
            var l = r.spliteByLength(t, 0, e.lineLenght);
            if (e.lineHeight) for (var s = 0; s < l.length; s++) a += "/text/" + r.urlSafe(r.encode(l[s])) + n + (e.dy + e.lineHeight * s), 
            e.font && (a += "/font/" + r.urlSafe(r.encode(e.font))); else a += "/text/" + r.urlSafe(r.encode(l.join("\r\n"))) + n + e.dy, 
            e.font && (a += "/font/" + r.urlSafe(r.encode(e.font)));
            return a;
        }
        return a += "/text/" + r.urlSafe(r.encode(t)) + n + e.dy, e.font && (a += "/font/" + r.urlSafe(r.encode(e.font))), 
        a;
    },
    loadedRewardedVideoAd: function() {
        this.videoAdLoaded = !0;
    },
    errorRewardedVideoAd: function() {
        this.isVideoAdError = !0;
    },
    endedRewardedVideoAd: function() {
        this.navigateToResult();
    },
    pauseRewardedVideoAd: function() {
        this.setData({
            isShowVideoDialog: !0,
            videoContent: "观看完整视频广告，才能看测试结果哦",
            confirmText: "继续观看"
        });
    },
    continueViewVideo: function() {
        this.selectComponent("#rewardedVideoAd").showRewardedVideoAd();
    },
    viewRewardedVideoAd: function() {
        if (h.globalData.isSetRewardedVideoAdUnitId && wx.createRewardedVideoAd && !c.config.test) {
            if (!this.isVideoAdError) return void ("qq_mini" == c.config.AppPlatform ? this.selectComponent("#rewardedVideoAd").showRewardedVideoAd() : this.setData({
                isShowVideoDialog: !0,
                videoContent: "观看视频广告，才能看测试结果哦",
                confirmText: "确定"
            }));
            this.navigateToResult();
        } else this.navigateToResult();
    },
    formSubmit: function(e) {
        this.submit(e);
        var t = this.data, a = t.id, i = t.title;
        a && i && wx.reportAnalytics("start_test", {
            id: a,
            title: i
        });
    },
    submit: function(a) {
        var i = this;
        a.detail.formId && r.dealFormIds(a.detail.formId);
        var o = h.globalData.gloabalFomIds;
        o && o.length && s.saveformids(JSON.stringify(o), function() {
            h.globalData.gloabalFomIds = [];
        });
        var n = this.data.select + "?watermark/3";
        if (wx.showToast({
            title: "正在为您分析...",
            duration: 2e4,
            icon: "loading"
        }), 1 != f.content[0].resultRandom) {
            var l = f.id;
            e.forEach(function(e, t, i) {
                e.disabled || (l += a.detail.value[t]);
            }), console.log("getKey", l);
            var d = wx.getStorageSync(l);
            if (d) return void wx.downloadFile({
                url: r.replaceQiniuHttps(d.result),
                success: function(e) {
                    wx.hideToast(), i.resultTempFilePath = e.tempFilePath, i.picUrl = d.result, i.addTestResult(), 
                    i.viewRewardedVideoAd();
                }
            });
        }
        if (g[0].apiurl) {
            var u = {}, c = !1, m = [];
            if (e.forEach(function(e, t, o) {
                var n = void 0;
                "select" == e.type && e.options[a.detail.value[t]] ? (n = e.options[a.detail.value[t]].value ? e.options[a.detail.value[t]].value : e.options[a.detail.value[t]].name, 
                n = r.stringTrim(n + "")) : n = a.detail.value[t], n || (c = !0, wx.hideToast(), 
                i.showZanToast(e.title + "必填哦")), u[e.name] = n, "image" != e.type && "avater" != e.type && m.push(n);
            }), c) return;
            var p = "";
            m.forEach(function(e, t, a) {
                p += e;
            }), s.checkText(p, function(e) {
                s.zhuangxgif(g[0].apiurl, u, function(e) {
                    s.zhuangxadd(t, function(e) {}), wx.downloadFile({
                        url: r.replaceQiniuHttps(e.url),
                        success: function(e) {
                            wx.hideNavigationBarLoading(), wx.hideToast(), i.resultTempFilePath = e.tempFilePath, 
                            i.picUrl = n, i.addTestResult(), i.viewRewardedVideoAd();
                        }
                    }), wx.hideToast();
                });
            }, function() {
                wx.hideToast(), i.showZanToast("输入内容有违禁词");
            });
        } else {
            var w = [];
            if (e.forEach(function(e, t, i) {
                if (e.ramdomRelate) for (var o = e.options[a.detail.value[t]].value, n = 0; n < e.ramdomRelate.length; n++) w.push({
                    key: e.ramdomRelate[n],
                    value: o
                });
            }), console.log("ramdomRelates", w), g[0].targets) {
                for (var x = void 0, y = 0; y < w.length; y++) if ("targets" == w[y].key) {
                    x = w[y].value;
                    break;
                }
                if (x) T = g[0].targets.value[x]; else var T = g[0].targets.value;
                var I = parseInt(Math.random() * T.length, 10);
                n = T[I] + "?watermark/3";
            }
            var S = !1;
            console.log("pic_url", n);
            var b = [], D = [];
            if (console.log("contentItem", e), e.forEach(function(e, t, o) {
                if (!e.ramdomRelate) {
                    var l = "";
                    if ("select" == e.type && e.options[a.detail.value[t]]) l = e.options[a.detail.value[t]].value ? e.options[a.detail.value[t]].value : e.options[a.detail.value[t]].name, 
                    l = r.stringTrim(l + ""); else if ("avatar" == e.type) l = e.value ? r.stringTrim(e.value + "") : ""; else if ("random" == e.type) {
                        for (var d = void 0, u = 0; u < w.length; u++) if (w[u].key == e.title) {
                            d = w[u].value;
                            break;
                        }
                        if (d) c = e.value[d]; else var c = e.value;
                        var f = parseInt(Math.random() * c.length, 10);
                        l = c[f], console.log(l);
                    } else if (e.relate) {
                        var g = e.relate, h = void 0, m = o.filter(function(e, t, a) {
                            if (e.title == g) return h = t, e;
                        });
                        l = "select" == m[0].type && m[0].options[a.detail.value[h]] ? (m[0].options[a.detail.value[h]].value ? m[0].options[a.detail.value[h]].value : m[0].options[a.detail.value[h]].name) + "" : m[0].value + "", 
                        l = r.stringTrim(l + "");
                    } else console.log(a.detail.value), console.log(t), l = r.stringTrim(a.detail.value[t] + "");
                    if (console.log(l), !l) return S = !0, wx.hideToast(), void i.showZanToast(e.title + "必填哦");
                    "image" != e.type && "avater" != e.type && D.push(l);
                    var p = e.gravity;
                    if ("select" == e.type && e.options[a.detail.value[t]]) l = (e.prefix ? e.prefix : "") + (e.options[a.detail.value[t]].value ? e.options[a.detail.value[t]].value : e.options[a.detail.value[t]].name) + (e.suffix ? e.suffix : ""); else if ("avatar" == e.type) l = e.value; else if ("random" == e.type) ; else if (e.relate) {
                        var x = e.relate, y = void 0, T = o.filter(function(e, t, a) {
                            if (e.title == x) return y = t, e;
                        });
                        l = "select" == T[0].type && T[0].options[a.detail.value[y]] ? T[0].options[a.detail.value[y]].value ? T[0].options[a.detail.value[y]].value : T[0].options[a.detail.value[y]].name : T[0].value, 
                        l = (e.prefix ? e.prefix : "") + l + (e.suffix ? e.suffix : "");
                    } else l = (e.prefix ? e.prefix : "") + a.detail.value[t] + (e.suffix ? e.suffix : ""), 
                    console.log(l);
                    l = r.stringTrim(l + ""), console.log(l), e.font && -1 != v.indexOf(e.font) ? n += i.textWatermark(e, l) : e.font ? b.push(new Promise(function(t) {
                        console.log(e), s.xiezi(l, e.font, e.size, e.color.replace(/#/, ""), e.lineWidth ? e.lineWidth : 0, e.lineHeight ? e.lineHeight : 0, function(a) {
                            t("/image/" + r.urlSafe(r.encode(a.preview + (e.rotate ? "?imageMogr2/rotate/" + e.rotate : ""))) + "/gravity/" + p + "/dx/" + e.dx + "/dy/" + e.dy);
                        }, function() {
                            var a = "/fill/" + r.urlSafe(r.encode(e.color)) + "/fontsize/" + 20 * e.size + "/gravity/" + p + "/dx/" + e.dx + "/dy/";
                            t("/text/" + r.urlSafe(r.encode(l)) + a + e.dy);
                        });
                    })) : "avatar" == e.type || "image" == e.type ? (console.log(r.getThumbnailUrl(e.value, e.width, e.height, e.radiusx ? e.radiusx : 0, e.radiusy ? e.radiusy : 0)), 
                    n += "/image/" + r.urlSafe(r.encode(r.getThumbnailUrl(e.value, e.width, e.height, e.radiusx ? e.radiusx : 0, e.radiusy ? e.radiusy : 0))) + "/gravity/" + p + "/dx/" + e.dx + "/dy/" + e.dy) : n += i.textWatermark(e, l);
                }
            }), S) return;
            var _ = "";
            D.forEach(function(e) {
                _ += e;
            }), s.checkText(_, function(o) {
                if (s.zhuangxadd(t, function(e) {}), b.length) Promise.all(b).then(function(t) {
                    if (t.forEach(function(e, t, a) {
                        n += e;
                    }), console.log(n), 1 != f.content[0].resultRandom) {
                        var o = f.id;
                        e.forEach(function(e, t, i) {
                            e.disabled || (o += a.detail.value[t]);
                        }), wx.setStorageSync(o, {
                            result: n
                        });
                    }
                    wx.downloadFile({
                        url: r.replaceQiniuHttps(n),
                        success: function(e) {
                            wx.hideNavigationBarLoading(), wx.hideToast(), i.resultTempFilePath = e.tempFilePath, 
                            i.picUrl = n, i.addTestResult(), i.viewRewardedVideoAd();
                        }
                    });
                }); else {
                    if (console.log(n), console.log("111232312313131313", n), 1 != f.content[0].resultRandom) {
                        var l = f.id;
                        e.forEach(function(e, t, i) {
                            e.disabled || (l += a.detail.value[t]);
                        }), wx.setStorageSync(l, {
                            result: n
                        });
                    }
                    wx.downloadFile({
                        url: r.replaceQiniuHttps(n),
                        success: function(e) {
                            wx.hideNavigationBarLoading(), wx.hideToast(), i.resultTempFilePath = e.tempFilePath, 
                            i.picUrl = n, i.addTestResult(), i.viewRewardedVideoAd();
                        }
                    });
                }
            }, function() {
                wx.hideToast(), i.showZanToast("输入内容有违禁词");
            });
        }
        wx.removeStorageSync("zhuangx_" + t);
    },
    navigateToResult: function() {
        h.globalData.g_resultInfo = {
            pic: this.resultTempFilePath,
            remoteUrl: this.picUrl,
            title: f.name,
            templateId: f.id,
            avatar: f.avatar.url,
            list: this.data.list
        }, wx.navigateTo({
            url: "/pages/preview/preview"
        });
    },
    addTestResult: function() {
        var e = this;
        wx.getStorage({
            key: "from_user_id",
            complete: function(t) {
                if (t.data || e.isSaveSelfResult) {
                    var a = void 0;
                    e.isSaveSelfResult ? a = n.default.openId : t.data && (a = t.data);
                    var i = e.data, o = i.title, l = i.id;
                    if (n.default.userInfo) {
                        var d = n.default.userInfo, u = d.user_avatar, f = d.user_name;
                        if (!f) return;
                        var g = {
                            isSelf: e.isSaveSelfResult,
                            url: e.picUrl,
                            user_avatar: u || "",
                            user_name: f || ""
                        };
                        s.addTestResult(a, l, JSON.stringify(g), function() {
                            if (!g.isSelf) {
                                var e = "/pages/counsel/index/index?from_user_id=" + a + "&template_id=" + l, t = {
                                    keyword1: {
                                        value: f,
                                        color: "#000000"
                                    },
                                    keyword2: {
                                        value: o,
                                        color: "#000000"
                                    },
                                    keyword3: {
                                        value: r.formatTime(new Date()),
                                        color: "#000000"
                                    },
                                    keyword4: {
                                        value: "点击进入小程序，即可查看TA的测试结果",
                                        color: "#000000"
                                    }
                                };
                                s.sendTemplate(a, e, t, "#000000", "keyword1.DATA", c.config.templateId, function(e) {
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
    touchstart: function(e) {
        var t = this;
        r.lunTouchstart(e, t);
    },
    touchmove: function(e) {
        var t = this;
        r.lunTouchmove(e, t);
    },
    touchend: function(e) {
        var t = this;
        r.lunTouchend(e, t);
    },
    scrollLeft: function(t) {
        var a = this;
        if (t.detail) {
            var i = t.detail.formId;
            r.dealFormIds(i);
        }
        r.lunScrollLeft(g, a), e = this.data.contentItem, this.getUserInfo();
    },
    scrollRight: function(t) {
        var a = this;
        if (t.detail) {
            var i = t.detail.formId;
            r.dealFormIds(i);
        }
        r.lunScrollRight(g, a), e = this.data.contentItem, this.getUserInfo();
    },
    getList: function(e, t) {
        var a = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        s.getRandomTemplate(e, t, i, function(e) {
            console.log("getRandomTemplate", e), a.setData({
                list: e.user
            });
        });
    },
    refreshList: function() {
        this.getList(6, 5, 1);
    },
    selectTemplate: function(e) {
        wx.reportAnalytics("detail_to_more", {}), this.collectFormId(e);
        var t = e.currentTarget.dataset, a = t.id, i = t.path;
        i ? wx.redirectTo({
            url: i
        }) : wx.redirectTo({
            url: "/pages/zhuangx/edit/edit?scene=" + a
        });
    },
    guanzhu: function(e) {
        var t = this, a = e.detail, i = a.attention_logo, o = a.attention_name, n = a.attention_btn_name;
        this.setData({
            attention_logo: i,
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
        e.detail && e.detail.formId && r.dealFormIds(e.detail.formId);
    }
}));