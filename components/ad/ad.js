var t = require("../../api.js"), e = getApp();

Component({
    properties: {
        name: {
            type: String,
            value: "",
            observer: function(t, e) {
                console.log("newValue", t), this.getAd(t);
            }
        },
        width: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: ""
        },
        page: {
            type: String,
            value: ""
        }
    },
    externalClasses: [ "ad", "haowan", "kaiping", "guanzhu" ],
    data: {
        add: {},
        windowWidth: e.globalData.system_info.windowWidth
    },
    methods: {
        getAd: function(i) {
            var a = this;
            e.globalData.getAdPromise.then(function() {
                t.getAd(i, function(t) {
                    var e = JSON.parse(t.content);
                    if (console.log("getAd", e), console.log("type", a.data.type), console.log("page", a.data.page), 
                    e[a.data.type]) {
                        var i = e[a.data.type][a.data.page];
                        if (i) if ("rewardedVideoAd" != i.type) {
                            var o = null;
                            if (i.length) if ("kaiping" == a.data.type && i.forEach(function(t, e) {
                                "interstitialAd" == t.type && (o = t, i.splice(e, 1));
                            }), i.length) n = i[Math.floor(Math.random() * i.length)]; else n = o; else var n = i;
                            if (console.log("_ad", o), console.log("ad", n), a.createInterstitialAd(o || n), 
                            "appbox" == n.type && a.createAppBox(n), n.pic && n.pic.width) {
                                console.log("width", a.data.width);
                                var d = a.data.width;
                                if (d) s = (r = d) * (n.pic.height / n.pic.width); else var r = n.pic.width, s = n.pic.height;
                                a.setData({
                                    adWidth: r,
                                    adHeight: s,
                                    ad: n
                                });
                            } else a.setData({
                                ad: n
                            });
                        } else a.createRewardedVideoAd(i.adUnitId);
                    }
                }, function(t) {
                    console.log("res", t);
                });
            });
        },
        tiaozhuan: function(t) {
            var e = t.currentTarget.dataset.preview;
            e && wx.previewImage({
                current: e,
                urls: [ e ]
            }), this.clickAd();
        },
        navigateToWebview: function(t) {
            wx.navigateTo({
                url: "/pages/webview/webview?from=ad&url=" + encodeURIComponent(t.currentTarget.dataset.path)
            }), this.clickAd();
        },
        openContact: function() {
            var t = this.data.ad, e = t.attention_logo, i = t.attention_name, a = t.attention_btn_name;
            this.triggerEvent("openContact", {
                attention_logo: e,
                attention_name: i,
                attention_btn_name: a
            }), this.clickAd();
        },
        hideKaiping: function() {
            "kaiping" == this.data.type && this.setData({
                isHideKaiping: !0
            });
        },
        clickAd: function() {
            this.hideKaiping(), wx.canIUse("reportAnalytics") && wx.reportAnalytics("click_ad", {
                adtype: this.data.type,
                appid: this.data.ad.appid,
                page: this.data.page,
                adname: this.data.type + "_" + this.data.ad.appid
            });
        },
        createInterstitialAd: function(t) {
            if ("interstitialAd" == t.type && wx.createInterstitialAd) {
                var e = wx.createInterstitialAd({
                    adUnitId: t["unit-id"]
                });
                e.onLoad(function() {
                    e.show().catch(function(t) {
                        return console.log("interstitialAd_err", t);
                    });
                });
            }
        },
        createAppBox: function(t) {
            var e = this;
            wx.createAppBox && (this.AppBox && this.AppBox.destroy(), this.AppBox = wx.createAppBox({
                adUnitId: t["unit-id"]
            }), this.AppBox.load().then(function(t) {
                console.log("appBoxLoad", t), e.setData({
                    isShowAppBox: !0
                });
            }).catch(function(t) {
                console.log("createAppBox", t);
            }));
        },
        openAppBox: function() {
            this.AppBox.show().then(function(t) {
                console.log("AppBoxShow", t);
            }).catch(function(t) {
                console.log("openAppBox", t);
            });
        },
        createRewardedVideoAd: function(t) {
            var e = this;
            wx.createRewardedVideoAd && (this.videoAd = wx.createRewardedVideoAd({
                adUnitId: t
            }), this.videoAd.load(), this.videoAd.onLoad(function() {
                console.log("videoAd_onLoad"), e.triggerEvent("loadsuccess", {});
            }), this.videoAd.onError(function(t) {
                console.log("videoAd_erro", t), e.triggerEvent("error", {});
            }), this.videoAd.onClose(function(t) {
                console.log("videoAd_status", t), t && t.isEnded || void 0 === t ? e.triggerEvent("ended", {}) : e.triggerEvent("noended", {});
            }));
        },
        showRewardedVideoAd: function() {
            var t = this;
            wx.showToast({
                title: "加载中...",
                icon: "loading",
                duration: 3e3
            }), this.videoAd.show().then(function() {
                return wx.hideToast();
            }).catch(function(e) {
                t.videoAd.load().then(function() {
                    return t.videoAd.show().then(function() {
                        return wx.hideToast();
                    });
                }).catch(function(e) {
                    wx.hideToast(), t.triggerEvent("error", {});
                });
            });
        }
    }
});