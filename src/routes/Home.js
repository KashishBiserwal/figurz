import React from 'react'
import BrowseCategories from '../components/BrowseCategories'
import FearturedHeroes from '../components/FeaturedHeroes'
import RecommendedForYou from '../components/RecommendedForYou'
export default function Home() {
  return (
    <div>
      <div style={{height: '50vh'}}></div>
      <div className='sale p'><h2>UPTO 40% OFF</h2></div>
      <BrowseCategories />
      <FearturedHeroes />
      <div className='sale p'><h2>ENJOY FREE SHIPING ON ORDERS $50 AND OVER</h2></div>
      <RecommendedForYou />
    </div>
  )
}

