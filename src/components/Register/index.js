import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../../firebase-config';
import { setDoc, doc, Timestamp } from "firebase/firestore";

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
      await setDoc(doc(db, "users", user.user.uid), {
        uid: user.user.uid,
        registerEmail,
        createdAt: Timestamp.fromDate(new Date()),
      });
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

      <button onClick={register}> Create User</button>
    </div>
  );
};

export default Register;
