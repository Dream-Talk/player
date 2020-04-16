function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

require("../../../wux/wux");

var e, a, i, n, s = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/user")), o = require("../../../api.js"), r = require("../../../utils/util.js"), l = require("../../../utils/config.js"), u = require("../../../zanui/index"), c = getApp(), h = 1, d = c.globalData.system_info, g = d.windowWidth, p = d.pixelRatio;

Page(Object.assign({}, u.Tab, {
    data: {
        inputShowed: !1,
        inputVal: "",
        nonet: !1,
        AppPlatform: l.config.AppPlatform,
        guanggaoName: l.config.guanggaoName,
        avatarSize: "?imageView2/2/w/" + Math.ceil(.16 * g * p)
    },
    showInput: function() {
        console.log(n), wx.reportAnalytics("search", {}), this.setData({
            inputShowed: !0
        }), n.length && this.setData({
            searchHistory: n.reverse()
        });
    },
    bindfoucs: function() {
        console.log("bindfoucs");
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
        this.setData({
            inputVal: t.detail.value
        }), wx.showNavigationBarLoading(), o.zhuangxlist(100, 6, h, t.detail.value, 0, function(t) {
            console.log(t), e.setData({
                searchResult: t.list
            }), wx.hideNavigationBarLoading();
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
            url: "/pages/zhuangx/edit/edit?scene=" + t.currentTarget.dataset.id
        });
    },
    onPullDownRefresh: function() {
        h = 1, this.getList(a, "");
    },
    onReachBottom: function() {
        e && (h++, this.getList(a, ""));
    },
    onShareAppMessage: function() {
        return {
            title: "我在这里测试了星座，简直太准了！",
            path: "/pages/zhuangx/list/list?type=1",
            imageUrl: "https://youtupics.maiyizhi.cn/upload_15591968310.jpg",
            generalWebpageUrl: "http://www.maiyizhi.cn/index.php?r=common/index/qqmp"
        };
    },
    openGuide: function() {
        wx.setStorageSync("has_show_mianze_guide", 1);
    },
    close: function() {
        this.guide("close");
    },
    guide: function(t) {
        var e = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = e, e.opacity(0).rotateX(-100).step(), this.setData({
            animationData: e.export()
        }), setTimeout(function() {
            e.opacity(1).rotateX(0).step(), this.setData({
                animationData: e
            }), "close" == t && this.setData({
                showModalStatus: !1
            });
        }.bind(this), 200), "open" == t && this.setData({
            showModalStatus: !0
        });
    },
    onShow: function(t) {
        var e = this;
        c.globalData.userModelInit.then(function() {
            e.setData({
                isLogin: s.default.isLogin
            });
        }, function() {}), wx.getStorage({
            key: "rejectNumbers",
            success: function(t) {
                t.data >= 2 && e.setData({
                    rejectTwo: !0
                });
            }
        }), r.createInterstitialAd(), wx.reportAnalytics("enter_home_page", {});
    },
    onLoad: function(t) {
        wx.canIUse("hideTabBar") && "qq_mini" != l.config.AppPlatform ? wx.hideTabBar() : this.setData({
            cannotUseHideTabBar: !0
        });
        var e = this;
        c.globalData.shenhe && (e.setData({
            isVerify: c.globalData.shenhe
        }), c.globalData.shenhe && wx.setNavigationBarTitle({
            title: "头像制作"
        })), t.scene && c.globalData.userModelInit.then(function() {
            t.sharerId && t.sharerId != s.default.openId && wx.setStorage({
                key: "from_user_id",
                data: t.sharerId
            }), t.sharerId == s.default.openId ? wx.navigateTo({
                url: "/pages/detail/detail?from_user_id=" + t.sharerId + "&template_id=" + t.scene
            }) : wx.navigateTo({
                url: "/pages/zhuangx/edit/edit?scene=" + t.scene
            });
        }), n = wx.getStorageSync("zhuangx_searchHistory"), r.isEmptyObject(n) && (n = []), 
        a || (a = t.cat ? t.cat : 100), h = 1, i = !1, this.getList(a, "", "1129" == c.globalData.scene ? 1 : 0), 
        this.setData({
            isSitemap: "1129" == c.globalData.scene
        }), wx.getStorageSync("has_show_mianze_guide") || this.openGuide();
    },
    selectTemplate: function(t) {
        var e = this;
        console.log("e", t), t && "error" == t.type ? wx.getStorage({
            key: "rejectNumbers",
            complete: function(t) {
                if (t.data) a = t.data + 1; else var a = 1;
                wx.setStorage({
                    key: "rejectNumbers",
                    data: a
                }), a >= 2 && e.setData({
                    rejectTwo: !0
                });
            }
        }) : t && "success" == t.type && this.setData({
            isLogin: s.default.isLogin
        });
        var a = t.currentTarget.dataset, i = a.id, n = a.path;
        n ? wx.navigateTo({
            url: n
        }) : wx.navigateTo({
            url: "/pages/zhuangx/edit/edit?scene=" + i
        });
    },
    refresh: function() {
        i = !1, this.getList(a, "");
    },
    getList: function(t, a) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = this;
        r.isEmptyObject(s.data.list) && (s.data.list = []), i || (i = !0, wx.showNavigationBarLoading(), 
        1 == h && wx.showToast({
            title: "加载中……",
            duration: 2e4,
            icon: "loading"
        }), o.zhuangxlist(t, 6, h, a, n, function(a) {
            h = a.page, e = a.pageCount > a.page, i = !1, a.cats.selectedId = t, a.cats.scroll = !0, 
            1 == h && (s.data.list = []), wx.stopPullDownRefresh(), s.setData({
                tabs: a.cats,
                tuijian: a.slider,
                nonet: !1,
                list: s.data.list.concat(a.list),
                hasMore: e
            }, function() {
                wx.hideToast(), wx.hideNavigationBarLoading();
            });
        }, function(t) {
            console.log(t), s.setData({
                nonet: !0
            }), wx.stopPullDownRefresh(), wx.hideToast(), wx.hideNavigationBarLoading();
        }));
    },
    handleZanTabChange: function(e) {
        var i, n = this, s = e.componentId;
        h = 1, a = e.selectedId;
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
        t.detail && t.detail.formId && r.dealFormIds(t.detail.formId);
    }
}));