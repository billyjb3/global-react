import { jsx as a } from "react/jsx-runtime";
import c, { useEffect as l } from "react";
import { useRouter as h } from "../../context/RouterContext.js";
const R = (m) => {
  const {
    children: e,
    parentPath: r = "",
    // TODO: nested paths aren't completely implemented yet
    path: o = "",
    Component: n
  } = m, { pathname: p, addPath: s } = h(), t = r ? `${r}/${o}` : o, u = t ? p.includes(t) : !0;
  return l(() => {
    s(t);
  }, [t]), n && u ? e ? /* @__PURE__ */ a(n, { children: e.map((i) => c.cloneElement(i, { parentPath: t })) }) : /* @__PURE__ */ a(n, {}) : e ? c.cloneElement(e, { parentPath: t }) : null;
};
export {
  R as PageRoute
};
