Component({
    properties: {
        app_name: {
            type: String,
            value: "芝麻小客服"
        },
        app_logo: {
            type: String,
            value: "../../../../images/ykf_log.png"
        },
        app_img: {
            type: String,
            value: ""
        },
        btn_name: {
            type: String,
            value: "同意"
        },
        dialog_type: {
            type: String,
            value: ""
        }
    },
    data: {
        is_author: !0,
        userinfo: null
    },
    methods: {
        show: function(t) {
            this.setData({
                is_author: !1
            });
        },
        hidden: function(t) {
            this.setData({
                is_author: !0
            });
        },
        hide: function(t) {
            "author" == t.target.id && this.setData({
                is_author: !0
            });
        },
        _confirm: function(t) {
            "2" == this.data.dialog_type ? this.triggerEvent("confirm", "2") : "1" == this.data.dialog_type ? this.triggerEvent("confirm", this.data.app_img.substring(3)) : "3" == this.data.dialog_type && this.triggerEvent("confirm", this.data.app_name);
        }
    }
});