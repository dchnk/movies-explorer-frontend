import FilterCheckbox from "./FilterCheckbox";
import SearchForm from "./SearchForm";

function Movies() {
  return (
    <main className='movies' style={{
      flex: "auto",
    }}>
      <SearchForm/>
      <FilterCheckbox/>
    </main>
  );
}

export default Movies;
