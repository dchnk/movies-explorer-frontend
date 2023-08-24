import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {

  const location = useLocation();
  
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const isMobile = screenWidth <= 800;
  
  function handleChangeScreen() {
    setScreenWidth(window.innerWidth)
  }
  
  React.useEffect(() => {
    window.addEventListener('resize', handleChangeScreen)
    return () => {
      window.removeEventListener('resize', handleChangeScreen)
    }
  })
  
  return (
    <nav className="navigation">
      <Link to="/movies" className="navigation__link" style={{
        borderBottom: location.pathname === "/movies" && isMobile ? ("2px solid black") : ("none"),
        fontWeight: location.pathname === "/movies" && !isMobile && 500,
      }}>Фильмы</Link>
      <Link to="/saved-movies" className="navigation__link" style={{
        borderBottom: location.pathname === "/saved-movies" && isMobile ? ("2px solid black") : ("none"),
        fontWeight: location.pathname === "/saved-movies" && !isMobile && 500,
      }}>Сохраненные фильмы</Link>
    </nav>
  );
}

export default Navigation;