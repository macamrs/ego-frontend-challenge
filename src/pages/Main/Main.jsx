import React, { useEffect, useState } from 'react'
import { fetchAPIdata } from '../../utils/fetchAPIdata'
import { Hero } from '../../components/FilterAndSort/Hero'
import filterFunction from '../../utils/filterFunction'
import sortFunction from '../../utils/sortFunction'
import './Main.scss'
import CarsCard from '../../components/CarCards/CarsCard'

const Main = () => {
    const [cars , setCars] = useState([])
    const [filtered , setFiltered] = useState([]);
    const [/*order*/, setOrder] = useState('')

    const handleFilter = (e) => {
        e.preventDefault();
        filterFunction(e.target.value, cars).then((result) => setFiltered(result));
    }

    const handleSort = (e) => {
        e.preventDefault();
        sortFunction(e.target.value, filtered, cars).then((result) => setFiltered(result));
        setOrder(e.target.value)
    }

    useEffect(() => {
        fetchAPIdata().then((data) => {
            setCars(data)
            setFiltered(data)
        })
    }, [])

  return (
    <main className='Main'>
      <h1 className='Main-title'>Descubrí todos los modelos</h1>
      <Hero handleFilter={handleFilter} handleSort={handleSort} />
      <section className='Main-cars_list'>
        {filtered?.map((model) => {
            return (
              <CarsCard
                id={model.id}
                name={model.name}
                year={model.year}
                price={model.price}
                thumbnail={model.thumbnail}
              />
            );
          })}    
      </section>
    </main>

  )
}

export default Main