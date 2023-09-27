import React from 'react';
import { useLocation } from 'react-router-dom';

function FilterCheckbox() {

  const location = useLocation();

  const [checked, setChecked] = React.useState(
    location.pathname === '/movies' ?
      (localStorage.getItem('localMoviesToggle') || 'disabled')
      :
      (localStorage.getItem('localSavedMoviesToggle') || 'disabled')
  )


  const handleChange = () => {
    if (checked === 'disabled') {
      location.pathname === '/movies' && localStorage.setItem('localMoviesToggle', 'enabled')
      location.pathname === '/saved-movies' && localStorage.setItem('localSavedMoviesToggle', 'enabled')
      setChecked('enabled');
      return;
    }
    setChecked('disabled');
    location.pathname === '/movies' && localStorage.setItem('localMoviesToggle', 'disabled')
    location.pathname === '/saved-movies' && localStorage.setItem('localSavedMoviesToggle', 'disabled')
  };

  return (
    <div className='checkbox'>
      <div className='checkbox__content'>
        <label className={checked === "enabled" ? ("checkbox__switch checkbox__switch_type_active") : ("checkbox__switch")}>
          <div className={checked === "enabled" ? ("checkbox__toggle checkbox__toggle_type_active") : ("checkbox__toggle")}></div>
          <input className="checkbox__input" name="checkbox" id="checkbox" type="checkbox" onClick={handleChange}></input>
        </label>
        <p className="checkbox__text">Короткометражки</p>
      </div>
    </div>
  );
}

export default FilterCheckbox;