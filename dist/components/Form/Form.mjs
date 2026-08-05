import { jsx as i } from "react/jsx-runtime";
import { useState as w, useRef as y, useCallback as D, useEffect as N } from "react";
import "../../context/StackNavContext.mjs";
import "../../context/RouterContext.mjs";
import { FormContext as R } from "../../context/FormContext.mjs";
const z = (m) => {
  const {
    onSubmit: v,
    children: d,
    clearRef: c,
    className: p = ""
  } = m, [n, u] = w({}), o = y({}), h = (e, t) => {
    o.current = {
      ...o.current,
      [e]: {
        ...t
      }
    }, window.formConfig = o, n[e] || u(((r) => ({
      ...r,
      [e]: { value: "" }
    })));
  }, a = (e, t) => {
    u(((r) => ({
      ...r,
      [e]: {
        ...r[e],
        ...t
      }
    })));
  }, l = (e, t) => {
    const r = o.current[e].validations;
    if (!r) return !0;
    let s = "";
    return r.forEach((E) => {
      const {
        validateOnChange: j,
        validate: k,
        errorMessage: O
      } = E;
      (!t || j) && (k(n[e].value) || (s = O));
    }), s ? (a(e, { error: s }), !1) : (a(e, { error: !1 }), !0);
  }, F = () => {
    let e = !0;
    return Object.keys(o.current).forEach((t) => {
      e = l(t) && e;
    }), e;
  }, g = () => {
    const e = {};
    return Object.values(o.current).forEach((t) => {
      e[t.requestKey] = t.ref.current.value;
    }), e;
  }, f = D(() => {
  }, []), C = (e) => {
    e.preventDefault(), F() && v(g());
  }, b = (e, t) => {
    a(t, { value: e.target.value }), l(t, !0);
  }, I = (e) => {
    a(e, { error: !1, isFocused: !0 });
  }, S = (e) => {
    a(e, { isFocused: !1 });
  };
  N(() => {
    c && (c.current = f);
  }, [f]);
  const x = {
    inputCallback: h,
    handleSubmit: C,
    handleInputChange: b,
    handleInputFocus: I,
    handleInputBlur: S,
    formState: n
  };
  return /* @__PURE__ */ i(R.Provider, { value: x, children: /* @__PURE__ */ i("form", { className: `${p}`, children: d }) });
};
export {
  z as Form
};
