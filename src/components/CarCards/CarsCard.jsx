import React from 'react'
import './CarCard.scss'
import CustomButton from '../CustomButton/CustomButton'

const CarsCard = ({ id, name, year, price, thumbnail}) => {
  return (
    <div key={id} className='Wrapper'>
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
    </div>   
  )
}

export default CarsCard