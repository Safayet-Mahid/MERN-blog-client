import React from 'react'
import BlogIcon from './BlogIcon'
import {AiFillFacebook} from "react-icons/ai"
import {SiTwitter} from "react-icons/si"
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineDribbble} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='bg-white '>
    <div className='flex justify-center items-start py-8 px-2 lg:px-4 md:gap-x-1 lg:gap-x-4 md:w-11/12 lg:w-3/5 mx-auto  '>
        
        <div className='hidden md:block flex-[2] self-center'>
            <div className='flex items-center gap-x-1 mb-2'>
                <BlogIcon/> <p className='text-lg text-slate-700 font-bold'>MyBlog</p>
            </div>
                <span className='text-slate-500 text-xs'> © 2022. All Rights Reserved</span>
                <p className='text-slate-600 text-xs font-semibold'>Safayet Mahid</p>
        </div>

        <div  className='p-4 flex-1'>
            <p className='text-sm font-semibold mb-2'>Usefull Links</p>
            <ul className='space-y-1'>
                <li className='text-slate-500 text-sm cursor-pointer'>Food Blogs</li>
                <li className='text-slate-500 text-sm cursor-pointer'>Advertise with us</li>
                <li className='text-slate-500 text-sm cursor-pointer'>Our Authors</li>
                <li className='text-slate-500 text-sm cursor-pointer'>Get In touch</li>
            </ul>
        </div>

        <div className='p-4 flex-1'>
            <p className='text-sm font-semibold mb-2'>Categories</p>

            <ul className='space-y-1'>
                <li className='text-slate-500 text-sm cursor-pointer'>Beauty</li>
                <li className='text-slate-500 text-sm  cursor-pointer'>Fashion and style</li>
                <li className='text-slate-500 text-sm cursor-pointer'>Food and Wellness</li>
                <li className='text-slate-500 text-sm cursor-pointer'>Lifestyle</li>
            </ul>
        </div>

        <div className='p-4 flex-1 '>
            <p className='text-sm font-semibold mb-2'>Social Media</p>
             <ul className='space-y-1'>
                <li className='flex items-center gap-x-1 cursor-pointer'>
                   <AiFillFacebook color='#3b5998'/> <p className='text-slate-400 text-xs' >facebook</p>
                </li>
                <li className='flex items-center gap-x-1 cursor-pointer'>
                   <SiTwitter color='#1d9bf0'/> <p className='text-slate-400 text-xs'>Twitter</p>
                </li>
                <li className='flex items-center gap-x-1 cursor-pointer'>
                    <AiFillLinkedin color='#0e76a8'/> <p className='text-slate-400 text-xs'>LinkedIn</p>
                </li>
                <li className='flex items-center gap-x-1 cursor-pointer'>
                   <AiOutlineDribbble color='#ea4c89'/> <p className='text-slate-400 text-xs'>Dribble</p>
                </li>
             </ul>
        </div>
    </div>

    <div className=' md:hidden  text-center py-4 bg-slate-900'>
            <div className='flex items-center gap-x-1 mb-2 justify-center'>
                <BlogIcon/> <p className='text-lg  font-bold text-slate-300'>MyBlog</p>
            </div>
                <span className='text-slate-500 text-xs'> © 2022. All Rights Reserved</span>
                <p className='text-slate-300 text-xs font-semibold '>Safayet Mahid</p>
    </div>
    </div>
  )
}

export default Footer