import React from 'react';
import { useFormContext } from '../../context';

export const FormSubmitButton = (props) => {
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
