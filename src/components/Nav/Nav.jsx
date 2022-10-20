import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
        <div className='name'>Szymon Bosiak</div>

        <div className='nav_list'>
            <a className='nav_link nav_link_line' href="#about">About</a>
            <a className='nav_link nav_link_line' href="#projects">Projects</a>
            <a className='nav_link nav_link_line' href="#contact">Contact</a>
        </div>
    </div>
  )
}

export default Nav