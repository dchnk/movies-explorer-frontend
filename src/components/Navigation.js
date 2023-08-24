import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="header__navigation">
      <Link to="/films" className="header__link header__link_type_films">Фильмы</Link>
      <Link className="header__link header__link_type_saved-films">Сохраненные фильмы</Link>
    </nav>
  );
}

export default Navigation;