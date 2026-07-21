import React, { useState, useRef } from 'react';
import { StackNavContext } from '../../context';
import { useOnClickout } from '../../hooks';
import './styles.css';

export const StackNav = (props) => {
  const {
    id = 'stackNavMenu',
    children,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useOnClickout(menuRef, () => setIsOpen(false));

  const context = { id, isOpen, setIsOpen };
  return (
    <StackNavContext.Provider value={context}>
      <div ref={menuRef} className={`stackNavContainer`}>
        {children}
      </div>
    </StackNavContext.Provider>
  );
};
