import React, { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import './Filter-and-sort.scss'

export const Hero = ({handleFilter, handleSort, filterOrder, sortOrder}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <section>
      <div className='Filterandsort-wrapper'>
          <div className='Filterandsort-wrapper-filter_section'>
            <span className='Filterandsort-wrapper-filter_section-subtitle'>Filtrar por</span>
            <button className={`Filterandsort-wrapper-filter_section-${filterOrder === 'todos' ? 'active_button' : 'inactive_button' }`} value={"todos"} onClick={handleFilter}>
              Todos
            </button>
            <button className={`Filterandsort-wrapper-filter_section-${filterOrder === 'autos' ? 'active_button' : 'inactive_button' }`} value={"autos"} onClick={handleFilter}>
              Autos
            </button>
            <button className={`Filterandsort-wrapper-filter_section-${filterOrder === 'pickups' ? 'active_button' : 'inactive_button' }`} value={"pickups"} onClick={handleFilter}>
              Pickups y Comerciales
            </button>
            <button className={`Filterandsort-wrapper-filter_section-${filterOrder === 'suv' ? 'active_button' : 'inactive_button' }`} value={"suv"} onClick={handleFilter}>
              SUVs y Crossovers
            </button>
          </div>

        <div className='Filterandsort-wrapper-sort_section'>
          <div>
            <div className='Filterandsort-wrapper-sort_section-dropdown_btn' onClick={() => setOpenDropdown(!openDropdown)}>
              <span>Ordenar por</span> 
              <img src={arrow} alt="Flecha para abrir menú desplegable" />
            </div>
             
             {
              openDropdown &&
              <li className='Filterandsort-wrapper-sort_section-options_list'>
                <button className={`Filterandsort-wrapper-sort_section-options_list-${sortOrder === 'nada' ? 'active_button' : 'inactive_button' }`} value={"nada"} onClick={handleSort}>Nada</button>
                <button className={`Filterandsort-wrapper-sort_section-options_list-${sortOrder === 'asc' ? 'active_button' : 'inactive_button' }`} value={"asc"} onClick={handleSort}>De menor a mayor precio</button>
                <button className={`Filterandsort-wrapper-sort_section-options_list-${sortOrder === 'dsc' ? 'active_button' : 'inactive_button' }`} value={"dsc"} onClick={handleSort}>De mayor a menor precio</button>
                <button className={`Filterandsort-wrapper-sort_section-options_list-${sortOrder === 'nuevos' ? 'active_button' : 'inactive_button' }`} value={"nuevos"} onClick={handleSort}>Más nuevos primero</button>
                <button className={`Filterandsort-wrapper-sort_section-options_list-${sortOrder === 'viejos' ? 'active_button' : 'inactive_button' }`} value={"viejos"} onClick={handleSort}>Más viejos primero</button>
              </li>                
             }
          
          </div>       
        </div>
      </div>      
    </section>
  )
}
