var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/user.js")), e = (require("../../../wux/wux"), require("../../../api.js")), i = require("../../../utils/util.js"), a = (require("../../../utils/upload.js"), 
require("../../../utils/config.js")), o = require("../../../utils/wcache.js"), n = getApp(), s = n.globalData.system_info, l = s.windowWidth, u = s.pixelRatio;

Page(Object.assign({}, {
    data: {
        AppPlatform: a.config.AppPlatform,
        canIUseOpenSetting: wx.canIUse("button.open-type.openSetting"),
        guanggaoName: a.config.guanggaoName,
        appName: a.config.app_name,
        canOpenQzonePublish: !!wx.openQzonePublish,
        tuijianPicSize: "?imageView2/2/w/" + Math.ceil(.16 * l * u)
    },
    onLoad: function(e) {
        var a = this;
        console.log("options", e);
        var o = n.globalData, s = o.result, l = o.item;
        this.originUrl = s.resultUrl, console.log("item", l), n.globalData.hasResult = !0, 
        n.globalData.item = null, s.src ? wx.getImageInfo({
            src: s.resultTempFilePath,
            success: function(t) {
                var e = i.getSize(t.width, t.height, 400, wx.getSystemInfoSync());
                a.setData({
                    testResultSize: e
                });
            },
            fail: function() {}
        }) : this.setData({
            result: s
        });
        var u = null;
        if (t.default.userInfo) {
            var r = t.default.userInfo;
            u = {
                user_avatar: r.user_avatar,
                user_name: r.user_name
            };
        }
        this.setData({
            id: e.id,
            title: e.title,
            item: l,
            catStr: l.cat_str.replace(" ", ""),
            result_url: s.resultTempFilePath || s.resultUrl,
            user: u
        }, function() {}), wx.getSetting({
            success: function(t) {
                !1 === t.authSetting["scope.writePhotosAlbum"] && a.setData({
                    authSettingScopeWritePhotosAlbum: !0
                });
            }
        });
    },
    onShow: function() {
        this.getList(5, 5), i.createInterstitialAd();
    },
    openSetting: function(t) {
        t.detail.authSetting["scope.writePhotosAlbum"] ? (this.saveResult(), this.setData({
            authSettingScopeWritePhotosAlbum: !1
        })) : i.previewSingalPic(this.data.result_url);
    },
    viewRewardedVideoAd: function() {
        n.globalData.isSetRewardedVideoAdUnitId && wx.createRewardedVideoAd && !a.config.test && (this.isVideoAdError || this.setData({
            isShowVideoDialog: !0,
            videoContent: "观看视频广告，即可查看结果详情哦～",
            confirmText: "看12秒视频"
        }));
    },
    loadedRewardedVideoAd: function() {
        this.videoAdLoaded = !0;
    },
    errorRewardedVideoAd: function() {
        this.isVideoAdError = !0;
    },
    endedRewardedVideoAd: function() {
        var t = this;
        n.globalData.isEndedRewardedVideoAd = !0, "qq_mini" == a.config.AppPlatform && setTimeout(function() {
            t.setData({
                isShowKaiping: !0
            });
        }, 2e3);
    },
    pauseRewardedVideoAd: function() {
        this.setData({
            isShowVideoDialog: !0,
            videoContent: "观看完整视频广告，即可查看结果详情哦～",
            confirmText: "继续观看"
        });
    },
    continueViewVideo: function() {
        this.selectComponent("#rewardedVideoAd").showRewardedVideoAd();
    },
    getCeshiGuanggao: function() {
        var t = this;
        e.getCeshiGuanggao("ceshi_guanggao", function(e) {
            console.log("ceshi_guanggao", e), t.ceshiGuanggao = e;
        }, function() {
            console.log("no ceshi_guanggao");
        });
    },
    testResultLoaded: function() {
        wx.hideLoading();
    },
    getList: function(t, i) {
        var a = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        e.getRandomTemplate(t, i, o, function(t) {
            console.log("getRandomTemplate", t), a.setData({
                list: t.user
            });
        });
    },
    refreshList: function() {
        this.getList(5, 5, 1);
    },
    showDetail: function(t) {
        console.log("showDetail", t), wx.reportAnalytics("test_result_to_more", {}), n.globalData.hasResult = "", 
        wx.redirectTo({
            url: "/pages/counsel/detail/detail?scene=" + t.currentTarget.dataset.id
        });
    },
    saveResult: function() {
        var t = this;
        wx.showLoading({
            title: "保存中"
        }), n.globalData.result.src ? this.save(this.data.result_url) : wx.downloadFile({
            url: i.replaceQiniuHttps(this.data.result_url),
            success: function(e) {
                t.save(e.tempFilePath);
            }
        });
    },
    onShareAppMessage: function() {
        var i = this, n = this.data, s = n.title, l = n.id, u = n.user;
        if (u) var r = u.user_avatar, c = u.user_name;
        var d = {
            isSelf: !0,
            url: this.originUrl,
            user_avatar: r || "",
            user_name: c || ""
        };
        return e.addTestResult(t.default.openId, l, JSON.stringify(d), function() {}, function() {}), 
        setTimeout(function() {
            "qq_mini" == a.config.AppPlatform || o.get("is_show_kaiping") || (i.setData({
                animateCss: "weui-animate-fade-in",
                isShowKaiping: !0
            }), o.put("is_show_kaiping", 1, 300)), wx.pageScrollTo({
                scrollTop: 300,
                duration: 300
            });
        }, 1500), {
            title: "" + s,
            path: "/pages/counsel/index/index?scene=" + l + "&sharerId=" + t.default.openId,
            imageUrl: this.data.result_url,
            generalWebpageUrl: "http://www.maiyizhi.cn/index.php?r=common/index/qqmp",
            success: function() {
                wx.reportAnalytics("share", {
                    id: l,
                    title: s
                });
            }
        };
    },
    openQzonePublish: function() {
        var t = this, e = function(e) {
            wx.openQzonePublish({
                text: "【" + t.data.title + "】，这个测试太准了，这是我的测试结果，戳这里👉👉https://m.q.qq.com/a/p/1109186361?s=pages%2fcounsel%2findex%2findex%3fscene%3d" + t.data.id + "，快来测测你的吧～",
                media: [ {
                    type: "photo",
                    path: e
                } ]
            });
        };
        n.globalData.result.src ? e(this.data.result_url) : (wx.showLoading({
            title: "加载中..."
        }), wx.downloadFile({
            url: i.replaceQiniuHttps(this.data.result_url),
            success: function(t) {
                e(t.tempFilePath);
            },
            complete: function() {
                wx.hideLoading();
            }
        })), setTimeout(function() {
            wx.pageScrollTo({
                scrollTop: 300,
                duration: 300
            });
        }, 1500);
    },
    save: function(t) {
        var e = this;
        wx.saveImageToPhotosAlbum ? wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function(t) {
                var i = e.data.id, n = e.data.title;
                console.log("id", i), console.log("title", n), wx.reportAnalytics("save_to_album", {
                    id: i,
                    title: n
                }), wx.showToast({
                    title: "保存到相册啦",
                    icon: "success",
                    duration: 1500
                }), setTimeout(function() {
                    "qq_mini" == a.config.AppPlatform || o.get("is_show_kaiping") || (e.setData({
                        animateCss: "weui-animate-fade-in",
                        isShowKaiping: !0
                    }), o.put("is_show_kaiping", 1, 300)), wx.pageScrollTo({
                        scrollTop: 300,
                        duration: 300
                    });
                }, 1500);
            },
            fail: function(e) {
                console.log(e), wx.hideLoading(), wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function(t) {
                        console.log(t);
                    },
                    error: function(e) {
                        i.previewSingalPic(t), console.log(e);
                    },
                    fail: function(e) {
                        i.previewSingalPic(t), console.log(e);
                    }
                });
            }
        }) : i.previewSingalPic(t);
    },
    preview: function(t) {
        i.previewSingalPic(this.data.result_url);
    },
    hideDialog: function() {
        var t = this;
        this.setData({
            animateCss: "weui-animate-fade-out"
        }), setTimeout(function() {
            t.setData({
                hasSave: !1
            });
        }, 300);
    },
    openContact: function() {
        var t = this;
        this.hideDialog(), this.setData({
            showContactMenu: !0,
            guideParams: {
                position: {
                    left: "50%",
                    top: "50%"
                },
                guideSrcs: [ {
                    src: "https://pics.maiyizhi.cn/xinliceshi_" + t.data.ceshiGuanggaoIndex + ".gif",
                    width: "600rpx",
                    height: "474rpx",
                    animation: ""
                } ],
                desText: '在客服会话中回复"' + t.data.ceshiGuanggaoIndex + '"，去测试',
                comfirm: {
                    text: "知道了",
                    type: "contact",
                    sessionFrom: t.data.ceshiGuanggaoIndex
                }
            }
        });
    },
    guideConfirm: function() {
        this.setData({
            showContactMenu: !1
        });
    },
    guanzhu: function(t) {
        var e = this, i = t.detail, a = i.attention_logo, o = i.attention_name, n = i.attention_btn_name;
        this.setData({
            attention_logo: a,
            attention_name: o,
            attention_btn_name: n
        }, function() {
            e.selectComponent("#attention").showtype2();
        });
    }
}));