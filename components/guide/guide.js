Component({
    properties: {
        guideParams: {
            type: Object,
            value: {}
        }
    },
    data: {},
    methods: {
        comfirm: function() {
            this.triggerEvent("confirm", {});
        }
    }
});