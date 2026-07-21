import React, { useState, useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { IconClose } from '../../Icons'
import { useStackNavContext } from '../../context';
import './styles.css';

export const StackNavMenu = (props) => {
  const {
    className = '',
    children,
  } = props;
  const { id, isOpen, setIsOpen } = useStackNavContext();

  return (
    <nav
      className={`stackNavMenu ${isOpen ? 'stackMenuOpen' : ''} ${className}`} id={id}
      aria-hidden={isOpen}
    >
      <div className="stackNavMenuClose">
        <ButtonIcon onClick={() => setIsOpen(false)}>
          <IconClose />
        </ButtonIcon>
      </div>
      {children}
    </nav>
  );
};
