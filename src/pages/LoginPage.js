import React from 'react'
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import BlogIcon from '../components/BlogIcon'


const LoginPage = () => {
    return (
        // main div 
        <div className='w-full h-[100vh]  flex justify-center items-center bg-[url("https://i.pinimg.com/originals/1e/de/33/1ede33b50e18d2468db870866fea47a6.jpg")] bg-no-repeat bg-cover'>
            {/* company logo */}
            <div className='w-11/12 lg:w-3/5 h-5/6 mx-auto border-2 border-gray-50 rounded-lg p-4 md:p-12  ' style={{
                background: "rgba( 255, 255, 255, 0.2 )",
                backdropFilter: "blur( 10px )",
                webkitBackdropFilter: "blur( 12px )",
                bordeRadius: "12px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )"
            }}>

                <div className='flex items-center gap-x-1 mb-6 md:mb-12'>
                    <BlogIcon />
                    <p className='text-slate-700 font-semibold text-xl'>MyBlog</p>
                </div>
                <div className='flex justify-center items-center shadow-lg rounded-2xl w-full md:w-4/6 lg:w-3/6 mx-auto     shadow-yellow-400  '>
                    {/* center left */}


                    {/* center right  */}
                    <div className='flex-1 bg-gradient-to-br from-cyan-300 to-yellow-400 shadow-md shadow-purple-200 px-1 md:px-4 py-12 flex flex-col  gap-y-2  items-center rounded-2xl border-2 w-4/5 mx-auto'>
                        <p className='text-slate-700 text-2xl font-extrabold'>Login</p>
                        <span className='text-slate-700 text-sm'>Sign in to your account</span>
                        <div className='flex items-center gap-x-1 rounded-full bg-gray-100  py-2 px-6 my-1 justify-between w-4/5'>
                            <input type="text" placeholder='Username / Email' className='bg-inherit' />
                            <AiOutlineUser />
                        </div>
                        <div className='flex items-center gap-x-1 rounded-full bg-gray-100  py-2 px-6 my-2 justify-between w-4/5'>
                            <input type="text" placeholder='Password' className='bg-inherit' />
                            <RiLockPasswordLine />
                        </div>
                        <div className='flex justify-between items-center w-4/5'>
                            <div className='flex items-center gap-x-1'>
                                <input type="checkbox" name="" id="" className='bg-red-500 border-2 border-black' />
                                <p className='text-slate-700 text-sm'>Remember me</p>
                            </div>

                            <div>
                                <a href="www.google.com" className='text-slate-700 text-sm'>Forget password?</a>
                            </div>
                        </div>
                        <button className='bg-gradient-to-tl from-cyan-500  to-yellow-400 shadow-md py-2 px-6 rounded-2xl font-bold text-white my-2'>SIGN IN</button>
                        <p className='text-slate-700 text-sm'>Dot't have an account? <a href="www.google.com" className='text-slate-700 font-bold'>Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
