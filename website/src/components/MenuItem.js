import React from 'react'

function MenuItem({image, name, alt}) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage:`url(${image})`}}></div>
      <h1>{name}</h1>
      <p>{alt}</p>
    </div>
  )
}

export default MenuItem
