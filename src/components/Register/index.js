import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase-config';
import { useHistory } from 'react-router';
import { setDoc, doc, Timestamp } from "firebase/firestore";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const history = useHistory();
  const [error, setError] = useState('');

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      history.replace('/');
      console.log(user);
      await setDoc(doc(db, "users", user.user.uid), {
        uid: user.user.uid,
        registerEmail,
        createdAt: Timestamp.fromDate(new Date()),
      });
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
      <div className='form-input-auth'>
        <input
          type='email'
          placeholder='Email...'
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
      </div>
      <div className='form-input-auth'>
        <input
          type='password'
          placeholder='Password...'
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
      </div>

      <button onClick={register}> Create User</button>

      <a href='/log-in'>Log in</a>

      {error && <div className='error-notice'>{error}</div>}
    </div>
  );
};

export default Register;
