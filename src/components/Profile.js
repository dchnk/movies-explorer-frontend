function Profile() {
  return (
    <main className='main'>
      <section className="profile">
        <h1 className="profile__heading">Привет, Виталий!</h1>
        <div className="profile__info">
          <div className="profile__container profile__container_type_name">
            <p className="profile__placaholder">Имя</p>
            <p className="profile__content">Виталий</p>
          </div>
          <div className="profile__container">
            <p className="profile__placaholder">E-mail</p>
            <p className="profile__content">pochta@yandex.ru</p>
          </div>
        </div>
        <button className="profile__button">Редактировать</button>
        <button className="profile__button profile__button_type_exit">Выйти из аккаунта</button>
      </section>
    </main>
  );
}

export default Profile;
