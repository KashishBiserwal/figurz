import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Box from './Box';

export default function Swipe() {
  return (
    <div className='scrollbar'>
        <Swiper
          spaceBetween={20}
          slidesPerView={12}
          loop={true}
          grabCursor={true}
        >
          <SwiperSlide><Box link='Hero/spiderman' img='images/nav-swiper/sam.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/ironman' img='images/nav-swiper/savengers.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='batmanAll' img='images/nav-swiper/sb.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sba.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sbp.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sca.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sd.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sdd.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sds.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sf.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sgroot.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sim.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sjl.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sjoker.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/ssm.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='thor' img='images/nav-swiper/sspiderman.jpg'/></SwiperSlide>
        </Swiper>
    </div>
  )
}
