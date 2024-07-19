import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import DataContext from '../context/DataContext';

const Search = () => {
  const {setSearch} = useContext(DataContext)
  return (
    <>
    <div className='search'>
        <label><FaSearch size={45} /></label>
        <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' />
    </div>
    </>
  )
}

export default Search