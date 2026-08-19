import { jsx as e } from "react/jsx-runtime";
import "react";
import { useFormContext as n } from "../../context/FormContext.js";
const a = (t) => {
  const {
    children: o,
    className: m = "",
    ...r
  } = t, { handleSubmit: s } = n();
  return /* @__PURE__ */ e(
    "button",
    {
      type: "submit",
      onClick: s,
      className: `${m}`,
      ...r,
      children: o
    }
  );
};
export {
  a as FormSubmitButton
};
