import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useHistory } from 'react-router';

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
    <div className="auth-form">
      <div className="form-input">
        <input
          type="email"
          placeholder="Email..."
          data-testid="email-input"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
      </div>
      <div className="form-input">
        <input
          type="password"
          placeholder="Password..."
          data-testid="password-input"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
      </div>

      <button onClick={register} title="registerButton" data-testid="register-button">
        Register
      </button>

      <a href="/log-in">Log in</a>

      {error && <div className="error-notice">{error}</div>}
    </div>
  );
};

export default Register;
