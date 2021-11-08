import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useHistory } from 'react-router';

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const history = useHistory();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      history.replace('/');
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='auth-form'>
      <div className='form-input'>
        <input
          type='email'
          placeholder='Email...'
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
      </div>
      <div className='form-input'>
        <input
          type='password'
          placeholder='Password...'
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
      </div>

      <button onClick={register}> Create User</button>
    </div>
  );
};

export default Register;
