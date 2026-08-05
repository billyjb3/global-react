import { jsx as x } from "react/jsx-runtime";
import { useRef as E, useEffect as R } from "react";
import "../../context/StackNavContext.mjs";
import "../../context/RouterContext.mjs";
import { useFormContext as j } from "../../context/FormContext.mjs";
const D = (v) => {
  const {
    id: e,
    requestKey: t,
    isRequired: r = !1,
    validations: u = [],
    onFocus: a,
    onBlur: c,
    onChange: i,
    className: l = "",
    isTextArea: B = !1,
    rows: T = 10
  } = v, n = E(null), {
    inputCallback: p,
    handleInputChange: q,
    handleInputFocus: I,
    handleInputBlur: A,
    formState: o
  } = j(), {
    value: s,
    error: N,
    isFocused: d
  } = (o == null ? void 0 : o[e]) || {};
  R(() => {
    p(e, {
      ref: n,
      requestKey: t,
      validations: u,
      isClearable: !0
    });
  }, [
    n,
    p,
    e,
    t,
    u
  ]);
  const m = ($) => {
    q($, e), i && i($);
  }, h = () => {
    I(e), a && a();
  }, f = () => {
    A(e), c && c();
  }, b = !!s || d, F = N ? "inputError" : "", g = d ? "inputFocused" : "", C = b ? "inputActive" : "";
  return B ? /* @__PURE__ */ x(
    "textarea",
    {
      id: e,
      ref: n,
      required: r,
      onChange: m,
      onFocus: h,
      onBlur: f,
      className: `${l} ${F} ${g} ${C}`,
      rows: T,
      value: s
    }
  ) : /* @__PURE__ */ x(
    "input",
    {
      id: e,
      ref: n,
      required: r,
      onChange: m,
      onFocus: h,
      onBlur: f,
      className: `${l} ${F} ${g} ${C}`,
      value: s
    }
  );
};
export {
  D as FormTextInput
};
