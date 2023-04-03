import React from 'react';

const Signup = () => {
    return (
        <div>
            <h1>Signup</h1>
            
            <label htmlFor="fname">Firstname</label>
            <input id="fname" type="text" />

            <label htmlFor="lname">Lastname</label>
            <input id="lname" type="password" />
            
            <label htmlFor="dob">Date of Birth</label>
            <input id="dob" type="text" />
            
            <label htmlFor="username">User name</label>
            <input id="username" type="password" />
            
            <label htmlFor="password">Password</label>
            <input id="password" type="text" />
            
            <label htmlFor="confpassword">Confirm Password</label>
            <input id="confpassword" type="password" />
            
            <button>Submit</button>
        </div>
    );
};

export default Signup;