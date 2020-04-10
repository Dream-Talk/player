(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/invinbg-image-cropper/invinbg-image-cropper" ], {
    "0a84": function(t, i, e) {},
    "58a2": function(t, i, e) {
        (function(t) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var e = {
                name: "image-cropper",
                props: {
                    cropWidth: {
                        type: Number,
                        default: 200
                    },
                    cropHeight: {
                        type: Number,
                        default: 200
                    },
                    cropFixed: {
                        type: Boolean,
                        default: !1
                    },
                    src: {
                        type: String
                    },
                    showResetBtn: {
                        type: Boolean,
                        default: !0
                    },
                    showRotateBtn: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    var i = t.getSystemInfoSync();
                    return {
                        show: !1,
                        scale: 1,
                        rotate: 0,
                        cropW: 0,
                        cropH: 0,
                        cropOldW: 0,
                        cropOldH: 0,
                        sysInfo: i,
                        pixelRatio: i.pixelRatio,
                        imageRealWidth: 0,
                        imageRealHeight: 0,
                        cropOffsertX: 0,
                        cropOffsertY: 0,
                        startX: 0,
                        startY: 0,
                        border: 5,
                        x: 0,
                        y: 0,
                        startL: 0,
                        oldScale: 1
                    };
                },
                watch: {
                    src: function(t) {
                        t.length > 0 && this.init();
                    },
                    show: function(t) {
                        t || (this.src = "");
                    }
                },
                computed: {
                    containerTop: function() {
                        return 0;
                    },
                    containerHeight: function() {
                        return this.windowHeight - 48;
                    },
                    windowWidth: function() {
                        return this.sysInfo.windowWidth;
                    },
                    windowHeight: function() {
                        return this.sysInfo.windowHeight;
                    },
                    imageRatio: function() {
                        return this.imageRealHeight > 0 ? this.imageRealWidth / this.imageRealHeight : 0;
                    },
                    windowRation: function() {
                        return this.windowHeight > 0 ? this.windowWidth / this.windowHeight : 0;
                    },
                    imageWidth: function() {
                        return this.imageRatio / this.windowRation >= 1 ? this.windowWidth : this.windowWidth * this.imageRatio / this.windowRation;
                    },
                    imageHeight: function() {
                        return this.imageRatio / this.windowRation >= 1 ? this.windowWidth / this.imageRatio : this.windowHeight;
                    }
                },
                methods: {
                    rotateHandler: function() {
                        3 == this.rotate ? this.rotate = 0 : ++this.rotate;
                    },
                    init: function() {
                        this.rotate = 0, this.scale = 1, this.cropW = this.cropWidth, this.cropH = this.cropHeight, 
                        t.showLoading({
                            title: "图片加载中..."
                        }), this.loadImage(this.src).then(function(i) {
                            t.hideLoading();
                        }).catch(function(i) {
                            t.hideLoading(), t.showModal({
                                title: "标题",
                                content: "图片加载失败"
                            });
                        });
                    },
                    loadImage: function(i) {
                        var e = this;
                        return new Promise(function(o, s) {
                            t.getImageInfo({
                                src: i,
                                success: function(t) {
                                    e.imageRealWidth = t.width, e.imageRealHeight = t.height, e.cropOffsertX = e.windowWidth / 2 - e.cropW / 2, 
                                    e.cropOffsertY = e.windowHeight / 2 - e.cropH / 2, e.show = !0, e.$nextTick(function() {
                                        e.x = e.windowWidth / 2 - e.imageWidth / 2, e.y = e.containerHeight / 2 - e.imageHeight / 2;
                                    }), o(t);
                                },
                                fail: function(t) {
                                    e.show = !1, s(t);
                                }
                            });
                        });
                    },
                    cancel: function() {
                        this.show = !1, this.$emit("cancel");
                    },
                    confirm: function(i) {
                        t.showLoading({
                            title: "裁剪中..."
                        });
                        var e = this, o = t.createCanvasContext("myCanvas", e), s = e.pixelRatio, r = e.src, a = e.imageWidth * e.scale, n = e.imageHeight * e.scale, h = e.rotate, c = e.cropOffsertX - e.x - (e.imageWidth - a) / 2, p = e.cropOffsertY - e.y - (e.imageHeight - n) / 2;
                        switch (o.setFillStyle("white"), o.fillRect(0, 0, a, n), o.save(), o.rotate(90 * h * Math.PI / 180), 
                        h) {
                          case 1:
                            c += (n - a) / 2, p -= (n - a) / 2, o.drawImage(r, -p, c, a, -n);
                            break;

                          case 2:
                            o.drawImage(r, c, p, -a, -n);
                            break;

                          case 3:
                            c += (n - a) / 2, p -= (n - a) / 2, o.drawImage(r, p, -c, -a, n);
                            break;

                          default:
                            o.drawImage(r, -c, -p, a, n);
                        }
                        o.restore(), o.draw(!1, function() {
                            t.canvasToTempFilePath({
                                canvasId: "myCanvas",
                                destWidth: e.cropW * s,
                                destHeight: e.cropH * s,
                                success: function(o) {
                                    t.hideLoading(), i.detail.tempFilePath = o.tempFilePath, e.show = !1, e.$emit("confirm", i);
                                },
                                fail: function(i) {
                                    t.hideLoading(), t.showModal({
                                        title: "提示",
                                        content: "裁剪失败"
                                    });
                                }
                            }, e);
                        });
                    },
                    imgTouchStart: function(i) {
                        if (2 == i.touches.length) {
                            this.oldScale = this.scale, this.scaling = !0;
                            var e = i.touches[0].pageX - i.touches[1].pageX, o = i.touches[0].pageY - i.touches[1].pageY, s = Math.sqrt(Math.pow(e, 2) + Math.pow(o, 2));
                            this.startL = Math.max(e, o, s), t.showModal({
                                content: this.startL
                            });
                        } else this.startX = i.touches[0].pageX - this.x, this.startY = i.touches[0].pageY - this.y;
                    },
                    imgMoveing: function(t) {
                        if (this.scaling) {
                            var i = this.oldScale, e = t.touches[0].pageX - t.touches[1].pageX, o = t.touches[0].pageY - t.touches[1].pageY, s = Math.sqrt(Math.pow(e, 2) + Math.pow(o, 2)), r = Math.max(e, o, s) - this.startL, a = 1, n = (a = (a = a / this.imageWidth > a / this.imageHeight ? a / this.imageHeight : a / this.imageWidth) > .1 ? .1 : a) * r;
                            r > 0 ? i += Math.abs(n) : r < 0 && i > Math.abs(n) && (i -= Math.abs(n)), this.scale = i;
                        } else {
                            var h = t.touches[0].pageX - this.startX, c = t.touches[0].pageY - this.startY;
                            this.x = h, this.y = c;
                        }
                    },
                    imgMoveEnd: function() {
                        var t = this;
                        setTimeout(function() {
                            t.scaling = !1;
                        }, 100);
                    },
                    touchStart: function(t) {
                        this.startX = t.touches[0].pageX - this.cropOffsertX, this.startY = t.touches[0].pageY - this.cropOffsertY, 
                        this.cropOldW = this.cropW, this.cropOldH = this.cropH;
                    },
                    cropMoveing: function(t) {
                        var i = this._cropX(t.touches[0].pageX - this.startX), e = this._cropY(t.touches[0].pageY - this.startY);
                        this.cropOffsertX = i, this.cropOffsertY = e;
                    },
                    dragMove: function(t, i) {
                        if (this.cropFixed) return !1;
                        var e = t.touches[0].pageX - this.startX, o = t.touches[0].pageY - this.startY;
                        switch (i) {
                          case "left-top":
                            this._cropMoveLeft(e), this._cropMoveTop(o);
                            break;

                          case "middle-top":
                            this._cropMoveTop(o);
                            break;

                          case "right-top":
                            this._cropMoveTop(o), this._cropMoveRight(e);
                            break;

                          case "middle-right":
                            this._cropMoveRight(e);
                            break;

                          case "right-bottom":
                            this._cropMoveRight(e), this._cropMoveBottom(o);
                            break;

                          case "middle-bottom":
                            this._cropMoveBottom(o);
                            break;

                          case "left-bottom":
                            this._cropMoveBottom(o), this._cropMoveLeft(e);
                            break;

                          case "middle-left":
                            this._cropMoveLeft(e);
                        }
                    },
                    _cropMoveTop: function(t) {
                        var i = this._cropY(t);
                        this.cropH += this.cropOffsertY - i, this.cropOffsertY = i;
                    },
                    _cropMoveRight: function(t) {
                        if (this.cropOldW + t >= this.windowWidth - this.border) return !1;
                        this.cropW = this.cropOldW + (t - this.cropOffsertX);
                    },
                    _cropMoveBottom: function(t) {
                        if (this.cropOldH + t >= this.windowHeight - this.containerTop - this.border) return !1;
                        this.cropH = this.cropOldH + (t - this.cropOffsertY);
                    },
                    _cropMoveLeft: function(t) {
                        var i = this._cropY(t);
                        this.cropW += this.cropOffsertX - i, this.cropOffsertX = i;
                    },
                    _cropX: function(t) {
                        return t <= this.border ? this.border : t + this.cropW >= this.windowWidth - this.border ? this.windowWidth - this.cropW - this.border : t;
                    },
                    _cropY: function(t) {
                        return t <= this.border ? this.border : t + this.cropH >= this.windowHeight - this.containerTop - this.border ? this.windowHeight - this.cropH - this.containerTop - this.border : t;
                    }
                }
            };
            i.default = e;
        }).call(this, e("543d").default);
    },
    "6a95": function(t, i, e) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, s = [];
        e.d(i, "a", function() {
            return o;
        }), e.d(i, "b", function() {
            return s;
        });
    },
    c0e6: function(t, i, e) {
        e.r(i);
        var o = e("6a95"), s = e("d9ef");
        for (var r in s) "default" !== r && function(t) {
            e.d(i, t, function() {
                return s[t];
            });
        }(r);
        e("dd83");
        var a = e("2877"), n = Object(a.a)(s.default, o.a, o.b, !1, null, "308e31bc", null);
        i.default = n.exports;
    },
    d9ef: function(t, i, e) {
        e.r(i);
        var o = e("58a2"), s = e.n(o);
        for (var r in o) "default" !== r && function(t) {
            e.d(i, t, function() {
                return o[t];
            });
        }(r);
        i.default = s.a;
    },
    dd83: function(t, i, e) {
        var o = e("0a84");
        e.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/invinbg-image-cropper/invinbg-image-cropper-create-component", {
    "components/invinbg-image-cropper/invinbg-image-cropper-create-component": function(t, i, e) {
        e("543d").createComponent(e("c0e6"));
    }
}, [ [ "components/invinbg-image-cropper/invinbg-image-cropper-create-component" ] ] ]);