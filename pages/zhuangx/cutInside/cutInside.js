require("../../../api.js");

var o = require("../../../utils/weCropper"), e = getApp(), t = wx.getSystemInfoSync().windowWidth;

Page({
    data: {
        cropperOpt: {
            id: "cropper",
            width: t,
            height: t,
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
    getCropperImage: function() {
        this.wecropper.getCropperImage(function(o) {
            o ? (console.log(o), wx.setStorage({
                key: "zhuangx_clipImageUrl",
                data: o,
                complete: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            })) : console.log("获取图片地址失败，请稍后重试");
        });
    },
    uploadTap: function() {
        var o = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var t = e.tempFilePaths[0];
                o.wecropper.pushOrign(t);
            }
        });
    },
    onReady: function() {
        var o = wx.getSystemInfoSync().windowHeight, e = ((o - t) / 2 - 50) / 2 + 50 - 10, n = (o - t) / 2 - 50;
        this.setData({
            remindBottom: e,
            remidHeight: n
        });
    },
    onLoad: function(e) {
        console.log("options.width", e.width), console.log("options.height", e.height);
        var n = e.width / e.height;
        if (n < 1) var c = (i = t) * n; else var i = (c = t - 30) / n;
        var r = new o();
        r.cut.width = c, r.cut.height = i, r.cut.x = (t - c) / 2, r.cut.y = (t - i) / 2;
        var a = this.data.cropperOpt, s = this;
        new o(a).on("ready", function(o) {
            s.wecropper.pushOrign(e.src), console.log("wecropper is ready for work!");
        }).on("beforeImageLoad", function(o) {
            console.log("before picture loaded, i can do something"), console.log("current canvas context:", o), 
            wx.showToast({
                title: "上传中……",
                icon: "loading",
                duration: 2e4
            });
        }).on("imageLoad", function(o) {
            console.log("picture loaded"), console.log("current canvas context:", o), wx.hideToast();
        }).on("beforeDraw", function(o, e) {
            console.log("before canvas draw,i can do something"), console.log("current canvas context:", o);
        });
    },
    onUnload: function() {
        e.globalData.g_isChoosingImage = !0;
    }
});