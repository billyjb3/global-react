import { jsxs as c, jsx as e } from "react/jsx-runtime";
import "react";
import { ButtonIcon as i } from "../ButtonIcon/ButtonIcon.mjs";
import { IconClose as m } from "../../Icons/IconClose.mjs";
import { useStackNavContext as p } from "../../context/StackNavContext.mjs";
import "../../context/RouterContext.mjs";
import "../../context/FormContext.mjs";
import './styles.css';/* empty css        */
const x = (t) => {
  const {
    className: n = "",
    children: s
  } = t, { id: r, isOpen: o, setIsOpen: a } = p();
  return /* @__PURE__ */ c(
    "nav",
    {
      className: `stackNavMenu ${o ? "stackMenuOpen" : ""} ${n}`,
      id: r,
      "aria-hidden": o,
      children: [
        /* @__PURE__ */ e("div", { className: "stackNavMenuClose", children: /* @__PURE__ */ e(i, { onClick: () => a(!1), children: /* @__PURE__ */ e(m, {}) }) }),
        s
      ]
    }
  );
};
export {
  x as StackNavMenu
};
