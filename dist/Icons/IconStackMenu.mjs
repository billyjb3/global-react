import { jsx as e, jsxs as t } from "react/jsx-runtime";
import "react";
const l = (o) => {
  const {
    size: i = "24px",
    className: r = ""
  } = o;
  return /* @__PURE__ */ e(
    "div",
    {
      className: r,
      style: {
        position: "relative",
        display: "inline-block",
        width: i,
        height: i
      },
      children: /* @__PURE__ */ t(
        "svg",
        {
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": !0,
          style: {
            display: "inline-block",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
          },
          children: [
            /* @__PURE__ */ e("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
            /* @__PURE__ */ e("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ e("g", { id: "SVGRepo_iconCarrier", children: /* @__PURE__ */ e(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
              }
            ) })
          ]
        }
      )
    }
  );
};
export {
  l as IconStackMenu
};
