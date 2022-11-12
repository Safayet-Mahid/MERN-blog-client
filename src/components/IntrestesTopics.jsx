import React from 'react'
import { GiBathtub } from "react-icons/gi"
import { GrMoney } from "react-icons/gr"
import { IoIosFitness } from "react-icons/io"
import { RiMentalHealthFill } from "react-icons/ri"
import { FaLuggageCart } from "react-icons/fa"

const IntrestesTopics = () => {
  return (
    <div className='h-screen md:fixed -right-28 lg:right-80 top-52 w-80 px-4 md:px-0   md:w-96 '>
    <h4 className='text-xl text-slate-600 mb-6 font-bold'>Topics</h4>
    <div className='flex flex-col gap-y-2'>
        {/* beauty  */}
        <div className='flex  md:w-3/5 lg:w-4/5 shadow-md gap-y-4'>
            <div className='flex justify-center items-center p-4 rounded-l-lg bg-slate-100'>
                <GiBathtub color='gray' size="1.4rem" />
            </div>
            <div className='flex-1'>
                <p className='bg-white px-3 py-4 rounded-r-lg text-slate-600 font-semibold tracking-widest '>Beauty</p>
            </div>
        </div>
        {/* Mental Health  */}
        <div className='flex md:w-3/5 lg:w-4/5 shadow-md gap-y-4'>
            <div className='flex justify-center items-center p-4 rounded-l-lg bg-slate-100'>
                <RiMentalHealthFill color='gray' size="1.4rem" />
            </div>
            <div className='flex-1'>
                <p className='bg-white px-3 py-4 rounded-r-lg text-slate-600 font-semibold tracking-widest '>Mental Health</p>
            </div>
        </div>
        {/* Money  */}
        <div className='flex md:w-3/5 lg:w-4/5 shadow-md gap-y-4'>
            <div className='flex justify-center items-center p-4 rounded-l-lg bg-slate-100'>
                <GrMoney color='gray' size="1.4rem" />
            </div>
            <div className='flex-1'>
                <p className='bg-white px-3 py-4 rounded-r-lg text-slate-600 font-semibold tracking-widest '>Money</p>
            </div>
        </div>
        {/* Fitness  */}
        <div className='flex md:w-3/5 lg:w-4/5 shadow-md gap-y-4'>
            <div className='flex justify-center items-center p-4 rounded-l-lg bg-slate-100'>
                <IoIosFitness color='gray' size="1.4rem" />
            </div>
            <div className='flex-1'>
                <p className='bg-white px-3 py-4 rounded-r-lg text-slate-600 font-semibold tracking-widest '>Fitness</p>
            </div>
        </div>
        {/* Travel  */}
        <div className='flex md:w-3/5 lg:w-4/5 shadow-md gap-y-4'>
            <div className='flex justify-center items-center p-4 rounded-l-lg bg-slate-100'>
                <FaLuggageCart color='gray' size="1.4rem" />
            </div>
            <div className='flex-1'>
                <p className='bg-white px-3 py-4 rounded-r-lg text-slate-600 font-semibold tracking-widest '>Travel</p>
            </div>
        </div>
    </div>

</div>
  )
}

export default IntrestesTopics