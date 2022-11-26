import React from 'react'
import { useMarvelFilterContext } from '../Marvel/marvelFilterContext'
import FormatPrice from '../components/FormatPrice';
import Sort from './Sort';

export default function FilterSection() {
    const {filters:{text, category, price, maxPrice, minPrice},
        updateFilterValue, 
        all_marvel_products,
        clearFilters
    } = useMarvelFilterContext();

    const getUniqueData = (data, property) => {
        let newVal = data?.map((item)=>{
            return item[property];
        })
        return (newVal = ["All", ...new Set(newVal)]);
    };

    const categoryOnlyData  = getUniqueData(all_marvel_products, 'category');

  return (
    <div className='filter-section'>
        <Sort />
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
                className={item === category ? 'category-active' : ''}
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
