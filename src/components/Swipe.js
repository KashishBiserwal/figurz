import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Box from './Box';

export default function Swipe() {
  return (
    <div className='scrollbar'>
        <Swiper
          spaceBetween={30}
          slidesPerView={12}
          loop={true}
          grabCursor={true}
        >
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          <SwiperSlide><Box /></SwiperSlide>
          
        </Swiper>
    </div>
  )
}
