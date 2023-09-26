import FilterCheckbox from "./FilterCheckbox";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movies(props) {
  const { movieList } = props;

  return (
    <main className='main'>
      <SearchForm/>
      <FilterCheckbox/>
      <MoviesCardList/>
    </main>
  );
}

export default Movies;
