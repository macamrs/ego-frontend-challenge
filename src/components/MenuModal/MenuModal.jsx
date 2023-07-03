import React from 'react'
import closeIcon from '../../assets/close-icon.svg'
import { firstLinkList, secondLinkList, thirdLinkList, fourthLinkList} from '../../utils/linksDb'
import './MenuModal.scss'
import { motion } from 'framer-motion'

const MenuModal = ({open, setOpen}) => {
  return (
      <motion.div 
        initial={{ x : '100%', opacity: 0}}
        animate={{ x : 0, opacity: 1}}
        exit={{ x: '-100%', opacity: 0}}
        transition={{duration: 0.45, ease: 'easeIn'}}
        className='MenuModal'
      >
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
      </motion.div>      
  )
}

export default MenuModal