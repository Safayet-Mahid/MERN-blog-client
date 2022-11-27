import { format } from 'date-fns/esm'
import React from 'react'
import {Link} from "react-router-dom"

const UserOwnBlog = ({blog}) => {
const date = new Date(blog?.updatedAt)
const title = (blog?.title).replace(/\s+/g, '-')
const author = (blog?.author).replace(/\s+/g, '-')
const postedDate =  format(date, "MMM dd, yyyy")
// console.log(blog)

  return (
    <Link to={`/${author}/${title}`} state={{blog}}>
    <div className='flex items-center gap-x-4 bg-white hover:shadow my-1 md:my-3 col-span-2 md:col-span-1 border-2 border-transparent hover:border-slate-300'>
        <div className='w-32 h-32'>
            <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_497254373_155996.jpg" className='w-full h-full object-cover' alt="" />
        </div>
        <div className='w-96 space-y-1 px-1 md:px-2'>
            <span className='text-xs text-slate-400'>{postedDate}</span>
            <p className='text-slate-700 font-semibold'> {blog?.title}</p>
        </div>
    </div>
  </Link>
  )
}

export default UserOwnBlog