import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-slate-200 flex justify-center items-center py-12 mx-auto px-4'>
        <div className='bg-white rounded-lg py-6 flex justify-center items-center md:w-11/12 lg:w-3/5 px-2'>
            <div className='flex flex-col justify-center items-center gap-y-1  py-6 px-2'>
                <h4 className='font-semibold text-lg text-slate-600'>Subscribe to our newsletter!</h4>
                <p className='text-slate-400 px-2 '>Lorem ipsum dolor, sit amet consectetur adipi sicing elit. Atque, deserunt!</p>
                <div className='flex mt-4 w-full'>
                    <input type="text" placeholder='Your email' className='flex-1 bg-slate-100 py-2 px-6'  />
                    <button className='bg-blue-500 text-white py-2 px-4 rounded '>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter