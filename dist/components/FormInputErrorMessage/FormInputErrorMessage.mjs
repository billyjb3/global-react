import { jsx as m } from "react/jsx-runtime";
import "react";
import "../../context/StackNavContext.mjs";
import "../../context/RouterContext.mjs";
import { useFormContext as e } from "../../context/FormContext.mjs";
const u = (s) => {
  const {
    inputId: t,
    className: n = ""
  } = s, { formState: r } = e(), { error: o } = (r == null ? void 0 : r[t]) || {};
  return o ? /* @__PURE__ */ m("span", { className: `${n}`, children: o }) : null;
};
export {
  u as FormInputErrorMessage
};
