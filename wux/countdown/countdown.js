function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), n = function() {
    function n() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t(this, n), Object.assign(this, {
            options: e
        }), this.__init();
    }
    return e(n, [ {
        key: "__init",
        value: function() {
            this.page = getCurrentPages()[getCurrentPages().length - 1], this.setData = this.page.setData.bind(this.page), 
            this.restart(this.options);
        }
    }, {
        key: "setDefaults",
        value: function() {
            return {
                date: "June 7, 2087 15:03:25",
                refresh: 1e3,
                offset: 0,
                onEnd: function() {},
                render: function(t) {}
            };
        }
    }, {
        key: "mergeOptions",
        value: function(t) {
            var e = this.setDefaults();
            for (var n in e) e.hasOwnProperty(n) && (this.options[n] = void 0 !== t[n] ? t[n] : e[n], 
            "date" === n && "object" != typeof this.options.date && (this.options.date = new Date(this.options.date)), 
            "function" == typeof this.options[n] && (this.options[n] = this.options[n].bind(this)));
            "object" != typeof this.options.date && (this.options.date = new Date(this.options.date));
        }
    }, {
        key: "getDiffDate",
        value: function() {
            var t = (this.options.date.getTime() - Date.now() + this.options.offset) / 1e3, e = {
                years: 0,
                days: 0,
                hours: 0,
                min: 0,
                sec: 0,
                millisec: 0
            };
            return t <= 0 ? (this.interval && (this.stop(), this.options.onEnd()), e) : (t >= 31557600 && (e.years = Math.floor(t / 31557600), 
            t -= 365.25 * e.years * 86400), t >= 86400 && (e.days = Math.floor(t / 86400), t -= 86400 * e.days), 
            t >= 3600 && (e.hours = Math.floor(t / 3600), t -= 3600 * e.hours), t >= 60 && (e.min = Math.floor(t / 60), 
            t -= 60 * e.min), e.sec = Math.round(t), e.millisec = t % 1 * 1e3, e);
        }
    }, {
        key: "leadingZeros",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            return (t = String(t)).length > e ? t : (Array(e + 1).join("0") + t).substr(-e);
        }
    }, {
        key: "update",
        value: function(t) {
            return this.options.date = "object" != typeof t ? new Date(t) : t, this.render(), 
            this;
        }
    }, {
        key: "stop",
        value: function() {
            return this.interval && (clearInterval(this.interval), this.interval = !1), this;
        }
    }, {
        key: "render",
        value: function() {
            return this.options.render(this.getDiffDate()), this;
        }
    }, {
        key: "start",
        value: function() {
            var t = this;
            return !this.interval && (this.render(), this.options.refresh && (this.interval = setInterval(function() {
                t.render();
            }, this.options.refresh)), this);
        }
    }, {
        key: "updateOffset",
        value: function(t) {
            return this.options.offset = t, this;
        }
    }, {
        key: "restart",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.mergeOptions(t), this.interval = !1, this.start(), this;
        }
    } ]), n;
}();

exports.default = n;