import React from "react";

function SearchForm(props) {

  const [film, setFilm] = React.useState("");
  const [filmError, setFilmError] = React.useState(false);


  const handleChange = (e) => {
    setFilm(e.target.value)
    console.log(e.target.value)
    console.log(e.target.validity.valid)

 };

  return (
    <div className='search'>
      <form className="search__form">
        <input className="search__input" onChange={handleChange} value={film} name="film" id="film" type="text" placeholder="Фильм" required></input>        
        <button className="search__button">Найти</button>
      </form>
      {filmError && <span className="search__input-error" style={{
        color: "tomato"
      }}>Вы пропустили это поле.</span>}
    </div>
  );
}

export default SearchForm;