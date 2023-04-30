import { useState } from "react";

const useInput = (validate) => {
  const [inputValue, setInputValue] = useState("");
  const [inputBlur, setInputBlur] = useState(false);

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputBlur(true);
  };

  const inputIsTouched = () => {
    setInputBlur(true)
  }

  const inputIsValid = validate(inputValue);
  const inputIsInvalid = !inputIsValid && inputBlur;

  return {
    inputValue,
    inputChangeHandler,
    inputBlurHandler,
    inputIsTouched,
    inputIsValid,
    inputIsInvalid,
  };
};

export default useInput;
