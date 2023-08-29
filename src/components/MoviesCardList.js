import MoviesCard from "./MoviesCard";

function MoviesCardList() {
  return (
    <section className="movies-list">
      <div className="movies-list__content">
      <ul className="movies-list__cards">
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
        <li className="movies-list__card"><MoviesCard/></li>
      </ul>
      </div>
      <button className="movies-list__button">Еще</button>
    </section>
  );
}

export default MoviesCardList;