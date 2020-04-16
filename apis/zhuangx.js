Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t;
}(require("../utils/http")), t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../utils/config2"));

exports.default = {
    isTemplatePaid: function(r, u, i) {
        return e.post(t.default.apiPath + "?r=api/zhuangx/is-template-paid", r).then(u, i);
    }
};