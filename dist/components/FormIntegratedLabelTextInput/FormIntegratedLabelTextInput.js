import { jsx as r, jsxs as I } from "react/jsx-runtime";
import "react";
import { FormTextInput as b } from "../FormTextInput/FormTextInput.js";
import { FormInputErrorMessage as f } from "../FormInputErrorMessage/FormInputErrorMessage.js";
import './styles.css';/* empty css           */
import { useFormContext as g } from "../../context/FormContext.js";
const $ = (a) => {
  const {
    id: e,
    label: o,
    containerClass: l = "",
    inputClass: n = "",
    labelClass: m = "",
    activeLabelClass: i = "",
    errorClass: c = "",
    ...d
  } = a, { formState: t } = g(), { value: p, isFocused: u } = (t == null ? void 0 : t[e]) || {}, s = !!p || u;
  return /* @__PURE__ */ r("div", { className: `${l}`, children: /* @__PURE__ */ I("div", { className: "formIntegratedLabelContainer", children: [
    /* @__PURE__ */ r(
      b,
      {
        id: e,
        className: `formIntegratedLabelTextInput ${n}`,
        ...d
      }
    ),
    /* @__PURE__ */ r(
      "label",
      {
        htmlFor: e,
        className: `formIntegratedLabel ${s ? i : m} ${s ? "active" : ""}`,
        children: o
      }
    ),
    /* @__PURE__ */ r(f, { inputId: e, className: `formIntegratedErrorMessage ${c}` })
  ] }) });
};
export {
  $ as FormIntegratedLabelTextInput
};
