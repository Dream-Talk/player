(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/christmas/index" ], {
    "0440": function(t, e, a) {
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = i(a("f47e")), n = i(a("94f5")), o = [], c = 1, r = !0, l = 0, h = getApp(), u = new n.default(), d = {
                data: function() {
                    return {
                        showimg: "",
                        showimgtype: "own",
                        userinfo: {
                            nickName: "",
                            avatarUrl: ""
                        },
                        itemList: [],
                        needlogin: !0,
                        sideness: !1,
                        hatlist: [],
                        tempFilePath: "",
                        hatlistlength: 0,
                        starticon: {
                            x: 0,
                            y: 0
                        },
                        resultimg: "",
                        videoAd: "",
                        shareAppImage: ""
                    };
                },
                onLoad: function() {
                    s.default.Page.init();
                    var e = t.getStorageSync("userinfo") ? t.getStorageSync("userinfo") : {
                        nickName: "",
                        avatarUrl: ""
                    };
                    this.userinfo = e, e.avatarUrl && (this.needlogin = !1, this.showimg = e.avatarUrl.replace("/132", "0")), 
                    this.getlist();
                },
                components: {
                    ImageCropper: function() {
                        return a.e("components/invinbg-image-cropper/invinbg-image-cropper").then(a.bind(null, "c0e6"));
                    }
                },
                onShareAppMessage: function() {
                    return {
                        title: h.globalData.christmas.sharetitle,
                        imageUrl: h.globalData.christmas.sharebanner,
                        path: "pages/christmas/index"
                    };
                },
                methods: {
                    changhat: function(e, a) {
                        var i = this;
                        console.log("qqqq"), e.lock ? u.useQQAd(this.videoAd).then(function(s) {
                            if (s) {
                                o = [], c = 1, r = !0, l = 0, i.hatlist[a].lock = 0;
                                var n = t.getStorageSync("unlockhatlist") ? t.getStorageSync("unlockhatlist") : [];
                                n.push(e.id), t.setStorageSync("unlockhatlist", n), i.setDropItem({
                                    url: "https://ssl-uploads-admin.cdn.itwlw.com/" + e.path
                                });
                            } else t.showToast({
                                title: "需要看完视频解锁圣诞帽"
                            });
                        }).catch(function() {
                            o = [], c = 1, r = !0, l = 0, i.setDropItem({
                                url: "https://ssl-uploads-admin.cdn.itwlw.com/" + e.path
                            });
                        }) : (o = [], c = 1, r = !0, l = 0, this.setDropItem({
                            url: "https://ssl-uploads-admin.cdn.itwlw.com/" + e.path
                        }));
                    },
                    getlist: function() {
                        var e = this;
                        t.request({
                            url: "https://mp.itwlw.com/index.php/Wxapp/CommonApi/getChristmasHatconfig",
                            data: {
                                appid: h.globalData.appid,
                                scene: h.globalData.scene,
                                ver: h.globalData.ver
                            },
                            success: function(a) {
                                console.log(a), e.hatlist = a.data.hatlist, e.hatlistlength = a.data.hatlist.length;
                                var i = t.getStorageSync("unlockhatlist") ? t.getStorageSync("unlockhatlist") : [];
                                e.hatlist.forEach(function(t, e) {
                                    -1 != i.indexOf(t.id) && (t.lock = 0);
                                }), e.showimg && !e.needlogin && e.setDropItem({
                                    url: "https://ssl-uploads-admin.cdn.itwlw.com/" + a.data.hatlist[0].path
                                }), h.globalData.christmas.sharebanner = "https://ssl-uploads-admin.cdn.itwlw.com/" + a.data.sharebanner, 
                                h.globalData.christmas.adUnitId = a.data.adUnitId, h.globalData.christmas.hasAd = a.data.hasAd, 
                                h.globalData.christmas.pagecontent = a.data.pagecontent, h.globalData.christmas.sharetitle = a.data.sharetitle, 
                                h.globalData.christmas.shuoshuo = a.data.shuoshuo, h.globalData.christmas.qrcode = "https://ssl-uploads-admin.cdn.itwlw.com/" + a.data.qrcode;
                                try {
                                    e.videoAd = wx.createRewardedVideoAd({
                                        adUnitId: a.data.adUnitId
                                    });
                                } catch (t) {}
                                e.videoAd && e.videoAd.onError(function(t) {
                                    e.videoErr = !0;
                                });
                            }
                        });
                    },
                    bgmove: function() {
                        return !1;
                    },
                    movelist: function() {},
                    getUserInfo: function(e) {
                        e.detail && e.detail.userInfo && (h.globalData.user = {
                            nickName: e.detail.userInfo.nickName,
                            avatarUrl: e.detail.userInfo.avatarUrl,
                            verify: 0
                        }, t.setStorageSync("user", h.globalData.user), t.setStorageSync("userinfo", {
                            nickName: e.detail.userInfo.nickName,
                            avatarUrl: e.detail.userInfo.avatarUrl
                        }), this.showimg = e.detail.userInfo.avatarUrl.replace("/132", "/0"), this.needlogin = !1, 
                        this.setDropItem({
                            url: "https://ssl-uploads-admin.cdn.itwlw.com/" + this.hatlist[0].path
                        }));
                    },
                    drawimg: function(e) {
                        var a = this;
                        t.showLoading({
                            title: "正在生成新头像"
                        });
                        var i = t.createCanvasContext("header"), s = t.getSystemInfoSync();
                        console.log(s), t.getImageInfo({
                            src: this.showimg,
                            success: function(s) {
                                if (a.sideness) i.drawImage(s.path, 0, 0, 640, 640), i.translate(2.5 * a.itemList[0].x, 2.5 * a.itemList[0].y), 
                                i.rotate(-(360 - a.itemList[0].rotate) * Math.PI / 180), i.drawImage(a.itemList[0].path, -a.itemList[0].width * a.itemList[0].scale * 2.5 / 2, -a.itemList[0].height * a.itemList[0].scale * 2.5 / 2, a.itemList[0].width * a.itemList[0].scale * 2.5, a.itemList[0].height * a.itemList[0].scale * 2.5), 
                                i.rotate((360 - a.itemList[0].rotate) * Math.PI / 180), i.translate(-2.5 * a.itemList[0].x, -2.5 * a.itemList[0].y); else {
                                    i.fillStyle = "#ffffff", i.fillRect(0, 0, 640, 640), i.stroke(), i.beginPath(), 
                                    i.save();
                                    i.arc(320, 320, 320, 0, 2 * Math.PI), i.stroke(), i.clip(), i.drawImage(s.path, 0, 0, 640, 640), 
                                    i.translate(2.5 * a.itemList[0].x, 2.5 * a.itemList[0].y), i.rotate(-(360 - a.itemList[0].rotate) * Math.PI / 180), 
                                    i.drawImage(a.itemList[0].path, -a.itemList[0].width * a.itemList[0].scale * 2.5 / 2, -a.itemList[0].height * a.itemList[0].scale * 2.5 / 2, a.itemList[0].width * a.itemList[0].scale * 2.5, a.itemList[0].height * a.itemList[0].scale * 2.5), 
                                    i.rotate((360 - a.itemList[0].rotate) * Math.PI / 180), i.translate(-2.5 * a.itemList[0].x, -2.5 * a.itemList[0].y), 
                                    i.restore(), i.closePath();
                                }
                                i.draw(!1, function() {
                                    setTimeout(function() {
                                        qq.canvasToTempFilePath({
                                            x: 0,
                                            y: 0,
                                            width: 640,
                                            height: 640,
                                            destWidth: 640,
                                            destHeight: 640,
                                            canvasId: "header",
                                            success: function(i) {
                                                a.resultimg = i.tempFilePath, t.getImageInfo({
                                                    src: a.resultimg,
                                                    success: function(i) {
                                                        console.log(i);
                                                        var s = t.createCanvasContext("headersmall");
                                                        s.drawImage(i.path, 0, 0, i.width, i.height, 0, 0, 320, 320), s.draw(!1, function() {
                                                            setTimeout(function() {
                                                                qq.canvasToTempFilePath({
                                                                    x: 0,
                                                                    y: 0,
                                                                    width: 320,
                                                                    height: 320,
                                                                    destWidth: 640,
                                                                    destHeight: 640,
                                                                    canvasId: "headersmall",
                                                                    success: function(i) {
                                                                        a.resultimg = i.tempFilePath, t.getImageInfo({
                                                                            src: a.resultimg,
                                                                            success: function(t) {
                                                                                console.log(t), e && e();
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }, 500);
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }, 500);
                                });
                            }
                        });
                    },
                    confirm: function(t) {
                        this.tempFilePath = "", this.showimg = t.detail.tempFilePath;
                    },
                    cancel: function() {
                        this.tempFilePath = "";
                    },
                    start: function(t) {
                        console.log(t.currentTarget.offsetLeft, "start"), this.starticon.x = t.currentTarget.offsetLeft, 
                        this.starticon.y = t.currentTarget.offsetTop, console.log(t.currentTarget.offsetTop, "start");
                    },
                    selectHideImg: function() {
                        var e = this;
                        t.chooseImage({
                            count: 1,
                            sizeType: [ "original", "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(t) {
                                console.log(t);
                                var a = t.tempFilePaths[0];
                                e.tempFilePath = a;
                            }
                        });
                    },
                    previewImg: function() {
                        var e = this;
                        this.drawimg(function() {
                            t.hideLoading(), t.navigateTo({
                                url: "/pages/christmas/result?sideness=" + e.sideness + "&path=" + e.resultimg
                            });
                        });
                    },
                    setDropItem: function(t) {
                        var e = this, a = {};
                        wx.getImageInfo({
                            src: t.url,
                            success: function(i) {
                                a.width = 80, a.height = 80 * i.height / i.width, a.image = t.url, a.path = i.path, 
                                a.id = ++c, a.top = 0, a.left = 0, a.x = a.left + a.width / 2, a.y = a.top + a.height / 2, 
                                a.scale = 1, a.oScale = 1, a.rotate = 1, a.active = !1, console.log(a), o[0] = a, 
                                e.itemList = [].concat(o);
                            }
                        });
                    },
                    WraptouchStart: function(t) {
                        for (var e = 0; e < o.length; e++) o[e].active = !1, t.currentTarget.dataset.id == o[e].id && (l = e, 
                        o[l].active = !0);
                        this.itemList = [].concat(o), o[l].lx = t.touches[0].clientX, o[l].ly = t.touches[0].clientY, 
                        console.log(o[l]);
                    },
                    WraptouchMove: function(t) {
                        r && (r = !1, setTimeout(function() {
                            r = !0;
                        }, 100)), o[l]._lx = t.touches[0].clientX, o[l]._ly = t.touches[0].clientY, o[l].left += o[l]._lx - o[l].lx, 
                        o[l].top += o[l]._ly - o[l].ly, o[l].x += o[l]._lx - o[l].lx, o[l].y += o[l]._ly - o[l].ly, 
                        o[l].lx = t.touches[0].clientX, o[l].ly = t.touches[0].clientY, this.itemList = [].concat(o);
                    },
                    oTouchStart: function(t) {
                        console.log(t);
                        for (var e = 0; e < o.length; e++) o[e].active = !1, t.currentTarget.dataset.id == o[e].id && (console.log("e.currentTarget.dataset.id", t.currentTarget.dataset.id), 
                        l = e, o[l].active = !0);
                        o[l].tx = t.touches[0].clientX - this.starticon.x, o[l].ty = t.touches[0].clientY - this.starticon.y, 
                        console.log(t.touches[0]), o[l].anglePre = this.countDeg(o[l].x, o[l].y, o[l].tx, o[l].ty), 
                        o[l].r = this.getDistancs(o[l].x, o[l].y, o[l].left, o[l].top), console.log(o[l].r, "rrrrrrrrrr");
                    },
                    oTouchMove: function(t) {
                        r && (r = !1, setTimeout(function() {
                            r = !0;
                        }, 100)), o[l]._tx = t.touches[0].clientX - this.starticon.x, o[l]._ty = t.touches[0].clientY - this.starticon.y, 
                        o[l].disPtoO = this.getDistancs(o[l].x, o[l].y, o[l]._tx, o[l]._ty - 10), console.log(o[l].disPtoO), 
                        o[l].scale = o[l].disPtoO / o[l].r, o[l].oScale = 1 / o[l].scale, o[l].angleNext = this.countDeg(o[l].x, o[l].y, o[l]._tx, o[l]._ty), 
                        o[l].new_rotate = o[l].angleNext - o[l].anglePre, o[l].rotate += o[l].new_rotate, 
                        o[l].angle = o[l].rotate, o[l].tx = t.touches[0].clientX - this.starticon.x, o[l].ty = t.touches[0].clientY - this.starticon.y, 
                        o[l].anglePre = this.countDeg(o[l].x, o[l].y, o[l].tx, o[l].ty), this.itemList = [].concat(o);
                    },
                    getDistancs: function(t, e, a, i) {
                        var s = a - t, n = i - e;
                        return Math.sqrt(s * s + n * n);
                    },
                    countDeg: function(t, e, a, i) {
                        var s = a - t, n = i - e, o = Math.abs(s / n), c = Math.atan(o) / (2 * Math.PI) * 360;
                        return s < 0 && n < 0 ? c = -c : s <= 0 && n >= 0 ? c = -(180 - c) : s > 0 && n < 0 ? c = c : s > 0 && n > 0 && (c = 180 - c), 
                        c;
                    },
                    deleteItem: function(t) {
                        for (var e = [], a = 0; a < o.length; a++) t.currentTarget.dataset.id != o[a].id && e.push(o[a]);
                        e.length > 0 && (e[e.length - 1].active = !0), o = e, this.itemList = [].concat(o);
                    }
                }
            };
            e.default = d;
        }).call(this, a("543d").default);
    },
    "841e": function(t, e, a) {
        a.r(e);
        var i = a("cad3"), s = a("9c48");
        for (var n in s) "default" !== n && function(t) {
            a.d(e, t, function() {
                return s[t];
            });
        }(n);
        a("d554");
        var o = a("2877"), c = Object(o.a)(s.default, i.a, i.b, !1, null, "000271f2", null);
        e.default = c.exports;
    },
    "9c48": function(t, e, a) {
        a.r(e);
        var i = a("0440"), s = a.n(i);
        for (var n in i) "default" !== n && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(n);
        e.default = s.a;
    },
    b9a3: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("8b22"), a("921b"), e(a("66fd")), t(e(a("841e")).default);
        }).call(this, a("543d").createPage);
    },
    cad3: function(t, e, a) {
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                t.sideness = !0;
            }, t.e1 = function(e) {
                t.sideness = !1;
            });
        }, s = [];
        a.d(e, "a", function() {
            return i;
        }), a.d(e, "b", function() {
            return s;
        });
    },
    d554: function(t, e, a) {
        var i = a("ea45");
        a.n(i).a;
    },
    ea45: function(t, e, a) {}
}, [ [ "b9a3", "common/runtime", "common/vendor" ] ] ]);