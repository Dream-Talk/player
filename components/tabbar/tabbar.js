var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/tabbarconfig.js")), o = require("../../utils/config.js");

Component({
    properties: {
        activeIdx: {
            type: Number,
            value: 0
        },
        auth: {
            type: Number,
            value: 0,
            observer: "onAuthChanged"
        }
    },
    data: {
        tabbarList: e.default,
        _auth: 0,
        guanggaoName: o.config.guanggaoName,
        AppPlatform: o.config.AppPlatform
    },
    methods: {
        handleItemTap: function(t) {
            var e = t.currentTarget.dataset, o = e.idx, a = e.path;
            o !== this.data.activeIdx ? a && wx.switchTab({
                url: "/" + a
            }) : this.trigger("refresh");
        },
        onAuthChanged: function(t) {
            wx.setStorageSync("__com-tabbar-auth", t), this.setData({
                _auth: t
            });
        },
        trigger: function(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments[2];
            if (!e) throw new TypeError("没有自定义事件名");
            this.triggerEvent(e, o), console.log("发送 " + e + " 事件,携带的值为 " + ("object" === (void 0 === o ? "undefined" : t(o)) ? JSON.stringify(o) : o) + " " + (a ? "   ---   " + a : ""));
        }
    },
    ready: function() {},
    pageLifetimes: {
        show: function() {
            console.log("show"), this.setData({
                _auth: wx.getStorageSync("__com-tabbar-auth")
            });
        }
    }
});