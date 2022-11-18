import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function FearturedHeroes() {
  return (
    <div className='content-container p'>
        <h3 className='container-title'>Featured Heroes</h3>
        <div className='content-boxes'>
            <div className='grid'>
                <div className='grid-item'><Link to='Hero/batman'><img src='images/nav-swiper/sb.jpeg'/><h3 className='featured-name'>Batman</h3></Link></div>
                <div className='grid-item'><NavLink to='Hero/superman'><img src='images/nav-swiper/ssm.jpeg'/><h3 className='featured-name'>superman</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/spiderman'><img src='images/nav-swiper/sspiderman.jpeg'/><h3 className='featured-name'>spiderman</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/flash'><img src='images/nav-swiper/sf.jpeg'/><h3 className='featured-name'>flash</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/ironman'><img src='images/nav-swiper/sim.jpeg'/><h3 className='featured-name'>ironman</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/punisher'><img src='images/nav-swiper/sp.jpeg'/><h3 className='featured-name'>punisher</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/wonder woman'><img src='images/nav-swiper/sww.jpeg'/><h3 className='featured-name'>wonder woman</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/batman'><img src='images/nav-swiper/sb.jpeg'/><h3 className='featured-name'>Batman</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/superman'><img src='images/nav-swiper/ssm.jpeg'/><h3 className='featured-name'>superman</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/spiderman'><img src='images/nav-swiper/sspiderman.jpeg'/><h3 className='featured-name'>spiderman</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/flash'><img src='images/nav-swiper/sf.jpeg'/><h3 className='featured-name'>flash</h3></NavLink></div>
                <div className='grid-item'><NavLink to='Hero/ironman'><img src='images/nav-swiper/sim.jpeg'/><h3 className='featured-name'>ironman</h3></NavLink></div>
            </div>
        </div>
    </div>
  )
}
