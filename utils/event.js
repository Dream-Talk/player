Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = {};

exports.default = {
    on: function(E, e, _) {
        var n = [ e, _ ], t = r[E];
        Array.isArray(t) ? t.push(n) : r[E] = [ n ];
    },
    remove: function(E) {
        return new Promise(function(e, _) {
            r[E] = [], e();
        });
    },
    emit: function(E, e) {
        var _ = r[E];
        Array.isArray(_) && _.map(function(r) {
            var E = r[0];
            r[1].call(E, e);
        });
    },
    names: {
        EVENT_ADD_QUESTION: "EVENT_ADD_QUESTION",
        EVENT_POST_QUESTION_SUCCESS: "EVENT_POST_QUESTION_SUCCESS",
        EVENT_DRAFT_CHANGE: "EVENT_DRAFT_CHANGE"
    }
};