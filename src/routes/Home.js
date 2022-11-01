import React from 'react'
import Spidey from '../components/Spidey'
import BrowseCategories from '../components/BrowseCategories'
import FearturedHeroes from '../components/FeaturedHeroes'
import RecommendedForYou from '../components/RecommendedForYou'
export default function Home() {
  return (
    <div>
      <Spidey />
      <div style={{height: '50vh'}}></div>
      <div className='sale'><h4>UPTO 40% OFF</h4></div>
      <BrowseCategories />
      <FearturedHeroes />
      <div className='sale'><h4>UPTO 40% OFF</h4></div>
      <RecommendedForYou />
    </div>
  )
}

