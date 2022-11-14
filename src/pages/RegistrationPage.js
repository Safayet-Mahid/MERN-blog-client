import React from 'react'
import { BsGoogle } from "react-icons/bs"
import { ImFacebook } from "react-icons/im"
import { SiGithub } from "react-icons/si"

const RegistrationPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-[url("https://media.istockphoto.com/id/966414896/photo/purple-painting-background-or-texture.jpg?s=612x612&w=0&k=20&c=ECAphSvAx3WeVJJMYB6hWy2gVnBbULe27n9KUWGtrps=")] bg-no-repeat bg-cover'>
            <div className='flex flex-col gap-y-2 items-center mx-2  md:w-4/6 lg:w-2/6 py-6 border-4 border-gray-100 rounded-2xl shadow-2xl' style={{
                background: "rgba( 255, 255, 255, 0.15 )",
                backdropFilter: "blur( 6px )",
                webkitBackdropFilter: "blur( 6px )",
                bordeRadius: "12px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )"
            }}>
                <p className='text-2xl text-white font-bold my-5'>Registration</p>

                <input type="text" placeholder='Name' className='py-2 px-6 rounded-full mb-1 shadow border-2 border-transparent hover:border-white w-5/6 md:w-4/6 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-transparent text-white placeholder:text-white placeholder:font-bold outline-none' />
                <input type="text" placeholder='Email' className='py-2 px-6 rounded-full mb-1 shadow border-2 border-transparent hover:border-white w-5/6 md:w-4/6  backdrop-filter backdrop-blur-lg bg-opacity-30 bg-transparent text-white placeholder:text-white placeholder:font-bold outline-none' />
                <input type="text" placeholder='Phone' className='py-2 px-6 rounded-full mb-1 shadow border-2 border-transparent hover:border-white w-5/6 md:w-4/6  backdrop-filter backdrop-blur-lg bg-opacity-30 bg-transparent text-white placeholder:text-white placeholder:font-bold outline-none' />
                <input type="text" placeholder='City' className='py-2 px-6 rounded-full mb-1 shadow border-2 border-transparent hover:border-white w-5/6 md:w-4/6  backdrop-filter backdrop-blur-lg bg-opacity-30 bg-transparent text-white placeholder:text-white placeholder:font-bold outline-none' />
                <input type="text" placeholder='Password ' className='py-2 px-6 rounded-full mb-1 shadow border-2 border-transparent hover:border-white w-5/6 md:w-4/6 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-transparent text-white placeholder:text-white placeholder:font-bold outline-none' />
                <input type="text" placeholder='Type again your Password' className='py-2 px-6 rounded-full mb-1 shadow border-2 border-transparent hover:border-white w-5/6 md:w-4/6  backdrop-filter backdrop-blur-lg bg-opacity-30 bg-transparent text-white placeholder:text-white placeholder:font-bold outline-none' />
                <button className='py-2 px-6 border-2 border-white rounded-full text-white font-semibold my-4'>Sign Up</button>
                <span className='text-xs w-4/5 text-center mt-6 text-white'>By clicking <span className='font-bold text-md'>Signup</span>, you acknowledge that you have read our <a href="www.google.com" className='font-bold text-md'>Privacy Policy </a> and agree to the <a href="www.google.com" className='font-bold text-md'>Terms of service</a></span>

                <div class=" border-bottom lg:mt-4 mb-4"></div>
                <ul class="my-4 items-center flex justify-around w-4/6 md:w-3/6 ">
                    <li className='p-4 border-2 border-gray-100 text-gray-100' ><a href="#"><ImFacebook /></a></li>
                    <li className='p-4 border-2 border-gray-100 text-gray-100'><a href="#"><BsGoogle /></a></li>
                    <li className='p-4 border-2 border-gray-100 text-gray-100'><a href="#"><SiGithub /></a></li>
                </ul>


            </div>
        </div>
    )
}

export default RegistrationPage