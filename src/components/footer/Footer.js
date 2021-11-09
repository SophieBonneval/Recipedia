import React from 'react';
import './Footer.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
    <div data-testid="Footer-tag"/>
      <p>
        Created with <FaHeart className='heart' /> by <a href='#'>Jake</a>,{' '}
        <a href='#'>Keldra</a>, <a href='#'>Amanda</a>, <a href='#'>Boris</a>{' '}
        and <a href='#'>Sophie</a>
      </p>
    </footer>
  );
};

export default Footer;
