import React from 'react';
import { FormTextInput } from '../FormTextInput/FormTextInput';
import { FormInputErrorMessage } from '../FormInputErrorMessage/FormInputErrorMessage';
import { useFormContext } from '../../context';
import './styles.css';

// TODO: update to adjust for font size overrides from user
export const FormIntegratedLabelTextInput = (props) => {
  const {
    id,
    label,
    containerClass = '',
    inputClass = '',
    labelClass = '',
    activeLabelClass = '',
    errorClass = '',
    ...rest
  } = props;
  const { formState } = useFormContext();
  const { value, isFocused } = formState?.[id] || {};

  const isActive = !!value || isFocused;
  return (
    <div className={`${containerClass}`}>
      <div className="formIntegratedLabelContainer">
        <FormTextInput
          id={id}
          className={`formIntegratedLabelTextInput ${inputClass}`}
          {...rest}
        />
        <label
          htmlFor={id}
          className={`formIntegratedLabel ${isActive ? activeLabelClass : labelClass} ${isActive ? 'active' : ''}`}
        >
          {label}
        </label>
        <FormInputErrorMessage inputId={id} className={`formIntegratedErrorMessage ${errorClass}`} />
      </div>
    </div>
  );
};
