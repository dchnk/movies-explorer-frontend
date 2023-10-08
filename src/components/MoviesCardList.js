import React from "react";
import MoviesCard from "./MoviesCard";
import { useLocation } from "react-router-dom";
import { useMoviesFilter } from "./hooks/MoviesFilter";

function MoviesCardList({screenWidth, movieList, likeFilm, savedMovies, dislikeMovie}) {
  const location = useLocation();
  const [isCurrentMovieListFull, setIsCurrentMovieListFull] = React.useState(false);
  const [currentMovies, setCurrentMovies] = React.useState(
  (localStorage.getItem('localCurrentMovies') && parseInt(localStorage.getItem('localCurrentMovies')) !== 0) || 0);
  
  const filter = useMoviesFilter();

  React.useEffect(() => {
    if (savedMovies !== null) {
      filter.setInputCurrentMoviesList(savedMovies)
    }
    
  }, [savedMovies])

  React.useEffect(() => {
    console.log(filter.checked)

  }, [filter.checked])

  React.useEffect(() => {
    if (parseInt(localStorage.getItem('localCurrentMovies')) > 0) {
      setCurrentMovies(parseInt(localStorage.getItem('localCurrentMovies')));
      return;
    }
    if (screenWidth >= 1280) {
      setCurrentMovies(16)
      localStorage.setItem('localCurrentMovies', 16);
      return;
    } else if (screenWidth < 1280 && screenWidth >= 768) {
      setCurrentMovies(8)
      localStorage.setItem('localCurrentMovies', 8);
      return;
    } else if (screenWidth < 768) {
      setCurrentMovies(5)
      localStorage.setItem('localCurrentMovies', 5);
      return;
    }
  }, [])

  React.useEffect(() => {
    if (!movieList) {
      return;
    }
    if (movieList.length === currentMovies) {
      setIsCurrentMovieListFull(true);
    }
  }, [currentMovies, movieList])

  function handleButtonClick() {
    if (screenWidth >= 1279) {
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
          {location.pathname === "/movies" && movieList && movieList.slice(0, currentMovies).map((movie) => (
            <MoviesCard movie={movie} key={movie.id} savedMovies={savedMovies && savedMovies} likeFilm={likeFilm} dislikeMovie={dislikeMovie} 
            isLiked={savedMovies && savedMovies.some(savedMovie => savedMovie.movieId === movie.id)}
            />
          ))}
          {location.pathname === "/saved-movies" && filter.exportSavedMovieList && filter.exportSavedMovieList.map((movie) => (
            <MoviesCard movie={movie} key={movie._id} likeFilm={likeFilm} dislikeMovie={dislikeMovie}/>
          ))}

        </ul>
      </div>
      {!isCurrentMovieListFull && location.pathname === "/movies" && <button className="movies-list__button" onClick={handleButtonClick}>Еще</button>}
    </section>
  );
}

export default MoviesCardList;