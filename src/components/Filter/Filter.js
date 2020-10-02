import React, {useState} from 'react'
import './Filter.scss'

const FilterPanel = ({onSearch}) => {   

    return(
        <div className = 'input-group__wrapper mr-2 d-flex'>
            <div className='input-group mb-3 mt-3 '>
                <input 
                    type="text" 
                    className="form-control bg-dark search-input" 
                    placeholder="Search" 
                    onChange = { e => onSearch(e.target.value)}    
                />
            </div>
        </div>
    )
}

export default FilterPanel