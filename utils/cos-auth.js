var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function() {
    function e(t) {
        return encodeURIComponent(t).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
    }
    var n = n || function(t, e) {
        var n = {}, r = n.lib = {}, i = function() {}, o = r.Base = {
            extend: function(t) {
                i.prototype = this;
                var e = new i();
                return t && e.mixIn(t), e.hasOwnProperty("init") || (e.init = function() {
                    e.$super.init.apply(this, arguments);
                }), e.init.prototype = e, e.$super = this, e;
            },
            create: function() {
                var t = this.extend();
                return t.init.apply(t, arguments), t;
            },
            init: function() {},
            mixIn: function(t) {
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty("toString") && (this.toString = t.toString);
            },
            clone: function() {
                return this.init.prototype.extend(this);
            }
        }, s = r.WordArray = o.extend({
            init: function(t, e) {
                t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length;
            },
            toString: function(t) {
                return (t || c).stringify(this);
            },
            concat: function(t) {
                var e = this.words, n = t.words, r = this.sigBytes;
                if (t = t.sigBytes, this.clamp(), r % 4) for (var i = 0; i < t; i++) e[r + i >>> 2] |= (n[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (r + i) % 4 * 8; else if (65535 < n.length) for (i = 0; i < t; i += 4) e[r + i >>> 2] = n[i >>> 2]; else e.push.apply(e, n);
                return this.sigBytes += t, this;
            },
            clamp: function() {
                var e = this.words, n = this.sigBytes;
                e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4);
            },
            clone: function() {
                var t = o.clone.call(this);
                return t.words = this.words.slice(0), t;
            },
            random: function(e) {
                for (var n = [], r = 0; r < e; r += 4) n.push(4294967296 * t.random() | 0);
                return new s.init(n, e);
            }
        }), a = n.enc = {}, c = a.Hex = {
            stringify: function(t) {
                var e = t.words;
                t = t.sigBytes;
                for (var n = [], r = 0; r < t; r++) {
                    var i = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
                }
                return n.join("");
            },
            parse: function(t) {
                for (var e = t.length, n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                return new s.init(n, e / 2);
            }
        }, u = a.Latin1 = {
            stringify: function(t) {
                var e = t.words;
                t = t.sigBytes;
                for (var n = [], r = 0; r < t; r++) n.push(String.fromCharCode(e[r >>> 2] >>> 24 - r % 4 * 8 & 255));
                return n.join("");
            },
            parse: function(t) {
                for (var e = t.length, n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                return new s.init(n, e);
            }
        }, f = a.Utf8 = {
            stringify: function(t) {
                try {
                    return decodeURIComponent(escape(u.stringify(t)));
                } catch (t) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(t) {
                return u.parse(unescape(encodeURIComponent(t)));
            }
        }, h = r.BufferedBlockAlgorithm = o.extend({
            reset: function() {
                this._data = new s.init(), this._nDataBytes = 0;
            },
            _append: function(t) {
                "string" == typeof t && (t = f.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
            },
            _process: function(e) {
                var n = this._data, r = n.words, i = n.sigBytes, o = this.blockSize, a = i / (4 * o);
                if (e = (a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * o, i = t.min(4 * e, i), 
                e) {
                    for (var c = 0; c < e; c += o) this._doProcessBlock(r, c);
                    c = r.splice(0, e), n.sigBytes -= i;
                }
                return new s.init(c, i);
            },
            clone: function() {
                var t = o.clone.call(this);
                return t._data = this._data.clone(), t;
            },
            _minBufferSize: 0
        });
        r.Hasher = h.extend({
            cfg: o.extend(),
            init: function(t) {
                this.cfg = this.cfg.extend(t), this.reset();
            },
            reset: function() {
                h.reset.call(this), this._doReset();
            },
            update: function(t) {
                return this._append(t), this._process(), this;
            },
            finalize: function(t) {
                return t && this._append(t), this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function(t) {
                return function(e, n) {
                    return new t.init(n).finalize(e);
                };
            },
            _createHmacHelper: function(t) {
                return function(e, n) {
                    return new l.HMAC.init(t, n).finalize(e);
                };
            }
        });
        var l = n.algo = {};
        return n;
    }(Math);
    !function() {
        var t = n, e = (o = t.lib).WordArray, r = o.Hasher, i = [], o = t.algo.SHA1 = r.extend({
            _doReset: function() {
                this._hash = new e.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
            },
            _doProcessBlock: function(t, e) {
                for (var n = this._hash.words, r = n[0], o = n[1], s = n[2], a = n[3], c = n[4], u = 0; 80 > u; u++) {
                    if (16 > u) i[u] = 0 | t[e + u]; else {
                        var f = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
                        i[u] = f << 1 | f >>> 31;
                    }
                    f = (r << 5 | r >>> 27) + c + i[u], f = 20 > u ? f + (1518500249 + (o & s | ~o & a)) : 40 > u ? f + (1859775393 + (o ^ s ^ a)) : 60 > u ? f + ((o & s | o & a | s & a) - 1894007588) : f + ((o ^ s ^ a) - 899497514), 
                    c = a, a = s, s = o << 30 | o >>> 2, o = r, r = f;
                }
                n[0] = n[0] + r | 0, n[1] = n[1] + o | 0, n[2] = n[2] + s | 0, n[3] = n[3] + a | 0, 
                n[4] = n[4] + c | 0;
            },
            _doFinalize: function() {
                var t = this._data, e = t.words, n = 8 * this._nDataBytes, r = 8 * t.sigBytes;
                return e[r >>> 5] |= 128 << 24 - r % 32, e[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
                e[15 + (r + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * e.length, this._process(), this._hash;
            },
            clone: function() {
                var t = r.clone.call(this);
                return t._hash = this._hash.clone(), t;
            }
        });
        t.SHA1 = r._createHelper(o), t.HmacSHA1 = r._createHmacHelper(o);
    }(), function() {
        var t = n, e = t.enc.Utf8;
        t.algo.HMAC = t.lib.Base.extend({
            init: function(t, n) {
                t = this._hasher = new t.init(), "string" == typeof n && (n = e.parse(n));
                var r = t.blockSize, i = 4 * r;
                n.sigBytes > i && (n = t.finalize(n)), n.clamp();
                for (var o = this._oKey = n.clone(), s = this._iKey = n.clone(), a = o.words, c = s.words, u = 0; u < r; u++) a[u] ^= 1549556828, 
                c[u] ^= 909522486;
                o.sigBytes = s.sigBytes = i, this.reset();
            },
            reset: function() {
                var t = this._hasher;
                t.reset(), t.update(this._iKey);
            },
            update: function(t) {
                return this._hasher.update(t), this;
            },
            finalize: function(t) {
                var e = this._hasher;
                return t = e.finalize(t), e.reset(), e.finalize(this._oKey.clone().concat(t));
            }
        });
    }(), function() {
        var t = n, e = t.lib.WordArray;
        t.enc.Base64 = {
            stringify: function(t) {
                var e = t.words, n = t.sigBytes, r = this._map;
                t.clamp();
                for (var i = [], o = 0; o < n; o += 3) for (var s = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < n; a++) i.push(r.charAt(s >>> 6 * (3 - a) & 63));
                var c = r.charAt(64);
                if (c) for (;i.length % 4; ) i.push(c);
                return i.join("");
            },
            parse: function(t) {
                var n = t.length, r = this._map, i = r.charAt(64);
                if (i) {
                    var o = t.indexOf(i);
                    -1 != o && (n = o);
                }
                for (var s = [], a = 0, c = 0; c < n; c++) if (c % 4) {
                    var u = r.indexOf(t.charAt(c - 1)) << c % 4 * 2, f = r.indexOf(t.charAt(c)) >>> 6 - c % 4 * 2;
                    s[a >>> 2] |= (u | f) << 24 - a % 4 * 8, a++;
                }
                return e.create(s, a);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
    }();
    var r = function(t) {
        var e = t.Pathname || "/", r = t.Expires, i = "", o = "", s = t.Bucket.match(/^(.+)-(\d+)$/);
        s && (i = s[1], o = s[2]);
        var a = parseInt(Math.random() * Math.pow(2, 32)), c = parseInt(Date.now() / 1e3), u = c + (void 0 === r ? 900 : 1 * r || 0), f = "/" + o + "/" + i + encodeURIComponent(e).replace(/%2F/g, "/"), h = "a=" + o + "&b=" + i + "&k=" + t.SecretId + "&e=" + u + "&t=" + c + "&r=" + a + "&f=" + f, l = n.HmacSHA1(h, t.SecretKey), p = n.enc.Utf8.parse(h);
        return l.concat(p).toString(n.enc.Base64);
    }, i = function(t) {
        if (!t.SecretId) return console.error("missing param SecretId");
        if (!t.SecretKey) return console.error("missing param SecretKey");
        if ("4.0" === t.Version) return r(t);
        var i = (t = t || {}).SecretId, o = t.SecretKey, s = (t.Method || "get").toLowerCase(), a = t.Query || {}, c = t.Headers || {}, u = t.Pathname || "/", f = t.Expires, h = function(t) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(n);
            return e.sort(function(t, e) {
                return t = t.toLowerCase(), e = e.toLowerCase(), t === e ? 0 : t > e ? 1 : -1;
            });
        }, l = function(t) {
            var n, r, i, o = [], s = h(t);
            for (n = 0; n < s.length; n++) i = void 0 === t[r = s[n]] || null === t[r] ? "" : "" + t[r], 
            r = e(r = r.toLowerCase()), i = e(i) || "", o.push(r + "=" + i);
            return o.join("&");
        }, p = parseInt(new Date().getTime() / 1e3) - 1, d = p + (void 0 === f ? 900 : 1 * f || 0), g = i, y = p + ";" + d, v = p + ";" + d, m = h(c).join(";").toLowerCase(), _ = h(a).join(";").toLowerCase(), w = n.HmacSHA1(v, o).toString(), S = [ s, u, l(a), l(c), "" ].join("\n"), B = [ "sha1", y, n.SHA1(S).toString(), "" ].join("\n");
        return [ "q-sign-algorithm=sha1", "q-ak=" + g, "q-sign-time=" + y, "q-key-time=" + v, "q-header-list=" + m, "q-url-param-list=" + _, "q-signature=" + n.HmacSHA1(B, w).toString() ].join("&");
    };
    "object" == ("undefined" == typeof module ? "undefined" : t(module)) ? module.exports = i : window.CosAuth = i;
}();