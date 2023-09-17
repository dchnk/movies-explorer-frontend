import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../images/logo__COLOR_main-1.svg";

export const Register = ({ onSubmit }) => {

  const [formValues, setFormValues] = React.useState({
    name: '',
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
    const { name, password, email } = formValues;
    onSubmit(password, email, name)
  }

  return (
    <div className="register">
      <form className="register__form" name="register" id="register" onSubmit={handleSubmit}>
        <Link to="/"><img className="header__logo" src={Logo} alt="логотип" /></Link>
        <h2 className="register__heading">Добро пожаловать!</h2>
        <p className="register__placeholder">Имя</p>
        <input className="register__input" onChange={handleChange} value={formValues.name} name="name" autoComplete="name" id="register-name" type="text" placeholder="" required></input>
        <span className="register__input-error register-input-name-error">Вы пропустили это поле.</span>
        <p className="register__placeholder">E-mail</p>
        <input className="register__input" onChange={handleChange} value={formValues.email} name="email" autoComplete="email" id="register-email" type="email" placeholder="" required></input>
        <span className="register__input-error register-input-email-error">Вы пропустили это поле.</span>
        <p className="register__placeholder">Пароль</p>
        <input className="register__input register__input_type_password register__input_error" onChange={handleChange} value={formValues.password} autoComplete="new-password" name="password" id="login-password" type="password" placeholder="" required></input>
        <span className="register__input-error register-input-password-error register__input-error_active">Вы пропустили это поле.</span>
        <button className="register__submit" type="submit" >Зарегистрироваться</button>
        <p className="register__question">Уже зарегистрированы? <Link to='/sign-in' className="register__link">Войти</Link></p>
      </form>
    </div>
  );
}