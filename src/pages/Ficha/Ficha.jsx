import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCarAPIdata } from '../../utils/fetchAPIdata';
import './Ficha.scss'

const Ficha = () => {
    const { id } = useParams();
    const [ car , setCar ] = useState({})

    useEffect(() => {
        fetchCarAPIdata(id).then((data) => {
            setCar(data)
        })
    }, [])

  return (
    <>
        <div key={car.id} className='Ficha'>
            <div className='Ficha-header'>
                <img
                    src={car.photo}
                    alt={`Image representation of ${car.name} car`}
                    className='Ficha-header-image'
                />
                <div className='Ficha-header-text_container'>
                    <h3 className='Ficha-header-text_container-heading '>{car.name}</h3>
                    <h1 className='Ficha-header-text_container-title'>{car.title}</h1>
                    <p className='Ficha-header-text_container-description' dangerouslySetInnerHTML={{ __html: car.description }}></p>                      
                </div>      
            </div>

            <div className='Feature'>
                {car?.model_features?.map((feature, i) => {
                    return (
                    <div key={i} className='Feature-wrapper'>
                        <img
                            src={feature.image}
                            alt={`Representacion de ${feature.name}`}
                            className='Feature-wrapper-image'
                        />
                        <h4 className='Feature-wrapper-name'>{feature.name}</h4>
                        <p className='Feature-wrapper-description'>{feature.description}</p>
                    </div>
                    );
                })}    
            </div>


            <div className='Highlights'>
                {car?.model_highlights?.map((highlight, i) => {
                    return (
                    <div key={i} className='Highlights-wrapper'>
                        <img
                            src={highlight.image}
                            alt={`Representacion de ${highlight.title}`}
                            className='Highlights-image'
                        />

                        <div className='Highlights-text_container'>
                            <h4 className='Highlights-text_container-title'>{highlight.title}</h4>
                            <p className='Highlights-text_container-description' dangerouslySetInnerHTML={{ __html: highlight.content }}></p>                        
                        </div>
                    </div>
                    );
                })}                
            </div>
        </div>
    </>
  )
}

export default Ficha