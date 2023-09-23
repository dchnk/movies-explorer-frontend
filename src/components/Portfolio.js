function Portfolio() {
  return (
    <section className='portfolio'>
      <div className="portfolio__content">
        <h2 className="portfolio__heading">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="portfolio__project">
            <a className="portfolio__project-link" href="https://dchnk.github.io/how-to-learn/" target="_blank" rel="noreferrer">
              <h3 className="portfolio__project-name">Статичный сайт</h3>
              <p className="portfolio__project-icon">↗</p>
            </a>
          </li>
          <li className="portfolio__project">
            <a className="portfolio__project-link" href="https://dchnk.github.io/russian-travel/" target="_blank" rel="noreferrer">
              <h3 className="portfolio__project-name">Адаптивный сайт</h3>
              <p className="portfolio__project-icon">↗</p>
            </a>
          </li>
          <li className="portfolio__project">
            <a className="portfolio__project-link" href="https://dchnk.github.io/mesto-react/" target="_blank" rel="noreferrer">
              <h3 className="portfolio__project-name">Одностраничное приложение</h3>
              <p className="portfolio__project-icon">↗</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
