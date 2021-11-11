import React from 'react';
import './Footer.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div data-testid='Footer-tag' />
      <p>
        Created with
        <FaHeart className='heart-footer' />
        by{' '}
        <a
          href='https://github.com/Jjake540'
          target='_blank'
          rel='noopener noreferrer'
        >
          Jake
        </a>
        ,{' '}
        <a
          href='https://github.com/KeldraSJ'
          target='_blank'
          rel='noopener noreferrer'
        >
          Keldra
        </a>
        ,{' '}
        <a
          href='https://github.com/mandyvuong'
          target='_blank'
          rel='noopener noreferrer'
        >
          Amanda
        </a>
        ,{' '}
        <a
          href='https://github.com/borisl16'
          target='_blank'
          rel='noopener noreferrer'
        >
          Boris
        </a>{' '}
        and
        <a
          href='https://github.com/Maldorana'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          Sophie
        </a>
      </p>
    </footer>
  );
};

export default Footer;
