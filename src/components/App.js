import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Movies from './Movies';
import Profile from './Profile';
import SavedMovies from './SavedMovies';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useNavigate, Route, Routes } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { PageNotFound } from './PageNotFound';
import { getFilms } from '../utils/MoviesApi';
import { registerUser, loginUser } from '../utils/MainApi';

function App() {
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [movies, setMovies] = React.useState(null);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(null);
  const [errorText, setErrorText] = React.useState('');
  const [res, setRes] = React.useState(false);
  const isMobile = screenWidth <= 800;

  React.useEffect(() => {
    if (!currentUser.name) {
      localStorage.clear();
    }
    if (localStorage.getItem('localMovieList')) {
      setMovies(JSON.parse(localStorage.getItem('localMovieList')));
    }
  }, [])

  React.useEffect(() => {
    window.addEventListener('resize', handleChangeScreen)

    return () => {
      window.removeEventListener('resize', handleChangeScreen)
    }
  })


  function handleChangeScreen() {
    setTimeout(() => {
      setScreenWidth(window.innerWidth)
    }, 100)
  }

  function handleSubmitFindFilms() {
    setIsLoading(true);
    getFilms()
      .then(res => {
        setMovies(res)
        localStorage.setItem('localMovieList', JSON.stringify(res));
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleRegisterSubmit(password, email, name) {
    registerUser(password, email, name)
      .then((res) => {
        setIsInfoTooltipOpen('register');
        handleLoginSubmit(password, email)
        setRes(true)
      })
      .catch((e) => {
        setIsInfoTooltipOpen('register');
        setRes(false);
        setErrorText(e);
        console.log(e);
      })
  }

  function handleLoginSubmit(password, email) {
    loginUser(password, email)
      .then((res) => {
        console.log(res)
        setRes(true)
        setLoggedIn(true)
        navigate('/movies')
      })
      .catch((e) => {
        setRes(false);
        setErrorText(e);
        console.log(e);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <div className='page__content'>
          <Header loggedIn={loggedIn} isMobile={isMobile} />
          <Routes>
            <Route path="/signin" element={<Login isLoading={isLoading} onSubmit={handleLoginSubmit} onChangeInputs={setErrorText} errorText={errorText}/>} />
            <Route path="/signup" element={<Register isLoading={isLoading} onSubmit={handleRegisterSubmit} onChangeInputs={setErrorText} errorText={errorText} />} />
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies movieList={movies} screenWidth={screenWidth} onSubmit={handleSubmitFindFilms} isLoading={isLoading} />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/404' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
