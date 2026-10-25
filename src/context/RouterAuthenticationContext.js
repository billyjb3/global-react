import { createContext, useContext } from 'react';

export const RouterAuthenticationContext = createContext({
  isAuthenticatedRoute: false,
  unauthenticatedRedirect: '/',
  isAuthenticated: false,
  isLoading: false,
});

export const useRouterAuthentication = () => useContext(RouterAuthenticationContext);
