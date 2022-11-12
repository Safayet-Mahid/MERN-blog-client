import React from 'react'
import Tags from '../components/Tags'
import { FiSend } from "react-icons/fi"

const AuthorSideNav = () => {
    const tags = ["Travel", "Fitness", "Abroad", "Economics", "Bitcoins", "Tesla", "SpaceX", "BMW"]

  return (
    <div className='lg:w-96 md:w-72 md:h-screen md:fixed md:left-10 lg:left-96 top-10  px-2 py-4 flex justify-center flex-col  gap-y-6 md:gap-y-12 ' >
    <div className='w-32 h-32 rounded-full  self-center md:self-start'>
        <img src="https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg" alt="" className='rounded-full' />
    </div>
    <div className='md:border-r-4 md:border-blue-400 text-center md:text-left'>
        <div className='space-y-3 md:space-y-6  '>
            <h2 className='text-4xl md:text-5xl lg:text-7xl bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsPMobC1b4dqpakJ7-iNpSE2ZbESh3Zv-xqNYHEiH2C4dAErGVKKPmts7gu_xO46u8jk&usqp=CAU")] bg-clip-text font-extrabold text-transparent '
            >
                Andrew Moore
            </h2>

            <p className=' text-slate-600 font-semibold'>Talks about Travel, fitness and more...</p>

            <button className='py-2 px-6  rounded-md bg-blue-200 text-blue-500 font-semibold'>Follow</button>

        </div>
        <div className=' space-y-2 mt-8 '>
            <span className='text-sm text-slate-700 font-semibold'>Send a personal email</span>
            <div className='flex  border-2 border-blue-300 w-2/3 mx-auto md:mx-0 md:w-fit'>

                <input type="text" placeholder='Enter your text here' className=' px-1 lg:px-3  outline-none  py-4 bg-inherit' />
                <button className='flex gap-x-1 items-center md:px-2 lg:px-4 text-blue-400 font-semibold'>
                    <FiSend color='skyblue' />
                    <span className='md:hidden lg:block'>Send</span>
                </button>
            </div>
        </div>
        <div  className='my-12'>
            <p className='text-xl text-slate-700 my-4'>Tags</p>
            <div className='flex flex-wrap gap-1 md:gap-2 '>
                {
                    tags.map(tag => <Tags tag={tag} />)}

            </div>
        </div>
    </div>
</div>
  )
}

export default AuthorSideNav