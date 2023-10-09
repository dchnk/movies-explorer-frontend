import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Movies from './Movies';
import Profile from './Profile';
import SavedMovies from './SavedMovies';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { PageNotFound } from './PageNotFound';
import { getFilms } from '../utils/MoviesApi';
import { registerUser, loginUser, getUser, updateUserInfo, saveFilm, getSavedFilms, deleteSavedFilms } from '../utils/MainApi';
import { ProtectedRoute } from './ProtectedRoute';

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
  const [errorText, setErrorText] = React.useState('');
  const isMobile = screenWidth <= 800;

  const checkToken = () => {
    const token = localStorage.getItem('jwt');
    token && getUser(token)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          setCurrentUser(data)
          return getSavedFilms(token)
            .then((res) => {
              if (res) {
                setSavedMovies(res)
              }
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

  function handleExitProfile() {
    setLoggedIn(false);
    setCurrentUser({
      name: '',
      email: ''
    })
    setMovies(null);
    setSavedMovies(null);
    setErrorText('');
  }

  function handleSubmitFindFilms() {
    setIsLoading(true);
    getFilms()
      .then(res => {
        setMovies(res)
        localStorage.setItem('localMovieList', JSON.stringify(res));
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleRegisterSubmit(password, email, name) {
    setIsLoading(true);
    registerUser(password, email, name)
      .then(() => {
        handleLoginSubmit(password, email)
      })
      .catch((e) => {
        setErrorText(e);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleLoginSubmit(password, email) {
    setIsLoading(true);
    loginUser(password, email)
      .then((res) => {
        localStorage.setItem('jwt', res.token)
        setLoggedIn(true)
        checkToken()
        navigate('/movies')
      })
      .catch((e) => {
        setErrorText(e);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleSubmitProfile(name, email) {
    const token = localStorage.getItem('jwt')
    setIsLoading(true);
    updateUserInfo(name, email, token)
      .then((res) => {
        setCurrentUser(res)
        setIsChange(false)
      })
      .catch((e) => {
        setErrorText(e);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleLikeFilm(film) {
    const token = localStorage.getItem('jwt')
    setIsLoading(true);
    saveFilm(film, token)
      .then((res) => {
        const newSavedMovies = [...savedMovies, res];
        setSavedMovies(newSavedMovies)
      })
      .catch((e) => {
        setErrorText(e);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleDislikeFilm(id) {
    const token = localStorage.getItem('jwt')
    setIsLoading(true);
    deleteSavedFilms(id, token)
      .then(() => {
        const newSavedMovies = savedMovies.filter(i => i._id !== id)
        setSavedMovies(newSavedMovies)
      })
      .catch((e) => {
        setErrorText(e);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <div className='page__content'>
          <Header loggedIn={loggedIn} isMobile={isMobile} />
          <Routes>
            <Route path="/signin" element={loggedIn ?
              <Navigate to="/movies" replace /> : <Login isLoading={isLoading}onSubmit={handleLoginSubmit} onChangeInputs={setErrorText} errorText={errorText} />} />
            <Route path="/signup" element={loggedIn ?
              <Navigate to="/movies" replace /> : <Register isLoading={isLoading} onSubmit={handleRegisterSubmit} onChangeInputs={setErrorText} errorText={errorText} />} />
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<ProtectedRoute element={Movies} loggedIn={loggedIn} movieList={movies} savedMovies={savedMovies} likeFilm={handleLikeFilm} dislikeMovie={handleDislikeFilm} screenWidth={screenWidth} onSubmit={handleSubmitFindFilms} isLoading={isLoading} />} />
            <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} isLoading={isLoading} savedMovies={savedMovies} dislikeMovie={handleDislikeFilm} />} />
            <Route path='/profile' element={<ProtectedRoute element={Profile} loggedIn={loggedIn} isLoading={isLoading} isChange={isChange} onChangeInputs={setErrorText} onChacngeClick={setIsChange} onSubmit={handleSubmitProfile} errorText={errorText} onExit={handleExitProfile} />} />
            <Route path='/404' element={<PageNotFound />} />
            <Route path="*" element={loggedIn ?
              <Navigate to="/404" replace />
              : <Navigate to="/signin" replace />
            } />
          </Routes>
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
