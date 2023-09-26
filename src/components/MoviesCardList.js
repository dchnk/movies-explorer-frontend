import MoviesCard from "./MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {

  const location = useLocation();

  return (
    <section className="movies-list">
      <div className="movies-list__content">
        <ul className="movies-list__cards">
          {props.movieList.map((movie) => (
            <MoviesCard movie={movie} key={movie.id}/>
          ))}
        </ul>
      </div>
      {location.pathname === "/movies" && <button className="movies-list__button">Еще</button>}
    </section>
  );
}

export default MoviesCardList;