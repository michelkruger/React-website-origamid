import React from 'react';

import { BrowserRouter, Routes, Route }from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login/Login';
import Footer from './components/Footer';
import { UserStorage } from './userContext';

import './styles/app.css';

function App() {
  return (
        <div className="App">
            <BrowserRouter>
                <UserStorage>
                    <Header/>
                        <Routes>
                            <Route path='/' element={ <Home/>} />
                            <Route path='/login/*' element={ <Login/>} />
                        </Routes>
                    <Footer/>
                </UserStorage>
            </BrowserRouter>
        </div>
  );
}

export default App;
