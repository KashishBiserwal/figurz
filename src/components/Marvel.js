import React from 'react'
import Product from './Product'

export default function Marvel() {
  const items = marvelData.map(item => (
    <Product name={item.name}/>
  ))
  return (
    <div className='container'>
      <button className="container-btn">Show more</button>
      <div className='product-container'>
      <h2 className='cat-name'>Marvel</h2>
       {items}
      </div>
    </div>
  )
}

const marvelData = [
  {
    id: 1,
    name: "thor"
  },
  {
    id: 2,
    name: "ironman"
  },
  {
    id: 3,
    name: "cap america"
  },
  {
    id: 4,
    name: "black widow"
  },
  {
    id: 5,
    name: "cap america"
  },
  {
    id: 6,
    name: "black widow"
  }
]