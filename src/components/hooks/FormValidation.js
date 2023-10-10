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

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleChange = (event) => {
    const target = event.target;
    const targetName = target.name;
    const value = target.value;
    if (targetName === 'email') {
      if (!validateEmail(value)) {
        target.setCustomValidity('Email введен не корректно.')
      } else {
        target.setCustomValidity('')
      }
    }
    

    setValues({ ...values, [targetName]: value });

    setErrors({ ...errors, [targetName]: target.validationMessage });

    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {
      name: '',
      email: '',
      password: ''
    }, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid };
}