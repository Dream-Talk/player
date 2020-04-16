function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, r, a) {
        return r && e(t.prototype, r), a && e(t, a), t;
    };
}(), r = {}, a = function() {
    function a(t, r) {
        e(this, a), this.prefix = t || "appCache_", this.syncStorage = r || !1;
    }
    return t(a, [ {
        key: "_getKey",
        value: function(e) {
            return this.prefix + e;
        }
    }, {
        key: "_getValueFromObject",
        value: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!e) return [ e, 0 ];
            if (!e.hasOwnProperty("_appCache")) return [ e, 0 ];
            var r = 0;
            return t && e.maxAge > 0 && new Date().getTime() - e.cacheTime >= e.maxAge && (r = 1), 
            {
                value: e.value,
                expired: r
            };
        }
    }, {
        key: "get",
        value: function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            e = this._getKey(e);
            var a = null;
            if (this.caches.hasOwnProperty(e)) {
                var n = this._getValueFromObject(this.caches[e], t);
                n.expired || (a = n.value);
            } else if (null === r && this.syncStorage || r) {
                var i = wx.getStorageSync(e);
                if (i) {
                    var u = this._getValueFromObject(JSON.parse(i), t);
                    u.expired || (a = u.value);
                }
            }
            return a;
        }
    }, {
        key: "getAsync",
        value: function(e) {
            var t = this, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return e = this._getKey(e), new Promise(function(n, i) {
                if (t.caches.hasOwnProperty(e)) {
                    var u = t._getValueFromObject(t.caches[e], r);
                    u.expired ? i(u) : n(u.value);
                } else null === a && t.syncStorage || a ? wx.getStorage({
                    key: e,
                    success: function(e) {
                        var a = JSON.parse(e.data), u = t._getValueFromObject(a, r);
                        u.expired ? i(u) : n(u.value);
                    },
                    fail: i
                }) : i(new Error("没有缓存!"));
            });
        }
    }, {
        key: "set",
        value: function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            e = this._getKey(e);
            var n = {
                value: t,
                cacheTime: new Date().getTime(),
                maxAge: r
            };
            n._appCache = 1, this.caches[e] = n, (null === a && this.syncStorage || a) && wx.setStorage({
                key: e,
                data: JSON.stringify(this.caches[e])
            });
        }
    }, {
        key: "remove",
        value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            e = this._getKey(e), delete this.caches[e], (null === t && this.syncStorage || t) && wx.removeStorage({
                key: e
            });
        }
    }, {
        key: "caches",
        get: function() {
            return r.hasOwnProperty(this.prefix) || (r[this.prefix] = {}), r[this.prefix];
        }
    } ]), a;
}();

exports.default = a;