import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {

  const { movie, savedMovies, dislikeMovie } = props;
  const location = useLocation();
  const [isLiked, setIsLiked] = React.useState(props.isLiked);
  const [duration, setDuration] = React.useState('');

  React.useEffect(() => {
    if (props.isLiked) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    }
  }, [savedMovies])

  React.useEffect(() => {
    if (movie.duration === 60) {
      setDuration('1ч');
    } else if ((movie.duration > 60) && ((movie.duration % 60) === 0)) {
      setDuration(`${Math.floor(movie.duration / 60)}ч`);
    } else if (movie.duration > 60) {
      setDuration(`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`);
    } else {
      setDuration(`${movie.duration % 60}м`);
    }
  }, [])



  function handleLikeClick() {
    props.likeFilm(movie)
  }

  function handleDisikeClick() {
    if (movie._id) {
      dislikeMovie(movie._id)
      return;
    }
    const currentDislikeMovie = savedMovies && savedMovies.find(film => film.nameRU === movie.nameRU)
    dislikeMovie(currentDislikeMovie._id)
  }

  return (
    <li className="movie">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer"><img className="movie__image" alt="картинка фильма" src={(location.pathname === "/movies" && `https://api.nomoreparties.co${movie.image.url}`) || (location.pathname === "/saved-movies" && movie.image)} /></a>
      <div className="movie__container">
        <p className="movie__name">{movie.nameRU}</p>
        {location.pathname === "/movies" && <button className={isLiked ? ("movie__like movie__like_active") : ("movie__like")} onClick={isLiked ? (handleDisikeClick) : (handleLikeClick)} />}
        {location.pathname === "/saved-movies" && <button className="movie__dislike movie__dislike_visible" onClick={handleDisikeClick} />}
      </div>
      <p className="movie__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
