import React from 'react'
import {MenuList} from "../helpers/MenuList"
import MenuItem from "../components/MenuItem"
import "../styles/Menu.css"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>testites</h1>
        <div className='menuList'>
            {MenuList.map((menuItem,key)=>{
                return <div>
                    <MenuItem image={menuItem.image} name={menuItem.name} alt={menuItem.alt} key={key}/>
                </div>
            })}

        </div>

    </div>
  )
}

export default Menu
