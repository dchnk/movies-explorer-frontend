import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Movies from './Movies';
import Profile from './Profile'
import SavedMovies from './SavedMovies'
import { Route, Routes } from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { PageNotFound } from './PageNotFound';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [movies, setMovies] = React.useState([]);
  const isMobile = screenWidth <= 800;

  React.useEffect(() => {
    window.addEventListener('resize', handleChangeScreen)
    return () => {
      window.removeEventListener('resize', handleChangeScreen)
    }
  })

  function handleChangeScreen() {
    setScreenWidth(window.innerWidth)
  }

  return (
    <div className='page'>
      <div className='page__content'>
        <Header loggedIn={loggedIn} isMobile={isMobile} />
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies movieList={movies}/>} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/404' element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
