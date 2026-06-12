import React from 'react';
import TextInputCore from './TextInputCore';
import InputErrorMessage from './InputErrorMessage';
import { useFormContext } from './FormContext';

// TODO: update to adjust for font size overrides from user
const IntegratedLabelTextInput = (props) => {
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
      <div className="positionContainer">
        <TextInputCore
          id={id}
          className={`textInput ${inputClass}`}
          {...rest}
        />
        <label
          htmlFor={id}
          className={`textInputLabel ${isActive ? activeLabelClass : labelClass} ${isActive ? 'active' : ''}`}
        >
          {label}
        </label>
        <InputErrorMessage inputId={id} className={`errorMessage ${errorClass}`} />
      </div>
    </div>
  );
};

export default IntegratedLabelTextInput;

