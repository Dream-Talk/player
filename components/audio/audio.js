Component({
    properties: {
        src: {
            type: String,
            value: "",
            observer: "createInnerAudioContext"
        }
    },
    data: {
        stopMusic: !1,
        duration: 0,
        currentTime: 0
    },
    methods: {
        createInnerAudioContext: function(t) {
            this.innerAudioContext = wx.createInnerAudioContext(), this.innerAudioContext.src = t;
            var n = this;
            this.innerAudioContext.onPlay(function() {
                n.innerAudioContext.onTimeUpdate(function() {
                    console.log("duration", n.innerAudioContext.duration), n.setData({
                        duration: Math.floor(n.innerAudioContext.duration),
                        currentTime: n.innerAudioContext.currentTime
                    });
                });
            });
        },
        startMusic: function() {
            var t = this;
            this.innerAudioContext.play(), this.innerAudioContext.onEnded(function() {
                t.setData({
                    stopMusic: !1,
                    currentTime: 0
                });
            }), this.setData({
                stopMusic: !0
            });
        },
        stopMusic: function() {
            this.innerAudioContext && (this.innerAudioContext.pause(), this.setData({
                stopMusic: !1
            }));
        },
        sliderchange: function(t) {
            console.log("e", t), this.innerAudioContext.seek(t.detail.value), this.setData({
                currentTime: t.detail.value
            });
        }
    }
});