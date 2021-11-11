import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background-color: var(--palette4);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  box-shadow: 0 0.2rem 0.3rem rgb(0 0 0 / 15%);
`;

export const NavLink = styled(Link)`
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--palette2);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--white);
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 16px;
    transform: translated(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: var(--palette1);
  padding: 10px 22px;
  color: var(--white);
  outline: none;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;

  &:hover {
    transition: var(--transition);
    background: var(--palette1-dark);
    color: var(--white);
  }
`;

export const NavBtnNormal = styled.button`
  border-radius: 4px;
  background: var(--palette1);
  padding: 10px 22px;
  color: var(--white);
  outline: none;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  border: none;
  font-size: 1rem;

  &:hover {
    transition: var(--transition);
    background: var(--palette1-dark);
    color: var(--white);
  }
`;
