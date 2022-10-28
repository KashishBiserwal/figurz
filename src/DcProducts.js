import React from 'react'
import data from './data'
import { Link } from 'react-router-dom'

export default function DcProducts() {
  return (
    <div className='container'>
    {data.map(item => {
        return (
          item.category === 'dc' &&
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
