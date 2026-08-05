import { jsx as u } from "react/jsx-runtime";
import { useRef as l, useState as s, useEffect as h } from "react";
import './styles.css';/* empty css        */
const j = (d) => {
  var i, a;
  const {
    className: f = "",
    duration: m,
    children: r
  } = d, t = l(null), n = l(null), [o, M] = s(2), [p, g] = s(0), [C, H] = s(0);
  h(() => {
    const e = t == null ? void 0 : t.current;
    e && (H(e.offsetWidth / o), g(e.offsetHeight));
  }, [(i = t == null ? void 0 : t.current) == null ? void 0 : i.offsetWidth, (a = t == null ? void 0 : t.current) == null ? void 0 : a.offsetHeight]);
  const W = [
    { transform: `translateX(-${C}px)` }
  ], v = {
    duration: m,
    iterations: 1 / 0
  };
  h(() => {
    const e = t == null ? void 0 : t.current;
    e && (n.current = e.animate(W, v));
  }, [t == null ? void 0 : t.current]);
  const x = () => {
    n.current.pause();
  }, q = () => {
    n.current.play();
  }, y = () => {
    const e = [];
    r.length, console.log(r[0].offsetWidth);
    for (let c = 0; c < o; c++)
      e.push(r);
    return e;
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: `marqueContainer ${f}`,
      style: { height: `${p}px` },
      onMouseEnter: x,
      onMouseLeave: q,
      children: /* @__PURE__ */ u(
        "div",
        {
          ref: t,
          className: "marqueContent",
          children: y()
        }
      )
    }
  );
};
export {
  j as Marquee
};
