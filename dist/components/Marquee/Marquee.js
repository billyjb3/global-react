import { jsx as W, jsxs as $ } from "react/jsx-runtime";
import { useRef as u, useState as d, useEffect as v } from "react";
import './styles.css';/* empty css           */
const I = (g) => {
  const {
    className: x = "",
    speed: H,
    // px/s
    children: h
  } = g, s = u(null), a = u(null), i = u(null), l = u(null), [q, w] = d(1), [f, E] = d(0), [o, M] = d(0), [n, N] = d(0);
  v(() => {
    const e = () => {
      var m, p, C;
      const t = (m = a == null ? void 0 : a.current) == null ? void 0 : m.offsetWidth, c = (p = l == null ? void 0 : l.current) == null ? void 0 : p.offsetWidth, r = (C = s == null ? void 0 : s.current) == null ? void 0 : C.offsetHeight;
      t && t !== o && M(t), c && c !== n && N(c), r && r !== f && E(r);
    };
    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
  }, []), v(() => {
    if (o && n) {
      let e = n, t = 1;
      if (o > n) {
        const r = Math.ceil(o / n);
        t = r * 2 - 1, e = r * n, w(t);
      }
      const c = e / H * 1e3;
      i.current && i.current.cancel(), i.current = s.current.animate([
        { transform: `translateX(-${e}px)` }
      ], {
        duration: c,
        iterations: 1 / 0,
        easing: "linear"
      });
    }
  }, [o, n]);
  const y = () => {
    i.current.pause();
  }, z = () => {
    i.current.play();
  }, L = () => {
    const e = [];
    for (let t = 0; t < q; t++)
      e.push(h);
    return e;
  };
  return /* @__PURE__ */ W(
    "div",
    {
      ref: a,
      className: `marqueContainer ${x}`,
      style: { height: `${f}px` },
      onMouseEnter: y,
      onMouseLeave: z,
      children: /* @__PURE__ */ $(
        "div",
        {
          ref: s,
          className: "marqueContent",
          children: [
            /* @__PURE__ */ W("div", { ref: l, className: "marqueChildContainer", children: h }),
            L()
          ]
        }
      )
    }
  );
};
export {
  I as Marquee
};
