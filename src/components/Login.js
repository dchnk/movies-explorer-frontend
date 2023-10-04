import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../images/logo__COLOR_main-1.svg";
import { useFormWithValidation } from "./hooks/FormValidation";

export const Login = ({ onSubmit, errorText, onChangeInputs }) => {

  const formInputsUse = useFormWithValidation();

  function handleChange(e) {
    formInputsUse.handleChange(e);
    if (errorText !== '') {
      onChangeInputs('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formInputsUse.values;
    onSubmit(password, email)
  }

  return (
    <div className="register">
      <form className="register__form" name="register" id="register" onSubmit={handleSubmit}>
        <Link to="/" className="register__link-logo"><img className="register__logo" src={Logo} alt="логотип" /></Link>
        <h1 className="register__heading">Рады видеть!</h1>
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
          id="login-email"
          type="email"
          placeholder=""
          required>
        </input>
        <span className="register__input-error register-input-password-error register__input-error_active">{formInputsUse.errors.email}</span>
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
          id="login-password"
          type="password"
          placeholder=""
          required>
        </input>
        <span className="register__input-error register-input-password-error register__input-error_active">{formInputsUse.errors.password}</span>
        <span className="reister__submit-error register__submit-error_type_login">{errorText}</span>
        <button className={formInputsUse.isValid ? ("register__submit") : ("register__submit register__submit_disabled")} type="submit" disabled={!formInputsUse.isValid}>Войти</button>
        <p className="register__question">Еще не зарегистрированы? <Link to='/signup' className="register__link">Регистрация</Link></p>
      </form>
    </div>
  );
}