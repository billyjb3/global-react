import React from 'react';

// TODO: each view box should be unique to the svg so need to pull that out of here
export const IconContainer = (props) => {
  const {
    size = '24px',
    className = '',
    svgProps = {},
    containerProps = {},
    children,
  } = props;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: size,
        height: size,
      }}
      {...containerProps}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'inline-block',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
        {...svgProps}
      >
        {children}
      </svg>
    </div>
  );
};
