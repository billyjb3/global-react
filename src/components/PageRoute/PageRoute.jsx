import React, { useEffect } from 'react';
import { useRouter, useRouterAuthentication } from '../../context';

export const PageRoute = (props) => {
  const {
    children,
    parentPath = '', // TODO: nested paths aren't completely implemented yet
    path = '',
    Component,
  } = props;
  const {
    pathname,
    addPath,
    replace,
  } = useRouter();
  const {
    isAuthenticatedRoute,
    isAuthenticated,
    isLoading,
    unauthenticatedRedirect,
  } = useRouterAuthentication();

  const composedPath = parentPath ? `${parentPath}/${path}` : path;
  const isOnRoute = !composedPath ? true : pathname.includes(composedPath);

  useEffect(() => {
    addPath(composedPath);
  }, [composedPath]);

  useEffect(() => {
    if (isOnRoute && isAuthenticatedRoute && !isAuthenticated && !isLoading) {
      replace(unauthenticatedRedirect);
    }
  }, [
    composedPath,
    isOnRoute,
    isAuthenticatedRoute,
    isAuthenticated,
    unauthenticatedRedirect,
    isLoading,
  ]);

  if (isOnRoute && isAuthenticatedRoute && isLoading) return null;

  if (Component && isOnRoute) {
    if (children) {
      return (
        <Component>
          {children.map((child) => React.cloneElement(child, { parentPath: composedPath }))}
        </Component>
      );
    } else {
      return <Component />;
    }
  }

  if (children) return (
    React.cloneElement(children, { parentPath: composedPath })
  );

  return null;
};
