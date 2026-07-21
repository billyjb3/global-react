import React from 'react';
import './styles.css';

export const ButtonIcon = (props) => {
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
