import React from 'react'
import { Link } from 'react-router-dom'
import BrowseCategories from '../components/BrowseCategories'
import FearturedHeroes from '../components/FeaturedHeroes'
import RecommendedForYou from '../components/RecommendedForYou'
export default function Home() {
  return (
    <div>
      <div className='banner'>
        <img src='images/banner.png' alt='banner' className='banner-image'/>
        <div className='banner-links'>
            <div className='banner-link-img'><Link to='Marvel'><img src='images/marvelbanner.jpg' alt='marvel banner'/></Link></div>
            <div className='banner-dc banner-link-img'><Link to='dc'><img src='images/dcbanner.jpg' alt='dc banner'/></Link></div>
        </div>
      </div>
      <div className='sale p'><h2>UPTO 40% OFF</h2></div>
      <BrowseCategories />
      <FearturedHeroes />
      <div className='sale p'><h2>ENJOY FREE SHIPPING ON ORDERS &#8377; 750 AND OVER</h2></div>
      <RecommendedForYou />
    </div>
  )
}

