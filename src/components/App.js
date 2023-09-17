import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Movies from './Movies';
import Profile from './Profile'
import SavedMovies from './SavedMovies'
import { Route, Routes } from 'react-router-dom';
import { Register } from './Register';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
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
    <div className='page'>
      <div className='page__content'>
        <Header loggedIn={loggedIn} isMobile={isMobile} />
        <Routes>
          {/* <Route path="/signin" element={<Login />} /> */}
          <Route path="/signup" element={<Register />} />
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
