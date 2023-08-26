import MovieImage from "../images/film__photo.jpeg"
import React from "react";

function MoviesCard() {

  const [isLiked, setIsLiked] = React.useState(false);

  function handleLikeClick () {
    setIsLiked(!isLiked);
  }

  return (
    <div className="movie">
      <img className="movie__image" alt="картинка фильма" src={MovieImage}/>
      <div className="movie__container">
        <p className="movie__name">Книготорговцы</p>
        <div className={isLiked ? ("movie__like movie__like_active") : ("movie__like")} onClick={handleLikeClick}/>
      </div>
      <p className="movie__duration">1ч 42м</p>
    </div>
  );
}

export default MoviesCard;
