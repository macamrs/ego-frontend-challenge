import React, { useState } from 'react'
import './CarCard.scss'
import CustomButton from '../CustomButton/CustomButton'
import { motion } from 'framer-motion'

const CarsCard = ({ id, name, year, price, thumbnail}) => {
  const priceTransform = price.toLocaleString("de-DE");
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div 
      className='Wrapper'
      layout
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={handleHover} onMouseLeave={handleLeave}
    >
      <h2>{name}</h2>
      <span>{year} | ${priceTransform}</span>
      <img
          src={thumbnail}
          alt={`Imagen representativa de el auto ${name}`}
          className='Wrapper-car_image'
      />

      <div className='Wrapper-button'
        >
          { isHovered &&
          <motion.div
          initial={{ x: '100%', opacity: 0}}
          animate={{ x: 0, opacity: 1}}
          transition={{ duration: 0.25 }}
          >
            <CustomButton id={id} />
          </motion.div>
          }
      </div>        

    </motion.div>   
  )
}

export default CarsCard