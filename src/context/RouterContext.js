import { createContext, useContext } from 'react';

export const RouterContext = createContext({
  addPath: () => {},
  pathname: window.location.pathname,
  push: () => {},
  replace: () => {},
});

export const useRouter = () => useContext(RouterContext);
