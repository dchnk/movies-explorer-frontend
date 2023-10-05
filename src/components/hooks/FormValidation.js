import React, { useCallback, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

//хук управления формой и валидации формы
export function useFormWithValidation() {

  const currentUser = useContext(CurrentUserContext);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: ''
  })


  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser])



  const handleChange = (event) => {
    const target = event.target;
    const targetName = target.name;
    const value = target.value;

    setValues({ ...values, [targetName]: value });

    setErrors({ ...errors, [targetName]: target.validationMessage });

    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid };
}