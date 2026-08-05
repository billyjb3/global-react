import { jsx as i } from "react/jsx-runtime";
import { useState as w, useRef as y, useCallback as D, useEffect as N } from "react";
import { FormContext as R } from "../../context/FormContext.js";
const P = (m) => {
  const {
    onSubmit: v,
    children: d,
    clearRef: c,
    className: h = ""
  } = m, [o, u] = w({}), a = y({}), p = (e, t) => {
    a.current = {
      ...a.current,
      [e]: {
        ...t
      }
    }, window.formConfig = a, o[e] || u(((r) => ({
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
    let s = "";
    return r.forEach((E) => {
      const {
        validateOnChange: j,
        validate: k,
        errorMessage: O
      } = E;
      (!t || j) && (k(o[e].value) || (s = O));
    }), s ? (n(e, { error: s }), !1) : (n(e, { error: !1 }), !0);
  }, F = () => {
    let e = !0;
    return Object.keys(a.current).forEach((t) => {
      e = l(t) && e;
    }), e;
  }, g = () => {
    const e = {};
    return Object.values(a.current).forEach((t) => {
      e[t.requestKey] = t.ref.current.value;
    }), e;
  }, f = D(() => {
  }, []), C = (e) => {
    e.preventDefault(), F() && v(g());
  }, b = (e, t) => {
    n(t, { value: e.target.value }), l(t, !0);
  }, I = (e) => {
    n(e, { error: !1, isFocused: !0 });
  }, S = (e) => {
    n(e, { isFocused: !1 });
  };
  N(() => {
    c && (c.current = f);
  }, [f]);
  const x = {
    inputCallback: p,
    handleSubmit: C,
    handleInputChange: b,
    handleInputFocus: I,
    handleInputBlur: S,
    formState: o
  };
  return /* @__PURE__ */ i(R.Provider, { value: x, children: /* @__PURE__ */ i("form", { className: `${h}`, children: d }) });
};
export {
  P as Form
};
