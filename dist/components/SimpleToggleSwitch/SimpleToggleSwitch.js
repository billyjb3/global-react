import { jsx as n } from "react/jsx-runtime";
import { useRef as l, useState as S, useEffect as $ } from "react";
import './styles.css';/* empty css           */
const N = (c) => {
  const {
    width: i = 80,
    height: o = 34,
    padding: a = 5,
    isOn: s,
    onClick: f,
    onLabel: d,
    offLabel: h,
    className: u = "",
    sliderClass: m = ""
  } = c, e = l(null), t = l(null), [r, g] = S(0);
  $(() => {
    if (e.current && t.current) {
      const w = e.current.offsetWidth, L = t.current.offsetWidth;
      g(w - L);
    }
  }, [e.current, t.current]);
  const p = s ? "switcherOn" : "switcherOff";
  return console.log("slideLength: " + r), /* @__PURE__ */ n(
    "button",
    {
      onClick: f,
      "aria-label": s ? d : h,
      style: { width: i, height: o, padding: a },
      className: `${p} toggleSwitchButton ${u}`,
      children: /* @__PURE__ */ n("div", { ref: e, className: "switchContainer", children: /* @__PURE__ */ n(
        "div",
        {
          ref: t,
          className: `slider ${m}`,
          style: {
            transform: `translateX(${s ? `${r}px` : "0px"})`
          }
        }
      ) })
    }
  );
};
export {
  N as SimpleToggleSwitch
};
