import React from 'react'
import {BiTime} from "react-icons/bi"

const BlogInfo = () => {
  return (
    <div className='flex items-center gap-x-2 '>
        <div className='w-10 h-10 rounded-full '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpWWQrAJpIR6Xy7FhzhCT00vzSmT7xw9S2Q&usqp=CAU" alt="" className='object-cover w-full h-full rounded-full'/>
        </div>
        <div className='flex flex-col gap-y-1'>
            <p className='text-sm text-slate-600 font-semibold'>Elizabeth</p>
            <div className='flex gap-x-2 md:flex-col lg:flex-row '>
                <span className='text-xs text-slate-500'>May 17, 2020</span>
                <div className='flex  items-center '>
                    <BiTime size=".75rem" color='gray'/>
                    <span className='text-xs text-slate-500'>1 min</span> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogInfo