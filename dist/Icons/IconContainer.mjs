import { jsx as t } from "react/jsx-runtime";
import "react";
const c = (o) => {
  const {
    size: i = "24px",
    className: e = "",
    svgProps: s = {},
    containerProps: n = {},
    children: l
  } = o;
  return /* @__PURE__ */ t(
    "div",
    {
      className: e,
      style: {
        position: "relative",
        display: "inline-block",
        width: i,
        height: i
      },
      ...n,
      children: /* @__PURE__ */ t(
        "svg",
        {
          viewBox: `0 0 ${i} ${i}`,
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            display: "inline-block",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
          },
          ...s,
          children: l
        }
      )
    }
  );
};
export {
  c as IconContainer
};
