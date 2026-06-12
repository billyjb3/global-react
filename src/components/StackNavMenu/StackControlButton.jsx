import React from 'react';
import { useStackContext } from './StackMenuContext';
import { IconButton } from '../IconButton';
import { IconStackMenu } from '../../Icons';

// pre-made button choice, but can be easily replaced with anything custom as long as its under context provider
const StackControlButton = (props) => {
  const {
    className = '',
    onClick,
  } = props;
  const { id, isOpen, setIsOpen } = useStackContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick && onClick();
  }
  return (
    <IconButton
      onClick={handleClick}
      aria-label={isOpen ? 'close nav menu' : 'open nav menu'}
      aria-expanded={isOpen}
      aria-control={id}
      className={className}
    >
      <IconStackMenu />
    </IconButton>
  );
};

export default StackControlButton;
