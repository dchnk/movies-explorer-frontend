import MoviesCard from "./MoviesCard";

function MoviesCardList() {
  return (
    <section className="movies-list">
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
      <button>Еще</button>
    </section>
  );
}

export default MoviesCardList;