import React from 'react'
import "./NavItem.css"
const NavItem = ({title,image}) => {
  return (
    <div className='navItem'>
        <img src={image} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default NavItem