import React from 'react'

export default function RecommendedForYou() {
  return (
    <div className='content-container p'>
        <h3 className='container-title'>Recommended Products</h3>
        <div className='content-boxes'>
            <div className='categories'>
                <div className='cat-item'>
                    <img src='images/thor-p.jpg' alt='no'/>
                    <h3 className='cat'>Item</h3>
                </div>
                <div className='cat-item'>
                    <img src='images/thor-p.jpg' alt='no'/>
                    <h3 className='cat'>Item</h3>
                </div>
                <div className='cat-item'>
                    <img src='images/thor-p.jpg' alt='no'/>
                    <h3 className='cat'>Item</h3>
                </div>
                <div className='cat-item'>
                    <img src='images/thor-p.jpg' alt='no'/>
                    <h3 className='cat'>Item</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
