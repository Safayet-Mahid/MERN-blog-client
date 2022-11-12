import React from 'react'
import AuthorBlogs from '../components/AuthorBlogs'
import AuthorSideNav from '../components/AuthorSideNav'
import NavBar from '../components/NavBar'


const AuthorPage = () => {


    return (
        <div className=''>
            <NavBar />
            <AuthorSideNav />
            <div className='relative  md:w-11/12 lg:w-3/5 mx-auto grid grid-cols-12 h-auto'>

                <AuthorBlogs />

                {/* <div className='col-span-1'></div> */}
            </div >
        </div>
    )
}

export default AuthorPage