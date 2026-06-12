import React from 'react';
import { useFormContext } from './FormContext';

const SubmitButton = (props) => {
  const {
    children,
    className = '',
  } = props;
  const { handleSubmit } = useFormContext();

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className={`${className}`}
    >
      {children}
    </button>
  )
};

export default SubmitButton;