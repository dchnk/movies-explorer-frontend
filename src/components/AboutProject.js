function AboutProject() {
  return (
    <section className='about'>
      <h2 className="about__heading">О проекте</h2>
      <div className="about__descriptions">
        <div className="about__part">
          <h3 className="about__part-name">Дипломный проект включал 5 этапов</h3>
          <p className="about__part-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about__part">
          <h3 className="about__part-name">На выполнение диплома ушло 5 недель</h3>
          <p className="about__part-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about__road">
        <div className="about__road-part">
          <div className="about__backend">1 неделя</div>
          <p className="about__road-text">Back-end</p>
        </div>
        <div className="about__road-part">
          <div className="about__frontend">4 недели</div>
          <p className="about__road-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;