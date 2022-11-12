import React from 'react'
import TopicSingleBlog from './TopicSIngleBlog'


const TopicBlogList = () => {
  return (

    <div className='col-span-12 px-2 md:col-span-8'>
        {/* topic name */}
        <div className='m-4 my-6 md:my-12 px-1 rounded-full w-fit  text-slate-700 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>
            <h2 className='bg-white px-2 md:px-4 py-2 rounded-full text-2xl md:text-4xl'>Travel Space</h2>
        </div>

        {/* topic blogs */}
    <div className='my-12 '>

        <TopicSingleBlog/>
        <TopicSingleBlog/>
        <TopicSingleBlog/>
        <TopicSingleBlog/>
        <TopicSingleBlog/>
        <TopicSingleBlog/>
    
      
    </div>
        
    </div>
  )
}

export default TopicBlogList