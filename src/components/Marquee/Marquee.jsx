import React, { useEffect, useState, useRef } from 'react'
import './styles.css';

export const Marquee = (props) => {
  const {
    className = '',
    duration,
    children,
  } = props;
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const [repeats, setRepeats] = useState(2);
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const content = contentRef?.current;
    if (content) {
      setContentWidth(content.offsetWidth / repeats);
      setContainerHeight(content.offsetHeight);
    }
  }, [contentRef?.current?.offsetWidth, contentRef?.current?.offsetHeight]);

  const frames = [
    { transform: `translateX(-${contentWidth}px)`},
  ];
  const options = {
    duration,
    iterations: Infinity,
  };

  useEffect(() => {
    const content = contentRef?.current;
    if (content) animationRef.current = content.animate(frames, options);
  }, [contentRef?.current]);

  const handleHover = () => {
    animationRef.current.pause();
  };

  const handleBlur = () => {
    animationRef.current.play();
  };

  const getChildRender = () => {
    const render = [];
    const count = children.length;

    console.log(children[0].offsetWidth);
    // for (let i = 0; i < repeats; i++) {
    //   render.push(
    //     <div style={{
    //       display: 'grid',
    //       gridAutoFlow: 'column',
    //       gridAutoColumns: `minmax(max-content, 1fr)`,
    //     }}>
    //       {children}
    //     </div>
    //   );
    // }
    // for (let i = 0; i < repeats; i++) {
    //   render.push(
    //     <div className="marqueChildContainer">
    //       {children.map((child) => (
    //         <div className="marqueChild">
    //           {child}
    //         </div>
    //       ))}
    //     </div>
    //   );
    // }
    for (let i = 0; i < repeats; i++) {
      render.push(children);
    }
    return render;
    // return (
    //   <div style={{ display: 'grid', gridTemplateColumns: `repeat(${count}, 1fr)` }}>
    //     {children}
    //   </div>
    // );
  };

  // TODO: need a calc to determine how many copies of children should be rendered
  // TODO: find a way to have the edge elements fade in and out opacity. will have to be calculated
  return (
    <div
      className={`marqueContainer ${className}`}
      style={{ height: `${containerHeight}px` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleBlur}
    >
      <div
        ref={contentRef}
        className={`marqueContent`}
        // onMouseEnter={handleHover}
        // onMouseLeave={handleBlur}
      >
        {getChildRender()}
      </div>
    </div>
  );
};
