import { jsx as r } from "react/jsx-runtime";
import "react";
import './styles.css';/* empty css           */
const u = (s) => {
  const {
    onClick: c,
    isLink: a,
    href: e = "",
    className: t = "",
    children: o,
    ...n
  } = s;
  return a ? /* @__PURE__ */ r(
    "a",
    {
      href: e,
      className: `iconButton ${t}`,
      target: "_blank",
      ...n,
      children: o
    }
  ) : /* @__PURE__ */ r(
    "button",
    {
      onClick: c,
      className: `iconButton ${t}`,
      ...n,
      children: o
    }
  );
};
export {
  u as ButtonIcon
};
