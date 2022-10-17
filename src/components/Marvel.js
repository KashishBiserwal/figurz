import React from 'react'
import Product from './Product'
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Marvel() {
  const [hide, setHide] = React.useState(false);
  function handleClick(){
    setHide(prev => !prev)
  }

  return (
    <div className='container'>
      <button className='container-btn' onClick={handleClick}>{!hide ? 'View All' : 'Show Less'}</button>
      <div className= {hide ? 'product-container expand' : 'product-container'}>
      <div className={!hide? 'cat-name': 'hide_it'}><div className='title'><h2 style={{marginTop: "4rem"}}>MARVEL</h2></div></div>
      <div className={!hide ? 'hide_it' : 'expand'}>
        <Product name="thor" />
        <Product name="thor" />
        <Product name="thor" />
        <Product name="thor" />
        <Product name="thor" />
        <Product name="thor" />
        <Product name="thor" />
        <Product name="thor" />
      </div>
      <Swiper
        modules={[ Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={4}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={hide ? 'hide_it' : ''}
      >
        <SwiperSlide>
          <Product name="thor" />
        </SwiperSlide>
        <SwiperSlide>
          <Product name="ironman" />
        </SwiperSlide>
        <SwiperSlide>
          <Product name="cap america" />
        </SwiperSlide>
        <SwiperSlide>
          <Product name="bkack widow" />
        </SwiperSlide>
        <SwiperSlide>
          <Product name="dr. strange" />
        </SwiperSlide>
        <SwiperSlide>
          <Product name="spiderman" />
        </SwiperSlide>
        <SwiperSlide>
          <Product name="bkack widow" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

