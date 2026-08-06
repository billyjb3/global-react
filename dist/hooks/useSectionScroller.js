import { useRef as f, useState as a, useEffect as b } from "react";
function k() {
  const n = f({}), [s, l] = a(null), u = {
    threshold: 0.6,
    behavior: "smooth",
    block: "start"
    // Vertical alignment: 'start', 'center', 'end', or 'nearest'
  }, i = (r, t, e = {}) => {
    if (!n.current[t]) {
      const c = {
        ...u,
        ...e
      }, o = new IntersectionObserver(([h]) => {
        h.isIntersecting && l(t);
      }, { threshold: c.threshold });
      n.current[t] = {
        ref: r,
        observer: o,
        ...c
      }, o.observe(r.current);
    }
  };
  return b(() => () => {
    Object.values(n.current).forEach((r) => {
      const { ref: t, observable: e } = r;
      e == null || e.unobserve(t.current), e == null || e.disconnect();
    });
  }, []), { registerScrollable: i, handleClick: (r) => {
    const t = n.current[r];
    if (t) {
      const {
        ref: e,
        behavior: c,
        block: o
      } = t;
      e.current.scrollIntoView({ behavior: c, block: o });
    }
  }, currentSection: s };
}
export {
  k as useSectionScroller
};
