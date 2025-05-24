import React from 'react'
import "../styles/Home.css"
import {Link} from 'react-router-dom'
import bkg from '../assets/snoopybkg.png'
import WholeSetUp from '../components/WholeSetUp'

function Home() {
  return (
    <div className='Home'  style={{backgroundImage:`url(${bkg})`}}>
      <div className='headerContainer'>
        <div className='left'>
          <h1>Sunni Xue</h1>
          <p>hi im description</p>

          <Link to="https://github.com/carrotsoups" target="_blank"><button>Github</button></Link>
        </div>


        <div className='right'>
          <p>sfnjasjdfsfdf</p>
          <WholeSetUp/>
        </div>
      
           
      </div>
    </div>
  )
}

export default Home
