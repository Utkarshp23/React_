import React from 'react';
import Timer from '../Timer';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src='./logo192.png' width={50} height={50} />
      </div>
      <Timer />
    </div>
  );
};

export default Header;
