import React from 'react'

const CommentInput = () => {
  return (
    <div className='flex gap-x-2 mb-4'>
        {/* image  */}
        <div className='w-10 h-10 rounded-full'>
            <img src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg" alt="" className='w-full h-full rounded-full object-cover' />
        </div>
        {/* comment input  */}
        <div className='flex-1'>
            <textarea type="text" placeholder='starts writing your thoughts...' className='w-full border outline-none border-slate-400 placeholder:text-slate-300 font-light  text-sm p-2 rounded-md ' />
        </div>
    </div>
  )
}

export default CommentInput