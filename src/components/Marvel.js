import React from 'react'
import Product from './Product'

const marvelData = [
  {
    id: 1,
    name: "thor"
  },
  {
    id: 2,
    name: "ironman"
  }
]

export default function Marvel() {
  const items = marvelData.map(item => (
    <Product name={item.name}/>
  ))
  return (
    <div>
      <h2>Marvel</h2>
       {items}
    </div>
  )
}
