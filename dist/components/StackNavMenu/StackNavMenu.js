import { jsxs as r, jsx as e } from "react/jsx-runtime";
import "react";
import { ButtonIcon as i } from "../ButtonIcon/ButtonIcon.js";
import './styles.css';/* empty css           */
import { useStackNavContext as m } from "../../context/StackNavContext.js";
import { IconClose as l } from "../../Icons/IconClose.js";
const f = (s) => {
  const {
    className: o = "",
    children: t
  } = s, { id: a, isOpen: n, setIsOpen: c } = m();
  return /* @__PURE__ */ r(
    "nav",
    {
      className: `stackNavMenu ${n ? "stackMenuOpen" : ""} ${o}`,
      id: a,
      "aria-hidden": n,
      children: [
        /* @__PURE__ */ e("div", { className: "stackNavMenuClose", children: /* @__PURE__ */ e(i, { onClick: () => c(!1), children: /* @__PURE__ */ e(l, {}) }) }),
        t
      ]
    }
  );
};
export {
  f as StackNavMenu
};
