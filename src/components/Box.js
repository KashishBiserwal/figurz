import React from 'react'
import { Link } from 'react-router-dom'

export default function Box(props) {
  return (
    <div className="grid-item">
        <Link to={`${props.id}`}><img src={props.img} alt={`${props.id}`}/></Link>
    </div>
  )
}