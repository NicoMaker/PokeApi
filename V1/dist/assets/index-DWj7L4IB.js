function jh(r, o) {
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
function Bh(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var ga = { exports: {} },
  go = {},
  ya = { exports: {} },
  ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zf;
function Mh() {
  if (Zf) return ae;
  Zf = 1;
  var r = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
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
  var $ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    P = Object.assign,
    _ = {};
  function N(x, F, se) {
    (this.props = x),
      (this.context = F),
      (this.refs = _),
      (this.updater = se || $);
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
  function B() {}
  B.prototype = N.prototype;
  function q(x, F, se) {
    (this.props = x),
      (this.context = F),
      (this.refs = _),
      (this.updater = se || $);
  }
  var M = (q.prototype = new B());
  (M.constructor = q), P(M, N.prototype), (M.isPureReactComponent = !0);
  var b = Array.isArray,
    V = Object.prototype.hasOwnProperty,
    J = { current: null },
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(x, F, se) {
    var ue,
      de = {},
      pe = null,
      xe = null;
    if (F != null)
      for (ue in (F.ref !== void 0 && (xe = F.ref),
      F.key !== void 0 && (pe = "" + F.key),
      F))
        V.call(F, ue) && !W.hasOwnProperty(ue) && (de[ue] = F[ue]);
    var ve = arguments.length - 2;
    if (ve === 1) de.children = se;
    else if (1 < ve) {
      for (var Ae = Array(ve), gt = 0; gt < ve; gt++)
        Ae[gt] = arguments[gt + 2];
      de.children = Ae;
    }
    if (x && x.defaultProps)
      for (ue in ((ve = x.defaultProps), ve))
        de[ue] === void 0 && (de[ue] = ve[ue]);
    return {
      $$typeof: r,
      type: x,
      key: pe,
      ref: xe,
      props: de,
      _owner: J.current,
    };
  }
  function ye(x, F) {
    return {
      $$typeof: r,
      type: x.type,
      key: F,
      ref: x.ref,
      props: x.props,
      _owner: x._owner,
    };
  }
  function h(x) {
    return typeof x == "object" && x !== null && x.$$typeof === r;
  }
  function G(x) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (se) {
        return F[se];
      })
    );
  }
  var re = /\/+/g;
  function le(x, F) {
    return typeof x == "object" && x !== null && x.key != null
      ? G("" + x.key)
      : F.toString(36);
  }
  function Se(x, F, se, ue, de) {
    var pe = typeof x;
    (pe === "undefined" || pe === "boolean") && (x = null);
    var xe = !1;
    if (x === null) xe = !0;
    else
      switch (pe) {
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case r:
            case o:
              xe = !0;
          }
      }
    if (xe)
      return (
        (xe = x),
        (de = de(xe)),
        (x = ue === "" ? "." + le(xe, 0) : ue),
        b(de)
          ? ((se = ""),
            x != null && (se = x.replace(re, "$&/") + "/"),
            Se(de, F, se, "", function (gt) {
              return gt;
            }))
          : de != null &&
            (h(de) &&
              (de = ye(
                de,
                se +
                  (!de.key || (xe && xe.key === de.key)
                    ? ""
                    : ("" + de.key).replace(re, "$&/") + "/") +
                  x
              )),
            F.push(de)),
        1
      );
    if (((xe = 0), (ue = ue === "" ? "." : ue + ":"), b(x)))
      for (var ve = 0; ve < x.length; ve++) {
        pe = x[ve];
        var Ae = ue + le(pe, ve);
        xe += Se(pe, F, se, Ae, de);
      }
    else if (((Ae = O(x)), typeof Ae == "function"))
      for (x = Ae.call(x), ve = 0; !(pe = x.next()).done; )
        (pe = pe.value),
          (Ae = ue + le(pe, ve++)),
          (xe += Se(pe, F, se, Ae, de));
    else if (pe === "object")
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
    return xe;
  }
  function je(x, F, se) {
    if (x == null) return x;
    var ue = [],
      de = 0;
    return (
      Se(x, ue, "", "", function (pe) {
        return F.call(se, pe, de++);
      }),
      ue
    );
  }
  function be(x) {
    if (x._status === -1) {
      var F = x._result;
      (F = F()),
        F.then(
          function (se) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = se));
          },
          function (se) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = se));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = F));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var _e = { current: null },
    U = { transition: null },
    ne = {
      ReactCurrentDispatcher: _e,
      ReactCurrentBatchConfig: U,
      ReactCurrentOwner: J,
    };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ae.Children = {
      map: je,
      forEach: function (x, F, se) {
        je(
          x,
          function () {
            F.apply(this, arguments);
          },
          se
        );
      },
      count: function (x) {
        var F = 0;
        return (
          je(x, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (x) {
        return (
          je(x, function (F) {
            return F;
          }) || []
        );
      },
      only: function (x) {
        if (!h(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    }),
    (ae.Component = N),
    (ae.Fragment = l),
    (ae.Profiler = u),
    (ae.PureComponent = q),
    (ae.StrictMode = a),
    (ae.Suspense = w),
    (ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne),
    (ae.act = Q),
    (ae.cloneElement = function (x, F, se) {
      if (x == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            x +
            "."
        );
      var ue = P({}, x.props),
        de = x.key,
        pe = x.ref,
        xe = x._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((pe = F.ref), (xe = J.current)),
          F.key !== void 0 && (de = "" + F.key),
          x.type && x.type.defaultProps)
        )
          var ve = x.type.defaultProps;
        for (Ae in F)
          V.call(F, Ae) &&
            !W.hasOwnProperty(Ae) &&
            (ue[Ae] = F[Ae] === void 0 && ve !== void 0 ? ve[Ae] : F[Ae]);
      }
      var Ae = arguments.length - 2;
      if (Ae === 1) ue.children = se;
      else if (1 < Ae) {
        ve = Array(Ae);
        for (var gt = 0; gt < Ae; gt++) ve[gt] = arguments[gt + 2];
        ue.children = ve;
      }
      return {
        $$typeof: r,
        type: x.type,
        key: de,
        ref: pe,
        props: ue,
        _owner: xe,
      };
    }),
    (ae.createContext = function (x) {
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
    (ae.createElement = ce),
    (ae.createFactory = function (x) {
      var F = ce.bind(null, x);
      return (F.type = x), F;
    }),
    (ae.createRef = function () {
      return { current: null };
    }),
    (ae.forwardRef = function (x) {
      return { $$typeof: m, render: x };
    }),
    (ae.isValidElement = h),
    (ae.lazy = function (x) {
      return { $$typeof: C, _payload: { _status: -1, _result: x }, _init: be };
    }),
    (ae.memo = function (x, F) {
      return { $$typeof: v, type: x, compare: F === void 0 ? null : F };
    }),
    (ae.startTransition = function (x) {
      var F = U.transition;
      U.transition = {};
      try {
        x();
      } finally {
        U.transition = F;
      }
    }),
    (ae.unstable_act = Q),
    (ae.useCallback = function (x, F) {
      return _e.current.useCallback(x, F);
    }),
    (ae.useContext = function (x) {
      return _e.current.useContext(x);
    }),
    (ae.useDebugValue = function () {}),
    (ae.useDeferredValue = function (x) {
      return _e.current.useDeferredValue(x);
    }),
    (ae.useEffect = function (x, F) {
      return _e.current.useEffect(x, F);
    }),
    (ae.useId = function () {
      return _e.current.useId();
    }),
    (ae.useImperativeHandle = function (x, F, se) {
      return _e.current.useImperativeHandle(x, F, se);
    }),
    (ae.useInsertionEffect = function (x, F) {
      return _e.current.useInsertionEffect(x, F);
    }),
    (ae.useLayoutEffect = function (x, F) {
      return _e.current.useLayoutEffect(x, F);
    }),
    (ae.useMemo = function (x, F) {
      return _e.current.useMemo(x, F);
    }),
    (ae.useReducer = function (x, F, se) {
      return _e.current.useReducer(x, F, se);
    }),
    (ae.useRef = function (x) {
      return _e.current.useRef(x);
    }),
    (ae.useState = function (x) {
      return _e.current.useState(x);
    }),
    (ae.useSyncExternalStore = function (x, F, se) {
      return _e.current.useSyncExternalStore(x, F, se);
    }),
    (ae.useTransition = function () {
      return _e.current.useTransition();
    }),
    (ae.version = "18.3.1"),
    ae
  );
}
var ed;
function ba() {
  return ed || ((ed = 1), (ya.exports = Mh())), ya.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td;
function Uh() {
  if (td) return go;
  td = 1;
  var r = ba(),
    o = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, w, v) {
    var C,
      k = {},
      O = null,
      $ = null;
    v !== void 0 && (O = "" + v),
      w.key !== void 0 && (O = "" + w.key),
      w.ref !== void 0 && ($ = w.ref);
    for (C in w) a.call(w, C) && !f.hasOwnProperty(C) && (k[C] = w[C]);
    if (m && m.defaultProps)
      for (C in ((w = m.defaultProps), w)) k[C] === void 0 && (k[C] = w[C]);
    return {
      $$typeof: o,
      type: m,
      key: O,
      ref: $,
      props: k,
      _owner: u.current,
    };
  }
  return (go.Fragment = l), (go.jsx = p), (go.jsxs = p), go;
}
var nd;
function bh() {
  return nd || ((nd = 1), (ga.exports = Uh())), ga.exports;
}
var Te = bh(),
  Hi = {},
  va = { exports: {} },
  pt = {},
  wa = { exports: {} },
  Sa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rd;
function Hh() {
  return (
    rd ||
      ((rd = 1),
      (function (r) {
        function o(U, ne) {
          var Q = U.length;
          U.push(ne);
          e: for (; 0 < Q; ) {
            var x = (Q - 1) >>> 1,
              F = U[x];
            if (0 < u(F, ne)) (U[x] = ne), (U[Q] = F), (Q = x);
            else break e;
          }
        }
        function l(U) {
          return U.length === 0 ? null : U[0];
        }
        function a(U) {
          if (U.length === 0) return null;
          var ne = U[0],
            Q = U.pop();
          if (Q !== ne) {
            U[0] = Q;
            e: for (var x = 0, F = U.length, se = F >>> 1; x < se; ) {
              var ue = 2 * (x + 1) - 1,
                de = U[ue],
                pe = ue + 1,
                xe = U[pe];
              if (0 > u(de, Q))
                pe < F && 0 > u(xe, de)
                  ? ((U[x] = xe), (U[pe] = Q), (x = pe))
                  : ((U[x] = de), (U[ue] = Q), (x = ue));
              else if (pe < F && 0 > u(xe, Q))
                (U[x] = xe), (U[pe] = Q), (x = pe);
              else break e;
            }
          }
          return ne;
        }
        function u(U, ne) {
          var Q = U.sortIndex - ne.sortIndex;
          return Q !== 0 ? Q : U.id - ne.id;
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
            m = p.now();
          r.unstable_now = function () {
            return p.now() - m;
          };
        }
        var w = [],
          v = [],
          C = 1,
          k = null,
          O = 3,
          $ = !1,
          P = !1,
          _ = !1,
          N = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function M(U) {
          for (var ne = l(v); ne !== null; ) {
            if (ne.callback === null) a(v);
            else if (ne.startTime <= U)
              a(v), (ne.sortIndex = ne.expirationTime), o(w, ne);
            else break;
            ne = l(v);
          }
        }
        function b(U) {
          if (((_ = !1), M(U), !P))
            if (l(w) !== null) (P = !0), be(V);
            else {
              var ne = l(v);
              ne !== null && _e(b, ne.startTime - U);
            }
        }
        function V(U, ne) {
          (P = !1), _ && ((_ = !1), B(ce), (ce = -1)), ($ = !0);
          var Q = O;
          try {
            for (
              M(ne), k = l(w);
              k !== null && (!(k.expirationTime > ne) || (U && !G()));

            ) {
              var x = k.callback;
              if (typeof x == "function") {
                (k.callback = null), (O = k.priorityLevel);
                var F = x(k.expirationTime <= ne);
                (ne = r.unstable_now()),
                  typeof F == "function"
                    ? (k.callback = F)
                    : k === l(w) && a(w),
                  M(ne);
              } else a(w);
              k = l(w);
            }
            if (k !== null) var se = !0;
            else {
              var ue = l(v);
              ue !== null && _e(b, ue.startTime - ne), (se = !1);
            }
            return se;
          } finally {
            (k = null), (O = Q), ($ = !1);
          }
        }
        var J = !1,
          W = null,
          ce = -1,
          ye = 5,
          h = -1;
        function G() {
          return !(r.unstable_now() - h < ye);
        }
        function re() {
          if (W !== null) {
            var U = r.unstable_now();
            h = U;
            var ne = !0;
            try {
              ne = W(!0, U);
            } finally {
              ne ? le() : ((J = !1), (W = null));
            }
          } else J = !1;
        }
        var le;
        if (typeof q == "function")
          le = function () {
            q(re);
          };
        else if (typeof MessageChannel < "u") {
          var Se = new MessageChannel(),
            je = Se.port2;
          (Se.port1.onmessage = re),
            (le = function () {
              je.postMessage(null);
            });
        } else
          le = function () {
            N(re, 0);
          };
        function be(U) {
          (W = U), J || ((J = !0), le());
        }
        function _e(U, ne) {
          ce = N(function () {
            U(r.unstable_now());
          }, ne);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            P || $ || ((P = !0), be(V));
          }),
          (r.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ye = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return l(w);
          }),
          (r.unstable_next = function (U) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = O;
            }
            var Q = O;
            O = ne;
            try {
              return U();
            } finally {
              O = Q;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (U, ne) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var Q = O;
            O = U;
            try {
              return ne();
            } finally {
              O = Q;
            }
          }),
          (r.unstable_scheduleCallback = function (U, ne, Q) {
            var x = r.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? x + Q : x))
                : (Q = x),
              U)
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
              (F = Q + F),
              (U = {
                id: C++,
                callback: ne,
                priorityLevel: U,
                startTime: Q,
                expirationTime: F,
                sortIndex: -1,
              }),
              Q > x
                ? ((U.sortIndex = Q),
                  o(v, U),
                  l(w) === null &&
                    U === l(v) &&
                    (_ ? (B(ce), (ce = -1)) : (_ = !0), _e(b, Q - x)))
                : ((U.sortIndex = F), o(w, U), P || $ || ((P = !0), be(V))),
              U
            );
          }),
          (r.unstable_shouldYield = G),
          (r.unstable_wrapCallback = function (U) {
            var ne = O;
            return function () {
              var Q = O;
              O = ne;
              try {
                return U.apply(this, arguments);
              } finally {
                O = Q;
              }
            };
          });
      })(Sa)),
    Sa
  );
}
var od;
function Vh() {
  return od || ((od = 1), (wa.exports = Hh())), wa.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id;
function Wh() {
  if (id) return pt;
  id = 1;
  var r = ba(),
    o = Vh();
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
  var m = !(
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
  function $(e, t, n, i) {
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
  function P(e, t, n, i) {
    if (t === null || typeof t > "u" || $(e, t, n, i)) return !0;
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
  var B = /[\-:]([a-z])/g;
  function q(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(B, q);
      N[t] = new _(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(B, q);
        N[t] = new _(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(B, q);
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
  function M(e, t, n, i) {
    var s = N.hasOwnProperty(t) ? N[t] : null;
    (s !== null
      ? s.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (P(t, n, s, i) && (n = null),
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
  var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    V = Symbol.for("react.element"),
    J = Symbol.for("react.portal"),
    W = Symbol.for("react.fragment"),
    ce = Symbol.for("react.strict_mode"),
    ye = Symbol.for("react.profiler"),
    h = Symbol.for("react.provider"),
    G = Symbol.for("react.context"),
    re = Symbol.for("react.forward_ref"),
    le = Symbol.for("react.suspense"),
    Se = Symbol.for("react.suspense_list"),
    je = Symbol.for("react.memo"),
    be = Symbol.for("react.lazy"),
    _e = Symbol.for("react.offscreen"),
    U = Symbol.iterator;
  function ne(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (U && e[U]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Q = Object.assign,
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
  var se = !1;
  function ue(e, t) {
    if (!e || se) return "";
    se = !0;
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
          } catch (R) {
            var i = R;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (R) {
            i = R;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (R) {
          i = R;
        }
        e();
      }
    } catch (R) {
      if (R && i && typeof R.stack == "string") {
        for (
          var s = R.stack.split(`
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
      (se = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function de(e) {
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
        return (e = ue(e.type, !1)), e;
      case 11:
        return (e = ue(e.type.render, !1)), e;
      case 1:
        return (e = ue(e.type, !0)), e;
      default:
        return "";
    }
  }
  function pe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case J:
        return "Portal";
      case ye:
        return "Profiler";
      case ce:
        return "StrictMode";
      case le:
        return "Suspense";
      case Se:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case G:
          return (e.displayName || "Context") + ".Consumer";
        case h:
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
        case je:
          return (
            (t = e.displayName || null), t !== null ? t : pe(e.type) || "Memo"
          );
        case be:
          (t = e._payload), (e = e._init);
          try {
            return pe(e(t));
          } catch {}
      }
    return null;
  }
  function xe(e) {
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
        return pe(t);
      case 8:
        return t === ce ? "StrictMode" : "Mode";
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
  function ve(e) {
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
  function ou(e) {
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
  function xl(e, t) {
    var n = t.checked;
    return Q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function iu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked;
    (n = ve(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function lu(e, t) {
    (t = t.checked), t != null && M(e, "checked", t, !1);
  }
  function El(e, t) {
    lu(e, t);
    var n = ve(t.value),
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
      ? Tl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Tl(e, t.type, ve(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function su(e, t, n) {
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
  function Tl(e, t, n) {
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
      for (n = "" + ve(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          (e[s].selected = !0), i && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _l(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return Q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function au(e, t) {
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
    e._wrapperState = { initialValue: ve(n) };
  }
  function uu(e, t) {
    var n = ve(t.value),
      i = ve(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      i != null && (e.defaultValue = "" + i);
  }
  function cu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function fu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Pl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? fu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Do,
    du = (function (e) {
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
    bp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Lr).forEach(function (e) {
    bp.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e]);
    });
  });
  function pu(e, t, n) {
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
          s = pu(n, t[n], i);
        n === "float" && (n = "cssFloat"), i ? e.setProperty(n, s) : (e[n] = s);
      }
  }
  var Hp = Q(
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
  function Rl(e, t) {
    if (t) {
      if (Hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Ol(e, t) {
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
  var Al = null;
  function Nl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ll = null,
    Qn = null,
    qn = null;
  function hu(e) {
    if ((e = eo(e))) {
      if (typeof Ll != "function") throw Error(l(280));
      var t = e.stateNode;
      t && ((t = oi(t)), Ll(e.stateNode, e.type, t));
    }
  }
  function gu(e) {
    Qn ? (qn ? qn.push(e) : (qn = [e])) : (Qn = e);
  }
  function yu() {
    if (Qn) {
      var e = Qn,
        t = qn;
      if (((qn = Qn = null), hu(e), t)) for (e = 0; e < t.length; e++) hu(t[e]);
    }
  }
  function vu(e, t) {
    return e(t);
  }
  function wu() {}
  var zl = !1;
  function Su(e, t, n) {
    if (zl) return e(t, n);
    zl = !0;
    try {
      return vu(e, t, n);
    } finally {
      (zl = !1), (Qn !== null || qn !== null) && (wu(), yu());
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
  var Fl = !1;
  if (m)
    try {
      var Fr = {};
      Object.defineProperty(Fr, "passive", {
        get: function () {
          Fl = !0;
        },
      }),
        window.addEventListener("test", Fr, Fr),
        window.removeEventListener("test", Fr, Fr);
    } catch {
      Fl = !1;
    }
  function Vp(e, t, n, i, s, c, d, g, y) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch (D) {
      this.onError(D);
    }
  }
  var Dr = !1,
    Io = null,
    $o = !1,
    Dl = null,
    Wp = {
      onError: function (e) {
        (Dr = !0), (Io = e);
      },
    };
  function Kp(e, t, n, i, s, c, d, g, y) {
    (Dr = !1), (Io = null), Vp.apply(Wp, arguments);
  }
  function Qp(e, t, n, i, s, c, d, g, y) {
    if ((Kp.apply(this, arguments), Dr)) {
      if (Dr) {
        var R = Io;
        (Dr = !1), (Io = null);
      } else throw Error(l(198));
      $o || (($o = !0), (Dl = R));
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
  function ku(e) {
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
  function Cu(e) {
    if (On(e) !== e) throw Error(l(188));
  }
  function qp(e) {
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
          if (c === n) return Cu(s), e;
          if (c === i) return Cu(s), t;
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
  function xu(e) {
    return (e = qp(e)), e !== null ? Eu(e) : null;
  }
  function Eu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Eu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Tu = o.unstable_scheduleCallback,
    _u = o.unstable_cancelCallback,
    Gp = o.unstable_shouldYield,
    Xp = o.unstable_requestPaint,
    Be = o.unstable_now,
    Yp = o.unstable_getCurrentPriorityLevel,
    Il = o.unstable_ImmediatePriority,
    Pu = o.unstable_UserBlockingPriority,
    jo = o.unstable_NormalPriority,
    Jp = o.unstable_LowPriority,
    Ru = o.unstable_IdlePriority,
    Bo = null,
    Ut = null;
  function Zp(e) {
    if (Ut && typeof Ut.onCommitFiberRoot == "function")
      try {
        Ut.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var zt = Math.clz32 ? Math.clz32 : nm,
    em = Math.log,
    tm = Math.LN2;
  function nm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((em(e) / tm) | 0)) | 0;
  }
  var Mo = 64,
    Uo = 4194304;
  function Ir(e) {
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
      g !== 0 ? (i = Ir(g)) : ((c &= d), c !== 0 && (i = Ir(c)));
    } else (d = n & ~s), d !== 0 ? (i = Ir(d)) : c !== 0 && (i = Ir(c));
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
  function rm(e, t) {
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
  function om(e, t) {
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
        ? (!(g & n) || g & i) && (s[d] = rm(g, t))
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
  function Ou() {
    var e = Mo;
    return (Mo <<= 1), !(Mo & 4194240) && (Mo = 64), e;
  }
  function jl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function $r(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - zt(t)),
      (e[t] = n);
  }
  function im(e, t) {
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
  function Bl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var i = 31 - zt(n),
        s = 1 << i;
      (s & t) | (e[i] & t) && (e[i] |= t), (n &= ~s);
    }
  }
  var we = 0;
  function Au(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Nu,
    Ml,
    Lu,
    zu,
    Fu,
    Ul = !1,
    Ho = [],
    un = null,
    cn = null,
    fn = null,
    jr = new Map(),
    Br = new Map(),
    dn = [],
    lm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Du(e, t) {
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
        jr.delete(t.pointerId);
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
        t !== null && ((t = eo(t)), t !== null && Ml(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function sm(e, t, n, i, s) {
    switch (t) {
      case "focusin":
        return (un = Mr(un, e, t, n, i, s)), !0;
      case "dragenter":
        return (cn = Mr(cn, e, t, n, i, s)), !0;
      case "mouseover":
        return (fn = Mr(fn, e, t, n, i, s)), !0;
      case "pointerover":
        var c = s.pointerId;
        return jr.set(c, Mr(jr.get(c) || null, e, t, n, i, s)), !0;
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
          if (((t = ku(n)), t !== null)) {
            (e.blockedOn = t),
              Fu(e.priority, function () {
                Lu(n);
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
      var n = Hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        (Al = i), n.target.dispatchEvent(i), (Al = null);
      } else return (t = eo(n)), t !== null && Ml(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function $u(e, t, n) {
    Vo(e) && n.delete(t);
  }
  function am() {
    (Ul = !1),
      un !== null && Vo(un) && (un = null),
      cn !== null && Vo(cn) && (cn = null),
      fn !== null && Vo(fn) && (fn = null),
      jr.forEach($u),
      Br.forEach($u);
  }
  function Ur(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ul ||
        ((Ul = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, am)));
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
        jr.forEach(t),
        Br.forEach(t),
        n = 0;
      n < dn.length;
      n++
    )
      (i = dn[n]), i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
      Iu(n), n.blockedOn === null && dn.shift();
  }
  var Gn = b.ReactCurrentBatchConfig,
    Wo = !0;
  function um(e, t, n, i) {
    var s = we,
      c = Gn.transition;
    Gn.transition = null;
    try {
      (we = 1), bl(e, t, n, i);
    } finally {
      (we = s), (Gn.transition = c);
    }
  }
  function cm(e, t, n, i) {
    var s = we,
      c = Gn.transition;
    Gn.transition = null;
    try {
      (we = 4), bl(e, t, n, i);
    } finally {
      (we = s), (Gn.transition = c);
    }
  }
  function bl(e, t, n, i) {
    if (Wo) {
      var s = Hl(e, t, n, i);
      if (s === null) ls(e, t, i, Ko, n), Du(e, i);
      else if (sm(s, e, t, n, i)) i.stopPropagation();
      else if ((Du(e, i), t & 4 && -1 < lm.indexOf(e))) {
        for (; s !== null; ) {
          var c = eo(s);
          if (
            (c !== null && Nu(c),
            (c = Hl(e, t, n, i)),
            c === null && ls(e, t, i, Ko, n),
            c === s)
          )
            break;
          s = c;
        }
        s !== null && i.stopPropagation();
      } else ls(e, t, i, null, n);
    }
  }
  var Ko = null;
  function Hl(e, t, n, i) {
    if (((Ko = null), (e = Nl(i)), (e = An(e)), e !== null))
      if (((t = On(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ku(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ko = e), null;
  }
  function ju(e) {
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
        switch (Yp()) {
          case Il:
            return 1;
          case Pu:
            return 4;
          case jo:
          case Jp:
            return 16;
          case Ru:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pn = null,
    Vl = null,
    Qo = null;
  function Bu() {
    if (Qo) return Qo;
    var e,
      t = Vl,
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
  function Mu() {
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
          : Mu),
        (this.isPropagationStopped = Mu),
        this
      );
    }
    return (
      Q(t.prototype, {
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
    Wl = yt(Xn),
    Hr = Q({}, Xn, { view: 0, detail: 0 }),
    fm = yt(Hr),
    Kl,
    Ql,
    Vr,
    Xo = Q({}, Hr, {
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
      getModifierState: Gl,
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
                ? ((Kl = e.screenX - Vr.screenX), (Ql = e.screenY - Vr.screenY))
                : (Ql = Kl = 0),
              (Vr = e)),
            Kl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ql;
      },
    }),
    Uu = yt(Xo),
    dm = Q({}, Xo, { dataTransfer: 0 }),
    pm = yt(dm),
    mm = Q({}, Hr, { relatedTarget: 0 }),
    ql = yt(mm),
    hm = Q({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gm = yt(hm),
    ym = Q({}, Xn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    vm = yt(ym),
    wm = Q({}, Xn, { data: 0 }),
    bu = yt(wm),
    Sm = {
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
    km = {
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
    Cm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function xm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Cm[e])
      ? !!t[e]
      : !1;
  }
  function Gl() {
    return xm;
  }
  var Em = Q({}, Hr, {
      key: function (e) {
        if (e.key) {
          var t = Sm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? km[e.keyCode] || "Unidentified"
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
      getModifierState: Gl,
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
    Tm = yt(Em),
    _m = Q({}, Xo, {
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
    Hu = yt(_m),
    Pm = Q({}, Hr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gl,
    }),
    Rm = yt(Pm),
    Om = Q({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Am = yt(Om),
    Nm = Q({}, Xo, {
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
    Lm = yt(Nm),
    zm = [9, 13, 27, 32],
    Xl = m && "CompositionEvent" in window,
    Wr = null;
  m && "documentMode" in document && (Wr = document.documentMode);
  var Fm = m && "TextEvent" in window && !Wr,
    Vu = m && (!Xl || (Wr && 8 < Wr && 11 >= Wr)),
    Wu = " ",
    Ku = !1;
  function Qu(e, t) {
    switch (e) {
      case "keyup":
        return zm.indexOf(t.keyCode) !== -1;
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
  function qu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Yn = !1;
  function Dm(e, t) {
    switch (e) {
      case "compositionend":
        return qu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ku = !0), Wu);
      case "textInput":
        return (e = t.data), e === Wu && Ku ? null : e;
      default:
        return null;
    }
  }
  function Im(e, t) {
    if (Yn)
      return e === "compositionend" || (!Xl && Qu(e, t))
        ? ((e = Bu()), (Qo = Vl = pn = null), (Yn = !1), e)
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
        return Vu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var $m = {
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
  function Gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$m[e.type] : t === "textarea";
  }
  function Xu(e, t, n, i) {
    gu(i),
      (t = ti(t, "onChange")),
      0 < t.length &&
        ((n = new Wl("onChange", "change", null, n, i)),
        e.push({ event: n, listeners: t }));
  }
  var Kr = null,
    Qr = null;
  function jm(e) {
    mc(e, 0);
  }
  function Yo(e) {
    var t = nr(e);
    if (ou(t)) return e;
  }
  function Bm(e, t) {
    if (e === "change") return t;
  }
  var Yu = !1;
  if (m) {
    var Yl;
    if (m) {
      var Jl = "oninput" in document;
      if (!Jl) {
        var Ju = document.createElement("div");
        Ju.setAttribute("oninput", "return;"),
          (Jl = typeof Ju.oninput == "function");
      }
      Yl = Jl;
    } else Yl = !1;
    Yu = Yl && (!document.documentMode || 9 < document.documentMode);
  }
  function Zu() {
    Kr && (Kr.detachEvent("onpropertychange", ec), (Qr = Kr = null));
  }
  function ec(e) {
    if (e.propertyName === "value" && Yo(Qr)) {
      var t = [];
      Xu(t, Qr, e, Nl(e)), Su(jm, t);
    }
  }
  function Mm(e, t, n) {
    e === "focusin"
      ? (Zu(), (Kr = t), (Qr = n), Kr.attachEvent("onpropertychange", ec))
      : e === "focusout" && Zu();
  }
  function Um(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Yo(Qr);
  }
  function bm(e, t) {
    if (e === "click") return Yo(t);
  }
  function Hm(e, t) {
    if (e === "input" || e === "change") return Yo(t);
  }
  function Vm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ft = typeof Object.is == "function" ? Object.is : Vm;
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
  function tc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nc(e, t) {
    var n = tc(e);
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
      n = tc(n);
    }
  }
  function rc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? rc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function oc() {
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
  function Zl(e) {
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
  function Wm(e) {
    var t = oc(),
      n = e.focusedElem,
      i = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      rc(n.ownerDocument.documentElement, n)
    ) {
      if (i !== null && Zl(n)) {
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
            (s = nc(n, c));
          var d = nc(n, i);
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
  var Km = m && "documentMode" in document && 11 >= document.documentMode,
    Jn = null,
    es = null,
    Gr = null,
    ts = !1;
  function ic(e, t, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ts ||
      Jn == null ||
      Jn !== Fo(i) ||
      ((i = Jn),
      "selectionStart" in i && Zl(i)
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
        (i = ti(es, "onSelect")),
        0 < i.length &&
          ((t = new Wl("onSelect", "select", null, t, n)),
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
    ns = {},
    lc = {};
  m &&
    ((lc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Zn.animationend.animation,
      delete Zn.animationiteration.animation,
      delete Zn.animationstart.animation),
    "TransitionEvent" in window || delete Zn.transitionend.transition);
  function Zo(e) {
    if (ns[e]) return ns[e];
    if (!Zn[e]) return e;
    var t = Zn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in lc) return (ns[e] = t[n]);
    return e;
  }
  var sc = Zo("animationend"),
    ac = Zo("animationiteration"),
    uc = Zo("animationstart"),
    cc = Zo("transitionend"),
    fc = new Map(),
    dc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function mn(e, t) {
    fc.set(e, t), f(t, [e]);
  }
  for (var rs = 0; rs < dc.length; rs++) {
    var os = dc[rs],
      Qm = os.toLowerCase(),
      qm = os[0].toUpperCase() + os.slice(1);
    mn(Qm, "on" + qm);
  }
  mn(sc, "onAnimationEnd"),
    mn(ac, "onAnimationIteration"),
    mn(uc, "onAnimationStart"),
    mn("dblclick", "onDoubleClick"),
    mn("focusin", "onFocus"),
    mn("focusout", "onBlur"),
    mn(cc, "onTransitionEnd"),
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
    Gm = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Xr)
    );
  function pc(e, t, n) {
    var i = e.type || "unknown-event";
    (e.currentTarget = n), Qp(i, t, void 0, e), (e.currentTarget = null);
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
              R = g.currentTarget;
            if (((g = g.listener), y !== c && s.isPropagationStopped()))
              break e;
            pc(s, g, R), (c = y);
          }
        else
          for (d = 0; d < i.length; d++) {
            if (
              ((g = i[d]),
              (y = g.instance),
              (R = g.currentTarget),
              (g = g.listener),
              y !== c && s.isPropagationStopped())
            )
              break e;
            pc(s, g, R), (c = y);
          }
      }
    }
    if ($o) throw ((e = Dl), ($o = !1), (Dl = null), e);
  }
  function Pe(e, t) {
    var n = t[ds];
    n === void 0 && (n = t[ds] = new Set());
    var i = e + "__bubble";
    n.has(i) || (hc(t, e, 2, !1), n.add(i));
  }
  function is(e, t, n) {
    var i = 0;
    t && (i |= 4), hc(n, e, i, t);
  }
  var ei = "_reactListening" + Math.random().toString(36).slice(2);
  function Yr(e) {
    if (!e[ei]) {
      (e[ei] = !0),
        a.forEach(function (n) {
          n !== "selectionchange" && (Gm.has(n) || is(n, !1, e), is(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ei] || ((t[ei] = !0), is("selectionchange", !1, t));
    }
  }
  function hc(e, t, n, i) {
    switch (ju(t)) {
      case 1:
        var s = um;
        break;
      case 4:
        s = cm;
        break;
      default:
        s = bl;
    }
    (n = s.bind(null, t, n, e)),
      (s = void 0),
      !Fl ||
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
  function ls(e, t, n, i, s) {
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
    Su(function () {
      var R = c,
        D = Nl(n),
        I = [];
      e: {
        var z = fc.get(e);
        if (z !== void 0) {
          var H = Wl,
            X = e;
          switch (e) {
            case "keypress":
              if (qo(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = Tm;
              break;
            case "focusin":
              (X = "focus"), (H = ql);
              break;
            case "focusout":
              (X = "blur"), (H = ql);
              break;
            case "beforeblur":
            case "afterblur":
              H = ql;
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
              H = Uu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = pm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Rm;
              break;
            case sc:
            case ac:
            case uc:
              H = gm;
              break;
            case cc:
              H = Am;
              break;
            case "scroll":
              H = fm;
              break;
            case "wheel":
              H = Lm;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = vm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Hu;
          }
          var Y = (t & 4) !== 0,
            Me = !Y && e === "scroll",
            E = Y ? (z !== null ? z + "Capture" : null) : z;
          Y = [];
          for (var S = R, T; S !== null; ) {
            T = S;
            var j = T.stateNode;
            if (
              (T.tag === 5 &&
                j !== null &&
                ((T = j),
                E !== null &&
                  ((j = zr(S, E)), j != null && Y.push(Jr(S, j, T)))),
              Me)
            )
              break;
            S = S.return;
          }
          0 < Y.length &&
            ((z = new H(z, X, null, n, D)), I.push({ event: z, listeners: Y }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((z = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            z &&
              n !== Al &&
              (X = n.relatedTarget || n.fromElement) &&
              (An(X) || X[Yt]))
          )
            break e;
          if (
            (H || z) &&
            ((z =
              D.window === D
                ? D
                : (z = D.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            H
              ? ((X = n.relatedTarget || n.toElement),
                (H = R),
                (X = X ? An(X) : null),
                X !== null &&
                  ((Me = On(X)), X !== Me || (X.tag !== 5 && X.tag !== 6)) &&
                  (X = null))
              : ((H = null), (X = R)),
            H !== X)
          ) {
            if (
              ((Y = Uu),
              (j = "onMouseLeave"),
              (E = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Y = Hu),
                (j = "onPointerLeave"),
                (E = "onPointerEnter"),
                (S = "pointer")),
              (Me = H == null ? z : nr(H)),
              (T = X == null ? z : nr(X)),
              (z = new Y(j, S + "leave", H, n, D)),
              (z.target = Me),
              (z.relatedTarget = T),
              (j = null),
              An(D) === R &&
                ((Y = new Y(E, S + "enter", X, n, D)),
                (Y.target = T),
                (Y.relatedTarget = Me),
                (j = Y)),
              (Me = j),
              H && X)
            )
              t: {
                for (Y = H, E = X, S = 0, T = Y; T; T = er(T)) S++;
                for (T = 0, j = E; j; j = er(j)) T++;
                for (; 0 < S - T; ) (Y = er(Y)), S--;
                for (; 0 < T - S; ) (E = er(E)), T--;
                for (; S--; ) {
                  if (Y === E || (E !== null && Y === E.alternate)) break t;
                  (Y = er(Y)), (E = er(E));
                }
                Y = null;
              }
            else Y = null;
            H !== null && gc(I, z, H, Y, !1),
              X !== null && Me !== null && gc(I, Me, X, Y, !0);
          }
        }
        e: {
          if (
            ((z = R ? nr(R) : window),
            (H = z.nodeName && z.nodeName.toLowerCase()),
            H === "select" || (H === "input" && z.type === "file"))
          )
            var Z = Bm;
          else if (Gu(z))
            if (Yu) Z = Hm;
            else {
              Z = Um;
              var ee = Mm;
            }
          else
            (H = z.nodeName) &&
              H.toLowerCase() === "input" &&
              (z.type === "checkbox" || z.type === "radio") &&
              (Z = bm);
          if (Z && (Z = Z(e, R))) {
            Xu(I, Z, n, D);
            break e;
          }
          ee && ee(e, z, R),
            e === "focusout" &&
              (ee = z._wrapperState) &&
              ee.controlled &&
              z.type === "number" &&
              Tl(z, "number", z.value);
        }
        switch (((ee = R ? nr(R) : window), e)) {
          case "focusin":
            (Gu(ee) || ee.contentEditable === "true") &&
              ((Jn = ee), (es = R), (Gr = null));
            break;
          case "focusout":
            Gr = es = Jn = null;
            break;
          case "mousedown":
            ts = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ts = !1), ic(I, n, D);
            break;
          case "selectionchange":
            if (Km) break;
          case "keydown":
          case "keyup":
            ic(I, n, D);
        }
        var te;
        if (Xl)
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
            ? Qu(e, n) && (oe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (oe = "onCompositionStart");
        oe &&
          (Vu &&
            n.locale !== "ko" &&
            (Yn || oe !== "onCompositionStart"
              ? oe === "onCompositionEnd" && Yn && (te = Bu())
              : ((pn = D),
                (Vl = "value" in pn ? pn.value : pn.textContent),
                (Yn = !0))),
          (ee = ti(R, oe)),
          0 < ee.length &&
            ((oe = new bu(oe, e, null, n, D)),
            I.push({ event: oe, listeners: ee }),
            te
              ? (oe.data = te)
              : ((te = qu(n)), te !== null && (oe.data = te)))),
          (te = Fm ? Dm(e, n) : Im(e, n)) &&
            ((R = ti(R, "onBeforeInput")),
            0 < R.length &&
              ((D = new bu("onBeforeInput", "beforeinput", null, n, D)),
              I.push({ event: D, listeners: R }),
              (D.data = te)));
      }
      mc(I, t);
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
  function gc(e, t, n, i, s) {
    for (var c = t._reactName, d = []; n !== null && n !== i; ) {
      var g = n,
        y = g.alternate,
        R = g.stateNode;
      if (y !== null && y === i) break;
      g.tag === 5 &&
        R !== null &&
        ((g = R),
        s
          ? ((y = zr(n, c)), y != null && d.unshift(Jr(n, y, g)))
          : s || ((y = zr(n, c)), y != null && d.push(Jr(n, y, g)))),
        (n = n.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Xm = /\r\n?/g,
    Ym = /\u0000|\uFFFD/g;
  function yc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Xm,
        `
`
      )
      .replace(Ym, "");
  }
  function ni(e, t, n) {
    if (((t = yc(t)), yc(e) !== t && n)) throw Error(l(425));
  }
  function ri() {}
  var ss = null,
    as = null;
  function us(e, t) {
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
  var cs = typeof setTimeout == "function" ? setTimeout : void 0,
    Jm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    vc = typeof Promise == "function" ? Promise : void 0,
    Zm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof vc < "u"
        ? function (e) {
            return vc.resolve(null).then(e).catch(eh);
          }
        : cs;
  function eh(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function fs(e, t) {
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
  function hn(e) {
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
  function wc(e) {
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
    ds = "__reactEvents$" + tr,
    th = "__reactListeners$" + tr,
    nh = "__reactHandles$" + tr;
  function An(e) {
    var t = e[bt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Yt] || n[bt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = wc(e); e !== null; ) {
            if ((n = e[bt])) return n;
            e = wc(e);
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
  var ps = [],
    rr = -1;
  function gn(e) {
    return { current: e };
  }
  function Re(e) {
    0 > rr || ((e.current = ps[rr]), (ps[rr] = null), rr--);
  }
  function Ee(e, t) {
    rr++, (ps[rr] = e.current), (e.current = t);
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
    Re(at), Re(et);
  }
  function Sc(e, t, n) {
    if (et.current !== yn) throw Error(l(168));
    Ee(et, t), Ee(at, n);
  }
  function kc(e, t, n) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return n;
    i = i.getChildContext();
    for (var s in i) if (!(s in t)) throw Error(l(108, xe(e) || "Unknown", s));
    return Q({}, n, i);
  }
  function li(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        yn),
      (Nn = et.current),
      Ee(et, e),
      Ee(at, at.current),
      !0
    );
  }
  function Cc(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(l(169));
    n
      ? ((e = kc(e, t, Nn)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        Re(at),
        Re(et),
        Ee(et, e))
      : Re(at),
      Ee(at, n);
  }
  var Jt = null,
    si = !1,
    ms = !1;
  function xc(e) {
    Jt === null ? (Jt = [e]) : Jt.push(e);
  }
  function rh(e) {
    (si = !0), xc(e);
  }
  function vn() {
    if (!ms && Jt !== null) {
      ms = !0;
      var e = 0,
        t = we;
      try {
        var n = Jt;
        for (we = 1; e < n.length; e++) {
          var i = n[e];
          do i = i(!0);
          while (i !== null);
        }
        (Jt = null), (si = !1);
      } catch (s) {
        throw (Jt !== null && (Jt = Jt.slice(e + 1)), Tu(Il, vn), s);
      } finally {
        (we = t), (ms = !1);
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
  function Ec(e, t, n) {
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
  function hs(e) {
    e.return !== null && (zn(e, 1), Ec(e, 1, 0));
  }
  function gs(e) {
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
  function Tc(e, t) {
    var n = At(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function _c(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (vt = e), (wt = hn(t.firstChild)), !0)
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
  function ys(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vs(e) {
    if (Ne) {
      var t = wt;
      if (t) {
        var n = t;
        if (!_c(e, t)) {
          if (ys(e)) throw Error(l(418));
          t = hn(n.nextSibling);
          var i = vt;
          t && _c(e, t)
            ? Tc(i, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (vt = e));
        }
      } else {
        if (ys(e)) throw Error(l(418));
        (e.flags = (e.flags & -4097) | 2), (Ne = !1), (vt = e);
      }
    }
  }
  function Pc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    vt = e;
  }
  function ci(e) {
    if (e !== vt) return !1;
    if (!Ne) return Pc(e), (Ne = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !us(e.type, e.memoizedProps))),
      t && (t = wt))
    ) {
      if (ys(e)) throw (Rc(), Error(l(418)));
      for (; t; ) Tc(e, t), (t = hn(t.nextSibling));
    }
    if ((Pc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                wt = hn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        wt = null;
      }
    } else wt = vt ? hn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Rc() {
    for (var e = wt; e; ) e = hn(e.nextSibling);
  }
  function sr() {
    (wt = vt = null), (Ne = !1);
  }
  function ws(e) {
    Dt === null ? (Dt = [e]) : Dt.push(e);
  }
  var oh = b.ReactCurrentBatchConfig;
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
  function Oc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ac(e) {
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
    function g(E, S, T, j) {
      return S === null || S.tag !== 6
        ? ((S = ca(T, E.mode, j)), (S.return = E), S)
        : ((S = s(S, T)), (S.return = E), S);
    }
    function y(E, S, T, j) {
      var Z = T.type;
      return Z === W
        ? D(E, S, T.props.children, j, T.key)
        : S !== null &&
          (S.elementType === Z ||
            (typeof Z == "object" &&
              Z !== null &&
              Z.$$typeof === be &&
              Oc(Z) === S.type))
        ? ((j = s(S, T.props)), (j.ref = to(E, S, T)), (j.return = E), j)
        : ((j = Di(T.type, T.key, T.props, null, E.mode, j)),
          (j.ref = to(E, S, T)),
          (j.return = E),
          j);
    }
    function R(E, S, T, j) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== T.containerInfo ||
        S.stateNode.implementation !== T.implementation
        ? ((S = fa(T, E.mode, j)), (S.return = E), S)
        : ((S = s(S, T.children || [])), (S.return = E), S);
    }
    function D(E, S, T, j, Z) {
      return S === null || S.tag !== 7
        ? ((S = Un(T, E.mode, j, Z)), (S.return = E), S)
        : ((S = s(S, T)), (S.return = E), S);
    }
    function I(E, S, T) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (S = ca("" + S, E.mode, T)), (S.return = E), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case V:
            return (
              (T = Di(S.type, S.key, S.props, null, E.mode, T)),
              (T.ref = to(E, null, S)),
              (T.return = E),
              T
            );
          case J:
            return (S = fa(S, E.mode, T)), (S.return = E), S;
          case be:
            var j = S._init;
            return I(E, j(S._payload), T);
        }
        if (Ar(S) || ne(S))
          return (S = Un(S, E.mode, T, null)), (S.return = E), S;
        fi(E, S);
      }
      return null;
    }
    function z(E, S, T, j) {
      var Z = S !== null ? S.key : null;
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return Z !== null ? null : g(E, S, "" + T, j);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case V:
            return T.key === Z ? y(E, S, T, j) : null;
          case J:
            return T.key === Z ? R(E, S, T, j) : null;
          case be:
            return (Z = T._init), z(E, S, Z(T._payload), j);
        }
        if (Ar(T) || ne(T)) return Z !== null ? null : D(E, S, T, j, null);
        fi(E, T);
      }
      return null;
    }
    function H(E, S, T, j, Z) {
      if ((typeof j == "string" && j !== "") || typeof j == "number")
        return (E = E.get(T) || null), g(S, E, "" + j, Z);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case V:
            return (
              (E = E.get(j.key === null ? T : j.key) || null), y(S, E, j, Z)
            );
          case J:
            return (
              (E = E.get(j.key === null ? T : j.key) || null), R(S, E, j, Z)
            );
          case be:
            var ee = j._init;
            return H(E, S, T, ee(j._payload), Z);
        }
        if (Ar(j) || ne(j)) return (E = E.get(T) || null), D(S, E, j, Z, null);
        fi(S, j);
      }
      return null;
    }
    function X(E, S, T, j) {
      for (
        var Z = null, ee = null, te = S, oe = (S = 0), Xe = null;
        te !== null && oe < T.length;
        oe++
      ) {
        te.index > oe ? ((Xe = te), (te = null)) : (Xe = te.sibling);
        var me = z(E, te, T[oe], j);
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
          (te = I(E, T[oe], j)),
            te !== null &&
              ((S = c(te, S, oe)),
              ee === null ? (Z = te) : (ee.sibling = te),
              (ee = te));
        return Ne && zn(E, oe), Z;
      }
      for (te = i(E, te); oe < T.length; oe++)
        (Xe = H(te, E, oe, T[oe], j)),
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
    function Y(E, S, T, j) {
      var Z = ne(T);
      if (typeof Z != "function") throw Error(l(150));
      if (((T = Z.call(T)), T == null)) throw Error(l(151));
      for (
        var ee = (Z = null), te = S, oe = (S = 0), Xe = null, me = T.next();
        te !== null && !me.done;
        oe++, me = T.next()
      ) {
        te.index > oe ? ((Xe = te), (te = null)) : (Xe = te.sibling);
        var Pn = z(E, te, me.value, j);
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
          (me = I(E, me.value, j)),
            me !== null &&
              ((S = c(me, S, oe)),
              ee === null ? (Z = me) : (ee.sibling = me),
              (ee = me));
        return Ne && zn(E, oe), Z;
      }
      for (te = i(E, te); !me.done; oe++, me = T.next())
        (me = H(te, E, oe, me.value, j)),
          me !== null &&
            (e &&
              me.alternate !== null &&
              te.delete(me.key === null ? oe : me.key),
            (S = c(me, S, oe)),
            ee === null ? (Z = me) : (ee.sibling = me),
            (ee = me));
      return (
        e &&
          te.forEach(function ($h) {
            return t(E, $h);
          }),
        Ne && zn(E, oe),
        Z
      );
    }
    function Me(E, S, T, j) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === W &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case V:
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
                      Oc(Z) === ee.type)
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
                ? ((S = Un(T.props.children, E.mode, j, T.key)),
                  (S.return = E),
                  (E = S))
                : ((j = Di(T.type, T.key, T.props, null, E.mode, j)),
                  (j.ref = to(E, S, T)),
                  (j.return = E),
                  (E = j));
            }
            return d(E);
          case J:
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
              (S = fa(T, E.mode, j)), (S.return = E), (E = S);
            }
            return d(E);
          case be:
            return (ee = T._init), Me(E, S, ee(T._payload), j);
        }
        if (Ar(T)) return X(E, S, T, j);
        if (ne(T)) return Y(E, S, T, j);
        fi(E, T);
      }
      return (typeof T == "string" && T !== "") || typeof T == "number"
        ? ((T = "" + T),
          S !== null && S.tag === 6
            ? (n(E, S.sibling), (S = s(S, T)), (S.return = E), (E = S))
            : (n(E, S), (S = ca(T, E.mode, j)), (S.return = E), (E = S)),
          d(E))
        : n(E, S);
    }
    return Me;
  }
  var ar = Ac(!0),
    Nc = Ac(!1),
    di = gn(null),
    pi = null,
    ur = null,
    Ss = null;
  function ks() {
    Ss = ur = pi = null;
  }
  function Cs(e) {
    var t = di.current;
    Re(di), (e._currentValue = t);
  }
  function xs(e, t, n) {
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
      (Ss = ur = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (ct = !0), (e.firstContext = null));
  }
  function Pt(e) {
    var t = e._currentValue;
    if (Ss !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
        if (pi === null) throw Error(l(308));
        (ur = e), (pi.dependencies = { lanes: 0, firstContext: e });
      } else ur = ur.next = e;
    return t;
  }
  var Fn = null;
  function Es(e) {
    Fn === null ? (Fn = [e]) : Fn.push(e);
  }
  function Lc(e, t, n, i) {
    var s = t.interleaved;
    return (
      s === null ? ((n.next = n), Es(t)) : ((n.next = s.next), (s.next = n)),
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
  function Ts(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function zc(e, t) {
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
    if (((i = i.shared), fe & 2)) {
      var s = i.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (i.pending = t),
        tn(e, n)
      );
    }
    return (
      (s = i.interleaved),
      s === null ? ((t.next = t), Es(i)) : ((t.next = s.next), (s.next = t)),
      (i.interleaved = t),
      tn(e, n)
    );
  }
  function mi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), Bl(e, n);
    }
  }
  function Fc(e, t) {
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
  function hi(e, t, n, i) {
    var s = e.updateQueue;
    wn = !1;
    var c = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var y = g,
        R = y.next;
      (y.next = null), d === null ? (c = R) : (d.next = R), (d = y);
      var D = e.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (g = D.lastBaseUpdate),
        g !== d &&
          (g === null ? (D.firstBaseUpdate = R) : (g.next = R),
          (D.lastBaseUpdate = y)));
    }
    if (c !== null) {
      var I = s.baseState;
      (d = 0), (D = R = y = null), (g = c);
      do {
        var z = g.lane,
          H = g.eventTime;
        if ((i & z) === z) {
          D !== null &&
            (D = D.next =
              {
                eventTime: H,
                lane: 0,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null,
              });
          e: {
            var X = e,
              Y = g;
            switch (((z = t), (H = n), Y.tag)) {
              case 1:
                if (((X = Y.payload), typeof X == "function")) {
                  I = X.call(H, I, z);
                  break e;
                }
                I = X;
                break e;
              case 3:
                X.flags = (X.flags & -65537) | 128;
              case 0:
                if (
                  ((X = Y.payload),
                  (z = typeof X == "function" ? X.call(H, I, z) : X),
                  z == null)
                )
                  break e;
                I = Q({}, I, z);
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
          (H = {
            eventTime: H,
            lane: z,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            D === null ? ((R = D = H), (y = I)) : (D = D.next = H),
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
        (D === null && (y = I),
        (s.baseState = y),
        (s.firstBaseUpdate = R),
        (s.lastBaseUpdate = D),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do (d |= s.lane), (s = s.next);
        while (s !== t);
      } else c === null && (s.shared.lanes = 0);
      ($n |= d), (e.lanes = d), (e.memoizedState = I);
    }
  }
  function Dc(e, t, n) {
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
  function _s(e, t) {
    switch ((Ee(oo, t), Ee(ro, e), Ee(Ht, no), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Pl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Pl(t, e));
    }
    Re(Ht), Ee(Ht, t);
  }
  function fr() {
    Re(Ht), Re(ro), Re(oo);
  }
  function Ic(e) {
    Dn(oo.current);
    var t = Dn(Ht.current),
      n = Pl(t, e.type);
    t !== n && (Ee(ro, e), Ee(Ht, n));
  }
  function Ps(e) {
    ro.current === e && (Re(Ht), Re(ro));
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
  var Rs = [];
  function Os() {
    for (var e = 0; e < Rs.length; e++)
      Rs[e]._workInProgressVersionPrimary = null;
    Rs.length = 0;
  }
  var yi = b.ReactCurrentDispatcher,
    As = b.ReactCurrentBatchConfig,
    In = 0,
    Fe = null,
    Ke = null,
    qe = null,
    vi = !1,
    io = !1,
    lo = 0,
    ih = 0;
  function tt() {
    throw Error(l(321));
  }
  function Ns(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ft(e[n], t[n])) return !1;
    return !0;
  }
  function Ls(e, t, n, i, s, c) {
    if (
      ((In = c),
      (Fe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (yi.current = e === null || e.memoizedState === null ? uh : ch),
      (e = n(i, s)),
      io)
    ) {
      c = 0;
      do {
        if (((io = !1), (lo = 0), 25 <= c)) throw Error(l(301));
        (c += 1),
          (qe = Ke = null),
          (t.updateQueue = null),
          (yi.current = fh),
          (e = n(i, s));
      } while (io);
    }
    if (
      ((yi.current = ki),
      (t = Ke !== null && Ke.next !== null),
      (In = 0),
      (qe = Ke = Fe = null),
      (vi = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function zs() {
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
  function Fs(e) {
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
        R = c;
      do {
        var D = R.lane;
        if ((In & D) === D)
          y !== null &&
            (y = y.next =
              {
                lane: 0,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              }),
            (i = R.hasEagerState ? R.eagerState : e(i, R.action));
        else {
          var I = {
            lane: D,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          };
          y === null ? ((g = y = I), (d = i)) : (y = y.next = I),
            (Fe.lanes |= D),
            ($n |= D);
        }
        R = R.next;
      } while (R !== null && R !== c);
      y === null ? (d = i) : (y.next = g),
        Ft(i, t.memoizedState) || (ct = !0),
        (t.memoizedState = i),
        (t.baseState = d),
        (t.baseQueue = y),
        (n.lastRenderedState = i);
    }
    if (((e = n.interleaved), e !== null)) {
      s = e;
      do (c = s.lane), (Fe.lanes |= c), ($n |= c), (s = s.next);
      while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ds(e) {
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
  function jc(e, t) {
    var n = Fe,
      i = Rt(),
      s = t(),
      c = !Ft(i.memoizedState, s);
    if (
      (c && ((i.memoizedState = s), (ct = !0)),
      (i = i.queue),
      Is(Uc.bind(null, n, i, e), [e]),
      i.getSnapshot !== t || c || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ao(9, Mc.bind(null, n, i, s, t), void 0, null),
        Ge === null)
      )
        throw Error(l(349));
      In & 30 || Bc(n, t, s);
    }
    return s;
  }
  function Bc(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Fe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Mc(e, t, n, i) {
    (t.value = n), (t.getSnapshot = i), bc(t) && Hc(e);
  }
  function Uc(e, t, n) {
    return n(function () {
      bc(t) && Hc(e);
    });
  }
  function bc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ft(e, n);
    } catch {
      return !0;
    }
  }
  function Hc(e) {
    var t = tn(e, 1);
    t !== null && Bt(t, e, 1, -1);
  }
  function Vc(e) {
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
      (e = e.dispatch = ah.bind(null, Fe, e)),
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
  function Wc() {
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
      if (((c = d.destroy), i !== null && Ns(i, d.deps))) {
        s.memoizedState = ao(t, n, c, i);
        return;
      }
    }
    (Fe.flags |= e), (s.memoizedState = ao(1 | t, n, c, i));
  }
  function Kc(e, t) {
    return wi(8390656, 8, e, t);
  }
  function Is(e, t) {
    return Si(2048, 8, e, t);
  }
  function Qc(e, t) {
    return Si(4, 2, e, t);
  }
  function qc(e, t) {
    return Si(4, 4, e, t);
  }
  function Gc(e, t) {
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
  function Xc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Si(4, 4, Gc.bind(null, t, e), n)
    );
  }
  function $s() {}
  function Yc(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Ns(t, i[1])
      ? i[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Jc(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Ns(t, i[1])
      ? i[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Zc(e, t, n) {
    return In & 21
      ? (Ft(n, t) ||
          ((n = Ou()), (Fe.lanes |= n), ($n |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (ct = !0)), (e.memoizedState = n));
  }
  function lh(e, t) {
    var n = we;
    (we = n !== 0 && 4 > n ? n : 4), e(!0);
    var i = As.transition;
    As.transition = {};
    try {
      e(!1), t();
    } finally {
      (we = n), (As.transition = i);
    }
  }
  function ef() {
    return Rt().memoizedState;
  }
  function sh(e, t, n) {
    var i = En(e);
    if (
      ((n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      tf(e))
    )
      nf(t, n);
    else if (((n = Lc(e, t, n, i)), n !== null)) {
      var s = st();
      Bt(n, e, i, s), rf(n, t, i);
    }
  }
  function ah(e, t, n) {
    var i = En(e),
      s = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (tf(e)) nf(t, s);
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
              ? ((s.next = s), Es(t))
              : ((s.next = y.next), (y.next = s)),
              (t.interleaved = s);
            return;
          }
        } catch {
        } finally {
        }
      (n = Lc(e, t, s, i)),
        n !== null && ((s = st()), Bt(n, e, i, s), rf(n, t, i));
    }
  }
  function tf(e) {
    var t = e.alternate;
    return e === Fe || (t !== null && t === Fe);
  }
  function nf(e, t) {
    io = vi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function rf(e, t, n) {
    if (n & 4194240) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), Bl(e, n);
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
    uh = {
      readContext: Pt,
      useCallback: function (e, t) {
        return (Vt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Pt,
      useEffect: Kc,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          wi(4194308, 4, Gc.bind(null, t, e), n)
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
          (e = e.dispatch = sh.bind(null, Fe, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Vt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Vc,
      useDebugValue: $s,
      useDeferredValue: function (e) {
        return (Vt().memoizedState = e);
      },
      useTransition: function () {
        var e = Vc(!1),
          t = e[0];
        return (e = lh.bind(null, e[1])), (Vt().memoizedState = e), [t, e];
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
          In & 30 || Bc(i, t, n);
        }
        s.memoizedState = n;
        var c = { value: n, getSnapshot: t };
        return (
          (s.queue = c),
          Kc(Uc.bind(null, i, c, e), [e]),
          (i.flags |= 2048),
          ao(9, Mc.bind(null, i, c, n, t), void 0, null),
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
        } else (n = ih++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ch = {
      readContext: Pt,
      useCallback: Yc,
      useContext: Pt,
      useEffect: Is,
      useImperativeHandle: Xc,
      useInsertionEffect: Qc,
      useLayoutEffect: qc,
      useMemo: Jc,
      useReducer: Fs,
      useRef: Wc,
      useState: function () {
        return Fs(so);
      },
      useDebugValue: $s,
      useDeferredValue: function (e) {
        var t = Rt();
        return Zc(t, Ke.memoizedState, e);
      },
      useTransition: function () {
        var e = Fs(so)[0],
          t = Rt().memoizedState;
        return [e, t];
      },
      useMutableSource: $c,
      useSyncExternalStore: jc,
      useId: ef,
      unstable_isNewReconciler: !1,
    },
    fh = {
      readContext: Pt,
      useCallback: Yc,
      useContext: Pt,
      useEffect: Is,
      useImperativeHandle: Xc,
      useInsertionEffect: Qc,
      useLayoutEffect: qc,
      useMemo: Jc,
      useReducer: Ds,
      useRef: Wc,
      useState: function () {
        return Ds(so);
      },
      useDebugValue: $s,
      useDeferredValue: function (e) {
        var t = Rt();
        return Ke === null ? (t.memoizedState = e) : Zc(t, Ke.memoizedState, e);
      },
      useTransition: function () {
        var e = Ds(so)[0],
          t = Rt().memoizedState;
        return [e, t];
      },
      useMutableSource: $c,
      useSyncExternalStore: jc,
      useId: ef,
      unstable_isNewReconciler: !1,
    };
  function It(e, t) {
    if (e && e.defaultProps) {
      (t = Q({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function js(e, t, n, i) {
    (t = e.memoizedState),
      (n = n(i, t)),
      (n = n == null ? t : Q({}, t, n)),
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
        t !== null && (Bt(t, e, s, i), mi(t, e, s));
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
        t !== null && (Bt(t, e, s, i), mi(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = st(),
        i = En(e),
        s = nn(n, i);
      (s.tag = 2),
        t != null && (s.callback = t),
        (t = Sn(e, s, i)),
        t !== null && (Bt(t, e, i, n), mi(t, e, i));
    },
  };
  function of(e, t, n, i, s, c, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, c, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !qr(n, i) || !qr(s, c)
        : !0
    );
  }
  function lf(e, t, n) {
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
  function sf(e, t, n, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== e && Ci.enqueueReplaceState(t, t.state, null);
  }
  function Bs(e, t, n, i) {
    var s = e.stateNode;
    (s.props = n), (s.state = e.memoizedState), (s.refs = {}), Ts(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (s.context = Pt(c))
      : ((c = ut(t) ? Nn : et.current), (s.context = or(e, c))),
      (s.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && (js(e, t, c, n), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function" ||
        (typeof s.UNSAFE_componentWillMount != "function" &&
          typeof s.componentWillMount != "function") ||
        ((t = s.state),
        typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" &&
          s.UNSAFE_componentWillMount(),
        t !== s.state && Ci.enqueueReplaceState(s, s.state, null),
        hi(e, n, s, i),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function dr(e, t) {
    try {
      var n = "",
        i = t;
      do (n += de(i)), (i = i.return);
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
  function Ms(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Us(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var dh = typeof WeakMap == "function" ? WeakMap : Map;
  function af(e, t, n) {
    (n = nn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var i = t.value;
    return (
      (n.callback = function () {
        Oi || ((Oi = !0), (na = i)), Us(e, t);
      }),
      n
    );
  }
  function uf(e, t, n) {
    (n = nn(-1, n)), (n.tag = 3);
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = t.value;
      (n.payload = function () {
        return i(s);
      }),
        (n.callback = function () {
          Us(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (n.callback = function () {
          Us(e, t),
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
  function cf(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new dh();
      var s = new Set();
      i.set(t, s);
    } else (s = i.get(t)), s === void 0 && ((s = new Set()), i.set(t, s));
    s.has(n) || (s.add(n), (e = _h.bind(null, e, t, n)), t.then(e, e));
  }
  function ff(e) {
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
  function df(e, t, n, i, s) {
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
  var ph = b.ReactCurrentOwner,
    ct = !1;
  function lt(e, t, n, i) {
    t.child = e === null ? Nc(t, null, n, i) : ar(t, e.child, n, i);
  }
  function pf(e, t, n, i, s) {
    n = n.render;
    var c = t.ref;
    return (
      cr(t, s),
      (i = Ls(e, t, n, i, c, s)),
      (n = zs()),
      e !== null && !ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          rn(e, t, s))
        : (Ne && n && hs(t), (t.flags |= 1), lt(e, t, i, s), t.child)
    );
  }
  function mf(e, t, n, i, s) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" &&
        !ua(c) &&
        c.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), hf(e, t, c, i, s))
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
  function hf(e, t, n, i, s) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (qr(c, i) && e.ref === t.ref)
        if (((ct = !1), (t.pendingProps = i = c), (e.lanes & s) !== 0))
          e.flags & 131072 && (ct = !0);
        else return (t.lanes = e.lanes), rn(e, t, s);
    }
    return bs(e, t, n, i, s);
  }
  function gf(e, t, n) {
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
          Ee(mr, St),
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
            Ee(mr, St),
            (St |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = c !== null ? c.baseLanes : n),
          Ee(mr, St),
          (St |= i);
      }
    else
      c !== null ? ((i = c.baseLanes | n), (t.memoizedState = null)) : (i = n),
        Ee(mr, St),
        (St |= i);
    return lt(e, t, s, n), t.child;
  }
  function yf(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function bs(e, t, n, i, s) {
    var c = ut(n) ? Nn : et.current;
    return (
      (c = or(t, c)),
      cr(t, s),
      (n = Ls(e, t, n, i, c, s)),
      (i = zs()),
      e !== null && !ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          rn(e, t, s))
        : (Ne && i && hs(t), (t.flags |= 1), lt(e, t, n, s), t.child)
    );
  }
  function vf(e, t, n, i, s) {
    if (ut(n)) {
      var c = !0;
      li(t);
    } else c = !1;
    if ((cr(t, s), t.stateNode === null))
      Ei(e, t), lf(t, n, i), Bs(t, n, i, s), (i = !0);
    else if (e === null) {
      var d = t.stateNode,
        g = t.memoizedProps;
      d.props = g;
      var y = d.context,
        R = n.contextType;
      typeof R == "object" && R !== null
        ? (R = Pt(R))
        : ((R = ut(n) ? Nn : et.current), (R = or(t, R)));
      var D = n.getDerivedStateFromProps,
        I =
          typeof D == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function";
      I ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((g !== i || y !== R) && sf(t, d, i, R)),
        (wn = !1);
      var z = t.memoizedState;
      (d.state = z),
        hi(t, i, d, s),
        (y = t.memoizedState),
        g !== i || z !== y || at.current || wn
          ? (typeof D == "function" && (js(t, n, D, i), (y = t.memoizedState)),
            (g = wn || of(t, n, g, i, z, y, R))
              ? (I ||
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
            (d.context = R),
            (i = g))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (d = t.stateNode),
        zc(e, t),
        (g = t.memoizedProps),
        (R = t.type === t.elementType ? g : It(t.type, g)),
        (d.props = R),
        (I = t.pendingProps),
        (z = d.context),
        (y = n.contextType),
        typeof y == "object" && y !== null
          ? (y = Pt(y))
          : ((y = ut(n) ? Nn : et.current), (y = or(t, y)));
      var H = n.getDerivedStateFromProps;
      (D =
        typeof H == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function") ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((g !== I || z !== y) && sf(t, d, i, y)),
        (wn = !1),
        (z = t.memoizedState),
        (d.state = z),
        hi(t, i, d, s);
      var X = t.memoizedState;
      g !== I || z !== X || at.current || wn
        ? (typeof H == "function" && (js(t, n, H, i), (X = t.memoizedState)),
          (R = wn || of(t, n, R, i, z, X, y) || !1)
            ? (D ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(i, X, y),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(i, X, y)),
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
              (t.memoizedState = X)),
          (d.props = i),
          (d.state = X),
          (d.context = y),
          (i = R))
        : (typeof d.componentDidUpdate != "function" ||
            (g === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return Hs(e, t, n, i, c, s);
  }
  function Hs(e, t, n, i, s, c) {
    yf(e, t);
    var d = (t.flags & 128) !== 0;
    if (!i && !d) return s && Cc(t, n, !1), rn(e, t, c);
    (i = t.stateNode), (ph.current = t);
    var g =
      d && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = ar(t, e.child, null, c)), (t.child = ar(t, null, g, c)))
        : lt(e, t, g, c),
      (t.memoizedState = i.state),
      s && Cc(t, n, !0),
      t.child
    );
  }
  function wf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Sc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Sc(e, t.context, !1),
      _s(e, t.containerInfo);
  }
  function Sf(e, t, n, i, s) {
    return sr(), ws(s), (t.flags |= 256), lt(e, t, n, i), t.child;
  }
  var Vs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ws(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function kf(e, t, n) {
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
      Ee(ze, s & 1),
      e === null)
    )
      return (
        vs(t),
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
                  : (c = Ii(d, i, 0, null)),
                (e = Un(e, i, n, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = Ws(n)),
                (t.memoizedState = Vs),
                e)
              : Ks(t, d))
      );
    if (((s = e.memoizedState), s !== null && ((g = s.dehydrated), g !== null)))
      return mh(e, t, d, i, g, s, n);
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
            ? Ws(n)
            : {
                baseLanes: d.baseLanes | n,
                cachePool: null,
                transitions: d.transitions,
              }),
        (c.memoizedState = d),
        (c.childLanes = e.childLanes & ~n),
        (t.memoizedState = Vs),
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
  function Ks(e, t) {
    return (
      (t = Ii({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function xi(e, t, n, i) {
    return (
      i !== null && ws(i),
      ar(t, e.child, null, n),
      (e = Ks(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function mh(e, t, n, i, s, c, d) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (i = Ms(Error(l(422)))), xi(e, t, d, i))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = i.fallback),
          (s = t.mode),
          (i = Ii({ mode: "visible", children: i.children }, s, 0, null)),
          (c = Un(c, s, d, null)),
          (c.flags |= 2),
          (i.return = t),
          (c.return = t),
          (i.sibling = c),
          (t.child = i),
          t.mode & 1 && ar(t, e.child, null, d),
          (t.child.memoizedState = Ws(d)),
          (t.memoizedState = Vs),
          c);
    if (!(t.mode & 1)) return xi(e, t, d, null);
    if (s.data === "$!") {
      if (((i = s.nextSibling && s.nextSibling.dataset), i)) var g = i.dgst;
      return (
        (i = g), (c = Error(l(419))), (i = Ms(c, i, void 0)), xi(e, t, d, i)
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
      return aa(), (i = Ms(Error(l(421)))), xi(e, t, d, i);
    }
    return s.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ph.bind(null, e)),
        (s._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (wt = hn(s.nextSibling)),
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
        (t = Ks(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function Cf(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), xs(e.return, t, n);
  }
  function Qs(e, t, n, i, s) {
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
  function xf(e, t, n) {
    var i = t.pendingProps,
      s = i.revealOrder,
      c = i.tail;
    if ((lt(e, t, i.children, n), (i = ze.current), i & 2))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Cf(e, n, t);
          else if (e.tag === 19) Cf(e, n, t);
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
    if ((Ee(ze, i), !(t.mode & 1))) t.memoizedState = null;
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
            Qs(t, !1, s, n, c);
          break;
        case "backwards":
          for (n = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && gi(e) === null)) {
              t.child = s;
              break;
            }
            (e = s.sibling), (s.sibling = n), (n = s), (s = e);
          }
          Qs(t, !0, n, null, c);
          break;
        case "together":
          Qs(t, !1, null, null, void 0);
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
      ($n |= t.lanes),
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
  function hh(e, t, n) {
    switch (t.tag) {
      case 3:
        wf(t), sr();
        break;
      case 5:
        Ic(t);
        break;
      case 1:
        ut(t.type) && li(t);
        break;
      case 4:
        _s(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context,
          s = t.memoizedProps.value;
        Ee(di, i._currentValue), (i._currentValue = s);
        break;
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (Ee(ze, ze.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? kf(e, t, n)
            : (Ee(ze, ze.current & 1),
              (e = rn(e, t, n)),
              e !== null ? e.sibling : null);
        Ee(ze, ze.current & 1);
        break;
      case 19:
        if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (i) return xf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Ee(ze, ze.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), gf(e, t, n);
    }
    return rn(e, t, n);
  }
  var Ef, qs, Tf, _f;
  (Ef = function (e, t) {
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
    (qs = function () {}),
    (Tf = function (e, t, n, i) {
      var s = e.memoizedProps;
      if (s !== i) {
        (e = t.stateNode), Dn(Ht.current);
        var c = null;
        switch (n) {
          case "input":
            (s = xl(e, s)), (i = xl(e, i)), (c = []);
            break;
          case "select":
            (s = Q({}, s, { value: void 0 })),
              (i = Q({}, i, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (s = _l(e, s)), (i = _l(e, i)), (c = []);
            break;
          default:
            typeof s.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = ri);
        }
        Rl(n, i);
        var d;
        n = null;
        for (R in s)
          if (!i.hasOwnProperty(R) && s.hasOwnProperty(R) && s[R] != null)
            if (R === "style") {
              var g = s[R];
              for (d in g) g.hasOwnProperty(d) && (n || (n = {}), (n[d] = ""));
            } else
              R !== "dangerouslySetInnerHTML" &&
                R !== "children" &&
                R !== "suppressContentEditableWarning" &&
                R !== "suppressHydrationWarning" &&
                R !== "autoFocus" &&
                (u.hasOwnProperty(R)
                  ? c || (c = [])
                  : (c = c || []).push(R, null));
        for (R in i) {
          var y = i[R];
          if (
            ((g = s != null ? s[R] : void 0),
            i.hasOwnProperty(R) && y !== g && (y != null || g != null))
          )
            if (R === "style")
              if (g) {
                for (d in g)
                  !g.hasOwnProperty(d) ||
                    (y && y.hasOwnProperty(d)) ||
                    (n || (n = {}), (n[d] = ""));
                for (d in y)
                  y.hasOwnProperty(d) &&
                    g[d] !== y[d] &&
                    (n || (n = {}), (n[d] = y[d]));
              } else n || (c || (c = []), c.push(R, n)), (n = y);
            else
              R === "dangerouslySetInnerHTML"
                ? ((y = y ? y.__html : void 0),
                  (g = g ? g.__html : void 0),
                  y != null && g !== y && (c = c || []).push(R, y))
                : R === "children"
                ? (typeof y != "string" && typeof y != "number") ||
                  (c = c || []).push(R, "" + y)
                : R !== "suppressContentEditableWarning" &&
                  R !== "suppressHydrationWarning" &&
                  (u.hasOwnProperty(R)
                    ? (y != null && R === "onScroll" && Pe("scroll", e),
                      c || g === y || (c = []))
                    : (c = c || []).push(R, y));
        }
        n && (c = c || []).push("style", n);
        var R = c;
        (t.updateQueue = R) && (t.flags |= 4);
      }
    }),
    (_f = function (e, t, n, i) {
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
  function gh(e, t, n) {
    var i = t.pendingProps;
    switch ((gs(t), t.tag)) {
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
          Re(at),
          Re(et),
          Os(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (ci(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Dt !== null && (ia(Dt), (Dt = null)))),
          qs(e, t),
          nt(t),
          null
        );
      case 5:
        Ps(t);
        var s = Dn(oo.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Tf(e, t, n, i, s),
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
                Pe("cancel", i), Pe("close", i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", i);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Xr.length; s++) Pe(Xr[s], i);
                break;
              case "source":
                Pe("error", i);
                break;
              case "img":
              case "image":
              case "link":
                Pe("error", i), Pe("load", i);
                break;
              case "details":
                Pe("toggle", i);
                break;
              case "input":
                iu(i, c), Pe("invalid", i);
                break;
              case "select":
                (i._wrapperState = { wasMultiple: !!c.multiple }),
                  Pe("invalid", i);
                break;
              case "textarea":
                au(i, c), Pe("invalid", i);
            }
            Rl(n, c), (s = null);
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
                    Pe("scroll", i);
              }
            switch (n) {
              case "input":
                zo(i), su(i, c, !0);
                break;
              case "textarea":
                zo(i), cu(i);
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
              e === "http://www.w3.org/1999/xhtml" && (e = fu(n)),
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
              Ef(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((d = Ol(n, i)), n)) {
                case "dialog":
                  Pe("cancel", e), Pe("close", e), (s = i);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pe("load", e), (s = i);
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Xr.length; s++) Pe(Xr[s], e);
                  s = i;
                  break;
                case "source":
                  Pe("error", e), (s = i);
                  break;
                case "img":
                case "image":
                case "link":
                  Pe("error", e), Pe("load", e), (s = i);
                  break;
                case "details":
                  Pe("toggle", e), (s = i);
                  break;
                case "input":
                  iu(e, i), (s = xl(e, i)), Pe("invalid", e);
                  break;
                case "option":
                  s = i;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!i.multiple }),
                    (s = Q({}, i, { value: void 0 })),
                    Pe("invalid", e);
                  break;
                case "textarea":
                  au(e, i), (s = _l(e, i)), Pe("invalid", e);
                  break;
                default:
                  s = i;
              }
              Rl(n, s), (g = s);
              for (c in g)
                if (g.hasOwnProperty(c)) {
                  var y = g[c];
                  c === "style"
                    ? mu(e, y)
                    : c === "dangerouslySetInnerHTML"
                    ? ((y = y ? y.__html : void 0), y != null && du(e, y))
                    : c === "children"
                    ? typeof y == "string"
                      ? (n !== "textarea" || y !== "") && Nr(e, y)
                      : typeof y == "number" && Nr(e, "" + y)
                    : c !== "suppressContentEditableWarning" &&
                      c !== "suppressHydrationWarning" &&
                      c !== "autoFocus" &&
                      (u.hasOwnProperty(c)
                        ? y != null && c === "onScroll" && Pe("scroll", e)
                        : y != null && M(e, c, y, d));
                }
              switch (n) {
                case "input":
                  zo(e), su(e, i, !1);
                  break;
                case "textarea":
                  zo(e), cu(e);
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + ve(i.value));
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
        if (e && t.stateNode != null) _f(e, t, e.memoizedProps, i);
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
          (Re(ze),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ne && wt !== null && t.mode & 1 && !(t.flags & 128))
            Rc(), sr(), (t.flags |= 98560), (c = !1);
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
          } else Dt !== null && (ia(Dt), (Dt = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ze.current & 1 ? Qe === 0 && (Qe = 3) : aa())),
            t.updateQueue !== null && (t.flags |= 4),
            nt(t),
            null);
      case 4:
        return (
          fr(),
          qs(e, t),
          e === null && Yr(t.stateNode.containerInfo),
          nt(t),
          null
        );
      case 10:
        return Cs(t.type._context), nt(t), null;
      case 17:
        return ut(t.type) && ii(), nt(t), null;
      case 19:
        if ((Re(ze), (c = t.memoizedState), c === null)) return nt(t), null;
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
                  return Ee(ze, (ze.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Be() > hr &&
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
              2 * Be() - c.renderingStartTime > hr &&
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
            Ee(ze, i ? (n & 1) | 2 : n & 1),
            t)
          : (nt(t), null);
      case 22:
      case 23:
        return (
          sa(),
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
  function yh(e, t) {
    switch ((gs(t), t.tag)) {
      case 1:
        return (
          ut(t.type) && ii(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          fr(),
          Re(at),
          Re(et),
          Os(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ps(t), null;
      case 13:
        if (
          (Re(ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          sr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Re(ze), null;
      case 4:
        return fr(), null;
      case 10:
        return Cs(t.type._context), null;
      case 22:
      case 23:
        return sa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ti = !1,
    rt = !1,
    vh = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;
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
  function Gs(e, t, n) {
    try {
      n();
    } catch (i) {
      De(e, t, i);
    }
  }
  var Pf = !1;
  function wh(e, t) {
    if (((ss = Wo), (e = oc()), Zl(e))) {
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
              R = 0,
              D = 0,
              I = e,
              z = null;
            t: for (;;) {
              for (
                var H;
                I !== n || (s !== 0 && I.nodeType !== 3) || (g = d + s),
                  I !== c || (i !== 0 && I.nodeType !== 3) || (y = d + i),
                  I.nodeType === 3 && (d += I.nodeValue.length),
                  (H = I.firstChild) !== null;

              )
                (z = I), (I = H);
              for (;;) {
                if (I === e) break t;
                if (
                  (z === n && ++R === s && (g = d),
                  z === c && ++D === i && (y = d),
                  (H = I.nextSibling) !== null)
                )
                  break;
                (I = z), (z = I.parentNode);
              }
              I = H;
            }
            n = g === -1 || y === -1 ? null : { start: g, end: y };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      as = { focusedElem: e, selectionRange: n }, Wo = !1, K = t;
      K !== null;

    )
      if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (K = e);
      else
        for (; K !== null; ) {
          t = K;
          try {
            var X = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (X !== null) {
                    var Y = X.memoizedProps,
                      Me = X.memoizedState,
                      E = t.stateNode,
                      S = E.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Y : It(t.type, Y),
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
          } catch (j) {
            De(t, t.return, j);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (K = e);
            break;
          }
          K = t.return;
        }
    return (X = Pf), (Pf = !1), X;
  }
  function co(e, t, n) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var s = (i = i.next);
      do {
        if ((s.tag & e) === e) {
          var c = s.destroy;
          (s.destroy = void 0), c !== void 0 && Gs(t, n, c);
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
  function Xs(e) {
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
  function Rf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Rf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[bt],
          delete t[Zr],
          delete t[ds],
          delete t[th],
          delete t[nh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Of(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Af(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Of(e.return)) return null;
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
  function Ys(e, t, n) {
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
      for (Ys(e, t, n), e = e.sibling; e !== null; )
        Ys(e, t, n), (e = e.sibling);
  }
  function Js(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && ((e = e.child), e !== null))
      for (Js(e, t, n), e = e.sibling; e !== null; )
        Js(e, t, n), (e = e.sibling);
  }
  var Ye = null,
    $t = !1;
  function kn(e, t, n) {
    for (n = n.child; n !== null; ) Nf(e, t, n), (n = n.sibling);
  }
  function Nf(e, t, n) {
    if (Ut && typeof Ut.onCommitFiberUnmount == "function")
      try {
        Ut.onCommitFiberUnmount(Bo, n);
      } catch {}
    switch (n.tag) {
      case 5:
        rt || pr(n, t);
      case 6:
        var i = Ye,
          s = $t;
        (Ye = null),
          kn(e, t, n),
          (Ye = i),
          ($t = s),
          Ye !== null &&
            ($t
              ? ((e = Ye),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ye.removeChild(n.stateNode));
        break;
      case 18:
        Ye !== null &&
          ($t
            ? ((e = Ye),
              (n = n.stateNode),
              e.nodeType === 8
                ? fs(e.parentNode, n)
                : e.nodeType === 1 && fs(e, n),
              br(e))
            : fs(Ye, n.stateNode));
        break;
      case 4:
        (i = Ye),
          (s = $t),
          (Ye = n.stateNode.containerInfo),
          ($t = !0),
          kn(e, t, n),
          (Ye = i),
          ($t = s);
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
              d !== void 0 && (c & 2 || c & 4) && Gs(n, t, d),
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
  function Lf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new vh()),
        t.forEach(function (i) {
          var s = Rh.bind(null, e, i);
          n.has(i) || (n.add(i), i.then(s, s));
        });
    }
  }
  function jt(e, t) {
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
                (Ye = g.stateNode), ($t = !1);
                break e;
              case 3:
                (Ye = g.stateNode.containerInfo), ($t = !0);
                break e;
              case 4:
                (Ye = g.stateNode.containerInfo), ($t = !0);
                break e;
            }
            g = g.return;
          }
          if (Ye === null) throw Error(l(160));
          Nf(c, d, s), (Ye = null), ($t = !1);
          var y = s.alternate;
          y !== null && (y.return = null), (s.return = null);
        } catch (R) {
          De(s, t, R);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) zf(t, e), (t = t.sibling);
  }
  function zf(e, t) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((jt(t, e), Wt(e), i & 4)) {
          try {
            co(3, e, e.return), _i(3, e);
          } catch (Y) {
            De(e, e.return, Y);
          }
          try {
            co(5, e, e.return);
          } catch (Y) {
            De(e, e.return, Y);
          }
        }
        break;
      case 1:
        jt(t, e), Wt(e), i & 512 && n !== null && pr(n, n.return);
        break;
      case 5:
        if (
          (jt(t, e),
          Wt(e),
          i & 512 && n !== null && pr(n, n.return),
          e.flags & 32)
        ) {
          var s = e.stateNode;
          try {
            Nr(s, "");
          } catch (Y) {
            De(e, e.return, Y);
          }
        }
        if (i & 4 && ((s = e.stateNode), s != null)) {
          var c = e.memoizedProps,
            d = n !== null ? n.memoizedProps : c,
            g = e.type,
            y = e.updateQueue;
          if (((e.updateQueue = null), y !== null))
            try {
              g === "input" && c.type === "radio" && c.name != null && lu(s, c),
                Ol(g, d);
              var R = Ol(g, c);
              for (d = 0; d < y.length; d += 2) {
                var D = y[d],
                  I = y[d + 1];
                D === "style"
                  ? mu(s, I)
                  : D === "dangerouslySetInnerHTML"
                  ? du(s, I)
                  : D === "children"
                  ? Nr(s, I)
                  : M(s, D, I, R);
              }
              switch (g) {
                case "input":
                  El(s, c);
                  break;
                case "textarea":
                  uu(s, c);
                  break;
                case "select":
                  var z = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!c.multiple;
                  var H = c.value;
                  H != null
                    ? Kn(s, !!c.multiple, H, !1)
                    : z !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Kn(s, !!c.multiple, c.defaultValue, !0)
                        : Kn(s, !!c.multiple, c.multiple ? [] : "", !1));
              }
              s[Zr] = c;
            } catch (Y) {
              De(e, e.return, Y);
            }
        }
        break;
      case 6:
        if ((jt(t, e), Wt(e), i & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (s = e.stateNode), (c = e.memoizedProps);
          try {
            s.nodeValue = c;
          } catch (Y) {
            De(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (
          (jt(t, e), Wt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            br(t.containerInfo);
          } catch (Y) {
            De(e, e.return, Y);
          }
        break;
      case 4:
        jt(t, e), Wt(e);
        break;
      case 13:
        jt(t, e),
          Wt(e),
          (s = e.child),
          s.flags & 8192 &&
            ((c = s.memoizedState !== null),
            (s.stateNode.isHidden = c),
            !c ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (ta = Be())),
          i & 4 && Lf(e);
        break;
      case 22:
        if (
          ((D = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((rt = (R = rt) || D), jt(t, e), (rt = R)) : jt(t, e),
          Wt(e),
          i & 8192)
        ) {
          if (
            ((R = e.memoizedState !== null),
            (e.stateNode.isHidden = R) && !D && e.mode & 1)
          )
            for (K = e, D = e.child; D !== null; ) {
              for (I = K = D; K !== null; ) {
                switch (((z = K), (H = z.child), z.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    co(4, z, z.return);
                    break;
                  case 1:
                    pr(z, z.return);
                    var X = z.stateNode;
                    if (typeof X.componentWillUnmount == "function") {
                      (i = z), (n = z.return);
                      try {
                        (t = i),
                          (X.props = t.memoizedProps),
                          (X.state = t.memoizedState),
                          X.componentWillUnmount();
                      } catch (Y) {
                        De(i, n, Y);
                      }
                    }
                    break;
                  case 5:
                    pr(z, z.return);
                    break;
                  case 22:
                    if (z.memoizedState !== null) {
                      If(I);
                      continue;
                    }
                }
                H !== null ? ((H.return = z), (K = H)) : If(I);
              }
              D = D.sibling;
            }
          e: for (D = null, I = e; ; ) {
            if (I.tag === 5) {
              if (D === null) {
                D = I;
                try {
                  (s = I.stateNode),
                    R
                      ? ((c = s.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((g = I.stateNode),
                        (y = I.memoizedProps.style),
                        (d =
                          y != null && y.hasOwnProperty("display")
                            ? y.display
                            : null),
                        (g.style.display = pu("display", d)));
                } catch (Y) {
                  De(e, e.return, Y);
                }
              }
            } else if (I.tag === 6) {
              if (D === null)
                try {
                  I.stateNode.nodeValue = R ? "" : I.memoizedProps;
                } catch (Y) {
                  De(e, e.return, Y);
                }
            } else if (
              ((I.tag !== 22 && I.tag !== 23) ||
                I.memoizedState === null ||
                I === e) &&
              I.child !== null
            ) {
              (I.child.return = I), (I = I.child);
              continue;
            }
            if (I === e) break e;
            for (; I.sibling === null; ) {
              if (I.return === null || I.return === e) break e;
              D === I && (D = null), (I = I.return);
            }
            D === I && (D = null),
              (I.sibling.return = I.return),
              (I = I.sibling);
          }
        }
        break;
      case 19:
        jt(t, e), Wt(e), i & 4 && Lf(e);
        break;
      case 21:
        break;
      default:
        jt(t, e), Wt(e);
    }
  }
  function Wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Of(n)) {
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
            var c = Af(e);
            Js(e, c, s);
            break;
          case 3:
          case 4:
            var d = i.stateNode.containerInfo,
              g = Af(e);
            Ys(e, g, d);
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
  function Sh(e, t, n) {
    (K = e), Ff(e);
  }
  function Ff(e, t, n) {
    for (var i = (e.mode & 1) !== 0; K !== null; ) {
      var s = K,
        c = s.child;
      if (s.tag === 22 && i) {
        var d = s.memoizedState !== null || Ti;
        if (!d) {
          var g = s.alternate,
            y = (g !== null && g.memoizedState !== null) || rt;
          g = Ti;
          var R = rt;
          if (((Ti = d), (rt = y) && !R))
            for (K = s; K !== null; )
              (d = K),
                (y = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? $f(s)
                  : y !== null
                  ? ((y.return = d), (K = y))
                  : $f(s);
          for (; c !== null; ) (K = c), Ff(c), (c = c.sibling);
          (K = s), (Ti = g), (rt = R);
        }
        Df(e);
      } else
        s.subtreeFlags & 8772 && c !== null ? ((c.return = s), (K = c)) : Df(e);
    }
  }
  function Df(e) {
    for (; K !== null; ) {
      var t = K;
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
                        : It(t.type, n.memoizedProps);
                    i.componentDidUpdate(
                      s,
                      n.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var c = t.updateQueue;
                c !== null && Dc(t, c, i);
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
                  Dc(t, d, n);
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
                  var R = t.alternate;
                  if (R !== null) {
                    var D = R.memoizedState;
                    if (D !== null) {
                      var I = D.dehydrated;
                      I !== null && br(I);
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
          rt || (t.flags & 512 && Xs(t));
        } catch (z) {
          De(t, t.return, z);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (K = n);
        break;
      }
      K = t.return;
    }
  }
  function If(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (K = n);
        break;
      }
      K = t.return;
    }
  }
  function $f(e) {
    for (; K !== null; ) {
      var t = K;
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
              Xs(t);
            } catch (y) {
              De(t, c, y);
            }
            break;
          case 5:
            var d = t.return;
            try {
              Xs(t);
            } catch (y) {
              De(t, d, y);
            }
        }
      } catch (y) {
        De(t, t.return, y);
      }
      if (t === e) {
        K = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        (g.return = t.return), (K = g);
        break;
      }
      K = t.return;
    }
  }
  var kh = Math.ceil,
    Pi = b.ReactCurrentDispatcher,
    Zs = b.ReactCurrentOwner,
    Ot = b.ReactCurrentBatchConfig,
    fe = 0,
    Ge = null,
    He = null,
    Je = 0,
    St = 0,
    mr = gn(0),
    Qe = 0,
    fo = null,
    $n = 0,
    Ri = 0,
    ea = 0,
    po = null,
    ft = null,
    ta = 0,
    hr = 1 / 0,
    on = null,
    Oi = !1,
    na = null,
    Cn = null,
    Ai = !1,
    xn = null,
    Ni = 0,
    mo = 0,
    ra = null,
    Li = -1,
    zi = 0;
  function st() {
    return fe & 6 ? Be() : Li !== -1 ? Li : (Li = Be());
  }
  function En(e) {
    return e.mode & 1
      ? fe & 2 && Je !== 0
        ? Je & -Je
        : oh.transition !== null
        ? (zi === 0 && (zi = Ou()), zi)
        : ((e = we),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ju(e.type))),
          e)
      : 1;
  }
  function Bt(e, t, n, i) {
    if (50 < mo) throw ((mo = 0), (ra = null), Error(l(185)));
    $r(e, n, i),
      (!(fe & 2) || e !== Ge) &&
        (e === Ge && (!(fe & 2) && (Ri |= n), Qe === 4 && Tn(e, Je)),
        dt(e, i),
        n === 1 &&
          fe === 0 &&
          !(t.mode & 1) &&
          ((hr = Be() + 500), si && vn()));
  }
  function dt(e, t) {
    var n = e.callbackNode;
    om(e, t);
    var i = bo(e, e === Ge ? Je : 0);
    if (i === 0)
      n !== null && _u(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((n != null && _u(n), t === 1))
        e.tag === 0 ? rh(Bf.bind(null, e)) : xc(Bf.bind(null, e)),
          Zm(function () {
            !(fe & 6) && vn();
          }),
          (n = null);
      else {
        switch (Au(i)) {
          case 1:
            n = Il;
            break;
          case 4:
            n = Pu;
            break;
          case 16:
            n = jo;
            break;
          case 536870912:
            n = Ru;
            break;
          default:
            n = jo;
        }
        n = Qf(n, jf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function jf(e, t) {
    if (((Li = -1), (zi = 0), fe & 6)) throw Error(l(327));
    var n = e.callbackNode;
    if (gr() && e.callbackNode !== n) return null;
    var i = bo(e, e === Ge ? Je : 0);
    if (i === 0) return null;
    if (i & 30 || i & e.expiredLanes || t) t = Fi(e, i);
    else {
      t = i;
      var s = fe;
      fe |= 2;
      var c = Uf();
      (Ge !== e || Je !== t) && ((on = null), (hr = Be() + 500), Bn(e, t));
      do
        try {
          Eh();
          break;
        } catch (g) {
          Mf(e, g);
        }
      while (!0);
      ks(),
        (Pi.current = c),
        (fe = s),
        He !== null ? (t = 0) : ((Ge = null), (Je = 0), (t = Qe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((s = $l(e)), s !== 0 && ((i = s), (t = oa(e, s)))),
        t === 1)
      )
        throw ((n = fo), Bn(e, 0), Tn(e, i), dt(e, Be()), n);
      if (t === 6) Tn(e, i);
      else {
        if (
          ((s = e.current.alternate),
          !(i & 30) &&
            !Ch(s) &&
            ((t = Fi(e, i)),
            t === 2 && ((c = $l(e)), c !== 0 && ((i = c), (t = oa(e, c)))),
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
              (i & 130023424) === i && ((t = ta + 500 - Be()), 10 < t))
            ) {
              if (bo(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & i) !== i)) {
                st(), (e.pingedLanes |= e.suspendedLanes & s);
                break;
              }
              e.timeoutHandle = cs(Mn.bind(null, e, ft, on), t);
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
                  : 1960 * kh(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = cs(Mn.bind(null, e, ft, on), i);
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
    return dt(e, Be()), e.callbackNode === n ? jf.bind(null, e) : null;
  }
  function oa(e, t) {
    var n = po;
    return (
      e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
      (e = Fi(e, t)),
      e !== 2 && ((t = ft), (ft = n), t !== null && ia(t)),
      e
    );
  }
  function ia(e) {
    ft === null ? (ft = e) : ft.push.apply(ft, e);
  }
  function Ch(e) {
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
      t &= ~ea,
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
  function Bf(e) {
    if (fe & 6) throw Error(l(327));
    gr();
    var t = bo(e, 0);
    if (!(t & 1)) return dt(e, Be()), null;
    var n = Fi(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = $l(e);
      i !== 0 && ((t = i), (n = oa(e, i)));
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
  function la(e, t) {
    var n = fe;
    fe |= 1;
    try {
      return e(t);
    } finally {
      (fe = n), fe === 0 && ((hr = Be() + 500), si && vn());
    }
  }
  function jn(e) {
    xn !== null && xn.tag === 0 && !(fe & 6) && gr();
    var t = fe;
    fe |= 1;
    var n = Ot.transition,
      i = we;
    try {
      if (((Ot.transition = null), (we = 1), e)) return e();
    } finally {
      (we = i), (Ot.transition = n), (fe = t), !(fe & 6) && vn();
    }
  }
  function sa() {
    (St = mr.current), Re(mr);
  }
  function Bn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Jm(n)), He !== null))
      for (n = He.return; n !== null; ) {
        var i = n;
        switch ((gs(i), i.tag)) {
          case 1:
            (i = i.type.childContextTypes), i != null && ii();
            break;
          case 3:
            fr(), Re(at), Re(et), Os();
            break;
          case 5:
            Ps(i);
            break;
          case 4:
            fr();
            break;
          case 13:
            Re(ze);
            break;
          case 19:
            Re(ze);
            break;
          case 10:
            Cs(i.type._context);
            break;
          case 22:
          case 23:
            sa();
        }
        n = n.return;
      }
    if (
      ((Ge = e),
      (He = e = _n(e.current, null)),
      (Je = St = t),
      (Qe = 0),
      (fo = null),
      (ea = Ri = $n = 0),
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
  function Mf(e, t) {
    do {
      var n = He;
      try {
        if ((ks(), (yi.current = ki), vi)) {
          for (var i = Fe.memoizedState; i !== null; ) {
            var s = i.queue;
            s !== null && (s.pending = null), (i = i.next);
          }
          vi = !1;
        }
        if (
          ((In = 0),
          (qe = Ke = Fe = null),
          (io = !1),
          (lo = 0),
          (Zs.current = null),
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
            var R = y,
              D = g,
              I = D.tag;
            if (!(D.mode & 1) && (I === 0 || I === 11 || I === 15)) {
              var z = D.alternate;
              z
                ? ((D.updateQueue = z.updateQueue),
                  (D.memoizedState = z.memoizedState),
                  (D.lanes = z.lanes))
                : ((D.updateQueue = null), (D.memoizedState = null));
            }
            var H = ff(d);
            if (H !== null) {
              (H.flags &= -257),
                df(H, d, g, c, t),
                H.mode & 1 && cf(c, R, t),
                (t = H),
                (y = R);
              var X = t.updateQueue;
              if (X === null) {
                var Y = new Set();
                Y.add(y), (t.updateQueue = Y);
              } else X.add(y);
              break e;
            } else {
              if (!(t & 1)) {
                cf(c, R, t), aa();
                break e;
              }
              y = Error(l(426));
            }
          } else if (Ne && g.mode & 1) {
            var Me = ff(d);
            if (Me !== null) {
              !(Me.flags & 65536) && (Me.flags |= 256),
                df(Me, d, g, c, t),
                ws(dr(y, g));
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
                var E = af(c, y, t);
                Fc(c, E);
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
                  var j = uf(c, g, t);
                  Fc(c, j);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Hf(n);
      } catch (Z) {
        (t = Z), He === n && n !== null && (He = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Uf() {
    var e = Pi.current;
    return (Pi.current = ki), e === null ? ki : e;
  }
  function aa() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
      Ge === null || (!($n & 268435455) && !(Ri & 268435455)) || Tn(Ge, Je);
  }
  function Fi(e, t) {
    var n = fe;
    fe |= 2;
    var i = Uf();
    (Ge !== e || Je !== t) && ((on = null), Bn(e, t));
    do
      try {
        xh();
        break;
      } catch (s) {
        Mf(e, s);
      }
    while (!0);
    if ((ks(), (fe = n), (Pi.current = i), He !== null)) throw Error(l(261));
    return (Ge = null), (Je = 0), Qe;
  }
  function xh() {
    for (; He !== null; ) bf(He);
  }
  function Eh() {
    for (; He !== null && !Gp(); ) bf(He);
  }
  function bf(e) {
    var t = Kf(e.alternate, e, St);
    (e.memoizedProps = e.pendingProps),
      t === null ? Hf(e) : (He = t),
      (Zs.current = null);
  }
  function Hf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = yh(n, t)), n !== null)) {
          (n.flags &= 32767), (He = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Qe = 6), (He = null);
          return;
        }
      } else if (((n = gh(n, t, St)), n !== null)) {
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
    var i = we,
      s = Ot.transition;
    try {
      (Ot.transition = null), (we = 1), Th(e, t, n, i);
    } finally {
      (Ot.transition = s), (we = i);
    }
    return null;
  }
  function Th(e, t, n, i) {
    do gr();
    while (xn !== null);
    if (fe & 6) throw Error(l(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(l(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = n.lanes | n.childLanes;
    if (
      (im(e, c),
      e === Ge && ((He = Ge = null), (Je = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ai ||
        ((Ai = !0),
        Qf(jo, function () {
          return gr(), null;
        })),
      (c = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || c)
    ) {
      (c = Ot.transition), (Ot.transition = null);
      var d = we;
      we = 1;
      var g = fe;
      (fe |= 4),
        (Zs.current = null),
        wh(e, n),
        zf(n, e),
        Wm(as),
        (Wo = !!ss),
        (as = ss = null),
        (e.current = n),
        Sh(n),
        Xp(),
        (fe = g),
        (we = d),
        (Ot.transition = c);
    } else e.current = n;
    if (
      (Ai && ((Ai = !1), (xn = e), (Ni = s)),
      (c = e.pendingLanes),
      c === 0 && (Cn = null),
      Zp(n.stateNode),
      dt(e, Be()),
      t !== null)
    )
      for (i = e.onRecoverableError, n = 0; n < t.length; n++)
        (s = t[n]), i(s.value, { componentStack: s.stack, digest: s.digest });
    if (Oi) throw ((Oi = !1), (e = na), (na = null), e);
    return (
      Ni & 1 && e.tag !== 0 && gr(),
      (c = e.pendingLanes),
      c & 1 ? (e === ra ? mo++ : ((mo = 0), (ra = e))) : (mo = 0),
      vn(),
      null
    );
  }
  function gr() {
    if (xn !== null) {
      var e = Au(Ni),
        t = Ot.transition,
        n = we;
      try {
        if (((Ot.transition = null), (we = 16 > e ? 16 : e), xn === null))
          var i = !1;
        else {
          if (((e = xn), (xn = null), (Ni = 0), fe & 6)) throw Error(l(331));
          var s = fe;
          for (fe |= 4, K = e.current; K !== null; ) {
            var c = K,
              d = c.child;
            if (K.flags & 16) {
              var g = c.deletions;
              if (g !== null) {
                for (var y = 0; y < g.length; y++) {
                  var R = g[y];
                  for (K = R; K !== null; ) {
                    var D = K;
                    switch (D.tag) {
                      case 0:
                      case 11:
                      case 15:
                        co(8, D, c);
                    }
                    var I = D.child;
                    if (I !== null) (I.return = D), (K = I);
                    else
                      for (; K !== null; ) {
                        D = K;
                        var z = D.sibling,
                          H = D.return;
                        if ((Rf(D), D === R)) {
                          K = null;
                          break;
                        }
                        if (z !== null) {
                          (z.return = H), (K = z);
                          break;
                        }
                        K = H;
                      }
                  }
                }
                var X = c.alternate;
                if (X !== null) {
                  var Y = X.child;
                  if (Y !== null) {
                    X.child = null;
                    do {
                      var Me = Y.sibling;
                      (Y.sibling = null), (Y = Me);
                    } while (Y !== null);
                  }
                }
                K = c;
              }
            }
            if (c.subtreeFlags & 2064 && d !== null) (d.return = c), (K = d);
            else
              e: for (; K !== null; ) {
                if (((c = K), c.flags & 2048))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      co(9, c, c.return);
                  }
                var E = c.sibling;
                if (E !== null) {
                  (E.return = c.return), (K = E);
                  break e;
                }
                K = c.return;
              }
          }
          var S = e.current;
          for (K = S; K !== null; ) {
            d = K;
            var T = d.child;
            if (d.subtreeFlags & 2064 && T !== null) (T.return = d), (K = T);
            else
              e: for (d = S; K !== null; ) {
                if (((g = K), g.flags & 2048))
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
                  K = null;
                  break e;
                }
                var j = g.sibling;
                if (j !== null) {
                  (j.return = g.return), (K = j);
                  break e;
                }
                K = g.return;
              }
          }
          if (
            ((fe = s),
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
        (we = n), (Ot.transition = t);
      }
    }
    return !1;
  }
  function Vf(e, t, n) {
    (t = dr(n, t)),
      (t = af(e, t, 1)),
      (e = Sn(e, t, 1)),
      (t = st()),
      e !== null && ($r(e, 1, t), dt(e, t));
  }
  function De(e, t, n) {
    if (e.tag === 3) Vf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Cn === null || !Cn.has(i)))
          ) {
            (e = dr(n, e)),
              (e = uf(t, e, 1)),
              (t = Sn(t, e, 1)),
              (e = st()),
              t !== null && ($r(t, 1, e), dt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function _h(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (t = st()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ge === e &&
        (Je & n) === n &&
        (Qe === 4 || (Qe === 3 && (Je & 130023424) === Je && 500 > Be() - ta)
          ? Bn(e, 0)
          : (ea |= n)),
      dt(e, t);
  }
  function Wf(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Uo), (Uo <<= 1), !(Uo & 130023424) && (Uo = 4194304))
        : (t = 1));
    var n = st();
    (e = tn(e, t)), e !== null && ($r(e, t, n), dt(e, n));
  }
  function Ph(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Wf(e, n);
  }
  function Rh(e, t) {
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
    i !== null && i.delete(t), Wf(e, n);
  }
  var Kf;
  Kf = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || at.current) ct = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (ct = !1), hh(e, t, n);
        ct = !!(e.flags & 131072);
      }
    else (ct = !1), Ne && t.flags & 1048576 && Ec(t, ui, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type;
        Ei(e, t), (e = t.pendingProps);
        var s = or(t, et.current);
        cr(t, n), (s = Ls(null, t, i, e, s, n));
        var c = zs();
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
              Ts(t),
              (s.updater = Ci),
              (t.stateNode = s),
              (s._reactInternals = t),
              Bs(t, i, e, n),
              (t = Hs(null, t, i, !0, c, n)))
            : ((t.tag = 0), Ne && c && hs(t), lt(null, t, s, n), (t = t.child)),
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
            (s = t.tag = Ah(i)),
            (e = It(i, e)),
            s)
          ) {
            case 0:
              t = bs(null, t, i, e, n);
              break e;
            case 1:
              t = vf(null, t, i, e, n);
              break e;
            case 11:
              t = pf(null, t, i, e, n);
              break e;
            case 14:
              t = mf(null, t, i, It(i.type, e), n);
              break e;
          }
          throw Error(l(306, i, ""));
        }
        return t;
      case 0:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : It(i, s)),
          bs(e, t, i, s, n)
        );
      case 1:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : It(i, s)),
          vf(e, t, i, s, n)
        );
      case 3:
        e: {
          if ((wf(t), e === null)) throw Error(l(387));
          (i = t.pendingProps),
            (c = t.memoizedState),
            (s = c.element),
            zc(e, t),
            hi(t, i, null, n);
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
              (s = dr(Error(l(423)), t)), (t = Sf(e, t, i, n, s));
              break e;
            } else if (i !== s) {
              (s = dr(Error(l(424)), t)), (t = Sf(e, t, i, n, s));
              break e;
            } else
              for (
                wt = hn(t.stateNode.containerInfo.firstChild),
                  vt = t,
                  Ne = !0,
                  Dt = null,
                  n = Nc(t, null, i, n),
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
          e === null && vs(t),
          (i = t.type),
          (s = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (d = s.children),
          us(i, s) ? (d = null) : c !== null && us(i, c) && (t.flags |= 32),
          yf(e, t),
          lt(e, t, d, n),
          t.child
        );
      case 6:
        return e === null && vs(t), null;
      case 13:
        return kf(e, t, n);
      case 4:
        return (
          _s(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = ar(t, null, i, n)) : lt(e, t, i, n),
          t.child
        );
      case 11:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : It(i, s)),
          pf(e, t, i, s, n)
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
            Ee(di, i._currentValue),
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
                        var R = c.updateQueue;
                        if (R !== null) {
                          R = R.shared;
                          var D = R.pending;
                          D === null
                            ? (y.next = y)
                            : ((y.next = D.next), (D.next = y)),
                            (R.pending = y);
                        }
                      }
                      (c.lanes |= n),
                        (y = c.alternate),
                        y !== null && (y.lanes |= n),
                        xs(c.return, n, t),
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
                    xs(d, n, t),
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
          (s = It(i, t.pendingProps)),
          (s = It(i.type, s)),
          mf(e, t, i, s, n)
        );
      case 15:
        return hf(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (i = t.type),
          (s = t.pendingProps),
          (s = t.elementType === i ? s : It(i, s)),
          Ei(e, t),
          (t.tag = 1),
          ut(i) ? ((e = !0), li(t)) : (e = !1),
          cr(t, n),
          lf(t, i, s),
          Bs(t, i, s, n),
          Hs(null, t, i, !0, e, n)
        );
      case 19:
        return xf(e, t, n);
      case 22:
        return gf(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function Qf(e, t) {
    return Tu(e, t);
  }
  function Oh(e, t, n, i) {
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
    return new Oh(e, t, n, i);
  }
  function ua(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ah(e) {
    if (typeof e == "function") return ua(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === re)) return 11;
      if (e === je) return 14;
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
    if (((i = e), typeof e == "function")) ua(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else
      e: switch (e) {
        case W:
          return Un(n.children, s, c, t);
        case ce:
          (d = 8), (s |= 8);
          break;
        case ye:
          return (
            (e = At(12, n, t, s | 2)), (e.elementType = ye), (e.lanes = c), e
          );
        case le:
          return (e = At(13, n, t, s)), (e.elementType = le), (e.lanes = c), e;
        case Se:
          return (e = At(19, n, t, s)), (e.elementType = Se), (e.lanes = c), e;
        case _e:
          return Ii(n, s, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case h:
                d = 10;
                break e;
              case G:
                d = 9;
                break e;
              case re:
                d = 11;
                break e;
              case je:
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
  function Ii(e, t, n, i) {
    return (
      (e = At(22, e, i, t)),
      (e.elementType = _e),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ca(e, t, n) {
    return (e = At(6, e, null, t)), (e.lanes = n), e;
  }
  function fa(e, t, n) {
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
  function Nh(e, t, n, i, s) {
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
      (this.eventTimes = jl(0)),
      (this.expirationTimes = jl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = jl(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null);
  }
  function da(e, t, n, i, s, c, d, g, y) {
    return (
      (e = new Nh(e, t, n, g, y)),
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
      Ts(c),
      e
    );
  }
  function Lh(e, t, n) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: J,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function qf(e) {
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
      if (ut(n)) return kc(e, n, t);
    }
    return t;
  }
  function Gf(e, t, n, i, s, c, d, g, y) {
    return (
      (e = da(n, i, !0, e, s, c, d, g, y)),
      (e.context = qf(null)),
      (n = e.current),
      (i = st()),
      (s = En(n)),
      (c = nn(i, s)),
      (c.callback = t ?? null),
      Sn(n, c, s),
      (e.current.lanes = s),
      $r(e, s, i),
      dt(e, i),
      e
    );
  }
  function $i(e, t, n, i) {
    var s = t.current,
      c = st(),
      d = En(s);
    return (
      (n = qf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = nn(c, d)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = Sn(s, t, d)),
      e !== null && (Bt(e, s, d, c), mi(e, s, d)),
      d
    );
  }
  function ji(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Xf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function pa(e, t) {
    Xf(e, t), (e = e.alternate) && Xf(e, t);
  }
  function zh() {
    return null;
  }
  var Yf =
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
      $i(e, t, null, null);
    }),
    (Bi.prototype.unmount = ma.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          jn(function () {
            $i(null, e, null, null);
          }),
            (t[Yt] = null);
        }
      });
  function Bi(e) {
    this._internalRoot = e;
  }
  Bi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = zu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
      dn.splice(n, 0, e), n === 0 && Iu(e);
    }
  };
  function ha(e) {
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
  function Jf() {}
  function Fh(e, t, n, i, s) {
    if (s) {
      if (typeof i == "function") {
        var c = i;
        i = function () {
          var R = ji(d);
          c.call(R);
        };
      }
      var d = Gf(t, i, e, 0, null, !1, !1, "", Jf);
      return (
        (e._reactRootContainer = d),
        (e[Yt] = d.current),
        Yr(e.nodeType === 8 ? e.parentNode : e),
        jn(),
        d
      );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof i == "function") {
      var g = i;
      i = function () {
        var R = ji(y);
        g.call(R);
      };
    }
    var y = da(e, 0, !1, null, null, !1, !1, "", Jf);
    return (
      (e._reactRootContainer = y),
      (e[Yt] = y.current),
      Yr(e.nodeType === 8 ? e.parentNode : e),
      jn(function () {
        $i(t, y, n, i);
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
          var y = ji(d);
          g.call(y);
        };
      }
      $i(t, d, e, s);
    } else d = Fh(n, t, e, s, i);
    return ji(d);
  }
  (Nu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Ir(t.pendingLanes);
          n !== 0 &&
            (Bl(t, n | 1), dt(t, Be()), !(fe & 6) && ((hr = Be() + 500), vn()));
        }
        break;
      case 13:
        jn(function () {
          var i = tn(e, 1);
          if (i !== null) {
            var s = st();
            Bt(i, e, 1, s);
          }
        }),
          pa(e, 1);
    }
  }),
    (Ml = function (e) {
      if (e.tag === 13) {
        var t = tn(e, 134217728);
        if (t !== null) {
          var n = st();
          Bt(t, e, 134217728, n);
        }
        pa(e, 134217728);
      }
    }),
    (Lu = function (e) {
      if (e.tag === 13) {
        var t = En(e),
          n = tn(e, t);
        if (n !== null) {
          var i = st();
          Bt(n, e, t, i);
        }
        pa(e, t);
      }
    }),
    (zu = function () {
      return we;
    }),
    (Fu = function (e, t) {
      var n = we;
      try {
        return (we = e), t();
      } finally {
        we = n;
      }
    }),
    (Ll = function (e, t, n) {
      switch (t) {
        case "input":
          if ((El(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                ou(i), El(i, s);
              }
            }
          }
          break;
        case "textarea":
          uu(e, n);
          break;
        case "select":
          (t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
      }
    }),
    (vu = la),
    (wu = jn);
  var Dh = { usingClientEntryPoint: !1, Events: [eo, nr, oi, gu, yu, la] },
    ho = {
      findFiberByHostInstance: An,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Ih = {
      bundleType: ho.bundleType,
      version: ho.version,
      rendererPackageName: ho.rendererPackageName,
      rendererConfig: ho.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: b.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = xu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ho.findFiberByHostInstance || zh,
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
        (Bo = bi.inject(Ih)), (Ut = bi);
      } catch {}
  }
  return (
    (pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dh),
    (pt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ha(t)) throw Error(l(200));
      return Lh(e, t, null, n);
    }),
    (pt.createRoot = function (e, t) {
      if (!ha(e)) throw Error(l(299));
      var n = !1,
        i = "",
        s = Yf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = da(e, 1, !1, null, null, n, !1, i, s)),
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
      return (e = xu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (pt.flushSync = function (e) {
      return jn(e);
    }),
    (pt.hydrate = function (e, t, n) {
      if (!Mi(t)) throw Error(l(200));
      return Ui(null, e, t, !0, n);
    }),
    (pt.hydrateRoot = function (e, t, n) {
      if (!ha(e)) throw Error(l(405));
      var i = (n != null && n.hydratedSources) || null,
        s = !1,
        c = "",
        d = Yf;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (t = Gf(t, null, e, 1, n ?? null, s, !1, c, d)),
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
        ? (jn(function () {
            Ui(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Yt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (pt.unstable_batchedUpdates = la),
    (pt.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
      if (!Mi(n)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return Ui(e, t, n, !1, i);
    }),
    (pt.version = "18.3.1-next-f1338f8080-20240426"),
    pt
  );
}
var ld;
function Kh() {
  if (ld) return va.exports;
  ld = 1;
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
  return r(), (va.exports = Wh()), va.exports;
}
var sd;
function Qh() {
  if (sd) return Hi;
  sd = 1;
  var r = Kh();
  return (Hi.createRoot = r.createRoot), (Hi.hydrateRoot = r.hydrateRoot), Hi;
}
var qh = Qh(),
  Oe = ba();
const Gh = Bh(Oe),
  ad = jh({ __proto__: null, default: Gh }, [Oe]);
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
function Wd(r) {
  if (Oe.isValidElement(r) || !sn(r)) return r;
  const o = {};
  return (
    Object.keys(r).forEach((l) => {
      o[l] = Wd(r[l]);
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
        Oe.isValidElement(o[u])
          ? (a[u] = o[u])
          : sn(o[u]) && Object.prototype.hasOwnProperty.call(r, u) && sn(r[u])
          ? (a[u] = Ct(r[u], o[u], l))
          : l.clone
          ? (a[u] = sn(o[u]) ? Wd(o[u]) : o[u])
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
function Oa(r, o) {
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
          for (const m in f)
            if (Object.prototype.hasOwnProperty.call(f, m)) {
              const w = m;
              l[u][w] = Oa(f[w], p[w]);
            }
        }
      } else l[u] === void 0 && (l[u] = r[u]);
    }
  return l;
}
function Xh(r, o, l = void 0) {
  const a = {};
  for (const u in r) {
    const f = r[u];
    let p = "",
      m = !0;
    for (let w = 0; w < f.length; w += 1) {
      const v = f[w];
      v &&
        ((p += (m === !0 ? "" : " ") + o(v)),
        (m = !1),
        l && l[v] && (p += " " + l[v]));
    }
    a[u] = p;
  }
  return a;
}
const ud = (r) => r,
  Yh = () => {
    let r = ud;
    return {
      configure(o) {
        r = o;
      },
      generate(o) {
        return r(o);
      },
      reset() {
        r = ud;
      },
    };
  },
  Jh = Yh(),
  Zh = {
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
function Kd(r, o, l = "Mui") {
  const a = Zh[o];
  return a ? `${l}-${a}` : `${Jh.generate(r)}-${o}`;
}
function e0(r, o, l = "Mui") {
  const a = {};
  return (
    o.forEach((u) => {
      a[u] = Kd(r, u, l);
    }),
    a
  );
}
function t0(r, o = Number.MIN_SAFE_INTEGER, l = Number.MAX_SAFE_INTEGER) {
  return Math.max(o, Math.min(r, l));
}
function Qd(r) {
  var o,
    l,
    a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var u = r.length;
      for (o = 0; o < u; o++)
        r[o] && (l = Qd(r[o])) && (a && (a += " "), (a += l));
    } else for (l in r) r[l] && (a && (a += " "), (a += l));
  return a;
}
function n0() {
  for (var r, o, l = 0, a = "", u = arguments.length; l < u; l++)
    (r = arguments[l]) && (o = Qd(r)) && (a && (a += " "), (a += o));
  return a;
}
function Co(r, o) {
  return o ? Ct(r, o, { clone: !1 }) : r;
}
function r0(r, o) {
  if (!r.containerQueries) return o;
  const l = Object.keys(o)
    .filter((a) => a.startsWith("@container"))
    .sort((a, u) => {
      var p, m;
      const f = /min-width:\s*([0-9.]+)/;
      return (
        +(((p = a.match(f)) == null ? void 0 : p[1]) || 0) -
        +(((m = u.match(f)) == null ? void 0 : m[1]) || 0)
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
function o0(r, o) {
  return (
    o === "@" ||
    (o.startsWith("@") &&
      (r.some((l) => o.startsWith(`@${l}`)) || !!o.match(/^@\d/)))
  );
}
function i0(r, o) {
  const l = o.match(/^@([^/]+)?\/?(.+)?$/);
  if (!l) return null;
  const [, a, u] = l,
    f = Number.isNaN(+a) ? a || 0 : +a;
  return r.containerQueries(u).up(f);
}
function l0(r) {
  const o = (f, p) => f.replace("@media", p ? `@container ${p}` : "@container");
  function l(f, p) {
    (f.up = (...m) => o(r.breakpoints.up(...m), p)),
      (f.down = (...m) => o(r.breakpoints.down(...m), p)),
      (f.between = (...m) => o(r.breakpoints.between(...m), p)),
      (f.only = (...m) => o(r.breakpoints.only(...m), p)),
      (f.not = (...m) => {
        const w = o(r.breakpoints.not(...m), p);
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
  cd = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (r) => `@media (min-width:${il[r]}px)`,
  },
  s0 = {
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
    const f = a.breakpoints || cd;
    return o.reduce((p, m, w) => ((p[f.up(f.keys[w])] = l(o[w])), p), {});
  }
  if (typeof o == "object") {
    const f = a.breakpoints || cd;
    return Object.keys(o).reduce((p, m) => {
      if (o0(f.keys, m)) {
        const w = i0(a.containerQueries ? a : s0, m);
        w && (p[w] = l(o[m], m));
      } else if (Object.keys(f.values || il).includes(m)) {
        const w = f.up(m);
        p[w] = l(o[m], m);
      } else {
        const w = m;
        p[w] = o[w];
      }
      return p;
    }, {});
  }
  return l(o);
}
function a0(r = {}) {
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
function u0(r, o) {
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
      const m = p[o],
        w = p.theme,
        v = ll(w, a) || {};
      return an(p, m, (k) => {
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
function c0(r) {
  const o = {};
  return (l) => (o[l] === void 0 && (o[l] = r(l)), o[l]);
}
const f0 = { m: "margin", p: "padding" },
  d0 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  fd = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  p0 = c0((r) => {
    if (r.length > 2)
      if (fd[r]) r = fd[r];
      else return [r];
    const [o, l] = r.split(""),
      a = f0[o],
      u = d0[l] || "";
    return Array.isArray(u) ? u.map((f) => a + f) : [a + u];
  }),
  Ha = [
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
  Va = [
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
[...Ha, ...Va];
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
          m = u[p];
        return f >= 0 ? m : typeof m == "number" ? -m : `-${m}`;
      }
    : typeof u == "function"
    ? u
    : () => {};
}
function Wa(r) {
  return Ro(r, "spacing", 8);
}
function Oo(r, o) {
  return typeof o == "string" || o == null ? o : r(o);
}
function m0(r, o) {
  return (l) => r.reduce((a, u) => ((a[u] = Oo(o, l)), a), {});
}
function h0(r, o, l, a) {
  if (!o.includes(l)) return null;
  const u = p0(l),
    f = m0(u, a),
    p = r[l];
  return an(r, p, f);
}
function qd(r, o) {
  const l = Wa(r.theme);
  return Object.keys(r)
    .map((a) => h0(r, o, a, l))
    .reduce(Co, {});
}
function Ie(r) {
  return qd(r, Ha);
}
Ie.propTypes = {};
Ie.filterProps = Ha;
function $e(r) {
  return qd(r, Va);
}
$e.propTypes = {};
$e.filterProps = Va;
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
const g0 = Lt("border", Nt),
  y0 = Lt("borderTop", Nt),
  v0 = Lt("borderRight", Nt),
  w0 = Lt("borderBottom", Nt),
  S0 = Lt("borderLeft", Nt),
  k0 = Lt("borderColor"),
  C0 = Lt("borderTopColor"),
  x0 = Lt("borderRightColor"),
  E0 = Lt("borderBottomColor"),
  T0 = Lt("borderLeftColor"),
  _0 = Lt("outline", Nt),
  P0 = Lt("outlineColor"),
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
sl(g0, y0, v0, w0, S0, k0, C0, x0, E0, T0, al, _0, P0);
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
const R0 = Ue({ prop: "gridColumn" }),
  O0 = Ue({ prop: "gridRow" }),
  A0 = Ue({ prop: "gridAutoFlow" }),
  N0 = Ue({ prop: "gridAutoColumns" }),
  L0 = Ue({ prop: "gridAutoRows" }),
  z0 = Ue({ prop: "gridTemplateColumns" }),
  F0 = Ue({ prop: "gridTemplateRows" }),
  D0 = Ue({ prop: "gridTemplateAreas" }),
  I0 = Ue({ prop: "gridArea" });
sl(ul, cl, fl, R0, O0, A0, N0, L0, z0, F0, D0, I0);
function Cr(r, o) {
  return o === "grey" ? o : r;
}
const $0 = Ue({ prop: "color", themeKey: "palette", transform: Cr }),
  j0 = Ue({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Cr,
  }),
  B0 = Ue({ prop: "backgroundColor", themeKey: "palette", transform: Cr });
sl($0, j0, B0);
function kt(r) {
  return r <= 1 && r !== 0 ? `${r * 100}%` : r;
}
const M0 = Ue({ prop: "width", transform: kt }),
  Ka = (r) => {
    if (r.maxWidth !== void 0 && r.maxWidth !== null) {
      const o = (l) => {
        var u, f, p, m, w;
        const a =
          ((p =
            (f = (u = r.theme) == null ? void 0 : u.breakpoints) == null
              ? void 0
              : f.values) == null
            ? void 0
            : p[l]) || il[l];
        return a
          ? ((w = (m = r.theme) == null ? void 0 : m.breakpoints) == null
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
Ka.filterProps = ["maxWidth"];
const U0 = Ue({ prop: "minWidth", transform: kt }),
  b0 = Ue({ prop: "height", transform: kt }),
  H0 = Ue({ prop: "maxHeight", transform: kt }),
  V0 = Ue({ prop: "minHeight", transform: kt });
Ue({ prop: "size", cssProperty: "width", transform: kt });
Ue({ prop: "size", cssProperty: "height", transform: kt });
const W0 = Ue({ prop: "boxSizing" });
sl(M0, Ka, U0, b0, H0, V0, W0);
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
  p: { style: $e },
  pt: { style: $e },
  pr: { style: $e },
  pb: { style: $e },
  pl: { style: $e },
  px: { style: $e },
  py: { style: $e },
  padding: { style: $e },
  paddingTop: { style: $e },
  paddingRight: { style: $e },
  paddingBottom: { style: $e },
  paddingLeft: { style: $e },
  paddingX: { style: $e },
  paddingY: { style: $e },
  paddingInline: { style: $e },
  paddingInlineStart: { style: $e },
  paddingInlineEnd: { style: $e },
  paddingBlock: { style: $e },
  paddingBlockStart: { style: $e },
  paddingBlockEnd: { style: $e },
  m: { style: Ie },
  mt: { style: Ie },
  mr: { style: Ie },
  mb: { style: Ie },
  ml: { style: Ie },
  mx: { style: Ie },
  my: { style: Ie },
  margin: { style: Ie },
  marginTop: { style: Ie },
  marginRight: { style: Ie },
  marginBottom: { style: Ie },
  marginLeft: { style: Ie },
  marginX: { style: Ie },
  marginY: { style: Ie },
  marginInline: { style: Ie },
  marginInlineStart: { style: Ie },
  marginInlineEnd: { style: Ie },
  marginBlock: { style: Ie },
  marginBlockStart: { style: Ie },
  marginBlockEnd: { style: Ie },
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
  maxWidth: { style: Ka },
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
function K0(...r) {
  const o = r.reduce((a, u) => a.concat(Object.keys(u)), []),
    l = new Set(o);
  return r.every((a) => l.size === Object.keys(a).length);
}
function Q0(r, o) {
  return typeof r == "function" ? r(o) : r;
}
function q0() {
  function r(l, a, u, f) {
    const p = { [l]: a, theme: u },
      m = f[l];
    if (!m) return { [l]: a };
    const { cssProperty: w = l, themeKey: v, transform: C, style: k } = m;
    if (a == null) return null;
    if (v === "typography" && a === "inherit") return { [l]: a };
    const O = ll(u, v) || {};
    return k
      ? k(p)
      : an(p, a, (P) => {
          let _ = el(O, C, P);
          return (
            P === _ &&
              typeof P == "string" &&
              (_ = el(O, C, `${l}${P === "default" ? "" : Er(P)}`, P)),
            w === !1 ? _ : { [w]: _ }
          );
        });
  }
  function o(l) {
    const { sx: a, theme: u = {} } = l || {};
    if (!a) return null;
    const f = u.unstable_sxConfig ?? dl;
    function p(m) {
      let w = m;
      if (typeof m == "function") w = m(u);
      else if (typeof m != "object") return m;
      if (!w) return null;
      const v = a0(u.breakpoints),
        C = Object.keys(v);
      let k = v;
      return (
        Object.keys(w).forEach((O) => {
          const $ = Q0(w[O], u);
          if ($ != null)
            if (typeof $ == "object")
              if (f[O]) k = Co(k, r(O, $, u, f));
              else {
                const P = an({ theme: u }, $, (_) => ({ [O]: _ }));
                K0(P, $) ? (k[O] = o({ sx: $, theme: u })) : (k = Co(k, P));
              }
            else k = Co(k, r(O, $, u, f));
        }),
        r0(u, u0(C, k))
      );
    }
    return Array.isArray(a) ? a.map(p) : p(a);
  }
  return o;
}
const Tr = q0();
Tr.filterProps = ["sx"];
function Aa() {
  return (
    (Aa = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var a in l) ({}).hasOwnProperty.call(l, a) && (r[a] = l[a]);
          }
          return r;
        }),
    Aa.apply(null, arguments)
  );
}
function Gd(r) {
  var o = Object.create(null);
  return function (l) {
    return o[l] === void 0 && (o[l] = r(l)), o[l];
  };
}
var G0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  X0 = Gd(function (r) {
    return (
      G0.test(r) ||
      (r.charCodeAt(0) === 111 &&
        r.charCodeAt(1) === 110 &&
        r.charCodeAt(2) < 91)
    );
  }),
  Y0 = !1;
function J0(r) {
  if (r.sheet) return r.sheet;
  for (var o = 0; o < document.styleSheets.length; o++)
    if (document.styleSheets[o].ownerNode === r) return document.styleSheets[o];
}
function Z0(r) {
  var o = document.createElement("style");
  return (
    o.setAttribute("data-emotion", r.key),
    r.nonce !== void 0 && o.setAttribute("nonce", r.nonce),
    o.appendChild(document.createTextNode("")),
    o.setAttribute("data-s", ""),
    o
  );
}
var eg = (function () {
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
        (this.isSpeedy = l.speedy === void 0 ? !Y0 : l.speedy),
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
          this._insertTag(Z0(this));
        var u = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = J0(u);
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
  he = "-webkit-",
  Xd = "comm",
  Qa = "rule",
  qa = "decl",
  tg = "@import",
  Yd = "@keyframes",
  ng = "@layer",
  rg = Math.abs,
  pl = String.fromCharCode,
  og = Object.assign;
function ig(r, o) {
  return Ze(r, 0) ^ 45
    ? (((((((o << 2) ^ Ze(r, 0)) << 2) ^ Ze(r, 1)) << 2) ^ Ze(r, 2)) << 2) ^
        Ze(r, 3)
    : 0;
}
function Jd(r) {
  return r.trim();
}
function lg(r, o) {
  return (r = o.exec(r)) ? r[0] : r;
}
function ge(r, o, l) {
  return r.replace(o, l);
}
function Na(r, o) {
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
function Ga(r) {
  return r.length;
}
function Vi(r, o) {
  return o.push(r), r;
}
function sg(r, o) {
  return r.map(o).join("");
}
var ml = 1,
  _r = 1,
  Zd = 0,
  ht = 0,
  Ve = 0,
  Pr = "";
function hl(r, o, l, a, u, f, p) {
  return {
    value: r,
    root: o,
    parent: l,
    type: a,
    props: u,
    children: f,
    line: ml,
    column: _r,
    length: p,
    return: "",
  };
}
function yo(r, o) {
  return og(hl("", null, null, "", null, null, 0), r, { length: -r.length }, o);
}
function ag() {
  return Ve;
}
function ug() {
  return (
    (Ve = ht > 0 ? Ze(Pr, --ht) : 0), _r--, Ve === 10 && ((_r = 1), ml--), Ve
  );
}
function xt() {
  return (
    (Ve = ht < Zd ? Ze(Pr, ht++) : 0), _r++, Ve === 10 && ((_r = 1), ml++), Ve
  );
}
function Xt() {
  return Ze(Pr, ht);
}
function Qi() {
  return ht;
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
function ep(r) {
  return (ml = _r = 1), (Zd = qt((Pr = r))), (ht = 0), [];
}
function tp(r) {
  return (Pr = ""), r;
}
function qi(r) {
  return Jd(Ao(ht - 1, La(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function cg(r) {
  for (; (Ve = Xt()) && Ve < 33; ) xt();
  return Eo(r) > 2 || Eo(Ve) > 3 ? "" : " ";
}
function fg(r, o) {
  for (
    ;
    --o &&
    xt() &&
    !(Ve < 48 || Ve > 102 || (Ve > 57 && Ve < 65) || (Ve > 70 && Ve < 97));

  );
  return Ao(r, Qi() + (o < 6 && Xt() == 32 && xt() == 32));
}
function La(r) {
  for (; xt(); )
    switch (Ve) {
      case r:
        return ht;
      case 34:
      case 39:
        r !== 34 && r !== 39 && La(Ve);
        break;
      case 40:
        r === 41 && La(r);
        break;
      case 92:
        xt();
        break;
    }
  return ht;
}
function dg(r, o) {
  for (; xt() && r + Ve !== 57; ) if (r + Ve === 84 && Xt() === 47) break;
  return "/*" + Ao(o, ht - 1) + "*" + pl(r === 47 ? r : xt());
}
function pg(r) {
  for (; !Eo(Xt()); ) xt();
  return Ao(r, ht);
}
function mg(r) {
  return tp(Gi("", null, null, null, [""], (r = ep(r)), 0, [0], r));
}
function Gi(r, o, l, a, u, f, p, m, w) {
  for (
    var v = 0,
      C = 0,
      k = p,
      O = 0,
      $ = 0,
      P = 0,
      _ = 1,
      N = 1,
      B = 1,
      q = 0,
      M = "",
      b = u,
      V = f,
      J = a,
      W = M;
    N;

  )
    switch (((P = q), (q = xt()))) {
      case 40:
        if (P != 108 && Ze(W, k - 1) == 58) {
          Na((W += ge(qi(q), "&", "&\f")), "&\f") != -1 && (B = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        W += qi(q);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        W += cg(P);
        break;
      case 92:
        W += fg(Qi() - 1, 7);
        continue;
      case 47:
        switch (Xt()) {
          case 42:
          case 47:
            Vi(hg(dg(xt(), Qi()), o, l), w);
            break;
          default:
            W += "/";
        }
        break;
      case 123 * _:
        m[v++] = qt(W) * B;
      case 125 * _:
      case 59:
      case 0:
        switch (q) {
          case 0:
          case 125:
            N = 0;
          case 59 + C:
            B == -1 && (W = ge(W, /\f/g, "")),
              $ > 0 &&
                qt(W) - k &&
                Vi(
                  $ > 32
                    ? pd(W + ";", a, l, k - 1)
                    : pd(ge(W, " ", "") + ";", a, l, k - 2),
                  w
                );
            break;
          case 59:
            W += ";";
          default:
            if (
              (Vi((J = dd(W, o, l, v, C, u, m, M, (b = []), (V = []), k)), f),
              q === 123)
            )
              if (C === 0) Gi(W, o, J, J, b, f, k, m, V);
              else
                switch (O === 99 && Ze(W, 3) === 110 ? 100 : O) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gi(
                      r,
                      J,
                      J,
                      a && Vi(dd(r, J, J, 0, 0, u, m, M, u, (b = []), k), V),
                      u,
                      V,
                      k,
                      m,
                      a ? b : V
                    );
                    break;
                  default:
                    Gi(W, J, J, J, [""], V, 0, m, V);
                }
        }
        (v = C = $ = 0), (_ = B = 1), (M = W = ""), (k = p);
        break;
      case 58:
        (k = 1 + qt(W)), ($ = P);
      default:
        if (_ < 1) {
          if (q == 123) --_;
          else if (q == 125 && _++ == 0 && ug() == 125) continue;
        }
        switch (((W += pl(q)), q * _)) {
          case 38:
            B = C > 0 ? 1 : ((W += "\f"), -1);
            break;
          case 44:
            (m[v++] = (qt(W) - 1) * B), (B = 1);
            break;
          case 64:
            Xt() === 45 && (W += qi(xt())),
              (O = Xt()),
              (C = k = qt((M = W += pg(Qi())))),
              q++;
            break;
          case 45:
            P === 45 && qt(W) == 2 && (_ = 0);
        }
    }
  return f;
}
function dd(r, o, l, a, u, f, p, m, w, v, C) {
  for (
    var k = u - 1, O = u === 0 ? f : [""], $ = Ga(O), P = 0, _ = 0, N = 0;
    P < a;
    ++P
  )
    for (var B = 0, q = xo(r, k + 1, (k = rg((_ = p[P])))), M = r; B < $; ++B)
      (M = Jd(_ > 0 ? O[B] + " " + q : ge(q, /&\f/g, O[B]))) && (w[N++] = M);
  return hl(r, o, l, u === 0 ? Qa : m, w, v, C);
}
function hg(r, o, l) {
  return hl(r, o, l, Xd, pl(ag()), xo(r, 2, -2), 0);
}
function pd(r, o, l, a) {
  return hl(r, o, l, qa, xo(r, 0, a), xo(r, a + 1, -1), a);
}
function xr(r, o) {
  for (var l = "", a = Ga(r), u = 0; u < a; u++) l += o(r[u], u, r, o) || "";
  return l;
}
function gg(r, o, l, a) {
  switch (r.type) {
    case ng:
      if (r.children.length) break;
    case tg:
    case qa:
      return (r.return = r.return || r.value);
    case Xd:
      return "";
    case Yd:
      return (r.return = r.value + "{" + xr(r.children, a) + "}");
    case Qa:
      r.value = r.props.join(",");
  }
  return qt((l = xr(r.children, a)))
    ? (r.return = r.value + "{" + l + "}")
    : "";
}
function yg(r) {
  var o = Ga(r);
  return function (l, a, u, f) {
    for (var p = "", m = 0; m < o; m++) p += r[m](l, a, u, f) || "";
    return p;
  };
}
function vg(r) {
  return function (o) {
    o.root || ((o = o.return) && r(o));
  };
}
var wg = function (o, l, a) {
    for (
      var u = 0, f = 0;
      (u = f), (f = Xt()), u === 38 && f === 12 && (l[a] = 1), !Eo(f);

    )
      xt();
    return Ao(o, ht);
  },
  Sg = function (o, l) {
    var a = -1,
      u = 44;
    do
      switch (Eo(u)) {
        case 0:
          u === 38 && Xt() === 12 && (l[a] = 1), (o[a] += wg(ht - 1, l, a));
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
  kg = function (o, l) {
    return tp(Sg(ep(o), l));
  },
  md = new WeakMap(),
  Cg = function (o) {
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
          var f = [], p = kg(l, f), m = a.props, w = 0, v = 0;
          w < p.length;
          w++
        )
          for (var C = 0; C < m.length; C++, v++)
            o.props[v] = f[w] ? p[w].replace(/&\f/g, m[C]) : m[C] + " " + p[w];
      }
    }
  },
  xg = function (o) {
    if (o.type === "decl") {
      var l = o.value;
      l.charCodeAt(0) === 108 &&
        l.charCodeAt(2) === 98 &&
        ((o.return = ""), (o.value = ""));
    }
  };
function np(r, o) {
  switch (ig(r, o)) {
    case 5103:
      return he + "print-" + r + r;
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
      return he + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + r + tl + r + ot + r + r;
    case 6828:
    case 4268:
      return he + r + ot + r + r;
    case 6165:
      return he + r + ot + "flex-" + r + r;
    case 5187:
      return (
        he + r + ge(r, /(\w+).+(:[^]+)/, he + "box-$1$2" + ot + "flex-$1$2") + r
      );
    case 5443:
      return he + r + ot + "flex-item-" + ge(r, /flex-|-self/, "") + r;
    case 4675:
      return (
        he +
        r +
        ot +
        "flex-line-pack" +
        ge(r, /align-content|flex-|-self/, "") +
        r
      );
    case 5548:
      return he + r + ot + ge(r, "shrink", "negative") + r;
    case 5292:
      return he + r + ot + ge(r, "basis", "preferred-size") + r;
    case 6060:
      return (
        he +
        "box-" +
        ge(r, "-grow", "") +
        he +
        r +
        ot +
        ge(r, "grow", "positive") +
        r
      );
    case 4554:
      return he + ge(r, /([^-])(transform)/g, "$1" + he + "$2") + r;
    case 6187:
      return (
        ge(
          ge(ge(r, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"),
          r,
          ""
        ) + r
      );
    case 5495:
    case 3959:
      return ge(r, /(image-set\([^]*)/, he + "$1$`$1");
    case 4968:
      return (
        ge(
          ge(r, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + ot + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        he +
        r +
        r
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ge(r, /(.+)-inline(.+)/, he + "$1$2") + r;
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
              ge(
                r,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  he +
                  "$2-$3$1" +
                  tl +
                  (Ze(r, o + 3) == 108 ? "$3" : "$2-$3")
              ) + r
            );
          case 115:
            return ~Na(r, "stretch")
              ? np(ge(r, "stretch", "fill-available"), o) + r
              : r;
        }
      break;
    case 4949:
      if (Ze(r, o + 1) !== 115) break;
    case 6444:
      switch (Ze(r, qt(r) - 3 - (~Na(r, "!important") && 10))) {
        case 107:
          return ge(r, ":", ":" + he) + r;
        case 101:
          return (
            ge(
              r,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                he +
                (Ze(r, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                he +
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
          return he + r + ot + ge(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return he + r + ot + ge(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return he + r + ot + ge(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
      return he + r + ot + r + r;
  }
  return r;
}
var Eg = function (o, l, a, u) {
    if (o.length > -1 && !o.return)
      switch (o.type) {
        case qa:
          o.return = np(o.value, o.length);
          break;
        case Yd:
          return xr([yo(o, { value: ge(o.value, "@", "@" + he) })], u);
        case Qa:
          if (o.length)
            return sg(o.props, function (f) {
              switch (lg(f, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return xr(
                    [yo(o, { props: [ge(f, /:(read-\w+)/, ":" + tl + "$1")] })],
                    u
                  );
                case "::placeholder":
                  return xr(
                    [
                      yo(o, {
                        props: [ge(f, /:(plac\w+)/, ":" + he + "input-$1")],
                      }),
                      yo(o, { props: [ge(f, /:(plac\w+)/, ":" + tl + "$1")] }),
                      yo(o, { props: [ge(f, /:(plac\w+)/, ot + "input-$1")] }),
                    ],
                    u
                  );
              }
              return "";
            });
      }
  },
  Tg = [Eg],
  _g = function (o) {
    var l = o.key;
    if (l === "css") {
      var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(a, function (_) {
        var N = _.getAttribute("data-emotion");
        N.indexOf(" ") !== -1 &&
          (document.head.appendChild(_), _.setAttribute("data-s", ""));
      });
    }
    var u = o.stylisPlugins || Tg,
      f = {},
      p,
      m = [];
    (p = o.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + l + ' "]'),
        function (_) {
          for (
            var N = _.getAttribute("data-emotion").split(" "), B = 1;
            B < N.length;
            B++
          )
            f[N[B]] = !0;
          m.push(_);
        }
      );
    var w,
      v = [Cg, xg];
    {
      var C,
        k = [
          gg,
          vg(function (_) {
            C.insert(_);
          }),
        ],
        O = yg(v.concat(u, k)),
        $ = function (N) {
          return xr(mg(N), O);
        };
      w = function (N, B, q, M) {
        (C = q),
          $(N ? N + "{" + B.styles + "}" : B.styles),
          M && (P.inserted[B.name] = !0);
      };
    }
    var P = {
      key: l,
      sheet: new eg({
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
    return P.sheet.hydrate(m), P;
  },
  Pg = !0;
function Rg(r, o, l) {
  var a = "";
  return (
    l.split(" ").forEach(function (u) {
      r[u] !== void 0 ? o.push(r[u] + ";") : u && (a += u + " ");
    }),
    a
  );
}
var rp = function (o, l, a) {
    var u = o.key + "-" + l.name;
    (a === !1 || Pg === !1) &&
      o.registered[u] === void 0 &&
      (o.registered[u] = l.styles);
  },
  Og = function (o, l, a) {
    rp(o, l, a);
    var u = o.key + "-" + l.name;
    if (o.inserted[l.name] === void 0) {
      var f = l;
      do o.insert(l === f ? "." + u : "", f, o.sheet, !0), (f = f.next);
      while (f !== void 0);
    }
  };
function Ag(r) {
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
var Ng = {
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
  Lg = !1,
  zg = /[A-Z]|^ms/g,
  Fg = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  op = function (o) {
    return o.charCodeAt(1) === 45;
  },
  hd = function (o) {
    return o != null && typeof o != "boolean";
  },
  ka = Gd(function (r) {
    return op(r) ? r : r.replace(zg, "-$&").toLowerCase();
  }),
  gd = function (o, l) {
    switch (o) {
      case "animation":
      case "animationName":
        if (typeof l == "string")
          return l.replace(Fg, function (a, u, f) {
            return (Gt = { name: u, styles: f, next: Gt }), u;
          });
    }
    return Ng[o] !== 1 && !op(o) && typeof l == "number" && l !== 0
      ? l + "px"
      : l;
  },
  Dg =
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
        var m = f.styles + ";";
        return m;
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
        var m = p;
        o != null && o[m] !== void 0
          ? (a += f + "{" + o[m] + "}")
          : hd(m) && (a += ka(f) + ":" + gd(f, m) + ";");
      } else {
        if (f === "NO_COMPONENT_SELECTOR" && Lg) throw new Error(Dg);
        if (
          Array.isArray(p) &&
          typeof p[0] == "string" &&
          (o == null || o[p[0]] === void 0)
        )
          for (var w = 0; w < p.length; w++)
            hd(p[w]) && (a += ka(f) + ":" + gd(f, p[w]) + ";");
        else {
          var v = To(r, o, p);
          switch (f) {
            case "animation":
            case "animationName": {
              a += ka(f) + ":" + v + ";";
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
var yd = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Gt;
function ip(r, o, l) {
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
  for (var m = 1; m < r.length; m++)
    if (((u += To(l, o, r[m])), a)) {
      var w = f;
      u += w[m];
    }
  yd.lastIndex = 0;
  for (var v = "", C; (C = yd.exec(u)) !== null; ) v += "-" + C[1];
  var k = Ag(u) + v;
  return { name: k, styles: u, next: Gt };
}
var $g = function (o) {
    return o();
  },
  jg = ad.useInsertionEffect ? ad.useInsertionEffect : !1,
  Bg = jg || $g,
  lp = Oe.createContext(typeof HTMLElement < "u" ? _g({ key: "css" }) : null);
lp.Provider;
var Mg = function (o) {
    return Oe.forwardRef(function (l, a) {
      var u = Oe.useContext(lp);
      return o(l, u, a);
    });
  },
  Ug = Oe.createContext({}),
  bg = X0,
  Hg = function (o) {
    return o !== "theme";
  },
  vd = function (o) {
    return typeof o == "string" && o.charCodeAt(0) > 96 ? bg : Hg;
  },
  wd = function (o, l, a) {
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
  Vg = !1,
  Wg = function (o) {
    var l = o.cache,
      a = o.serialized,
      u = o.isStringTag;
    return (
      rp(l, a, u),
      Bg(function () {
        return Og(l, a, u);
      }),
      null
    );
  },
  Kg = function r(o, l) {
    var a = o.__emotion_real === o,
      u = (a && o.__emotion_base) || o,
      f,
      p;
    l !== void 0 && ((f = l.label), (p = l.target));
    var m = wd(o, l, a),
      w = m || vd(u),
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
        for (var O = C.length, $ = 1; $ < O; $++) k.push(C[$], C[0][$]);
      }
      var P = Mg(function (_, N, B) {
        var q = (v && _.as) || u,
          M = "",
          b = [],
          V = _;
        if (_.theme == null) {
          V = {};
          for (var J in _) V[J] = _[J];
          V.theme = Oe.useContext(Ug);
        }
        typeof _.className == "string"
          ? (M = Rg(N.registered, b, _.className))
          : _.className != null && (M = _.className + " ");
        var W = ip(k.concat(b), N.registered, V);
        (M += N.key + "-" + W.name), p !== void 0 && (M += " " + p);
        var ce = v && m === void 0 ? vd(q) : w,
          ye = {};
        for (var h in _) (v && h === "as") || (ce(h) && (ye[h] = _[h]));
        return (
          (ye.className = M),
          B && (ye.ref = B),
          Oe.createElement(
            Oe.Fragment,
            null,
            Oe.createElement(Wg, {
              cache: N,
              serialized: W,
              isStringTag: typeof q == "string",
            }),
            Oe.createElement(q, ye)
          )
        );
      });
      return (
        (P.displayName =
          f !== void 0
            ? f
            : "Styled(" +
              (typeof u == "string"
                ? u
                : u.displayName || u.name || "Component") +
              ")"),
        (P.defaultProps = o.defaultProps),
        (P.__emotion_real = P),
        (P.__emotion_base = u),
        (P.__emotion_styles = k),
        (P.__emotion_forwardProp = m),
        Object.defineProperty(P, "toString", {
          value: function () {
            return p === void 0 && Vg ? "NO_COMPONENT_SELECTOR" : "." + p;
          },
        }),
        (P.withComponent = function (_, N) {
          return r(_, Aa({}, l, N, { shouldForwardProp: wd(P, N, !0) })).apply(
            void 0,
            k
          );
        }),
        P
      );
    };
  },
  Qg = [
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
  za = Kg.bind();
Qg.forEach(function (r) {
  za[r] = za(r);
});
/**
 * @mui/styled-engine v6.1.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function qg(r, o) {
  return za(r, o);
}
function Gg(r, o) {
  Array.isArray(r.__emotion_styles) &&
    (r.__emotion_styles = o(r.__emotion_styles));
}
const Sd = [];
function kd(r) {
  return (Sd[0] = r), ip(Sd);
}
const Xg = (r) => {
  const o = Object.keys(r).map((l) => ({ key: l, val: r[l] })) || [];
  return (
    o.sort((l, a) => l.val - a.val),
    o.reduce((l, a) => ({ ...l, [a.key]: a.val }), {})
  );
};
function Yg(r) {
  const {
      values: o = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: l = "px",
      step: a = 5,
      ...u
    } = r,
    f = Xg(o),
    p = Object.keys(f);
  function m(O) {
    return `@media (min-width:${typeof o[O] == "number" ? o[O] : O}${l})`;
  }
  function w(O) {
    return `@media (max-width:${
      (typeof o[O] == "number" ? o[O] : O) - a / 100
    }${l})`;
  }
  function v(O, $) {
    const P = p.indexOf($);
    return `@media (min-width:${
      typeof o[O] == "number" ? o[O] : O
    }${l}) and (max-width:${
      (P !== -1 && typeof o[p[P]] == "number" ? o[p[P]] : $) - a / 100
    }${l})`;
  }
  function C(O) {
    return p.indexOf(O) + 1 < p.length ? v(O, p[p.indexOf(O) + 1]) : m(O);
  }
  function k(O) {
    const $ = p.indexOf(O);
    return $ === 0
      ? m(p[1])
      : $ === p.length - 1
      ? w(p[$])
      : v(O, p[p.indexOf(O) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: p,
    values: f,
    up: m,
    down: w,
    between: v,
    only: C,
    not: k,
    unit: l,
    ...u,
  };
}
const Jg = { borderRadius: 4 };
function sp(r = 8, o = Wa({ spacing: r })) {
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
function Zg(r, o) {
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
function ap(r = {}, ...o) {
  const {
      breakpoints: l = {},
      palette: a = {},
      spacing: u,
      shape: f = {},
      ...p
    } = r,
    m = Yg(l),
    w = sp(u);
  let v = Ct(
    {
      breakpoints: m,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...a },
      spacing: w,
      shape: { ...Jg, ...f },
    },
    p
  );
  return (
    (v = l0(v)),
    (v.applyStyles = Zg),
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
function up(r) {
  const { variants: o, ...l } = r,
    a = { variants: o, style: kd(l), isProcessed: !0 };
  return (
    a.style === l ||
      (o &&
        o.forEach((u) => {
          typeof u.style != "function" && (u.style = kd(u.style));
        })),
    a
  );
}
const ey = ap();
function Ca(r) {
  return r !== "ownerState" && r !== "theme" && r !== "sx" && r !== "as";
}
function ty(r) {
  return r ? (o, l) => l[r] : null;
}
function ny(r, o, l) {
  r.theme = iy(r.theme) ? l : r.theme[o] || r.theme;
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
    return cp(r, l.variants, [a]);
  }
  return l != null && l.isProcessed ? l.style : l;
}
function cp(r, o, l = []) {
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
      for (const m in p.props)
        if (
          r[m] !== p.props[m] &&
          ((u = r.ownerState) == null ? void 0 : u[m]) !== p.props[m]
        )
          continue e;
    typeof p.style == "function"
      ? (a ?? (a = { ...r, ...r.ownerState, ownerState: r.ownerState }),
        l.push(p.style(a)))
      : l.push(p.style);
  }
  return l;
}
function ry(r = {}) {
  const {
    themeId: o,
    defaultTheme: l = ey,
    rootShouldForwardProp: a = Ca,
    slotShouldForwardProp: u = Ca,
  } = r;
  function f(m) {
    ny(m, o, l);
  }
  return (m, w = {}) => {
    Gg(m, (V) => V.filter((J) => J !== Tr));
    const {
        name: v,
        slot: C,
        skipVariantsResolver: k,
        skipSx: O,
        overridesResolver: $ = ty(sy(C)),
        ...P
      } = w,
      _ = k !== void 0 ? k : (C && C !== "Root" && C !== "root") || !1,
      N = O || !1;
    let B = Ca;
    C === "Root" || C === "root"
      ? (B = a)
      : C
      ? (B = u)
      : ly(m) && (B = void 0);
    const q = qg(m, { shouldForwardProp: B, label: oy(), ...P }),
      M = (V) => {
        if (typeof V == "function" && V.__emotion_real !== V)
          return function (W) {
            return Xi(W, V);
          };
        if (sn(V)) {
          const J = up(V);
          return J.variants
            ? function (ce) {
                return Xi(ce, J);
              }
            : J.style;
        }
        return V;
      },
      b = (...V) => {
        const J = [],
          W = V.map(M),
          ce = [];
        if (
          (J.push(f),
          v &&
            $ &&
            ce.push(function (re) {
              var be, _e;
              const Se =
                (_e = (be = re.theme.components) == null ? void 0 : be[v]) ==
                null
                  ? void 0
                  : _e.styleOverrides;
              if (!Se) return null;
              const je = {};
              for (const U in Se) je[U] = Xi(re, Se[U]);
              return $(re, je);
            }),
          v &&
            !_ &&
            ce.push(function (re) {
              var je, be;
              const le = re.theme,
                Se =
                  (be =
                    (je = le == null ? void 0 : le.components) == null
                      ? void 0
                      : je[v]) == null
                    ? void 0
                    : be.variants;
              return Se ? cp(re, Se) : null;
            }),
          N || ce.push(Tr),
          Array.isArray(W[0]))
        ) {
          const G = W.shift(),
            re = new Array(J.length).fill(""),
            le = new Array(ce.length).fill("");
          let Se;
          (Se = [...re, ...G, ...le]),
            (Se.raw = [...re, ...G.raw, ...le]),
            J.unshift(Se);
        }
        const ye = [...J, ...W, ...ce],
          h = q(...ye);
        return m.muiName && (h.muiName = m.muiName), h;
      };
    return q.withConfig && (b.withConfig = q.withConfig), b;
  };
}
function oy(r, o) {
  return void 0;
}
function iy(r) {
  for (const o in r) return !1;
  return !0;
}
function ly(r) {
  return typeof r == "string" && r.charCodeAt(0) > 96;
}
function sy(r) {
  return r && r.charAt(0).toLowerCase() + r.slice(1);
}
function Xa(r, o = 0, l = 1) {
  return t0(r, o, l);
}
function ay(r) {
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
  if (r.charAt(0) === "#") return Rn(ay(r));
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
const uy = (r) => {
    const o = Rn(r);
    return o.values
      .slice(0, 3)
      .map((l, a) => (o.type.includes("hsl") && a !== 0 ? `${l}%` : l))
      .join(" ");
  },
  So = (r, o) => {
    try {
      return uy(r);
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
function fp(r) {
  r = Rn(r);
  const { values: o } = r,
    l = o[0],
    a = o[1] / 100,
    u = o[2] / 100,
    f = a * Math.min(u, 1 - u),
    p = (v, C = (v + l / 30) % 12) =>
      u - f * Math.max(Math.min(C - 3, 9 - C, 1), -1);
  let m = "rgb";
  const w = [
    Math.round(p(0) * 255),
    Math.round(p(8) * 255),
    Math.round(p(4) * 255),
  ];
  return (
    r.type === "hsla" && ((m += "a"), w.push(o[3])), gl({ type: m, values: w })
  );
}
function Fa(r) {
  r = Rn(r);
  let o = r.type === "hsl" || r.type === "hsla" ? Rn(fp(r)).values : r.values;
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
function cy(r, o) {
  const l = Fa(r),
    a = Fa(o);
  return (Math.max(l, a) + 0.05) / (Math.min(l, a) + 0.05);
}
function fy(r, o) {
  return (
    (r = Rn(r)),
    (o = Xa(o)),
    (r.type === "rgb" || r.type === "hsl") && (r.type += "a"),
    r.type === "color" ? (r.values[3] = `/${o}`) : (r.values[3] = o),
    gl(r)
  );
}
function Wi(r, o, l) {
  try {
    return fy(r, o);
  } catch {
    return r;
  }
}
function Ya(r, o) {
  if (((r = Rn(r)), (o = Xa(o)), r.type.includes("hsl"))) r.values[2] *= 1 - o;
  else if (r.type.includes("rgb") || r.type.includes("color"))
    for (let l = 0; l < 3; l += 1) r.values[l] *= 1 - o;
  return gl(r);
}
function ke(r, o, l) {
  try {
    return Ya(r, o);
  } catch {
    return r;
  }
}
function Ja(r, o) {
  if (((r = Rn(r)), (o = Xa(o)), r.type.includes("hsl")))
    r.values[2] += (100 - r.values[2]) * o;
  else if (r.type.includes("rgb"))
    for (let l = 0; l < 3; l += 1) r.values[l] += (255 - r.values[l]) * o;
  else if (r.type.includes("color"))
    for (let l = 0; l < 3; l += 1) r.values[l] += (1 - r.values[l]) * o;
  return gl(r);
}
function Ce(r, o, l) {
  try {
    return Ja(r, o);
  } catch {
    return r;
  }
}
function dy(r, o = 0.15) {
  return Fa(r) > 0.5 ? Ya(r, o) : Ja(r, o);
}
function Ki(r, o, l) {
  try {
    return dy(r, o);
  } catch {
    return r;
  }
}
const py = Oe.createContext(void 0);
function my(r) {
  const { theme: o, name: l, props: a } = r;
  if (!o || !o.components || !o.components[l]) return a;
  const u = o.components[l];
  return u.defaultProps
    ? Oa(u.defaultProps, a)
    : !u.styleOverrides && !u.variants
    ? Oa(u, a)
    : a;
}
function hy({ props: r, name: o }) {
  const l = Oe.useContext(py);
  return my({ props: r, name: o, theme: { components: l } });
}
const Cd = { theme: void 0 };
function gy(r) {
  let o, l;
  return function (u) {
    let f = o;
    return (
      (f === void 0 || u.theme !== l) &&
        ((Cd.theme = u.theme), (f = up(r(Cd))), (o = f), (l = u.theme)),
      f
    );
  };
}
function yy(r = "") {
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
const xd = (r, o, l, a = []) => {
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
  vy = (r, o, l) => {
    function a(u, f = [], p = []) {
      Object.entries(u).forEach(([m, w]) => {
        (!l || (l && !l([...f, m]))) &&
          w != null &&
          (typeof w == "object" && Object.keys(w).length > 0
            ? a(w, [...f, m], Array.isArray(w) ? [...p, m] : p)
            : o([...f, m], w, p));
      });
    }
    a(r);
  },
  wy = (r, o) =>
    typeof o == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((a) =>
          r.includes(a)
        ) || r[r.length - 1].toLowerCase().includes("opacity")
        ? o
        : `${o}px`
      : o;
function xa(r, o) {
  const { prefix: l, shouldSkipGeneratingVar: a } = o || {},
    u = {},
    f = {},
    p = {};
  return (
    vy(
      r,
      (m, w, v) => {
        if (
          (typeof w == "string" || typeof w == "number") &&
          (!a || !a(m, w))
        ) {
          const C = `--${l ? `${l}-` : ""}${m.join("-")}`,
            k = wy(m, w);
          Object.assign(u, { [C]: k }),
            xd(f, m, `var(${C})`, v),
            xd(p, m, `var(${C}, ${k})`, v);
        }
      },
      (m) => m[0] === "vars"
    ),
    { css: u, vars: f, varsWithDefaults: p }
  );
}
function Sy(r, o = {}) {
  const {
      getSelector: l = N,
      disableCssColorScheme: a,
      colorSchemeSelector: u,
    } = o,
    {
      colorSchemes: f = {},
      components: p,
      defaultColorScheme: m = "light",
      ...w
    } = r,
    { vars: v, css: C, varsWithDefaults: k } = xa(w, o);
  let O = k;
  const $ = {},
    { [m]: P, ..._ } = f;
  if (
    (Object.entries(_ || {}).forEach(([M, b]) => {
      const { vars: V, css: J, varsWithDefaults: W } = xa(b, o);
      (O = Ct(O, W)), ($[M] = { css: J, vars: V });
    }),
    P)
  ) {
    const { css: M, vars: b, varsWithDefaults: V } = xa(P, o);
    (O = Ct(O, V)), ($[m] = { css: M, vars: b });
  }
  function N(M, b) {
    var J, W;
    let V = u;
    if (
      (u === "class" && (V = ".%s"),
      u === "data" && (V = "[data-%s]"),
      u != null &&
        u.startsWith("data-") &&
        !u.includes("%s") &&
        (V = `[${u}="%s"]`),
      M)
    ) {
      if (V === "media")
        return r.defaultColorScheme === M
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((W = (J = f[M]) == null ? void 0 : J.palette) == null
                  ? void 0
                  : W.mode) || M
              })`]: { ":root": b },
            };
      if (V)
        return r.defaultColorScheme === M
          ? `:root, ${V.replace("%s", String(M))}`
          : V.replace("%s", String(M));
    }
    return ":root";
  }
  return {
    vars: O,
    generateThemeVars: () => {
      let M = { ...v };
      return (
        Object.entries($).forEach(([, { vars: b }]) => {
          M = Ct(M, b);
        }),
        M
      );
    },
    generateStyleSheets: () => {
      var ce, ye;
      const M = [],
        b = r.defaultColorScheme || "light";
      function V(h, G) {
        Object.keys(G).length &&
          M.push(typeof h == "string" ? { [h]: { ...G } } : h);
      }
      V(l(void 0, { ...C }), C);
      const { [b]: J, ...W } = $;
      if (J) {
        const { css: h } = J,
          G =
            (ye = (ce = f[b]) == null ? void 0 : ce.palette) == null
              ? void 0
              : ye.mode,
          re = !a && G ? { colorScheme: G, ...h } : { ...h };
        V(l(b, { ...re }), re);
      }
      return (
        Object.entries(W).forEach(([h, { css: G }]) => {
          var Se, je;
          const re =
              (je = (Se = f[h]) == null ? void 0 : Se.palette) == null
                ? void 0
                : je.mode,
            le = !a && re ? { colorScheme: re, ...G } : { ...G };
          V(l(h, { ...le }), le);
        }),
        M
      );
    },
  };
}
function ky(r) {
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
  Cy = {
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
function dp() {
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
const xy = dp();
function pp() {
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
const Ed = pp();
function Td(r, o, l, a) {
  const u = a.light || a,
    f = a.dark || a * 1.5;
  r[o] ||
    (r.hasOwnProperty(l)
      ? (r[o] = r[l])
      : o === "light"
      ? (r.light = Ja(r.main, u))
      : o === "dark" && (r.dark = Ya(r.main, f)));
}
function Ey(r = "light") {
  return r === "dark"
    ? { main: wr[200], light: wr[50], dark: wr[400] }
    : { main: wr[700], light: wr[400], dark: wr[800] };
}
function Ty(r = "light") {
  return r === "dark"
    ? { main: yr[200], light: yr[50], dark: yr[400] }
    : { main: yr[500], light: yr[300], dark: yr[700] };
}
function _y(r = "light") {
  return r === "dark"
    ? { main: vr[500], light: vr[300], dark: vr[700] }
    : { main: vr[700], light: vr[400], dark: vr[800] };
}
function Py(r = "light") {
  return r === "dark"
    ? { main: Sr[400], light: Sr[300], dark: Sr[700] }
    : { main: Sr[700], light: Sr[500], dark: Sr[900] };
}
function Ry(r = "light") {
  return r === "dark"
    ? { main: kr[400], light: kr[300], dark: kr[700] }
    : { main: kr[800], light: kr[500], dark: kr[900] };
}
function Oy(r = "light") {
  return r === "dark"
    ? { main: vo[400], light: vo[300], dark: vo[700] }
    : { main: "#ed6c02", light: vo[500], dark: vo[900] };
}
function Za(r) {
  const {
      mode: o = "light",
      contrastThreshold: l = 3,
      tonalOffset: a = 0.2,
      ...u
    } = r,
    f = r.primary || Ey(o),
    p = r.secondary || Ty(o),
    m = r.error || _y(o),
    w = r.info || Py(o),
    v = r.success || Ry(o),
    C = r.warning || Oy(o);
  function k(_) {
    return cy(_, Ed.text.primary) >= l ? Ed.text.primary : xy.text.primary;
  }
  const O = ({
    color: _,
    name: N,
    mainShade: B = 500,
    lightShade: q = 300,
    darkShade: M = 700,
  }) => {
    if (
      ((_ = { ..._ }),
      !_.main && _[B] && (_.main = _[B]),
      !_.hasOwnProperty("main"))
    )
      throw new Error(Vn(11, N ? ` (${N})` : "", B));
    if (typeof _.main != "string")
      throw new Error(Vn(12, N ? ` (${N})` : "", JSON.stringify(_.main)));
    return (
      Td(_, "light", q, a),
      Td(_, "dark", M, a),
      _.contrastText || (_.contrastText = k(_.main)),
      _
    );
  };
  let $;
  return (
    o === "light" ? ($ = dp()) : o === "dark" && ($ = pp()),
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
        error: O({ color: m, name: "error" }),
        warning: O({ color: C, name: "warning" }),
        info: O({ color: w, name: "info" }),
        success: O({ color: v, name: "success" }),
        grey: Cy,
        contrastThreshold: l,
        getContrastText: k,
        augmentColor: O,
        tonalOffset: a,
        ...$,
      },
      u
    )
  );
}
function Ay(r) {
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
function Ny(r, o) {
  return {
    toolbar: {
      minHeight: 56,
      [r.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [r.up("sm")]: { minHeight: 64 },
    },
    ...o,
  };
}
function Ly(r) {
  return Math.round(r * 1e5) / 1e5;
}
const _d = { textTransform: "uppercase" },
  Pd = '"Roboto", "Helvetica", "Arial", sans-serif';
function zy(r, o) {
  const {
      fontFamily: l = Pd,
      fontSize: a = 14,
      fontWeightLight: u = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: p = 500,
      fontWeightBold: m = 700,
      htmlFontSize: w = 16,
      allVariants: v,
      pxToRem: C,
      ...k
    } = typeof o == "function" ? o(r) : o,
    O = a / 14,
    $ = C || ((N) => `${(N / w) * O}rem`),
    P = (N, B, q, M, b) => ({
      fontFamily: l,
      fontWeight: N,
      fontSize: $(B),
      lineHeight: q,
      ...(l === Pd ? { letterSpacing: `${Ly(M / B)}em` } : {}),
      ...b,
      ...v,
    }),
    _ = {
      h1: P(u, 96, 1.167, -1.5),
      h2: P(u, 60, 1.2, -0.5),
      h3: P(f, 48, 1.167, 0),
      h4: P(f, 34, 1.235, 0.25),
      h5: P(f, 24, 1.334, 0),
      h6: P(p, 20, 1.6, 0.15),
      subtitle1: P(f, 16, 1.75, 0.15),
      subtitle2: P(p, 14, 1.57, 0.1),
      body1: P(f, 16, 1.5, 0.15),
      body2: P(f, 14, 1.43, 0.15),
      button: P(p, 14, 1.75, 0.4, _d),
      caption: P(f, 12, 1.66, 0.4),
      overline: P(f, 12, 2.66, 1, _d),
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
      pxToRem: $,
      fontFamily: l,
      fontSize: a,
      fontWeightLight: u,
      fontWeightRegular: f,
      fontWeightMedium: p,
      fontWeightBold: m,
      ..._,
    },
    k,
    { clone: !1 }
  );
}
const Fy = 0.2,
  Dy = 0.14,
  Iy = 0.12;
function Le(...r) {
  return [
    `${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${Fy})`,
    `${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${Dy})`,
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
  jy = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  By = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Rd(r) {
  return `${Math.round(r)}ms`;
}
function My(r) {
  if (!r) return 0;
  const o = r / 36;
  return Math.min(Math.round((4 + 15 * o ** 0.25 + o / 5) * 10), 3e3);
}
function Uy(r) {
  const o = { ...jy, ...r.easing },
    l = { ...By, ...r.duration };
  return {
    getAutoHeightDuration: My,
    create: (u = ["all"], f = {}) => {
      const {
        duration: p = l.standard,
        easing: m = o.easeInOut,
        delay: w = 0,
        ...v
      } = f;
      return (Array.isArray(u) ? u : [u])
        .map(
          (C) =>
            `${C} ${typeof p == "string" ? p : Rd(p)} ${m} ${
              typeof w == "string" ? w : Rd(w)
            }`
        )
        .join(",");
    },
    ...r,
    easing: o,
    duration: l,
  };
}
const by = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function Hy(r) {
  return (
    sn(r) ||
    typeof r > "u" ||
    typeof r == "string" ||
    typeof r == "boolean" ||
    typeof r == "number" ||
    Array.isArray(r)
  );
}
function mp(r = {}) {
  const o = { ...r };
  function l(a) {
    const u = Object.entries(a);
    for (let f = 0; f < u.length; f++) {
      const [p, m] = u[f];
      !Hy(m) || p.startsWith("unstable_")
        ? delete a[p]
        : sn(m) && ((a[p] = { ...m }), l(a[p]));
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
function Da(r = {}, ...o) {
  const {
    breakpoints: l,
    mixins: a = {},
    spacing: u,
    palette: f = {},
    transitions: p = {},
    typography: m = {},
    shape: w,
    ...v
  } = r;
  if (r.vars) throw new Error(Vn(20));
  const C = Za(f),
    k = ap(r);
  let O = Ct(k, {
    mixins: Ny(k.breakpoints, a),
    palette: C,
    shadows: $y.slice(),
    typography: zy(C, m),
    transitions: Uy(p),
    zIndex: { ...by },
  });
  return (
    (O = Ct(O, v)),
    (O = o.reduce(($, P) => Ct($, P), O)),
    (O.unstable_sxConfig = {
      ...dl,
      ...(v == null ? void 0 : v.unstable_sxConfig),
    }),
    (O.unstable_sx = function (P) {
      return Tr({ sx: P, theme: this });
    }),
    (O.toRuntimeSource = mp),
    O
  );
}
function Vy(r) {
  let o;
  return (
    r < 1 ? (o = 5.11916 * r ** 2) : (o = 4.5 * Math.log(r + 1) + 2),
    Math.round(o * 10) / 1e3
  );
}
const Wy = [...Array(25)].map((r, o) => {
  if (o === 0) return "none";
  const l = Vy(o);
  return `linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`;
});
function hp(r) {
  return {
    inputPlaceholder: r === "dark" ? 0.5 : 0.42,
    inputUnderline: r === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: r === "dark" ? 0.2 : 0.12,
    switchTrack: r === "dark" ? 0.3 : 0.38,
  };
}
function gp(r) {
  return r === "dark" ? Wy : [];
}
function Ky(r) {
  const { palette: o = { mode: "light" }, opacity: l, overlays: a, ...u } = r,
    f = Za(o);
  return {
    palette: f,
    opacity: { ...hp(f.mode), ...l },
    overlays: a || gp(f.mode),
    ...u,
  };
}
function Qy(r) {
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
const qy = (r) => [
    ...[...Array(25)].map((o, l) => `--${r ? `${r}-` : ""}overlays-${l}`),
    `--${r ? `${r}-` : ""}palette-AppBar-darkBg`,
    `--${r ? `${r}-` : ""}palette-AppBar-darkColor`,
  ],
  Gy = (r) => (o, l) => {
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
          qy(r.cssVarPrefix).forEach((m) => {
            (p[m] = l[m]), delete l[m];
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
function Xy(r, o) {
  o.forEach((l) => {
    r[l] || (r[l] = {});
  });
}
function L(r, o, l) {
  !r[o] && l && (r[o] = l);
}
function ko(r) {
  return !r || !r.startsWith("hsl") ? r : fp(r);
}
function ln(r, o) {
  `${o}Channel` in r ||
    (r[`${o}Channel`] = So(
      ko(r[o]),
      `MUI: Can't create \`palette.${o}Channel\` because \`palette.${o}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${o}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
function Yy(r) {
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
  Jy = (r = "mui") => yy(r);
function Ea(r, o, l, a) {
  if (!o) return;
  o = o === !0 ? {} : o;
  const u = a === "dark" ? "dark" : "light";
  if (!l) {
    r[a] = Ky({
      ...o,
      palette: { mode: u, ...(o == null ? void 0 : o.palette) },
    });
    return;
  }
  const { palette: f, ...p } = Da({
    ...l,
    palette: { mode: u, ...(o == null ? void 0 : o.palette) },
  });
  return (
    (r[a] = {
      ...o,
      palette: f,
      opacity: { ...hp(u), ...(o == null ? void 0 : o.opacity) },
      overlays: (o == null ? void 0 : o.overlays) || gp(u),
    }),
    p
  );
}
function Zy(r = {}, ...o) {
  const {
      colorSchemes: l = { light: !0 },
      defaultColorScheme: a,
      disableCssColorScheme: u = !1,
      cssVarPrefix: f = "mui",
      shouldSkipGeneratingVar: p = Qy,
      colorSchemeSelector: m = l.light && l.dark ? "media" : void 0,
      rootSelector: w = ":root",
      ...v
    } = r,
    C = Object.keys(l)[0],
    k = a || (l.light && C !== "light" ? "light" : C),
    O = Jy(f),
    { [k]: $, light: P, dark: _, ...N } = l,
    B = { ...N };
  let q = $;
  if (
    (((k === "dark" && !("dark" in l)) || (k === "light" && !("light" in l))) &&
      (q = !0),
    !q)
  )
    throw new Error(Vn(21, k));
  const M = Ea(B, q, v, k);
  P && !B.light && Ea(B, P, void 0, "light"),
    _ && !B.dark && Ea(B, _, void 0, "dark");
  let b = {
    defaultColorScheme: k,
    ...M,
    cssVarPrefix: f,
    colorSchemeSelector: m,
    rootSelector: w,
    getCssVar: O,
    colorSchemes: B,
    font: { ...Ay(M.typography), ...M.font },
    spacing: Yy(v.spacing),
  };
  Object.keys(b.colorSchemes).forEach((ye) => {
    const h = b.colorSchemes[ye].palette,
      G = (re) => {
        const le = re.split("-"),
          Se = le[1],
          je = le[2];
        return O(re, h[Se][je]);
      };
    if (
      (h.mode === "light" &&
        (L(h.common, "background", "#fff"),
        L(h.common, "onBackground", "#000")),
      h.mode === "dark" &&
        (L(h.common, "background", "#000"),
        L(h.common, "onBackground", "#fff")),
      Xy(h, [
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
      h.mode === "light")
    ) {
      L(h.Alert, "errorColor", ke(h.error.light, 0.6)),
        L(h.Alert, "infoColor", ke(h.info.light, 0.6)),
        L(h.Alert, "successColor", ke(h.success.light, 0.6)),
        L(h.Alert, "warningColor", ke(h.warning.light, 0.6)),
        L(h.Alert, "errorFilledBg", G("palette-error-main")),
        L(h.Alert, "infoFilledBg", G("palette-info-main")),
        L(h.Alert, "successFilledBg", G("palette-success-main")),
        L(h.Alert, "warningFilledBg", G("palette-warning-main")),
        L(
          h.Alert,
          "errorFilledColor",
          Kt(() => h.getContrastText(h.error.main))
        ),
        L(
          h.Alert,
          "infoFilledColor",
          Kt(() => h.getContrastText(h.info.main))
        ),
        L(
          h.Alert,
          "successFilledColor",
          Kt(() => h.getContrastText(h.success.main))
        ),
        L(
          h.Alert,
          "warningFilledColor",
          Kt(() => h.getContrastText(h.warning.main))
        ),
        L(h.Alert, "errorStandardBg", Ce(h.error.light, 0.9)),
        L(h.Alert, "infoStandardBg", Ce(h.info.light, 0.9)),
        L(h.Alert, "successStandardBg", Ce(h.success.light, 0.9)),
        L(h.Alert, "warningStandardBg", Ce(h.warning.light, 0.9)),
        L(h.Alert, "errorIconColor", G("palette-error-main")),
        L(h.Alert, "infoIconColor", G("palette-info-main")),
        L(h.Alert, "successIconColor", G("palette-success-main")),
        L(h.Alert, "warningIconColor", G("palette-warning-main")),
        L(h.AppBar, "defaultBg", G("palette-grey-100")),
        L(h.Avatar, "defaultBg", G("palette-grey-400")),
        L(h.Button, "inheritContainedBg", G("palette-grey-300")),
        L(h.Button, "inheritContainedHoverBg", G("palette-grey-A100")),
        L(h.Chip, "defaultBorder", G("palette-grey-400")),
        L(h.Chip, "defaultAvatarColor", G("palette-grey-700")),
        L(h.Chip, "defaultIconColor", G("palette-grey-700")),
        L(h.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        L(h.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        L(h.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        L(h.LinearProgress, "primaryBg", Ce(h.primary.main, 0.62)),
        L(h.LinearProgress, "secondaryBg", Ce(h.secondary.main, 0.62)),
        L(h.LinearProgress, "errorBg", Ce(h.error.main, 0.62)),
        L(h.LinearProgress, "infoBg", Ce(h.info.main, 0.62)),
        L(h.LinearProgress, "successBg", Ce(h.success.main, 0.62)),
        L(h.LinearProgress, "warningBg", Ce(h.warning.main, 0.62)),
        L(h.Skeleton, "bg", `rgba(${G("palette-text-primaryChannel")} / 0.11)`),
        L(h.Slider, "primaryTrack", Ce(h.primary.main, 0.62)),
        L(h.Slider, "secondaryTrack", Ce(h.secondary.main, 0.62)),
        L(h.Slider, "errorTrack", Ce(h.error.main, 0.62)),
        L(h.Slider, "infoTrack", Ce(h.info.main, 0.62)),
        L(h.Slider, "successTrack", Ce(h.success.main, 0.62)),
        L(h.Slider, "warningTrack", Ce(h.warning.main, 0.62));
      const re = Ki(h.background.default, 0.8);
      L(h.SnackbarContent, "bg", re),
        L(
          h.SnackbarContent,
          "color",
          Kt(() => h.getContrastText(re))
        ),
        L(h.SpeedDialAction, "fabHoverBg", Ki(h.background.paper, 0.15)),
        L(h.StepConnector, "border", G("palette-grey-400")),
        L(h.StepContent, "border", G("palette-grey-400")),
        L(h.Switch, "defaultColor", G("palette-common-white")),
        L(h.Switch, "defaultDisabledColor", G("palette-grey-100")),
        L(h.Switch, "primaryDisabledColor", Ce(h.primary.main, 0.62)),
        L(h.Switch, "secondaryDisabledColor", Ce(h.secondary.main, 0.62)),
        L(h.Switch, "errorDisabledColor", Ce(h.error.main, 0.62)),
        L(h.Switch, "infoDisabledColor", Ce(h.info.main, 0.62)),
        L(h.Switch, "successDisabledColor", Ce(h.success.main, 0.62)),
        L(h.Switch, "warningDisabledColor", Ce(h.warning.main, 0.62)),
        L(h.TableCell, "border", Ce(Wi(h.divider, 1), 0.88)),
        L(h.Tooltip, "bg", Wi(h.grey[700], 0.92));
    }
    if (h.mode === "dark") {
      L(h.Alert, "errorColor", Ce(h.error.light, 0.6)),
        L(h.Alert, "infoColor", Ce(h.info.light, 0.6)),
        L(h.Alert, "successColor", Ce(h.success.light, 0.6)),
        L(h.Alert, "warningColor", Ce(h.warning.light, 0.6)),
        L(h.Alert, "errorFilledBg", G("palette-error-dark")),
        L(h.Alert, "infoFilledBg", G("palette-info-dark")),
        L(h.Alert, "successFilledBg", G("palette-success-dark")),
        L(h.Alert, "warningFilledBg", G("palette-warning-dark")),
        L(
          h.Alert,
          "errorFilledColor",
          Kt(() => h.getContrastText(h.error.dark))
        ),
        L(
          h.Alert,
          "infoFilledColor",
          Kt(() => h.getContrastText(h.info.dark))
        ),
        L(
          h.Alert,
          "successFilledColor",
          Kt(() => h.getContrastText(h.success.dark))
        ),
        L(
          h.Alert,
          "warningFilledColor",
          Kt(() => h.getContrastText(h.warning.dark))
        ),
        L(h.Alert, "errorStandardBg", ke(h.error.light, 0.9)),
        L(h.Alert, "infoStandardBg", ke(h.info.light, 0.9)),
        L(h.Alert, "successStandardBg", ke(h.success.light, 0.9)),
        L(h.Alert, "warningStandardBg", ke(h.warning.light, 0.9)),
        L(h.Alert, "errorIconColor", G("palette-error-main")),
        L(h.Alert, "infoIconColor", G("palette-info-main")),
        L(h.Alert, "successIconColor", G("palette-success-main")),
        L(h.Alert, "warningIconColor", G("palette-warning-main")),
        L(h.AppBar, "defaultBg", G("palette-grey-900")),
        L(h.AppBar, "darkBg", G("palette-background-paper")),
        L(h.AppBar, "darkColor", G("palette-text-primary")),
        L(h.Avatar, "defaultBg", G("palette-grey-600")),
        L(h.Button, "inheritContainedBg", G("palette-grey-800")),
        L(h.Button, "inheritContainedHoverBg", G("palette-grey-700")),
        L(h.Chip, "defaultBorder", G("palette-grey-700")),
        L(h.Chip, "defaultAvatarColor", G("palette-grey-300")),
        L(h.Chip, "defaultIconColor", G("palette-grey-300")),
        L(h.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        L(h.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        L(h.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        L(h.LinearProgress, "primaryBg", ke(h.primary.main, 0.5)),
        L(h.LinearProgress, "secondaryBg", ke(h.secondary.main, 0.5)),
        L(h.LinearProgress, "errorBg", ke(h.error.main, 0.5)),
        L(h.LinearProgress, "infoBg", ke(h.info.main, 0.5)),
        L(h.LinearProgress, "successBg", ke(h.success.main, 0.5)),
        L(h.LinearProgress, "warningBg", ke(h.warning.main, 0.5)),
        L(h.Skeleton, "bg", `rgba(${G("palette-text-primaryChannel")} / 0.13)`),
        L(h.Slider, "primaryTrack", ke(h.primary.main, 0.5)),
        L(h.Slider, "secondaryTrack", ke(h.secondary.main, 0.5)),
        L(h.Slider, "errorTrack", ke(h.error.main, 0.5)),
        L(h.Slider, "infoTrack", ke(h.info.main, 0.5)),
        L(h.Slider, "successTrack", ke(h.success.main, 0.5)),
        L(h.Slider, "warningTrack", ke(h.warning.main, 0.5));
      const re = Ki(h.background.default, 0.98);
      L(h.SnackbarContent, "bg", re),
        L(
          h.SnackbarContent,
          "color",
          Kt(() => h.getContrastText(re))
        ),
        L(h.SpeedDialAction, "fabHoverBg", Ki(h.background.paper, 0.15)),
        L(h.StepConnector, "border", G("palette-grey-600")),
        L(h.StepContent, "border", G("palette-grey-600")),
        L(h.Switch, "defaultColor", G("palette-grey-300")),
        L(h.Switch, "defaultDisabledColor", G("palette-grey-600")),
        L(h.Switch, "primaryDisabledColor", ke(h.primary.main, 0.55)),
        L(h.Switch, "secondaryDisabledColor", ke(h.secondary.main, 0.55)),
        L(h.Switch, "errorDisabledColor", ke(h.error.main, 0.55)),
        L(h.Switch, "infoDisabledColor", ke(h.info.main, 0.55)),
        L(h.Switch, "successDisabledColor", ke(h.success.main, 0.55)),
        L(h.Switch, "warningDisabledColor", ke(h.warning.main, 0.55)),
        L(h.TableCell, "border", ke(Wi(h.divider, 1), 0.68)),
        L(h.Tooltip, "bg", Wi(h.grey[700], 0.92));
    }
    ln(h.background, "default"),
      ln(h.background, "paper"),
      ln(h.common, "background"),
      ln(h.common, "onBackground"),
      ln(h, "divider"),
      Object.keys(h).forEach((re) => {
        const le = h[re];
        le &&
          typeof le == "object" &&
          (le.main && L(h[re], "mainChannel", So(ko(le.main))),
          le.light && L(h[re], "lightChannel", So(ko(le.light))),
          le.dark && L(h[re], "darkChannel", So(ko(le.dark))),
          le.contrastText &&
            L(h[re], "contrastTextChannel", So(ko(le.contrastText))),
          re === "text" && (ln(h[re], "primary"), ln(h[re], "secondary")),
          re === "action" &&
            (le.active && ln(h[re], "active"),
            le.selected && ln(h[re], "selected")));
      });
  }),
    (b = o.reduce((ye, h) => Ct(ye, h), b));
  const V = {
      prefix: f,
      disableCssColorScheme: u,
      shouldSkipGeneratingVar: p,
      getSelector: Gy(b),
    },
    { vars: J, generateThemeVars: W, generateStyleSheets: ce } = Sy(b, V);
  return (
    (b.vars = J),
    Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([ye, h]) => {
      b[ye] = h;
    }),
    (b.generateThemeVars = W),
    (b.generateStyleSheets = ce),
    (b.generateSpacing = function () {
      return sp(v.spacing, Wa(this));
    }),
    (b.getColorSchemeSelector = ky(m)),
    (b.spacing = b.generateSpacing()),
    (b.shouldSkipGeneratingVar = p),
    (b.unstable_sxConfig = {
      ...dl,
      ...(v == null ? void 0 : v.unstable_sxConfig),
    }),
    (b.unstable_sx = function (h) {
      return Tr({ sx: h, theme: this });
    }),
    (b.toRuntimeSource = mp),
    b
  );
}
function Od(r, o, l) {
  r.colorSchemes &&
    l &&
    (r.colorSchemes[o] = {
      ...(l !== !0 && l),
      palette: Za({ ...(l === !0 ? {} : l.palette), mode: o }),
    });
}
function e1(r = {}, ...o) {
  const {
      palette: l,
      cssVariables: a = !1,
      colorSchemes: u = l ? void 0 : { light: !0 },
      defaultColorScheme: f = l == null ? void 0 : l.mode,
      ...p
    } = r,
    m = f || "light",
    w = u == null ? void 0 : u[m],
    v = {
      ...u,
      ...(l
        ? { [m]: { ...(typeof w != "boolean" && w), palette: l } }
        : void 0),
    };
  if (a === !1) {
    if (!("colorSchemes" in r)) return Da(r, ...o);
    let C = l;
    "palette" in r ||
      (v[m] &&
        (v[m] !== !0
          ? (C = v[m].palette)
          : m === "dark" && (C = { mode: "dark" })));
    const k = Da({ ...r, palette: C }, ...o);
    return (
      (k.defaultColorScheme = m),
      (k.colorSchemes = v),
      k.palette.mode === "light" &&
        ((k.colorSchemes.light = {
          ...(v.light !== !0 && v.light),
          palette: k.palette,
        }),
        Od(k, "dark", v.dark)),
      k.palette.mode === "dark" &&
        ((k.colorSchemes.dark = {
          ...(v.dark !== !0 && v.dark),
          palette: k.palette,
        }),
        Od(k, "light", v.light)),
      k
    );
  }
  return (
    !l && !("light" in v) && m === "light" && (v.light = !0),
    Zy(
      {
        ...p,
        colorSchemes: v,
        defaultColorScheme: m,
        ...(typeof a != "boolean" && a),
      },
      ...o
    )
  );
}
const t1 = e1(),
  n1 = "$$material";
function r1(r) {
  return r !== "ownerState" && r !== "theme" && r !== "sx" && r !== "as";
}
const o1 = (r) => r1(r) && r !== "classes",
  i1 = ry({ themeId: n1, defaultTheme: t1, rootShouldForwardProp: o1 }),
  l1 = gy;
function s1(r) {
  return hy(r);
}
function a1(r) {
  return Kd("MuiSvgIcon", r);
}
e0("MuiSvgIcon", [
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
const u1 = (r) => {
    const { color: o, fontSize: l, classes: a } = r,
      u = {
        root: ["root", o !== "inherit" && `color${Er(o)}`, `fontSize${Er(l)}`],
      };
    return Xh(u, a1, a);
  },
  c1 = i1("svg", {
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
    l1(({ theme: r }) => {
      var o, l, a, u, f, p, m, w, v, C, k, O, $, P;
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
                ((w = (m = r.typography) == null ? void 0 : m.pxToRem) == null
                  ? void 0
                  : w.call(m, 24)) || "1.5rem",
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
              var N, B;
              return {
                props: { color: _ },
                style: {
                  color:
                    (B = (N = (r.vars ?? r).palette) == null ? void 0 : N[_]) ==
                    null
                      ? void 0
                      : B.main,
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
                (P = ($ = (r.vars ?? r).palette) == null ? void 0 : $.action) ==
                null
                  ? void 0
                  : P.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  nl = Oe.forwardRef(function (o, l) {
    const a = s1({ props: o, name: "MuiSvgIcon" }),
      {
        children: u,
        className: f,
        color: p = "inherit",
        component: m = "svg",
        fontSize: w = "medium",
        htmlColor: v,
        inheritViewBox: C = !1,
        titleAccess: k,
        viewBox: O = "0 0 24 24",
        ...$
      } = a,
      P = Oe.isValidElement(u) && u.type === "svg",
      _ = {
        ...a,
        color: p,
        component: m,
        fontSize: w,
        instanceFontSize: o.fontSize,
        inheritViewBox: C,
        viewBox: O,
        hasSvgAsChild: P,
      },
      N = {};
    C || (N.viewBox = O);
    const B = u1(_);
    return Te.jsxs(c1, {
      as: m,
      className: n0(B.root, f),
      focusable: "false",
      color: v,
      "aria-hidden": k ? void 0 : !0,
      role: k ? "img" : void 0,
      ref: l,
      ...N,
      ...$,
      ...(P && u.props),
      ownerState: _,
      children: [
        P ? u.props.children : u,
        k ? Te.jsx("title", { children: k }) : null,
      ],
    });
  });
nl && (nl.muiName = "SvgIcon");
function yp(r, o) {
  function l(a, u) {
    return Te.jsx(nl, { "data-testid": `${o}Icon`, ref: u, ...a, children: r });
  }
  return (l.muiName = nl.muiName), Oe.memo(Oe.forwardRef(l));
}
const f1 = yp(
    Te.jsx("path", {
      d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z",
    }),
    "ArrowBack"
  ),
  d1 = yp(
    Te.jsx("path", {
      d: "m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    }),
    "ArrowForward"
  );
function p1({ pokemon: r }) {
  return Te.jsxs("div", {
    className: "card",
    style: { width: "18rem" },
    children: [
      Te.jsx("img", {
        src: r.sprites.front_default,
        className: "card-img-top",
        alt: r.name,
      }),
      Te.jsxs("div", {
        className: "card-body",
        children: [
          Te.jsx("h5", { className: "card-title", children: r.name }),
          Te.jsx("p", {
            className: "card-text",
            children: r.types.map((o) =>
              Te.jsx(
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
function vp(r, o) {
  return function () {
    return r.apply(o, arguments);
  };
}
const { toString: m1 } = Object.prototype,
  { getPrototypeOf: eu } = Object,
  yl = ((r) => (o) => {
    const l = m1.call(o);
    return r[l] || (r[l] = l.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Mt = (r) => ((r = r.toLowerCase()), (o) => yl(o) === r),
  vl = (r) => (o) => typeof o === r,
  { isArray: Rr } = Array,
  Po = vl("undefined");
function h1(r) {
  return (
    r !== null &&
    !Po(r) &&
    r.constructor !== null &&
    !Po(r.constructor) &&
    Et(r.constructor.isBuffer) &&
    r.constructor.isBuffer(r)
  );
}
const wp = Mt("ArrayBuffer");
function g1(r) {
  let o;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (o = ArrayBuffer.isView(r))
      : (o = r && r.buffer && wp(r.buffer)),
    o
  );
}
const y1 = vl("string"),
  Et = vl("function"),
  Sp = vl("number"),
  wl = (r) => r !== null && typeof r == "object",
  v1 = (r) => r === !0 || r === !1,
  Yi = (r) => {
    if (yl(r) !== "object") return !1;
    const o = eu(r);
    return (
      (o === null ||
        o === Object.prototype ||
        Object.getPrototypeOf(o) === null) &&
      !(Symbol.toStringTag in r) &&
      !(Symbol.iterator in r)
    );
  },
  w1 = Mt("Date"),
  S1 = Mt("File"),
  k1 = Mt("Blob"),
  C1 = Mt("FileList"),
  x1 = (r) => wl(r) && Et(r.pipe),
  E1 = (r) => {
    let o;
    return (
      r &&
      ((typeof FormData == "function" && r instanceof FormData) ||
        (Et(r.append) &&
          ((o = yl(r)) === "formdata" ||
            (o === "object" &&
              Et(r.toString) &&
              r.toString() === "[object FormData]"))))
    );
  },
  T1 = Mt("URLSearchParams"),
  [_1, P1, R1, O1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Mt
  ),
  A1 = (r) =>
    r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function No(r, o, { allOwnKeys: l = !1 } = {}) {
  if (r === null || typeof r > "u") return;
  let a, u;
  if ((typeof r != "object" && (r = [r]), Rr(r)))
    for (a = 0, u = r.length; a < u; a++) o.call(null, r[a], a, r);
  else {
    const f = l ? Object.getOwnPropertyNames(r) : Object.keys(r),
      p = f.length;
    let m;
    for (a = 0; a < p; a++) (m = f[a]), o.call(null, r[m], m, r);
  }
}
function kp(r, o) {
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
  Cp = (r) => !Po(r) && r !== bn;
function Ia() {
  const { caseless: r } = (Cp(this) && this) || {},
    o = {},
    l = (a, u) => {
      const f = (r && kp(o, u)) || u;
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
const N1 = (r, o, l, { allOwnKeys: a } = {}) => (
    No(
      o,
      (u, f) => {
        l && Et(u) ? (r[f] = vp(u, l)) : (r[f] = u);
      },
      { allOwnKeys: a }
    ),
    r
  ),
  L1 = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r),
  z1 = (r, o, l, a) => {
    (r.prototype = Object.create(o.prototype, a)),
      (r.prototype.constructor = r),
      Object.defineProperty(r, "super", { value: o.prototype }),
      l && Object.assign(r.prototype, l);
  },
  F1 = (r, o, l, a) => {
    let u, f, p;
    const m = {};
    if (((o = o || {}), r == null)) return o;
    do {
      for (u = Object.getOwnPropertyNames(r), f = u.length; f-- > 0; )
        (p = u[f]), (!a || a(p, r, o)) && !m[p] && ((o[p] = r[p]), (m[p] = !0));
      r = l !== !1 && eu(r);
    } while (r && (!l || l(r, o)) && r !== Object.prototype);
    return o;
  },
  D1 = (r, o, l) => {
    (r = String(r)),
      (l === void 0 || l > r.length) && (l = r.length),
      (l -= o.length);
    const a = r.indexOf(o, l);
    return a !== -1 && a === l;
  },
  I1 = (r) => {
    if (!r) return null;
    if (Rr(r)) return r;
    let o = r.length;
    if (!Sp(o)) return null;
    const l = new Array(o);
    for (; o-- > 0; ) l[o] = r[o];
    return l;
  },
  $1 = (
    (r) => (o) =>
      r && o instanceof r
  )(typeof Uint8Array < "u" && eu(Uint8Array)),
  j1 = (r, o) => {
    const a = (r && r[Symbol.iterator]).call(r);
    let u;
    for (; (u = a.next()) && !u.done; ) {
      const f = u.value;
      o.call(r, f[0], f[1]);
    }
  },
  B1 = (r, o) => {
    let l;
    const a = [];
    for (; (l = r.exec(o)) !== null; ) a.push(l);
    return a;
  },
  M1 = Mt("HTMLFormElement"),
  U1 = (r) =>
    r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (l, a, u) {
      return a.toUpperCase() + u;
    }),
  Ad = (
    ({ hasOwnProperty: r }) =>
    (o, l) =>
      r.call(o, l)
  )(Object.prototype),
  b1 = Mt("RegExp"),
  xp = (r, o) => {
    const l = Object.getOwnPropertyDescriptors(r),
      a = {};
    No(l, (u, f) => {
      let p;
      (p = o(u, f, r)) !== !1 && (a[f] = p || u);
    }),
      Object.defineProperties(r, a);
  },
  H1 = (r) => {
    xp(r, (o, l) => {
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
  V1 = (r, o) => {
    const l = {},
      a = (u) => {
        u.forEach((f) => {
          l[f] = !0;
        });
      };
    return Rr(r) ? a(r) : a(String(r).split(o)), l;
  },
  W1 = () => {},
  K1 = (r, o) => (r != null && Number.isFinite((r = +r)) ? r : o),
  Ta = "abcdefghijklmnopqrstuvwxyz",
  Nd = "0123456789",
  Ep = { DIGIT: Nd, ALPHA: Ta, ALPHA_DIGIT: Ta + Ta.toUpperCase() + Nd },
  Q1 = (r = 16, o = Ep.ALPHA_DIGIT) => {
    let l = "";
    const { length: a } = o;
    for (; r--; ) l += o[(Math.random() * a) | 0];
    return l;
  };
function q1(r) {
  return !!(
    r &&
    Et(r.append) &&
    r[Symbol.toStringTag] === "FormData" &&
    r[Symbol.iterator]
  );
}
const G1 = (r) => {
    const o = new Array(10),
      l = (a, u) => {
        if (wl(a)) {
          if (o.indexOf(a) >= 0) return;
          if (!("toJSON" in a)) {
            o[u] = a;
            const f = Rr(a) ? [] : {};
            return (
              No(a, (p, m) => {
                const w = l(p, u + 1);
                !Po(w) && (f[m] = w);
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
  X1 = Mt("AsyncFunction"),
  Y1 = (r) => r && (wl(r) || Et(r)) && Et(r.then) && Et(r.catch),
  Tp = ((r, o) =>
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
  J1 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(bn)
      : (typeof process < "u" && process.nextTick) || Tp,
  A = {
    isArray: Rr,
    isArrayBuffer: wp,
    isBuffer: h1,
    isFormData: E1,
    isArrayBufferView: g1,
    isString: y1,
    isNumber: Sp,
    isBoolean: v1,
    isObject: wl,
    isPlainObject: Yi,
    isReadableStream: _1,
    isRequest: P1,
    isResponse: R1,
    isHeaders: O1,
    isUndefined: Po,
    isDate: w1,
    isFile: S1,
    isBlob: k1,
    isRegExp: b1,
    isFunction: Et,
    isStream: x1,
    isURLSearchParams: T1,
    isTypedArray: $1,
    isFileList: C1,
    forEach: No,
    merge: Ia,
    extend: N1,
    trim: A1,
    stripBOM: L1,
    inherits: z1,
    toFlatObject: F1,
    kindOf: yl,
    kindOfTest: Mt,
    endsWith: D1,
    toArray: I1,
    forEachEntry: j1,
    matchAll: B1,
    isHTMLForm: M1,
    hasOwnProperty: Ad,
    hasOwnProp: Ad,
    reduceDescriptors: xp,
    freezeMethods: H1,
    toObjectSet: V1,
    toCamelCase: U1,
    noop: W1,
    toFiniteNumber: K1,
    findKey: kp,
    global: bn,
    isContextDefined: Cp,
    ALPHABET: Ep,
    generateString: Q1,
    isSpecCompliantForm: q1,
    toJSONObject: G1,
    isAsyncFn: X1,
    isThenable: Y1,
    setImmediate: Tp,
    asap: J1,
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
const _p = ie.prototype,
  Pp = {};
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
  Pp[r] = { value: r };
});
Object.defineProperties(ie, Pp);
Object.defineProperty(_p, "isAxiosError", { value: !0 });
ie.from = (r, o, l, a, u, f) => {
  const p = Object.create(_p);
  return (
    A.toFlatObject(
      r,
      p,
      function (w) {
        return w !== Error.prototype;
      },
      (m) => m !== "isAxiosError"
    ),
    ie.call(p, r.message, o, l, a, u),
    (p.cause = r),
    (p.name = r.name),
    f && Object.assign(p, f),
    p
  );
};
const Z1 = null;
function $a(r) {
  return A.isPlainObject(r) || A.isArray(r);
}
function Rp(r) {
  return A.endsWith(r, "[]") ? r.slice(0, -2) : r;
}
function Ld(r, o, l) {
  return r
    ? r
        .concat(o)
        .map(function (u, f) {
          return (u = Rp(u)), !l && f ? "[" + u + "]" : u;
        })
        .join(l ? "." : "")
    : o;
}
function ev(r) {
  return A.isArray(r) && !r.some($a);
}
const tv = A.toFlatObject(A, {}, null, function (o) {
  return /^is[A-Z]/.test(o);
});
function Sl(r, o, l) {
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
  function v(P) {
    if (P === null) return "";
    if (A.isDate(P)) return P.toISOString();
    if (!w && A.isBlob(P))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(P) || A.isTypedArray(P)
      ? w && typeof Blob == "function"
        ? new Blob([P])
        : Buffer.from(P)
      : P;
  }
  function C(P, _, N) {
    let B = P;
    if (P && !N && typeof P == "object") {
      if (A.endsWith(_, "{}"))
        (_ = a ? _ : _.slice(0, -2)), (P = JSON.stringify(P));
      else if (
        (A.isArray(P) && ev(P)) ||
        ((A.isFileList(P) || A.endsWith(_, "[]")) && (B = A.toArray(P)))
      )
        return (
          (_ = Rp(_)),
          B.forEach(function (M, b) {
            !(A.isUndefined(M) || M === null) &&
              o.append(
                p === !0 ? Ld([_], b, f) : p === null ? _ : _ + "[]",
                v(M)
              );
          }),
          !1
        );
    }
    return $a(P) ? !0 : (o.append(Ld(N, _, f), v(P)), !1);
  }
  const k = [],
    O = Object.assign(tv, {
      defaultVisitor: C,
      convertValue: v,
      isVisitable: $a,
    });
  function $(P, _) {
    if (!A.isUndefined(P)) {
      if (k.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      k.push(P),
        A.forEach(P, function (B, q) {
          (!(A.isUndefined(B) || B === null) &&
            u.call(o, B, A.isString(q) ? q.trim() : q, _, O)) === !0 &&
            $(B, _ ? _.concat(q) : [q]);
        }),
        k.pop();
    }
  }
  if (!A.isObject(r)) throw new TypeError("data must be an object");
  return $(r), o;
}
function zd(r) {
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
function tu(r, o) {
  (this._pairs = []), r && Sl(r, this, o);
}
const Op = tu.prototype;
Op.append = function (o, l) {
  this._pairs.push([o, l]);
};
Op.toString = function (o) {
  const l = o
    ? function (a) {
        return o.call(this, a, zd);
      }
    : zd;
  return this._pairs
    .map(function (u) {
      return l(u[0]) + "=" + l(u[1]);
    }, "")
    .join("&");
};
function nv(r) {
  return encodeURIComponent(r)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ap(r, o, l) {
  if (!o) return r;
  const a = (l && l.encode) || nv;
  A.isFunction(l) && (l = { serialize: l });
  const u = l && l.serialize;
  let f;
  if (
    (u
      ? (f = u(o, l))
      : (f = A.isURLSearchParams(o) ? o.toString() : new tu(o, l).toString(a)),
    f)
  ) {
    const p = r.indexOf("#");
    p !== -1 && (r = r.slice(0, p)),
      (r += (r.indexOf("?") === -1 ? "?" : "&") + f);
  }
  return r;
}
class Fd {
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
const Np = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  rv = typeof URLSearchParams < "u" ? URLSearchParams : tu,
  ov = typeof FormData < "u" ? FormData : null,
  iv = typeof Blob < "u" ? Blob : null,
  lv = {
    isBrowser: !0,
    classes: { URLSearchParams: rv, FormData: ov, Blob: iv },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  nu = typeof window < "u" && typeof document < "u",
  ja = (typeof navigator == "object" && navigator) || void 0,
  sv =
    nu &&
    (!ja || ["ReactNative", "NativeScript", "NS"].indexOf(ja.product) < 0),
  av =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  uv = (nu && window.location.href) || "http://localhost",
  cv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: nu,
        hasStandardBrowserEnv: sv,
        hasStandardBrowserWebWorkerEnv: av,
        navigator: ja,
        origin: uv,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  it = { ...cv, ...lv };
function fv(r, o) {
  return Sl(
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
function dv(r) {
  return A.matchAll(/\w+|\[(\w*)]/g, r).map((o) =>
    o[0] === "[]" ? "" : o[1] || o[0]
  );
}
function pv(r) {
  const o = {},
    l = Object.keys(r);
  let a;
  const u = l.length;
  let f;
  for (a = 0; a < u; a++) (f = l[a]), (o[f] = r[f]);
  return o;
}
function Lp(r) {
  function o(l, a, u, f) {
    let p = l[f++];
    if (p === "__proto__") return !0;
    const m = Number.isFinite(+p),
      w = f >= l.length;
    return (
      (p = !p && A.isArray(u) ? u.length : p),
      w
        ? (A.hasOwnProp(u, p) ? (u[p] = [u[p], a]) : (u[p] = a), !m)
        : ((!u[p] || !A.isObject(u[p])) && (u[p] = []),
          o(l, a, u[p], f) && A.isArray(u[p]) && (u[p] = pv(u[p])),
          !m)
    );
  }
  if (A.isFormData(r) && A.isFunction(r.entries)) {
    const l = {};
    return (
      A.forEachEntry(r, (a, u) => {
        o(dv(a), u, l, 0);
      }),
      l
    );
  }
  return null;
}
function mv(r, o, l) {
  if (A.isString(r))
    try {
      return (o || JSON.parse)(r), A.trim(r);
    } catch (a) {
      if (a.name !== "SyntaxError") throw a;
    }
  return (0, JSON.stringify)(r);
}
const Lo = {
  transitional: Np,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (o, l) {
      const a = l.getContentType() || "",
        u = a.indexOf("application/json") > -1,
        f = A.isObject(o);
      if ((f && A.isHTMLForm(o) && (o = new FormData(o)), A.isFormData(o)))
        return u ? JSON.stringify(Lp(o)) : o;
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
      let m;
      if (f) {
        if (a.indexOf("application/x-www-form-urlencoded") > -1)
          return fv(o, this.formSerializer).toString();
        if ((m = A.isFileList(o)) || a.indexOf("multipart/form-data") > -1) {
          const w = this.env && this.env.FormData;
          return Sl(
            m ? { "files[]": o } : o,
            w && new w(),
            this.formSerializer
          );
        }
      }
      return f || u ? (l.setContentType("application/json", !1), mv(o)) : o;
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
        } catch (m) {
          if (p)
            throw m.name === "SyntaxError"
              ? ie.from(m, ie.ERR_BAD_RESPONSE, this, null, this.response)
              : m;
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
const hv = A.toObjectSet([
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
  gv = (r) => {
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
              !(!l || (o[l] && hv[l])) &&
                (l === "set-cookie"
                  ? o[l]
                    ? o[l].push(a)
                    : (o[l] = [a])
                  : (o[l] = o[l] ? o[l] + ", " + a : a));
          }),
      o
    );
  },
  Dd = Symbol("internals");
function wo(r) {
  return r && String(r).trim().toLowerCase();
}
function Ji(r) {
  return r === !1 || r == null ? r : A.isArray(r) ? r.map(Ji) : String(r);
}
function yv(r) {
  const o = Object.create(null),
    l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; (a = l.exec(r)); ) o[a[1]] = a[2];
  return o;
}
const vv = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function _a(r, o, l, a, u) {
  if (A.isFunction(a)) return a.call(this, o, l);
  if ((u && (o = l), !!A.isString(o))) {
    if (A.isString(a)) return o.indexOf(a) !== -1;
    if (A.isRegExp(a)) return a.test(o);
  }
}
function wv(r) {
  return r
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (o, l, a) => l.toUpperCase() + a);
}
function Sv(r, o) {
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
class mt {
  constructor(o) {
    o && this.set(o);
  }
  set(o, l, a) {
    const u = this;
    function f(m, w, v) {
      const C = wo(w);
      if (!C) throw new Error("header name must be a non-empty string");
      const k = A.findKey(u, C);
      (!k || u[k] === void 0 || v === !0 || (v === void 0 && u[k] !== !1)) &&
        (u[k || w] = Ji(m));
    }
    const p = (m, w) => A.forEach(m, (v, C) => f(v, C, w));
    if (A.isPlainObject(o) || o instanceof this.constructor) p(o, l);
    else if (A.isString(o) && (o = o.trim()) && !vv(o)) p(gv(o), l);
    else if (A.isHeaders(o)) for (const [m, w] of o.entries()) f(w, m, a);
    else o != null && f(l, o, a);
    return this;
  }
  get(o, l) {
    if (((o = wo(o)), o)) {
      const a = A.findKey(this, o);
      if (a) {
        const u = this[a];
        if (!l) return u;
        if (l === !0) return yv(u);
        if (A.isFunction(l)) return l.call(this, u, a);
        if (A.isRegExp(l)) return l.exec(u);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(o, l) {
    if (((o = wo(o)), o)) {
      const a = A.findKey(this, o);
      return !!(a && this[a] !== void 0 && (!l || _a(this, this[a], a, l)));
    }
    return !1;
  }
  delete(o, l) {
    const a = this;
    let u = !1;
    function f(p) {
      if (((p = wo(p)), p)) {
        const m = A.findKey(a, p);
        m && (!l || _a(a, a[m], m, l)) && (delete a[m], (u = !0));
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
      (!o || _a(this, this[f], f, o, !0)) && (delete this[f], (u = !0));
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
        const m = o ? wv(f) : String(f).trim();
        m !== f && delete l[f], (l[m] = Ji(u)), (a[m] = !0);
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
    const a = (this[Dd] = this[Dd] = { accessors: {} }).accessors,
      u = this.prototype;
    function f(p) {
      const m = wo(p);
      a[m] || (Sv(u, p), (a[m] = !0));
    }
    return A.isArray(o) ? o.forEach(f) : f(o), this;
  }
}
mt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
A.reduceDescriptors(mt.prototype, ({ value: r }, o) => {
  let l = o[0].toUpperCase() + o.slice(1);
  return {
    get: () => r,
    set(a) {
      this[l] = a;
    },
  };
});
A.freezeMethods(mt);
function Pa(r, o) {
  const l = this || Lo,
    a = o || l,
    u = mt.from(a.headers);
  let f = a.data;
  return (
    A.forEach(r, function (m) {
      f = m.call(l, f, u.normalize(), o ? o.status : void 0);
    }),
    u.normalize(),
    f
  );
}
function zp(r) {
  return !!(r && r.__CANCEL__);
}
function Or(r, o, l) {
  ie.call(this, r ?? "canceled", ie.ERR_CANCELED, o, l),
    (this.name = "CanceledError");
}
A.inherits(Or, ie, { __CANCEL__: !0 });
function Fp(r, o, l) {
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
function kv(r) {
  const o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
  return (o && o[1]) || "";
}
function Cv(r, o) {
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
      const $ = C && v - C;
      return $ ? Math.round((O * 1e3) / $) : void 0;
    }
  );
}
function xv(r, o) {
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
    const u = Cv(50, 250);
    return xv((f) => {
      const p = f.loaded,
        m = f.lengthComputable ? f.total : void 0,
        w = p - a,
        v = u(w),
        C = p <= m;
      a = p;
      const k = {
        loaded: p,
        total: m,
        progress: m ? p / m : void 0,
        bytes: w,
        rate: v || void 0,
        estimated: v && m && C ? (m - p) / v : void 0,
        event: f,
        lengthComputable: m != null,
        [o ? "download" : "upload"]: !0,
      };
      r(k);
    }, l);
  },
  Id = (r, o) => {
    const l = r != null;
    return [(a) => o[0]({ lengthComputable: l, total: r, loaded: a }), o[1]];
  },
  $d =
    (r) =>
    (...o) =>
      A.asap(() => r(...o)),
  Ev = it.hasStandardBrowserEnv
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
  Tv = it.hasStandardBrowserEnv
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
function _v(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}
function Pv(r, o) {
  return o ? r.replace(/\/?\/$/, "") + "/" + o.replace(/^\/+/, "") : r;
}
function Dp(r, o) {
  return r && !_v(o) ? Pv(r, o) : o;
}
const jd = (r) => (r instanceof mt ? { ...r } : r);
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
  function m(v, C, k) {
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
    validateStatus: m,
    headers: (v, C, k) => u(jd(v), jd(C), k, !0),
  };
  return (
    A.forEach(Object.keys(Object.assign({}, r, o)), function (C) {
      const k = w[C] || u,
        O = k(r[C], o[C], C);
      (A.isUndefined(O) && k !== m) || (l[C] = O);
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
      auth: m,
    } = o;
    (o.headers = p = mt.from(p)),
      (o.url = Ap(Dp(o.baseURL, o.url), r.params, r.paramsSerializer)),
      m &&
        p.set(
          "Authorization",
          "Basic " +
            btoa(
              (m.username || "") +
                ":" +
                (m.password ? unescape(encodeURIComponent(m.password)) : "")
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
      (a && A.isFunction(a) && (a = a(o)), a || (a !== !1 && Ev(o.url)))
    ) {
      const v = u && f && Tv.read(f);
      v && p.set(u, v);
    }
    return o;
  },
  Rv = typeof XMLHttpRequest < "u",
  Ov =
    Rv &&
    function (r) {
      return new Promise(function (l, a) {
        const u = Ip(r);
        let f = u.data;
        const p = mt.from(u.headers).normalize();
        let { responseType: m, onUploadProgress: w, onDownloadProgress: v } = u,
          C,
          k,
          O,
          $,
          P;
        function _() {
          $ && $(),
            P && P(),
            u.cancelToken && u.cancelToken.unsubscribe(C),
            u.signal && u.signal.removeEventListener("abort", C);
        }
        let N = new XMLHttpRequest();
        N.open(u.method.toUpperCase(), u.url, !0), (N.timeout = u.timeout);
        function B() {
          if (!N) return;
          const M = mt.from(
              "getAllResponseHeaders" in N && N.getAllResponseHeaders()
            ),
            V = {
              data:
                !m || m === "text" || m === "json"
                  ? N.responseText
                  : N.response,
              status: N.status,
              statusText: N.statusText,
              headers: M,
              config: r,
              request: N,
            };
          Fp(
            function (W) {
              l(W), _();
            },
            function (W) {
              a(W), _();
            },
            V
          ),
            (N = null);
        }
        "onloadend" in N
          ? (N.onloadend = B)
          : (N.onreadystatechange = function () {
              !N ||
                N.readyState !== 4 ||
                (N.status === 0 &&
                  !(N.responseURL && N.responseURL.indexOf("file:") === 0)) ||
                setTimeout(B);
            }),
          (N.onabort = function () {
            N &&
              (a(new ie("Request aborted", ie.ECONNABORTED, r, N)), (N = null));
          }),
          (N.onerror = function () {
            a(new ie("Network Error", ie.ERR_NETWORK, r, N)), (N = null);
          }),
          (N.ontimeout = function () {
            let b = u.timeout
              ? "timeout of " + u.timeout + "ms exceeded"
              : "timeout exceeded";
            const V = u.transitional || Np;
            u.timeoutErrorMessage && (b = u.timeoutErrorMessage),
              a(
                new ie(
                  b,
                  V.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
                  r,
                  N
                )
              ),
              (N = null);
          }),
          f === void 0 && p.setContentType(null),
          "setRequestHeader" in N &&
            A.forEach(p.toJSON(), function (b, V) {
              N.setRequestHeader(V, b);
            }),
          A.isUndefined(u.withCredentials) ||
            (N.withCredentials = !!u.withCredentials),
          m && m !== "json" && (N.responseType = u.responseType),
          v && (([O, P] = rl(v, !0)), N.addEventListener("progress", O)),
          w &&
            N.upload &&
            (([k, $] = rl(w)),
            N.upload.addEventListener("progress", k),
            N.upload.addEventListener("loadend", $)),
          (u.cancelToken || u.signal) &&
            ((C = (M) => {
              N &&
                (a(!M || M.type ? new Or(null, r, N) : M),
                N.abort(),
                (N = null));
            }),
            u.cancelToken && u.cancelToken.subscribe(C),
            u.signal &&
              (u.signal.aborted ? C() : u.signal.addEventListener("abort", C)));
        const q = kv(u.url);
        if (q && it.protocols.indexOf(q) === -1) {
          a(new ie("Unsupported protocol " + q + ":", ie.ERR_BAD_REQUEST, r));
          return;
        }
        N.send(f || null);
      });
    },
  Av = (r, o) => {
    const { length: l } = (r = r ? r.filter(Boolean) : []);
    if (o || l) {
      let a = new AbortController(),
        u;
      const f = function (v) {
        if (!u) {
          (u = !0), m();
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
      const m = () => {
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
      return (w.unsubscribe = () => A.asap(m)), w;
    }
  },
  Nv = function* (r, o) {
    let l = r.byteLength;
    if (l < o) {
      yield r;
      return;
    }
    let a = 0,
      u;
    for (; a < l; ) (u = a + o), yield r.slice(a, u), (a = u);
  },
  Lv = async function* (r, o) {
    for await (const l of zv(r)) yield* Nv(l, o);
  },
  zv = async function* (r) {
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
  Bd = (r, o, l, a) => {
    const u = Lv(r, o);
    let f = 0,
      p,
      m = (w) => {
        p || ((p = !0), a && a(w));
      };
    return new ReadableStream(
      {
        async pull(w) {
          try {
            const { done: v, value: C } = await u.next();
            if (v) {
              m(), w.close();
              return;
            }
            let k = C.byteLength;
            if (l) {
              let O = (f += k);
              l(O);
            }
            w.enqueue(new Uint8Array(C));
          } catch (v) {
            throw (m(v), v);
          }
        },
        cancel(w) {
          return m(w), u.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  kl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  $p = kl && typeof ReadableStream == "function",
  Fv =
    kl &&
    (typeof TextEncoder == "function"
      ? (
          (r) => (o) =>
            r.encode(o)
        )(new TextEncoder())
      : async (r) => new Uint8Array(await new Response(r).arrayBuffer())),
  jp = (r, ...o) => {
    try {
      return !!r(...o);
    } catch {
      return !1;
    }
  },
  Dv =
    $p &&
    jp(() => {
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
  Md = 64 * 1024,
  Ba = $p && jp(() => A.isReadableStream(new Response("").body)),
  ol = { stream: Ba && ((r) => r.body) };
kl &&
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
const Iv = async (r) => {
    if (r == null) return 0;
    if (A.isBlob(r)) return r.size;
    if (A.isSpecCompliantForm(r))
      return (
        await new Request(it.origin, { method: "POST", body: r }).arrayBuffer()
      ).byteLength;
    if (A.isArrayBufferView(r) || A.isArrayBuffer(r)) return r.byteLength;
    if ((A.isURLSearchParams(r) && (r = r + ""), A.isString(r)))
      return (await Fv(r)).byteLength;
  },
  $v = async (r, o) => {
    const l = A.toFiniteNumber(r.getContentLength());
    return l ?? Iv(o);
  },
  jv =
    kl &&
    (async (r) => {
      let {
        url: o,
        method: l,
        data: a,
        signal: u,
        cancelToken: f,
        timeout: p,
        onDownloadProgress: m,
        onUploadProgress: w,
        responseType: v,
        headers: C,
        withCredentials: k = "same-origin",
        fetchOptions: O,
      } = Ip(r);
      v = v ? (v + "").toLowerCase() : "text";
      let $ = Av([u, f && f.toAbortSignal()], p),
        P;
      const _ =
        $ &&
        $.unsubscribe &&
        (() => {
          $.unsubscribe();
        });
      let N;
      try {
        if (
          w &&
          Dv &&
          l !== "get" &&
          l !== "head" &&
          (N = await $v(C, a)) !== 0
        ) {
          let V = new Request(o, { method: "POST", body: a, duplex: "half" }),
            J;
          if (
            (A.isFormData(a) &&
              (J = V.headers.get("content-type")) &&
              C.setContentType(J),
            V.body)
          ) {
            const [W, ce] = Id(N, rl($d(w)));
            a = Bd(V.body, Md, W, ce);
          }
        }
        A.isString(k) || (k = k ? "include" : "omit");
        const B = "credentials" in Request.prototype;
        P = new Request(o, {
          ...O,
          signal: $,
          method: l.toUpperCase(),
          headers: C.normalize().toJSON(),
          body: a,
          duplex: "half",
          credentials: B ? k : void 0,
        });
        let q = await fetch(P);
        const M = Ba && (v === "stream" || v === "response");
        if (Ba && (m || (M && _))) {
          const V = {};
          ["status", "statusText", "headers"].forEach((ye) => {
            V[ye] = q[ye];
          });
          const J = A.toFiniteNumber(q.headers.get("content-length")),
            [W, ce] = (m && Id(J, rl($d(m), !0))) || [];
          q = new Response(
            Bd(q.body, Md, W, () => {
              ce && ce(), _ && _();
            }),
            V
          );
        }
        v = v || "text";
        let b = await ol[A.findKey(ol, v) || "text"](q, r);
        return (
          !M && _ && _(),
          await new Promise((V, J) => {
            Fp(V, J, {
              data: b,
              headers: mt.from(q.headers),
              status: q.status,
              statusText: q.statusText,
              config: r,
              request: P,
            });
          })
        );
      } catch (B) {
        throw (
          (_ && _(),
          B && B.name === "TypeError" && /fetch/i.test(B.message)
            ? Object.assign(new ie("Network Error", ie.ERR_NETWORK, r, P), {
                cause: B.cause || B,
              })
            : ie.from(B, B && B.code, r, P))
        );
      }
    }),
  Ma = { http: Z1, xhr: Ov, fetch: jv };
A.forEach(Ma, (r, o) => {
  if (r) {
    try {
      Object.defineProperty(r, "name", { value: o });
    } catch {}
    Object.defineProperty(r, "adapterName", { value: o });
  }
});
const Ud = (r) => `- ${r}`,
  Bv = (r) => A.isFunction(r) || r === null || r === !1,
  Bp = {
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
          !Bv(l) && ((a = Ma[(p = String(l)).toLowerCase()]), a === void 0))
        )
          throw new ie(`Unknown adapter '${p}'`);
        if (a) break;
        u[p || "#" + f] = a;
      }
      if (!a) {
        const f = Object.entries(u).map(
          ([m, w]) =>
            `adapter ${m} ` +
            (w === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let p = o
          ? f.length > 1
            ? `since :
` +
              f.map(Ud).join(`
`)
            : " " + Ud(f[0])
          : "as no adapter specified";
        throw new ie(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        );
      }
      return a;
    },
    adapters: Ma,
  };
function Ra(r) {
  if (
    (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
  )
    throw new Or(null, r);
}
function bd(r) {
  return (
    Ra(r),
    (r.headers = mt.from(r.headers)),
    (r.data = Pa.call(r, r.transformRequest)),
    ["post", "put", "patch"].indexOf(r.method) !== -1 &&
      r.headers.setContentType("application/x-www-form-urlencoded", !1),
    Bp.getAdapter(r.adapter || Lo.adapter)(r).then(
      function (a) {
        return (
          Ra(r),
          (a.data = Pa.call(r, r.transformResponse, a)),
          (a.headers = mt.from(a.headers)),
          a
        );
      },
      function (a) {
        return (
          zp(a) ||
            (Ra(r),
            a &&
              a.response &&
              ((a.response.data = Pa.call(r, r.transformResponse, a.response)),
              (a.response.headers = mt.from(a.response.headers)))),
          Promise.reject(a)
        );
      }
    )
  );
}
const Mp = "1.7.9",
  Cl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (r, o) => {
    Cl[r] = function (a) {
      return typeof a === r || "a" + (o < 1 ? "n " : " ") + r;
    };
  }
);
const Hd = {};
Cl.transitional = function (o, l, a) {
  function u(f, p) {
    return (
      "[Axios v" +
      Mp +
      "] Transitional option '" +
      f +
      "'" +
      p +
      (a ? ". " + a : "")
    );
  }
  return (f, p, m) => {
    if (o === !1)
      throw new ie(
        u(p, " has been removed" + (l ? " in " + l : "")),
        ie.ERR_DEPRECATED
      );
    return (
      l &&
        !Hd[p] &&
        ((Hd[p] = !0),
        console.warn(
          u(
            p,
            " has been deprecated since v" +
              l +
              " and will be removed in the near future"
          )
        )),
      o ? o(f, p, m) : !0
    );
  };
};
Cl.spelling = function (o) {
  return (l, a) => (console.warn(`${a} is likely a misspelling of ${o}`), !0);
};
function Mv(r, o, l) {
  if (typeof r != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(r);
  let u = a.length;
  for (; u-- > 0; ) {
    const f = a[u],
      p = o[f];
    if (p) {
      const m = r[f],
        w = m === void 0 || p(m, f, r);
      if (w !== !0)
        throw new ie("option " + f + " must be " + w, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (l !== !0) throw new ie("Unknown option " + f, ie.ERR_BAD_OPTION);
  }
}
const Zi = { assertOptions: Mv, validators: Cl },
  Qt = Zi.validators;
class Hn {
  constructor(o) {
    (this.defaults = o),
      (this.interceptors = { request: new Fd(), response: new Fd() });
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
        (P) => {
          delete f[P];
        }
      ),
      (l.headers = mt.concat(p, f));
    const m = [];
    let w = !0;
    this.interceptors.request.forEach(function (_) {
      (typeof _.runWhen == "function" && _.runWhen(l) === !1) ||
        ((w = w && _.synchronous), m.unshift(_.fulfilled, _.rejected));
    });
    const v = [];
    this.interceptors.response.forEach(function (_) {
      v.push(_.fulfilled, _.rejected);
    });
    let C,
      k = 0,
      O;
    if (!w) {
      const P = [bd.bind(this), void 0];
      for (
        P.unshift.apply(P, m),
          P.push.apply(P, v),
          O = P.length,
          C = Promise.resolve(l);
        k < O;

      )
        C = C.then(P[k++], P[k++]);
      return C;
    }
    O = m.length;
    let $ = l;
    for (k = 0; k < O; ) {
      const P = m[k++],
        _ = m[k++];
      try {
        $ = P($);
      } catch (N) {
        _.call(this, N);
        break;
      }
    }
    try {
      C = bd.call(this, $);
    } catch (P) {
      return Promise.reject(P);
    }
    for (k = 0, O = v.length; k < O; ) C = C.then(v[k++], v[k++]);
    return C;
  }
  getUri(o) {
    o = Wn(this.defaults, o);
    const l = Dp(o.baseURL, o.url);
    return Ap(l, o.params, o.paramsSerializer);
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
    return function (f, p, m) {
      return this.request(
        Wn(m || {}, {
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
class ru {
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
        const p = new Promise((m) => {
          a.subscribe(m), (f = m);
        }).then(u);
        return (
          (p.cancel = function () {
            a.unsubscribe(f);
          }),
          p
        );
      }),
      o(function (f, p, m) {
        a.reason || ((a.reason = new Or(f, p, m)), l(a.reason));
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
      token: new ru(function (u) {
        o = u;
      }),
      cancel: o,
    };
  }
}
function Uv(r) {
  return function (l) {
    return r.apply(null, l);
  };
}
function bv(r) {
  return A.isObject(r) && r.isAxiosError === !0;
}
const Ua = {
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
Object.entries(Ua).forEach(([r, o]) => {
  Ua[o] = r;
});
function Up(r) {
  const o = new Hn(r),
    l = vp(Hn.prototype.request, o);
  return (
    A.extend(l, Hn.prototype, o, { allOwnKeys: !0 }),
    A.extend(l, o, null, { allOwnKeys: !0 }),
    (l.create = function (u) {
      return Up(Wn(r, u));
    }),
    l
  );
}
const We = Up(Lo);
We.Axios = Hn;
We.CanceledError = Or;
We.CancelToken = ru;
We.isCancel = zp;
We.VERSION = Mp;
We.toFormData = Sl;
We.AxiosError = ie;
We.Cancel = We.CanceledError;
We.all = function (o) {
  return Promise.all(o);
};
We.spread = Uv;
We.isAxiosError = bv;
We.mergeConfig = Wn;
We.AxiosHeaders = mt;
We.formToJSON = (r) => Lp(A.isHTMLForm(r) ? new FormData(r) : r);
We.getAdapter = Bp.getAdapter;
We.HttpStatusCode = Ua;
We.default = We;
async function Vd(r) {
  return (await We.get(r)).data;
}
function Hv() {
  const [r, o] = Oe.useState(void 0),
    [l, a] = Oe.useState("https://pokeapi.co/api/v2/pokemon/"),
    [u, f] = Oe.useState(1),
    [p, m] = Oe.useState(0),
    w = 12,
    v = Math.ceil(p / w),
    C = async () => {
      const P = await Vd(l);
      !p && P.count && m(P.count);
      const _ = {
        ...P,
        results: await Promise.all(P.results.map((N) => Vd(N.url))),
      };
      o(_);
    },
    k = (P) => {
      const _ = (P - 1) * w;
      a(`https://pokeapi.co/api/v2/pokemon?offset=${_}&limit=${w}`), f(P);
    },
    O = () => {
      u < v ? k(u + 1) : k(1);
    },
    $ = () => {
      u > 1 ? k(u - 1) : k(v);
    };
  return (
    Oe.useEffect(() => {
      k(1);
    }, []),
    Oe.useEffect(() => {
      l && C();
    }, [l]),
    !!r &&
      Te.jsxs("div", {
        className: "pokemon-list",
        children: [
          Te.jsxs("h2", { children: ["Pagina ", u, " di ", v || "?"] }),
          Te.jsxs("div", {
            className: "arrows-container",
            children: [
              Te.jsx("button", {
                type: "button",
                className: "arrowback",
                onClick: $,
                children: Te.jsx(f1, { className: "icon" }),
              }),
              Te.jsx("button", {
                type: "button",
                className: "arrowforward",
                onClick: O,
                children: Te.jsx(d1, { className: "icon" }),
              }),
            ],
          }),
          Te.jsx("div", {
            className: "card-grid",
            children: r.results.map((P) => Te.jsx(p1, { pokemon: P }, P.name)),
          }),
        ],
      })
  );
}
function Vv() {
  return Te.jsx(Te.Fragment, {
    children: Te.jsxs("div", {
      className: "container-fluid",
      children: [
        Te.jsx("h1", { className: "titolo", children: "Pokèmon API" }),
        Te.jsx(Hv, {}),
      ],
    }),
  });
}
qh.createRoot(document.getElementById("root")).render(Te.jsx(Vv, {}));
