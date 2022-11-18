import React from 'react'
import { Link } from 'react-router-dom'
import BrowseCategories from '../components/BrowseCategories'
import FearturedHeroes from '../components/FeaturedHeroes'
import RecommendedForYou from '../components/RecommendedForYou'
export default function Home() {
  return (
    <div>
      <div className='banner'>
        <img src='images/banner.png' className='banner-image'/>
        <div className='banner-links'>
            <div className='banner-link-img'><Link to='Marvel'><img src='images/marvelbanner.jpg'/></Link></div>
            <div className='banner-dc banner-link-img'><Link to='dc'><img src='images/dcbanner.jpg'/></Link></div>
        </div>
      </div>
      <div className='sale p'><h2>UPTO 40% OFF</h2></div>
      <BrowseCategories />
      <FearturedHeroes />
      <div className='sale p'><h2>ENJOY FREE SHIPING ON ORDERS &#8377; 500 AND OVER</h2></div>
      <RecommendedForYou />
    </div>
  )
}

