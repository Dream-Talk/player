var t, a, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/user.js")), i = require("../../api.js"), n = require("../../utils/config.js"), o = require("../../utils/util.js"), s = getApp(), r = 1, l = s.globalData.system_info, u = l.windowWidth, d = l.pixelRatio;

Page({
    data: {
        isLoading: !0,
        avatarSize: "?imageView2/2/w/" + Math.ceil(.16 * u * d),
        guanggaoName: n.config.guanggaoName
    },
    onLoad: function(t) {
        wx.showToast({
            title: "加载中……",
            duration: 2e4,
            icon: "loading"
        }), wx.canIUse("hideTabBar") && "qq_mini" != n.config.AppPlatform ? wx.hideTabBar() : this.setData({
            cannotUseHideTabBar: !0
        });
    },
    onShow: function() {
        r = 1, this.getList(), o.createInterstitialAd();
    },
    getList: function() {
        var n = this;
        a || (a = !0, wx.showNavigationBarLoading(), 1 == r && (this.data.list = []), i.getTestResultList(e.default.openId, r, function(e) {
            console.log("res", e), t = e.pageCount > e.page, a = !1;
            var i = e.list;
            i.forEach(function(t) {
                t.data.forEach(function(t) {
                    t.result = JSON.parse(t.result);
                });
                var a = t.data.filter(function(t) {
                    return t.result.isSelf;
                }), e = t.data.filter(function(t) {
                    return t.result.user_name && !t.result.isSelf;
                });
                t.data = e, t.selfData = a;
            }), wx.stopPullDownRefresh(), n.setData({
                list: n.data.list.concat(i),
                hasMore: t,
                isLoading: !1
            }, function() {
                wx.hideNavigationBarLoading(), wx.hideToast();
            });
        }, function() {
            wx.stopPullDownRefresh(), wx.hideNavigationBarLoading(), wx.hideToast(), wx.showToast({
                title: "数据不存在或者被删除",
                duration: 1500,
                icon: "none"
            }), setTimeout(function() {
                wx.navigateTo({
                    url: "/pages/counsel/index/index"
                });
            }, 1500);
        }));
    },
    viewDetail: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.list[a], i = e.data, n = e.template, o = e.selfData, r = e.template_id;
        s.globalData.g_testorDatas = {
            data: i,
            template: n,
            selfData: o,
            template_id: r
        }, wx.navigateTo({
            url: "/pages/detail/detail"
        });
    },
    onPullDownRefresh: function() {
        r = 1, this.getList();
    },
    onReachBottom: function() {
        t && (r++, this.getList());
    }
});