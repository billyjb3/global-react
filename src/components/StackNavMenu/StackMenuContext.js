import { createContext, useContext } from 'react';

export const StackContext = createContext({
  id: '',
  isOpen: false,
  setIsOpen: () => {},
});

export const useStackContext = () => useContext(StackContext);
