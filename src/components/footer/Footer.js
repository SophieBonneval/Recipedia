import React from 'react';
import './Footer.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
    <div data-testid="Footer-tag"/>
      <p>
        Created with <FaHeart className='heart' /> by <a href='https://github.com/Jjake540'>Jake</a>,{' '}
        <a href='https://github.com/KeldraSJ'>Keldra</a>, <a href='https://github.com/mandyvuong'>Amanda</a>, <a href='https://github.com/borisl16'>Boris</a>{' '}
        and <a href='https://github.com/Maldorana'>Sophie</a>
      </p>
    </footer>
  );
};

export default Footer;
