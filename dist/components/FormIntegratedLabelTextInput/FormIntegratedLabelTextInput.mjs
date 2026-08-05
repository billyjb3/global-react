import { jsx as r, jsxs as I } from "react/jsx-runtime";
import "react";
import { FormTextInput as b } from "../FormTextInput/FormTextInput.mjs";
import { FormInputErrorMessage as f } from "../FormInputErrorMessage/FormInputErrorMessage.mjs";
import "../../context/StackNavContext.mjs";
import "../../context/RouterContext.mjs";
import { useFormContext as g } from "../../context/FormContext.mjs";
import './styles.css';/* empty css        */
const T = (a) => {
  const {
    id: e,
    label: o,
    containerClass: l = "",
    inputClass: m = "",
    labelClass: n = "",
    activeLabelClass: i = "",
    errorClass: c = "",
    ...p
  } = a, { formState: t } = g(), { value: d, isFocused: u } = (t == null ? void 0 : t[e]) || {}, s = !!d || u;
  return /* @__PURE__ */ r("div", { className: `${l}`, children: /* @__PURE__ */ I("div", { className: "formIntegratedLabelContainer", children: [
    /* @__PURE__ */ r(
      b,
      {
        id: e,
        className: `formIntegratedLabelTextInput ${m}`,
        ...p
      }
    ),
    /* @__PURE__ */ r(
      "label",
      {
        htmlFor: e,
        className: `formIntegratedLabel ${s ? i : n} ${s ? "active" : ""}`,
        children: o
      }
    ),
    /* @__PURE__ */ r(f, { inputId: e, className: `formIntegratedErrorMessage ${c}` })
  ] }) });
};
export {
  T as FormIntegratedLabelTextInput
};
