function SearchForm() {
  return (
    <div className='search'>
      <form className="search__form">
        <input className="search__input" name="film" id="film" type="text" placeholder="Фильм" required></input>
        <button className="search__button">Найти</button>
      </form>
    </div>
  );
}

export default SearchForm;