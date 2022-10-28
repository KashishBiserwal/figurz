import React from 'react'
import marveldata from './marveldata'
import { Link } from 'react-router-dom'

export default function MarvelProducts() {
  return (
    <div className='container'>
    {marveldata.map(item => {
        return (
          <article key={item.id}>
            <img className='product-image' src={item.img} alt='nothing'></img>
            <h2>{item.name}</h2>
            <button className='btn'><Link to={`/${item.id}`}>See Details</Link></button>
          </article>
        )
    })}
    </div>
  )
}
