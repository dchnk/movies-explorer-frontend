import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation(props) {

  const location = useLocation();
  
  const { isMobile, burgerOpened } = props;
  
  return (
    <nav className="navigation" style={{
      justifySelf: location.pathname === "/" && "end",
      margin: location.pathname === "/" && !isMobile && "auto 41px auto 0"
    }}>
      {burgerOpened && <Link to="/" className="navigation__link" style={{
        borderBottom: location.pathname === "/" && isMobile ? ("2px solid black") : ("none"),
        color: location.pathname === "/" && !burgerOpened && "white",
      }}>Главная</Link>}
      <Link to="/movies" className="navigation__link" style={{
        borderBottom: location.pathname === "/movies" && isMobile ? ("2px solid black") : ("none"),
        fontWeight: location.pathname === "/movies" && !isMobile && 500,
        color: location.pathname === "/" && !burgerOpened && "white",
      }}>Фильмы</Link>
      <Link to="/saved-movies" className="navigation__link" style={{
        borderBottom: location.pathname === "/saved-movies" && isMobile ? ("2px solid black") : ("none"),
        fontWeight: location.pathname === "/saved-movies" && !isMobile && 500,
        color: location.pathname === "/" && !burgerOpened && "white",
      }}>Сохраненные фильмы</Link>
    </nav>
  );
}

export default Navigation;