var e, t, i, o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/user")), n = (require("../../wux/wux"), require("../../api.js")), a = require("../../utils/util.js"), s = (require("../../utils/upload.js"), 
require("../../utils/config.js")), r = (require("../../utils/wcache.js"), getApp());

Page(Object.assign({}, {
    data: {
        AppPlatform: s.config.AppPlatform,
        canIUseOpenSetting: wx.canIUse("button.open-type.openSetting"),
        guanggaoName: s.config.guanggaoName,
        appName: s.config.app_name,
        canOpenQzonePublish: !!wx.openQzonePublish
    },
    save: function(o) {
        wx.showLoading({
            title: "保存中"
        }), console.log("e", o), o.detail.formId && a.dealFormIds(o.detail.formId);
        wx.saveImageToPhotosAlbum ? wx.saveImageToPhotosAlbum({
            filePath: e,
            success: function(e) {
                wx.reportAnalytics("save_to_album", {
                    id: i,
                    title: t
                }), wx.showToast({
                    title: "保存到相册啦",
                    icon: "success",
                    duration: 1500
                }), setTimeout(function() {
                    wx.pageScrollTo({
                        scrollTop: 300,
                        duration: 300
                    });
                }, 1500);
            },
            fail: function(t) {
                wx.hideLoading(), console.log(t), wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function(e) {
                        console.log(e);
                    },
                    error: function(t) {
                        a.previewSingalPic(e), console.log(t);
                    },
                    fail: function(t) {
                        a.previewSingalPic(e), console.log(t);
                    }
                });
            }
        }) : a.previewSingalPic(e);
    },
    preview: function(t) {
        a.previewSingalPic(e);
    },
    onShareAppMessage: function() {
        if (o.default.userInfo) var e = o.default.userInfo, a = e.user_avatar, s = e.user_name;
        var r = {
            isSelf: !0,
            url: this.remoteUrl,
            user_avatar: a || "",
            user_name: s || ""
        };
        return n.addTestResult(o.default.openId, i, JSON.stringify(r), function() {}, function() {}), 
        setTimeout(function() {
            wx.pageScrollTo({
                scrollTop: 300,
                duration: 300
            });
        }, 1500), {
            title: "《" + t + "》,这个测试太准了",
            path: "/pages/zhuangx/list/list?scene=" + i + "&sharerId=" + o.default.openId,
            imageUrl: this.avatar,
            generalWebpageUrl: "http://www.maiyizhi.cn/index.php?r=common/index/qqmp"
        };
    },
    openQzonePublish: function() {
        wx.openQzonePublish({
            text: "【" + t + "】，这个测试太准了，这是我的测试结果，戳这里👉👉https://m.q.qq.com/a/p/1109186361?s=pages%2fzhuangx%2flist%2flist%3fscene%3d" + i + "，快来测测你的吧～",
            media: [ {
                type: "photo",
                path: e
            } ]
        }), setTimeout(function() {
            wx.pageScrollTo({
                scrollTop: 300,
                duration: 300
            });
        }, 1500);
    },
    onLoad: function(o) {
        var n = this;
        wx.showToast({
            title: "加载中",
            duration: 2e4,
            icon: "loading"
        }), r.globalData.showTuijian = !0;
        var s = r.globalData.g_resultInfo;
        this.remoteUrl = s.remoteUrl, this.avatar = s.avatar, e = s.pic, t = s.title, i = s.templateId, 
        r.globalData.g_resultInfo = null, console.log("pic", e), wx.getImageInfo({
            src: e,
            success: function(t) {
                var i = a.getSize(t.width, t.height, 400, wx.getSystemInfoSync());
                n.setData({
                    pic_url: e,
                    width: i.width,
                    height: i.height
                }, function() {});
            }
        }), wx.getSetting({
            success: function(e) {
                !1 === e.authSetting["scope.writePhotosAlbum"] && n.setData({
                    authSettingScopeWritePhotosAlbum: !0
                });
            }
        });
    },
    onShow: function() {
        this.getList(5), a.createInterstitialAd();
    },
    loadImage: function() {
        wx.hideToast();
    },
    viewRewardedVideoAd: function() {
        r.globalData.isSetRewardedVideoAdUnitId && wx.createRewardedVideoAd && !s.config.test && (this.isVideoAdError || (console.log("99999999"), 
        this.setData({
            isShowVideoDialog: !0,
            videoContent: "观看视频广告，即可查看结果详情哦～",
            confirmText: "看12秒视频"
        })));
    },
    loadedRewardedVideoAd: function() {
        this.videoAdLoaded = !0;
    },
    errorRewardedVideoAd: function() {
        this.isVideoAdError = !0;
    },
    endedRewardedVideoAd: function() {
        var e = this;
        "qq_mini" == s.config.AppPlatform && setTimeout(function() {
            e.setData({
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
        var e = this;
        n.getCeshiGuanggao("ceshi_guanggao", function(t) {
            console.log("ceshi_guanggao", t), e.ceshiGuanggao = t;
        }, function() {
            console.log("no ceshi_guanggao");
        });
    },
    openSetting: function(t) {
        t.detail.authSetting["scope.writePhotosAlbum"] ? (this.save(t), this.setData({
            authSettingScopeWritePhotosAlbum: !1
        })) : a.previewSingalPic(e);
    },
    getList: function(e) {
        var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        n.getRandomTemplate(6, e, i, function(e) {
            console.log("getRandomTemplate", e), t.setData({
                list: e.user
            });
        });
    },
    refreshList: function() {
        this.getList(5, 1);
    },
    selectTemplate: function(e) {
        wx.reportAnalytics("result_to_more", {}), r.globalData.showTuijian = "";
        var t = e.currentTarget.dataset, i = t.id, o = t.path;
        o ? wx.redirectTo({
            url: o
        }) : wx.redirectTo({
            url: "/pages/zhuangx/edit/edit?scene=" + i
        });
    },
    hideDialog: function() {
        var e = this;
        this.setData({
            animateCss: "weui-animate-fade-out"
        }), setTimeout(function() {
            e.setData({
                hasSave: !1
            });
        }, 300);
    },
    openContact: function() {
        var e = this;
        this.hideDialog(), this.setData({
            showContactMenu: !0,
            guideParams: {
                position: {
                    left: "50%",
                    top: "50%"
                },
                guideSrcs: [ {
                    src: "https://pics.maiyizhi.cn/xinliceshi_" + e.data.ceshiGuanggaoIndex + ".gif",
                    width: "600rpx",
                    height: "474rpx",
                    animation: ""
                } ],
                desText: '在客服会话中回复"' + e.data.ceshiGuanggaoIndex + '"，去测试',
                comfirm: {
                    text: "知道了",
                    type: "contact",
                    sessionFrom: e.data.ceshiGuanggaoIndex
                }
            }
        });
    },
    guideConfirm: function() {
        this.setData({
            showContactMenu: !1
        });
    },
    guanzhu: function(e) {
        var t = this, i = e.detail, o = i.attention_logo, n = i.attention_name, a = i.attention_btn_name;
        this.setData({
            attention_logo: o,
            attention_name: n,
            attention_btn_name: a
        }, function() {
            t.selectComponent("#attention").showtype2();
        });
    }
}));