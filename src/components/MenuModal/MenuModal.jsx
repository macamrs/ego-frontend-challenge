import React from 'react'
import closeIcon from '../../assets/close-icon.svg'
import './MenuModal.scss'

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

const MenuModal = ({open, setOpen}) => {
  return (
    <div className='MenuModal'>
    <div className='MenuModal-menu'>
      <div className='MenuModal-menu-wrapper'>
        <button className='MenuModal-menu-button' onClick={() => setOpen(!open)}>
          <span>Cerrar</span>
          <img src={closeIcon} alt="Icono para cerrar menú desplegable" />
        </button>      

        <ul className='MenuModal-menu-list'>
          {firstLinkList?.map((link, i) => {
            return <li key={i}>{link}</li>
          })}
        </ul>      
        <ul className='MenuModal-menu-list'>
          {secondLinkList?.map((link, i) => {
            return <li key={i}>{link}</li>
          })}
        </ul>   
        <ul className='MenuModal-menu-list'>
          {thirdLinkList?.map((link, i) => {
            return <li key={i}>{link}</li>
          })}
        </ul>                 
      </div>

      <ul className='MenuModal-menu-list_alt'>
        {fourthLinkList?.map((link, i) => {
          return <li key={i}>{link}</li>
        })}
      </ul>       
    </div>
  </div>
  )
}

export default MenuModal