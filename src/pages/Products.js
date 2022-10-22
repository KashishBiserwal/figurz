import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import products from '../data';
import Header from "../Header"
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Product from './Product';
import Spidey from './Spidey';


const Products = () => {
  const [show, setShow] = useState(false);
  function handleClick(){
    setShow(prev => !prev)
  }
  return (
    <section>
      <div id='logo'> Logo</div>
      <Header />
      <Spidey />
      <div className='container'>
        <button onClick={handleClick} className="show">{show ? 'Show Less' : 'View All'}</button>
        <div className= {!show ? 'product-container expand' : 'product-container'}>
          <div className={!show? 'cat-name': 'hidden'}><div className='title'><h2>MARVEL</h2></div></div>
          {show &&
          <div className='expand'>
            {products.map((product) => {
              return (
                <article key={product.id}>
                  <img src={product.image} alt={product.name}></img>
                  <h3>{product.name}</h3>
                  <button className='details-btn'><Link to={`/${product.id}`}>Show Details</Link></button>
                </article>
              );
            })}
          </div>}
          {!show && 
            <Swiper
              modules={[ Pagination, A11y]}
              slidesPerView={4}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className='swiper'
              >
              <SwiperSlide>
                <Product name="thor" image="images/thor.png" id="1"/>
              </SwiperSlide>
              <SwiperSlide>
                <Product name="ironman" image="images/ironman.png" id="2"/>
              </SwiperSlide>
              <SwiperSlide>
                <Product name="thor" image="images/thor.png" id="3"/>
              </SwiperSlide>
              <SwiperSlide>
                <Product name="thor" image="images/thor.png" id="1"/>
              </SwiperSlide>
              <SwiperSlide>
                <Product name="ironman" image="images/ironman.png" id="2"/>
              </SwiperSlide>
              <SwiperSlide>
                <Product name="thor" image="images/thor.png" id="3"/>
              </SwiperSlide>
            </Swiper>
          }
        </div>
      </div>
    </section>
  );
};

export default Products;
