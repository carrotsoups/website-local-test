import React from 'react'
import "../styles/Home.css"
import {Link} from 'react-router-dom'
import bkg from '../assets/snoopybkg.png'

function Home() {
  return (
    <div className='Home'  style={{backgroundImage:`url(${bkg})`}}>
      <div className='headerContainer'>
        <h1>Sunni Xue</h1>
        <p>hi im description</p>

        <Link to="/menu">
          <button>Github</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Home
