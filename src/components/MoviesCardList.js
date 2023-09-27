import React from "react";
import MoviesCard from "./MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const location = useLocation();

  const [currentMovies, setCurrentMovies] = React.useState(
    (localStorage.getItem('localCurrentMovies') && parseInt(localStorage.getItem('localCurrentMovies')) !== 0) || 0);
  const [isCurrentMovieListFull, setIsCurrentMovieListFull] = React.useState(false);

  

  React.useEffect(() => {    
    if (parseInt(localStorage.getItem('localCurrentMovies')) > 0) {
      setCurrentMovies(parseInt(localStorage.getItem('localCurrentMovies')));
      return;
    }
    if (props.screenWidth >= 1280) {
      setCurrentMovies(16)
      localStorage.setItem('localCurrentMovies', 16);
      return;
    } else if (props.screenWidth < 1280 && props.screenWidth >= 768) {
      setCurrentMovies(8)
      localStorage.setItem('localCurrentMovies', 8);
      return;
    } else if (props.screenWidth < 768) {
      setCurrentMovies(5)
      localStorage.setItem('localCurrentMovies', 5);
      return;
    }
  }, [])

  React.useEffect(() => {
    
    if (!props.movieList) {
      return;
    }
    if (props.movieList.length === currentMovies) {
      setIsCurrentMovieListFull(true);
    }
  }, [currentMovies, props.movieList])

  function handleButtonClick() {
    if (props.screenWidth >= 1279) {
      const newCurrentMovies = parseInt(currentMovies) + 4;
      setCurrentMovies(newCurrentMovies);
      localStorage.setItem('localCurrentMovies', newCurrentMovies)
      return;
    }
    const newCurrentMovies = parseInt(currentMovies) + 2;
      setCurrentMovies(newCurrentMovies);
      localStorage.setItem('localCurrentMovies', newCurrentMovies)
  }

  return (
    <section className="movies-list">
      <div className="movies-list__content">
        <ul className="movies-list__cards">
          {props.movieList && props.movieList.slice(0, currentMovies).map((movie) => (
            <MoviesCard movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
      {!isCurrentMovieListFull && location.pathname === "/movies" && <button className="movies-list__button" onClick={handleButtonClick}>Еще</button>}
    </section>
  );
}

export default MoviesCardList;