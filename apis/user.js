Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e.default = t, e;
}(require("../utils/http")), e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../utils/config2"));

exports.default = {
    login: function(r, a, u) {
        return r.app = e.default.appId, t.post(e.default.apiPath + "?r=api/passport/wechat-js-login", r).then(a, u);
    },
    updateUserInfo: function(r, a, u) {
        return r.app = e.default.appId, t.post(e.default.apiPath + "?r=api/passport/wechat-js-update-user-info", r).then(a, u);
    }
};