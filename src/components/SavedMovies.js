import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";
import { useMoviesFilter } from "./hooks/MoviesFilter";

function SavedMovies({ savedMovies, dislikeMovie }) {

  const filter = useMoviesFilter();

  React.useEffect(() => {
    if (savedMovies !== null) {
      filter.setInputCurrentMoviesList(savedMovies)
    }
    
  }, [savedMovies])

  React.useEffect(() => {
    console.log(filter.checked)

  }, [filter.checked])

  return (
    <main className='main'>
      <SearchForm />
      <FilterCheckbox checked={filter.checked} onClick={filter.handleChange}/>
      <MoviesCardList savedMovies={filter.exportSavedMovieList && filter.exportSavedMovieList} dislikeMovie={dislikeMovie}/>
    </main>
  );
}

export default SavedMovies;