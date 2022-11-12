import React from 'react'

const WriterDetails = () => {
  return (
    <div className='px-2  bg-white flex flex-col gap-y-3 border-t-[2.5rem] rounded-2xl border-slate-800 md:p-2 lg:p-4 mb-10 shadow md:w-4/6 mx-auto lg:w-full '>
    <div className='flex gap-x-1 -mt-8'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjb-Jsep9tAcYMGcwnDZl9MuXwtJ87LMh-KkFZT04M9XQRs6I0mWi4GJcUD7bTPEOAXRU&usqp=CAU" alt="" className='w-20 h-20 rounded-full' />
        <p className='text-slate-700 text-lg font-semibold self-end'>Andrew Moore</p>
    </div>
    <button className='text-gray-50  text-md lg:text-lg bg-blue-300 font-bold py-2 rounded'>Follow</button>

    <span className='text-sm text-slate-600 leading-6 tracking-wide'>I am a React Developer and currently perusing my Bachelor Degree in Computer Science. I also Participate in Competitive Coding on codeforces & Codechef.</span>

</div>
  )
}

export default WriterDetails