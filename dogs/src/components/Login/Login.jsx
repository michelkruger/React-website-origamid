import React, { useContext } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordLost';
import { UserContext } from '../../userContext';

const Login = () => {

    const { login } = useContext(UserContext);
    if ( login === true ) {
        <Navigate to="/conta" />
    }
    return(
        <div>
            <Routes>
               <Route path='/' element={<LoginForm/>}/>
               <Route path='criar' element={<LoginCreate/>}/>
               <Route path='lost' element={<LoginPasswordLost/>}/>
               <Route path='reset' element={<LoginPasswordReset/>}/>
            </Routes>
        </div>
    );
}

export default Login;