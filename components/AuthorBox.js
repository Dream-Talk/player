(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/AuthorBox" ], {
    "7a5b": function(t, e, s) {},
    "7ca2": function(t, e, s) {
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
        s.d(e, "a", function() {
            return n;
        }), s.d(e, "b", function() {
            return a;
        });
    },
    "7db3": function(t, e, s) {
        s.r(e);
        var n = s("7ca2"), a = s("be95");
        for (var o in a) "default" !== o && function(t) {
            s.d(e, t, function() {
                return a[t];
            });
        }(o);
        s("bb19");
        var i = s("2877"), u = Object(i.a)(a.default, n.a, n.b, !1, null, "64c5f09e", null);
        e.default = u.exports;
    },
    aebd: function(t, e, s) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = n(s("9000")), o = n(s("0dc9")), i = n(s("cd71")), u = n(s("6654")), r = n(s("6ba3")), c = n(s("e008")), d = n(s("2321")), f = n(s("d7cf")), p = !1;
            t.createInnerAudioContext() && (p = t.createInnerAudioContext());
            var l = getApp(), h = {
                props: [ "content", "needAsk", "needlogin" ],
                data: function() {
                    return {
                        authorAvatar: a.default,
                        answerAvatar: l.globalData.user.avatarUrl ? l.globalData.user.avatarUrl : u.default,
                        contents: this.content,
                        selectIcon: r.default,
                        promptMessage: o.default,
                        unselectIcon: c.default,
                        originalQuce: i.default,
                        active: -1,
                        show: !0,
                        audiores: {
                            icon: d.default,
                            tips: "点击播放",
                            status: "pause",
                            point: !0
                        },
                        startstatus: !0
                    };
                },
                methods: {
                    start: function() {
                        this.startstatus && (this.startstatus = !1, this.$parent.start());
                    },
                    overanswer: function() {
                        this.startstatus && (this.startstatus = !1, this.$parent.overAnswer());
                    },
                    getuserinfo: function(t) {
                        console.log(t), this.startstatus && (this.startstatus = !1, this.$parent.getUserInfo(t));
                    },
                    formSubmit: function(t) {
                        this.$parent.formSubmit(t);
                    },
                    nextQuestion: function(t, e) {
                        if (this.active > -1 || "return" == this.active) return !1;
                        this.contents.audio && this.pauseAudio(), this.show = !1, this.active = e, this.$parent.nextQuestion(t);
                    },
                    prevQuestion: function() {
                        this.contents.audio && this.pauseAudio(), this.show = !1, this.active = "return", 
                        this.$parent.prevQuestion();
                    },
                    viewPicture: function() {
                        this.$parent.viewPicture();
                    },
                    savePicture: function(t) {
                        this.$parent.resultLongPress(t);
                    },
                    playAudiao: function(t) {
                        var e = this;
                        this.audiores.point = !1, this.show && ("pause" == this.audiores.status ? (this.audiores.status = "running", 
                        this.audiores.icon = f.default, this.audiores.tips = "正在播放", p && (p.src = t, p.play(), 
                        p.onEnded(function() {
                            e.audiores.status = "pause", e.audiores.icon = d.default, e.audiores.tips = "点击播放";
                        }))) : (this.audiores.status = "pause", this.audiores.icon = d.default, this.audiores.tips = "点击播放", 
                        p && p.stop()));
                    },
                    pauseAudio: function() {
                        this.audiores.status = "pause", this.audiores.icon = d.default, this.audiores.tips = "点击播放", 
                        p && p.stop();
                    }
                }
            };
            e.default = h;
        }).call(this, s("543d").default);
    },
    bb19: function(t, e, s) {
        var n = s("7a5b");
        s.n(n).a;
    },
    be95: function(t, e, s) {
        s.r(e);
        var n = s("aebd"), a = s.n(n);
        for (var o in n) "default" !== o && function(t) {
            s.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/AuthorBox-create-component", {
    "components/AuthorBox-create-component": function(t, e, s) {
        s("543d").createComponent(s("7db3"));
    }
}, [ [ "components/AuthorBox-create-component" ] ] ]);