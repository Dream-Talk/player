function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a, i, n, s = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/user.js")), o = getApp(), r = 1, l = require("../../../api.js"), u = require("../../../zanui/index"), d = require("../../../utils/util.js"), c = require("../../../utils/config.js"), h = o.globalData.system_info, g = h.windowWidth, p = h.pixelRatio;

Page(Object.assign({}, u.Tab, {
    data: {
        inputShowed: !1,
        nonet: !1,
        inputVal: "",
        guanggaoName: c.config.guanggaoName,
        shenhe: o.globalData.shenhe,
        AppPlatform: c.config.AppPlatform,
        avatarSize: "?imageView2/2/w/" + Math.ceil(.16 * g * p)
    },
    showInput: function() {
        console.log(n), this.setData({
            inputShowed: !0
        }), n.length && this.setData({
            searchHistory: n.reverse()
        });
    },
    hideInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: !1,
            searchHistory: []
        });
    },
    clearInput: function() {
        this.setData({
            inputVal: "",
            searchResult: []
        });
    },
    inputTyping: function(t) {
        var e = this;
        wx.showNavigationBarLoading(), e.setData({
            inputVal: t.detail.value
        }), l.zhuangxlist(100, 5, r, t.detail.value, 0, function(a) {
            return console.log(a), wx.hideNavigationBarLoading(), e.setData({
                searchResult: a.list
            }), t.detail.value;
        });
    },
    select: function(t) {
        if (this.data.inputVal) {
            var e = {
                name: t.currentTarget.dataset.name,
                avatar: t.currentTarget.dataset.avatar,
                id: t.currentTarget.dataset.id,
                path: t.currentTarget.dataset.path
            };
            n && (n.push(e), n.length >= 10 && n.shift()), wx.setStorageSync("zhuangx_searchHistory", n);
        }
        this.hideInput(), console.log(t.currentTarget.dataset.path), t.currentTarget.dataset.path ? wx.navigateTo({
            url: t.currentTarget.dataset.path
        }) : wx.navigateTo({
            url: "/pages/counsel/detail/detail?scene=" + t.currentTarget.dataset.id
        });
    },
    onPullDownRefresh: function() {
        r = 1, this.getList(a, "");
    },
    onReachBottom: function() {
        e && (r++, this.getList(a, ""));
    },
    onShareAppMessage: function() {
        return {
            title: "我在这里测试了星座，简直太准了！",
            path: "/pages/counsel/index/index",
            imageUrl: "https://youtupics.maiyizhi.cn/upload_15591968310.jpg",
            generalWebpageUrl: "http://www.maiyizhi.cn/index.php?r=common/index/qqmp"
        };
    },
    onShow: function(t) {
        d.createInterstitialAd(), wx.reportAnalytics("enter_home_page", {});
    },
    onLoad: function(t) {
        t.scene ? o.globalData.userModelInit.then(function() {
            t.sharerId == s.default.openId ? wx.navigateTo({
                url: "/pages/detail/detail?from_user_id=" + t.sharerId + "&template_id=" + t.scene
            }) : wx.navigateTo({
                url: "/pages/counsel/detail/detail?scene=" + t.scene
            });
        }) : t.from_user_id && wx.navigateTo({
            url: "/pages/detail/detail?from_user_id=" + t.from_user_id + "&template_id=" + t.template_id
        }), n = wx.getStorageSync("zhuangx_searchHistory"), d.isEmptyObject(n) && (n = []), 
        a = t.cat ? t.cat : 100, r = 1, i = !1, this.getList(a, "", "1129" == o.globalData.scene ? 1 : 0);
    },
    refresh: function() {
        i = !1, this.getList(a, "");
    },
    getList: function(n, s) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, u = this;
        d.isEmptyObject(u.data.list) && (u.data.list = []), i || (i = !0, wx.showNavigationBarLoading(), 
        1 == r && wx.showToast({
            title: "加载中……",
            duration: 2e4,
            icon: "loading"
        }), l.zhuangxlist(n, 5, r, s, o, function(s) {
            r = s.page, e = s.pageCount > s.page, i = !1, s.cats.selectedId = n, s.cats.scroll = !0, 
            1 == r && (u.data.list = []);
            var o = 100;
            s.cats.list.forEach(function(t, e, i) {
                t.id == a && e >= 2 && (o = s.cats.list[e - 2].id);
            }), wx.stopPullDownRefresh(), u.setData(t({
                tabs: s.cats,
                tuijian: s.slider,
                nonet: !1,
                list: u.data.list.concat(s.list),
                hasMore: e
            }, "tabs.scrollIntoViewId", o)), wx.hideToast(), wx.hideNavigationBarLoading();
        }, function(t) {
            console.log(t), u.setData({
                nonet: !0
            }), wx.stopPullDownRefresh(), wx.hideToast(), wx.hideNavigationBarLoading();
        }));
    },
    handleZanTabChange: function(e) {
        var i, n = this, s = e.componentId;
        r = 1, a = e.selectedId;
        var o = 100;
        this.data.tabs.list.forEach(function(t, e, i) {
            t.id == a && e >= 2 && (o = n.data.tabs.list[e - 2].id);
        }), this.setData((i = {}, t(i, s + ".selectedId", a), t(i, s + ".scrollIntoViewId", o), 
        t(i, "list", null), i)), this.getList(a, "");
    },
    showSelfTab: function() {
        this.setData({
            showSelfTab: !0
        });
    },
    hideSelfTab: function() {
        this.setData({
            showSelfTab: !1
        });
    },
    chooseTab: function(t) {
        this.setData({
            showSelfTab: !1
        });
        var e = t.currentTarget.dataset, a = {
            componentId: e.componentId,
            selectedId: e.itemId,
            title: e.title
        };
        this.handleZanTabChange(a);
    },
    guanzhu: function(t) {
        var e = this, a = t.detail, i = a.attention_logo, n = a.attention_name, s = a.attention_btn_name;
        this.setData({
            attention_logo: i,
            attention_name: n,
            attention_btn_name: s
        }, function() {
            e.selectComponent("#attention").showtype2();
        });
    },
    collectFormId: function(t) {
        t.detail && t.detail.formId && d.dealFormIds(t.detail.formId);
    }
}));