import { jsx as t } from "react/jsx-runtime";
import "react";
import { useStackNavContext as i } from "../../context/StackNavContext.mjs";
import "../../context/RouterContext.mjs";
import "../../context/FormContext.mjs";
import { ButtonIcon as m } from "../ButtonIcon/ButtonIcon.mjs";
import { IconStackMenu as l } from "../../Icons/IconStackMenu.mjs";
const x = (r) => {
  const {
    className: a = "",
    onClick: n
  } = r, { id: e, isOpen: o, setIsOpen: c } = i();
  return /* @__PURE__ */ t(
    m,
    {
      onClick: () => {
        c(!o), n && n();
      },
      "aria-label": o ? "close nav menu" : "open nav menu",
      "aria-expanded": o,
      "aria-control": e,
      className: a,
      children: /* @__PURE__ */ t(l, {})
    }
  );
};
export {
  x as StackNavControl
};
