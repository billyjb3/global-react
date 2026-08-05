import { useEffect as r } from "react";
function c(e, n) {
  r(() => {
    const t = (o) => {
      e.current && !e.current.contains(o.target) && n();
    };
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, [e, n]);
}
export {
  c as useOnClickout
};
