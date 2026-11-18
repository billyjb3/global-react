import { jsx as p } from "react/jsx-runtime";
import h, { useEffect as l } from "react";
import { useRouter as E } from "../../context/RouterContext.js";
import { useRouterAuthentication as g } from "../../context/RouterAuthenticationContext.js";
const L = (d) => {
  const {
    children: e,
    parentPath: a = "",
    // TODO: nested paths aren't completely implemented yet
    path: u = "",
    Component: r,
    ...c
  } = d, {
    pathname: f,
    addPath: R,
    replace: P
  } = E(), {
    isAuthenticatedRoute: o,
    isAuthenticated: s,
    isLoading: i,
    unauthenticatedRedirect: m
  } = g(), t = a ? `${a}/${u}` : u, n = t ? f.includes(t) : !0;
  return l(() => {
    R(t);
  }, [t]), l(() => {
    n && o && !s && !i && P(m);
  }, [
    t,
    n,
    o,
    s,
    m,
    i
  ]), n && o && i ? null : r && n ? e ? /* @__PURE__ */ p(r, { children: e.map((A) => h.cloneElement(A, { parentPath: t, ...c })) }) : /* @__PURE__ */ p(r, {}) : e ? h.cloneElement(e, { parentPath: t, ...c }) : null;
};
export {
  L as PageRoute
};
