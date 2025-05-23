import React from 'react'
import logo from '../assets/turtle.png'
import {BrowserRouter as Router} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <img src={logo}></img>
        </div>


        <div className='right'></div>
      
    </div>
  )
}

export default Navbar
