import React from 'react'
import TypeASIngleBlog from './TypeASIngleBlog'

const RelatedBlogs = () => {
  return (
    <div className='md:w-4/6  lg:w-full'>
    <p className='text-xl font-bold text-slate-600  mb-2 border-b-4 rounded w-fit border-blue-400 py-1 my-2 mx-2'>Related Blogs</p>
    <div className='w-full p-1 lg:p-2 space-y-3 h-full '>
        <TypeASIngleBlog />
        <TypeASIngleBlog />
        <TypeASIngleBlog />
        <TypeASIngleBlog />

        {/* just send four blog  */}
        <button className='px-4 py-2 border-2 border-blue-400 text-blue-400 justify-center mt-4 w-full'>See more</button>
    </div>
</div>
  )
}

export default RelatedBlogs