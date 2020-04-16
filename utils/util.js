
function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

function i(t) {
    var e;
    for (e in t) return !1;
    return !0;
}

function n() {
    var t = [];
    return t = wx.getStorageSync("details"), i(t) ? [] : t;
}

function a(t) {
    t = t.replace(/\r\n/g, "\n");
    for (var e = "", i = 0; i < t.length; i++) {
        var n = t.charCodeAt(i);
        n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), 
        e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), 
        e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128));
    }
    return e;
}

function o(t) {
    for (var e = "", i = 0, n = 0, a = 0, o = 0; i < t.length; ) (n = t.charCodeAt(i)) < 128 ? (e += String.fromCharCode(n), 
    i++) : n > 191 && n < 224 ? (a = t.charCodeAt(i + 1), e += String.fromCharCode((31 & n) << 6 | 63 & a), 
    i += 2) : (a = t.charCodeAt(i + 1), o = t.charCodeAt(i + 2), e += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | 63 & o), 
    i += 3);
    return e;
}

function r(t, e, i) {
    var n = l(t, e, i);
    if (g.push(n), e + s(n) >= s(t)) {
        var a = g;
        return g = [], a;
    }
    return r(t, e + s(n), i);
}

function s(t) {
    for (var e = t.length, i = 0, n = 0; n < e; n++) t.charCodeAt(n) > 128 ? i += 2 : i += 1;
    return i;
}

function l(t, e, i, n) {
    e = e > 0 ? e : 0, i = i > 0 ? i : null;
    for (var a = 0, o = "", r = 0; r < t.length; r++) {
        var s = 0, l = 0;
        if (s = t.charCodeAt(r), l = s > 255 ? 2 : 1, a += l, !(e >= a)) {
            if (!(null == i || (i -= l) >= 0)) {
                n && (o += n);
                break;
            }
            o += String.fromCharCode(s);
        }
    }
    return o;
}

function c(t, e, i, n, a) {
    -1 != t.indexOf("http") ? (wx.showNavigationBarLoading(), wx.showToast({
        title: a,
        duration: 2e4,
        icon: "loading"
    }), wx.downloadFile({
        url: h(t),
        success: function(a) {
            wx.hideToast(), wx.hideNavigationBarLoading(), console.log(a.tempFilePath), wx.navigateTo({
                url: "/pages/preview/preview?pic=" + encodeURIComponent(a.tempFilePath) + "&title=" + e + "&id=" + i + "&path=" + encodeURIComponent(n) + "&remoteUrl=" + t
            });
        }
    })) : (wx.hideToast(), wx.navigateTo({
        url: "/pages/preview/preview?pic=" + encodeURIComponent(t) + "&title=" + e + "&path=" + encodeURIComponent(n)
    }));
}

function h(t) {
    return t.replace("http://pics.maiyizhi.cn", "https://pics.maiyizhi.cn").replace("http://icons.maiyizhi.cn", "https://icons.maiyizhi.cn").replace("http://avatars.maiyizhi.cn", "https://avatars.maiyizhi.cn").replace("http://video.maiyizhi.cn", "https://video.maiyizhi.cn");
}

var d = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), u = require("./config.js"), g = [], f = function() {
    function e(i) {
        t(this, e), this.canvasId = i.canvasId, this.contentItem = i.contentItem, this.size = i.size, 
        this.radio = i.radio, this.imageUrls = i.imageUrls, this.scaleSmall = 1;
    }
    return d(e, [ {
        key: "touchStart",
        value: function(t) {
            this.startPoint = {
                x: t.touches[0].x,
                y: t.touches[0].y
            };
            var e = this.contentItem, i = this.radio, n = this;
            e.forEach(function(t, e, i) {
                n.contentItem[e].disabled = 1;
            });
            for (var a = 0; a < e.length; a++) {
                var o = e.length - 1 - a, r = e[o], s = this.calculateW_H(r), l = (s.w, s.h, i * r.dx), c = i * r.dy, h = {
                    x: l + r.rbX,
                    y: c + r.rbY
                }, d = {
                    x: l - r.rbX,
                    y: c - r.rbY
                }, u = [ {
                    x: l - r.rbX,
                    y: c - r.rbY
                }, {
                    x: l - r.rbX,
                    y: c + r.rbY
                }, {
                    x: l + r.rbX,
                    y: c + r.rbY
                }, {
                    x: l + r.rbX,
                    y: c - r.rbY
                }, {
                    x: l - r.rbX,
                    y: c - r.rbY
                } ], g = this.jugeInCicle(this.startPoint, d, 20), f = this.jugeInCicle(this.startPoint, h, 20), m = this.judgeInPoly(this.startPoint, u, 4);
                if (f) {
                    this.resetParams(!0, !1, o), console.log("isRotate");
                    break;
                }
                if (g && r.cancel) {
                    this.contentItem.splice(o, 1), this.imageUrls.splice(o, 1);
                    break;
                }
                if (m) {
                    this.resetParams(!1, !0, o), console.log("isMove");
                    break;
                }
            }
            return this.drawElements(), {
                contentItem: this.contentItem
            };
        }
    }, {
        key: "touchMove",
        value: function(t) {
            var e = getApp().globalData.system_info.windowWidth / 375 * .5, i = e * this.size.width, n = e * this.size.height, a = [ {
                x: 0,
                y: 0
            }, {
                x: 0,
                y: n
            }, {
                x: i,
                y: n
            }, {
                x: i,
                y: 0
            }, {
                x: 0,
                y: 0
            } ], o = t.touches[0].x, r = t.touches[0].y;
            if (this.judgeInPoly({
                x: o,
                y: r
            }, a, 4)) {
                var s = this.contentItem, l = this.selectedIndex;
                l >= 0 && s[l] && (s[l].isRotate ? this.scaleSmall ? (this.calculateScale(o, r), 
                this.calculateRotate(o, r)) : this.calculateRotate(o, r) : s[l].isMove && (this.contentItem[l].dx += (o - this.startPoint.x) / this.radio, 
                this.contentItem[l].dy += (r - this.startPoint.y) / this.radio, this.startPoint = {
                    x: o,
                    y: r
                })), this.drawElements();
            }
        }
    }, {
        key: "touchEnd",
        value: function() {
            var t = this.selectedIndex;
            t >= 0 && this.contentItem[t] && (this.contentItem[t].isRotate = !1, this.contentItem[t].isMove = !1, 
            this.contentItem[t].isShowSymbol = !1);
        }
    }, {
        key: "setParams",
        value: function(t, e, i) {
            var n = .5 * Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)), a = Math.atan(e / t);
            this.contentItem[i].oldDistance = n, this.contentItem[i].r = n, this.contentItem[i].rbX = n * Math.cos(a), 
            this.contentItem[i].rbY = n * Math.sin(a), this.contentItem[i].original_w = t;
        }
    }, {
        key: "resetParams",
        value: function(t, e, i) {
            this.contentItem[i].isRotate = t, this.contentItem[i].isMove = e, this.contentItem[i].isShowSymbol = !0, 
            this.contentItem[i].disabled = 0, this.selectedIndex = i;
        }
    }, {
        key: "drawElements",
        value: function(t, e) {
            var i = wx.createCanvasContext(this.canvasId), n = getApp().globalData.system_info.windowWidth / 375 * .5;
            t && t.circle ? (i.save(), i.setFillStyle("#FFF"), i.fillRect(0, 0, n * this.size.width, n * this.size.height), 
            i.arc(t.circle.x, t.circle.y, t.circle.R, 0, 2 * Math.PI), i.clip(), t.src ? i.drawImage(t.src, 0, 0, n * this.size.width, n * this.size.height) : (i.rect(0, 0, n * this.size.width, n * this.size.height), 
            i.setFillStyle("white"), i.fill()), i.restore()) : t && t.rectangle && (t.src ? i.drawImage(t.src, 0, 0, n * this.size.width, n * this.size.height) : (i.rect(0, 0, n * this.size.width, n * this.size.height), 
            i.setFillStyle("white"), i.fill()));
            var a = this.radio, o = this;
            this.contentItem.forEach(function(t, e, n) {
                var s = o.calculateW_H(t), l = s.w, c = s.h, h = Math.atan(c / l);
                if ("text" == t.type) t.angle ? (i.save(), i.translate(a * t.dx, a * t.dy), i.rotate(t.angle - h), 
                i.setFillStyle(t.color), i.setFontSize(a * t.size), i.setTextBaseline("top"), i.fillText(t.value, -.5 * l, -.5 * c), 
                t.isShowSymbol && o.symbolAction(i, t, l, c), i.translate(-a * t.dx, -a * t.dy), 
                i.restore()) : (i.save(), i.setFillStyle(t.color), i.setFontSize(a * t.size), i.setTextBaseline("top"), 
                i.fillText(t.value, a * t.dx - .5 * l, a * t.dy - .5 * c), i.restore()); else if ("image" == t.type) t.angle ? (i.save(), 
                i.translate(a * t.dx, a * t.dy), i.rotate(t.angle - h), i.drawImage(o.imageUrls[e], -.5 * l, -.5 * c, l, c), 
                t.isShowSymbol && o.symbolAction(i, t, l, c), i.translate(-a * t.dx, -a * t.dy), 
                i.restore()) : i.drawImage(o.imageUrls[e], a * t.dx - .5 * l, a * t.dy - .5 * c, l, c); else if ("textarea" == t.type) {
                    var d = r(t.value, 0, t.lineLenght);
                    if (t.angle) {
                        i.save(), i.translate(a * t.dx, a * t.dy), i.rotate(t.angle - h), i.setFillStyle(t.color), 
                        i.setFontSize(a * t.size), i.setTextBaseline("top");
                        for (var u = 0; u < d.length; u++) i.fillText(d[u], -.5 * l, -.5 * c + a * u * t.lineHeight);
                        t.isShowSymbol && o.symbolAction(i, t, l, c), i.translate(-a * t.dx, -a * t.dy), 
                        i.restore();
                    } else {
                        i.save(), i.setFillStyle(t.color), i.setFontSize(a * t.size), i.setTextBaseline("top");
                        for (var g = 0; g < d.length; g++) i.fillText(d[g], a * t.dx - .5 * l, a * (t.dy + g * t.lineHeight) - .5 * c);
                        i.restore();
                    }
                }
                t.isShowSymbol && !t.angle && o.symbolAction(i, t, l, c);
            }), i.draw(!1, e);
        }
    }, {
        key: "symbolAction",
        value: function(t, e, i, n) {
            var a = this.radio;
            t.setStrokeStyle("black"), e.angle ? (t.strokeRect(-.5 * i, -.5 * n, i, n), t.drawImage("/styles/lashen.png", .5 * i - 15, .5 * n - 15, 30, 30), 
            e.cancel && t.drawImage("/styles/quxiao.png", -.5 * i - 15, -.5 * n - 15, 30, 30)) : (t.strokeRect(a * e.dx - .5 * i, a * e.dy - .5 * n, i, n), 
            t.drawImage("/styles/lashen.png", a * e.dx + .5 * i - 15, a * e.dy + .5 * n - 15, 30, 30), 
            e.cancel && t.drawImage("/styles/quxiao.png", a * e.dx - .5 * i - 15, a * e.dy - .5 * n - 15, 30, 30));
        }
    }, {
        key: "calculateScale",
        value: function(t, e) {
            var i = this.contentItem, n = this.selectedIndex, a = this.radio, o = Math.sqrt(Math.pow(t - a * i[n].dx, 2) + Math.pow(e - a * i[n].dy, 2)), r = o / i[n].oldDistance;
            "text" == i[n].type || "textarea" == i[n].type ? this.contentItem[n].size *= r : "image" == i[n].type && (this.contentItem[n].width *= r, 
            this.contentItem[n].height *= r), this.contentItem[n].oldDistance = o, this.calculateW_H(i[n]).w / i[n].original_w <= .5 && (this.scaleSmall = 0);
        }
    }, {
        key: "calculateRotate",
        value: function(t, e) {
            var i = this.contentItem, n = this.selectedIndex, a = this.radio;
            Math.sqrt(Math.pow(t - a * i[n].dx, 2) + Math.pow(e - a * i[n].dy, 2)) / i[n].oldDistance > 1 && (this.scaleSmall = 1);
            var o = this.calculateW_H(i[n]), r = o.w, s = o.h;
            this.contentItem[n].angle = Math.atan2(e - a * i[n].dy, t - a * i[n].dx);
            var l = .5 * Math.sqrt(Math.pow(r, 2) + Math.pow(s, 2));
            this.contentItem[n].r = l, this.contentItem[n].rbX = l * Math.cos(i[n].angle), this.contentItem[n].rbY = l * Math.sin(i[n].angle);
        }
    }, {
        key: "jugeInCicle",
        value: function(t, e, i) {
            return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2) <= Math.pow(i, 2) ? 1 : 0;
        }
    }, {
        key: "judgeInPoly",
        value: function(t, e, i) {
            for (var n = 0, a = 0; a < i; a++) if (e[a].y <= t.y && e[a + 1].y > t.y || e[a].y > t.y && e[a + 1].y <= t.y) {
                var o = (t.y - e[a].y) / (e[a + 1].y - e[a].y);
                t.x < e[a].x + o * (e[a + 1].x - e[a].x) && ++n;
            }
            return n % 2;
        }
    }, {
        key: "calculateW_H",
        value: function(t) {
            var e = this.radio;
            if ("text" == t.type) var i = e * t.size * t.value.length, n = 1.5 * e * t.size; else if ("image" == t.type) var i = e * t.width, n = e * t.height; else if ("textarea" == t.type) var a = r(t.value, 0, t.lineLenght), i = e * t.size * a[0].length, n = e * a.length * t.lineLenght;
            return {
                w: i,
                h: n
            };
        }
    } ]), e;
}();

module.exports = {
    urlSafe: function(t) {
        return t.replace(/[+\/]/g, function(t) {
            return "+" === t ? "-" : "_";
        });
    },
    showTips: function(t) {
        var e = arguments[1] ? arguments[1] : 2e3;
        wx.showToast({
            image: "/style/info_icon.png",
            title: t.toString(),
            duration: e
        });
    },
    isEmptyObject: i,
    formatTime: function(t) {
        var i = t.getFullYear(), n = t.getMonth() + 1, a = t.getDate(), o = t.getHours(), r = t.getMinutes(), s = t.getSeconds();
        return [ i, n, a ].map(e).join("/") + " " + [ o, r, s ].map(e).join(":");
    },
    getTimeStr: function() {
        var t = new Date(), e = t.getHours().toString(), i = t.getMinutes().toString();
        return e.length < 2 && (e = "0" + e), i.length < 2 && (i = "0" + i), e + ":" + i;
    },
    formateDateTime: function(t) {
        if (!t) return t;
        var e = t.split(" ");
        if (2 != e.length) return t;
        var i = e[0], n = e[1], a = i.split("-");
        if (3 != a.length) return t;
        var o = new Date(), r = o.getFullYear(), s = o.getMonth(), l = o.getDate(), c = new Date(r, s, l), h = c.getTime() - new Date(a[0], a[1] - 1, a[2]).getTime();
        console.log(t), console.log(i), console.log(c), console.log(a), console.log(new Date(a[0], a[1] - 1, a[2])), 
        console.log(h);
        var d = Math.floor(h / 864e5);
        if (console.log(d), 0 == d) return n;
        if (1 == d) return "昨天 " + n;
        if (!(d > 0 && d < 7)) return a[0] + "年" + a[1] + "月" + a[2] + "日 " + n;
        var u = new Date(i).getDay();
        return 0 == u ? "星期日 " + n : 1 == u ? "星期一 " + n : 2 == u ? "星期二 " + n : 3 == u ? "星期三 " + n : 4 == u ? "星期四 " + n : 5 == u ? "星期五 " + n : 6 == u ? "星期六 " + n : void 0;
    },
    getDetail: function() {
        var t = [], e = wx.getStorageSync("current_detail_index");
        return "" === e && (e = 99), t = wx.getStorageSync("details"), i(t) ? {} : t[e] ? t[e] : {};
    },
    tiaozhuan: function(t, e, i, n) {
        e.closeNotification = t.show({
            image: i.image,
            title: i.title,
            text: i.text,
            data: {
                message: "逗你玩的!!!"
            },
            timer: 3e5,
            onClick: function(t) {
                e.closeNotification(), i.appid ? wx.navigateToMiniProgram ? wx.navigateToMiniProgram({
                    appId: i.appid,
                    path: i.path
                }) : util.previewSingalPic(i.preview) : i.istab ? wx.switchTab({
                    url: i.path
                }) : wx.redirectTo({
                    url: i.path
                });
            },
            onClose: function(t) {
                wx.getStorageSync(n) ? wx.setStorageSync(n, parseInt(wx.getStorageSync(n)) + 1) : wx.setStorageSync(n, 1);
            }
        });
    },
    replaceQiniuHttps: h,
    saveDetail: function(t) {
        var e = [], n = wx.getStorageSync("current_detail_index");
        "" === n && (n = 99), i(e = wx.getStorageSync("details")) && (e = []), e[n] = t, 
        wx.setStorageSync("details", e);
    },
    getDetails: n,
    randomNum: function(t, e) {
        switch (arguments.length) {
          case 1:
            return parseInt(Math.random() * t + 1, 10);

          case 2:
            return parseInt(Math.random() * (e - t + 1) + t, 10);

          default:
            return 0;
        }
    },
    encode: function(t) {
        var e, i, n, o, r, s, l, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", h = "", d = 0;
        for (t = a(t); d < t.length; ) o = (e = t.charCodeAt(d++)) >> 2, r = (3 & e) << 4 | (i = t.charCodeAt(d++)) >> 4, 
        s = (15 & i) << 2 | (n = t.charCodeAt(d++)) >> 6, l = 63 & n, isNaN(i) ? s = l = 64 : isNaN(n) && (l = 64), 
        h = h + c.charAt(o) + c.charAt(r) + c.charAt(s) + c.charAt(l);
        return h;
    },
    getDateStr: function() {
        var t = new Date();
        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    },
    getVideoAvatar: function(t) {
        var e = t.split("/");
        return e[3] ? "http://video.maiyizhi.cn/avatar_" + e[3].split(".")[0].replace("af_", "") + ".jpg?imageView2/1/format/jpg" : t + "?vframe/png/offset/1";
    },
    getSize: function(t, e, i, n, a) {
        if (a) o = (n.windowHeight - 42 - n.statusBarHeight) / n.windowWidth * 750 - i; else var o = n.windowHeight / n.windowWidth * 750 - i;
        n.windowHeight, n.windowWidth;
        var r, s, l = 0;
        return e / t > o / 710 ? (console.log(e / t), console.log(n.windowHeight / n.windowWidth), 
        r = o, s = t / e * o) : (console.log(e / t), console.log(n.windowHeight / n.windowWidth), 
        s = 710, r = e / t * 710), r < o && (l = (o - r) / 2), {
            width: s,
            height: r,
            marginTop: l,
            scaleNumbers: t / n.windowWidth * 750 / s
        };
    },
    getTrueLength: s,
    byteSub: l,
    spliteByLength: r,
    setDuihuaIndex: function(t, e) {
        var i = wx.getStorageSync(t);
        this.isEmptyObject(i) && (i = {}), this.isEmptyObject(i[e]) && (i[e] = {}), this.isEmptyObject(i[e].list) && (i[e].list = []), 
        console.log(i[e]);
        var n = i[e].list.length;
        wx.setStorageSync("current_" + t + "_" + e + "_index", parseInt(n));
    },
    setDetailIndex: function() {
        var t = 0, e = n();
        for (var i in e) 99 != i && e[i] && t++;
        wx.setStorageSync("current_detail_index", t);
    },
    removeCircle: function() {
        wx.setStorageSync("info", {});
        var t = n();
        for (var e in t) 99 != e && t[e] && (t[e] = null);
        wx.setStorageSync("details", t);
    },
    emptyDeatails: function() {
        var t = n(), e = !0;
        for (var i in t) 99 != i && t[i] && t[i].content && (e = !1);
        return e;
    },
    endWith: function(t, e) {
        return new RegExp(e + "$").test(t);
    },
    getThumbnailUrl: function(t, e, i, n, a) {
        if (t.indexOf("maiyizhi.cn") > 0) {
          var a = wx.getStorageSync("Pass");
          
          var o = a == "NoPass" ? "https://ae01.alicdn.com/kf/Hb59dbd47a02a4a48a8e26610a1e18df3K.png" :"https://ae01.alicdn.com/kf/Hd7075af65f6843b29297094819c96520Q.jpg";
            return n && a && (-1 != t.indexOf("youtu") || -1 != t.indexOf("qpics") ? o += "|imageMogr2/format/png/iradius/" + Math.max(n, a) : o += "|roundPic/radiusx/" + n + "/radiusy/" + a), 
            console.log(o), o;
        }
        return t;
    },
    previewSingalPic: function(t) {
        wx.previewImage({
            current: t,
            urls: [ t ]
        });
    },
    savePic: function(t, e) {
        wx.saveFile({
            tempFilePath: t,
            success: function(t) {
                console.log(t.savedFilePath), e(t.savedFilePath);
            }
        });
    },
    decode: function(t) {
        var e, i, n, a, r, s, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = "", h = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < t.length; ) e = l.indexOf(t.charAt(h++)) << 2 | (a = l.indexOf(t.charAt(h++))) >> 4, 
        i = (15 & a) << 4 | (r = l.indexOf(t.charAt(h++))) >> 2, n = (3 & r) << 6 | (s = l.indexOf(t.charAt(h++))), 
        c += String.fromCharCode(e), 64 != r && (c += String.fromCharCode(i)), 64 != s && (c += String.fromCharCode(n));
        return c = o(c);
    },
    showPreviewTip: function(t, e, i) {
        var n = getApp();
        "ios" != n.globalData.system_info.platform && n.globalData.system_info.SDKVersion < "1.5.0" && (e = e.replace(/长按/, '点右上角"┇"')), 
        wx.getStorageSync(t) ? c(i) : (wx.setStorageSync(t, 1), wx.showModal({
            title: "提示",
            content: e,
            showCancel: !1,
            confirmText: "知道了",
            complete: function(t) {
                c(i);
            }
        }));
    },
    getDataRange: function() {
        var t = new Date(), e = t.getFullYear(), i = t.getMonth() + 1, n = t.getDate();
        return [ e - 10 + "-" + i + "-" + n, e + "-" + i + "-" + n ];
    },
    randomPrice: function(t, e) {
        var i = (Math.random() * (e - t) + t).toFixed(2);
        return "0.00" == i ? "0.01" : i;
    },
    lunTouchstart: function(t, e) {
        e.data.touchDot = t.touches[0].pageX, e.data.interval = setInterval(function() {
            e.data.time += 1;
        }, 100);
    },
    lunTouchmove: function(t, e) {
        var i = t.touches[0].pageX, n = e.data.touchDot, a = e.data.time;
        i - n <= -40 && a < 10 && !e.data.done && (e.data.done = !0, e.scrollRight(t)), 
        i - n >= 40 && a < 10 && !e.data.done && (e.data.done = !0, e.scrollLeft(t));
    },
    lunTouchend: function(t, e) {
        clearInterval(e.data.interval), e.data.time = 0, e.data.done = !1;
    },
    lunScrollLeft: function(t, e) {
        if (0 != e.data.index) {
            e.setData({
                index: !1
            }), setTimeout(function() {
                e.setData({
                    index: !0
                });
            }, 500);
            var i = e.data.lb, n = i.shift();
            i.push(n);
            for (var a = 0; a < i.length; a++) if ("cur" == i[a]) {
                if (t[a].model) var o = t[a].model, r = t[a].type; else o = t[a].target.url;
                t[a].items && t[a].items.length && e.setData({
                    contentItem: t[a].items
                }), t[a].title && wx.setNavigationBarTitle({
                    title: t[a].title
                });
                break;
            }
            e.setData({
                lb: i,
                select: o,
                type: r
            });
        }
    },
    downloadAndPreview: c,
    lunScrollRight: function(t, e) {
        if (0 != e.data.index) {
            e.setData({
                index: !1
            }), setTimeout(function() {
                e.setData({
                    index: !0
                });
            }, 500);
            var i = e.data.lb, n = i.pop();
            i.unshift(n);
            for (var a = 0; a < i.length; a++) if ("cur" == i[a]) {
                if (t[a].model) var o = t[a].model, r = t[a].type; else o = t[a].target.url;
                t[a].items && t[a].items.length && e.setData({
                    contentItem: t[a].items
                }), t[a].title && wx.setNavigationBarTitle({
                    title: t[a].title
                });
                break;
            }
            e.setData({
                lb: i,
                select: o,
                type: r
            });
        }
    },
    dealFormIds: function(t) {
        if (t && "string" == typeof t && 32 == t.length) {
            var e = getApp(), i = e.globalData.gloabalFomIds;
            if (i || (i = []), !i.map(function(t) {
                return t.formId;
            }).includes(t)) {
                var n = {
                    formId: t,
                    expire: parseInt(new Date().getTime() / 1e3) + 604800
                };
                i.push(n), console.log("formIds", i), e.globalData.gloabalFomIds = i;
            }
        }
    },
    toucheAction: f,
    randdomDomain: function() {
        var t = [ "ai" ];
        return t[Math.floor(Math.random() * t.length)];
    },
    stringTrim: function(t) {
        return t.replace(/(^\s*)|(\s*$)/g, "");
    },
    createInterstitialAd: function() {
        if (wx.createInterstitialAd && u.config.adUnitId) {
            var t = wx.createInterstitialAd({
                adUnitId: u.config.adUnitId
            });
            t.onLoad(function() {
                t.show(function() {
                    t.destroy();
                }).catch(function(e) {
                    console.log("interstitialAd_err", e), t.destroy();
                });
            });
        }
    }
};