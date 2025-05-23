import React from 'react';
import logo from '../assets/turtle.png';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <img src={logo} alt="Logo" style={{ width: '100px' }} />
      </div>
      <div className='right'></div>
    </div>
  );
}

export default Navbar;
