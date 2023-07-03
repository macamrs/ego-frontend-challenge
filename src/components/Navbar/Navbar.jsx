import React, { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/ego-logo.svg'
import burgerMenuIcon from '../../assets/burger-menu.svg'
import './Navbar.scss'
import MenuModal from '../MenuModal/MenuModal'

const Navbar = () => {
  const [open , setOpen] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className='Header'>
      <div className='Header-wrapper'>
        <div className='Header-navigation_container'>
          <img className='Header-navigation_container-logo' src={logo} alt="Logo de EGO que redirige a la página Modelos" onClick={() => navigate('/')} />
          <nav className='Header-navigation_container-nav'>
              <NavLink to={'/'} className={({ isActive }) => isActive ? 'Header-navigation_container-nav-links' : 'Header-navigation_container-inactive_nav-links'}>Modelos</NavLink>
              {
                location.pathname !== '/' &&
              <NavLink to={'/:id'} className={({ isActive }) => (isActive || location.pathname !== '/' ) ? 'Header-navigation_container-nav-links' : 'Header-navigation_container-inactive_nav-links'}>Ficha de modelo</NavLink>                
              }
          </nav>          
        </div>

        <button className='Header-menu_button' onClick={() => setOpen(!open)}>
            <span>Menú</span>
            <img src={burgerMenuIcon} alt="Burger icon to open menu" />
        </button>          

        { open && <MenuModal open={open} setOpen={setOpen} /> }
      </div>
      
    </header>
  )
}

export default Navbar