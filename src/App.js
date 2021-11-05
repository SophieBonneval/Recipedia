import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignUp';
import LogIn from './pages/LogIn';
import Sidebar from './components/Sidebar';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className='app' data-testid='test-app'>
      <Router>
        <Sidebar />
        <Navbar />

        <div>
          <h4> User Logged In: </h4>
          {user?.email}

          <button onClick={logout}> Sign Out </button>
        </div>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/log-in' component={LogIn} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

//  const [isOpen, setIsOpen] = useState(false);
//
//  const toggle = () => {
//    setIsOpen(!isOpen);
//  };
