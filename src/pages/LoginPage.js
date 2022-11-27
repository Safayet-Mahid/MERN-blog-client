import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import BlogIcon from '../components/BlogIcon'
// import { loginUser } from '../redux/features/user/userApiCalls'
import { loginUser } from '../redux/features/user/userActions'



const LoginPage = () => {


    const initialdata = {
        username: "",
        password: ""
    }
    const [userData, setUserData] = useState(initialdata)
    const { userInfo, error, loading, success } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        dispatch(loginUser(userData))
        // dispatch(loginUser(dispatch, userData))
        // const data = await axios.post("http://localhost:5000/api/auth/login", userData)
        // console.log(data)
        setUserData(initialdata)
    }

    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value })

    }
    // success && navigate(-1)
    useEffect(() => {
        console.log(userInfo);

    }, [userInfo])

    return (
        // main div 
        <div className='w-full min-h-screen  flex justify-center items-center bg-[url("https://i.pinimg.com/originals/1e/de/33/1ede33b50e18d2468db870866fea47a6.jpg")] bg-no-repeat bg-cover'>
            {/* company logo */}
            <div className='w-11/12 lg:w-3/5 h-5/6 mx-auto border-2 border-gray-50 rounded-lg p-4 md:p-12  ' style={{
                background: "rgba( 255, 255, 255, 0.2 )",
                backdropFilter: "blur( 10px )",
                WebkitBackdropFilter: "blur( 12px )",
                bordeRadius: "12px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )"
            }}>

                <div className='flex items-center gap-x-1 mb-6 md:mb-12'>
                    <BlogIcon />
                    <Link to="/" className='text-slate-700 font-semibold text-xl'>MyBlog</Link>
                </div>
                <div className='flex justify-center items-center shadow-lg rounded-2xl w-full md:w-4/6 lg:w-3/6 mx-auto     shadow-yellow-400  '>
                    {/* center left */}


                    {/* center right  */}
                    <div className='flex-1 bg-gradient-to-br from-cyan-300 to-yellow-400 shadow-md shadow-purple-200 px-1 md:px-4 py-12 flex flex-col  gap-y-2  items-center rounded-2xl border-2 w-4/5 mx-auto'>
                        <p className='text-slate-700 text-2xl font-extrabold'>Login</p>
                        <span className='text-slate-700 text-sm mb-2'>Sign in to your account</span>
                        <form onSubmit={e => handleSubmit(e)} className='w-full  flex flex-col justify-center items-center'>

                            <div className='flex items-center gap-x-1 rounded-full bg-gray-100  py-2 px-6 my-1 justify-between w-4/5'>
                                <input type="text" name="username" value={userData.username} placeholder='Username / Email' className='bg-inherit outline-none' onChange={handleChange} />
                                <AiOutlineUser />
                            </div>
                            <div className='flex items-center gap-x-1 rounded-full bg-gray-100  py-2 px-6 my-2 justify-between w-4/5'>
                                <input type="text" name="password" value={userData.password} placeholder='Password' className='bg-inherit outline-none' onChange={handleChange} />
                                <RiLockPasswordLine />
                            </div>
                            <div className='flex justify-between items-center w-4/5 mt-3'>
                                <div className='flex items-center gap-x-1'>
                                    <input type="checkbox" name="" id="" />
                                    <p className='text-slate-700 text-sm'>Remember me</p>
                                </div>

                                <div>
                                    <a href="www.google.com" className='text-slate-700 text-sm'>Forget password?</a>
                                </div>
                            </div>
                            <button type='submit' className='bg-gradient-to-tl from-cyan-500  to-yellow-400 shadow-md py-2 px-6 rounded-2xl font-bold text-white my-2'>SIGN IN</button>

                        </form>
                        <p className='text-slate-700 text-sm'>Dot't have an account? <a href="www.google.com" className='text-slate-700 font-bold'>Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
