import React from 'react';
import logo from '../assets/turtle.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <img src={logo} alt="Logo" style={{ width: '100px' }} />
      </div>

      <div className='right'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        
        <button>
          <ReorderIcon/>
        </button>

      </div>
    </div>
  );
}

export default Navbar;
