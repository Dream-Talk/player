function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = a(require("./user")), e = a(require("./event")), o = (require("./util.js"), 
require("./config.js")), s = require("./wcache.js");

module.exports = {
    myRequest: function(a, i, n, d, u, l) {
        var r = getApp();
        i.version = o.config.version, i.platform = r && r.globalData.system_info.platform ? r.globalData.system_info.platform : "", 
        i.appPlatform = o.config.AppPlatform, i.app = o.config.app_name, i.unionid = "", 
        i.sid = t.default.sid, i.user_id = t.default.openId, t.default.isLogin && (i.unionid = t.default.userInfo.unionid), 
        wx.request({
            url: a,
            data: i,
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                console.log(a), console.log(t), t.data.success && n ? t.data.data ? (u && (l ? s.put(u, t.data.data, l) : s.put(u, t.data.data)), 
                n(t.data.data)) : (u && (l ? s.put(u, t.data, l) : s.put(u, t.data)), n(t.data)) : (203 == t.data.error_code && e.default.emit("session_expired", {}), 
                d ? d(t.data.message) : t.data.message && wx.showToast({
                    image: "/styles/info_icon.png",
                    title: t.data.message,
                    duration: 2e3
                }));
            },
            fail: function(a) {
                d && d(a), console.log(a), wx.showToast({
                    image: "/styles/info_icon.png",
                    title: "网络错误",
                    duration: 2e3
                });
            }
        });
    },
    myRequestPost: function(a, i, n, d, u, l) {
        var r = getApp();
        i.version = o.config.version, i.platform = r.globalData.system_info.platform ? r.globalData.system_info.platform : "", 
        i.app = o.config.app_name, i.appPlatform = o.config.AppPlatform, i.unionid = "", 
        i.sid = t.default.sid, i.user_id = t.default.openId, t.default.isLogin && (i.unionid = t.default.userInfo.unionid), 
        wx.request({
            url: a,
            data: i,
            method: "POST",
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(a), console.log(t), t.data.success && n ? t.data.data ? (u && (l ? s.put(u, t.data.data, l) : s.put(u, t.data.data)), 
                n(t.data.data)) : (u && (l ? s.put(u, t.data, l) : s.put(u, t.data)), n(t.data)) : (203 == t.data.error_code && e.default.emit("session_expired", {}), 
                d ? d(t.data.message) : t.data.message && wx.showToast({
                    image: "/styles/info_icon.png",
                    title: t.data.message,
                    duration: 2e3
                }));
            },
            fail: function(a) {
                console.log(a), wx.showToast({
                    image: "/styles/info_icon.png",
                    title: "系统繁忙，请稍后再试",
                    duration: 2e3
                });
            }
        });
    }
};