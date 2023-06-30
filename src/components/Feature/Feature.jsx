import React from 'react'
import './Feature.scss'

const Feature = ({name, image, description}) => {
  return (
    <div className='Feature-wrapper'>
        <img
            src={image}
            alt={`Representacion de ${name}`}
            className='Feature-wrapper-image'
        />
        <h4 className='Feature-wrapper-name'>{name}</h4>
        <p className='Feature-wrapper-description'>{description}</p>
    </div>
  )
}

export default Feature