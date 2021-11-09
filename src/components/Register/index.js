import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3> Register User </h3>
      <input
        type='email'
        placeholder='Email...'
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <input
        type='password'
        placeholder='Password...'
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      />

      <button onClick={register} title="registerButton">Register</button>
    </div>
  );
};

export default Register;
