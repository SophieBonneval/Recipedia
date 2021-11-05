import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBwB1lFbkJ999FLJ0Euwss-L4maQmag0lk',
  authDomain: 'recipedia-cbe2c.firebaseapp.com',
  databaseURL:
    'https://recipedia-cbe2c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'recipedia-cbe2c',
  storageBucket: 'recipedia-cbe2c.appspot.com',
  messagingSenderId: '51693362448',
  appId: '1:51693362448:web:65e579ed2bc2682cc9d995',
  measurementId: 'G-BW80EBWS3R',

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
