var t = require("../../utils/config.js"), i = getApp();

Component({
    properties: {
        top: {
            type: Number,
            value: 0
        }
    },
    data: {
        platform: i.globalData.system_info.platform,
        AppPlatform: t.config.AppPlatform
    },
    attached: function() {
        var t = this, i = function() {
            wx.getStorage({
                key: "has_show_joinMini",
                complete: function(i) {
                    var e = !1, a = void 0;
                    i.data ? i.data < 5 && (e = !0, a = i.data + 1) : (e = !0, a = 1), t.setData({
                        isShowJoinMini: e
                    }), e && (setTimeout(function() {
                        t.setData({
                            isShowJoinMini: !1
                        });
                    }, 2e4), wx.setStorage({
                        key: "has_show_joinMini",
                        data: a
                    }), wx.setStorage({
                        key: "last_show_joinMini_time",
                        data: new Date().getTime()
                    }));
                }
            });
        };
        wx.getStorage({
            key: "last_show_joinMini_time",
            complete: function(t) {
                t.data ? new Date().getTime() - t.data > 18e4 && i() : i();
            }
        });
    },
    methods: {
        cancelJoinMini: function() {
            this.setData({
                isShowJoinMini: !1
            });
        }
    }
});