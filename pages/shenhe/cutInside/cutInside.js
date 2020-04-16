var o, e, a, t = getApp(), i = require("../../../utils/weCropper"), n = require("../../../api.js"), r = require("../../../utils/util.js"), s = [ "裁剪", "生成换脸照", "生成大头贴", "生成美妆照", "生成滤镜照", "生成变妆照", "生成头像" ], c = wx.getSystemInfoSync(), d = c.windowWidth, g = c.windowHeight, l = ((g - d) / 2 - 50) / 2 + 50 - 15, w = (g - d) / 2 - 50;

Page(Object.assign({}, {
    data: {
        remindBottom: l,
        remidHeight: w,
        name: "",
        cropperOpt: {
            id: "cropper",
            width: c.windowWidth,
            height: d,
            scale: 2.5,
            zoom: 8
        }
    },
    touchStart: function(o) {
        this.wecropper.touchStart(o);
    },
    touchMove: function(o) {
        this.wecropper.touchMove(o);
    },
    touchEnd: function(o) {
        this.wecropper.touchEnd(o);
    },
    getCropperImage: function(i) {
        var s = this;
        this.wecropper.getCropperImage(function(i) {
            if (i) if (6 == parseInt(e)) t.globalData.backgroundSrc = i, wx.navigateBack(); else {
                var c = s;
                wx.showNavigationBarLoading(), wx.showToast({
                    title: "上传中……",
                    duration: 2e4,
                    icon: "loading"
                }), upload.uploadSingleB({
                    path: i,
                    state: 1
                }, "touxiang_picture_", function(i) {
                    if (console.log(i), n.checkImage(i.url, function() {}), i) {
                        switch (wx.showNavigationBarLoading(), wx.showToast({
                            title: "处理中……",
                            duration: 2e4,
                            icon: "loading"
                        }), parseInt(e)) {
                          case 1:
                            n.bianLian(i.url, o, function(o) {
                                wx.setStorageSync("remoteImage", i.url), wx.hideNavigationBarLoading(), wx.hideToast(), 
                                r.downloadAndPreview(o.url, "这个可以换脸的小程序太好玩了", "/pages/zhuangx/list/list?type=2", "生成中...");
                            }, function(o) {
                                console.log(o), t.globalData.showLoading = !1, wx.hideNavigationBarLoading(), wx.hideToast(), 
                                c.showZanToast(o), setTimeout(function() {
                                    wx.navigateBack();
                                }, 2e3);
                            });
                            break;

                          case 2:
                            n.sticker(i.url, o, function(o) {
                                wx.setStorageSync("remoteImage", i.url), wx.hideNavigationBarLoading(), wx.hideToast(), 
                                r.downloadAndPreview(o.url, "来做张大头贴吧？", "/pages/datoutie/edit/edit", "生成中...");
                            }, function(o) {
                                console.log(o), t.globalData.showLoading = !1, wx.hideNavigationBarLoading(), wx.hideToast(), 
                                c.showZanToast(o), setTimeout(function() {
                                    wx.navigateBack();
                                }, 2e3);
                            });
                            break;

                          case 3:
                            n.cosmetic(i.url, o, function(o) {
                                wx.setStorageSync("remoteImage", i.url), wx.hideNavigationBarLoading(), wx.hideToast(), 
                                r.downloadAndPreview(o.url, "日系妆、韩妆、裸妆、主题妆...您想要的都在这里！", "/pages/cosmetic/edit/edit", "生成中...");
                            }, function(o) {
                                console.log("showLoading", t.globalData.showLoading), t.globalData.showLoading = !1, 
                                wx.hideNavigationBarLoading(), wx.hideToast(), c.showZanToast(o), setTimeout(function() {
                                    wx.navigateBack();
                                }, 2e3);
                            });
                            break;

                          case 4:
                            n.peopleFilter(i.url, o, a, function(o) {
                                wx.setStorageSync("remoteImage", i.url), wx.hideNavigationBarLoading(), wx.hideToast(), 
                                r.downloadAndPreview(o.url, "想要人脸滤镜效果，有我so easy！", "/pages/peopleFilter/edit/edit", "生成中...");
                            }, function(o) {
                                console.log(o), t.globalData.showLoading = !1, wx.hideNavigationBarLoading(), wx.hideToast(), 
                                c.showZanToast(o), setTimeout(function() {
                                    wx.navigateBack();
                                }, 2e3);
                            });
                            break;

                          case 5:
                            n.decoration(i.url, o, function(o) {
                                wx.setStorageSync("remoteImage", i.url), wx.hideNavigationBarLoading(), wx.hideToast(), 
                                r.downloadAndPreview(o.url, "快来玩人脸变妆吧", "/pages/decoration/edit/edit", "生成中...");
                            }, function(o) {
                                console.log(o), t.globalData.showLoading = !1, wx.hideNavigationBarLoading(), wx.hideToast(), 
                                c.showZanToast(o), setTimeout(function() {
                                    wx.navigateBack();
                                }, 2e3);
                            });
                        }
                    } else c.showZanToast("上传失败，请稍后再试呢");
                });
            } else console.log("获取图片失败，请稍后重试");
        });
    },
    onLoad: function(t) {
        var n = t.src;
        o = t.model, e = t.source, a = t.type, console.log(a), this.setData({
            name: s[e]
        });
        var r = this.data.cropperOpt;
        new i(r).on("ready", function(o) {
            console.log("wecropper is ready for work!");
        }).on("beforeImageLoad", function(o) {
            console.log("before picture loaded, i can do something"), console.log("current canvas context:", o), 
            wx.showToast({
                title: "上传中……",
                icon: "loading",
                duration: 2e4
            });
        }).on("imageLoad", function(o) {
            console.log("picture loaded"), console.log("current canvas context:", o), wx.hideToast();
        }), this.wecropper.pushOrign(n);
    }
}));