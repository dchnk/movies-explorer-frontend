import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo__COLOR_main-1.svg"

function Header(props) {

  const location = useLocation();

  return (
    <header className={location.pathname === "/" ? ("header") : ("header header_type_white-background-color")}>
      <img className="header__logo" src={Logo} alt="логотип" />
      {props.loggedIn && location.pathname !== "/" && <nav className="header__navigation">
        <Link className="header__link header__link_type_films">Фильмы</Link>
        <Link className="header__link header__link_type_saved-films">Сохраненные фильмы</Link>
      </nav>}
      {!props.loggedIn && <div className="header__authorize">
        <Link className="header__link header__link_type_sign-up">Регистрация</Link>
        <Link className="header__link header__link_type_sign-in">Войти</Link>
      </div>}
      {props.loggedIn && location.pathname !== "/" && <div className="header__profile"> 
        <Link className="header__link header__link_type_profile">Аккаунт</Link>
        <span className="header__account-icon"/>
      </div>}
    </header>
  );
}

export default Header;
