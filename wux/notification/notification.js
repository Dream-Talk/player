function t(t, i, n) {
    return i in t ? Object.defineProperty(t, i, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[i] = n, t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../component"));

exports.default = {
    setDefaults: function() {
        return {
            image: void 0,
            title: void 0,
            text: void 0,
            timer: 3e3,
            data: void 0,
            onClick: function() {},
            onClose: function() {}
        };
    },
    show: function() {
        var n = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = this, s = Object.assign({
            style: ""
        }, this.setDefaults(), e), f = function(t) {
            var i = t.touches[0];
            return {
                x: i.pageX,
                y: i.pageY
            };
        }, a = function(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            i.setData(t({}, "$wux.notification.style", n ? "transform: translate3d(0, " + n + "px, 0)" : ""));
        }, h = new i.default({
            scope: "$wux.notification",
            data: s,
            methods: {
                hide: function() {
                    if (this.removed) return !1;
                    this.removed = !0, this.setHidden("notification-out", 400), "function" == typeof s.onClose && s.onClose(s.data);
                },
                show: function() {
                    if (this.removed) return !1;
                    this.setVisible("notification-in");
                },
                bindtouchstart: function(t) {
                    o.touching = !0, this.start = f(t), this.diffX = this.diffY = 0;
                },
                bindtouchmove: function(t) {
                    if (!this.start) return !1;
                    this.move = f(t), this.diffX = this.move.x - this.start.x, this.diffY = this.move.y - this.start.y, 
                    this.diffY > 0 && (this.diffY = Math.sqrt(this.diffY)), a(this, this.diffY);
                },
                bindtouchend: function(t) {
                    o.touching = !1, a(this), this.diffY < 0 && Math.abs(this.diffY) > 40 && this.hide(), 
                    Math.abs(this.diffX) <= 1 && Math.abs(this.diffY) <= 1 && "function" == typeof s.onClick && s.onClick(s.data), 
                    this.start = !1;
                },
                touchcancel: function(t) {}
            }
        });
        return h.show(), function t() {
            n._notification && (clearTimeout(n._notification.timeout), n._notification = null), 
            o._notification = {
                hide: h.hide
            }, o._notification.timeout = setTimeout(function() {
                o.touching ? t() : h.hide();
            }, s.timer);
        }(), o._notification.hide;
    }
};