import FilterCheckbox from "./FilterCheckbox";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movies() {
  return (
    <main className='movies' style={{
      flex: "auto",
    }}>
      <SearchForm/>
      <FilterCheckbox/>
      <MoviesCardList/>
    </main>
  );
}

export default Movies;
