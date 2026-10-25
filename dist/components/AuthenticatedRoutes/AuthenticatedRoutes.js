import { jsx as u } from "react/jsx-runtime";
import "react";
import { useRouter as a } from "../../context/RouterContext.js";
import { RouterAuthenticationContext as s } from "../../context/RouterAuthenticationContext.js";
const f = (t) => {
  const {
    unauthenticatedRedirect: e = "/",
    isAuthenticated: o = !1,
    isLoading: i = !1,
    children: r
  } = t;
  a();
  const n = {
    unauthenticatedRedirect: e,
    isAuthenticated: o,
    isAuthenticatedRoute: !0,
    isLoading: i
  };
  return /* @__PURE__ */ u(s.Provider, { value: n, children: r });
};
export {
  f as AuthenticatedRoutes
};
