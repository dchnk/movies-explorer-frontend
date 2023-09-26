import React from "react";
import MoviesCard from "./MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();

  const [currentMovies, setCurrentMovies] = React.useState(0);
  const [currentMovieList, setCurrentMovieList] = React.useState(null);
  const [isCurrentMovieListFull, setIsCurrentMovieListFull] = React.useState(false);

  React.useEffect(() => {
    if (props.screenWidth >= 1280) {
      setCurrentMovies(16)
    } else if (props.screenWidth < 1280 && props.screenWidth >= 768) {
      setCurrentMovies(8)
    } else if (props.screenWidth < 629) {
      setCurrentMovies(5)
    }

  }, [])

  React.useEffect(() => {
    if (!props.movieList) {
      return;
    }
    setCurrentMovieList(props.movieList.slice(0, currentMovies))
    if (props.movieList.length === currentMovies) {
      setIsCurrentMovieListFull(true);
    }
  }, [currentMovies, props.movieList, props.screenWidth])

  function handleButtonClick() {
    if (props.screenWidth >= 1279) {
      setCurrentMovies(currentMovies + 4);
      return;
    }
    setCurrentMovies(currentMovies + 2);
  }

  return (
    <section className="movies-list">
      <div className="movies-list__content">
        <ul className="movies-list__cards">
          {currentMovieList && currentMovieList.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
      {!isCurrentMovieListFull && location.pathname === "/movies"  && <button className="movies-list__button" onClick={handleButtonClick}>Еще</button>}
    </section>
  );
}

export default MoviesCardList;