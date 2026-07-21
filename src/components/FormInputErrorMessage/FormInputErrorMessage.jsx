import React from 'react';
import { useFormContext } from '../../context';

export const FormInputErrorMessage = (props) => {
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
