import React from 'react'
import image from '../assets/turtle.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='left'
      style={{backgroundImage:`url(${image})`}}>

      </div>


      <div className='right'>
        <h1>title</h1>
        
        <form id="contactForm" method='POST'>
            <label htmlFor='name'>Full Name</label>
            <input name='name' placeholder='enter full name' type='text'/>

            <label htmlFor='message'>Message</label>
            <textarea name="message" placeholder='message' rows="" required></textarea>

            <button type="submit">send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
