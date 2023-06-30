import React from 'react'
import './Highlights.scss'

const Highlights = ({ image, title, content }) => {
  return (
    <div className='Highlights-wrapper'>
        <img
            src={image}
            alt={`Representacion de ${title}`}
            className='Highlights-image'
        />

        <div className='Highlights-text_container'>
            <h4 className='Highlights-text_container-title'>{title}</h4>
            <p className='Highlights-text_container-description' dangerouslySetInnerHTML={{ __html: content }}></p>                        
        </div>
    </div>
  )
}

export default Highlights