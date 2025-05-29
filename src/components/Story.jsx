import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import image from '../garden-images/n1.png'
import image1 from '../garden-images/n2.jpg'
import image2 from '../garden-images/n3.png'
import image3 from '../garden-images/n4.webp'
import image4 from '../garden-images/n5.jpg'
import image5 from '../garden-images/n6.webp'




const Story = () => {
  return (

    
    <div className="container story__container">

        <h2>Our Insta Story</h2>
        <div className="story__details">

            <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}>
       <SwiperSlide  >
         <article className='story__info'>
            <img src={image} alt="" />

            <div className="stories__details">
                <a href="http:facebook.com"><FaFacebookF /></a>
                <a href="http:twiter.com"><FaTwitter /></a>
                <a href="http:whatsap.com"><FaWhatsapp /></a>
            </div>
         </article>
       </SwiperSlide >

        <SwiperSlide >
            <article className='story__info'>
            <img src={image1} alt="" />

            <div className="stories__details">
                <a href="http:facebook.com"><FaFacebookF /></a>
                <a href="http:twiter.com"><FaTwitter /></a>
                <a href="http:whatsap.com"><FaWhatsapp /></a>
            </div>
         </article>
       </SwiperSlide>


        <SwiperSlide >
            <article className='story__info'>
            <img src={image2} alt="" />

            <div className="stories__details">
                <a href="http:facebook.com"><FaFacebookF /></a>
                <a href="http:twiter.com"><FaTwitter /></a>
                <a href="http:whatsap.com"><FaWhatsapp /></a>
            </div>
         </article>
       </SwiperSlide>

        <SwiperSlide >
            <article className='story__info'>
            <img src={image3} alt="" />

            <div className="stories__details">
                <a href="http:facebook.com"><FaFacebookF /></a>
                <a href="http:twiter.com"><FaTwitter /></a>
                <a href="http:whatsap.com"><FaWhatsapp /></a>
            </div>
         </article>
       </SwiperSlide>

       <SwiperSlide >
        <article className='story__info'>
            <img src={image4} alt="" />

            <div className="stories__details">
                <a href="http:facebook.com"><FaFacebookF /></a>
                <a href="http:twiter.com"><FaTwitter /></a>
                <a href="http:whatsap.com"><FaWhatsapp /></a>
            </div>

         </article>
       </SwiperSlide>

       <SwiperSlide >
        <article className='story__info'>
            <img src={image5} alt="" />
            <div className="stories__details">
                <a href="http:facebook.com"><FaFacebookF /></a>
                <a href="http:twiter.com"><FaTwitter /></a>
                <a href="http:whatsap.com"><FaWhatsapp /></a>
            </div>
         </article>
       </SwiperSlide>
    </Swiper>

    <div className="story__btn">
        <button className='btn primary'> <span><FaInstagram /></span>View on Instagram</button>
    </div>

        </div>
    </div>
  )
}

export default Story