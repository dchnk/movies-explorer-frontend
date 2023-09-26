import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";
import SearchForm from "./SearchForm";

function Movies(props) {
  const { movieList, isLoading, onSubmit } = props;
  
  return (
    <main className='main'>
      <SearchForm onSubmit={onSubmit}/>
      <FilterCheckbox/>
      {movieList && <MoviesCardList movieList={movieList}/>}
      {isLoading && <Preloader/>}
    </main>
  );
}

export default Movies;
