import React from 'react'

const Product = (item) => {
    const {name, price, img1} = item;
  return (
    <div >
      <div className='Product-product'>
          <img src={`images/products/${img1}`}/>
          <div className='img-desc'>
            <h2>{name}</h2>
            <strong className='price'>{price}</strong>
          </div>
      </div>
    </div>
  )
} 

export default Product;