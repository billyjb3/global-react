import { jsxs as a, Fragment as m, jsx as o } from "react/jsx-runtime";
import { useRef as d, useEffect as c } from "react";
import { createPortal as i } from "react-dom";
import './styles.css';/* empty css           */
import { useOnClickout as f } from "../../hooks/useOnClickout.js";
const h = (t) => {
  const {
    onClose: r,
    className: l = "",
    overlayClass: n = "",
    children: s
  } = t, e = d(null);
  return f(e, r), c(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }), []), i(
    /* @__PURE__ */ a(m, { children: [
      /* @__PURE__ */ o("div", { className: `modalOverlay ${n}` }),
      /* @__PURE__ */ o("div", { className: "modalContainer", children: /* @__PURE__ */ o(
        "div",
        {
          ref: e,
          className: `modalContent ${l}`,
          children: s
        }
      ) })
    ] }),
    document.body
  );
};
export {
  h as Modal
};
