import { jsx as n } from "react/jsx-runtime";
import "react";
import './styles.css';/* empty css           */
import { useStackNavContext as m } from "../../context/StackNavContext.js";
const C = (s) => {
  const {
    isRouteChange: c = !0,
    onClick: t,
    href: r,
    className: o = "",
    children: a
  } = s, { setIsOpen: l } = m(), e = (i) => {
    i.preventDefault(), l(!1), t && t();
  };
  return c ? /* @__PURE__ */ n(
    "a",
    {
      href: r,
      onClick: e,
      className: `stackNavButton ${o}`,
      children: a
    }
  ) : /* @__PURE__ */ n(
    "button",
    {
      onClick: e,
      className: `stackNavButton ${o}`,
      children: a
    }
  );
};
export {
  C as StackNavButton
};
