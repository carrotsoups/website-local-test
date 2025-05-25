import React from 'react'
import "../styles/Home.css"
import {Link} from 'react-router-dom'
import bkg from '../assets/snoopybkg.png'
import WholeSetUp from '../components/WholeSetUp'

function Home() {
  return (
    <div className='Home'>
      <div className='headerContainer'>
        <div className='left'>
          <h1 className='glow'>Hi I'm Sunni Xue</h1>
          <div className='box'>
            <div>
              <p className='typing'>hi im description</p>
            </div>
          </div>
      

          <Link to="https://github.com/carrotsoups" target="_blank"><button>Github</button></Link>
        </div>


        <div className='right'>
          <WholeSetUp/>
        </div>
      
           
      </div>
    </div>
  )
}

export default Home
// style={{backgroundImage:`url(${bkg})`}}