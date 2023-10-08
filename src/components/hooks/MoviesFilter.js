import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

export function useMoviesFilter() {
  const location = useLocation();

  const [inputSavedMovieList, setInputCurrentMoviesList] = useState(null);
  const [exportSavedMovieList, setExportCurrentMoviesList] = useState(null);
  const [checked, setChecked] = useState(
    location.pathname === '/movies' ?
      (localStorage.getItem('localMoviesToggle') || false)
      :
      (localStorage.getItem('localSavedMoviesToggle') || false)
  )

  React.useEffect(() => {
    if (inputSavedMovieList !== null) {
      checked ? (filterShortMovies(inputSavedMovieList)) : (setExportCurrentMoviesList(inputSavedMovieList))
    }
  }, [inputSavedMovieList, checked])

  const filterShortMovies = (movieList) => {
    const currentMovieList = movieList.filter(i => i.duration < 41 )
    setExportCurrentMoviesList(currentMovieList);
  }

  const handleChange = () => {
    if (!checked) {
      location.pathname === '/movies' && localStorage.setItem('localMoviesToggle', true)
      location.pathname === '/saved-movies' && localStorage.setItem('localSavedMoviesToggle', true)
      setChecked(true);
      return;
    }
    setChecked(false);
    location.pathname === '/movies' && localStorage.removeItem('localMoviesToggle')
    location.pathname === '/saved-movies' && localStorage.removeItem('localSavedMoviesToggle')
  };

 return { checked, exportSavedMovieList, setInputCurrentMoviesList , handleChange, filterShortMovies } ;
}