import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCarAPIdata } from '../../utils/fetchAPIdata';
import './Ficha.scss'
import Highlights from '../../components/Highlights/Highlights';
import Feature from '../../components/Feature/Feature';
import Loader from '../../components/Loader/Loader';

const Ficha = () => {
    const { id } = useParams();
    const [ car , setCar ] = useState({})

    useEffect(() => {
        fetchCarAPIdata(id).then((data) => setCar(data))
    }, [])

    if(!car.id) return <Loader />;
    
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
                    return <Feature 
                        key={i}
                        image={feature.image}
                        name={feature.name}
                        description={feature.description}
                    />;
                })}    
            </div>
            
            <div className='ResponsiveFeature'>
                {car?.model_features?.map((feature, i) => {
                    return (
                        <Feature 
                            key={i}
                            image={feature.image}
                            name={feature.name}
                            description={feature.description}
                        />
                    );
                })}                
            </div>

            <div className='Highlights'>
                {car?.model_highlights?.map((highlight, i) => {
                    return (
                        <Highlights 
                            key={i}
                            image={highlight.image} 
                            title={highlight.title} 
                            content={highlight.content}
                        />
                    );
                })}                
            </div>
        </div>
    </>
  )
}

export default Ficha