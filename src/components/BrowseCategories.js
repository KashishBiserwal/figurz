import React from 'react'
import { Link } from 'react-router-dom'

export default function BrowseCategories() {
  return (
    <div className='content-container p'>
        <h3 className='container-title'>Browse Categories</h3>
        <div className='content-boxes'>
            <div className='categories'>
                <Link to='Men'>
                    <div className='cat-item'>
                        <img src='images/mens.jpg' />
                        <h3 className='cat'>MEN</h3>
                    </div>
                </Link>
                <Link to='Women'>
                <div className='cat-item'>
                    <img src='images/womens.jpg' />
                    <h3 className='cat'>WOMEN</h3>
                </div>
                </Link>
                <Link to='Kids'>
                <div className='cat-item'>
                    <img src='images/kids.jpg' />
                    <h3 className='cat'>KIDS</h3>
                </div>
                </Link>
                <Link to='Figures'>
                <div className='cat-item'>
                    <img src='images/figures.jpg' />
                    <h3 className='cat'>FIGURES/DOLLS</h3>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
