import { createContext as t, useContext as e } from "react";
const o = t({
  addPath: () => {
  },
  pathname: window.location.pathname,
  push: () => {
  },
  replace: () => {
  }
}), n = () => e(o);
export {
  o as RouterContext,
  n as useRouter
};
