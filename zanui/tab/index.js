var n = {
    _handleZanTabChange: function(n) {
        var e = n.currentTarget.dataset, a = {
            componentId: e.componentId,
            selectedId: e.itemId,
            title: e.title,
            position: e.position || "fixed",
            top: e.top || 0
        };
        console.info("[zan:tab:change]", a), this.handleZanTabChange ? this.handleZanTabChange(a) : console.warn("页面缺少 handleZanTabChange 回调函数");
    }
};

module.exports = n;