function Profile() {
  return (
    <main className='main'>
      <section className="profile">
        <h1 className="profile__heading">Привет, Виталий!</h1>
        <div className="profile__info">
          <div className="profile__container profile__container_type_name">
            <p className="profile__name-placaholder">Имя</p>
            <p className="profile__name">Виталий</p>
          </div>
          <div className="profile__container">
            <p className="profile__email-placaholder">E-mail</p>
            <p className="profile__email">pochta@yandex.ru</p>
          </div>
        </div>
        <button className="profile__button">Редактировать</button>
        <button className="profile__button">Выйти из аккаунта</button>
      </section>
    </main>
  );
}

export default Profile;
