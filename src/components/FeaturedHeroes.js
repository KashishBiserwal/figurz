import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function FearturedHeroes() {
  return (
    <div className='content-container p'>
        <h3 className='container-title'>Featured Heroes</h3>
        <div className='content-boxes'>
            <div className='grid'>
                <div className='grid-item'><NavLink to='spiderman'><img src='images/nav-swiper/sb.jpg'/><h3 className='featured-name'>Batman</h3></NavLink></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sca.jpg'/><h3 className='featured-name'>Captain america</h3></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sd.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sf.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sb.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sca.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sd.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sf.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sb.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sca.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sd.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sf.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sb.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sca.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sd.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                <div className='grid-item'><Link to=" "><img src='images/nav-swiper/sf.jpg'/><h2 className='featured-name'>Batman</h2></Link></div>
                
            </div>
        </div>
    </div>
  )
}
