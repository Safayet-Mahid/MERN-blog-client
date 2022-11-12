import React from 'react'
import TypeASIngleBlog from './TypeASIngleBlog'
const FeedTypeA = () => {
  return (
    <div className='border-2 py-12 bg-slate-200 px-4'>
        <div className='md:w-11/12 lg:w-3/5 mx-auto'>
            {/* top */}
            <div className='flex justify-between items-center mt-4 mb-8'>
                <p className='text-slate-600 text-lg font-semibold'>Beauty</p>
                <button className='bg-blue-100 text-blue-400 shadow-md font-semibold text-sm py-2 px-4 round-lg'>View More</button>
            </div>
            {/* blogs */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {/* blog */}
                <TypeASIngleBlog/>
                <TypeASIngleBlog/>
                <TypeASIngleBlog/>
                <TypeASIngleBlog/>
                
                
            </div>
        </div>
    </div>
  )
}

export default FeedTypeA