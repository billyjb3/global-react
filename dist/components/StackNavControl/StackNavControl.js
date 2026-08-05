import { jsx as t } from "react/jsx-runtime";
import "react";
import { ButtonIcon as i } from "../ButtonIcon/ButtonIcon.js";
import { useStackNavContext as l } from "../../context/StackNavContext.js";
import { IconStackMenu as m } from "../../Icons/IconStackMenu.js";
const f = (a) => {
  const {
    className: e = "",
    onClick: n
  } = a, { id: r, isOpen: o, setIsOpen: c } = l();
  return /* @__PURE__ */ t(
    i,
    {
      onClick: () => {
        c(!o), n && n();
      },
      "aria-label": o ? "close nav menu" : "open nav menu",
      "aria-expanded": o,
      "aria-control": r,
      className: e,
      children: /* @__PURE__ */ t(m, {})
    }
  );
};
export {
  f as StackNavControl
};
