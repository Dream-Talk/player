function i(i) {
    return i && i.__esModule ? i : {
        default: i
    };
}

function e(i, e, t) {
    return e in i ? Object.defineProperty(i, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[e] = t, i;
}

var t = i(require("./utils/user")), n = i(require("./apis/zhuangx")), a = require("./utils/system.js"), p = require("./utils/util.js"), h = require("./utils/wcache.js");

module.exports = {
    wuser: function(i, e, t, n, p) {
        var s = "cache_wuserlist_cat_" + i;
        h.get(s) && !t && 1 == e ? n(h.get(s)) : a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/wusers", {
            cat: i,
            page: e,
            search: t
        }, n, p, t || 1 != e ? "" : s, 600);
    },
    getStaticApi: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/common/staticSource", {
            key: i
        }, e);
    },
    template: function(i, e, t, n, p) {
        var s = "cache_templatelist_cat_" + i + "_type_" + e;
        h.get(s) && 1 == t ? n(h.get(s)) : a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/templates", {
            cat: i,
            type: e,
            page: t
        }, n, p, 1 == t ? s : "", 600);
    },
    woshishui: function(i, e, t, n) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/woshishui", {
            data: i,
            select: e
        }, t, n);
    },
    getUrl: function(i, e, t) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/geturl", {
            url: i
        }, e, t);
    },
    tousu: function(i, e, t) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/hongbao/tousu", {
            id: i,
            type: e
        }, t);
    },
    getQiniuImageTokenApi: function(i) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/upload/gettoken", {
            bucket: "pics"
        }, i);
    },
    getQiniuVideoTokenApi: function(i) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/upload/gettoken", {
            bucket: "video"
        }, i);
    },
    random: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/random", {}, i, e);
    },
    sendPayTemplate: function(i, e, t, n, p, h, s, u, o) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/hongbao/sendpaytemplate", {
            touser: i,
            template_id: e,
            page: t,
            form_id: n,
            data: p,
            color: h,
            emphasis_keyword: s
        }, u, o);
    },
    getPayParamsApi: function(i, e, t, n, p, h) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/hongbao/prepay", {
            user_id: i,
            user_name: e,
            avatar: t,
            price: n,
            post_id: p
        }, h);
    },
    getLoginApi: function(i, t, n, p, h, s) {
        var u, o = getApp(), r = o.globalData.scene, c = o.globalData.referrerInfo, m = (u = {
            jscode: i,
            rawData: t,
            signature: n
        }, e(u, "signature", n), e(u, "encryptedData", p), e(u, "iv", h), e(u, "scene", r), 
        e(u, "referrerInfo", c), u);
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/login", m, s);
    },
    newHongbaoitem: function(i, e, t, n, p, h, s, u, o) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/hongbao/newhongbaoitem", {
            user: i,
            pic: e,
            video: t,
            min: n,
            max: p,
            desc: h,
            formId: s
        }, u, o);
    },
    Hongbaoiteminfo: function(i, e, t) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/hongbao/hongbaoiteminfo", {
            id: i
        }, e, t);
    },
    init: function(i, e) {
        var t = "cache_init";
        h.get(t) ? i(h.get(t)) : a.myRequest("https://data.maiyizhi.cn/producter/php/frontend/web/index.php?r=data/default/tuijian", {}, i, e, t, 200);
    },
    tiaozhuan: function(i, e, t) {
        var n = "cache_tiaozhuan_" + i;
        h.get(n) ? e(h.get(n)) : a.myRequest("https://data.maiyizhi.cn/producter/php/frontend/web/index.php?r=data/default/tiaozhuan", {
            key: i
        }, e, t, n, 2e3);
    },
    Newduser: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/hongbao/newduser", {
            user: i
        }, e);
    },
    login: function(i, e, a, p) {
        if (!t.default.isLogin) return console.log("还未登录"), void e();
        var h = t.default.oldUserInfo;
        p ? n.default.isTemplatePaid.then(function(e) {
            var t = e.data.paid;
            i(h, t);
        }, function() {
            i(h, 0);
        }) : i(h);
    },
    tixian: function(i, e, t, n, p) {
        console.log(p), a.myRequest("https://api.maiyizhi.cn/index.php?r=api/hongbao/tixian", {
            user_id: i,
            amount: e,
            formId: t
        }, n, p);
    },
    mingxi: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/hongbao/mingxi", {
            page: i
        }, e);
    },
    sharelist: function(i, e, t, n) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/share/sharelist", {
            cat: i,
            page: e
        }, t, n);
    },
    zanshare: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/share/zanshare", {
            id: i
        }, e);
    },
    newSharelist: function(i, e, t, n, p, h) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/share/newsharelist", {
            user: i,
            pics: e,
            content: t,
            formId: n
        }, p, h);
    },
    getUser: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/userinfo", {}, i, e);
    },
    xiezi: function(i, e, t, n, h, s, u, o) {
        a.myRequest("https://" + p.randdomDomain() + ".maiyizhi.cn/producter/php/frontend/web/index.php?r=data/default/xiezi", {
            text: i,
            ziti: e,
            size: t,
            color: n,
            linewidth: h,
            lineheight: s
        }, u, o);
    },
    profile: function(i, e, t, n) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/profile", {
            user_name: i,
            avatar: e
        }, t, n);
    },
    ScreenshotDeal: function(i, t, n, p, h, s, u, o, r, c) {
        var m;
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/screenshotDeal", (m = {
            pic: i,
            systeminfo: t,
            cat: n,
            time: h,
            has_pay: s,
            title: p,
            dianliang: u
        }, e(m, "dianliang", u), e(m, "yunyingshang", o), e(m, "yunyingshang", o), m), r, c);
    },
    getQiniuAvatar: function(i, e, t) {
        -1 != i.indexOf("maiyizhi.cn") ? e({
            avatar: i
        }) : a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/getqiniuavatar", {
            avatar: i
        }, e, t);
    },
    cover: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/cover", {
            url: i
        }, e);
    },
    zhuangxlist: function(i, e, t, n, p, s, u) {
        var o = "cache_zhuangxlist_cat_" + i + "_type_" + e;
        !h.get(o) || n || 1 != t || p ? a.myRequest("https://api.maiyizhi.cn/index.php?r=api/zhuangx/zhuangxslist", {
            cat: i,
            type: e,
            page: t,
            search: n,
            isbot: p
        }, s, u, n || 1 != t || p ? "" : o, 600) : s(h.get(o));
    },
    zhuangxinfo: function(i, e, t) {
        var n = "cache_zhuangxinfo_" + i;
        h.get(n) ? e(h.get(n)) : a.myRequest("https://api.maiyizhi.cn/index.php?r=api/zhuangx/zhuangxsinfo", {
            id: i
        }, e, t, n, 1200);
    },
    zhuangxadd: function(i, e, t) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/zhuangx/zhuangxsadd", {
            id: i
        }, e, t);
    },
    bianLian: function(i, e, t, n) {
        a.myRequest("https://" + p.randdomDomain() + ".maiyizhi.cn/producter/php/frontend/web/index.php?r=TencentAI/default/index", {
            imgUrl: i,
            type: e
        }, t, n);
    },
    saveformids: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/saveformids", {
            formids: i
        }, e);
    },
    zhuangxgif: function(i, e, t) {
        a.myRequest(i, e, t);
    },
    pay: function(i, e, t, n) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/pay", {
            user_id: i,
            price: e,
            title: t
        }, n);
    },
    templatePay: function(i, e, t, n) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/templatepay", {
            type: i,
            id: e
        }, t, n);
    },
    sticker: function(i, e, t, n) {
        a.myRequest("https://" + p.randdomDomain() + ".maiyizhi.cn/producter/php/frontend/web/index.php?r=TencentAI/default/sticker", {
            imgUrl: i,
            type: e
        }, t, n);
    },
    getIcons: function(i) {
        var e = "cache_avatar_icons";
        h.get(e) ? i(h.get(e)) : a.myRequest("https://api.maiyizhi.cn/index.php?r=api/common/config&key=avataricons", {}, i, null, e, 7200);
    },
    decoration: function(i, e, t, n) {
        a.myRequest("https://" + p.randdomDomain() + ".maiyizhi.cn/producter/php/frontend/web/index.php?r=TencentAI/default/decoration", {
            imgUrl: i,
            type: e
        }, t, n);
    },
    cosmetic: function(i, e, t, n) {
        a.myRequest("https://" + p.randdomDomain() + ".maiyizhi.cn/producter/php/frontend/web/index.php?r=TencentAI/default/cosmetic", {
            imgUrl: i,
            type: e
        }, t, n);
    },
    peopleFilter: function(i, e, t, n, h) {
        a.myRequest("https://" + p.randdomDomain() + ".maiyizhi.cn/producter/php/frontend/web/index.php?r=TencentAI/default/imgfilter", {
            imgUrl: i,
            type: e,
            model: t
        }, n, h);
    },
    flower: function(i, e, t, n) {
        a.myRequest("https://" + p.randdomDomain() + ".maiyizhi.cn/producter/php/frontend/web/index.php?r=TencentAI/default/flower", {
            imgUrl: i,
            type: e,
            isNew: 1
        }, t, n);
    },
    pet: function(i, e, t, n) {
        a.myRequest("https://" + p.randdomDomain() + ".maiyizhi.cn/producter/php/frontend/web/index.php?r=TencentAI/default/objectr", {
            imgUrl: i,
            type: e,
            isNew: 1
        }, t, n);
    },
    baipishulist: function(i, e, t, n, p) {
        var s = "cache_baipishulist_cat_" + i;
        h.get(s) && !t && 1 == e ? n(h.get(s)) : a.myRequest("https://api.maiyizhi.cn/index.php?r=api/baipishu/baipishulist", {
            cat: i,
            page: e,
            search: t
        }, n, p, t || 1 != e ? "" : s, 600);
    },
    baipishuInfo: function(i, e, t) {
        var n = "cache_baipishuinfo_" + i;
        h.get(n) ? e(h.get(n)) : a.myRequest("https://api.maiyizhi.cn/index.php?r=api/baipishu/baipishusinfo", {
            id: i
        }, e, t, n, 1200);
    },
    getRandomTemplate: function(i, e, t, n, p) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/zhuangx/random", {
            type: i,
            count: e,
            refresh: t
        }, n, p);
    },
    getAd: function(i, e, t) {
        var n = i;
        h.get(n) ? e(h.get(n)) : a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/guanggao", {
            name: i
        }, e, t, n, 600);
    },
    getCeshiGuanggao: function(i, e, t) {
        var n = i;
        h.get(n) ? e(h.get(n)) : a.myRequest("https://api.maiyizhi.cn/index.php?r=api/common/config", {
            key: i
        }, e, t, n, 259200);
    },
    messagefrom: function(i, e, t) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/weixinzhushou/messagefrom", {
            value: i
        }, e, t);
    },
    checkText: function(i, e, t) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/common/txtcheck", {
            txt: i
        }, e, t);
    },
    checkImage: function(i, e, t) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/common/imgcheck", {
            pic: i
        }, e, t);
    },
    getQQTuijian: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/common/config", {
            key: "qq_tuijian"
        }, i, e);
    },
    getResult: function(i, e, t, n, p, h) {
        a.myRequestPost(i, {
            id: e,
            data: JSON.stringify(t),
            qrcode: JSON.stringify(n)
        }, p, h);
    },
    addTestResult: function(i, e, t, n, p) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/ceshi/add", {
            from_user_id: i,
            template_id: e,
            result: t
        }, n, p);
    },
    getTestResultList: function(i, e, t, n) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/ceshi/list", {
            from_user_id: i,
            page: e
        }, t, n);
    },
    getTestResultInfo: function(i, e, t, n) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/ceshi/info", {
            from_user_id: i,
            template_id: e
        }, t, n);
    },
    sendTemplate: function(i, e, t, n, p, h, s, u) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/common/sendtemplate", {
            touser: i,
            template_id: h,
            page: e,
            data: t,
            color: n,
            emphasis_keyword: p
        }, s, u);
    },
    getHotWord: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/common/config&key=hot_search_word_ceshi", {}, i, e);
    },
    getTencentImageTokenApi: function(i, e) {
        a.myRequest("https://api.maiyizhi.cn/index.php?r=api/upload/gettencenttoken", {
            bucket: "pics",
            region: "ap-guangzhou"
        }, i, e);
    }
};