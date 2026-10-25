import React from 'react';
import { useRouter, RouterAuthenticationContext } from '../../context';

export const AuthenticatedRoutes = (props) => {
  const {
    unauthenticatedRedirect = '/',
    isAuthenticated = false,
    isLoading = false,
    children,
  } = props;
  const { } = useRouter();

  const authContext = {
    unauthenticatedRedirect,
    isAuthenticated,
    isAuthenticatedRoute: true,
    isLoading,
  };
  return (
    <RouterAuthenticationContext.Provider value={authContext}>
      {children}
    </RouterAuthenticationContext.Provider>
  );
};
