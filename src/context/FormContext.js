import { createContext, useContext } from 'react';

export const FormContext = createContext({
  inputCallback: () => {},
  handleSubmit: () => {},
  handleInputChange: () => {},
  handleInputFocus: () => {},
  handleInputBlur: () => {},
  formState: {},
});

export const useFormContext = () => useContext(FormContext);
