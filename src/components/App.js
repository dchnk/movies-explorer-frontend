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
import { registerUser, loginUser, getUser, updateUserInfo, saveFilm, getSavedFilms, deleteSavedFilms } from '../utils/MainApi';

function App() {
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: ''
  });
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('jwt') ? (true) : (false));
  const [isLoading, setIsLoading] = React.useState(false);
  const [isChange, setIsChange] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [movies, setMovies] = React.useState(null);
  const [savedMovies, setSavedMovies] = React.useState(null);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(null);
  const [errorText, setErrorText] = React.useState('');
  const [res, setRes] = React.useState(false);
  const isMobile = screenWidth <= 800;

  const checkToken = () => {
    const token = localStorage.getItem('jwt');
    token && getUser(token)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          setCurrentUser(data)          
          getSavedFilms(token)
            .then((res) => {
              setSavedMovies(res)
              if (localStorage.getItem('localMovieList')) {
                setMovies(JSON.parse(localStorage.getItem('localMovieList')));
              }
            })
        } else {
          setLoggedIn(false);
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  React.useEffect(() => {
    checkToken();
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
        localStorage.setItem('jwt', res.token)
        console.log(res)
        setRes(true)
        setLoggedIn(true)
        checkToken()
        navigate('/movies')
      })
      .catch((e) => {
        setRes(false);
        setErrorText(e);
        console.log(e);
      })
  }

  function handleSubmitProfile(name, email) {
    const token = localStorage.getItem('jwt')
    updateUserInfo(name, email, token)
      .then((res) => {
        setCurrentUser(res)
        setRes(true)
        setIsChange(false)
      })
      .catch((e) => {
        setRes(false);
        setErrorText(e);
        console.log(e);
      })
  }

  function handleLikeFilm(film) {
    const token = localStorage.getItem('jwt')
    saveFilm(film, token)
      .then(() => {
        getSavedFilms(token)
          .then((res) => {
            setSavedMovies(res)
          })
      })
      .catch((e) => {
        setErrorText(e);
        console.log(e);
      })
  }

  function handleDislikeFilm(id) {
    const token = localStorage.getItem('jwt')
    deleteSavedFilms(id, token)
      .then(() => {
        getSavedFilms(token)
          .then((res) => {
            setSavedMovies(res)
          })
      })
      .catch((e) => {
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
            <Route path="/signin" element={<Login isLoading={isLoading} onSubmit={handleLoginSubmit} onChangeInputs={setErrorText} errorText={errorText} />} />
            <Route path="/signup" element={<Register isLoading={isLoading} onSubmit={handleRegisterSubmit} onChangeInputs={setErrorText} errorText={errorText} />} />
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies movieList={movies} savedMovies={savedMovies} likeFilm={handleLikeFilm} dislikeMovie={handleDislikeFilm} screenWidth={screenWidth} onSubmit={handleSubmitFindFilms} isLoading={isLoading} />} />
            <Route path='/saved-movies' element={<SavedMovies savedMovies={savedMovies} dislikeMovie={handleDislikeFilm}/>} />
            <Route path='/profile' element={<Profile isChange={isChange} onChangeInputs={setErrorText} onChacngeClick={setIsChange} onSubmit={handleSubmitProfile} errorText={errorText} onExit={setLoggedIn} />} />
            <Route path='/404' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
