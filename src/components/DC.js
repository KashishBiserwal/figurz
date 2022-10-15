import React from 'react'
import Product from './Product'

export default function DC() {
    const items = dcData.map(item => (
        <Product name={item.name}/>
      ))
      return (
        <div className='container'>
          <button className="container-btn">Show more</button>
          <div className='product-container'>
          <h2 className='cat-name'>DC</h2>
           {items}
          </div>
        </div>
      )
}

const dcData = [
    {
      id: 1,
      name: "batman"
    },
    {
      id: 2,
      name: "joker"
    }
]