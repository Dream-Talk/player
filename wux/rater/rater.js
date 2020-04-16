function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../component"));

exports.default = {
    setDefaults: function() {
        return {
            max: 5,
            star: "★",
            value: 0,
            activeColor: "#fc6",
            margin: 2,
            fontSize: 25,
            disabled: !1,
            text: [],
            defaultTextColor: "#999",
            callback: function() {}
        };
    },
    data: function() {
        return {
            stars: [],
            colors: [],
            cutIndex: -1,
            cutPercent: 0
        };
    },
    init: function(a) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = Object.assign({
            animateCss: void 0,
            visible: !1
        }, this.data(), this.setDefaults(), n), u = function(e, a) {
            for (var n = a.getComponentData(), r = n.max, u = n.value, o = n.activeColor, i = [], s = 0; s < r; s++) s <= u - 1 ? i.push(o) : i.push("#ccc"), 
            a.setData(t({}, "$wux.rater." + e + ".colors", i));
        }, o = function(e, a) {
            var n, r = a.getComponentData().value.toString().split("."), u = 1 === r.length ? [ r[0], 0 ] : r;
            a.setData((n = {}, t(n, "$wux.rater." + e + ".cutIndex", 1 * u[0]), t(n, "$wux.rater." + e + ".cutPercent", 10 * u[1]), 
            n));
        }, i = new e.default({
            scope: "$wux.rater." + a,
            data: r,
            methods: {
                handlerClick: function(t) {
                    var e = t.currentTarget.dataset.index, a = this.getComponentData(), n = a.value;
                    if (a.disabled) return !1;
                    this.update(n === e + 1 ? e : e + 1);
                },
                show: function() {
                    this.setVisible();
                },
                update: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = this.getComponentData(), i = Number(e);
                    this.setData(t({}, "$wux.rater." + a + ".value", i < 0 ? 0 : i > n.max ? n.max : i)), 
                    u(a, this), o(a, this), "function" == typeof r.callback && r.callback(n.value, n, r.text);
                }
            }
        });
        return function(e, a) {
            for (var n = a.getComponentData().max, r = [], u = 0; u < n; u++) r.push(u);
            a.setData(t({}, "$wux.rater." + e + ".stars", r));
        }(a, i), u(a, i), o(a, i), i.show(), i;
    }
};