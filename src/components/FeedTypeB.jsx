import React from 'react'
import TypeBSingleBlog from './TypeBSingleBlog'

const FeedTypeB = () => {
  return (
    <div className='border-2 py-12  px-4'>
    <div className='md:w-11/12 lg:w-3/5 mx-auto'>
        {/* top */}
        <div className='flex justify-between items-center mt-4 mb-8'>
            <p className='text-slate-600 text-lg font-semibold'>Fashion and Style</p>
            <button className='bg-blue-100 text-blue-400 shadow-md font-semibold text-sm py-2 px-4 round-lg'>View More</button>
        </div>
        {/* blogs */}
        <div className=' flex gap-3 flex-col md:flex-row '>
            {/* blog */}
           <TypeBSingleBlog/>
           <TypeBSingleBlog/>
           <TypeBSingleBlog/>
            
            
        </div>
    </div>
</div>
  )
}

export default FeedTypeB