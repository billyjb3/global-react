import { jsx as i } from "react/jsx-runtime";
import { useState as y, useRef as D, useCallback as N, useEffect as R } from "react";
import { FormContext as q } from "../../context/FormContext.js";
const $ = (m) => {
  const {
    onSubmit: v,
    children: d,
    clearRef: o,
    className: h = ""
  } = m, [s, u] = y({}), a = D({}), p = (e, t) => {
    a.current = {
      ...a.current,
      [e]: {
        isClearable: !0,
        ...t
      }
    }, s[e] || u(((r) => ({
      ...r,
      [e]: { value: "" }
    })));
  }, n = (e, t) => {
    u(((r) => ({
      ...r,
      [e]: {
        ...r[e],
        ...t
      }
    })));
  }, l = (e, t) => {
    const r = a.current[e].validations;
    if (!r) return !0;
    let c = "";
    return r.forEach((j) => {
      const {
        validateOnChange: x,
        validate: O,
        errorMessage: k
      } = j;
      (!t || x) && (O(s[e].value) || (c = k));
    }), c ? (n(e, { error: c }), !1) : (n(e, { error: !1 }), !0);
  }, b = () => {
    let e = !0;
    return Object.keys(a.current).forEach((t) => {
      e = l(t) && e;
    }), e;
  }, C = () => {
    const e = {};
    return Object.values(a.current).forEach((t) => {
      e[t.requestKey] = t.ref.current.value;
    }), e;
  }, f = N(() => {
    Object.entries(a.current).forEach(([e, t]) => {
      t.isClearable && n(e, { value: "" });
    });
  }, []), F = (e) => {
    e.preventDefault(), b() && v(C());
  }, g = (e, t) => {
    n(t, { value: e.target.value }), l(t, !0);
  }, E = (e) => {
    n(e, { error: !1, isFocused: !0 });
  }, I = (e) => {
    n(e, { isFocused: !1 });
  };
  R(() => {
    o && (o.current = f);
  }, [f, o]);
  const S = {
    inputCallback: p,
    handleSubmit: F,
    handleInputChange: g,
    handleInputFocus: E,
    handleInputBlur: I,
    formState: s
  };
  return /* @__PURE__ */ i(q.Provider, { value: S, children: /* @__PURE__ */ i("form", { className: `${h}`, children: d }) });
};
export {
  $ as Form
};
