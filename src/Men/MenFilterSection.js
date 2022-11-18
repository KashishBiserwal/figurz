import React from 'react'
import { useMenFilterContext } from '../Men/menFilterContext'
import FormatPrice from '../components/FormatPrice';
import MenSort from './menSort';

export default function MenFilterSection() {

    const {filters:{text, price, maxPrice, minPrice},
        updateFilterValue, 
        all_men_products,
        clearFilters
    } = useMenFilterContext();

    const getUniqueData = (data, property) => {
        let newVal = data?.map((item)=>{
            return item[property];
        })
        return (newVal = ["All", ...new Set(newVal)]);
    };

    const categoryOnlyData  = getUniqueData(all_men_products, 'category');

  return (
    <div className='filter-section'>
        <MenSort />
        <div className='search'>
            <form onSubmit={(e) => e.preventDefault()}>
                <label><p className='filter-heading'>Search</p></label>
                <input 
                type='text'
                name='text'
                value={text}
                placeholder='Enter keywords'
                onChange={updateFilterValue}/>
            </form>
        </div>
        <div className='categ'>
        <p className='filter-heading'>Categories</p>
        <div className='categories-list'>{categoryOnlyData?.map((item, index) => {
            return (
            <button
                key={index}
                type='button'
                name='category'
                value={item} 
                onClick={updateFilterValue}
            >
                {item}
            </button>
            )
        })}</div>
        </div>
        <div className='price-range'>
            <p className='filter-heading'>Price</p>
            <p style={{marginLeft: '5px'}}>
                <FormatPrice price={price} />
            </p>
            <input style={{marginLeft: '5px'}} type='range' name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
        </div>
        <div className='clear-filter'>
            <button onClick={clearFilters}>Clear Filters</button>
        </div>
    </div>
  )
}
