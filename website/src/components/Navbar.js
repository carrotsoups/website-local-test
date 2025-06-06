import React, {useState} from 'react';
import logo from '../assets/turtle.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks,  setOpenLinks] = useState(false);

  const toggleNavbar = () =>{
      setOpenLinks(!openLinks)
  }

  return (
    <div className='navbar'>
      <div className='left'>
        <div className='image-cropper'><img src={logo} alt="Logo"/></div>
        

        <div className='hiddenLinks' id={openLinks?"open":"close"}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/aframe3d">aframe</Link>
        </div>
        
      </div>

      <div className='right'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/aframe3d">aframe</Link>
        
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>

      </div>
    </div>
  );
}

export default Navbar;
