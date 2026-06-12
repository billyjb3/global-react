import React from 'react';
import { useStackContext } from './StackMenuContext';

const StackMenuButton = (props) => {
  const {
    onClick,
    href,
    className = '',
    children,
  } = props;
  const { setIsOpen } = useStackContext();

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    onClick && onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`menuButton ${className}`}
    >
      {children}
    </a>
  );
};

export default StackMenuButton;
