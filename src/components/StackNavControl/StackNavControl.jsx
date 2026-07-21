import React from 'react';
import { useStackNavContext } from '../../context';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { IconStackMenu } from '../../Icons';

// pre-made button choice, but can be easily replaced with anything custom as long as its under context provider
export const StackNavControl = (props) => {
  const {
    className = '',
    onClick,
  } = props;
  const { id, isOpen, setIsOpen } = useStackNavContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick && onClick();
  }
  return (
    <ButtonIcon
      onClick={handleClick}
      aria-label={isOpen ? 'close nav menu' : 'open nav menu'}
      aria-expanded={isOpen}
      aria-control={id}
      className={className}
    >
      <IconStackMenu />
    </ButtonIcon>
  );
};
