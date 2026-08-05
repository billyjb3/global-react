import React from 'react';
import './styles.css';

export const ButtonIcon = (props) => {
  const {
    onClick,
    isLink,
    href = '',
    className = '',
    children,
    ...rest
  } = props;

  return isLink ? (
    <a
      href={href}
      className={`iconButton ${className}`}
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`iconButton ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
