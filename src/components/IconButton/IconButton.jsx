import React from 'react';

const IconButton = (props) => {
  const {
    onClick,
    className = '',
    children,
    ...rest
  } = props;

  return (
    <button
      onClick={onClick}
      className={`iconButton ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
