import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useNavigate } from 'react-router-dom';
import { useFormWithValidation } from './hooks/FormValidation';

function Profile({ onSubmit, onExit }) {

  const navigate = useNavigate();

  const currentUser = React.useContext(CurrentUserContext);

  const [isChange, setIsChange] = React.useState(false);
  
  const formInputsUse = useFormWithValidation();

  function handleChange(e) {
    formInputsUse.handleChange(e);
    // if (errorText !== '') {
    //   onChangeInputs('');
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formInputsUse;
    onSubmit(email, name)
  }

  function handleExitClick () {
    onExit(false);
    localStorage.clear();
    navigate('/')
  }
  
  function handleChangeClick () {
    setIsChange(true)
  }

  return (
    <main className='main'>
      <section className="profile">
        <h1 className="profile__heading">Привет, {currentUser.name}!</h1>
        <form className="profile__info">
          <div className="profile__container profile__container_type_name">
            <label className="profile__placaholder">
              Имя<input className="profile__content" onChange={handleChange} value={formInputsUse.values.name} name="name" autoComplete="name" id="register-name" type="text" placeholder="" required disabled={isChange ? (false) : (true)}></input>
            </label>
          </div>
          <div className="profile__container">
            <label className="profile__placaholder">
              E-mail<input className="profile__content" onChange={handleChange} value={formInputsUse.values.email} name="email" autoComplete="email" id="register-email" type="email" placeholder="" required disabled={isChange ? (false) : (true)}></input>
            </label>
          </div>
          {isChange && <span className="profile__submit-error profile__submit-error_active">При обновлении профиля произошла ошибка.</span>}
          {isChange && <button className="profile__submit" onSubmit={handleSubmit}>Сохранить</button>}
        </form>
        {!isChange && <div>
          <button className="profile__button" onClick={handleChangeClick}>Редактировать</button>
          <button className="profile__button profile__button_type_exit" onClick={handleExitClick}>Выйти из аккаунта</button>
        </div>}
      </section>
    </main>
  );
}

export default Profile;
