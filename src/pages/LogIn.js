import React from 'react';
import Authenticate from '../components/Authenticate';
import './index.css';

const LogIn = () => {
  return (
    <div className='auth-container'>
      <div className='wrap-auth'>
        <h2>Log in</h2>
        <Authenticate />
        <a href='/sign-up'>Sign up</a>
      </div>
    </div>
  );
};

export default LogIn;
