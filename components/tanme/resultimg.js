(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/tanme/resultimg" ], {
    "01f9": function(n, e, t) {
        var o = t("db51");
        t.n(o).a;
    },
    "181b": function(n, e, t) {
        t.r(e);
        var o = t("b180"), a = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    "9d9f": function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return a;
        });
    },
    b180: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "resimg",
            props: {
                r_img: {
                    default: ""
                },
                resheight: {
                    default: ""
                }
            },
            data: function() {
                return {};
            },
            methods: {
                previewimg: function() {
                    this.$emit("fpreview");
                },
                saveimg: function() {
                    this.$emit("fsaveimg");
                }
            }
        };
        e.default = o;
    },
    d609: function(n, e, t) {
        t.r(e);
        var o = t("9d9f"), a = t("181b");
        for (var r in a) "default" !== r && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("01f9");
        var u = t("2877"), i = Object(u.a)(a.default, o.a, o.b, !1, null, "ce6b6a06", null);
        e.default = i.exports;
    },
    db51: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/tanme/resultimg-create-component", {
    "components/tanme/resultimg-create-component": function(n, e, t) {
        t("543d").createComponent(t("d609"));
    }
}, [ [ "components/tanme/resultimg-create-component" ] ] ]);