Component({
    properties: {
        isShowVideoDialog: {
            type: Boolean,
            value: !1
        },
        content: {
            type: String,
            value: ""
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        from: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {
        closeDialog: function() {
            this.setData({
                isShowVideoDialog: !1
            });
        },
        viewVideo: function() {
            this.setData({
                isShowVideoDialog: !1
            }), this.triggerEvent("viewVideo", {});
        }
    }
});