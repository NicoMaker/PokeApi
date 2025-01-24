function Bm(r, o) {
  for (var l = 0; l < o.length; l++) {
    const a = o[l];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const u in a)
        if (u !== "default" && !(u in r)) {
          const f = Object.getOwnPropertyDescriptor(a, u);
          f &&
            Object.defineProperty(
              r,
              u,
              f.get ? f : { enumerable: !0, get: () => a[u] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const f of u)
      if (f.type === "childList")
        for (const p of f.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && a(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(u) {
    const f = {};
    return (
      u.integrity && (f.integrity = u.integrity),
      u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const f = l(u);
    fetch(u.href, f);
  }
})();
function Mm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var ya = { exports: {} },
  go = {},
  va = { exports: {} },
  ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed;
function Um() {
  if (ed) return ue;
  ed = 1;
  var r = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function O(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (k && x[k]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    _ = {};
  function N(x, F, ae) {
    (this.props = x),
      (this.context = F),
      (this.refs = _),
      (this.updater = ae || I);
  }
  (N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (x, F) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, F, "setState");
    }),
    (N.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function M() {}
  M.prototype = N.prototype;
  function K(x, F, ae) {
    (this.props = x),
      (this.context = F),
      (this.refs = _),
      (this.updater = ae || I);
  }
  var B = (K.prototype = new M());
  (B.constructor = K), R(B, N.prototype), (B.isPureReactComponent = !0);
  var U = Array.isArray,
    H = Object.prototype.hasOwnProperty,
    G = { current: null },
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function fe(x, F, ae) {
    var ce,
      pe = {},
      he = null,
      Ee = null;
    if (F != null)
      for (ce in (F.ref !== void 0 && (Ee = F.ref),
      F.key !== void 0 && (he = "" + F.key),
      F))
        H.call(F, ce) && !W.hasOwnProperty(ce) && (pe[ce] = F[ce]);
    var we = arguments.length - 2;
    if (we === 1) pe.children = ae;
    else if (1 < we) {
      for (var Ae = Array(we), gt = 0; gt < we; gt++)
        Ae[gt] = arguments[gt + 2];
      pe.children = Ae;
    }
    if (x && x.defaultProps)
      for (ce in ((we = x.defaultProps), we))
        pe[ce] === void 0 && (pe[ce] = we[ce]);
    return {
      $$typeof: r,
      type: x,
      key: he,
      ref: Ee,
      props: pe,
      _owner: G.current,
    };
  }
  function ve(x, F) {
    return {
      $$typeof: r,
      type: x.type,
      key: F,
      ref: x.ref,
      props: x.props,
      _owner: x._owner,
    };
  }
  function m(x) {
    return typeof x == "object" && x !== null && x.$$typeof === r;
  }
  function X(x) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (ae) {
        return F[ae];
      })
    );
  }
  var re = /\/+/g;
  function le(x, F) {
    return typeof x == "object" && x !== null && x.key != null
      ? X("" + x.key)
      : F.toString(36);
  }
  function ke(x, F, ae, ce, pe) {
    var he = typeof x;
    (he === "undefined" || he === "boolean") && (x = null);
    var Ee = !1;
    if (x === null) Ee = !0;
    else
      switch (he) {
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case r:
            case o:
              Ee = !0;
          }
      }
    if (Ee)
      return (
        (Ee = x),
        (pe = pe(Ee)),
        (x = ce === "" ? "." + le(Ee, 0) : ce),
        U(pe)
          ? ((ae = ""),
            x != null && (ae = x.replace(re, "$&/") + "/"),
            ke(pe, F, ae, "", function (gt) {
              return gt;
            }))
          : pe != null &&
            (m(pe) &&
              (pe = ve(
                pe,
                ae +
                  (!pe.key || (Ee && Ee.key === pe.key)
                    ? ""
                    : ("" + pe.key).replace(re, "$&/") + "/") +
                  x
              )),
            F.push(pe)),
        1
      );
    if (((Ee = 0), (ce = ce === "" ? "." : ce + ":"), U(x)))
      for (var we = 0; we < x.length; we++) {
        he = x[we];
        var Ae = ce + le(he, we);
        Ee += ke(he, F, ae, Ae, pe);
      }
    else if (((Ae = O(x)), typeof Ae == "function"))
      for (x = Ae.call(x), we = 0; !(he = x.next()).done; )
        (he = he.value),
          (Ae = ce + le(he, we++)),
          (Ee += ke(he, F, ae, Ae, pe));
    else if (he === "object")
      throw (
        ((F = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (F === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : F) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return Ee;
  }
  function $e(x, F, ae) {
    if (x == null) return x;
    var ce = [],
      pe = 0;
    return (
      ke(x, ce, "", "", function (he) {
        return F.call(ae, he, pe++);
      }),
      ce
    );
  }
  function be(x) {
    if (x._status === -1) {
      var F = x._result;
      (F = F()),
        F.then(
          function (ae) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = ae));
          },
          function (ae) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = ae));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = F));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var Pe = { current: null },
    b = { transition: null },
    ne = {
      ReactCurrentDispatcher: Pe,
      ReactCurrentBatchConfig: b,
      ReactCurrentOwner: G,
    };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ue.Children = {
      map: $e,
      forEach: function (x, F, ae) {
        $e(
          x,
          function () {
            F.apply(this, arguments);
          },
          ae
        );
      },
      count: function (x) {
        var F = 0;
        return (
          $e(x, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (x) {
        return (
          $e(x, function (F) {
            return F;
          }) || []
        );
      },
      only: function (x) {
        if (!m(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    }),
    (ue.Component = N),
    (ue.Fragment = l),
    (ue.Profiler = u),
    (ue.PureComponent = K),
    (ue.StrictMode = a),
    (ue.Suspense = w),
    (ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne),
    (ue.act = q),
    (ue.cloneElement = function (x, F, ae) {
      if (x == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            x +
            "."
        );
      var ce = R({}, x.props),
        pe = x.key,
        he = x.ref,
        Ee = x._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((he = F.ref), (Ee = G.current)),
          F.key !== void 0 && (pe = "" + F.key),
          x.type && x.type.defaultProps)
        )
          var we = x.type.defaultProps;
        for (Ae in F)
          H.call(F, Ae) &&
            !W.hasOwnProperty(Ae) &&
            (ce[Ae] = F[Ae] === void 0 && we !== void 0 ? we[Ae] : F[Ae]);
      }
      var Ae = arguments.length - 2;
      if (Ae === 1) ce.children = ae;
      else if (1 < Ae) {
        we = Array(Ae);
        for (var gt = 0; gt < Ae; gt++) we[gt] = arguments[gt + 2];
        ce.children = we;
      }
      return {
        $$typeof: r,
        type: x.type,
        key: pe,
        ref: he,
        props: ce,
        _owner: Ee,
      };
    }),
    (ue.createContext = function (x) {
      return (
        (x = {
          $$typeof: p,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (x.Provider = { $$typeof: f, _context: x }),
        (x.Consumer = x)
      );
    }),
    (ue.createElement = fe),
    (ue.createFactory = function (x) {
      var F = fe.bind(null, x);
      return (F.type = x), F;
    }),
    (ue.createRef = function () {
      return { current: null };
    }),
    (ue.forwardRef = function (x) {
      return { $$typeof: h, render: x };
    }),
    (ue.isValidElement = m),
    (ue.lazy = function (x) {
      return { $$typeof: C, _payload: { _status: -1, _result: x }, _init: be };
    }),
    (ue.memo = function (x, F) {
      return { $$typeof: v, type: x, compare: F === void 0 ? null : F };
    }),
    (ue.startTransition = function (x) {
      var F = b.transition;
      b.transition = {};
      try {
        x();
      } finally {
        b.transition = F;
      }
    }),
    (ue.unstable_act = q),
    (ue.useCallback = function (x, F) {
      return Pe.current.useCallback(x, F);
    }),
    (ue.useContext = function (x) {
      return Pe.current.useContext(x);
    }),
    (ue.useDebugValue = function () {}),
    (ue.useDeferredValue = function (x) {
      return Pe.current.useDeferredValue(x);
    }),
    (ue.useEffect = function (x, F) {
      return Pe.current.useEffect(x, F);
    }),
    (ue.useId = function () {
      return Pe.current.useId();
    }),
    (ue.useImperativeHandle = function (x, F, ae) {
      return Pe.current.useImperativeHandle(x, F, ae);
    }),
    (ue.useInsertionEffect = function (x, F) {
      return Pe.current.useInsertionEffect(x, F);
    }),
    (ue.useLayoutEffect = function (x, F) {
      return Pe.current.useLayoutEffect(x, F);
    }),
    (ue.useMemo = function (x, F) {
      return Pe.current.useMemo(x, F);
    }),
    (ue.useReducer = function (x, F, ae) {
      return Pe.current.useReducer(x, F, ae);
    }),
    (ue.useRef = function (x) {
      return Pe.current.useRef(x);
    }),
    (ue.useState = function (x) {
      return Pe.current.useState(x);
    }),
    (ue.useSyncExternalStore = function (x, F, ae) {
      return Pe.current.useSyncExternalStore(x, F, ae);
    }),
    (ue.useTransition = function () {
      return Pe.current.useTransition();
    }),
    (ue.version = "18.3.1"),
    ue
  );
}
var td;
function Ha() {
  return td || ((td = 1), (va.exports = Um())), va.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function bm() {
  if (nd) return go;
  nd = 1;
  var r = Ha(),
    o = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(h, w, v) {
    var C,
      k = {},
      O = null,
      I = null;
    v !== void 0 && (O = "" + v),
      w.key !== void 0 && (O = "" + w.key),
      w.ref !== void 0 && (I = w.ref);
    for (C in w) a.call(w, C) && !f.hasOwnProperty(C) && (k[C] = w[C]);
    if (h && h.defaultProps)
      for (C in ((w = h.defaultProps), w)) k[C] === void 0 && (k[C] = w[C]);
    return {
      $$typeof: o,
      type: h,
      key: O,
      ref: I,
      props: k,
      _owner: u.current,
    };
  }
  return (go.Fragment = l), (go.jsx = p), (go.jsxs = p), go;
}
var rd;
function Hm() {
  return rd || ((rd = 1), (ya.exports = bm())), ya.exports;
}
var se = Hm(),
  Hi = {},
  wa = { exports: {} },
  pt = {},
  Sa = { exports: {} },
  ka = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od;
function Vm() {
  return (
    od ||
      ((od = 1),
      (function (r) {
        function o(b, ne) {
          var q = b.length;
          b.push(ne);
          e: for (; 0 < q; ) {
            var x = (q - 1) >>> 1,
              F = b[x];
            if (0 < u(F, ne)) (b[x] = ne), (b[q] = F), (q = x);
            else break e;
          }
        }
        function l(b) {
          return b.length === 0 ? null : b[0];
        }
        function a(b) {
          if (b.length === 0) return null;
          var ne = b[0],
            q = b.pop();
          if (q !== ne) {
            b[0] = q;
            e: for (var x = 0, F = b.length, ae = F >>> 1; x < ae; ) {
              var ce = 2 * (x + 1) - 1,
                pe = b[ce],
                he = ce + 1,
                Ee = b[he];
              if (0 > u(pe, q))
                he < F && 0 > u(Ee, pe)
                  ? ((b[x] = Ee), (b[he] = q), (x = he))
                  : ((b[x] = pe), (b[ce] = q), (x = ce));
              else if (he < F && 0 > u(Ee, q))
                (b[x] = Ee), (b[he] = q), (x = he);
              else break e;
            }
          }
          return ne;
        }
        function u(b, ne) {
          var q = b.sortIndex - ne.sortIndex;
          return q !== 0 ? q : b.id - ne.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance;
          r.unstable_now = function () {
            return f.now();
          };
        } else {
          var p = Date,
            h = p.now();
          r.unstable_now = function () {
            return p.now() - h;
          };
        }
        var w = [],
          v = [],
          C = 1,
          k = null,
          O = 3,
          I = !1,
          R = !1,
          _ = !1,
          N = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function B(b) {
          for (var ne = l(v); ne !== null; ) {
            if (ne.callback === null) a(v);
            else if (ne.startTime <= b)
              a(v), (ne.sortIndex = ne.expirationTime), o(w, ne);
            else break;
            ne = l(v);
          }
        }
        function U(b) {
          if (((_ = !1), B(b), !R))
            if (l(w) !== null) (R = !0), be(H);
            else {
              var ne = l(v);
              ne !== null && Pe(U, ne.startTime - b);
            }
        }
        function H(b, ne) {
          (R = !1), _ && ((_ = !1), M(fe), (fe = -1)), (I = !0);
          var q = O;
          try {
            for (
              B(ne), k = l(w);
              k !== null && (!(k.expirationTime > ne) || (b && !X()));

            ) {
              var x = k.callback;
              if (typeof x == "function") {
                (k.callback = null), (O = k.priorityLevel);
                var F = x(k.expirationTime <= ne);
                (ne = r.unstable_now()),
                  typeof F == "function"
                    ? (k.callback = F)
                    : k === l(w) && a(w),
                  B(ne);
              } else a(w);
              k = l(w);
            }
            if (k !== null) var ae = !0;
            else {
              var ce = l(v);
              ce !== null && Pe(U, ce.startTime - ne), (ae = !1);
            }
            return ae;
          } finally {
            (k = null), (O = q), (I = !1);
          }
        }
        var G = !1,
          W = null,
          fe = -1,
          ve = 5,
          m = -1;
        function X() {
          return !(r.unstable_now() - m < ve);
        }
        function re() {
          if (W !== null) {
            var b = r.unstable_now();
            m = b;
            var ne = !0;
            try {
              ne = W(!0, b);
            } finally {
              ne ? le() : ((G = !1), (W = null));
            }
          } else G = !1;
        }
        var le;
        if (typeof K == "function")
          le = function () {
            K(re);
          };
        else if (typeof MessageChannel < "u") {
          var ke = new MessageChannel(),
            $e = ke.port2;
          (ke.port1.onmessage = re),
            (le = function () {
              $e.postMessage(null);
            });
        } else
          le = function () {
            N(re, 0);
          };
        function be(b) {
          (W = b), G || ((G = !0), le());
        }
        function Pe(b, ne) {
          fe = N(function () {
            b(r.unstable_now());
          }, ne);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            R || I || ((R = !0), be(H));
          }),
          (r.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ve = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return l(w);
          }),
          (r.unstable_next = function (b) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = O;
            }
            var q = O;
            O = ne;
            try {
              return b();
            } finally {
              O = q;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (b, ne) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var q = O;
            O = b;
            try {
              return ne();
            } finally {
              O = q;
            }
          }),
          (r.unstable_scheduleCallback = function (b, ne, q) {
            var x = r.unstable_now();
            switch (
              (typeof q == "object" && q !== null
                ? ((q = q.delay),
                  (q = typeof q == "number" && 0 < q ? x + q : x))
                : (q = x),
              b)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = q + F),
              (b = {
                id: C++,
                callback: ne,
                priorityLevel: b,
                startTime: q,
                expirationTime: F,
                sortIndex: -1,
              }),
              q > x
                ? ((b.sortIndex = q),
                  o(v, b),
                  l(w) === null &&
                    b === l(v) &&
                    (_ ? (M(fe), (fe = -1)) : (_ = !0), Pe(U, q - x)))
                : ((b.sortIndex = F), o(w, b), R || I || ((R = !0), be(H))),
              b
            );
          }),
          (r.unstable_shouldYield = X),
          (r.unstable_wrapCallback = function (b) {
            var ne = O;
            return function () {
              var q = O;
              O = ne;
              try {
                return b.apply(this, arguments);
              } finally {
                O = q;
              }
            };
          });
      })(ka)),
    ka
  );
}
var id;
function Wm() {
  return id || ((id = 1), (Sa.exports = Vm())), Sa.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ld;
function Km() {
  if (ld) return pt;
  ld = 1;
  var r = Ha(),
    o = Wm();
  function l(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var a = new Set(),
    u = {};
  function f(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w = Object.prototype.hasOwnProperty,
    v =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    C = {},
    k = {};
  function O(e) {
    return w.call(k, e)
      ? !0
      : w.call(C, e)
      ? !1
      : v.test(e)
      ? (k[e] = !0)
      : ((C[e] = !0), !1);
  }
  function I(e, t, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function R(e, t, n, i) {
    if (t === null || typeof t > "u" || I(e, t, n, i)) return !0;
    if (i) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function _(e, t, n, i, s, c, d) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = s),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = d);
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      N[e] = new _(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      N[t] = new _(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      N[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      N[e] = new _(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        N[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      N[e] = new _(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      N[e] = new _(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      N[e] = new _(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      N[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var M = /[\-:]([a-z])/g;
  function K(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(M, K);
      N[t] = new _(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(M, K);
        N[t] = new _(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(M, K);
      N[t] = new _(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      N[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (N.xlinkHref = new _(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      N[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function B(e, t, n, i) {
    var s = N.hasOwnProperty(t) ? N[t] : null;
    (s !== null
      ? s.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (R(t, n, s, i) && (n = null),
      i || s === null
        ? O(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (i = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var U = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    H = Symbol.for("react.element"),
    G = Symbol.for("react.portal"),
    W = Symbol.for("react.fragment"),
    fe = Symbol.for("react.strict_mode"),
    ve = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    X = Symbol.for("react.context"),
    re = Symbol.for("react.forward_ref"),
    le = Symbol.for("react.suspense"),
    ke = Symbol.for("react.suspense_list"),
    $e = Symbol.for("react.memo"),
    be = Symbol.for("react.lazy"),
    Pe = Symbol.for("react.offscreen"),
    b = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (b && e[b]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var q = Object.assign,
    x;
  function F(e) {
    if (x === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        x = (t && t[1]) || "";
      }
    return (
      `
` +
      x +
      e
    );
  }
  var ae = !1;
  function ce(e, t) {
    if (!e || ae) return "";
    ae = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (P) {
            var i = P;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (P) {
            i = P;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (P) {
          i = P;
        }
        e();
      }
    } catch (P) {
      if (P && i && typeof P.stack == "string") {
        for (
          var s = P.stack.split(`
`),
            c = i.stack.split(`
`),
            d = s.length - 1,
            g = c.length - 1;
          1 <= d && 0 <= g && s[d] !== c[g];

        )
          g--;
        for (; 1 <= d && 0 <= g; d--, g--)
          if (s[d] !== c[g]) {
            if (d !== 1 || g !== 1)
              do
                if ((d--, g--, 0 > g || s[d] !== c[g])) {
                  var y =
                    `
` + s[d].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      y.includes("<anonymous>") &&
                      (y = y.replace("<anonymous>", e.displayName)),
                    y
                  );
                }
              while (1 <= d && 0 <= g);
            break;
          }
      }
    } finally {
      (ae = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ce(e.type, !1)), e;
      case 11:
        return (e = ce(e.type.render, !1)), e;
      case 1:
        return (e = ce(e.type, !0)), e;
      default:
        return "";
    }
  }
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case G:
        return "Portal";
      case ve:
        return "Profiler";
      case fe:
        return "StrictMode";
      case le:
        return "Suspense";
      case ke:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case X:
          return (e.displayName || "Context") + ".Consumer";
        case m:
          return (e._context.displayName || "Context") + ".Provider";
        case re:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case $e:
          return (
            (t = e.displayName || null), t !== null ? t : he(e.type) || "Memo"
          );
        case be:
          (t = e._payload), (e = e._init);
          try {
            return he(e(t));
          } catch {}
      }
    return null;
  }
  function Ee(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return he(t);
      case 8:
        return t === fe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function we(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ae(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function gt(e) {
    var t = Ae(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        c = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (d) {
            (i = "" + d), c.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (d) {
            i = "" + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function zo(e) {
    e._valueTracker || (e._valueTracker = gt(e));
  }
  function iu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      i = "";
    return (
      e && (i = Ae(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Fo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function El(e, t) {
    var n = t.checked;
    return q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function lu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked;
    (n = we(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function su(e, t) {
    (t = t.checked), t != null && B(e, "checked", t, !1);
  }
  function Tl(e, t) {
    su(e, t);
    var n = we(t.value),
      i = t.type;
    if (n != null)
      i === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? _l(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && _l(e, t.type, we(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function au(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (
        !(
          (i !== "submit" && i !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function _l(e, t, n) {
    (t !== "number" || Fo(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ar = Array.isArray;
  function Kn(e, t, n, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        (s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + we(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          (e[s].selected = !0), i && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Pl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function uu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(l(92));
        if (Ar(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: we(n) };
  }
  function cu(e, t) {
    var n = we(t.value),
      i = we(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      i != null && (e.defaultValue = "" + i);
  }
  function fu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function du(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? du(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Do,
    pu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, i, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, i, s);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Do = Do || document.createElement("div"),
            Do.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Do.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Nr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Hp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Lr).forEach(function (e) {
    Hp.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e]);
    });
  });
  function hu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Lr.hasOwnProperty(e) && Lr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function mu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var i = n.indexOf("--") === 0,
          s = hu(n, t[n], i);
        n === "float" && (n = "cssFloat"), i ? e.setProperty(n, s) : (e[n] = s);
      }
  }
  var Vp = q(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Ol(e, t) {
    if (t) {
      if (Vp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function Al(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Nl = null;
  function Ll(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zl = null,
    Qn = null,
    qn = null;
  function gu(e) {
    if ((e = eo(e))) {
      if (typeof zl != "function") throw Error(l(280));
      var t = e.stateNode;
      t && ((t = oi(t)), zl(e.stateNode, e.type, t));
    }
  }
  function yu(e) {
    Qn ? (qn ? qn.push(e) : (qn = [e])) : (Qn = e);
  }
  function vu() {
    if (Qn) {
      var e = Qn,
        t = qn;
      if (((qn = Qn = null), gu(e), t)) for (e = 0; e < t.length; e++) gu(t[e]);
    }
  }
  function wu(e, t) {
    return e(t);
  }
  function Su() {}
  var Fl = !1;
  function ku(e, t, n) {
    if (Fl) return e(t, n);
    Fl = !0;
    try {
      return wu(e, t, n);
    } finally {
      (Fl = !1), (Qn !== null || qn !== null) && (Su(), vu());
    }
  }
  function zr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = oi(n);
    if (i === null) return null;
    n = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var Dl = !1;
  if (h)
    try {
      var Fr = {};
      Object.defineProperty(Fr, "passive", {
        get: function () {
          Dl = !0;
        },
      }),
        window.addEventListener("test", Fr, Fr),
        window.removeEventListener("test", Fr, Fr);
    } catch {
      Dl = !1;
    }
  function Wp(e, t, n, i, s, c, d, g, y) {
    var P = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, P);
    } catch (D) {
      this.onError(D);
    }
  }
  var Dr = !1,
    jo = null,
    Io = !1,
    jl = null,
    Kp = {
      onError: function (e) {
        (Dr = !0), (jo = e);
      },
    };
  function Qp(e, t, n, i, s, c, d, g, y) {
    (Dr = !1), (jo = null), Wp.apply(Kp, arguments);
  }
  function qp(e, t, n, i, s, c, d, g, y) {
    if ((Qp.apply(this, arguments), Dr)) {
      if (Dr) {
        var P = jo;
        (Dr = !1), (jo = null);
      } else throw Error(l(198));
      Io || ((Io = !0), (jl = P));
    }
  }
  function On(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Cu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function xu(e) {
    if (On(e) !== e) throw Error(l(188));
  }
  function Gp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = On(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === n) return xu(s), e;
          if (c === i) return xu(s), t;
          c = c.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== i.return) (n = s), (i = c);
      else {
        for (var d = !1, g = s.child; g; ) {
          if (g === n) {
            (d = !0), (n = s), (i = c);
            break;
          }
          if (g === i) {
            (d = !0), (i = s), (n = c);
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = c.child; g; ) {
            if (g === n) {
              (d = !0), (n = c), (i = s);
              break;
            }
            if (g === i) {
              (d = !0), (i = c), (n = s);
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(l(189));
        }
      }
      if (n.alternate !== i) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function Eu(e) {
    return (e = Gp(e)), e !== null ? Tu(e) : null;
  }
  function Tu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Tu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _u = o.unstable_scheduleCallback,
    Pu = o.unstable_cancelCallback,
    Xp = o.unstable_shouldYield,
    Yp = o.unstable_requestPaint,
    Be = o.unstable_now,
    Jp = o.unstable_getCurrentPriorityLevel,
    Il = o.unstable_ImmediatePriority,
    Ru = o.unstable_UserBlockingPriority,
    $o = o.unstable_NormalPriority,
    Zp = o.unstable_LowPriority,
    Ou = o.unstable_IdlePriority,
    Bo = null,
    Ut = null;
  function eh(e) {
    if (Ut && typeof Ut.onCommitFiberRoot == "function")
      try {
        Ut.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var zt = Math.clz32 ? Math.clz32 : rh,
    th = Math.log,
    nh = Math.LN2;
  function rh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((th(e) / nh) | 0)) | 0;
  }
  var Mo = 64,
    Uo = 4194304;
  function jr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function bo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
      s = e.suspendedLanes,
      c = e.pingedLanes,
      d = n & 268435455;
    if (d !== 0) {
      var g = d & ~s;
      g !== 0 ? (i = jr(g)) : ((c &= d), c !== 0 && (i = jr(c)));
    } else (d = n & ~s), d !== 0 ? (i = jr(d)) : c !== 0 && (i = jr(c));
    if (i === 0) return 0;
    if (
      t !== 0 &&
      t !== i &&
      !(t & s) &&
      ((s = i & -i), (c = t & -t), s >= c || (s === 16 && (c & 4194240) !== 0))
    )
      return t;
    if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        (n = 31 - zt(t)), (s = 1 << n), (i |= e[n]), (t &= ~s);
    return i;
  }
  function oh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ih(e, t) {
    for (
      var n = e.suspendedLanes,
        i = e.pingedLanes,
        s = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var d = 31 - zt(c),
        g = 1 << d,
        y = s[d];
      y === -1
        ? (!(g & n) || g & i) && (s[d] = oh(g, t))
        : y <= t && (e.expiredLanes |= g),
        (c &= ~g);
    }
  }
  function $l(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Au() {
    var e = Mo;
    return (Mo <<= 1), !(Mo & 4194240) && (Mo = 64), e;
  }
  function Bl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ir(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - zt(t)),
      (e[t] = n);
  }
  function lh(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - zt(n),
        c = 1 << s;
      (t[s] = 0), (i[s] = -1), (e[s] = -1), (n &= ~c);
    }
  }
  function Ml(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var i = 31 - zt(n),
        s = 1 << i;
      (s & t) | (e[i] & t) && (e[i] |= t), (n &= ~s);
    }
  }
  var Se = 0;
  function Nu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Lu,
    Ul,
    zu,
    Fu,
    Du,
    bl = !1,
    Ho = [],
    un = null,
    cn = null,
    fn = null,
    $r = new Map(),
    Br = new Map(),
    dn = [],
    sh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function ju(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        un = null;
        break;
      case "dragenter":
      case "dragleave":
        cn = null;
        break;
      case "mouseover":
      case "mouseout":
        fn = null;
        break;
      case "pointerover":
      case "pointerout":
        $r.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Br.delete(t.pointerId);
    }
  }
  function Mr(e, t, n, i, s, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [s],
        }),
        t !== null && ((t = eo(t)), t !== null && Ul(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function ah(e, t, n, i, s) {
    switch (t) {
      case "focusin":
        return (un = Mr(un, e, t, n, i, s)), !0;
      case "dragenter":
        return (cn = Mr(cn, e, t, n, i, s)), !0;
      case "mouseover":
        return (fn = Mr(fn, e, t, n, i, s)), !0;
      case "pointerover":
        var c = s.pointerId;
        return $r.set(c, Mr($r.get(c) || null, e, t, n, i, s)), !0;
      case "gotpointercapture":
        return (
          (c = s.pointerId), Br.set(c, Mr(Br.get(c) || null, e, t, n, i, s)), !0
        );
    }
    return !1;
  }
  function Iu(e) {
    var t = An(e.target);
    if (t !== null) {
      var n = On(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Cu(n)), t !== null)) {
            (e.blockedOn = t),
              Du(e.priority, function () {
                zu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Vl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        (Nl = i), n.target.dispatchEvent(i), (Nl = null);
      } else return (t = eo(n)), t !== null && Ul(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function $u(e, t, n) {
    Vo(e) && n.delete(t);
  }
  function uh() {
    (bl = !1),
      un !== null && Vo(un) && (un = null),
      cn !== null && Vo(cn) && (cn = null),
      fn !== null && Vo(fn) && (fn = null),
      $r.forEach($u),
      Br.forEach($u);
  }
  function Ur(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bl ||
        ((bl = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, uh)));
  }
  function br(e) {
    function t(s) {
      return Ur(s, e);
    }
    if (0 < Ho.length) {
      Ur(Ho[0], e);
      for (var n = 1; n < Ho.length; n++) {
        var i = Ho[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (
      un !== null && Ur(un, e),
        cn !== null && Ur(cn, e),
        fn !== null && Ur(fn, e),
        $r.forEach(t),
        Br.forEach(t),
        n = 0;
      n < dn.length;
      n++
    )
      (i = dn[n]), i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
      Iu(n), n.blockedOn === null && dn.shift();
  }
  var Gn = U.ReactCurrentBatchConfig,
    Wo = !0;
  function ch(e, t, n, i) {
    var s = Se,
      c = Gn.transition;
    Gn.transition = null;
    try {
      (Se = 1), Hl(e, t, n, i);
    } finally {
      (Se = s), (Gn.transition = c);
    }
  }
  function fh(e, t, n, i) {
    var s = Se,
      c = Gn.transition;
    Gn.transition = null;
    try {
      (Se = 4), Hl(e, t, n, i);
    } finally {
      (Se = s), (Gn.transition = c);
    }
  }
  function Hl(e, t, n, i) {
    if (Wo) {
      var s = Vl(e, t, n, i);
      if (s === null) ss(e, t, i, Ko, n), ju(e, i);
      else if (ah(s, e, t, n, i)) i.stopPropagation();
      else if ((ju(e, i), t & 4 && -1 < sh.indexOf(e))) {
        for (; s !== null; ) {
          var c = eo(s);
          if (
            (c !== null && Lu(c),
            (c = Vl(e, t, n, i)),
            c === null && ss(e, t, i, Ko, n),
            c === s)
          )
            break;
          s = c;
        }
        s !== null && i.stopPropagation();
      } else ss(e, t, i, null, n);
    }
  }
  var Ko = null;
  function Vl(e, t, n, i) {
    if (((Ko = null), (e = Ll(i)), (e = An(e)), e !== null))
      if (((t = On(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Cu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ko = e), null;
  }
  function Bu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Jp()) {
          case Il:
            return 1;
          case Ru:
            return 4;
          case $o:
          case Zp:
            return 16;
          case Ou:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pn = null,
    Wl = null,
    Qo = null;
  function Mu() {
    if (Qo) return Qo;
    var e,
      t = Wl,
      n = t.length,
      i,
      s = "value" in pn ? pn.value : pn.textContent,
      c = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var d = n - e;
    for (i = 1; i <= d && t[n - i] === s[c - i]; i++);
    return (Qo = s.slice(e, 1 < i ? 1 - i : void 0));
  }
  function qo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Go() {
    return !0;
  }
  function Uu() {
    return !1;
  }
  function yt(e) {
    function t(n, i, s, c, d) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = d),
        (this.currentTarget = null);
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(c) : c[g]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Go
          : Uu),
        (this.isPropagationStopped = Uu),
        this
      );
    }
    return (
      q(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Go));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Go));
        },
        persist: function () {},
        isPersistent: Go,
      }),
      t
    );
  }
  var Xn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Kl = yt(Xn),
    Hr = q({}, Xn, { view: 0, detail: 0 }),
    dh = yt(Hr),
    Ql,
    ql,
    Vr,
    Xo = q({}, Hr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Xl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Vr &&
              (Vr && e.type === "mousemove"
                ? ((Ql = e.screenX - Vr.screenX), (ql = e.screenY - Vr.screenY))
                : (ql = Ql = 0),
              (Vr = e)),
            Ql);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ql;
      },
    }),
    bu = yt(Xo),
    ph = q({}, Xo, { dataTransfer: 0 }),
    hh = yt(ph),
    mh = q({}, Hr, { relatedTarget: 0 }),
    Gl = yt(mh),
    gh = q({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yh = yt(gh),
    vh = q({}, Xn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    wh = yt(vh),
    Sh = q({}, Xn, { data: 0 }),
    Hu = yt(Sh),
    kh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ch = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    xh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Eh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = xh[e])
      ? !!t[e]
      : !1;
  }
  function Xl() {
    return Eh;
  }
  var Th = q({}, Hr, {
      key: function (e) {
        if (e.key) {
          var t = kh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Ch[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Xl,
      charCode: function (e) {
        return e.type === "keypress" ? qo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    _h = yt(Th),
    Ph = q({}, Xo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Vu = yt(Ph),
    Rh = q({}, Hr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xl,
    }),
    Oh = yt(Rh),
    Ah = q({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nh = yt(Ah),
    Lh = q({}, Xo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    zh = yt(Lh),
    Fh = [9, 13, 27, 32],
    Yl = h && "CompositionEvent" in window,
    Wr = null;
  h && "documentMode" in document && (Wr = document.documentMode);
  var Dh = h && "TextEvent" in window && !Wr,
    Wu = h && (!Yl || (Wr && 8 < Wr && 11 >= Wr)),
    Ku = " ",
    Qu = !1;
  function qu(e, t) {
    switch (e) {
      case "keyup":
        return Fh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Yn = !1;
  function jh(e, t) {
    switch (e) {
      case "compositionend":
        return Gu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Qu = !0), Ku);
      case "textInput":
        return (e = t.data), e === Ku && Qu ? null : e;
      default:
        return null;
    }
  }
  function Ih(e, t) {
    if (Yn)
      return e === "compositionend" || (!Yl && qu(e, t))
        ? ((e = Mu()), (Qo = Wl = pn = null), (Yn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Wu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var $h = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Xu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$h[e.type] : t === "textarea";
  }
  function Yu(e, t, n, i) {
    yu(i),
      (t = ti(t, "onChange")),
      0 < t.length &&
        ((n = new Kl("onChange", "change", null, n, i)),
        e.push({ event: n, listeners: t }));
  }
  var Kr = null,
    Qr = null;
  function Bh(e) {
    mc(e, 0);
  }
  function Yo(e) {
    var t = nr(e);
    if (iu(t)) return e;
  }
  function Mh(e, t) {
    if (e === "change") return t;
  }
  var Ju = !1;
  if (h) {
    var Jl;
    if (h) {
      var Zl = "oninput" in document;
      if (!Zl) {
        var Zu = document.createElement("div");
        Zu.setAttribute("oninput", "return;"),
          (Zl = typeof Zu.oninput == "function");
      }
      Jl = Zl;
    } else Jl = !1;
    Ju = Jl && (!document.documentMode || 9 < document.documentMode);
  }
  function ec() {
    Kr && (Kr.detachEvent("onpropertychange", tc), (Qr = Kr = null));
  }
  function tc(e) {
    if (e.propertyName === "value" && Yo(Qr)) {
      var t = [];
      Yu(t, Qr, e, Ll(e)), ku(Bh, t);
    }
  }
  function Uh(e, t, n) {
    e === "focusin"
      ? (ec(), (Kr = t), (Qr = n), Kr.attachEvent("onpropertychange", tc))
      : e === "focusout" && ec();
  }
  function bh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Yo(Qr);
  }
  function Hh(e, t) {
    if (e === "click") return Yo(t);
  }
  function Vh(e, t) {
    if (e === "input" || e === "change") return Yo(t);
  }
  function Wh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ft = typeof Object.is == "function" ? Object.is : Wh;
  function qr(e, t) {
    if (Ft(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!w.call(t, s) || !Ft(e[s], t[s])) return !1;
    }
    return !0;
  }
  function nc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rc(e, t) {
    var n = nc(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = e + n.textContent.length), e <= t && i >= t))
          return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = nc(n);
    }
  }
  function oc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? oc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ic() {
    for (var e = window, t = Fo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fo(e.document);
    }
    return t;
  }
  function es(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Kh(e) {
    var t = ic(),
      n = e.focusedElem,
      i = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      oc(n.ownerDocument.documentElement, n)
    ) {
      if (i !== null && es(n)) {
        if (
          ((t = i.start),
          (e = i.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var s = n.textContent.length,
            c = Math.min(i.start, s);
          (i = i.end === void 0 ? c : Math.min(i.end, s)),
            !e.extend && c > i && ((s = i), (i = c), (c = s)),
            (s = rc(n, c));
          var d = rc(n, i);
          s &&
            d &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== d.node ||
              e.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            e.removeAllRanges(),
            c > i
              ? (e.addRange(t), e.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Qh = h && "documentMode" in document && 11 >= document.documentMode,
    Jn = null,
    ts = null,
    Gr = null,
    ns = !1;
  function lc(e, t, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ns ||
      Jn == null ||
      Jn !== Fo(i) ||
      ((i = Jn),
      "selectionStart" in i && es(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Gr && qr(Gr, i)) ||
        ((Gr = i),
        (i = ti(ts, "onSelect")),
        0 < i.length &&
          ((t = new Kl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: i }),
          (t.target = Jn))));
  }
  function Jo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Zn = {
      animationend: Jo("Animation", "AnimationEnd"),
      animationiteration: Jo("Animation", "AnimationIteration"),
      animationstart: Jo("Animation", "AnimationStart"),
      transitionend: Jo("Transition", "TransitionEnd"),
    },
    rs = {},
    sc = {};
  h &&
    ((sc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Zn.animationend.animation,
      delete Zn.animationiteration.animation,
      delete Zn.animationstart.animation),
    "TransitionEvent" in window || delete Zn.transitionend.transition);
  function Zo(e) {
    if (rs[e]) return rs[e];
    if (!Zn[e]) return e;
    var t = Zn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in sc) return (rs[e] = t[n]);
    return e;
  }
  var ac = Zo("animationend"),
    uc = Zo("animationiteration"),
    cc = Zo("animationstart"),
    fc = Zo("transitionend"),
    dc = new Map(),
    pc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function hn(e, t) {
    dc.set(e, t), f(t, [e]);
  }
  for (var os = 0; os < pc.length; os++) {
    var is = pc[os],
      qh = is.toLowerCase(),
      Gh = is[0].toUpperCase() + is.slice(1);
    hn(qh, "on" + Gh);
  }
  hn(ac, "onAnimationEnd"),
    hn(uc, "onAnimationIteration"),
    hn(cc, "onAnimationStart"),
    hn("dblclick", "onDoubleClick"),
    hn("focusin", "onFocus"),
    hn("focusout", "onBlur"),
    hn(fc, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Xr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Xh = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Xr)
    );
  function hc(e, t, n) {
    var i = e.type || "unknown-event";
    (e.currentTarget = n), qp(i, t, void 0, e), (e.currentTarget = null);
  }
  function mc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        s = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var d = i.length - 1; 0 <= d; d--) {
            var g = i[d],
              y = g.instance,
              P = g.currentTarget;
            if (((g = g.listener), y !== c && s.isPropagationStopped()))
              break e;
            hc(s, g, P), (c = y);
          }
        else
          for (d = 0; d < i.length; d++) {
            if (
              ((g = i[d]),
              (y = g.instance),
              (P = g.currentTarget),
              (g = g.listener),
              y !== c && s.isPropagationStopped())
            )
              break e;
            hc(s, g, P), (c = y);
          }
      }
    }
    if (Io) throw ((e = jl), (Io = !1), (jl = null), e);
  }
  function Re(e, t) {
    var n = t[ps];
    n === void 0 && (n = t[ps] = new Set());
    var i = e + "__bubble";
    n.has(i) || (gc(t, e, 2, !1), n.add(i));
  }
  function ls(e, t, n) {
    var i = 0;
    t && (i |= 4), gc(n, e, i, t);
  }
  var ei = "_reactListening" + Math.random().toString(36).slice(2);
  function Yr(e) {
    if (!e[ei]) {
      (e[ei] = !0),
        a.forEach(function (n) {
          n !== "selectionchange" && (Xh.has(n) || ls(n, !1, e), ls(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ei] || ((t[ei] = !0), ls("selectionchange", !1, t));
    }
  }
  function gc(e, t, n, i) {
    switch (Bu(t)) {
      case 1:
        var s = ch;
        break;
      case 4:
        s = fh;
        break;
      default:
        s = Hl;
    }
    (n = s.bind(null, t, n, e)),
      (s = void 0),
      !Dl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1);
  }
  function ss(e, t, n, i, s) {
    var c = i;
    if (!(t & 1) && !(t & 2) && i !== null)
      e: for (;;) {
        if (i === null) return;
        var d = i.tag;
        if (d === 3 || d === 4) {
          var g = i.stateNode.containerInfo;
          if (g === s || (g.nodeType === 8 && g.parentNode === s)) break;
          if (d === 4)
            for (d = i.return; d !== null; ) {
              var y = d.tag;
              if (
                (y === 3 || y === 4) &&
                ((y = d.stateNode.containerInfo),
                y === s || (y.nodeType === 8 && y.parentNode === s))
              )
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = An(g)), d === null)) return;
            if (((y = d.tag), y === 5 || y === 6)) {
              i = c = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    ku(function () {
      var P = c,
        D = Ll(n),
        j = [];
      e: {
        var z = dc.get(e);
        if (z !== void 0) {
          var V = Kl,
            Y = e;
          switch (e) {
            case "keypress":
              if (qo(n) === 0) break e;
            case "keydown":
            case "keyup":
              V = _h;
              break;
            case "focusin":
              (Y = "focus"), (V = Gl);
              break;
            case "focusout":
              (Y = "blur"), (V = Gl);
              break;
            case "beforeblur":
            case "afterblur":
              V = Gl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = bu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = hh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = Oh;
              break;
            case ac:
            case uc:
            case cc:
              V = yh;
              break;
            case fc:
              V = Nh;
              break;
            case "scroll":
              V = dh;
              break;
            case "wheel":
              V = zh;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = wh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Vu;
          }
          var J = (t & 4) !== 0,
            Me = !J && e === "scroll",
            E = J ? (z !== null ? z + "Capture" : null) : z;
          J = [];
          for (var S = P, T; S !== null; ) {
            T = S;
            var $ = T.stateNode;
            if (
              (T.tag === 5 &&
                $ !== null &&
                ((T = $),
                E !== null &&
                  (($ = zr(S, E)), $ != null && J.push(Jr(S, $, T)))),
              Me)
            )
              break;
            S = S.return;
          }
          0 < J.length &&
            ((z = new V(z, Y, null, n, D)), j.push({ event: z, listeners: J }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((z = e === "mouseover" || e === "pointerover"),
            (V = e === "mouseout" || e === "pointerout"),
            z &&
              n !== Nl &&
              (Y = n.relatedTarget || n.fromElement) &&
              (An(Y) || Y[Yt]))
          )
            break e;
          if (
            (V || z) &&
            ((z =
              D.window === D
                ? D
                : (z = D.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            V
              ? ((Y = n.relatedTarget || n.toElement),
                (V = P),
                (Y = Y ? An(Y) : null),
                Y !== null &&
                  ((Me = On(Y)), Y !== Me || (Y.tag !== 5 && Y.tag !== 6)) &&
                  (Y = null))
              : ((V = null), (Y = P)),
            V !== Y)
          ) {
            if (
              ((J = bu),
              ($ = "onMouseLeave"),
              (E = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = Vu),
                ($ = "onPointerLeave"),
                (E = "onPointerEnter"),
                (S = "pointer")),
              (Me = V == null ? z : nr(V)),
              (T = Y == null ? z : nr(Y)),
              (z = new J($, S + "leave", V, n, D)),
              (z.target = Me),
              (z.relatedTarget = T),
              ($ = null),
              An(D) === P &&
                ((J = new J(E, S + "enter", Y, n, D)),
                (J.target = T),
                (J.relatedTarget = Me),
                ($ = J)),
              (Me = $),
              V && Y)
            )
              t: {
                for (J = V, E = Y, S = 0, T = J; T; T = er(T)) S++;
                for (T = 0, $ = E; $; $ = er($)) T++;
                for (; 0 < S - T; ) (J = er(J)), S--;
                for (; 0 < T - S; ) (E = er(E)), T--;
                for (; S--; ) {
                  if (J === E || (E !== null && J === E.alternate)) break t;
                  (J = er(J)), (E = er(E));
                }
                J = null;
              }
            else J = null;
            V !== null && yc(j, z, V, J, !1),
              Y !== null && Me !== null && yc(j, Me, Y, J, !0);
          }
        }
        e: {
          if (
            ((z = P ? nr(P) : window),
            (V = z.nodeName && z.nodeName.toLowerCase()),
            V === "select" || (V === "input" && z.type === "file"))
          )
            var Z = Mh;
          else if (Xu(z))
            if (Ju) Z = Vh;
            else {
              Z = bh;
              var ee = Uh;
            }
          else
            (V = z.nodeName) &&
              V.toLowerCase() === "input" &&
              (z.type === "checkbox" || z.type === "radio") &&
              (Z = Hh);
          if (Z && (Z = Z(e, P))) {
            Yu(j, Z, n, D);
            break e;
          }
          ee && ee(e, z, P),
            e === "focusout" &&
              (ee = z._wrapperState) &&
              ee.controlled &&
              z.type === "number" &&
              _l(z, "number", z.value);
        }
        switch (((ee = P ? nr(P) : window), e)) {
          case "focusin":
            (Xu(ee) || ee.contentEditable === "true") &&
              ((Jn = ee), (ts = P), (Gr = null));
            break;
          case "focusout":
            Gr = ts = Jn = null;
            break;
          case "mousedown":
            ns = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ns = !1), lc(j, n, D);
            break;
          case "selectionchange":
            if (Qh) break;
          case "keydown":
          case "keyup":
            lc(j, n, D);
        }
        var te;
        if (Yl)
          e: {
            switch (e) {
              case "compositionstart":
                var oe = "onCompositionStart";
                break e;
              case "compositionend":
                oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                oe = "onCompositionUpdate";
                break e;
            }
            oe = void 0;
          }
        else
          Yn
            ? qu(e, n) && (oe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (oe = "onCompositionStart");
        oe &&
          (Wu &&
            n.locale !== "ko" &&
            (Yn || oe !== "onCompositionStart"
              ? oe === "onCompositionEnd" && Yn && (te = Mu())
              : ((pn = D),
                (Wl = "value" in pn ? pn.value : pn.textContent),
                (Yn = !0))),
          (ee = ti(P, oe)),
          0 < ee.length &&
            ((oe = new Hu(oe, e, null, n, D)),
            j.push({ event: oe, listeners: ee }),
            te
              ? (oe.data = te)
              : ((te = Gu(n)), te !== null && (oe.data = te)))),
          (te = Dh ? jh(e, n) : Ih(e, n)) &&
            ((P = ti(P, "onBeforeInput")),
            0 < P.length &&
              ((D = new Hu("onBeforeInput", "beforeinput", null, n, D)),
              j.push({ event: D, listeners: P }),
              (D.data = te)));
      }
      mc(j, t);
    });
  }
  function Jr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ti(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var s = e,
        c = s.stateNode;
      s.tag === 5 &&
        c !== null &&
        ((s = c),
        (c = zr(e, n)),
        c != null && i.unshift(Jr(e, c, s)),
        (c = zr(e, t)),
        c != null && i.push(Jr(e, c, s))),
        (e = e.return);
    }
    return i;
  }
  function er(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function yc(e, t, n, i, s) {
    for (var c = t._reactName, d = []; n !== null && n !== i; ) {
      var g = n,
        y = g.alternate,
        P = g.stateNode;
      if (y !== null && y === i) break;
      g.tag === 5 &&
        P !== null &&
        ((g = P),
        s
          ? ((y = zr(n, c)), y != null && d.unshift(Jr(n, y, g)))
          : s || ((y = zr(n, c)), y != null && d.push(Jr(n, y, g)))),
        (n = n.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Yh = /\r\n?/g,
    Jh = /\u0000|\uFFFD/g;
  function vc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Yh,
        `
`
      )
      .replace(Jh, "");
  }
  function ni(e, t, n) {
    if (((t = vc(t)), vc(e) !== t && n)) throw Error(l(425));
  }
  function ri() {}
  var as = null,
    us = null;
  function cs(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var fs = typeof setTimeout == "function" ? setTimeout : void 0,
    Zh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    wc = typeof Promise == "function" ? Promise : void 0,
    em =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof wc < "u"
        ? function (e) {
            return wc.resolve(null).then(e).catch(tm);
          }
        : fs;
  function tm(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ds(e, t) {
    var n = t,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (i === 0) {
            e.removeChild(s), br(t);
            return;
          }
          i--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
      n = s;
    } while (n);
    br(t);
  }
  function mn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Sc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var tr = Math.random().toString(36).slice(2),
    bt = "__reactFiber$" + tr,
    Zr = "__reactProps$" + tr,
    Yt = "__reactContainer$" + tr,
    ps = "__reactEvents$" + tr,
    nm = "__reactListeners$" + tr,
    rm = "__reactHandles$" + tr;
  function An(e) {
    var t = e[bt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Yt] || n[bt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Sc(e); e !== null; ) {
            if ((n = e[bt])) return n;
            e = Sc(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function eo(e) {
    return (
      (e = e[bt] || e[Yt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function nr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function oi(e) {
    return e[Zr] || null;
  }
  var hs = [],
    rr = -1;
  function gn(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > rr || ((e.current = hs[rr]), (hs[rr] = null), rr--);
  }
  function Te(e, t) {
    rr++, (hs[rr] = e.current), (e.current = t);
  }
  var yn = {},
    et = gn(yn),
    at = gn(!1),
    Nn = yn;
  function or(e, t) {
    var n = e.type.contextTypes;
    if (!n) return yn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      c;
    for (c in n) s[c] = t[c];
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function ut(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ii() {
    Oe(at), Oe(et);
  }
  function kc(e, t, n) {
    if (et.current !== yn) throw Error(l(168));
    Te(et, t), Te(at, n);
  }
  function Cc(e, t, n) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return n;
    i = i.getChildContext();
    for (var s in i) if (!(s in t)) throw Error(l(108, Ee(e) || "Unknown", s));
    return q({}, n, i);
  }
  function li(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        yn),
      (Nn = et.current),
      Te(et, e),
      Te(at, at.current),
      !0
    );
  }
  function xc(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(l(169));
    n
      ? ((e = Cc(e, t, Nn)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        Oe(at),
        Oe(et),
        Te(et, e))
      : Oe(at),
      Te(at, n);
  }
  var Jt = null,
    si = !1,
    ms = !1;
  function Ec(e) {
    Jt === null ? (Jt = [e]) : Jt.push(e);
  }
  function om(e) {
    (si = !0), Ec(e);
  }
  function vn() {
    if (!ms && Jt !== null) {
      ms = !0;
      var e = 0,
        t = Se;
      try {
        var n = Jt;
        for (Se = 1; e < n.length; e++) {
          var i = n[e];
          do i = i(!0);
          while (i !== null);
        }
        (Jt = null), (si = !1);
      } catch (s) {
        throw (Jt !== null && (Jt = Jt.slice(e + 1)), _u(Il, vn), s);
      } finally {
        (Se = t), (ms = !1);
      }
    }
    return null;
  }
  var ir = [],
    lr = 0,
    ai = null,
    ui = 0,
    Tt = [],
    _t = 0,
    Ln = null,
    Zt = 1,
    en = "";
  function zn(e, t) {
    (ir[lr++] = ui), (ir[lr++] = ai), (ai = e), (ui = t);
  }
  function Tc(e, t, n) {
    (Tt[_t++] = Zt), (Tt[_t++] = en), (Tt[_t++] = Ln), (Ln = e);
    var i = Zt;
    e = en;
    var s = 32 - zt(i) - 1;
    (i &= ~(1 << s)), (n += 1);
    var c = 32 - zt(t) + s;
    if (30 < c) {
      var d = s - (s % 5);
      (c = (i & ((1 << d) - 1)).toString(32)),
        (i >>= d),
        (s -= d),
        (Zt = (1 << (32 - zt(t) + s)) | (n << s) | i),
        (en = c + e);
    } else (Zt = (1 << c) | (n << s) | i), (en = e);
  }
  function gs(e) {
    e.return !== null && (zn(e, 1), Tc(e, 1, 0));
  }
  function ys(e) {
    for (; e === ai; )
      (ai = ir[--lr]), (ir[lr] = null), (ui = ir[--lr]), (ir[lr] = null);
    for (; e === Ln; )
      (Ln = Tt[--_t]),
        (Tt[_t] = null),
        (en = Tt[--_t]),
        (Tt[_t] = null),
        (Zt = Tt[--_t]),
        (Tt[_t] = null);
  }
  var vt = null,
    wt = null,
    Ne = !1,
    Dt = null;
  function _c(e, t) {
    var n = At(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Pc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (vt = e), (wt = mn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (vt = e), (wt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Ln !== null ? { id: Zt, overflow: en } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = At(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (vt = e),
              (wt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function vs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ws(e) {
    if (Ne) {
      var t = wt;
      if (t) {
        var n = t;
        if (!Pc(e, t)) {
          if (vs(e)) throw Error(l(418));
          t = mn(n.nextSibling);
          var i = vt;
          t && Pc(e, t)
            ? _c(i, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (vt = e));
        }
      } else {
        if (vs(e)) throw Error(l(418));
        (e.flags = (e.flags & -4097) | 2), (Ne = !1), (vt = e);
      }
    }
  }
  function Rc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    vt = e;
  }
  function ci(e) {
    if (e !== vt) return !1;
    if (!Ne) return Rc(e), (Ne = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !cs(e.type, e.memoizedProps))),
      t && (t = wt))
    ) {
      if (vs(e)) throw (Oc(), Error(l(418)));
      for (; t; ) _c(e, t), (t = mn(t.nextSibling));
    }
    if ((Rc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                wt = mn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        wt = null;
      }
    } else wt = vt ? mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oc() {
    for (var e = wt; e; ) e = mn(e.nextSibling);
  }
  function sr() {
    (wt = vt = null), (Ne = !1);
  }
  function Ss(e) {
    Dt === null ? (Dt = [e]) : Dt.push(e);
  }
  var im = U.ReactCurrentBatchConfig;
  function to(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(l(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(l(147, e));
        var s = i,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function (d) {
              var g = s.refs;
              d === null ? delete g[c] : (g[c] = d);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function fi(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        l(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Ac(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Nc(e) {
    function t(E, S) {
      if (e) {
        var T = E.deletions;
        T === null ? ((E.deletions = [S]), (E.flags |= 16)) : T.push(S);
      }
    }
    function n(E, S) {
      if (!e) return null;
      for (; S !== null; ) t(E, S), (S = S.sibling);
      return null;
    }
    function i(E, S) {
      for (E = new Map(); S !== null; )
        S.key !== null ? E.set(S.key, S) : E.set(S.index, S), (S = S.sibling);
      return E;
    }
    function s(E, S) {
      return (E = _n(E, S)), (E.index = 0), (E.sibling = null), E;
    }
    function c(E, S, T) {
      return (
        (E.index = T),
        e
          ? ((T = E.alternate),
            T !== null
              ? ((T = T.index), T < S ? ((E.flags |= 2), S) : T)
              : ((E.flags |= 2), S))
          : ((E.flags |= 1048576), S)
      );
    }
    function d(E) {
      return e && E.alternate === null && (E.flags |= 2), E;
    }
    function g(E, S, T, $) {
      return S === null || S.tag !== 6
        ? ((S = fa(T, E.mode, $)), (S.return = E), S)
        : ((S = s(S, T)), (S.return = E), S);
    }
    function y(E, S, T, $) {
      var Z = T.type;
      return Z === W
        ? D(E, S, T.props.children, $, T.key)
        : S !== null &&
          (S.elementType === Z ||
            (typeof Z == "object" &&
              Z !== null &&
              Z.$$typeof === be &&
              Ac(Z) === S.type))
        ? (($ = s(S, T.props)), ($.ref = to(E, S, T)), ($.return = E), $)
        : (($ = Di(T.type, T.key, T.props, null, E.mode, $)),
          ($.ref = to(E, S, T)),
          ($.return = E),
          $);
    }
    function P(E, S, T, $) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== T.containerInfo ||
        S.stateNode.implementation !== T.implementation
        ? ((S = da(T, E.mode, $)), (S.return = E), S)
        : ((S = s(S, T.children || [])), (S.return = E), S);
    }
    function D(E, S, T, $, Z) {
      return S === null || S.tag !== 7
        ? ((S = Un(T, E.mode, $, Z)), (S.return = E), S)
        : ((S = s(S, T)), (S.return = E), S);
    }
    function j(E, S, T) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (S = fa("" + S, E.mode, T)), (S.return = E), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case H:
            return (
              (T = Di(S.type, S.key, S.props, null, E.mode, T)),
              (T.ref = to(E, null, S)),
              (T.return = E),
              T
            );
          case G:
            return (S = da(S, E.mode, T)), (S.return = E), S;
          case be:
            var $ = S._init;
            return j(E, $(S._payload), T);
        }
        if (Ar(S) || ne(S))
          return (S = Un(S, E.mode, T, null)), (S.return = E), S;
        fi(E, S);
      }
      return null;
    }
    function z(E, S, T, $) {
      var Z = S !== null ? S.key : null;
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return Z !== null ? null : g(E, S, "" + T, $);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case H:
            return T.key === Z ? y(E, S, T, $) : null;
          case G:
            return T.key === Z ? P(E, S, T, $) : null;
          case be:
            return (Z = T._init), z(E, S, Z(T._payload), $);
        }
        if (Ar(T) || ne(T)) return Z !== null ? null : D(E, S, T, $, null);
        fi(E, T);
      }
      return null;
    }
    function V(E, S, T, $, Z) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return (E = E.get(T) || null), g(S, E, "" + $, Z);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case H:
            return (
              (E = E.get($.key === null ? T : $.key) || null), y(S, E, $, Z)
            );
          case G:
            return (
              (E = E.get($.key === null ? T : $.key) || null), P(S, E, $, Z)
            );
          case be:
            var ee = $._init;
            return V(E, S, T, ee($._payload), Z);
        }
        if (Ar($) || ne($)) return (E = E.get(T) || null), D(S, E, $, Z, null);
        fi(S, $);
      }
      return null;
    }
    function Y(E, S, T, $) {
      for (
        var Z = null, ee = null, te = S, oe = (S = 0), Xe = null;
        te !== null && oe < T.length;
        oe++
      ) {
        te.index > oe ? ((Xe = te), (te = null)) : (Xe = te.sibling);
        var me = z(E, te, T[oe], $);
        if (me === null) {
          te === null && (te = Xe);
          break;
        }
        e && te && me.alternate === null && t(E, te),
          (S = c(me, S, oe)),
          ee === null ? (Z = me) : (ee.sibling = me),
          (ee = me),
          (te = Xe);
      }
      if (oe === T.length) return n(E, te), Ne && zn(E, oe), Z;
      if (te === null) {
        for (; oe < T.length; oe++)
          (te = j(E, T[oe], $)),
            te !== null &&
              ((S = c(te, S, oe)),
              ee === null ? (Z = te) : (ee.sibling = te),
              (ee = te));
        return Ne && zn(E, oe), Z;
      }
      for (te = i(E, te); oe < T.length; oe++)
        (Xe = V(te, E, oe, T[oe], $)),
          Xe !== null &&
            (e &&
              Xe.alternate !== null &&
              te.delete(Xe.key === null ? oe : Xe.key),
            (S = c(Xe, S, oe)),
            ee === null ? (Z = Xe) : (ee.sibling = Xe),
            (ee = Xe));
      return (
        e &&
          te.forEach(function (Pn) {
            return t(E, Pn);
          }),
        Ne && zn(E, oe),
        Z
      );
    }
    function J(E, S, T, $) {
      var Z = ne(T);
      if (typeof Z != "function") throw Error(l(150));
      if (((T = Z.call(T)), T == null)) throw Error(l(151));
      for (
        var ee = (Z = null), te = S, oe = (S = 0), Xe = null, me = T.next();
        te !== null && !me.done;
        oe++, me = T.next()
      ) {
        te.index > oe ? ((Xe = te), (te = null)) : (Xe = te.sibling);
        var Pn = z(E, te, me.value, $);
        if (Pn === null) {
          te === null && (te = Xe);
          break;
        }
        e && te && Pn.alternate === null && t(E, te),
          (S = c(Pn, S, oe)),
          ee === null ? (Z = Pn) : (ee.sibling = Pn),
          (ee = Pn),
          (te = Xe);
      }
      if (me.done) return n(E, te), Ne && zn(E, oe), Z;
      if (te === null) {
        for (; !me.done; oe++, me = T.next())
          (me = j(E, me.value, $)),
            me !== null &&
              ((S = c(me, S, oe)),
              ee === null ? (Z = me) : (ee.sibling = me),
              (ee = me));
        return Ne && zn(E, oe), Z;
      }
      for (te = i(E, te); !me.done; oe++, me = T.next())
        (me = V(te, E, oe, me.value, $)),
          me !== null &&
            (e &&
              me.alternate !== null &&
              te.delete(me.key === null ? oe : me.key),
            (S = c(me, S, oe)),
            ee === null ? (Z = me) : (ee.sibling = me),
            (ee = me));
      return (
        e &&
          te.forEach(function ($m) {
            return t(E, $m);
          }),
        Ne && zn(E, oe),
        Z
      );
    }
    function Me(E, S, T, $) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === W &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case H:
            e: {
              for (var Z = T.key, ee = S; ee !== null; ) {
                if (ee.key === Z) {
                  if (((Z = T.type), Z === W)) {
                    if (ee.tag === 7) {
                      n(E, ee.sibling),
                        (S = s(ee, T.props.children)),
                        (S.return = E),
                        (E = S);
                      break e;
                    }
                  } else if (
                    ee.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === be &&
                      Ac(Z) === ee.type)
                  ) {
                    n(E, ee.sibling),
                      (S = s(ee, T.props)),
                      (S.ref = to(E, ee, T)),
                      (S.return = E),
                      (E = S);
                    break e;
                  }
                  n(E, ee);
                  break;
                } else t(E, ee);
                ee = ee.sibling;
              }
              T.type === W
                ? ((S = Un(T.props.children, E.mode, $, T.key)),
                  (S.return = E),
                  (E = S))
                : (($ = Di(T.type, T.key, T.props, null, E.mode, $)),
                  ($.ref = to(E, S, T)),
                  ($.return = E),
                  (E = $));
            }
            return d(E);
          case G:
            e: {
              for (ee = T.key; S !== null; ) {
                if (S.key === ee)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === T.containerInfo &&
                    S.stateNode.implementation === T.implementation
                  ) {
                    n(E, S.sibling),
                      (S = s(S, T.children || [])),
                      (S.return = E),
                      (E = S);
                    break e;
                  } else {
                    n(E, S);
                    break;
                  }
                else t(E, S);
                S = S.sibling;
              }
              (S = da(T, E.mode, $)), (S.return = E), (E = S);
            }
            return d(E);
          case be:
            return (ee = T._init), Me(E, S, ee(T._payload), $);
        }
        if (Ar(T)) return Y(E, S, T, $);
        if (ne(T)) return J(E, S, T, $);
        fi(E, T);
      }
      return (typeof T == "string" && T !== "") || typeof T == "number"
        ? ((T = "" + T),
          S !== null && S.tag === 6
            ? (n(E, S.sibling), (S = s(S, T)), (S.return = E), (E = S))
            : (n(E, S), (S = fa(T, E.mode, $)), (S.return = E), (E = S)),
          d(E))
        : n(E, S);
    }
    return Me;
  }
  var ar = Nc(!0),
    Lc = Nc(!1),
    di = gn(null),
    pi = null,
    ur = null,
    ks = null;
  function Cs() {
    ks = ur = pi = null;
  }
  function xs(e) {
    var t = di.current;
    Oe(di), (e._currentValue = t);
  }
  function Es(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function cr(e, t) {
    (pi = e),
      (ks = ur = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (ct = !0), (e.firstContext = null));
  }
  function Pt(e) {
    var t = e._currentValue;
    if (ks !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
        if (pi === null) throw Error(l(308));
        (ur = e), (pi.dependencies = { lanes: 0, firstContext: e });
      } else ur = ur.next = e;
    return t;
  }
  var Fn = null;
  function Ts(e) {
    Fn === null ? (Fn = [e]) : Fn.push(e);
  }
  function zc(e, t, n, i) {
    var s = t.interleaved;
    return (
      s === null ? ((n.next = n), Ts(t)) : ((n.next = s.next), (s.next = n)),
      (t.interleaved = n),
      tn(e, i)
    );
  }
  function tn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var wn = !1;
  function _s(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Fc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function nn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Sn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), de & 2)) {
      var s = i.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (i.pending = t),
        tn(e, n)
      );
    }
    return (
      (s = i.interleaved),
      s === null ? ((t.next = t), Ts(i)) : ((t.next = s.next), (s.next = t)),
      (i.interleaved = t),
      tn(e, n)
    );
  }
  function hi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), Ml(e, n);
    }
  }
  function Dc(e, t) {
    var n = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          c === null ? (s = c = d) : (c = c.next = d), (n = n.next);
        } while (n !== null);
        c === null ? (s = c = t) : (c = c.next = t);
      } else s = c = t;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function mi(e, t, n, i) {
    var s = e.updateQueue;
    wn = !1;
    var c = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var y = g,
        P = y.next;
      (y.next = null), d === null ? (c = P) : (d.next = P), (d = y);
      var D = e.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (g = D.lastBaseUpdate),
        g !== d &&
          (g === null ? (D.firstBaseUpdate = P) : (g.next = P),
          (D.lastBaseUpdate = y)));
    }
    if (c !== null) {
      var j = s.baseState;
      (d = 0), (D = P = y = null), (g = c);
      do {
        var z = g.lane,
          V = g.eventTime;
        if ((i & z) === z) {
          D !== null &&
            (D = D.next =
              {
                eventTime: V,
                lane: 0,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null,
              });
          e: {
            var Y = e,
              J = g;
            switch (((z = t), (V = n), J.tag)) {
              case 1:
                if (((Y = J.payload), typeof Y == "function")) {
                  j = Y.call(V, j, z);
                  break e;
                }
                j = Y;
                break e;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = J.payload),
                  (z = typeof Y == "function" ? Y.call(V, j, z) : Y),
                  z == null)
                )
                  break e;
                j = q({}, j, z);
                break e;
              case 2:
                wn = !0;
            }
          }
          g.callback !== null &&
            g.lane !== 0 &&
            ((e.flags |= 64),
            (z = s.effects),
            z === null ? (s.effects = [g]) : z.push(g));
        } else
          (V = {
            eventTime: V,
            lane: z,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            D === null ? ((P = D = V), (y = j)) : (D = D.next = V),
            (d |= z);
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          (z = g),
            (g = z.next),
            (z.next = null),
            (s.lastBaseUpdate = z),
            (s.shared.pending = null);
        }
      } while (!0);
      if (
        (D === null && (y = j),
        (s.baseState = y),
        (s.firstBaseUpdate = P),
        (s.lastBaseUpdate = D),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do (d |= s.lane), (s = s.next);
        while (s !== t);
      } else c === null && (s.shared.lanes = 0);
      (In |= d), (e.lanes = d), (e.memoizedState = j);
    }
  }
  function jc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          s = i.callback;
        if (s !== null) {
          if (((i.callback = null), (i = n), typeof s != "function"))
            throw Error(l(191, s));
          s.call(i);
        }
      }
  }
  var no = {},
    Ht = gn(no),
    ro = gn(no),
    oo = gn(no);
  function Dn(e) {
    if (e === no) throw Error(l(174));
    return e;
  }
  function Ps(e, t) {
    switch ((Te(oo, t), Te(ro, e), Te(Ht, no), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Rl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Rl(t, e));
    }
    Oe(Ht), Te(Ht, t);
  }
  function fr() {
    Oe(Ht), Oe(ro), Oe(oo);
  }
  function Ic(e) {
    Dn(oo.current);
    var t = Dn(Ht.current),
      n = Rl(t, e.type);
    t !== n && (Te(ro, e), Te(Ht, n));
  }
  function Rs(e) {
    ro.current === e && (Oe(Ht), Oe(ro));
  }
  var ze = gn(0);
  function gi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Os = [];
  function As() {
    for (var e = 0; e < Os.length; e++)
      Os[e]._workInProgressVersionPrimary = null;
    Os.length = 0;
  }
  var yi = U.ReactCurrentDispatcher,
    Ns = U.ReactCurrentBatchConfig,
    jn = 0,
    Fe = null,
    Ke = null,
    qe = null,
    vi = !1,
    io = !1,
    lo = 0,
    lm = 0;
  function tt() {
    throw Error(l(321));
  }
  function Ls(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ft(e[n], t[n])) return !1;
    return !0;
  }
  function zs(e, t, n, i, s, c) {
    if (
      ((jn = c),
      (Fe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (yi.current = e === null || e.memoizedState === null ? cm : fm),
      (e = n(i, s)),
      io)
    ) {
      c = 0;
      do {
        if (((io = !1), (lo = 0), 25 <= c)) throw Error(l(301));
        (c += 1),
          (qe = Ke = null),
          (t.updateQueue = null),
          (yi.current = dm),
          (e = n(i, s));
      } while (io);
    }
    if (
      ((yi.current = ki),
      (t = Ke !== null && Ke.next !== null),
      (jn = 0),
      (qe = Ke = Fe = null),
      (vi = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function Fs() {
    var e = lo !== 0;
    return (lo = 0), e;
  }
  function Vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return qe === null ? (Fe.memoizedState = qe = e) : (qe = qe.next = e), qe;
  }
  function Rt() {
    if (Ke === null) {
      var e = Fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var t = qe === null ? Fe.memoizedState : qe.next;
    if (t !== null) (qe = t), (Ke = e);
    else {
      if (e === null) throw Error(l(310));
      (Ke = e),
        (e = {
          memoizedState: Ke.memoizedState,
          baseState: Ke.baseState,
          baseQueue: Ke.baseQueue,
          queue: Ke.queue,
          next: null,
        }),
        qe === null ? (Fe.memoizedState = qe = e) : (qe = qe.next = e);
    }
    return qe;
  }
  function so(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ds(e) {
    var t = Rt(),
      n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var i = Ke,
      s = i.baseQueue,
      c = n.pending;
    if (c !== null) {
      if (s !== null) {
        var d = s.next;
        (s.next = c.next), (c.next = d);
      }
      (i.baseQueue = s = c), (n.pending = null);
    }
    if (s !== null) {
      (c = s.next), (i = i.baseState);
      var g = (d = null),
        y = null,
        P = c;
      do {
        var D = P.lane;
        if ((jn & D) === D)
          y !== null &&
            (y = y.next =
              {
                lane: 0,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null,
              }),
            (i = P.hasEagerState ? P.eagerState : e(i, P.action));
        else {
          var j = {
            lane: D,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null,
          };
          y === null ? ((g = y = j), (d = i)) : (y = y.next = j),
            (Fe.lanes |= D),
            (In |= D);
        }
        P = P.next;
      } while (P !== null && P !== c);
      y === null ? (d = i) : (y.next = g),
        Ft(i, t.memoizedState) || (ct = !0),
        (t.memoizedState = i),
        (t.baseState = d),
        (t.baseQueue = y),
        (n.lastRenderedState = i);
    }
    if (((e = n.interleaved), e !== null)) {
      s = e;
      do (c = s.lane), (Fe.lanes |= c), (In |= c), (s = s.next);
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function js(e) {
    var t = Rt(),
      n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch,
      s = n.pending,
      c = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = (s = s.next);
      do (c = e(c, d.action)), (d = d.next);
      while (d !== s);
      Ft(c, t.memoizedState) || (ct = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (n.lastRenderedState = c);
    }
    return [c, i];
  }
  function $c() {}
  function Bc(e, t) {
    var n = Fe,
      i = Rt(),
      s = t(),
      c = !Ft(i.memoizedState, s);
    if (
      (c && ((i.memoizedState = s), (ct = !0)),
      (i = i.queue),
      Is(bc.bind(null, n, i, e), [e]),
      i.getSnapshot !== t || c || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ao(9, Uc.bind(null, n, i, s, t), void 0, null),
        Ge === null)
      )
        throw Error(l(349));
      jn & 30 || Mc(n, t, s);
    }
    return s;
  }
  function Mc(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Fe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Uc(e, t, n, i) {
    (t.value = n), (t.getSnapshot = i), Hc(t) && Vc(e);
  }
  function bc(e, t, n) {
    return n(function () {
      Hc(t) && Vc(e);
    });
  }
  function Hc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ft(e, n);
    } catch {
      return !0;
    }
  }
  function Vc(e) {
    var t = tn(e, 1);
    t !== null && Bt(t, e, 1, -1);
  }
  function Wc(e) {
    var t = Vt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: so,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = um.bind(null, Fe, e)),
      [t.memoizedState, e]
    );
  }
  function ao(e, t, n, i) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
      (t = Fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Fe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
      e
    );
  }
  function Kc() {
    return Rt().memoizedState;
  }
  function wi(e, t, n, i) {
    var s = Vt();
    (Fe.flags |= e),
      (s.memoizedState = ao(1 | t, n, void 0, i === void 0 ? null : i));
  }
  function Si(e, t, n, i) {
    var s = Rt();
    i = i === void 0 ? null : i;
    var c = void 0;
    if (Ke !== null) {
      var d = Ke.memoizedState;
      if (((c = d.destroy), i !== null && Ls(i, d.deps))) {
        s.memoizedState = ao(t, n, c, i);
        return;
      }
    }
    (Fe.flags |= e), (s.memoizedState = ao(1 | t, n, c, i));
  }
  function Qc(e, t) {
    return wi(8390656, 8, e, t);
  }
  function Is(e, t) {
    return Si(2048, 8, e, t);
  }
  function qc(e, t) {
    return Si(4, 2, e, t);
  }
  function Gc(e, t) {
    return Si(4, 4, e, t);
  }
  function Xc(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Yc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Si(4, 4, Xc.bind(null, t, e), n)
    );
  }
  function $s() {}
  function Jc(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Ls(t, i[1])
      ? i[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Zc(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Ls(t, i[1])
      ? i[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function ef(e, t, n) {
    return jn & 21
      ? (Ft(n, t) ||
          ((n = Au()), (Fe.lanes |= n), (In |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (ct = !0)), (e.memoizedState = n));
  }
  function sm(e, t) {
    var n = Se;
    (Se = n !== 0 && 4 > n ? n : 4), e(!0);
    var i = Ns.transition;
    Ns.transition = {};
    try {
      e(!1), t();
    } finally {
      (Se = n), (Ns.transition = i);
    }
  }
  function tf() {
    return Rt().memoizedState;
  }
  function am(e, t, n) {
    var i = En(e);
    if (
      ((n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      nf(e))
    )
      rf(t, n);
    else if (((n = zc(e, t, n, i)), n !== null)) {
      var s = st();
      Bt(n, e, i, s), of(n, t, i);
    }
  }
  function um(e, t, n) {
    var i = En(e),
      s = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (nf(e)) rf(t, s);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var d = t.lastRenderedState,
            g = c(d, n);
          if (((s.hasEagerState = !0), (s.eagerState = g), Ft(g, d))) {
            var y = t.interleaved;
            y === null
              ? ((s.next = s), Ts(t))
              : ((s.next = y.next), (y.next = s)),
              (t.interleaved = s);
            return;
          }
        } catch {
        } finally {
        }
      (n = zc(e, t, s, i)),
        n !== null && ((s = st()), Bt(n, e, i, s), of(n, t, i));
    }
  }
  function nf(e) {
    var t = e.alternate;
    return e === Fe || (t !== null && t === Fe);
  }
  function rf(e, t) {
    io = vi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function of(e, t, n) {
    if (n & 4194240) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), Ml(e, n);
    }
  }
  var ki = {
      readContext: Pt,
      useCallback: tt,
      useContext: tt,
      useEffect: tt,
      useImperativeHandle: tt,
      useInsertionEffect: tt,
      useLayoutEffect: tt,
      useMemo: tt,
      useReducer: tt,
      useRef: tt,
      useState: tt,
      useDebugValue: tt,
      useDeferredValue: tt,
      useTransition: tt,
      useMutableSource: tt,
      useSyncExternalStore: tt,
      useId: tt,
      unstable_isNewReconciler: !1,
    },
    cm = {
      readContext: Pt,
      useCallback: function (e, t) {
        return (Vt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Pt,
      useEffect: Qc,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          wi(4194308, 4, Xc.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return wi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return wi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Vt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var i = Vt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (i.memoizedState = i.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (i.queue = e),
          (e = e.dispatch = am.bind(null, Fe, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Vt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Wc,
      useDebugValue: $s,
      useDeferredValue: function (e) {
        return (Vt().memoizedState = e);
      },
      useTransition: function () {
        var e = Wc(!1),
          t = e[0];
        return (e = sm.bind(null, e[1])), (Vt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var i = Fe,
          s = Vt();
        if (Ne) {
          if (n === void 0) throw Error(l(407));
          n = n();
        } else {
          if (((n = t()), Ge === null)) throw Error(l(349));
          jn & 30 || Mc(i, t, n);
        }
        s.memoizedState = n;
        var c = { value: n, getSnapshot: t };
        return (
          (s.queue = c),
          Qc(bc.bind(null, i, c, e), [e]),
          (i.flags |= 2048),
          ao(9, Uc.bind(null, i, c, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Vt(),
          t = Ge.identifierPrefix;
        if (Ne) {
          var n = en,
            i = Zt;
          (n = (i & ~(1 << (32 - zt(i) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = lo++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = lm++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    fm = {
      readContext: Pt,
      useCallback: Jc,
      useContext: Pt,
      useEffect: Is,
      useImperativeHandle: Yc,
      useInsertionEffect: qc,
      useLayoutEffect: Gc,
      useMemo: Zc,
      useReducer: Ds,
      useRef: Kc,
      useState: function () {
        return Ds(so);
      },
      useDebugValue: $s,
      useDeferredValue: function (e) {
        var t = Rt();
        return ef(t, Ke.memoizedState, e);
      },
      useTransition: function () {
        var e = Ds(so)[0],
          t = Rt().memoizedState;
        return [e, t];
      },
      useMutableSource: $c,
      useSyncExternalStore: Bc,
      useId: tf,
      unstable_isNewReconciler: !1,
    },
    dm = {
      readContext: Pt,
      useCallback: Jc,
      useContext: Pt,
      useEffect: Is,
      useImperativeHandle: Yc,
      useInsertionEffect: qc,
      useLayoutEffect: Gc,
      useMemo: Zc,
      useReducer: js,
      useRef: Kc,
      useState: function () {
        return js(so);
      },
      useDebugValue: $s,
      useDeferredValue: function (e) {
        var t = Rt();
        return Ke === null ? (t.memoizedState = e) : ef(t, Ke.memoizedState, e);
      },
      useTransition: function () {
        var e = js(so)[0],
          t = Rt().memoizedState;
        return [e, t];
      },
      useMutableSource: $c,
      useSyncExternalStore: Bc,
      useId: tf,
      unstable_isNewReconciler: !1,
    };
  function jt(e, t) {
    if (e && e.defaultProps) {
      (t = q({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Bs(e, t, n, i) {
    (t = e.memoizedState),
      (n = n(i, t)),
      (n = n == null ? t : q({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ci = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? On(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var i = st(),
        s = En(e),
        c = nn(i, s);
      (c.payload = t),
        n != null && (c.callback = n),
        (t = Sn(e, c, s)),
        t !== null && (Bt(t, e, s, i), hi(t, e, s));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var i = st(),
        s = En(e),
        c = nn(i, s);
      (c.tag = 1),
        (c.payload = t),
        n != null && (c.callback = n),
        (t = Sn(e, c, s)),
        t !== null && (Bt(t, e, s, i), hi(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = st(),
        i = En(e),
        s = nn(n, i);
      (s.tag = 2),
        t != null && (s.callback = t),
        (t = Sn(e, s, i)),
        t !== null && (Bt(t, e, i, n), hi(t, e, i));
    },
  };
  function lf(e, t, n, i, s, c, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, c, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !qr(n, i) || !qr(s, c)
        : !0
    );
  }
  function sf(e, t, n) {
    var i = !1,
      s = yn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = Pt(c))
        : ((s = ut(t) ? Nn : et.current),
          (i = t.contextTypes),
          (c = (i = i != null) ? or(e, s) : yn)),
      (t = new t(n, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ci),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function af(e, t, n, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== e && Ci.enqueueReplaceState(t, t.state, null);
  }
  function Ms(e, t, n, i) {
    var s = e.stateNode;
    (s.props = n), (s.state = e.memoizedState), (s.refs = {}), _s(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (s.context = Pt(c))
      : ((c = ut(t) ? Nn : et.current), (s.context = or(e, c))),
      (s.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (Bs(e, t, c, n), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function" ||
        (typeof s.UNSAFE_componentWillMount != "function" &&
          typeof s.componentWillMount != "function") ||
        ((t = s.state),
        typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" &&
          s.UNSAFE_componentWillMount(),
        t !== s.state && Ci.enqueueReplaceState(s, s.state, null),
        mi(e, n, s, i),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function dr(e, t) {
    try {
      var n = "",
        i = t;
      do (n += pe(i)), (i = i.return);
      while (i);
      var s = n;
    } catch (c) {
      s =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Us(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var pm = typeof WeakMap == "function" ? WeakMap : Map;
  function uf(e, t, n) {
    (n = nn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var i = t.value;
    return (
      (n.callback = function () {
        Oi || ((Oi = !0), (ra = i)), bs(e, t);
      }),
      n
    );
  }
  function cf(e, t, n) {
    (n = nn(-1, n)), (n.tag = 3);
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = t.value;
      (n.payload = function () {
        return i(s);
      }),
        (n.callback = function () {
          bs(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (n.callback = function () {
          bs(e, t),
            typeof i != "function" &&
              (Cn === null ? (Cn = new Set([this])) : Cn.add(this));
          var d = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: d !== null ? d : "",
          });
        }),
      n
    );
  }
  function ff(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new pm();
      var s = new Set();
      i.set(t, s);
    } else (s = i.get(t)), s === void 0 && ((s = new Set()), i.set(t, s));
    s.has(n) || (s.add(n), (e = Pm.bind(null, e, t, n)), t.then(e, e));
  }
  function df(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function pf(e, t, n, i, s) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = s), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = nn(-1, 1)), (t.tag = 2), Sn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var hm = U.ReactCurrentOwner,
    ct = !1;
  function lt(e, t, n, i) {
    t.child = e === null ? Lc(t, null, n, i) : ar(t, e.child, n, i);
  }
  function hf(e, t, n, i, s) {
    n = n.render;
    var c = t.ref;
    return (
      cr(t, s),
      (i = zs(e, t, n, i, c, s)),
      (n = Fs()),
      e !== null && !ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          rn(e, t, s))
        : (Ne && n && gs(t), (t.flags |= 1), lt(e, t, i, s), t.child)
    );
  }
  function mf(e, t, n, i, s) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" &&
        !ca(c) &&
        c.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), gf(e, t, c, i, s))
        : ((e = Di(n.type, null, i, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !(e.lanes & s))) {
      var d = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : qr), n(d, i) && e.ref === t.ref)
      )
        return rn(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = _n(c, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function gf(e, t, n, i, s) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (qr(c, i) && e.ref === t.ref)
        if (((ct = !1), (t.pendingProps = i = c), (e.lanes & s) !== 0))
          e.flags & 131072 && (ct = !0);
        else return (t.lanes = e.lanes), rn(e, t, s);
    }
    return Hs(e, t, n, i, s);
  }
  function yf(e, t, n) {
    var i = t.pendingProps,
      s = i.children,
      c = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Te(hr, St),
          (St |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = c !== null ? c.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Te(hr, St),
            (St |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = c !== null ? c.baseLanes : n),
          Te(hr, St),
          (St |= i);
      }
    else
      c !== null ? ((i = c.baseLanes | n), (t.memoizedState = null)) : (i = n),
        Te(hr, St),
        (St |= i);
    return lt(e, t, s, n), t.child;
  }
  function vf(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Hs(e, t, n, i, s) {
    var c = ut(n) ? Nn : et.current;
    return (
      (c = or(t, c)),
      cr(t, s),
      (n = zs(e, t, n, i, c, s)),
      (i = Fs()),
      e !== null && !ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          rn(e, t, s))
        : (Ne && i && gs(t), (t.flags |= 1), lt(e, t, n, s), t.child)
    );
  }
  function wf(e, t, n, i, s) {
    if (ut(n)) {
      var c = !0;
      li(t);
    } else c = !1;
    if ((cr(t, s), t.stateNode === null))
      Ei(e, t), sf(t, n, i), Ms(t, n, i, s), (i = !0);
    else if (e === null) {
      var d = t.stateNode,
        g = t.memoizedProps;
      d.props = g;
      var y = d.context,
        P = n.contextType;
      typeof P == "object" && P !== null
        ? (P = Pt(P))
        : ((P = ut(n) ? Nn : et.current), (P = or(t, P)));
      var D = n.getDerivedStateFromProps,
        j =
          typeof D == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function";
      j ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((g !== i || y !== P) && af(t, d, i, P)),
        (wn = !1);
      var z = t.memoizedState;
      (d.state = z),
        mi(t, i, d, s),
        (y = t.memoizedState),
        g !== i || z !== y || at.current || wn
          ? (typeof D == "function" && (Bs(t, n, D, i), (y = t.memoizedState)),
            (g = wn || lf(t, n, g, i, z, y, P))
              ? (j ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = y)),
            (d.props = i),
            (d.state = y),
            (d.context = P),
            (i = g))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (d = t.stateNode),
        Fc(e, t),
        (g = t.memoizedProps),
        (P = t.type === t.elementType ? g : jt(t.type, g)),
        (d.props = P),
        (j = t.pendingProps),
        (z = d.context),
        (y = n.contextType),
        typeof y == "object" && y !== null
          ? (y = Pt(y))
          : ((y = ut(n) ? Nn : et.current), (y = or(t, y)));
      var V = n.getDerivedStateFromProps;
      (D =
        typeof V == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function") ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((g !== j || z !== y) && af(t, d, i, y)),
        (wn = !1),
        (z = t.memoizedState),
        (d.state = z),
        mi(t, i, d, s);
      var Y = t.memoizedState;
      g !== j || z !== Y || at.current || wn
        ? (typeof V == "function" && (Bs(t, n, V, i), (Y = t.memoizedState)),
          (P = wn || lf(t, n, P, i, z, Y, y) || !1)
            ? (D ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(i, Y, y),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(i, Y, y)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (g === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = Y)),
          (d.props = i),
          (d.state = Y),
          (d.context = y),
          (i = P))
        : (typeof d.componentDidUpdate != "function" ||
            (g === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return Vs(e, t, n, i, c, s);
  }
  function Vs(e, t, n, i, s, c) {
    vf(e, t);
    var d = (t.flags & 128) !== 0;
    if (!i && !d) return s && xc(t, n, !1), rn(e, t, c);
    (i = t.stateNode), (hm.current = t);
    var g =
      d && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = ar(t, e.child, null, c)), (t.child = ar(t, null, g, c)))
        : lt(e, t, g, c),
      (t.memoizedState = i.state),
      s && xc(t, n, !0),
      t.child
    );
  }
  function Sf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? kc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && kc(e, t.context, !1),
      Ps(e, t.containerInfo);
  }
  function kf(e, t, n, i, s) {
    return sr(), Ss(s), (t.flags |= 256), lt(e, t, n, i), t.child;
  }
  var Ws = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ks(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Cf(e, t, n) {
    var i = t.pendingProps,
      s = ze.current,
      c = !1,
      d = (t.flags & 128) !== 0,
      g;
    if (
      ((g = d) ||
        (g = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      g
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (s |= 1),
      Te(ze, s & 1),
      e === null)
    )
      return (
        ws(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((d = i.children),
            (e = i.fallback),
            c
              ? ((i = t.mode),
                (c = t.child),
                (d = { mode: "hidden", children: d }),
                !(i & 1) && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = d))
                  : (c = ji(d, i, 0, null)),
                (e = Un(e, i, n, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = Ks(n)),
                (t.memoizedState = Ws),
                e)
              : Qs(t, d))
      );
    if (((s = e.memoizedState), s !== null && ((g = s.dehydrated), g !== null)))
      return mm(e, t, d, i, g, s, n);
    if (c) {
      (c = i.fallback), (d = t.mode), (s = e.child), (g = s.sibling);
      var y = { mode: "hidden", children: i.children };
      return (
        !(d & 1) && t.child !== s
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = y),
            (t.deletions = null))
          : ((i = _n(s, y)), (i.subtreeFlags = s.subtreeFlags & 14680064)),
        g !== null ? (c = _n(g, c)) : ((c = Un(c, d, n, null)), (c.flags |= 2)),
        (c.return = t),
        (i.return = t),
        (i.sibling = c),
        (t.child = i),
        (i = c),
        (c = t.child),
        (d = e.child.memoizedState),
        (d =
          d === null
            ? Ks(n)
            : {
                baseLanes: d.baseLanes | n,
                cachePool: null,
                transitions: d.transitions,
              }),
        (c.memoizedState = d),
        (c.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ws),
        i
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (i = _n(c, { mode: "visible", children: i.children })),
      !(t.mode & 1) && (i.lanes = n),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    );
  }
  function Qs(e, t) {
    return (
      (t = ji({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function xi(e, t, n, i) {
    return (
      i !== null && Ss(i),
      ar(t, e.child, null, n),
      (e = Qs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function mm(e, t, n, i, s, c, d) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (i = Us(Error(l(422)))), xi(e, t, d, i))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = i.fallback),
          (s = t.mode),
          (i = ji({ mode: "visible", children: i.children }, s, 0, null)),
          (c = Un(c, s, d, null)),
          (c.flags |= 2),
          (i.return = t),
          (c.return = t),
          (i.sibling = c),
          (t.child = i),
          t.mode & 1 && ar(t, e.child, null, d),
          (t.child.memoizedState = Ks(d)),
          (t.memoizedState = Ws),
          c);
    if (!(t.mode & 1)) return xi(e, t, d, null);
    if (s.data === "$!") {
      if (((i = s.nextSibling && s.nextSibling.dataset), i)) var g = i.dgst;
      return (
        (i = g), (c = Error(l(419))), (i = Us(c, i, void 0)), xi(e, t, d, i)
      );
    }
    if (((g = (d & e.childLanes) !== 0), ct || g)) {
      if (((i = Ge), i !== null)) {
        switch (d & -d) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        (s = s & (i.suspendedLanes | d) ? 0 : s),
          s !== 0 &&
            s !== c.retryLane &&
            ((c.retryLane = s), tn(e, s), Bt(i, e, s, -1));
      }
      return ua(), (i = Us(Error(l(421)))), xi(e, t, d, i);
    }
    return s.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Rm.bind(null, e)),
        (s._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (wt = mn(s.nextSibling)),
        (vt = t),
        (Ne = !0),
        (Dt = null),
        e !== null &&
          ((Tt[_t++] = Zt),
          (Tt[_t++] = en),
          (Tt[_t++] = Ln),
          (Zt = e.id),
          (en = e.overflow),
          (Ln = t)),
        (t = Qs(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function xf(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Es(e.return, t, n);
  }
  function qs(e, t, n, i, s) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = i),
        (c.tail = n),
        (c.tailMode = s));
  }
  function Ef(e, t, n) {
    var i = t.pendingProps,
      s = i.revealOrder,
      c = i.tail;
    if ((lt(e, t, i.children, n), (i = ze.current), i & 2))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && xf(e, n, t);
          else if (e.tag === 19) xf(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      i &= 1;
    }
    if ((Te(ze, i), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (s) {
        case "forwards":
          for (n = t.child, s = null; n !== null; )
            (e = n.alternate),
              e !== null && gi(e) === null && (s = n),
              (n = n.sibling);
          (n = s),
            n === null
              ? ((s = t.child), (t.child = null))
              : ((s = n.sibling), (n.sibling = null)),
            qs(t, !1, s, n, c);
          break;
        case "backwards":
          for (n = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && gi(e) === null)) {
              t.child = s;
              break;
            }
            (e = s.sibling), (s.sibling = n), (n = s), (s = e);
          }
          qs(t, !0, n, null, c);
          break;
        case "together":
          qs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ei(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function rn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (In |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = _n(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function gm(e, t, n) {
    switch (t.tag) {
      case 3:
        Sf(t), sr();
        break;
      case 5:
        Ic(t);
        break;
      case 1:
        ut(t.type) && li(t);
        break;
      case 4:
        Ps(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context,
          s = t.memoizedProps.value;
        Te(di, i._currentValue), (i._currentValue = s);
        break;
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (Te(ze, ze.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Cf(e, t, n)
            : (Te(ze, ze.current & 1),
              (e = rn(e, t, n)),
              e !== null ? e.sibling : null);
        Te(ze, ze.current & 1);
        break;
      case 19:
        if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (i) return Ef(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Te(ze, ze.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), yf(e, t, n);
    }
    return rn(e, t, n);
  }
  var Tf, Gs, _f, Pf;
  (Tf = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Gs = function () {}),
    (_f = function (e, t, n, i) {
      var s = e.memoizedProps;
      if (s !== i) {
        (e = t.stateNode), Dn(Ht.current);
        var c = null;
        switch (n) {
          case "input":
            (s = El(e, s)), (i = El(e, i)), (c = []);
            break;
          case "select":
            (s = q({}, s, { value: void 0 })),
              (i = q({}, i, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (s = Pl(e, s)), (i = Pl(e, i)), (c = []);
            break;
          default:
            typeof s.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = ri);
        }
        Ol(n, i);
        var d;
        n = null;
        for (P in s)
          if (!i.hasOwnProperty(P) && s.hasOwnProperty(P) && s[P] != null)
            if (P === "style") {
              var g = s[P];
              for (d in g) g.hasOwnProperty(d) && (n || (n = {}), (n[d] = ""));
            } else
              P !== "dangerouslySetInnerHTML" &&
                P !== "children" &&
                P !== "suppressContentEditableWarning" &&
                P !== "suppressHydrationWarning" &&
                P !== "autoFocus" &&
                (u.hasOwnProperty(P)
                  ? c || (c = [])
                  : (c = c || []).push(P, null));
        for (P in i) {
          var y = i[P];
          if (
            ((g = s != null ? s[P] : void 0),
            i.hasOwnProperty(P) && y !== g && (y != null || g != null))
          )
            if (P === "style")
              if (g) {
                for (d in g)
                  !g.hasOwnProperty(d) ||
                    (y && y.hasOwnProperty(d)) ||
                    (n || (n = {}), (n[d] = ""));
                for (d in y)
                  y.hasOwnProperty(d) &&
                    g[d] !== y[d] &&
                    (n || (n = {}), (n[d] = y[d]));
              } else n || (c || (c = []), c.push(P, n)), (n = y);
            else
              P === "dangerouslySetInnerHTML"
                ? ((y = y ? y.__html : void 0),
                  (g = g ? g.__html : void 0),
                  y != null && g !== y && (c = c || []).push(P, y))
                : P === "children"
                ? (typeof y != "string" && typeof y != "number") ||
                  (c = c || []).push(P, "" + y)
                : P !== "suppressContentEditableWarning" &&
                  P !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(P)
                    ? (y != null && P === "onScroll" && Re("scroll", e),
                      c || g === y || (c = []))
                    : (c = c || []).push(P, y));
        }
        n && (c = c || []).push("style", n);
        var P = c;
        (t.updateQueue = P) && (t.flags |= 4);
      }
    }),
    (Pf = function (e, t, n, i) {
      n !== i && (t.flags |= 4);
    });
  function uo(e, t) {
    if (!Ne)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      i = 0;
    if (t)
      for (var s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 14680064),
          (i |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling);
    else
      for (s = e.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = e),
          (s = s.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = n), t;
  }
  function ym(e, t, n) {
    var i = t.pendingProps;
    switch ((ys(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nt(t), null;
      case 1:
        return ut(t.type) && ii(), nt(t), null;
      case 3:
        return (
          (i = t.stateNode),
          fr(),
          Oe(at),
          Oe(et),
          As(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (ci(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Dt !== null && (la(Dt), (Dt = null)))),
          Gs(e, t),
          nt(t),
          null
        );
      case 5:
        Rs(t);
        var s = Dn(oo.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          _f(e, t, n, i, s),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166));
            return nt(t), null;
          }
          if (((e = Dn(Ht.current)), ci(t))) {
            (i = t.stateNode), (n = t.type);
            var c = t.memoizedProps;
            switch (((i[bt] = t), (i[Zr] = c), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Re("cancel", i), Re("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Re("load", i);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Xr.length; s++) Re(Xr[s], i);
                break;
              case "source":
                Re("error", i);
                break;
              case "img":
              case "image":
              case "link":
                Re("error", i), Re("load", i);
                break;
              case "details":
                Re("toggle", i);
                break;
              case "input":
                lu(i, c), Re("invalid", i);
                break;
              case "select":
                (i._wrapperState = { wasMultiple: !!c.multiple }),
                  Re("invalid", i);
                break;
              case "textarea":
                uu(i, c), Re("invalid", i);
            }
            Ol(n, c), (s = null);
            for (var d in c)
              if (c.hasOwnProperty(d)) {
                var g = c[d];
                d === "children"
                  ? typeof g == "string"
                    ? i.textContent !== g &&
                      (c.suppressHydrationWarning !== !0 &&
                        ni(i.textContent, g, e),
                      (s = ["children", g]))
                    : typeof g == "number" &&
                      i.textContent !== "" + g &&
                      (c.suppressHydrationWarning !== !0 &&
                        ni(i.textContent, g, e),
                      (s = ["children", "" + g]))
                  : u.hasOwnProperty(d) &&
                    g != null &&
                    d === "onScroll" &&
                    Re("scroll", i);
              }
            switch (n) {
              case "input":
                zo(i), au(i, c, !0);
                break;
              case "textarea":
                zo(i), fu(i);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (i.onclick = ri);
            }
            (i = s), (t.updateQueue = i), i !== null && (t.flags |= 4);
          } else {
            (d = s.nodeType === 9 ? s : s.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = du(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = d.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == "string"
                  ? (e = d.createElement(n, { is: i.is }))
                  : ((e = d.createElement(n)),
                    n === "select" &&
                      ((d = e),
                      i.multiple
                        ? (d.multiple = !0)
                        : i.size && (d.size = i.size)))
                : (e = d.createElementNS(e, n)),
              (e[bt] = t),
              (e[Zr] = i),
              Tf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((d = Al(n, i)), n)) {
                case "dialog":
                  Re("cancel", e), Re("close", e), (s = i);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Re("load", e), (s = i);
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Xr.length; s++) Re(Xr[s], e);
                  s = i;
                  break;
                case "source":
                  Re("error", e), (s = i);
                  break;
                case "img":
                case "image":
                case "link":
                  Re("error", e), Re("load", e), (s = i);
                  break;
                case "details":
                  Re("toggle", e), (s = i);
                  break;
                case "input":
                  lu(e, i), (s = El(e, i)), Re("invalid", e);
                  break;
                case "option":
                  s = i;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!i.multiple }),
                    (s = q({}, i, { value: void 0 })),
                    Re("invalid", e);
                  break;
                case "textarea":
                  uu(e, i), (s = Pl(e, i)), Re("invalid", e);
                  break;
                default:
                  s = i;
              }
              Ol(n, s), (g = s);
              for (c in g)
                if (g.hasOwnProperty(c)) {
                  var y = g[c];
                  c === "style"
                    ? mu(e, y)
                    : c === "dangerouslySetInnerHTML"
                    ? ((y = y ? y.__html : void 0), y != null && pu(e, y))
                    : c === "children"
                    ? typeof y == "string"
                      ? (n !== "textarea" || y !== "") && Nr(e, y)
                      : typeof y == "number" && Nr(e, "" + y)
                    : c !== "suppressContentEditableWarning" &&
                      c !== "suppressHydrationWarning" &&
                      c !== "autoFocus" &&
                      (u.hasOwnProperty(c)
                        ? y != null && c === "onScroll" && Re("scroll", e)
                        : y != null && B(e, c, y, d));
                }
              switch (n) {
                case "input":
                  zo(e), au(e, i, !1);
                  break;
                case "textarea":
                  zo(e), fu(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + we(i.value));
                  break;
                case "select":
                  (e.multiple = !!i.multiple),
                    (c = i.value),
                    c != null
                      ? Kn(e, !!i.multiple, c, !1)
                      : i.defaultValue != null &&
                        Kn(e, !!i.multiple, i.defaultValue, !0);
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = ri);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return nt(t), null;
      case 6:
        if (e && t.stateNode != null) Pf(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(l(166));
          if (((n = Dn(oo.current)), Dn(Ht.current), ci(t))) {
            if (
              ((i = t.stateNode),
              (n = t.memoizedProps),
              (i[bt] = t),
              (c = i.nodeValue !== n) && ((e = vt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ni(i.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ni(i.nodeValue, n, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
              (i[bt] = t),
              (t.stateNode = i);
        }
        return nt(t), null;
      case 13:
        if (
          (Oe(ze),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ne && wt !== null && t.mode & 1 && !(t.flags & 128))
            Oc(), sr(), (t.flags |= 98560), (c = !1);
          else if (((c = ci(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(l(317));
              c[bt] = t;
            } else
              sr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            nt(t), (c = !1);
          } else Dt !== null && (la(Dt), (Dt = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ze.current & 1 ? Qe === 0 && (Qe = 3) : ua())),
            t.updateQueue !== null && (t.flags |= 4),
            nt(t),
            null);
      case 4:
        return (
          fr(),
          Gs(e, t),
          e === null && Yr(t.stateNode.containerInfo),
          nt(t),
          null
        );
      case 10:
        return xs(t.type._context), nt(t), null;
      case 17:
        return ut(t.type) && ii(), nt(t), null;
      case 19:
        if ((Oe(ze), (c = t.memoizedState), c === null)) return nt(t), null;
        if (((i = (t.flags & 128) !== 0), (d = c.rendering), d === null))
          if (i) uo(c, !1);
          else {
            if (Qe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((d = gi(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      uo(c, !1),
                      i = d.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = n,
                      n = t.child;
                    n !== null;

                  )
                    (c = n),
                      (e = i),
                      (c.flags &= 14680066),
                      (d = c.alternate),
                      d === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = d.childLanes),
                          (c.lanes = d.lanes),
                          (c.child = d.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = d.memoizedProps),
                          (c.memoizedState = d.memoizedState),
                          (c.updateQueue = d.updateQueue),
                          (c.type = d.type),
                          (e = d.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Te(ze, (ze.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Be() > mr &&
              ((t.flags |= 128), (i = !0), uo(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = gi(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                uo(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !d.alternate &&
                  !Ne)
              )
                return nt(t), null;
            } else
              2 * Be() - c.renderingStartTime > mr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (i = !0), uo(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((n = c.last),
              n !== null ? (n.sibling = d) : (t.child = d),
              (c.last = d));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Be()),
            (t.sibling = null),
            (n = ze.current),
            Te(ze, i ? (n & 1) | 2 : n & 1),
            t)
          : (nt(t), null);
      case 22:
      case 23:
        return (
          aa(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && t.mode & 1
            ? St & 1073741824 &&
              (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : nt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function vm(e, t) {
    switch ((ys(t), t.tag)) {
      case 1:
        return (
          ut(t.type) && ii(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          fr(),
          Oe(at),
          Oe(et),
          As(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Rs(t), null;
      case 13:
        if (
          (Oe(ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          sr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Oe(ze), null;
      case 4:
        return fr(), null;
      case 10:
        return xs(t.type._context), null;
      case 22:
      case 23:
        return aa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ti = !1,
    rt = !1,
    wm = typeof WeakSet == "function" ? WeakSet : Set,
    Q = null;
  function pr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          De(e, t, i);
        }
      else n.current = null;
  }
  function Xs(e, t, n) {
    try {
      n();
    } catch (i) {
      De(e, t, i);
    }
  }
  var Rf = !1;
  function Sm(e, t) {
    if (((as = Wo), (e = ic()), es(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              c = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              g = -1,
              y = -1,
              P = 0,
              D = 0,
              j = e,
              z = null;
            t: for (;;) {
              for (
                var V;
                j !== n || (s !== 0 && j.nodeType !== 3) || (g = d + s),
                  j !== c || (i !== 0 && j.nodeType !== 3) || (y = d + i),
                  j.nodeType === 3 && (d += j.nodeValue.length),
                  (V = j.firstChild) !== null;

              )
                (z = j), (j = V);
              for (;;) {
                if (j === e) break t;
                if (
                  (z === n && ++P === s && (g = d),
                  z === c && ++D === i && (y = d),
                  (V = j.nextSibling) !== null)
                )
                  break;
                (j = z), (z = j.parentNode);
              }
              j = V;
            }
            n = g === -1 || y === -1 ? null : { start: g, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      us = { focusedElem: e, selectionRange: n }, Wo = !1, Q = t;
      Q !== null;

    )
      if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (Q = e);
      else
        for (; Q !== null; ) {
          t = Q;
          try {
            var Y = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Y !== null) {
                    var J = Y.memoizedProps,
                      Me = Y.memoizedState,
                      E = t.stateNode,
                      S = E.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? J : jt(t.type, J),
                        Me
                      );
                    E.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var T = t.stateNode.containerInfo;
                  T.nodeType === 1
                    ? (T.textContent = "")
                    : T.nodeType === 9 &&
                      T.documentElement &&
                      T.removeChild(T.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch ($) {
            De(t, t.return, $);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Q = e);
            break;
          }
          Q = t.return;
        }
    return (Y = Rf), (Rf = !1), Y;
  }
  function co(e, t, n) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var s = (i = i.next);
      do {
        if ((s.tag & e) === e) {
          var c = s.destroy;
          (s.destroy = void 0), c !== void 0 && Xs(t, n, c);
        }
        s = s.next;
      } while (s !== i);
    }
  }
  function _i(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var i = n.create;
          n.destroy = i();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ys(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Of(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Of(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[bt],
          delete t[Zr],
          delete t[ps],
          delete t[nm],
          delete t[rm])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Af(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Nf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Af(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Js(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ri));
    else if (i !== 4 && ((e = e.child), e !== null))
      for (Js(e, t, n), e = e.sibling; e !== null; )
        Js(e, t, n), (e = e.sibling);
  }
  function Zs(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && ((e = e.child), e !== null))
      for (Zs(e, t, n), e = e.sibling; e !== null; )
        Zs(e, t, n), (e = e.sibling);
  }
  var Ye = null,
    It = !1;
  function kn(e, t, n) {
    for (n = n.child; n !== null; ) Lf(e, t, n), (n = n.sibling);
  }
  function Lf(e, t, n) {
    if (Ut && typeof Ut.onCommitFiberUnmount == "function")
      try {
        Ut.onCommitFiberUnmount(Bo, n);
      } catch {}
    switch (n.tag) {
      case 5:
        rt || pr(n, t);
      case 6:
        var i = Ye,
          s = It;
        (Ye = null),
          kn(e, t, n),
          (Ye = i),
          (It = s),
          Ye !== null &&
            (It
              ? ((e = Ye),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ye.removeChild(n.stateNode));
        break;
      case 18:
        Ye !== null &&
          (It
            ? ((e = Ye),
              (n = n.stateNode),
              e.nodeType === 8
                ? ds(e.parentNode, n)
                : e.nodeType === 1 && ds(e, n),
              br(e))
            : ds(Ye, n.stateNode));
        break;
      case 4:
        (i = Ye),
          (s = It),
          (Ye = n.stateNode.containerInfo),
          (It = !0),
          kn(e, t, n),
          (Ye = i),
          (It = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !rt &&
          ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          s = i = i.next;
          do {
            var c = s,
              d = c.destroy;
            (c = c.tag),
              d !== void 0 && (c & 2 || c & 4) && Xs(n, t, d),
              (s = s.next);
          } while (s !== i);
        }
        kn(e, t, n);
        break;
      case 1:
        if (
          !rt &&
          (pr(n, t),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function")
        )
          try {
            (i.props = n.memoizedProps),
              (i.state = n.memoizedState),
              i.componentWillUnmount();
          } catch (g) {
            De(n, t, g);
          }
        kn(e, t, n);
        break;
      case 21:
        kn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((rt = (i = rt) || n.memoizedState !== null), kn(e, t, n), (rt = i))
          : kn(e, t, n);
        break;
      default:
        kn(e, t, n);
    }
  }
  function zf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new wm()),
        t.forEach(function (i) {
          var s = Om.bind(null, e, i);
          n.has(i) || (n.add(i), i.then(s, s));
        });
    }
  }
  function $t(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        try {
          var c = e,
            d = t,
            g = d;
          e: for (; g !== null; ) {
            switch (g.tag) {
              case 5:
                (Ye = g.stateNode), (It = !1);
                break e;
              case 3:
                (Ye = g.stateNode.containerInfo), (It = !0);
                break e;
              case 4:
                (Ye = g.stateNode.containerInfo), (It = !0);
                break e;
            }
            g = g.return;
          }
          if (Ye === null) throw Error(l(160));
          Lf(c, d, s), (Ye = null), (It = !1);
          var y = s.alternate;
          y !== null && (y.return = null), (s.return = null);
        } catch (P) {
          De(s, t, P);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ff(t, e), (t = t.sibling);
  }
  function Ff(e, t) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (($t(t, e), Wt(e), i & 4)) {
          try {
            co(3, e, e.return), _i(3, e);
          } catch (J) {
            De(e, e.return, J);
          }
          try {
            co(5, e, e.return);
          } catch (J) {
            De(e, e.return, J);
          }
        }
        break;
      case 1:
        $t(t, e), Wt(e), i & 512 && n !== null && pr(n, n.return);
        break;
      case 5:
        if (
          ($t(t, e),
          Wt(e),
          i & 512 && n !== null && pr(n, n.return),
          e.flags & 32)
        ) {
          var s = e.stateNode;
          try {
            Nr(s, "");
          } catch (J) {
            De(e, e.return, J);
          }
        }
        if (i & 4 && ((s = e.stateNode), s != null)) {
          var c = e.memoizedProps,
            d = n !== null ? n.memoizedProps : c,
            g = e.type,
            y = e.updateQueue;
          if (((e.updateQueue = null), y !== null))
            try {
              g === "input" && c.type === "radio" && c.name != null && su(s, c),
                Al(g, d);
              var P = Al(g, c);
              for (d = 0; d < y.length; d += 2) {
                var D = y[d],
                  j = y[d + 1];
                D === "style"
                  ? mu(s, j)
                  : D === "dangerouslySetInnerHTML"
                  ? pu(s, j)
                  : D === "children"
                  ? Nr(s, j)
                  : B(s, D, j, P);
              }
              switch (g) {
                case "input":
                  Tl(s, c);
                  break;
                case "textarea":
                  cu(s, c);
                  break;
                case "select":
                  var z = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!c.multiple;
                  var V = c.value;
                  V != null
                    ? Kn(s, !!c.multiple, V, !1)
                    : z !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Kn(s, !!c.multiple, c.defaultValue, !0)
                        : Kn(s, !!c.multiple, c.multiple ? [] : "", !1));
              }
              s[Zr] = c;
            } catch (J) {
              De(e, e.return, J);
            }
        }
        break;
      case 6:
        if (($t(t, e), Wt(e), i & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (s = e.stateNode), (c = e.memoizedProps);
          try {
            s.nodeValue = c;
          } catch (J) {
            De(e, e.return, J);
          }
        }
        break;
      case 3:
        if (
          ($t(t, e), Wt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            br(t.containerInfo);
          } catch (J) {
            De(e, e.return, J);
          }
        break;
      case 4:
        $t(t, e), Wt(e);
        break;
      case 13:
        $t(t, e),
          Wt(e),
          (s = e.child),
          s.flags & 8192 &&
            ((c = s.memoizedState !== null),
            (s.stateNode.isHidden = c),
            !c ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (na = Be())),
          i & 4 && zf(e);
        break;
      case 22:
        if (
          ((D = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((rt = (P = rt) || D), $t(t, e), (rt = P)) : $t(t, e),
          Wt(e),
          i & 8192)
        ) {
          if (
            ((P = e.memoizedState !== null),
            (e.stateNode.isHidden = P) && !D && e.mode & 1)
          )
            for (Q = e, D = e.child; D !== null; ) {
              for (j = Q = D; Q !== null; ) {
                switch (((z = Q), (V = z.child), z.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    co(4, z, z.return);
                    break;
                  case 1:
                    pr(z, z.return);
                    var Y = z.stateNode;
                    if (typeof Y.componentWillUnmount == "function") {
                      (i = z), (n = z.return);
                      try {
                        (t = i),
                          (Y.props = t.memoizedProps),
                          (Y.state = t.memoizedState),
                          Y.componentWillUnmount();
                      } catch (J) {
                        De(i, n, J);
                      }
                    }
                    break;
                  case 5:
                    pr(z, z.return);
                    break;
                  case 22:
                    if (z.memoizedState !== null) {
                      If(j);
                      continue;
                    }
                }
                V !== null ? ((V.return = z), (Q = V)) : If(j);
              }
              D = D.sibling;
            }
          e: for (D = null, j = e; ; ) {
            if (j.tag === 5) {
              if (D === null) {
                D = j;
                try {
                  (s = j.stateNode),
                    P
                      ? ((c = s.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((g = j.stateNode),
                        (y = j.memoizedProps.style),
                        (d =
                          y != null && y.hasOwnProperty("display")
                            ? y.display
                            : null),
                        (g.style.display = hu("display", d)));
                } catch (J) {
                  De(e, e.return, J);
                }
              }
            } else if (j.tag === 6) {
              if (D === null)
                try {
                  j.stateNode.nodeValue = P ? "" : j.memoizedProps;
                } catch (J) {
                  De(e, e.return, J);
                }
            } else if (
              ((j.tag !== 22 && j.tag !== 23) ||
                j.memoizedState === null ||
                j === e) &&
              j.child !== null
            ) {
              (j.child.return = j), (j = j.child);
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null; ) {
              if (j.return === null || j.return === e) break e;
              D === j && (D = null), (j = j.return);
            }
            D === j && (D = null),
              (j.sibling.return = j.return),
              (j = j.sibling);
          }
        }
        break;
      case 19:
        $t(t, e), Wt(e), i & 4 && zf(e);
        break;
      case 21:
        break;
      default:
        $t(t, e), Wt(e);
    }
  }
  function Wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Af(n)) {
              var i = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (i.tag) {
          case 5:
            var s = i.stateNode;
            i.flags & 32 && (Nr(s, ""), (i.flags &= -33));
            var c = Nf(e);
            Zs(e, c, s);
            break;
          case 3:
          case 4:
            var d = i.stateNode.containerInfo,
              g = Nf(e);
            Js(e, g, d);
            break;
          default:
            throw Error(l(161));
        }
      } catch (y) {
        De(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function km(e, t, n) {
    (Q = e), Df(e);
  }
  function Df(e, t, n) {
    for (var i = (e.mode & 1) !== 0; Q !== null; ) {
      var s = Q,
        c = s.child;
      if (s.tag === 22 && i) {
        var d = s.memoizedState !== null || Ti;
        if (!d) {
          var g = s.alternate,
            y = (g !== null && g.memoizedState !== null) || rt;
          g = Ti;
          var P = rt;
          if (((Ti = d), (rt = y) && !P))
            for (Q = s; Q !== null; )
              (d = Q),
                (y = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? $f(s)
                  : y !== null
                  ? ((y.return = d), (Q = y))
                  : $f(s);
          for (; c !== null; ) (Q = c), Df(c), (c = c.sibling);
          (Q = s), (Ti = g), (rt = P);
        }
        jf(e);
      } else
        s.subtreeFlags & 8772 && c !== null ? ((c.return = s), (Q = c)) : jf(e);
    }
  }
  function jf(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                rt || _i(5, t);
                break;
              case 1:
                var i = t.stateNode;
                if (t.flags & 4 && !rt)
                  if (n === null) i.componentDidMount();
                  else {
                    var s =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : jt(t.type, n.memoizedProps);
                    i.componentDidUpdate(
                      s,
                      n.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var c = t.updateQueue;
                c !== null && jc(t, c, i);
                break;
              case 3:
                var d = t.updateQueue;
                if (d !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  jc(t, d, n);
                }
                break;
              case 5:
                var g = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = g;
                  var y = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      y.autoFocus && n.focus();
                      break;
                    case "img":
                      y.src && (n.src = y.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var P = t.alternate;
                  if (P !== null) {
                    var D = P.memoizedState;
                    if (D !== null) {
                      var j = D.dehydrated;
                      j !== null && br(j);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(l(163));
            }
          rt || (t.flags & 512 && Ys(t));
        } catch (z) {
          De(t, t.return, z);
        }
      }
      if (t === e) {
        Q = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (Q = n);
        break;
      }
      Q = t.return;
    }
  }
  function If(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t === e) {
        Q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (Q = n);
        break;
      }
      Q = t.return;
    }
  }
  function $f(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              _i(4, t);
            } catch (y) {
              De(t, n, y);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var s = t.return;
              try {
                i.componentDidMount();
              } catch (y) {
                De(t, s, y);
              }
            }
            var c = t.return;
            try {
              Ys(t);
            } catch (y) {
              De(t, c, y);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Ys(t);
            } catch (y) {
              De(t, d, y);
            }
        }
      } catch (y) {
        De(t, t.return, y);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        (g.return = t.return), (Q = g);
        break;
      }
      Q = t.return;
    }
  }
  var Cm = Math.ceil,
    Pi = U.ReactCurrentDispatcher,
    ea = U.ReactCurrentOwner,
    Ot = U.ReactCurrentBatchConfig,
    de = 0,
    Ge = null,
    He = null,
    Je = 0,
    St = 0,
    hr = gn(0),
    Qe = 0,
    fo = null,
    In = 0,
    Ri = 0,
    ta = 0,
    po = null,
    ft = null,
    na = 0,
    mr = 1 / 0,
    on = null,
    Oi = !1,
    ra = null,
    Cn = null,
    Ai = !1,
    xn = null,
    Ni = 0,
    ho = 0,
    oa = null,
    Li = -1,
    zi = 0;
  function st() {
    return de & 6 ? Be() : Li !== -1 ? Li : (Li = Be());
  }
  function En(e) {
    return e.mode & 1
      ? de & 2 && Je !== 0
        ? Je & -Je
        : im.transition !== null
        ? (zi === 0 && (zi = Au()), zi)
        : ((e = Se),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bu(e.type))),
          e)
      : 1;
  }
  function Bt(e, t, n, i) {
    if (50 < ho) throw ((ho = 0), (oa = null), Error(l(185)));
    Ir(e, n, i),
      (!(de & 2) || e !== Ge) &&
        (e === Ge && (!(de & 2) && (Ri |= n), Qe === 4 && Tn(e, Je)),
        dt(e, i),
        n === 1 &&
          de === 0 &&
          !(t.mode & 1) &&
          ((mr = Be() + 500), si && vn()));
  }
  function dt(e, t) {
    var n = e.callbackNode;
    ih(e, t);
    var i = bo(e, e === Ge ? Je : 0);
    if (i === 0)
      n !== null && Pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((n != null && Pu(n), t === 1))
        e.tag === 0 ? om(Mf.bind(null, e)) : Ec(Mf.bind(null, e)),
          em(function () {
            !(de & 6) && vn();
          }),
          (n = null);
      else {
        switch (Nu(i)) {
          case 1:
            n = Il;
            break;
          case 4:
            n = Ru;
            break;
          case 16:
            n = $o;
            break;
          case 536870912:
            n = Ou;
            break;
          default:
            n = $o;
        }
        n = qf(n, Bf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Bf(e, t) {
    if (((Li = -1), (zi = 0), de & 6)) throw Error(l(327));
    var n = e.callbackNode;
    if (gr() && e.callbackNode !== n) return null;
    var i = bo(e, e === Ge ? Je : 0);
    if (i === 0) return null;
    if (i & 30 || i & e.expiredLanes || t) t = Fi(e, i);
    else {
      t = i;
      var s = de;
      de |= 2;
      var c = bf();
      (Ge !== e || Je !== t) && ((on = null), (mr = Be() + 500), Bn(e, t));
      do
        try {
          Tm();
          break;
        } catch (g) {
          Uf(e, g);
        }
      while (!0);
      Cs(),
        (Pi.current = c),
        (de = s),
        He !== null ? (t = 0) : ((Ge = null), (Je = 0), (t = Qe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((s = $l(e)), s !== 0 && ((i = s), (t = ia(e, s)))),
        t === 1)
      )
        throw ((n = fo), Bn(e, 0), Tn(e, i), dt(e, Be()), n);
      if (t === 6) Tn(e, i);
      else {
        if (
          ((s = e.current.alternate),
          !(i & 30) &&
            !xm(s) &&
            ((t = Fi(e, i)),
            t === 2 && ((c = $l(e)), c !== 0 && ((i = c), (t = ia(e, c)))),
            t === 1))
        )
          throw ((n = fo), Bn(e, 0), Tn(e, i), dt(e, Be()), n);
        switch (((e.finishedWork = s), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Mn(e, ft, on);
            break;
          case 3:
            if (
              (Tn(e, i),
              (i & 130023424) === i && ((t = na + 500 - Be()), 10 < t))
            ) {
              if (bo(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & i) !== i)) {
                st(), (e.pingedLanes |= e.suspendedLanes & s);
                break;
              }
              e.timeoutHandle = fs(Mn.bind(null, e, ft, on), t);
              break;
            }
            Mn(e, ft, on);
            break;
          case 4:
            if ((Tn(e, i), (i & 4194240) === i)) break;
            for (t = e.eventTimes, s = -1; 0 < i; ) {
              var d = 31 - zt(i);
              (c = 1 << d), (d = t[d]), d > s && (s = d), (i &= ~c);
            }
            if (
              ((i = s),
              (i = Be() - i),
              (i =
                (120 > i
                  ? 120
                  : 480 > i
                  ? 480
                  : 1080 > i
                  ? 1080
                  : 1920 > i
                  ? 1920
                  : 3e3 > i
                  ? 3e3
                  : 4320 > i
                  ? 4320
                  : 1960 * Cm(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = fs(Mn.bind(null, e, ft, on), i);
              break;
            }
            Mn(e, ft, on);
            break;
          case 5:
            Mn(e, ft, on);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return dt(e, Be()), e.callbackNode === n ? Bf.bind(null, e) : null;
  }
  function ia(e, t) {
    var n = po;
    return (
      e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
      (e = Fi(e, t)),
      e !== 2 && ((t = ft), (ft = n), t !== null && la(t)),
      e
    );
  }
  function la(e) {
    ft === null ? (ft = e) : ft.push.apply(ft, e);
  }
  function xm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var i = 0; i < n.length; i++) {
            var s = n[i],
              c = s.getSnapshot;
            s = s.value;
            try {
              if (!Ft(c(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Tn(e, t) {
    for (
      t &= ~ta,
        t &= ~Ri,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - zt(t),
        i = 1 << n;
      (e[n] = -1), (t &= ~i);
    }
  }
  function Mf(e) {
    if (de & 6) throw Error(l(327));
    gr();
    var t = bo(e, 0);
    if (!(t & 1)) return dt(e, Be()), null;
    var n = Fi(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = $l(e);
      i !== 0 && ((t = i), (n = ia(e, i)));
    }
    if (n === 1) throw ((n = fo), Bn(e, 0), Tn(e, t), dt(e, Be()), n);
    if (n === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Mn(e, ft, on),
      dt(e, Be()),
      null
    );
  }
  function sa(e, t) {
    var n = de;
    de |= 1;
    try {
      return e(t);
    } finally {
      (de = n), de === 0 && ((mr = Be() + 500), si && vn());
    }
  }
  function $n(e) {
    xn !== null && xn.tag === 0 && !(de & 6) && gr();
    var t = de;
    de |= 1;
    var n = Ot.transition,
      i = Se;
    try {
      if (((Ot.transition = null), (Se = 1), e)) return e();
    } finally {
      (Se = i), (Ot.transition = n), (de = t), !(de & 6) && vn();
    }
  }
  function aa() {
    (St = hr.current), Oe(hr);
  }
  function Bn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Zh(n)), He !== null))
      for (n = He.return; n !== null; ) {
        var i = n;
        switch ((ys(i), i.tag)) {
          case 1:
            (i = i.type.childContextTypes), i != null && ii();
            break;
          case 3:
            fr(), Oe(at), Oe(et), As();
            break;
          case 5:
            Rs(i);
            break;
          case 4:
            fr();
            break;
          case 13:
            Oe(ze);
            break;
          case 19:
            Oe(ze);
            break;
          case 10:
            xs(i.type._context);
            break;
          case 22:
          case 23:
            aa();
        }
        n = n.return;
      }
    if (
      ((Ge = e),
      (He = e = _n(e.current, null)),
      (Je = St = t),
      (Qe = 0),
      (fo = null),
      (ta = Ri = In = 0),
      (ft = po = null),
      Fn !== null)
    ) {
      for (t = 0; t < Fn.length; t++)
        if (((n = Fn[t]), (i = n.interleaved), i !== null)) {
          n.interleaved = null;
          var s = i.next,
            c = n.pending;
          if (c !== null) {
            var d = c.next;
            (c.next = s), (i.next = d);
          }
          n.pending = i;
        }
      Fn = null;
    }
    return e;
  }
  function Uf(e, t) {
    do {
      var n = He;
      try {
        if ((Cs(), (yi.current = ki), vi)) {
          for (var i = Fe.memoizedState; i !== null; ) {
            var s = i.queue;
            s !== null && (s.pending = null), (i = i.next);
          }
          vi = !1;
        }
        if (
          ((jn = 0),
          (qe = Ke = Fe = null),
          (io = !1),
          (lo = 0),
          (ea.current = null),
          n === null || n.return === null)
        ) {
          (Qe = 1), (fo = t), (He = null);
          break;
        }
        e: {
          var c = e,
            d = n.return,
            g = n,
            y = t;
          if (
            ((t = Je),
            (g.flags |= 32768),
            y !== null && typeof y == "object" && typeof y.then == "function")
          ) {
            var P = y,
              D = g,
              j = D.tag;
            if (!(D.mode & 1) && (j === 0 || j === 11 || j === 15)) {
              var z = D.alternate;
              z
                ? ((D.updateQueue = z.updateQueue),
                  (D.memoizedState = z.memoizedState),
                  (D.lanes = z.lanes))
                : ((D.updateQueue = null), (D.memoizedState = null));
            }
            var V = df(d);
            if (V !== null) {
              (V.flags &= -257),
                pf(V, d, g, c, t),
                V.mode & 1 && ff(c, P, t),
                (t = V),
                (y = P);
              var Y = t.updateQueue;
              if (Y === null) {
                var J = new Set();
                J.add(y), (t.updateQueue = J);
              } else Y.add(y);
              break e;
            } else {
              if (!(t & 1)) {
                ff(c, P, t), ua();
                break e;
              }
              y = Error(l(426));
            }
          } else if (Ne && g.mode & 1) {
            var Me = df(d);
            if (Me !== null) {
              !(Me.flags & 65536) && (Me.flags |= 256),
                pf(Me, d, g, c, t),
                Ss(dr(y, g));
              break e;
            }
          }
          (c = y = dr(y, g)),
            Qe !== 4 && (Qe = 2),
            po === null ? (po = [c]) : po.push(c),
            (c = d);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var E = uf(c, y, t);
                Dc(c, E);
                break e;
              case 1:
                g = y;
                var S = c.type,
                  T = c.stateNode;
                if (
                  !(c.flags & 128) &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (T !== null &&
                      typeof T.componentDidCatch == "function" &&
                      (Cn === null || !Cn.has(T))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var $ = cf(c, g, t);
                  Dc(c, $);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Vf(n);
      } catch (Z) {
        (t = Z), He === n && n !== null && (He = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bf() {
    var e = Pi.current;
    return (Pi.current = ki), e === null ? ki : e;
  }
  function ua() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
      Ge === null || (!(In & 268435455) && !(Ri & 268435455)) || Tn(Ge, Je);
  }
  function Fi(e, t) {
    var n = de;
    de |= 2;
    var i = bf();
    (Ge !== e || Je !== t) && ((on = null), Bn(e, t));
    do
      try {
        Em();
        break;
      } catch (s) {
        Uf(e, s);
      }
    while (!0);
    if ((Cs(), (de = n), (Pi.current = i), He !== null)) throw Error(l(261));
    return (Ge = null), (Je = 0), Qe;
  }
  function Em() {
    for (; He !== null; ) Hf(He);
  }
  function Tm() {
    for (; He !== null && !Xp(); ) Hf(He);
  }
  function Hf(e) {
    var t = Qf(e.alternate, e, St);
    (e.memoizedProps = e.pendingProps),
      t === null ? Vf(e) : (He = t),
      (ea.current = null);
  }
  function Vf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = vm(n, t)), n !== null)) {
          (n.flags &= 32767), (He = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Qe = 6), (He = null);
          return;
        }
      } else if (((n = ym(n, t, St)), n !== null)) {
        He = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        He = t;
        return;
      }
      He = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function Mn(e, t, n) {
    var i = Se,
      s = Ot.transition;
    try {
      (Ot.transition = null), (Se = 1), _m(e, t, n, i);
    } finally {
      (Ot.transition = s), (Se = i);
    }
    return null;
  }
  function _m(e, t, n, i) {
    do gr();
    while (xn !== null);
    if (de & 6) throw Error(l(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(l(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = n.lanes | n.childLanes;
    if (
      (lh(e, c),
      e === Ge && ((He = Ge = null), (Je = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ai ||
        ((Ai = !0),
        qf($o, function () {
          return gr(), null;
        })),
      (c = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || c)
    ) {
      (c = Ot.transition), (Ot.transition = null);
      var d = Se;
      Se = 1;
      var g = de;
      (de |= 4),
        (ea.current = null),
        Sm(e, n),
        Ff(n, e),
        Kh(us),
        (Wo = !!as),
        (us = as = null),
        (e.current = n),
        km(n),
        Yp(),
        (de = g),
        (Se = d),
        (Ot.transition = c);
    } else e.current = n;
    if (
      (Ai && ((Ai = !1), (xn = e), (Ni = s)),
      (c = e.pendingLanes),
      c === 0 && (Cn = null),
      eh(n.stateNode),
      dt(e, Be()),
      t !== null)
    )
      for (i = e.onRecoverableError, n = 0; n < t.length; n++)
        (s = t[n]), i(s.value, { componentStack: s.stack, digest: s.digest });
    if (Oi) throw ((Oi = !1), (e = ra), (ra = null), e);
    return (
      Ni & 1 && e.tag !== 0 && gr(),
      (c = e.pendingLanes),
      c & 1 ? (e === oa ? ho++ : ((ho = 0), (oa = e))) : (ho = 0),
      vn(),
      null
    );
  }
  function gr() {
    if (xn !== null) {
      var e = Nu(Ni),
        t = Ot.transition,
        n = Se;
      try {
        if (((Ot.transition = null), (Se = 16 > e ? 16 : e), xn === null))
          var i = !1;
        else {
          if (((e = xn), (xn = null), (Ni = 0), de & 6)) throw Error(l(331));
          var s = de;
          for (de |= 4, Q = e.current; Q !== null; ) {
            var c = Q,
              d = c.child;
            if (Q.flags & 16) {
              var g = c.deletions;
              if (g !== null) {
                for (var y = 0; y < g.length; y++) {
                  var P = g[y];
                  for (Q = P; Q !== null; ) {
                    var D = Q;
                    switch (D.tag) {
                      case 0:
                      case 11:
                      case 15:
                        co(8, D, c);
                    }
                    var j = D.child;
                    if (j !== null) (j.return = D), (Q = j);
                    else
                      for (; Q !== null; ) {
                        D = Q;
                        var z = D.sibling,
                          V = D.return;
                        if ((Of(D), D === P)) {
                          Q = null;
                          break;
                        }
                        if (z !== null) {
                          (z.return = V), (Q = z);
                          break;
                        }
                        Q = V;
                      }
                  }
                }
                var Y = c.alternate;
                if (Y !== null) {
                  var J = Y.child;
                  if (J !== null) {
                    Y.child = null;
                    do {
                      var Me = J.sibling;
                      (J.sibling = null), (J = Me);
                    } while (J !== null);
                  }
                }
                Q = c;
              }
            }
            if (c.subtreeFlags & 2064 && d !== null) (d.return = c), (Q = d);
            else
              e: for (; Q !== null; ) {
                if (((c = Q), c.flags & 2048))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      co(9, c, c.return);
                  }
                var E = c.sibling;
                if (E !== null) {
                  (E.return = c.return), (Q = E);
                  break e;
                }
                Q = c.return;
              }
          }
          var S = e.current;
          for (Q = S; Q !== null; ) {
            d = Q;
            var T = d.child;
            if (d.subtreeFlags & 2064 && T !== null) (T.return = d), (Q = T);
            else
              e: for (d = S; Q !== null; ) {
                if (((g = Q), g.flags & 2048))
                  try {
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _i(9, g);
                    }
                  } catch (Z) {
                    De(g, g.return, Z);
                  }
                if (g === d) {
                  Q = null;
                  break e;
                }
                var $ = g.sibling;
                if ($ !== null) {
                  ($.return = g.return), (Q = $);
                  break e;
                }
                Q = g.return;
              }
          }
          if (
            ((de = s),
            vn(),
            Ut && typeof Ut.onPostCommitFiberRoot == "function")
          )
            try {
              Ut.onPostCommitFiberRoot(Bo, e);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (Se = n), (Ot.transition = t);
      }
    }
    return !1;
  }
  function Wf(e, t, n) {
    (t = dr(n, t)),
      (t = uf(e, t, 1)),
      (e = Sn(e, t, 1)),
      (t = st()),
      e !== null && (Ir(e, 1, t), dt(e, t));
  }
  function De(e, t, n) {
    if (e.tag === 3) Wf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Wf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Cn === null || !Cn.has(i)))
          ) {
            (e = dr(n, e)),
              (e = cf(t, e, 1)),
              (t = Sn(t, e, 1)),
              (e = st()),
              t !== null && (Ir(t, 1, e), dt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Pm(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (t = st()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ge === e &&
        (Je & n) === n &&
        (Qe === 4 || (Qe === 3 && (Je & 130023424) === Je && 500 > Be() - na)
          ? Bn(e, 0)
          : (ta |= n)),
      dt(e, t);
  }
  function Kf(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Uo), (Uo <<= 1), !(Uo & 130023424) && (Uo = 4194304))
        : (t = 1));
    var n = st();
    (e = tn(e, t)), e !== null && (Ir(e, t, n), dt(e, n));
  }
  function Rm(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Kf(e, n);
  }
  function Om(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    i !== null && i.delete(t), Kf(e, n);
  }
  var Qf;
  Qf = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || at.current) ct = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (ct = !1), gm(e, t, n);
        ct = !!(e.flags & 131072);
      }
    else (ct = !1), Ne && t.flags & 1048576 && Tc(t, ui, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type;
        Ei(e, t), (e = t.pendingProps);
        var s = or(t, et.current);
        cr(t, n), (s = zs(null, t, i, e, s, n));
        var c = Fs();
        return (
          (t.flags |= 1),
          typeof s == "object" &&
          s !== null &&
          typeof s.render == "function" &&
          s.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ut(i) ? ((c = !0), li(t)) : (c = !1),
              (t.memoizedState =
                s.state !== null && s.state !== void 0 ? s.state : null),
              _s(t),
              (s.updater = Ci),
              (t.stateNode = s),
              (s._reactInternals = t),
              Ms(t, i, e, n),
              (t = Vs(null, t, i, !0, c, n)))
            : ((t.tag = 0), Ne && c && gs(t), lt(null, t, s, n), (t = t.child)),
          t
        );
      case 16:
        i = t.elementType;
        e: {
          switch (
            (Ei(e, t),
            (e = t.pendingProps),
            (s = i._init),
            (i = s(i._payload)),
            (t.type = i),
            (s = t.tag = Nm(i)),
            (e = jt(i, e)),
            s)
          ) {
            case 0:
              t = Hs(null, t, i, e, n);
              break e;
            case 1:
              t = wf(null, t, i, e, n);
              break e;
            case 11:
              t = hf(null, t, i, e, n);
              break e;
            case 14:
              t = mf(null, t, i, jt(i.type, e), n);
              break e;
          }
          throw Error(l(306, i, ""));
        }
        return t;
      case 0:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : jt(i, s)),
          Hs(e, t, i, s, n)
        );
      case 1:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : jt(i, s)),
          wf(e, t, i, s, n)
        );
      case 3:
        e: {
          if ((Sf(t), e === null)) throw Error(l(387));
          (i = t.pendingProps),
            (c = t.memoizedState),
            (s = c.element),
            Fc(e, t),
            mi(t, i, null, n);
          var d = t.memoizedState;
          if (((i = d.element), c.isDehydrated))
            if (
              ((c = {
                element: i,
                isDehydrated: !1,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (s = dr(Error(l(423)), t)), (t = kf(e, t, i, n, s));
              break e;
            } else if (i !== s) {
              (s = dr(Error(l(424)), t)), (t = kf(e, t, i, n, s));
              break e;
            } else
              for (
                wt = mn(t.stateNode.containerInfo.firstChild),
                  vt = t,
                  Ne = !0,
                  Dt = null,
                  n = Lc(t, null, i, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((sr(), i === s)) {
              t = rn(e, t, n);
              break e;
            }
            lt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ic(t),
          e === null && ws(t),
          (i = t.type),
          (s = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (d = s.children),
          cs(i, s) ? (d = null) : c !== null && cs(i, c) && (t.flags |= 32),
          vf(e, t),
          lt(e, t, d, n),
          t.child
        );
      case 6:
        return e === null && ws(t), null;
      case 13:
        return Cf(e, t, n);
      case 4:
        return (
          Ps(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = ar(t, null, i, n)) : lt(e, t, i, n),
          t.child
        );
      case 11:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : jt(i, s)),
          hf(e, t, i, s, n)
        );
      case 7:
        return lt(e, t, t.pendingProps, n), t.child;
      case 8:
        return lt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return lt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((i = t.type._context),
            (s = t.pendingProps),
            (c = t.memoizedProps),
            (d = s.value),
            Te(di, i._currentValue),
            (i._currentValue = d),
            c !== null)
          )
            if (Ft(c.value, d)) {
              if (c.children === s.children && !at.current) {
                t = rn(e, t, n);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var g = c.dependencies;
                if (g !== null) {
                  d = c.child;
                  for (var y = g.firstContext; y !== null; ) {
                    if (y.context === i) {
                      if (c.tag === 1) {
                        (y = nn(-1, n & -n)), (y.tag = 2);
                        var P = c.updateQueue;
                        if (P !== null) {
                          P = P.shared;
                          var D = P.pending;
                          D === null
                            ? (y.next = y)
                            : ((y.next = D.next), (D.next = y)),
                            (P.pending = y);
                        }
                      }
                      (c.lanes |= n),
                        (y = c.alternate),
                        y !== null && (y.lanes |= n),
                        Es(c.return, n, t),
                        (g.lanes |= n);
                      break;
                    }
                    y = y.next;
                  }
                } else if (c.tag === 10) d = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((d = c.return), d === null)) throw Error(l(341));
                  (d.lanes |= n),
                    (g = d.alternate),
                    g !== null && (g.lanes |= n),
                    Es(d, n, t),
                    (d = c.sibling);
                } else d = c.child;
                if (d !== null) d.return = c;
                else
                  for (d = c; d !== null; ) {
                    if (d === t) {
                      d = null;
                      break;
                    }
                    if (((c = d.sibling), c !== null)) {
                      (c.return = d.return), (d = c);
                      break;
                    }
                    d = d.return;
                  }
                c = d;
              }
          lt(e, t, s.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (s = t.type),
          (i = t.pendingProps.children),
          cr(t, n),
          (s = Pt(s)),
          (i = i(s)),
          (t.flags |= 1),
          lt(e, t, i, n),
          t.child
        );
      case 14:
        return (
          (i = t.type),
          (s = jt(i, t.pendingProps)),
          (s = jt(i.type, s)),
          mf(e, t, i, s, n)
        );
      case 15:
        return gf(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : jt(i, s)),
          Ei(e, t),
          (t.tag = 1),
          ut(i) ? ((e = !0), li(t)) : (e = !1),
          cr(t, n),
          sf(t, i, s),
          Ms(t, i, s, n),
          Vs(null, t, i, !0, e, n)
        );
      case 19:
        return Ef(e, t, n);
      case 22:
        return yf(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function qf(e, t) {
    return _u(e, t);
  }
  function Am(e, t, n, i) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function At(e, t, n, i) {
    return new Am(e, t, n, i);
  }
  function ca(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Nm(e) {
    if (typeof e == "function") return ca(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === re)) return 11;
      if (e === $e) return 14;
    }
    return 2;
  }
  function _n(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = At(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Di(e, t, n, i, s, c) {
    var d = 2;
    if (((i = e), typeof e == "function")) ca(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else
      e: switch (e) {
        case W:
          return Un(n.children, s, c, t);
        case fe:
          (d = 8), (s |= 8);
          break;
        case ve:
          return (
            (e = At(12, n, t, s | 2)), (e.elementType = ve), (e.lanes = c), e
          );
        case le:
          return (e = At(13, n, t, s)), (e.elementType = le), (e.lanes = c), e;
        case ke:
          return (e = At(19, n, t, s)), (e.elementType = ke), (e.lanes = c), e;
        case Pe:
          return ji(n, s, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case m:
                d = 10;
                break e;
              case X:
                d = 9;
                break e;
              case re:
                d = 11;
                break e;
              case $e:
                d = 14;
                break e;
              case be:
                (d = 16), (i = null);
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = At(d, n, t, s)), (t.elementType = e), (t.type = i), (t.lanes = c), t
    );
  }
  function Un(e, t, n, i) {
    return (e = At(7, e, i, t)), (e.lanes = n), e;
  }
  function ji(e, t, n, i) {
    return (
      (e = At(22, e, i, t)),
      (e.elementType = Pe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function fa(e, t, n) {
    return (e = At(6, e, null, t)), (e.lanes = n), e;
  }
  function da(e, t, n) {
    return (
      (t = At(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Lm(e, t, n, i, s) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Bl(0)),
      (this.expirationTimes = Bl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Bl(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null);
  }
  function pa(e, t, n, i, s, c, d, g, y) {
    return (
      (e = new Lm(e, t, n, g, y)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = At(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      _s(c),
      e
    );
  }
  function zm(e, t, n) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: G,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Gf(e) {
    if (!e) return yn;
    e = e._reactInternals;
    e: {
      if (On(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ut(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ut(n)) return Cc(e, n, t);
    }
    return t;
  }
  function Xf(e, t, n, i, s, c, d, g, y) {
    return (
      (e = pa(n, i, !0, e, s, c, d, g, y)),
      (e.context = Gf(null)),
      (n = e.current),
      (i = st()),
      (s = En(n)),
      (c = nn(i, s)),
      (c.callback = t ?? null),
      Sn(n, c, s),
      (e.current.lanes = s),
      Ir(e, s, i),
      dt(e, i),
      e
    );
  }
  function Ii(e, t, n, i) {
    var s = t.current,
      c = st(),
      d = En(s);
    return (
      (n = Gf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = nn(c, d)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = Sn(s, t, d)),
      e !== null && (Bt(e, s, d, c), hi(e, s, d)),
      d
    );
  }
  function $i(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Yf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ha(e, t) {
    Yf(e, t), (e = e.alternate) && Yf(e, t);
  }
  function Fm() {
    return null;
  }
  var Jf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ma(e) {
    this._internalRoot = e;
  }
  (Bi.prototype.render = ma.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      Ii(e, t, null, null);
    }),
    (Bi.prototype.unmount = ma.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          $n(function () {
            Ii(null, e, null, null);
          }),
            (t[Yt] = null);
        }
      });
  function Bi(e) {
    this._internalRoot = e;
  }
  Bi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Fu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
      dn.splice(n, 0, e), n === 0 && Iu(e);
    }
  };
  function ga(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Mi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Zf() {}
  function Dm(e, t, n, i, s) {
    if (s) {
      if (typeof i == "function") {
        var c = i;
        i = function () {
          var P = $i(d);
          c.call(P);
        };
      }
      var d = Xf(t, i, e, 0, null, !1, !1, "", Zf);
      return (
        (e._reactRootContainer = d),
        (e[Yt] = d.current),
        Yr(e.nodeType === 8 ? e.parentNode : e),
        $n(),
        d
      );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof i == "function") {
      var g = i;
      i = function () {
        var P = $i(y);
        g.call(P);
      };
    }
    var y = pa(e, 0, !1, null, null, !1, !1, "", Zf);
    return (
      (e._reactRootContainer = y),
      (e[Yt] = y.current),
      Yr(e.nodeType === 8 ? e.parentNode : e),
      $n(function () {
        Ii(t, y, n, i);
      }),
      y
    );
  }
  function Ui(e, t, n, i, s) {
    var c = n._reactRootContainer;
    if (c) {
      var d = c;
      if (typeof s == "function") {
        var g = s;
        s = function () {
          var y = $i(d);
          g.call(y);
        };
      }
      Ii(t, d, e, s);
    } else d = Dm(n, t, e, s, i);
    return $i(d);
  }
  (Lu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = jr(t.pendingLanes);
          n !== 0 &&
            (Ml(t, n | 1), dt(t, Be()), !(de & 6) && ((mr = Be() + 500), vn()));
        }
        break;
      case 13:
        $n(function () {
          var i = tn(e, 1);
          if (i !== null) {
            var s = st();
            Bt(i, e, 1, s);
          }
        }),
          ha(e, 1);
    }
  }),
    (Ul = function (e) {
      if (e.tag === 13) {
        var t = tn(e, 134217728);
        if (t !== null) {
          var n = st();
          Bt(t, e, 134217728, n);
        }
        ha(e, 134217728);
      }
    }),
    (zu = function (e) {
      if (e.tag === 13) {
        var t = En(e),
          n = tn(e, t);
        if (n !== null) {
          var i = st();
          Bt(n, e, t, i);
        }
        ha(e, t);
      }
    }),
    (Fu = function () {
      return Se;
    }),
    (Du = function (e, t) {
      var n = Se;
      try {
        return (Se = e), t();
      } finally {
        Se = n;
      }
    }),
    (zl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Tl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var s = oi(i);
                if (!s) throw Error(l(90));
                iu(i), Tl(i, s);
              }
            }
          }
          break;
        case "textarea":
          cu(e, n);
          break;
        case "select":
          (t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
      }
    }),
    (wu = sa),
    (Su = $n);
  var jm = { usingClientEntryPoint: !1, Events: [eo, nr, oi, yu, vu, sa] },
    mo = {
      findFiberByHostInstance: An,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Im = {
      bundleType: mo.bundleType,
      version: mo.version,
      rendererPackageName: mo.rendererPackageName,
      rendererConfig: mo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: U.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Eu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: mo.findFiberByHostInstance || Fm,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bi.isDisabled && bi.supportsFiber)
      try {
        (Bo = bi.inject(Im)), (Ut = bi);
      } catch {}
  }
  return (
    (pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm),
    (pt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ga(t)) throw Error(l(200));
      return zm(e, t, null, n);
    }),
    (pt.createRoot = function (e, t) {
      if (!ga(e)) throw Error(l(299));
      var n = !1,
        i = "",
        s = Jf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = pa(e, 1, !1, null, null, n, !1, i, s)),
        (e[Yt] = t.current),
        Yr(e.nodeType === 8 ? e.parentNode : e),
        new ma(t)
      );
    }),
    (pt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(l(188))
          : ((e = Object.keys(e).join(",")), Error(l(268, e)));
      return (e = Eu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (pt.flushSync = function (e) {
      return $n(e);
    }),
    (pt.hydrate = function (e, t, n) {
      if (!Mi(t)) throw Error(l(200));
      return Ui(null, e, t, !0, n);
    }),
    (pt.hydrateRoot = function (e, t, n) {
      if (!ga(e)) throw Error(l(405));
      var i = (n != null && n.hydratedSources) || null,
        s = !1,
        c = "",
        d = Jf;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (t = Xf(t, null, e, 1, n ?? null, s, !1, c, d)),
        (e[Yt] = t.current),
        Yr(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          (n = i[e]),
            (s = n._getVersion),
            (s = s(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, s])
              : t.mutableSourceEagerHydrationData.push(n, s);
      return new Bi(t);
    }),
    (pt.render = function (e, t, n) {
      if (!Mi(t)) throw Error(l(200));
      return Ui(null, e, t, !1, n);
    }),
    (pt.unmountComponentAtNode = function (e) {
      if (!Mi(e)) throw Error(l(40));
      return e._reactRootContainer
        ? ($n(function () {
            Ui(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Yt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (pt.unstable_batchedUpdates = sa),
    (pt.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
      if (!Mi(n)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return Ui(e, t, n, !1, i);
    }),
    (pt.version = "18.3.1-next-f1338f8080-20240426"),
    pt
  );
}
var sd;
function Qm() {
  if (sd) return wa.exports;
  sd = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (o) {
        console.error(o);
      }
  }
  return r(), (wa.exports = Km()), wa.exports;
}
var ad;
function qm() {
  if (ad) return Hi;
  ad = 1;
  var r = Qm();
  return (Hi.createRoot = r.createRoot), (Hi.hydrateRoot = r.hydrateRoot), Hi;
}
var Gm = qm(),
  _e = Ha();
const Xm = Mm(_e),
  ud = Bm({ __proto__: null, default: Xm }, [_e]);
function sn(r) {
  if (typeof r != "object" || r === null) return !1;
  const o = Object.getPrototypeOf(r);
  return (
    (o === null ||
      o === Object.prototype ||
      Object.getPrototypeOf(o) === null) &&
    !(Symbol.toStringTag in r) &&
    !(Symbol.iterator in r)
  );
}
function Qd(r) {
  if (_e.isValidElement(r) || !sn(r)) return r;
  const o = {};
  return (
    Object.keys(r).forEach((l) => {
      o[l] = Qd(r[l]);
    }),
    o
  );
}
function Ct(r, o, l = { clone: !0 }) {
  const a = l.clone ? { ...r } : r;
  return (
    sn(r) &&
      sn(o) &&
      Object.keys(o).forEach((u) => {
        _e.isValidElement(o[u])
          ? (a[u] = o[u])
          : sn(o[u]) && Object.prototype.hasOwnProperty.call(r, u) && sn(r[u])
          ? (a[u] = Ct(r[u], o[u], l))
          : l.clone
          ? (a[u] = sn(o[u]) ? Qd(o[u]) : o[u])
          : (a[u] = o[u]);
      }),
    a
  );
}
function Vn(r, ...o) {
  const l = new URL(`https://mui.com/production-error/?code=${r}`);
  return (
    o.forEach((a) => l.searchParams.append("args[]", a)),
    `Minified MUI error #${r}; visit ${l} for the full message.`
  );
}
function Er(r) {
  if (typeof r != "string") throw new Error(Vn(7));
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Aa(r, o) {
  const l = { ...o };
  for (const a in r)
    if (Object.prototype.hasOwnProperty.call(r, a)) {
      const u = a;
      if (u === "components" || u === "slots") l[u] = { ...r[u], ...l[u] };
      else if (u === "componentsProps" || u === "slotProps") {
        const f = r[u],
          p = o[u];
        if (!p) l[u] = f || {};
        else if (!f) l[u] = p;
        else {
          l[u] = { ...p };
          for (const h in f)
            if (Object.prototype.hasOwnProperty.call(f, h)) {
              const w = h;
              l[u][w] = Aa(f[w], p[w]);
            }
        }
      } else l[u] === void 0 && (l[u] = r[u]);
    }
  return l;
}
function Ym(r, o, l = void 0) {
  const a = {};
  for (const u in r) {
    const f = r[u];
    let p = "",
      h = !0;
    for (let w = 0; w < f.length; w += 1) {
      const v = f[w];
      v &&
        ((p += (h === !0 ? "" : " ") + o(v)),
        (h = !1),
        l && l[v] && (p += " " + l[v]));
    }
    a[u] = p;
  }
  return a;
}
const cd = (r) => r,
  Jm = () => {
    let r = cd;
    return {
      configure(o) {
        r = o;
      },
      generate(o) {
        return r(o);
      },
      reset() {
        r = cd;
      },
    };
  },
  Zm = Jm(),
  e0 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function qd(r, o, l = "Mui") {
  const a = e0[o];
  return a ? `${l}-${a}` : `${Zm.generate(r)}-${o}`;
}
function t0(r, o, l = "Mui") {
  const a = {};
  return (
    o.forEach((u) => {
      a[u] = qd(r, u, l);
    }),
    a
  );
}
function n0(r, o = Number.MIN_SAFE_INTEGER, l = Number.MAX_SAFE_INTEGER) {
  return Math.max(o, Math.min(r, l));
}
function Gd(r) {
  var o,
    l,
    a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var u = r.length;
      for (o = 0; o < u; o++)
        r[o] && (l = Gd(r[o])) && (a && (a += " "), (a += l));
    } else for (l in r) r[l] && (a && (a += " "), (a += l));
  return a;
}
function r0() {
  for (var r, o, l = 0, a = "", u = arguments.length; l < u; l++)
    (r = arguments[l]) && (o = Gd(r)) && (a && (a += " "), (a += o));
  return a;
}
function Co(r, o) {
  return o ? Ct(r, o, { clone: !1 }) : r;
}
function o0(r, o) {
  if (!r.containerQueries) return o;
  const l = Object.keys(o)
    .filter((a) => a.startsWith("@container"))
    .sort((a, u) => {
      var p, h;
      const f = /min-width:\s*([0-9.]+)/;
      return (
        +(((p = a.match(f)) == null ? void 0 : p[1]) || 0) -
        +(((h = u.match(f)) == null ? void 0 : h[1]) || 0)
      );
    });
  return l.length
    ? l.reduce(
        (a, u) => {
          const f = o[u];
          return delete a[u], (a[u] = f), a;
        },
        { ...o }
      )
    : o;
}
function i0(r, o) {
  return (
    o === "@" ||
    (o.startsWith("@") &&
      (r.some((l) => o.startsWith(`@${l}`)) || !!o.match(/^@\d/)))
  );
}
function l0(r, o) {
  const l = o.match(/^@([^/]+)?\/?(.+)?$/);
  if (!l) return null;
  const [, a, u] = l,
    f = Number.isNaN(+a) ? a || 0 : +a;
  return r.containerQueries(u).up(f);
}
function s0(r) {
  const o = (f, p) => f.replace("@media", p ? `@container ${p}` : "@container");
  function l(f, p) {
    (f.up = (...h) => o(r.breakpoints.up(...h), p)),
      (f.down = (...h) => o(r.breakpoints.down(...h), p)),
      (f.between = (...h) => o(r.breakpoints.between(...h), p)),
      (f.only = (...h) => o(r.breakpoints.only(...h), p)),
      (f.not = (...h) => {
        const w = o(r.breakpoints.not(...h), p);
        return w.includes("not all and")
          ? w
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : w;
      });
  }
  const a = {},
    u = (f) => (l(a, f), a);
  return l(u), { ...r, containerQueries: u };
}
const il = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  fd = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (r) => `@media (min-width:${il[r]}px)`,
  },
  a0 = {
    containerQueries: (r) => ({
      up: (o) => {
        let l = typeof o == "number" ? o : il[o] || o;
        return (
          typeof l == "number" && (l = `${l}px`),
          r ? `@container ${r} (min-width:${l})` : `@container (min-width:${l})`
        );
      },
    }),
  };
function an(r, o, l) {
  const a = r.theme || {};
  if (Array.isArray(o)) {
    const f = a.breakpoints || fd;
    return o.reduce((p, h, w) => ((p[f.up(f.keys[w])] = l(o[w])), p), {});
  }
  if (typeof o == "object") {
    const f = a.breakpoints || fd;
    return Object.keys(o).reduce((p, h) => {
      if (i0(f.keys, h)) {
        const w = l0(a.containerQueries ? a : a0, h);
        w && (p[w] = l(o[h], h));
      } else if (Object.keys(f.values || il).includes(h)) {
        const w = f.up(h);
        p[w] = l(o[h], h);
      } else {
        const w = h;
        p[w] = o[w];
      }
      return p;
    }, {});
  }
  return l(o);
}
function u0(r = {}) {
  var l;
  return (
    ((l = r.keys) == null
      ? void 0
      : l.reduce((a, u) => {
          const f = r.up(u);
          return (a[f] = {}), a;
        }, {})) || {}
  );
}
function c0(r, o) {
  return r.reduce((l, a) => {
    const u = l[a];
    return (!u || Object.keys(u).length === 0) && delete l[a], l;
  }, o);
}
function ll(r, o, l = !0) {
  if (!o || typeof o != "string") return null;
  if (r && r.vars && l) {
    const a = `vars.${o}`
      .split(".")
      .reduce((u, f) => (u && u[f] ? u[f] : null), r);
    if (a != null) return a;
  }
  return o.split(".").reduce((a, u) => (a && a[u] != null ? a[u] : null), r);
}
function el(r, o, l, a = l) {
  let u;
  return (
    typeof r == "function"
      ? (u = r(l))
      : Array.isArray(r)
      ? (u = r[l] || a)
      : (u = ll(r, l) || a),
    o && (u = o(u, a, r)),
    u
  );
}
function Ue(r) {
  const { prop: o, cssProperty: l = r.prop, themeKey: a, transform: u } = r,
    f = (p) => {
      if (p[o] == null) return null;
      const h = p[o],
        w = p.theme,
        v = ll(w, a) || {};
      return an(p, h, (k) => {
        let O = el(v, u, k);
        return (
          k === O &&
            typeof k == "string" &&
            (O = el(v, u, `${o}${k === "default" ? "" : Er(k)}`, k)),
          l === !1 ? O : { [l]: O }
        );
      });
    };
  return (f.propTypes = {}), (f.filterProps = [o]), f;
}
function f0(r) {
  const o = {};
  return (l) => (o[l] === void 0 && (o[l] = r(l)), o[l]);
}
const d0 = { m: "margin", p: "padding" },
  p0 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  dd = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  h0 = f0((r) => {
    if (r.length > 2)
      if (dd[r]) r = dd[r];
      else return [r];
    const [o, l] = r.split(""),
      a = d0[o],
      u = p0[l] || "";
    return Array.isArray(u) ? u.map((f) => a + f) : [a + u];
  }),
  Va = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Wa = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Va, ...Wa];
function Ro(r, o, l, a) {
  const u = ll(r, o, !0) ?? l;
  return typeof u == "number" || typeof u == "string"
    ? (f) =>
        typeof f == "string"
          ? f
          : typeof u == "string"
          ? `calc(${f} * ${u})`
          : u * f
    : Array.isArray(u)
    ? (f) => {
        if (typeof f == "string") return f;
        const p = Math.abs(f),
          h = u[p];
        return f >= 0 ? h : typeof h == "number" ? -h : `-${h}`;
      }
    : typeof u == "function"
    ? u
    : () => {};
}
function Ka(r) {
  return Ro(r, "spacing", 8);
}
function Oo(r, o) {
  return typeof o == "string" || o == null ? o : r(o);
}
function m0(r, o) {
  return (l) => r.reduce((a, u) => ((a[u] = Oo(o, l)), a), {});
}
function g0(r, o, l, a) {
  if (!o.includes(l)) return null;
  const u = h0(l),
    f = m0(u, a),
    p = r[l];
  return an(r, p, f);
}
function Xd(r, o) {
  const l = Ka(r.theme);
  return Object.keys(r)
    .map((a) => g0(r, o, a, l))
    .reduce(Co, {});
}
function je(r) {
  return Xd(r, Va);
}
je.propTypes = {};
je.filterProps = Va;
function Ie(r) {
  return Xd(r, Wa);
}
Ie.propTypes = {};
Ie.filterProps = Wa;
function sl(...r) {
  const o = r.reduce(
      (a, u) => (
        u.filterProps.forEach((f) => {
          a[f] = u;
        }),
        a
      ),
      {}
    ),
    l = (a) => Object.keys(a).reduce((u, f) => (o[f] ? Co(u, o[f](a)) : u), {});
  return (
    (l.propTypes = {}),
    (l.filterProps = r.reduce((a, u) => a.concat(u.filterProps), [])),
    l
  );
}
function Nt(r) {
  return typeof r != "number" ? r : `${r}px solid`;
}
function Lt(r, o) {
  return Ue({ prop: r, themeKey: "borders", transform: o });
}
const y0 = Lt("border", Nt),
  v0 = Lt("borderTop", Nt),
  w0 = Lt("borderRight", Nt),
  S0 = Lt("borderBottom", Nt),
  k0 = Lt("borderLeft", Nt),
  C0 = Lt("borderColor"),
  x0 = Lt("borderTopColor"),
  E0 = Lt("borderRightColor"),
  T0 = Lt("borderBottomColor"),
  _0 = Lt("borderLeftColor"),
  P0 = Lt("outline", Nt),
  R0 = Lt("outlineColor"),
  al = (r) => {
    if (r.borderRadius !== void 0 && r.borderRadius !== null) {
      const o = Ro(r.theme, "shape.borderRadius", 4),
        l = (a) => ({ borderRadius: Oo(o, a) });
      return an(r, r.borderRadius, l);
    }
    return null;
  };
al.propTypes = {};
al.filterProps = ["borderRadius"];
sl(y0, v0, w0, S0, k0, C0, x0, E0, T0, _0, al, P0, R0);
const ul = (r) => {
  if (r.gap !== void 0 && r.gap !== null) {
    const o = Ro(r.theme, "spacing", 8),
      l = (a) => ({ gap: Oo(o, a) });
    return an(r, r.gap, l);
  }
  return null;
};
ul.propTypes = {};
ul.filterProps = ["gap"];
const cl = (r) => {
  if (r.columnGap !== void 0 && r.columnGap !== null) {
    const o = Ro(r.theme, "spacing", 8),
      l = (a) => ({ columnGap: Oo(o, a) });
    return an(r, r.columnGap, l);
  }
  return null;
};
cl.propTypes = {};
cl.filterProps = ["columnGap"];
const fl = (r) => {
  if (r.rowGap !== void 0 && r.rowGap !== null) {
    const o = Ro(r.theme, "spacing", 8),
      l = (a) => ({ rowGap: Oo(o, a) });
    return an(r, r.rowGap, l);
  }
  return null;
};
fl.propTypes = {};
fl.filterProps = ["rowGap"];
const O0 = Ue({ prop: "gridColumn" }),
  A0 = Ue({ prop: "gridRow" }),
  N0 = Ue({ prop: "gridAutoFlow" }),
  L0 = Ue({ prop: "gridAutoColumns" }),
  z0 = Ue({ prop: "gridAutoRows" }),
  F0 = Ue({ prop: "gridTemplateColumns" }),
  D0 = Ue({ prop: "gridTemplateRows" }),
  j0 = Ue({ prop: "gridTemplateAreas" }),
  I0 = Ue({ prop: "gridArea" });
sl(ul, cl, fl, O0, A0, N0, L0, z0, F0, D0, j0, I0);
function Cr(r, o) {
  return o === "grey" ? o : r;
}
const $0 = Ue({ prop: "color", themeKey: "palette", transform: Cr }),
  B0 = Ue({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Cr,
  }),
  M0 = Ue({ prop: "backgroundColor", themeKey: "palette", transform: Cr });
sl($0, B0, M0);
function kt(r) {
  return r <= 1 && r !== 0 ? `${r * 100}%` : r;
}
const U0 = Ue({ prop: "width", transform: kt }),
  Qa = (r) => {
    if (r.maxWidth !== void 0 && r.maxWidth !== null) {
      const o = (l) => {
        var u, f, p, h, w;
        const a =
          ((p =
            (f = (u = r.theme) == null ? void 0 : u.breakpoints) == null
              ? void 0
              : f.values) == null
            ? void 0
            : p[l]) || il[l];
        return a
          ? ((w = (h = r.theme) == null ? void 0 : h.breakpoints) == null
              ? void 0
              : w.unit) !== "px"
            ? { maxWidth: `${a}${r.theme.breakpoints.unit}` }
            : { maxWidth: a }
          : { maxWidth: kt(l) };
      };
      return an(r, r.maxWidth, o);
    }
    return null;
  };
Qa.filterProps = ["maxWidth"];
const b0 = Ue({ prop: "minWidth", transform: kt }),
  H0 = Ue({ prop: "height", transform: kt }),
  V0 = Ue({ prop: "maxHeight", transform: kt }),
  W0 = Ue({ prop: "minHeight", transform: kt });
Ue({ prop: "size", cssProperty: "width", transform: kt });
Ue({ prop: "size", cssProperty: "height", transform: kt });
const K0 = Ue({ prop: "boxSizing" });
sl(U0, Qa, b0, H0, V0, W0, K0);
const dl = {
  border: { themeKey: "borders", transform: Nt },
  borderTop: { themeKey: "borders", transform: Nt },
  borderRight: { themeKey: "borders", transform: Nt },
  borderBottom: { themeKey: "borders", transform: Nt },
  borderLeft: { themeKey: "borders", transform: Nt },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: Nt },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: al },
  color: { themeKey: "palette", transform: Cr },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Cr,
  },
  backgroundColor: { themeKey: "palette", transform: Cr },
  p: { style: Ie },
  pt: { style: Ie },
  pr: { style: Ie },
  pb: { style: Ie },
  pl: { style: Ie },
  px: { style: Ie },
  py: { style: Ie },
  padding: { style: Ie },
  paddingTop: { style: Ie },
  paddingRight: { style: Ie },
  paddingBottom: { style: Ie },
  paddingLeft: { style: Ie },
  paddingX: { style: Ie },
  paddingY: { style: Ie },
  paddingInline: { style: Ie },
  paddingInlineStart: { style: Ie },
  paddingInlineEnd: { style: Ie },
  paddingBlock: { style: Ie },
  paddingBlockStart: { style: Ie },
  paddingBlockEnd: { style: Ie },
  m: { style: je },
  mt: { style: je },
  mr: { style: je },
  mb: { style: je },
  ml: { style: je },
  mx: { style: je },
  my: { style: je },
  margin: { style: je },
  marginTop: { style: je },
  marginRight: { style: je },
  marginBottom: { style: je },
  marginLeft: { style: je },
  marginX: { style: je },
  marginY: { style: je },
  marginInline: { style: je },
  marginInlineStart: { style: je },
  marginInlineEnd: { style: je },
  marginBlock: { style: je },
  marginBlockStart: { style: je },
  marginBlockEnd: { style: je },
  displayPrint: {
    cssProperty: !1,
    transform: (r) => ({ "@media print": { display: r } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: ul },
  rowGap: { style: fl },
  columnGap: { style: cl },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: kt },
  maxWidth: { style: Qa },
  minWidth: { transform: kt },
  height: { transform: kt },
  maxHeight: { transform: kt },
  minHeight: { transform: kt },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function Q0(...r) {
  const o = r.reduce((a, u) => a.concat(Object.keys(u)), []),
    l = new Set(o);
  return r.every((a) => l.size === Object.keys(a).length);
}
function q0(r, o) {
  return typeof r == "function" ? r(o) : r;
}
function G0() {
  function r(l, a, u, f) {
    const p = { [l]: a, theme: u },
      h = f[l];
    if (!h) return { [l]: a };
    const { cssProperty: w = l, themeKey: v, transform: C, style: k } = h;
    if (a == null) return null;
    if (v === "typography" && a === "inherit") return { [l]: a };
    const O = ll(u, v) || {};
    return k
      ? k(p)
      : an(p, a, (R) => {
          let _ = el(O, C, R);
          return (
            R === _ &&
              typeof R == "string" &&
              (_ = el(O, C, `${l}${R === "default" ? "" : Er(R)}`, R)),
            w === !1 ? _ : { [w]: _ }
          );
        });
  }
  function o(l) {
    const { sx: a, theme: u = {} } = l || {};
    if (!a) return null;
    const f = u.unstable_sxConfig ?? dl;
    function p(h) {
      let w = h;
      if (typeof h == "function") w = h(u);
      else if (typeof h != "object") return h;
      if (!w) return null;
      const v = u0(u.breakpoints),
        C = Object.keys(v);
      let k = v;
      return (
        Object.keys(w).forEach((O) => {
          const I = q0(w[O], u);
          if (I != null)
            if (typeof I == "object")
              if (f[O]) k = Co(k, r(O, I, u, f));
              else {
                const R = an({ theme: u }, I, (_) => ({ [O]: _ }));
                Q0(R, I) ? (k[O] = o({ sx: I, theme: u })) : (k = Co(k, R));
              }
            else k = Co(k, r(O, I, u, f));
        }),
        o0(u, c0(C, k))
      );
    }
    return Array.isArray(a) ? a.map(p) : p(a);
  }
  return o;
}
const Tr = G0();
Tr.filterProps = ["sx"];
function Na() {
  return (
    (Na = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var a in l) ({}).hasOwnProperty.call(l, a) && (r[a] = l[a]);
          }
          return r;
        }),
    Na.apply(null, arguments)
  );
}
function Yd(r) {
  var o = Object.create(null);
  return function (l) {
    return o[l] === void 0 && (o[l] = r(l)), o[l];
  };
}
var X0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Y0 = Yd(function (r) {
    return (
      X0.test(r) ||
      (r.charCodeAt(0) === 111 &&
        r.charCodeAt(1) === 110 &&
        r.charCodeAt(2) < 91)
    );
  }),
  J0 = !1;
function Z0(r) {
  if (r.sheet) return r.sheet;
  for (var o = 0; o < document.styleSheets.length; o++)
    if (document.styleSheets[o].ownerNode === r) return document.styleSheets[o];
}
function eg(r) {
  var o = document.createElement("style");
  return (
    o.setAttribute("data-emotion", r.key),
    r.nonce !== void 0 && o.setAttribute("nonce", r.nonce),
    o.appendChild(document.createTextNode("")),
    o.setAttribute("data-s", ""),
    o
  );
}
var tg = (function () {
    function r(l) {
      var a = this;
      (this._insertTag = function (u) {
        var f;
        a.tags.length === 0
          ? a.insertionPoint
            ? (f = a.insertionPoint.nextSibling)
            : a.prepend
            ? (f = a.container.firstChild)
            : (f = a.before)
          : (f = a.tags[a.tags.length - 1].nextSibling),
          a.container.insertBefore(u, f),
          a.tags.push(u);
      }),
        (this.isSpeedy = l.speedy === void 0 ? !J0 : l.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = l.nonce),
        (this.key = l.key),
        (this.container = l.container),
        (this.prepend = l.prepend),
        (this.insertionPoint = l.insertionPoint),
        (this.before = null);
    }
    var o = r.prototype;
    return (
      (o.hydrate = function (a) {
        a.forEach(this._insertTag);
      }),
      (o.insert = function (a) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(eg(this));
        var u = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = Z0(u);
          try {
            f.insertRule(a, f.cssRules.length);
          } catch {}
        } else u.appendChild(document.createTextNode(a));
        this.ctr++;
      }),
      (o.flush = function () {
        this.tags.forEach(function (a) {
          var u;
          return (u = a.parentNode) == null ? void 0 : u.removeChild(a);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      r
    );
  })(),
  ot = "-ms-",
  tl = "-moz-",
  ge = "-webkit-",
  Jd = "comm",
  qa = "rule",
  Ga = "decl",
  ng = "@import",
  Zd = "@keyframes",
  rg = "@layer",
  og = Math.abs,
  pl = String.fromCharCode,
  ig = Object.assign;
function lg(r, o) {
  return Ze(r, 0) ^ 45
    ? (((((((o << 2) ^ Ze(r, 0)) << 2) ^ Ze(r, 1)) << 2) ^ Ze(r, 2)) << 2) ^
        Ze(r, 3)
    : 0;
}
function ep(r) {
  return r.trim();
}
function sg(r, o) {
  return (r = o.exec(r)) ? r[0] : r;
}
function ye(r, o, l) {
  return r.replace(o, l);
}
function La(r, o) {
  return r.indexOf(o);
}
function Ze(r, o) {
  return r.charCodeAt(o) | 0;
}
function xo(r, o, l) {
  return r.slice(o, l);
}
function qt(r) {
  return r.length;
}
function Xa(r) {
  return r.length;
}
function Vi(r, o) {
  return o.push(r), r;
}
function ag(r, o) {
  return r.map(o).join("");
}
var hl = 1,
  _r = 1,
  tp = 0,
  mt = 0,
  Ve = 0,
  Pr = "";
function ml(r, o, l, a, u, f, p) {
  return {
    value: r,
    root: o,
    parent: l,
    type: a,
    props: u,
    children: f,
    line: hl,
    column: _r,
    length: p,
    return: "",
  };
}
function yo(r, o) {
  return ig(ml("", null, null, "", null, null, 0), r, { length: -r.length }, o);
}
function ug() {
  return Ve;
}
function cg() {
  return (
    (Ve = mt > 0 ? Ze(Pr, --mt) : 0), _r--, Ve === 10 && ((_r = 1), hl--), Ve
  );
}
function xt() {
  return (
    (Ve = mt < tp ? Ze(Pr, mt++) : 0), _r++, Ve === 10 && ((_r = 1), hl++), Ve
  );
}
function Xt() {
  return Ze(Pr, mt);
}
function Qi() {
  return mt;
}
function Ao(r, o) {
  return xo(Pr, r, o);
}
function Eo(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function np(r) {
  return (hl = _r = 1), (tp = qt((Pr = r))), (mt = 0), [];
}
function rp(r) {
  return (Pr = ""), r;
}
function qi(r) {
  return ep(Ao(mt - 1, za(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function fg(r) {
  for (; (Ve = Xt()) && Ve < 33; ) xt();
  return Eo(r) > 2 || Eo(Ve) > 3 ? "" : " ";
}
function dg(r, o) {
  for (
    ;
    --o &&
    xt() &&
    !(Ve < 48 || Ve > 102 || (Ve > 57 && Ve < 65) || (Ve > 70 && Ve < 97));

  );
  return Ao(r, Qi() + (o < 6 && Xt() == 32 && xt() == 32));
}
function za(r) {
  for (; xt(); )
    switch (Ve) {
      case r:
        return mt;
      case 34:
      case 39:
        r !== 34 && r !== 39 && za(Ve);
        break;
      case 40:
        r === 41 && za(r);
        break;
      case 92:
        xt();
        break;
    }
  return mt;
}
function pg(r, o) {
  for (; xt() && r + Ve !== 57; ) if (r + Ve === 84 && Xt() === 47) break;
  return "/*" + Ao(o, mt - 1) + "*" + pl(r === 47 ? r : xt());
}
function hg(r) {
  for (; !Eo(Xt()); ) xt();
  return Ao(r, mt);
}
function mg(r) {
  return rp(Gi("", null, null, null, [""], (r = np(r)), 0, [0], r));
}
function Gi(r, o, l, a, u, f, p, h, w) {
  for (
    var v = 0,
      C = 0,
      k = p,
      O = 0,
      I = 0,
      R = 0,
      _ = 1,
      N = 1,
      M = 1,
      K = 0,
      B = "",
      U = u,
      H = f,
      G = a,
      W = B;
    N;

  )
    switch (((R = K), (K = xt()))) {
      case 40:
        if (R != 108 && Ze(W, k - 1) == 58) {
          La((W += ye(qi(K), "&", "&\f")), "&\f") != -1 && (M = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        W += qi(K);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        W += fg(R);
        break;
      case 92:
        W += dg(Qi() - 1, 7);
        continue;
      case 47:
        switch (Xt()) {
          case 42:
          case 47:
            Vi(gg(pg(xt(), Qi()), o, l), w);
            break;
          default:
            W += "/";
        }
        break;
      case 123 * _:
        h[v++] = qt(W) * M;
      case 125 * _:
      case 59:
      case 0:
        switch (K) {
          case 0:
          case 125:
            N = 0;
          case 59 + C:
            M == -1 && (W = ye(W, /\f/g, "")),
              I > 0 &&
                qt(W) - k &&
                Vi(
                  I > 32
                    ? hd(W + ";", a, l, k - 1)
                    : hd(ye(W, " ", "") + ";", a, l, k - 2),
                  w
                );
            break;
          case 59:
            W += ";";
          default:
            if (
              (Vi((G = pd(W, o, l, v, C, u, h, B, (U = []), (H = []), k)), f),
              K === 123)
            )
              if (C === 0) Gi(W, o, G, G, U, f, k, h, H);
              else
                switch (O === 99 && Ze(W, 3) === 110 ? 100 : O) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gi(
                      r,
                      G,
                      G,
                      a && Vi(pd(r, G, G, 0, 0, u, h, B, u, (U = []), k), H),
                      u,
                      H,
                      k,
                      h,
                      a ? U : H
                    );
                    break;
                  default:
                    Gi(W, G, G, G, [""], H, 0, h, H);
                }
        }
        (v = C = I = 0), (_ = M = 1), (B = W = ""), (k = p);
        break;
      case 58:
        (k = 1 + qt(W)), (I = R);
      default:
        if (_ < 1) {
          if (K == 123) --_;
          else if (K == 125 && _++ == 0 && cg() == 125) continue;
        }
        switch (((W += pl(K)), K * _)) {
          case 38:
            M = C > 0 ? 1 : ((W += "\f"), -1);
            break;
          case 44:
            (h[v++] = (qt(W) - 1) * M), (M = 1);
            break;
          case 64:
            Xt() === 45 && (W += qi(xt())),
              (O = Xt()),
              (C = k = qt((B = W += hg(Qi())))),
              K++;
            break;
          case 45:
            R === 45 && qt(W) == 2 && (_ = 0);
        }
    }
  return f;
}
function pd(r, o, l, a, u, f, p, h, w, v, C) {
  for (
    var k = u - 1, O = u === 0 ? f : [""], I = Xa(O), R = 0, _ = 0, N = 0;
    R < a;
    ++R
  )
    for (var M = 0, K = xo(r, k + 1, (k = og((_ = p[R])))), B = r; M < I; ++M)
      (B = ep(_ > 0 ? O[M] + " " + K : ye(K, /&\f/g, O[M]))) && (w[N++] = B);
  return ml(r, o, l, u === 0 ? qa : h, w, v, C);
}
function gg(r, o, l) {
  return ml(r, o, l, Jd, pl(ug()), xo(r, 2, -2), 0);
}
function hd(r, o, l, a) {
  return ml(r, o, l, Ga, xo(r, 0, a), xo(r, a + 1, -1), a);
}
function xr(r, o) {
  for (var l = "", a = Xa(r), u = 0; u < a; u++) l += o(r[u], u, r, o) || "";
  return l;
}
function yg(r, o, l, a) {
  switch (r.type) {
    case rg:
      if (r.children.length) break;
    case ng:
    case Ga:
      return (r.return = r.return || r.value);
    case Jd:
      return "";
    case Zd:
      return (r.return = r.value + "{" + xr(r.children, a) + "}");
    case qa:
      r.value = r.props.join(",");
  }
  return qt((l = xr(r.children, a)))
    ? (r.return = r.value + "{" + l + "}")
    : "";
}
function vg(r) {
  var o = Xa(r);
  return function (l, a, u, f) {
    for (var p = "", h = 0; h < o; h++) p += r[h](l, a, u, f) || "";
    return p;
  };
}
function wg(r) {
  return function (o) {
    o.root || ((o = o.return) && r(o));
  };
}
var Sg = function (o, l, a) {
    for (
      var u = 0, f = 0;
      (u = f), (f = Xt()), u === 38 && f === 12 && (l[a] = 1), !Eo(f);

    )
      xt();
    return Ao(o, mt);
  },
  kg = function (o, l) {
    var a = -1,
      u = 44;
    do
      switch (Eo(u)) {
        case 0:
          u === 38 && Xt() === 12 && (l[a] = 1), (o[a] += Sg(mt - 1, l, a));
          break;
        case 2:
          o[a] += qi(u);
          break;
        case 4:
          if (u === 44) {
            (o[++a] = Xt() === 58 ? "&\f" : ""), (l[a] = o[a].length);
            break;
          }
        default:
          o[a] += pl(u);
      }
    while ((u = xt()));
    return o;
  },
  Cg = function (o, l) {
    return rp(kg(np(o), l));
  },
  md = new WeakMap(),
  xg = function (o) {
    if (!(o.type !== "rule" || !o.parent || o.length < 1)) {
      for (
        var l = o.value,
          a = o.parent,
          u = o.column === a.column && o.line === a.line;
        a.type !== "rule";

      )
        if (((a = a.parent), !a)) return;
      if (
        !(o.props.length === 1 && l.charCodeAt(0) !== 58 && !md.get(a)) &&
        !u
      ) {
        md.set(o, !0);
        for (
          var f = [], p = Cg(l, f), h = a.props, w = 0, v = 0;
          w < p.length;
          w++
        )
          for (var C = 0; C < h.length; C++, v++)
            o.props[v] = f[w] ? p[w].replace(/&\f/g, h[C]) : h[C] + " " + p[w];
      }
    }
  },
  Eg = function (o) {
    if (o.type === "decl") {
      var l = o.value;
      l.charCodeAt(0) === 108 &&
        l.charCodeAt(2) === 98 &&
        ((o.return = ""), (o.value = ""));
    }
  };
function op(r, o) {
  switch (lg(r, o)) {
    case 5103:
      return ge + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ge + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + r + tl + r + ot + r + r;
    case 6828:
    case 4268:
      return ge + r + ot + r + r;
    case 6165:
      return ge + r + ot + "flex-" + r + r;
    case 5187:
      return (
        ge + r + ye(r, /(\w+).+(:[^]+)/, ge + "box-$1$2" + ot + "flex-$1$2") + r
      );
    case 5443:
      return ge + r + ot + "flex-item-" + ye(r, /flex-|-self/, "") + r;
    case 4675:
      return (
        ge +
        r +
        ot +
        "flex-line-pack" +
        ye(r, /align-content|flex-|-self/, "") +
        r
      );
    case 5548:
      return ge + r + ot + ye(r, "shrink", "negative") + r;
    case 5292:
      return ge + r + ot + ye(r, "basis", "preferred-size") + r;
    case 6060:
      return (
        ge +
        "box-" +
        ye(r, "-grow", "") +
        ge +
        r +
        ot +
        ye(r, "grow", "positive") +
        r
      );
    case 4554:
      return ge + ye(r, /([^-])(transform)/g, "$1" + ge + "$2") + r;
    case 6187:
      return (
        ye(
          ye(ye(r, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"),
          r,
          ""
        ) + r
      );
    case 5495:
    case 3959:
      return ye(r, /(image-set\([^]*)/, ge + "$1$`$1");
    case 4968:
      return (
        ye(
          ye(r, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + ot + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ge +
        r +
        r
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(r, /(.+)-inline(.+)/, ge + "$1$2") + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (qt(r) - 1 - o > 6)
        switch (Ze(r, o + 1)) {
          case 109:
            if (Ze(r, o + 4) !== 45) break;
          case 102:
            return (
              ye(
                r,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ge +
                  "$2-$3$1" +
                  tl +
                  (Ze(r, o + 3) == 108 ? "$3" : "$2-$3")
              ) + r
            );
          case 115:
            return ~La(r, "stretch")
              ? op(ye(r, "stretch", "fill-available"), o) + r
              : r;
        }
      break;
    case 4949:
      if (Ze(r, o + 1) !== 115) break;
    case 6444:
      switch (Ze(r, qt(r) - 3 - (~La(r, "!important") && 10))) {
        case 107:
          return ye(r, ":", ":" + ge) + r;
        case 101:
          return (
            ye(
              r,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ge +
                (Ze(r, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ge +
                "$2$3$1" +
                ot +
                "$2box$3"
            ) + r
          );
      }
      break;
    case 5936:
      switch (Ze(r, o + 11)) {
        case 114:
          return ge + r + ot + ye(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return ge + r + ot + ye(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return ge + r + ot + ye(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
      return ge + r + ot + r + r;
  }
  return r;
}
var Tg = function (o, l, a, u) {
    if (o.length > -1 && !o.return)
      switch (o.type) {
        case Ga:
          o.return = op(o.value, o.length);
          break;
        case Zd:
          return xr([yo(o, { value: ye(o.value, "@", "@" + ge) })], u);
        case qa:
          if (o.length)
            return ag(o.props, function (f) {
              switch (sg(f, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return xr(
                    [yo(o, { props: [ye(f, /:(read-\w+)/, ":" + tl + "$1")] })],
                    u
                  );
                case "::placeholder":
                  return xr(
                    [
                      yo(o, {
                        props: [ye(f, /:(plac\w+)/, ":" + ge + "input-$1")],
                      }),
                      yo(o, { props: [ye(f, /:(plac\w+)/, ":" + tl + "$1")] }),
                      yo(o, { props: [ye(f, /:(plac\w+)/, ot + "input-$1")] }),
                    ],
                    u
                  );
              }
              return "";
            });
      }
  },
  _g = [Tg],
  Pg = function (o) {
    var l = o.key;
    if (l === "css") {
      var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(a, function (_) {
        var N = _.getAttribute("data-emotion");
        N.indexOf(" ") !== -1 &&
          (document.head.appendChild(_), _.setAttribute("data-s", ""));
      });
    }
    var u = o.stylisPlugins || _g,
      f = {},
      p,
      h = [];
    (p = o.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + l + ' "]'),
        function (_) {
          for (
            var N = _.getAttribute("data-emotion").split(" "), M = 1;
            M < N.length;
            M++
          )
            f[N[M]] = !0;
          h.push(_);
        }
      );
    var w,
      v = [xg, Eg];
    {
      var C,
        k = [
          yg,
          wg(function (_) {
            C.insert(_);
          }),
        ],
        O = vg(v.concat(u, k)),
        I = function (N) {
          return xr(mg(N), O);
        };
      w = function (N, M, K, B) {
        (C = K),
          I(N ? N + "{" + M.styles + "}" : M.styles),
          B && (R.inserted[M.name] = !0);
      };
    }
    var R = {
      key: l,
      sheet: new tg({
        key: l,
        container: p,
        nonce: o.nonce,
        speedy: o.speedy,
        prepend: o.prepend,
        insertionPoint: o.insertionPoint,
      }),
      nonce: o.nonce,
      inserted: f,
      registered: {},
      insert: w,
    };
    return R.sheet.hydrate(h), R;
  },
  Rg = !0;
function Og(r, o, l) {
  var a = "";
  return (
    l.split(" ").forEach(function (u) {
      r[u] !== void 0 ? o.push(r[u] + ";") : u && (a += u + " ");
    }),
    a
  );
}
var ip = function (o, l, a) {
    var u = o.key + "-" + l.name;
    (a === !1 || Rg === !1) &&
      o.registered[u] === void 0 &&
      (o.registered[u] = l.styles);
  },
  Ag = function (o, l, a) {
    ip(o, l, a);
    var u = o.key + "-" + l.name;
    if (o.inserted[l.name] === void 0) {
      var f = l;
      do o.insert(l === f ? "." + u : "", f, o.sheet, !0), (f = f.next);
      while (f !== void 0);
    }
  };
function Ng(r) {
  for (var o = 0, l, a = 0, u = r.length; u >= 4; ++a, u -= 4)
    (l =
      (r.charCodeAt(a) & 255) |
      ((r.charCodeAt(++a) & 255) << 8) |
      ((r.charCodeAt(++a) & 255) << 16) |
      ((r.charCodeAt(++a) & 255) << 24)),
      (l = (l & 65535) * 1540483477 + (((l >>> 16) * 59797) << 16)),
      (l ^= l >>> 24),
      (o =
        ((l & 65535) * 1540483477 + (((l >>> 16) * 59797) << 16)) ^
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)));
  switch (u) {
    case 3:
      o ^= (r.charCodeAt(a + 2) & 255) << 16;
    case 2:
      o ^= (r.charCodeAt(a + 1) & 255) << 8;
    case 1:
      (o ^= r.charCodeAt(a) & 255),
        (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16));
  }
  return (
    (o ^= o >>> 13),
    (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
    ((o ^ (o >>> 15)) >>> 0).toString(36)
  );
}
var Lg = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  zg = !1,
  Fg = /[A-Z]|^ms/g,
  Dg = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  lp = function (o) {
    return o.charCodeAt(1) === 45;
  },
  gd = function (o) {
    return o != null && typeof o != "boolean";
  },
  Ca = Yd(function (r) {
    return lp(r) ? r : r.replace(Fg, "-$&").toLowerCase();
  }),
  yd = function (o, l) {
    switch (o) {
      case "animation":
      case "animationName":
        if (typeof l == "string")
          return l.replace(Dg, function (a, u, f) {
            return (Gt = { name: u, styles: f, next: Gt }), u;
          });
    }
    return Lg[o] !== 1 && !lp(o) && typeof l == "number" && l !== 0
      ? l + "px"
      : l;
  },
  jg =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function To(r, o, l) {
  if (l == null) return "";
  var a = l;
  if (a.__emotion_styles !== void 0) return a;
  switch (typeof l) {
    case "boolean":
      return "";
    case "object": {
      var u = l;
      if (u.anim === 1)
        return (Gt = { name: u.name, styles: u.styles, next: Gt }), u.name;
      var f = l;
      if (f.styles !== void 0) {
        var p = f.next;
        if (p !== void 0)
          for (; p !== void 0; )
            (Gt = { name: p.name, styles: p.styles, next: Gt }), (p = p.next);
        var h = f.styles + ";";
        return h;
      }
      return Ig(r, o, l);
    }
    case "function": {
      if (r !== void 0) {
        var w = Gt,
          v = l(r);
        return (Gt = w), To(r, o, v);
      }
      break;
    }
  }
  var C = l;
  if (o == null) return C;
  var k = o[C];
  return k !== void 0 ? k : C;
}
function Ig(r, o, l) {
  var a = "";
  if (Array.isArray(l))
    for (var u = 0; u < l.length; u++) a += To(r, o, l[u]) + ";";
  else
    for (var f in l) {
      var p = l[f];
      if (typeof p != "object") {
        var h = p;
        o != null && o[h] !== void 0
          ? (a += f + "{" + o[h] + "}")
          : gd(h) && (a += Ca(f) + ":" + yd(f, h) + ";");
      } else {
        if (f === "NO_COMPONENT_SELECTOR" && zg) throw new Error(jg);
        if (
          Array.isArray(p) &&
          typeof p[0] == "string" &&
          (o == null || o[p[0]] === void 0)
        )
          for (var w = 0; w < p.length; w++)
            gd(p[w]) && (a += Ca(f) + ":" + yd(f, p[w]) + ";");
        else {
          var v = To(r, o, p);
          switch (f) {
            case "animation":
            case "animationName": {
              a += Ca(f) + ":" + v + ";";
              break;
            }
            default:
              a += f + "{" + v + "}";
          }
        }
      }
    }
  return a;
}
var vd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Gt;
function sp(r, o, l) {
  if (
    r.length === 1 &&
    typeof r[0] == "object" &&
    r[0] !== null &&
    r[0].styles !== void 0
  )
    return r[0];
  var a = !0,
    u = "";
  Gt = void 0;
  var f = r[0];
  if (f == null || f.raw === void 0) (a = !1), (u += To(l, o, f));
  else {
    var p = f;
    u += p[0];
  }
  for (var h = 1; h < r.length; h++)
    if (((u += To(l, o, r[h])), a)) {
      var w = f;
      u += w[h];
    }
  vd.lastIndex = 0;
  for (var v = "", C; (C = vd.exec(u)) !== null; ) v += "-" + C[1];
  var k = Ng(u) + v;
  return { name: k, styles: u, next: Gt };
}
var $g = function (o) {
    return o();
  },
  Bg = ud.useInsertionEffect ? ud.useInsertionEffect : !1,
  Mg = Bg || $g,
  ap = _e.createContext(typeof HTMLElement < "u" ? Pg({ key: "css" }) : null);
ap.Provider;
var Ug = function (o) {
    return _e.forwardRef(function (l, a) {
      var u = _e.useContext(ap);
      return o(l, u, a);
    });
  },
  bg = _e.createContext({}),
  Hg = Y0,
  Vg = function (o) {
    return o !== "theme";
  },
  wd = function (o) {
    return typeof o == "string" && o.charCodeAt(0) > 96 ? Hg : Vg;
  },
  Sd = function (o, l, a) {
    var u;
    if (l) {
      var f = l.shouldForwardProp;
      u =
        o.__emotion_forwardProp && f
          ? function (p) {
              return o.__emotion_forwardProp(p) && f(p);
            }
          : f;
    }
    return typeof u != "function" && a && (u = o.__emotion_forwardProp), u;
  },
  Wg = !1,
  Kg = function (o) {
    var l = o.cache,
      a = o.serialized,
      u = o.isStringTag;
    return (
      ip(l, a, u),
      Mg(function () {
        return Ag(l, a, u);
      }),
      null
    );
  },
  Qg = function r(o, l) {
    var a = o.__emotion_real === o,
      u = (a && o.__emotion_base) || o,
      f,
      p;
    l !== void 0 && ((f = l.label), (p = l.target));
    var h = Sd(o, l, a),
      w = h || wd(u),
      v = !w("as");
    return function () {
      var C = arguments,
        k =
          a && o.__emotion_styles !== void 0 ? o.__emotion_styles.slice(0) : [];
      if (
        (f !== void 0 && k.push("label:" + f + ";"),
        C[0] == null || C[0].raw === void 0)
      )
        k.push.apply(k, C);
      else {
        k.push(C[0][0]);
        for (var O = C.length, I = 1; I < O; I++) k.push(C[I], C[0][I]);
      }
      var R = Ug(function (_, N, M) {
        var K = (v && _.as) || u,
          B = "",
          U = [],
          H = _;
        if (_.theme == null) {
          H = {};
          for (var G in _) H[G] = _[G];
          H.theme = _e.useContext(bg);
        }
        typeof _.className == "string"
          ? (B = Og(N.registered, U, _.className))
          : _.className != null && (B = _.className + " ");
        var W = sp(k.concat(U), N.registered, H);
        (B += N.key + "-" + W.name), p !== void 0 && (B += " " + p);
        var fe = v && h === void 0 ? wd(K) : w,
          ve = {};
        for (var m in _) (v && m === "as") || (fe(m) && (ve[m] = _[m]));
        return (
          (ve.className = B),
          M && (ve.ref = M),
          _e.createElement(
            _e.Fragment,
            null,
            _e.createElement(Kg, {
              cache: N,
              serialized: W,
              isStringTag: typeof K == "string",
            }),
            _e.createElement(K, ve)
          )
        );
      });
      return (
        (R.displayName =
          f !== void 0
            ? f
            : "Styled(" +
              (typeof u == "string"
                ? u
                : u.displayName || u.name || "Component") +
              ")"),
        (R.defaultProps = o.defaultProps),
        (R.__emotion_real = R),
        (R.__emotion_base = u),
        (R.__emotion_styles = k),
        (R.__emotion_forwardProp = h),
        Object.defineProperty(R, "toString", {
          value: function () {
            return p === void 0 && Wg ? "NO_COMPONENT_SELECTOR" : "." + p;
          },
        }),
        (R.withComponent = function (_, N) {
          return r(_, Na({}, l, N, { shouldForwardProp: Sd(R, N, !0) })).apply(
            void 0,
            k
          );
        }),
        R
      );
    };
  },
  qg = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Fa = Qg.bind();
qg.forEach(function (r) {
  Fa[r] = Fa(r);
});
/**
 * @mui/styled-engine v6.1.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Gg(r, o) {
  return Fa(r, o);
}
function Xg(r, o) {
  Array.isArray(r.__emotion_styles) &&
    (r.__emotion_styles = o(r.__emotion_styles));
}
const kd = [];
function Cd(r) {
  return (kd[0] = r), sp(kd);
}
const Yg = (r) => {
  const o = Object.keys(r).map((l) => ({ key: l, val: r[l] })) || [];
  return (
    o.sort((l, a) => l.val - a.val),
    o.reduce((l, a) => ({ ...l, [a.key]: a.val }), {})
  );
};
function Jg(r) {
  const {
      values: o = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: l = "px",
      step: a = 5,
      ...u
    } = r,
    f = Yg(o),
    p = Object.keys(f);
  function h(O) {
    return `@media (min-width:${typeof o[O] == "number" ? o[O] : O}${l})`;
  }
  function w(O) {
    return `@media (max-width:${
      (typeof o[O] == "number" ? o[O] : O) - a / 100
    }${l})`;
  }
  function v(O, I) {
    const R = p.indexOf(I);
    return `@media (min-width:${
      typeof o[O] == "number" ? o[O] : O
    }${l}) and (max-width:${
      (R !== -1 && typeof o[p[R]] == "number" ? o[p[R]] : I) - a / 100
    }${l})`;
  }
  function C(O) {
    return p.indexOf(O) + 1 < p.length ? v(O, p[p.indexOf(O) + 1]) : h(O);
  }
  function k(O) {
    const I = p.indexOf(O);
    return I === 0
      ? h(p[1])
      : I === p.length - 1
      ? w(p[I])
      : v(O, p[p.indexOf(O) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: p,
    values: f,
    up: h,
    down: w,
    between: v,
    only: C,
    not: k,
    unit: l,
    ...u,
  };
}
const Zg = { borderRadius: 4 };
function up(r = 8, o = Ka({ spacing: r })) {
  if (r.mui) return r;
  const l = (...a) =>
    (a.length === 0 ? [1] : a)
      .map((f) => {
        const p = o(f);
        return typeof p == "number" ? `${p}px` : p;
      })
      .join(" ");
  return (l.mui = !0), l;
}
function ey(r, o) {
  var a;
  const l = this;
  if (l.vars) {
    if (
      !((a = l.colorSchemes) != null && a[r]) ||
      typeof l.getColorSchemeSelector != "function"
    )
      return {};
    let u = l.getColorSchemeSelector(r);
    return u === "&"
      ? o
      : ((u.includes("data-") || u.includes(".")) &&
          (u = `*:where(${u.replace(/\s*&$/, "")}) &`),
        { [u]: o });
  }
  return l.palette.mode === r ? o : {};
}
function cp(r = {}, ...o) {
  const {
      breakpoints: l = {},
      palette: a = {},
      spacing: u,
      shape: f = {},
      ...p
    } = r,
    h = Jg(l),
    w = up(u);
  let v = Ct(
    {
      breakpoints: h,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...a },
      spacing: w,
      shape: { ...Zg, ...f },
    },
    p
  );
  return (
    (v = s0(v)),
    (v.applyStyles = ey),
    (v = o.reduce((C, k) => Ct(C, k), v)),
    (v.unstable_sxConfig = {
      ...dl,
      ...(p == null ? void 0 : p.unstable_sxConfig),
    }),
    (v.unstable_sx = function (k) {
      return Tr({ sx: k, theme: this });
    }),
    v
  );
}
function fp(r) {
  const { variants: o, ...l } = r,
    a = { variants: o, style: Cd(l), isProcessed: !0 };
  return (
    a.style === l ||
      (o &&
        o.forEach((u) => {
          typeof u.style != "function" && (u.style = Cd(u.style));
        })),
    a
  );
}
const ty = cp();
function xa(r) {
  return r !== "ownerState" && r !== "theme" && r !== "sx" && r !== "as";
}
function ny(r) {
  return r ? (o, l) => l[r] : null;
}
function ry(r, o, l) {
  r.theme = ly(r.theme) ? l : r.theme[o] || r.theme;
}
function Xi(r, o) {
  const l = typeof o == "function" ? o(r) : o;
  if (Array.isArray(l)) return l.flatMap((a) => Xi(r, a));
  if (Array.isArray(l == null ? void 0 : l.variants)) {
    let a;
    if (l.isProcessed) a = l.style;
    else {
      const { variants: u, ...f } = l;
      a = f;
    }
    return dp(r, l.variants, [a]);
  }
  return l != null && l.isProcessed ? l.style : l;
}
function dp(r, o, l = []) {
  var u;
  let a;
  e: for (let f = 0; f < o.length; f += 1) {
    const p = o[f];
    if (typeof p.props == "function") {
      if (
        (a ?? (a = { ...r, ...r.ownerState, ownerState: r.ownerState }),
        !p.props(a))
      )
        continue;
    } else
      for (const h in p.props)
        if (
          r[h] !== p.props[h] &&
          ((u = r.ownerState) == null ? void 0 : u[h]) !== p.props[h]
        )
          continue e;
    typeof p.style == "function"
      ? (a ?? (a = { ...r, ...r.ownerState, ownerState: r.ownerState }),
        l.push(p.style(a)))
      : l.push(p.style);
  }
  return l;
}
function oy(r = {}) {
  const {
    themeId: o,
    defaultTheme: l = ty,
    rootShouldForwardProp: a = xa,
    slotShouldForwardProp: u = xa,
  } = r;
  function f(h) {
    ry(h, o, l);
  }
  return (h, w = {}) => {
    Xg(h, (H) => H.filter((G) => G !== Tr));
    const {
        name: v,
        slot: C,
        skipVariantsResolver: k,
        skipSx: O,
        overridesResolver: I = ny(ay(C)),
        ...R
      } = w,
      _ = k !== void 0 ? k : (C && C !== "Root" && C !== "root") || !1,
      N = O || !1;
    let M = xa;
    C === "Root" || C === "root"
      ? (M = a)
      : C
      ? (M = u)
      : sy(h) && (M = void 0);
    const K = Gg(h, { shouldForwardProp: M, label: iy(), ...R }),
      B = (H) => {
        if (typeof H == "function" && H.__emotion_real !== H)
          return function (W) {
            return Xi(W, H);
          };
        if (sn(H)) {
          const G = fp(H);
          return G.variants
            ? function (fe) {
                return Xi(fe, G);
              }
            : G.style;
        }
        return H;
      },
      U = (...H) => {
        const G = [],
          W = H.map(B),
          fe = [];
        if (
          (G.push(f),
          v &&
            I &&
            fe.push(function (re) {
              var be, Pe;
              const ke =
                (Pe = (be = re.theme.components) == null ? void 0 : be[v]) ==
                null
                  ? void 0
                  : Pe.styleOverrides;
              if (!ke) return null;
              const $e = {};
              for (const b in ke) $e[b] = Xi(re, ke[b]);
              return I(re, $e);
            }),
          v &&
            !_ &&
            fe.push(function (re) {
              var $e, be;
              const le = re.theme,
                ke =
                  (be =
                    ($e = le == null ? void 0 : le.components) == null
                      ? void 0
                      : $e[v]) == null
                    ? void 0
                    : be.variants;
              return ke ? dp(re, ke) : null;
            }),
          N || fe.push(Tr),
          Array.isArray(W[0]))
        ) {
          const X = W.shift(),
            re = new Array(G.length).fill(""),
            le = new Array(fe.length).fill("");
          let ke;
          (ke = [...re, ...X, ...le]),
            (ke.raw = [...re, ...X.raw, ...le]),
            G.unshift(ke);
        }
        const ve = [...G, ...W, ...fe],
          m = K(...ve);
        return h.muiName && (m.muiName = h.muiName), m;
      };
    return K.withConfig && (U.withConfig = K.withConfig), U;
  };
}
function iy(r, o) {
  return void 0;
}
function ly(r) {
  for (const o in r) return !1;
  return !0;
}
function sy(r) {
  return typeof r == "string" && r.charCodeAt(0) > 96;
}
function ay(r) {
  return r && r.charAt(0).toLowerCase() + r.slice(1);
}
function Ya(r, o = 0, l = 1) {
  return n0(r, o, l);
}
function uy(r) {
  r = r.slice(1);
  const o = new RegExp(`.{1,${r.length >= 6 ? 2 : 1}}`, "g");
  let l = r.match(o);
  return (
    l && l[0].length === 1 && (l = l.map((a) => a + a)),
    l
      ? `rgb${l.length === 4 ? "a" : ""}(${l
          .map((a, u) =>
            u < 3
              ? parseInt(a, 16)
              : Math.round((parseInt(a, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Rn(r) {
  if (r.type) return r;
  if (r.charAt(0) === "#") return Rn(uy(r));
  const o = r.indexOf("("),
    l = r.substring(0, o);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(l))
    throw new Error(Vn(9, r));
  let a = r.substring(o + 1, r.length - 1),
    u;
  if (l === "color") {
    if (
      ((a = a.split(" ")),
      (u = a.shift()),
      a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        u
      ))
    )
      throw new Error(Vn(10, u));
  } else a = a.split(",");
  return (
    (a = a.map((f) => parseFloat(f))), { type: l, values: a, colorSpace: u }
  );
}
const cy = (r) => {
    const o = Rn(r);
    return o.values
      .slice(0, 3)
      .map((l, a) => (o.type.includes("hsl") && a !== 0 ? `${l}%` : l))
      .join(" ");
  },
  So = (r, o) => {
    try {
      return cy(r);
    } catch {
      return r;
    }
  };
function gl(r) {
  const { type: o, colorSpace: l } = r;
  let { values: a } = r;
  return (
    o.includes("rgb")
      ? (a = a.map((u, f) => (f < 3 ? parseInt(u, 10) : u)))
      : o.includes("hsl") && ((a[1] = `${a[1]}%`), (a[2] = `${a[2]}%`)),
    o.includes("color") ? (a = `${l} ${a.join(" ")}`) : (a = `${a.join(", ")}`),
    `${o}(${a})`
  );
}
function pp(r) {
  r = Rn(r);
  const { values: o } = r,
    l = o[0],
    a = o[1] / 100,
    u = o[2] / 100,
    f = a * Math.min(u, 1 - u),
    p = (v, C = (v + l / 30) % 12) =>
      u - f * Math.max(Math.min(C - 3, 9 - C, 1), -1);
  let h = "rgb";
  const w = [
    Math.round(p(0) * 255),
    Math.round(p(8) * 255),
    Math.round(p(4) * 255),
  ];
  return (
    r.type === "hsla" && ((h += "a"), w.push(o[3])), gl({ type: h, values: w })
  );
}
function Da(r) {
  r = Rn(r);
  let o = r.type === "hsl" || r.type === "hsla" ? Rn(pp(r)).values : r.values;
  return (
    (o = o.map(
      (l) => (
        r.type !== "color" && (l /= 255),
        l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]).toFixed(3))
  );
}
function fy(r, o) {
  const l = Da(r),
    a = Da(o);
  return (Math.max(l, a) + 0.05) / (Math.min(l, a) + 0.05);
}
function dy(r, o) {
  return (
    (r = Rn(r)),
    (o = Ya(o)),
    (r.type === "rgb" || r.type === "hsl") && (r.type += "a"),
    r.type === "color" ? (r.values[3] = `/${o}`) : (r.values[3] = o),
    gl(r)
  );
}
function Wi(r, o, l) {
  try {
    return dy(r, o);
  } catch {
    return r;
  }
}
function Ja(r, o) {
  if (((r = Rn(r)), (o = Ya(o)), r.type.includes("hsl"))) r.values[2] *= 1 - o;
  else if (r.type.includes("rgb") || r.type.includes("color"))
    for (let l = 0; l < 3; l += 1) r.values[l] *= 1 - o;
  return gl(r);
}
function Ce(r, o, l) {
  try {
    return Ja(r, o);
  } catch {
    return r;
  }
}
function Za(r, o) {
  if (((r = Rn(r)), (o = Ya(o)), r.type.includes("hsl")))
    r.values[2] += (100 - r.values[2]) * o;
  else if (r.type.includes("rgb"))
    for (let l = 0; l < 3; l += 1) r.values[l] += (255 - r.values[l]) * o;
  else if (r.type.includes("color"))
    for (let l = 0; l < 3; l += 1) r.values[l] += (1 - r.values[l]) * o;
  return gl(r);
}
function xe(r, o, l) {
  try {
    return Za(r, o);
  } catch {
    return r;
  }
}
function py(r, o = 0.15) {
  return Da(r) > 0.5 ? Ja(r, o) : Za(r, o);
}
function Ki(r, o, l) {
  try {
    return py(r, o);
  } catch {
    return r;
  }
}
const hy = _e.createContext(void 0);
function my(r) {
  const { theme: o, name: l, props: a } = r;
  if (!o || !o.components || !o.components[l]) return a;
  const u = o.components[l];
  return u.defaultProps
    ? Aa(u.defaultProps, a)
    : !u.styleOverrides && !u.variants
    ? Aa(u, a)
    : a;
}
function gy({ props: r, name: o }) {
  const l = _e.useContext(hy);
  return my({ props: r, name: o, theme: { components: l } });
}
const xd = { theme: void 0 };
function yy(r) {
  let o, l;
  return function (u) {
    let f = o;
    return (
      (f === void 0 || u.theme !== l) &&
        ((xd.theme = u.theme), (f = fp(r(xd))), (o = f), (l = u.theme)),
      f
    );
  };
}
function vy(r = "") {
  function o(...a) {
    if (!a.length) return "";
    const u = a[0];
    return typeof u == "string" &&
      !u.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${r ? `${r}-` : ""}${u}${o(...a.slice(1))})`
      : `, ${u}`;
  }
  return (a, ...u) => `var(--${r ? `${r}-` : ""}${a}${o(...u)})`;
}
const Ed = (r, o, l, a = []) => {
    let u = r;
    o.forEach((f, p) => {
      p === o.length - 1
        ? Array.isArray(u)
          ? (u[Number(f)] = l)
          : u && typeof u == "object" && (u[f] = l)
        : u &&
          typeof u == "object" &&
          (u[f] || (u[f] = a.includes(f) ? [] : {}), (u = u[f]));
    });
  },
  wy = (r, o, l) => {
    function a(u, f = [], p = []) {
      Object.entries(u).forEach(([h, w]) => {
        (!l || (l && !l([...f, h]))) &&
          w != null &&
          (typeof w == "object" && Object.keys(w).length > 0
            ? a(w, [...f, h], Array.isArray(w) ? [...p, h] : p)
            : o([...f, h], w, p));
      });
    }
    a(r);
  },
  Sy = (r, o) =>
    typeof o == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((a) =>
          r.includes(a)
        ) || r[r.length - 1].toLowerCase().includes("opacity")
        ? o
        : `${o}px`
      : o;
function Ea(r, o) {
  const { prefix: l, shouldSkipGeneratingVar: a } = o || {},
    u = {},
    f = {},
    p = {};
  return (
    wy(
      r,
      (h, w, v) => {
        if (
          (typeof w == "string" || typeof w == "number") &&
          (!a || !a(h, w))
        ) {
          const C = `--${l ? `${l}-` : ""}${h.join("-")}`,
            k = Sy(h, w);
          Object.assign(u, { [C]: k }),
            Ed(f, h, `var(${C})`, v),
            Ed(p, h, `var(${C}, ${k})`, v);
        }
      },
      (h) => h[0] === "vars"
    ),
    { css: u, vars: f, varsWithDefaults: p }
  );
}
function ky(r, o = {}) {
  const {
      getSelector: l = N,
      disableCssColorScheme: a,
      colorSchemeSelector: u,
    } = o,
    {
      colorSchemes: f = {},
      components: p,
      defaultColorScheme: h = "light",
      ...w
    } = r,
    { vars: v, css: C, varsWithDefaults: k } = Ea(w, o);
  let O = k;
  const I = {},
    { [h]: R, ..._ } = f;
  if (
    (Object.entries(_ || {}).forEach(([B, U]) => {
      const { vars: H, css: G, varsWithDefaults: W } = Ea(U, o);
      (O = Ct(O, W)), (I[B] = { css: G, vars: H });
    }),
    R)
  ) {
    const { css: B, vars: U, varsWithDefaults: H } = Ea(R, o);
    (O = Ct(O, H)), (I[h] = { css: B, vars: U });
  }
  function N(B, U) {
    var G, W;
    let H = u;
    if (
      (u === "class" && (H = ".%s"),
      u === "data" && (H = "[data-%s]"),
      u != null &&
        u.startsWith("data-") &&
        !u.includes("%s") &&
        (H = `[${u}="%s"]`),
      B)
    ) {
      if (H === "media")
        return r.defaultColorScheme === B
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((W = (G = f[B]) == null ? void 0 : G.palette) == null
                  ? void 0
                  : W.mode) || B
              })`]: { ":root": U },
            };
      if (H)
        return r.defaultColorScheme === B
          ? `:root, ${H.replace("%s", String(B))}`
          : H.replace("%s", String(B));
    }
    return ":root";
  }
  return {
    vars: O,
    generateThemeVars: () => {
      let B = { ...v };
      return (
        Object.entries(I).forEach(([, { vars: U }]) => {
          B = Ct(B, U);
        }),
        B
      );
    },
    generateStyleSheets: () => {
      var fe, ve;
      const B = [],
        U = r.defaultColorScheme || "light";
      function H(m, X) {
        Object.keys(X).length &&
          B.push(typeof m == "string" ? { [m]: { ...X } } : m);
      }
      H(l(void 0, { ...C }), C);
      const { [U]: G, ...W } = I;
      if (G) {
        const { css: m } = G,
          X =
            (ve = (fe = f[U]) == null ? void 0 : fe.palette) == null
              ? void 0
              : ve.mode,
          re = !a && X ? { colorScheme: X, ...m } : { ...m };
        H(l(U, { ...re }), re);
      }
      return (
        Object.entries(W).forEach(([m, { css: X }]) => {
          var ke, $e;
          const re =
              ($e = (ke = f[m]) == null ? void 0 : ke.palette) == null
                ? void 0
                : $e.mode,
            le = !a && re ? { colorScheme: re, ...X } : { ...X };
          H(l(m, { ...le }), le);
        }),
        B
      );
    },
  };
}
function Cy(r) {
  return function (l) {
    return r === "media"
      ? `@media (prefers-color-scheme: ${l})`
      : r
      ? r.startsWith("data-") && !r.includes("%s")
        ? `[${r}="${l}"] &`
        : r === "class"
        ? `.${l} &`
        : r === "data"
        ? `[data-${l}] &`
        : `${r.replace("%s", l)} &`
      : "&";
  };
}
const _o = { black: "#000", white: "#fff" },
  xy = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  yr = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  vr = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  vo = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  wr = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Sr = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  kr = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  };
function hp() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: _o.white, default: _o.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const Ey = hp();
function mp() {
  return {
    text: {
      primary: _o.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: _o.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const Td = mp();
function _d(r, o, l, a) {
  const u = a.light || a,
    f = a.dark || a * 1.5;
  r[o] ||
    (r.hasOwnProperty(l)
      ? (r[o] = r[l])
      : o === "light"
      ? (r.light = Za(r.main, u))
      : o === "dark" && (r.dark = Ja(r.main, f)));
}
function Ty(r = "light") {
  return r === "dark"
    ? { main: wr[200], light: wr[50], dark: wr[400] }
    : { main: wr[700], light: wr[400], dark: wr[800] };
}
function _y(r = "light") {
  return r === "dark"
    ? { main: yr[200], light: yr[50], dark: yr[400] }
    : { main: yr[500], light: yr[300], dark: yr[700] };
}
function Py(r = "light") {
  return r === "dark"
    ? { main: vr[500], light: vr[300], dark: vr[700] }
    : { main: vr[700], light: vr[400], dark: vr[800] };
}
function Ry(r = "light") {
  return r === "dark"
    ? { main: Sr[400], light: Sr[300], dark: Sr[700] }
    : { main: Sr[700], light: Sr[500], dark: Sr[900] };
}
function Oy(r = "light") {
  return r === "dark"
    ? { main: kr[400], light: kr[300], dark: kr[700] }
    : { main: kr[800], light: kr[500], dark: kr[900] };
}
function Ay(r = "light") {
  return r === "dark"
    ? { main: vo[400], light: vo[300], dark: vo[700] }
    : { main: "#ed6c02", light: vo[500], dark: vo[900] };
}
function eu(r) {
  const {
      mode: o = "light",
      contrastThreshold: l = 3,
      tonalOffset: a = 0.2,
      ...u
    } = r,
    f = r.primary || Ty(o),
    p = r.secondary || _y(o),
    h = r.error || Py(o),
    w = r.info || Ry(o),
    v = r.success || Oy(o),
    C = r.warning || Ay(o);
  function k(_) {
    return fy(_, Td.text.primary) >= l ? Td.text.primary : Ey.text.primary;
  }
  const O = ({
    color: _,
    name: N,
    mainShade: M = 500,
    lightShade: K = 300,
    darkShade: B = 700,
  }) => {
    if (
      ((_ = { ..._ }),
      !_.main && _[M] && (_.main = _[M]),
      !_.hasOwnProperty("main"))
    )
      throw new Error(Vn(11, N ? ` (${N})` : "", M));
    if (typeof _.main != "string")
      throw new Error(Vn(12, N ? ` (${N})` : "", JSON.stringify(_.main)));
    return (
      _d(_, "light", K, a),
      _d(_, "dark", B, a),
      _.contrastText || (_.contrastText = k(_.main)),
      _
    );
  };
  let I;
  return (
    o === "light" ? (I = hp()) : o === "dark" && (I = mp()),
    Ct(
      {
        common: { ..._o },
        mode: o,
        primary: O({ color: f, name: "primary" }),
        secondary: O({
          color: p,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: O({ color: h, name: "error" }),
        warning: O({ color: C, name: "warning" }),
        info: O({ color: w, name: "info" }),
        success: O({ color: v, name: "success" }),
        grey: xy,
        contrastThreshold: l,
        getContrastText: k,
        augmentColor: O,
        tonalOffset: a,
        ...I,
      },
      u
    )
  );
}
function Ny(r) {
  const o = {};
  return (
    Object.entries(r).forEach((a) => {
      const [u, f] = a;
      typeof f == "object" &&
        (o[u] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${
          f.fontVariant ? `${f.fontVariant} ` : ""
        }${f.fontWeight ? `${f.fontWeight} ` : ""}${
          f.fontStretch ? `${f.fontStretch} ` : ""
        }${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${
          f.fontFamily || ""
        }`);
    }),
    o
  );
}
function Ly(r, o) {
  return {
    toolbar: {
      minHeight: 56,
      [r.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [r.up("sm")]: { minHeight: 64 },
    },
    ...o,
  };
}
function zy(r) {
  return Math.round(r * 1e5) / 1e5;
}
const Pd = { textTransform: "uppercase" },
  Rd = '"Roboto", "Helvetica", "Arial", sans-serif';
function Fy(r, o) {
  const {
      fontFamily: l = Rd,
      fontSize: a = 14,
      fontWeightLight: u = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: p = 500,
      fontWeightBold: h = 700,
      htmlFontSize: w = 16,
      allVariants: v,
      pxToRem: C,
      ...k
    } = typeof o == "function" ? o(r) : o,
    O = a / 14,
    I = C || ((N) => `${(N / w) * O}rem`),
    R = (N, M, K, B, U) => ({
      fontFamily: l,
      fontWeight: N,
      fontSize: I(M),
      lineHeight: K,
      ...(l === Rd ? { letterSpacing: `${zy(B / M)}em` } : {}),
      ...U,
      ...v,
    }),
    _ = {
      h1: R(u, 96, 1.167, -1.5),
      h2: R(u, 60, 1.2, -0.5),
      h3: R(f, 48, 1.167, 0),
      h4: R(f, 34, 1.235, 0.25),
      h5: R(f, 24, 1.334, 0),
      h6: R(p, 20, 1.6, 0.15),
      subtitle1: R(f, 16, 1.75, 0.15),
      subtitle2: R(p, 14, 1.57, 0.1),
      body1: R(f, 16, 1.5, 0.15),
      body2: R(f, 14, 1.43, 0.15),
      button: R(p, 14, 1.75, 0.4, Pd),
      caption: R(f, 12, 1.66, 0.4),
      overline: R(f, 12, 2.66, 1, Pd),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Ct(
    {
      htmlFontSize: w,
      pxToRem: I,
      fontFamily: l,
      fontSize: a,
      fontWeightLight: u,
      fontWeightRegular: f,
      fontWeightMedium: p,
      fontWeightBold: h,
      ..._,
    },
    k,
    { clone: !1 }
  );
}
const Dy = 0.2,
  jy = 0.14,
  Iy = 0.12;
function Le(...r) {
  return [
    `${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${Dy})`,
    `${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${jy})`,
    `${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${Iy})`,
  ].join(",");
}
const $y = [
    "none",
    Le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  By = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  My = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Od(r) {
  return `${Math.round(r)}ms`;
}
function Uy(r) {
  if (!r) return 0;
  const o = r / 36;
  return Math.min(Math.round((4 + 15 * o ** 0.25 + o / 5) * 10), 3e3);
}
function by(r) {
  const o = { ...By, ...r.easing },
    l = { ...My, ...r.duration };
  return {
    getAutoHeightDuration: Uy,
    create: (u = ["all"], f = {}) => {
      const {
        duration: p = l.standard,
        easing: h = o.easeInOut,
        delay: w = 0,
        ...v
      } = f;
      return (Array.isArray(u) ? u : [u])
        .map(
          (C) =>
            `${C} ${typeof p == "string" ? p : Od(p)} ${h} ${
              typeof w == "string" ? w : Od(w)
            }`
        )
        .join(",");
    },
    ...r,
    easing: o,
    duration: l,
  };
}
const Hy = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function Vy(r) {
  return (
    sn(r) ||
    typeof r > "u" ||
    typeof r == "string" ||
    typeof r == "boolean" ||
    typeof r == "number" ||
    Array.isArray(r)
  );
}
function gp(r = {}) {
  const o = { ...r };
  function l(a) {
    const u = Object.entries(a);
    for (let f = 0; f < u.length; f++) {
      const [p, h] = u[f];
      !Vy(h) || p.startsWith("unstable_")
        ? delete a[p]
        : sn(h) && ((a[p] = { ...h }), l(a[p]));
    }
  }
  return (
    l(o),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(o, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function ja(r = {}, ...o) {
  const {
    breakpoints: l,
    mixins: a = {},
    spacing: u,
    palette: f = {},
    transitions: p = {},
    typography: h = {},
    shape: w,
    ...v
  } = r;
  if (r.vars) throw new Error(Vn(20));
  const C = eu(f),
    k = cp(r);
  let O = Ct(k, {
    mixins: Ly(k.breakpoints, a),
    palette: C,
    shadows: $y.slice(),
    typography: Fy(C, h),
    transitions: by(p),
    zIndex: { ...Hy },
  });
  return (
    (O = Ct(O, v)),
    (O = o.reduce((I, R) => Ct(I, R), O)),
    (O.unstable_sxConfig = {
      ...dl,
      ...(v == null ? void 0 : v.unstable_sxConfig),
    }),
    (O.unstable_sx = function (R) {
      return Tr({ sx: R, theme: this });
    }),
    (O.toRuntimeSource = gp),
    O
  );
}
function Wy(r) {
  let o;
  return (
    r < 1 ? (o = 5.11916 * r ** 2) : (o = 4.5 * Math.log(r + 1) + 2),
    Math.round(o * 10) / 1e3
  );
}
const Ky = [...Array(25)].map((r, o) => {
  if (o === 0) return "none";
  const l = Wy(o);
  return `linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`;
});
function yp(r) {
  return {
    inputPlaceholder: r === "dark" ? 0.5 : 0.42,
    inputUnderline: r === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: r === "dark" ? 0.2 : 0.12,
    switchTrack: r === "dark" ? 0.3 : 0.38,
  };
}
function vp(r) {
  return r === "dark" ? Ky : [];
}
function Qy(r) {
  const { palette: o = { mode: "light" }, opacity: l, overlays: a, ...u } = r,
    f = eu(o);
  return {
    palette: f,
    opacity: { ...yp(f.mode), ...l },
    overlays: a || vp(f.mode),
    ...u,
  };
}
function qy(r) {
  var o;
  return (
    !!r[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!r[0].match(/sxConfig$/) ||
    (r[0] === "palette" &&
      !!((o = r[1]) != null && o.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const Gy = (r) => [
    ...[...Array(25)].map((o, l) => `--${r ? `${r}-` : ""}overlays-${l}`),
    `--${r ? `${r}-` : ""}palette-AppBar-darkBg`,
    `--${r ? `${r}-` : ""}palette-AppBar-darkColor`,
  ],
  Xy = (r) => (o, l) => {
    const a = r.rootSelector || ":root",
      u = r.colorSchemeSelector;
    let f = u;
    if (
      (u === "class" && (f = ".%s"),
      u === "data" && (f = "[data-%s]"),
      u != null &&
        u.startsWith("data-") &&
        !u.includes("%s") &&
        (f = `[${u}="%s"]`),
      r.defaultColorScheme === o)
    ) {
      if (o === "dark") {
        const p = {};
        return (
          Gy(r.cssVarPrefix).forEach((h) => {
            (p[h] = l[h]), delete l[h];
          }),
          f === "media"
            ? { [a]: l, "@media (prefers-color-scheme: dark)": { [a]: p } }
            : f
            ? { [f.replace("%s", o)]: p, [`${a}, ${f.replace("%s", o)}`]: l }
            : { [a]: { ...l, ...p } }
        );
      }
      if (f && f !== "media") return `${a}, ${f.replace("%s", String(o))}`;
    } else if (o) {
      if (f === "media")
        return { [`@media (prefers-color-scheme: ${String(o)})`]: { [a]: l } };
      if (f) return f.replace("%s", String(o));
    }
    return a;
  };
function Yy(r, o) {
  o.forEach((l) => {
    r[l] || (r[l] = {});
  });
}
function L(r, o, l) {
  !r[o] && l && (r[o] = l);
}
function ko(r) {
  return !r || !r.startsWith("hsl") ? r : pp(r);
}
function ln(r, o) {
  `${o}Channel` in r ||
    (r[`${o}Channel`] = So(
      ko(r[o]),
      `MUI: Can't create \`palette.${o}Channel\` because \`palette.${o}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${o}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
function Jy(r) {
  return typeof r == "number"
    ? `${r}px`
    : typeof r == "string" || typeof r == "function" || Array.isArray(r)
    ? r
    : "8px";
}
const Kt = (r) => {
    try {
      return r();
    } catch {}
  },
  Zy = (r = "mui") => vy(r);
function Ta(r, o, l, a) {
  if (!o) return;
  o = o === !0 ? {} : o;
  const u = a === "dark" ? "dark" : "light";
  if (!l) {
    r[a] = Qy({
      ...o,
      palette: { mode: u, ...(o == null ? void 0 : o.palette) },
    });
    return;
  }
  const { palette: f, ...p } = ja({
    ...l,
    palette: { mode: u, ...(o == null ? void 0 : o.palette) },
  });
  return (
    (r[a] = {
      ...o,
      palette: f,
      opacity: { ...yp(u), ...(o == null ? void 0 : o.opacity) },
      overlays: (o == null ? void 0 : o.overlays) || vp(u),
    }),
    p
  );
}
function e1(r = {}, ...o) {
  const {
      colorSchemes: l = { light: !0 },
      defaultColorScheme: a,
      disableCssColorScheme: u = !1,
      cssVarPrefix: f = "mui",
      shouldSkipGeneratingVar: p = qy,
      colorSchemeSelector: h = l.light && l.dark ? "media" : void 0,
      rootSelector: w = ":root",
      ...v
    } = r,
    C = Object.keys(l)[0],
    k = a || (l.light && C !== "light" ? "light" : C),
    O = Zy(f),
    { [k]: I, light: R, dark: _, ...N } = l,
    M = { ...N };
  let K = I;
  if (
    (((k === "dark" && !("dark" in l)) || (k === "light" && !("light" in l))) &&
      (K = !0),
    !K)
  )
    throw new Error(Vn(21, k));
  const B = Ta(M, K, v, k);
  R && !M.light && Ta(M, R, void 0, "light"),
    _ && !M.dark && Ta(M, _, void 0, "dark");
  let U = {
    defaultColorScheme: k,
    ...B,
    cssVarPrefix: f,
    colorSchemeSelector: h,
    rootSelector: w,
    getCssVar: O,
    colorSchemes: M,
    font: { ...Ny(B.typography), ...B.font },
    spacing: Jy(v.spacing),
  };
  Object.keys(U.colorSchemes).forEach((ve) => {
    const m = U.colorSchemes[ve].palette,
      X = (re) => {
        const le = re.split("-"),
          ke = le[1],
          $e = le[2];
        return O(re, m[ke][$e]);
      };
    if (
      (m.mode === "light" &&
        (L(m.common, "background", "#fff"),
        L(m.common, "onBackground", "#000")),
      m.mode === "dark" &&
        (L(m.common, "background", "#000"),
        L(m.common, "onBackground", "#fff")),
      Yy(m, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      m.mode === "light")
    ) {
      L(m.Alert, "errorColor", Ce(m.error.light, 0.6)),
        L(m.Alert, "infoColor", Ce(m.info.light, 0.6)),
        L(m.Alert, "successColor", Ce(m.success.light, 0.6)),
        L(m.Alert, "warningColor", Ce(m.warning.light, 0.6)),
        L(m.Alert, "errorFilledBg", X("palette-error-main")),
        L(m.Alert, "infoFilledBg", X("palette-info-main")),
        L(m.Alert, "successFilledBg", X("palette-success-main")),
        L(m.Alert, "warningFilledBg", X("palette-warning-main")),
        L(
          m.Alert,
          "errorFilledColor",
          Kt(() => m.getContrastText(m.error.main))
        ),
        L(
          m.Alert,
          "infoFilledColor",
          Kt(() => m.getContrastText(m.info.main))
        ),
        L(
          m.Alert,
          "successFilledColor",
          Kt(() => m.getContrastText(m.success.main))
        ),
        L(
          m.Alert,
          "warningFilledColor",
          Kt(() => m.getContrastText(m.warning.main))
        ),
        L(m.Alert, "errorStandardBg", xe(m.error.light, 0.9)),
        L(m.Alert, "infoStandardBg", xe(m.info.light, 0.9)),
        L(m.Alert, "successStandardBg", xe(m.success.light, 0.9)),
        L(m.Alert, "warningStandardBg", xe(m.warning.light, 0.9)),
        L(m.Alert, "errorIconColor", X("palette-error-main")),
        L(m.Alert, "infoIconColor", X("palette-info-main")),
        L(m.Alert, "successIconColor", X("palette-success-main")),
        L(m.Alert, "warningIconColor", X("palette-warning-main")),
        L(m.AppBar, "defaultBg", X("palette-grey-100")),
        L(m.Avatar, "defaultBg", X("palette-grey-400")),
        L(m.Button, "inheritContainedBg", X("palette-grey-300")),
        L(m.Button, "inheritContainedHoverBg", X("palette-grey-A100")),
        L(m.Chip, "defaultBorder", X("palette-grey-400")),
        L(m.Chip, "defaultAvatarColor", X("palette-grey-700")),
        L(m.Chip, "defaultIconColor", X("palette-grey-700")),
        L(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        L(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        L(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        L(m.LinearProgress, "primaryBg", xe(m.primary.main, 0.62)),
        L(m.LinearProgress, "secondaryBg", xe(m.secondary.main, 0.62)),
        L(m.LinearProgress, "errorBg", xe(m.error.main, 0.62)),
        L(m.LinearProgress, "infoBg", xe(m.info.main, 0.62)),
        L(m.LinearProgress, "successBg", xe(m.success.main, 0.62)),
        L(m.LinearProgress, "warningBg", xe(m.warning.main, 0.62)),
        L(m.Skeleton, "bg", `rgba(${X("palette-text-primaryChannel")} / 0.11)`),
        L(m.Slider, "primaryTrack", xe(m.primary.main, 0.62)),
        L(m.Slider, "secondaryTrack", xe(m.secondary.main, 0.62)),
        L(m.Slider, "errorTrack", xe(m.error.main, 0.62)),
        L(m.Slider, "infoTrack", xe(m.info.main, 0.62)),
        L(m.Slider, "successTrack", xe(m.success.main, 0.62)),
        L(m.Slider, "warningTrack", xe(m.warning.main, 0.62));
      const re = Ki(m.background.default, 0.8);
      L(m.SnackbarContent, "bg", re),
        L(
          m.SnackbarContent,
          "color",
          Kt(() => m.getContrastText(re))
        ),
        L(m.SpeedDialAction, "fabHoverBg", Ki(m.background.paper, 0.15)),
        L(m.StepConnector, "border", X("palette-grey-400")),
        L(m.StepContent, "border", X("palette-grey-400")),
        L(m.Switch, "defaultColor", X("palette-common-white")),
        L(m.Switch, "defaultDisabledColor", X("palette-grey-100")),
        L(m.Switch, "primaryDisabledColor", xe(m.primary.main, 0.62)),
        L(m.Switch, "secondaryDisabledColor", xe(m.secondary.main, 0.62)),
        L(m.Switch, "errorDisabledColor", xe(m.error.main, 0.62)),
        L(m.Switch, "infoDisabledColor", xe(m.info.main, 0.62)),
        L(m.Switch, "successDisabledColor", xe(m.success.main, 0.62)),
        L(m.Switch, "warningDisabledColor", xe(m.warning.main, 0.62)),
        L(m.TableCell, "border", xe(Wi(m.divider, 1), 0.88)),
        L(m.Tooltip, "bg", Wi(m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      L(m.Alert, "errorColor", xe(m.error.light, 0.6)),
        L(m.Alert, "infoColor", xe(m.info.light, 0.6)),
        L(m.Alert, "successColor", xe(m.success.light, 0.6)),
        L(m.Alert, "warningColor", xe(m.warning.light, 0.6)),
        L(m.Alert, "errorFilledBg", X("palette-error-dark")),
        L(m.Alert, "infoFilledBg", X("palette-info-dark")),
        L(m.Alert, "successFilledBg", X("palette-success-dark")),
        L(m.Alert, "warningFilledBg", X("palette-warning-dark")),
        L(
          m.Alert,
          "errorFilledColor",
          Kt(() => m.getContrastText(m.error.dark))
        ),
        L(
          m.Alert,
          "infoFilledColor",
          Kt(() => m.getContrastText(m.info.dark))
        ),
        L(
          m.Alert,
          "successFilledColor",
          Kt(() => m.getContrastText(m.success.dark))
        ),
        L(
          m.Alert,
          "warningFilledColor",
          Kt(() => m.getContrastText(m.warning.dark))
        ),
        L(m.Alert, "errorStandardBg", Ce(m.error.light, 0.9)),
        L(m.Alert, "infoStandardBg", Ce(m.info.light, 0.9)),
        L(m.Alert, "successStandardBg", Ce(m.success.light, 0.9)),
        L(m.Alert, "warningStandardBg", Ce(m.warning.light, 0.9)),
        L(m.Alert, "errorIconColor", X("palette-error-main")),
        L(m.Alert, "infoIconColor", X("palette-info-main")),
        L(m.Alert, "successIconColor", X("palette-success-main")),
        L(m.Alert, "warningIconColor", X("palette-warning-main")),
        L(m.AppBar, "defaultBg", X("palette-grey-900")),
        L(m.AppBar, "darkBg", X("palette-background-paper")),
        L(m.AppBar, "darkColor", X("palette-text-primary")),
        L(m.Avatar, "defaultBg", X("palette-grey-600")),
        L(m.Button, "inheritContainedBg", X("palette-grey-800")),
        L(m.Button, "inheritContainedHoverBg", X("palette-grey-700")),
        L(m.Chip, "defaultBorder", X("palette-grey-700")),
        L(m.Chip, "defaultAvatarColor", X("palette-grey-300")),
        L(m.Chip, "defaultIconColor", X("palette-grey-300")),
        L(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        L(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        L(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        L(m.LinearProgress, "primaryBg", Ce(m.primary.main, 0.5)),
        L(m.LinearProgress, "secondaryBg", Ce(m.secondary.main, 0.5)),
        L(m.LinearProgress, "errorBg", Ce(m.error.main, 0.5)),
        L(m.LinearProgress, "infoBg", Ce(m.info.main, 0.5)),
        L(m.LinearProgress, "successBg", Ce(m.success.main, 0.5)),
        L(m.LinearProgress, "warningBg", Ce(m.warning.main, 0.5)),
        L(m.Skeleton, "bg", `rgba(${X("palette-text-primaryChannel")} / 0.13)`),
        L(m.Slider, "primaryTrack", Ce(m.primary.main, 0.5)),
        L(m.Slider, "secondaryTrack", Ce(m.secondary.main, 0.5)),
        L(m.Slider, "errorTrack", Ce(m.error.main, 0.5)),
        L(m.Slider, "infoTrack", Ce(m.info.main, 0.5)),
        L(m.Slider, "successTrack", Ce(m.success.main, 0.5)),
        L(m.Slider, "warningTrack", Ce(m.warning.main, 0.5));
      const re = Ki(m.background.default, 0.98);
      L(m.SnackbarContent, "bg", re),
        L(
          m.SnackbarContent,
          "color",
          Kt(() => m.getContrastText(re))
        ),
        L(m.SpeedDialAction, "fabHoverBg", Ki(m.background.paper, 0.15)),
        L(m.StepConnector, "border", X("palette-grey-600")),
        L(m.StepContent, "border", X("palette-grey-600")),
        L(m.Switch, "defaultColor", X("palette-grey-300")),
        L(m.Switch, "defaultDisabledColor", X("palette-grey-600")),
        L(m.Switch, "primaryDisabledColor", Ce(m.primary.main, 0.55)),
        L(m.Switch, "secondaryDisabledColor", Ce(m.secondary.main, 0.55)),
        L(m.Switch, "errorDisabledColor", Ce(m.error.main, 0.55)),
        L(m.Switch, "infoDisabledColor", Ce(m.info.main, 0.55)),
        L(m.Switch, "successDisabledColor", Ce(m.success.main, 0.55)),
        L(m.Switch, "warningDisabledColor", Ce(m.warning.main, 0.55)),
        L(m.TableCell, "border", Ce(Wi(m.divider, 1), 0.68)),
        L(m.Tooltip, "bg", Wi(m.grey[700], 0.92));
    }
    ln(m.background, "default"),
      ln(m.background, "paper"),
      ln(m.common, "background"),
      ln(m.common, "onBackground"),
      ln(m, "divider"),
      Object.keys(m).forEach((re) => {
        const le = m[re];
        le &&
          typeof le == "object" &&
          (le.main && L(m[re], "mainChannel", So(ko(le.main))),
          le.light && L(m[re], "lightChannel", So(ko(le.light))),
          le.dark && L(m[re], "darkChannel", So(ko(le.dark))),
          le.contrastText &&
            L(m[re], "contrastTextChannel", So(ko(le.contrastText))),
          re === "text" && (ln(m[re], "primary"), ln(m[re], "secondary")),
          re === "action" &&
            (le.active && ln(m[re], "active"),
            le.selected && ln(m[re], "selected")));
      });
  }),
    (U = o.reduce((ve, m) => Ct(ve, m), U));
  const H = {
      prefix: f,
      disableCssColorScheme: u,
      shouldSkipGeneratingVar: p,
      getSelector: Xy(U),
    },
    { vars: G, generateThemeVars: W, generateStyleSheets: fe } = ky(U, H);
  return (
    (U.vars = G),
    Object.entries(U.colorSchemes[U.defaultColorScheme]).forEach(([ve, m]) => {
      U[ve] = m;
    }),
    (U.generateThemeVars = W),
    (U.generateStyleSheets = fe),
    (U.generateSpacing = function () {
      return up(v.spacing, Ka(this));
    }),
    (U.getColorSchemeSelector = Cy(h)),
    (U.spacing = U.generateSpacing()),
    (U.shouldSkipGeneratingVar = p),
    (U.unstable_sxConfig = {
      ...dl,
      ...(v == null ? void 0 : v.unstable_sxConfig),
    }),
    (U.unstable_sx = function (m) {
      return Tr({ sx: m, theme: this });
    }),
    (U.toRuntimeSource = gp),
    U
  );
}
function Ad(r, o, l) {
  r.colorSchemes &&
    l &&
    (r.colorSchemes[o] = {
      ...(l !== !0 && l),
      palette: eu({ ...(l === !0 ? {} : l.palette), mode: o }),
    });
}
function t1(r = {}, ...o) {
  const {
      palette: l,
      cssVariables: a = !1,
      colorSchemes: u = l ? void 0 : { light: !0 },
      defaultColorScheme: f = l == null ? void 0 : l.mode,
      ...p
    } = r,
    h = f || "light",
    w = u == null ? void 0 : u[h],
    v = {
      ...u,
      ...(l
        ? { [h]: { ...(typeof w != "boolean" && w), palette: l } }
        : void 0),
    };
  if (a === !1) {
    if (!("colorSchemes" in r)) return ja(r, ...o);
    let C = l;
    "palette" in r ||
      (v[h] &&
        (v[h] !== !0
          ? (C = v[h].palette)
          : h === "dark" && (C = { mode: "dark" })));
    const k = ja({ ...r, palette: C }, ...o);
    return (
      (k.defaultColorScheme = h),
      (k.colorSchemes = v),
      k.palette.mode === "light" &&
        ((k.colorSchemes.light = {
          ...(v.light !== !0 && v.light),
          palette: k.palette,
        }),
        Ad(k, "dark", v.dark)),
      k.palette.mode === "dark" &&
        ((k.colorSchemes.dark = {
          ...(v.dark !== !0 && v.dark),
          palette: k.palette,
        }),
        Ad(k, "light", v.light)),
      k
    );
  }
  return (
    !l && !("light" in v) && h === "light" && (v.light = !0),
    e1(
      {
        ...p,
        colorSchemes: v,
        defaultColorScheme: h,
        ...(typeof a != "boolean" && a),
      },
      ...o
    )
  );
}
const n1 = t1(),
  r1 = "$$material";
function o1(r) {
  return r !== "ownerState" && r !== "theme" && r !== "sx" && r !== "as";
}
const i1 = (r) => o1(r) && r !== "classes",
  l1 = oy({ themeId: r1, defaultTheme: n1, rootShouldForwardProp: i1 }),
  s1 = yy;
function a1(r) {
  return gy(r);
}
function u1(r) {
  return qd("MuiSvgIcon", r);
}
t0("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const c1 = (r) => {
    const { color: o, fontSize: l, classes: a } = r,
      u = {
        root: ["root", o !== "inherit" && `color${Er(o)}`, `fontSize${Er(l)}`],
      };
    return Ym(u, u1, a);
  },
  f1 = l1("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (r, o) => {
      const { ownerState: l } = r;
      return [
        o.root,
        l.color !== "inherit" && o[`color${Er(l.color)}`],
        o[`fontSize${Er(l.fontSize)}`],
      ];
    },
  })(
    s1(({ theme: r }) => {
      var o, l, a, u, f, p, h, w, v, C, k, O, I, R;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (u = (o = r.transitions) == null ? void 0 : o.create) == null
            ? void 0
            : u.call(o, "fill", {
                duration:
                  (a =
                    (l = (r.vars ?? r).transitions) == null
                      ? void 0
                      : l.duration) == null
                    ? void 0
                    : a.shorter,
              }),
        variants: [
          { props: (_) => !_.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((p = (f = r.typography) == null ? void 0 : f.pxToRem) == null
                  ? void 0
                  : p.call(f, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((w = (h = r.typography) == null ? void 0 : h.pxToRem) == null
                  ? void 0
                  : w.call(h, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((C = (v = r.typography) == null ? void 0 : v.pxToRem) == null
                  ? void 0
                  : C.call(v, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((r.vars ?? r).palette)
            .filter(([, _]) => _ && _.main)
            .map(([_]) => {
              var N, M;
              return {
                props: { color: _ },
                style: {
                  color:
                    (M = (N = (r.vars ?? r).palette) == null ? void 0 : N[_]) ==
                    null
                      ? void 0
                      : M.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (O = (k = (r.vars ?? r).palette) == null ? void 0 : k.action) ==
                null
                  ? void 0
                  : O.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (R = (I = (r.vars ?? r).palette) == null ? void 0 : I.action) ==
                null
                  ? void 0
                  : R.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  nl = _e.forwardRef(function (o, l) {
    const a = a1({ props: o, name: "MuiSvgIcon" }),
      {
        children: u,
        className: f,
        color: p = "inherit",
        component: h = "svg",
        fontSize: w = "medium",
        htmlColor: v,
        inheritViewBox: C = !1,
        titleAccess: k,
        viewBox: O = "0 0 24 24",
        ...I
      } = a,
      R = _e.isValidElement(u) && u.type === "svg",
      _ = {
        ...a,
        color: p,
        component: h,
        fontSize: w,
        instanceFontSize: o.fontSize,
        inheritViewBox: C,
        viewBox: O,
        hasSvgAsChild: R,
      },
      N = {};
    C || (N.viewBox = O);
    const M = c1(_);
    return se.jsxs(f1, {
      as: h,
      className: r0(M.root, f),
      focusable: "false",
      color: v,
      "aria-hidden": k ? void 0 : !0,
      role: k ? "img" : void 0,
      ref: l,
      ...N,
      ...I,
      ...(R && u.props),
      ownerState: _,
      children: [
        R ? u.props.children : u,
        k ? se.jsx("title", { children: k }) : null,
      ],
    });
  });
nl && (nl.muiName = "SvgIcon");
function yl(r, o) {
  function l(a, u) {
    return se.jsx(nl, { "data-testid": `${o}Icon`, ref: u, ...a, children: r });
  }
  return (l.muiName = nl.muiName), _e.memo(_e.forwardRef(l));
}
const d1 = yl(
    se.jsx("path", {
      d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z",
    }),
    "ArrowBack"
  ),
  Nd = yl(
    se.jsx("path", {
      d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    }),
    "ArrowForward"
  ),
  p1 = yl(
    se.jsx("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  h1 = yl(
    se.jsx("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
    }),
    "Search"
  );
function m1({ pokemon: r }) {
  return se.jsxs("div", {
    className: "card",
    style: { width: "18rem" },
    children: [
      se.jsx("img", {
        src: r.sprites.front_default,
        className: "card-img-top",
        alt: r.name,
      }),
      se.jsxs("div", {
        className: "card-body",
        children: [
          se.jsx("h5", { className: "card-title", children: r.name }),
          se.jsx("p", {
            className: "card-text",
            children: r.types.map((o) =>
              se.jsx(
                "button",
                {
                  type: "button",
                  className: " button btn btn-warning",
                  children: o.type.name,
                },
                o.slot
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function wp(r, o) {
  return function () {
    return r.apply(o, arguments);
  };
}
const { toString: g1 } = Object.prototype,
  { getPrototypeOf: tu } = Object,
  vl = ((r) => (o) => {
    const l = g1.call(o);
    return r[l] || (r[l] = l.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Mt = (r) => ((r = r.toLowerCase()), (o) => vl(o) === r),
  wl = (r) => (o) => typeof o === r,
  { isArray: Rr } = Array,
  Po = wl("undefined");
function y1(r) {
  return (
    r !== null &&
    !Po(r) &&
    r.constructor !== null &&
    !Po(r.constructor) &&
    Et(r.constructor.isBuffer) &&
    r.constructor.isBuffer(r)
  );
}
const Sp = Mt("ArrayBuffer");
function v1(r) {
  let o;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (o = ArrayBuffer.isView(r))
      : (o = r && r.buffer && Sp(r.buffer)),
    o
  );
}
const w1 = wl("string"),
  Et = wl("function"),
  kp = wl("number"),
  Sl = (r) => r !== null && typeof r == "object",
  S1 = (r) => r === !0 || r === !1,
  Yi = (r) => {
    if (vl(r) !== "object") return !1;
    const o = tu(r);
    return (
      (o === null ||
        o === Object.prototype ||
        Object.getPrototypeOf(o) === null) &&
      !(Symbol.toStringTag in r) &&
      !(Symbol.iterator in r)
    );
  },
  k1 = Mt("Date"),
  C1 = Mt("File"),
  x1 = Mt("Blob"),
  E1 = Mt("FileList"),
  T1 = (r) => Sl(r) && Et(r.pipe),
  _1 = (r) => {
    let o;
    return (
      r &&
      ((typeof FormData == "function" && r instanceof FormData) ||
        (Et(r.append) &&
          ((o = vl(r)) === "formdata" ||
            (o === "object" &&
              Et(r.toString) &&
              r.toString() === "[object FormData]"))))
    );
  },
  P1 = Mt("URLSearchParams"),
  [R1, O1, A1, N1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Mt
  ),
  L1 = (r) =>
    r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function No(r, o, { allOwnKeys: l = !1 } = {}) {
  if (r === null || typeof r > "u") return;
  let a, u;
  if ((typeof r != "object" && (r = [r]), Rr(r)))
    for (a = 0, u = r.length; a < u; a++) o.call(null, r[a], a, r);
  else {
    const f = l ? Object.getOwnPropertyNames(r) : Object.keys(r),
      p = f.length;
    let h;
    for (a = 0; a < p; a++) (h = f[a]), o.call(null, r[h], h, r);
  }
}
function Cp(r, o) {
  o = o.toLowerCase();
  const l = Object.keys(r);
  let a = l.length,
    u;
  for (; a-- > 0; ) if (((u = l[a]), o === u.toLowerCase())) return u;
  return null;
}
const bn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  xp = (r) => !Po(r) && r !== bn;
function Ia() {
  const { caseless: r } = (xp(this) && this) || {},
    o = {},
    l = (a, u) => {
      const f = (r && Cp(o, u)) || u;
      Yi(o[f]) && Yi(a)
        ? (o[f] = Ia(o[f], a))
        : Yi(a)
        ? (o[f] = Ia({}, a))
        : Rr(a)
        ? (o[f] = a.slice())
        : (o[f] = a);
    };
  for (let a = 0, u = arguments.length; a < u; a++)
    arguments[a] && No(arguments[a], l);
  return o;
}
const z1 = (r, o, l, { allOwnKeys: a } = {}) => (
    No(
      o,
      (u, f) => {
        l && Et(u) ? (r[f] = wp(u, l)) : (r[f] = u);
      },
      { allOwnKeys: a }
    ),
    r
  ),
  F1 = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r),
  D1 = (r, o, l, a) => {
    (r.prototype = Object.create(o.prototype, a)),
      (r.prototype.constructor = r),
      Object.defineProperty(r, "super", { value: o.prototype }),
      l && Object.assign(r.prototype, l);
  },
  j1 = (r, o, l, a) => {
    let u, f, p;
    const h = {};
    if (((o = o || {}), r == null)) return o;
    do {
      for (u = Object.getOwnPropertyNames(r), f = u.length; f-- > 0; )
        (p = u[f]), (!a || a(p, r, o)) && !h[p] && ((o[p] = r[p]), (h[p] = !0));
      r = l !== !1 && tu(r);
    } while (r && (!l || l(r, o)) && r !== Object.prototype);
    return o;
  },
  I1 = (r, o, l) => {
    (r = String(r)),
      (l === void 0 || l > r.length) && (l = r.length),
      (l -= o.length);
    const a = r.indexOf(o, l);
    return a !== -1 && a === l;
  },
  $1 = (r) => {
    if (!r) return null;
    if (Rr(r)) return r;
    let o = r.length;
    if (!kp(o)) return null;
    const l = new Array(o);
    for (; o-- > 0; ) l[o] = r[o];
    return l;
  },
  B1 = (
    (r) => (o) =>
      r && o instanceof r
  )(typeof Uint8Array < "u" && tu(Uint8Array)),
  M1 = (r, o) => {
    const a = (r && r[Symbol.iterator]).call(r);
    let u;
    for (; (u = a.next()) && !u.done; ) {
      const f = u.value;
      o.call(r, f[0], f[1]);
    }
  },
  U1 = (r, o) => {
    let l;
    const a = [];
    for (; (l = r.exec(o)) !== null; ) a.push(l);
    return a;
  },
  b1 = Mt("HTMLFormElement"),
  H1 = (r) =>
    r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, a, u) {
      return a.toUpperCase() + u;
    }),
  Ld = (
    ({ hasOwnProperty: r }) =>
    (o, l) =>
      r.call(o, l)
  )(Object.prototype),
  V1 = Mt("RegExp"),
  Ep = (r, o) => {
    const l = Object.getOwnPropertyDescriptors(r),
      a = {};
    No(l, (u, f) => {
      let p;
      (p = o(u, f, r)) !== !1 && (a[f] = p || u);
    }),
      Object.defineProperties(r, a);
  },
  W1 = (r) => {
    Ep(r, (o, l) => {
      if (Et(r) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
        return !1;
      const a = r[l];
      if (Et(a)) {
        if (((o.enumerable = !1), "writable" in o)) {
          o.writable = !1;
          return;
        }
        o.set ||
          (o.set = () => {
            throw Error("Can not rewrite read-only method '" + l + "'");
          });
      }
    });
  },
  K1 = (r, o) => {
    const l = {},
      a = (u) => {
        u.forEach((f) => {
          l[f] = !0;
        });
      };
    return Rr(r) ? a(r) : a(String(r).split(o)), l;
  },
  Q1 = () => {},
  q1 = (r, o) => (r != null && Number.isFinite((r = +r)) ? r : o),
  _a = "abcdefghijklmnopqrstuvwxyz",
  zd = "0123456789",
  Tp = { DIGIT: zd, ALPHA: _a, ALPHA_DIGIT: _a + _a.toUpperCase() + zd },
  G1 = (r = 16, o = Tp.ALPHA_DIGIT) => {
    let l = "";
    const { length: a } = o;
    for (; r--; ) l += o[(Math.random() * a) | 0];
    return l;
  };
function X1(r) {
  return !!(
    r &&
    Et(r.append) &&
    r[Symbol.toStringTag] === "FormData" &&
    r[Symbol.iterator]
  );
}
const Y1 = (r) => {
    const o = new Array(10),
      l = (a, u) => {
        if (Sl(a)) {
          if (o.indexOf(a) >= 0) return;
          if (!("toJSON" in a)) {
            o[u] = a;
            const f = Rr(a) ? [] : {};
            return (
              No(a, (p, h) => {
                const w = l(p, u + 1);
                !Po(w) && (f[h] = w);
              }),
              (o[u] = void 0),
              f
            );
          }
        }
        return a;
      };
    return l(r, 0);
  },
  J1 = Mt("AsyncFunction"),
  Z1 = (r) => r && (Sl(r) || Et(r)) && Et(r.then) && Et(r.catch),
  _p = ((r, o) =>
    r
      ? setImmediate
      : o
      ? ((l, a) => (
          bn.addEventListener(
            "message",
            ({ source: u, data: f }) => {
              u === bn && f === l && a.length && a.shift()();
            },
            !1
          ),
          (u) => {
            a.push(u), bn.postMessage(l, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (l) => setTimeout(l))(
    typeof setImmediate == "function",
    Et(bn.postMessage)
  ),
  ev =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(bn)
      : (typeof process < "u" && process.nextTick) || _p,
  A = {
    isArray: Rr,
    isArrayBuffer: Sp,
    isBuffer: y1,
    isFormData: _1,
    isArrayBufferView: v1,
    isString: w1,
    isNumber: kp,
    isBoolean: S1,
    isObject: Sl,
    isPlainObject: Yi,
    isReadableStream: R1,
    isRequest: O1,
    isResponse: A1,
    isHeaders: N1,
    isUndefined: Po,
    isDate: k1,
    isFile: C1,
    isBlob: x1,
    isRegExp: V1,
    isFunction: Et,
    isStream: T1,
    isURLSearchParams: P1,
    isTypedArray: B1,
    isFileList: E1,
    forEach: No,
    merge: Ia,
    extend: z1,
    trim: L1,
    stripBOM: F1,
    inherits: D1,
    toFlatObject: j1,
    kindOf: vl,
    kindOfTest: Mt,
    endsWith: I1,
    toArray: $1,
    forEachEntry: M1,
    matchAll: U1,
    isHTMLForm: b1,
    hasOwnProperty: Ld,
    hasOwnProp: Ld,
    reduceDescriptors: Ep,
    freezeMethods: W1,
    toObjectSet: K1,
    toCamelCase: H1,
    noop: Q1,
    toFiniteNumber: q1,
    findKey: Cp,
    global: bn,
    isContextDefined: xp,
    ALPHABET: Tp,
    generateString: G1,
    isSpecCompliantForm: X1,
    toJSONObject: Y1,
    isAsyncFn: J1,
    isThenable: Z1,
    setImmediate: _p,
    asap: ev,
  };
function ie(r, o, l, a, u) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = r),
    (this.name = "AxiosError"),
    o && (this.code = o),
    l && (this.config = l),
    a && (this.request = a),
    u && ((this.response = u), (this.status = u.status ? u.status : null));
}
A.inherits(ie, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Pp = ie.prototype,
  Rp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((r) => {
  Rp[r] = { value: r };
});
Object.defineProperties(ie, Rp);
Object.defineProperty(Pp, "isAxiosError", { value: !0 });
ie.from = (r, o, l, a, u, f) => {
  const p = Object.create(Pp);
  return (
    A.toFlatObject(
      r,
      p,
      function (w) {
        return w !== Error.prototype;
      },
      (h) => h !== "isAxiosError"
    ),
    ie.call(p, r.message, o, l, a, u),
    (p.cause = r),
    (p.name = r.name),
    f && Object.assign(p, f),
    p
  );
};
const tv = null;
function $a(r) {
  return A.isPlainObject(r) || A.isArray(r);
}
function Op(r) {
  return A.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function Fd(r, o, l) {
  return r
    ? r
        .concat(o)
        .map(function (u, f) {
          return (u = Op(u)), !l && f ? "[" + u + "]" : u;
        })
        .join(l ? "." : "")
    : o;
}
function nv(r) {
  return A.isArray(r) && !r.some($a);
}
const rv = A.toFlatObject(A, {}, null, function (o) {
  return /^is[A-Z]/.test(o);
});
function kl(r, o, l) {
  if (!A.isObject(r)) throw new TypeError("target must be an object");
  (o = o || new FormData()),
    (l = A.toFlatObject(
      l,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (_, N) {
        return !A.isUndefined(N[_]);
      }
    ));
  const a = l.metaTokens,
    u = l.visitor || C,
    f = l.dots,
    p = l.indexes,
    w = (l.Blob || (typeof Blob < "u" && Blob)) && A.isSpecCompliantForm(o);
  if (!A.isFunction(u)) throw new TypeError("visitor must be a function");
  function v(R) {
    if (R === null) return "";
    if (A.isDate(R)) return R.toISOString();
    if (!w && A.isBlob(R))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(R) || A.isTypedArray(R)
      ? w && typeof Blob == "function"
        ? new Blob([R])
        : Buffer.from(R)
      : R;
  }
  function C(R, _, N) {
    let M = R;
    if (R && !N && typeof R == "object") {
      if (A.endsWith(_, "{}"))
        (_ = a ? _ : _.slice(0, -2)), (R = JSON.stringify(R));
      else if (
        (A.isArray(R) && nv(R)) ||
        ((A.isFileList(R) || A.endsWith(_, "[]")) && (M = A.toArray(R)))
      )
        return (
          (_ = Op(_)),
          M.forEach(function (B, U) {
            !(A.isUndefined(B) || B === null) &&
              o.append(
                p === !0 ? Fd([_], U, f) : p === null ? _ : _ + "[]",
                v(B)
              );
          }),
          !1
        );
    }
    return $a(R) ? !0 : (o.append(Fd(N, _, f), v(R)), !1);
  }
  const k = [],
    O = Object.assign(rv, {
      defaultVisitor: C,
      convertValue: v,
      isVisitable: $a,
    });
  function I(R, _) {
    if (!A.isUndefined(R)) {
      if (k.indexOf(R) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      k.push(R),
        A.forEach(R, function (M, K) {
          (!(A.isUndefined(M) || M === null) &&
            u.call(o, M, A.isString(K) ? K.trim() : K, _, O)) === !0 &&
            I(M, _ ? _.concat(K) : [K]);
        }),
        k.pop();
    }
  }
  if (!A.isObject(r)) throw new TypeError("data must be an object");
  return I(r), o;
}
function Dd(r) {
  const o = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function (a) {
    return o[a];
  });
}
function nu(r, o) {
  (this._pairs = []), r && kl(r, this, o);
}
const Ap = nu.prototype;
Ap.append = function (o, l) {
  this._pairs.push([o, l]);
};
Ap.toString = function (o) {
  const l = o
    ? function (a) {
        return o.call(this, a, Dd);
      }
    : Dd;
  return this._pairs
    .map(function (u) {
      return l(u[0]) + "=" + l(u[1]);
    }, "")
    .join("&");
};
function ov(r) {
  return encodeURIComponent(r)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Np(r, o, l) {
  if (!o) return r;
  const a = (l && l.encode) || ov;
  A.isFunction(l) && (l = { serialize: l });
  const u = l && l.serialize;
  let f;
  if (
    (u
      ? (f = u(o, l))
      : (f = A.isURLSearchParams(o) ? o.toString() : new nu(o, l).toString(a)),
    f)
  ) {
    const p = r.indexOf("#");
    p !== -1 && (r = r.slice(0, p)),
      (r += (r.indexOf("?") === -1 ? "?" : "&") + f);
  }
  return r;
}
class jd {
  constructor() {
    this.handlers = [];
  }
  use(o, l, a) {
    return (
      this.handlers.push({
        fulfilled: o,
        rejected: l,
        synchronous: a ? a.synchronous : !1,
        runWhen: a ? a.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(o) {
    this.handlers[o] && (this.handlers[o] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(o) {
    A.forEach(this.handlers, function (a) {
      a !== null && o(a);
    });
  }
}
const Lp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  iv = typeof URLSearchParams < "u" ? URLSearchParams : nu,
  lv = typeof FormData < "u" ? FormData : null,
  sv = typeof Blob < "u" ? Blob : null,
  av = {
    isBrowser: !0,
    classes: { URLSearchParams: iv, FormData: lv, Blob: sv },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ru = typeof window < "u" && typeof document < "u",
  Ba = (typeof navigator == "object" && navigator) || void 0,
  uv =
    ru &&
    (!Ba || ["ReactNative", "NativeScript", "NS"].indexOf(Ba.product) < 0),
  cv =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  fv = (ru && window.location.href) || "http://localhost",
  dv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ru,
        hasStandardBrowserEnv: uv,
        hasStandardBrowserWebWorkerEnv: cv,
        navigator: Ba,
        origin: fv,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  it = { ...dv, ...av };
function pv(r, o) {
  return kl(
    r,
    new it.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (l, a, u, f) {
          return it.isNode && A.isBuffer(l)
            ? (this.append(a, l.toString("base64")), !1)
            : f.defaultVisitor.apply(this, arguments);
        },
      },
      o
    )
  );
}
function hv(r) {
  return A.matchAll(/\w+|\[(\w*)]/g, r).map((o) =>
    o[0] === "[]" ? "" : o[1] || o[0]
  );
}
function mv(r) {
  const o = {},
    l = Object.keys(r);
  let a;
  const u = l.length;
  let f;
  for (a = 0; a < u; a++) (f = l[a]), (o[f] = r[f]);
  return o;
}
function zp(r) {
  function o(l, a, u, f) {
    let p = l[f++];
    if (p === "__proto__") return !0;
    const h = Number.isFinite(+p),
      w = f >= l.length;
    return (
      (p = !p && A.isArray(u) ? u.length : p),
      w
        ? (A.hasOwnProp(u, p) ? (u[p] = [u[p], a]) : (u[p] = a), !h)
        : ((!u[p] || !A.isObject(u[p])) && (u[p] = []),
          o(l, a, u[p], f) && A.isArray(u[p]) && (u[p] = mv(u[p])),
          !h)
    );
  }
  if (A.isFormData(r) && A.isFunction(r.entries)) {
    const l = {};
    return (
      A.forEachEntry(r, (a, u) => {
        o(hv(a), u, l, 0);
      }),
      l
    );
  }
  return null;
}
function gv(r, o, l) {
  if (A.isString(r))
    try {
      return (o || JSON.parse)(r), A.trim(r);
    } catch (a) {
      if (a.name !== "SyntaxError") throw a;
    }
  return (0, JSON.stringify)(r);
}
const Lo = {
  transitional: Lp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (o, l) {
      const a = l.getContentType() || "",
        u = a.indexOf("application/json") > -1,
        f = A.isObject(o);
      if ((f && A.isHTMLForm(o) && (o = new FormData(o)), A.isFormData(o)))
        return u ? JSON.stringify(zp(o)) : o;
      if (
        A.isArrayBuffer(o) ||
        A.isBuffer(o) ||
        A.isStream(o) ||
        A.isFile(o) ||
        A.isBlob(o) ||
        A.isReadableStream(o)
      )
        return o;
      if (A.isArrayBufferView(o)) return o.buffer;
      if (A.isURLSearchParams(o))
        return (
          l.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          o.toString()
        );
      let h;
      if (f) {
        if (a.indexOf("application/x-www-form-urlencoded") > -1)
          return pv(o, this.formSerializer).toString();
        if ((h = A.isFileList(o)) || a.indexOf("multipart/form-data") > -1) {
          const w = this.env && this.env.FormData;
          return kl(
            h ? { "files[]": o } : o,
            w && new w(),
            this.formSerializer
          );
        }
      }
      return f || u ? (l.setContentType("application/json", !1), gv(o)) : o;
    },
  ],
  transformResponse: [
    function (o) {
      const l = this.transitional || Lo.transitional,
        a = l && l.forcedJSONParsing,
        u = this.responseType === "json";
      if (A.isResponse(o) || A.isReadableStream(o)) return o;
      if (o && A.isString(o) && ((a && !this.responseType) || u)) {
        const p = !(l && l.silentJSONParsing) && u;
        try {
          return JSON.parse(o);
        } catch (h) {
          if (p)
            throw h.name === "SyntaxError"
              ? ie.from(h, ie.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return o;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: it.classes.FormData, Blob: it.classes.Blob },
  validateStatus: function (o) {
    return o >= 200 && o < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
  Lo.headers[r] = {};
});
const yv = A.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  vv = (r) => {
    const o = {};
    let l, a, u;
    return (
      r &&
        r
          .split(
            `
`
          )
          .forEach(function (p) {
            (u = p.indexOf(":")),
              (l = p.substring(0, u).trim().toLowerCase()),
              (a = p.substring(u + 1).trim()),
              !(!l || (o[l] && yv[l])) &&
                (l === "set-cookie"
                  ? o[l]
                    ? o[l].push(a)
                    : (o[l] = [a])
                  : (o[l] = o[l] ? o[l] + ", " + a : a));
          }),
      o
    );
  },
  Id = Symbol("internals");
function wo(r) {
  return r && String(r).trim().toLowerCase();
}
function Ji(r) {
  return r === !1 || r == null ? r : A.isArray(r) ? r.map(Ji) : String(r);
}
function wv(r) {
  const o = Object.create(null),
    l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; (a = l.exec(r)); ) o[a[1]] = a[2];
  return o;
}
const Sv = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function Pa(r, o, l, a, u) {
  if (A.isFunction(a)) return a.call(this, o, l);
  if ((u && (o = l), !!A.isString(o))) {
    if (A.isString(a)) return o.indexOf(a) !== -1;
    if (A.isRegExp(a)) return a.test(o);
  }
}
function kv(r) {
  return r
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (o, l, a) => l.toUpperCase() + a);
}
function Cv(r, o) {
  const l = A.toCamelCase(" " + o);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(r, a + l, {
      value: function (u, f, p) {
        return this[a].call(this, o, u, f, p);
      },
      configurable: !0,
    });
  });
}
class ht {
  constructor(o) {
    o && this.set(o);
  }
  set(o, l, a) {
    const u = this;
    function f(h, w, v) {
      const C = wo(w);
      if (!C) throw new Error("header name must be a non-empty string");
      const k = A.findKey(u, C);
      (!k || u[k] === void 0 || v === !0 || (v === void 0 && u[k] !== !1)) &&
        (u[k || w] = Ji(h));
    }
    const p = (h, w) => A.forEach(h, (v, C) => f(v, C, w));
    if (A.isPlainObject(o) || o instanceof this.constructor) p(o, l);
    else if (A.isString(o) && (o = o.trim()) && !Sv(o)) p(vv(o), l);
    else if (A.isHeaders(o)) for (const [h, w] of o.entries()) f(w, h, a);
    else o != null && f(l, o, a);
    return this;
  }
  get(o, l) {
    if (((o = wo(o)), o)) {
      const a = A.findKey(this, o);
      if (a) {
        const u = this[a];
        if (!l) return u;
        if (l === !0) return wv(u);
        if (A.isFunction(l)) return l.call(this, u, a);
        if (A.isRegExp(l)) return l.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(o, l) {
    if (((o = wo(o)), o)) {
      const a = A.findKey(this, o);
      return !!(a && this[a] !== void 0 && (!l || Pa(this, this[a], a, l)));
    }
    return !1;
  }
  delete(o, l) {
    const a = this;
    let u = !1;
    function f(p) {
      if (((p = wo(p)), p)) {
        const h = A.findKey(a, p);
        h && (!l || Pa(a, a[h], h, l)) && (delete a[h], (u = !0));
      }
    }
    return A.isArray(o) ? o.forEach(f) : f(o), u;
  }
  clear(o) {
    const l = Object.keys(this);
    let a = l.length,
      u = !1;
    for (; a--; ) {
      const f = l[a];
      (!o || Pa(this, this[f], f, o, !0)) && (delete this[f], (u = !0));
    }
    return u;
  }
  normalize(o) {
    const l = this,
      a = {};
    return (
      A.forEach(this, (u, f) => {
        const p = A.findKey(a, f);
        if (p) {
          (l[p] = Ji(u)), delete l[f];
          return;
        }
        const h = o ? kv(f) : String(f).trim();
        h !== f && delete l[f], (l[h] = Ji(u)), (a[h] = !0);
      }),
      this
    );
  }
  concat(...o) {
    return this.constructor.concat(this, ...o);
  }
  toJSON(o) {
    const l = Object.create(null);
    return (
      A.forEach(this, (a, u) => {
        a != null && a !== !1 && (l[u] = o && A.isArray(a) ? a.join(", ") : a);
      }),
      l
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([o, l]) => o + ": " + l).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(o) {
    return o instanceof this ? o : new this(o);
  }
  static concat(o, ...l) {
    const a = new this(o);
    return l.forEach((u) => a.set(u)), a;
  }
  static accessor(o) {
    const a = (this[Id] = this[Id] = { accessors: {} }).accessors,
      u = this.prototype;
    function f(p) {
      const h = wo(p);
      a[h] || (Cv(u, p), (a[h] = !0));
    }
    return A.isArray(o) ? o.forEach(f) : f(o), this;
  }
}
ht.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
A.reduceDescriptors(ht.prototype, ({ value: r }, o) => {
  let l = o[0].toUpperCase() + o.slice(1);
  return {
    get: () => r,
    set(a) {
      this[l] = a;
    },
  };
});
A.freezeMethods(ht);
function Ra(r, o) {
  const l = this || Lo,
    a = o || l,
    u = ht.from(a.headers);
  let f = a.data;
  return (
    A.forEach(r, function (h) {
      f = h.call(l, f, u.normalize(), o ? o.status : void 0);
    }),
    u.normalize(),
    f
  );
}
function Fp(r) {
  return !!(r && r.__CANCEL__);
}
function Or(r, o, l) {
  ie.call(this, r ?? "canceled", ie.ERR_CANCELED, o, l),
    (this.name = "CanceledError");
}
A.inherits(Or, ie, { __CANCEL__: !0 });
function Dp(r, o, l) {
  const a = l.config.validateStatus;
  !l.status || !a || a(l.status)
    ? r(l)
    : o(
        new ie(
          "Request failed with status code " + l.status,
          [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][
            Math.floor(l.status / 100) - 4
          ],
          l.config,
          l.request,
          l
        )
      );
}
function xv(r) {
  const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return (o && o[1]) || "";
}
function Ev(r, o) {
  r = r || 10;
  const l = new Array(r),
    a = new Array(r);
  let u = 0,
    f = 0,
    p;
  return (
    (o = o !== void 0 ? o : 1e3),
    function (w) {
      const v = Date.now(),
        C = a[f];
      p || (p = v), (l[u] = w), (a[u] = v);
      let k = f,
        O = 0;
      for (; k !== u; ) (O += l[k++]), (k = k % r);
      if (((u = (u + 1) % r), u === f && (f = (f + 1) % r), v - p < o)) return;
      const I = C && v - C;
      return I ? Math.round((O * 1e3) / I) : void 0;
    }
  );
}
function Tv(r, o) {
  let l = 0,
    a = 1e3 / o,
    u,
    f;
  const p = (v, C = Date.now()) => {
    (l = C), (u = null), f && (clearTimeout(f), (f = null)), r.apply(null, v);
  };
  return [
    (...v) => {
      const C = Date.now(),
        k = C - l;
      k >= a
        ? p(v, C)
        : ((u = v),
          f ||
            (f = setTimeout(() => {
              (f = null), p(u);
            }, a - k)));
    },
    () => u && p(u),
  ];
}
const rl = (r, o, l = 3) => {
    let a = 0;
    const u = Ev(50, 250);
    return Tv((f) => {
      const p = f.loaded,
        h = f.lengthComputable ? f.total : void 0,
        w = p - a,
        v = u(w),
        C = p <= h;
      a = p;
      const k = {
        loaded: p,
        total: h,
        progress: h ? p / h : void 0,
        bytes: w,
        rate: v || void 0,
        estimated: v && h && C ? (h - p) / v : void 0,
        event: f,
        lengthComputable: h != null,
        [o ? "download" : "upload"]: !0,
      };
      r(k);
    }, l);
  },
  $d = (r, o) => {
    const l = r != null;
    return [(a) => o[0]({ lengthComputable: l, total: r, loaded: a }), o[1]];
  },
  Bd =
    (r) =>
    (...o) =>
      A.asap(() => r(...o)),
  _v = it.hasStandardBrowserEnv
    ? ((r, o) => (l) => (
        (l = new URL(l, it.origin)),
        r.protocol === l.protocol &&
          r.host === l.host &&
          (o || r.port === l.port)
      ))(
        new URL(it.origin),
        it.navigator && /(msie|trident)/i.test(it.navigator.userAgent)
      )
    : () => !0,
  Pv = it.hasStandardBrowserEnv
    ? {
        write(r, o, l, a, u, f) {
          const p = [r + "=" + encodeURIComponent(o)];
          A.isNumber(l) && p.push("expires=" + new Date(l).toGMTString()),
            A.isString(a) && p.push("path=" + a),
            A.isString(u) && p.push("domain=" + u),
            f === !0 && p.push("secure"),
            (document.cookie = p.join("; "));
        },
        read(r) {
          const o = document.cookie.match(
            new RegExp("(^|;\\s*)(" + r + ")=([^;]*)")
          );
          return o ? decodeURIComponent(o[3]) : null;
        },
        remove(r) {
          this.write(r, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Rv(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function Ov(r, o) {
  return o ? r.replace(/\/?\/$/, "") + "/" + o.replace(/^\/+/, "") : r;
}
function jp(r, o) {
  return r && !Rv(o) ? Ov(r, o) : o;
}
const Md = (r) => (r instanceof ht ? { ...r } : r);
function Wn(r, o) {
  o = o || {};
  const l = {};
  function a(v, C, k, O) {
    return A.isPlainObject(v) && A.isPlainObject(C)
      ? A.merge.call({ caseless: O }, v, C)
      : A.isPlainObject(C)
      ? A.merge({}, C)
      : A.isArray(C)
      ? C.slice()
      : C;
  }
  function u(v, C, k, O) {
    if (A.isUndefined(C)) {
      if (!A.isUndefined(v)) return a(void 0, v, k, O);
    } else return a(v, C, k, O);
  }
  function f(v, C) {
    if (!A.isUndefined(C)) return a(void 0, C);
  }
  function p(v, C) {
    if (A.isUndefined(C)) {
      if (!A.isUndefined(v)) return a(void 0, v);
    } else return a(void 0, C);
  }
  function h(v, C, k) {
    if (k in o) return a(v, C);
    if (k in r) return a(void 0, v);
  }
  const w = {
    url: f,
    method: f,
    data: f,
    baseURL: p,
    transformRequest: p,
    transformResponse: p,
    paramsSerializer: p,
    timeout: p,
    timeoutMessage: p,
    withCredentials: p,
    withXSRFToken: p,
    adapter: p,
    responseType: p,
    xsrfCookieName: p,
    xsrfHeaderName: p,
    onUploadProgress: p,
    onDownloadProgress: p,
    decompress: p,
    maxContentLength: p,
    maxBodyLength: p,
    beforeRedirect: p,
    transport: p,
    httpAgent: p,
    httpsAgent: p,
    cancelToken: p,
    socketPath: p,
    responseEncoding: p,
    validateStatus: h,
    headers: (v, C, k) => u(Md(v), Md(C), k, !0),
  };
  return (
    A.forEach(Object.keys(Object.assign({}, r, o)), function (C) {
      const k = w[C] || u,
        O = k(r[C], o[C], C);
      (A.isUndefined(O) && k !== h) || (l[C] = O);
    }),
    l
  );
}
const Ip = (r) => {
    const o = Wn({}, r);
    let {
      data: l,
      withXSRFToken: a,
      xsrfHeaderName: u,
      xsrfCookieName: f,
      headers: p,
      auth: h,
    } = o;
    (o.headers = p = ht.from(p)),
      (o.url = Np(jp(o.baseURL, o.url), r.params, r.paramsSerializer)),
      h &&
        p.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : "")
            )
        );
    let w;
    if (A.isFormData(l)) {
      if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
        p.setContentType(void 0);
      else if ((w = p.getContentType()) !== !1) {
        const [v, ...C] = w
          ? w
              .split(";")
              .map((k) => k.trim())
              .filter(Boolean)
          : [];
        p.setContentType([v || "multipart/form-data", ...C].join("; "));
      }
    }
    if (
      it.hasStandardBrowserEnv &&
      (a && A.isFunction(a) && (a = a(o)), a || (a !== !1 && _v(o.url)))
    ) {
      const v = u && f && Pv.read(f);
      v && p.set(u, v);
    }
    return o;
  },
  Av = typeof XMLHttpRequest < "u",
  Nv =
    Av &&
    function (r) {
      return new Promise(function (l, a) {
        const u = Ip(r);
        let f = u.data;
        const p = ht.from(u.headers).normalize();
        let { responseType: h, onUploadProgress: w, onDownloadProgress: v } = u,
          C,
          k,
          O,
          I,
          R;
        function _() {
          I && I(),
            R && R(),
            u.cancelToken && u.cancelToken.unsubscribe(C),
            u.signal && u.signal.removeEventListener("abort", C);
        }
        let N = new XMLHttpRequest();
        N.open(u.method.toUpperCase(), u.url, !0), (N.timeout = u.timeout);
        function M() {
          if (!N) return;
          const B = ht.from(
              "getAllResponseHeaders" in N && N.getAllResponseHeaders()
            ),
            H = {
              data:
                !h || h === "text" || h === "json"
                  ? N.responseText
                  : N.response,
              status: N.status,
              statusText: N.statusText,
              headers: B,
              config: r,
              request: N,
            };
          Dp(
            function (W) {
              l(W), _();
            },
            function (W) {
              a(W), _();
            },
            H
          ),
            (N = null);
        }
        "onloadend" in N
          ? (N.onloadend = M)
          : (N.onreadystatechange = function () {
              !N ||
                N.readyState !== 4 ||
                (N.status === 0 &&
                  !(N.responseURL && N.responseURL.indexOf("file:") === 0)) ||
                setTimeout(M);
            }),
          (N.onabort = function () {
            N &&
              (a(new ie("Request aborted", ie.ECONNABORTED, r, N)), (N = null));
          }),
          (N.onerror = function () {
            a(new ie("Network Error", ie.ERR_NETWORK, r, N)), (N = null);
          }),
          (N.ontimeout = function () {
            let U = u.timeout
              ? "timeout of " + u.timeout + "ms exceeded"
              : "timeout exceeded";
            const H = u.transitional || Lp;
            u.timeoutErrorMessage && (U = u.timeoutErrorMessage),
              a(
                new ie(
                  U,
                  H.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
                  r,
                  N
                )
              ),
              (N = null);
          }),
          f === void 0 && p.setContentType(null),
          "setRequestHeader" in N &&
            A.forEach(p.toJSON(), function (U, H) {
              N.setRequestHeader(H, U);
            }),
          A.isUndefined(u.withCredentials) ||
            (N.withCredentials = !!u.withCredentials),
          h && h !== "json" && (N.responseType = u.responseType),
          v && (([O, R] = rl(v, !0)), N.addEventListener("progress", O)),
          w &&
            N.upload &&
            (([k, I] = rl(w)),
            N.upload.addEventListener("progress", k),
            N.upload.addEventListener("loadend", I)),
          (u.cancelToken || u.signal) &&
            ((C = (B) => {
              N &&
                (a(!B || B.type ? new Or(null, r, N) : B),
                N.abort(),
                (N = null));
            }),
            u.cancelToken && u.cancelToken.subscribe(C),
            u.signal &&
              (u.signal.aborted ? C() : u.signal.addEventListener("abort", C)));
        const K = xv(u.url);
        if (K && it.protocols.indexOf(K) === -1) {
          a(new ie("Unsupported protocol " + K + ":", ie.ERR_BAD_REQUEST, r));
          return;
        }
        N.send(f || null);
      });
    },
  Lv = (r, o) => {
    const { length: l } = (r = r ? r.filter(Boolean) : []);
    if (o || l) {
      let a = new AbortController(),
        u;
      const f = function (v) {
        if (!u) {
          (u = !0), h();
          const C = v instanceof Error ? v : this.reason;
          a.abort(
            C instanceof ie ? C : new Or(C instanceof Error ? C.message : C)
          );
        }
      };
      let p =
        o &&
        setTimeout(() => {
          (p = null), f(new ie(`timeout ${o} of ms exceeded`, ie.ETIMEDOUT));
        }, o);
      const h = () => {
        r &&
          (p && clearTimeout(p),
          (p = null),
          r.forEach((v) => {
            v.unsubscribe
              ? v.unsubscribe(f)
              : v.removeEventListener("abort", f);
          }),
          (r = null));
      };
      r.forEach((v) => v.addEventListener("abort", f));
      const { signal: w } = a;
      return (w.unsubscribe = () => A.asap(h)), w;
    }
  },
  zv = function* (r, o) {
    let l = r.byteLength;
    if (l < o) {
      yield r;
      return;
    }
    let a = 0,
      u;
    for (; a < l; ) (u = a + o), yield r.slice(a, u), (a = u);
  },
  Fv = async function* (r, o) {
    for await (const l of Dv(r)) yield* zv(l, o);
  },
  Dv = async function* (r) {
    if (r[Symbol.asyncIterator]) {
      yield* r;
      return;
    }
    const o = r.getReader();
    try {
      for (;;) {
        const { done: l, value: a } = await o.read();
        if (l) break;
        yield a;
      }
    } finally {
      await o.cancel();
    }
  },
  Ud = (r, o, l, a) => {
    const u = Fv(r, o);
    let f = 0,
      p,
      h = (w) => {
        p || ((p = !0), a && a(w));
      };
    return new ReadableStream(
      {
        async pull(w) {
          try {
            const { done: v, value: C } = await u.next();
            if (v) {
              h(), w.close();
              return;
            }
            let k = C.byteLength;
            if (l) {
              let O = (f += k);
              l(O);
            }
            w.enqueue(new Uint8Array(C));
          } catch (v) {
            throw (h(v), v);
          }
        },
        cancel(w) {
          return h(w), u.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Cl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  $p = Cl && typeof ReadableStream == "function",
  jv =
    Cl &&
    (typeof TextEncoder == "function"
      ? (
          (r) => (o) =>
            r.encode(o)
        )(new TextEncoder())
      : async (r) => new Uint8Array(await new Response(r).arrayBuffer())),
  Bp = (r, ...o) => {
    try {
      return !!r(...o);
    } catch {
      return !1;
    }
  },
  Iv =
    $p &&
    Bp(() => {
      let r = !1;
      const o = new Request(it.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (r = !0), "half";
        },
      }).headers.has("Content-Type");
      return r && !o;
    }),
  bd = 64 * 1024,
  Ma = $p && Bp(() => A.isReadableStream(new Response("").body)),
  ol = { stream: Ma && ((r) => r.body) };
Cl &&
  ((r) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((o) => {
      !ol[o] &&
        (ol[o] = A.isFunction(r[o])
          ? (l) => l[o]()
          : (l, a) => {
              throw new ie(
                `Response type '${o}' is not supported`,
                ie.ERR_NOT_SUPPORT,
                a
              );
            });
    });
  })(new Response());
const $v = async (r) => {
    if (r == null) return 0;
    if (A.isBlob(r)) return r.size;
    if (A.isSpecCompliantForm(r))
      return (
        await new Request(it.origin, { method: "POST", body: r }).arrayBuffer()
      ).byteLength;
    if (A.isArrayBufferView(r) || A.isArrayBuffer(r)) return r.byteLength;
    if ((A.isURLSearchParams(r) && (r = r + ""), A.isString(r)))
      return (await jv(r)).byteLength;
  },
  Bv = async (r, o) => {
    const l = A.toFiniteNumber(r.getContentLength());
    return l ?? $v(o);
  },
  Mv =
    Cl &&
    (async (r) => {
      let {
        url: o,
        method: l,
        data: a,
        signal: u,
        cancelToken: f,
        timeout: p,
        onDownloadProgress: h,
        onUploadProgress: w,
        responseType: v,
        headers: C,
        withCredentials: k = "same-origin",
        fetchOptions: O,
      } = Ip(r);
      v = v ? (v + "").toLowerCase() : "text";
      let I = Lv([u, f && f.toAbortSignal()], p),
        R;
      const _ =
        I &&
        I.unsubscribe &&
        (() => {
          I.unsubscribe();
        });
      let N;
      try {
        if (
          w &&
          Iv &&
          l !== "get" &&
          l !== "head" &&
          (N = await Bv(C, a)) !== 0
        ) {
          let H = new Request(o, { method: "POST", body: a, duplex: "half" }),
            G;
          if (
            (A.isFormData(a) &&
              (G = H.headers.get("content-type")) &&
              C.setContentType(G),
            H.body)
          ) {
            const [W, fe] = $d(N, rl(Bd(w)));
            a = Ud(H.body, bd, W, fe);
          }
        }
        A.isString(k) || (k = k ? "include" : "omit");
        const M = "credentials" in Request.prototype;
        R = new Request(o, {
          ...O,
          signal: I,
          method: l.toUpperCase(),
          headers: C.normalize().toJSON(),
          body: a,
          duplex: "half",
          credentials: M ? k : void 0,
        });
        let K = await fetch(R);
        const B = Ma && (v === "stream" || v === "response");
        if (Ma && (h || (B && _))) {
          const H = {};
          ["status", "statusText", "headers"].forEach((ve) => {
            H[ve] = K[ve];
          });
          const G = A.toFiniteNumber(K.headers.get("content-length")),
            [W, fe] = (h && $d(G, rl(Bd(h), !0))) || [];
          K = new Response(
            Ud(K.body, bd, W, () => {
              fe && fe(), _ && _();
            }),
            H
          );
        }
        v = v || "text";
        let U = await ol[A.findKey(ol, v) || "text"](K, r);
        return (
          !B && _ && _(),
          await new Promise((H, G) => {
            Dp(H, G, {
              data: U,
              headers: ht.from(K.headers),
              status: K.status,
              statusText: K.statusText,
              config: r,
              request: R,
            });
          })
        );
      } catch (M) {
        throw (
          (_ && _(),
          M && M.name === "TypeError" && /fetch/i.test(M.message)
            ? Object.assign(new ie("Network Error", ie.ERR_NETWORK, r, R), {
                cause: M.cause || M,
              })
            : ie.from(M, M && M.code, r, R))
        );
      }
    }),
  Ua = { http: tv, xhr: Nv, fetch: Mv };
A.forEach(Ua, (r, o) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: o });
    } catch {}
    Object.defineProperty(r, "adapterName", { value: o });
  }
});
const Hd = (r) => `- ${r}`,
  Uv = (r) => A.isFunction(r) || r === null || r === !1,
  Mp = {
    getAdapter: (r) => {
      r = A.isArray(r) ? r : [r];
      const { length: o } = r;
      let l, a;
      const u = {};
      for (let f = 0; f < o; f++) {
        l = r[f];
        let p;
        if (
          ((a = l),
          !Uv(l) && ((a = Ua[(p = String(l)).toLowerCase()]), a === void 0))
        )
          throw new ie(`Unknown adapter '${p}'`);
        if (a) break;
        u[p || "#" + f] = a;
      }
      if (!a) {
        const f = Object.entries(u).map(
          ([h, w]) =>
            `adapter ${h} ` +
            (w === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let p = o
          ? f.length > 1
            ? `since :
` +
              f.map(Hd).join(`
`)
            : " " + Hd(f[0])
          : "as no adapter specified";
        throw new ie(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        );
      }
      return a;
    },
    adapters: Ua,
  };
function Oa(r) {
  if (
    (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
  )
    throw new Or(null, r);
}
function Vd(r) {
  return (
    Oa(r),
    (r.headers = ht.from(r.headers)),
    (r.data = Ra.call(r, r.transformRequest)),
    ["post", "put", "patch"].indexOf(r.method) !== -1 &&
      r.headers.setContentType("application/x-www-form-urlencoded", !1),
    Mp.getAdapter(r.adapter || Lo.adapter)(r).then(
      function (a) {
        return (
          Oa(r),
          (a.data = Ra.call(r, r.transformResponse, a)),
          (a.headers = ht.from(a.headers)),
          a
        );
      },
      function (a) {
        return (
          Fp(a) ||
            (Oa(r),
            a &&
              a.response &&
              ((a.response.data = Ra.call(r, r.transformResponse, a.response)),
              (a.response.headers = ht.from(a.response.headers)))),
          Promise.reject(a)
        );
      }
    )
  );
}
const Up = "1.7.9",
  xl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (r, o) => {
    xl[r] = function (a) {
      return typeof a === r || "a" + (o < 1 ? "n " : " ") + r;
    };
  }
);
const Wd = {};
xl.transitional = function (o, l, a) {
  function u(f, p) {
    return (
      "[Axios v" +
      Up +
      "] Transitional option '" +
      f +
      "'" +
      p +
      (a ? ". " + a : "")
    );
  }
  return (f, p, h) => {
    if (o === !1)
      throw new ie(
        u(p, " has been removed" + (l ? " in " + l : "")),
        ie.ERR_DEPRECATED
      );
    return (
      l &&
        !Wd[p] &&
        ((Wd[p] = !0),
        console.warn(
          u(
            p,
            " has been deprecated since v" +
              l +
              " and will be removed in the near future"
          )
        )),
      o ? o(f, p, h) : !0
    );
  };
};
xl.spelling = function (o) {
  return (l, a) => (console.warn(`${a} is likely a misspelling of ${o}`), !0);
};
function bv(r, o, l) {
  if (typeof r != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(r);
  let u = a.length;
  for (; u-- > 0; ) {
    const f = a[u],
      p = o[f];
    if (p) {
      const h = r[f],
        w = h === void 0 || p(h, f, r);
      if (w !== !0)
        throw new ie("option " + f + " must be " + w, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0) throw new ie("Unknown option " + f, ie.ERR_BAD_OPTION);
  }
}
const Zi = { assertOptions: bv, validators: xl },
  Qt = Zi.validators;
class Hn {
  constructor(o) {
    (this.defaults = o),
      (this.interceptors = { request: new jd(), response: new jd() });
  }
  async request(o, l) {
    try {
      return await this._request(o, l);
    } catch (a) {
      if (a instanceof Error) {
        let u = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(u)
          : (u = new Error());
        const f = u.stack ? u.stack.replace(/^.+\n/, "") : "";
        try {
          a.stack
            ? f &&
              !String(a.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (a.stack +=
                `
` + f)
            : (a.stack = f);
        } catch {}
      }
      throw a;
    }
  }
  _request(o, l) {
    typeof o == "string" ? ((l = l || {}), (l.url = o)) : (l = o || {}),
      (l = Wn(this.defaults, l));
    const { transitional: a, paramsSerializer: u, headers: f } = l;
    a !== void 0 &&
      Zi.assertOptions(
        a,
        {
          silentJSONParsing: Qt.transitional(Qt.boolean),
          forcedJSONParsing: Qt.transitional(Qt.boolean),
          clarifyTimeoutError: Qt.transitional(Qt.boolean),
        },
        !1
      ),
      u != null &&
        (A.isFunction(u)
          ? (l.paramsSerializer = { serialize: u })
          : Zi.assertOptions(
              u,
              { encode: Qt.function, serialize: Qt.function },
              !0
            )),
      Zi.assertOptions(
        l,
        {
          baseUrl: Qt.spelling("baseURL"),
          withXsrfToken: Qt.spelling("withXSRFToken"),
        },
        !0
      ),
      (l.method = (l.method || this.defaults.method || "get").toLowerCase());
    let p = f && A.merge(f.common, f[l.method]);
    f &&
      A.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (R) => {
          delete f[R];
        }
      ),
      (l.headers = ht.concat(p, f));
    const h = [];
    let w = !0;
    this.interceptors.request.forEach(function (_) {
      (typeof _.runWhen == "function" && _.runWhen(l) === !1) ||
        ((w = w && _.synchronous), h.unshift(_.fulfilled, _.rejected));
    });
    const v = [];
    this.interceptors.response.forEach(function (_) {
      v.push(_.fulfilled, _.rejected);
    });
    let C,
      k = 0,
      O;
    if (!w) {
      const R = [Vd.bind(this), void 0];
      for (
        R.unshift.apply(R, h),
          R.push.apply(R, v),
          O = R.length,
          C = Promise.resolve(l);
        k < O;

      )
        C = C.then(R[k++], R[k++]);
      return C;
    }
    O = h.length;
    let I = l;
    for (k = 0; k < O; ) {
      const R = h[k++],
        _ = h[k++];
      try {
        I = R(I);
      } catch (N) {
        _.call(this, N);
        break;
      }
    }
    try {
      C = Vd.call(this, I);
    } catch (R) {
      return Promise.reject(R);
    }
    for (k = 0, O = v.length; k < O; ) C = C.then(v[k++], v[k++]);
    return C;
  }
  getUri(o) {
    o = Wn(this.defaults, o);
    const l = jp(o.baseURL, o.url);
    return Np(l, o.params, o.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function (o) {
  Hn.prototype[o] = function (l, a) {
    return this.request(
      Wn(a || {}, { method: o, url: l, data: (a || {}).data })
    );
  };
});
A.forEach(["post", "put", "patch"], function (o) {
  function l(a) {
    return function (f, p, h) {
      return this.request(
        Wn(h || {}, {
          method: o,
          headers: a ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: p,
        })
      );
    };
  }
  (Hn.prototype[o] = l()), (Hn.prototype[o + "Form"] = l(!0));
});
class ou {
  constructor(o) {
    if (typeof o != "function")
      throw new TypeError("executor must be a function.");
    let l;
    this.promise = new Promise(function (f) {
      l = f;
    });
    const a = this;
    this.promise.then((u) => {
      if (!a._listeners) return;
      let f = a._listeners.length;
      for (; f-- > 0; ) a._listeners[f](u);
      a._listeners = null;
    }),
      (this.promise.then = (u) => {
        let f;
        const p = new Promise((h) => {
          a.subscribe(h), (f = h);
        }).then(u);
        return (
          (p.cancel = function () {
            a.unsubscribe(f);
          }),
          p
        );
      }),
      o(function (f, p, h) {
        a.reason || ((a.reason = new Or(f, p, h)), l(a.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(o) {
    if (this.reason) {
      o(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(o) : (this._listeners = [o]);
  }
  unsubscribe(o) {
    if (!this._listeners) return;
    const l = this._listeners.indexOf(o);
    l !== -1 && this._listeners.splice(l, 1);
  }
  toAbortSignal() {
    const o = new AbortController(),
      l = (a) => {
        o.abort(a);
      };
    return (
      this.subscribe(l),
      (o.signal.unsubscribe = () => this.unsubscribe(l)),
      o.signal
    );
  }
  static source() {
    let o;
    return {
      token: new ou(function (u) {
        o = u;
      }),
      cancel: o,
    };
  }
}
function Hv(r) {
  return function (l) {
    return r.apply(null, l);
  };
}
function Vv(r) {
  return A.isObject(r) && r.isAxiosError === !0;
}
const ba = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ba).forEach(([r, o]) => {
  ba[o] = r;
});
function bp(r) {
  const o = new Hn(r),
    l = wp(Hn.prototype.request, o);
  return (
    A.extend(l, Hn.prototype, o, { allOwnKeys: !0 }),
    A.extend(l, o, null, { allOwnKeys: !0 }),
    (l.create = function (u) {
      return bp(Wn(r, u));
    }),
    l
  );
}
const We = bp(Lo);
We.Axios = Hn;
We.CanceledError = Or;
We.CancelToken = ou;
We.isCancel = Fp;
We.VERSION = Up;
We.toFormData = kl;
We.AxiosError = ie;
We.Cancel = We.CanceledError;
We.all = function (o) {
  return Promise.all(o);
};
We.spread = Hv;
We.isAxiosError = Vv;
We.mergeConfig = Wn;
We.AxiosHeaders = ht;
We.formToJSON = (r) => zp(A.isHTMLForm(r) ? new FormData(r) : r);
We.getAdapter = Mp.getAdapter;
We.HttpStatusCode = ba;
We.default = We;
async function Kd(r) {
  return (await We.get(r)).data;
}
function Wv() {
  const [r, o] = _e.useState([]),
    [l, a] = _e.useState([]),
    [u, f] = _e.useState(1),
    [p, h] = _e.useState(!1),
    [w, v] = _e.useState(""),
    [C, k] = _e.useState(!1),
    O = 12,
    I = async () => {
      h(!0);
      const U = await Kd("https://pokeapi.co/api/v2/pokemon?limit=1500"),
        H = await Promise.all(U.results.map((G) => Kd(G.url)));
      o(H), a(H), h(!1);
    },
    R = async (B) => {
      const U = B.target.value.toLowerCase();
      if ((v(U), h(!0), U)) {
        const H = r.filter((G) => G.name.toLowerCase().includes(U));
        a(H);
      } else a(r);
      h(!1), f(1);
    },
    _ = (B) => {
      f(B);
    },
    N = () => {
      const B = Math.ceil(l.length / O);
      u < B ? _(u + 1) : _(1);
    },
    M = () => {
      u > 1 ? _(u - 1) : alert("Sei già alla prima pagina!");
    };
  _e.useEffect(() => {
    I();
  }, []);
  const K = Math.ceil(l.length / O);
  return se.jsxs("div", {
    className: "pokemon-list",
    children: [
      se.jsxs("h2", { children: ["Pagina ", u, " di ", K || "?"] }),
      se.jsx("div", {
        className: "controls",
        children: C
          ? se.jsxs("div", {
              className: "search-bar",
              children: [
                se.jsx("input", {
                  type: "text",
                  placeholder: "Cerca Pokémon...",
                  value: w,
                  onChange: R,
                }),
                se.jsx("button", {
                  type: "button",
                  className: "close-search",
                  onClick: () => {
                    k(!1), v(""), a(r), _(1);
                  },
                  children: se.jsx(p1, {}),
                }),
              ],
            })
          : se.jsx("button", {
              type: "button",
              className: "search-toggle",
              onClick: () => k(!0),
              children: se.jsx(h1, {}),
            }),
      }),
      se.jsxs("div", {
        className: "arrows-container",
        children: [
          se.jsx("button", {
            type: "button",
            className: "arrowback",
            onClick: M,
            children: se.jsx(d1, { className: "icon" }),
          }),
          se.jsx("button", {
            type: "button",
            className: "arrowforward",
            onClick: N,
            children: se.jsx(Nd, { className: "icon" }),
          }),
        ],
      }),
      p
        ? se.jsxs("div", {
            className: "loading",
            children: [
              se.jsx("div", {
                className: "spinner",
                children: se.jsx(Nd, { className: "spinner-icon" }),
              }),
              se.jsx("p", { children: "Caricamento in corso..." }),
            ],
          })
        : se.jsx("div", {
            className: "card-grid",
            children:
              l && l.length > 0
                ? l
                    .slice((u - 1) * O, u * O)
                    .map((B) => se.jsx(m1, { pokemon: B }, B.name))
                : se.jsx("p", { children: "Nessun Pokémon trovato." }),
          }),
    ],
  });
}
function Kv() {
  return se.jsx(se.Fragment, {
    children: se.jsxs("div", {
      className: "container-fluid",
      children: [
        se.jsx("img", {
          src: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png",
          alt: "Pokémon API Logo",
          className: "logo",
        }),
        se.jsx(Wv, {}),
      ],
    }),
  });
}
Gm.createRoot(document.getElementById("root")).render(se.jsx(Kv, {}));
