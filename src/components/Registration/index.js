import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Registration = async () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  try {
    const user = await createUserWithEmailAndPassword(
      console.log(user),
      auth,
      registerEmail,
      registerPassword
    );
  } catch (error) {
    console.log(error.message);
  }

  return (
    <div className='container'>
      <h1>Sign up</h1>
      <input
        type='email'
        placeholder='Email'
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />
      <input
        type='password'
        placeholder='Password'
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />
      <button onClick={Registration}>Sign up</button>
    </div>
  );
};

export default Registration;
