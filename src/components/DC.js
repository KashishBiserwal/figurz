import React from 'react'
import Product from './Product'

export default function DC() {
    const items = dcData.map(item => (
        <Product name={item.name}/>
      ))
      return (
        <div>
          <h2>DC</h2>
           {items}
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