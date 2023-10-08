import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";
import SearchForm from "./SearchForm";
import { useMoviesFilter } from "./hooks/MoviesFilter";

function Movies(props) {
  const { movieList, isLoading, onSubmit, screenWidth, likeFilm, savedMovies, dislikeMovie } = props;
  
  const filter = useMoviesFilter();

  React.useEffect(() => {
    if (movieList !== null) {
      
      if (localStorage.getItem('localMoviesInput')) {
        const localValue = localStorage.getItem('localMoviesInput');
        console.log(localValue);
        filter.filterInputMovies(movieList, localValue);
        return
      }
      filter.setInputCurrentMoviesList(movieList);
    }
  }, [movieList, filter.checked])

  const handleFilterMovieInput = (input) => {
    filter.filterInputMovies(movieList, input)
  }

  return (
    <main className='main'>
      <SearchForm onSubmit={onSubmit} filterInputMovies={handleFilterMovieInput}/>
      <FilterCheckbox checked={filter.checked} onClick={filter.handleChange}/>
      {movieList && <MoviesCardList movieList={filter.exportSavedMovieList && filter.exportSavedMovieList} savedMovies={savedMovies} likeFilm={likeFilm} screenWidth={screenWidth} dislikeMovie={dislikeMovie}/>}
      {isLoading && <Preloader/>}
    </main>
  );
}

export default Movies;
