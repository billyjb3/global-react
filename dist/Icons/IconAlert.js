import { jsxs as e, jsx as r } from "react/jsx-runtime";
import "react";
const d = (o) => {
  const {
    size: t = "24px",
    className: i = ""
  } = o;
  return /* @__PURE__ */ e(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { width: t },
      className: i,
      children: [
        /* @__PURE__ */ r("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ r("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ e("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ r(
            "path",
            {
              d: "M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
              strokeWidth: "2"
            }
          ),
          /* @__PURE__ */ r(
            "path",
            {
              d: "M12 8L12 13",
              strokeWidth: "2",
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ r("path", { d: "M12 16V15.9888", strokeWidth: "2", strokeLinecap: "round" })
        ] })
      ]
    }
  );
};
export {
  d as IconAlert
};
