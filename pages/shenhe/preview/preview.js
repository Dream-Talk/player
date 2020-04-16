var e, o, i, n, t, a = require("../../../utils/util.js"), s = getApp();

Page(Object.assign({}, {
    data: {},
    save: function(e) {
        console.log("e", e);
        wx.saveImageToPhotosAlbum ? wx.saveImageToPhotosAlbum({
            filePath: i,
            success: function(e) {
                wx.showToast({
                    title: "保存到相册啦",
                    icon: "success",
                    duration: 2e3
                });
            },
            fail: function(e) {
                console.log(e), wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function(e) {
                        console.log(e);
                    },
                    error: function(e) {
                        a.previewSingalPic(i), console.log(e);
                    },
                    fail: function(e) {
                        a.previewSingalPic(i), console.log(e);
                    }
                });
            }
        }) : a.previewSingalPic(i);
    },
    preview: function(e) {
        a.previewSingalPic(i);
    },
    onShareAppMessage: function() {
        return {
            title: n,
            path: t,
            imageUrl: i,
            generalWebpageUrl: "http://www.maiyizhi.cn/index.php?r=common/index/qqmp"
        };
    },
    dashang: function() {
        wx.navigateToMiniProgram({
            appId: "wx18a2ac992306a5a4",
            path: "pages/apps/largess/detail?accountId=3300"
        });
    },
    select: function(e) {
        console.log("e", e);
    },
    onLoad: function(a) {
        s.globalData.system_info = wx.getSystemInfoSync();
        var c = this;
        i = decodeURIComponent(a.pic), n = a.title, t = decodeURIComponent(a.path);
        var l = s.globalData.system_info.windowHeight / s.globalData.system_info.windowWidth * 750;
        wx.getImageInfo({
            src: i,
            success: function(n) {
                console.log(n.width), console.log(n.height), console.log(l), o = l - 530, e = n.width / n.height * o, 
                c.setData({
                    pic_url: i,
                    height: o,
                    width: e
                });
            }
        });
    },
    goTuijian: function() {
        wx.navigateTo({
            url: "/pages/tuijian/tuijian"
        });
    }
}));