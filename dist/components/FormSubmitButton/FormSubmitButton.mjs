import { jsx as i } from "react/jsx-runtime";
import "react";
import "../../context/StackNavContext.mjs";
import "../../context/RouterContext.mjs";
import { useFormContext as n } from "../../context/FormContext.mjs";
const a = (t) => {
  const {
    children: o,
    className: m = ""
  } = t, { handleSubmit: r } = n();
  return /* @__PURE__ */ i(
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
  a as FormSubmitButton
};
