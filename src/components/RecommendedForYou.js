import React from 'react'
import Product from '../components/Product'

export default function RecommendedForYou() {
  return (
    <div className='content-container p'>
        <h3 className='container-title'>Recommended Products</h3>
        <div className="recommended-products">
          {recommended.map((item) => {
            return <Product key={item.id} {...item}/>
          })}
        </div>
    </div>
  )
}


const recommended = [
    {
        id: 'm13',
        name: 'Punisher T-Shirt',
        category: 'T-Shirts',
        hero: 'punisher',
        price: 150,
        img1: 'tspunisher1.jpg',
        img2: 'tspunisher2.jpg',
        img3: 'tspunisher3.jpg',
    },
    {
        id: 'd4',
        name: 'Superman Hoodie',
        category: 'Hoodies',
        hero: 'superman',
        price: 350,
        img1: 'hosuperman1.jpg',
        img2: 'hosuperman2.jpg',
    },
    {
        id: 'd12',
        name: 'Wonder Woman Costume',
        category: 'T-Shirts',
        hero: 'wonderwoman',
        price: 350,
        img1: 'tsww1.jpg',
        img2: 'tsww2.jpg',
        img3: 'tsww3.jpg',
        img4: 'tsww4.jpg',
    },
    {
        id: 'm1',
        name: 'Venom T-Shirt',
        category: 'T-Shirts',
        hero: 'spiderman',
        price: 350,
        img1: 'tsvenom1.jpg',
        img2: 'tsvenom2.jpg',
        img3: 'tsvenom3.jpg',
        img4: 'tshirtsize.jpg',
    },
]