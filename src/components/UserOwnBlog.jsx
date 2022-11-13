import React from 'react'

const UserOwnBlog = () => {
  return (
    <div className='flex items-center gap-x-4 bg-white hover:shadow my-1 md:my-3 col-span-2 md:col-span-1'>
        <div className='w-32 h-32'>
            <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_497254373_155996.jpg" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='w-96 space-y-1 px-1 md:px-2'>
            <span className='text-xs text-slate-400'>July 12, 2022</span>
            <p className='text-slate-700 font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quasi.</p>
        </div>
    </div>
  )
}

export default UserOwnBlog