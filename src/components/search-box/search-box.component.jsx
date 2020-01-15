import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChance }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder} 
        onChange={handleChance} />
)