import React from 'react'
import BlogInfoImage from '../components/BlogInfoImage'

import MoreFromWriter from '../components/MoreFromWriter'
import NavBar from '../components/NavBar'
import RelatedBlogs from '../components/RelatedBlogs'
import WriterDetails from '../components/WriterDetails'


import CommentBox from '../components/comments/CommentBox'
import { useLocation } from 'react-router-dom'

const SingleBlogPage = () => {

    const location = useLocation()
    const blog = location.state?.blog
    // console.log(blog)
    return (
        <div>
            <NavBar />
            <div className='grid grid-cols-12 md:w-11/12 lg:w-3/5 mx-auto'>
                {/* blog content */}

                <div className='col-span-12'>
                    <BlogInfoImage info={blog} />
                    <div className='lg:grid grid-cols-12 md:gap-x-4 lg:gap-x-4 px-2 md:px-0'>

                        {/* blog Content  */}

                        <div className='md:col-span-8 p-3  bg-white shadow md:p-8 lg:p-12 rounded-2xl text-slate-700 my-12 tracking-wide leading-8 text-lg'>

                            <div className='mb-16' dangerouslySetInnerHTML={{ __html: blog?.content }} />

                            <hr />

                            <CommentBox />

                        </div>



                        <div className='col-span-4 mt-12 px-2 md:px-0'>
                            <WriterDetails />
                            <RelatedBlogs />
                        </div>

                        {/* more from same writer  */}
                        <div className='col-span-12 bg-gray-50 my-12 rounded-2xl shadow py-1'>
                            <MoreFromWriter />
                        </div>
                    </div>
                </div>



            </div>
        </div >
    )
}

export default SingleBlogPage
