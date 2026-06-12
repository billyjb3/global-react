import React from 'react';

export const IconSun = (props) => {
  const {
    size = '24px',
    className = '',
  } = props;

  const strokeWidth = '2';
  return (
    <span className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={true}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
        <g id="SVGRepo_iconCarrier">
          <circle
            cx="12"
            cy="12"
            r="5"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 2V4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 20V22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 12L2 12"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12L20 12"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.7778 4.22266L17.5558 6.25424"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4.22217 4.22266L6.44418 6.25424"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6.44434 17.5557L4.22211 19.7779"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.7778 19.7773L17.5558 17.5551"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </g>
      </svg>
    </span>
  );
};
