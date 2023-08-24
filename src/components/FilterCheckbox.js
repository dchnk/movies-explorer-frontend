import React from 'react';

function FilterCheckbox() {

  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {

    setChecked(!checked);

  };

  return (
    <div className='checkbox'>
      <label className={checked ? ("checkbox__switch checkbox__switch_type_active") : ("checkbox__switch")}>
        <input className="checkbox__input" name="checkbox" id="checkbox" type="checkbox" onClick={handleChange}></input>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;