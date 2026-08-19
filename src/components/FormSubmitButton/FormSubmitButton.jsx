import React from 'react';
import { useFormContext } from '../../context';

export const FormSubmitButton = (props) => {
  const {
    children,
    className = '',
    ...rest
  } = props;
  const { handleSubmit } = useFormContext();

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className={`${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
