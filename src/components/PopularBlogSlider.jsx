import React from 'react'
import PopularBlog from '../components/PopularBlog'
import { AiTwotoneFire } from "react-icons/ai"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../src/swiper.css";

// import required modules

const PopularBlogSlider = () => {
  return (
    <div className='md:w-11/12 lg:w-3/5 mx-auto my-10 px-4'>
    <div className='flex items-center gap-x-2 my-8'>
        <h2 className='text-3xl text-slate-600 font-semibold'>Popular</h2>
        <AiTwotoneFire size="1.5rem" color='orange' />
    </div>
    <Swiper
        slidesPerView={"1.35"}
        spaceBetween={10}
        loop={true}


        pagination={{
            // clickable: true,

        }}
        // modules={[Pagination]}
        className="mySwiper"
    >
        <div className='flex gap-x-4 flex-col md:flex-row gap-y-4'>
            <SwiperSlide><PopularBlog /></SwiperSlide>
            <SwiperSlide><PopularBlog /></SwiperSlide>
            <SwiperSlide><PopularBlog /></SwiperSlide>


        </div>
    </Swiper >
</div>
  )
}

export default PopularBlogSlider