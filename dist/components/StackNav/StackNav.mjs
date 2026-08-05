import { jsx as o } from "react/jsx-runtime";
import { useState as c, useRef as m } from "react";
import { StackNavContext as p } from "../../context/StackNavContext.mjs";
import "../../context/RouterContext.mjs";
import "../../context/FormContext.mjs";
import { useOnClickout as f } from "../../hooks/useOnClickout.mjs";
import './styles.css';/* empty css        */
const C = (r) => {
  const {
    id: n = "stackNavMenu",
    children: s
  } = r, [a, t] = c(!1), e = m(null);
  f(e, () => t(!1));
  const i = { id: n, isOpen: a, setIsOpen: t };
  return /* @__PURE__ */ o(p.Provider, { value: i, children: /* @__PURE__ */ o("div", { ref: e, className: "stackNavContainer", children: s }) });
};
export {
  C as StackNav
};
