(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/AnswerBox" ], {
    "018d": function(n, t, e) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = o(e("9000")), r = o(e("6654")), u = {
            props: [ "content" ],
            data: function() {
                return {
                    contents: this.content,
                    authorAvatar: a.default,
                    answerAvatar: r.default
                };
            }
        };
        t.default = u;
    },
    1676: function(n, t, e) {
        e.r(t);
        var o = e("018d"), a = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = a.a;
    },
    "2b59": function(n, t, e) {
        e.r(t);
        var o = e("604a"), a = e("1676");
        for (var r in a) "default" !== r && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(r);
        e("a601");
        var u = e("2877"), c = Object(u.a)(a.default, o.a, o.b, !1, null, "3c330d24", null);
        t.default = c.exports;
    },
    "604a": function(n, t, e) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        e.d(t, "a", function() {
            return o;
        }), e.d(t, "b", function() {
            return a;
        });
    },
    a601: function(n, t, e) {
        var o = e("f2a4");
        e.n(o).a;
    },
    f2a4: function(n, t, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/AnswerBox-create-component", {
    "components/AnswerBox-create-component": function(n, t, e) {
        e("543d").createComponent(e("2b59"));
    }
}, [ [ "components/AnswerBox-create-component" ] ] ]);