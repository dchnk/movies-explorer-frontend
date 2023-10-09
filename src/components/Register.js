import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../images/logo__COLOR_main-1.svg";
import { useFormWithValidation } from "./hooks/FormValidation";

export const Register = ({ onSubmit, errorText, onChangeInputs, isLoading }) => {
  const formInputsUse = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, email } = formInputsUse.values;
    onSubmit(password, email, name)
  }

  function handleChange(e) {
    formInputsUse.handleChange(e);
    if (errorText !== '') {
      onChangeInputs('');
    }
  }

  return (
    <div className="register">
      <form className="register__form" name="register" id="register" onSubmit={handleSubmit}>
        <Link to="/" className="register__link-logo"><img className="register__logo" src={Logo} alt="логотип" /></Link>
        <h2 className="register__heading">Добро пожаловать!</h2>
        <p className="register__placeholder">Имя</p>
        <input className={formInputsUse.errors.name ?
          ("register__input register__input_error register__input_type_name")
          :
          ("register__input register__input_type_name")}
          onChange={handleChange}
          value={formInputsUse.values.name}
          name="name"
          autoComplete="name" id="register-name"
          type="text"
          placeholder=""
          required>
        </input>
        <span className="register__input-error register-input-name-error register__input-error_active">{formInputsUse.errors.name}</span>
        <p className="register__placeholder">E-mail</p>
        <input
          className={formInputsUse.errors.email ?
            ("register__input register__input_error register__input_type_email")
            :
            ("register__input register__input_type_email")}
          onChange={handleChange}
          value={formInputsUse.values.email}
          name="email"
          autoComplete="email"
          id="register-email"
          type="email"
          placeholder=""
          required>
        </input>
        <span className="register__input-error register-input-email-error register__input-error_active">{formInputsUse.errors.email}</span>
        <p className="register__placeholder">Пароль</p>
        <input
          className={formInputsUse.errors.password ?
            ("register__input register__input_error register__input_type_password")
            :
            ("register__input register__input_type_password")}
          onChange={handleChange}
          value={formInputsUse.values.password}
          autoComplete="new-password"
          name="password"
          minLength="4"
          id="register-password"
          type="password"
          placeholder=""
          required>
        </input>
        <span className="register__input-error register-input-password-error register__input-error_active">{formInputsUse.errors.password}</span>
        <span className="reister__submit-error reister__submit-error_type_register">{errorText}</span>
        <button className={formInputsUse.isValid ? ("register__submit") : ("register__submit register__submit_disabled")} type="submit" disabled={!formInputsUse.isValid || isLoading}>Зарегистрироваться</button>
        <p className="register__question">Уже зарегистрированы? <Link to='/signin' className="register__link">Войти</Link></p>
      </form>
    </div>
  );
}