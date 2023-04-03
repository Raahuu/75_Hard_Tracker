import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <label htmlFor="username">Enter Username</label>
            <input id="username" type="text" />
            <label htmlFor="password">Enter Password</label>
            <input id="password" type="password" />
            <button>Submit</button>
        </div>
    );
};

export default Login;