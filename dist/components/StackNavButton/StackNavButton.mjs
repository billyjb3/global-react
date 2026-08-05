import { jsx as n } from "react/jsx-runtime";
import "react";
import { useStackNavContext as m } from "../../context/StackNavContext.mjs";
import "../../context/RouterContext.mjs";
import "../../context/FormContext.mjs";
import './styles.css';/* empty css        */
const v = (s) => {
  const {
    isRouteChange: c = !0,
    onClick: t,
    href: r,
    className: o = "",
    children: a
  } = s, { setIsOpen: i } = m(), e = (l) => {
    l.preventDefault(), i(!1), t && t();
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
  v as StackNavButton
};
