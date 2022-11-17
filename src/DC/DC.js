import React from 'react'
import { useDcFilterContext } from '../DC/DcFilterContext'
import Product from '../components/Product'
import DcFilterSection from '../DC/DcFilterSection';

export default function DC() {
  const {dc_filter_products} = useDcFilterContext();
  return (
    <div>
      <img className='title-image' src='images/dc.png' alt='none'/>
      
      <div className='products-page'>
      <DcFilterSection />
      <div className='products-page-products'>
        <div className="filtered-products">
          {dc_filter_products.map((item) => {
            return <Product key={item.id} {...item}/>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}