import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <GithubIcon/> <LinkedInIcon/> <InstagramIcon/>
      </div>

      <p> Copyright &copy; 2025 Sunni Xue</p>
    </div>
  )
}

export default Footer
