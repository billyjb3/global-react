import { jsxs as l, jsx as r } from "react/jsx-runtime";
import "react";
import { IconLoadingCircles as c } from "../../Icons/IconLoadingCircles.mjs";
import './styles.css';/* empty css        */
const v = (e) => {
  const {
    isOn: a,
    children: s,
    className: n = "",
    backgroundClass: o = "",
    spinnerClass: i = ""
  } = e;
  return a ? /* @__PURE__ */ l("div", { className: `overlayContainer ${n}`, children: [
    /* @__PURE__ */ r("div", { className: `overlayBackground ${o}` }),
    /* @__PURE__ */ r("div", { className: "overlayForeground", children: /* @__PURE__ */ r(c, { size: "96px", className: `${i} spinner` }) }),
    s
  ] }) : s;
};
export {
  v as SpinnerOverlay
};
