var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function() {
    try {
        var e = Function("return this")();
        e && !e.Math && (Object.assign(e, {
            isFinite: isFinite,
            Array: Array,
            Date: Date,
            Error: Error,
            Function: Function,
            Math: Math,
            Object: Object,
            RegExp: RegExp,
            String: String,
            TypeError: TypeError,
            setTimeout: setTimeout,
            clearTimeout: clearTimeout,
            setInterval: setInterval,
            clearInterval: clearInterval
        }), "undefined" != typeof Reflect && (e.Reflect = Reflect));
    } catch (e) {}
}(), function(n) {
    function o(e) {
        for (var o, r, s = e[0], a = e[1], m = e[2], p = 0, u = []; p < s.length; p++) r = s[p], 
        c[r] && u.push(c[r][0]), c[r] = 0;
        for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (n[o] = a[o]);
        for (g && g(e); u.length; ) u.shift()();
        return i.push.apply(i, m || []), t();
    }
    function t() {
        for (var e, n = 0; n < i.length; n++) {
            for (var o = i[n], t = !0, r = 1; r < o.length; r++) {
                var a = o[r];
                0 !== c[a] && (t = !1);
            }
            t && (i.splice(n--, 1), e = s(s.s = o[0]));
        }
        return e;
    }
    function r(e) {
        return s.p + "" + e + ".js";
    }
    function s(e) {
        if (a[e]) return a[e].exports;
        var o = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, s), o.l = !0, o.exports;
    }
    var a = {}, m = {
        "common/runtime": 0
    }, c = {
        "common/runtime": 0
    }, i = [];
    s.e = function(e) {
        var n = [], o = {
            "components/GridBox": 1,
            "components/ListBox": 1,
            "components/NavgationBox": 1,
            "components/PoptestBox": 1,
            "components/PopupBox": 1,
            "components/SearchBox": 1,
            "components/SelectStar": 1,
            "components/LoadBox": 1,
            "components/SwiperBox": 1,
            "components/invinbg-image-cropper/invinbg-image-cropper": 1,
            "components/AnswerBox": 1,
            "components/AuthorBox": 1,
            "components/QuestionNum": 1,
            "components/ChannelFour": 1,
            "components/tanme/msgimg": 1,
            "components/tanme/resultimg": 1,
            "components/tanme/userimg": 1,
            "components/tanme/usermsg": 1,
            "pages/tanmegame/message": 1,
            "components/tarotmark/Result": 1,
            "components/tarotmark/zhouWei-navBar/index": 1
        };
        m[e] ? n.push(m[e]) : 0 !== m[e] && o[e] && n.push(m[e] = new Promise(function(n, o) {
            for (var t = ({
                "components/GridBox": "components/GridBox",
                "components/ListBox": "components/ListBox",
                "components/NavgationBox": "components/NavgationBox",
                "components/PoptestBox": "components/PoptestBox",
                "components/PopupBox": "components/PopupBox",
                "components/SearchBox": "components/SearchBox",
                "components/SelectStar": "components/SelectStar",
                "components/LoadBox": "components/LoadBox",
                "components/SwiperBox": "components/SwiperBox",
                "components/invinbg-image-cropper/invinbg-image-cropper": "components/invinbg-image-cropper/invinbg-image-cropper",
                "components/AnswerBox": "components/AnswerBox",
                "components/AuthorBox": "components/AuthorBox",
                "components/QuestionNum": "components/QuestionNum",
                "components/ChannelFour": "components/ChannelFour",
                "components/tanme/msgimg": "components/tanme/msgimg",
                "components/tanme/resultimg": "components/tanme/resultimg",
                "components/tanme/userimg": "components/tanme/userimg",
                "components/tanme/usermsg": "components/tanme/usermsg",
                "pages/tanmegame/message": "pages/tanmegame/message",
                "components/tarotmark/Result": "components/tarotmark/Result",
                "components/tarotmark/zhouWei-navBar/index": "components/tarotmark/zhouWei-navBar/index"
            }[e] || e) + ".wxss", r = s.p + t, a = document.getElementsByTagName("link"), c = 0; c < a.length; c++) {
                var i = a[c], p = i.getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (p === t || p === r)) return n();
            }
            var u = document.getElementsByTagName("style");
            for (c = 0; c < u.length; c++) if (i = u[c], (p = i.getAttribute("data-href")) === t || p === r) return n();
            var l = document.createElement("link");
            l.rel = "stylesheet", l.type = "text/css", l.onload = n, l.onerror = function(n) {
                var t = n && n.target && n.target.src || r, s = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
                s.request = t, delete m[e], l.parentNode.removeChild(l), o(s);
            }, l.href = r, document.getElementsByTagName("head")[0].appendChild(l);
        }).then(function() {
            m[e] = 0;
        }));
        var t = c[e];
        if (0 !== t) if (t) n.push(t[2]); else {
            var a = new Promise(function(n, o) {
                t = c[e] = [ n, o ];
            });
            n.push(t[2] = a);
            var i, p = document.createElement("script");
            p.charset = "utf-8", p.timeout = 120, s.nc && p.setAttribute("nonce", s.nc), p.src = r(e), 
            i = function(n) {
                p.onerror = p.onload = null, clearTimeout(u);
                var o = c[e];
                if (0 !== o) {
                    if (o) {
                        var t = n && ("load" === n.type ? "missing" : n.type), r = n && n.target && n.target.src, s = new Error("Loading chunk " + e + " failed.\n(" + t + ": " + r + ")");
                        s.type = t, s.request = r, o[1](s);
                    }
                    c[e] = void 0;
                }
            };
            var u = setTimeout(function() {
                i({
                    type: "timeout",
                    target: p
                });
            }, 12e4);
            p.onerror = p.onload = i, document.head.appendChild(p);
        }
        return Promise.all(n);
    }, s.m = n, s.c = a, s.d = function(e, n, o) {
        s.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        });
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, s.t = function(n, o) {
        if (1 & o && (n = s(n)), 8 & o) return n;
        if (4 & o && "object" === (void 0 === n ? "undefined" : e(n)) && n && n.__esModule) return n;
        var t = Object.create(null);
        if (s.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: n
        }), 2 & o && "string" != typeof n) for (var r in n) s.d(t, r, function(e) {
            return n[e];
        }.bind(null, r));
        return t;
    }, s.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return s.d(n, "a", n), n;
    }, s.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
    }, s.p = "/", s.oe = function(e) {
        throw console.error(e), e;
    };
    var p = global.webpackJsonp = global.webpackJsonp || [], u = p.push.bind(p);
    p.push = o, p = p.slice();
    for (var l = 0; l < p.length; l++) o(p[l]);
    var g = u;
    t();
}([]);