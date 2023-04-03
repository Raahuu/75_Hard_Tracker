import React from 'react';

const ForgotPassword = () => {
    return (
        <div>
            <h1>Forgot Password</h1>
            <label htmlFor="username">Enter Username</label>
            <input id="username" type="text" />
            <button>Submit</button>
        </div>
    );
};

export default ForgotPassword;