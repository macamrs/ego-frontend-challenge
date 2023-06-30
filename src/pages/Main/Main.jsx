import React, { useEffect, useState } from 'react'
import { fetchAPIdata } from '../../utils/fetchAPIdata'
import { FilterSort } from '../../components/FilterAndSort/FilterSort'
import filterFunction from '../../utils/filterFunction'
import sortFunction from '../../utils/sortFunction'
import { motion, AnimatePresence } from 'framer-motion'
import './Main.scss'
import CarsCard from '../../components/CarCards/CarsCard'
import { BounceLoader } from 'react-spinners'
import Title from '../../components/Title/Title'

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
      <Title texto={'Descubrí todos los modelos'} />
      <FilterSort handleFilter={handleFilter} handleSort={handleSort} filterOrder={filterOrder} sortOrder={sortOrder} />
      <motion.section 
        layout
        transition={{ duration: 0.3}}
        className='Main-cars_list'
      >
        <AnimatePresence>
          {(cars.length === 0 || filtered === 0) ? 
          <BounceLoader color="#373737" size={40} />
          : 
          filtered?.map((model) => {
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