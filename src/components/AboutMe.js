import Photo from "../images/photo.jpeg"

function AboutMe() {

  return (
    <section className='about-me'>
      <div className="about-me__content">
        <h2 className="about-me__heading">Студент</h2>
        <div className="about-me__container">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__info">Фронтенд-разработчик, {new Date().getFullYear() - 1997} лет</p>
          <p className="about-me__text">Я родился и живу в Новосибирске, учился в СГУВТ на факультете судовождения. У меня есть жена и дочь. Регулярно беру новые интересные и более сложные для себя задачи, чтобы научиться использовать их в работе. Читаю код других разработчиков, беру для себя хорошие практики и улучаю собственный код. Ежедневно практикую английский язык, читаю доку из оригинальных источников. Умею искать ответы самостоятельно, но и не боюсь задавать вопросы более опытным товарищам.</p>
          <a href="https://github.com/dchnk" target="_blank" rel="noreferrer" className="about-me__link">Github</a>
        </div>
        <img className="about-me__photo" src={Photo} alt="фото" />
      </div>
    </section>
  );
}

export default AboutMe;