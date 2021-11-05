import React from 'react';
import Authenticate from '../components/Authenticate';
import './index.css';

const LogIn = () => {
  return (
    <div className='container'>
      <h1>Log in</h1>
      <Authenticate />
    </div>
  );
};

export default LogIn;
