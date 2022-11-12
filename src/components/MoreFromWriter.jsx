import React from 'react'
import AuthorSingleBlog from './AuthorSingleBlog'

const MoreFromWriter = () => {
  return (
    <>
    <div className='text-slate-700  text-center text-2xl my-8 border-b-4 rounded w-fit mx-auto border-blue-400 py-1 mt-8 '>More from from Andrew</div>


    <div className='flex flex-col lg:flex-row items-center md:w-5/6 mx-auto lg:w-full'>
        <AuthorSingleBlog />
        <AuthorSingleBlog />

    </div>

    </>
  )
}

export default MoreFromWriter