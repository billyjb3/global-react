import { jsxs as D, Fragment as b, jsx as h } from "react/jsx-runtime";
import R, { useRef as N, useEffect as M } from "react";
import { useOnClickout as w } from "../../hooks/useOnClickout.mjs";
import './styles.css';/* empty css        */
var O = { exports: {} }, s = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S;
function A() {
  if (S) return s;
  S = 1;
  var l = R;
  function y(n) {
    var r = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      r += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        r += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var o = {
    d: {
      f: d,
      r: function() {
        throw Error(y(522));
      },
      D: d,
      C: d,
      L: d,
      m: d,
      X: d,
      S: d,
      M: d
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal");
  function f(n, r, a) {
    var t = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: t == null ? null : "" + t,
      children: n,
      containerInfo: r,
      implementation: a
    };
  }
  var m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(n, r) {
    if (n === "font") return "";
    if (typeof r == "string")
      return r === "use-credentials" ? r : "";
  }
  return s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, s.createPortal = function(n, r) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
      throw Error(y(299));
    return f(n, r, null, a);
  }, s.flushSync = function(n) {
    var r = m.T, a = o.p;
    try {
      if (m.T = null, o.p = 2, n) return n();
    } finally {
      m.T = r, o.p = a, o.d.f();
    }
  }, s.preconnect = function(n, r) {
    typeof n == "string" && (r ? (r = r.crossOrigin, r = typeof r == "string" ? r === "use-credentials" ? r : "" : void 0) : r = null, o.d.C(n, r));
  }, s.prefetchDNS = function(n) {
    typeof n == "string" && o.d.D(n);
  }, s.preinit = function(n, r) {
    if (typeof n == "string" && r && typeof r.as == "string") {
      var a = r.as, t = p(a, r.crossOrigin), e = typeof r.integrity == "string" ? r.integrity : void 0, i = typeof r.fetchPriority == "string" ? r.fetchPriority : void 0;
      a === "style" ? o.d.S(
        n,
        typeof r.precedence == "string" ? r.precedence : void 0,
        {
          crossOrigin: t,
          integrity: e,
          fetchPriority: i
        }
      ) : a === "script" && o.d.X(n, {
        crossOrigin: t,
        integrity: e,
        fetchPriority: i,
        nonce: typeof r.nonce == "string" ? r.nonce : void 0
      });
    }
  }, s.preinitModule = function(n, r) {
    if (typeof n == "string")
      if (typeof r == "object" && r !== null) {
        if (r.as == null || r.as === "script") {
          var a = p(
            r.as,
            r.crossOrigin
          );
          o.d.M(n, {
            crossOrigin: a,
            integrity: typeof r.integrity == "string" ? r.integrity : void 0,
            nonce: typeof r.nonce == "string" ? r.nonce : void 0
          });
        }
      } else r == null && o.d.M(n);
  }, s.preload = function(n, r) {
    if (typeof n == "string" && typeof r == "object" && r !== null && typeof r.as == "string") {
      var a = r.as, t = p(a, r.crossOrigin);
      o.d.L(n, a, {
        crossOrigin: t,
        integrity: typeof r.integrity == "string" ? r.integrity : void 0,
        nonce: typeof r.nonce == "string" ? r.nonce : void 0,
        type: typeof r.type == "string" ? r.type : void 0,
        fetchPriority: typeof r.fetchPriority == "string" ? r.fetchPriority : void 0,
        referrerPolicy: typeof r.referrerPolicy == "string" ? r.referrerPolicy : void 0,
        imageSrcSet: typeof r.imageSrcSet == "string" ? r.imageSrcSet : void 0,
        imageSizes: typeof r.imageSizes == "string" ? r.imageSizes : void 0,
        media: typeof r.media == "string" ? r.media : void 0
      });
    }
  }, s.preloadModule = function(n, r) {
    if (typeof n == "string")
      if (r) {
        var a = p(r.as, r.crossOrigin);
        o.d.m(n, {
          as: typeof r.as == "string" && r.as !== "script" ? r.as : void 0,
          crossOrigin: a,
          integrity: typeof r.integrity == "string" ? r.integrity : void 0
        });
      } else o.d.m(n);
  }, s.requestFormReset = function(n) {
    o.d.r(n);
  }, s.unstable_batchedUpdates = function(n, r) {
    return n(r);
  }, s.useFormState = function(n, r, a) {
    return m.H.useFormState(n, r, a);
  }, s.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, s.version = "19.2.7", s;
}
var u = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E;
function L() {
  return E || (E = 1, process.env.NODE_ENV !== "production" && (function() {
    function l() {
    }
    function y(t) {
      return "" + t;
    }
    function d(t, e, i) {
      var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        y(g);
        var _ = !1;
      } catch {
        _ = !0;
      }
      return _ && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object"
      ), y(g)), {
        $$typeof: r,
        key: g == null ? null : "" + g,
        children: t,
        containerInfo: e,
        implementation: i
      };
    }
    function o(t, e) {
      if (t === "font") return "";
      if (typeof e == "string")
        return e === "use-credentials" ? e : "";
    }
    function c(t) {
      return t === null ? "`null`" : t === void 0 ? "`undefined`" : t === "" ? "an empty string" : 'something with type "' + typeof t + '"';
    }
    function f(t) {
      return t === null ? "`null`" : t === void 0 ? "`undefined`" : t === "" ? "an empty string" : typeof t == "string" ? JSON.stringify(t) : typeof t == "number" ? "`" + t + "`" : 'something with type "' + typeof t + '"';
    }
    function m() {
      var t = a.H;
      return t === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), t;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var p = R, n = {
      d: {
        f: l,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l
      },
      p: 0,
      findDOMNode: null
    }, r = Symbol.for("react.portal"), a = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, u.createPortal = function(t, e) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return d(t, e, null, i);
    }, u.flushSync = function(t) {
      var e = a.T, i = n.p;
      try {
        if (a.T = null, n.p = 2, t)
          return t();
      } finally {
        a.T = e, n.p = i, n.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, u.preconnect = function(t, e) {
      typeof t == "string" && t ? e != null && typeof e != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        f(e)
      ) : e != null && typeof e.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        c(e.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        c(t)
      ), typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, n.d.C(t, e));
    }, u.prefetchDNS = function(t) {
      if (typeof t != "string" || !t)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          c(t)
        );
      else if (1 < arguments.length) {
        var e = arguments[1];
        typeof e == "object" && e.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          f(e)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          f(e)
        );
      }
      typeof t == "string" && n.d.D(t);
    }, u.preinit = function(t, e) {
      if (typeof t == "string" && t ? e == null || typeof e != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        f(e)
      ) : e.as !== "style" && e.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        f(e.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        c(t)
      ), typeof t == "string" && e && typeof e.as == "string") {
        var i = e.as, g = o(i, e.crossOrigin), _ = typeof e.integrity == "string" ? e.integrity : void 0, v = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
        i === "style" ? n.d.S(
          t,
          typeof e.precedence == "string" ? e.precedence : void 0,
          {
            crossOrigin: g,
            integrity: _,
            fetchPriority: v
          }
        ) : i === "script" && n.d.X(t, {
          crossOrigin: g,
          integrity: _,
          fetchPriority: v,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    }, u.preinitModule = function(t, e) {
      var i = "";
      if (typeof t == "string" && t || (i += " The `href` argument encountered was " + c(t) + "."), e !== void 0 && typeof e != "object" ? i += " The `options` argument encountered was " + c(e) + "." : e && "as" in e && e.as !== "script" && (i += " The `as` option encountered was " + f(e.as) + "."), i)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          i
        );
      else
        switch (i = e && typeof e.as == "string" ? e.as : "script", i) {
          case "script":
            break;
          default:
            i = f(i), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              i,
              t
            );
        }
      typeof t == "string" && (typeof e == "object" && e !== null ? (e.as == null || e.as === "script") && (i = o(
        e.as,
        e.crossOrigin
      ), n.d.M(t, {
        crossOrigin: i,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      })) : e == null && n.d.M(t));
    }, u.preload = function(t, e) {
      var i = "";
      if (typeof t == "string" && t || (i += " The `href` argument encountered was " + c(t) + "."), e == null || typeof e != "object" ? i += " The `options` argument encountered was " + c(e) + "." : typeof e.as == "string" && e.as || (i += " The `as` option encountered was " + c(e.as) + "."), i && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        i
      ), typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
        i = e.as;
        var g = o(
          i,
          e.crossOrigin
        );
        n.d.L(t, i, {
          crossOrigin: g,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0,
          type: typeof e.type == "string" ? e.type : void 0,
          fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
          referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
          imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
          imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
          media: typeof e.media == "string" ? e.media : void 0
        });
      }
    }, u.preloadModule = function(t, e) {
      var i = "";
      typeof t == "string" && t || (i += " The `href` argument encountered was " + c(t) + "."), e !== void 0 && typeof e != "object" ? i += " The `options` argument encountered was " + c(e) + "." : e && "as" in e && typeof e.as != "string" && (i += " The `as` option encountered was " + c(e.as) + "."), i && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        i
      ), typeof t == "string" && (e ? (i = o(
        e.as,
        e.crossOrigin
      ), n.d.m(t, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: i,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      })) : n.d.m(t));
    }, u.requestFormReset = function(t) {
      n.d.r(t);
    }, u.unstable_batchedUpdates = function(t, e) {
      return t(e);
    }, u.useFormState = function(t, e, i) {
      return m().useFormState(t, e, i);
    }, u.useFormStatus = function() {
      return m().useHostTransitionStatus();
    }, u.version = "19.2.7", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), u;
}
var T;
function C() {
  if (T) return O.exports;
  T = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (y) {
        console.error(y);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (l(), O.exports = A()) : O.exports = L(), O.exports;
}
var P = C();
const H = (l) => {
  const {
    onClose: y,
    className: d = "",
    overlayClass: o = "",
    children: c
  } = l, f = N(null);
  return w(f, y), M(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }), []), P.createPortal(
    /* @__PURE__ */ D(b, { children: [
      /* @__PURE__ */ h("div", { className: `modalOverlay ${o}` }),
      /* @__PURE__ */ h("div", { className: "modalContainer", children: /* @__PURE__ */ h(
        "div",
        {
          ref: f,
          className: `modalContent ${d}`,
          children: c
        }
      ) })
    ] }),
    document.body
  );
};
export {
  H as Modal
};
