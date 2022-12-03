import React, {useState} from 'react'
import { useMarvelFilterContext } from '../Marvel/marvelFilterContext'
import Product from '../components/Product'
import FilterSection from '../Marvel/FilterSection';
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Marvel() {
  const [show, setShow] = useState(false)
  const {marvel_filter_products} = useMarvelFilterContext();
  function handleClick(){
      setShow(prev => !prev)
  }
  return (
    <div>
      <img className='title-image' src='images/marvel.jpg' alt='none'/>
      <div>
        <button className='toggle' onClick={handleClick}><GiHamburgerMenu style={{paddingTop: '3px'}}/>{!show ? 'Show' : 'Hide'} Filters</button>
      </div>
      <div className='products-page'>
      <FilterSection show={show}/>
      <div className='products-page-products'>
        <div className={!show ? "filtered-products" : "filtered-products-phone"}>
          {marvel_filter_products.map((item) => {
            return <Product key={item.id} {...item}/>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}
