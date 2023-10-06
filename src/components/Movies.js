import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";
import SearchForm from "./SearchForm";

function Movies(props) {
  const { movieList, isLoading, onSubmit, screenWidth, likeFilm, savedMovies, dislikeMovie } = props;
  
  return (
    <main className='main'>
      <SearchForm onSubmit={onSubmit}/>
      <FilterCheckbox/>
      {movieList && <MoviesCardList movieList={movieList} savedMovies={savedMovies} likeFilm={likeFilm} screenWidth={screenWidth} dislikeMovie={dislikeMovie}/>}
      {isLoading && <Preloader/>}
    </main>
  );
}

export default Movies;
