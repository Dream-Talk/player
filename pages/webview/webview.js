Page({
    onLoad: function(t) {
        console.log("https://www.maiyizhi.cn/index.php?r=common/static&key=" + t.key), "ad" == t.from ? this.setData({
            url: decodeURIComponent(t.url)
        }) : this.setData({
            url: "https://www.maiyizhi.cn/index.php?r=common/static&key=" + t.key
        });
    }
});