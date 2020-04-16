var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/user.js")), t = (require("../../wux/wux"), require("../../api.js")), a = require("../../utils/config.js"), i = require("../../utils/util.js"), r = getApp(), o = r.globalData.system_info, d = o.windowWidth, s = o.pixelRatio;

Page({
    data: {
        guanggaoName: a.config.guanggaoName,
        appName: a.config.app_name,
        avatarSize: "?imageView2/2/w/" + Math.ceil(.84 * d * s)
    },
    onLoad: function(e) {
        var a = this;
        wx.showNavigationBarLoading(), wx.showToast({
            title: "加载中……",
            duration: 2e4,
            icon: "loading"
        });
        var i = function(e) {
            var t = e.data, i = e.template, r = e.selfData, o = e.template_id, d = t.map(function(e) {
                return e.result;
            });
            console.log("results", d), 6 == i.type ? wx.setNavigationBarTitle({
                title: "趣味测试"
            }) : 5 == i.type && wx.setNavigationBarTitle({
                title: "心理测试"
            }), a.setData({
                results: d,
                template: i,
                selfData: r.length ? r[0].result : null,
                template_id: o
            }, function() {
                a.setData({
                    isShowRewardedVideoAd: !0
                }), wx.hideNavigationBarLoading(), wx.hideToast();
            });
        };
        e.from_user_id ? t.getTestResultInfo(e.from_user_id, e.template_id, function(e) {
            e.data.forEach(function(e) {
                e.result = JSON.parse(e.result);
            });
            var t = e.data.filter(function(e) {
                return e.result.isSelf;
            }), a = e.data.filter(function(e) {
                return e.result.user_name && !e.result.isSelf;
            });
            e.data = a, e.selfData = t, i(e);
        }) : (console.log("app.globalData.g_testorDatas", r.globalData.g_testorDatas), i(r.globalData.g_testorDatas), 
        r.globalData.g_testorDatas = null), r.globalData.getAdPromise.then(function() {
            a.setData({
                canUseRewardedVideoAd: r.globalData.isSetRewardedVideoAdUnitId && !!wx.createRewardedVideoAd
            });
        });
    },
    onShow: function() {
        i.createInterstitialAd();
    },
    loadedRewardedVideoAd: function() {
        this.videoAdLoaded = !0;
    },
    errorRewardedVideoAd: function() {
        this.isVideoAdError = !0;
    },
    endedRewardedVideoAd: function() {
        this.previewResult();
    },
    pauseRewardedVideoAd: function() {
        this.setData({
            isShowVideoDialog: !0,
            videoContent: "观看完整视频广告，才能查看TA的测试结果哦",
            confirmText: "继续观看"
        });
    },
    continueViewVideo: function() {
        this.selectComponent("#rewardedVideoAd").showRewardedVideoAd();
    },
    viewRewardedVideoAd: function(e) {
        var t = e.currentTarget.dataset.url;
        if (this.testResultUrl = t, r.globalData.isSetRewardedVideoAdUnitId && wx.createRewardedVideoAd && !a.config.test) {
            if (!this.isVideoAdError) return void ("qq_mini" == a.config.AppPlatform ? this.selectComponent("#rewardedVideoAd").showRewardedVideoAd() : this.setData({
                isShowVideoDialog: !0,
                videoContent: "观看视频广告，才能查看TA的测试结果哦",
                confirmText: "确定"
            }));
            this.previewResult();
        } else this.previewResult();
    },
    previewResult: function() {
        wx.previewImage({
            current: this.testResultUrl,
            urls: [ this.testResultUrl ]
        });
    },
    viewSelfTestResult: function() {
        var e = this.data.selfData.url;
        wx.previewImage({
            current: e,
            urls: [ e ]
        });
    },
    onShareAppMessage: function() {
        var t = this.data.template, a = t.avatar, i = t.name, r = t.type, o = void 0;
        return 5 == r ? o = "/pages/counsel/index/index?scene=" + this.data.template_id + "&sharerId=" + e.default.openId : 6 == r && (o = "/pages/zhuangx/list/list?scene=" + this.data.template_id + "&sharerId=" + e.default.openId), 
        {
            title: "" + i,
            path: o,
            imageUrl: a.url,
            generalWebpageUrl: "http://www.maiyizhi.cn/index.php?r=common/index/qqmp"
        };
    }
});