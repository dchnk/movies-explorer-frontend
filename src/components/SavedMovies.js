import FilterCheckbox from "./FilterCheckbox";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function SavedMovies({ savedMovies, dislikeMovie }) {
  return (
    <main className='main'>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList savedMovies={savedMovies && savedMovies} dislikeMovie={dislikeMovie}/>
    </main>
  );
}

export default SavedMovies;