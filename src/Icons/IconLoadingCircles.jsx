import React from 'react';

export const IconLoadingCircles = (props) => {
  const {
    size = '24px',
    className = '',
  } = props;

  return (
    <span className={className}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
        <g id="SVGRepo_iconCarrier">
          <circle cx="12" cy="20" r="2" />
          <circle cx="12" cy="4" r="2" />
          <circle cx="6.343" cy="17.657" r="2" />
          <circle cx="17.657" cy="6.343" r="2"/>
          <circle cx="4" cy="12" r="2.001"/>
          <circle cx="20" cy="12" r="2"/>
          <circle cx="6.343" cy="6.344" r="2"/>
          <circle cx="17.657" cy="17.658" r="2"/>
        </g>
      </svg>
    </span>
  );
};
