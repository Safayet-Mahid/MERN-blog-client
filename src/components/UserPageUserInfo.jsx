import React from 'react'
import Tags from './Tags'
import { FaEdit } from "react-icons/fa"
import { HiPlusSm } from "react-icons/hi"

const UserPageUserInfo = () => {
    const intrests = ["Travel", "Money", "Personal Finance", "Blogging", "Bitcoin", 'Web Dev', "React"]
  return (
    <div className='space-y-4 col-span-12 md:col-span-6 lg:col-span-7 px-2 md:px-4  flex flex-col'>
        <button className='flex gap-x-1 items-center py-2 px-4 lg:px-8 -mb-8 md:-mb-12 rounded-md border-2 border-orange-300 text-orange-400 self-end font-bold '> <FaEdit /> <span>Edit Info</span> </button>
        <div className='w-36 h-36'>
            <img src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
                className='w-full h-full rounded-full object-cover'
                alt="" />
        </div>
        <p className='text-2xl font-bold text-slate-700 uppercase'>Safayet Mahid</p>
        <p className='text-slate-500 leading-8 tracking-wide'>A things about you or two Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, blanditiis.</p>
        <div className='my-12 flex flex-col gap-y-1  '>
            <p className='text-xl text-slate-700 my-3'>Current Intrests</p>
            <div className='flex flex-wrap gap-1 md:gap-2 '>
                {
                    intrests.map(tag => <Tags tag={tag} />)}

                <button className='flex gap-x-1 items-center py-2 px-6 mx-2  justify-center rounded-md border-2 border-blue-500 text-blue-500 font-bold   self-center'><HiPlusSm size="1.25rem" /> <span>Add More</span></button>
            </div>
        </div>
    </div>
  )
}

export default UserPageUserInfo