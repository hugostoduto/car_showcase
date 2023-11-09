'use client'
import React, {useState} from 'react'
import {SearchManufacture} from './index'



function SearchBar() {
  const [manufacture, setManufacture] = useState('')
  const handleSearch = ()=>{}
  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="serchbar__item">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
      </div>
    </form>
  )
}

export default SearchBar