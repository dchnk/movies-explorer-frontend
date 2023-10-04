import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Profile({ onSubmit }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [isChange, setIsChange] = React.useState(false);
  
  const [formValues, setFormValues] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
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
    const { name, email } = formValues;
    onSubmit(email, name)
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
              Имя<input className="profile__content" onChange={handleChange} value={formValues.name} name="name" autoComplete="name" id="register-name" type="text" placeholder="" required disabled={isChange ? (false) : (true)}></input>
            </label>
          </div>
          <div className="profile__container">
            <label className="profile__placaholder">
              E-mail<input className="profile__content" onChange={handleChange} value={formValues.email} name="email" autoComplete="email" id="register-email" type="email" placeholder="" required disabled={isChange ? (false) : (true)}></input>
            </label>
          </div>
          {isChange && <span className="profile__submit-error profile__submit-error_active">При обновлении профиля произошла ошибка.</span>}
          {isChange && <button className="profile__submit" onSubmit={handleSubmit}>Сохранить</button>}
        </form>
        {!isChange && <div>
          <button className="profile__button" onClick={handleChangeClick}>Редактировать</button>
          <button className="profile__button profile__button_type_exit">Выйти из аккаунта</button>
        </div>}
      </section>
    </main>
  );
}

export default Profile;
