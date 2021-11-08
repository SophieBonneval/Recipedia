import React from 'react';
import Authenticate from '../components/Authenticate';
import './index.css';

const LogIn = () => {
  return (
    <div className='auth-container'>
      <div className='wrap-auth'>
        <h2>Log in</h2>
        <Authenticate />
      </div>
    </div>
  );
};

export default LogIn;
