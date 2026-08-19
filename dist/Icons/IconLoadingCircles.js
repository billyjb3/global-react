import { jsxs as e, jsx as r } from "react/jsx-runtime";
import "react";
const n = (i) => {
  const {
    size: c = "24px",
    className: o = "",
    ...s
  } = i;
  return /* @__PURE__ */ e(
    "svg",
    {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      style: { width: c, height: c },
      className: o,
      ...s,
      children: [
        /* @__PURE__ */ r("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ r("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ e("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ r("circle", { cx: "12", cy: "20", r: "2" }),
          /* @__PURE__ */ r("circle", { cx: "12", cy: "4", r: "2" }),
          /* @__PURE__ */ r("circle", { cx: "6.343", cy: "17.657", r: "2" }),
          /* @__PURE__ */ r("circle", { cx: "17.657", cy: "6.343", r: "2" }),
          /* @__PURE__ */ r("circle", { cx: "4", cy: "12", r: "2.001" }),
          /* @__PURE__ */ r("circle", { cx: "20", cy: "12", r: "2" }),
          /* @__PURE__ */ r("circle", { cx: "6.343", cy: "6.344", r: "2" }),
          /* @__PURE__ */ r("circle", { cx: "17.657", cy: "17.658", r: "2" })
        ] })
      ]
    }
  );
};
export {
  n as IconLoadingCircles
};
