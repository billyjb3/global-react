import { createContext, useContext } from 'react';

export const StackNavContext = createContext({
  id: '',
  isOpen: false,
  setIsOpen: () => {},
});

export const useStackNavContext = () => useContext(StackNavContext);
