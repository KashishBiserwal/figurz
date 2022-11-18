import React from 'react'
import { useMenFilterContext } from '../Men/menFilterContext'
import Product from '../components/Product'
import MenFilterSection from './MenFilterSection';

export default function Marvel() {
  const {men_filter_products} = useMenFilterContext();
  return (
    <div>
      <h2 className='gender-title'>Men Merchandise</h2>
      <div className='products-page'>
      <MenFilterSection />
      <div className='products-page-products'>
        <div className="filtered-products">
          {men_filter_products.map((item) => {
            return <Product key={item.id} {...item}/>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}