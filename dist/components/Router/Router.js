import { jsx as l } from "react/jsx-runtime";
import { useState as m, useRef as w, useEffect as i } from "react";
import { RouterContext as f } from "../../context/RouterContext.js";
const v = (c) => {
  const {
    children: a,
    indexRedirect: r = "/"
  } = c, [n, s] = m(window.location.pathname), e = w([]), u = (t) => {
    e.current.includes(t) || e.current.push(t);
  }, d = (t) => {
    window.history.pushState({
      path: `${t}`
    }, "", t), s(t);
  }, o = (t) => {
    window.history.replaceState({
      path: `${t}`
    }, "", t), s(t);
  }, p = (t) => {
    o(window.location.pathname);
  };
  i(() => {
    window.addEventListener("popstate", p);
  }, []), i(() => {
    e.current.length && !e.current.includes(n) && o(r);
  }, [n, e]), n === "/" && r !== "/" && o(r);
  const h = {
    addPath: u,
    pathname: n,
    push: d,
    replace: o
  };
  return /* @__PURE__ */ l(f.Provider, { value: h, children: a });
};
export {
  v as Router
};
