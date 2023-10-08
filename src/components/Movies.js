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
      filter.setInputCurrentMoviesList(movieList)
    }
    
  }, [movieList])

  React.useEffect(() => {
    console.log(filter.checked)

  }, [filter.checked])

  return (
    <main className='main'>
      <SearchForm onSubmit={onSubmit}/>
      <FilterCheckbox checked={filter.checked} onClick={filter.handleChange}/>
      {movieList && <MoviesCardList movieList={filter.exportSavedMovieList && filter.exportSavedMovieList} savedMovies={savedMovies} likeFilm={likeFilm} screenWidth={screenWidth} dislikeMovie={dislikeMovie}/>}
      {isLoading && <Preloader/>}
    </main>
  );
}

export default Movies;
