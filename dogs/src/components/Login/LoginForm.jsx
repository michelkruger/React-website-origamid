import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

const LoginForm = () => {
    return(
        <div>
            <Link to="/login/criar">
                Cadastro
            </Link>
        </div>
    );
}

export default LoginForm;