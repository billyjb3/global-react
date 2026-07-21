import React from 'react';
import { useStackNavContext } from '../../context';
import './styles.css';

export const StackNavButton = (props) => {
  const {
    isRouteChange = true,
    onClick,
    href,
    className = '',
    children,
  } = props;
  const { setIsOpen } = useStackNavContext();

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    onClick && onClick();
  };

  return isRouteChange ? (
    <a
      href={href}
      onClick={handleClick}
      className={`stackNavButton ${className}`}
    >
      {children}
    </a>
  ) : (
    <button
      onClick={handleClick}
      className={`stackNavButton ${className}`}
    >
      {children}
    </button>
  );
};
