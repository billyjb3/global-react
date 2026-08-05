import { jsx as o } from "react/jsx-runtime";
import { useState as i, useRef as m } from "react";
import './styles.css';/* empty css           */
import { useOnClickout as f } from "../../hooks/useOnClickout.js";
import { StackNavContext as l } from "../../context/StackNavContext.js";
const N = (n) => {
  const {
    id: r = "stackNavMenu",
    children: s
  } = n, [a, t] = i(!1), e = m(null);
  f(e, () => t(!1));
  const c = { id: r, isOpen: a, setIsOpen: t };
  return /* @__PURE__ */ o(l.Provider, { value: c, children: /* @__PURE__ */ o("div", { ref: e, className: "stackNavContainer", children: s }) });
};
export {
  N as StackNav
};
