Component({
    properties: {
        content: {
            type: String,
            value: "弹窗内容"
        }
    },
    data: {
        isShow: !1
    },
    methods: {
        toggleSharePopup: function() {
            this.triggerEvent("toggleSharePopup");
        },
        shareToChats: function() {
            this.triggerEvent("shareToChats");
        },
        shareToMoments: function() {
            this.triggerEvent("shareToMoments");
        },
        toggleShowDialog: function() {
            this.triggerEvent("showSharebutton");
        },
        stop: function() {}
    }
});