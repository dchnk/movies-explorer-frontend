import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {

  const { movie } = props;
  const location = useLocation();

  const [isLiked, setIsLiked] = React.useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  function handleDisikeClick() {
    setIsLiked(false);
  }

  return (
    <li className="movie">
      <img className="movie__image" alt="картинка фильма" src={`https://api.nomoreparties.co${movie.image.url}`} />
      <div className="movie__container">
        <p className="movie__name">{movie.nameRU}</p>
        {location.pathname === "/movies" && <button className={isLiked ? ("movie__like movie__like_active") : ("movie__like")} onClick={handleLikeClick} />}
        {location.pathname === "/saved-movies" && <button className="movie__dislike" onClick={handleDisikeClick} />}
      </div>
      <p className="movie__duration">1ч 42м</p>
    </li>
  );
}

export default MoviesCard;
