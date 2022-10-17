import React from 'react'

export default function Product(props) {
  return (
    <div className="product">
        {props.name}
        <img src='images/cap.png'></img>
    </div>
  )
}
