import React from "react";

function SearchForm(props) {

  const [film, setFilm] = React.useState("");
  const [filmError, setFilmError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");


  const handleChange = (e) => {
    setFilm(e.target.value)
    try {
      if (e.target.value < 1) {
        setFilmError(true);
        throw new Error("Нужно ввести ключевое слово");
      }
      setFilmError(false);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (film < 1) {
        setFilmError(true);
        throw new Error("Нужно ввести ключевое слово");
      }
      setFilmError(false);
      props.onSubmit()
    } catch (e) {
      setErrorMessage(e.message);
    }
  }

  return (
    <div className='search'>
      <div className="search__form-container">
        <form className="search__form" onSubmit={handleSubmit} noValidate>
          <input className="search__input" onChange={handleChange} value={film} name="film" id="film" type="text" placeholder="Фильм" required></input>
          <button className="search__button">Найти</button>
        </form>
      </div>
      <div className={filmError ? ("search__error-container search__error-container_active") : ("search__error-container")}>
        <span className="search__input-error">{errorMessage}</span>
      </div>
    </div>
  );
}

export default SearchForm;