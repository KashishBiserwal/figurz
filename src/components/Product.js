import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (item) => {
    const {name, price, img1} = item;
  return (
    <div>
      <NavLink to={`/${item.id}`}>
        <div className='Product-product'>
            <img src={`images/products/${img1}`} alt='showing'/>
            <div className='img-desc'>
              <h2>{name}</h2>
              <strong className='price'>&#8377;{price}</strong>
            </div>
        </div>
      </NavLink>
    </div>
  )
} 

export default Product;