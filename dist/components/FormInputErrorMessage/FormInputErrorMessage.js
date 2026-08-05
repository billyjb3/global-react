import { jsx as e } from "react/jsx-runtime";
import "react";
import { useFormContext as m } from "../../context/FormContext.js";
const i = (s) => {
  const {
    inputId: n,
    className: t = ""
  } = s, { formState: r } = m(), { error: o } = (r == null ? void 0 : r[n]) || {};
  return o ? /* @__PURE__ */ e("span", { className: `${t}`, children: o }) : null;
};
export {
  i as FormInputErrorMessage
};
