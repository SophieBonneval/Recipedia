import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages';
import About from './pages/About';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Sidebar from './components/Sidebar';
import RecipeDetail from './components/RecipeDetail/Recipedetail';
import RecipeNew from './pages/RecipeNew';
import Favourites from './pages/Favourites';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase-config';

function App() {
  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  return (
    <div className='app' data-testid='test-app'>
      <Router>
        <Sidebar />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/recipe-new' component={RecipeNew} />
          <Route path='/favourites' component={Favourites} />
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

/* <div>
<h4> User Logged In: </h4>
{user?.email}
</div> */
