import React from 'react'
import BlogInfo from './BlogInfo'

const TypeBSingleBlog = () => {
  return (
    <div className='shadow-sm flex flex-col rounded-lg  h-80  '>
    {/* image  */}
    <div className='rounded-t-lg  h-1/2 '>
        <img src="https://media.wrangler.com/i/wrangler/6up-me-jackets-aug-2022" alt="" className='rounded-t-lg h-full w-full  object-cover' />
    </div>
    {/* body  */}
    <div className='flex-1 bg-white p-3 h-1/2 rounded-b-lg '>
        <p className='text-slate-600 text-sm font-semibold my-2'>An easy Guide to buy Denim & My Favourite styles</p>
        <BlogInfo/>
    </div>
</div>
  )
}

export default TypeBSingleBlog