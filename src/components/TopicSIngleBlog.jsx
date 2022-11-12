import React from 'react'
import {MdDateRange} from "react-icons/md"
import {AiOutlineFolder} from "react-icons/ai"
import {MdOutlineComment} from "react-icons/md"

const TopicSingleBlog = () => {
  return (
    <div className='flex flex-col gap-y-2 md:flex-row md:gap-x-3 lg:gap-x-6 mb-6 md:mb-12 hover:bg-slate-200 hover:shadow-md py-4 px-2'>
    {/* img  */}
    <div className='rounded-md md:self-start'>
        <img src="https://www.theinertia.com/wp-content/uploads/2020/05/Campervans-670x447.jpg" className='h-36 w-36 rounded-lg ' alt="" />
    </div>
    <div className='flex flex-col gap-y-4 flex-[2]'>
        <h4 className='text-slate-700 text-2xl font-semibold leading-8'>Great Thing Never Came from Comfort Zone</h4>
        <div className='flex gap-x-3 items-center flex-wrap gap-y-2 '>
            <div className='flex gap-x-1 '>
                <MdDateRange color='gray'/>
                <span className='text-slate-400 text-sm'>June 28, 2019</span>
            </div>
            <div className='flex gap-x-1 items-center'>
                <AiOutlineFolder />
                <span className='text-slate-700 text-sm'>Travel</span>
            </div>
            <div className='flex gap-x-1 items-center'>
                <MdOutlineComment color='gray'/>
                <span className='text-slate-400 text-sm'>5 Comments</span>
            </div>
        </div>
        <p className='text-slate-600 leading-6'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <button className='text-left text-blue-500 cursor-pointer font-bold'>Read More..</button>
    </div>
 
</div>
  )
}

export default TopicSingleBlog