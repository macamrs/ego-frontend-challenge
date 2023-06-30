import React from 'react'
import { Link } from 'react-router-dom'
import './CustomButton.scss'

const CustomButton = ({id}) => {
  return (
    <Link to={`/${id}`} className='Button-container'>
        <span className='Button-container-text'>Ver Modelo</span>
    </Link>
  )
}

export default CustomButton