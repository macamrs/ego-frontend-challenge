import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/ego-logo.svg'
import burgerMenuIcon from '../../assets/burger-menu.svg'
import closeIcon from '../../assets/close-icon.svg'
import './Navbar.scss'

const Navbar = () => {
  const [open , setOpen] = useState(false)
  const location = useLocation();
  console.log({location});

  const firstLinkList = [
    "Modelos", "Servicios y Accesorios", "Financiación", "Reviews y Comunidad"
  ]
  const secondLinkList = [
    "Toyota Mobility Service", "Toyota Gazoo Racing", "Toyota Híbridos"
  ]
  const thirdLinkList = [
    "Concesionarios", "Test Drive", "Contacto"
  ]
  const fourthLinkList = [
    "Actividades", "Servicios al Cliente", "Ventas Especiales", "Innovación", "Prensa", "Acerca de..."
  ]

  return (
    <header className='Header'>
      <div className='Header-wrapper'>
        <div className='Header-navigation_container'>
          <img src={logo} alt="EGO brand logo" />
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

        {
          open &&
          <div className='MenuModal'>
            <div className='MenuModal-menu'>
              <div className='MenuModal-menu-wrapper'>
                <button className='MenuModal-menu-button' onClick={() => setOpen(!open)}>
                  <span>Cerrar</span>
                  <img src={closeIcon} alt="Icono para cerrar menú desplegable" />
                </button>      

                <ul className='MenuModal-menu-list'>
                  {firstLinkList?.map(l => {
                    return <li>{l}</li>
                  })}
                </ul>      
                <ul className='MenuModal-menu-list'>
                  {secondLinkList?.map(l => {
                    return <li>{l}</li>
                  })}
                </ul>   
                <ul className='MenuModal-menu-list'>
                  {thirdLinkList?.map(l => {
                    return <li>{l}</li>
                  })}
                </ul>                 
              </div>
  
              <ul className='MenuModal-menu-list_alt'>
                {fourthLinkList?.map(l => {
                  return <li>{l}</li>
                })}
              </ul>       
            </div>
          </div>
        }
      </div>
      
    </header>
  )
}

export default Navbar