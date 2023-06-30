import React from 'react'
import './CarCard.scss'
import CustomButton from '../CustomButton/CustomButton'
import { motion } from 'framer-motion'

const CarsCard = ({ id, name, year, price, thumbnail}) => {
  return (
    <motion.div 
      className='Wrapper'
      layout
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25}}
    >
        <h2>{name}</h2>
        <span>
            {year} | ${price}
        </span>
        <img
            src={thumbnail}
            alt={`Image representation of ${name} car`}
            className='Wrapper-car_image'
        />
        <CustomButton id={id} />
    </motion.div>   
  )
}

export default CarsCard