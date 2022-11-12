import React from 'react'

const BlogInfoImage = () => {
  return (
    <>
                        <div className='w-full h-["45vh"] mx-auto'>
                            <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/13075/6cbcba98-8301-4af7-864d-436559cd091c.jpg" className='w-full h-full object-cover' alt="" />
                        </div>
                        {/* info  */}
                        <div className='w-4/5  mx-auto bg-white flex flex-col justify-center items-center p-3 md:p-4 md:gap-y-2 -mt-28 relative  shadow'>
                            <span className='text-blue-300 text-xs tracking-wide uppercase'>Food and Lifestyle</span>
                            <p className='text-center text-xl md:text-3xl text-slate-700 font-semibold leading-8 md:leading-10 md:tracking-wide my-3 md:my-5 '>Far far away behind the Word Mountains far from Away </p>
                            <span className='text-sm text-slate-500 uppercase font-semibold'>Andrew Moore</span>
                            <div className='flex items-center gap-x-2'>
                                <span className='text-xs text-slate-400 '> 20 july, 2022</span>
                                <span className='text-xs text-slate-400 '> | </span>
                                <span className='text-xs text-slate-400 '>5 mins read</span>
                            </div>
                        </div>

                    </>
  )
}

export default BlogInfoImage