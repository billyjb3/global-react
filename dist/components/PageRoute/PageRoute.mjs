import { jsx as a } from "react/jsx-runtime";
import m, { useEffect as l } from "react";
import "../../context/StackNavContext.mjs";
import { useRouter as h } from "../../context/RouterContext.mjs";
import "../../context/FormContext.mjs";
const R = (p) => {
  const {
    children: e,
    parentPath: n = "",
    // TODO: nested paths aren't completely implemented yet
    path: o = "",
    Component: r
  } = p, { pathname: i, addPath: u } = h(), t = n ? `${n}/${o}` : o, c = t ? i.includes(t) : !0;
  return l(() => {
    u(t);
  }, [t]), r && c ? e ? /* @__PURE__ */ a(r, { children: e.map((s) => m.cloneElement(s, { parentPath: t })) }) : /* @__PURE__ */ a(r, {}) : e ? m.cloneElement(e, { parentPath: t }) : null;
};
export {
  R as PageRoute
};
