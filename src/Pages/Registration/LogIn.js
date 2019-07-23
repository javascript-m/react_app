import React from 'react';
import './Registration.css';

const LogIn = () => {
    return (
        <div className='containter'>
            <div className='container_inner'>
                <h1>Log In</h1>
                <input placeholder='Username' type='text'></input>
                <input placeholder='Password' type='text'></input>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default LogIn;