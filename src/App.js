import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app' data-testid='test-app'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Switch>
          <Route path='/about' component={About} />
        </Switch>
        <Switch>
          <Route path='/contact-us' component={ContactUs} />
        </Switch>
        <Switch>
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
