import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FormContext } from './FormContext';

/*
  validation object
  {
    validateOnChange: bool,
    validate: (value) => bool,
    errorMessage: string,
  }
*/

const Form = (props) => {
  const {
    onSubmit,
    children,
    clearRef,
    className = '',
  } = props;
  const [formState, setFormState] = useState({});
  const formConfig = useRef({});

  const inputCallback = (id, inputConfig) => {
    formConfig.current = ({
      ...formConfig.current,
      [id]: {
        ...inputConfig
      },
    });
    window.formConfig = formConfig;
    if (!formState[id]) {
      setFormState((prevState => ({
        ...prevState,
        [id]: { value: '' },
      })));
    }
  };

  const updateInputState = (id, state) => {
    setFormState((prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        ...state,
      },
    })));
  };

  const validateInput = (id, isOnChange) => { // TODO: might want to find a way to bypass this for isOnChange and no validateOnChange validations
    console.log('validating: ' + id);
    const validations = formConfig.current[id].validations;
    if (!validations) return true;
    let message = '';
    validations.forEach((validation) => {
      const {
        validateOnChange,
        validate,
        errorMessage,
      } = validation;
      if (!isOnChange || validateOnChange) {
        const valid = validate(formState[id].value);
        if (!valid) message = errorMessage;
      }
    });
    if (message) { // TODO: this gets hit even for no validating on change. problem?
      console.log('setting error for: ' + id);
      updateInputState(id, { error: message });
      return false;
    } else {
      console.log('no error for: ' + id);
      updateInputState(id, { error: false });
      return true;
    }
  };

  const validateForm = () => {
    console.log('in validateForm');
    let valid = true;
    Object.keys(formConfig.current).forEach((id) => {
      console.log('in validation loop, current: ' + id);
      valid = validateInput(id) && valid;
    });
    return valid;
  };

  const getFormData = () => {
    const data = {};
    Object.values(formConfig.current).forEach((value) => {
      data[value.requestKey] = value.ref.current.value; // TODO: use state or ref?
    });
    return data;
  };

  const clearForm = useCallback(() => {
    // Object.values(formConfig.current).forEach((value) => {
    //   if (value.isClearable) value.ref.current.value = '';
    // }); //TODO
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(getFormData());
    }
  };

  const handleInputChange = (e, id) => {
    updateInputState(id, { value: e.target.value });
    validateInput(id, true);
  };
  const handleInputFocus = (id) => {
    updateInputState(id, { error: false, isFocused: true });
  };
  const handleInputBlur = (id) => {
    updateInputState(id, { isFocused: false });
  };

  useEffect(() => {
    if (clearRef) clearRef.current = clearForm;
  }, [clearForm])

  const formContext = {
    inputCallback,
    handleSubmit,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    formState,
  };

  return (
    <FormContext.Provider value={formContext}>
      <form className={`${className}`}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
