Component({
    properties: {
        attention_name: {
            type: String,
            value: "芝麻小客服"
        },
        attention_content: {
            type: String,
            value: "芝麻小事网络旗下产品1.芝麻小客服，小程序和公众..."
        },
        attention_logo: {
            type: String,
            value: "../../../images/ykf_log.png"
        },
        attention_img: {
            type: String,
            value: ""
        },
        attention_btn: {
            type: String,
            value: "关注"
        },
        attention_type: {
            type: String,
            value: "1"
        },
        dialog_type: {
            type: String,
            value: "2"
        },
        scenes_value: {
            type: String,
            value: ""
        },
        attention_btn_name: {
            type: String,
            value: ""
        }
    },
    externalClasses: [ "gzclass" ],
    data: {
        scenes: [ "1011", "1047", "1089", "1038" ],
        is_effictive: "",
        is_config: "1"
    },
    ready: function(t) {
        this.setData({
            is_effictive: this.data.scenes.indexOf(this.data.scenes_value)
        }), this.authodialog1 = this.selectComponent("#authodialog1"), this.authodialog2 = this.selectComponent("#authodialog2"), 
        this.authodialog3 = this.selectComponent("#authodialog3");
    },
    methods: {
        showtype1: function() {
            this.authodialog1.show();
        },
        showtype2: function() {
            this.authodialog2.show();
        },
        showtype3: function() {
            this.authodialog3.show();
        },
        confirm1: function(t) {
            console.log(t.detail);
            var o = this.authodialog1;
            wx.getImageInfo({
                src: t.detail,
                success: function(t) {
                    console.log(t);
                    var e = t.path;
                    wx.saveImageToPhotosAlbum({
                        filePath: e,
                        success: function(t) {
                            console.log(t), wx.showToast({
                                title: "保存成功"
                            }), o.hidden();
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    });
                },
                fail: function(t) {
                    console.log(t);
                }
            });
        },
        confirm2: function(t) {
            console.log(t.detail), this.authodialog2.hidden();
        },
        confirm3: function(t) {
            var o = this.authodialog3;
            wx.setClipboardData({
                data: t.detail,
                success: function(t) {
                    wx.getClipboardData({
                        success: function(t) {
                            o.hidden();
                        }
                    });
                }
            });
        },
        getgzsucesseresult: function(t) {
            console.log(t);
        },
        getgzerroresult: function(t) {
            this.setData({
                is_config: "0"
            }), console.log(t);
        }
    }
});