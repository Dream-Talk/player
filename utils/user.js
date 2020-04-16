function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function n(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = function() {
    function e(e, n) {
        for (var i = 0; i < n.length; i++) {
            var s = n[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(n, i, s) {
        return i && e(n.prototype, i), s && e(n, s), n;
    };
}(), s = e(require("../apis/user")), t = function(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    return n.default = e, n;
}(require("./http")), o = e(require("./cache")), r = (e(require("./config2")), e(require("./event"))), u = e(require("./config")), a = new (function() {
    function e() {
        n(this, e), this._sid = 0, this._userId = 0, this._openId = "", this._isLogin = !1, 
        this._wxUserInfo = null, this._userInfo = null, this._localLoginStatus = 0, this.cache = new o.default("state_user_", !0);
        try {
            var i = this.cache.get("session"), s = this.cache.get("userInfo");
            i && this.loginWithSession(i), s ? this._userInfo = s : (this._sid = 0, this._isLogin = !1);
        } catch (e) {
            console.log(e);
        }
    }
    return i(e, [ {
        key: "init",
        value: function() {
            var e = this;
            return new Promise(function(n, i) {
                wx.checkSession({
                    success: function() {
                        e.sid ? n() : e.localLogin().then(n, i);
                    },
                    fail: function() {
                        e.localLogin().then(n, i);
                    }
                });
            });
        }
    }, {
        key: "checkLogin",
        value: function() {
            var e = this, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return n && (this.isLogin = !1), new Promise(function(i, s) {
                n ? e.localLogin(n).then(i, s) : wx.checkSession({
                    success: function() {
                        e.sid ? i() : e.localLogin().then(i, s);
                    },
                    fail: function() {
                        e.localLogin().then(i, s);
                    }
                });
            });
        }
    }, {
        key: "localLogin",
        value: function() {
            var e = this, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return new Promise(function(i, t) {
                1 !== e._localLoginStatus || n ? wx.login({
                    success: function(n) {
                        getApp();
                        var o = u.default.config.AppPlatform ? u.default.config.AppPlatform : "wechat";
                        console.log("AppPlatform", o), s.default.login({
                            code: n.code,
                            old: 1,
                            appPlatform: o
                        }, function(n) {
                            if (n.success) {
                                e._localLoginStatus = 1;
                                var s = n.data;
                                s.userId = 0, s.isLogin = 0, s.userInfo && (s.userId = s.userInfo.id, s.isLogin = !0, 
                                e.userInfo = s.userInfo), e.loginWithSession(s), e.cacheSession(), e.isLogin && r.default.emit("user_login", {});
                            }
                            i();
                        }, t);
                    },
                    fail: t
                }) : i();
            });
        }
    }, {
        key: "updateUserInfo",
        value: function(e) {
            var n = this;
            return this._wxUserInfo = e.userInfo, new Promise(function(i, t) {
                if (n.isLogin) i(); else {
                    var o = getApp(), a = o.globalData.scene, c = o.globalData.referrerInfo, f = u.default.config.AppPlatform ? u.default.config.AppPlatform : "wechat";
                    s.default.updateUserInfo({
                        rawData: e.rawData || "",
                        signature: e.signature || "",
                        encryptedData: e.encryptedData || "",
                        iv: e.iv || "",
                        scene: a || "",
                        referrerInfo: c || "{}",
                        userInfo: JSON.stringify(e.userInfo),
                        appPlatform: f
                    }, function(e) {
                        e.success ? (console.log(111), n.userId = e.data.userId, n.isLogin = !0, n.userInfo = e.data.userInfo, 
                        n.cacheSession(), r.default.emit("user_login", {}), i()) : t(e);
                    }, t);
                }
            });
        }
    }, {
        key: "loginWithSession",
        value: function(e) {
            e.hasOwnProperty("sid") && (this._sid = e.sid), e.hasOwnProperty("userId") && (this._userId = e.userId), 
            e.hasOwnProperty("openId") && (this._openId = e.openId), e.hasOwnProperty("isLogin") && e.isLogin && (this._isLogin = !0), 
            t.setDefaultData({
                sid: e.sid
            });
        }
    }, {
        key: "logout",
        value: function() {
            return this.loginWithSession({
                sid: 0,
                userId: 0,
                isLogin: 0
            }), this.cacheSession(), this;
        }
    }, {
        key: "cacheSession",
        value: function() {
            var e = {
                sid: this.sid,
                openId: this.openId,
                userId: this.userId,
                isLogin: this.isLogin
            };
            this.cache.set("session", e, 6048e5);
        }
    }, {
        key: "sid",
        get: function() {
            return this._sid;
        },
        set: function(e) {
            this._sid = e;
        }
    }, {
        key: "userId",
        get: function() {
            return this._userId;
        },
        set: function(e) {
            this._userId = e;
        }
    }, {
        key: "openId",
        get: function() {
            return this._openId;
        },
        set: function(e) {
            this._openId = e;
        }
    }, {
        key: "isLogin",
        get: function() {
            return this._isLogin && !!this._userId;
        },
        set: function(e) {
            this._isLogin = e;
        }
    }, {
        key: "userInfo",
        get: function() {
            if (this._userInfo && this._userInfo.user_avatar) {
                var e = /\/\d+$/g;
                this._userInfo.user_avatar = this._userInfo.user_avatar.replace(e, "/0");
            }
            return this._userInfo;
        },
        set: function(e) {
            this._userInfo = e, this.cache.set("userInfo", e, 6048e5);
        }
    }, {
        key: "wxUserInfo",
        get: function() {
            return this._wxUserInfo;
        }
    }, {
        key: "oldUserInfo",
        get: function() {
            var e = this.userInfo;
            return {
                openid: e.user_id,
                user_name: e.user_name,
                avatar: e.user_avatar,
                unionid: e.unionid,
                isVip: e.isVip
            };
        }
    } ]), e;
}())();

exports.default = a;