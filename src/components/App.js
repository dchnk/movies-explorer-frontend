import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className='page'>
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
