import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Sidebar from './components/Sidebar';
import RecipeDetail from './components/RecipeDetail/Recipedetail';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import UserCreateRecipe from './components/UserRecipe/UserCreateRecipe'

function App() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className='app' data-testid='test-app'>
      <Router>
        <Sidebar />
        <Navbar />
        <div>
          <h4> User Logged In: </h4>
          {user?.email}
        </div>
        <Switch>
          <Route path='/user/recipe' exact component={UserCreateRecipe} />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/recipe/:id' component={RecipeDetail} />
          <Route path='/sign-up' component={SignUp} />
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
