import React from 'react';
import { useStackContext } from './StackMenuContext';

const StackMenu = (props) => {
  const {
    className = '',
    children,
  } = props;
  const { id, isOpen } = useStackContext();

  console.log('isOpen: ' + isOpen);
  return isOpen ? (
    <nav className={`stackMenu ${className}`} id={id}>
      {children}
    </nav>
  ) : null;
};

export default StackMenu;
