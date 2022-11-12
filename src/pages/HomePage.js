import React from 'react'
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import PopularBlogSlider from '../components/PopularBlogSlider'


const HomePage = () => {
    return (
        <div className=''>
            <NavBar />
            <Hero />
            <PopularBlogSlider />
            <Feed />
            <Newsletter />
            <Footer />

        </div >
    )
}

export default HomePage