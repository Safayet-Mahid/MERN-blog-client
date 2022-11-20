import React from 'react'

import { FiHeart } from "react-icons/fi"
import { SiTheconversation } from "react-icons/si"
import Comments from './Comments'

const Comment = ({parent}) => {
  return (
    <div className=' ml-8 mt-6 border-l-2 border-gray-100 pl-2 py-2'>

        <div className=''>
            <div className='flex gap-x-2 '>
                <div className='w-10 h-10 rounded-full'>
                    <img src="https://interstrates.files.wordpress.com/2016/08/boy-cool-guy-handsome-favim-com-3507239.jpg" alt="" className='w-full h-full rounded-full object-cover' />
                </div>
                <div type="text" className='w-full border-[.5px]  border-slate-300  text-sm p-2 rounded-md ' >
                    <div className='flex gap-x-2 mb-2'>
                        <h4 className='text-slate-700 font-semibold text-md'>Shai Alomog</h4>
                        <span className='text-slate-400 font-semibold'>.</span>
                        <span className='text-slate-400 text-sm'>26 oct</span>

                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque dolorum molestias laboriosam blanditiis eveniet ratione perferendis explicabo ducimus! Impedit iste vitae molestiae minus dolores?</p>
                    {/* reactions and reply  */}
                    <div className='flex gap-x-6 items-center mt-5'>
                        <div className='flex gap-x-1 items-center'>
                            <FiHeart color='gray' />
                            <span className='text-sm text-slate-400'>3 likes</span>
                        </div>
                        <div className='flex gap-x-1 items-center'>
                            <SiTheconversation color='gray' />
                            <span className='text-sm text-slate-400'>Reply</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    <Comments comments={parent.children}/>
        
    
    </div>
  )
}

export default Comment