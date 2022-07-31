!function(O) {
  "use strict";

  function o(t) {
    if (e[t]) return e[t].exports;
    var n = e[t] = { i: t, l: !1, exports: {} };
    return r[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }

  var r, e;
  r = [function(t, n, r) {
    r(1), t.exports = r(58);
  }, function(t, n, r) {
    var e = r(2), o = r(25), i = r(53), u = r(6), c = r(17), f = r(54), a = r(56), r = r(36);
    e({
      target: "Promise", proto: !0, real: !0, forced: !!i && u(function() {
        i.prototype.finally.call({
          then: function() {
          }
        }, function() {
        });
      })
    }, {
      finally: function(n) {
        var r = f(this, c("Promise")), t = "function" == typeof n;
        return this.then(t ? function(t) {
          return a(r, n()).then(function() {
            return t;
          });
        } : n, t ? function(t) {
          return a(r, n()).then(function() {
            throw t;
          });
        } : n);
      }
    }), o || "function" != typeof i || (o = c("Promise").prototype.finally, i.prototype.finally !== o && r(i.prototype, "finally", o, { unsafe: !0 }));
  }, function(t, n, r) {
    var a = r(3), s = r(4).f, p = r(33), l = r(36), y = r(27), v = r(42), h = r(52);
    t.exports = function(t, n) {
      var r, e, o, i = t.target, u = t.global, c = t.stat, f = u ? a : c ? a[i] || y(i, {}) : (a[i] || {}).prototype;
      if (f) for (r in n) {
        if (e = n[r], o = t.noTargetGet ? (o = s(f, r)) && o.value : f[r], !h(u ? r : i + (c ? "." : "#") + r, t.forced) && o !== O) {
          if (typeof e == typeof o) continue;
          v(e, o);
        }
        (t.sham || o && o.sham) && p(e, "sham", !0), l(f, r, e, t);
      }
    };
  }, function(t, n) {
    function r(t) {
      return t && t.Math == Math && t;
    }

    t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof global && global) || function() {
      return this;
    }() || Function("return this")();
  }, function(t, n, r) {
    var e = r(5), o = r(7), i = r(8), u = r(9), c = r(13), f = r(28), a = r(31), s = Object.getOwnPropertyDescriptor;
    n.f = e ? s : function(t, n) {
      if (t = u(t), n = c(n), a) try {
        return s(t, n);
      } catch (t) {
      }
      if (f(t, n)) return i(!o.f.call(t, n), t[n]);
    };
  }, function(t, n, r) {
    r = r(6);
    t.exports = !r(function() {
      return 7 != Object.defineProperty({}, 1, {
        get: function() {
          return 7;
        }
      })[1];
    });
  }, function(t, n) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function(t, n, r) {
    var e = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !e.call({ 1: 2 }, 1);
    n.f = i ? function(t) {
      t = o(this, t);
      return !!t && t.enumerable;
    } : e;
  }, function(t, n) {
    t.exports = function(t, n) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
    };
  }, function(t, n, r) {
    var e = r(10), o = r(12);
    t.exports = function(t) {
      return e(o(t));
    };
  }, function(t, n, r) {
    var e = r(6), o = r(11), i = "".split;
    t.exports = e(function() {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function(t) {
      return "String" == o(t) ? i.call(t, "") : Object(t);
    } : Object;
  }, function(t, n) {
    var r = {}.toString;
    t.exports = function(t) {
      return r.call(t).slice(8, -1);
    };
  }, function(t, n) {
    t.exports = function(t) {
      if (t == O) throw TypeError("Can't call method on " + t);
      return t;
    };
  }, function(t, n, r) {
    var e = r(14), o = r(16);
    t.exports = function(t) {
      t = e(t, "string");
      return o(t) ? t : String(t);
    };
  }, function(t, n, r) {
    var e = r(15), o = r(16), i = r(22), u = r(23)("toPrimitive");
    t.exports = function(t, n) {
      if (!e(t) || o(t)) return t;
      var r = t[u];
      if (r === O) return i(t, n = n === O ? "number" : n);
      if (n = r.call(t, n = n === O ? "default" : n), !e(n) || o(n)) return n;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function(t, n) {
    t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  }, function(t, n, r) {
    var e = r(17), r = r(18);
    t.exports = r ? function(t) {
      return "symbol" == typeof t;
    } : function(t) {
      var n = e("Symbol");
      return "function" == typeof n && Object(t) instanceof n;
    };
  }, function(t, n, r) {
    var e = r(3);
    t.exports = function(t, n) {
      return arguments.length < 2 ? "function" == typeof (r = e[t]) ? r : O : e[t] && e[t][n];
      var r;
    };
  }, function(t, n, r) {
    r = r(19);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  }, function(t, n, r) {
    var e = r(20), r = r(6);
    t.exports = !!Object.getOwnPropertySymbols && !r(function() {
      var t = Symbol();
      return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && e && e < 41;
    });
  }, function(t, n, r) {
    var e, o, i = r(3), u = r(21), r = i.process, i = i.Deno, i = r && r.versions || i && i.version, i = i && i.v8;
    i ? o = (e = i.split("."))[0] < 4 ? 1 : e[0] + e[1] : u && (!(e = u.match(/Edge\/(\d+)/)) || 74 <= e[1]) && (e = u.match(/Chrome\/(\d+)/)) && (o = e[1]), t.exports = o && +o;
  }, function(t, n, r) {
    r = r(17);
    t.exports = r("navigator", "userAgent") || "";
  }, function(t, n, r) {
    var o = r(15);
    t.exports = function(t, n) {
      var r, e;
      if ("string" === n && "function" == typeof (r = t.toString) && !o(e = r.call(t))) return e;
      if ("function" == typeof (r = t.valueOf) && !o(e = r.call(t))) return e;
      if ("string" !== n && "function" == typeof (r = t.toString) && !o(e = r.call(t))) return e;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function(t, n, r) {
    var e = r(3), o = r(24), i = r(28), u = r(30), c = r(19), r = r(18), f = o("wks"), a = e.Symbol,
      s = r ? a : a && a.withoutSetter || u;
    t.exports = function(t) {
      return i(f, t) && (c || "string" == typeof f[t]) || (c && i(a, t) ? f[t] = a[t] : f[t] = s("Symbol." + t)), f[t];
    };
  }, function(t, n, r) {
    var e = r(25), o = r(26);
    (t.exports = function(t, n) {
      return o[t] || (o[t] = n !== O ? n : {});
    })("versions", []).push({
      version: "3.16.2",
      mode: e ? "pure" : "global",
      copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
  }, function(t, n) {
    t.exports = !1;
  }, function(t, n, r) {
    var e = r(3), o = r(27), r = "__core-js_shared__", r = e[r] || o(r, {});
    t.exports = r;
  }, function(t, n, r) {
    var e = r(3);
    t.exports = function(n, r) {
      try {
        Object.defineProperty(e, n, { value: r, configurable: !0, writable: !0 });
      } catch (t) {
        e[n] = r;
      }
      return r;
    };
  }, function(t, n, r) {
    var e = r(29), o = {}.hasOwnProperty;
    t.exports = Object.hasOwn || function(t, n) {
      return o.call(e(t), n);
    };
  }, function(t, n, r) {
    var e = r(12);
    t.exports = function(t) {
      return Object(e(t));
    };
  }, function(t, n) {
    var r = 0, e = Math.random();
    t.exports = function(t) {
      return "Symbol(" + String(t === O ? "" : t) + ")_" + (++r + e).toString(36);
    };
  }, function(t, n, r) {
    var e = r(5), o = r(6), i = r(32);
    t.exports = !e && !o(function() {
      return 7 != Object.defineProperty(i("div"), "a", {
        get: function() {
          return 7;
        }
      }).a;
    });
  }, function(t, n, r) {
    var e = r(3), r = r(15), o = e.document, i = r(o) && r(o.createElement);
    t.exports = function(t) {
      return i ? o.createElement(t) : {};
    };
  }, function(t, n, r) {
    var e = r(5), o = r(34), i = r(8);
    t.exports = e ? function(t, n, r) {
      return o.f(t, n, i(1, r));
    } : function(t, n, r) {
      return t[n] = r, t;
    };
  }, function(t, n, r) {
    var e = r(5), o = r(31), i = r(35), u = r(13), c = Object.defineProperty;
    n.f = e ? c : function(t, n, r) {
      if (i(t), n = u(n), i(r), o) try {
        return c(t, n, r);
      } catch (t) {
      }
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
      return "value" in r && (t[n] = r.value), t;
    };
  }, function(t, n, r) {
    var e = r(15);
    t.exports = function(t) {
      if (!e(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  }, function(t, n, r) {
    var c = r(3), f = r(33), a = r(28), s = r(27), e = r(37), r = r(38), o = r.get, p = r.enforce,
      l = String(String).split("String");
    (t.exports = function(t, n, r, e) {
      var o = !!e && !!e.unsafe, i = !!e && !!e.enumerable, u = !!e && !!e.noTargetGet;
      "function" == typeof r && ("string" != typeof n || a(r, "name") || f(r, "name", n), (e = p(r)).source || (e.source = l.join("string" == typeof n ? n : ""))), t !== c ? (o ? !u && t[n] && (i = !0) : delete t[n], i ? t[n] = r : f(t, n, r)) : i ? t[n] = r : s(n, r);
    })(Function.prototype, "toString", function() {
      return "function" == typeof this && o(this).source || e(this);
    });
  }, function(t, n, r) {
    var r = r(26), e = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function(t) {
      return e.call(t);
    }), t.exports = r.inspectSource;
  }, function(t, n, r) {
    var e, o, i, u, c, f, a, s, p = r(39), l = r(3), y = r(15), v = r(33), h = r(28), m = r(26), b = r(40), r = r(41),
      g = "Object already initialized", l = l.WeakMap;
    a = p || m.state ? (e = m.state || (m.state = new l), o = e.get, i = e.has, u = e.set, c = function(t, n) {
      if (i.call(e, t)) throw new TypeError(g);
      return n.facade = t, u.call(e, t, n), n;
    }, f = function(t) {
      return o.call(e, t) || {};
    }, function(t) {
      return i.call(e, t);
    }) : (r[s = b("state")] = !0, c = function(t, n) {
      if (h(t, s)) throw new TypeError(g);
      return n.facade = t, v(t, s, n), n;
    }, f = function(t) {
      return h(t, s) ? t[s] : {};
    }, function(t) {
      return h(t, s);
    }), t.exports = {
      set: c, get: f, has: a, enforce: function(t) {
        return a(t) ? f(t) : c(t, {});
      }, getterFor: function(r) {
        return function(t) {
          var n;
          if (!y(t) || (n = f(t)).type !== r) throw TypeError("Incompatible receiver, " + r + " required");
          return n;
        };
      }
    };
  }, function(t, n, r) {
    var e = r(3), r = r(37), e = e.WeakMap;
    t.exports = "function" == typeof e && /native code/.test(r(e));
  }, function(t, n, r) {
    var e = r(24), o = r(30), i = e("keys");
    t.exports = function(t) {
      return i[t] || (i[t] = o(t));
    };
  }, function(t, n) {
    t.exports = {};
  }, function(t, n, r) {
    var c = r(28), f = r(43), a = r(4), s = r(34);
    t.exports = function(t, n) {
      for (var r = f(n), e = s.f, o = a.f, i = 0; i < r.length; i++) {
        var u = r[i];
        c(t, u) || e(t, u, o(n, u));
      }
    };
  }, function(t, n, r) {
    var e = r(17), o = r(44), i = r(51), u = r(35);
    t.exports = e("Reflect", "ownKeys") || function(t) {
      var n = o.f(u(t)), r = i.f;
      return r ? n.concat(r(t)) : n;
    };
  }, function(t, n, r) {
    var e = r(45), o = r(50).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(t) {
      return e(t, o);
    };
  }, function(t, n, r) {
    var u = r(28), c = r(9), f = r(46).indexOf, a = r(41);
    t.exports = function(t, n) {
      var r, e = c(t), o = 0, i = [];
      for (r in e) !u(a, r) && u(e, r) && i.push(r);
      for (; n.length > o;) u(e, r = n[o++]) && (~f(i, r) || i.push(r));
      return i;
    };
  }, function(t, n, r) {
    var f = r(9), a = r(47), s = r(49), r = function(c) {
      return function(t, n, r) {
        var e, o = f(t), i = a(o.length), u = s(r, i);
        if (c && n != n) {
          for (; u < i;) if ((e = o[u++]) != e) return !0;
        } else for (; u < i; u++) if ((c || u in o) && o[u] === n) return c || u || 0;
        return !c && -1;
      };
    };
    t.exports = { includes: r(!0), indexOf: r(!1) };
  }, function(t, n, r) {
    var e = r(48), o = Math.min;
    t.exports = function(t) {
      return 0 < t ? o(e(t), 9007199254740991) : 0;
    };
  }, function(t, n) {
    var r = Math.ceil, e = Math.floor;
    t.exports = function(t) {
      return isNaN(t = +t) ? 0 : (0 < t ? e : r)(t);
    };
  }, function(t, n, r) {
    var e = r(48), o = Math.max, i = Math.min;
    t.exports = function(t, n) {
      t = e(t);
      return t < 0 ? o(t + n, 0) : i(t, n);
    };
  }, function(t, n) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }, function(t, n) {
    n.f = Object.getOwnPropertySymbols;
  }, function(t, n, r) {
    var e = r(6), o = /#|\.prototype\./, r = function(t, n) {
      t = u[i(t)];
      return t == f || t != c && ("function" == typeof n ? e(n) : !!n);
    }, i = r.normalize = function(t) {
      return String(t).replace(o, ".").toLowerCase();
    }, u = r.data = {}, c = r.NATIVE = "N", f = r.POLYFILL = "P";
    t.exports = r;
  }, function(t, n, r) {
    r = r(3);
    t.exports = r.Promise;
  }, function(t, n, r) {
    var e = r(35), o = r(55), i = r(23)("species");
    t.exports = function(t, n) {
      var r, t = e(t).constructor;
      return t === O || (r = e(t)[i]) == O ? n : o(r);
    };
  }, function(t, n) {
    t.exports = function(t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    };
  }, function(t, n, r) {
    var e = r(35), o = r(15), i = r(57);
    t.exports = function(t, n) {
      if (e(t), o(n) && n.constructor === t) return n;
      t = i.f(t);
      return (0, t.resolve)(n), t.promise;
    };
  }, function(t, n, r) {
    function e(t) {
      var r, e;
      this.promise = new t(function(t, n) {
        if (r !== O || e !== O) throw TypeError("Bad Promise constructor");
        r = t, e = n;
      }), this.resolve = o(r), this.reject = o(e);
    }

    var o = r(55);
    t.exports.f = function(t) {
      return new e(t);
    };
  }, function(t, n, r) {
    var e = r(2), o = r(3), r = r(59);
    e({ global: !0, bind: !0, enumerable: !0, forced: !o.setImmediate || !o.clearImmediate }, {
      setImmediate: r.set,
      clearImmediate: r.clear
    });
  }, function(t, n, r) {
    var e, o, i = r(3), u = r(6), c = r(60), f = r(61), a = r(32), s = r(62), p = r(63), l = i.setImmediate,
      y = i.clearImmediate, v = i.process, h = i.MessageChannel, m = i.Dispatch, b = 0, g = {},
      d = "onreadystatechange";
    try {
      e = i.location;
    } catch (t) {
    }

    function x(t) {
      return function() {
        S(t);
      };
    }

    function w(t) {
      S(t.data);
    }

    var S = function(t) {
      var n;
      g.hasOwnProperty(t) && (n = g[t], delete g[t], n());
    }, r = function(t) {
      i.postMessage(String(t), e.protocol + "//" + e.host);
    };
    l && y || (l = function(t) {
      for (var n = [], r = arguments.length, e = 1; e < r;) n.push(arguments[e++]);
      return g[++b] = function() {
        ("function" == typeof t ? t : Function(t)).apply(O, n);
      }, o(b), b;
    }, y = function(t) {
      delete g[t];
    }, p ? o = function(t) {
      v.nextTick(x(t));
    } : m && m.now ? o = function(t) {
      m.now(x(t));
    } : h && !s ? (h = (s = new h).port2, s.port1.onmessage = w, o = c(h.postMessage, h, 1)) : i.addEventListener && "function" == typeof postMessage && !i.importScripts && e && "file:" !== e.protocol && !u(r) ? (o = r, i.addEventListener("message", w, !1)) : o = d in a("script") ? function(t) {
      f.appendChild(a("script"))[d] = function() {
        f.removeChild(this), S(t);
      };
    } : function(t) {
      setTimeout(x(t), 0);
    }), t.exports = { set: l, clear: y };
  }, function(t, n, r) {
    var i = r(55);
    t.exports = function(e, o, t) {
      if (i(e), o === O) return e;
      switch (t) {
        case 0:
          return function() {
            return e.call(o);
          };
        case 1:
          return function(t) {
            return e.call(o, t);
          };
        case 2:
          return function(t, n) {
            return e.call(o, t, n);
          };
        case 3:
          return function(t, n, r) {
            return e.call(o, t, n, r);
          };
      }
      return function() {
        return e.apply(o, arguments);
      };
    };
  }, function(t, n, r) {
    r = r(17);
    t.exports = r("document", "documentElement");
  }, function(t, n, r) {
    r = r(21);
    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r);
  }, function(t, n, r) {
    var e = r(11), r = r(3);
    t.exports = "process" == e(r.process);
  }], e = {}, o.m = r, o.c = e, o.d = function(t, n, r) {
    o.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
  }, o.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, o.t = function(n, t) {
    if (1 & t && (n = o(n)), 8 & t) return n;
    if (4 & t && "object" == typeof n && n && n.__esModule) return n;
    var r = Object.create(null);
    if (o.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: n
    }), 2 & t && "string" != typeof n) for (var e in n) o.d(r, e, function(t) {
      return n[t];
    }.bind(null, e));
    return r;
  }, o.n = function(t) {
    var n = t && t.__esModule ? function() {
      return t.default;
    } : function() {
      return t;
    };
    return o.d(n, "a", n), n;
  }, o.o = function(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, o.p = "", o(o.s = 0);
}();
!function(e) {
  var l, r = e.babelHelpers = {};
  r.typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, r.jsx = (l = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, r, t, n) {
    var o = e && e.defaultProps, i = arguments.length - 3;
    if (r || 0 === i || (r = {}), r && o) for (var u in o) void 0 === r[u] && (r[u] = o[u]); else r || (r = o || {});
    if (1 === i) r.children = n; else if (1 < i) {
      for (var a = Array(i), f = 0; f < i; f++) a[f] = arguments[f + 3];
      r.children = a;
    }
    return { $$typeof: l, type: e, key: void 0 === t ? null : "" + t, ref: null, props: r, _owner: null };
  }), r.asyncIterator = function(e) {
    if ("function" == typeof Symbol) {
      if (Symbol.asyncIterator) {
        var r = e[Symbol.asyncIterator];
        if (null != r) return r.call(e);
      }
      if (Symbol.iterator) return e[Symbol.iterator]();
    }
    throw new TypeError("Object is not async iterable");
  }, r.asyncGenerator = function() {
    function l(e) {
      this.value = e;
    }

    function r(o) {
      var i, u;

      function a(e, r) {
        try {
          var t = o[e](r), n = t.value;
          n instanceof l ? Promise.resolve(n.value).then(function(e) {
            a("next", e);
          }, function(e) {
            a("throw", e);
          }) : f(t.done ? "return" : "normal", t.value);
        } catch (e) {
          f("throw", e);
        }
      }

      function f(e, r) {
        switch (e) {
          case"return":
            i.resolve({ value: r, done: !0 });
            break;
          case"throw":
            i.reject(r);
            break;
          default:
            i.resolve({ value: r, done: !1 });
        }
        (i = i.next) ? a(i.key, i.arg) : u = null;
      }

      this._invoke = function(n, o) {
        return new Promise(function(e, r) {
          var t = { key: n, arg: o, resolve: e, reject: r, next: null };
          u ? u = u.next = t : (i = u = t, a(n, o));
        });
      }, "function" != typeof o.return && (this.return = void 0);
    }

    return "function" == typeof Symbol && Symbol.asyncIterator && (r.prototype[Symbol.asyncIterator] = function() {
      return this;
    }), r.prototype.next = function(e) {
      return this._invoke("next", e);
    }, r.prototype.throw = function(e) {
      return this._invoke("throw", e);
    }, r.prototype.return = function(e) {
      return this._invoke("return", e);
    }, {
      wrap: function(e) {
        return function() {
          return new r(e.apply(this, arguments));
        };
      }, await: function(e) {
        return new l(e);
      }
    };
  }(), r.asyncGeneratorDelegate = function(n, e) {
    var r = {}, o = !1;

    function t(r, t) {
      return o = !0, t = new Promise(function(e) {
        e(n[r](t));
      }), { done: !1, value: e(t) };
    }

    return "function" == typeof Symbol && Symbol.iterator && (r[Symbol.iterator] = function() {
      return this;
    }), r.next = function(e) {
      return o ? (o = !1, e) : t("next", e);
    }, "function" == typeof n.throw && (r.throw = function(e) {
      if (o) throw o = !1, e;
      return t("throw", e);
    }), "function" == typeof n.return && (r.return = function(e) {
      return t("return", e);
    }), r;
  }, r.asyncToGenerator = function(e) {
    return function() {
      var a = e.apply(this, arguments);
      return new Promise(function(i, u) {
        return function r(e, t) {
          try {
            var n = a[e](t), o = n.value;
          } catch (e) {
            return void u(e);
          }
          if (!n.done) return Promise.resolve(o).then(function(e) {
            r("next", e);
          }, function(e) {
            r("throw", e);
          });
          i(o);
        }("next");
      });
    };
  }, r.classCallCheck = function(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
  }, r.createClass = function() {
    function n(e, r) {
      for (var t = 0; t < r.length; t++) {
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    return function(e, r, t) {
      return r && n(e.prototype, r), t && n(e, t), e;
    };
  }(), r.defineEnumerableProperties = function(e, r) {
    for (var t in r) {
      var n = r[t];
      n.configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t, n);
    }
    return e;
  }, r.defaults = function(e, r) {
    for (var t = Object.getOwnPropertyNames(r), n = 0; n < t.length; n++) {
      var o = t[n], i = Object.getOwnPropertyDescriptor(r, o);
      i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
    }
    return e;
  }, r.defineProperty = function(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }, r.extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, r.get = function e(r, t, n) {
    null === r && (r = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(r, t);
    if (void 0 === o) {
      var i = Object.getPrototypeOf(r);
      return null === i ? void 0 : e(i, t, n);
    }
    if ("value" in o) return o.value;
    var u = o.get;
    return void 0 !== u ? u.call(n) : void 0;
  }, r.inherits = function(e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    e.prototype = Object.create(r && r.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
  }, r.instanceof = function(e, r) {
    return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? r[Symbol.hasInstance](e) : e instanceof r;
  }, r.interopRequireDefault = function(e) {
    return e && e.__esModule ? e : { default: e };
  }, r.interopRequireWildcard = function(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
    return r.default = e, r;
  }, r.newArrowCheck = function(e, r) {
    if (e !== r) throw new TypeError("Cannot instantiate an arrow function");
  }, r.objectDestructuringEmpty = function(e) {
    if (null == e) throw new TypeError("Cannot destructure undefined");
  }, r.objectWithoutProperties = function(e, r) {
    var t = {};
    for (var n in e) 0 <= r.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  }, r.possibleConstructorReturn = function(e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !r || "object" != typeof r && "function" != typeof r ? e : r;
  }, r.selfGlobal = void 0 === e ? self : e, r.set = function e(r, t, n, o) {
    var i = Object.getOwnPropertyDescriptor(r, t);
    if (void 0 === i) {
      var u = Object.getPrototypeOf(r);
      null !== u && e(u, t, n, o);
    } else if ("value" in i && i.writable) i.value = n; else {
      var a = i.set;
      void 0 !== a && a.call(o, n);
    }
    return n;
  }, r.slicedToArray = function(e, r) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) return function(e, r) {
      var t = [], n = !0, o = !1, i = void 0;
      try {
        for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done) && (t.push(u.value), !r || t.length !== r); n = !0) ;
      } catch (e) {
        o = !0, i = e;
      } finally {
        try {
          !n && a.return && a.return();
        } finally {
          if (o) throw i;
        }
      }
      return t;
    }(e, r);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }, r.slicedToArrayLoose = function(e, r) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) {
      for (var t, n = [], o = e[Symbol.iterator](); !(t = o.next()).done && (n.push(t.value), !r || n.length !== r);) ;
      return n;
    }
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }, r.taggedTemplateLiteral = function(e, r) {
    return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }));
  }, r.taggedTemplateLiteralLoose = function(e, r) {
    return e.raw = r, e;
  }, r.temporalRef = function(e, r, t) {
    if (e === t) throw new ReferenceError(r + " is not defined - temporal dead zone");
    return e;
  }, r.temporalUndefined = {}, r.toArray = function(e) {
    return Array.isArray(e) ? e : Array.from(e);
  }, r.toConsumableArray = function(e) {
    if (Array.isArray(e)) {
      for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
      return t;
    }
    return Array.from(e);
  };
}("undefined" == typeof global ? self : global);