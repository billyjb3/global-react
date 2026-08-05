import { jsx as n } from "react/jsx-runtime";
import "react";
import './styles.css';/* empty css        */
const u = (r) => {
  const {
    onClick: s,
    isLink: c,
    href: a = "",
    className: t = "",
    children: o,
    ...e
  } = r;
  return c ? /* @__PURE__ */ n(
    "a",
    {
      href: a,
      className: `iconButton ${t}`,
      target: "_blank",
      children: o
    }
  ) : /* @__PURE__ */ n(
    "button",
    {
      onClick: s,
      className: `iconButton ${t}`,
      ...e,
      children: o
    }
  );
};
export {
  u as ButtonIcon
};
