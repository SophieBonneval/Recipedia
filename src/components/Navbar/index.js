import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  MobileIcon,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnNormal,
} from './NavbarElements';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useHistory } from 'react-router';

const Navbar = () => {
  const [user, setUser] = useState({});
  const history = useHistory();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    history.replace('/');
  };

  // <div>
  //   <h4> User Logged In: </h4>
  //   {user?.email}

  //   <button onClick={logout}> Sign Out </button>
  // </div>;

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Recipedia</h1>
        </NavLink>
        <MobileIcon>
          <Bars />
        </MobileIcon>
        <NavMenu>
          {user ? <NavLink to='/recipe-new'>Add recipe</NavLink> : ''}
          {user ? <NavLink to='/my-recipes'>My recipes</NavLink> : ''}
          {user ? <NavLink to='/favourites'>My favourites</NavLink> : ''}
        </NavMenu>
        <NavBtn>
          {user ? (
            <NavBtnNormal onClick={logout}> Sign Out </NavBtnNormal>
          ) : (
            <NavBtnLink to='/log-in'>Log in</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
