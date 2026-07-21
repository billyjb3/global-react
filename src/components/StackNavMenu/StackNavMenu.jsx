import React from 'react';
import { useStackNavContext } from '../../context';
import './styles.css';

export const StackNavMenu = (props) => {
  const {
    className = '',
    children,
  } = props;
  const { id, isOpen } = useStackNavContext();

  return isOpen ? (
    <nav className={`stackNavMenu ${className}`} id={id}>
      {children}
    </nav>
  ) : null;
};
