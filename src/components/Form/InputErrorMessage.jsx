import React from 'react';
import { useFormContext } from './FormContext';

const InputErrorMessage = (props) => {
  const {
    inputId,
    className = '',
  } = props;
  const { formState } = useFormContext();
  const { error } = formState?.[inputId] || {};

  return error ? (
    <span className={`${className}`}>
      {error}
    </span>
  ) : null;
};

export default InputErrorMessage;
