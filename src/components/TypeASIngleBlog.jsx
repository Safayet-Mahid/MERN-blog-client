import React from 'react'
import BlogInfo from './BlogInfo'


const TypeASIngleBlog = () => {
  return (
    <div className='flex shadow-sm ' >
                    {/* left img  */}
                    <div className=' md:flex-1 lg:flex-[.75] '>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWxNNQgGc_gbTO1mfEFSH5Moe5LRgSsIBIVEqtfnKCI4RUMiGweQmUrd5Lk2lLZFVKT8&usqp=CAU" alt="" className='w-full h-full object-cover rounded-l-lg' />
                    </div>
                    {/* right body  */}
                    <div className=' space-y-3 md:flex-1 lg:flex-[1.25] bg-white p-4 lg:p-4 flex flex-col justify-center gap-y-2'>
                        <p className='text-slate-600 font-bold text-md '>Natural Spa - Where you feel unique and special </p>
                        <BlogInfo/>
                    </div>

                </div>
  )
}

export default TypeASIngleBlog