import React from 'react'
import { BounceLoader } from 'react-spinners'
import './Loader.scss'

const Loader = () => {
  return (
    <div className='Loader'><BounceLoader color="#373737" size={40} /></div>
  )
}

export default Loader