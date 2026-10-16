import React, { useEffect, useState, useRef } from 'react'
import './styles.css';

export const Marquee = (props) => {
  const {
    className = '',
    speed, // px/s
    children,
  } = props;
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const childrenRef = useRef(null);

  const [repeats, setRepeats] = useState(1);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [childrenWidth, setChildrenWidth] = useState(0);

  useEffect(() => {
    const setSizing = () => {
      const containerW = containerRef?.current?.offsetWidth;
      const childrenW = childrenRef?.current?.offsetWidth;
      const contentH = contentRef?.current?.offsetHeight;

      if (containerW && containerW !== containerWidth) setContainerWidth(containerW);
      if (childrenW && childrenW !== childrenWidth) setChildrenWidth(childrenW);
      if (contentH && contentH !== containerHeight) setContainerHeight(contentH);
    };

    setSizing();
    window.addEventListener('resize', setSizing);
    return () => window.removeEventListener('resize', setSizing);
  }, []);

  useEffect(() => {
    if (containerWidth && childrenWidth) {
      let transWidth = childrenWidth;
      let repeats = 1;

      if (containerWidth > childrenWidth) {
        const fillCount = Math.ceil(containerWidth / childrenWidth);
        repeats = (fillCount * 2) - 1;
        transWidth = fillCount * childrenWidth;
        setRepeats(repeats);
      }

      const duration = transWidth / speed * 1000;
      if (animationRef.current) animationRef.current.cancel();
      animationRef.current = contentRef.current.animate([
        { transform: `translateX(-${transWidth}px)`},
      ], {
        duration,
        iterations: Infinity,
        easing: 'linear',
      });
    }
  }, [containerWidth, childrenWidth]);

  const handleHover = () => {
    animationRef.current.pause();
  };

  const handleBlur = () => {
    animationRef.current.play();
  };

  const getChildRender = () => {
    const render = [];
    for (let i = 0; i < repeats; i++) {
      render.push(children);
    }
    return render;
  };

  return (
    <div
      ref={containerRef}
      className={`marqueContainer ${className}`}
      style={{ height: `${containerHeight}px` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleBlur}
    >
      <div
        ref={contentRef}
        className={`marqueContent`}
      >
        <div ref={childrenRef} className={`marqueChildContainer`}>
          {children}
        </div>
        {getChildRender()}
      </div>
    </div>
  );
};
