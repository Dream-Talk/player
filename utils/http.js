function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setDefaultData = exports.del = exports.put = exports.post = exports.get = exports.request = void 0;

var t = require("./config2"), s = e(t), r = e(require("./event")), o = {}, n = exports.request = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "GET";
    return function(n, u) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(function(c, p) {
            var i = {
                "Content-Type": "application/json"
            };
            "POST" !== e || a || (i["Content-Type"] = "application/x-www-form-urlencoded"), 
            u = Object.assign(u, o), s.default.debug && (u.debug = 1), wx.request({
                url: n,
                data: u,
                method: e,
                header: i,
                success: function(e) {
                    if (200 === e.statusCode) {
                        var s = e.data;
                        200 === s.code && (s.success = !0), s.success ? c(s) : (203 === s.error_code && r.default.emit("session_expired", {}), 
                        p(s));
                    } else p({
                        success: !1,
                        message: t.MESSAGE_API_PARSE_ERROR,
                        error: e.data
                    });
                },
                fail: function(e) {
                    wx.getNetworkType({
                        complete: function(s) {
                            p(s && "none" === s.networkType ? {
                                success: !1,
                                message: t.MESSAGE_NETWORK_NOT_AVAILABLE,
                                error: e
                            } : {
                                success: !1,
                                message: t.MESSAGE_NETWORK_TIMEOUT,
                                error: e
                            });
                        }
                    });
                }
            });
        });
    };
};

exports.get = n("GET"), exports.post = n("POST"), exports.put = n("PUT"), exports.del = n("DELETE"), 
exports.setDefaultData = function(e) {
    o = e;
};