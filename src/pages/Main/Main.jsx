import React, { useEffect, useState } from 'react'
import { fetchAPIdata } from '../../utils/fetchAPIdata'
import { Hero } from '../../components/FilterAndSort/Hero'
import filterFunction from '../../utils/filterFunction'
import sortFunction from '../../utils/sortFunction'
import { motion, AnimatePresence } from 'framer-motion'
import './Main.scss'
import CarsCard from '../../components/CarCards/CarsCard'

const Main = () => {
    const [cars , setCars] = useState([])
    const [filtered , setFiltered] = useState([]);
    const [filterOrder, setFilterOrder] = useState('todos')
    const [sortOrder, setSortOrder] = useState('nada')

    const handleFilter = (e) => {
        e.preventDefault();
        filterFunction(e.target.value, cars).then((result) => setFiltered(result));
        setFilterOrder(e.target.value)
    }

    const handleSort = (e) => {
        e.preventDefault();
        sortFunction(e.target.value, filtered, cars).then((result) => setFiltered(result));
        setSortOrder(e.target.value)
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
      <Hero handleFilter={handleFilter} handleSort={handleSort} filterOrder={filterOrder} sortOrder={sortOrder} />
      <motion.section 
        layout
        transition={{ duration: 0.3}}
        className='Main-cars_list'
      >
        <AnimatePresence>
          {filtered?.map((model) => {
              return (
                <CarsCard
                  key={model.id}
                  id={model.id}
                  name={model.name}
                  year={model.year}
                  price={model.price}
                  thumbnail={model.thumbnail}
                />
              );
            })}            
        </AnimatePresence>
      </motion.section>
    </main>

  )
}

export default Main