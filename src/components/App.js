import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Movies from './Movies';
import Profile from './Profile'
import SavedMovies from './SavedMovies'
import { Route, Routes } from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);
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
        <Header loggedIn={loggedIn} isMobile={isMobile}/>
        <Routes>
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
