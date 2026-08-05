import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

export const SimpleToggleSwitch = (props) => {
  const {
    width = 80,
    height = 34,
    padding = 5,
    isOn,
    onClick,
    onLabel,
    offLabel,
    className = '',
    sliderClass = '',
  } = props;
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [slideLength, setSlideLength] = useState(0);

  useEffect(() => {
    if (containerRef.current && sliderRef.current) {
      const cw = containerRef.current.offsetWidth;
      const sw = sliderRef.current.offsetWidth;
      setSlideLength(cw - sw);
    }
  }, [containerRef.current, sliderRef.current]);

  const onOffClass = isOn ? `switcherOn` : `switcherOff`;
  const sliderPosition = isOn ? { right: 0 } : { left: 0 };

  console.log('slideLength: ' + slideLength);
  return (
    <button
      onClick={onClick}
      aria-label={isOn ? onLabel : offLabel}
      style={{ width, height, padding }}
      className={`${onOffClass} toggleSwitchButton ${className}`}
    >
      <div ref={containerRef} className="switchContainer">
        <div
          ref={sliderRef}
          className={`slider ${sliderClass}`}
          style={{
            transform: `translateX(${isOn ? `${slideLength}px` : '0px'})`,
          }}
        />
      </div>
    </button>
  );
};
