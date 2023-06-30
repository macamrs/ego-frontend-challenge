import React from 'react'
import '../FilterAndSort/Filter-and-sort.scss'
import arrow from '../../assets/arrow.svg'

const ResponsiveFilter = ({setOpenFilterDropdown, openFilterDropdown, filterOrder, handleFilter}) => {
  return (
     <>
        <div className='Filterandsort-wrapper-sort_section-dropdown_btn' onClick={() => setOpenFilterDropdown(!openFilterDropdown)}>
            <span>Filtrar por</span>
            <img src={arrow} alt="Flecha para abrir menú desplegable" />
        </div>

        {
        openFilterDropdown &&
        <ul className='Filterandsort-wrapper-sort_section-responsive_options_list'>
            <button className={`Filterandsort-wrapper-sort_section-options_list-${filterOrder === 'todos' ? 'active_button' : 'inactive_button' }`} value={"todos"} onClick={handleFilter}>Todos</button>
            <button className={`Filterandsort-wrapper-sort_section-options_list-${filterOrder === 'autos' ? 'active_button' : 'inactive_button' }`} value={"autos"} onClick={handleFilter}>Autos</button>
            <button className={`Filterandsort-wrapper-sort_section-options_list-${filterOrder === 'pickups' ? 'active_button' : 'inactive_button' }`} value={"pickups"} onClick={handleFilter}>Pickups y Comerciales</button>
            <button className={`Filterandsort-wrapper-sort_section-options_list-${filterOrder === 'suv' ? 'active_button' : 'inactive_button' }`} value={"suv"} onClick={handleFilter}>SUVs y Crossovers</button>
        </ul>
        }
     </>
  )
}

export default ResponsiveFilter