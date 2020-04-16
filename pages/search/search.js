var t, a, e = require("../../api.js"), i = require("../../utils/config.js"), s = require("../../utils/util.js"), o = getApp().globalData.system_info, n = o.windowWidth, r = o.pixelRatio, h = 1;

Page({
    data: {
        searchValue: "",
        focus: !1,
        list: [],
        searchHistory: [],
        hotWords: [],
        isSearched: !1,
        cat: 100,
        avatarSize: "?imageView2/2/w/" + Math.ceil(.16 * n * r),
        guanggaoName: i.config.guanggaoName
    },
    onLoad: function() {
        var t = this;
        wx.getStorage({
            key: "search_history",
            success: function(a) {
                a.data && a.data.length && t.setData({
                    searchHistory: a.data
                });
            }
        }), this.getHotWord(), this.getList(5, 5);
    },
    onShow: function() {
        s.createInterstitialAd();
    },
    getHotWord: function() {
        var t = this;
        e.getHotWord(function(a) {
            t.setData({
                hotWords: a
            });
        });
    },
    handleChange: function(t) {
        this.setData({
            searchValue: t.detail
        }), t.detail || (h = 1);
    },
    handleClickKeyWord: function(t) {
        var a = t.currentTarget.dataset.keyword;
        this.setData({
            searchValue: a
        }), this.getSearchList(this.data.cat, a);
    },
    handleConfirm: function() {
        this.getSearchList(this.data.cat, this.data.searchValue), this.storageSearchHistory(this.data.searchValue);
    },
    handleClickCat: function(t) {
        var a = t.currentTarget.dataset.cat;
        this.setData({
            cat: a
        }), h = 1, this.getSearchList(a, this.data.searchValue);
    },
    onReachBottom: function() {
        t && (h++, this.getZhuangxList(this.data.cat, this.data.searchValue));
    },
    getList: function(t, a) {
        var i = this, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        e.getRandomTemplate(t, a, s, function(t) {
            i.setData({
                tuijianlist: t.user
            });
        });
    },
    getSearchList: function(i, s) {
        var o = this;
        a || (a = !0, wx.showNavigationBarLoading(), 1 == h && (this.data.list = []), e.zhuangxlist(i, 5, h, s, 0, function(e) {
            console.log("getSearchList", e), h = e.page, t = e.pageCount > e.page, a = !1, o.setData({
                list: o.data.list.concat(e.list),
                isSearched: !0,
                hasMore: t
            }, function() {
                wx.hideNavigationBarLoading();
            });
        }, function() {
            wx.hideNavigationBarLoading(), o.setData({
                isSearched: !0
            });
        }));
    },
    storageSearchHistory: function() {
        var t = this, a = this.data.searchHistory;
        a.filter(function(a) {
            return a.keyWord && a.keyWord === t.data.searchValue;
        }).length || a.unshift({
            keyWord: this.data.searchValue
        }), wx.setStorage({
            key: "search_history",
            data: a
        });
    },
    handleClear: function() {
        h = 1, this.setData({
            searchValue: "",
            focus: !0,
            list: [],
            isSearched: !1
        });
    },
    handleActionClick: function() {
        this.setData({
            searchValue: "",
            focus: !1
        }), wx.navigateBack();
    },
    handleDeleteHistory: function() {
        var t = this;
        wx.showModal({
            title: "",
            content: "确定删除历史搜索吗？",
            cancelText: "取消",
            success: function(a) {
                a.confirm && (t.setData({
                    searchHistory: []
                }), wx.setStorage({
                    key: "search_history",
                    data: null
                }));
            }
        });
    }
});