import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo__COLOR_main-1.svg"
import Navigation from "./Navigation";

function Header(props) {

  const location = useLocation();

  return (
    <header className={location.pathname === "/" ? ("header") : ("header header_type_white-background-color")}>
      <div className="header__content">
        <img className="header__logo" src={Logo} alt="логотип" />
        {props.loggedIn && location.pathname !== "/" && <Navigation/>}
        {!props.loggedIn && <div className="header__authorize">
          <Link className="header__link header__link_type_sign-up">Регистрация</Link>
          <Link className="header__link header__link_type_sign-in">Войти</Link>
        </div>}
        {props.loggedIn && location.pathname !== "/" && <Link className="header__profile" to="/profile">
          <p className="header__link header__link_type_profile">Аккаунт</p>
          <span className="header__account-icon" />
        </Link>}
      </div>
    </header>
  );
}

export default Header;
