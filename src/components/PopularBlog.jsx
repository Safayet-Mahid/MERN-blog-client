import React from 'react'
import {BiTimeFive} from "react-icons/bi"

const PopularBlog = () => {
  return (
    <div className='flex  shadow-md rounded-lg gap-x-4 bg-white  '>
      <div className='flex-[.75] h-60'>
        <img src="https://png.pngtree.com/element_origin_min_pic/17/08/08/0db93017d587e2166d8d84bdfdd13998.jpg" className='object-cover rounded-l-lg  w-full h-full' alt="" />
      </div>
      <div className='flex-1 flex flex-col gap-y-2 text-left justify-center py-4 '>
        <div className='pr-1'>
        <p className='px-3 py-1 bg-orange-100 text-orange-600 rounded-[1.5rem] font-smeibold text-xs w-fit '>Sports</p>
        <h4 className='md:text-md text-sm font-semibold '>Playing football with your feet in one thing </h4>
        <p className=' text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati quisquam pariatur fuga necessitatibus quia.</p>
        </div>


        <div className='flex gap-x-4 items-center '>
          <div className='border-2 w-10 h-10 rounded-full'>
            <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="" className='object-cover'/>
          </div>
          <div className='mt-2 text-right md:text-left'>
            <h4 className='text-sm'>Jhon Smith</h4>
            <div className='flex flex-col items-end md:flex-row gap-x-2 '>
              <p className='text-xs text-gray-500'>july 15,2022</p>
              <div className='flex items-center text-xs'>
                <BiTimeFive/>
                <span >1min</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PopularBlog