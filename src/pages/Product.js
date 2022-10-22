import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
  return (
    <article>
      <img src={props.image} alt={props.name}></img>
      <h3>{props.name}</h3>
      <button><Link to={`/${props.id}`}>Show Details</Link></button>
    </article>
  )
}
