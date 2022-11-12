import React from 'react'
import FeaturedBlog from './FeaturedBlog'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../src/swiper.css";

// import required modules
import { Pagination } from "swiper";

const FeaturedBlogSlider = () => {
  return (
    <div className='md:w-11/12 lg:w-3/5 mx-auto my-12'>
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        
        }}
        modules={[Pagination]}
        
        className="mySwiper"
      >
         <SwiperSlide>
            <FeaturedBlog/>
         </SwiperSlide>
         <SwiperSlide>
            <FeaturedBlog/>
         </SwiperSlide>
         <SwiperSlide>
            <FeaturedBlog/>
         </SwiperSlide>
      </Swiper>
        
    </div>
  )
}

export default FeaturedBlogSlider