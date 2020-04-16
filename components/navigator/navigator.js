var e = getApp();

Component({
    properties: {
        titleText: {
            type: String,
            value: "趣味图片制作器"
        },
        backgroundColor: {
            type: String,
            value: "#b69eef"
        },
        parentBackgroundColor: {
            type: String,
            value: "#f2f2f2"
        },
        textStyle: {
            type: String,
            value: "#fff"
        },
        isFromSitemap: {
            type: Boolean,
            value: !1
        },
        zIndex: {
            type: Number,
            value: 1e3
        },
        description: {
            type: String,
            value: ""
        },
        url: {
            type: String,
            value: ""
        }
    },
    data: {
        statusBarHeight: e.globalData.system_info.statusBarHeight
    },
    methods: {
        reback: function() {
            this.triggerEvent("reback", {});
        }
    }
});