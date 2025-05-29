import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import image from '../garden-images/n3.png'
import image1 from '../garden-images/n6.webp'
import image2 from '../garden-images/n8.jpeg'
import image3 from '../garden-images/n4.webp'




const Header = () => {
  return (
    <Swiper className='header'
          modules={[Navigation, Pagination]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}>
       <SwiperSlide>
         <img src={image} alt="" />
        <div className="hearder__title">
            <h2>Where Comfort Meets Cuisine</h2>
            <p>Cozy up in a homely atmosphere while savoring hearty dishes inspired by family traditions.</p>
            </div>
       </SwiperSlide>

        <SwiperSlide>
         <img src={image3} alt="" />
        <div className="hearder__title">
            <h2>Fresh From Garden to Table</h2>
            <p>Enjoy meals made with locally sourced ingredients and herbs picked fresh from our garden.</p>
            </div>
       </SwiperSlide>


        <SwiperSlide>
         <img src={image1} alt="" />
        <div className="hearder__title">
            <h2>Dine Among the Flowers</h2>
            <p>Experience alfresco dining surrounded by blooming flowers and natural greenery.</p>
            </div>
       </SwiperSlide>

        <SwiperSlide>
         <img src={image2} alt="" />
        <div className="hearder__title">
            <h2>A Taste of Nature</h2>
            <p>Our menu blends rustic flavors with seasonal produce, celebrating nature on every plate.</p>
            </div>
       </SwiperSlide>
    </Swiper>
    
  )
}

export default Header