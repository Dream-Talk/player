var t = require("../../api.js"), a = require("../../utils/config.js"), e = require("../../utils/util.js"), n = getApp();

Page({
    data: {
        nonet: !1,
        name: a.config.app_name,
        number: [ 795, 75, 149, 156, 146, 85, 76, 71, 68, 46, 58, 81, 62, 74, 63, 39, 32, 46, 60, 71, 53, 79, 57, 37, 80, 68 ],
        shenhe: n.globalData.shenhe,
        guanggaoName: a.config.guanggaoName
    },
    tiaozhuan: function(t) {
        console.log("tiaozhuan"), t.currentTarget.dataset.preview ? e.previewSingalPic(t.currentTarget.dataset.preview) : wx.navigateToMiniProgram && (console.log(t.currentTarget.dataset), 
        t.currentTarget.dataset.url ? wx.navigateToMiniProgram({
            appId: t.currentTarget.dataset.appid,
            path: t.currentTarget.dataset.url
        }) : wx.navigateToMiniProgram({
            appId: t.currentTarget.dataset.appid
        }));
    },
    initPage: function() {
        var e = this;
        wx.showNavigationBarLoading(), wx.showToast({
            title: "Loading……",
            duration: 2e3,
            icon: "loading"
        }), t.getQQTuijian(function(t) {
            console.log("res", t), wx.stopPullDownRefresh(), wx.hideToast(), wx.hideNavigationBarLoading(), 
            e.setData({
                tuijian: t.tuijian.filter(function(t) {
                    return t.app != a.config.app_name;
                }),
                others: t.others,
                nonet: !1
            });
        }, function() {
            wx.stopPullDownRefresh(), wx.hideToast(), wx.hideNavigationBarLoading(), e.setData({
                nonet: !0
            });
        });
    },
    onPullDownRefresh: function() {
        this.initPage();
    },
    onLoad: function(t) {
        this.initPage(), wx.hideTabBarRedDot({
            index: 2
        });
    },
    onShow: function() {
        e.createInterstitialAd();
    },
    guanzhu: function(t) {
        var a = this, e = "", n = "", i = "";
        t.detail.hasOwnProperty("attention_logo") && (e = t.detail.attention_logo, n = t.detail.attention_name, 
        i = t.detail.attention_btn_name), this.setData({
            attention_logo: e,
            attention_name: n,
            attention_btn_name: i
        }, function() {
            a.selectComponent("#attention").showtype2();
        });
    },
    navigateToWebview: function(t) {
        wx.navigateTo({
            url: "/pages/webview/webview?from=ad&url=" + encodeURIComponent(t.currentTarget.dataset.path)
        });
    }
});