var Bmob = require('./utils/Bmob-1.7.1.min.js');
Bmob.initialize("637cda980139564cadd72ea274f4ca16", "0b0fde1f8591785e6cbc091efc7fa9e8");
function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var n = e(require("./utils/user.js")), a = e(require("./utils/event")), t = require("./utils/config.js"), i = require("./api.js");

App({
    onLaunch: function(e) {
      const query = Bmob.Query('Pass');
      query.get('	QWqbMMMN').then(res => {
       wx.setStorageSync('Pass', res.Pass);
              }).catch(err => {
      })
        var s = this;
        this.globalData.getAdPromise = new Promise(function(e, n) {
            i.getAd(t.config.guanggaoName, function(n) {
                var a = JSON.parse(n.content);
                if (a.rewardedVideoAd) {
                    var i = a.rewardedVideoAd[t.config.app_name];
                    i && i.adUnitId && (s.globalData.isSetRewardedVideoAdUnitId = !0);
                }
                e();
            }, function() {
                e();
            });
        }), this.globalData.system_info = wx.getSystemInfoSync(), this.globalData.userModelInit = new Promise(function(e, t) {
            a.default.on("session_expired", s, function() {
                n.default.checkLogin(!0).then(function() {
                    e();
                });
            });
        }), setTimeout(function() {
            wx.showTabBarRedDot({
                index: 2
            });
        }, 500), e.scene ? this.globalData.scene = e.scene : this.globalData.scene = "", 
        e.referrerInfo ? this.globalData.referrerInfo = JSON.stringify(e.referrerInfo) : this.globalData.referrerInfo = "", 
        !e.scene || "1007" != e.scene && "1008" != e.scene && "1044" != e.scene && "1012" != e.scene && "1048" != e.scene && "1074" != e.scene || wx.request({
            url: "https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/saomatj",
            data: {
                scene: e.scene,
                app: t.config.app_name
            }
        });
    },
    onHide: function() {},
    onShow: function(e) {
        this.globalData.userModelInit = new Promise(function(e, a) {
            n.default.init().then(function() {
                console.log("userModel", n.default), e();
            });
        }), console.log(e), this.globalData.scene = e.scene, !e.scene || "1038" != e.scene || this.globalData.shenhe || this.globalData.hasBack || (this.globalData.hasBack = !0, 
        wx.switchTab({
            url: "/pages/counsel/index/index"
        }));
    },
    globalData: {
        user: null,
        previews: {},
        shenhe: new Date(2018, 7, 29) > new Date(),
        system_info: null,
        pass:"Pass"
    }
});