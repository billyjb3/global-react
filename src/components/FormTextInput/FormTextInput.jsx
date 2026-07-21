import React, { useRef, useEffect } from 'react';
import { useFormContext } from '../../context';

export const FormTextInput = (props) => {
  const {
    id,
    requestKey,
    isRequired = false,
    validations = [],
    onFocus,
    onBlur,
    onChange,
    className = '',
    isTextArea = false,
    rows = 10,
  } = props;
  const ref = useRef(null);
  const {
    inputCallback,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    formState,
  } = useFormContext();
  const {
    value,
    error,
    isFocused,
  } = formState?.[id] || {};

  useEffect(() => {
    inputCallback(id, {
      ref,
      requestKey,
      validations,
      isClearable: true,
    });
  }, [
    ref,
    inputCallback,
    id,
    requestKey,
    validations,
  ]);

  const handleChange = (e) => {
    handleInputChange(e, id);
    onChange && onChange(e);
  };
  const handleFocus = () => {
    handleInputFocus(id);
    onFocus && onFocus();
  };
  const handleBlur = () => {
    handleInputBlur(id);
    onBlur && onBlur();
  };

  const isActive = !!value || isFocused;
  const errorTag = error ? 'inputError' : '';
  const focusTag = isFocused ? 'inputFocused' : '';
  const activeTag = isActive ? 'inputActive' : '';
  return isTextArea ? (
    <textarea
      id={id}
      ref={ref}
      required={isRequired}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`${className} ${errorTag} ${focusTag} ${activeTag}`}
      rows={rows}
      value={value}
    />
  ) : (
    <input
      id={id}
      ref={ref}
      required={isRequired}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`${className} ${errorTag} ${focusTag} ${activeTag}`}
      value={value}
    />
  );
};
