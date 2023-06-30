import React from 'react'
import closeIcon from '../../assets/close-icon.svg'

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
  )
}

export default MenuModal