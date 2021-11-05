import React from 'react';
import Register from '../components/Register';
import './index.css';

const SignUp = () => {
  return (
    <div className='container'>
      <h1>Sign up</h1>
      <Register />
      <a href='/log-in'>Log in</a>
    </div>
  );
};

export default SignUp;
