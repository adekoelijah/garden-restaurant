import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import image from '../garden-images/nn1.jpg'
import image1 from '../garden-images/nn2.jpg'
import image2 from '../garden-images/nn4.png'
import image3 from '../garden-images/p1.jpg'
import image4 from '../garden-images/p2.jpg'
import image5 from '../garden-images/p3.jpg'

const Partnership = () => {
  return (
    <div className="container partnership__container">
        <div className="dots"></div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}>
       <SwiperSlide className='slide'>
         <img src={image} alt="" />
       </SwiperSlide >

        <SwiperSlide className='slide'>
         <img src={image1} alt="" />
       </SwiperSlide>


        <SwiperSlide className='slide'>
         <img src={image2} alt="" />
       </SwiperSlide>

        <SwiperSlide className='slide'>
         <img src={image3} alt="" />
       </SwiperSlide>

       <SwiperSlide className='slide'>
         <img src={image4} alt="" />
       </SwiperSlide>

       <SwiperSlide className='slide'>
         <img src={image5} alt="" />
       </SwiperSlide>
    </Swiper>
    </div>
    
  )
}

export default Partnership