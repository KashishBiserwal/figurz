import React from 'react'
import { Link } from 'react-router-dom'

export default function BrowseCategories() {
  return (
    <div className='content-container p'>
        <h3 className='container-title'>Browse Categories</h3>
        <div className='content-boxes'>
            <div className='categories'>
                <Link to='Men'>
                    <div className='Product-product p20'>
                        <img src='images/mens.jpg' alt='men'/>
                        <h3 className='cat'>MEN</h3>
                    </div>
                </Link>
                <Link to='Women'>
                <div className='Product-product p20'>
                    <img src='images/womens.jpg' alt='women'/>
                    <h3 className='cat'>WOMEN</h3>
                </div>
                </Link>
                <Link to='Kids'>
                <div className='Product-product p20'>
                    <img src='images/kids.jpg' alt='kids'/>
                    <h3 className='cat'>KIDS</h3>
                </div>
                </Link>
                <Link to='Figures'>
                <div className='Product-product p20'>
                    <img src='images/figures.jpg' alt='dolls'/>
                    <h3 className='cat'>DOLLS</h3>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
