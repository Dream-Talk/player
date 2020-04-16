var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/user"));

Component({
    properties: {
        size: {
            type: String,
            value: "default"
        },
        type: {
            type: String,
            value: "default"
        },
        plain: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        clearButton: {
            type: Boolean,
            value: !1
        },
        clearType: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isLogin: e.default._isLogin
    },
    attached: function() {
        console.log("attached", e.default._isLogin), this.setData({
            isLogin: e.default._isLogin
        });
    },
    methods: {
        handleGetUserInfo: function(t) {
            var n = this;
            console.log("event", t);
            var o = t.detail;
            o.hasOwnProperty("userInfo") ? e.default.updateUserInfo(o).then(function(e) {
                console.log("detail", o), n.triggerEvent("success", {});
            }, function(e) {
                n.triggerEvent("error", {
                    message: e.message
                });
            }) : this.triggerEvent("error", {
                refused: 1
            });
        },
        handleGetUserInfo2: function() {
            this.triggerEvent("success", {});
        }
    }
});