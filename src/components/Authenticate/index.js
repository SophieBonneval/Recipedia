import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Authenticate = async () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  try {
    const user = await signInWithEmailAndPassword(
      console.log(user),
      auth,
      loginEmail,
      loginPassword
    );
  } catch (error) {
    console.log(error.message);
  }

  return (
    <div className='container'>
      <h1>Log in</h1>
      <input
        type='email'
        placeholder='Email'
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <button>Log In</button>
    </div>
  );
};

export default Authenticate;
