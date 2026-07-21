import React, { useState, useEffect, useRef } from 'react';
import { RouterContext } from '../../context';

export const Router = (props) => {
  const {
    children,
    indexRedirect = '',
  } = props;
  const [pathname, setPathname] = useState(window.location.pathname);
  const sitePaths = useRef([]);

  const addPath = (path) => {
    if (!sitePaths.current.includes(path)) sitePaths.current.push(path);
  };

  const push = (path) => {
    window.history.pushState({
      path: `${path}`
    }, '', path);
    setPathname(path);
  };

  const replace = (path) => {
    window.history.replaceState({
      path: `${path}`
    }, '', path);
    setPathname(path);
  };

  const handlePopstate = (e) => {
    replace(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener('popstate', handlePopstate);
  }, [])

  useEffect(() => {
    if (sitePaths.current.length && !sitePaths.current.includes(pathname)) {
      replace(indexRedirect);
    }
  }, [pathname, sitePaths]);

  if (pathname === '/') {
    replace(indexRedirect);
  }

  const routerContext = {
    addPath,
    pathname,
    push,
    replace,
  };
  return (
    <RouterContext.Provider value={routerContext}>
      {children}
    </RouterContext.Provider>
  );
};
