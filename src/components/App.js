import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Movies from './Movies';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className='page'>
      <div className='page__content'>
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
