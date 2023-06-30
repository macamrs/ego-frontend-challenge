import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/ego-logo.svg'
import burgerMenuIcon from '../../assets/burger-menu.svg'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className='Header'>
      <div className='Header-wrapper'>
        <div className='Header-navigation_container'>
          <img src={logo} alt="EGO brand logo" />
          <nav className='Header-navigation_container-nav'>
              <NavLink to={'/'} className='Header-navigation_container-nav-links'>Modelos</NavLink>
              <NavLink to={'/:id'} className='Header-navigation_container-nav-links'>Ficha de modelo</NavLink>
          </nav>          
        </div>

        <div className='Header-menu_button'>
            <span>Menú</span>
            <img src={burgerMenuIcon} alt="Burger icon to open menu" />
        </div>          
      </div>
      
    </header>
  )
}

export default Navbar