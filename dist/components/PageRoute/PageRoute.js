import { jsx as m } from "react/jsx-runtime";
import p, { useEffect as h } from "react";
import { useRouter as A } from "../../context/RouterContext.js";
import { useRouterAuthentication as E } from "../../context/RouterAuthenticationContext.js";
const C = (l) => {
  const {
    children: e,
    parentPath: a = "",
    // TODO: nested paths aren't completely implemented yet
    path: u = "",
    Component: r
  } = l, {
    pathname: d,
    addPath: f,
    replace: R
  } = A(), {
    isAuthenticatedRoute: o,
    isAuthenticated: c,
    isLoading: i,
    unauthenticatedRedirect: s
  } = E(), t = a ? `${a}/${u}` : u, n = t ? d.includes(t) : !0;
  return h(() => {
    f(t);
  }, [t]), h(() => {
    n && o && !c && !i && R(s);
  }, [
    t,
    n,
    o,
    c,
    s,
    i
  ]), n && o && i ? null : r && n ? e ? /* @__PURE__ */ m(r, { children: e.map((P) => p.cloneElement(P, { parentPath: t })) }) : /* @__PURE__ */ m(r, {}) : e ? p.cloneElement(e, { parentPath: t }) : null;
};
export {
  C as PageRoute
};
