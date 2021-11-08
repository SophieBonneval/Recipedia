import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Authenticate = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const history = useHistory();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      history.replace('/');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='auth-form'>
      <input
        type='email'
        placeholder='Email...'
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        type='password'
        placeholder='Password...'
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />

      <button onClick={login}> Login</button>
    </div>
  );
};

export default Authenticate;
