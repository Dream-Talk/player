function e(e) {
    e = e || 32;
    for (var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = t.length, i = "", o = 0; o < e; o++) i += t.charAt(Math.floor(Math.random() * n));
    return i;
}

function t(e) {
    var t = e.lastIndexOf("."), n = e.length;
    return e.substring(t, n);
}

function n(n, i, a) {
    var c = t(n.tempFilePath);
    o.getQiniuVideoTokenApi(function(t) {
        if (t) {
            var o = n.tempFilePath.split("//")[1], s = e(32);
            wx.uploadFile({
                url: "https://upload.qiniup.com",
                filePath: n.tempFilePath,
                name: "file",
                formData: {
                    token: t.token,
                    file: o,
                    key: s + c
                },
                success: function(e) {
                    console.log(e);
                    var t = JSON.parse(e.data);
                    if (t.key) {
                        var n = "http://video.maiyizhi.cn/", o = {
                            url: n += t.key
                        };
                        i(o);
                    } else a(o);
                },
                fail: function() {
                    a(n);
                }
            });
        } else a(n);
    });
}

var i, o = require("../api.js"), a = require("util.js"), c = require("./cos-auth"), s = function(e) {
    return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
}, r = function(e, t) {
    i && Date.now() / 1e3 + 30 < i.expiredTime ? e(i.credentials) : o.getTencentImageTokenApi(function(n) {
        var o = n.token, a = n.appid;
        console.log("token", o), o.credentials.appid = a, o.credentials && (i = o), i && i.credentials ? e(i && i.credentials) : t();
    }, function() {
        t();
    });
}, u = function(e, t, n) {
    r(function(n) {
        t({
            XCosSecurityToken: n.sessionToken,
            Authorization: c({
                SecretId: n.tmpSecretId,
                SecretKey: n.tmpSecretKey,
                Method: e.Method,
                Pathname: e.Pathname
            }),
            appid: n.appid
        });
    }, function() {
        n();
    });
};

module.exports = {
    uploadSingleB: function(n, i, o) {
        var a = n.path, c = t(a), r = i + e(32) + c;
        u({
            Method: "POST",
            Pathname: "/"
        }, function(e) {
            var t = "https://pics-" + e.appid + ".cos.ap-guangzhou.myqcloud.com/";
            wx.getImageInfo({
                src: a,
                success: function(i) {
                    wx.uploadFile({
                        url: t,
                        name: "file",
                        filePath: a,
                        formData: {
                            key: r,
                            success_action_status: 200,
                            Signature: e.Authorization,
                            "x-cos-security-token": e.XCosSecurityToken,
                            "Content-Type": ""
                        },
                        success: function(e) {
                            var t = "https://youtupics.maiyizhi.cn/" + s(r).replace(/%2F/g, "/");
                            console.log("url", t), 200 === e.statusCode ? (n.url = t, n.width = i.width, n.height = i.height, 
                            n.state = 2, o(n)) : (n.state = 3, o());
                        },
                        fail: function(e) {
                            n.state = 3, o();
                        }
                    }).onProgressUpdate(function(e) {
                        console.log("正在进度:", e);
                    });
                },
                fail: function() {
                    n.state = 3, o();
                }
            });
        }, function() {
            n.state = 3, o();
        });
    },
    uploadVideo: function(e, t, i) {
        wx.canIUse && wx.canIUse("getFileInfo") ? wx.getFileInfo({
            filePath: e.tempFilePath,
            success: function(o) {
                console.log(o.size), o.size > 6e6 ? (wx.hideNavigationBarLoading(), wx.hideToast(), 
                a.showTips("视频最大限制为5M哦")) : n(e, t, i);
            },
            fail: function() {
                n(e, t, i);
            }
        }) : n(e, t, i);
    }
};