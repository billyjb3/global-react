import { createContext as t, useContext as e } from "react";
const n = t({
  isAuthenticatedRoute: !1,
  unauthenticatedRedirect: "/",
  isAuthenticated: !1,
  isLoading: !1
}), i = () => e(n);
export {
  n as RouterAuthenticationContext,
  i as useRouterAuthentication
};
