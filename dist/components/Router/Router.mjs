import { jsx as h } from "react/jsx-runtime";
import { useState as l, useRef as w, useEffect as i } from "react";
import "../../context/StackNavContext.mjs";
import { RouterContext as f } from "../../context/RouterContext.mjs";
import "../../context/FormContext.mjs";
const y = (c) => {
  const {
    children: a,
    indexRedirect: r = ""
  } = c, [o, s] = l(window.location.pathname), e = w([]), u = (t) => {
    e.current.includes(t) || e.current.push(t);
  }, d = (t) => {
    window.history.pushState({
      path: `${t}`
    }, "", t), s(t);
  }, n = (t) => {
    window.history.replaceState({
      path: `${t}`
    }, "", t), s(t);
  }, p = (t) => {
    n(window.location.pathname);
  };
  i(() => {
    window.addEventListener("popstate", p);
  }, []), i(() => {
    e.current.length && !e.current.includes(o) && n(r);
  }, [o, e]), o === "/" && n(r);
  const m = {
    addPath: u,
    pathname: o,
    push: d,
    replace: n
  };
  return /* @__PURE__ */ h(f.Provider, { value: m, children: a });
};
export {
  y as Router
};
