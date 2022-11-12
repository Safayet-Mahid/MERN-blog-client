import React from 'react'
import FeaturedBlogSlider from './FeaturedBlogSlider'
import Topics from './Topics'

const Hero = () => {
  return (
    <div className=' bg-slate-100 py-8'>
        <Topics/>
        <FeaturedBlogSlider/>
    </div>
  )
}

export default Hero