import Photo from "../images/photo.jpeg"

function AboutMe() {  

  return (
    <section className='about-me'>
      <div className="about-me__content">
        <h2 className="about-me__heading">Студент</h2>
        <div className="about-me__container">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__info">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/dchnk" target="_blank" rel="noreferrer" className="about-me__link">Github</a>
        </div>
        <img className="about-me__photo" src={Photo} alt="фото" />
      </div>
    </section>
  );
}

export default AboutMe;