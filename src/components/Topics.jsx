import React from 'react'
import {GiBathtub} from "react-icons/gi"
import {ImWoman} from "react-icons/im"
import {ImSpoonKnife} from "react-icons/im"
import {FaChartPie} from "react-icons/fa"

const Topics = () => {

    // const topics=["Beauty","Fashion and style","Food and wellness","Lifestyle"]
  return (
  
    <div className='mt-5 md:w-11/12 lg:w-3/5 mx-auto  flex  gap-y-3 md:gap-y-0 md:justify-between flex-wrap md:flex-nowrap '>
        <div className=' w-40 md:w-40 lg:w-56 h-20 bg-white rounded-md shadow-sm flex  flex-col items-center justify-center gap-y-1 px-4  mx-auto md:mx-0  '>
            <GiBathtub color='lightblue' size="1.75rem"/>
            <p className='font-semibold text-center  text-sm text-gray-500'>Beauty</p>
        </div>
        <div className=' w-40 md:w-40 lg:w-56 h-20 bg-white rounded-md shadow-sm flex  flex-col items-center justify-center gap-y-1 px-4 mx-auto md:mx-0'>
            <ImWoman color='lightblue' size="1.75rem"/>
            <p className='font-semibold text-center  text-sm text-gray-500'>fashion and style</p>
        </div>
        <div className=' w-40 md:w-40 lg:w-56 h-20 bg-white rounded-md shadow-sm flex  flex-col items-center justify-center gap-y-1 px-4 mx-auto md:mx-0'>
            <ImSpoonKnife color='lightblue' size="1.75rem"/>
            <p className='font-semibold text-center  text-sm text-gray-500'>Food and wellness</p>
        </div>
        <div className=' w-40 md:w-40 lg:w-56 h-20 bg-white rounded-md shadow-sm flex  flex-col items-center justify-center gap-y-1 px-4 mx-auto md:mx-0'>
            <FaChartPie color='lightblue' size="1.75rem"/>
            <p className='font-semibold text-center  text-sm text-gray-500'>Lifestyle</p>
        </div>
    </div>

  )
}

export default Topics