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
      (false)
  )

  const filterShortMovies = (movieList) => {
    const currentMovieList = movieList.filter(i => i.duration < 41 )
    setExportCurrentMoviesList(currentMovieList);
  }
  
  const filterInputMovies = (movieList, input) => {
    const currentMovieList = movieList.filter(i =>(i.nameRU.toLowerCase()).includes(input.toLowerCase()));
    checked ? (filterShortMovies(currentMovieList)) : (setExportCurrentMoviesList(currentMovieList))
  }

  const handleChange = () => {
    if (!checked) {
      location.pathname === '/movies' && localStorage.setItem('localMoviesToggle', true)
      setChecked(true);
      return;
    }
    setChecked(false);
    location.pathname === '/movies' && localStorage.removeItem('localMoviesToggle')
  };

 return { checked, exportSavedMovieList, filterInputMovies, setInputCurrentMoviesList , handleChange, filterShortMovies } ;
}