import React, { useState } from 'react';
import './index.css';
import { useHistory } from 'react-router';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Authenticate = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const history = useHistory();
  const [error, setError] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(user);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      history.replace('/');
      console.log(user);
    } catch (e) {
      switch (e.code) {
        case 'auth/invalid-email':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setError('Invalid credentials. Please try again!');
          break;
        case 'auth/network-request-failed':
          setError('Network error. Please try again!');
          break;
        default:
          console.error(e);
          setError('Something went wrong. Please try again!');
      }
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

      <a href='/sign-up'>Sign up</a>

      {error && <div className='error-notice'>{error}</div>}
    </div>
  );
};

export default Authenticate;
