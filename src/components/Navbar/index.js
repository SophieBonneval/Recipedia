import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  MobileIcon,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

const Navbar = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  // <div>
  //   <h4> User Logged In: </h4>
  //   {user?.email}

  //   <button onClick={logout}> Sign Out </button>
  // </div>;
  
    return (
      <>
        <Nav>
          <NavLink to="/">
            <h1>Recipedia</h1>
          </NavLink>
          <MobileIcon>
            <Bars />
          </MobileIcon>
          <NavMenu>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact-us">Contact us</NavLink>
          </NavMenu>
          <NavBtn>
            {user ? (
              <button onClick={logout}> Sign Out </button>

            ) : (
              <NavBtnLink to='/log-in'>Log in</NavBtnLink>
            )} 
        </NavBtn>
        </Nav>
      </>
    
    );
  
};

export default Navbar;
