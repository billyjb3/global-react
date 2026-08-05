import { useState as h, useEffect as l } from "react";
const p = {
  isExtraSmall: { max: 500 },
  isSmall: { min: 500, max: 800 },
  isMedium: { min: 800, max: 1020 },
  isLarge: { min: 1020 }
};
function f(o) {
  const n = () => {
    const m = o || p, t = window == null ? void 0 : window.innerWidth, s = {};
    return Object.entries(m).forEach(([u, d]) => {
      const { min: i, max: r } = d, k = i ? t >= i : !0, w = r ? t < r : !0;
      s[u] = k && w;
    }), s;
  }, [a, c] = h(n()), e = () => {
    c(n());
  };
  return l(() => (e(), window.addEventListener("resize", e), () => {
    window.removeEventListener("resize", e);
  }), []), a;
}
export {
  p as defaultBreakpoints,
  f as useBreakpoints
};
