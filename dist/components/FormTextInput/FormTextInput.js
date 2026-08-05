import { jsx as x } from "react/jsx-runtime";
import { useRef as E, useEffect as R } from "react";
import { useFormContext as j } from "../../context/FormContext.js";
const K = (v) => {
  const {
    id: e,
    requestKey: t,
    isRequired: r = !1,
    validations: u = [],
    onFocus: a,
    onBlur: c,
    onChange: l,
    className: i = "",
    isTextArea: B = !1,
    rows: T = 10
  } = v, n = E(null), {
    inputCallback: d,
    handleInputChange: q,
    handleInputFocus: I,
    handleInputBlur: A,
    formState: o
  } = j(), {
    value: s,
    error: N,
    isFocused: p
  } = (o == null ? void 0 : o[e]) || {};
  R(() => {
    d(e, {
      ref: n,
      requestKey: t,
      validations: u,
      isClearable: !0
    });
  }, [
    n,
    d,
    e,
    t,
    u
  ]);
  const h = ($) => {
    q($, e), l && l($);
  }, m = () => {
    I(e), a && a();
  }, f = () => {
    A(e), c && c();
  }, b = !!s || p, F = N ? "inputError" : "", g = p ? "inputFocused" : "", C = b ? "inputActive" : "";
  return B ? /* @__PURE__ */ x(
    "textarea",
    {
      id: e,
      ref: n,
      required: r,
      onChange: h,
      onFocus: m,
      onBlur: f,
      className: `${i} ${F} ${g} ${C}`,
      rows: T,
      value: s
    }
  ) : /* @__PURE__ */ x(
    "input",
    {
      id: e,
      ref: n,
      required: r,
      onChange: h,
      onFocus: m,
      onBlur: f,
      className: `${i} ${F} ${g} ${C}`,
      value: s
    }
  );
};
export {
  K as FormTextInput
};
