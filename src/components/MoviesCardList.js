import MoviesCard from "./MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList() {

  const location = useLocation();

  return (
    <section className="movies-list">
      <div className="movies-list__content">
      <ul className="movies-list__cards">
        {/* <li className="movies-list__card"><MoviesCard/></li> */}
      </ul>
      </div>
      {location.pathname === "/movies" && <button className="movies-list__button">Еще</button>}
    </section>
  );
}

export default MoviesCardList;