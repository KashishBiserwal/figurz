import React from 'react'
import { useMarvelFilterContext } from '../Marvel/marvelFilterContext'
import Product from '../components/Product'
import FilterSection from '../Marvel/FilterSection';

export default function Marvel() {
  const {marvel_filter_products} = useMarvelFilterContext();
  return (
    <div>
      <img className='title-image' src='images/marvel.jpg' alt='none'/>
      
      <div className='products-page'>
      <FilterSection />
      <div className='products-page-products'>
        <div className="filtered-products">
          {marvel_filter_products.map((item) => {
            return <Product key={item.id} {...item}/>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}
