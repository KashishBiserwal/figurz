import React, {useState} from 'react'
import { useDcFilterContext } from '../DC/DcFilterContext'
import Product from '../components/Product'
import DcFilterSection from '../DC/DcFilterSection';
import {GiHamburgerMenu} from 'react-icons/gi'

export default function DC() {
  const {dc_filter_products} = useDcFilterContext();
  const [show, setShow] = useState(false)
  function handleClick(){
      setShow(prev => !prev)
  }
  return (
    <div>
      <img className='title-image' src='images/dc.png' alt='none'/>
      <div>
        <button className='toggle' onClick={handleClick}><GiHamburgerMenu style={{paddingTop: '3px'}}/>{!show ? 'Show' : 'Hide'} Filters</button>
      </div>
      <div className='products-page'>
      <DcFilterSection show={show}/>
      <div className='products-page-products'>
        <div className={!show ? "filtered-products" : "filtered-products-phone"}>
          {dc_filter_products.map((item) => {
            return <Product key={item.id} {...item}/>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}