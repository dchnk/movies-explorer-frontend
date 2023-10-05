import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useNavigate } from 'react-router-dom';
import { useFormWithValidation } from './hooks/FormValidation';

function Profile({ onSubmit, onExit, errorText, isChange, onChangeInputs, onChacngeClick }) {

  const formInputsUse = useFormWithValidation();
  const navigate = useNavigate();

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if ((formInputsUse.values.name === currentUser.name) && (formInputsUse.values.email === currentUser.email)) {
      onChangeInputs('Вы не внесли новые данные, измените email или имя')
      formInputsUse.setIsValid(false)
    } else {
      onChangeInputs('')
    }
  }, [formInputsUse.values])
  

  function handleChange(e) {
    
    formInputsUse.handleChange(e);
    console.log(formInputsUse.values)
    if (errorText !== '') {
      onChangeInputs('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formInputsUse.values;
    onSubmit(name, email)
  }

  function handleExitClick() {
    onExit(false);
    localStorage.clear();
    navigate('/')
  }

  function handleChangeClick() {
    if ((currentUser.name === formInputsUse.values.name) || (currentUser.email === formInputsUse.values.email)) {
      formInputsUse.setIsValid(false)
    }
    onChacngeClick(true)
  }

  return (
    <main className='main'>
      <section className="profile">
        <h1 className="profile__heading">Привет, {currentUser.name}!</h1>
        <form className="profile__info" onSubmit={handleSubmit}>
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
          {isChange && <span className="profile__submit-error profile__submit-error_active">{errorText} {formInputsUse.errors.name} {formInputsUse.errors.email}</span>}
          {isChange && <button className={formInputsUse.isValid ? ("profile__submit") : ("profile__submit profile__submit_disabled")} type='submit' disabled={!formInputsUse.isValid}>Сохранить</button>}
        </form>
        {!isChange && <div>
          <button className="profile__button" onClick={handleChangeClick} type="submit">Редактировать</button>
          <button className="profile__button profile__button_type_exit" onClick={handleExitClick}>Выйти из аккаунта</button>
        </div>}
      </section>
    </main>
  );
}

export default Profile;
