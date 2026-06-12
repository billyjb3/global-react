import React, { useState, useRef } from 'react';
import { StackContext } from './StackMenuContext';
import { useOnClickout } from '../../hooks';

const StackNavMenu = (props) => {
  const {
    id = 'stackNavMenu',
    children,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useOnClickout(menuRef, () => setIsOpen(false));

  const context = { id, isOpen, setIsOpen };
  return (
    <StackContext.Provider value={context}>
      <div ref={menuRef} className={`menuContainer`}>
        {children}
      </div>
    </StackContext.Provider>
  );
};

export default StackNavMenu;
