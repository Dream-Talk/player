var a, t = require("../../../wux/wux"), e = require("../../../api.js"), o = require("../../../utils/weCropper"), i = require("../../../utils/util.js"), n = getApp(), s = "has_show_avatar_tiaozhuan_tip", c = n.globalData.system_info.windowWidth, r = c / 375 * .5, l = {
    width: .9 * c / r,
    height: .9 * c / r
}, u = [], h = [], d = [], g = [];

Page(Object.assign({}, {
    data: {
        showDialog: !1,
        avatarCanvasWidth: .9 * c,
        animationData: {},
        backgroundSrc: "",
        isClip: !1,
        showAvatars: !0,
        isCircle: !1,
        cropperOpt: {
            id: "clip",
            width: c,
            height: c,
            scale: 2.5,
            zoom: 8
        },
        trangleUp: 0,
        avatarBoxChild: !1
    },
    onShareAppMessage: function() {
        return console.log(this.data), {
            title: "新年头像、头像加V，快来做个头像吧",
            path: "/pages/facture/index/index",
            generalWebpageUrl: "http://www.maiyizhi.cn/index.php?r=common/index/qqmp"
        };
    },
    showNotification: function() {
        var a = this;
        e.tiaozhuan("zhizuoqi_avatar", function(e) {
            i.tiaozhuan(t.$wuxNotification, a, e, s);
        }, function(a) {});
    },
    toggleDialog: function() {
        this.animation.translateY(0).step({
            duration: 1e3
        }), this.setData({
            animationData: this.animation.export()
        }), this.setData({
            showDialog: !this.data.showDialog
        });
    },
    itemClick: function(a) {
        console.log(a.target.dataset.index), this.setData({
            avatarBoxChild: !0,
            iconList: d[a.target.dataset.index].list
        }), this.toggleDialog(), console.log("animation"), this.animation.translateY(-20).step(), 
        this.setData({
            animationData: this.animation.export()
        });
    },
    avatarBtn: function(a) {
        this.setData({
            avatarBoxChild: !1
        });
    },
    onShow: function() {
        var a = wx.createAnimation({
            duration: 100,
            transformOrigin: "0 0 0",
            timingFunction: "ease"
        });
        this.animation = a, n.globalData.backgroundSrc && this.setData({
            backgroundSrc: n.globalData.backgroundSrc
        }, function() {
            n.globalData.backgroundSrc = "";
        });
    },
    onLoad: function(t) {
        wx.getStorageSync("userInfo");
        a = new i.toucheAction({
            canvasId: "avatar",
            contentItem: u,
            size: l,
            radio: r,
            imageUrls: h
        });
        var n = new o();
        n.cut.width = c, n.cut.height = c, n.cut.x = 0, n.cut.y = 0;
        var p = this.data.cropperOpt, f = this;
        if (void 0 !== t.src) {
            var w = t.src;
            this.setData({
                backgroundSrc: w
            }), f.wecropper.pushOrign(i.replaceQiniuHttps(w));
        } else new o(p).on("ready", function(a) {}).on("beforeImageLoad", function(a) {
            wx.showToast({
                title: "加载中……",
                icon: "loading",
                duration: 2e4
            });
        }).on("imageLoad", function(a) {
            wx.hideToast();
        }).on("beforeDraw", function(a, t) {}).updateCanvas();
        console.log(a), wx.getStorageSync(s) < 4 && console.log("show tiaozhuan"), e.getIcons(function(a) {
            a.splice(2, 1), d = a, g = [];
            for (var t in d) g.push(d[t].avatar);
            f.setData({
                urls: g,
                iconList: d[0].list
            });
        });
    },
    uploadTap: function(a) {
        var t = this;
        this.setData({
            hideCanvas: !1
        }), wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var e = a.tempFilePaths[0];
                t.setData({
                    backgroundSrc: e
                }), t.wecropper.pushOrign(e);
            }
        });
    },
    onHide: function() {
        u = [], h = [], (a = new i.toucheAction({
            canvasId: "avatar",
            contentItem: u,
            size: l,
            radio: r,
            imageUrls: h
        })).drawElements();
    },
    onUnload: function() {
        u = [], h = [], (a = new i.toucheAction({
            canvasId: "avatar",
            contentItem: u,
            size: l,
            radio: r,
            imageUrls: h
        })).drawElements();
    },
    clipTouchStart: function(a) {
        this.wecropper.touchStart(a);
    },
    clipTouchMove: function(a) {
        this.wecropper.touchMove(a);
    },
    clipTouchEnd: function(a) {
        this.wecropper.touchEnd(a);
    },
    uploadOriginalImage: function(a) {
        var t = this;
        wx.chooseImage({
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            count: 1,
            success: function(a) {
                console.log(a.tempFilePaths[0]), t.afterAvatarChoose(a.tempFilePaths[0]);
            }
        });
    },
    afterAvatarChoose: function(a) {
        wx.navigateTo({
            url: "/pages/shenhe/cutInside/cutInside?src=" + a + "&source=6"
        });
    },
    selectAvatar: function(t) {
        this.toggleDialog(), wx.showNavigationBarLoading(), wx.showToast({
            title: "加载中……",
            duration: 2e4,
            icon: "loading"
        }), wx.downloadFile({
            url: i.replaceQiniuHttps(t.currentTarget.dataset.avatarpath),
            success: function(t) {
                console.log(t), wx.hideToast(), wx.hideNavigationBarLoading();
                var e = {
                    type: "image",
                    dx: .9 * c,
                    dy: .9 * c,
                    width: 200,
                    height: 200,
                    value: t.tempFilePath,
                    cancel: 1,
                    isShowSymbol: !0
                };
                h.push(t.tempFilePath), u.push(e), console.log("toucheAction", a);
                var o = a.calculateW_H(u[u.length - 1]);
                a.setParams(o.w, o.h, u.length - 1), a.drawElements();
            }
        });
    },
    avatarTouchStart: function(t) {
        a.touchStart(t);
    },
    avatarTouchMove: function(t) {
        a.touchMove(t);
    },
    avatarTouchEnd: function() {
        a.touchEnd();
    },
    closeAvatar: function(t) {
        a.touchStart(t);
    },
    changeSqu: function(a) {
        this.setData({
            isCircle: !1
        });
    },
    changeCircle: function(a) {
        this.setData({
            isCircle: !0
        });
    },
    scanImage: function(t) {
        console.log(a);
        var e = this;
        u.forEach(function(a, t, e) {
            u[t].isShowSymbol = !1;
        });
        this.data.isCircle ? this.data.isCircle && a.drawElements({
            circle: {
                x: .5 * c * .9,
                y: .5 * c * .9,
                R: .5 * c * .9
            },
            src: e.data.backgroundSrc
        }, e.callBack) : a.drawElements({
            rectangle: !0,
            src: e.data.backgroundSrc
        }, e.callBack);
    },
    callBack: function() {
        wx.canvasToTempFilePath({
            canvasId: "avatar",
            success: function(t) {
                console.log(t.tempFilePath), wx.navigateTo({
                    url: "/pages/shenhe/preview/preview?pic=" + encodeURIComponent(t.tempFilePath) + "&title=做个头像、趣味换脸、大头贴、变妆、美妆、圣诞帽、圣诞头像&path=" + encodeURIComponent("/pages/facture/index/index")
                }), u = [], h = [], (a = new i.toucheAction({
                    canvasId: "avatar",
                    contentItem: u,
                    size: l,
                    radio: r,
                    imageUrls: h
                })).drawElements();
            }
        });
    },
    getUserInfo: function(a) {
        var e = this, o = function() {
            t.$wuxDialog.confirm({
                title: "请求授权",
                content: "获得你的公开信息（昵称，头像等）",
                share: !0,
                onConfirm: function(t) {
                    if (console.log(t), t.detail.userInfo) {
                        if (t.detail.userInfo.avatarUrl) {
                            var o = /\/\d+$/g;
                            t.detail.userInfo.avatarUrl = t.detail.userInfo.avatarUrl.replace(o, "/0");
                        }
                        wx.setStorage({
                            key: "userInfo",
                            data: t.detail.userInfo
                        }), e.setData({
                            hideCanvas: !1
                        }), a(t.detail.userInfo);
                    } else e.uploadTap();
                },
                onCancel: function(a) {
                    e.uploadTap();
                }
            });
        };
        wx.getStorage({
            key: "userInfo",
            success: function(t) {
                console.log(t.data), t.data ? a(t.data) : (e.setData({
                    hideCanvas: !0
                }), o());
            },
            fail: function() {
                e.setData({
                    hideCanvas: !0
                }), o();
            }
        });
    }
}));