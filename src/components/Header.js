import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo__COLOR_main-1.svg"
import Navigation from "./Navigation";
import React from "react";
import BurgerIcon from "../images/burger-black.svg"

function Header(props) {

  const { isMobile, loggedIn } = props;
  const [burgerOpened, setBurgerOpened] = React.useState(false);

  function handleBurgerClick() {
    stopScrolling();
    setBurgerOpened(!burgerOpened);
  }

  function stopScrolling() {
    if (!burgerOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    };
  }

  const location = useLocation();

  return (
    <>
    {location.pathname !== "/signin" && location.pathname !== "/signup" && location.pathname !== "/404" && <header className={location.pathname === "/" ? ("header") : ("header header_type_white-background-color")}>
      <div className="header__content" style={{
        gridTemplateColumns: location.pathname === "/" && "auto 1fr"
      }}>
        <Link to="/"><img className="header__logo" src={Logo} alt="логотип" /></Link>
        {loggedIn && !isMobile && <Navigation isMobile={isMobile} />}
        {!loggedIn && <div className="header__authorize" >
          <Link to="/signup" className="header__link header__link_type_sign-up">Регистрация</Link>
          <Link to="/signin" className="header__link header__link_type_sign-in">Войти</Link>
        </div>}
        {loggedIn && !isMobile && <Link className="header__profile" to="/profile" style={{
          gridColumnStart: location.pathname === "/" && "3"
        }}>
          <p className="header__link header__link_type_profile">Аккаунт</p>
          <span className="header__account-icon" />
        </Link>}
        {isMobile && loggedIn && <div className="header__burger-menu" style={{
          justifySelf: location.pathname !== "/" && "end",
        }}>
          <div className={burgerOpened ? ("header__burger-menu-icon header__burger-menu-icon_active") : ("header__burger-menu-icon")} onClick={handleBurgerClick} style={{
            backgroundImage: location.pathname !== "/" && !burgerOpened && `url(${BurgerIcon})`,
          }}></div>
          <div className={burgerOpened ? ("header__burger-background header__burger-background_active") : ("header__burger-background")} />
          <div className={burgerOpened ? ("header__burger-content header__burger-content_active") : ("header__burger-content")}>
            {burgerOpened && <div className="header__burger-container">
              <Navigation burgerOpened={burgerOpened} isMobile={isMobile} />
              {loggedIn && <Link className="header__profile" to="/profile" style={{
                gridColumnStart: location.pathname === "/" && "3"
              }}>
                <p className="header__link header__link_type_profile">Аккаунт</p>
                <span className="header__account-icon" />
              </Link>}
            </div>}
          </div>
        </div>}
      </div>
    </header>}
    </>
  );
}

export default Header;
