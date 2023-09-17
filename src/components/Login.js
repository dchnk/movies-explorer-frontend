import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../images/logo__COLOR_main-1.svg";

export const Login = ({ onSubmit }) => {

  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value

    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {  password, email } = formValues;
    onSubmit(password, email)
  }

  return (
    <div className="register">
      <form className="register__form" name="register" id="register" onSubmit={handleSubmit}>
        <Link to="/" className="register__link-logo"><img className="register__logo" src={Logo} alt="логотип" /></Link>
        <h2 className="register__heading">Рады видеть!</h2>
        <span className="register__input-error register-input-name-error">Вы пропустили это поле.</span>
        <p className="register__placeholder">E-mail</p>
        <input className="register__input" onChange={handleChange} value={formValues.email} name="email" autoComplete="email" id="register-email" type="email" placeholder="" required></input>
        <span className="register__input-error register-input-email-error">Вы пропустили это поле.</span>
        <p className="register__placeholder">Пароль</p>
        <input className="register__input register__input_type_password register__input_error" onChange={handleChange} value={formValues.password} autoComplete="new-password" name="password" id="login-password" type="password" placeholder="" required></input>
        <span className="register__input-error register-input-password-error register__input-error_active">Вы пропустили это поле.</span>
        <button className="register__submit" type="submit" style={{
          margin: "184px auto 16px"
        }}>Войти</button>
        <p className="register__question">Еще не зарегистрированы? <Link to='/signup' className="register__link">Регистрация</Link></p>
      </form>
    </div>
  );
}