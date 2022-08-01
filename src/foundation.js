!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("responsive"),
        require("react"),
        require("@nyt/native-bridge")
      )
    : "function" == typeof define && define.amd
    ? define(["exports", "responsive", "react", "@nyt/native-bridge"], t)
    : t(
        ((e = e || self).Foundation = {}),
        e.Responsive,
        e.React,
        e.InitNativeBridge
      );
})(this, function (e, i, t, a) {
  "use strict";
  var p = window,
    d = document,
    r = encodeURIComponent,
    n = localStorage,
    o = sessionStorage;

  function y(e, t) {
    null !== e && e.classList.add(t);
  }

  function g(e, t) {
    null !== e && e.classList.remove(t);
  }

  function s(e, t) {
    e.classList.toggle(t);
  }

  function _(e, t, n) {
    e.setAttribute(t, n);
  }

  function b(e, t, n, r) {
    e.addEventListener(t, n, r);
  }

  function w(e) {
    return d.getElementById(e);
  }

  function c(e, t) {
    e.appendChild(t);
  }

  function u(t, e) {
    !(function (e) {
      for (; e.children.length; ) e.removeChild(e.children[0]);
    })(t),
      e.forEach(function (e) {
        c(t, e);
      });
  }

  function l(e) {
    var t;
    return null === (t = e.currentTarget) || void 0 === t
      ? void 0
      : t.events[e.type](e);
  }

  function f(e, r, t) {
    var i = d.createElement(e);
    return (
      t && c(i, d.createTextNode(t)),
      Object.keys(r).forEach(function (e) {
        var t,
          n = r[e];
        "o" === e[0] && "n" === e[1]
          ? ((t = e.slice(2).toLowerCase()),
            i.events || (i.events = {}),
            (i.events[t] = n),
            b(i, t, l))
          : null != n && !1 !== n && i.setAttribute(e, n);
      }),
      i
    );
  }

  var S = function () {
      var e, t;
      return (
        (
          (null === (e = window) ||
          void 0 === e ||
          null === (t = e.location) ||
          void 0 === t
            ? void 0
            : t.pathname) || ""
        ).startsWith("/crosswords/game/mini") && (p.pageName = "mini-page"),
        p.pageName || ""
      );
    },
    h = p.env,
    m = p.featureFlags,
    v = void 0 === m ? {} : m,
    E = h.version,
    x = "pz-version",
    k = E !== n.getItem(x);
  try {
    n.setItem(x, E);
  } catch (ae) {
    console.error(ae.error);
  }

  function O(t) {
    var n = [];
    return (
      Object.keys(t).forEach(function (e) {
        n.push("".concat(r(e), "=").concat(r(t[e])));
      }),
      "?".concat(n.join("&"))
    );
  }

  function T(e, t) {
    return (
      (t = t || p.location.href),
      (e = e.replace(/[[\]]/g, "\\$&")),
      (t = new RegExp("[?&]".concat(e, "(=([^&#]*)|&|#|$)")).exec(t))
        ? t[2]
          ? decodeURIComponent(t[2].replace(/\+/g, ""))
          : ""
        : null
    );
  }

  var I,
    C = function (e) {
      return "js-".concat(e);
    },
    j = ["nytimes://login", "nytimes://createAccount"],
    A = function () {
      return Date.now();
    },
    R = function (e, t, n, r) {
      var i,
        o,
        a,
        s = [],
        c = "getItem",
        u = "setItem",
        l = "removeItem",
        p = "".concat(n, "-check");
      t && n && k && (t[l](p), t[l](n));

      function d(e) {
        for (; s.length; ) {
          var t;
          null !== (t = s.shift()) && void 0 !== t && t[e ? 1 : 0](e || i);
        }
      }

      return {
        get: function () {
          return o
            ? Promise.resolve(i)
            : new Promise(function (e, t) {
                return s.push([e, t]);
              });
        },
        initialize: function () {
          return (
            t && n && t[c](p) === r && (a = t[c](n)),
            Promise.resolve((a && JSON.parse(a)) || e())
              .then(function (e) {
                if (((o = !0), (i = e), t && r && n && !a))
                  try {
                    t[u](p, r), t[u](n, JSON.stringify(i));
                  } catch (e) {
                    console.error(e.error);
                  }
                d();
              })
              .catch(d)
          );
        },
      };
    },
    D = (/NYT-S=([^;]+)/.exec(d.cookie || "") || [])[1],
    P = (/nyt-a=([^;]+)/.exec(d.cookie || "") || [])[1],
    N = (/NYT-NO-ADS=([^;]+)/.exec(d.cookie || "") || [])[1],
    L = ((I = Math.ceil(Math.random() * Math.floor(4))), "".concat(I)),
    q = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = (16 * Math.random()) | 0;
      return ("x" === e ? t : (3 & t) | 8).toString(16);
    }),
    M = {
      get current() {
        return window.nyt_et && window.nyt_et.get_pageview_id
          ? window.nyt_et.get_pageview_id()
          : q;
      },
    };

  function U(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }

  function F(r) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? U(Object(i), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = i[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
        : U(Object(i)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
          });
    }
    return r;
  }

  function B(o, a) {
    var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
      s = F(F({}, z), e),
      c = void 0 !== (e = s.isSync) && e;
    return new Promise(function (n, r) {
      var e;
      if (
        !(
          (null !== (e = window) && void 0 !== e && e.isHybridWebView) ||
          navigator.onLine
        )
      )
        return r(new Error("No internet"));
      var t,
        i = new XMLHttpRequest();
      i.open(o, a, !c),
        (i.withCredentials = !!s.withCredentials),
        c || (i.timeout = 5e3),
        s.withCookie &&
          (s.cookie
            ? i.setRequestHeader("nyt-s", s.cookie)
            : i.setRequestHeader("nyt-s", D)),
        (i.ontimeout = function () {
          r(new Error("".concat(o, " request to ").concat(a, " timed out")));
        }),
        i.setRequestHeader(
          "Content-type",
          s.data ? "application/json" : "application/x-www-form-urlencoded"
        ),
        s.headers &&
          ((t = s.headers),
          Object.keys(t).forEach(function (e) {
            i.setRequestHeader(e, t[e]);
          })),
        (i.onload = function () {
          try {
            var e,
              t = i.responseText;
            t && s.responseType === H
              ? ((e = JSON.parse(t)),
                s.withStatus && (e.status = i.status),
                n(e))
              : n(t);
          } catch (e) {
            r(new Error("Something went wrong"));
          }
        }),
        i.addEventListener("error", function (e) {
          return r(
            (function (e) {
              if (!(e.status < 400)) {
                var t = new Error("bad req");
                return (t.status = e.status), t;
              }
            })(e)
          );
        }),
        i.send(s.data && JSON.stringify(s.data));
    });
  }

  var H = "json",
    z = { withCookie: !0, withCredentials: !0, responseType: H },
    W = {
      get: function (e, t) {
        return B("GET", e, t);
      },
      post: function (e, t, n) {
        return B("POST", e, F(F({}, n), {}, { data: t }));
      },
      put: function (e, t, n) {
        return B("PUT", e, F(F({}, n), {}, { data: t }));
      },
      delete: function (e, t) {
        return B("DELETE", e, t);
      },
      request: B,
    },
    Y = R(
      function () {
        return W.get("/puzzles/user?bust=".concat(A()));
      },
      o,
      "pz-user",
      D
    ),
    V = p.userType;

  function G(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            i,
            o = [],
            a = !0,
            s = !1;
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              a = !0
            );
          } catch (e) {
            (s = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          }
          return o;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return J(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? J(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }

  function J(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }

  function X(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }

  function K(r) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? X(Object(i), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = i[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
        : X(Object(i)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
          });
    }
    return r;
  }

  var $ = "fluid",
    Q = [
      [990, [$, [728, 90], [970, 90], [970, 250], [1605, 300]]],
      [750, [$, [728, 90], [1605, 300]]],
      [440, [$, [300, 250], [300, 420]]],
      [0, [$, [300, 250]]],
    ];
  p.AdSlot4 = p.AdSlot4 || {
    cmd: [],
    init: function () {
      return null;
    },
    events: {
      subscribe: function () {
        return null;
      },
    },
    refreshAds: function () {
      return null;
    },
  };

  function Z(n, r) {
    le.cmd.push(function () {
      var e = i.width.value,
        t = e < 2 ? ["small", "medium"][e] : "large",
        e = T("ad-keywords"),
        e = K(
          K(
            {
              plat: "web",
              prop: "nyt",
              typ: "games",
              vp: t,
              sub: V.entitlement,
              page_view_id: M.current,
            },
            e ? { adv: e } : {}
          ),
          {},
          {
            sov: L,
            abra_dfp: (function () {
              return Object.entries(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
              )
                .filter(function (e) {
                  e = G(e, 1)[0];
                  return /dfp/.test(e.toLowerCase());
                })
                .map(function (e) {
                  var t = G(e, 2),
                    e = t[0],
                    t = t[1];
                  return "".concat(e, "_").concat(t).toLowerCase();
                })
                .join("&");
            })(r),
          }
        );
      le.init({
        adTargeting: e,
        adUnitPath: "".concat("29390238/NYT/crosswords", "/").concat(n),
        sizeMapping: { default: Q },
      }),
        le.events.subscribe({
          name: "AdRendered",
          scope: "all",
          callback: function (e) {
            var t = e.slot,
              e = e.size,
              t = d.getElementById(t.getSlotElementId());
            e && 0 === e[1] ? t && y(t, "fluid") : t && g(t, "fluid");
          },
        });
    });
  }

  function ee(e, t) {
    function n(e) {
      e.hadRecentInput || ((o.value += e.value), o.entries.push(e), r());
    }

    var r,
      i,
      o = fe("CLS", 0);
    (i = he("layout-shift", n)) &&
      ((r = ge(e, o, t)),
      me(function () {
        i.takeRecords().map(n), r();
      }),
      ve(function () {
        (o = fe("CLS", 0)), (r = ge(e, o, t));
      }));
  }

  function te() {
    return "hidden" === document.visibilityState ? 0 : 1 / 0;
  }

  function ne() {
    me(function (e) {
      e = e.timeStamp;
      _e = e;
    }, !0);
  }

  function re(e, t) {
    ae ||
      ((ae = t), (se = e), (ce = new Date()), ke(removeEventListener), Ee());
  }

  function ie(e, t) {
    function n(e) {
      e.startTime < r.timeStamp &&
        ((i.value = e.processingStart - e.startTime),
        i.entries.push(e),
        ye.add(i),
        a());
    }

    var r = be(),
      i = fe("FID"),
      o = he("first-input", n),
      a = ge(e, i, t);
    o &&
      me(function () {
        o.takeRecords().map(n), o.disconnect();
      }, !0),
      o &&
        ve(function () {
          (i = fe("FID")),
            (a = ge(e, i, t)),
            (ue = []),
            (se = -1),
            (ae = null),
            ke(addEventListener),
            ue.push(n),
            Ee();
        });
  }

  function oe(t, n) {
    function e(e) {
      var t = e.startTime;
      t < o.timeStamp && ((a.value = t), a.entries.push(e)), r();
    }

    var r,
      i,
      o = be(),
      a = fe("LCP"),
      s = he("largest-contentful-paint", e);
    s &&
      ((r = ge(t, a, n)),
      (i = function () {
        ye.has(a) || (s.takeRecords().map(e), s.disconnect(), ye.add(a), r());
      }),
      ["keydown", "click"].forEach(function (e) {
        addEventListener(e, i, { once: !0, capture: !0 });
      }),
      me(i, !0),
      ve(function (e) {
        (a = fe("LCP")),
          (r = ge(t, a, n)),
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              (a.value = performance.now() - e.timeStamp), ye.add(a), r();
            });
          });
      }));
  }

  var ae,
    se,
    ce,
    ue,
    le = p.AdSlot4,
    pe = p.navigator,
    de = R(
      function () {
        return W.get("/puzzles/device");
      },
      n,
      "pz-device",
      pe.userAgent
    ),
    fe = function (e, t) {
      return {
        name: e,
        value: void 0 === t ? -1 : t,
        delta: 0,
        entries: [],
        id: "v1-"
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
      };
    },
    he = function (e, t) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          if ("first-input" === e && !("PerformanceEventTiming" in self))
            return;
          var n = new PerformanceObserver(function (e) {
            return e.getEntries().map(t);
          });
          return n.observe({ type: e, buffered: !0 }), n;
        }
      } catch (e) {}
    },
    me = function (t, n) {
      function r(e) {
        ("pagehide" !== e.type && "hidden" !== document.visibilityState) ||
          (t(e),
          n &&
            (removeEventListener("visibilitychange", r, !0),
            removeEventListener("pagehide", r, !0)));
      }

      addEventListener("visibilitychange", r, !0),
        addEventListener("pagehide", r, !0);
    },
    ve = function (t) {
      addEventListener(
        "pageshow",
        function (e) {
          e.persisted && t(e);
        },
        !0
      );
    },
    ye = new ("function" == typeof WeakSet ? WeakSet : Set)(),
    ge = function (e, t, n) {
      var r;
      return function () {
        0 <= t.value &&
          (n || ye.has(t) || "hidden" === document.visibilityState) &&
          ((t.delta = t.value - (r || 0)),
          (!t.delta && void 0 !== r) || ((r = t.value), e(t)));
      };
    },
    _e = -1,
    be = function () {
      return (
        _e < 0 &&
          ((_e = te()),
          ne(),
          ve(function () {
            setTimeout(function () {
              (_e = te()), ne();
            }, 0);
          })),
        {
          get timeStamp() {
            return _e;
          },
        }
      );
    },
    we = { passive: !0, capture: !0 },
    Se = new Date(),
    Ee = function () {
      var t;
      0 <= se &&
        se < ce - Se &&
        ((t = {
          entryType: "first-input",
          name: ae.type,
          target: ae.target,
          cancelable: ae.cancelable,
          startTime: ae.timeStamp,
          processingStart: ae.timeStamp + se,
        }),
        ue.forEach(function (e) {
          e(t);
        }),
        (ue = []));
    },
    xe = function (e) {
      var t, n, r, i;

      function o() {
        re(n, r), i();
      }

      function a() {
        i();
      }

      e.cancelable &&
        ((t =
          (1e12 < e.timeStamp ? new Date() : performance.now()) - e.timeStamp),
        "pointerdown" == e.type
          ? ((n = t),
            (r = e),
            (i = function () {
              removeEventListener("pointerup", o, we),
                removeEventListener("pointercancel", a, we);
            }),
            addEventListener("pointerup", o, we),
            addEventListener("pointercancel", a, we))
          : re(t, e));
    },
    ke = function (t) {
      ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (
        e
      ) {
        return t(e, xe, we);
      });
    };

  function Oe(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }

  function Te(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Oe(Object(n), !0).forEach(function (e) {
            Ie(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Oe(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }

  function Ie(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }

  var Ce = "dataLayer",
    je = "games-crosswords";
  (p[Ce] = p[Ce] || []),
    window.isHybridWebView || p[Ce].push({ event: "gtm.js", "gtm.start": A() });

  function Ae() {
    function e(e) {
      var t;
      e && Le("userDataReady", e),
        Le("pageDataReady", {
          application: { name: je, environment: h.name },
          asset: { url: Ne },
          pageview: { id: M.current },
        }),
        (t = A()),
        setInterval(function () {
          d.hasFocus() &&
            Le("heartbeat", {
              pageview: {
                heartbeat: {
                  timeSincePageDataReady: A() - t,
                  heartbeatInterval: 5e3,
                },
              },
            });
        }, 5e3);
    }

    qe.initialize(),
      qe
        .get()
        .then(e)
        .catch(function () {
          return e();
        });
  }

  function Re(e) {
    var t = e.name,
      n = e.delta,
      n = {
        eventAction: "Web Vitals",
        eventLabel: e.id,
        pageview: {
          performance: Ie(
            {},
            t.toLowerCase(),
            Math.round("CLS" === t ? 1e3 * n : n)
          ),
        },
      };
    Le("performance", n);
  }

  function De() {
    ee(Re), ie(Re), oe(Re);
  }

  var Pe = d.querySelector("link[rel=canonical]"),
    Ne = (Pe || d.location).href,
    Le = function (e, t) {
      var n;
      window.isHybridWebView && window.NativeBridge
        ? "heartbeat" !== (n = "moduleInteraction" === e ? "interaction" : e) &&
          window.NativeBridge.sendAnalytic(n, t)
        : p[Ce].push(Te({ event: e }, t));
    },
    qe = R(function () {
      return null;
    }),
    Me = function (e) {
      var t = e.name,
        n = e.label,
        r = e.context,
        i = e.element,
        o = void 0 === i ? null : i,
        a = e.useBeacon,
        i = e.medium,
        e = e.source;
      "undefined" != typeof window &&
        Le("moduleInteraction", {
          eventData: {
            pagetype: "game",
            trigger: "module",
            type: void 0 !== a && a ? "ob_click" : "click",
          },
          module: {
            type: "click",
            element: o || { name: t, label: n },
            context: r,
            label: n,
            medium: void 0 === i ? null : i,
            source: void 0 === e ? null : e,
          },
        });
    };

  function Ue(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return He(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      Be(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }

  function Fe(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            i,
            o = [],
            a = !0,
            s = !1;
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              a = !0
            );
          } catch (e) {
            (s = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          }
          return o;
        }
      })(e, t) ||
      Be(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }

  function Be(e, t) {
    if (e) {
      if ("string" == typeof e) return He(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Map" ===
        (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
        "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? He(e, t)
        : void 0;
    }
  }

  function He(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }

  function ze(n) {
    return Promise.all([Y.get(), de.get()])
      .then(function (e) {
        var t = Fe(e, 2),
          e = t[0],
          t = t[1];
        return Ve(e, t, n);
      })
      .catch(function () {
        return Ye;
      });
  }

  var We,
    Ye = "mailto:nytgames@nytimes.com",
    Ve = function (e, t) {
      for (
        var n = M.current,
          r = ""
            .concat(
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : "Web Feedback",
              " ("
            )
            .concat(n.slice(-6), ")"),
          i = p.screen,
          o = d.documentElement,
          a = new Date().getTimezoneOffset(),
          s = [
            p.location.pathname,
            i.width,
            i.height,
            o.clientWidth,
            o.clientHeight,
            "UTC".concat(0 < a ? "" : "+").concat(a / -60),
            e.id,
            null != V && V.hasDigi ? "Yes" : "No",
            null != V && V.hasXwd ? "Yes" : "No",
            (function () {
              try {
                var e = d.cookie.match(/nyt-xwd-hashd=(.+);/);
                return e && "true" === e[1];
              } catch (e) {
                return !1;
              }
            })()
              ? "Yes"
              : "No",
            n,
          ],
          c = t.feedback,
          u = /%s/,
          l = 0;
        l < s.length;

      )
        (c = c.replace(u, s[l].toString())), (l += 1);
      return Ye + O({ subject: r, body: c });
    },
    Ge = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    Je =
      ((We = "hub"),
      function (e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (Ge.includes(e))
          return Me({ name: We, label: "daily-archive", context: t });
        switch (e) {
          case "The Crossword":
            return Me({ name: We, label: "daily-page", context: t });
          case "The Mini":
            return Me({ name: We, label: "mini-page", context: t });
          case "Gameplay Stories":
            return Me({ name: We, label: "wordplay", context: t });
          case "Spelling Bee":
            return Me({ name: We, label: "spelling-bee", context: t });
          case "Wordle":
            return Me({ name: We, label: "wordle", context: t });
          case "Letter Boxed":
            return Me({ name: We, label: "letter-boxed", context: t });
          case "Tiles":
            return Me({ name: We, label: "tiles", context: t });
          case "Sudoku":
            return Me({ name: We, label: "sudoku", context: t });
          case "Vertex":
            return Me({ name: We, label: "vertex", context: t });
          case "All Games":
            return Me({ name: We, label: "nav-all-games", context: t });
          case "Statistics":
            return Me({ name: We, label: "stats", context: t });
          case "Crossword Archives":
            return Me({ name: We, label: "daily-archive", context: t });
          case "download-app":
            return Me({ name: We, label: "download-app", context: t });
          case "monthly-bonus":
            return Me({ name: We, label: "monthly-bonus", context: t });
          case "variety-puzzles":
            return Me({ name: We, label: "variety-puzzles", context: t });
          case "How to Solve The New York Times Crossword":
          case "Featured Article":
            return Me({ name: We, label: "featured-article", context: t });
          default:
            return null;
        }
      });

  function Xe(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Ke(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Ke(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Ke(e, t)
            : void 0;
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }

  function Ke(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }

  var $e,
    Qe,
    Ze,
    et,
    tt,
    nt = C("global-nav"),
    rt = C("mobile-toolbar"),
    it = "show-mobile-toolbar",
    m =
      (document.querySelector(".pz-header"),
      ($e = w(nt)),
      (Qe = w(rt)),
      (Ze = "pz-mobile-nav__toolbar-item"),
      (tt = !(et = "pz-dropdown__menu-item")),
      {
        create: function (e) {
          u(Qe, ot(e));
        },
        createDropDown: function (e) {
          var t = f("div", {
              id: C("mobile-dropdown"),
              class: "pz-dropdown pz-mobile-dropdown",
            }),
            n = f("button", {
              class: "pz-mobile-nav__toolbar-item pz-dropdown__button",
              onClick: function () {
                var e = w(C("mobile-dropdown")),
                  t = w(C("mobile-dropdown-arrow"));
                e && s(e, "show"), t && s(t, "reverse");
              },
            }),
            r = f("span", { class: "pz-dropdown__label" }, e.value),
            i = f("span", {
              class: "pz-dropdown__arrow down",
              id: C("mobile-dropdown-arrow"),
            }),
            o = f("nav", { class: "pz-dropdown__list" }),
            e = ot(e.items, !0);
          return c(n, r), c(n, i), c(t, n), c(t, o), u(o, e), t;
        },
        activate: function () {
          tt || ((tt = !0), y($e, it));
        },
        deactivate: function () {
          tt && ((tt = !1), g($e, it));
        },
      });

  function ot(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    return e.map(function (e) {
      return e instanceof HTMLElement
        ? e
        : (function (e) {
            var t,
              n = {
                class:
                  1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  arguments[1]
                    ? et
                    : Ze,
              };
            switch (e.type) {
              case "button":
                (t = "button"), (n.onClick = e.action);
                break;
              case "navigation":
                (t = "a"),
                  (n.href = e.url),
                  (n.target = window.isHybridWebView ? "_self" : "_blank"),
                  (n.rel = "noreferrer"),
                  e.action && (n.onClick = e.action);
                break;
              default:
                (t = "span"), (n.onClick = e.action);
            }
            var r = f(t, n, e.value);
            return (
              "text" !== e.type &&
                e.icon &&
                c(r, f("i", { class: "pz-toolbar-icon ".concat(e.icon) })),
              r
            );
          })(e, t);
    });
  }

  var at,
    st = "__viewers__";
  "IntersectionObserver" in p &&
    "IntersectionObserverEntry" in p &&
    "intersectionRatio" in p.IntersectionObserverEntry.prototype &&
    ("isIntersecting" in p.IntersectionObserverEntry.prototype ||
      Object.defineProperty(
        p.IntersectionObserverEntry.prototype,
        "isIntersecting",
        {
          get: function () {
            return 0 < this.intersectionRatio;
          },
        }
      ),
    (p.__observeInView__ = !0));
  var ct = function () {
    at = new p.IntersectionObserver(
      function (e) {
        e.forEach(function (t) {
          var e;
          t.isIntersecting &&
            null !== (e = t.target[st]) &&
            void 0 !== e &&
            e.forEach(function (e) {
              return e(t);
            });
        });
      },
      { threshold: 0.4 }
    );
  };

  function ut(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }

  function lt(r) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ut(Object(i), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = i[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
        : ut(Object(i)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
          });
    }
    return r;
  }

  function pt(e) {
    var t = e.target,
      n = t.getAttribute("data-region") || "",
      r = t.getAttribute("data-track") || "",
      i = t.getAttribute("data-label") || t.textContent,
      e = {};
    "noticeOptOut" === r &&
      (e = {
        name: t.getAttribute("data-element-name"),
        url: t.href || "",
        label: i,
      }),
      Le("moduleInteraction", {
        eventData: { pagetype: "game", trigger: "module", type: "click" },
        module: { name: ft[r], label: i, region: n, element: lt({}, e) },
      });
  }

  function dt(e) {
    var t = {},
      n = e.target.getAttribute("data-region") || "",
      r = e.target.getAttribute("data-track") || "",
      e = e.target.textContent;
    t[n] ||
      (Le("impression", {
        eventData: { pagetype: "game", trigger: "module", type: "impression" },
        module: { name: ft[r], label: e, region: n },
      }),
      (t[n] = !0));
  }

  var ft = {
    linkCANotice: "california notices link",
    linkOptOut: "ccpa opt-out link",
    optedOut: "ccpa opted-out indicator",
    modalPrivacy: "ccpa notice of opt-out privacy policy link",
    snackbar: "ccpa snackbar message",
    noticeOptOut: "ccpa notice of opt-out element",
  };

  function ht(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return mt(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return mt(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? mt(e, t)
            : void 0;
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }

  function mt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }

  function _t() {
    var e, t;
    try {
      (e = ht(document.getElementsByClassName("ccpa-impression"))),
        (t = ht(document.querySelectorAll(".ccpa-link")));
    } catch (e) {
      return;
    }

    t.forEach(function (e) {
      e.addEventListener("click", pt);
    }),
      e.forEach(function (e) {
        var t, n;
        (t = e),
          (n = dt),
          window.__observeInView__ &&
            (at || ct(),
            t[st]
              ? null !== (e = t[st]) && void 0 !== e && e.push(n)
              : ((t[st] = [n]), at.observe(t)));
      });
  }

  var bt = function (e, t) {
    return (bt =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      })(e, t);
  };

  function wt(e, t) {
    function n() {
      this.constructor = e;
    }

    bt(e, t),
      (e.prototype =
        null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
  }

  var St,
    Et,
    xt,
    kt,
    Ot,
    Tt,
    It = function () {
      return (It =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };

  function Ct(e, t) {
    var n = {};
    for (i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        t.indexOf(i) < 0 &&
        (n[i] = e[i]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
      for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
        t.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
          (n[i[r]] = e[i[r]]);
    return n;
  }

  function jt(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return {
            value: (e = e && r >= e.length ? void 0 : e) && e[r++],
            done: !e,
          };
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }

  function At(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      i,
      o = n.call(e),
      a = [];
    try {
      for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
        a.push(r.value);
    } catch (e) {
      i = { error: e };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }

  function Rt() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e = e.concat(At(arguments[t]));
    return e;
  }

  function Dt(e) {
    return (Dt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }

  function Pt(e) {
    switch (Object.prototype.toString.call(e)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return 1;
      default:
        return zt(e, Error);
    }
  }

  function Nt(e) {
    return "[object ErrorEvent]" === Object.prototype.toString.call(e);
  }

  function Lt(e) {
    return "[object DOMError]" === Object.prototype.toString.call(e);
  }

  function qt(e) {
    return "[object String]" === Object.prototype.toString.call(e);
  }

  function Mt(e) {
    return null === e || ("object" !== Dt(e) && "function" != typeof e);
  }

  function Ut(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }

  function Ft(e) {
    return "undefined" != typeof Event && zt(e, Event);
  }

  function Bt(e) {
    return "undefined" != typeof Element && zt(e, Element);
  }

  function Ht(e) {
    return Boolean(e && e.then && "function" == typeof e.then);
  }

  function zt(e, t) {
    try {
      return e instanceof t;
    } catch (e) {
      return !1;
    }
  }

  function Wt(e, t) {
    try {
      for (
        var n, r = e, i = [], o = 0, a = 0, s = " > ".length;
        r &&
        o++ < 5 &&
        !(
          "html" ===
            (n = (function (e, t) {
              var n,
                r,
                i,
                o,
                a = e,
                s = [];
              if (!a || !a.tagName) return "";
              s.push(a.tagName.toLowerCase());
              var e =
                null !== (e = t) && void 0 !== e && e.length
                  ? t
                      .filter(function (e) {
                        return a.getAttribute(e);
                      })
                      .map(function (e) {
                        return [e, a.getAttribute(e)];
                      })
                  : null;
              if (null !== (t = e) && void 0 !== t && t.length)
                e.forEach(function (e) {
                  s.push("[" + e[0] + '="' + e[1] + '"]');
                });
              else if ((a.id && s.push("#" + a.id), (e = a.className) && qt(e)))
                for (n = e.split(/\s+/), o = 0; o < n.length; o++)
                  s.push("." + n[o]);
              var c = ["type", "name", "title", "alt"];
              for (o = 0; o < c.length; o++)
                (r = c[o]),
                  (i = a.getAttribute(r)) && s.push("[" + r + '="' + i + '"]');
              return s.join("");
            })(r, t)) ||
          (1 < o && 80 <= a + i.length * s + n.length)
        );

      )
        i.push(n), (a += n.length), (r = r.parentNode);
      return i.reverse().join(" > ");
    } catch (e) {
      return "<unknown>";
    }
  }

  ((x = St = St || {}).Ok = "ok"),
    (x.Exited = "exited"),
    (x.Crashed = "crashed"),
    (x.Abnormal = "abnormal"),
    ((E = Kn = Kn || {}).Ok = "ok"),
    (E.Errored = "errored"),
    (E.Crashed = "crashed"),
    ((o = Et = Et || {}).Fatal = "fatal"),
    (o.Error = "error"),
    (o.Warning = "warning"),
    (o.Log = "log"),
    (o.Info = "info"),
    (o.Debug = "debug"),
    (o.Critical = "critical"),
    ((xt = Et = Et || {}).fromString = function (e) {
      switch (e) {
        case "debug":
          return xt.Debug;
        case "info":
          return xt.Info;
        case "warn":
        case "warning":
          return xt.Warning;
        case "error":
          return xt.Error;
        case "fatal":
          return xt.Fatal;
        case "critical":
          return xt.Critical;
        default:
          return xt.Log;
      }
    }),
    (($ = kt = kt || {}).Unknown = "unknown"),
    ($.Skipped = "skipped"),
    ($.Success = "success"),
    ($.RateLimit = "rate_limit"),
    ($.Invalid = "invalid"),
    ($.Failed = "failed"),
    ((Ot = kt = kt || {}).fromHttpCode = function (e) {
      return 200 <= e && e < 300
        ? Ot.Success
        : 429 === e
        ? Ot.RateLimit
        : 400 <= e && e < 500
        ? Ot.Invalid
        : 500 <= e
        ? Ot.Failed
        : Ot.Unknown;
    }),
    ((n = Tt = Tt || {}).Explicit = "explicitly_set"),
    (n.Sampler = "client_sampler"),
    (n.Rate = "client_rate"),
    (n.Inheritance = "inheritance");
  var Yt =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array
      ? function (e, t) {
          return (e.__proto__ = t), e;
        }
      : function (e, t) {
          for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
          return e;
        });
  var Vt,
    Gt = (wt(Jt, (Vt = Error)), Jt);

  function Jt(e) {
    var t = this.constructor,
      n = Vt.call(this, e) || this;
    return (
      (n.message = e),
      (n.name = t.prototype.constructor.name),
      Yt(n, t.prototype),
      n
    );
  }

  var Xt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
    Kt = "Invalid Dsn",
    $t =
      ((Qt.prototype.toString = function (e) {
        var t = this,
          n = t.host,
          r = t.path,
          i = t.pass,
          o = t.port,
          a = t.projectId;
        return (
          t.protocol +
          "://" +
          t.publicKey +
          ((e = void 0 === e ? !1 : e) && i ? ":" + i : "") +
          "@" +
          n +
          (o ? ":" + o : "") +
          "/" +
          (r && r + "/") +
          a
        );
      }),
      (Qt.prototype._fromString = function (e) {
        var t = Xt.exec(e);
        if (!t) throw new Gt(Kt);
        var n = At(t.slice(1), 6),
          r = n[0],
          i = n[1],
          o = n[2],
          a = void 0 === o ? "" : o,
          s = n[3],
          e = n[4],
          t = void 0 === e ? "" : e,
          o = "",
          e = n[5],
          n = e.split("/");
        1 < n.length && ((o = n.slice(0, -1).join("/")), (e = n.pop())),
          !e || ((n = e.match(/^\d+/)) && (e = n[0])),
          this._fromComponents({
            host: s,
            pass: a,
            path: o,
            projectId: e,
            port: t,
            protocol: r,
            publicKey: i,
          });
      }),
      (Qt.prototype._fromComponents = function (e) {
        "user" in e && !("publicKey" in e) && (e.publicKey = e.user),
          (this.user = e.publicKey || ""),
          (this.protocol = e.protocol),
          (this.publicKey = e.publicKey || ""),
          (this.pass = e.pass || ""),
          (this.host = e.host),
          (this.port = e.port || ""),
          (this.path = e.path || ""),
          (this.projectId = e.projectId);
      }),
      (Qt.prototype._validate = function () {
        var t = this;
        if (
          (["protocol", "publicKey", "host", "projectId"].forEach(function (e) {
            if (!t[e]) throw new Gt(Kt + ": " + e + " missing");
          }),
          !this.projectId.match(/^\d+$/))
        )
          throw new Gt(Kt + ": Invalid projectId " + this.projectId);
        if ("http" !== this.protocol && "https" !== this.protocol)
          throw new Gt(Kt + ": Invalid protocol " + this.protocol);
        if (this.port && isNaN(parseInt(this.port, 10)))
          throw new Gt(Kt + ": Invalid port " + this.port);
      }),
      Qt);

  function Qt(e) {
    "string" == typeof e ? this._fromString(e) : this._fromComponents(e),
      this._validate();
  }

  function Zt() {
    return (
      "[object process]" ===
      Object.prototype.toString.call(
        "undefined" != typeof process ? process : 0
      )
    );
  }

  function en(e, t) {
    return e.require(t);
  }

  function tn(e) {
    try {
      n = en(module, e);
    } catch (e) {}
    try {
      var t = en(module, "process").cwd,
        n = en(module, t() + "/node_modules/" + e);
    } catch (e) {}
    return n;
  }

  function nn(e, t) {
    return (
      void 0 === t && (t = 0),
      "string" != typeof e || 0 === t || e.length <= t
        ? e
        : e.substr(0, t) + "..."
    );
  }

  function rn(e, t) {
    if (!Array.isArray(e)) return "";
    for (var n = [], r = 0; r < e.length; r++) {
      var i = e[r];
      try {
        n.push(String(i));
      } catch (e) {
        n.push("[value cannot be serialized]");
      }
    }
    return n.join(t);
  }

  function on(e, t) {
    return (
      !!qt(e) &&
      ("[object RegExp]" === Object.prototype.toString.call(t)
        ? t.test(e)
        : "string" == typeof t && -1 !== e.indexOf(t))
    );
  }

  var an = {};

  function sn() {
    return Zt()
      ? global
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof self
      ? self
      : an;
  }

  function cn() {
    var e = sn(),
      t = e.crypto || e.msCrypto;
    if (void 0 !== t && t.getRandomValues) {
      e = new Uint16Array(8);
      t.getRandomValues(e),
        (e[3] = (4095 & e[3]) | 16384),
        (e[4] = (16383 & e[4]) | 32768);
      t = function (e) {
        for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
        return t;
      };
      return (
        t(e[0]) +
        t(e[1]) +
        t(e[2]) +
        t(e[3]) +
        t(e[4]) +
        t(e[5]) +
        t(e[6]) +
        t(e[7])
      );
    }
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = (16 * Math.random()) | 0;
      return ("x" === e ? t : (3 & t) | 8).toString(16);
    });
  }

  function un(e) {
    if (!e) return {};
    var t = e.match(
      /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
    );
    if (!t) return {};
    var n = t[6] || "",
      e = t[8] || "";
    return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + e };
  }

  function ln(e) {
    if (e.message) return e.message;
    if (e.exception && e.exception.values && e.exception.values[0]) {
      var t = e.exception.values[0];
      return t.type && t.value
        ? t.type + ": " + t.value
        : t.type || t.value || e.event_id || "<unknown>";
    }
    return e.event_id || "<unknown>";
  }

  function pn(e) {
    var t = sn();
    if (!("console" in t)) return e();
    var n = t.console,
      r = {};
    ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
      e in t.console &&
        n[e].__sentry_original__ &&
        ((r[e] = n[e]), (n[e] = n[e].__sentry_original__));
    });
    e = e();
    return (
      Object.keys(r).forEach(function (e) {
        n[e] = r[e];
      }),
      e
    );
  }

  function dn(e, t, n) {
    (e.exception = e.exception || {}),
      (e.exception.values = e.exception.values || []),
      (e.exception.values[0] = e.exception.values[0] || {}),
      (e.exception.values[0].value = e.exception.values[0].value || t || ""),
      (e.exception.values[0].type = e.exception.values[0].type || n || "Error");
  }

  function fn(t, n) {
    void 0 === n && (n = {});
    try {
      (t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}),
        Object.keys(n).forEach(function (e) {
          t.exception.values[0].mechanism[e] = n[e];
        });
    } catch (e) {}
  }

  var hn = sn(),
    mn = "Sentry Logger ",
    Pe =
      ((vn.prototype.disable = function () {
        this._enabled = !1;
      }),
      (vn.prototype.enable = function () {
        this._enabled = !0;
      }),
      (vn.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._enabled &&
          pn(function () {
            hn.console.log(mn + "[Log]: " + e.join(" "));
          });
      }),
      (vn.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._enabled &&
          pn(function () {
            hn.console.warn(mn + "[Warn]: " + e.join(" "));
          });
      }),
      (vn.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._enabled &&
          pn(function () {
            hn.console.error(mn + "[Error]: " + e.join(" "));
          });
      }),
      vn);

  function vn() {
    this._enabled = !1;
  }

  hn.__SENTRY__ = hn.__SENTRY__ || {};
  var yn = hn.__SENTRY__.logger || (hn.__SENTRY__.logger = new Pe()),
    gn =
      ((_n.prototype.memoize = function (e) {
        if (this._hasWeakSet)
          return !!this._inner.has(e) || (this._inner.add(e), !1);
        for (var t = 0; t < this._inner.length; t++)
          if (this._inner[t] === e) return !0;
        return this._inner.push(e), !1;
      }),
      (_n.prototype.unmemoize = function (e) {
        if (this._hasWeakSet) this._inner.delete(e);
        else
          for (var t = 0; t < this._inner.length; t++)
            if (this._inner[t] === e) {
              this._inner.splice(t, 1);
              break;
            }
      }),
      _n);

  function _n() {
    (this._hasWeakSet = "function" == typeof WeakSet),
      (this._inner = this._hasWeakSet ? new WeakSet() : []);
  }

  var bn = "<anonymous>";

  function wn(e) {
    try {
      return e && "function" == typeof e ? e.name || bn : bn;
    } catch (e) {
      return bn;
    }
  }

  function Sn(e) {
    return (Sn =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }

  function En(e, t, n) {
    if (t in e) {
      var r = e[t],
        n = n(r);
      if ("function" == typeof n)
        try {
          (n.prototype = n.prototype || {}),
            Object.defineProperties(n, {
              __sentry_original__: {
                enumerable: !1,
                value: r,
              },
            });
        } catch (e) {}
      e[t] = n;
    }
  }

  function xn(e) {
    if (Pt(e)) {
      var t,
        n = e,
        r = { message: n.message, name: n.name, stack: n.stack };
      for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t]);
      return r;
    }
    if (Ft(e)) {
      var i,
        o = e,
        a = {};
      a.type = o.type;
      try {
        a.target = Bt(o.target)
          ? Wt(o.target)
          : Object.prototype.toString.call(o.target);
      } catch (e) {
        a.target = "<unknown>";
      }
      try {
        a.currentTarget = Bt(o.currentTarget)
          ? Wt(o.currentTarget)
          : Object.prototype.toString.call(o.currentTarget);
      } catch (e) {
        a.currentTarget = "<unknown>";
      }
      for (i in ("undefined" != typeof CustomEvent &&
        zt(e, CustomEvent) &&
        (a.detail = o.detail),
      o))
        Object.prototype.hasOwnProperty.call(o, i) && (a[i] = o[i]);
      return a;
    }
    return e;
  }

  function kn(e) {
    return (e = JSON.stringify(e)), ~-encodeURI(e).split(/%..|./).length;
  }

  function On(e, t) {
    return "domain" === t && e && "object" === Sn(e) && e._events
      ? "[Domain]"
      : "domainEmitter" === t
      ? "[DomainEmitter]"
      : "undefined" != typeof global && e === global
      ? "[Global]"
      : "undefined" != typeof window && e === window
      ? "[Window]"
      : "undefined" != typeof document && e === document
      ? "[Document]"
      : Ut((t = e)) &&
        "nativeEvent" in t &&
        "preventDefault" in t &&
        "stopPropagation" in t
      ? "[SyntheticEvent]"
      : "number" == typeof e && e != e
      ? "[NaN]"
      : void 0 === e
      ? "[undefined]"
      : "function" == typeof e
      ? "[Function: " + wn(e) + "]"
      : "symbol" === Sn(e)
      ? "[" + String(e) + "]"
      : "bigint" == typeof e
      ? "[BigInt: " + String(e) + "]"
      : e;
  }

  function Tn(e, t, n, r) {
    if ((void 0 === n && (n = 1 / 0), void 0 === r && (r = new gn()), 0 === n))
      return (
        (i = t),
        (o = Object.prototype.toString.call(i)),
        "string" == typeof i
          ? i
          : "[object Object]" === o
          ? "[Object]"
          : "[object Array]" === o
          ? "[Array]"
          : Mt((i = On(i)))
          ? i
          : o
      );
    var i, o;
    if (null != t && "function" == typeof t.toJSON) return t.toJSON();
    e = On(t, e);
    if (Mt(e)) return e;
    var a,
      s = xn(t),
      c = Array.isArray(t) ? [] : {};
    if (r.memoize(t)) return "[Circular ~]";
    for (a in s)
      Object.prototype.hasOwnProperty.call(s, a) &&
        (c[a] = Tn(a, s[a], n - 1, r));
    return r.unmemoize(t), c;
  }

  function In(e, n) {
    try {
      return JSON.parse(
        JSON.stringify(e, function (e, t) {
          return Tn(e, t, n);
        })
      );
    } catch (e) {
      return "**non-serializable**";
    }
  }

  function Cn(e) {
    var t, n;
    if (Ut(e)) {
      var r = e,
        i = {};
      try {
        for (var o = jt(Object.keys(r)), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          void 0 !== r[s] && (i[s] = Cn(r[s]));
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          a && !a.done && (n = o.return) && n.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return i;
    }
    return Array.isArray(e) ? e.map(Cn) : e;
  }

  function jn() {
    if ("fetch" in sn())
      try {
        return new Headers(), new Request(""), new Response(), 1;
      } catch (e) {
        return;
      }
  }

  function An(e) {
    return (
      e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    );
  }

  var Rn,
    Dn = sn(),
    Pn = {},
    Nn = {};

  function Ln(e) {
    var r, a, s, c, t;
    if (!Nn[e])
      switch (((Nn[e] = !0), e)) {
        case "console":
          "console" in Dn &&
            ["debug", "info", "warn", "error", "log", "assert"].forEach(
              function (r) {
                r in Dn.console &&
                  En(Dn.console, r, function (n) {
                    return function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      Mn("console", { args: e, level: r }),
                        n && Function.prototype.apply.call(n, Dn.console, e);
                    };
                  });
              }
            );
          break;
        case "dom":
          "document" in Dn &&
            ((c = Mn.bind(null, "dom")),
            (t = Bn(c, !0)),
            Dn.document.addEventListener("click", t, !1),
            Dn.document.addEventListener("keypress", t, !1),
            ["EventTarget", "Node"].forEach(function (e) {
              e = Dn[e] && Dn[e].prototype;
              e &&
                e.hasOwnProperty &&
                e.hasOwnProperty("addEventListener") &&
                (En(e, "addEventListener", function (a) {
                  return function (e, t, n) {
                    if ("click" === e || "keypress" == e)
                      try {
                        var r,
                          i = (this.__sentry_instrumentation_handlers__ =
                            this.__sentry_instrumentation_handlers__ || {}),
                          o = (i[e] = i[e] || { refCount: 0 });
                        o.handler ||
                          ((r = Bn(c)), (o.handler = r), a.call(this, e, r, n)),
                          (o.refCount += 1);
                      } catch (e) {}
                    return a.call(this, e, t, n);
                  };
                }),
                En(e, "removeEventListener", function (o) {
                  return function (e, t, n) {
                    if ("click" === e || "keypress" == e)
                      try {
                        var r = this.__sentry_instrumentation_handlers__ || {},
                          i = r[e];
                        i &&
                          (--i.refCount,
                          i.refCount <= 0 &&
                            (o.call(this, e, i.handler, n),
                            (i.handler = void 0),
                            delete r[e]),
                          0 === Object.keys(r).length &&
                            delete this.__sentry_instrumentation_handlers__);
                      } catch (e) {}
                    return o.call(this, e, t, n);
                  };
                }));
            }));
          break;
        case "xhr":
          "XMLHttpRequest" in Dn &&
            ((a = []),
            (s = []),
            En((t = XMLHttpRequest.prototype), "open", function (o) {
              return function () {
                for (var n = [], e = 0; e < arguments.length; e++)
                  n[e] = arguments[e];
                var r = this,
                  t = n[1];
                (r.__sentry_xhr__ = {
                  method: qt(n[0]) ? n[0].toUpperCase() : n[0],
                  url: n[1],
                }),
                  qt(t) &&
                    "POST" === r.__sentry_xhr__.method &&
                    t.match(/sentry_key/) &&
                    (r.__sentry_own_request__ = !0);

                function i() {
                  if (4 === r.readyState) {
                    try {
                      r.__sentry_xhr__ &&
                        (r.__sentry_xhr__.status_code = r.status);
                    } catch (e) {}
                    try {
                      var e,
                        t = a.indexOf(r);
                      -1 !== t &&
                        (a.splice(t),
                        (e = s.splice(t)[0]),
                        r.__sentry_xhr__ &&
                          void 0 !== e[0] &&
                          (r.__sentry_xhr__.body = e[0]));
                    } catch (e) {}
                    Mn("xhr", {
                      args: n,
                      endTimestamp: Date.now(),
                      startTimestamp: Date.now(),
                      xhr: r,
                    });
                  }
                }

                return (
                  "onreadystatechange" in r &&
                  "function" == typeof r.onreadystatechange
                    ? En(r, "onreadystatechange", function (n) {
                        return function () {
                          for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                          return i(), n.apply(r, e);
                        };
                      })
                    : r.addEventListener("readystatechange", i),
                  o.apply(r, n)
                );
              };
            }),
            En(t, "send", function (n) {
              return function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return (
                  a.push(this),
                  s.push(e),
                  Mn("xhr", {
                    args: e,
                    startTimestamp: Date.now(),
                    xhr: this,
                  }),
                  n.apply(this, e)
                );
              };
            }));
          break;
        case "fetch":
          !(function () {
            if (jn()) {
              var e = sn();
              if (An(e.fetch)) return 1;
              var t = !1,
                e = e.document;
              if (e && "function" == typeof e.createElement)
                try {
                  var n = e.createElement("iframe");
                  (n.hidden = !0),
                    e.head.appendChild(n),
                    n.contentWindow &&
                      n.contentWindow.fetch &&
                      (t = An(n.contentWindow.fetch)),
                    e.head.removeChild(n);
                } catch (e) {
                  yn.warn(
                    "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                    e
                  );
                }
              return t;
            }
          })() ||
            En(Dn, "fetch", function (r) {
              return function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var n = {
                  args: e,
                  fetchData: {
                    method: (function (e) {
                      void 0 === e && (e = []);
                      if ("Request" in Dn && zt(e[0], Request) && e[0].method)
                        return String(e[0].method).toUpperCase();
                      if (e[1] && e[1].method)
                        return String(e[1].method).toUpperCase();
                      return "GET";
                    })(e),
                    url: (function (e) {
                      void 0 === e && (e = []);
                      if ("string" == typeof e[0]) return e[0];
                      if ("Request" in Dn && zt(e[0], Request)) return e[0].url;
                      return String(e[0]);
                    })(e),
                  },
                  startTimestamp: Date.now(),
                };
                return (
                  Mn("fetch", It({}, n)),
                  r.apply(Dn, e).then(
                    function (e) {
                      return (
                        Mn(
                          "fetch",
                          It(It({}, n), {
                            endTimestamp: Date.now(),
                            response: e,
                          })
                        ),
                        e
                      );
                    },
                    function (e) {
                      throw (
                        (Mn(
                          "fetch",
                          It(It({}, n), { endTimestamp: Date.now(), error: e })
                        ),
                        e)
                      );
                    }
                  )
                );
              };
            });
          break;
        case "history":
          !(function () {
            var e = sn(),
              t = (t = e.chrome) && t.app && t.app.runtime,
              e =
                "history" in e &&
                !!e.history.pushState &&
                !!e.history.replaceState;
            return !t && e;
          })() ||
            ((r = Dn.onpopstate),
            (Dn.onpopstate = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = Dn.location.href;
              if ((Mn("history", { from: Rn, to: (Rn = n) }), r))
                try {
                  return r.apply(this, e);
                } catch (e) {}
            }),
            En(Dn.history, "pushState", n),
            En(Dn.history, "replaceState", n));
          break;
        case "error":
          (Hn = Dn.onerror),
            (Dn.onerror = function (e, t, n, r, i) {
              return (
                Mn("error", { column: r, error: i, line: n, msg: e, url: t }),
                !!Hn && Hn.apply(this, arguments)
              );
            });
          break;
        case "unhandledrejection":
          (Wn = Dn.onunhandledrejection),
            (Dn.onunhandledrejection = function (e) {
              return (
                Mn("unhandledrejection", e), !Wn || Wn.apply(this, arguments)
              );
            });
          break;
        default:
          yn.warn("unknown instrumentation type:", e);
      }

    function n(i) {
      return function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n,
          r = 2 < e.length ? e[2] : void 0;
        return (
          r &&
            ((n = Rn),
            (r = String(r)),
            Mn("history", { from: n, to: (Rn = r) })),
          i.apply(this, e)
        );
      };
    }
  }

  function qn(e) {
    e &&
      "string" == typeof e.type &&
      "function" == typeof e.callback &&
      ((Pn[e.type] = Pn[e.type] || []),
      Pn[e.type].push(e.callback),
      Ln(e.type));
  }

  function Mn(t, e) {
    var n, r;
    if (t && Pn[t])
      try {
        for (var i = jt(Pn[t] || []), o = i.next(); !o.done; o = i.next()) {
          var a = o.value;
          try {
            a(e);
          } catch (e) {
            yn.error(
              "Error while triggering instrumentation handler.\nType: " +
                t +
                "\nName: " +
                wn(a) +
                "\nError: " +
                e
            );
          }
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
  }

  var Un, Fn;

  function Bn(n, r) {
    return (
      void 0 === r && (r = !1),
      function (e) {
        var t;
        e &&
          Fn !== e &&
          !(function (e) {
            if ("keypress" === e.type) {
              try {
                var t = e.target;
                if (!t || !t.tagName) return 1;
                if (
                  "INPUT" === t.tagName ||
                  "TEXTAREA" === t.tagName ||
                  t.isContentEditable
                )
                  return;
              } catch (e) {}
              return 1;
            }
          })(e) &&
          ((t = "keypress" === e.type ? "input" : e.type),
          (void 0 !== Un &&
            !(function (e, t) {
              if (!e) return 1;
              if (e.type !== t.type) return 1;
              try {
                if (e.target !== t.target) return 1;
              } catch (e) {}
            })(Fn, e)) ||
            (n({ event: e, name: t, global: r }), (Fn = e)),
          clearTimeout(Un),
          (Un = Dn.setTimeout(function () {
            Un = void 0;
          }, 1e3)));
      }
    );
  }

  var Hn = null;
  var zn,
    Wn = null;
  ((R = zn = zn || {}).PENDING = "PENDING"),
    (R.RESOLVED = "RESOLVED"),
    (R.REJECTED = "REJECTED");
  var Yn =
    ((Vn.resolve = function (t) {
      return new Vn(function (e) {
        e(t);
      });
    }),
    (Vn.reject = function (n) {
      return new Vn(function (e, t) {
        t(n);
      });
    }),
    (Vn.all = function (e) {
      return new Vn(function (n, r) {
        var i, o;
        Array.isArray(e)
          ? 0 !== e.length
            ? ((i = e.length),
              (o = []),
              e.forEach(function (e, t) {
                Vn.resolve(e)
                  .then(function (e) {
                    (o[t] = e), 0 === --i && n(o);
                  })
                  .then(null, r);
              }))
            : n([])
          : r(new TypeError("Promise.all requires an array as input."));
      });
    }),
    (Vn.prototype.then = function (r, i) {
      var e = this;
      return new Vn(function (t, n) {
        e._attachHandler({
          done: !1,
          onfulfilled: function (e) {
            if (r)
              try {
                return void t(r(e));
              } catch (e) {
                return void n(e);
              }
            else t(e);
          },
          onrejected: function (e) {
            if (i)
              try {
                return void t(i(e));
              } catch (e) {
                return void n(e);
              }
            else n(e);
          },
        });
      });
    }),
    (Vn.prototype.catch = function (e) {
      return this.then(function (e) {
        return e;
      }, e);
    }),
    (Vn.prototype.finally = function (i) {
      var o = this;
      return new Vn(function (e, t) {
        var n, r;
        return o
          .then(
            function (e) {
              (r = !1), (n = e), i && i();
            },
            function (e) {
              (r = !0), (n = e), i && i();
            }
          )
          .then(function () {
            (r ? t : e)(n);
          });
      });
    }),
    (Vn.prototype.toString = function () {
      return "[object SyncPromise]";
    }),
    Vn);

  function Vn(e) {
    var n = this;
    (this._state = zn.PENDING),
      (this._handlers = []),
      (this._resolve = function (e) {
        n._setResult(zn.RESOLVED, e);
      }),
      (this._reject = function (e) {
        n._setResult(zn.REJECTED, e);
      }),
      (this._setResult = function (e, t) {
        n._state === zn.PENDING &&
          (Ht(t)
            ? t.then(n._resolve, n._reject)
            : ((n._state = e), (n._value = t), n._executeHandlers()));
      }),
      (this._attachHandler = function (e) {
        (n._handlers = n._handlers.concat(e)), n._executeHandlers();
      }),
      (this._executeHandlers = function () {
        var e;
        n._state !== zn.PENDING &&
          ((e = n._handlers.slice()),
          (n._handlers = []),
          e.forEach(function (e) {
            e.done ||
              (n._state === zn.RESOLVED &&
                e.onfulfilled &&
                e.onfulfilled(n._value),
              n._state === zn.REJECTED &&
                e.onrejected &&
                e.onrejected(n._value),
              (e.done = !0));
          }));
      });
    try {
      e(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }

  var Gn =
    ((Jn.prototype.isReady = function () {
      return void 0 === this._limit || this.length() < this._limit;
    }),
    (Jn.prototype.add = function (e) {
      var t = this;
      if (!this.isReady())
        return Yn.reject(
          new Gt("Not adding Promise due to buffer limit reached.")
        );
      var n = e();
      return (
        -1 === this._buffer.indexOf(n) && this._buffer.push(n),
        n
          .then(function () {
            return t.remove(n);
          })
          .then(null, function () {
            return t.remove(n).then(null, function () {});
          }),
        n
      );
    }),
    (Jn.prototype.remove = function (e) {
      return this._buffer.splice(this._buffer.indexOf(e), 1)[0];
    }),
    (Jn.prototype.length = function () {
      return this._buffer.length;
    }),
    (Jn.prototype.drain = function (n) {
      var r = this;
      return new Yn(function (e) {
        var t = setTimeout(function () {
          n && 0 < n && e(!1);
        }, n);
        Yn.all(r._buffer)
          .then(function () {
            clearTimeout(t), e(!0);
          })
          .then(null, function () {
            e(!0);
          });
      });
    }),
    Jn);

  function Jn(e) {
    (this._limit = e), (this._buffer = []);
  }

  x = {
    nowSeconds: function () {
      return Date.now() / 1e3;
    },
  };
  var Xn = (
      Zt()
        ? function () {
            try {
              return en(module, "perf_hooks").performance;
            } catch (e) {
              return;
            }
          }
        : function () {
            var e = sn().performance;
            if (e && e.now)
              return {
                now: function () {
                  return e.now();
                },
                timeOrigin: Date.now() - e.now(),
              };
          }
    )(),
    Kn =
      void 0 === Xn
        ? x
        : {
            nowSeconds: function () {
              return (Xn.timeOrigin + Xn.now()) / 1e3;
            },
          },
    $n = x.nowSeconds.bind(x),
    Qn = Kn.nowSeconds.bind(Kn),
    Zn = Qn,
    er = (function () {
      var e = sn().performance;
      if (e && e.now) {
        var t = e.now(),
          n = Date.now(),
          r = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
          i = r < 36e5,
          o = e.timing && e.timing.navigationStart,
          t = "number" == typeof o ? Math.abs(o + t - n) : 36e5;
        return i || t < 36e5 ? (r <= t ? e.timeOrigin : o) : n;
      }
    })(),
    tr =
      ((nr.clone = function (e) {
        var t = new nr();
        return (
          e &&
            ((t._breadcrumbs = Rt(e._breadcrumbs)),
            (t._tags = It({}, e._tags)),
            (t._extra = It({}, e._extra)),
            (t._contexts = It({}, e._contexts)),
            (t._user = e._user),
            (t._level = e._level),
            (t._span = e._span),
            (t._session = e._session),
            (t._transactionName = e._transactionName),
            (t._fingerprint = e._fingerprint),
            (t._eventProcessors = Rt(e._eventProcessors)),
            (t._requestSession = e._requestSession)),
          t
        );
      }),
      (nr.prototype.addScopeListener = function (e) {
        this._scopeListeners.push(e);
      }),
      (nr.prototype.addEventProcessor = function (e) {
        return this._eventProcessors.push(e), this;
      }),
      (nr.prototype.setUser = function (e) {
        return (
          (this._user = e || {}),
          this._session && this._session.update({ user: e }),
          this._notifyScopeListeners(),
          this
        );
      }),
      (nr.prototype.getUser = function () {
        return this._user;
      }),
      (nr.prototype.getRequestSession = function () {
        return this._requestSession;
      }),
      (nr.prototype.setRequestSession = function (e) {
        return (this._requestSession = e), this;
      }),
      (nr.prototype.setTags = function (e) {
        return (
          (this._tags = It(It({}, this._tags), e)),
          this._notifyScopeListeners(),
          this
        );
      }),
      (nr.prototype.setTag = function (e, t) {
        var n;
        return (
          (this._tags = It(It({}, this._tags), (((n = {})[e] = t), n))),
          this._notifyScopeListeners(),
          this
        );
      }),
      (nr.prototype.setExtras = function (e) {
        return (
          (this._extra = It(It({}, this._extra), e)),
          this._notifyScopeListeners(),
          this
        );
      }),
      (nr.prototype.setExtra = function (e, t) {
        var n;
        return (
          (this._extra = It(It({}, this._extra), (((n = {})[e] = t), n))),
          this._notifyScopeListeners(),
          this
        );
      }),
      (nr.prototype.setFingerprint = function (e) {
        return (this._fingerprint = e), this._notifyScopeListeners(), this;
      }),
      (nr.prototype.setLevel = function (e) {
        return (this._level = e), this._notifyScopeListeners(), this;
      }),
      (nr.prototype.setTransactionName = function (e) {
        return (this._transactionName = e), this._notifyScopeListeners(), this;
      }),
      (nr.prototype.setTransaction = function (e) {
        return this.setTransactionName(e);
      }),
      (nr.prototype.setContext = function (e, t) {
        var n;
        return (
          null === t
            ? delete this._contexts[e]
            : (this._contexts = It(
                It({}, this._contexts),
                (((n = {})[e] = t), n)
              )),
          this._notifyScopeListeners(),
          this
        );
      }),
      (nr.prototype.setSpan = function (e) {
        return (this._span = e), this._notifyScopeListeners(), this;
      }),
      (nr.prototype.getSpan = function () {
        return this._span;
      }),
      (nr.prototype.getTransaction = function () {
        var e,
          t = this.getSpan();
        return null !== t && void 0 !== t && t.transaction
          ? null === t || void 0 === t
            ? void 0
            : t.transaction
          : null !==
              (e = null === t || void 0 === t ? void 0 : t.spanRecorder) &&
            void 0 !== e &&
            e.spans[0]
          ? t.spanRecorder.spans[0]
          : void 0;
      }),
      (nr.prototype.setSession = function (e) {
        return (
          e ? (this._session = e) : delete this._session,
          this._notifyScopeListeners(),
          this
        );
      }),
      (nr.prototype.getSession = function () {
        return this._session;
      }),
      (nr.prototype.update = function (e) {
        if (!e) return this;
        if ("function" != typeof e)
          return (
            e instanceof nr
              ? ((this._tags = It(It({}, this._tags), e._tags)),
                (this._extra = It(It({}, this._extra), e._extra)),
                (this._contexts = It(It({}, this._contexts), e._contexts)),
                e._user &&
                  Object.keys(e._user).length &&
                  (this._user = e._user),
                e._level && (this._level = e._level),
                e._fingerprint && (this._fingerprint = e._fingerprint),
                e._requestSession && (this._requestSession = e._requestSession))
              : Ut(e) &&
                ((this._tags = It(It({}, this._tags), e.tags)),
                (this._extra = It(It({}, this._extra), e.extra)),
                (this._contexts = It(It({}, this._contexts), e.contexts)),
                e.user && (this._user = e.user),
                e.level && (this._level = e.level),
                e.fingerprint && (this._fingerprint = e.fingerprint),
                e.requestSession && (this._requestSession = e.requestSession)),
            this
          );
        e = e(this);
        return e instanceof nr ? e : this;
      }),
      (nr.prototype.clear = function () {
        return (
          (this._breadcrumbs = []),
          (this._tags = {}),
          (this._extra = {}),
          (this._user = {}),
          (this._contexts = {}),
          (this._level = void 0),
          (this._transactionName = void 0),
          (this._fingerprint = void 0),
          (this._requestSession = void 0),
          (this._span = void 0),
          (this._session = void 0),
          this._notifyScopeListeners(),
          this
        );
      }),
      (nr.prototype.addBreadcrumb = function (e, t) {
        t = "number" == typeof t ? Math.min(t, 100) : 100;
        if (t <= 0) return this;
        e = It({ timestamp: $n() }, e);
        return (
          (this._breadcrumbs = Rt(this._breadcrumbs, [e]).slice(-t)),
          this._notifyScopeListeners(),
          this
        );
      }),
      (nr.prototype.clearBreadcrumbs = function () {
        return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
      }),
      (nr.prototype.applyToEvent = function (e, t) {
        var n;
        return (
          this._extra &&
            Object.keys(this._extra).length &&
            (e.extra = It(It({}, this._extra), e.extra)),
          this._tags &&
            Object.keys(this._tags).length &&
            (e.tags = It(It({}, this._tags), e.tags)),
          this._user &&
            Object.keys(this._user).length &&
            (e.user = It(It({}, this._user), e.user)),
          this._contexts &&
            Object.keys(this._contexts).length &&
            (e.contexts = It(It({}, this._contexts), e.contexts)),
          this._level && (e.level = this._level),
          this._transactionName && (e.transaction = this._transactionName),
          this._span &&
            ((e.contexts = It(
              { trace: this._span.getTraceContext() },
              e.contexts
            )),
            (n =
              null === (n = this._span.transaction) || void 0 === n
                ? void 0
                : n.name) && (e.tags = It({ transaction: n }, e.tags))),
          this._applyFingerprint(e),
          (e.breadcrumbs = Rt(e.breadcrumbs || [], this._breadcrumbs)),
          (e.breadcrumbs = 0 < e.breadcrumbs.length ? e.breadcrumbs : void 0),
          this._notifyEventProcessors(Rt(rr(), this._eventProcessors), e, t)
        );
      }),
      (nr.prototype._notifyEventProcessors = function (r, i, o, a) {
        var s = this;
        return (
          void 0 === a && (a = 0),
          new Yn(function (t, e) {
            var n = r[a];
            null === i || "function" != typeof n
              ? t(i)
              : (Ht((n = n(It({}, i), o)))
                  ? n.then(function (e) {
                      return s._notifyEventProcessors(r, e, o, a + 1).then(t);
                    })
                  : s._notifyEventProcessors(r, n, o, a + 1).then(t)
                ).then(null, e);
          })
        );
      }),
      (nr.prototype._notifyScopeListeners = function () {
        var t = this;
        this._notifyingListeners ||
          ((this._notifyingListeners = !0),
          this._scopeListeners.forEach(function (e) {
            e(t);
          }),
          (this._notifyingListeners = !1));
      }),
      (nr.prototype._applyFingerprint = function (e) {
        (e.fingerprint = e.fingerprint
          ? Array.isArray(e.fingerprint)
            ? e.fingerprint
            : [e.fingerprint]
          : []),
          this._fingerprint &&
            (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
          e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
      }),
      nr);

  function nr() {
    (this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {});
  }

  function rr() {
    var e = sn();
    return (
      (e.__SENTRY__ = e.__SENTRY__ || {}),
      (e.__SENTRY__.globalEventProcessors =
        e.__SENTRY__.globalEventProcessors || []),
      e.__SENTRY__.globalEventProcessors
    );
  }

  function ir(e) {
    rr().push(e);
  }

  var or =
    ((ar.prototype.update = function (e) {
      var t;
      (e = void 0 === e ? {} : e).user &&
        (!this.ipAddress &&
          e.user.ip_address &&
          (this.ipAddress = e.user.ip_address),
        this.did ||
          e.did ||
          (this.did = e.user.id || e.user.email || e.user.username)),
        (this.timestamp = e.timestamp || Qn()),
        e.ignoreDuration && (this.ignoreDuration = e.ignoreDuration),
        e.sid && (this.sid = 32 === e.sid.length ? e.sid : cn()),
        void 0 !== e.init && (this.init = e.init),
        !this.did && e.did && (this.did = "" + e.did),
        "number" == typeof e.started && (this.started = e.started),
        this.ignoreDuration
          ? (this.duration = void 0)
          : "number" == typeof e.duration
          ? (this.duration = e.duration)
          : ((t = this.timestamp - this.started),
            (this.duration = 0 <= t ? t : 0)),
        e.release && (this.release = e.release),
        e.environment && (this.environment = e.environment),
        !this.ipAddress && e.ipAddress && (this.ipAddress = e.ipAddress),
        !this.userAgent && e.userAgent && (this.userAgent = e.userAgent),
        "number" == typeof e.errors && (this.errors = e.errors),
        e.status && (this.status = e.status);
    }),
    (ar.prototype.close = function (e) {
      e
        ? this.update({ status: e })
        : this.status === St.Ok
        ? this.update({ status: St.Exited })
        : this.update();
    }),
    (ar.prototype.toJSON = function () {
      return Cn({
        sid: "" + this.sid,
        init: this.init,
        started: new Date(1e3 * this.started).toISOString(),
        timestamp: new Date(1e3 * this.timestamp).toISOString(),
        status: this.status,
        errors: this.errors,
        did:
          "number" == typeof this.did || "string" == typeof this.did
            ? "" + this.did
            : void 0,
        duration: this.duration,
        attrs: Cn({
          release: this.release,
          environment: this.environment,
          ip_address: this.ipAddress,
          user_agent: this.userAgent,
        }),
      });
    }),
    ar);

  function ar(e) {
    (this.errors = 0),
      (this.sid = cn()),
      (this.duration = 0),
      (this.status = St.Ok),
      (this.init = !0),
      (this.ignoreDuration = !1);
    var t = Qn();
    (this.timestamp = t), (this.started = t), e && this.update(e);
  }

  var sr = 4,
    cr =
      ((ur.prototype.isOlderThan = function (e) {
        return this._version < e;
      }),
      (ur.prototype.bindClient = function (e) {
        (this.getStackTop().client = e) &&
          e.setupIntegrations &&
          e.setupIntegrations();
      }),
      (ur.prototype.pushScope = function () {
        var e = tr.clone(this.getScope());
        return this.getStack().push({ client: this.getClient(), scope: e }), e;
      }),
      (ur.prototype.popScope = function () {
        return !(this.getStack().length <= 1) && !!this.getStack().pop();
      }),
      (ur.prototype.withScope = function (e) {
        var t = this.pushScope();
        try {
          e(t);
        } finally {
          this.popScope();
        }
      }),
      (ur.prototype.getClient = function () {
        return this.getStackTop().client;
      }),
      (ur.prototype.getScope = function () {
        return this.getStackTop().scope;
      }),
      (ur.prototype.getStack = function () {
        return this._stack;
      }),
      (ur.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
      }),
      (ur.prototype.captureException = function (e, t) {
        var n = (this._lastEventId = cn()),
          r = t;
        if (!t) {
          t = void 0;
          try {
            throw new Error("Sentry syntheticException");
          } catch (e) {
            t = e;
          }
          r = { originalException: e, syntheticException: t };
        }
        return (
          this._invokeClient(
            "captureException",
            e,
            It(It({}, r), { event_id: n })
          ),
          n
        );
      }),
      (ur.prototype.captureMessage = function (e, t, n) {
        var r = (this._lastEventId = cn()),
          i = n;
        if (!n) {
          n = void 0;
          try {
            throw new Error(e);
          } catch (e) {
            n = e;
          }
          i = { originalException: e, syntheticException: n };
        }
        return (
          this._invokeClient(
            "captureMessage",
            e,
            t,
            It(It({}, i), { event_id: r })
          ),
          r
        );
      }),
      (ur.prototype.captureEvent = function (e, t) {
        var n = (this._lastEventId = cn());
        return (
          this._invokeClient("captureEvent", e, It(It({}, t), { event_id: n })),
          n
        );
      }),
      (ur.prototype.lastEventId = function () {
        return this._lastEventId;
      }),
      (ur.prototype.addBreadcrumb = function (e, t) {
        var n,
          r,
          i = this.getStackTop(),
          o = i.scope,
          a = i.client;
        o &&
          a &&
          ((a = (i = (a.getOptions && a.getOptions()) || {}).beforeBreadcrumb),
          (n = void 0 === a ? null : a),
          (i = void 0 === (a = i.maxBreadcrumbs) ? 100 : a) <= 0 ||
            ((a = $n()),
            (r = It({ timestamp: a }, e)),
            null !==
              (e = n
                ? pn(function () {
                    return n(r, t);
                  })
                : r) && o.addBreadcrumb(e, i)));
      }),
      (ur.prototype.setUser = function (e) {
        var t = this.getScope();
        t && t.setUser(e);
      }),
      (ur.prototype.setTags = function (e) {
        var t = this.getScope();
        t && t.setTags(e);
      }),
      (ur.prototype.setExtras = function (e) {
        var t = this.getScope();
        t && t.setExtras(e);
      }),
      (ur.prototype.setTag = function (e, t) {
        var n = this.getScope();
        n && n.setTag(e, t);
      }),
      (ur.prototype.setExtra = function (e, t) {
        var n = this.getScope();
        n && n.setExtra(e, t);
      }),
      (ur.prototype.setContext = function (e, t) {
        var n = this.getScope();
        n && n.setContext(e, t);
      }),
      (ur.prototype.configureScope = function (e) {
        var t = this.getStackTop(),
          n = t.scope,
          t = t.client;
        n && t && e(n);
      }),
      (ur.prototype.run = function (e) {
        var t = pr(this);
        try {
          e(this);
        } finally {
          pr(t);
        }
      }),
      (ur.prototype.getIntegration = function (t) {
        var e = this.getClient();
        if (!e) return null;
        try {
          return e.getIntegration(t);
        } catch (e) {
          return (
            yn.warn(
              "Cannot retrieve integration " + t.id + " from the current Hub"
            ),
            null
          );
        }
      }),
      (ur.prototype.startSpan = function (e) {
        return this._callExtensionMethod("startSpan", e);
      }),
      (ur.prototype.startTransaction = function (e, t) {
        return this._callExtensionMethod("startTransaction", e, t);
      }),
      (ur.prototype.traceHeaders = function () {
        return this._callExtensionMethod("traceHeaders");
      }),
      (ur.prototype.captureSession = function (e) {
        if ((e = void 0 === e ? !1 : e)) return this.endSession();
        this._sendSessionUpdate();
      }),
      (ur.prototype.endSession = function () {
        var e;
        null !==
          (e =
            null ===
              (e =
                null === (e = this.getStackTop()) || void 0 === e
                  ? void 0
                  : e.scope) || void 0 === e
              ? void 0
              : e.getSession()) &&
          void 0 !== e &&
          e.close(),
          this._sendSessionUpdate(),
          null !==
            (e =
              null === (e = this.getStackTop()) || void 0 === e
                ? void 0
                : e.scope) &&
            void 0 !== e &&
            e.setSession();
      }),
      (ur.prototype.startSession = function (e) {
        var t = this.getStackTop(),
          n = t.scope,
          r = t.client,
          i = (r && r.getOptions()) || {},
          t = i.release,
          r = i.environment,
          i = (sn().navigator || {}).userAgent,
          i = new or(
            It(
              It(
                It({ release: t, environment: r }, n && { user: n.getUser() }),
                i && { userAgent: i }
              ),
              e
            )
          );
        return (
          n &&
            ((e = n.getSession && n.getSession()) &&
              e.status === St.Ok &&
              e.update({ status: St.Exited }),
            this.endSession(),
            n.setSession(i)),
          i
        );
      }),
      (ur.prototype._sendSessionUpdate = function () {
        var e = this.getStackTop(),
          t = e.scope,
          e = e.client;
        !t ||
          ((t = t.getSession && t.getSession()) &&
            e &&
            e.captureSession &&
            e.captureSession(t));
      }),
      (ur.prototype._invokeClient = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = this.getStackTop(),
          i = r.scope,
          r = r.client;
        r && r[e] && r[e].apply(r, Rt(t, [i]));
      }),
      (ur.prototype._callExtensionMethod = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = lr().__SENTRY__;
        if (r && r.extensions && "function" == typeof r.extensions[e])
          return r.extensions[e].apply(this, t);
        yn.warn("Extension method " + e + " couldn't be found, doing nothing.");
      }),
      ur);

  function ur(e, t, n) {
    void 0 === t && (t = new tr()),
      (this._version = n = void 0 === n ? sr : n),
      (this._stack = [{}]),
      (this.getStackTop().scope = t),
      e && this.bindClient(e);
  }

  function lr() {
    var e = sn();
    return (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e;
  }

  function pr(e) {
    var t = lr(),
      n = hr(t);
    return mr(t, e), n;
  }

  function dr() {
    var e = lr();
    return (
      (fr(e) && !hr(e).isOlderThan(sr)) || mr(e, new cr()),
      (Zt()
        ? function (t) {
            var e, n, r;
            try {
              var i,
                o =
                  null ===
                    (r =
                      null ===
                        (n =
                          null === (e = lr().__SENTRY__) || void 0 === e
                            ? void 0
                            : e.extensions) || void 0 === n
                        ? void 0
                        : n.domain) || void 0 === r
                    ? void 0
                    : r.active;
              return o
                ? ((fr(o) && !hr(o).isOlderThan(sr)) ||
                    ((i = hr(t).getStackTop()),
                    mr(o, new cr(i.client, tr.clone(i.scope)))),
                  hr(o))
                : hr(t);
            } catch (e) {
              return hr(t);
            }
          }
        : hr)(e)
    );
  }

  function fr(e) {
    return e && e.__SENTRY__ && e.__SENTRY__.hub;
  }

  function hr(e) {
    return (
      (e && e.__SENTRY__ && e.__SENTRY__.hub) ||
        ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new cr())),
      e.__SENTRY__.hub
    );
  }

  function mr(e, t) {
    return (
      e && ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), 1)
    );
  }

  function vr(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    var r = dr();
    if (r && r[e]) return r[e].apply(r, Rt(t));
    throw new Error(
      "No hub defined or " +
        e +
        " was not found on the hub, please open a bug report."
    );
  }

  function yr(e, t) {
    var n;
    try {
      throw new Error("Sentry syntheticException");
    } catch (e) {
      n = e;
    }
    return vr("captureException", e, {
      captureContext: t,
      originalException: e,
      syntheticException: n,
    });
  }

  function gr(e, t) {
    vr("setContext", e, t);
  }

  function _r(e) {
    vr("withScope", e);
  }

  var br =
    ((wr.prototype.getDsn = function () {
      return this._dsnObject;
    }),
    (wr.prototype.forceEnvelope = function () {
      return !!this._tunnel;
    }),
    (wr.prototype.getBaseApiEndpoint = function () {
      var e = this.getDsn(),
        t = e.protocol ? e.protocol + ":" : "",
        n = e.port ? ":" + e.port : "";
      return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/";
    }),
    (wr.prototype.getStoreEndpoint = function () {
      return this._getIngestEndpoint("store");
    }),
    (wr.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
      return this.getStoreEndpoint() + "?" + this._encodedAuth();
    }),
    (wr.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
      return this.forceEnvelope()
        ? this._tunnel
        : this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
    }),
    (wr.prototype.getStoreEndpointPath = function () {
      var e = this.getDsn();
      return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/";
    }),
    (wr.prototype.getRequestHeaders = function (e, t) {
      var n = this.getDsn(),
        r = ["Sentry sentry_version=7"];
      return (
        r.push("sentry_client=" + e + "/" + t),
        r.push("sentry_key=" + n.publicKey),
        n.pass && r.push("sentry_secret=" + n.pass),
        {
          "Content-Type": "application/json",
          "X-Sentry-Auth": r.join(", "),
        }
      );
    }),
    (wr.prototype.getReportDialogEndpoint = function (e) {
      void 0 === e && (e = {});
      var t,
        n = this.getDsn(),
        r = this.getBaseApiEndpoint() + "embed/error-page/",
        i = [];
      for (t in (i.push("dsn=" + n.toString()), e))
        "dsn" !== t &&
          ("user" === t
            ? e.user &&
              (e.user.name && i.push("name=" + encodeURIComponent(e.user.name)),
              e.user.email &&
                i.push("email=" + encodeURIComponent(e.user.email)))
            : i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t])));
      return i.length ? r + "?" + i.join("&") : r;
    }),
    (wr.prototype._getEnvelopeEndpoint = function () {
      return this._getIngestEndpoint("envelope");
    }),
    (wr.prototype._getIngestEndpoint = function (e) {
      return (
        this._tunnel ||
        "" + this.getBaseApiEndpoint() + this.getDsn().projectId + "/" + e + "/"
      );
    }),
    (wr.prototype._encodedAuth = function () {
      var t,
        e = { sentry_key: this.getDsn().publicKey, sentry_version: "7" };
      return (
        (t = e),
        Object.keys(t)
          .map(function (e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
          })
          .join("&")
      );
    }),
    wr);

  function wr(e, t, n) {
    void 0 === t && (t = {}),
      (this.dsn = e),
      (this._dsnObject = new $t(e)),
      (this.metadata = t),
      (this._tunnel = n);
  }

  var Sr = [];

  function Er(e) {
    return e.reduce(function (e, t) {
      return (
        e.every(function (e) {
          return t.name !== e.name;
        }) && e.push(t),
        e
      );
    }, []);
  }

  function xr(e) {
    var t,
      n,
      r = {};
    return (
      (e = ((t = e).defaultIntegrations && Rt(t.defaultIntegrations)) || []),
      (n = t.integrations),
      (t = Rt(Er(e))),
      Array.isArray(n)
        ? (t = Rt(
            t.filter(function (t) {
              return n.every(function (e) {
                return e.name !== t.name;
              });
            }),
            Er(n)
          ))
        : "function" == typeof n &&
          ((t = n(t)), (t = Array.isArray(t) ? t : [t])),
      -1 !==
        (e = t.map(function (e) {
          return e.name;
        })).indexOf("Debug") &&
        t.push.apply(t, Rt(t.splice(e.indexOf("Debug"), 1))),
      t.forEach(function (e) {
        (r[e.name] = e),
          (e = e),
          -1 === Sr.indexOf(e.name) &&
            (e.setupOnce(ir, dr),
            Sr.push(e.name),
            yn.log("Integration installed: " + e.name));
      }),
      Object.defineProperty(r, "initialized", { value: !0 }),
      r
    );
  }

  (kr.prototype.captureException = function (e, t, n) {
    var r = this,
      i = t && t.event_id;
    return (
      this._process(
        this._getBackend()
          .eventFromException(e, t)
          .then(function (e) {
            return r._captureEvent(e, t, n);
          })
          .then(function (e) {
            i = e;
          })
      ),
      i
    );
  }),
    (kr.prototype.captureMessage = function (e, t, n, r) {
      var i = this,
        o = n && n.event_id,
        e = Mt(e)
          ? this._getBackend().eventFromMessage(String(e), t, n)
          : this._getBackend().eventFromException(e, n);
      return (
        this._process(
          e
            .then(function (e) {
              return i._captureEvent(e, n, r);
            })
            .then(function (e) {
              o = e;
            })
        ),
        o
      );
    }),
    (kr.prototype.captureEvent = function (e, t, n) {
      var r = t && t.event_id;
      return (
        this._process(
          this._captureEvent(e, t, n).then(function (e) {
            r = e;
          })
        ),
        r
      );
    }),
    (kr.prototype.captureSession = function (e) {
      this._isEnabled()
        ? "string" != typeof e.release
          ? yn.warn(
              "Discarded session because of missing or non-string release"
            )
          : (this._sendSession(e), e.update({ init: !1 }))
        : yn.warn("SDK not enabled, will not capture session.");
    }),
    (kr.prototype.getDsn = function () {
      return this._dsn;
    }),
    (kr.prototype.getOptions = function () {
      return this._options;
    }),
    (kr.prototype.flush = function (e) {
      var n = this;
      return this._isClientDoneProcessing(e).then(function (t) {
        return n
          ._getBackend()
          .getTransport()
          .close(e)
          .then(function (e) {
            return t && e;
          });
      });
    }),
    (kr.prototype.close = function (e) {
      var t = this;
      return this.flush(e).then(function (e) {
        return (t.getOptions().enabled = !1), e;
      });
    }),
    (kr.prototype.setupIntegrations = function () {
      this._isEnabled() &&
        !this._integrations.initialized &&
        (this._integrations = xr(this._options));
    }),
    (kr.prototype.getIntegration = function (t) {
      try {
        return this._integrations[t.id] || null;
      } catch (e) {
        return (
          yn.warn(
            "Cannot retrieve integration " + t.id + " from the current Client"
          ),
          null
        );
      }
    }),
    (kr.prototype._updateSessionFromEvent = function (e, t) {
      var n,
        r = !1,
        i = !1,
        t = t.exception && t.exception.values;
      if (t) {
        i = !0;
        try {
          for (var o = jt(t), a = o.next(); !a.done; a = o.next()) {
            var s = a.value.mechanism;
            if (s && !1 === s.handled) {
              r = !0;
              break;
            }
          }
        } catch (e) {
          c = { error: e };
        } finally {
          try {
            a && !a.done && (n = o.return) && n.call(o);
          } finally {
            if (c) throw c.error;
          }
        }
      }
      var c = e.status === St.Ok;
      ((c && 0 === e.errors) || (c && r)) &&
        (e.update(
          It(It({}, r && { status: St.Crashed }), {
            errors: e.errors || Number(i || r),
          })
        ),
        this.captureSession(e));
    }),
    (kr.prototype._sendSession = function (e) {
      this._getBackend().sendSession(e);
    }),
    (kr.prototype._isClientDoneProcessing = function (r) {
      var i = this;
      return new Yn(function (e) {
        var t = 0,
          n = setInterval(function () {
            0 == i._numProcessing
              ? (clearInterval(n), e(!0))
              : ((t += 1), r && r <= t && (clearInterval(n), e(!1)));
          }, 1);
      });
    }),
    (kr.prototype._getBackend = function () {
      return this._backend;
    }),
    (kr.prototype._isEnabled = function () {
      return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
    }),
    (kr.prototype._prepareEvent = function (e, t, n) {
      var r = this,
        i = this.getOptions().normalizeDepth,
        o = void 0 === i ? 3 : i,
        i = It(It({}, e), {
          event_id: e.event_id || (n && n.event_id ? n.event_id : cn()),
          timestamp: e.timestamp || $n(),
        });
      this._applyClientOptions(i), this._applyIntegrationsMetadata(i);
      e = t;
      n && n.captureContext && (e = tr.clone(e).update(n.captureContext));
      t = Yn.resolve(i);
      return (t = e ? e.applyToEvent(i, n) : t).then(function (e) {
        return "number" == typeof o && 0 < o ? r._normalizeEvent(e, o) : e;
      });
    }),
    (kr.prototype._normalizeEvent = function (e, t) {
      if (!e) return null;
      var n = It(
        It(
          It(
            It(
              It({}, e),
              e.breadcrumbs && {
                breadcrumbs: e.breadcrumbs.map(function (e) {
                  return It(It({}, e), e.data && { data: In(e.data, t) });
                }),
              }
            ),
            e.user && { user: In(e.user, t) }
          ),
          e.contexts && { contexts: In(e.contexts, t) }
        ),
        e.extra && { extra: In(e.extra, t) }
      );
      e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace);
      e = this.getOptions()._experiments;
      return (void 0 === e ? {} : e).ensureNoCircularStructures ? In(n) : n;
    }),
    (kr.prototype._applyClientOptions = function (e) {
      var t = this.getOptions(),
        n = t.environment,
        r = t.release,
        i = t.dist,
        o = t.maxValueLength,
        o = void 0 === o ? 250 : o;
      "environment" in e ||
        (e.environment = "environment" in t ? n : "production"),
        void 0 === e.release && void 0 !== r && (e.release = r),
        void 0 === e.dist && void 0 !== i && (e.dist = i),
        e.message && (e.message = nn(e.message, o));
      i = e.exception && e.exception.values && e.exception.values[0];
      i && i.value && (i.value = nn(i.value, o));
      e = e.request;
      e && e.url && (e.url = nn(e.url, o));
    }),
    (kr.prototype._applyIntegrationsMetadata = function (e) {
      var t = Object.keys(this._integrations);
      0 < t.length &&
        ((e.sdk = e.sdk || {}),
        (e.sdk.integrations = Rt(e.sdk.integrations || [], t)));
    }),
    (kr.prototype._sendEvent = function (e) {
      this._getBackend().sendEvent(e);
    }),
    (kr.prototype._captureEvent = function (e, t, n) {
      return this._processEvent(e, t, n).then(
        function (e) {
          return e.event_id;
        },
        function (e) {
          yn.error(e);
        }
      );
    }),
    (kr.prototype._processEvent = function (e, t, n) {
      var r = this,
        i = this.getOptions(),
        o = i.beforeSend,
        i = i.sampleRate;
      if (!this._isEnabled())
        return Yn.reject(new Gt("SDK not enabled, will not capture event."));
      var a = "transaction" === e.type;
      return !a && "number" == typeof i && Math.random() > i
        ? Yn.reject(
            new Gt(
              "Discarding event because it's not included in the random sample (sampling rate = " +
                i +
                ")"
            )
          )
        : this._prepareEvent(e, n, t)
            .then(function (e) {
              if (null === e)
                throw new Gt(
                  "An event processor returned null, will not send event."
                );
              if ((t && t.data && !0 === t.data.__sentry__) || a || !o)
                return e;
              e = o(e, t);
              return r._ensureBeforeSendRv(e);
            })
            .then(function (e) {
              if (null === e)
                throw new Gt(
                  "`beforeSend` returned `null`, will not send event."
                );
              var t = n && n.getSession && n.getSession();
              return (
                !a && t && r._updateSessionFromEvent(t, e), r._sendEvent(e), e
              );
            })
            .then(null, function (e) {
              if (e instanceof Gt) throw e;
              throw (
                (r.captureException(e, {
                  data: { __sentry__: !0 },
                  originalException: e,
                }),
                new Gt(
                  "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                    e
                ))
              );
            });
    }),
    (kr.prototype._process = function (e) {
      var t = this;
      (this._numProcessing += 1),
        e.then(
          function (e) {
            return --t._numProcessing, e;
          },
          function (e) {
            return --t._numProcessing, e;
          }
        );
    }),
    (kr.prototype._ensureBeforeSendRv = function (e) {
      var t = "`beforeSend` method has to return `null` or a valid event.";
      if (Ht(e))
        return e.then(
          function (e) {
            if (!Ut(e) && null !== e) throw new Gt(t);
            return e;
          },
          function (e) {
            throw new Gt("beforeSend rejected with " + e);
          }
        );
      if (!Ut(e) && null !== e) throw new Gt(t);
      return e;
    }),
    (E = kr);

  function kr(e, t) {
    (this._integrations = {}),
      (this._numProcessing = 0),
      (this._backend = new e(t)),
      (this._options = t).dsn && (this._dsn = new $t(t.dsn));
  }

  var Or =
    ((Tr.prototype.sendEvent = function (e) {
      return Yn.resolve({
        reason:
          "NoopTransport: Event has been skipped because no Dsn is configured.",
        status: kt.Skipped,
      });
    }),
    (Tr.prototype.close = function (e) {
      return Yn.resolve(!0);
    }),
    Tr);

  function Tr() {}

  (Ir.prototype.eventFromException = function (e, t) {
    throw new Gt("Backend has to implement `eventFromException` method");
  }),
    (Ir.prototype.eventFromMessage = function (e, t, n) {
      throw new Gt("Backend has to implement `eventFromMessage` method");
    }),
    (Ir.prototype.sendEvent = function (e) {
      this._transport.sendEvent(e).then(null, function (e) {
        yn.error("Error while sending event: " + e);
      });
    }),
    (Ir.prototype.sendSession = function (e) {
      this._transport.sendSession
        ? this._transport.sendSession(e).then(null, function (e) {
            yn.error("Error while sending session: " + e);
          })
        : yn.warn(
            "Dropping session because custom transport doesn't implement sendSession"
          );
    }),
    (Ir.prototype.getTransport = function () {
      return this._transport;
    }),
    (Ir.prototype._setupTransport = function () {
      return new Or();
    }),
    (o = Ir);

  function Ir(e) {
    (this._options = e),
      this._options.dsn ||
        yn.warn("No DSN provided, backend will not do anything."),
      (this._transport = this._setupTransport());
  }

  function Cr(e) {
    if (e.metadata && e.metadata.sdk) {
      e = e.metadata.sdk;
      return { name: e.name, version: e.version };
    }
  }

  function jr(e, t) {
    var n = Cr(t),
      r = JSON.stringify(
        It(
          It({ sent_at: new Date().toISOString() }, n && { sdk: n }),
          t.forceEnvelope() && { dsn: t.getDsn().toString() }
        )
      ),
      n = "aggregates" in e ? "sessions" : "session";
    return {
      body: r + "\n" + JSON.stringify({ type: n }) + "\n" + JSON.stringify(e),
      type: n,
      url: t.getEnvelopeEndpointWithUrlEncodedAuth(),
    };
  }

  function Ar(e, t) {
    var n = Cr(t),
      r = e.type || "event",
      i = "transaction" === r || t.forceEnvelope(),
      o = e.debug_meta || {},
      a = o.transactionSampling,
      s = Ct(o, ["transactionSampling"]),
      o = a || {},
      a = o.method,
      o = o.rate;
    0 === Object.keys(s).length ? delete e.debug_meta : (e.debug_meta = s);
    var c,
      c = {
        body: JSON.stringify(
          n
            ? ((c = e),
              (s = t.metadata.sdk) &&
                ((c.sdk = c.sdk || {}),
                (c.sdk.name = c.sdk.name || s.name),
                (c.sdk.version = c.sdk.version || s.version),
                (c.sdk.integrations = Rt(
                  c.sdk.integrations || [],
                  s.integrations || []
                )),
                (c.sdk.packages = Rt(c.sdk.packages || [], s.packages || []))),
              c)
            : e
        ),
        type: r,
        url: i
          ? t.getEnvelopeEndpointWithUrlEncodedAuth()
          : t.getStoreEndpointWithUrlEncodedAuth(),
      };
    return (
      i &&
        ((o =
          JSON.stringify(
            It(
              It(
                {
                  event_id: e.event_id,
                  sent_at: new Date().toISOString(),
                },
                n && { sdk: n }
              ),
              t.forceEnvelope() && { dsn: t.getDsn().toString() }
            )
          ) +
          "\n" +
          JSON.stringify({
            type: r,
            sample_rates: [{ id: a, rate: o }],
          }) +
          "\n" +
          c.body),
        (c.body = o)),
      c
    );
  }

  var Rr,
    Dr = "6.11.0",
    $ =
      ((Pr.prototype.setupOnce = function () {
        (Rr = Function.prototype.toString),
          (Function.prototype.toString = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this.__sentry_original__ || this;
            return Rr.apply(n, e);
          });
      }),
      (Pr.id = "FunctionToString"),
      Pr);

  function Pr() {
    this.name = Pr.id;
  }

  var Nr = [
      /^Script error\.?$/,
      /^Javascript error: Script error\.? on line 0$/,
    ],
    n =
      ((Lr.prototype.setupOnce = function () {
        ir(function (e) {
          var t = dr();
          if (!t) return e;
          var n = t.getIntegration(Lr);
          if (n) {
            (t = t.getClient()),
              (t = t ? t.getOptions() : {}),
              (t =
                "function" == typeof n._mergeOptions ? n._mergeOptions(t) : {});
            return "function" != typeof n._shouldDropEvent
              ? e
              : n._shouldDropEvent(e, t)
              ? null
              : e;
          }
          return e;
        });
      }),
      (Lr.prototype._shouldDropEvent = function (e, t) {
        return this._isSentryError(e, t)
          ? (yn.warn(
              "Event dropped due to being internal Sentry Error.\nEvent: " +
                ln(e)
            ),
            !0)
          : this._isIgnoredError(e, t)
          ? (yn.warn(
              "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                ln(e)
            ),
            !0)
          : this._isDeniedUrl(e, t)
          ? (yn.warn(
              "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                ln(e) +
                ".\nUrl: " +
                this._getEventFilterUrl(e)
            ),
            !0)
          : !this._isAllowedUrl(e, t) &&
            (yn.warn(
              "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                ln(e) +
                ".\nUrl: " +
                this._getEventFilterUrl(e)
            ),
            !0);
      }),
      (Lr.prototype._isSentryError = function (e, t) {
        if (!t.ignoreInternal) return !1;
        try {
          return (
            (e &&
              e.exception &&
              e.exception.values &&
              e.exception.values[0] &&
              "SentryError" === e.exception.values[0].type) ||
            !1
          );
        } catch (e) {
          return !1;
        }
      }),
      (Lr.prototype._isIgnoredError = function (e, n) {
        return (
          !(!n.ignoreErrors || !n.ignoreErrors.length) &&
          this._getPossibleEventMessages(e).some(function (t) {
            return n.ignoreErrors.some(function (e) {
              return on(t, e);
            });
          })
        );
      }),
      (Lr.prototype._isDeniedUrl = function (e, t) {
        if (!t.denyUrls || !t.denyUrls.length) return !1;
        var n = this._getEventFilterUrl(e);
        return (
          !!n &&
          t.denyUrls.some(function (e) {
            return on(n, e);
          })
        );
      }),
      (Lr.prototype._isAllowedUrl = function (e, t) {
        if (!t.allowUrls || !t.allowUrls.length) return !0;
        var n = this._getEventFilterUrl(e);
        return (
          !n ||
          t.allowUrls.some(function (e) {
            return on(n, e);
          })
        );
      }),
      (Lr.prototype._mergeOptions = function (e) {
        return {
          allowUrls: Rt(
            this._options.whitelistUrls || [],
            this._options.allowUrls || [],
            (e = void 0 === e ? {} : e).whitelistUrls || [],
            e.allowUrls || []
          ),
          denyUrls: Rt(
            this._options.blacklistUrls || [],
            this._options.denyUrls || [],
            e.blacklistUrls || [],
            e.denyUrls || []
          ),
          ignoreErrors: Rt(
            this._options.ignoreErrors || [],
            e.ignoreErrors || [],
            Nr
          ),
          ignoreInternal:
            void 0 === this._options.ignoreInternal ||
            this._options.ignoreInternal,
        };
      }),
      (Lr.prototype._getPossibleEventMessages = function (t) {
        if (t.message) return [t.message];
        if (t.exception)
          try {
            var e = (t.exception.values && t.exception.values[0]) || {},
              n = e.type,
              r = void 0 === n ? "" : n,
              i = e.value,
              o = void 0 === i ? "" : i;
            return ["" + o, r + ": " + o];
          } catch (e) {
            return yn.error("Cannot extract message for event " + ln(t)), [];
          }
        return [];
      }),
      (Lr.prototype._getLastValidUrl = function (e) {
        for (var t = (e = void 0 === e ? [] : e).length - 1; 0 <= t; t--) {
          var n = e[t];
          if (
            "<anonymous>" !== (null === n || void 0 === n ? void 0 : n.filename)
          )
            return n.filename || null;
        }
        return null;
      }),
      (Lr.prototype._getEventFilterUrl = function (t) {
        try {
          if (t.stacktrace) {
            var e = t.stacktrace.frames;
            return this._getLastValidUrl(e);
          }
          if (t.exception) {
            var n =
              t.exception.values &&
              t.exception.values[0].stacktrace &&
              t.exception.values[0].stacktrace.frames;
            return this._getLastValidUrl(n);
          }
          return null;
        } catch (e) {
          return yn.error("Cannot extract url for event " + ln(t)), null;
        }
      }),
      (Lr.id = "InboundFilters"),
      Lr);

  function Lr(e) {
    (this._options = e = void 0 === e ? {} : e), (this.name = Lr.id);
  }

  var qr = "?",
    Mr =
      /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    Ur =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    Fr =
      /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    Br = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    Hr = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    zr = /Minified React error #\d+;/i;

  function Wr(e) {
    var t = null,
      n = 0;
    e &&
      ("number" == typeof e.framesToPop
        ? (n = e.framesToPop)
        : zr.test(e.message) && (n = 1));
    try {
      if (
        (t = (function (e) {
          if (!e || !e.stacktrace) return null;
          for (
            var t,
              n = e.stacktrace,
              r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
              i =
                / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
              o = n.split("\n"),
              a = [],
              s = 0;
            s < o.length;
            s += 2
          ) {
            var c = null;
            (t = r.exec(o[s]))
              ? (c = {
                  url: t[2],
                  func: t[3],
                  args: [],
                  line: +t[1],
                  column: null,
                })
              : (t = i.exec(o[s])) &&
                (c = {
                  url: t[6],
                  func: t[3] || t[4],
                  args: t[5] ? t[5].split(",") : [],
                  line: +t[1],
                  column: +t[2],
                }),
              c && (!c.func && c.line && (c.func = qr), a.push(c));
          }
          return a.length ? { message: Vr(e), name: e.name, stack: a } : null;
        })(e))
      )
        return Yr(t, n);
    } catch (e) {}
    try {
      if (
        (t = (function (e) {
          if (!e || !e.stack) return null;
          for (
            var t, n, r = [], i = e.stack.split("\n"), o = 0;
            o < i.length;
            ++o
          ) {
            if ((n = Mr.exec(i[o]))) {
              var a = n[2] && 0 === n[2].indexOf("native");
              n[2] &&
                0 === n[2].indexOf("eval") &&
                (t = Hr.exec(n[2])) &&
                ((n[2] = t[1]), (n[3] = t[2]), (n[4] = t[3]));
              var s =
                  n[2] && 0 === n[2].indexOf("address at ")
                    ? n[2].substr("address at ".length)
                    : n[2],
                c = n[1] || qr,
                u = -1 !== c.indexOf("safari-extension"),
                l = -1 !== c.indexOf("safari-web-extension");
              (u || l) &&
                ((c = -1 !== c.indexOf("@") ? c.split("@")[0] : qr),
                (s = u
                  ? "safari-extension:" + s
                  : "safari-web-extension:" + s)),
                (a = {
                  url: s,
                  func: c,
                  args: a ? [n[2]] : [],
                  line: n[3] ? +n[3] : null,
                  column: n[4] ? +n[4] : null,
                });
            } else if ((n = Fr.exec(i[o])))
              a = {
                url: n[2],
                func: n[1] || qr,
                args: [],
                line: +n[3],
                column: n[4] ? +n[4] : null,
              };
            else {
              if (!(n = Ur.exec(i[o]))) continue;
              n[3] && -1 < n[3].indexOf(" > eval") && (t = Br.exec(n[3]))
                ? ((n[1] = n[1] || "eval"),
                  (n[3] = t[1]),
                  (n[4] = t[2]),
                  (n[5] = ""))
                : 0 !== o ||
                  n[5] ||
                  void 0 === e.columnNumber ||
                  (r[0].column = e.columnNumber + 1),
                (a = {
                  url: n[3],
                  func: n[1] || qr,
                  args: n[2] ? n[2].split(",") : [],
                  line: n[4] ? +n[4] : null,
                  column: n[5] ? +n[5] : null,
                });
            }
            !a.func && a.line && (a.func = qr), r.push(a);
          }
          return r.length ? { message: Vr(e), name: e.name, stack: r } : null;
        })(e))
      )
        return Yr(t, n);
    } catch (e) {}
    return { message: Vr(e), name: e && e.name, stack: [], failed: !0 };
  }

  function Yr(t, e) {
    try {
      return It(It({}, t), { stack: t.stack.slice(e) });
    } catch (e) {
      return t;
    }
  }

  function Vr(e) {
    e = e && e.message;
    return e
      ? e.error && "string" == typeof e.error.message
        ? e.error.message
        : e
      : "No error message";
  }

  var Gr = 50;

  function Jr(e) {
    var t = $r(e.stack),
      e = { type: e.name, value: e.message };
    return (
      t && t.length && (e.stacktrace = { frames: t }),
      void 0 === e.type &&
        "" === e.value &&
        (e.value = "Unrecoverable error caught"),
      e
    );
  }

  function Xr(e, t, n) {
    e = {
      exception: {
        values: [
          {
            type: Ft(e)
              ? e.constructor.name
              : n
              ? "UnhandledRejection"
              : "Error",
            value:
              "Non-Error " +
              (n ? "promise rejection" : "exception") +
              " captured with keys: " +
              (function (e, t) {
                void 0 === t && (t = 40);
                var n = Object.keys(xn(e));
                if ((n.sort(), !n.length)) return "[object has no keys]";
                if (n[0].length >= t) return nn(n[0], t);
                for (var r = n.length; 0 < r; r--) {
                  var i = n.slice(0, r).join(", ");
                  if (!(i.length > t)) return r === n.length ? i : nn(i, t);
                }
                return "";
              })(e),
          },
        ],
      },
      extra: {
        __serialized__: (function e(t, n, r) {
          void 0 === r && (r = 102400);
          var i = In(t, (n = void 0 === n ? 3 : n));
          return kn(i) > r ? e(t, n - 1, r) : i;
        })(e),
      },
    };
    return t && ((t = $r(Wr(t).stack)), (e.stacktrace = { frames: t })), e;
  }

  function Kr(e) {
    return { exception: { values: [Jr(e)] } };
  }

  function $r(e) {
    if (!e || !e.length) return [];
    var t = e,
      n = t[0].func || "",
      e = t[t.length - 1].func || "";
    return (
      (-1 === n.indexOf("captureMessage") &&
        -1 === n.indexOf("captureException")) ||
        (t = t.slice(1)),
      (t = -1 !== e.indexOf("sentryWrapped") ? t.slice(0, -1) : t)
        .slice(0, Gr)
        .map(function (e) {
          return {
            colno: null === e.column ? void 0 : e.column,
            filename: e.url || t[0].url,
            function: e.func || "?",
            in_app: !0,
            lineno: null === e.line ? void 0 : e.line,
          };
        })
        .reverse()
    );
  }

  function Qr(e, t, n) {
    if ((void 0 === n && (n = {}), Nt(e) && e.error))
      return (r = Kr(Wr((e = e.error))));
    if (
      Lt(e) ||
      ((o = e), "[object DOMException]" === Object.prototype.toString.call(o))
    ) {
      var r,
        i = e,
        o = i.name || (Lt(i) ? "DOMError" : "DOMException"),
        o = i.message ? o + ": " + i.message : o;
      return (
        dn((r = Zr(o, t, n)), o),
        "code" in i &&
          (r.tags = It(It({}, r.tags), { "DOMException.code": "" + i.code })),
        r
      );
    }
    return Pt(e)
      ? (r = Kr(Wr(e)))
      : (Ut(e) || Ft(e)
          ? fn((r = Xr(e, t, n.rejection)), { synthetic: !0 })
          : (dn((r = Zr(e, t, n)), "" + e, void 0), fn(r, { synthetic: !0 })),
        r);
  }

  function Zr(e, t, n) {
    e = { message: e };
    return (
      (n = void 0 === n ? {} : n).attachStacktrace &&
        t &&
        ((t = $r(Wr(t).stack)), (e.stacktrace = { frames: t })),
      e
    );
  }

  var ei = {
      event: "error",
      transaction: "transaction",
      session: "session",
      attachment: "attachment",
    },
    Pe =
      ((ti.prototype.sendEvent = function (e) {
        throw new Gt("Transport Class has to implement `sendEvent` method");
      }),
      (ti.prototype.close = function (e) {
        return this._buffer.drain(e);
      }),
      (ti.prototype._handleResponse = function (e) {
        var t = e.requestType,
          n = e.response,
          r = e.headers,
          i = e.resolve,
          o = e.reject,
          e = kt.fromHttpCode(n.status);
        this._handleRateLimit(r) &&
          yn.warn(
            "Too many " +
              t +
              " requests, backing off until: " +
              this._disabledUntil(t)
          ),
          e !== kt.Success ? o(n) : i({ status: e });
      }),
      (ti.prototype._disabledUntil = function (e) {
        return this._rateLimits[ei[e]] || this._rateLimits.all;
      }),
      (ti.prototype._isRateLimited = function (e) {
        return this._disabledUntil(e) > new Date(Date.now());
      }),
      (ti.prototype._handleRateLimit = function (e) {
        var t,
          n,
          r,
          i,
          o = Date.now(),
          a = e["x-sentry-rate-limits"],
          e = e["retry-after"];
        if (a) {
          try {
            for (
              var s = jt(a.trim().split(",")), c = s.next();
              !c.done;
              c = s.next()
            ) {
              var u = c.value.split(":", 2),
                l = parseInt(u[0], 10),
                p = 1e3 * (isNaN(l) ? 60 : l);
              try {
                for (
                  var d = ((r = void 0), jt(u[1].split(";"))), f = d.next();
                  !f.done;
                  f = d.next()
                ) {
                  var h = f.value;
                  this._rateLimits[h || "all"] = new Date(o + p);
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  f && !f.done && (i = d.return) && i.call(d);
                } finally {
                  if (r) throw r.error;
                }
              }
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              c && !c.done && (n = s.return) && n.call(s);
            } finally {
              if (t) throw t.error;
            }
          }
          return !0;
        }
        return (
          !!e &&
          ((this._rateLimits.all = new Date(
            o +
              (function (e, t) {
                if (!t) return 6e4;
                var n = parseInt("" + t, 10);
                return isNaN(n)
                  ? ((t = Date.parse("" + t)), isNaN(t) ? 6e4 : t - e)
                  : 1e3 * n;
              })(o, e)
          )),
          !0)
        );
      }),
      ti);

  function ti(e) {
    (this.options = e),
      (this._buffer = new Gn(30)),
      (this._rateLimits = {}),
      (this._api = new br(e.dsn, e._metadata, e.tunnel)),
      (this.url = this._api.getStoreEndpointWithUrlEncodedAuth());
  }

  var ni,
    ri =
      (wt(ii, (ni = Pe)),
      (ii.prototype.sendEvent = function (e) {
        return this._sendRequest(Ar(e, this._api), e);
      }),
      (ii.prototype.sendSession = function (e) {
        return this._sendRequest(jr(e, this._api), e);
      }),
      (ii.prototype._sendRequest = function (i, e) {
        var o = this;
        if (this._isRateLimited(i.type))
          return Promise.reject({
            event: e,
            type: i.type,
            reason:
              "Transport for " +
              i.type +
              " requests locked till " +
              this._disabledUntil(i.type) +
              " due to too many requests.",
            status: 429,
          });
        var t = {
          body: i.body,
          method: "POST",
          referrerPolicy: (function () {
            if (jn())
              try {
                return new Request("_", { referrerPolicy: "origin" }), 1;
              } catch (e) {
                return;
              }
          })()
            ? "origin"
            : "",
        };
        return (
          void 0 !== this.options.fetchParameters &&
            Object.assign(t, this.options.fetchParameters),
          void 0 !== this.options.headers && (t.headers = this.options.headers),
          this._buffer.add(function () {
            return new Yn(function (n, r) {
              o._fetch(i.url, t)
                .then(function (e) {
                  var t = {
                    "x-sentry-rate-limits": e.headers.get(
                      "X-Sentry-Rate-Limits"
                    ),
                    "retry-after": e.headers.get("Retry-After"),
                  };
                  o._handleResponse({
                    requestType: i.type,
                    response: e,
                    headers: t,
                    resolve: n,
                    reject: r,
                  });
                })
                .catch(r);
            });
          })
        );
      }),
      ii);

  function ii(e, t) {
    void 0 === t &&
      (t = (function () {
        var e,
          t = sn();
        if (An(t.fetch)) return t.fetch.bind(t);
        var n = t.document,
          r = t.fetch;
        if (
          "function" ==
          typeof (null === n || void 0 === n ? void 0 : n.createElement)
        )
          try {
            var i = n.createElement("iframe");
            (i.hidden = !0),
              n.head.appendChild(i),
              null !== (e = i.contentWindow) &&
                void 0 !== e &&
                e.fetch &&
                (r = i.contentWindow.fetch),
              n.head.removeChild(i);
          } catch (e) {
            yn.warn(
              "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
              e
            );
          }
        return r.bind(t);
      })());
    e = ni.call(this, e) || this;
    return (e._fetch = t), e;
  }

  var oi,
    ai =
      (wt(si, (oi = Pe)),
      (si.prototype.sendEvent = function (e) {
        return this._sendRequest(Ar(e, this._api), e);
      }),
      (si.prototype.sendSession = function (e) {
        return this._sendRequest(jr(e, this._api), e);
      }),
      (si.prototype._sendRequest = function (i, e) {
        var o = this;
        return this._isRateLimited(i.type)
          ? Promise.reject({
              event: e,
              type: i.type,
              reason:
                "Transport for " +
                i.type +
                " requests locked till " +
                this._disabledUntil(i.type) +
                " due to too many requests.",
              status: 429,
            })
          : this._buffer.add(function () {
              return new Yn(function (t, n) {
                var e,
                  r = new XMLHttpRequest();
                for (e in ((r.onreadystatechange = function () {
                  var e;
                  4 === r.readyState &&
                    ((e = {
                      "x-sentry-rate-limits": r.getResponseHeader(
                        "X-Sentry-Rate-Limits"
                      ),
                      "retry-after": r.getResponseHeader("Retry-After"),
                    }),
                    o._handleResponse({
                      requestType: i.type,
                      response: r,
                      headers: e,
                      resolve: t,
                      reject: n,
                    }));
                }),
                r.open("POST", i.url),
                o.options.headers))
                  o.options.headers.hasOwnProperty(e) &&
                    r.setRequestHeader(e, o.options.headers[e]);
                r.send(i.body);
              });
            });
      }),
      si);

  function si() {
    return (null !== oi && oi.apply(this, arguments)) || this;
  }

  var ci,
    ui =
      (wt(li, (ci = o)),
      (li.prototype.eventFromException = function (e, t) {
        return (
          (n = this._options),
          fn(
            (n = Qr(e, ((t = t) && t.syntheticException) || void 0, {
              attachStacktrace: n.attachStacktrace,
            })),
            {
              handled: !0,
              type: "generic",
            }
          ),
          (n.level = Et.Error),
          t && t.event_id && (n.event_id = t.event_id),
          Yn.resolve(n)
        );
        var n;
      }),
      (li.prototype.eventFromMessage = function (e, t, n) {
        return (
          void 0 === t && (t = Et.Info),
          (r = this._options),
          (n = n),
          void 0 === (t = t) && (t = Et.Info),
          ((r = Zr(e, (n && n.syntheticException) || void 0, {
            attachStacktrace: r.attachStacktrace,
          })).level = t),
          n && n.event_id && (r.event_id = n.event_id),
          Yn.resolve(r)
        );
        var r;
      }),
      (li.prototype._setupTransport = function () {
        if (!this._options.dsn) return ci.prototype._setupTransport.call(this);
        var e = It(It({}, this._options.transportOptions), {
          dsn: this._options.dsn,
          tunnel: this._options.tunnel,
          _metadata: this._options._metadata,
        });
        return new (this._options.transport || (jn() ? ri : ai))(e);
      }),
      li);

  function li() {
    return (null !== ci && ci.apply(this, arguments)) || this;
  }

  var pi = 0;

  function di(t, r, i) {
    if ((void 0 === r && (r = {}), "function" != typeof t)) return t;
    try {
      if (t.__sentry__) return t;
      if (t.__sentry_wrapped__) return t.__sentry_wrapped__;
    } catch (e) {
      return t;
    }

    function e() {
      var n = Array.prototype.slice.call(arguments);
      try {
        i && "function" == typeof i && i.apply(this, arguments);
        var e = n.map(function (e) {
          return di(e, r);
        });
        return t.handleEvent ? t.handleEvent.apply(this, e) : t.apply(this, e);
      } catch (t) {
        throw (
          ((pi += 1),
          setTimeout(function () {
            --pi;
          }),
          _r(function (e) {
            e.addEventProcessor(function (e) {
              e = It({}, e);
              return (
                r.mechanism && (dn(e, void 0, void 0), fn(e, r.mechanism)),
                (e.extra = It(It({}, e.extra), { arguments: n })),
                e
              );
            }),
              yr(t);
          }),
          t)
        );
      }
    }

    try {
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    } catch (e) {}
    (t.prototype = t.prototype || {}),
      (e.prototype = t.prototype),
      Object.defineProperty(t, "__sentry_wrapped__", {
        enumerable: !1,
        value: e,
      }),
      Object.defineProperties(e, {
        __sentry__: { enumerable: !1, value: !0 },
        __sentry_original__: { enumerable: !1, value: t },
      });
    try {
      Object.getOwnPropertyDescriptor(e, "name").configurable &&
        Object.defineProperty(e, "name", {
          get: function () {
            return t.name;
          },
        });
    } catch (e) {}
    return e;
  }

  (fi.prototype.setupOnce = function () {
    (Error.stackTraceLimit = 50),
      this._options.onerror &&
        (yn.log("Global Handler attached: onerror"),
        this._installGlobalOnErrorHandler()),
      this._options.onunhandledrejection &&
        (yn.log("Global Handler attached: onunhandledrejection"),
        this._installGlobalOnUnhandledRejectionHandler());
  }),
    (fi.prototype._installGlobalOnErrorHandler = function () {
      var o = this;
      this._onErrorHandlerInstalled ||
        (qn({
          callback: function (e) {
            var t = e.error,
              n = dr(),
              r = n.getIntegration(fi),
              i = t && !0 === t.__sentry_own_request__;
            !r ||
              0 < pi ||
              i ||
              ((i = n.getClient()),
              fn(
                (e =
                  void 0 === t && qt(e.msg)
                    ? o._eventFromIncompleteOnError(
                        e.msg,
                        e.url,
                        e.line,
                        e.column
                      )
                    : o._enhanceEventWithInitialFrame(
                        Qr(t || e.msg, void 0, {
                          attachStacktrace:
                            i && i.getOptions().attachStacktrace,
                          rejection: !1,
                        }),
                        e.url,
                        e.line,
                        e.column
                      )),
                { handled: !1, type: "onerror" }
              ),
              n.captureEvent(e, { originalException: t }));
          },
          type: "error",
        }),
        (this._onErrorHandlerInstalled = !0));
    }),
    (fi.prototype._installGlobalOnUnhandledRejectionHandler = function () {
      var i = this;
      this._onUnhandledRejectionHandlerInstalled ||
        (qn({
          callback: function (e) {
            var t = e;
            try {
              "reason" in e
                ? (t = e.reason)
                : "detail" in e &&
                  "reason" in e.detail &&
                  (t = e.detail.reason);
            } catch (e) {}
            var n = dr(),
              r = n.getIntegration(fi),
              e = t && !0 === t.__sentry_own_request__;
            if (!r || 0 < pi || e) return !0;
            (e = n.getClient()),
              (e = Mt(t)
                ? i._eventFromRejectionWithPrimitive(t)
                : Qr(t, void 0, {
                    attachStacktrace: e && e.getOptions().attachStacktrace,
                    rejection: !0,
                  }));
            (e.level = Et.Error),
              fn(e, {
                handled: !1,
                type: "onunhandledrejection",
              }),
              n.captureEvent(e, { originalException: t });
          },
          type: "unhandledrejection",
        }),
        (this._onUnhandledRejectionHandlerInstalled = !0));
    }),
    (fi.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
      var i,
        o = Nt(e) ? e.message : e,
        e = o.match(
          /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
        );
      return (
        e && ((i = e[1]), (o = e[2])),
        this._enhanceEventWithInitialFrame(
          {
            exception: {
              values: [
                {
                  type: i || "Error",
                  value: o,
                },
              ],
            },
          },
          t,
          n,
          r
        )
      );
    }),
    (fi.prototype._eventFromRejectionWithPrimitive = function (e) {
      return {
        exception: {
          values: [
            {
              type: "UnhandledRejection",
              value:
                "Non-Error promise rejection captured with value: " + String(e),
            },
          ],
        },
      };
    }),
    (fi.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
      (e.exception = e.exception || {}),
        (e.exception.values = e.exception.values || []),
        (e.exception.values[0] = e.exception.values[0] || {}),
        (e.exception.values[0].stacktrace =
          e.exception.values[0].stacktrace || {}),
        (e.exception.values[0].stacktrace.frames =
          e.exception.values[0].stacktrace.frames || []);
      (r = isNaN(parseInt(r, 10)) ? void 0 : r),
        (n = isNaN(parseInt(n, 10)) ? void 0 : n),
        (t =
          qt(t) && 0 < t.length
            ? t
            : (function () {
                try {
                  return document.location.href;
                } catch (e) {
                  return "";
                }
              })());
      return (
        0 === e.exception.values[0].stacktrace.frames.length &&
          e.exception.values[0].stacktrace.frames.push({
            colno: r,
            filename: t,
            function: "?",
            in_app: !0,
            lineno: n,
          }),
        e
      );
    }),
    (fi.id = "GlobalHandlers"),
    (R = fi);

  function fi(e) {
    (this.name = fi.id),
      (this._onErrorHandlerInstalled = !1),
      (this._onUnhandledRejectionHandlerInstalled = !1),
      (this._options = It(
        {
          onerror: !0,
          onunhandledrejection: !0,
        },
        e
      ));
  }

  var hi = [
      "EventTarget",
      "Window",
      "Node",
      "ApplicationCache",
      "AudioTrackList",
      "ChannelMergerNode",
      "CryptoOperation",
      "EventSource",
      "FileReader",
      "HTMLUnknownElement",
      "IDBDatabase",
      "IDBRequest",
      "IDBTransaction",
      "KeyOperation",
      "MediaController",
      "MessagePort",
      "ModalWindow",
      "Notification",
      "SVGElementInstance",
      "Screen",
      "TextTrack",
      "TextTrackCue",
      "TextTrackList",
      "WebSocket",
      "WebSocketWorker",
      "Worker",
      "XMLHttpRequest",
      "XMLHttpRequestEventTarget",
      "XMLHttpRequestUpload",
    ],
    x =
      ((mi.prototype.setupOnce = function () {
        var e = sn();
        this._options.setTimeout &&
          En(e, "setTimeout", this._wrapTimeFunction.bind(this)),
          this._options.setInterval &&
            En(e, "setInterval", this._wrapTimeFunction.bind(this)),
          this._options.requestAnimationFrame &&
            En(e, "requestAnimationFrame", this._wrapRAF.bind(this)),
          this._options.XMLHttpRequest &&
            "XMLHttpRequest" in e &&
            En(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
          this._options.eventTarget &&
            (Array.isArray(this._options.eventTarget)
              ? this._options.eventTarget
              : hi
            ).forEach(this._wrapEventTarget.bind(this));
      }),
      (mi.prototype._wrapTimeFunction = function (r) {
        return function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = e[0];
          return (
            (e[0] = di(n, {
              mechanism: {
                data: { function: wn(r) },
                handled: !0,
                type: "instrument",
              },
            })),
            r.apply(this, e)
          );
        };
      }),
      (mi.prototype._wrapRAF = function (t) {
        return function (e) {
          return t.call(
            this,
            di(e, {
              mechanism: {
                data: { function: "requestAnimationFrame", handler: wn(t) },
                handled: !0,
                type: "instrument",
              },
            })
          );
        };
      }),
      (mi.prototype._wrapEventTarget = function (i) {
        var e = sn(),
          e = e[i] && e[i].prototype;
        e &&
          e.hasOwnProperty &&
          e.hasOwnProperty("addEventListener") &&
          (En(e, "addEventListener", function (r) {
            return function (e, t, n) {
              try {
                "function" == typeof t.handleEvent &&
                  (t.handleEvent = di(t.handleEvent.bind(t), {
                    mechanism: {
                      data: {
                        function: "handleEvent",
                        handler: wn(t),
                        target: i,
                      },
                      handled: !0,
                      type: "instrument",
                    },
                  }));
              } catch (e) {}
              return r.call(
                this,
                e,
                di(t, {
                  mechanism: {
                    data: {
                      function: "addEventListener",
                      handler: wn(t),
                      target: i,
                    },
                    handled: !0,
                    type: "instrument",
                  },
                }),
                n
              );
            };
          }),
          En(e, "removeEventListener", function (i) {
            return function (e, t, n) {
              try {
                var r =
                  null === t || void 0 === t ? void 0 : t.__sentry_wrapped__;
                r && i.call(this, e, r, n);
              } catch (e) {}
              return i.call(this, e, t, n);
            };
          }));
      }),
      (mi.prototype._wrapXHR = function (n) {
        return function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var r = this;
          return (
            ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
              function (n) {
                n in r &&
                  "function" == typeof r[n] &&
                  En(r, n, function (e) {
                    var t = {
                      mechanism: {
                        data: { function: n, handler: wn(e) },
                        handled: !0,
                        type: "instrument",
                      },
                    };
                    return (
                      e.__sentry_original__ &&
                        (t.mechanism.data.handler = wn(e.__sentry_original__)),
                      di(e, t)
                    );
                  });
              }
            ),
            n.apply(this, e)
          );
        };
      }),
      (mi.id = "TryCatch"),
      mi);

  function mi(e) {
    (this.name = mi.id),
      (this._options = It(
        {
          XMLHttpRequest: !0,
          eventTarget: !0,
          requestAnimationFrame: !0,
          setInterval: !0,
          setTimeout: !0,
        },
        e
      ));
  }

  function vi(e) {
    return (vi =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }

  var yi =
    ((gi.prototype.addSentryBreadcrumb = function (e) {
      this._options.sentry &&
        dr().addBreadcrumb(
          {
            category:
              "sentry." + ("transaction" === e.type ? "transaction" : "event"),
            event_id: e.event_id,
            level: e.level,
            message: ln(e),
          },
          { event: e }
        );
    }),
    (gi.prototype.setupOnce = function () {
      var n = this;
      this._options.console &&
        qn({
          callback: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            n._consoleBreadcrumb.apply(n, Rt(e));
          },
          type: "console",
        }),
        this._options.dom &&
          qn({
            callback: function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              n._domBreadcrumb.apply(n, Rt(e));
            },
            type: "dom",
          }),
        this._options.xhr &&
          qn({
            callback: function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              n._xhrBreadcrumb.apply(n, Rt(e));
            },
            type: "xhr",
          }),
        this._options.fetch &&
          qn({
            callback: function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              n._fetchBreadcrumb.apply(n, Rt(e));
            },
            type: "fetch",
          }),
        this._options.history &&
          qn({
            callback: function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              n._historyBreadcrumb.apply(n, Rt(e));
            },
            type: "history",
          });
    }),
    (gi.prototype._consoleBreadcrumb = function (e) {
      var t = {
        category: "console",
        data: { arguments: e.args, logger: "console" },
        level: Et.fromString(e.level),
        message: rn(e.args, " "),
      };
      if ("assert" === e.level) {
        if (!1 !== e.args[0]) return;
        (t.message =
          "Assertion failed: " +
          (rn(e.args.slice(1), " ") || "console.assert")),
          (t.data.arguments = e.args.slice(1));
      }
      dr().addBreadcrumb(t, { input: e.args, level: e.level });
    }),
    (gi.prototype._domBreadcrumb = function (e) {
      var t,
        n =
          "object" === vi(this._options.dom)
            ? this._options.dom.serializeAttribute
            : void 0;
      "string" == typeof n && (n = [n]);
      try {
        t = e.event.target ? Wt(e.event.target, n) : Wt(e.event, n);
      } catch (e) {
        t = "<unknown>";
      }
      0 !== t.length &&
        dr().addBreadcrumb(
          { category: "ui." + e.name, message: t },
          {
            event: e.event,
            name: e.name,
            global: e.global,
          }
        );
    }),
    (gi.prototype._xhrBreadcrumb = function (e) {
      var t, n, r, i;
      e.endTimestamp &&
        (e.xhr.__sentry_own_request__ ||
          ((t = (i = e.xhr.__sentry_xhr__ || {}).method),
          (n = i.url),
          (r = i.status_code),
          (i = i.body),
          dr().addBreadcrumb(
            {
              category: "xhr",
              data: { method: t, url: n, status_code: r },
              type: "http",
            },
            { xhr: e.xhr, input: i }
          )));
    }),
    (gi.prototype._fetchBreadcrumb = function (e) {
      e.endTimestamp &&
        ((e.fetchData.url.match(/sentry_key/) &&
          "POST" === e.fetchData.method) ||
          (e.error
            ? dr().addBreadcrumb(
                {
                  category: "fetch",
                  data: e.fetchData,
                  level: Et.Error,
                  type: "http",
                },
                { data: e.error, input: e.args }
              )
            : dr().addBreadcrumb(
                {
                  category: "fetch",
                  data: It(It({}, e.fetchData), {
                    status_code: e.response.status,
                  }),
                  type: "http",
                },
                { input: e.args, response: e.response }
              )));
    }),
    (gi.prototype._historyBreadcrumb = function (e) {
      var t = sn(),
        n = e.from,
        r = e.to,
        i = un(t.location.href),
        e = un(n),
        t = un(r);
      e.path || (e = i),
        i.protocol === t.protocol && i.host === t.host && (r = t.relative),
        i.protocol === e.protocol && i.host === e.host && (n = e.relative),
        dr().addBreadcrumb({
          category: "navigation",
          data: { from: n, to: r },
        });
    }),
    (gi.id = "Breadcrumbs"),
    gi);

  function gi(e) {
    (this.name = gi.id),
      (this._options = It(
        { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 },
        e
      ));
  }

  (_i.prototype.setupOnce = function () {
    ir(function (e, t) {
      var n = dr().getIntegration(_i);
      if (n) {
        n = n._handler && n._handler.bind(n);
        return "function" == typeof n ? n(e, t) : e;
      }
      return e;
    });
  }),
    (_i.prototype._handler = function (e, t) {
      if (
        !(
          e.exception &&
          e.exception.values &&
          t &&
          zt(t.originalException, Error)
        )
      )
        return e;
      t = this._walkErrorTree(t.originalException, this._key);
      return (e.exception.values = Rt(t, e.exception.values)), e;
    }),
    (_i.prototype._walkErrorTree = function (e, t, n) {
      if (
        (void 0 === n && (n = []),
        !zt(e[t], Error) || n.length + 1 >= this._limit)
      )
        return n;
      var r = Jr(Wr(e[t]));
      return this._walkErrorTree(e[t], t, Rt([r], n));
    }),
    (_i.id = "LinkedErrors"),
    (Kn = _i);

  function _i(e) {
    void 0 === e && (e = {}),
      (this.name = _i.id),
      (this._key = e.key || "cause"),
      (this._limit = e.limit || 5);
  }

  var bi = sn(),
    Pe =
      ((wi.prototype.setupOnce = function () {
        ir(function (e) {
          var t;
          if (dr().getIntegration(wi)) {
            if (!bi.navigator && !bi.location && !bi.document) return e;
            var n =
                (null === (i = e.request) || void 0 === i ? void 0 : i.url) ||
                (null === (t = bi.location) || void 0 === t ? void 0 : t.href),
              r = (bi.document || {}).referrer,
              i = (bi.navigator || {}).userAgent,
              i = It(
                It(
                  It(
                    {},
                    null === (t = e.request) || void 0 === t
                      ? void 0
                      : t.headers
                  ),
                  r && { Referer: r }
                ),
                i && { "User-Agent": i }
              ),
              i = It(It({}, n && { url: n }), { headers: i });
            return It(It({}, e), { request: i });
          }
          return e;
        });
      }),
      (wi.id = "UserAgent"),
      wi);

  function wi() {
    this.name = wi.id;
  }

  (Si.prototype.setupOnce = function (e, r) {
    e(function (t) {
      var n = r().getIntegration(Si);
      if (n) {
        try {
          if (n._shouldDropEvent(t, n._previousEvent)) return null;
        } catch (e) {
          return (n._previousEvent = t);
        }
        return (n._previousEvent = t);
      }
      return t;
    });
  }),
    (Si.prototype._shouldDropEvent = function (e, t) {
      return (
        !!t &&
        (!!this._isSameMessageEvent(e, t) || !!this._isSameExceptionEvent(e, t))
      );
    }),
    (Si.prototype._isSameMessageEvent = function (e, t) {
      var n = e.message,
        r = t.message;
      return (
        !(!n && !r) &&
        !((n && !r) || (!n && r)) &&
        n === r &&
        !!this._isSameFingerprint(e, t) &&
        !!this._isSameStacktrace(e, t)
      );
    }),
    (Si.prototype._getFramesFromEvent = function (e) {
      var t = e.exception;
      if (t)
        try {
          return t.values[0].stacktrace.frames;
        } catch (e) {
          return;
        }
      else if (e.stacktrace) return e.stacktrace.frames;
    }),
    (Si.prototype._isSameStacktrace = function (e, t) {
      var n = this._getFramesFromEvent(e),
        r = this._getFramesFromEvent(t);
      if (!n && !r) return !0;
      if ((n && !r) || (!n && r)) return !1;
      if (r.length !== n.length) return !1;
      for (var i = 0; i < r.length; i++) {
        var o = r[i],
          a = n[i];
        if (
          o.filename !== a.filename ||
          o.lineno !== a.lineno ||
          o.colno !== a.colno ||
          o.function !== a.function
        )
          return !1;
      }
      return !0;
    }),
    (Si.prototype._getExceptionFromEvent = function (e) {
      return e.exception && e.exception.values && e.exception.values[0];
    }),
    (Si.prototype._isSameExceptionEvent = function (e, t) {
      var n = this._getExceptionFromEvent(t),
        r = this._getExceptionFromEvent(e);
      return (
        !(!n || !r) &&
        n.type === r.type &&
        n.value === r.value &&
        !!this._isSameFingerprint(e, t) &&
        !!this._isSameStacktrace(e, t)
      );
    }),
    (Si.prototype._isSameFingerprint = function (e, t) {
      (e = e.fingerprint), (t = t.fingerprint);
      if (!e && !t) return !0;
      if ((e && !t) || (!e && t)) return !1;
      try {
        return !(e.join("") !== t.join(""));
      } catch (e) {
        return !1;
      }
    }),
    (Si.id = "Dedupe"),
    (o = Si);

  function Si() {
    this.name = Si.id;
  }

  var Ei,
    xi =
      (wt(ki, (Ei = E)),
      (ki.prototype.showReportDialog = function (e) {
        var t;
        void 0 === e && (e = {}),
          sn().document &&
            (this._isEnabled()
              ? (t =
                  void 0 ===
                  (t = It(It({}, e), { dsn: e.dsn || this.getDsn() }))
                    ? {}
                    : t).eventId
                ? t.dsn
                  ? (((e = document.createElement("script")).async = !0),
                    (e.src = new br(t.dsn).getReportDialogEndpoint(t)),
                    t.onLoad && (e.onload = t.onLoad),
                    (document.head || document.body).appendChild(e))
                  : yn.error("Missing dsn option in showReportDialog call")
                : yn.error("Missing eventId option in showReportDialog call")
              : yn.error(
                  "Trying to call showReportDialog with Sentry Client disabled"
                ));
      }),
      (ki.prototype._prepareEvent = function (e, t, n) {
        return (
          (e.platform = e.platform || "javascript"),
          Ei.prototype._prepareEvent.call(this, e, t, n)
        );
      }),
      (ki.prototype._sendEvent = function (e) {
        var t = this.getIntegration(yi);
        t && t.addSentryBreadcrumb(e), Ei.prototype._sendEvent.call(this, e);
      }),
      ki);

  function ki(e) {
    return (
      ((e = void 0 === e ? {} : e)._metadata = e._metadata || {}),
      (e._metadata.sdk = e._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [{ name: "npm:@sentry/browser", version: Dr }],
        version: Dr,
      }),
      Ei.call(this, ui, e) || this
    );
  }

  var Oi,
    Ti,
    Ii = [
      new n(),
      new $(),
      new x(),
      new yi(),
      new R(),
      new Kn(),
      new o(),
      new Pe(),
    ];

  function Ci(e) {
    var t, n;
    void 0 === (e = void 0 === e ? {} : e).defaultIntegrations &&
      (e.defaultIntegrations = Ii),
      void 0 !== e.release ||
        ((t = sn()).SENTRY_RELEASE &&
          t.SENTRY_RELEASE.id &&
          (e.release = t.SENTRY_RELEASE.id)),
      void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0),
      (function (e, t) {
        var n;
        !0 === t.debug && yn.enable();
        var r = dr();
        null !== (n = r.getScope()) && void 0 !== n && n.update(t.initialScope),
          (t = new e(t)),
          r.bindClient(t);
      })(xi, e),
      e.autoSessionTracking &&
        (void 0 !== sn().document
          ? "function" == typeof (n = dr()).startSession &&
            "function" == typeof n.captureSession &&
            (n.startSession({ ignoreDuration: !0 }),
            n.captureSession(),
            qn({
              callback: function (e) {
                var t = e.from,
                  e = e.to;
                void 0 !== t &&
                  t !== e &&
                  (n.startSession({ ignoreDuration: !0 }), n.captureSession());
              },
              type: "history",
            }))
          : yn.warn(
              "Session tracking in non-browser environment with @sentry/browser is not supported."
            ));
  }

  ((x = Oi = Oi || {}).Ok = "ok"),
    (x.DeadlineExceeded = "deadline_exceeded"),
    (x.Unauthenticated = "unauthenticated"),
    (x.PermissionDenied = "permission_denied"),
    (x.NotFound = "not_found"),
    (x.ResourceExhausted = "resource_exhausted"),
    (x.InvalidArgument = "invalid_argument"),
    (x.Unimplemented = "unimplemented"),
    (x.Unavailable = "unavailable"),
    (x.InternalError = "internal_error"),
    (x.UnknownError = "unknown_error"),
    (x.Cancelled = "cancelled"),
    (x.AlreadyExists = "already_exists"),
    (x.FailedPrecondition = "failed_precondition"),
    (x.Aborted = "aborted"),
    (x.OutOfRange = "out_of_range"),
    (x.DataLoss = "data_loss"),
    ((Ti = Oi = Oi || {}).fromHttpCode = function (e) {
      if (e < 400) return Ti.Ok;
      if (400 <= e && e < 500)
        switch (e) {
          case 401:
            return Ti.Unauthenticated;
          case 403:
            return Ti.PermissionDenied;
          case 404:
            return Ti.NotFound;
          case 409:
            return Ti.AlreadyExists;
          case 413:
            return Ti.FailedPrecondition;
          case 429:
            return Ti.ResourceExhausted;
          default:
            return Ti.InvalidArgument;
        }
      if (500 <= e && e < 600)
        switch (e) {
          case 501:
            return Ti.Unimplemented;
          case 503:
            return Ti.Unavailable;
          case 504:
            return Ti.DeadlineExceeded;
          default:
            return Ti.InternalError;
        }
      return Ti.UnknownError;
    });
  var ji = new RegExp(
    "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
  );

  function Ai(e) {
    var t;
    return (
      (e =
        void 0 === e
          ? null === (t = dr().getClient()) || void 0 === t
            ? void 0
            : t.getOptions()
          : e) &&
      ("tracesSampleRate" in e || "tracesSampler" in e)
    );
  }

  function Ri(e) {
    return null ===
      (e =
        null === (e = void 0 === e ? dr() : e) || void 0 === e
          ? void 0
          : e.getScope()) || void 0 === e
      ? void 0
      : e.getTransaction();
  }

  function Di() {
    var e = Ri();
    e &&
      (yn.log(
        "[Tracing] Transaction: " +
          Oi.InternalError +
          " -> Global error occured"
      ),
      e.setStatus(Oi.InternalError));
  }

  var Pi =
    ((Ni.prototype.add = function (e) {
      this.spans.length > this._maxlen
        ? (e.spanRecorder = void 0)
        : this.spans.push(e);
    }),
    Ni);

  function Ni(e) {
    void 0 === e && (e = 1e3), (this.spans = []), (this._maxlen = e);
  }

  (Li.prototype.child = function (e) {
    return this.startChild(e);
  }),
    (Li.prototype.startChild = function (e) {
      e = new Li(
        It(It({}, e), {
          parentSpanId: this.spanId,
          sampled: this.sampled,
          traceId: this.traceId,
        })
      );
      return (
        (e.spanRecorder = this.spanRecorder),
        e.spanRecorder && e.spanRecorder.add(e),
        (e.transaction = this.transaction),
        e
      );
    }),
    (Li.prototype.setTag = function (e, t) {
      var n;
      return (this.tags = It(It({}, this.tags), (((n = {})[e] = t), n))), this;
    }),
    (Li.prototype.setData = function (e, t) {
      var n;
      return (this.data = It(It({}, this.data), (((n = {})[e] = t), n))), this;
    }),
    (Li.prototype.setStatus = function (e) {
      return (this.status = e), this;
    }),
    (Li.prototype.setHttpStatus = function (e) {
      this.setTag("http.status_code", String(e));
      e = Oi.fromHttpCode(e);
      return e !== Oi.UnknownError && this.setStatus(e), this;
    }),
    (Li.prototype.isSuccess = function () {
      return this.status === Oi.Ok;
    }),
    (Li.prototype.finish = function (e) {
      this.endTimestamp = "number" == typeof e ? e : Zn();
    }),
    (Li.prototype.toTraceparent = function () {
      var e = "";
      return (
        void 0 !== this.sampled && (e = this.sampled ? "-1" : "-0"),
        this.traceId + "-" + this.spanId + e
      );
    }),
    (Li.prototype.toContext = function () {
      return Cn({
        data: this.data,
        description: this.description,
        endTimestamp: this.endTimestamp,
        op: this.op,
        parentSpanId: this.parentSpanId,
        sampled: this.sampled,
        spanId: this.spanId,
        startTimestamp: this.startTimestamp,
        status: this.status,
        tags: this.tags,
        traceId: this.traceId,
      });
    }),
    (Li.prototype.updateWithContext = function (e) {
      var t;
      return (
        (this.data = null != (t = e.data) ? t : {}),
        (this.description = e.description),
        (this.endTimestamp = e.endTimestamp),
        (this.op = e.op),
        (this.parentSpanId = e.parentSpanId),
        (this.sampled = e.sampled),
        (this.spanId = null != (t = e.spanId) ? t : this.spanId),
        (this.startTimestamp =
          null != (t = e.startTimestamp) ? t : this.startTimestamp),
        (this.status = e.status),
        (this.tags = null != (t = e.tags) ? t : {}),
        (this.traceId = null != (e = e.traceId) ? e : this.traceId),
        this
      );
    }),
    (Li.prototype.getTraceContext = function () {
      return Cn({
        data: 0 < Object.keys(this.data).length ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        status: this.status,
        tags: 0 < Object.keys(this.tags).length ? this.tags : void 0,
        trace_id: this.traceId,
      });
    }),
    (Li.prototype.toJSON = function () {
      return Cn({
        data: 0 < Object.keys(this.data).length ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        start_timestamp: this.startTimestamp,
        status: this.status,
        tags: 0 < Object.keys(this.tags).length ? this.tags : void 0,
        timestamp: this.endTimestamp,
        trace_id: this.traceId,
      });
    }),
    (R = Li);

  function Li(e) {
    if (
      ((this.traceId = cn()),
      (this.spanId = cn().substring(16)),
      (this.startTimestamp = Zn()),
      (this.tags = {}),
      (this.data = {}),
      !e)
    )
      return this;
    e.traceId && (this.traceId = e.traceId),
      e.spanId && (this.spanId = e.spanId),
      e.parentSpanId && (this.parentSpanId = e.parentSpanId),
      "sampled" in e && (this.sampled = e.sampled),
      e.op && (this.op = e.op),
      e.description && (this.description = e.description),
      e.data && (this.data = e.data),
      e.tags && (this.tags = e.tags),
      e.status && (this.status = e.status),
      e.startTimestamp && (this.startTimestamp = e.startTimestamp),
      e.endTimestamp && (this.endTimestamp = e.endTimestamp);
  }

  var qi,
    Mi =
      (wt(Ui, (qi = R)),
      (Ui.prototype.setName = function (e) {
        this.name = e;
      }),
      (Ui.prototype.initSpanRecorder = function (e) {
        void 0 === e && (e = 1e3),
          this.spanRecorder || (this.spanRecorder = new Pi(e)),
          this.spanRecorder.add(this);
      }),
      (Ui.prototype.setMeasurements = function (e) {
        this._measurements = It({}, e);
      }),
      (Ui.prototype.setMetadata = function (e) {
        this.metadata = It(It({}, this.metadata), e);
      }),
      (Ui.prototype.finish = function (e) {
        var t = this;
        if (void 0 === this.endTimestamp) {
          if (
            (this.name ||
              (yn.warn(
                "Transaction has no name, falling back to `<unlabeled transaction>`."
              ),
              (this.name = "<unlabeled transaction>")),
            qi.prototype.finish.call(this, e),
            !0 === this.sampled)
          ) {
            e = this.spanRecorder
              ? this.spanRecorder.spans.filter(function (e) {
                  return e !== t && e.endTimestamp;
                })
              : [];
            this._trimEnd &&
              0 < e.length &&
              (this.endTimestamp = e.reduce(function (e, t) {
                return !e.endTimestamp ||
                  !t.endTimestamp ||
                  e.endTimestamp > t.endTimestamp
                  ? e
                  : t;
              }).endTimestamp);
            e = {
              contexts: { trace: this.getTraceContext() },
              spans: e,
              start_timestamp: this.startTimestamp,
              tags: this.tags,
              timestamp: this.endTimestamp,
              transaction: this.name,
              type: "transaction",
              debug_meta: this.metadata,
            };
            return (
              0 < Object.keys(this._measurements).length &&
                (yn.log(
                  "[Measurements] Adding measurements to transaction",
                  JSON.stringify(this._measurements, void 0, 2)
                ),
                (e.measurements = this._measurements)),
              yn.log(
                "[Tracing] Finishing " +
                  this.op +
                  " transaction: " +
                  this.name +
                  "."
              ),
              this._hub.captureEvent(e)
            );
          }
          yn.log(
            "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
          );
        }
      }),
      (Ui.prototype.toContext = function () {
        var e = qi.prototype.toContext.call(this);
        return Cn(It(It({}, e), { name: this.name, trimEnd: this._trimEnd }));
      }),
      (Ui.prototype.updateWithContext = function (e) {
        var t;
        return (
          qi.prototype.updateWithContext.call(this, e),
          (this.name = null != (t = e.name) ? t : ""),
          (this._trimEnd = e.trimEnd),
          this
        );
      }),
      Ui);

  function Ui(e, t) {
    var n = qi.call(this, e) || this;
    return (
      (n._measurements = {}),
      (n._hub = dr()),
      zt(t, cr) && (n._hub = t),
      (n.name = e.name || ""),
      (n.metadata = e.metadata || {}),
      (n._trimEnd = e.trimEnd),
      (n.transaction = n)
    );
  }

  var Fi,
    Bi =
      (wt(Hi, (Fi = Pi)),
      (Hi.prototype.add = function (t) {
        var n = this;
        t.spanId !== this.transactionSpanId &&
          ((t.finish = function (e) {
            (t.endTimestamp = "number" == typeof e ? e : Zn()),
              n._popActivity(t.spanId);
          }),
          void 0 === t.endTimestamp && this._pushActivity(t.spanId)),
          Fi.prototype.add.call(this, t);
      }),
      Hi);

  function Hi(e, t, n, r) {
    void 0 === n && (n = "");
    r = Fi.call(this, r) || this;
    return (
      (r._pushActivity = e), (r._popActivity = t), (r.transactionSpanId = n), r
    );
  }

  var zi,
    Wi =
      (wt(Yi, (zi = Mi)),
      (Yi.prototype.finish = function (n) {
        var t,
          e,
          r = this;
        if (
          (void 0 === n && (n = Zn()),
          (this._finished = !0),
          (this.activities = {}),
          this.spanRecorder)
        ) {
          yn.log(
            "[Tracing] finishing IdleTransaction",
            new Date(1e3 * n).toISOString(),
            this.op
          );
          try {
            for (
              var i = jt(this._beforeFinishCallbacks), o = i.next();
              !o.done;
              o = i.next()
            )
              (0, o.value)(this, n);
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              o && !o.done && (e = i.return) && e.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
          (this.spanRecorder.spans = this.spanRecorder.spans.filter(function (
            e
          ) {
            if (e.spanId === r.spanId) return !0;
            e.endTimestamp ||
              ((e.endTimestamp = n),
              e.setStatus(Oi.Cancelled),
              yn.log(
                "[Tracing] cancelling span since transaction ended early",
                JSON.stringify(e, void 0, 2)
              ));
            var t = e.startTimestamp < n;
            return (
              t ||
                yn.log(
                  "[Tracing] discarding Span since it happened after Transaction was finished",
                  JSON.stringify(e, void 0, 2)
                ),
              t
            );
          })),
            yn.log("[Tracing] flushing IdleTransaction");
        } else yn.log("[Tracing] No active IdleTransaction");
        return (
          this._onScope && Vi(this._idleHub), zi.prototype.finish.call(this, n)
        );
      }),
      (Yi.prototype.registerBeforeFinishCallback = function (e) {
        this._beforeFinishCallbacks.push(e);
      }),
      (Yi.prototype.initSpanRecorder = function (e) {
        var t = this;
        this.spanRecorder ||
          ((this.spanRecorder = new Bi(
            function (e) {
              t._finished || t._pushActivity(e);
            },
            function (e) {
              t._finished || t._popActivity(e);
            },
            this.spanId,
            e
          )),
          yn.log("Starting heartbeat"),
          this._pingHeartbeat()),
          this.spanRecorder.add(this);
      }),
      (Yi.prototype._pushActivity = function (e) {
        this._initTimeout &&
          (clearTimeout(this._initTimeout), (this._initTimeout = void 0)),
          yn.log("[Tracing] pushActivity: " + e),
          (this.activities[e] = !0),
          yn.log(
            "[Tracing] new activities count",
            Object.keys(this.activities).length
          );
      }),
      (Yi.prototype._popActivity = function (e) {
        var t,
          n = this;
        this.activities[e] &&
          (yn.log("[Tracing] popActivity " + e),
          delete this.activities[e],
          yn.log(
            "[Tracing] new activities count",
            Object.keys(this.activities).length
          )),
          0 === Object.keys(this.activities).length &&
            ((e = this._idleTimeout),
            (t = Zn() + e / 1e3),
            setTimeout(function () {
              n._finished || n.finish(t);
            }, e));
      }),
      (Yi.prototype._beat = function () {
        var e;
        clearTimeout(this._heartbeatTimer),
          this._finished ||
            ((e = (e = Object.keys(this.activities)).length
              ? e.reduce(function (e, t) {
                  return e + t;
                })
              : "") === this._prevHeartbeatString
              ? (this._heartbeatCounter += 1)
              : (this._heartbeatCounter = 1),
            (this._prevHeartbeatString = e),
            3 <= this._heartbeatCounter
              ? (yn.log(
                  "[Tracing] Transaction finished because of no change for 3 heart beats"
                ),
                this.setStatus(Oi.DeadlineExceeded),
                this.setTag("heartbeat", "failed"),
                this.finish())
              : this._pingHeartbeat());
      }),
      (Yi.prototype._pingHeartbeat = function () {
        var e = this;
        yn.log(
          "pinging Heartbeat -> current counter: " + this._heartbeatCounter
        ),
          (this._heartbeatTimer = setTimeout(function () {
            e._beat();
          }, 5e3));
      }),
      Yi);

  function Yi(e, t, n, r) {
    void 0 === n && (n = 1e3), void 0 === r && (r = !1);
    var i = zi.call(this, e, t) || this;
    return (
      (i._idleHub = t),
      (i._idleTimeout = n),
      (i._onScope = r),
      (i.activities = {}),
      (i._heartbeatTimer = 0),
      (i._heartbeatCounter = 0),
      (i._finished = !1),
      (i._beforeFinishCallbacks = []),
      t &&
        r &&
        (Vi(t),
        yn.log("Setting idle transaction on scope. Span ID: " + i.spanId),
        t.configureScope(function (e) {
          return e.setSpan(i);
        })),
      (i._initTimeout = setTimeout(function () {
        i._finished || i.finish();
      }, i._idleTimeout)),
      i
    );
  }

  function Vi(e) {
    !e || ((e = e.getScope()) && e.getTransaction() && e.setSpan(void 0));
  }

  function Gi(e) {
    return (Gi =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }

  function Ji() {
    var e = this.getScope();
    if (e) {
      e = e.getSpan();
      if (e) return { "sentry-trace": e.toTraceparent() };
    }
    return {};
  }

  function Xi(e, t, n) {
    return Ai()
      ? void 0 !== e.sampled
        ? (e.setMetadata({ transactionSampling: { method: Tt.Explicit } }), e)
        : ("function" == typeof t.tracesSampler
            ? ((r = t.tracesSampler(n)),
              e.setMetadata({
                transactionSampling: {
                  method: Tt.Sampler,
                  rate: Number(r),
                },
              }))
            : void 0 !== n.parentSampled
            ? ((r = n.parentSampled),
              e.setMetadata({
                transactionSampling: { method: Tt.Inheritance },
              }))
            : ((r = t.tracesSampleRate),
              e.setMetadata({
                transactionSampling: {
                  method: Tt.Rate,
                  rate: Number(r),
                },
              })),
          (function (e) {
            if (isNaN(e) || ("number" != typeof e && "boolean" != typeof e))
              return (
                yn.warn(
                  "[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " +
                    JSON.stringify(e) +
                    " of type " +
                    JSON.stringify(Gi(e)) +
                    "."
                ),
                !1
              );
            if (e < 0 || 1 < e)
              return (
                yn.warn(
                  "[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " +
                    e +
                    "."
                ),
                !1
              );
            return !0;
          })(r)
            ? r
              ? ((e.sampled = Math.random() < r),
                e.sampled
                  ? yn.log(
                      "[Tracing] starting " + e.op + " transaction - " + e.name
                    )
                  : yn.log(
                      "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
                        Number(r) +
                        ")"
                    ),
                e)
              : (yn.log(
                  "[Tracing] Discarding transaction because " +
                    ("function" == typeof t.tracesSampler
                      ? "tracesSampler returned 0 or false"
                      : "a negative sampling decision was inherited or tracesSampleRate is set to 0")
                ),
                (e.sampled = !1),
                e)
            : (yn.warn(
                "[Tracing] Discarding transaction because of invalid sample rate."
              ),
              (e.sampled = !1),
              e))
      : ((e.sampled = !1), e);
    var r;
  }

  function Ki(e, t) {
    var n =
        (null === (r = this.getClient()) || void 0 === r
          ? void 0
          : r.getOptions()) || {},
      r = new Mi(e, this);
    return (
      (r = Xi(
        r,
        n,
        It(
          {
            parentSampled: e.parentSampled,
            transactionContext: e,
          },
          t
        )
      )).sampled &&
        r.initSpanRecorder(
          null === (n = n._experiments) || void 0 === n ? void 0 : n.maxSpans
        ),
      r
    );
  }

  var $i = sn();

  function Qi(t, n, r) {
    var i;
    return function (e) {
      0 <= n.value &&
        (e || r) &&
        ((n.delta = n.value - (i || 0)),
        (!n.delta && void 0 !== i) || ((i = n.value), t(n)));
    };
  }

  function Zi(e, t) {
    return {
      name: e,
      value: null != t ? t : -1,
      delta: 0,
      entries: [],
      id: oo(),
    };
  }

  function eo(e, t) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
        var n = new PerformanceObserver(function (e) {
          return e.getEntries().map(t);
        });
        return n.observe({ type: e, buffered: !0 }), n;
      }
    } catch (e) {}
  }

  function to(e, t) {
    function n(e) {
      var t, n;
      e &&
        !e.hadRecentInput &&
        ((t = a[0]),
        (n = a[a.length - 1]),
        o &&
        0 !== a.length &&
        e.startTime - n.startTime < 1e3 &&
        e.startTime - t.startTime < 5e3
          ? ((o += e.value), a.push(e))
          : ((o = e.value), (a = [e])),
        o > i.value && ((i.value = o), (i.entries = a), r && r()));
    }

    var r,
      i = Zi("CLS", 0),
      o = 0,
      a = [],
      s = eo("layout-shift", n);
    s &&
      ((r = Qi(e, i, t)),
      ao(function () {
        s.takeRecords().map(n), r(!0);
      }));
  }

  function no() {
    return (
      so < 0 &&
        ((so = "hidden" === document.visibilityState ? 0 : 1 / 0),
        ao(function (e) {
          e = e.timeStamp;
          so = e;
        }, !0)),
      {
        get firstHiddenTime() {
          return so;
        },
      }
    );
  }

  function ro(e, t) {
    function n(e) {
      r &&
        e.startTime < i.firstHiddenTime &&
        ((o.value = e.processingStart - e.startTime), o.entries.push(e), r(!0));
    }

    var r,
      i = no(),
      o = Zi("FID"),
      a = eo("first-input", n);
    a &&
      ((r = Qi(e, o, t)),
      ao(function () {
        a.takeRecords().map(n), a.disconnect();
      }, !0));
  }

  function io(e, t) {
    function n(e) {
      var t = e.startTime;
      t < o.firstHiddenTime && ((a.value = t), a.entries.push(e)), r && r();
    }

    var r,
      i,
      o = no(),
      a = Zi("LCP"),
      s = eo("largest-contentful-paint", n);
    s &&
      ((r = Qi(e, a, t)),
      (i = function () {
        co[a.id] ||
          (s.takeRecords().map(n), s.disconnect(), (co[a.id] = !0), r(!0));
      }),
      ["keydown", "click"].forEach(function (e) {
        addEventListener(e, i, { once: !0, capture: !0 });
      }),
      ao(i, !0));
  }

  var oo = function () {
      return (
        "v2-" +
        Date.now() +
        "-" +
        (Math.floor(Math.random() * (9e12 - 1)) + 1e12)
      );
    },
    ao = function (t, n) {
      function r(e) {
        ("pagehide" !== e.type && "hidden" !== document.visibilityState) ||
          (t(e),
          n &&
            (removeEventListener("visibilitychange", r, !0),
            removeEventListener("pagehide", r, !0)));
      }

      addEventListener("visibilitychange", r, !0),
        addEventListener("pagehide", r, !0);
    },
    so = -1,
    co = {},
    uo = sn(),
    lo =
      ((po.prototype.addPerformanceEntries = function (c) {
        var u = this;
        if (uo && uo.performance && uo.performance.getEntries && er) {
          yn.log("[Tracing] Adding & adjusting spans using Performance API");
          var l,
            p,
            d,
            f,
            h,
            r,
            m = er / 1e3;
          if (uo.document && uo.document.scripts)
            for (var e = 0; e < uo.document.scripts.length; e++)
              if ("true" === uo.document.scripts[e].dataset.entry) {
                l = uo.document.scripts[e].src;
                break;
              }
          uo.performance
            .getEntries()
            .slice(this._performanceCursor)
            .forEach(function (e) {
              var t,
                n,
                r,
                i = e.startTime / 1e3,
                o = e.duration / 1e3;
              if (!("navigation" === c.op && m + i < c.startTimestamp))
                switch (e.entryType) {
                  case "navigation":
                    fo({
                      transaction: (t = c),
                      entry: (n = e),
                      event: "unloadEvent",
                      timeOrigin: (r = m),
                    }),
                      fo({
                        transaction: t,
                        entry: n,
                        event: "redirect",
                        timeOrigin: r,
                      }),
                      fo({
                        transaction: t,
                        entry: n,
                        event: "domContentLoadedEvent",
                        timeOrigin: r,
                      }),
                      fo({
                        transaction: t,
                        entry: n,
                        event: "loadEvent",
                        timeOrigin: r,
                      }),
                      fo({
                        transaction: t,
                        entry: n,
                        event: "connect",
                        timeOrigin: r,
                      }),
                      fo({
                        transaction: t,
                        entry: n,
                        event: "secureConnection",
                        timeOrigin: r,
                        eventEnd: "connectEnd",
                        description: "TLS/SSL",
                      }),
                      fo({
                        transaction: t,
                        entry: n,
                        event: "fetch",
                        timeOrigin: r,
                        eventEnd: "domainLookupStart",
                        description: "cache",
                      }),
                      fo({
                        transaction: t,
                        entry: n,
                        event: "domainLookup",
                        timeOrigin: r,
                        description: "DNS",
                      }),
                      (function (e, t, n) {
                        ho(e, {
                          op: "browser",
                          description: "request",
                          startTimestamp: n + t.requestStart / 1e3,
                          endTimestamp: n + t.responseEnd / 1e3,
                        }),
                          ho(e, {
                            op: "browser",
                            description: "response",
                            startTimestamp: n + t.responseStart / 1e3,
                            endTimestamp: n + t.responseEnd / 1e3,
                          });
                      })(t, n, r),
                      (f = m + e.responseStart / 1e3),
                      (h = m + e.requestStart / 1e3);
                    break;
                  case "mark":
                  case "paint":
                  case "measure":
                    var a = (function (e, t, n, r, i) {
                      (n = i + n), (r = n + r);
                      return (
                        ho(e, {
                          description: t.name,
                          endTimestamp: r,
                          op: t.entryType,
                          startTimestamp: n,
                        }),
                        n
                      );
                    })(c, e, i, o, m);
                    void 0 === d && "sentry-tracing-init" === e.name && (d = a);
                    var s = no(),
                      s = e.startTime < s.firstHiddenTime;
                    "first-paint" === e.name &&
                      s &&
                      (yn.log("[Measurements] Adding FP"),
                      (u._measurements.fp = { value: e.startTime }),
                      (u._measurements["mark.fp"] = { value: a })),
                      "first-contentful-paint" === e.name &&
                        s &&
                        (yn.log("[Measurements] Adding FCP"),
                        (u._measurements.fcp = { value: e.startTime }),
                        (u._measurements["mark.fcp"] = { value: a }));
                    break;
                  case "resource":
                    (s = e.name.replace(window.location.origin, "")),
                      (a = (function (e, t, n, r, i, o) {
                        if (
                          "xmlhttprequest" === t.initiatorType ||
                          "fetch" === t.initiatorType
                        )
                          return;
                        var a = {};
                        "transferSize" in t &&
                          (a["Transfer Size"] = t.transferSize);
                        "encodedBodySize" in t &&
                          (a["Encoded Body Size"] = t.encodedBodySize);
                        "decodedBodySize" in t &&
                          (a["Decoded Body Size"] = t.decodedBodySize);
                        (r = o + r), (i = r + i);
                        return (
                          ho(e, {
                            description: n,
                            endTimestamp: i,
                            op: t.initiatorType
                              ? "resource." + t.initiatorType
                              : "resource",
                            startTimestamp: r,
                            data: a,
                          }),
                          i
                        );
                      })(c, e, s, i, o, m));
                    void 0 === p && -1 < (l || "").indexOf(s) && (p = a);
                }
            }),
            void 0 !== p &&
              void 0 !== d &&
              ho(c, {
                description: "evaluation",
                endTimestamp: d,
                op: "script",
                startTimestamp: p,
              }),
            (this._performanceCursor = Math.max(
              performance.getEntries().length - 1,
              0
            )),
            this._trackNavigator(c),
            "pageload" === c.op &&
              ((r = er / 1e3),
              "number" == typeof f &&
                (yn.log("[Measurements] Adding TTFB"),
                (this._measurements.ttfb = {
                  value: 1e3 * (f - c.startTimestamp),
                }),
                "number" == typeof h &&
                  h <= f &&
                  (this._measurements["ttfb.requestTime"] = {
                    value: 1e3 * (f - h),
                  })),
              ["fcp", "fp", "lcp"].forEach(function (e) {
                var t, n;
                !u._measurements[e] ||
                  r >= c.startTimestamp ||
                  ((t = u._measurements[e].value),
                  (n = Math.abs(1e3 * (r + t / 1e3 - c.startTimestamp))),
                  yn.log(
                    "[Measurements] Normalized " +
                      e +
                      " from " +
                      t +
                      " to " +
                      n +
                      " (" +
                      (n - t) +
                      ")"
                  ),
                  (u._measurements[e].value = n));
              }),
              this._measurements["mark.fid"] &&
                this._measurements.fid &&
                ho(c, {
                  description: "first input delay",
                  endTimestamp:
                    this._measurements["mark.fid"].value +
                    this._measurements.fid.value / 1e3,
                  op: "web.vitals",
                  startTimestamp: this._measurements["mark.fid"].value,
                }),
              "fcp" in this._measurements || delete this._measurements.cls,
              c.setMeasurements(this._measurements),
              this._tagMetricInfo(c));
        }
      }),
      (po.prototype._tagMetricInfo = function (n) {
        this._lcpEntry &&
          (yn.log("[Measurements] Adding LCP Data"),
          this._lcpEntry.element &&
            n.setTag("lcp.element", Wt(this._lcpEntry.element)),
          this._lcpEntry.id && n.setTag("lcp.id", this._lcpEntry.id),
          this._lcpEntry.url &&
            n.setTag("lcp.url", this._lcpEntry.url.trim().slice(0, 200)),
          n.setTag("lcp.size", this._lcpEntry.size)),
          this._clsEntry &&
            this._clsEntry.sources &&
            (yn.log("[Measurements] Adding CLS Data"),
            this._clsEntry.sources.forEach(function (e, t) {
              return n.setTag("cls.source." + (t + 1), Wt(e.node));
            }));
      }),
      (po.prototype._trackCLS = function () {
        var n = this;
        to(function (e) {
          var t = e.entries.pop();
          t &&
            (yn.log("[Measurements] Adding CLS"),
            (n._measurements.cls = { value: e.value }),
            (n._clsEntry = t));
        });
      }),
      (po.prototype._trackNavigator = function (e) {
        var t,
          n = uo.navigator;
        n &&
          ((t = n.connection) &&
            (t.effectiveType &&
              e.setTag("effectiveConnectionType", t.effectiveType),
            t.type && e.setTag("connectionType", t.type),
            mo(t.rtt) &&
              (this._measurements["connection.rtt"] = { value: t.rtt }),
            mo(t.downlink) &&
              (this._measurements["connection.downlink"] = {
                value: t.downlink,
              })),
          mo(n.deviceMemory) &&
            e.setTag("deviceMemory", String(n.deviceMemory)),
          mo(n.hardwareConcurrency) &&
            e.setTag("hardwareConcurrency", String(n.hardwareConcurrency)));
      }),
      (po.prototype._trackLCP = function () {
        var i = this;
        io(function (e) {
          var t,
            n,
            r = e.entries.pop();
          r &&
            ((t = er / 1e3),
            (n = r.startTime / 1e3),
            yn.log("[Measurements] Adding LCP"),
            (i._measurements.lcp = { value: e.value }),
            (i._measurements["mark.lcp"] = { value: t + n }),
            (i._lcpEntry = r));
        });
      }),
      (po.prototype._trackFID = function () {
        var r = this;
        ro(function (e) {
          var t,
            n = e.entries.pop();
          n &&
            ((t = er / 1e3),
            (n = n.startTime / 1e3),
            yn.log("[Measurements] Adding FID"),
            (r._measurements.fid = { value: e.value }),
            (r._measurements["mark.fid"] = { value: t + n }));
        });
      }),
      po);

  function po() {
    (this._measurements = {}),
      (this._performanceCursor = 0),
      !Zt() &&
        null !== uo &&
        void 0 !== uo &&
        uo.performance &&
        (uo.performance.mark && uo.performance.mark("sentry-tracing-init"),
        this._trackCLS(),
        this._trackLCP(),
        this._trackFID());
  }

  function fo(e) {
    var t = e.transaction,
      n = e.entry,
      r = e.event,
      i = e.timeOrigin,
      o = e.eventEnd,
      e = e.description,
      o = o ? n[o] : n[r + "End"],
      n = n[r + "Start"];
    n &&
      o &&
      ho(t, {
        op: "browser",
        description: null != e ? e : r,
        startTimestamp: i + n / 1e3,
        endTimestamp: i + o / 1e3,
      });
  }

  function ho(e, t) {
    var n = t.startTimestamp,
      t = Ct(t, ["startTimestamp"]);
    return (
      n && e.startTimestamp > n && (e.startTimestamp = n),
      e.startChild(It({ startTimestamp: n }, t))
    );
  }

  function mo(e) {
    return "number" == typeof e && isFinite(e);
  }

  var vo = {
    traceFetch: !0,
    traceXHR: !0,
    tracingOrigins: ["localhost", /^\//],
  };

  function yo(e) {
    function t(t) {
      if (a[t]) return a[t];
      var e = i;
      return (
        (a[t] =
          e.some(function (e) {
            return on(t, e);
          }) && !on(t, "sentry_key")),
        a[t]
      );
    }

    var n = It(It({}, vo), e),
      r = n.traceFetch,
      e = n.traceXHR,
      i = n.tracingOrigins,
      o = n.shouldCreateSpanForRequest,
      a = {},
      s = t;
    "function" == typeof o &&
      (s = function (e) {
        return t(e) && o(e);
      });
    var c = {};
    r &&
      qn({
        callback: function (e) {
          var t, n, r;
          (t = e),
            (n = s),
            (e = c),
            Ai() &&
              t.fetchData &&
              n(t.fetchData.url) &&
              (t.endTimestamp && t.fetchData.__span
                ? (r = e[t.fetchData.__span]) &&
                  (t.response
                    ? r.setHttpStatus(t.response.status)
                    : t.error && r.setStatus(Oi.InternalError),
                  r.finish(),
                  delete e[t.fetchData.__span])
                : (n = Ri()) &&
                  ((r = n.startChild({
                    data: It(It({}, t.fetchData), { type: "fetch" }),
                    description: t.fetchData.method + " " + t.fetchData.url,
                    op: "http.client",
                  })),
                  (t.fetchData.__span = r.spanId),
                  (e[r.spanId] = r),
                  (n = t.args[0] = t.args[0]),
                  (t = (e = t.args[1] = t.args[1] || {}).headers),
                  (t = zt(n, Request) ? n.headers : t)
                    ? "function" == typeof t.append
                      ? t.append("sentry-trace", r.toTraceparent())
                      : (t = Array.isArray(t)
                          ? Rt(t, [["sentry-trace", r.toTraceparent()]])
                          : It(It({}, t), {
                              "sentry-trace": r.toTraceparent(),
                            }))
                    : (t = { "sentry-trace": r.toTraceparent() }),
                  (e.headers = t)));
        },
        type: "fetch",
      }),
      e &&
        qn({
          callback: function (e) {
            !(function (e, t, n) {
              var r;
              if (
                Ai() &&
                (null === (r = e.xhr) ||
                  void 0 === r ||
                  !r.__sentry_own_request__) &&
                null !== (i = e.xhr) &&
                void 0 !== i &&
                i.__sentry_xhr__ &&
                t(e.xhr.__sentry_xhr__.url)
              ) {
                var i = e.xhr.__sentry_xhr__;
                if (e.endTimestamp && e.xhr.__sentry_xhr_span_id__)
                  (o = n[e.xhr.__sentry_xhr_span_id__]) &&
                    (o.setHttpStatus(i.status_code),
                    o.finish(),
                    delete n[e.xhr.__sentry_xhr_span_id__]);
                else {
                  t = Ri();
                  if (t) {
                    var o = t.startChild({
                      data: It(It({}, i.data), {
                        type: "xhr",
                        method: i.method,
                        url: i.url,
                      }),
                      description: i.method + " " + i.url,
                      op: "http.client",
                    });
                    if (
                      ((e.xhr.__sentry_xhr_span_id__ = o.spanId),
                      (n[e.xhr.__sentry_xhr_span_id__] = o),
                      e.xhr.setRequestHeader)
                    )
                      try {
                        e.xhr.setRequestHeader(
                          "sentry-trace",
                          o.toTraceparent()
                        );
                      } catch (e) {}
                  }
                }
              }
            })(e, s, c);
          },
          type: "xhr",
        });
  }

  var go = sn();
  var _o = It(
      {
        idleTimeout: 1e3,
        markBackgroundTransactions: !0,
        maxTransactionDuration: 600,
        routingInstrumentation: function (n, e, t) {
          var r, i;
          void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            go && go.location
              ? ((r = go.location.href),
                e &&
                  (i = n({
                    name: go.location.pathname,
                    op: "pageload",
                  })),
                t &&
                  qn({
                    callback: function (e) {
                      var t = e.to,
                        e = e.from;
                      void 0 === e && r && -1 !== r.indexOf(t)
                        ? (r = void 0)
                        : e !== t &&
                          ((r = void 0),
                          i &&
                            (yn.log(
                              "[Tracing] Finishing current transaction with op: " +
                                i.op
                            ),
                            i.finish()),
                          (i = n({
                            name: go.location.pathname,
                            op: "navigation",
                          })));
                    },
                    type: "history",
                  }))
              : yn.warn(
                  "Could not initialize routing instrumentation due to invalid location"
                );
        },
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
      },
      vo
    ),
    Kn =
      ((bo.prototype.setupOnce = function (e, t) {
        var n = this;
        (this._getCurrentHub = t),
          this._emitOptionsWarning &&
            (yn.warn(
              "[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."
            ),
            yn.warn(
              "[Tracing] We added a reasonable default for you: " +
                vo.tracingOrigins
            ));
        var r = this.options,
          i = r.routingInstrumentation,
          o = r.startTransactionOnLocationChange,
          a = r.startTransactionOnPageLoad,
          s = r.markBackgroundTransactions,
          c = r.traceFetch,
          u = r.traceXHR,
          t = r.tracingOrigins,
          r = r.shouldCreateSpanForRequest;
        i(
          function (e) {
            return n._createRouteTransaction(e);
          },
          a,
          o
        ),
          s &&
            ($i && $i.document
              ? $i.document.addEventListener("visibilitychange", function () {
                  var e = Ri();
                  $i.document.hidden &&
                    e &&
                    (yn.log(
                      "[Tracing] Transaction: " +
                        Oi.Cancelled +
                        " -> since tab moved to the background, op: " +
                        e.op
                    ),
                    e.status || e.setStatus(Oi.Cancelled),
                    e.setTag("visibilitychange", "document.hidden"),
                    e.finish());
                })
              : yn.warn(
                  "[Tracing] Could not set up background tab detection due to lack of global document"
                )),
          yo({
            traceFetch: c,
            traceXHR: u,
            tracingOrigins: t,
            shouldCreateSpanForRequest: r,
          });
      }),
      (bo.prototype._createRouteTransaction = function (e) {
        var i = this;
        if (this._getCurrentHub) {
          var t = this.options,
            n = t.beforeNavigate,
            r = t.idleTimeout,
            o = t.maxTransactionDuration,
            a =
              "pageload" === e.op
                ? (function () {
                    var e = (function (e) {
                      e = document.querySelector("meta[name=" + e + "]");
                      return e ? e.getAttribute("content") : null;
                    })("sentry-trace");
                    if (e)
                      return (function (e) {
                        var t = e.match(ji);
                        if (t) {
                          e = void 0;
                          return (
                            "1" === t[3] ? (e = !0) : "0" === t[3] && (e = !1),
                            {
                              traceId: t[1],
                              parentSampled: e,
                              parentSpanId: t[2],
                            }
                          );
                        }
                      })(e);
                    return;
                  })()
                : void 0,
            s = It(It(It({}, e), a), { trimEnd: !0 }),
            c = "function" == typeof n ? n(s) : s,
            t = void 0 === c ? It(It({}, s), { sampled: !1 }) : c;
          !1 === t.sampled &&
            yn.log(
              "[Tracing] Will not send " +
                t.op +
                " transaction because of beforeNavigate."
            ),
            yn.log("[Tracing] Starting " + t.op + " transaction on scope");
          var a = this._getCurrentHub(),
            n = sn().location,
            t =
              ((s = t),
              (c = r),
              (t = !0),
              (r = { location: n }),
              (a =
                (null === (a = (n = a).getClient()) || void 0 === a
                  ? void 0
                  : a.getOptions()) || {}),
              (t = Xi(
                (t = new Wi(s, n, c, t)),
                a,
                It(
                  {
                    parentSampled: s.parentSampled,
                    transactionContext: s,
                  },
                  r
                )
              )).sampled &&
                t.initSpanRecorder(
                  null === (a = a._experiments) || void 0 === a
                    ? void 0
                    : a.maxSpans
                ),
              t);
          return (
            t.registerBeforeFinishCallback(function (e, t) {
              var n, r;
              i._metrics.addPerformanceEntries(e),
                (n = 1e3 * o),
                (e = t - (r = e).startTimestamp),
                t &&
                  (n < e || e < 0) &&
                  (r.setStatus(Oi.DeadlineExceeded),
                  r.setTag("maxTransactionDurationExceeded", "true"));
            }),
            t
          );
        }
        yn.warn(
          "[Tracing] Did not create " +
            e.op +
            " transaction because _getCurrentHub is invalid."
        );
      }),
      (bo.id = "BrowserTracing"),
      bo);

  function bo(e) {
    (this.name = bo.id),
      (this._metrics = new lo()),
      (this._emitOptionsWarning = !1);
    var t = vo.tracingOrigins;
    e &&
    e.tracingOrigins &&
    Array.isArray(e.tracingOrigins) &&
    0 !== e.tracingOrigins.length
      ? (t = e.tracingOrigins)
      : (this._emitOptionsWarning = !0),
      (this.options = It(It(It({}, _o), e), { tracingOrigins: t }));
  }

  (wo.prototype.setupOnce = function () {
    this._router
      ? (function (n, e) {
          void 0 === e && (e = []);
          e.forEach(function (e) {
            return (
              (i = (t = n)[(r = e)]),
              (t[r] = function () {
                for (var t, e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                return i.call.apply(
                  i,
                  Rt(
                    [this],
                    ((t = r),
                    e.map(function (e) {
                      return "function" == typeof e
                        ? So(e, t)
                        : Array.isArray(e)
                        ? e.map(function (e) {
                            return "function" == typeof e ? So(e, t) : e;
                          })
                        : e;
                    }))
                  )
                );
              }),
              t
            );
            var t, r, i;
          });
        })(this._router, this._methods)
      : yn.error("ExpressIntegration is missing an Express instance");
  }),
    (wo.id = "Express"),
    (o = wo);

  function wo(e) {
    void 0 === e && (e = {}),
      (this.name = wo.id),
      (this._router = e.router || e.app),
      (this._methods = (Array.isArray(e.methods) ? e.methods : []).concat(
        "use"
      ));
  }

  function So(a, s) {
    var e = a.length;
    switch (e) {
      case 2:
        return function (e, t) {
          var n,
            r = t.__sentry_transaction;
          return (
            r &&
              ((n = r.startChild({
                description: a.name,
                op: "middleware." + s,
              })),
              t.once("finish", function () {
                n.finish();
              })),
            a.call(this, e, t)
          );
        };
      case 3:
        return function (e, t, n) {
          var r = t.__sentry_transaction,
            i =
              null === r || void 0 === r
                ? void 0
                : r.startChild({ description: a.name, op: "middleware." + s });
          a.call(this, e, t, function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            null !== i && void 0 !== i && i.finish(),
              n.call.apply(n, Rt([this], e));
          });
        };
      case 4:
        return function (e, t, n, r) {
          var i = n.__sentry_transaction,
            o =
              null === i || void 0 === i
                ? void 0
                : i.startChild({ description: a.name, op: "middleware." + s });
          a.call(this, e, t, n, function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            null !== o && void 0 !== o && o.finish(),
              r.call.apply(r, Rt([this], e));
          });
        };
      default:
        throw new Error("Express middleware takes 2-4 arguments. Got: " + e);
    }
  }

  (Eo.prototype.setupOnce = function (e, a) {
    var t = tn("pg");
    t
      ? En(t.Client.prototype, "query", function (o) {
          return function (e, n, r) {
            var t = a().getScope(),
              t = null === t || void 0 === t ? void 0 : t.getSpan(),
              i =
                null === t || void 0 === t
                  ? void 0
                  : t.startChild({
                      description: "string" == typeof e ? e : e.text,
                      op: "db",
                    });
            if ("function" == typeof r)
              return o.call(this, e, n, function (e, t) {
                null !== i && void 0 !== i && i.finish(), r(e, t);
              });
            if ("function" == typeof n)
              return o.call(this, e, function (e, t) {
                null !== i && void 0 !== i && i.finish(), n(e, t);
              });
            e = void 0 !== n ? o.call(this, e, n) : o.call(this, e);
            return Ht(e)
              ? e.then(function (e) {
                  return null !== i && void 0 !== i && i.finish(), e;
                })
              : (null !== i && void 0 !== i && i.finish(), e);
          };
        })
      : yn.error("Postgres Integration was unable to require `pg` package.");
  }),
    (Eo.id = "Postgres"),
    (Pe = Eo);

  function Eo() {
    this.name = Eo.id;
  }

  (xo.prototype.setupOnce = function (e, a) {
    var t = tn("mysql/lib/Connection.js");
    t
      ? En(t, "createQuery", function (n) {
          return function (e, r, i) {
            var t = a().getScope(),
              t = null === t || void 0 === t ? void 0 : t.getSpan(),
              o =
                null === t || void 0 === t
                  ? void 0
                  : t.startChild({
                      description: "string" == typeof e ? e : e.sql,
                      op: "db",
                    });
            return "function" == typeof i
              ? n.call(this, e, r, function (e, t, n) {
                  null !== o && void 0 !== o && o.finish(), i(e, t, n);
                })
              : "function" == typeof r
              ? n.call(this, e, function (e, t, n) {
                  null !== o && void 0 !== o && o.finish(), r(e, t, n);
                })
              : n.call(this, e, r, i);
          };
        })
      : yn.error("Mysql Integration was unable to require `mysql` package.");
  }),
    (xo.id = "Mysql"),
    (x = xo);

  function xo() {
    this.name = xo.id;
  }

  var ko = [
      "aggregate",
      "bulkWrite",
      "countDocuments",
      "createIndex",
      "createIndexes",
      "deleteMany",
      "deleteOne",
      "distinct",
      "drop",
      "dropIndex",
      "dropIndexes",
      "estimatedDocumentCount",
      "find",
      "findOne",
      "findOneAndDelete",
      "findOneAndReplace",
      "findOneAndUpdate",
      "indexes",
      "indexExists",
      "indexInformation",
      "initializeOrderedBulkOp",
      "insertMany",
      "insertOne",
      "isCapped",
      "mapReduce",
      "options",
      "parallelCollectionScan",
      "rename",
      "replaceOne",
      "stats",
      "updateMany",
      "updateOne",
    ],
    Oo = {
      bulkWrite: ["operations"],
      countDocuments: ["query"],
      createIndex: ["fieldOrSpec"],
      createIndexes: ["indexSpecs"],
      deleteMany: ["filter"],
      deleteOne: ["filter"],
      distinct: ["key", "query"],
      dropIndex: ["indexName"],
      find: ["query"],
      findOne: ["query"],
      findOneAndDelete: ["filter"],
      findOneAndReplace: ["filter", "replacement"],
      findOneAndUpdate: ["filter", "update"],
      indexExists: ["indexes"],
      insertMany: ["docs"],
      insertOne: ["doc"],
      mapReduce: ["map", "reduce"],
      rename: ["newName"],
      replaceOne: ["filter", "doc"],
      updateMany: ["filter", "update"],
      updateOne: ["filter", "update"],
    },
    R =
      ((To.prototype.setupOnce = function (e, t) {
        var n = this._useMongoose ? "mongoose" : "mongodb",
          r = tn(n);
        r
          ? this._instrumentOperations(r.Collection, this._operations, t)
          : yn.error(
              "Mongo Integration was unable to require `" + n + "` package."
            );
      }),
      (To.prototype._instrumentOperations = function (t, e, n) {
        var r = this;
        e.forEach(function (e) {
          return r._patchOperation(t, e, n);
        });
      }),
      (To.prototype._patchOperation = function (e, c, u) {
        var l;
        c in e.prototype &&
          ((l = this._getSpanContextFromOperationArguments.bind(this)),
          En(e.prototype, c, function (s) {
            return function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var n = e[e.length - 1],
                r = u().getScope(),
                i = null === r || void 0 === r ? void 0 : r.getSpan();
              if (
                "function" != typeof n ||
                ("mapReduce" === c && 2 === e.length)
              ) {
                var o =
                    null === i || void 0 === i
                      ? void 0
                      : i.startChild(l(this, c, e)),
                  r = s.call.apply(s, Rt([this], e));
                return Ht(r)
                  ? r.then(function (e) {
                      return null !== o && void 0 !== o && o.finish(), e;
                    })
                  : (null !== o && void 0 !== o && o.finish(), r);
              }
              var a =
                null === i || void 0 === i
                  ? void 0
                  : i.startChild(l(this, c, e.slice(0, -1)));
              return s.call.apply(
                s,
                Rt([this], e.slice(0, -1), [
                  function (e, t) {
                    null !== a && void 0 !== a && a.finish(), n(e, t);
                  },
                ])
              );
            };
          }));
      }),
      (To.prototype._getSpanContextFromOperationArguments = function (e, t, n) {
        var r = {
            collectionName: e.collectionName,
            dbName: e.dbName,
            namespace: e.namespace,
          },
          i = { op: "db", description: t, data: r },
          o = Oo[t],
          e = Array.isArray(this._describeOperations)
            ? this._describeOperations.includes(t)
            : this._describeOperations;
        if (!o || !e) return i;
        try {
          if ("mapReduce" === t) {
            var a = At(n, 2),
              s = a[0],
              c = a[1];
            (r[o[0]] = "string" == typeof s ? s : s.name || "<anonymous>"),
              (r[o[1]] = "string" == typeof c ? c : c.name || "<anonymous>");
          } else
            for (var u = 0; u < o.length; u++) r[o[u]] = JSON.stringify(n[u]);
        } catch (e) {}
        return i;
      }),
      (To.id = "Mongo"),
      To);

  function To(e) {
    void 0 === e && (e = {}),
      (this.name = To.id),
      (this._operations = Array.isArray(e.operations) ? e.operations : ko),
      (this._describeOperations =
        !("describeOperations" in e) || e.describeOperations),
      (this._useMongoose = !!e.useMongoose);
  }

  var Io,
    Co,
    jo,
    Ao = It(
      It(
        {},
        Object.freeze({
          __proto__: null,
          Express: o,
          Postgres: Pe,
          Mysql: x,
          Mongo: R,
        })
      ),
      { BrowserTracing: Kn }
    );
  (Co = lr()).__SENTRY__ &&
    ((Co.__SENTRY__.extensions = Co.__SENTRY__.extensions || {}),
    Co.__SENTRY__.extensions.startTransaction ||
      (Co.__SENTRY__.extensions.startTransaction = Ki),
    Co.__SENTRY__.extensions.traceHeaders ||
      (Co.__SENTRY__.extensions.traceHeaders = Ji)),
    Zt() &&
      (jo = lr()).__SENTRY__ &&
      ((Io = {
        mongodb: function () {
          return new (en(module, "./integrations/mongo").Mongo)();
        },
        mongoose: function () {
          return new (en(module, "./integrations/mongo").Mongo)({
            mongoose: !0,
          });
        },
        mysql: function () {
          return new (en(module, "./integrations/mysql").Mysql)();
        },
        pg: function () {
          return new (en(module, "./integrations/postgres").Postgres)();
        },
      }),
      0 <
        (Co = Object.keys(Io)
          .filter(function (e) {
            return !!tn(e);
          })
          .map(function (e) {
            try {
              return Io[e]();
            } catch (e) {
              return;
            }
          })
          .filter(function (e) {
            return e;
          })).length &&
        (jo.__SENTRY__.integrations = Rt(
          jo.__SENTRY__.integrations || [],
          Co
        ))),
    qn({
      callback: Di,
      type: "error",
    }),
    qn({ callback: Di, type: "unhandledrejection" });

  function Ro(e, t) {
    var n = t.originalException;
    if (n && "string" != typeof n) {
      t = n.stack;
      if (Po.test(void 0 === t ? "" : t)) return null;
    } else if ("string" == typeof n && Po.test(n)) return null;
    return e;
  }

  var Do = [
      /extensions\//i,
      /^chrome:\/\//i,
      /safari-extension/,
      /safari-web-extension/,
      /moz-extension/,
      /chrome-extension/,
      /data:application/,
      /file:\/\/\//,
      /127\.0\.0\.1:4001\/isrunning/i,
      /webappstoolbarba\.texthelp\.com\//i,
      /metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
      /translate\.goog/,
      /googletagservices/,
      /moatads/,
      /adtech/,
      /contextual\.media\.net/,
      /platform\.iteratehq\.com/,
      /chartbeat/,
      /flashtalking/,
      /doubleverify/,
      /google-analytics/,
      /3lift/,
      /celtra/,
      /4everproxy/,
      /hideproxy/,
      /proxysite/,
      /us-proxy/,
      /geoedge/,
      /grumi-ip/,
    ],
    Po = new RegExp(
      [
        "amazon-adsystem",
        "ads-us",
        "amp4ads",
        "pubads",
        "2mdn",
        "ampproject",
        "chartbeat",
        "gsi",
        "bk_addPageCtx",
        "yimg",
        "BOOMR",
        "boomerang",
        "gtm",
        "google_tag_manager",
        "scorecardresearch",
        "safari-extension",
        "moz-extension",
        "chrome-extension",
        "bad req",
        "No Internet",
        "No root config found",
      ].join("|")
    ),
    No = (function () {
      window.hybridDebug = window.hybridDebug || [];
      return function (e, t, n) {
        30 < window.hybridDebug.length && window.hybridDebug.pop(),
          window.hybridDebug.unshift({
            message: e,
            args: t,
            response: n,
          });
      };
    })();

  function Lo(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }

  function qo(r) {
    var e;
    return (
      Lo((e = {}), Uo, function (e, t) {
        return r(Uo, { eventName: e, options: t || {} });
      }),
      Lo(e, Fo, function (e) {
        return r(Fo, { value: e });
      }),
      Lo(e, Bo, function (e) {
        return r(Bo, { type: e });
      }),
      Lo(e, Ho, function () {
        return r(Ho);
      }),
      Lo(e, zo, function () {
        return r(zo);
      }),
      Lo(e, Wo, function () {
        return r(Wo);
      }),
      Lo(e, Yo, function () {
        return r(Yo);
      }),
      Lo(e, Vo, function (e) {
        var t = e.type,
          e = e.debugInfo;
        return r(Vo, { type: t, debugInfo: e });
      }),
      Lo(e, Go, function (e, t, n) {
        return r(Go, { url: e, text: t, title: n });
      }),
      e
    );
  }

  function Mo() {
    return "ios" === window.newsreaderAppPlatform;
  }

  var Uo = "sendAnalytic",
    Fo = "setPullToRefreshEnabled",
    Bo = "gamesAuthenticateUser",
    Ho = "gamesBackToHub",
    zo = "gamesCacheRefresh",
    Wo = "gamesGetUserDetails",
    Yo = "gamesInitializeState",
    Vo = "gamesSendEmail",
    Go = "share",
    Jo = [Uo, Fo, Bo, Ho, zo, Wo, Yo, Vo, Go],
    Xo = function (e) {
      No("No android-specific tasks defined");
    },
    Ko = function () {
      return (
        ("android" === window.gamesAppPlatform ||
          "android" === window.newsreaderAppPlatform) &&
        window.isHybridWebView
      );
    },
    $o = function () {
      return (
        ("ios" === window.gamesAppPlatform || Mo()) && window.isHybridWebView
      );
    },
    Qo = function (e) {
      Mo() && e.setPullToRefreshEnabled(!1);
    },
    Zo = function () {
      var e =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : window,
        t = 1 < arguments.length ? arguments[1] : void 0;
      !(function () {
        (0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : window
        ).asset = { uri: "fakeAssetUri" };
      })(e),
        (function () {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : window,
            e = 1 < arguments.length ? arguments[1] : void 0;
          (t.navigator.native = { bridgeCommands: {} }),
            e.forEach(function (e) {
              t.navigator.native.bridgeCommands[e] = { enabled: !0 };
            });
        })(e, t);
      var e = (function () {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : window,
            e = a.initNativeBridge(e, !0);
          return {
            NativeBridge: e,
            callNativeBridgeCommand: e.callNativeBridgeCommand,
          };
        })(e),
        n = e.NativeBridge,
        o = e.callNativeBridgeCommand,
        r = qo(function (e) {
          for (
            var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var i = o.apply(void 0, [e].concat(n));
          return No("Executing native bridge command: ".concat(e), n, i), i;
        });
      return (
        t.forEach(function (e) {
          n[e] = r[e];
        }),
        n
      );
    };

  function ea(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }

  function ta(r) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ea(Object(i), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = i[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
        : ea(Object(i)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
          });
    }
    return r;
  }

  var na = {
      isUserLoggedIn: !0,
      isSubscribed: !0,
      nytsCookie: "",
      regiID: 131999385,
    },
    ra = { success: !0 },
    ia = ta(ta({}, ra), {}, { values: { gamesAuthenticateUser: ta({}, na) } }),
    oa = ta(
      ta({}, ra),
      {},
      { values: { gamesInitializeState: { isReturningFromBackground: !1 } } }
    ),
    aa = function (e) {
      var t = {
          NativeBridge: {},
          callNativeBridgeCommand: function (e) {
            for (
              var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            switch (
              (console.log(
                "[NATIVE BRIDGE MOCK]: ".concat(e, " called by web app"),
                n
              ),
              e)
            ) {
              case Yo:
                return (
                  console.log(
                    "[NATIVE BRIDGE MOCK]: ".concat(e, " responded with"),
                    oa
                  ),
                  Promise.resolve(oa)
                );
              case Wo:
              case Bo:
                return (
                  console.log(
                    "[NATIVE BRIDGE MOCK]: ".concat(e, " responded with"),
                    ia
                  ),
                  Promise.resolve(ia)
                );
              default:
                return (
                  console.log(
                    "[NATIVE BRIDGE MOCK]: ".concat(e, " responded with"),
                    ra
                  ),
                  Promise.resolve(ra)
                );
            }
          },
        },
        n = t.NativeBridge,
        r = qo(t.callNativeBridgeCommand);
      return (
        e.forEach(function (e) {
          n[e] = r[e];
        }),
        n
      );
    };

  function sa(e) {
    return p.abra.tests[e];
  }

  var ca = {},
    ua = {
      init: function () {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : p.abra.config;
        e &&
          ((t = p.Abra(
            e,
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            2 < arguments.length ? arguments[2] : void 0
          )),
          (p.abra.getVariant = t),
          (p.abra.tests = {}),
          Object.keys(e).forEach(function (e) {
            p.abra.tests[e] = t(e);
          }));
      },
      getTests: function () {
        return p.abra.tests;
      },
      getVariant: sa,
      reset: function () {
        ca = {};
      },
      reportExposure: function (e) {
        ca[e] ||
          ((ca[e] = !0),
          (p.dataLayer = p.dataLayer || []),
          p.dataLayer.push({
            event: "ab-expose",
            abtest: { test: e, variant: sa(e) || "0" },
          }));
      },
    };

  function la(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }

  function pa(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? la(Object(n), !0).forEach(function (e) {
            da(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : la(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }

  function da(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }

  var fa, ha, ma, va, ya, ga, _a, ba;
  !(function () {
    var e =
      0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window;
    if (
      (function (e) {
        var t,
          e = 0 < arguments.length && void 0 !== e ? e : document;
        return (
          -1 !==
          (
            (null == e || null === (t = e.location) || void 0 === t
              ? void 0
              : t.search.toLowerCase()) || ""
          ).indexOf("bridge=mock")
        );
      })()
    )
      !(function (e) {
        var t = 0 < arguments.length && void 0 !== e ? e : window,
          e = aa(Jo);
        (t.hybridConfig = {
          OS: "Mock OS",
          AbraConfig: {},
          userInfo: ta(ta({}, na), {}, { agentID: "mock-agent-id" }),
        }),
          (e.addEventListener = function (e, t, n) {
            new EventTarget().addEventListener(e, t, n);
          }),
          (e.removeEventListener = function (e, t, n) {
            new EventTarget().removeEventListener(e, t, n);
          }),
          Ko()
            ? Xo()
            : $o()
            ? Qo(e)
            : console.log(
                "[NATIVE BRIDGE MOCK]: Platform is neither android nor ios",
                t.newsreaderAppPlatform,
                t.gamesAppPlatform
              ),
          (t.NativeBridge = e);
      })(e);
    else if (Ko() || $o()) {
      No("Initializing native bridge");
      try {
        !(function (e) {
          var t = 0 < arguments.length && void 0 !== e ? e : window,
            e = Zo(t, Jo);
          Ko()
            ? Xo()
            : $o()
            ? Qo(e)
            : No("Platform is neither android nor ios", [
                t.newsreaderAppPlatform,
                t.gamesAppPlatform,
              ]),
            (t.NativeBridge = e);
        })(e);
      } catch (e) {
        No("Failed to initialize native bridge", [e]);
      }
    } else No("Neither mock nor native bridge initialized");
  })(),
    De(),
    (fa = p.sentryConfig),
    (ha = fa.dsn),
    (ma = fa.release),
    (va = fa.sampleRate),
    (ya = fa.environment),
    (fa = new URL(window.location.href).searchParams.get("sentryOverride")),
    ("prod" !== ya && !fa) ||
      (((ya = {
        dsn: ha,
        release: ma,
        sampleRate: fa ? 1 : va,
        maxBreadcrumbs: 30,
        environment: ya,
        beforeSend: Ro,
        denyUrls: Do,
        integrations: [new Ao.BrowserTracing()],
      })._metadata = ya._metadata || {}),
      (ya._metadata.sdk = ya._metadata.sdk || {
        name: "sentry.javascript.react",
        packages: [{ name: "npm:@sentry/react", version: Dr }],
        version: Dr,
      }),
      Ci(ya),
      vr("setUser", { id: P }),
      gr("userType", V),
      gr("hybrid", {
        isHybridWebView: window.isHybridWebView,
        newsreaderAppPlatform: window.newsreaderAppPlatform,
        gamesAppPlatform: window.gamesAppPlatform,
        isPlayTab: window.isPlayTab,
      }),
      window.isHybridWebView && vr("setTag", "hybrid", !0),
      window.addEventListener("offline", function () {
        vr("addBreadcrumb", {
          message: "The user has gone offline",
          level: "warning",
        });
      })),
    "ontouchstart" in p ||
      p.DocumentTouch ||
      y(d.documentElement, "pz-dont-touch"),
    p.isHybridWebView ||
      "wordle" === p.pageName ||
      (Y.initialize(), de.initialize()),
    (function () {
      var e, r, n, i, o, a, s, c, t;
      (e = Xe(document.querySelectorAll(".js-nav-tracker"))),
        (t = (t = w(C("nav-profile"))) ? Xe(t.querySelectorAll("a")) : []),
        (t = [].concat(Xe(e), Xe(t))),
        (r = S()),
        t.forEach(function (e) {
          var t,
            n =
              (null == e || null === (t = e.dataset) || void 0 === t
                ? void 0
                : t.trackLabel) || "";
          n &&
            e.addEventListener("click", function () {
              Me({ name: r, label: n, useBeacon: !0, context: null });
            });
        }),
        (t = w(C("hybrid-back"))) &&
          window.isHybridWebView &&
          window.NativeBridge &&
          b(t, "click", function () {
            var e;
            null !== (e = window.NativeBridge) &&
              void 0 !== e &&
              e.gamesBackToHub();
          }),
        window.isHybridWebView &&
          window.NativeBridge &&
          ((n = document.querySelectorAll(".".concat(C("nav-login")))),
          (i = document.querySelectorAll(".".concat(C("nav-logout")))),
          (o = document.querySelectorAll(".".concat(C("nav-subscribe")))),
          (a = document.querySelectorAll(".".concat(C("nav-account-details")))),
          (s = function (e) {
            return e.forEach(function (e) {
              y(e, "hybrid-hidden");
            });
          }),
          (c = function (e) {
            var t = e.isUserLoggedIn,
              e = e.isSubscribed;
            t ? s(n) : (s(i), s(a)), e && s(o);
          }),
          window.NativeBridge.gamesGetUserDetails()
            .then(function (e) {
              if (!e.success) throw new Error(e.error);
              c(e.values.gamesGetUserDetails);
            })
            .catch(function (e) {
              console.error("Getting user details failed", e), s(i), s(a);
            }),
          b(window, "gamesUserCredentialChanged", function (e) {
            var t, n;
            c(
              null == e ||
                null === (t = e.detail) ||
                void 0 === t ||
                null === (n = t.values) ||
                void 0 === n
                ? void 0
                : n.gamesAuthenticateUser
            );
          }),
          (t = function (e, t) {
            e.forEach(function (e) {
              b(e, "click", function (e) {
                e.preventDefault(),
                  null !== (e = window.NativeBridge) &&
                    void 0 !== e &&
                    e.gamesAuthenticateUser(t).then(function (e) {
                      if (!e.success) throw new Error(e.error);
                      window.dispatchEvent(
                        new CustomEvent("gamesUserCredentialChanged", {
                          detail: e,
                        })
                      );
                    });
              });
            });
          })(o, "subscribe"),
          t(n, "login")),
        setTimeout(function () {
          Xe(document.querySelectorAll(".js-hub-tracker")).forEach(function (
            e
          ) {
            var t = e.dataset.trackHub,
              n = e.dataset.trackHubContext || null;
            e.addEventListener(
              "click",
              function () {
                Je(t, n);
              },
              !0
            );
          });
        }, 0);
      var u,
        l,
        p = !1,
        d = -1,
        f = w(C("nav-burger")),
        h = w(C("nav-drawer"));

      function m() {
        (p = !0),
          f &&
            h &&
            (y(h, "open"),
            y(f, "active"),
            Me({
              name: S(),
              label: "click-nav",
              context: null,
            }),
            _(f, "aria-expanded", p.toString()),
            _(h, "aria-hidden", (!p).toString()));
      }

      function v() {
        (p = !1),
          f &&
            h &&
            (g(h, "open"),
            y(h, "closing"),
            setTimeout(function () {
              g(h, "closing");
            }, 500),
            g(f, "active"),
            _(f, "aria-expanded", p.toString()),
            _(h, "aria-hidden", (!p).toString()));
      }

      f &&
        h &&
        ((u = [].concat(
          Xe(h.querySelectorAll(".pz-nav-drawer__link")),
          Xe(h.querySelectorAll(".pz-nav__button"))
        )),
        (l = u.map(function (e) {
          e = e.textContent;
          return e && e[0] ? e[0].toUpperCase() : "";
        })),
        b(f, "click", function () {
          (p ? v : m)(), f.blur();
        }),
        b(f, "keydown", function (e) {
          var t = e.key,
            n = e.keyCode;
          if ("Escape" !== t && "Esc" !== t) {
            if ("Enter" !== t && "Space" !== t && 32 !== n)
              return "ArrowDown" === t
                ? (e.preventDefault(), m(), void u[(d = 0)].focus())
                : void (
                    "ArrowUp" === t &&
                    (e.preventDefault(), m(), (d = u.length - 1), u[d].focus())
                  );
            p ? v() : (m(), u[(d = 0)].focus());
          } else v();
        }),
        b(h, "keydown", function (e) {
          var t = e.key,
            n = e.keyCode,
            r = e.shiftKey;
          return "Escape" === t || "Esc" === t
            ? (v(), void f.focus())
            : "ArrowDown" === t || "ArrowRight" === t || ("Tab" === t && !r)
            ? (e.preventDefault(),
              d === u.length - 1 ? (d = 0) : (d += 1),
              void u[d].focus())
            : "ArrowUp" === t || "ArrowLeft" === t || ("Tab" === t && r)
            ? (e.preventDefault(),
              0 === d ? (d = u.length - 1) : --d,
              void u[d].focus())
            : void (
                65 <= n &&
                n <= 90 &&
                0 <=
                  (e = l.findIndex(function (e, t) {
                    return e === String.fromCharCode(n) && t !== d;
                  })) &&
                u[(d = e)].focus()
              );
        }),
        w(C("logo-nav")).addEventListener("click", function () {
          var e = {
            eventData: { pagetype: "game", trigger: "module", type: "click" },
            module: {
              name: "click",
              context: "",
              element: { name: window.location.href, label: "games-logo" },
            },
          };
          Le("moduleInteraction", e);
        }));
    })(),
    (ba = w(C("feedback-link"))) &&
      (ze().then(function (e) {
        ba.setAttribute("href", e);
      }),
      (ga = Ue(document.querySelectorAll(".".concat(C("footer-tracking"))))),
      (_a = S()),
      ga.forEach(function (e) {
        var t,
          n,
          r,
          i =
            (null == e || null === (t = e.dataset) || void 0 === t
              ? void 0
              : t.trackLabel) || "",
          o =
            null == e || null === (n = e.dataset) || void 0 === n
              ? void 0
              : n.medium,
          a =
            null == e || null === (r = e.dataset) || void 0 === r
              ? void 0
              : r.source;
        i &&
          e.addEventListener("click", function (e) {
            Me({
              name: _a,
              label: i,
              useBeacon: !0,
              context: null,
              medium: o,
              source: a,
            });
          });
      })),
    "wordle" !== p.pageName &&
      !i.isMobile &&
      (/iPad/.test(pe.platform) ||
        ("MacIntel" === pe.platform && 1 < pe.maxTouchPoints)) &&
      ((d.cookie = "inferredIpad=true;domain=nytimes.com;"),
      p.location.reload()),
    p.false || ((null == V ? void 0 : V.inShortzMode) && N)
      ? (p.dataLayer = [])
      : (le &&
          le.loadScripts &&
          le.loadScripts({
            pageType: "games",
            section: "crosswords",
          }),
        p.addEventListener("load", function () {
          _t(), Z(p.adUnitPath || "default", ua.getTests()), Ae();
        }));
  (e.abra = ua),
    (e.agentIdCookie = P),
    (e.appendSupportedParams = function (t, e) {
      return j.some(function (e) {
        return t.startsWith(e);
      })
        ? t
        : "".concat(t).concat(e);
    }),
    (e.captureSentryError = function (e) {
      var n =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      _r(function (t) {
        Object.keys(n).forEach(function (e) {
          t.setTag(e, n[e]);
        }),
          yr(e);
      });
    }),
    (e.ccpa = _t),
    (e.device = de),
    (e.env = h),
    (e.featureFlags = v),
    (e.getFeedbackLink = ze),
    (e.getGameData = function () {
      return p.gameData;
    }),
    (e.getQueryParams = T),
    (e.globalNavId = nt),
    (e.jsHook = C),
    (e.mobileNavTools = m),
    (e.mobileToolbarId = rt),
    (e.nytCookie = D),
    (e.parsePurrCookieValue = function () {
      var e,
        t,
        s = (t =
          -1 < document.cookie.indexOf("nyt-purr")
            ? null ===
                (e = document.cookie.split("; ").find(function (e) {
                  return e.startsWith("nyt-purr=");
                })) || void 0 === e
              ? void 0
              : e.split("=")[1]
            : t);
      return Object.keys(window.purrDirectiveFormat).reduce(
        function (t, n) {
          var r,
            e,
            i,
            o = window.purrDirectiveFormat[n];
          try {
            var a =
              ((e = window.location.search.substring(1).split("&")),
              (i = {}),
              e.forEach(function (e) {
                (r = e.split("=")),
                  (i[decodeURIComponent(r[0])] = decodeURIComponent(
                    r[1] || ""
                  ));
              }),
              i)[o.queryParam] || o.values[s[o.index]];
            return pa(pa({}, t), {}, da({}, n, a));
          } catch (e) {
            return pa(pa({}, t), {}, da({}, n, o.default));
          }
        },
        {
          PURR_DataSaleOptOutUI_v2: "hide",
          PURR_CaliforniaNoticesUI: "hide",
          PURR_AdConfiguration_v3: "full",
        }
      );
    }),
    (e.refreshAds = function () {
      le.cmd.push(function () {
        le.refreshAds();
      });
    }),
    (e.reportWebVitals = De),
    (e.setSentryData = function (e, t) {
      e && t && gr(e, t);
    }),
    (e.showToolbarClass = it),
    (e.track = Le),
    (e.trackClick = Me),
    (e.trackImpression = function (e, t, n, r) {
      Le("impression", {
        module: { name: e, context: r, region: t || "", label: n || void 0 },
      });
    }),
    (e.trackModuleInteraction = function (e, t, n, r, i, o) {
      o = {
        module: Te(
          {
            name: e,
            context: t,
            element: {
              name: n || "",
              label: "string" == typeof r ? r : JSON.stringify(r),
            },
          },
          i && { label: i }
        ),
        eventData: {
          pageType: "game",
          type: o ? "ob_click" : "click",
          trigger: "module",
          status: "",
        },
      };
      Le("moduleInteraction", o);
    }),
    (e.user = Y),
    (e.userType = V),
    (e.xhr = W),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=foundation.js.map
