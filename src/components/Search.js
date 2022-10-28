import React from 'react'
import { BsSearch } from 'react-icons/bs';

export default function Search() {
  return (
    <div >
      <BsSearch className='search-icon'/>
      <input type='text' placeholder='Search...'></input>
    </div>
  )
}