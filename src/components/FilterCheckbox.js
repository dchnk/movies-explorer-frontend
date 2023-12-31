import React from 'react';

function FilterCheckbox({checked, onClick}) {

  return (
    <div className='checkbox'>
      <div className='checkbox__content'>
        <label className={checked ? ("checkbox__switch checkbox__switch_type_active") : ("checkbox__switch")}>
          <div className={checked ? ("checkbox__toggle checkbox__toggle_type_active") : ("checkbox__toggle")}></div>
          <input className="checkbox__input" name="checkbox" id="checkbox" type="checkbox" onClick={onClick}></input>
        </label>
        <p className="checkbox__text">Короткометражки</p>
      </div>
    </div>
  );
}

export default FilterCheckbox;