import { jsx as n } from "react/jsx-runtime";
import "react";
import { useFormContext as s } from "../../context/FormContext.js";
const u = (t) => {
  const {
    children: o,
    className: m = ""
  } = t, { handleSubmit: r } = s();
  return /* @__PURE__ */ n(
    "button",
    {
      type: "submit",
      onClick: r,
      className: `${m}`,
      children: o
    }
  );
};
export {
  u as FormSubmitButton
};
