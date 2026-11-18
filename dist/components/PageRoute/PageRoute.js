import { jsx as p } from "react/jsx-runtime";
import h, { useEffect as l } from "react";
import { useRouter as E } from "../../context/RouterContext.js";
import { useRouterAuthentication as g } from "../../context/RouterAuthenticationContext.js";
const L = (d) => {
  const {
    children: e,
    parentPath: u = "",
    // TODO: nested paths aren't completely implemented yet
    path: c = "",
    Component: r,
    ...o
  } = d, {
    pathname: f,
    addPath: R,
    replace: P
  } = E(), {
    isAuthenticatedRoute: i,
    isAuthenticated: s,
    isLoading: a,
    unauthenticatedRedirect: m
  } = g(), t = u ? `${u}/${c}` : c, n = t ? f.includes(t) : !0;
  return l(() => {
    R(t);
  }, [t]), l(() => {
    n && i && !s && !a && P(m);
  }, [
    t,
    n,
    i,
    s,
    m,
    a
  ]), n && i && a ? null : r && n ? e ? /* @__PURE__ */ p(r, { children: e.map((A) => h.cloneElement(A, { parentPath: t, ...o })) }) : /* @__PURE__ */ p(r, { ...o }) : e ? h.cloneElement(e, { parentPath: t, ...o }) : null;
};
export {
  L as PageRoute
};
