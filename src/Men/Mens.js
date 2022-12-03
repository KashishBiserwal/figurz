import React, {useState} from 'react'
import { useMenFilterContext } from '../Men/menFilterContext'
import Product from '../components/Product'
import MenFilterSection from './MenFilterSection';
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Marvel() {
  const {men_filter_products} = useMenFilterContext();
  const [show, setShow] = useState(false)
  function handleClick(){
      setShow(prev => !prev)
  }
  return (
    <div>
      <h2 className='gender-title'>Men Merchandise</h2>
      <div>
        <button className='toggle' onClick={handleClick}><GiHamburgerMenu style={{paddingTop: '3px'}}/>{!show ? 'Show' : 'Hide'} Filters</button>
      </div>
      <div className='products-page'>
      <MenFilterSection show={show}/>
      <div className='products-page-products'>
        <div className={!show ? "filtered-products" : "filtered-products-phone"}>
          {men_filter_products.map((item) => {
            return <Product key={item.id} {...item}/>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}