import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Sidebar from './components/Sidebar';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
  //  const [isOpen, setIsOpen] = useState(false);
  //
  //  const toggle = () => {
  //    setIsOpen(!isOpen);
  //  };

  return (
    <div className='app' data-testid='test-app'>
      <Router>
        <Sidebar />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-in' component={SignUp} />
          <Route path='/log-in' component={LogIn} />
        </Switch>
      </Router>
      <button>Log Out</button>
      <Footer />
    </div>
  );
}

export default App;
